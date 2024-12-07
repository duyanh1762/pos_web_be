import { Test, TestingModule } from '@nestjs/testing';
import { BillOrderController } from './bill-order.controller';

describe('BillOrderController', () => {
  let controller: BillOrderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BillOrderController],
    }).compile();

    controller = module.get<BillOrderController>(BillOrderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
