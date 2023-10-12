import { Docente } from "src/docente/entities/docente.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'tbl_pais'})
export class Pais {
    @PrimaryGeneratedColumn({ unsigned: true, name: 'pais_id' })
    id: number
    @Column({type: 'varchar', length: 30, name :'pais_nombre'})
    nombre: string;
    @Column({type: 'varchar', length: 10, name: 'pais_codigo'})
    codigo: string;
    // @OneToMany(() => Docente, (docente) => docente.pais)
    // docentes: Docente[];

}
