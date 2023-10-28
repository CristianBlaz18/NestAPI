import { IsNumber, IsString, IsOptional, IsNotEmpty } from 'class-validator';

export class CursoFilterDto {
  // @IsNotEmpty()
  // id_estudiante: number;

  @IsString()
  @IsOptional()
  nombre_curso?: string | null;

  @IsNumber()
  @IsOptional()
  categoria_curso?: number | null;
}