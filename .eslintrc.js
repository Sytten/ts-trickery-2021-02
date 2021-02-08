module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  env: {
    node: true,
    es6: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: ['./packages/*/tsconfig.json'],
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  rules: {
    '@typescript-eslint/ban-ts-comment': 0,
  },
};
