import { Test, TestingModule } from '@nestjs/testing';
import { BillOrderService } from './bill-order.service';

describe('BillOrderService', () => {
  let service: BillOrderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BillOrderService],
    }).compile();

    service = module.get<BillOrderService>(BillOrderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
