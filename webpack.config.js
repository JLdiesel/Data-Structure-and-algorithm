
path=require("path");
module.exports = {
  mode:'development',
  entry: './main.ts',
  output:{
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions:['.ts','.js']
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader:'ts-loader'
      }
    ]
  }
}