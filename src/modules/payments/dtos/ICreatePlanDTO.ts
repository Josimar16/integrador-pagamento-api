import { IsNumber, IsString } from "class-validator";

export class ICreatePlanDTO {
  @IsString({ message: 'O titulo do plano é obrigatório' })
  title: string;

  @IsString({ message: 'A descrição do plano é obrigatória' })
  description: string;

  @IsNumber(
    { allowInfinity: false, allowNaN: false, maxDecimalPlaces: 0 },
    { message: 'A quantidade é obrigatória, use um numero inteiro.' }
  )
  quantity: number;

  @IsString()
  currency?: "BRL";

  @IsNumber(
    { allowInfinity: false, allowNaN: false, maxDecimalPlaces: 2 },
    { message: 'O preço unitário é obrigatório' }
  )
  unit_price: number;
}