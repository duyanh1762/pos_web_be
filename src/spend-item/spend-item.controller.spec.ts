import { Test, TestingModule } from '@nestjs/testing';
import { SpendItemController } from './spend-item.controller';

describe('SpendItemController', () => {
  let controller: SpendItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpendItemController],
    }).compile();

    controller = module.get<SpendItemController>(SpendItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
