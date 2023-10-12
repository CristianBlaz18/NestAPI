import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InstitucionModule } from './institucion/institucion.module';
import { CategoriaModule } from './categoria/categoria.module';
import { GeneroModule } from './genero/genero.module';
import { PaisModule } from './pais/pais.module';
import { TipoCarnetIndentidadModule } from './tipo_carnet_indentidad/tipo_carnet_indentidad.module';
import { DocenteModule } from './docente/docente.module';
import { TutorModule } from './tutor/tutor.module';
import { CursoModule } from './curso/curso.module';
import { ConfigModule } from '@nestjs/config';
import { CalificacionModule } from './calificacion/calificacion.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      autoLoadEntities: true,
      synchronize: false,
    }),
    InstitucionModule,
    CategoriaModule,
    GeneroModule,
    PaisModule,
    TipoCarnetIndentidadModule,
    DocenteModule,
    TutorModule,
    CursoModule,
    CalificacionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
