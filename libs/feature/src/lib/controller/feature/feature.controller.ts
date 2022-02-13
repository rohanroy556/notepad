import { Controller, Get } from '@nestjs/common';

@Controller()
export class FeatureController {

	@Get('')
	getData(): string {
		return '';
	}
}
