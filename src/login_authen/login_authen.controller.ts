import { Body, Controller } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ShopEntity } from 'src/shop/shop.entity/shop.entity';
import { StaffEntity } from 'src/staff/staff.entity/staff.entity';
import { Repository } from 'typeorm';

interface DataReQuest{
    username: string,
    password:string,
    authType: string,
}

@Controller('login-authen')
export class LoginAuthenController {
    constructor(
        @InjectRepository(ShopEntity) private readonly shopRepo:Repository<ShopEntity>,
        @InjectRepository(StaffEntity) private readonly staffRepo:Repository<StaffEntity>
    ){}

    @Post()
    async authenLogin(@Body() data:DataReQuest){
        let checked;
        if(data.authType === "SHOP_AUTH"){
            let shops =  this.shopRepo.find();
            await shops.then((rs)=>{
                rs.forEach((shop)=>{
                    if(shop.name === data.username && shop.password === data.password){
                        checked = true;
                    }
                });
            });
        }else if(data.authType === "STAFF_AUTH"){
            let staffs = this.staffRepo.find();
            await staffs.then((rs)=>{
                rs.forEach((staff)=>{
                    if(data.username === staff.name && data.password === staff.password){
                        checked = true;
                    }
                });
            });
        }else{
            return false;
        }
        if(checked === true){
            return true;
        }else{
            return false;
        }
    }
    
}
