import { IsNotEmpty, IsString, Length } from "class-validator";

export class CreateCategoriaDto {
    
    @IsNotEmpty({ message: 'El nombre de la categoría no puede estar vacío' })
    @IsString({ message: 'El nombre de la categoría debe ser una cadena de texto' })
    @Length(1, 15, { message: 'El nombre de la categoría debe tener entre 1 y 15 caracteres' })
    nombre: string;
}
