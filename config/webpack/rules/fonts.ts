import { RuleSetRule } from 'webpack';

export default function (): RuleSetRule {
  return {
    test: /\.(woff|woff2)$/i,
    type: 'asset/resource',
    generator: {
      filename: 'fonts/[name].[hash][ext]',
    },
  };
}
