import { Module } from '@nestjs/common';
import { GeneroService } from './genero.service';
import { GeneroController } from './genero.controller';
import { Genero } from './entities/genero.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Genero])],
  controllers: [GeneroController],
  providers: [GeneroService],
})
export class GeneroModule {}
