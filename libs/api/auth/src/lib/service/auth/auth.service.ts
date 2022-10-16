import { ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { ClientService, UserService } from '@notepad-api/database';
import { ClientCredentials, ClientTokenPayload } from '@notepad-helper/models';

@Injectable()
export class AuthService {
	private readonly _masterJwtSecret = this._configService.get('MASTER_JWT_SECRET');

	constructor(
		private readonly _configService: ConfigService,
		private readonly _clientService: ClientService,
		private readonly _jwtService: JwtService,
		private readonly _userService: UserService,
	) {}

	async validateClientToken(token: string): Promise<ClientTokenPayload> {
		try {
			const payload = this._jwtService.verify<ClientTokenPayload>(token, { secret: this._masterJwtSecret });
			const client = await this._clientService.findByName(payload?.name);
			if (!client) {
				throw new ForbiddenException();
			}
			return payload;
		} catch (error) {
			console.error(error);
			throw new ForbiddenException();
		}
	}

	async loginClient(clientCredentials: ClientCredentials) {
		try {
			const client = await this._clientService.findById(clientCredentials._id);
			if (!client || client.secret !== clientCredentials.secret) {
				throw new UnauthorizedException();
			}

			return this._jwtService.sign({ name: client.name }, { secret: this._masterJwtSecret });
		} catch (error) {
			console.error(error);
			throw new UnauthorizedException();
		}
	}
}
