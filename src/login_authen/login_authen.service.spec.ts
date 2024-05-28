import { Test, TestingModule } from '@nestjs/testing';
import { LoginAuthenService } from './login_authen.service';

describe('LoginAuthenService', () => {
  let service: LoginAuthenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoginAuthenService],
    }).compile();

    service = module.get<LoginAuthenService>(LoginAuthenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
