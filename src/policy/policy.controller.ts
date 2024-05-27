import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { PolicyService } from './policy.service';
import { PolicyEntity } from './policy.entity/policy.entity';

@Controller('policy')
export class PolicyController {
    constructor(private poService:PolicyService){}

    @Get()
    getAll(){
        return this.poService.getAll();
    }

    @Get(':id')
    getByID(@Param("id") id){
        return this.poService.getByID(Number(id));
    }

    @Post()
    createPolicy(@Body() policy:PolicyEntity){
        return this.poService.createPolicy(policy);
    }

    @Put()
    updatePolicy(@Body() policy:PolicyEntity){
        return this.poService.updatePolicy(policy);
    }
}
