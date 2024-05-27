import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BillDetailService } from './bill_detail.service';
import { BillDetailEntity } from './bill_detail.entity/bill_detail.entity';

@Controller('bill-detail')
export class BillDetailController {
    constructor(private detailService:BillDetailService){}

    @Get()
    getAll(){
        return this.detailService.getAll();
    }

    @Get(':id')
    getByID(@Param('id') id){
        return this.detailService.getByID(Number(id));
    }

    @Post()
    createBillDetail(@Body() detailData:BillDetailEntity){
        return this.detailService.createBillDetail(detailData);
    }

    @Put()
    updateBillDetail(@Body() detailData:BillDetailEntity){
        return this.detailService.updateBillDetail(detailData);
    }
}