import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { PolicyService } from './policy.service';
import { PolicyEntity } from './policy.entity/policy.entity';
import { DataModeRequest } from 'src/RequestData';

@Controller('policy')
export class PolicyController {
    constructor(private poService:PolicyService){}

    // @Get()
    // getAll(){
    //     return this.poService.getAll();
    // }

    // @Get(':id')
    // getByID(@Param("id") id){
    //     return this.poService.getByID(Number(id));
    // }

    // @Post()
    // createPolicy(@Body() policy:PolicyEntity){
    //     return this.poService.createPolicy(policy);
    // }

    // @Put()
    // updatePolicy(@Body() policy:PolicyEntity){
    //     return this.poService.updatePolicy(policy);
    // }

    @Post()
    handlerDataRequest(@Body() data: DataModeRequest) {
      if (data.mode === 'get') {
        return this.poService.getAll();
      } else if (data.mode === 'create') {
        return this.poService.createPolicy(data.data as PolicyEntity);
      } else if (data.mode === 'update') {
        return this.poService.updatePolicy(data.data as PolicyEntity);
      } else {
        return {
          result: 'Mode is not valid !',
        };
      }
    }
}
