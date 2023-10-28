import { Injectable } from '@nestjs/common';
import { CreateCertificadoDto } from './dto/create-certificado.dto';
import { UpdateCertificadoDto } from './dto/update-certificado.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Certificado } from './entities/certificado.entity';

@Injectable()
export class CertificadoService {

  constructor(
    @InjectRepository(Certificado)
    private readonly certificadoRepository: Repository<Certificado>,
    
  ) {}

  async getDetalleCertificado(codigoCertificado:string){
    const [detCertificado]= await this.certificadoRepository.query('CALL sp_validar_certificado(?)', [codigoCertificado]);
    return detCertificado;
  }



  create(createCertificadoDto: CreateCertificadoDto) {
    return 'This action adds a new certificado';
  }

  findAll() {
    return `This action returns all certificado`;
  }

  findOne(id: number) {
    return `This action returns a #${id} certificado`;
  }

  update(id: number, updateCertificadoDto: UpdateCertificadoDto) {
    return `This action updates a #${id} certificado`;
  }

  remove(id: number) {
    return `This action removes a #${id} certificado`;
  }
}
