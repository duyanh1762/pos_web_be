import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';
@Entity()
export class GoodsEntity {
    @ PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string

    @Column()
    unit:string;

    @Column()
    groupID:number;

    @Column()
    price:number;

    @Column()
    remaining:number
}