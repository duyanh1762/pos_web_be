import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
@Entity()
export class SpendEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'datetime' })
    date:Date;
  
    @Column()
    staffID: number;

    @Column()
    shopID:number;

    @Column()
    status:string;
}