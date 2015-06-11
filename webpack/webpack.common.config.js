module.exports = {
  entry: {
    app: [
      'webpack/hot/dev-server',
      './app/app.coffee'
    ]
  },
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.coffee']
  },
  module: {
    loaders: [
      {
        test: /\.scss$/, loader: 'style!css!sass'
      },
      {
        test: /\.coffee$/, loader: 'coffee'
      }
    ]
  }
}
