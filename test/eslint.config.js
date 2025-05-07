import globals from 'globals';

export default [
    {
        files: ['*.test.js'], // Применять только для файлов .test.js
        languageOptions: {
            globals: {
                ...globals.mocha,
                ...globals.node,
            },
        },
    },
];