import path from 'path';
import webpack from 'webpack';
import 'webpack-dev-server';

import { cssRule, stylRule, tsRule, jsPreRule, pugRule } from './config/webpack/rules';
import { extractPlugin, htmlWebpackPlugin } from './config/webpack/plugins';
import { isProduction } from './config/webpack/utils/helper';

const config: webpack.Configuration = {
  mode: isProduction() ? 'production' : 'development',

  entry: {
    application: path.resolve('src', 'scripts', 'index')
  },

  output: {
    path: path.resolve('public', 'assets'),
    filename: '[name].[hash].js',
    chunkFilename: '[name].[chunkhash:8].js',
    // Костыль для devServer'а и HTMLWebpackPlugin'а
    publicPath: isProduction() ? '/assets' : '/'
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: ['node_modules'],
    alias: {
      _svg: path.resolve('src', 'assets', 'svg'),
      _fonts: path.resolve('src', 'assets', 'fonts'),
      _js: path.resolve('src', 'assets', 'javascript'),
      _images: path.resolve('src', 'assets', 'images'),
      _styl: path.resolve('src', 'stylesheets')
    }
  },

  module: {
    rules: [
      // isProduction() ? {} : jsPreRule(),
      tsRule(),
      stylRule(),
      cssRule(),
      pugRule()
    ]
  },

  plugins: [
    htmlWebpackPlugin(__dirname),
    extractPlugin()
    // require('./config/webpack/plugins/assetsPlugin')(),
    // require('./config/webpack/plugins/caseSensitivePathsPlugin')()
  ],

  optimization: {
      // minimizer: [
      //     require('./config/webpack/plugins/terser')(),
      //     require('./config/webpack/plugins/optimizeCssAssets')()
      // ],
      // splitChunks: {
      //     name: 'vendors',
      //     chunks: 'all',
      //     cacheGroups: {
      //         vendors: {
      //             reuseExistingChunk: true,
      //             test: module => /node_modules/.test(module.resource) && !/.css/.test(module.resource)
      //         }
      //     }
      // }
  },

  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },

  devtool: isProduction() ? 'cheap-source-map' : 'cheap-module-source-map',
  bail: true,
  cache: true
};

export default config;
