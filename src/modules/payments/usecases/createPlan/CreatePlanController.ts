import { Injectable } from "@nestjs/common";
import { Request, Response } from "express";
import { ICreatePlanDTO } from "../../dtos/ICreatePlanDTO";
import { CreatePlanUseCase } from "./CreatePlanUseCase";

@Injectable()
export class CreatePlanController {
  constructor(
    private readonly createPlanUseCase: CreatePlanUseCase
  ) { }

  public async handle(request: Request, response: Response): Promise<Response> {
    const data: ICreatePlanDTO = request.body;

    const plan = await this.createPlanUseCase.execute(data);

    return response.status(201).json({
      title: "Inserção bem sucedida!",
      message: "Plano criado com sucesso.",
      item: plan,
      cod: "ok"
    });
  }
}