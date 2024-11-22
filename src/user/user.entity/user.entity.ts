import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    firstName:string

    @Column()
    lastName: string;
  
    @Column()
    phone: string;
  
    @Column()
    email: string;
  
    @Column()
    sex: string;

    @Column()
    birth:string;

    @Column()
    status:string;

    @Column()
    address:string;

    @Column()
    password:string
}
