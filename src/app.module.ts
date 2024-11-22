import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StaffEntity } from './staff/staff.entity/staff.entity';
import { ShopEntity } from './shop/shop.entity/shop.entity';
import { BillDetailEntity } from './bill_detail/bill_detail.entity/bill_detail.entity';
import { BillEntity } from './bill/bill.entity/bill.entity';
import { PolicyEntity } from './policy/policy.entity/policy.entity';
import { ItemEntity } from './item/item.entity/item.entity';
import { StaffService } from './staff/staff.service';
import { StaffController } from './staff/staff.controller';
import { ShopService } from './shop/shop.service';
import { ShopController } from './shop/shop.controller';
import { PolicyService } from './policy/policy.service';
import { PolicyController } from './policy/policy.controller';
import { ItemService } from './item/item.service';
import { ItemController } from './item/item.controller';
import { BillService } from './bill/bill.service';
import { BillController } from './bill/bill.controller';
import { BillDetailService } from './bill_detail/bill_detail.service';
import { BillDetailController } from './bill_detail/bill_detail.controller';
import { LoginAuthenService } from './login_authen/login_authen.service';
import { LoginAuthenController } from './login_authen/login_authen.controller';
import { GroupEntity } from './group/group.entity/group.entity';
import { GroupController } from './group/group.controller';
import { GroupService } from './group/group.service';
import { OrderProcessGateway } from './order-process/order-process.gateway';
import { QrController } from './qr_scan/qr/qr.controller';
import { QrService } from './qr_scan/qr/qr.service';
import { SpendItemController } from './spend-item/spend-item.controller';
import { SpendItemService } from './spend-item/spend-item.service';
import { SpendItemEntity } from './spend-item/spend-item.entity/spend-item.entity';
import { SpendController } from './spend/spend.controller';
import { SpendService } from './spend/spend.service';
import { SpendEntity } from './spend/spend.entity/spend.entity';
import { SpendDetailController } from './spend-detail/spend-detail.controller';
import { SpendDetailService } from './spend-detail/spend-detail.service';
import { SpendDetailEntity } from './spend-detail/spend-detail.entity/spend-detail.entity';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserEntity } from './user/user.entity/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'bexuanmailonto',
      password: '170602cf',
      database: 'aha_pos_web',
      entities: [StaffEntity,ShopEntity,BillDetailEntity,BillEntity,PolicyEntity,ItemEntity,GroupEntity,SpendItemEntity,SpendEntity,SpendDetailEntity,UserEntity],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([StaffEntity]),
    TypeOrmModule.forFeature([ShopEntity]),
    TypeOrmModule.forFeature([BillEntity]),
    TypeOrmModule.forFeature([BillDetailEntity]),
    TypeOrmModule.forFeature([PolicyEntity]),
    TypeOrmModule.forFeature([ItemEntity]),
    TypeOrmModule.forFeature([GroupEntity]),
    TypeOrmModule.forFeature([SpendItemEntity]),
    TypeOrmModule.forFeature([SpendEntity]),
    TypeOrmModule.forFeature([SpendDetailEntity]),
    TypeOrmModule.forFeature([UserEntity]),
  ],
  controllers: [AppController, StaffController, ShopController, PolicyController, ItemController, BillController, BillDetailController, LoginAuthenController,GroupController,QrController,SpendItemController, SpendController, SpendDetailController, UserController],
  providers: [AppService, StaffService, ShopService, PolicyService, ItemService, BillService, BillDetailService, LoginAuthenService,GroupService,SpendItemService, OrderProcessGateway,QrService, SpendService, SpendDetailService, UserService],
})
export class AppModule {}
