import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class BillOrderDetailEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    itemID: number;
  
    @Column()
    num: number;

    @Column()
    des:string;

    @Column()
    billOrderID:number;

}
   