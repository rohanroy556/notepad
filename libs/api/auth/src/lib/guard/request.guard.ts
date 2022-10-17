import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { StrategyType } from '@notepad-helper/models';

@Injectable()
export class RequestGuard extends AuthGuard(StrategyType.REQUEST) {}
