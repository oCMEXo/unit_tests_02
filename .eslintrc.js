module.exports = {
  env: {
    mocha: true,
    node: true,
    browser: true,
  },

  plugins: ['mocha'],
  rules: {
    'no-undef': 'error',
    'no-console': 'warn',
    'mocha/no-exclusive-tests': 'error',
  },
};
