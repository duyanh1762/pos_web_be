import { Body, Controller, Post } from '@nestjs/common';
import { DataModeRequest } from 'src/RequestData';
import { GroupService } from './group.service';
import { GroupEntity } from './group.entity/group.entity';

@Controller('group')
export class GroupController {
    constructor(private groupService:GroupService){}

    @Post()
    handlerDataRequest(@Body() data: DataModeRequest) {
      if (data.mode === 'get') {
        return this.groupService.getAll();
      } else if (data.mode === 'create') {
        return this.groupService.createGroup(data.data as GroupEntity);
      } else if (data.mode === 'update') {
        return this.groupService.updateGroup(data.data as GroupEntity);
      } else {
        return {
          result: 'Mode is not valid !',
        };
      }
    }
}
