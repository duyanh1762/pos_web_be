import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { BillService } from './bill.service';
import { BillEntity } from './bill.entity/bill.entity';
import { DataModeRequest } from 'src/RequestData';

@Controller('bill')
export class BillController {
  constructor(private billService: BillService) {}

  // @Get()
  // getAll(){
  //     return this.billService.getAll();
  // }

  // @Get(':id')
  // getByID(@Param('id') id){
  //     return this.billService.getByID(Number(id));
  // }

  // @Post()
  // createBill(@Body() billData:BillEntity){
  //     return this.billService.createBill(billData);
  // }

  // @Put()
  // updateBill(@Body() bilData:BillEntity){
  //     return this.billService.updateBill(bilData);
  // }

  @Post()
  handlerDataRequest(@Body() data: DataModeRequest) {
    if (data.mode === 'get') {
      return this.billService.getAll();
    } else if (data.mode === 'create') {
      return this.billService.createBill(data.data as BillEntity);
    } else if (data.mode === 'update') {
      return this.billService.updateBill(data.data as BillEntity);
    } else {
      return {
        result: 'Mode is not valid !',
      };
    }
  }
}
