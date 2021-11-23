export interface IPlan {
  title: string;
  description: string;
  quantity: number;
  currency_id: "BRL";
  unit_price: number;
}

interface IBackURLs {
  success: string;
  pending: string;
  failure: string;
}

export interface IPayer {
  first_name: string;
  last_name: string;
  email: string;
  identification: {
    type: "CPF" | "CNPJ",
    number: string,
  },
  phone?: {
    area_code: string;
    number: string
  };
  address?: {
    zip_code: string;
    street_name: string;
    street_number: string;
  }
}

interface IPayment {
  installments: number;
  transaction_amount: number;
  payment_method_id: "visa";
}

export interface ICreatePaymentDTO {
  plan: IPlan;
  payer: IPayer;
  external_reference: string;
  payment: IPayment;
  back_urls: IBackURLs;
}