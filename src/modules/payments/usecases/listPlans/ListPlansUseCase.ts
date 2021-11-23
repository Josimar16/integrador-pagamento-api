import { Inject, Injectable } from '@nestjs/common';
import { IParamsPagination } from '../../../../shared/validations/ParamsPagination.pipe';
import { IPlansRepository } from '../../repositories/IPlansRepository';
import { PlanModel } from '../../repositories/models/PlanModel';

@Injectable()
export class ListPlansUseCase {
  constructor(
    @Inject('PlansRepository')
    private readonly plansRepository: IPlansRepository
  ) { }

  public async execute({ amount, page }: IParamsPagination): Promise<PlanModel[]> {
    return await this.plansRepository.list({ amount, page });
  }
}
