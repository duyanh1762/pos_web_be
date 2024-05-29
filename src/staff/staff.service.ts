import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StaffEntity } from './staff.entity/staff.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class StaffService {
  constructor(
    @InjectRepository(StaffEntity)
    private readonly staffRepo: Repository<StaffEntity>,
  ) {}

  getAll(): Promise<StaffEntity[]> {
    return this.staffRepo.find();
  }

  async getByID(id): Promise<StaffEntity> {
    let staffG; StaffEntity;
    let staffP = this.staffRepo.find();
    await staffP.then((staffs)=>{
      staffs.forEach((staff)=>{
        if(staff.id  === id){
          staffG = staff;
        }
      });
    });

    return Promise.resolve(staffG);
  }

  createStaff(staff: StaffEntity): Promise<StaffEntity> {
    return this.staffRepo.save(staff);
  }

  updateStaff(staff: StaffEntity): Promise<UpdateResult> {
    return this.staffRepo.update(staff.id, staff);
  }

  deleteStaff(id): Promise<DeleteResult> {
    return this.staffRepo.delete(id);
  } 
}
