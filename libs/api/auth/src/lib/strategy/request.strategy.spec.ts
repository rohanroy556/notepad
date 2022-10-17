import { Test, TestingModule } from '@nestjs/testing';
import { RequestStrategy } from './request.strategy';

describe('RequestStrategy', () => {
	let provider: RequestStrategy;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [RequestStrategy],
		}).compile();

		provider = module.get<RequestStrategy>(RequestStrategy);
	});

	it('should be defined', () => {
		expect(provider).toBeDefined();
	});
});
