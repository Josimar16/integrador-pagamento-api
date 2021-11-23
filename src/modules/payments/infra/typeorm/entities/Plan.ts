import { PlanModel } from "../../../repositories/models/PlanModel";
import { Column, Entity } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity({ schema: 'payment', name: 'plans' })
export class Plan extends BaseEntity implements PlanModel {
  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  quantity: number;

  @Column({ default: "BRL" })
  currency: "BRL";

  @Column()
  unit_price: number;
}