import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from 'src/models/category.module';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async findAll(): Promise<Category[]> {
    return this.categoryRepository.find();
  }

  async findOneById(id: number): Promise<Category | undefined> {
    return this.categoryRepository.findOneBy({id});
  }

  async create(categoryData: Category): Promise<Category> {
    const nuevaCategoriaCurso = this.categoryRepository.create(categoryData);
    return this.categoryRepository.save(nuevaCategoriaCurso);
  }

  async update(id: number, categoriaCursoData: Category): Promise<Category> {
    await this.categoryRepository.update(id, categoriaCursoData);
    return this.findOneById(id);
  }

  async remove(id: number): Promise<void> {
    await this.categoryRepository.delete(id);
  }
}

