import { Test, TestingModule } from '@nestjs/testing';
import { LoginStrategy } from './login.strategy';

describe('LoginStrategy', () => {
	let provider: LoginStrategy;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [LoginStrategy],
		}).compile();

		provider = module.get<LoginStrategy>(LoginStrategy);
	});

	it('should be defined', () => {
		expect(provider).toBeDefined();
	});
});
