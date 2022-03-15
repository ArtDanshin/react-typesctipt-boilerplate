import { RuleSetRule } from 'webpack';

export default function (): RuleSetRule {
  return {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: 'ts-loader',
  };
}
