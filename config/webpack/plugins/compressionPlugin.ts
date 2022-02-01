import CompressionPlugin from 'compression-webpack-plugin';

export default function() {
  return new CompressionPlugin({
    algorithm: 'gzip',
    test: /\.js$|\.css$/,
    threshold: 0,
    minRatio: 0.8
  });
};
