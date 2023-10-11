import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoCarnetIndentidadService } from './tipo_carnet_indentidad.service';
import { CreateTipoCarnetIndentidadDto } from './dto/create-tipo_carnet_indentidad.dto';
import { UpdateTipoCarnetIndentidadDto } from './dto/update-tipo_carnet_indentidad.dto';

@Controller('tipocarnet')
export class TipoCarnetIndentidadController {
  constructor(private readonly tipoCarnetIndentidadService: TipoCarnetIndentidadService) {}

  @Post()
  create(@Body() createTipoCarnetIndentidadDto: CreateTipoCarnetIndentidadDto) {
    return this.tipoCarnetIndentidadService.create(createTipoCarnetIndentidadDto);
  }

  @Get()
  findAll() {
    return this.tipoCarnetIndentidadService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.tipoCarnetIndentidadService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateTipoCarnetIndentidadDto: UpdateTipoCarnetIndentidadDto) {
    return this.tipoCarnetIndentidadService.update(+id, updateTipoCarnetIndentidadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.tipoCarnetIndentidadService.remove(+id);
  }
}
