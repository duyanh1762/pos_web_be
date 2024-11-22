import { BillEntity } from "./bill/bill.entity/bill.entity";
import { BillDetailEntity } from "./bill_detail/bill_detail.entity/bill_detail.entity";
import { ItemEntity } from "./item/item.entity/item.entity";
import { PolicyEntity } from "./policy/policy.entity/policy.entity";
import { ShopEntity } from "./shop/shop.entity/shop.entity";
import { SpendDetailEntity } from "./spend-detail/spend-detail.entity/spend-detail.entity";
import { SpendItemEntity } from "./spend-item/spend-item.entity/spend-item.entity";
import { SpendEntity } from "./spend/spend.entity/spend.entity";
import { StaffEntity } from "./staff/staff.entity/staff.entity";
import { UserEntity } from "./user/user.entity/user.entity";

export interface DataModeRequest{
    mode:string, // get || update || delete || create
    data: string | BillEntity | BillDetailEntity | ItemEntity | PolicyEntity | ShopEntity | StaffEntity | number | SpendEntity | SpendDetailEntity | SpendItemEntity | UserEntity, 
}