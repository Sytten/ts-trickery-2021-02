import Stripe from 'stripe';

const stripe = new Stripe('SOME_API_KEY', {
  apiVersion: '2020-08-27',
  timeout: 1000,
});

export default stripe;
