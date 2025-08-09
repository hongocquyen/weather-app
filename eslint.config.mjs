import eslint from '@eslint/js';
import prettierPlugin from 'eslint-plugin-prettier';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';

export default tseslint.config(
  {
    files: ['**/*.ts', '**/*.tsx'],
    ignores: ['node_modules/*', '**/dist/**', '**/.next/*'],
  },
  eslint.configs.recommended,
  {
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      prettier: prettierPlugin,
    },
    languageOptions: {
      parser: tseslint.parser,
      ...pluginReact.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      //Custom rules
      'no-undef': 'error',
      'no-unused-vars': 'off',
      'max-depth': ['error', { max: 3 }],
      'max-statements': ['error', { max: 20 }],
      complexity: 'error',
      'max-params': ['error', { max: 3 }],
      'max-nested-callbacks': ['error', { max: 3 }],
      'func-names': ['error', 'never'],
      'no-console': 'error',
      'consistent-return': 'warn',
      'no-multiple-empty-lines': ['error', { max: 2 }],

      // TypeScript specific rules
      '@typescript-eslint/prefer-ts-expect-error': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/ban-ts-comment': [
        'error',
        {
          'ts-expect-error': 'allow-with-description',
          'ts-ignore': true,
          'ts-nocheck': true,
          'ts-check': false,
          minimumDescriptionLength: 3,
        },
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
    },
  }
);
