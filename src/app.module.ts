import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

import { ValidationsPipe } from './shared/validations/validations.module';
import { PaymentsProvider } from './shared/container/providers/PaymentProvider/payments.module';
import { PaymentsModule } from './modules/payments/payments.module';

import connection from './shared/infra/typeorm';
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [connection]
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) =>
        config.get<TypeOrmModuleOptions>('database'),
    }),
    ValidationsPipe,
    PaymentsProvider,
    PaymentsModule
  ],
})
export class AppModule { }
