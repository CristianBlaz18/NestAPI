import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CertificadoService } from './certificado.service';
import { CreateCertificadoDto } from './dto/create-certificado.dto';
import { UpdateCertificadoDto } from './dto/update-certificado.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Certificado')
@Controller('certificado')
export class CertificadoController {
  constructor(private readonly certificadoService: CertificadoService) {}

  @Get(':codigoCertificado')
  findOne(@Param('codigoCertificado') codigoCertificado: string) {
    return this.certificadoService.getDetalleCertificado(codigoCertificado);
  }

  // @Post()
  // create(@Body() createCertificadoDto: CreateCertificadoDto) {
  //   return this.certificadoService.create(createCertificadoDto);
  // }

  // @Get()
  // findAll() {
  //   return this.certificadoService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.certificadoService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCertificadoDto: UpdateCertificadoDto) {
  //   return this.certificadoService.update(+id, updateCertificadoDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.certificadoService.remove(+id);
  // }
}
