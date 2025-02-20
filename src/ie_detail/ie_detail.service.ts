import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IeDetailEntity } from './ie_detail_entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class IeDetailService {
    constructor(@InjectRepository(IeDetailEntity) private readonly ieDetailRepo:Repository<IeDetailEntity>){}

    getByBillID(id:number):Promise<IeDetailEntity[]>{
        return this.ieDetailRepo.find({
            where:{ieID: id} 
        });
    }
    
    createDetail(d:IeDetailEntity):Promise<IeDetailEntity>{
        return this.ieDetailRepo.save(d);
    }

    updateDetail(d:IeDetailEntity):Promise<UpdateResult>{
        return this.ieDetailRepo.update(d.id,d);
    }
    deleteDetail(id:number):Promise<DeleteResult>{
        return this.ieDetailRepo.delete(id);
    }
}
