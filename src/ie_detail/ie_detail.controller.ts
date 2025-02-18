import { Body, Controller, Post } from '@nestjs/common';
import { IeDetailService } from './ie_detail.service';
import { DataModeRequest } from 'src/RequestData';
import { IeDetailEntity } from './ie_detail_entity';

@Controller('ie-detail')
export class IeDetailController {
  constructor(private detailService: IeDetailService) {}
  @Post()
  handleRequest(@Body() data: DataModeRequest) {
    if (data.mode === 'get') {
      return this.detailService.getByBillID(data.data as number);
    } else if (data.mode === 'create') {
      return this.detailService.createDetail(data.data as IeDetailEntity);
    } else if (data.mode === 'update') {
      return this.detailService.updateDetail(data.data as IeDetailEntity);
    } else {
      return {
        result: 'Mode is not valid !',
      };
    }
  }
}
