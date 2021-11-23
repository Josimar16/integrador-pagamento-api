import { forwardRef, Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';

import { Plan } from "./infra/typeorm/entities/Plan";
import { PlansRepository } from "./infra/typeorm/repositories/PlansRepository";
import { PlansRouter } from "./infra/routes/plans.routes";
import { ListPlansController } from "./usecases/listPlans/ListPlansController";
import { ListPlansUseCase } from "./usecases/listPlans/ListPlansUseCase";
import { CreatePlanController } from "./usecases/createPlan/CreatePlanController";
import { CreatePlanUseCase } from "./usecases/createPlan/CreatePlanUseCase";

import { Payment } from "./infra/typeorm/entities/Payment";
import { PaymentsRepository } from "./infra/typeorm/repositories/PaymentsRepository";
import { PaymentsRouter } from "./infra/routes/payments.routes";
import { CreatePaymentController } from "./usecases/createPayment/CreatePaymentController";
import { CreatePaymentUseCase } from "./usecases/createPayment/CreatePaymentUseCase";
import { PaymentsProvider } from "../../shared/container/providers/PaymentProvider/payments.module";
import { ValidationsPipe } from "src/shared/validations/validations.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([Plan, Payment]),
    forwardRef(() => PaymentsProvider),
    forwardRef(() => ValidationsPipe),
  ],
  controllers: [
    PlansRouter,
    PaymentsRouter
  ],
  providers: [
    ListPlansController,
    ListPlansUseCase,
    CreatePlanController,
    CreatePlanUseCase,
    {
      provide: 'PlansRepository',
      inject: [PlansRepository],
      useClass: PlansRepository,
    },
    CreatePaymentController,
    CreatePaymentUseCase,
    {
      provide: 'PaymentsRepository',
      inject: [PaymentsRepository],
      useClass: PaymentsRepository,
    },
  ]
})
export class PaymentsModule { }