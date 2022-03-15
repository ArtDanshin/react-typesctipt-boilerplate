module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['@typescript-eslint'],
    extends: [
        'airbnb',
        'plugin:@typescript-eslint/recommended',
    ],
    env: {
        browser: true,
        node: true,
    },
    rules: {
        'max-len': [2, {
            code: 120,
            tabWidth: 2,
            ignoreUrls: true,
            ignoreComments: false,
            ignoreRegExpLiterals: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
        }],
        'func-names': [0],
        'import/named': [0],
        'import/extensions': [0],
        'import/no-unresolved': [0],
        'import/no-extraneous-dependencies': [0],
        'import/prefer-default-export': [0],
        'no-useless-constructor': [0],
        'no-use-before-define': [0],

        'react/jsx-filename-extension': [2, {
            extensions: ['.jsx', '.tsx'],
        }],
        'react/jsx-props-no-spreading': [0],
        'react/function-component-definition': [2, {
            namedComponents: 'arrow-function',
        }],
        'react/require-default-props': [0],

        'no-shadow': [0],
        '@typescript-eslint/no-shadow': [2],
    },
};
