import { orchidORM } from 'orchid-orm/node-postgres';
import { CONSTANT } from '../../utils';
import { TableActivity } from './activity';
import { TableActivityMember } from './activity-member';
import { TableCity } from './city';

export const db = orchidORM(
  {
    log: true,
    databaseURL: CONSTANT.DATABASE_URL,
  },
  {
    city: TableCity,
    activity: TableActivity,
    activityMember: TableActivityMember,
  },
);
