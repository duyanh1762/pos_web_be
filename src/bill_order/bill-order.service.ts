import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BillOrderEntity } from './bill_order.entity/bill_order.entity';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class BillOrderService {
    constructor(@InjectRepository(BillOrderEntity) private readonly billOrderRepo:Repository<BillOrderEntity> ){}

    getAll():Promise<BillOrderEntity[]>{
        return this.billOrderRepo.find();
    }

    getByUserID(uid:number):Promise<BillOrderEntity[]>{
        return this.billOrderRepo.find({where:{userID : uid}});
    }

    createBill(bill:BillOrderEntity):Promise<BillOrderEntity>{
        return this.billOrderRepo.save(bill);
    }

    updateBill(bill:BillOrderEntity):Promise<UpdateResult>{
        return this.billOrderRepo.update(bill.id,bill);
    }
}
