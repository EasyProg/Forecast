/**
 * Created by Михаил on 02.06.2017.
 */
const NODE_ENV = process.env.NODE_ENV || "development";
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        'babel-polyfill',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'build.js'
    },
    devtool:'eval',
    plugins: [
      new webpack.DefinePlugin(
          {
            NODE_ENV: JSON.stringify(NODE_ENV)
          }
      ),
     new ExtractTextPlugin('bundle.css')
    ],
    module: {
        rules: [
            {
                test: /\.js|.jsx?$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: { presets: ['es2015'] },

                }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use:['file?hash=sha512&digest=hex&name=[hash].[ext]','image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false']
            }
        ],
        loaders: [
            {
                loader: 'babel-loader',
                exclude: /node_modules/,
                //query: {
                //    presets: ['es2015', 'stage-0', 'react']
                //},
                test: /\.jsx?$/
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader'})
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            }
        ]
    }
   //watch: true
}