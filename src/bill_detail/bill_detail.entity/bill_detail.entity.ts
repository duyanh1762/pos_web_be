import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class BillDetailEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    itemID: number;
  
    @Column()
    num: number;

    @Column()
    billID:number;

    @Column()
    policyID:number;
}
