module.exports = {

  'env': {

    mocha: true,
    node: true,

  },
  plugins: ['mocha'],
  rules: {
    'mocha/no-exclusive-tests': 'error',
  },

};
