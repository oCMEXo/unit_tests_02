import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        // Node.js
        module: "readonly",
        require: "readonly",
        __dirname: "readonly",

        // Mocha (test environment)
        describe: "readonly",
        it: "readonly",
        before: "readonly",
        after: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
    },
  },
];
