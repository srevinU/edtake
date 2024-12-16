import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BasketModule } from './basket/basket.module';
import { TavilyModule } from './tavily/tavily.module';
import { CoordinatorModule } from './coordinator/coordinator.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    BasketModule,
    TavilyModule,
    CoordinatorModule,
    ConfigModule.forRoot({ envFilePath: '.env' }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
