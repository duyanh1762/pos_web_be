import { Body, Controller, Post } from '@nestjs/common';
import { DataModeRequest } from 'src/RequestData';
import { BillOrderService } from './bill-order.service';
import { BillOrderEntity } from './bill_order.entity/bill_order.entity';

@Controller('bill-order')
export class BillOrderController {
  constructor(private boServices: BillOrderService) {}

  @Post()
  handleRequest(@Body() data: DataModeRequest) {
    if (data.mode === 'get') {
      return this.boServices.getAll();
    } else if (data.mode === 'get-uid') {
      return this.boServices.getByUserID(Number(data.data));
    } else if (data.mode === 'create') {
      return this.boServices.createBill(data.data as BillOrderEntity);
    } else if (data.mode === 'update') {
      return this.boServices.updateBill(data.data as BillOrderEntity);
    } else {
      return {
        result: 'Mode is not valid !',
      };
    }
  }
}
