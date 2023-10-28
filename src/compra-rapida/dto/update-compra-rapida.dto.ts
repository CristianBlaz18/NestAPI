import { PartialType } from '@nestjs/swagger';
import { CreateCompraRapidaDto } from './create-compra-rapida.dto';

export class UpdateCompraRapidaDto extends PartialType(CreateCompraRapidaDto) {}
