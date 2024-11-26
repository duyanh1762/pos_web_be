import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ItemEntity } from './item.entity/item.entity';
import { Like, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class ItemService {
    constructor(
        @InjectRepository(ItemEntity)
        private readonly itemRepo:Repository<ItemEntity>
    ){}

    getAll():Promise<ItemEntity[]>{
        return this.itemRepo.find();
    }
    
    getFastFood():Promise<ItemEntity[]>{
        return this.itemRepo.find( { where: { policyID:Like(23) } } );
    }

    async getByID(id):Promise<ItemEntity>{
        let itemG: ItemEntity;
        let itemP = this.itemRepo.find();
        await itemP.then((items)=>{
            items.forEach((item)=>{
                if(item.id === id){
                    itemG = item;
                }
            });
        });
        return Promise.resolve(itemG);
    }

    createItem(item:ItemEntity):Promise<ItemEntity>{
        return this.itemRepo.save(item);
    }

    updateItem(item:ItemEntity):Promise<UpdateResult>{
        return this.itemRepo.update(item.id,item);
    }
}
