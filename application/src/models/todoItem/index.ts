import { inject } from '~/common/typescript';
import type { Context } from '~/context';

import findMany from './findMany';

export default (ctx: Context) => ({
  findMany: inject(ctx, findMany),
});
