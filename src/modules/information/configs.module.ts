import { Module } from '@nestjs/common';
import { ConfigsService } from './configs.service';
import { ConfigsController } from './configs.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Information, InformationSchema } from './schemas/information.schemas';

@Module({
  imports: [MongooseModule.forFeature([{ name: Information.name, schema: InformationSchema }])],
  controllers: [ConfigsController],
  providers: [ConfigsService],
  exports: [ConfigsService]
})
export class InformationModule { }
