import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "./BaseEntity";
import { PaymentModel } from "../../../repositories/models/PaymentModel";
import { TransactionStatus } from "../../../../../types/TransactionStatus";
import { Plan } from "./Plan";

@Entity({ schema: 'payment', name: 'payments' })
export class Payment extends BaseEntity implements PaymentModel {
  @Column()
  plan_id: string;

  @ManyToOne(() => Plan)
  @JoinColumn({ name: 'plan_id' })
  plan: Plan;

  @Column({ nullable: true })
  transaction_id?: string;

  @Column()
  preference_id: string;

  @Column({ nullable: true })
  status?: TransactionStatus;

  @Column({ nullable: true })
  status_detail?: string;

  @Column({ nullable: true })
  date_created?: Date;

  @Column({ nullable: true })
  date_approved?: Date;

  @Column({ nullable: true })
  date_last_updated?: Date;

  @Column({ nullable: true })
  money_release_date?: Date;
}