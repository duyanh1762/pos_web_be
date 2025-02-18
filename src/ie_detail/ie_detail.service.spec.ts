import { Test, TestingModule } from '@nestjs/testing';
import { IeDetailService } from './ie_detail.service';

describe('IeDetailService', () => {
  let service: IeDetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IeDetailService],
    }).compile();

    service = module.get<IeDetailService>(IeDetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
