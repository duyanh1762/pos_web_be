import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BillEntity } from './bill.entity/bill.entity';
import { Between, Repository, UpdateResult } from 'typeorm';
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

    async getByID(id):Promise<BillEntity>{
        let billG : BillEntity;
        let billP = this.billRepo.find();
        await billP.then((bills)=>{
            bills.forEach((bill)=>{
                if(id === bill.id){
                    billG = bill;
                }
            });
        });

        return Promise.resolve(billG);
    }
      getByRangeAndShop(data: string): Promise<BillEntity[]> {
        // data = "2020-01-01 12:12:12,2020-01-01 12:12:12,1"
        let start: string = data.split(',')[0];
        let end: string = data.split(',')[1];
        let sID: number = Number(data.split(',')[2]);
        return this.billRepo.find({
          where: {
            date: Between(new Date(start), new Date(end)),
            shopID: sID,
          },
        });
      }
    createBill(bill:BillEntity):Promise<BillEntity>{
        return this.billRepo.save(bill);
    }

    updateBill(bill:BillEntity):Promise<UpdateResult>{
        return this.billRepo.update(bill.id,bill);
    }
}
