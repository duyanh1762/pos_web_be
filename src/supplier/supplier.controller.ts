import { Body, Controller, Post } from '@nestjs/common';
import { SupplierService } from './supplier.service';
import { DataModeRequest } from 'src/RequestData';
import { SupplierEntity } from './supplier_entity';

@Controller('supplier')
export class SupplierController {
    constructor(private supService:SupplierService){}
      @Post()
      handleRequest(@Body() data: DataModeRequest) {
        if (data.mode === 'get') {
          return this.supService.getAll();
        } else if (data.mode === 'create') {
          return this.supService.createSup(data.data as SupplierEntity);
        } else if (data.mode === 'update') {
          return this.supService.updateSup(data.data as SupplierEntity);
        } else {
          return {
            result: 'Mode is not valid !',
          };
        }
      }
}
