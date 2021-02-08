import { Context } from '~/context';

export default async (id: number, ctx: Context) => {
  return ctx.loader.todoList.load(id);
};
