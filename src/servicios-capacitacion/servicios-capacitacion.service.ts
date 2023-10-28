import { Injectable } from '@nestjs/common';
import { CreateServiciosCapacitacionDto } from './dto/create-servicios-capacitacion.dto';
import { UpdateServiciosCapacitacionDto } from './dto/update-servicios-capacitacion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiciosCapacitacion } from './entities/servicios-capacitacion.entity';

@Injectable()
export class ServiciosCapacitacionService {

  constructor(
    @InjectRepository(ServiciosCapacitacion)
    private readonly servicioCapRepository: Repository<ServiciosCapacitacion>,
  ) {}

  async getServicioCapacitacion(institucionId: number, estadoCapacitacion:number): Promise<ServiciosCapacitacion[]> {
    const servicioCap = await this.servicioCapRepository.query('CALL sp_listar_mas_servicios(?,?)', [institucionId, estadoCapacitacion]);
    return servicioCap;
  }


  
  create(createServiciosCapacitacionDto: CreateServiciosCapacitacionDto) {
    return 'This action adds a new serviciosCapacitacion';
  }

  findAll() {
    return `This action returns all serviciosCapacitacion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} serviciosCapacitacion`;
  }

  update(id: number, updateServiciosCapacitacionDto: UpdateServiciosCapacitacionDto) {
    return `This action updates a #${id} serviciosCapacitacion`;
  }

  remove(id: number) {
    return `This action removes a #${id} serviciosCapacitacion`;
  }
}
