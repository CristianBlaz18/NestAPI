import { PartialType } from '@nestjs/swagger';
import { CreateCapacitacionDetalleDto } from './create-capacitacion-detalle.dto';

export class UpdateCapacitacionDetalleDto extends PartialType(CreateCapacitacionDetalleDto) {}
