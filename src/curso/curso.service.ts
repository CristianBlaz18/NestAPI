import { Injectable } from '@nestjs/common';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Curso } from './entities/curso.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CursoService {
  constructor(
    @InjectRepository(Curso)
    private cursoRepository: Repository<Curso>,
  ) {}
  
  create(createCursoDto: CreateCursoDto) {
    return 'This action adds a new curso';
  }

  async findAll() {
    return this.cursoRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} curso1`;
  }

  update(id: number, updateCursoDto: UpdateCursoDto) {
    return `This action updates a #${id} curso2`;
  }

  remove(id: number) {
    return `This action removes a #${id} curso3`;
  }

  async cursosmenuinicio(id:number){
    const query = `Call sp_obtener_cursos(${id})`
    return this.cursoRepository.query(query);

  }
}
