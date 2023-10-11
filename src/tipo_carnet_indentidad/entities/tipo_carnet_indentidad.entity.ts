import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'tbl_tipo_carnet_identidad'})
export class TipoCarnetIndentidad {
    @PrimaryGeneratedColumn({ unsigned: true, name: 'tipo_carnet_id' })
    id: number;
    @Column({ type: 'varchar', length: 100, name: 'carnet_nombre' })
    nombre: string;

}
