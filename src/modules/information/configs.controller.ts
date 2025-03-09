import { Controller, Get, Post, Body } from '@nestjs/common';
import { ConfigsService } from './configs.service';
import { InformationData } from './dto/information.dto';
import { Public, ResponseMessage } from 'src/public.decorator';

@Controller('information')
export class ConfigsController {
  constructor(private readonly configsService: ConfigsService) { }

  @Public()
  @Post()
  @ResponseMessage("Cập nhật thông tin thành công")
  update(@Body() informationData: InformationData) {
    return this.configsService.update(informationData);
  }

  @Public()
  @ResponseMessage("Lấy thông tin thành công")
  @Get()
  findAll() {
    return this.configsService.findAll();
  }
}
