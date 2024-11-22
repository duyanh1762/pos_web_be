import { Body, Controller } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ShopEntity } from 'src/shop/shop.entity/shop.entity';
import { StaffEntity } from 'src/staff/staff.entity/staff.entity';
import { UserEntity } from 'src/user/user.entity/user.entity';
import { Repository } from 'typeorm';

interface DataReQuest{
    username: string,
    password:string,
    authType: string,
}
interface UserLogin{
    phoneName:string,
    password:string,
}
@Controller('login-authen')
export class LoginAuthenController {
    constructor(
        @InjectRepository(ShopEntity) private readonly shopRepo:Repository<ShopEntity>,
        @InjectRepository(StaffEntity) private readonly staffRepo:Repository<StaffEntity>,
        @InjectRepository(UserEntity) private readonly userRepo:Repository<UserEntity>,
    ){}

    @Post()
    async authenLogin(@Body() data:DataReQuest){
        let checked;
        let shopInfor:ShopEntity;
        if(data.authType === "SHOP_AUTH"){
            let shops =  this.shopRepo.find();
            await shops.then((rs)=>{
                rs.forEach((shop)=>{
                    if(shop.name === data.username && shop.password === data.password){
                        checked = true;
                        shopInfor = shop;
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
            return {
                success:true,
                data:shopInfor,
            };
        }else{
            return {
                success:false,
                data:null,
            };
        }
    }

    @Post("fast-food")
    async handleRequest(@Body() dataRequest:UserLogin){
        let dataResponse = {
            user:null,
            success:false,
        };
        let usersPromise:Promise<any> = this.userRepo.find();
        await usersPromise.then((data:UserEntity[])=>{
            data.forEach((u:UserEntity)=>{
                if((dataRequest.phoneName === u.phone && dataRequest.password === u.password) || (dataRequest.phoneName === u.email && dataRequest.password === u.password)){
                    dataResponse.user = u;
                    dataResponse.success = true;
                }
            });
        });
        return dataResponse;
    }
    
}
