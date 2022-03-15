import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { RuleSetRule } from 'webpack';

import { isProduction } from '../utils/helper';

export default function (): RuleSetRule {
  return {
    test: /\.css$/,
    use: [
      isProduction() ? MiniCssExtractPlugin.loader : 'style-loader',
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            ident: 'postcss',
            config: false,
            plugins: [
              'postcss-preset-env',
            ],
          },
          sourceMap: true,
        },
      },
    ],
  };
}
