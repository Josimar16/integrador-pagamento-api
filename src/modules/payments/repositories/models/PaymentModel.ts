import { TransactionStatus } from "../../../../types/TransactionStatus";
import { PlanModel } from "./PlanModel";

export class PaymentModel {
  id: string;
  plan_id: string;
  transaction_id?: string;
  preference_id: string;
  plan: PlanModel;
  status?: TransactionStatus;
  status_detail?: string;
  date_created?: Date;
  date_approved?: Date;
  date_last_updated?: Date;
  money_release_date?: Date;
  created_at: Date;
}