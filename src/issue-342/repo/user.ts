import { BaseTable } from '@/src/utils';
import { createRepo } from 'orchid-orm';
import { db } from '../tables';

export const user = createRepo(db.user, {
  queryMethods: {
    whereByProfileName: (q, input: string) => {
      return q.whereSql`("user"."profile"->>'name')::text ILIKE ${BaseTable.sql.unsafe(input)}`;
    },
  },
});
