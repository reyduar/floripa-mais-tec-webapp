const path = require("path");
const HtmlWebpack = require("html-webpack-plugin");
const HtmlWebpackPartialsPlugin = require("html-webpack-partials-plugin");
const MiniCssExtract = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",

  output: {
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        loader: "html-loader",
        options: {
          sources: false,
        },
      },
      {
        test: /\.css$/,
        exclude: /styles.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /styles.css$/,
        use: [MiniCssExtract.loader, "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: "file-loader",
      },
    ],
  },

  optimization: {},

  plugins: [
    new HtmlWebpack({
      title: "FloripaMaisTec App",
      // filename: 'index.html',
      template: "./src/index.html",
    }),

    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname, "./src/views/calculadora.html"),
      location: "calculadora",
      template_filename: ["index.html"],
    }),

    new MiniCssExtract({
      filename: "[name].css",
      ignoreOrder: false,
    }),

    new CopyPlugin({
      patterns: [{ from: "src/assets/", to: "assets/" }],
    }),
  ],
};
