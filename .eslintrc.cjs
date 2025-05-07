module.exports = {
  env: {
    mocha: true, // Глобальные переменные Mocha
    node: true,  // Глобальные переменные Node.js
    browser: true,
  },

  plugins: ['mocha'],
  rules: {
    'mocha/no-exclusive-tests': 'error', // Запрещаем использовать describe.only/it.only
  },
};