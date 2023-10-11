import { IsNotEmpty, IsString, Length } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity( {name: 'tbl_categoriacurso'})
export class Categoria {
  @PrimaryGeneratedColumn({ unsigned: true, name:'categoria_curso_id'})
  id: number;

  @Column({ type: 'varchar', length: 15, nullable: true , name:'categoria_curso_nombre'})
  nombre: string;
}
