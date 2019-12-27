import { Injectable } from '@nestjs/common';

@Injectable()
export class BeersService {
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
