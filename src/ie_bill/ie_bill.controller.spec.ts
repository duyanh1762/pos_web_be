import { Test, TestingModule } from '@nestjs/testing';
import { IeBillController } from './ie_bill.controller';

describe('IeBillController', () => {
  let controller: IeBillController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IeBillController],
    }).compile();

    controller = module.get<IeBillController>(IeBillController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
