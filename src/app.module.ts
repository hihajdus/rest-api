import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BeersService } from './beers/beers.service';
import { BeersController } from './beers/beers.controller';

@Module({
  imports: [],
  controllers: [AppController, BeersController],
  providers: [AppService, BeersService],
})
export class AppModule {}
