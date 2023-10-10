import { IsNotEmpty, IsString, Length } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity( {name: 'tbl_categoriacurso'})
export class Category {
  @PrimaryGeneratedColumn({ unsigned: true, name:'categoria_curso_id'})
  id: number;

  @Column({ type: 'varchar', length: 15, nullable: true , name:'categoria_curso_nombre'})
  @IsNotEmpty({ message: 'El nombre de la categoría no puede estar vacío' })
  @IsString({ message: 'El nombre de la categoría debe ser una cadena de texto' })
  @Length(1, 15, { message: 'El nombre de la categoría debe tener entre 1 y 15 caracteres' })
  nombre: string;
}