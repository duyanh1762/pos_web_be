import { Body, Controller, Post } from '@nestjs/common';
import { DataModeRequest } from 'src/RequestData';
import { UserService } from './user.service';
import { UserEntity } from './user.entity/user.entity';

@Controller('user')
export class UserController {
    constructor(private userService:UserService){}

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
