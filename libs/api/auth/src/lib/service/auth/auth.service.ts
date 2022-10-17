import { ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { ClientService, UserService } from '@notepad-api/database';
import { AccessorType, Client, ClientCredentials, ClientTokenPayload, User, UserCredentials, UserTokenPayload } from '@notepad-helper/models';

@Injectable()
export class AuthService {
	private readonly _masterJwtSecret = this._configService.get('MASTER_JWT_SECRET');

	constructor(
		private readonly _configService: ConfigService,
		private readonly _clientService: ClientService,
		private readonly _jwtService: JwtService,
		private readonly _userService: UserService,
	) {}

	async validateClientToken(token: string): Promise<Client | null> {
		try {
			const payload = this._jwtService.verify<ClientTokenPayload>(token, { secret: this._masterJwtSecret });
			const client = await this._clientService.findByName(payload?.name);
			if (!client) {
				throw new ForbiddenException();
			}
			return client;
		} catch (error) {
			console.error(error);
			return null;
		}
	}

	async loginClient(clientCredentials: ClientCredentials): Promise<string | null> {
		try {
			const client = await this._clientService.findById(clientCredentials._id);
			if (!client || client.secret !== clientCredentials.secret) {
				throw new UnauthorizedException();
			}

			return this._jwtService.sign(
				{ name: client.name },
				{ secret: this._masterJwtSecret, expiresIn: 31536000 },
			);
		} catch (error) {
			console.error(error);
			return null;
		}
	}

	async validateUserToken(token: string): Promise<User | null> {
		try {
			const decodedPayload = this._jwtService.decode(token, { complete: true, json: true }) as UserTokenPayload;
			const client = await this._clientService.findByName(decodedPayload?.client);
			if (!client) {
				throw new ForbiddenException();
			}

			const payload = this._jwtService.verify<UserTokenPayload>(token, { secret: client.jwtSecret });
			const user = await this._userService.findByEmail(payload?.email);
			if (!user) {
				throw new ForbiddenException();
			}

			return user;
		} catch (error) {
			console.error(error);
			return null;
		}
	}

	async loginUser(userCredentials: UserCredentials, clientToken: string): Promise<string | null> {
		try {
			const client = await this.validateClientToken(clientToken);
			if (!client) {
				throw new ForbiddenException();
			}

			const user = await this._userService.findById(userCredentials.email);
			if (!user || !user.validatePassword(userCredentials.password)) {
				throw new UnauthorizedException();
			}

			return this._jwtService.sign(
				{ email: user.email, role: user.role, client: client.name },
				{ secret: this._masterJwtSecret, expiresIn: 31536000 },
			);
		} catch (error) {
			console.error(error);
			return null;
		}
	}

	getTokenType(token: string): AccessorType {
		try {
			const decodedPayload = this._jwtService.decode(token, { complete: true, json: true }) as UserTokenPayload | ClientTokenPayload;
			return decodedPayload?.type ?? AccessorType.USER;
		} catch(error) {
			return AccessorType.USER;
		}
	}
}
