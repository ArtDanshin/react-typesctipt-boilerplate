import webpack from 'webpack';

import {
  compressionPlugin,
  extractPlugin,
} from '../plugins';

function config(): webpack.Configuration {
  return {
    mode: 'production',

    output: {
      publicPath: '/assets/',
    },

    plugins: [
      compressionPlugin(),
      extractPlugin(),
    ],

    devtool: 'cheap-source-map',

    bail: true,
  };
}

export default config;
