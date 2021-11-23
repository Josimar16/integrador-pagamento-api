import { Controller, Get, Post, Req, Res } from "@nestjs/common";
import { Request, Response } from "express";
import { CreatePlanController } from "../../usecases/createPlan/CreatePlanController";
import { ListPlansController } from "../../usecases/listPlans/ListPlansController";

@Controller('plans')
export class PlansRouter {
  constructor(
    private readonly createPlanController: CreatePlanController,
    private readonly listPlansController: ListPlansController
  ) { }

  @Post('')
  public async create(
    @Req() request: Request,
    @Res() response: Response
  ): Promise<Response> {
    return await this.createPlanController.handle(request, response);
  }
  @Get('')
  public async list(
    @Req() request: Request,
    @Res() response: Response
  ): Promise<Response> {
    return await this.listPlansController.handle(request, response);
  }
}