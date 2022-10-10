import { Test, TestingModule } from '@nestjs/testing';
import { ClientSeedService } from './client-seed.service';

describe('ClientSeedService', () => {
  let service: ClientSeedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClientSeedService],
    }).compile();

    service = module.get<ClientSeedService>(ClientSeedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
