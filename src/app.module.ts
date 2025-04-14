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
import { SpendController } from './spend/spend.controller';
import { SpendService } from './spend/spend.service';
import { SpendEntity } from './spend/spend.entity/spend.entity';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserEntity } from './user/user.entity/user.entity';
import { BillOrderEntity } from './bill_order/bill_order.entity/bill_order.entity';
import { BillOrderController } from './bill_order/bill-order.controller';
import { BillOrderService } from './bill_order/bill-order.service';
import { BillOrderDetailController } from './bill_order_detail/bill_order_detail.controller';
import { BillOrderDetailService } from './bill_order_detail/bill_order_detail.service';
import { BillOrderDetailEntity } from './bill_order_detail/bill_order_detail.entity/bill_order_detail.entity';
import { GoodsController } from './goods/goods.controller';
import { GoodsService } from './goods/goods.service';
import { SupplierController } from './supplier/supplier.controller';
import { IeBillController } from './ie_bill/ie_bill.controller';
import { IeDetailController } from './ie_detail/ie_detail.controller';
import { SupplierService } from './supplier/supplier.service';
import { IeBillService } from './ie_bill/ie_bill.service';
import { IeDetailService } from './ie_detail/ie_detail.service';
import { GoodsEntity } from './goods/goods_entity';
import { IeBillEntity } from './ie_bill/ie_bill_entity';
import { IeDetailEntity } from './ie_detail/ie_detail_entity';
import { SupplierEntity } from './supplier/supplier_entity';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'bexuanmailonto',
      password: '170602cf',
      database: 'aha_pos_web',
      entities: [
        StaffEntity,
        ShopEntity,
        BillDetailEntity,
        BillEntity,
        PolicyEntity,
        ItemEntity,
        GroupEntity,
        SpendEntity,
        UserEntity,
        BillOrderEntity,
        BillOrderDetailEntity,
        GoodsEntity,
        IeBillEntity,
        IeDetailEntity,
        SupplierEntity,
      ],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([
      StaffEntity,
      ShopEntity,
      BillEntity,
      BillDetailEntity,
      PolicyEntity,
      ItemEntity,
      GroupEntity,
      SpendEntity,
      UserEntity,
      BillOrderEntity,
      BillOrderDetailEntity,
      GoodsEntity,
      IeBillEntity,
      IeDetailEntity,
      SupplierEntity,
    ]),
    AuthModule,
  ],
  controllers: [
    AppController,
    StaffController,
    ShopController,
    PolicyController,
    ItemController,
    BillController,
    BillDetailController,
    LoginAuthenController,
    GroupController,
    QrController,
    SpendController,
    UserController,
    BillOrderController,
    BillOrderDetailController,
    BillOrderDetailController,
    GoodsController,
    SupplierController,
    IeBillController,
    IeDetailController,
  ],
  providers: [
    AppService,
    StaffService,
    ShopService,
    PolicyService,
    ItemService,
    BillService,
    BillDetailService,
    LoginAuthenService,
    GroupService,
    OrderProcessGateway,
    QrService,
    SpendService,
    UserService,
    BillOrderService,
    BillOrderDetailService,
    BillOrderDetailService,
    GoodsService,
    SupplierService,
    IeBillService,
    IeDetailService
  ],
})
export class AppModule {}
