import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GoodsEntity } from './goods_entity';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class GoodsService {
  constructor(
    @InjectRepository(GoodsEntity)
    private readonly goodsRepo: Repository<GoodsEntity>,
  ) {}

  getAll(): Promise<GoodsEntity[]> {
    return this.goodsRepo.find();
  }

  createGoods(goods: GoodsEntity): Promise<GoodsEntity> {
    return this.goodsRepo.save(goods);
  }

  updateGoods(goods: GoodsEntity): Promise<UpdateResult> {
    return this.goodsRepo.update(goods.id, goods);
  }
}
