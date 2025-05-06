module.exports = {
  env: {
    node: true, // Добавляет глобальные переменные для Node.js
    es2021: true // Поддержка синтаксиса ECMAScript 2021
  },
  extends: [
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    // Ваши правила здесь
  }
};