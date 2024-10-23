import { Body, Controller, Post } from '@nestjs/common';
import { SpendItemService } from './spend-item.service';
import { SpendItemEntity } from './spend-item.entity/spend-item.entity';
import { DataModeRequest } from 'src/RequestData';

@Controller('spend-item')
export class SpendItemController {
    constructor(private spendItemService:SpendItemService){}

    @Post()
    handlerDataRequest(@Body() data: DataModeRequest) {
      if (data.mode === 'get') {
        return this.spendItemService.getAll();
      } else if (data.mode === 'create') {
        return this.spendItemService.createSpendItem(data.data as SpendItemEntity);
      } else if (data.mode === 'update') {
        return this.spendItemService.updateSpendItem(data.data as SpendItemEntity);
      } else {
        return {
          result: 'Mode is not valid !',
        };
      }
    }
}
