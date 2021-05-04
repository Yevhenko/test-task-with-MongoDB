module.exports = {
    env: {
      browser: true,
      es6: true,
      commonjs: true,
    },
    extends: [
      'airbnb',
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
      'prettier',
      'prettier/@typescript-eslint',
      "plugin:import/errors",
      "plugin:import/warnings",
      "plugin:import/typescript",
    ],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    plugins: ['@typescript-eslint/eslint-plugin'],
    rules: {
      '@typescript-eslint/camelcase': 'off',
      "import/prefer-default-export": 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'require-atomic-updates': 'off',
      'object-curly-spacing': ['warn', 'always'],
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          "js": "never",
          "jsx": "never",
          "ts": "never",
          "tsx": "never"
        }
     ]
    },
  };
