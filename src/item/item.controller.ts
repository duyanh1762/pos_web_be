import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemEntity } from './item.entity/item.entity';
import { DataModeRequest } from 'src/RequestData';

@Controller('item')
export class ItemController {
    constructor(private itemService:ItemService){}

    // @Get()
    // getAll(){
    //     return this.itemService.getAll();
    // }

    // @Get(':id')
    // getByID(@Param("id") id){
    //    return this.itemService.getByID(Number(id));
    // }

    // @Post()
    // createItem(@Body() itemData:ItemEntity){
    //    return this.itemService.createItem(itemData);
    // }

    // @Put()
    // updateItem(@Body() itemData:ItemEntity){
    //     return this.itemService.updateItem(itemData);
    // }

    @Post()
    handlerDataRequest(@Body() data: DataModeRequest) {
      if (data.mode === 'get') {
        return this.itemService.getAll();
      } else if (data.mode === 'create') {
        return this.itemService.createItem(data.data as ItemEntity);
      } else if (data.mode === 'update') {
        return this.itemService.updateItem(data.data as ItemEntity);
      } else {
        return {
          result: 'Mode is not valid !',
        };
      }
    }
}
