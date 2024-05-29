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

    async getById(id):Promise<ShopEntity>{
        let shopG : ShopEntity;
        let shopP = this.shopRepo.find();
        await shopP.then((shops)=>{
            shops.forEach((shop)=>{
                if(shop.id === id){
                    shopG = shop;
                }
            });
        });

        return Promise.resolve(shopG);
    }

    createShop(shop:ShopEntity):Promise<ShopEntity>{
        return this.shopRepo.save(shop);
    }

    updateShop(shop:ShopEntity):Promise<UpdateResult>{
        return this.shopRepo.update(shop.id,shop);
    }
}
