import { Module } from '@nestjs/common';
import { CapacitacionDetalleService } from './capacitacion-detalle.service';
import { CapacitacionDetalleController } from './capacitacion-detalle.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CapacitacionDetalle } from './entities/capacitacion-detalle.entity';
import { CapacitacionServicios } from './entities/capacitacion-servicios.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CapacitacionDetalle,CapacitacionServicios])],
  controllers: [CapacitacionDetalleController],
  providers: [CapacitacionDetalleService],
})
export class CapacitacionDetalleModule {}
