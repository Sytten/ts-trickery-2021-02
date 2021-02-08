import { Context } from '~/context';

export default async (userId: number, ctx: Context) => {
  return ctx.loader.todoList.byUser.load(userId);
};
