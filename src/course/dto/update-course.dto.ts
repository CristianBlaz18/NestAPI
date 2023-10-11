import { PartialType } from '@nestjs/mapped-types';
import { CreateCourseDto } from './create-course.dto';
import { IsDecimal, IsOptional, IsString, MinLength } from 'class-validator';

export class UpdateCourseDto {

    @IsString()
    @IsOptional()
    @MinLength(1)
    nombre_curso:string;

    
    @IsDecimal()
    @IsOptional()
    precio_curso: number;
}
