import {RuleSetRule} from 'webpack';

export default function(): RuleSetRule {
  return {
    enforce: 'pre',
    test: /\.js$/,
    use: {
      loader: 'eslint-loader',
    },
    exclude: [/node_modules/]
  };
};
