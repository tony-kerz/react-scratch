module.exports = {
  entry: {
    app: [
      'webpack/hot/dev-server',
      './app/app.jsx'
    ]
  },
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.coffee']
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      },
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {stage: 0}
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.eot$/,
        loader: "file-loader"
      },
      {
        test: /\.woff2?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.ttf$/,
        loader: "url-loader?limit=10000&mimetype=application/octet-stream"
      },
      {
        test: /\.svg$/,
        loader: "url-loader?limit=10000&mimetype=image/svg+xml"
      },
      {
        test: require.resolve('materialize-css/bin/materialize'),
        loader: "imports?jQuery=jquery,$=jquery"
      }
    ]
  }
}
