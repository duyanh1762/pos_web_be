import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class IeDetailEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    itemID: number;
  
    @Column()
    num: number;

    @Column()
    ieID:number;

    @Column()
    note:string;
}