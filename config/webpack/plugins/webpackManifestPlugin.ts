import path from 'path';
import { WebpackManifestPlugin } from 'webpack-manifest-plugin';

export default function () {
  return new WebpackManifestPlugin({
    fileName: path.resolve('config', 'manifest.json'),
    writeToFileEmit: true,
  });
}
