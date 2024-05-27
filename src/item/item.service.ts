import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ItemEntity } from './item.entity/item.entity';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class ItemService {
    constructor(
        @InjectRepository(ItemEntity)
        private readonly itemRepo:Repository<ItemEntity>
    ){}

    getAll():Promise<ItemEntity[]>{
        return this.itemRepo.find();
    }

    getByID(id):Promise<ItemEntity>{
        return this.itemRepo.findOne({where: {id}});
    }

    createItem(item:ItemEntity):Promise<ItemEntity>{
        return this.itemRepo.save(item);
    }

    updateItem(item:ItemEntity):Promise<UpdateResult>{
        return this.itemRepo.update(item.id,item);
    }
}
