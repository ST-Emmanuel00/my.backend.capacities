import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from './common/types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("health")
  health(): Response {
    return this.appService.health();
  }
}
