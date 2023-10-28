import { PartialType } from '@nestjs/swagger';
import { CreateServiciosCapacitacionDto } from './create-servicios-capacitacion.dto';

export class UpdateServiciosCapacitacionDto extends PartialType(CreateServiciosCapacitacionDto) {}
