import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeormService } from './services/conectiondb/conectiondb.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    //Importacion del servicio para conectar a la DB
    TypeOrmModule.forRootAsync({useClass: TypeormService}),
    //Importancion de los servicios
    TypeOrmModule.forFeature([]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
