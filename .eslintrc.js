module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-plusplus': 'off',
    '@typescript-eslint/ban-types': 'off',
    'no-param-reassign': 'off',
    'no-shadow': 'off',
    'max-len' : 'off',
    '@typescript-eslint/ban-ts-comment' : 'off',
    'no-underscore-dangle' : 'off',
    'import/extensions' : 'off',
    'import/no-unresolved' : 'off',
    'import/prefer-default-export' : 'off'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
