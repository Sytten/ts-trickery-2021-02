import { inject } from '~/common/typescript';
import type { Context } from '~/context';

import create from './create';

export default (ctx: Context) => ({
  create: inject(ctx, create),
});
