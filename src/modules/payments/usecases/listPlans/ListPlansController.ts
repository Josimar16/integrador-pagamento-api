import { Injectable } from "@nestjs/common";
import { Request, Response } from "express";
import { ParamsPagination } from "../../../../shared/validations/ParamsPagination.pipe";
import { ListPlansUseCase } from "./ListPlansUseCase";

@Injectable()
export class ListPlansController {
  constructor(
    private readonly paramsValidation: ParamsPagination,
    private readonly listPlansUseCase: ListPlansUseCase
  ) { }

  public async handle(request: Request, response: Response): Promise<Response> {
    const { query: { amount, page } } = request;

    const params = this.paramsValidation.transform({ amount, page });

    const plans = await this.listPlansUseCase.execute({
      amount: params.amount,
      page: params.page
    });

    return response.status(200).json({
      title: "Busca bem sucedida!",
      message: "Planos listados com sucesso.",
      items: plans,
      cod: "ok"
    });
  }
}