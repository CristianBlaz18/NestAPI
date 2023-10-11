import { IsDecimal, IsNumber, IsString, MinLength } from "class-validator";

export class CreateCourseDto {

    @IsString()
    @MinLength(1)
    nombre_curso:string;

    
    @IsDecimal()
    precio_curso: number;
    
    
}
