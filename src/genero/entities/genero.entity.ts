import { Docente } from "src/docente/entities/docente.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'tbl_genero'})
export class Genero {
    @PrimaryGeneratedColumn({unsigned:true, name: 'genero_id'})
    id:number;
    @Column({ type: 'varchar', length: 30, name: 'genero_nombre' })
    nombre:string;
    @OneToMany(() => Docente, (docente) => docente.genero)
    docentes: Docente[];
}
