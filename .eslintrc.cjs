// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

/** @type {import("eslint").Linter.Config} */
const config = {
   overrides: [
      {
         extends: [
            'plugin:@typescript-eslint/recommended-requiring-type-checking',
         ],
         files: ['*.astro'],
         parser: 'astro-eslint-parser',
         parserOptions: {
            parser: '@typescript-eslint/parser',
            extraFileExtensions: ['.astro'],
         },
      },
   ],
   plugins: ['@typescript-eslint'],
   extends: [
      'plugin:@typescript-eslint/recommended',
      'plugin:astro/recommended',
   ],
   rules: {},
};

module.exports = config;
