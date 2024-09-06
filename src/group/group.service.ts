import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GroupEntity } from './group.entity/group.entity';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class GroupService {
    constructor(@InjectRepository(GroupEntity) private readonly groupRepo:Repository<GroupEntity>){}

    getAll():Promise<GroupEntity[]>{
        return this.groupRepo.find();
    }

    createGroup(gr:GroupEntity):Promise<GroupEntity>{
        return this.groupRepo.save(gr);
    }

    updateGroup(gr:GroupEntity):Promise<UpdateResult>{
        return this.groupRepo.update(gr.id,gr);
    }
}
