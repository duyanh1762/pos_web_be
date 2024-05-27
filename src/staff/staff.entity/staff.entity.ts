import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class StaffEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  shopID:number

  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  role: string;

  @Column()
  status: string;
}
