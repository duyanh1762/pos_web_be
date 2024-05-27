import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';
@Entity()
export class ItemEntity {
    @ PrimaryGeneratedColumn()
    id:number;

    @Column()
    policyID:number;

    @Column()
    name:string

    @Column()
    price:number;
}
