const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',

  entry: './src/index',

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },

  resolve: {
    root: __dirname,
    alias: {
      App: 'src/components/App.js',
      Dashboard: 'src/components/Dashboard.js',
      Queries: 'src/api/queries.js',
      Actions: 'src/redux/actions/index.js',
      configureStore: 'src/redux/store/configureStore.js',
      reducers: 'src/redux/reducers/index.js',
      actions: 'src/redux/actions/index.js',
      LocalStore: 'src/api/index.js',
      routes: 'src/routes.js',
      stylesheet: 'src/styles/stylesheet.scss'
    },
    extensions: ['', '.js', '.jsx']
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: { warnings: false }
    }),
    new webpack.DefinePlugin({
      'process.env': { 'NODE_ENV': JSON.stringify('production') }
    })
  ],

  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: { presets: ['es2015', 'react', 'stage-1'] },
        test: /\.jsx?$/,
        exclude: /(node_modules)/
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url'
      },
      {
        test: /\.(json)$/,
        loader: 'json'
      }
    ]
  }
}