import { BillEntity } from './bill/bill.entity/bill.entity';
import { BillDetailEntity } from './bill_detail/bill_detail.entity/bill_detail.entity';
import { BillOrderEntity } from './bill_order/bill_order.entity/bill_order.entity';
import { BillOrderDetailEntity } from './bill_order_detail/bill_order_detail.entity/bill_order_detail.entity';
import { GoodsEntity } from './goods/goods_entity';
import { GroupEntity } from './group/group.entity/group.entity';
import { IeBillEntity } from './ie_bill/ie_bill_entity';
import { IeDetailEntity } from './ie_detail/ie_detail_entity';
import { ItemEntity } from './item/item.entity/item.entity';
import { PolicyEntity } from './policy/policy.entity/policy.entity';
import { ShopEntity } from './shop/shop.entity/shop.entity';
import { SpendEntity } from './spend/spend.entity/spend.entity';
import { StaffEntity } from './staff/staff.entity/staff.entity';
import { SupplierEntity } from './supplier/supplier_entity';
import { UserEntity } from './user/user.entity/user.entity';

export interface DataModeRequest {
  mode: string; // get || update || delete || create
  data:
    | string
    | number
    | BillEntity
    | BillDetailEntity
    | ItemEntity
    | PolicyEntity
    | ShopEntity
    | StaffEntity
    | SpendEntity
    | UserEntity
    | BillOrderEntity
    | BillOrderDetailEntity
    | GoodsEntity
    | IeBillEntity
    | IeDetailEntity
    | SupplierEntity
    | GroupEntity;
}
