module.exports = {
  env: {
    mocha: true, // Глобальные переменные Mocha
    node: true,  // Глобальные переменные Node.js
  },
  plugins: ['mocha'],
  rules: {
    'mocha/no-exclusive-tests': 'error', // Запрещаем использовать describe.only/it.only
  },
};