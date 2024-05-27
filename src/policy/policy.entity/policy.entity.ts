import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
@Entity()
export class PolicyEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    des:string;

    @Column({ type: 'datetime' })
    date:Date;
}
