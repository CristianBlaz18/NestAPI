import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Usuario')
@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  async crearUsuario(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioService.crearUsuario(createUsuarioDto);
  }

  @Get(':institucionId/:nombreUsuario')
  getUsuario(@Param('institucionId') institucionId: number, @Param('nombreUsuario') nombreUsuario: string) {
    return this.usuarioService.getUsuario(institucionId,nombreUsuario);
  }

  // @Get()
  // findAll() {
  //   return this.usuarioService.findAll();
  // }

  

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
  //   return this.usuarioService.update(+id, updateUsuarioDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.usuarioService.remove(+id);
  // }
}
