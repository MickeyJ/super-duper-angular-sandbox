
module.exports = {
  entry: './src/app.js',
  output: {
    path: `${__dirname}/public/`,
    filename: 'bundle.js'
  },
  devtool: 'source-map',
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
    
  }
};