import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BillDetailEntity } from './bill_detail.entity/bill_detail.entity';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class BillDetailService {
    constructor(
        @InjectRepository(BillDetailEntity)
        private readonly detailRepo:Repository<BillDetailEntity>
    ){}

    getAll():Promise<BillDetailEntity[]>{
        return this.detailRepo.find();
    }

    getByID(id):Promise<BillDetailEntity>{
        return this.detailRepo.findOne({where:{id}})
    }
    
    createBillDetail(detail:BillDetailEntity):Promise<BillDetailEntity>{
        return this.detailRepo.save(detail);
    }

    updateBillDetail(detail:BillDetailEntity):Promise<UpdateResult>{
        return this.detailRepo.update(detail.id,detail);
    }
}
