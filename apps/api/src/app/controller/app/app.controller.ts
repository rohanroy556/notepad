import { Controller, Get } from '@nestjs/common';
import { Message } from '@notepad/api-interfaces';
import { AppService } from '../../service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }
}
