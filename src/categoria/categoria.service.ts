import { Injectable } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Categoria }from './entities/categoria.entity'
import { Repository } from 'typeorm';

@Injectable()
export class CategoriaService {
  constructor(
    @InjectRepository(Categoria)
    private categoriaRepository: Repository<Categoria>,
  ) {}

  async create(createCategoriaDto: CreateCategoriaDto): Promise<Categoria> {
    const nuevaCategoria = this.categoriaRepository.create(createCategoriaDto);
    return this.categoriaRepository.save(nuevaCategoria);
  }

  async findAll(): Promise<Categoria[]> {
    return this.categoriaRepository.find();
  }

  async findOneById(id: number): Promise<Categoria | undefined>  {
    const nuevaCategoria = this.categoriaRepository.findOneBy({id});
    return this.categoriaRepository.findOneBy({id});
  }

  async update(id: number, updateCategoriaDto: UpdateCategoriaDto): Promise<Categoria> {
    await this. categoriaRepository.update(id, updateCategoriaDto);
    return this.findOneById(id);
  }

  async remove(id: number): Promise<void> {
    await this.categoriaRepository.delete(id);
  }
}
