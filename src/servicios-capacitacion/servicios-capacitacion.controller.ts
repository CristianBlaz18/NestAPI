import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ServiciosCapacitacionService } from './servicios-capacitacion.service';
import { CreateServiciosCapacitacionDto } from './dto/create-servicios-capacitacion.dto';
import { UpdateServiciosCapacitacionDto } from './dto/update-servicios-capacitacion.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('SerciciosCapacitacion')
@Controller('serviciosCapacitacion')
export class ServiciosCapacitacionController {
  constructor(private readonly serviciosCapacitacionService: ServiciosCapacitacionService) {}

  @Get(':institucionId/:estadoCapacitacion')
  async getPlansByInstitucion(@Param('institucionId') institucionId: number,@Param('estadoCapacitacion') estadoCapacitacion: number) {
    const [results] = await this.serviciosCapacitacionService.getServicioCapacitacion(institucionId ,estadoCapacitacion);
    return results;
    
  }
  

  // @Post()
  // create(@Body() createServiciosCapacitacionDto: CreateServiciosCapacitacionDto) {
  //   return this.serviciosCapacitacionService.create(createServiciosCapacitacionDto);
  // }

  // @Get()
  // findAll() {
  //   return this.serviciosCapacitacionService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.serviciosCapacitacionService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateServiciosCapacitacionDto: UpdateServiciosCapacitacionDto) {
  //   return this.serviciosCapacitacionService.update(+id, updateServiciosCapacitacionDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.serviciosCapacitacionService.remove(+id);
  // }
}
