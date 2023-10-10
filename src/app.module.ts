import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeormService } from './services/conectiondb/conectiondb.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './models/category.module';
import { CategoryController } from './controller/course/category.controller';
import { CategoryService } from './services/category/category.service';
// import { Courses } from './models/course.module';
// import { CourseController } from './controller/course/course.controller';
// import { CourseService } from './services/course/course.service';
import { InstitucionModule } from './institucion/institucion.module';
import { Institucion } from './institucion/entities/institucion.entity';

@Module({
  imports: [
    //Importacion del servicio para conectar a la DB
    TypeOrmModule.forRootAsync({useClass: TypeormService}),
    //Importancion de los servicios
    TypeOrmModule.forFeature([Category]),
    InstitucionModule,
  ],
  controllers: [AppController, CategoryController],
  providers: [AppService, TypeormService, CategoryService],
})
export class AppModule {}
