import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateGeneroDto {
    @IsNotEmpty({ message: 'El nombre del genero no puede estar vacío' })
    @IsString({ message: 'El nombre delgenero debe ser una cadena de texto' })
    @MaxLength(30, { message: 'El nombre del género no debe superar los 30 caracteres' })
    nombre: string;
}
