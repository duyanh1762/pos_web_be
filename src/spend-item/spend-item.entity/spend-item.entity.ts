import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
@Entity()
export class SpendItemEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;
    
    @Column()
    price:number;

    @Column()
    unit:string;
}
