import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsNotEmpty, IsString, IsInt, Length } from 'class-validator';

@Entity({ name: 'tbl_institucion' })
export class Institucion {
  @PrimaryGeneratedColumn({ unsigned: true, name: 'institucion_id' })
  id: number;

  @Column({ type: 'varchar', length: 100, name: 'institucion_nombre' })
  nombre: string;

  @Column({ type: 'varchar', length: 500, name: 'institucion_descripcion' })
  descripcion: string;

  @Column({ type: 'blob', name: 'institucion_logo' })
  logo: Buffer;

  @Column({ type: 'varchar', length: 100, name: 'institucion_slogan' })
  slogan: string;

  @Column({ type: 'varchar', length: 500, name: 'institucion_mision' })
  mision: string;

  @Column({ type: 'varchar', length: 500, name: 'institucion_vision' })
  vision: string;

  @Column({ type: 'varchar', length: 500, name: 'institucion_vista_certificado' })
  vistaCertificado: string;

  @Column({ type: 'tinyint', name: 'institucion_estado' })
  estado: number;
}

