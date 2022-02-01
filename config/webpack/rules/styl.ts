import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {RuleSetRule} from 'webpack';

export default function(): RuleSetRule {
  return {
    test: /\.styl$/,
    use: [
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: { sourceMap: true }
      },
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            ident: 'postcss',
            config: false,
            plugins: [
              'postcss-preset-env'
            ]
          },
          sourceMap: true,
        }
      },
      'stylus-loader'
    ]
  };
};
