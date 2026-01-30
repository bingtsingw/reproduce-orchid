import { change } from '../script';

change(async (db) => {
  await db.createTable('comment', (t) => ({
    id: t.string().primaryKey(),
    createdAt: t.timestampsNoTZ().createdAt,
    updatedAt: t.timestampsNoTZ().updatedAt,
    deletedAt: t.timestampNoTZ().nullable(),

    content: t.string().nullable(),
  }));
});
