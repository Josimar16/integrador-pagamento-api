import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { ICreatePlanDTO } from '../../dtos/ICreatePlanDTO';
import { IPlansRepository } from '../../repositories/IPlansRepository';
import { PlanModel } from '../../repositories/models/PlanModel';

@Injectable()
export class CreatePlanUseCase {
  constructor(
    @Inject('PlansRepository')
    private readonly plansRepository: IPlansRepository
  ) { }

  public async execute({
    title,
    description,
    quantity,
    currency,
    unit_price
  }: ICreatePlanDTO): Promise<PlanModel> {
    const planAlreadyExists = await this.plansRepository.getByTitle(title);

    if (planAlreadyExists) {
      throw new BadRequestException("Esse plano ja existe com esse titulo.")
    }

    const plan = await this.plansRepository.create({
      title,
      description,
      quantity,
      currency,
      unit_price
    });

    return plan;
  }
}
