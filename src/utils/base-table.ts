import { createId } from '@paralleldrive/cuid2';
import type { DefaultColumnTypes, DefaultSchemaConfig } from 'orchid-orm';
import { createBaseTable } from 'orchid-orm';

const cuid = (t: DefaultColumnTypes<DefaultSchemaConfig>) => () =>
  t
    .string(36)
    .primaryKey()
    .default(() => createId());

const createdAt = (t: DefaultColumnTypes<DefaultSchemaConfig>) => () =>
  t
    .timestampsNoTZ()
    .createdAt.default(() => new Date().toISOString())
    .asDate();

const updatedAt = (t: DefaultColumnTypes<DefaultSchemaConfig>) => () =>
  t
    .timestampsNoTZ()
    .updatedAt.default(() => new Date().toISOString())
    .asDate();

const deletedAt = (t: DefaultColumnTypes<DefaultSchemaConfig>) => () => t.timestampNoTZ().asDate().nullable();

export const BaseTable = createBaseTable({
  snakeCase: true,
  nowSQL: `now()::timestamptz(3) AT TIME ZONE 'UTC'`,

  columnTypes: (t) => ({
    ...t,

    // add new methods
    createdAt: createdAt(t),
    updatedAt: updatedAt(t),
    deletedAt: deletedAt(t),
    cuid: cuid(t),

    baseColumns: () => {
      return {
        id: cuid(t)(),
        createdAt: createdAt(t)(),
        updatedAt: updatedAt(t)(),
        deletedAt: deletedAt(t)(),
      };
    },
  }),
});
