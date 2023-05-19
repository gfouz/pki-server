import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, HttpException   } from '@nestjs/common';
import { Response } from 'express';
import { ProvinciaService } from './provincia.service';
import { CreateProvinciaDto } from './dto/create-provincia.dto';
import { UpdateProvinciaDto } from './dto/update-provincia.dto';


@Controller('provincia')
export class ProvinciaController {
  constructor(private readonly provinciaService: ProvinciaService) {}
  
  @Post()
  create(@Body() createProvinciaDto: CreateProvinciaDto, @Res() res: Response ) {
    try {
          this.provinciaService.create(createProvinciaDto);
          return res.status(HttpStatus.OK).json({msg:"provincia created"});
        } catch (err) {
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'something went wrong!',
              }, HttpStatus.FORBIDDEN, {
                cause: err
              });
        }
    }
  

  @Get()
  async findAll( @Res() res: Response ) {
    const result = await this.provinciaService.findAll();

    return res.status(200).json({msg:"todas las provincias", result})
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.provinciaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProvinciaDto: UpdateProvinciaDto) {
    return this.provinciaService.update(+id, updateProvinciaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.provinciaService.remove(+id);
  }
}
