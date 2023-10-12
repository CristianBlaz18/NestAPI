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

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '38.17.53.105',
      port: 18485,
      username: 'admin',
      password: 'm9O6RXdU',
      database: 'db_ecorp',
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
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
