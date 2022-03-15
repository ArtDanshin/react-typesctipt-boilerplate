import { RuleSetRule } from 'webpack';

export default function(): RuleSetRule {
  return {
    test: /\.pug$/,
    use: {
      loader: 'pug-loader',
      options: {
        pretty: true
      },
    }
  };
};
