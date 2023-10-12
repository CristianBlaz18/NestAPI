import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'tbl_calificacion'})
export class Calificacion {
    @PrimaryGeneratedColumn({ unsigned: true, name: 'calificacion_id' })
    id: number;
  
    @Column({ type: 'int', unsigned: true, name: 'calificacion_nota' })
    nota: number;
  
    @Column({ type: 'varchar', length: 300, name: 'calificacion_comentario' })
    comentario: string;
    
    //@ManyToOne(() => Curso, (curso) => curso.calificaciones)
    // curso: Curso;
  
    // @ManyToOne(() => Modulo, (modulo) => modulo.calificaciones)
    // modulo: Modulo;
  
    // @ManyToOne(() => Matricula, (matricula) => matricula.calificaciones)
    // matricula: Matricula;

    @Column({ type: 'int', unsigned: true, name: 'calificacion_curso_id' })
    curso: number;

    @Column({ type: 'int', unsigned: true, name: 'calificacion_modulo_id' })
    modulo: number;

    @Column({ type: 'int', unsigned: true, name: 'calificacion_matricula_id' })
    matricula: number;
}
