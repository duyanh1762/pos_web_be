import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { DataModeRequest } from 'src/RequestData';
import { UserService } from './user.service';
import { UserEntity } from './user.entity/user.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
    constructor(private userService:UserService){}

    @UseGuards(AuthGuard('jwt'))
    @Post()
    handleRequest(@Body() dataRequest:DataModeRequest){
        if(dataRequest.mode === "get"){
            return this.userService.getAll();
        }else if(dataRequest.mode === "create"){
            return this.userService.createUser(dataRequest.data as UserEntity);
        }else if(dataRequest.mode === "update"){
            return this.userService.updateUser(dataRequest.data as UserEntity);
        }else{
            return {
                result:"Mode is not valid !"
            };
        }
    }
}
