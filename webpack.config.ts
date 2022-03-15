import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';

import common from './config/webpack/builds/common';
import production from './config/webpack/builds/production';
import development from './config/webpack/builds/development';
import { isProduction } from './config/webpack/utils/helper';

const config: Configuration = merge(
  common(__dirname),
  isProduction()
    ? production()
    : development(__dirname),
);

export default config;
