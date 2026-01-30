import { test } from 'bun:test';
import { db } from './tables';

const updateComment = async ({ id }: { id: string }) => {
  await db.$transaction(async () => {
    await db.comment.find(id).update({ content: 'updated' });
  });
};

test('update', async () => {
  const comment = await db.comment.create({});
  const query = db.comment.find(comment.id);

  await Bun.sleep(1000);
  await updateComment({ id: comment.id });
  const c1 = await query;

  await Bun.sleep(1000);
  await db.comment.find(comment.id).update({ content: 'updated 2' });
  const c2 = await query;

  await Bun.sleep(1000);
  await updateComment({ id: comment.id });
  const c3 = await query;

  console.log(comment, c1, c2, c3);
});
