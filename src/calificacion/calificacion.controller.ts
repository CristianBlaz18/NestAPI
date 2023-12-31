import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CalificacionService } from './calificacion.service';
import { CreateCalificacionDto } from './dto/create-calificacion.dto';
import { UpdateCalificacionDto } from './dto/update-calificacion.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Calificacion')
@Controller('calificacion')
export class CalificacionController {
  constructor(private readonly calificacionService: CalificacionService) {}

  @Post()
  create(@Body() createCalificacionDto: CreateCalificacionDto) {
    return this.calificacionService.create(createCalificacionDto);
  }

  @Get()
  findAll() {
    return this.calificacionService.findAll();
  }

  @Get('calificacionesinicio/:id')
  calificacionesinicio(@Param('id') id:number){
    return this.calificacionService.calificacionesinicio(id);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.calificacionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCalificacionDto: UpdateCalificacionDto) {
    return this.calificacionService.update(+id, updateCalificacionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.calificacionService.remove(+id);
  }
}
