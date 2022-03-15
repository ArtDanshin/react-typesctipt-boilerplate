import { RuleSetRule } from 'webpack';

export default function (): RuleSetRule {
  return {
    test: /\.svg$/,
    issuer: /\.[jt]sx?$/,
    use: [{
      loader: '@svgr/webpack',
      options: {
        typescript: true,
      },
    }],
  };
}
