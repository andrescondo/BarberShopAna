const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/app/index.jsx', 
  output: {
    path: __dirname + '/src/public/assets/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', 'png'],
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[contenthash].[ext]',
          outputPath: 'static/assets/',
          publicPath: 'static/assets/',
          postTransformPublicPath: (p) => `__webpack_public_path__ + ${p}`,
        },
      },
      {
        test: /\.(s*)css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          "css-loader",
        ],
      },
    ]
  },
  plugins:[
    new MiniCssExtractPlugin({
      filename: "/[name].css",
    }),
  ],
};
