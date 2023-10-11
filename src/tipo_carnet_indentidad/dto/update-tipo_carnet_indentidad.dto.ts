import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoCarnetIndentidadDto } from './create-tipo_carnet_indentidad.dto';

export class UpdateTipoCarnetIndentidadDto extends PartialType(CreateTipoCarnetIndentidadDto) {}
