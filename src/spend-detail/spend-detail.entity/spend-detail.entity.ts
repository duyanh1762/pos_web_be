import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class SpendDetailEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    spend_itemID: number;
  
    @Column()
    num: number;

    @Column()
    spendID:number;

}
