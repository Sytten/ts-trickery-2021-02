import { extendType, idArg } from 'nexus';
import { toInt } from '~/common/conversion';

export const user = extendType({
  definition(t) {
    t.nullable.field('user', {
      args: {
        id: idArg(),
      },
      resolve: async (_source, { id }, app) =>
        app.models.user.findOne({ id: toInt(id) }),
      type: 'User',
    });
  },
  type: 'Query',
});
