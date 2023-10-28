import { IsInt, IsString, IsNumber } from 'class-validator';
export class CreateCompraRapidaDto {

    @IsInt()
  id_estudiante: number;

  @IsInt()
  id_servicio: number;

  @IsString()
  tipo_servicio: string;

  @IsNumber()
  impuesto_transaccion_sol: number;

  @IsNumber()
  impuesto_transaccion_dolar: number;

  @IsString()
  token_pasarela: string;

  @IsString()
  numero_transaccion: string;

  @IsInt()
  id_cupon: number;

  @IsString()
  tipo_moneda: string;

  @IsString()
  nombre: string;

  @IsString()
  imagen: string;

  @IsInt()
  tiempo_acceso: number;

  @IsNumber()
  precio_actual_soles: number;

  @IsNumber()
  precio_actual_dolares: number;

  @IsString()
  estudiante_pais: string;

  @IsInt()
  micupon: number;

  @IsInt()
  plan_codigo: number;
}
