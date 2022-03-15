import ESLintPlugin from 'eslint-webpack-plugin';

export default () => new ESLintPlugin({
  extensions: ['ts', 'tsx'],
});
