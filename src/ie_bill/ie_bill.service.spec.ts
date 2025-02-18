import { Test, TestingModule } from '@nestjs/testing';
import { IeBillService } from './ie_bill.service';

describe('IeBillService', () => {
  let service: IeBillService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IeBillService],
    }).compile();

    service = module.get<IeBillService>(IeBillService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
