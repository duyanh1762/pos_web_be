import { Test, TestingModule } from '@nestjs/testing';
import { SpendDetailService } from './spend-detail.service';

describe('SpendDetailService', () => {
  let service: SpendDetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpendDetailService],
    }).compile();

    service = module.get<SpendDetailService>(SpendDetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
