import { BillEntity } from "./bill/bill.entity/bill.entity";
import { BillDetailEntity } from "./bill_detail/bill_detail.entity/bill_detail.entity";
import { ItemEntity } from "./item/item.entity/item.entity";
import { PolicyEntity } from "./policy/policy.entity/policy.entity";
import { ShopEntity } from "./shop/shop.entity/shop.entity";
import { StaffEntity } from "./staff/staff.entity/staff.entity";

export interface DataModeRequest{
    mode:string, // get || update || delete || create
    data: string | BillEntity | BillDetailEntity | ItemEntity | PolicyEntity | ShopEntity | StaffEntity | number, 
}