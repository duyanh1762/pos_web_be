import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BillEntity } from './bill.entity/bill.entity';
import { Repository, UpdateResult } from 'typeorm';
import { PipelinePromise } from 'stream';

@Injectable()
export class BillService {
    constructor(
        @InjectRepository(BillEntity)
        private readonly billRepo:Repository<BillEntity>
    ){}

    getAll():Promise<BillEntity[]>{
        return this.billRepo.find();
    }

    getByID(id):Promise<BillEntity>{
        return this.billRepo.findOne({where:{id}})
    }
    
    createBill(bill:BillEntity):Promise<BillEntity>{
        return this.billRepo.save(bill);
    }

    updateBill(bill:BillEntity):Promise<UpdateResult>{
        return this.billRepo.update(bill.id,bill);
    }
}
