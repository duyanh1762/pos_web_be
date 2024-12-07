import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BillOrderDetailEntity } from './bill_order_detail.entity/bill_order_detail.entity';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class BillOrderDetailService {
  constructor(
    @InjectRepository(BillOrderDetailEntity)
    private readonly bodRepo: Repository<BillOrderDetailEntity>,
  ) {}

  getAll(): Promise<BillOrderDetailEntity[]> {
    return this.bodRepo.find();
  }
  getByBillID(billID:number): Promise<BillOrderDetailEntity[]> {
    return this.bodRepo.find({ where: { billOrderID: billID } });
  }
  createBillDetail(
    detail: BillOrderDetailEntity,
  ): Promise<BillOrderDetailEntity> {
    return this.bodRepo.save(detail);
  }

  updateBillDetail(detail: BillOrderDetailEntity): Promise<UpdateResult> {
    return this.bodRepo.update(detail.id, detail);
  }
}
