import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class ShopEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;
  
    @Column()
    password: string;
  
    @Column()
    address: string;

    @Column()
    policyID:number;

    @Column()
    number_table:number;
}
