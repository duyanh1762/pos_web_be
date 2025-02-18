import { Body, Controller, Post } from '@nestjs/common';
import { IeBillService } from './ie_bill.service';
import { DataModeRequest } from 'src/RequestData';
import { IeBillEntity } from './ie_bill_entity';

@Controller('ie-bill')
export class IeBillController {
  constructor(private ieService: IeBillService) {}

  @Post()
  handleRequest(@Body() data: DataModeRequest) {
    if (data.mode === 'get' && data.data === '') {
      return this.ieService.getAll();
    } else if (data.mode === 'get-by-shop') {
      return this.ieService.getByShopID(data.data as number);
    } else if (data.mode === 'get-by-range') {
      return this.ieService.getByRangeTime(data.data.toString() as any);
    } else if (data.mode === 'get-by-range-shop') {
      return this.ieService.getByRangeAndShop(data.data.toString() as any);
    } else if (data.mode === 'create') {
      return this.ieService.createIE(data.data as IeBillEntity);
    } else if (data.mode === 'update') {
      return this.ieService.updateIE(data.data as IeBillEntity);
    } else {
      return {
        result: 'Mode is not valid !',
      };
    }
  }
}
