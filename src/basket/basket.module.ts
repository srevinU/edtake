import { Module } from '@nestjs/common';
import { BasketService } from './basket.service';

@Module({
  providers: [BasketService],
  exports: [BasketService],
})
export class BasketModule {}
