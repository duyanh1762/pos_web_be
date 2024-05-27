import { Body, Controller, Get,Param,Post, Put } from '@nestjs/common';
import { ShopService } from './shop.service';
import { ShopEntity } from './shop.entity/shop.entity';
import { get } from 'http';

@Controller('shop')
export class ShopController {
    constructor(private shopService: ShopService){}

    @Get()
    getAll(){
        return this.shopService.getAll();
    }

    @Get(':id')
    getByID(@Param("id") id){
        return this.shopService.getById(Number(id));
    }

    @Post()
    createShop(@Body() shopData:ShopEntity){
        return this.shopService.createShop(shopData);
    }

    @Put()
    updateShop(@Body() shopData:ShopEntity){
        return this.shopService.updateShop(shopData);
    }
}
