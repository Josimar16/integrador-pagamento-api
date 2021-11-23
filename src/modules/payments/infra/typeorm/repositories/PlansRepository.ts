import { EntityManager, EntityRepository, Repository } from "typeorm";
import { Plan } from "../entities/Plan";
import { IPlansRepository } from "../../../repositories/IPlansRepository";
import { ICreatePlanDTO } from "../../../dtos/ICreatePlanDTO";
import { PlanModel } from "../../../repositories/models/PlanModel";
import { IParamsPagination } from "../../../../../shared/validations/ParamsPagination.pipe";

@EntityRepository(Plan)
export class PlansRepository implements IPlansRepository {
  private ormRepository: Repository<Plan>;
  constructor(manager: EntityManager) {
    this.ormRepository = manager.getRepository(Plan);
  }

  public async create(data: ICreatePlanDTO): Promise<Plan> {
    const plan = this.ormRepository.create(data);
    await this.ormRepository.save(plan);
    return plan;
  }
  public async list({ amount, page }: IParamsPagination): Promise<PlanModel[]> {
    const plans = await this.ormRepository.find({
      skip: ((page - 1) * amount),
      take: amount
    });
    return plans;
  }
  public async getById(id: string): Promise<Plan> {
    const plan = await this.ormRepository.findOne({
      where: { id }
    });
    return plan;
  }
  public async getByTitle(title: string): Promise<Plan> {
    const plan = await this.ormRepository.findOne({
      where: { title }
    });
    return plan;
  }
}