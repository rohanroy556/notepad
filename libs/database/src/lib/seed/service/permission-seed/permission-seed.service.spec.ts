import { Test, TestingModule } from '@nestjs/testing';
import { PermissionSeedService } from './permission-seed.service';

describe('PermissionSeedService', () => {
	let service: PermissionSeedService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [PermissionSeedService]
		}).compile();

		service = module.get<PermissionSeedService>(PermissionSeedService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});
});
