import { Injectable } from '@nestjs/common';
import { CreateCalificacionDto } from './dto/create-calificacion.dto';
import { UpdateCalificacionDto } from './dto/update-calificacion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Calificacion } from './entities/calificacion.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CalificacionService {
  constructor(
    @InjectRepository(Calificacion)
    private calificacionRepository: Repository<Calificacion>,
  ){}

  create(createCalificacionDto: CreateCalificacionDto) {
    return 'This action adds a new calificacion';
  }

  async findAll() {
    return this.calificacionRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} calificacion`;
  }

  update(id: number, updateCalificacionDto: UpdateCalificacionDto) {
    return `This action updates a #${id} calificacion`;
  }

  remove(id: number) {
    return `This action removes a #${id} calificacion`;
  }

  async calificacionesinicio(id:number){
    const query = `Call sp_obtener_cursos(${id})`
    return this.calificacionRepository.query(query);
  }
}
