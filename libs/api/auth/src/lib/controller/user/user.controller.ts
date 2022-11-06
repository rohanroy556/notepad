import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { TokenData, User } from '@notepad-helper/models';
import { LoginGuard, RequestGuard } from '../../guard';

@Controller('user')
export class UserController {
	@UseGuards(LoginGuard)
	@Post('login')
	async login(@Request() request: Request & { user: TokenData; }): Promise<TokenData> {
		return request.user;
	}

	@UseGuards(RequestGuard)
	@Get('validate')
	async validate(@Request() request: Request & { user: User; }): Promise<User> {
		return request.user;
	}
}
