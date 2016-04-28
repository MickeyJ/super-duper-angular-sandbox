const strip = require('strip-loader');
const webpack = require('webpack');
const ENV = process.env.NODE_ENV;
const DEV = ENV==='development';
const PROD = ENV==='production';

const config = {
  entry: './src/app.js',
  output: {
    path: `${__dirname}/public/`,
    filename: 'bundle.js'
  },
  devtool: !PROD ? 'source-map' : null,
  devServer: {
    contentBase: 'public',
    historyApiFallback: {
      index: '/index.html'
    }
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.html/,
        loader: 'raw-loader',
        exclude: /node_modules/
      },
      {
        test: /\.s?css/,
        loaders: ["style", "css", "sass"],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify(ENV.toUpperCase())
      }
    })
  ]
};

if(!DEV){
  config.module.loaders.push({
    test: /\.js/,
    exclude: /node_modules/,
    loaders: [
      'ng-annotate',
      strip.loader('console.log')
    ]
  });
}

module.exports = config;