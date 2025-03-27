import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SpendEntity } from './spend.entity/spend.entity';
import { Between, MoreThan, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class SpendService {
  constructor(
    @InjectRepository(SpendEntity)
    private readonly spendRepo: Repository<SpendEntity>,
  ) {}

  getAll(): Promise<SpendEntity[]> {
    return this.spendRepo.find();
  }

  async getByDate(date: string): Promise<SpendEntity[]> {
    let dateTarget = new Date(date);
    console.log(date);
    return await this.spendRepo.find({ where: { date: MoreThan(dateTarget) } });
  }
  async getByID(id): Promise<SpendEntity> {
    let spendG: SpendEntity;
    let spendP = this.spendRepo.find();
    await spendP.then((spends) => {
      spends.forEach((spend) => {
        if (spend.id === id) {
          spendG = spend;
        }
      });
    });

    return Promise.resolve(spendG);
  }

  getByRangeAndShop(data: string): Promise<SpendEntity[]> {
    // data = "2020-01-01 12:12:12,2020-01-01 12:12:12,1"
    let start: string = data.split(',')[0];
    let end: string = data.split(',')[1];
    let sID: number = Number(data.split(',')[2]);
    return this.spendRepo.find({
      where: {
        date: Between(new Date(start), new Date(end)),
        shopID: sID,
      },
    });
  }
  createSpend(spend: SpendEntity): Promise<SpendEntity> {
    return this.spendRepo.save(spend);
  }

  updateSpend(spend: SpendEntity): Promise<UpdateResult> {
    return this.spendRepo.update(spend.id, spend);
  }
}
