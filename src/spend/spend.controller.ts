import { Body, Controller, Post } from '@nestjs/common';
import { DataModeRequest } from 'src/RequestData';
import { SpendService } from './spend.service';
import { SpendEntity } from './spend.entity/spend.entity';

@Controller('spend')
export class SpendController {
    constructor(private spendService:SpendService){}

    @Post()
    handlerDataRequest(@Body() data: any) {
      if (data.mode === 'get') {
        if(data.date === "" || data.date === null || data.date === undefined){
            return this.spendService.getAll();
        }else{
            return this.spendService.getByDate(data.date);
        }
      } else if (data.mode === 'create') {
        return this.spendService.createSpend(data.data as SpendEntity);
      } else if (data.mode === 'update') {
        return this.spendService.updateSpend(data.data as SpendEntity);
      } else {
        return {
          result: 'Mode is not valid !',
        };
      }
    }
}
