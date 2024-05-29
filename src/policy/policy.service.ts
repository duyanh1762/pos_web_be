import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { PolicyEntity } from './policy.entity/policy.entity';

@Injectable()
export class PolicyService {
    constructor(
        @InjectRepository(PolicyEntity)
        private readonly policyRepo:Repository<PolicyEntity>
    ){}

    getAll():Promise<PolicyEntity[]>{
        return this.policyRepo.find();
    }

    async getByID(id):Promise<PolicyEntity>{
        let policyG: PolicyEntity;
        let policys = this.policyRepo.find();
        await policys.then((policyList)=>{
            policyList.forEach((policy)=>{
                if(id === policy.id){
                    policyG = policy;
                }
            });
        });
        return Promise.resolve(policyG);
    }

    createPolicy(policy:PolicyEntity):Promise<PolicyEntity>{
        return this.policyRepo.save(policy);
    }

    updatePolicy(policy:PolicyEntity):Promise<UpdateResult>{
        return this.policyRepo.update(policy.id, policy);
    }
}
