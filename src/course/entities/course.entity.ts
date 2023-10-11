import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'tblcurso' })
export class Course {
    @PrimaryGeneratedColumn()
    id_curso: number;

    @Column()
    nombre_curso: string;

    @Column("decimal", { precision: 10, scale: 2 }) // precision: 10 dígitos, scale: 2 decimales
    precio_curso: number;
}