import { Module } from '@nestjs/common';
import { CompraRapidaService } from './compra-rapida.service';
import { CompraRapidaController } from './compra-rapida.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompraRapida } from './entities/compra-rapida.entity';

@Module({
  imports:[TypeOrmModule.forFeature([CompraRapida])],
  controllers: [CompraRapidaController],
  providers: [CompraRapidaService],
})
export class CompraRapidaModule {}
