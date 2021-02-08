import { objectType } from 'nexus';

export const User = objectType({
  definition(t) {
    t.string('id');
    t.string('name');
    t.list.field('lists', {
      type: 'TodoList',
      resolve: (source, args, app) =>
        app.models.todoList.findMany({ userId: source.id }),
    });
  },
  name: 'User',
});
