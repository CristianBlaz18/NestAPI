import { Injectable } from '@nestjs/common';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Empresa } from './entities/empresa.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmpresaService {

  constructor(@InjectRepository(Empresa)
  private readonly empresaRepository: Repository<Empresa>){}

  async getInfoEmpresa(institucionId: number): Promise<Empresa[]>{
    const [infEmpresa] = await this.empresaRepository.query('CALL sp_visualizar_info_empresa(?)', [institucionId])
    return infEmpresa;
  }


  // create(createEmpresaDto: CreateEmpresaDto) {
  //   return 'This action adds a new empresa';
  // }

  // findAll() {
  //   return `This action returns all empresa`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} empresa`;
  // }

  // update(id: number, updateEmpresaDto: UpdateEmpresaDto) {
  //   return `This action updates a #${id} empresa`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} empresa`;
  // }
}
