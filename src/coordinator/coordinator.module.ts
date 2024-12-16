import { Module } from '@nestjs/common';
import { CoordinatorService } from './coordinator.service';
import { BasketService } from 'src/basket/basket.service';
import { TavilyService } from 'src/tavily/tavily.service';

@Module({
  providers: [CoordinatorService, TavilyService, BasketService],
  exports: [CoordinatorService],
})
export class CoordinatorModule {}
