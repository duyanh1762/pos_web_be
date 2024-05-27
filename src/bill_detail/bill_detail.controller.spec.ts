import { Test, TestingModule } from '@nestjs/testing';
import { BillDetailController } from './bill_detail.controller';

describe('BillDetailController', () => {
  let controller: BillDetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BillDetailController],
    }).compile();

    controller = module.get<BillDetailController>(BillDetailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
