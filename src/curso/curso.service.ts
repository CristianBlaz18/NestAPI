import { Injectable } from '@nestjs/common';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Curso } from './entities/curso.entity';
import { Repository } from 'typeorm';
import { CursoFilterDto } from './dto/curso-filter.dto';

@Injectable()
export class CursoService {
  constructor(
    @InjectRepository(Curso)
    private cursoRepository: Repository<Curso>,
  ) {}

  async getCursoComprado(idEstudiante:number,cursoFilterDto: CursoFilterDto) {
    const [getCursComprado] = await this.cursoRepository.query(
      'CALL sp_filtrar_cursos_comprados(?, ?, ?)',
      [idEstudiante, cursoFilterDto.nombre_curso, cursoFilterDto.categoria_curso]
    );
    return getCursComprado;
  }

  // async getCursoComprado(cursoFilterDto: CursoFilterDto) {
  //   const [getCursComprado] = await this.cursoRepository.query(
  //     'CALL sp_filtrar_cursos_comprados(?, ?, ?)',
  //     [cursoFilterDto.id_estudiante,cursoFilterDto.nombre_curso,cursoFilterDto.categoria_curso]
  //   );
  //   return getCursComprado;
  // }
  
  
  // create(createCursoDto: CreateCursoDto) {
  //   return 'This action adds a new curso';
  // }

  async findAll() {
    return this.cursoRepository.find();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} curso1`;
  // }

  // update(id: number, updateCursoDto: UpdateCursoDto) {
  //   return `This action updates a #${id} curso2`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} curso3`;
  // }
  
  async cursosmenuinicio(id:number){
    const query = `Call sp_obtener_cursos(${id})`
    return this.cursoRepository.query(query);

  }

  async cursos(id:number){
    const query = `Call sp_obtener_cursos(${id})`
    return this.cursoRepository.query(query);

  }
}
