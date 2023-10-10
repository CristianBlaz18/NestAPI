import { Category} from 'src/models/category.module';
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CategoryService} from 'src/services/category/category.service';


@Controller('categoria-cursos')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Get()
  async findAll(): Promise<Category[]> {
    return this.categoryService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Category> {
    return this.categoryService.findOneById(id);
  }

  @Post()
  async create(@Body() categoriaCursoData: Category): Promise<Category> {
    return this.categoryService.create(categoriaCursoData);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() categoriaCursoData: Category): Promise<Category> {
    return this.categoryService.update(id, categoriaCursoData);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.categoryService.remove(id);
  }
}
