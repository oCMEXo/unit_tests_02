// eslint.config.js
import js from '@eslint/js';
import globals from 'globals';
import jestPlugin from 'eslint-plugin-jest';

export default [
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.jest,
        console: true,
        require: true,
        module: true,
        __dirname: true,
      },
    },
    plugins: {
      jest: jestPlugin,
    },
    rules: {
      'no-undef': 'off',
      'no-console': 'off',
      'no-unused-vars': 'warn',
    },
  },
];
