import { orchidORM } from 'orchid-orm/node-postgres';
import { CONSTANT } from '../../utils';
import { TableUser } from './user';

export const db = orchidORM(
  {
    log: true,
    databaseURL: CONSTANT.DATABASE_URL,
  },
  {
    user: TableUser,
  },
);
