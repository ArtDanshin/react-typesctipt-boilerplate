import path from 'path';
import webpack from 'webpack';

import {
  cssRule,
  pugRule,
  stylRule,
  tsRule,
  svgRule,
  fontsRule,
} from '../rules';
import {
  caseSensitivePathsPlugin,
  cssMinimizerPlugin,
  htmlWebpackPlugin,
  terser,
  webpackManifestPlugin,
} from '../plugins';

function config(_path: string): webpack.Configuration {
  return {
    context: _path,
    entry: {
      application: path.resolve('src', 'scripts', 'index'),
    },

    output: {
      path: path.resolve('public', 'assets'),
      filename: '[name].[hash].js',
      chunkFilename: '[name].[chunkhash:8].js',
      publicPath: '/assets/',
    },

    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
      modules: ['node_modules'],
      alias: {
        _fonts: path.resolve('src', 'fonts'),
        _serverTypings: path.resolve('src', 'typings'),
        _styl: path.resolve('src', 'stylesheets'),
      },
    },

    module: {
      rules: [
        tsRule(),
        stylRule(),
        cssRule(),
        svgRule(),
        fontsRule(),
        pugRule(),
      ],
    },

    plugins: [
      webpackManifestPlugin(),
      caseSensitivePathsPlugin,
      htmlWebpackPlugin(_path),
    ],

    optimization: {
      minimizer: [
        terser(),
        cssMinimizerPlugin(),
      ],
      splitChunks: {
        name: 'vendors',
        chunks: 'all',
        cacheGroups: {
          vendors: {
            reuseExistingChunk: true,
            test: /[\\/]node_modules[\\/]/,
          },
        },
      },
    },

    cache: true,
  };
}

export default config;
