import path from 'path';
import HTMLWebpackPlugin from 'html-webpack-plugin';

import { isProduction } from '../utils/helper';

export default function(_path: string) {
  return new HTMLWebpackPlugin({
    // Костыль для devServer'а и HTMLWebpackPlugin'а
    filename: isProduction()
      ? path.join(_path, 'public', 'index.html')
      : path.join(_path, 'public', 'assets', 'index.html'),
    template: path.join(_path, 'src', 'templates', 'index.pug'),
    inject: 'body'
  });
};
