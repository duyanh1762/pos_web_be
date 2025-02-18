import { Body, Controller, Post } from '@nestjs/common';
import { GoodsService } from './goods.service';
import { DataModeRequest } from 'src/RequestData';
import { GoodsEntity } from './goods_entity';

@Controller('goods')
export class GoodsController {
  constructor(private goodsService: GoodsService) {}

  @Post()
  handleRequest(@Body() data: DataModeRequest) {
    if (data.mode === 'get' && data.data === '') {
      return this.goodsService.getAll();
    } else if (data.mode === 'create') {
      return this.goodsService.createGoods(data.data as GoodsEntity);
    } else if (data.mode === 'update') {
      return this.goodsService.updateGoods(data.data as GoodsEntity);
    } else {
      return {
        result: 'Mode is not valid !',
      };
    }
  }
}
