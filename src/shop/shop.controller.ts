import { Body, Controller, Get,Param,Post, Put } from '@nestjs/common';
import { ShopService } from './shop.service';
import { ShopEntity } from './shop.entity/shop.entity';
import { get } from 'http';
import { DataModeRequest } from 'src/RequestData';

@Controller('shop')
export class ShopController {
    constructor(private shopService: ShopService){}

    // @Get()
    // getAll(){
    //     return this.shopService.getAll();
    // }

    // @Get(':id')
    // getByID(@Param("id") id){
    //     return this.shopService.getById(Number(id));
    // }

    // @Post()
    // createShop(@Body() shopData:ShopEntity){
    //     return this.shopService.createShop(shopData);
    // }

    // @Put()
    // updateShop(@Body() shopData:ShopEntity){
    //     return this.shopService.updateShop(shopData);
    // }

    @Post()
    handlerDataRequest(@Body() data: DataModeRequest) {
      if (data.mode === 'get') {
        return this.shopService.getAll();
      } else if (data.mode === 'create') {
        return this.shopService.createShop(data.data as ShopEntity);
      } else if (data.mode === 'update') {
        return this.shopService.updateShop(data.data as ShopEntity);
      } else {
        return {
          result: 'Mode is not valid !',
        };
      }
    }
}
