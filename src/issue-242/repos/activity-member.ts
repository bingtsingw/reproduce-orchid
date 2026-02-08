import { BaseTable } from '@/src/utils';
import { createRepo } from 'orchid-orm';
import { db } from '../tables';

export const activityMember = createRepo(db.activityMember, {
  queryMethods: {
    whereByUserVipTo: (q, operator: '>' | '<' | '>=' | '<=' | '=' | '!=', date: Date) => {
      const query = q.whereSql`("user"."vip"->>'to')::timestamp ${BaseTable.sql.unsafe(operator)} '${BaseTable.sql.unsafe(date.toISOString())}'::timestamp`;
      // @ts-ignore
      const isJoinUser = q.toSQL().search('LEFT JOIN "user"') !== -1;
      return isJoinUser ? query : query.leftJoin('user');
    },
  },
});
