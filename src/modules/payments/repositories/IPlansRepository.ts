import { IParamsPagination } from "../../../shared/validations/ParamsPagination.pipe";
import { ICreatePlanDTO } from "../dtos/ICreatePlanDTO";
import { PlanModel } from "./models/PlanModel";

export interface IPlansRepository {
  create(data: ICreatePlanDTO): Promise<PlanModel>;
  list(params: IParamsPagination): Promise<PlanModel[]>;
  getById(id: string): Promise<PlanModel>;
  getByTitle(title: string): Promise<PlanModel>;
}