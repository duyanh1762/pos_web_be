import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
@Entity()
export class BillOrderEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'datetime' })
    date:Date;
  
    @Column()
    userID: number;

    @Column()
    address:string;

    @Column()
    status:string; //not_confirm -> confirm -> delevering -> pay
}