import { Genero } from "src/genero/entities/genero.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'tbl_docente'})
export class Docente {
    @PrimaryGeneratedColumn({unsigned: true, name: 'docente_id' })
    id: number;

    @Column({ type: 'varchar', name: 'docente_primer_nombre', length: 100 })
    nombre: string;

    @Column({ type: 'varchar', name: 'docente_segundo_nombre', length: 100 })
    nombre2: string;

    @Column({ type: 'varchar', name: 'docente_apellido_paterno', length: 100 })
    apepaterno: string;

    @Column({ type: 'varchar', name: 'docente_apellido_materno', length: 100 })
    apematerno: string;

    @Column({ type: 'varchar', name: 'docente_correo', length: 200 })
    correo: string;

    @Column({ type: 'date', name: 'docente_fecha_nacimiento' })
    fecha_nacimiento: Date;

    @Column({ type: 'varchar', name: 'docente_descripción', length: 500 })
    descripcion: string;

    @Column({ type: 'varchar', name: 'docente_imagen', length: 100 })
    imagen: string;

    @Column({ type: 'varchar', name: 'docente_grado', length: 100 })
    grado: string;

    @Column({ type: 'varchar', name: 'docente_telefono', length: 11 })
    telefono: string;

    @Column({ type: 'varchar', name: 'docente_usuario', length: 30 })
    usuario: string;

    @Column({ type: 'varchar', name: 'docente_clave', length: 20 })
    clave: string;

    @Column({ type: 'tinyint', name: 'docente_estado' })
    estado: number;

    @Column({ type: 'tinyint', name: 'docente_permiso_crear_cupon' })
    permiso_cupon: number;

    @Column({ type: 'varchar', name: 'docente_carnet_identidad', length: 10 })
    carnet: string;

    // @Column({ type: 'varchar', name: 'docente_genero_id' })
    // genero_id: string;

    @ManyToOne(() => Genero,{eager:true})
    @JoinColumn({name : 'docente_genero_id'})
    genero: Genero;

    // @OneToOne(() => Pais, { cascade: true })
    // @JoinColumn({ name: 'docente_pais_id' })
    // docente_pais: Pais;

    // @OneToOne(() => TipoCarnetIdentidad, { cascade: true })
    // @JoinColumn({ name: 'docente_tipo_carnet_id' })
    // docente_tipo_carnet: TipoCarnetIdentidad;

    // @OneToOne(() => Institucion, { cascade: true })
    // @JoinColumn({ name: 'docente_institucion_id' })
    // docente_institucion: Institucion;
}
