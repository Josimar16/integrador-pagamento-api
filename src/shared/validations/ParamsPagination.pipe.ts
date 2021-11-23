import { Injectable, PipeTransform } from '@nestjs/common';

export interface IParamsPagination {
  amount: number;
  page: number;
}

@Injectable()
export class ParamsPagination implements PipeTransform {
  transform({ amount, page }): IParamsPagination {
    if (!amount || Number(amount) <= 0) {
      amount = 10;
    }

    if (!page || Number(page) <= 0) {
      page = 1;
    }

    return {
      amount,
      page
    };
  }
}
