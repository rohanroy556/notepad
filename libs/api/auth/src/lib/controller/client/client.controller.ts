import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { Client, TokenData } from '@notepad-helper/models';
import { LoginGuard, RequestGuard } from '../../guard';

@Controller('client')
export class ClientController {
	@UseGuards(LoginGuard)
	@Post('login')
	async login(@Request() request: Request & { user: TokenData; }): Promise<TokenData> {
		return request.user;
	}

	@UseGuards(RequestGuard)
	@Get('validate')
	async validate(@Request() request: Request & { user: Client; }): Promise<Client> {
		return request.user;
	}
}
