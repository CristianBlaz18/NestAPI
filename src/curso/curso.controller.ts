import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CursoService } from './curso.service';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Curso')
@Controller('curso')
export class CursoController {
  constructor(private readonly cursoService: CursoService) {}

  @Post()
  create(@Body() createCursoDto: CreateCursoDto) {
    return this.cursoService.create(createCursoDto);
  }

  @Get()
  findAll() {
    return this.cursoService.findAll();
  }

  @Get('cursosinicio/:id')
  cursosmenuinicio(@Param('id') id:number){
    return this.cursoService.cursosmenuinicio(id);
  }
  @Get('cursos/:id')
  cursos(@Param('id') id:number){
    return this.cursoService.cursos(id);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.cursoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateCursoDto: UpdateCursoDto) {
    return this.cursoService.update(+id, updateCursoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.cursoService.remove(+id);
  }

  
}
