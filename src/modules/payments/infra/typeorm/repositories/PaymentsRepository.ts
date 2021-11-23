import { EntityManager, EntityRepository, Repository } from "typeorm";
import { Payment } from "../entities/Payment";
import { IPaymentsRepository, IRequest } from "../../../repositories/IPaymentsRepository";

@EntityRepository(Payment)
export class PaymentsRepository implements IPaymentsRepository {
  private ormRepository: Repository<Payment>;
  constructor(manager: EntityManager) {
    this.ormRepository = manager.getRepository(Payment);
  }

  public async create(data: IRequest): Promise<Payment> {
    const payment = this.ormRepository.create(data);
    await this.ormRepository.save(payment);
    return payment;
  }
  public async getById(id: string): Promise<Payment> {
    const payment = await this.ormRepository.findOne({
      where: { id }
    });
    return payment;
  }
  public async save(data: Payment): Promise<Payment> {
    return await this.ormRepository.save(data);
  }
}