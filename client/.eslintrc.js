module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['prettier', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'jest'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  rules: {
    'no-console': 'warn',
    'linebreak-style': 'off',
    'prettier/prettier': [
      'error',
      {
        semi: true,
        singleQuote: true,
        useTabs: false,
        tabWidth: 2,
        trailingComma: 'all',
        printWidth: 80,
        endOfLine: 'lf',
      },
    ],
  },
};
