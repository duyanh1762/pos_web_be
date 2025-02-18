import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class IeBillEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'datetime' })
    createAt:Date;
  
    @Column({type: 'datetime'})
    confirmAt:Date;
  
    @Column()
    staffID: number;

    @Column()
    shopID:number;

    @Column()
    status:string;

    @Column()
    type:string; // import || export
}