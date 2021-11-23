import { Injectable } from "@nestjs/common";
import { Request, Response } from "express";
import { ICreatePaymentDTO } from "../../dtos/ICreatePaymentDTO";
import { CreatePaymentUseCase } from "./CreatePaymentUseCase";

@Injectable()
export class CreatePaymentController {
  constructor(
    private readonly createPaymentUseCase: CreatePaymentUseCase
  ) { }

  public async handle(request: Request, response: Response): Promise<Response> {
    const { plan_id }: ICreatePaymentDTO = request.body;

    const payment = await this.createPaymentUseCase.execute({ plan_id });

    return response.status(201).json({
      title: "Inserção bem sucedida!",
      message: "Pagamento em processamento.",
      item: payment,
      cod: "ok"
    });
  }
}