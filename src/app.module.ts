import { Module } from '@nestjs/common';
import { AppController, StoreController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, StoreController],
  providers: [AppService],
})
export class AppModule {}
