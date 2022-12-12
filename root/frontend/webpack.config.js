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
    watchFiles: ["src/templates/*.html"],
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
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
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
        test: /\.(png|jpe?g|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext]",
        },
        // generator: {
        //   "asset/resource": {},
        // },
        // options: {
        //   name: "[path][name].[ext]",
        //   outputPath: "images",
        // },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
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
