import { orchidORM } from 'orchid-orm/postgres-js';
import { CONSTANT } from '../../utils';
import { TableActivity } from './activity';
import { TableActivityMember } from './activity-member';
import { TableUser } from './user';

export const db = orchidORM(
  {
    log: true,
    databaseURL: CONSTANT.DATABASE_URL,
  },
  {
    user: TableUser,
    activity: TableActivity,
    activityMember: TableActivityMember,
  },
);
