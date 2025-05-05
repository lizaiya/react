import eslint from '@eslint/js';
import globals from 'globals';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import importPlugin from 'eslint-plugin-import';
import * as tseslint from 'typescript-eslint'; // 添加这行

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended, // 添加这行
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    ignores: ['node_modules/**', 'dist/**', 'build/**'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tseslint.parser, // 修改这行
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
        document: 'readonly',
        navigator: 'readonly',
        window: 'readonly',
        AudioWorkletGlobalScope: true
      }
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      import: importPlugin,
      '@typescript-eslint': tseslint.plugin // 添加这行
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'no-unused-vars': 'error',
      'no-console': 'off'
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  }
];
