import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { StrategyType } from '@notepad-helper/models';

@Injectable()
export class LoginGuard extends AuthGuard(StrategyType.LOGIN) {}
