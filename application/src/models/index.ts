import type { Context } from '~/context';

import subscription from './subscription';
import todoItem from './todoItem';
import todoList from './todoList';
import user from './user';

export default (ctx: Context) => ({
  subscription: subscription(ctx),
  todoItem: todoItem(ctx),
  todoList: todoList(ctx),
  user: user(ctx),
});
