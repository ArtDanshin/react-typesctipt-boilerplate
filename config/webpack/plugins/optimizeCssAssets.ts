import safePostCssParser from 'postcss-safe-parser';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';

export default function() {
  return new OptimizeCSSAssetsPlugin({
    cssProcessorOptions: {
      parser: safePostCssParser,
      map: false
    },
    cssProcessorPluginOptions: {
      preset: ['default', {
        // Это правило заставляет неправильно работать фолбэки в CSS
        mergeLonghand: false
      }]
    },
  });
};
