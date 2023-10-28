import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CompraRapidaService } from './compra-rapida.service';
import { CreateCompraRapidaDto } from './dto/create-compra-rapida.dto';
import { UpdateCompraRapidaDto } from './dto/update-compra-rapida.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('CompraRapida')
@Controller('compra-rapida')
export class CompraRapidaController {
  constructor(private readonly compraRapidaService: CompraRapidaService) {}

  // @Post()
  // create(@Body() requestBody: any) {
  //   return this.compraRapidaService.create(requestBody);
  // }
  @Post()
  create(@Body() createCompraRapidaDto: CreateCompraRapidaDto) {
    return this.compraRapidaService.createCompra(createCompraRapidaDto);
  }

  // @Get()
  // findAll() {
  //   return this.compraRapidaService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.compraRapidaService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCompraRapidaDto: UpdateCompraRapidaDto) {
  //   return this.compraRapidaService.update(+id, updateCompraRapidaDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.compraRapidaService.remove(+id);
  // }
}
