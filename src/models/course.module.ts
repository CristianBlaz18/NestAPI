// import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


// @Entity ({name:'tbl_curso'})
// export class Courses {
//     @PrimaryGeneratedColumn({ name: 'curso_id', type: 'int' })
//   id: number;

//   @Column({ name: 'curso_codigo', type: 'varchar', length: 20 })
//   codigo: string;

//   @Column({ name: 'curso_nombre', type: 'varchar', length: 100 })
//   nombre: string;

//   @Column({ name: 'curso_dificultad', type: 'varchar', length: 10 })
//   dificultad: string;

//   @Column({ name: 'curso_duracion', type: 'int' })
//   duracion: number;

//   @Column({ name: 'curso_horas_certificado', type: 'int' })
//   horasCertificado: number;

//   @Column({ name: 'curso_precio_soles', type: 'float' })
//   precioSoles: number;

//   @Column({ name: 'curso_precio_soles_anterior', type: 'float' })
//   precioSolesAnterior: number;

//   @Column({ name: 'curso_precio_dolar', type: 'float' })
//   precioDolar: number;

//   @Column({ name: 'curso_precio_dolar_anterior', type: 'float' })
//   precioDolarAnterior: number;

//   @Column({ name: 'curso_descripcion', type: 'varchar', length: 500 })
//   descripcion: string;

//   @Column({ name: 'curso_imagen', type: 'varchar', length: 100 })
//   imagen: string;

//   @Column({ name: 'curso_video_introductorio', type: 'varchar', length: 100 })
//   videoIntroductorio: string;

//   @Column({ name: 'curso_fecha_inicio', type: 'datetime' })
//   fechaInicio: Date;

//   @Column({ name: 'curso_fecha_fin', type: 'datetime' })
//   fechaFin: Date;

//   @Column({ name: 'curso_fecha_inicio_muestra', type: 'datetime' })
//   fechaInicioMuestra: Date;

//   @Column({ name: 'curso_fecha_fin_muestra', type: 'datetime' })
//   fechaFinMuestra: Date;

//   @Column({ name: 'curso_estado', type: 'varchar', length: 20 })
//   estado: string;

//   @Column({ name: 'curso_tiempo_acceso', type: 'int' })
//   tiempoAcceso: number;

//   @Column({ name: 'curso_plantilla_certificado', type: 'varchar', length: 100 })
//   plantillaCertificado: string;

//   @Column({ name: 'curso_precio_certificadoempresa_soles', type: 'float' })
//   precioCertificadoEmpresaSoles: number;

//   @Column({ name: 'curso_precio_certificadoempresa_dolares', type: 'float' })
//   precioCertificadoEmpresaDolares: number;

//   @Column({ name: 'curso_precio_certificadoCIP_soles', type: 'float' })
//   precioCertificadoCIPSoles: number;

//   @Column({ name: 'curso_precio_certificadoCIP_dolares', type: 'float' })
//   precioCertificadoCIPDolares: number;

//   @Column({ name: 'curso_numero_inscrito', type: 'int' })
//   numeroInscrito: number;

//   @Column({ name: 'curso_tipo', type: 'varchar', length: 8 })
//   tipo: string;

//   @Column({ name: 'curso_modalidad', type: 'varchar', length: 20 })
//   modalidad: string;

//   @ManyToOne(() => CategoriaCurso, { eager: true })
//   @JoinColumn({ name: 'categoria_curso_id' })
//   categoriaCurso: CategoriaCurso;

//   @ManyToOne(() => Institucion, { eager: true })
//   @JoinColumn({ name: 'curso_institucion_id' })
//   institucion: Institucion;

//   @ManyToOne(() => Docente, { eager: true })
//   @JoinColumn({ name: 'docente_id' })
//   docente: Docente;

//   @ManyToOne(() => Tutor, { eager: true })
//   @JoinColumn({ name: 'tutor_id' })
//   tutor: Tutor;
// }
