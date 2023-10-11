import { Module } from '@nestjs/common';
import { TipoCarnetIndentidadService } from './tipo_carnet_indentidad.service';
import { TipoCarnetIndentidadController } from './tipo_carnet_indentidad.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoCarnetIndentidad } from './entities/tipo_carnet_indentidad.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TipoCarnetIndentidad])],
  controllers: [TipoCarnetIndentidadController],
  providers: [TipoCarnetIndentidadService],
})
export class TipoCarnetIndentidadModule {}
