let path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin");
let { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        index: "./index.jsx"
    },
    context: path.resolve (__dirname, "src"),
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./dist",
        historyApiFallback: {
            index: "/index.html"
        },
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: path.resolve(__dirname, "src"),
                exclude: path.resolve(__dirname, "node_modules"),
                loader: "babel-loader",
                options: {
                    presets: ["@babel/env", "@babel/react"],
                    plugins: ["@babel/plugin-proposal-class-properties"]
                }

            },
            {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [
        // new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new HtmlWebpackPlugin({ 
            template: "index.html"
        })
    ],
    output: {
        filename: "./[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: '/'
    },
    resolve: {
        extensions: [".js", ".jsx"]
    }
};

// const path = require('path');
//  const HtmlWebpackPlugin = require('html-webpack-plugin');
//  const { CleanWebpackPlugin } = require('clean-webpack-plugin');
 
//  module.exports = {
//    mode: 'development',
//    entry: {
//      index: './index.jsx',

//    },
//    context: path.resolve(__dirname, 'src'),
//    devtool: 'inline-source-map',
//     devServer: {
//         contentBase: './dist',
//         historyApiFallback: {
//           index: 'index.html'
//         },
//     },
//       module: {
//           rules: [
//               {
//                 test: /\.jsx?$/,
//                 include: path.resolve(__dirname, 'src'),
//                 exclude: path.resolve(__dirname, 'node_modules'),
//                 loader: 'babel-loader',
//                 options: {
//                     presets: ['@babel/env', '@babel/react'],
//                     plugins: ['@babel/plugin-proposal-class-properties', "@babel/plugin-transform-async-to-generator", "@babel/plugin-transform-runtime"]
//                 }
//               },
//               {
//                 test: /\.css$/,
//                 use: ['style-loader', 'css-loader']
//               }
//           ]
//       },
//    plugins: [
//      new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
//      new HtmlWebpackPlugin({
//        template: 'index.html'
//      }),
//    ],
//    output: {
//      filename: '[name].bundle.js',
//      path: path.resolve(__dirname, 'dist'),
//    },
//    resolve: {
//        extensions: ['.js', '.jsx']
//    }
//  };