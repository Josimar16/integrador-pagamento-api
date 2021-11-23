import { Module } from "@nestjs/common";
import { MercadoPagoProvider } from "./implementations/MercadoPagoProvider";

@Module({
  providers: [
    {
      provide: 'PaymentProvider',
      inject: [MercadoPagoProvider],
      useClass: MercadoPagoProvider,
    },
  ],
  exports: [
    {
      provide: 'PaymentProvider',
      inject: [MercadoPagoProvider],
      useClass: MercadoPagoProvider,
    },
  ],
})
export class PaymentsProvider { }