import eslintPluginPlaywright from 'eslint-plugin-playwright';

export default [
  {
    files: ['*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      playwright: eslintPluginPlaywright,
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'error',
      'no-console': 'off',
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      indent: ['error', 2],

      'playwright/no-wait-for-timeout': 'warn',
      'playwright/no-wait-for-selector': 'warn',
      'playwright/no-element-handle': 'warn',
    },
  },
];
