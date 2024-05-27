import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ShopEntity } from './shop.entity/shop.entity';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class ShopService {
    constructor(
        @InjectRepository(ShopEntity)
        private readonly shopRepo:Repository<ShopEntity>
    ){}

    getAll():Promise<ShopEntity[]>{
        return this.shopRepo.find();
    }

    getById(id):Promise<ShopEntity>{
        return this.shopRepo.findOne({ where: { id } });
    }

    createShop(shop:ShopEntity):Promise<ShopEntity>{
        return this.shopRepo.save(shop);
    }

    updateShop(shop:ShopEntity):Promise<UpdateResult>{
        return this.shopRepo.update(shop.id,shop);
    }
}
