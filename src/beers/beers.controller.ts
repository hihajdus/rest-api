import { Controller, Get } from '@nestjs/common';
import { BeersService } from './beers.service';

@Controller('beers')
export class BeersController {
	constructor (private beersServices: BeersService) {}

	@Get()
	getBeers() {
		return this.beersServices.getBeers();
	}
}
