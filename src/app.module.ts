import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InstitucionModule } from './institucion/institucion.module';
import { CategoriaModule } from './categoria/categoria.module';
import { GeneroModule } from './genero/genero.module';

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
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
