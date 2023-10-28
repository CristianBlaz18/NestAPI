import { Injectable } from '@nestjs/common';
import { CreateCapacitacionDetalleDto } from './dto/create-capacitacion-detalle.dto';
import { UpdateCapacitacionDetalleDto } from './dto/update-capacitacion-detalle.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CapacitacionDetalle } from './entities/capacitacion-detalle.entity';
import { CapacitacionServicios } from './entities/capacitacion-servicios.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CapacitacionDetalleService {

  constructor(
    @InjectRepository(CapacitacionDetalle)
    private readonly CapacitacionDetRository: Repository<CapacitacionDetalle>,
    @InjectRepository(CapacitacionServicios) 
    private readonly CapacitacionServRepository: Repository<CapacitacionServicios>,
  ) {}

  async getDetalleCapacitacion(institucionId: number,capacitacionId: number): Promise<CapacitacionDetalle[]> {
    const DetCapacitacion = await this.CapacitacionDetRository.query('CALL sp_filtrar_detalle_capacitacion(?,?)', [institucionId,capacitacionId]);
    return DetCapacitacion;
  }
  async getCapacitacionCurEx(institucionId: number): Promise<CapacitacionServicios[]> {
    const ServCapacitacion = await this.CapacitacionServRepository.query('CALL sp_listar_cursos_externos_capacitacion(?)', [institucionId]);
    return ServCapacitacion;
  }

  create(createCapacitacionDetalleDto: CreateCapacitacionDetalleDto) {
    return 'This action adds a new capacitacionDetalle';
  }

  findAll() {
    return `This action returns all capacitacionDetalle`;
  }

  findOne(id: number) {
    return `This action returns a #${id} capacitacionDetalle`;
  }

  update(id: number, updateCapacitacionDetalleDto: UpdateCapacitacionDetalleDto) {
    return `This action updates a #${id} capacitacionDetalle`;
  }

  remove(id: number) {
    return `This action removes a #${id} capacitacionDetalle`;
  }
}
