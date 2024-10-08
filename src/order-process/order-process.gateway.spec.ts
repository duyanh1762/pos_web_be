import { Test, TestingModule } from '@nestjs/testing';
import { OrderProcessGateway } from './order-process.gateway';

describe('OrderProcessGateway', () => {
  let gateway: OrderProcessGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderProcessGateway],
    }).compile();

    gateway = module.get<OrderProcessGateway>(OrderProcessGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
