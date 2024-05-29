import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { StaffService } from './staff.service';
import { StaffEntity } from './staff.entity/staff.entity';
import { DataModeRequest } from 'src/RequestData';

@Controller('staff')
export class StaffController {
    constructor(
        private staffService: StaffService
    ){}

    // @Get()
    // getAll() {
    //   return this.staffService.getAll();
    // }
  
    // @Get(':id')
    // getByID(@Param('id') param) {
    //   return this.staffService.getByID(Number(param));
    // }
  
    // @Post()
    // createStaff(@Body() staff: StaffEntity) {
    //   return this.staffService.createStaff(staff);
    // }
  
    // @Put()
    // updateStaff(@Body() staff: StaffEntity) {
    //   return this.staffService.updateStaff(staff);
    // }
  
    // @Delete(':id')
    // deleteStaff(@Param('id') param) {
    //   return this.staffService.deleteStaff(Number(param));
    // }

    @Post()
    handlerDataRequest(@Body() data: DataModeRequest) {
      if (data.mode === 'get') {
        return this.staffService.getAll();
      } else if (data.mode === 'create') {
        return this.staffService.createStaff(data.data as StaffEntity);
      } else if (data.mode === 'update') {
        return this.staffService.updateStaff(data.data as StaffEntity);
      } else {
        return {
          result: 'Mode is not valid !',
        };
      }
    }
}
