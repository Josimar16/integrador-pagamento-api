import * as path from 'path';

export default () => ({
  database: {
    type: 'postgres',
    port: Number(process.env.DB_PORT),
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: [path.resolve(
      __dirname,
      '..',
      '..',
      '..',
      'modules',
      '**',
      'infra',
      'typeorm',
      'entities',
      '*',
    ),
    ],
    synchronize: true,
    migrations: [path.resolve(__dirname, 'migrations', '*')],
    cli: {
      migrationsDir: path.resolve(__dirname, 'migrations'),
    },
    logging: ['error', 'warn']
  }
})