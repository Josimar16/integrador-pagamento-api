import { IsString } from "class-validator";

export class ICreatePaymentDTO {
  @IsString({ message: 'O Plano desejado é obrigatório' })
  plan_id: string;
}