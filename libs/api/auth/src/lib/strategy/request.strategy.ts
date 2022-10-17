import { ForbiddenException, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { AccessorType, Client, StrategyType, User } from '@notepad-helper/models';
import { Strategy } from 'passport-custom';
import { AuthService } from '../service';

@Injectable()
export class RequestStrategy extends PassportStrategy(Strategy, StrategyType.REQUEST) {
	constructor(private readonly _authService: AuthService) {
		super();
	}

	async validate(request: Request): Promise<Client | User> {
		const headers = request?.headers;
		const token = headers?.get('Authorization')?.replace('Bearer ', '') ?? '';
		if (!token) {
			throw new ForbiddenException();
		}

		const tokenType = this._authService.getTokenType(token);
		switch (tokenType) {
			case AccessorType.CLIENT: {
				const client = await this._authService.validateClientToken(token);
				if (!client) {
					throw new ForbiddenException();
				}
				return client;
			}
			case AccessorType.USER:
			default: {
				const user = await this._authService.validateUserToken(token);
				if (!user) {
					throw new ForbiddenException();
				}
				return user;
			}
		}
	}
}
