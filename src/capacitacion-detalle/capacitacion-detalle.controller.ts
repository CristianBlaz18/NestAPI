import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CapacitacionDetalleService } from './capacitacion-detalle.service';
import { CreateCapacitacionDetalleDto } from './dto/create-capacitacion-detalle.dto';
import { UpdateCapacitacionDetalleDto } from './dto/update-capacitacion-detalle.dto';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('CapacitacionDetalle')
@Controller('capacitacionDetalle')
export class CapacitacionDetalleController {
  constructor(private readonly capacitacionDetalleService: CapacitacionDetalleService) {}


  @Get(':institucionId/:capacitacionId')
  async getDetalleCapacitacion(@Param('institucionId') institucionId: number , @Param('capacitacionId') capacitacionId: number ){

    const results = await this.capacitacionDetalleService.getDetalleCapacitacion(institucionId,capacitacionId);
    
    if(results[0] && Array.isArray(results[0])){

      const mappedCapacitacion = results[0].map((capacitacionDet: any)=>({
        capacitacion_nombre: capacitacionDet.capacitacion_nombre,
        capacitacion_imagen: capacitacionDet.capacitacion_imagen,
        capacitacion_descripcion:capacitacionDet.capacitacion_descripcion,
        cursos_externos:[],
      }))
      for(const capacitacion of mappedCapacitacion){
        const servicios = await this.capacitacionDetalleService.getCapacitacionCurEx(institucionId)
        if(Array.isArray(servicios[0])){
          capacitacion.cursos_externos = servicios[0].map((externo: any)=>({
            cursos_externos_id:externo.cursos_externo_id,
            curso_externo_nombre:externo.curso_externo_nombre
          }))
        }
      }
      return mappedCapacitacion;
    }else{
      return["No hay datos"]
    }
  }

  // @Post()
  // create(@Body() createCapacitacionDetalleDto: CreateCapacitacionDetalleDto) {
  //   return this.capacitacionDetalleService.create(createCapacitacionDetalleDto);
  // }

  // @Get()
  // findAll() {
  //   return this.capacitacionDetalleService.findAll();
  // }

  
  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCapacitacionDetalleDto: UpdateCapacitacionDetalleDto) {
  //   return this.capacitacionDetalleService.update(+id, updateCapacitacionDetalleDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.capacitacionDetalleService.remove(+id);
  // }
}
