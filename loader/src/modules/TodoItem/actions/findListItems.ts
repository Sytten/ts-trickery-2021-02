import { Context } from '~/context';

export default async (listId: number, ctx: Context) => {
  return ctx.loader.todoItem.byList.load(listId);
};
