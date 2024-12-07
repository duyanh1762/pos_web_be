import { Body, Controller, Post } from '@nestjs/common';
import { BillOrderDetailService } from './bill_order_detail.service';
import { DataModeRequest } from 'src/RequestData';
import { BillOrderDetailEntity } from './bill_order_detail.entity/bill_order_detail.entity';

@Controller('bill-order-detail')
export class BillOrderDetailController {
    constructor(private bodService:BillOrderDetailService){}

    @Post()
    handleRequest(@Body() data:DataModeRequest){
        if (data.mode === 'get' && data.data ==="") {
            return this.bodService.getAll();
          }else if(data.mode === "get" && data.data != ""  ){
            return this.bodService.getByBillID(data.data as number);
          }else if (data.mode === 'create') {
            return this.bodService.createBillDetail(data.data as BillOrderDetailEntity);
          } else if (data.mode === 'update') {
            return this.bodService.updateBillDetail(data.data as BillOrderDetailEntity);
          } else {
            return {
              result: 'Mode is not valid !',
            };
          }
    }
}
