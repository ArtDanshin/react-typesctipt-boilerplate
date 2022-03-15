import TerserPlugin from 'terser-webpack-plugin';

export default function () {
  return new TerserPlugin({
    terserOptions: {
      compress: {
        comparisons: false,
        inline: 2,
      },
      output: {
        ecma: 5,
        comments: false,
        ascii_only: true,
      },
    },
    parallel: true,
  });
}
