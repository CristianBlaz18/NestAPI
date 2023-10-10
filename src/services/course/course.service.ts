// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Courses } from 'src/models/course.module';
// import { Repository } from 'typeorm';

// @Injectable()
// export class CourseService {
//     constructor(@InjectRepository(Courses) private coursesRepository: Repository<Courses>)
//     {
        
//     }

//     async findAll(){
//         return await this.coursesRepository.find();
//     }

//     async findListCourses(){
//         const query = 'CALL sp_listar_cursos1()'
//         return await this.coursesRepository.query(query);
//     }

//     async findbyId(id: number){
//         return await this.coursesRepository.findOneBy({id});
//     }

//     async create(course: Courses){
//         return await this.coursesRepository.save(course);
//     }
//     async update(course: Courses){
//         return await this.coursesRepository.save(course);
//     }

//     async delete(id:number){
//         await this.coursesRepository.delete(id);
//         return 'OK';
//     }
// }