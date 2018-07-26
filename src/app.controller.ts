import { Get, Controller, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  root(): string {
    return this.appService.root();
  }

  @Get('totp')
  async getTotp(@Query('secret') secret: string): Promise<string> {
    return await this.appService.generateTotp(secret);
  }
}
