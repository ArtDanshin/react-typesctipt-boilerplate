import webpack from 'webpack';
import path from 'path';
import 'webpack-dev-server';

import { eslintPlugin } from '../plugins';

function config(_path: string): webpack.Configuration {
  return {
    mode: 'development',

    output: {
      publicPath: '/',
    },

    plugins: [
      eslintPlugin(),
    ],

    devServer: {
      static: path.join(_path, 'public'),
      port: 8080,
      client: {
        overlay: false,
      },
    },

    devtool: 'cheap-module-source-map',
  };
}

export default config;
