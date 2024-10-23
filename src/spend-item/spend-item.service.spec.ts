import { Test, TestingModule } from '@nestjs/testing';
import { SpendItemService } from './spend-item.service';

describe('SpendItemService', () => {
  let service: SpendItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpendItemService],
    }).compile();

    service = module.get<SpendItemService>(SpendItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
