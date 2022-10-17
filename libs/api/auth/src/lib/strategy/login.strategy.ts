import { Injectable, MethodNotAllowedException, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { AccessorType, ClientCredentials, StrategyType, TokenData, UserCredentials } from '@notepad-helper/models';
import { Strategy } from 'passport-custom';
import { AuthService } from '../service';

@Injectable()
export class LoginStrategy extends PassportStrategy(Strategy, StrategyType.LOGIN) {
	constructor(private readonly _authService: AuthService) {
		super();
	}

	async validate(request: Request): Promise<TokenData> {
		const headers = request?.headers;
		const clientToken = headers?.get('Authorization')?.replace('Bearer ', '') ?? '';
		if (request?.method !== 'POST') {
			throw new MethodNotAllowedException();
		}
		const body: UserCredentials | ClientCredentials = (await request?.json()) ?? {};
		const token: string | null = body.type === AccessorType.CLIENT
			? await this._authService.loginClient({ _id: body._id, secret: body.secret, type: body.type })
			: await this._authService.loginUser({ email: body.email, password: body.password, type: body.type }, clientToken);

		if (!token) {
			throw new UnauthorizedException();
		}
		return { token, type: body.type };
	}
}
