import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';
@Entity()
export class ItemEntity {
    @ PrimaryGeneratedColumn()
    id:number;

    @Column({ type: 'json', nullable: true })
    policyID:number[];

    @Column()
    name:string

    @Column()
    price:number;

    @Column()
    groupID:number;
}
