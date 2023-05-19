import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProvinciaDto } from './dto/create-provincia.dto';
import { UpdateProvinciaDto } from './dto/update-provincia.dto';
import { Provincia, ProvinciaDocument } from '../models/provincia.schema';


@Injectable()
export class ProvinciaService {

  constructor(@InjectModel(Provincia.name) private readonly model: Model<ProvinciaDocument>) {}

  async create(createProvinciaDto: CreateProvinciaDto):Promise<Provincia> {
    return await new this.model({
      ...createProvinciaDto,
    }).save();
  }

  async findAll() {
    return await this.model.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} provincia`;
  }

  update(id: number, updateProvinciaDto: UpdateProvinciaDto) {
    return `This action updates a #${id} provincia`;
  }

  remove(id: number) {
    return `This action removes a #${id} provincia`;
  }
}
