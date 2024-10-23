import { Test, TestingModule } from '@nestjs/testing';
import { SpendDetailController } from './spend-detail.controller';

describe('SpendDetailController', () => {
  let controller: SpendDetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpendDetailController],
    }).compile();

    controller = module.get<SpendDetailController>(SpendDetailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
