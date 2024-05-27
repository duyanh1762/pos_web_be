import { Test, TestingModule } from '@nestjs/testing';
import { BillDetailService } from './bill_detail.service';

describe('BillDetailService', () => {
  let service: BillDetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BillDetailService],
    }).compile();

    service = module.get<BillDetailService>(BillDetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
