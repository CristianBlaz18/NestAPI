import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsuarioService {

  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ) {}

  async crearUsuario(createUsuarioDto: CreateUsuarioDto){
    try{
      const query = 'CALL sp_crear_usuario(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);';
      const parameters=[
        createUsuarioDto.correo,
        createUsuarioDto.contraseña,
        createUsuarioDto.primer_nombre,
        createUsuarioDto.segundo_nombre,
        createUsuarioDto.apellido_paterno,
        createUsuarioDto.apellido_materno,
        createUsuarioDto.tipo_carnet,
        createUsuarioDto.carnet_identidad,
        createUsuarioDto.nombre_usuario,
        createUsuarioDto.fecha_nacimiento,
        createUsuarioDto.telefono,
        createUsuarioDto.pais,
        createUsuarioDto.genero,
        createUsuarioDto.grado_estudio,
        createUsuarioDto.grado_ocupacion,
        createUsuarioDto.carrera,
        createUsuarioDto.publicidad,
        createUsuarioDto.institucion_id


      ];
      const result = await this.usuarioRepository.query(query,parameters);
      return result;
      
    } catch (error) {
      throw new Error('Error al subir');
    }
  }
  async getUsuario(institucionId: number,nombreUsuario: string){
    const [usuarioget]= await this.usuarioRepository.query('CALL sp_validar_usuario(?,?)',[institucionId,nombreUsuario])
    return usuarioget;

  }


  create(createUsuarioDto: CreateUsuarioDto) {
    return 'This action adds a new usuario';
  }

  findAll() {
    return `This action returns all usuario`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usuario`;
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
