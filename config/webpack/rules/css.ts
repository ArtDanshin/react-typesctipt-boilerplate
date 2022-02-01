import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {RuleSetRule} from 'webpack';

export default function(): RuleSetRule {
  return {
    test: /\.css$/,
    use: [
      MiniCssExtractPlugin.loader,
      'css-loader',
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
      }
    ]
  };
};
