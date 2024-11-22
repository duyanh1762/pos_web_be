import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity/user.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
  ) {}

  getAll(): Promise<UserEntity[]> {
    return this.userRepo.find();
  }

  createUser(user: UserEntity): Promise<UserEntity> {
    return this.userRepo.save(user);
  }

  updateUser(user: UserEntity): Promise<UpdateResult> {
    return this.userRepo.update(user.id, user);
  }

  deleteUser(id): Promise<DeleteResult> {
    return this.userRepo.delete(id);
  }
}
