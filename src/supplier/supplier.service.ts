import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SupplierEntity } from './supplier_entity';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class SupplierService {
    constructor(@InjectRepository(SupplierEntity) private readonly supRepo:Repository<SupplierEntity>){}

    getAll():Promise<SupplierEntity[]>{
        return this.supRepo.find();
    }

    createSup(sup:SupplierEntity):Promise<SupplierEntity>{
        return this.supRepo.save(sup);
    }

    updateSup(sup:SupplierEntity):Promise<UpdateResult>{
        return this.supRepo.update(sup.id,sup);
    }
}
