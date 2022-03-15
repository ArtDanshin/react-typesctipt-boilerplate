import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default () => new MiniCssExtractPlugin({
  filename: '[name].[chunkhash:8].css',
});
