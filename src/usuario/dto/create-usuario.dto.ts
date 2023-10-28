import { IsString, IsBoolean, IsInt, IsDate, Length, IsDateString } from 'class-validator';
export class CreateUsuarioDto {
@IsString()
  @Length(1, 100)
  correo: string;

  @IsString()
  @Length(1, 20)
  contraseña: string;

  @IsString()
  @Length(1, 50)
  primer_nombre: string;

  @IsString()
  @Length(1, 50)
  segundo_nombre: string;

  @IsString()
  @Length(1, 50)
  apellido_paterno: string;

  @IsString()
  @Length(1, 50)
  apellido_materno: string;

  @IsString()
  @Length(1, 20)
  tipo_carnet: string;

  @IsString()
  @Length(1, 100)
  carnet_identidad: string;

  @IsString()
  @Length(1, 20)
  nombre_usuario: string;

  @IsDateString()
  fecha_nacimiento: Date;

  @IsString()
  @Length(1, 11)
  telefono: string;

  @IsString()
  @Length(1, 30)
  pais: string;

  @IsString()
  @Length(1, 20)
  genero: string;

  @IsString()
  @Length(1, 20)
  grado_estudio: string;

  @IsString()
  @Length(1, 200)
  grado_ocupacion: string;

  @IsString()
  @Length(1, 200)
  carrera: string;


  @IsBoolean()
  publicidad: boolean;

  @IsInt()
  institucion_id: number;
}
