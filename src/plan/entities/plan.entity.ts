import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('tbl_plan')
export class Plan {
  @PrimaryGeneratedColumn()
  plan_id: number;

  @Column()
  plan_nombre: string;

  @Column()
  plan_precio_soles: number;

  @Column()
  plan_precio_dolar: number;
}