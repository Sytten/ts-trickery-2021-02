import { objectType } from 'nexus';

export const TodoList = objectType({
  definition(t) {
    t.string('id');
    t.list.field('items', {
      type: 'TodoItem',
      resolve: (source, args, app) =>
        app.models.todoItem.findMany({ listId: source.id }),
    });
  },
  name: 'TodoList',
});
