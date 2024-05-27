import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
@Entity()
export class BillEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'datetime' })
    date:Date;
  
    @Column()
    table: string;
  
    @Column()
    staffID: number;

    @Column()
    shopID:number;

    @Column()
    status:string;

    @Column()
    policyID:number;
}
