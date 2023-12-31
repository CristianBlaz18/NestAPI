
import { IsInt, IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';

export class UpdateInstitucionDto {
    
    @IsString({ message: 'El nombre de la institución debe ser una cadena de texto' })
    @Length(1, 100, { message: 'El nombre de la institución debe tener entre 1 y 100 caracteres' })
    nombre?: string;

    
    @IsString({ message: 'La descripción de la institución debe ser una cadena de texto' })
    @Length(1, 500, { message: 'La descripción de la institución debe tener entre 1 y 500 caracteres' })
    descripcion?: string;

    @IsOptional()
    logo: Buffer;

    
    @IsString({ message: 'El slogan de la institución debe ser una cadena de texto' })
    @Length(1, 100, { message: 'El slogan de la institución debe tener entre 1 y 100 caracteres' })
    slogan: string;

    
    @IsString({ message: 'La misión de la institución debe ser una cadena de texto' })
    @Length(1, 500, { message: 'La misión de la institución debe tener entre 1 y 500 caracteres' })
    mision: string;

    
    @IsString({ message: 'La visión de la institución debe ser una cadena de texto' })
    @Length(1, 500, { message: 'La visión de la institución debe tener entre 1 y 500 caracteres' })
    vision: string;

    
    @IsString({ message: 'La vista de certificado de la institución debe ser una cadena de texto' })
    @Length(1, 500, { message: 'La vista de certificado de la institución debe tener entre 1 y 500 caracteres' })
    vistaCertificado: string;

    
    @IsNotEmpty({ message: 'El estado de la institución no puede estar vacío' })
    @IsInt({ message: 'El estado de la institución debe ser un número entero' })
    estado: number;
}
