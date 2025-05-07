import globals from 'globals';

export default [
  {
    files: ['*.test.js'],
    languageOptions: {
      globals: {
        ...globals.mocha,
        ...globals.node,
      },
    },
  },
];
