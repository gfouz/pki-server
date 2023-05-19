import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Provincia, ProvinciaSchema } from '../models/provincia.schema'
import { ProvinciaService } from './provincia.service';
import { ProvinciaController } from './provincia.controller';

@Module({
  controllers: [ProvinciaController],
  providers: [ProvinciaService],
  imports: [
    MongooseModule.forFeature([{ name: Provincia.name, schema: ProvinciaSchema }]),
  ],
})
export class ProvinciaModule {}
