import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IeBillEntity } from './ie_bill_entity';
import { Between, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class IeBillService {
  constructor(
    @InjectRepository(IeBillEntity)
    private readonly ieBillRepo: Repository<IeBillEntity>,
  ) {}

  getAll(): Promise<IeBillEntity[]> {
    return this.ieBillRepo.find();
  }

  getByShopID(sID: number): Promise<IeBillEntity[]> {
    return this.ieBillRepo.find({
      where: { shopID: sID },
    });
  }

  getByRangeTime(data: string): Promise<IeBillEntity[]> {
    // data = "2020-01-01 12:12:12,2020-01-01 12:12:12"
    let start: string = data.split(',')[0];
    let end: string = data.split(',')[1];
    return this.ieBillRepo.find({
      where: { confirmAt: Between(new Date(start), new Date(end)) },
    });
  }

  getByRangeAndShop(data: string): Promise<IeBillEntity[]> {
    // data = "2020-01-01 12:12:12,2020-01-01 12:12:12,1"
    let start: string = data.split(',')[0];
    let end: string = data.split(',')[1];
    let sID: number = Number(data.split(',')[2]);
    return this.ieBillRepo.find({
      where: {
        confirmAt: Between(new Date(start), new Date(end)),
        shopID: sID,
      },
    });
  }

  createIE(b: IeBillEntity): Promise<IeBillEntity> {
    return this.ieBillRepo.save(b);
  }

  updateIE(b: IeBillEntity): Promise<UpdateResult> {
    return this.ieBillRepo.update(b.id, b);
  }

  convertUtcToGmtPlus7(utcDate: string): Date {
    const date = new Date(utcDate);

    // Lấy múi giờ GMT+7 (7 tiếng)
    const offset = 7 * 60; // 7 giờ = 7 * 60 phút

    // Chuyển đổi UTC sang GMT+7 bằng cách cộng vào offset (tính theo phút)
    const gmtPlus7Date = new Date(date.getTime() + offset * 60 * 1000);

    return gmtPlus7Date;
  }
}
