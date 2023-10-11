import { Injectable } from '@nestjs/common';
import { CreateDocenteDto } from './dto/create-docente.dto';
import { UpdateDocenteDto } from './dto/update-docente.dto';
import { Docente } from './entities/docente.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DocenteService {
  constructor(
    @InjectRepository(Docente)
    private docenteRepository: Repository<Docente>,
  ) {}

  create(createDocenteDto: CreateDocenteDto) {
    return 'This action adds a new docente';
  }

  async findAll(): Promise<Docente[]>{
    return this.docenteRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} docente`;
  }

  update(id: number, updateDocenteDto: UpdateDocenteDto) {
    return `This action updates a #${id} docente`;
  }

  remove(id: number) {
    return `This action removes a #${id} docente`;
  }
}
