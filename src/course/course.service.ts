import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CourseService {

  constructor(

    @InjectRepository(Course)
    private readonly courseRepository:Repository<Course>

  ){}

  async create(createCourseDto: CreateCourseDto) {
    const { nombre_curso, precio_curso } = createCourseDto;
    const query = `INSERT INTO tblcurso (nombre_curso, precio_curso) VALUES (?, ?)`;
    await this.courseRepository.query(query, [nombre_curso, precio_curso]);
    return createCourseDto; // Devuelve el DTO enviado en la solicitud
}
  

  async findAll(): Promise<any> {
    const query = 'SELECT * FROM tblcurso';
    return this.courseRepository.query(query);
  }

  async findOne(id: number) {
    const query = 'SELECT * FROM tblcurso WHERE id_curso = ?';
    const result = await this.courseRepository.query(query, [id]);
    if (result && result.length > 0) {
        return result[0]; 
    } else {
        return undefined; 
    }
  }

  async update(id: number, updateCourseDto: UpdateCourseDto) {
    // const { nombre_curso, precio_curso } = updateCourseDto;
    // const query = 'UPDATE tblcurso SET nombre_curso = ?, precio_curso = ? WHERE id_curso = ?';
    // const result = await this.courseRepository.query(query, [nombre_curso, precio_curso, id]);

    return await this.courseRepository.update(id,updateCourseDto);
}


  async remove(id: number) {
    const query = 'DELETE FROM tblcurso WHERE id_curso = ?';
    await this.courseRepository.query(query, [id]);
  }
}
