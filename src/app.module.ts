import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeormService } from './services/conectiondb/conectiondb.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Courses } from './models/course.module';
import { CourseController } from './controller/course/course.controller';
import { CourseService } from './services/course/course.service';

@Module({
  imports: [
    //Importacion del servicio para conectar a la DB
    TypeOrmModule.forRootAsync({useClass: TypeormService}),
    //Importancion de los servicios
    TypeOrmModule.forFeature([Courses]),
  ],
  controllers: [AppController, CourseController],
  providers: [AppService, TypeormService, CourseService],
})
export class AppModule {}
