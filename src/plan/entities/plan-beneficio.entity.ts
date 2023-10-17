import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('tbl_plan_beneficios')
export class Beneficio {
  @PrimaryGeneratedColumn()
  plan_beneficios_id: number;

  @Column()
  plan_beneficios_descripcion: string;

  @Column()
  plan_beneficios_limite: number;

  @Column()
  plan_id: number;
}// Añade esta línea de exportación

