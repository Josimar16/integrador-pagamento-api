export class PlanModel {
  id: string;
  title: string;
  description: string;
  quantity: number;
  currency: "BRL";
  unit_price: number;
  created_at: Date;
}