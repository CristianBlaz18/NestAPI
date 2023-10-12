import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'tbl_tutor'})
export class Tutor {
    @PrimaryGeneratedColumn({ name: 'tutor_id' })
    tid: number;

    @Column({ type: 'varchar', length: 100, name: 'tutor_primer_nombre' })
    nombre: string;

    @Column({ type: 'varchar', length: 100, name: 'tutor_segundo_nombre' })
    nombre2: string;

    @Column({ type: 'varchar', length: 100, name: 'tutor_apellido_paterno' })
    apellidopat: string;

    @Column({ type: 'varchar', length: 100, name: 'tutor_apellido_materno' })
    apellidomat: string;

    @Column({ type: 'varchar', length: 200, name: 'tutor_correo' })
    correo: string;

    @Column({ type: 'date', name: 'tutor_fecha_nacimiento' })
    fecha_nacimiento: Date;

    @Column({ type: 'varchar', length: 500, name: 'tutor_descripcion' })
    descripcion: string;

    @Column({ type: 'varchar', length: 100, name: 'tutor_imagen' })
    imagen: string;

    @Column({ type: 'varchar', length: 11, name: 'tutor_telefono' })
    telefono: string;

    @Column({ type: 'varchar', length: 30, name: 'tutor_usuario' })
    usuario: string;

    @Column({ type: 'varchar', length: 20, name: 'tutor_clave' })
    clave: string;

    @Column({ type: 'tinyint', name: 'tutor_estado' })
    estado: number;

    @Column({ type: 'tinyint', name: 'tutor_permiso_crear_cupon' })
    permiso_cupon: number;

    @Column({ type: 'varchar', length: 10, name: 'tutor_carnet_identidad' })
    carnetnumero: string;

    @Column({ type: 'tinyint', name: 'tutor_genero_id' })
    genero_id: number;

    @Column({ type: 'int', name: 'tutor_pais_id' })
    pais_id: number;

    @Column({ type: 'tinyint', name: 'tutor_tipo_carnet_id' })
    carnet_id: number;

    @Column({ type: 'tinyint', name: 'tutor_institucion_id' })
    institucion_id: number;

    //   @ManyToOne(() => Genero, { eager: true })
    //   @JoinColumn({ name: 'tutor_genero_id' })
    //   genero: Genero;
}
