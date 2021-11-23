import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { IPaymentProvider } from 'src/shared/container/providers/PaymentProvider/models/IPaymentProvider';
import { ICreatePaymentDTO } from '../../dtos/ICreatePaymentDTO';
import { IPaymentsRepository } from '../../repositories/IPaymentsRepository';
import { IPlansRepository } from '../../repositories/IPlansRepository';
import { PaymentModel } from '../../repositories/models/PaymentModel';

@Injectable()
export class CreatePaymentUseCase {
  constructor(
    @Inject('PaymentsRepository')
    private readonly paymentsRepository: IPaymentsRepository,

    @Inject('PlansRepository')
    private readonly plansRepository: IPlansRepository,

    @Inject('PaymentProvider')
    private readonly paymentProvider: IPaymentProvider,
  ) { }

  public async execute({ plan_id }: ICreatePaymentDTO): Promise<{ payment: PaymentModel; endpoint: string; }> {
    const {
      id,
      title,
      description,
      quantity,
      unit_price,
    } = await this.plansRepository.getById(plan_id);

    if (!id) {
      throw new NotFoundException("Esse plano que deseja adquirir não existe.");
    }

    const { preference_id, endpoint } = await this.paymentProvider.create({
      plan: {
        title,
        description,
        quantity,
        currency_id: 'BRL',
        unit_price,
      },
      external_reference: plan_id,
      payment: {
        installments: 1,
        payment_method_id: 'visa',
        transaction_amount: unit_price,
      },
      payer: {
        first_name: 'Leandro',
        last_name: 'Pereira',
        email: 'leandro.nunes@certsys.com.br',
        identification: {
          type: 'CPF',
          number: '06554676376'
        }
      },
      back_urls: {
        success: 'http://localhost:3000',
        pending: 'http://localhost:3000',
        failure: 'http://localhost:3000'
      }
    })

    const payment = await this.paymentsRepository.create({
      plan_id: id,
      preference_id
    });

    return {
      payment,
      endpoint
    };
  }
}
