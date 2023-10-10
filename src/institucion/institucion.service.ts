import { Injectable } from '@nestjs/common';
import { CreateInstitucionDto } from './dto/create-institucion.dto';
import { UpdateInstitucionDto } from './dto/update-institucion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Institucion } from './entities/institucion.entity';
import { Repository } from 'typeorm';

@Injectable()
export class InstitucionService {
  constructor(
    @InjectRepository(Institucion)
    private institucionRepository: Repository<Institucion>,
  ) {}

  async findAll(): Promise<Institucion[]> {
    return this.institucionRepository.find();
  }

  async findOneById(id: number): Promise<Institucion | undefined> {
    return this.institucionRepository.findOneBy({id});
  }

  async create(createInstitucionDto: CreateInstitucionDto): Promise<Institucion> {
    const nuevaInstitucion = this.institucionRepository.create(createInstitucionDto);
    return this.institucionRepository.save(nuevaInstitucion);
  }

  async update(id: number, updateInstitucionDto: UpdateInstitucionDto): Promise<Institucion> {
    await this.institucionRepository.update(id, updateInstitucionDto);
    return this.findOneById(id);
  }

  async remove(id: number): Promise<void> {
    await this.institucionRepository.delete(id);
  }
}
