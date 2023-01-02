const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const dotenv = require("dotenv");
// const BundleAnalyzerPlugin =
// require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
dotenv.config({
  path: path.resolve(__dirname, "config.env"),
});
module.exports = {
  mode: "development",
  entry: { bundle: path.resolve(__dirname, "src/js/index.js") },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    clean: true,
    assetModuleFilename: "[name][ext]",
  },
  // devtool: "source-map",
  devServer: {
    static: { directory: path.resolve(__dirname, "dist") },
    watchFiles: ["src/templates/*.html", "src/styles/*.scss"],
    hot: true,
    port: 3000,
    open: true, //open the browser
    hot: true, //reload
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "resolve-url-loader",
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },

      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext]",
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },

      // to resolve the issue of not being able to use images in scss/css
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: process.env.TITLE,
      filename: "index.html",
      template: path.resolve(__dirname, "src/templates/index-template.html"),
    }),
  ],
};
