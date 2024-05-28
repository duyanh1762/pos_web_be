import { Test, TestingModule } from '@nestjs/testing';
import { LoginAuthenController } from './login_authen.controller';

describe('LoginAuthenController', () => {
  let controller: LoginAuthenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoginAuthenController],
    }).compile();

    controller = module.get<LoginAuthenController>(LoginAuthenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
