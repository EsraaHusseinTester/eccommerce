const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { Generator } = require('webpack');


module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    hot: false,
    port: 64000,
    open: true,
    devMiddleware:{
      writeToDisk: true,
    }
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
            minimize: true,
        },
      },
      {
        test: /\.css$/i,
        exclude: /bootstrap\.min\.css$/i,
        use: [
          {loader: MiniCssExtractPlugin.loader,
            options: {esModule: false,},},
          "css-loader"],
      },
      {
        test: /bootstrap\.min\.css$/i,
        use: [
          {loader: MiniCssExtractPlugin.loader,
            options: {esModule: false,},},
          'rtlcss-loader'
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator:{
          filename: "./images/[name][ext]"
        },
      },
      {
        test: /\.(svg|eot|woff|woff2|ttf)$/i,
        type: 'asset/resource',
        generator:{
          filename: "./fonts/[name][ext]"
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html"
    }),
    new HtmlWebpackPlugin({
      filename: "product.html",
      template: "./src/product.html"
    }),
    new HtmlWebpackPlugin({
      filename: "checkout.html",
      template: "./src/checkout.html"
    }),
    new HtmlWebpackPlugin({
      filename: "payment.html",
      template: "./src/payment.html"
    }),
    new HtmlWebpackPlugin({
      filename: "search.html",
      template: "./src/search.html"
    }),
    new HtmlWebpackPlugin({
      filename: "contact-us.html",
      template: "./src/contact-us.html"
    }),
    new MiniCssExtractPlugin({
      filename: "css/style.css",

    }), 
    new CssMinimizerPlugin ()

]
};