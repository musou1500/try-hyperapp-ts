module.exports = {
  entry: './src/app.ts',
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/dist`
  },
  module: {
    rules: [
      {test: /\.ts$/, loader: 'light-ts-loader'}
    ]
  }
};