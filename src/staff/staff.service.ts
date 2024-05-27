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

  getByID(id): Promise<StaffEntity> {
    return this.staffRepo.findOne({ where: { id } });
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
