import { Test, TestingModule } from '@nestjs/testing';
import { BillOrderDetailController } from './bill_order_detail.controller';

describe('BillOrderDetailController', () => {
  let controller: BillOrderDetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BillOrderDetailController],
    }).compile();

    controller = module.get<BillOrderDetailController>(BillOrderDetailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
