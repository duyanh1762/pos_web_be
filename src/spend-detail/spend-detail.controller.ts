import { Body, Controller, Post } from '@nestjs/common';
import { SpendDetailService } from './spend-detail.service';
import { DataModeRequest } from 'src/RequestData';
import { SpendDetailEntity } from './spend-detail.entity/spend-detail.entity';

@Controller('spend-detail')
export class SpendDetailController {
    constructor(private spendDetailService:SpendDetailService){}

    @Post()
    handlerDataRequest(@Body() data: DataModeRequest) {
      if (data.mode === 'get') {
        return this.spendDetailService.getAll();
      } else if (data.mode === 'create') {
        return this.spendDetailService.createSpendDetail(data.data as SpendDetailEntity);
      } else if (data.mode === 'update') {
        return this.spendDetailService.updateSpendDetail(data.data as SpendDetailEntity);
      } else {
        return {
          result: 'Mode is not valid !',
        };
      }
    }
}
