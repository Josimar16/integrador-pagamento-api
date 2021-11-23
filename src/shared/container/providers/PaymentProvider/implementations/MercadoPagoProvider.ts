const mercadopago = require('mercadopago');
// import mercadopago from "mercadopago";

import { ICreatePaymentDTO } from "../dtos/ICreatePaymentDTO";
import { IPaymentEntity, IPaymentProvider } from "../models/IPaymentProvider";

export class MercadoPagoProvider implements IPaymentProvider {
  public async create({
    plan,
    payer,
    external_reference,
    payment,
    back_urls
  }: ICreatePaymentDTO): Promise<{ preference_id: string; endpoint: string; }> {
    mercadopago.configure({
      access_token: process.env.ACCESS_TOKEN,
    });
    const response = await mercadopago.preferences.create({
      items: [
        plan
      ],
      payer,
      external_reference,
      payment_methods: {
        installments: payment.installments,
        default_payment_method_id: payment.payment_method_id,
      },
      back_urls
    });

    return {
      preference_id: response.body.id,
      endpoint:
        process.env.NODE_ENV === 'prod'
          ? response.body.init_point
          : response.body.sandbox_init_point
    }
  }
  public async getById(payment_id: string): Promise<IPaymentEntity> {
    throw new Error("Method not implemented.");
  }
}