import { Docente } from "src/docente/entities/docente.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'tbl_tipo_carnet_identidad'})
export class TipoCarnetIdentidad {
    @PrimaryGeneratedColumn({ unsigned: true, name: 'tipo_carnet_id' })
    id: number;
    @Column({ type: 'varchar', length: 100, name: 'carnet_nombre' })
    nombre: string;
    // @OneToMany(() => Docente, (docente) => docente.carnet)
    // docentes: Docente[];
}
