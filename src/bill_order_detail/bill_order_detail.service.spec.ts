import { Test, TestingModule } from '@nestjs/testing';
import { BillOrderDetailService } from './bill_order_detail.service';

describe('BillOrderDetailService', () => {
  let service: BillOrderDetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BillOrderDetailService],
    }).compile();

    service = module.get<BillOrderDetailService>(BillOrderDetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
