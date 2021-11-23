import { TransactionStatus } from "../../../../../types/TransactionStatus";
import { ICreatePaymentDTO } from "../dtos/ICreatePaymentDTO";

export class IPaymentEntity {
  transaction_id: string;
  status: TransactionStatus;
  status_detail?: string;
  date_created: Date;
  date_approved: Date;
  date_last_updated?: Date;
  money_release_date?: Date;
}

export interface IPaymentProvider {
  create(data: ICreatePaymentDTO): Promise<{ preference_id: string; endpoint: string; }>;
  getById(payment_id: string): Promise<IPaymentEntity>;
}