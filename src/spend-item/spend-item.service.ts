import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { SpendItemEntity } from './spend-item.entity/spend-item.entity';

@Injectable()
export class SpendItemService {
    constructor(
        @InjectRepository(SpendItemEntity)
        private readonly spendItemRepo:Repository<SpendItemEntity>
    ){}

    getAll():Promise<SpendItemEntity[]>{
        return this.spendItemRepo.find();
    }
    
    async getByID(id):Promise<SpendItemEntity>{
        let spendG: SpendItemEntity;
        let spendP = this.spendItemRepo.find();
        await spendP.then((spends)=>{
            spends.forEach((spend)=>{
                if(spend.id === id){
                    spendG = spend;
                }
            });
        });

        return Promise.resolve(spendG);
    }

    createSpendItem(spendI:SpendItemEntity):Promise<SpendItemEntity>{
        return this.spendItemRepo.save(spendI);
    }

    updateSpendItem(spendI:SpendItemEntity):Promise<UpdateResult>{
        return this.spendItemRepo.update(spendI.id,spendI);
    }
}
