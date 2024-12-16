import { Controller, Get, Query } from '@nestjs/common';
import { CoordinatorService } from './coordinator/coordinator.service';

@Controller()
export class AppController {
  constructor(private readonly coordinatorService: CoordinatorService) {}

  @Get('invoke')
  async handleQuery(@Query('query') query: string): Promise<string> {
    return this.coordinatorService.handleUserQuery(query);
  }
}
