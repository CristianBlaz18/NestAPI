import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmpresaService } from './empresa.service';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Empresa')
@Controller('empresa')
export class EmpresaController {
  constructor(private readonly empresaService: EmpresaService) {}


  @Get(':institucionId')
  async getInfEmpresa(@Param('institucionId') institucionId:number){
    const infEmpresaResult = await this.empresaService.getInfoEmpresa(institucionId);
    return infEmpresaResult;
  }



  // @Post()
  // create(@Body() createEmpresaDto: CreateEmpresaDto) {
  //   return this.empresaService.create(createEmpresaDto);
  // }

  // @Get()
  // findAll() {
  //   return this.empresaService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.empresaService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateEmpresaDto: UpdateEmpresaDto) {
  //   return this.empresaService.update(+id, updateEmpresaDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.empresaService.remove(+id);
  // }
}
