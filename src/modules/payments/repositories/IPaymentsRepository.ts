import { PaymentModel } from "./models/PaymentModel";

export interface IRequest {
  plan_id: string;
  preference_id: string;
}

export interface IPaymentsRepository {
  create(data: IRequest): Promise<PaymentModel>;
  getById(id: string): Promise<PaymentModel>;
  save(payment: PaymentModel): Promise<PaymentModel>;
}