import { Body, Controller } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ShopEntity } from 'src/shop/shop.entity/shop.entity';
import { StaffEntity } from 'src/staff/staff.entity/staff.entity';
import { UserEntity } from 'src/user/user.entity/user.entity';
import { Repository } from 'typeorm';

// adminUser:StaffEntity = {
//     id:0,
//     shopID:0,
//     name:"....",
//     password:"....",
//     role:"admin",
//     status:"Active"
// }

interface ShopReQuest{
    username: string,
    password:string,
    authType: string,
}
interface StaffReQuest{
    username: string,
    password:string,
    authType: string,
    shopID:number,
}
interface UserLogin{
    phoneName:string,
    password:string,
}
interface ConFigLogin{
    username:string,
    password:string,
}

@Controller('login-authen')
export class LoginAuthenController {

    constructor(
        @InjectRepository(ShopEntity) private readonly shopRepo:Repository<ShopEntity>,
        @InjectRepository(StaffEntity) private readonly staffRepo:Repository<StaffEntity>,
        @InjectRepository(UserEntity) private readonly userRepo:Repository<UserEntity>,
    ){
        let admin:any = {
            username:"admin",
            password:"admin666",
            role:"admin"
        };
        
        let warehouse:any = {
            username:"kho",
            password:"warehouse666",
            role:"warehouse"
        }
     }

    @Post()
    async authenLogin(@Body() data:ShopReQuest | StaffReQuest | any){
        let checked;
        let shopInfor:ShopEntity;
        let staffInfor:StaffEntity;
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
            let request:StaffReQuest = data;
            let staffs = this.staffRepo.find();
            await staffs.then((rs)=>{
                rs.forEach((staff)=>{
                    if(request.username === staff.name && request.password === staff.password && request.shopID === staff.shopID){
                        checked = true;
                        staffInfor = staff;
                    }
                });
            });
        }else{
            return false;
        }
        if(checked === true && data.authType === "SHOP_AUTH"){
            return {
                success:true,
                data:shopInfor,
            };
        }else if(checked === true && data.authType === "STAFF_AUTH"){
            return {
                success:true,
                data:staffInfor,
            }
        }else{
            return {
                success:false,
                data:null,
            };
        }
    }

    @Post("config")
    async authenLoginForConfig(@Body() data:ConFigLogin){
        if(data.username === "admin" && data.password === "admin666"){
            return {
                success:true,
                role:"admin",
            }
        }else if(data.username === "kho" && data.password === "warehouse666"){
            return {
                success:true,
                role:"warehouse",
            }
        }else{
            return {
                success:false,
                role:"",
            }
        }
    }

    // @Post("fast-food")
    // async handleRequest(@Body() dataRequest:UserLogin){
    //     let dataResponse = {
    //         user:null,
    //         success:false,
    //     };
    //     let usersPromise:Promise<any> = this.userRepo.find();
    //     await usersPromise.then((data:UserEntity[])=>{
    //         data.forEach((u:UserEntity)=>{
    //             if((dataRequest.phoneName === u.phone && dataRequest.password === u.password) || (dataRequest.phoneName === u.email && dataRequest.password === u.password)){
    //                 dataResponse.user = u;
    //                 dataResponse.success = true;
    //             }
    //         });
    //     });
    //     return dataResponse;
    // }

}
