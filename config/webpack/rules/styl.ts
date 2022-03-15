import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { RuleSetRule } from 'webpack';

import { isProduction } from '../utils/helper';

export default function (): RuleSetRule {
  return {
    test: /\.styl$/,
    use: [
      isProduction() ? MiniCssExtractPlugin.loader : 'style-loader',
      {
        loader: 'css-loader',
        options: {
          sourceMap: true,
          modules: {
            localIdentName: '[name]__[local]___[hash:base64:5]',
            exportLocalsConvention: 'camelCase',
          },
        },
      },
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
      'stylus-loader',
    ],
  };
}
