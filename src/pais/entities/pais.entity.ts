import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'tbl_pais'})
export class Pais {
    @PrimaryGeneratedColumn({ unsigned: true, name: 'pais_id' })
    id: number
    @Column({type: 'varchar', length: 30, name :'pais_nombre'})
    nombre: string;
    @Column({type: 'varchar', length: 10, name: 'pais_codigo'})
    codigo: string;

}
