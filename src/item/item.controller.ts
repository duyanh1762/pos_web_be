import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemEntity } from './item.entity/item.entity';

@Controller('item')
export class ItemController {
    constructor(private itemService:ItemService){}

    @Get()
    getAll(){
        return this.itemService.getAll();
    }

    @Get(':id')
    getByID(@Param("id") id){
       return this.itemService.getByID(Number(id));
    }

    @Post()
    createItem(@Body() itemData:ItemEntity){
       return this.itemService.createItem(itemData);
    }

    @Put()
    updateItem(@Body() itemData:ItemEntity){
        return this.itemService.updateItem(itemData);
    }
}
