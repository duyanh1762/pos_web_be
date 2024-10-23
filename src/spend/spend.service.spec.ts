import { Test, TestingModule } from '@nestjs/testing';
import { SpendService } from './spend.service';

describe('SpendService', () => {
  let service: SpendService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpendService],
    }).compile();

    service = module.get<SpendService>(SpendService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
