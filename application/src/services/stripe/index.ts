import { inject } from '~/common/typescript';
import type { Context } from '~/context';

import charge from './charge';

export default (ctx: Context) => ({
  charge: inject(ctx, charge),
});
