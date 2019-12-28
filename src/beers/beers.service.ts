import { Injectable } from '@nestjs/common';
import { CreateBeerDto } from './create-beer.dto';

@Injectable()
export class BeersService {
	createBeer() {
		return 'Create beer action'
	}
	getBeers() {
		return [
			{
				id: 1,
				name: 'IPA'
			},
			{
				id: 2,
				name: 'APA'
			}
		]
	}
}
