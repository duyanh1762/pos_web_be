import { Test, TestingModule } from '@nestjs/testing';
import { IeDetailController } from './ie_detail.controller';

describe('IeDetailController', () => {
  let controller: IeDetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IeDetailController],
    }).compile();

    controller = module.get<IeDetailController>(IeDetailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
