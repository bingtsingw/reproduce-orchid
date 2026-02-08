import { rakeDb } from 'orchid-orm/migrations/node-postgres';
import { BaseTable, CONSTANT } from '../utils';

export const migrate = rakeDb({
  snakeCase: true,
  migrationsPath: './migrations',
  baseTable: BaseTable,
  import: (path) => import(path),
});

export const { change } = migrate;

await migrate.run({ databaseURL: CONSTANT.DATABASE_URL });
