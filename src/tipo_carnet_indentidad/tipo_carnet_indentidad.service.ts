import { Injectable } from '@nestjs/common';
import { CreateTipoCarnetIndentidadDto } from './dto/create-tipo_carnet_indentidad.dto';
import { UpdateTipoCarnetIndentidadDto } from './dto/update-tipo_carnet_indentidad.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TipoCarnetIdentidad } from './entities/tipo_carnet_indentidad.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TipoCarnetIndentidadService {
  constructor(
    @InjectRepository(TipoCarnetIdentidad)
    private tipocarnetidentidadRepository: Repository<TipoCarnetIdentidad>,
  ) {}

  create(createTipoCarnetIndentidadDto: CreateTipoCarnetIndentidadDto) {
    return 'This action adds a new tipoCarnetIndentidad';
  }

  findAll() {
    return `This action returns all tipoCarnetIndentidad`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tipoCarnetIndentidad`;
  }

  update(id: number, updateTipoCarnetIndentidadDto: UpdateTipoCarnetIndentidadDto) {
    return `This action updates a #${id} tipoCarnetIndentidad`;
  }

  remove(id: number) {
    return `This action removes a #${id} tipoCarnetIndentidad`;
  }
}
