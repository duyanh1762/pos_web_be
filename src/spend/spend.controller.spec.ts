import { Test, TestingModule } from '@nestjs/testing';
import { SpendController } from './spend.controller';

describe('SpendController', () => {
  let controller: SpendController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpendController],
    }).compile();

    controller = module.get<SpendController>(SpendController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
