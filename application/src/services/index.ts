import type { Context } from '~/context';

import stripe from './stripe';

export default (ctx: Context) => ({
  stripe: stripe(ctx),
});
