import { IsInt, IsNotEmpty, IsString, Length } from "class-validator";
import { PrimaryGeneratedColumn } from "typeorm";

export class CreateInstitucionDto {
    
    @IsNotEmpty({ message: 'El nombre de la institución no puede estar vacío' })
    @IsString({ message: 'El nombre de la institución debe ser una cadena de texto' })
    @Length(1, 100, { message: 'El nombre de la institución debe tener entre 1 y 100 caracteres' })
    nombre: string;

    
    @IsNotEmpty({ message: 'La descripción de la institución no puede estar vacía' })
    @IsString({ message: 'La descripción de la institución debe ser una cadena de texto' })
    @Length(1, 500, { message: 'La descripción de la institución debe tener entre 1 y 500 caracteres' })
    descripcion: string;

    
    @IsNotEmpty({ message: 'El logo de la institución no puede estar vacío' })
    logo: Buffer;

    
    @IsNotEmpty({ message: 'El slogan de la institución no puede estar vacío' })
    @IsString({ message: 'El slogan de la institución debe ser una cadena de texto' })
    @Length(1, 100, { message: 'El slogan de la institución debe tener entre 1 y 100 caracteres' })
    slogan: string;

    
    @IsNotEmpty({ message: 'La misión de la institución no puede estar vacía' })
    @IsString({ message: 'La misión de la institución debe ser una cadena de texto' })
    @Length(1, 500, { message: 'La misión de la institución debe tener entre 1 y 500 caracteres' })
    mision: string;

    
    @IsNotEmpty({ message: 'La visión de la institución no puede estar vacía' })
    @IsString({ message: 'La visión de la institución debe ser una cadena de texto' })
    @Length(1, 500, { message: 'La visión de la institución debe tener entre 1 y 500 caracteres' })
    vision: string;

    
    @IsNotEmpty({ message: 'La vista de certificado de la institución no puede estar vacía' })
    @IsString({ message: 'La vista de certificado de la institución debe ser una cadena de texto' })
    @Length(1, 500, { message: 'La vista de certificado de la institución debe tener entre 1 y 500 caracteres' })
    vistaCertificado: string;

    
    @IsNotEmpty({ message: 'El estado de la institución no puede estar vacío' })
    @IsInt({ message: 'El estado de la institución debe ser un número entero' })
    estado: number;
}
