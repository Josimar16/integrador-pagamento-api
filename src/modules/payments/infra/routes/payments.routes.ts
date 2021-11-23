import { Controller, Post, Req, Res } from "@nestjs/common";
import { Request, Response } from "express";
import { CreatePaymentController } from "../../usecases/createPayment/CreatePaymentController";

@Controller('payments')
export class PaymentsRouter {
  constructor(
    private readonly createPaymentController: CreatePaymentController
  ) { }

  @Post('/preference')
  public async create(
    @Req() request: Request,
    @Res() response: Response
  ): Promise<Response> {
    return await this.createPaymentController.handle(request, response);
  }
}