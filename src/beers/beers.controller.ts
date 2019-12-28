import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { BeersService } from './beers.service';
import { CreateBeerDto } from './create-beer.dto';
import { UpdateBeerDto } from './update-beer.dto';

@Controller('beers')
export class BeersController {
	constructor (private beersServices: BeersService) {}

	@Get()
	getBeers() {
		return this.beersServices.getBeers();
	}
	@Post()
	async createBeer(@Body() createBeerDto: CreateBeerDto) {
		console.log('this action add new beer');
		return this.beersServices.createBeer();
	}
	@Get(':id')
	getBeer(@Param('id') id): string {
		return `The number of beer is #${id}`;
	}
	@Put(':id')
	updateBeer(@Param('id') id: string, @Body() updateBeerDto: UpdateBeerDto) {
		return `This action update a #${id} beer`;
	}
	@Delete(':id')
	deleteBeer(@Param('id') id: string) {
		return `This action removes a #${id} beer`;
	}

}
