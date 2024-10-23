import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { SpendDetailEntity } from './spend-detail.entity/spend-detail.entity';

@Injectable()
export class SpendDetailService {
    constructor(
        @InjectRepository(SpendDetailEntity)
        private readonly spendDetailRepo:Repository<SpendDetailEntity>
    ){}

    getAll():Promise<SpendDetailEntity[]>{
        return this.spendDetailRepo.find();
    }
    
    async getByID(id):Promise<SpendDetailEntity>{
        let spendG: SpendDetailEntity;
        let spendP = this.spendDetailRepo.find();
        await spendP.then((spends)=>{
            spends.forEach((spend)=>{
                if(spend.id === id){
                    spendG = spend;
                }
            });
        });

        return Promise.resolve(spendG);
    }

    createSpendDetail(spendD:SpendDetailEntity):Promise<SpendDetailEntity>{
        return this.spendDetailRepo.save(spendD);
    }

    updateSpendDetail(spendD:SpendDetailEntity):Promise<UpdateResult>{
        return this.spendDetailRepo.update(spendD.id,spendD);
    }
}
