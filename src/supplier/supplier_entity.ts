import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class SupplierEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;
  
    @Column()
    phone: string;

}