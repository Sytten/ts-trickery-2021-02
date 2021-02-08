import { objectType } from 'nexus';
import { assertNotNull } from '~/common/typescript';

export const TodoItem = objectType({
  definition(t) {
    t.string('id');
    t.string('content');
    t.field('list', {
      type: 'TodoList',
      resolve: async (source, args, app) => {
        const list = await app.models.todoList.findOne({ id: source.listId });
        return assertNotNull(list);
      },
    });
  },
  name: 'TodoItem',
});
