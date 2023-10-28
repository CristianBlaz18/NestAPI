import { Injectable } from '@nestjs/common';
import { CreateCompraRapidaDto } from './dto/create-compra-rapida.dto';
import { UpdateCompraRapidaDto } from './dto/update-compra-rapida.dto';
import { CompraRapida } from './entities/compra-rapida.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CompraRapidaService {
  constructor(
    @InjectRepository(CompraRapida)
    private compraRapidaRepository: Repository<CompraRapida>,
  ) {}
  
  async createCompra(createCompraRapidaDto: CreateCompraRapidaDto) {
    try {
      // Aquí debes adaptar el procedimiento almacenado a través de TypeORM
      // Para ejecutar el procedimiento almacenado, debes utilizar el método query o entityManager

      // Ejemplo utilizando el método query
      const query = 'CALL sp_compra_servicio(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);';
      const parameters = [
        createCompraRapidaDto.id_estudiante,
        createCompraRapidaDto.id_servicio,
        createCompraRapidaDto.tipo_servicio,
        createCompraRapidaDto.token_pasarela,
        createCompraRapidaDto.numero_transaccion,
        createCompraRapidaDto.id_cupon,
        createCompraRapidaDto.tipo_moneda,
        createCompraRapidaDto.nombre,
        createCompraRapidaDto.imagen,
        createCompraRapidaDto.tiempo_acceso,
        createCompraRapidaDto.precio_actual_soles,
        createCompraRapidaDto.precio_actual_dolares,
        createCompraRapidaDto.estudiante_pais,
        createCompraRapidaDto.micupon,
        createCompraRapidaDto.plan_codigo,
      ];
      const result = await this.compraRapidaRepository.query(query, parameters);

      return result;
    } catch (error) {
      throw new Error('Error al subir');
    }
  }
  create(createCompraRapidaDto: CreateCompraRapidaDto) {
    return 'This action adds a new compraRapida';
  }

  findAll() {
    return `This action returns all compraRapida`;
  }

  findOne(id: number) {
    return `This action returns a #${id} compraRapida`;
  }

  update(id: number, updateCompraRapidaDto: UpdateCompraRapidaDto) {
    return `This action updates a #${id} compraRapida`;
  }

  remove(id: number) {
    return `This action removes a #${id} compraRapida`;
  }
}
