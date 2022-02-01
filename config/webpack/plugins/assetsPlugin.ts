import path from 'path';
import AssetsPlugin from 'assets-webpack-plugin';

export default function() {
  return new AssetsPlugin({
    path: path.resolve('config'),
    filename: 'manifest.json',
    prettyPrint: true
  });
}
