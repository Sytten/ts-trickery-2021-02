import { inject } from '~/common/typescript';
import type { Context } from '~/context';

import findMany from './findMany';
import findOne from './findOne';

export default (ctx: Context) => ({
  findOne: inject(ctx, findOne),
  findMany: inject(ctx, findMany),
});
