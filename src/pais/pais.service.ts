import { Injectable } from '@nestjs/common';
import { CreatePaisDto } from './dto/create-pais.dto';
import { UpdatePaisDto } from './dto/update-pais.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Pais } from './entities/pais.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PaisService {
  constructor(
    @InjectRepository(Pais)
    private paisRepository: Repository<Pais>,
  ){}
  create(createPaiDto: CreatePaisDto) {
    return 'This action adds a new pai';
  }

  findAll() {
    return `This action returns all pais`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pai`;
  }

  update(id: number, updatePaisDto: UpdatePaisDto) {
    return `This action updates a #${id} pai`;
  }

  remove(id: number) {
    return `This action removes a #${id} pai`;
  }
}
