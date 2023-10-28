import { Module } from '@nestjs/common';
import { ServiciosCapacitacionService } from './servicios-capacitacion.service';
import { ServiciosCapacitacionController } from './servicios-capacitacion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiciosCapacitacion } from './entities/servicios-capacitacion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ServiciosCapacitacion])],
  controllers: [ServiciosCapacitacionController],
  providers: [ServiciosCapacitacionService],
})
export class ServiciosCapacitacionModule {}
