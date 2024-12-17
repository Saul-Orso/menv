const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const webpack = require('webpack'); // Importar webpack

module.exports = {
  entry: './src/app/index.js',
  output: {
    path: path.resolve(__dirname, 'src/public/js'),
    filename: 'bundle.js',
  },
  resolve: {
    alias: {
      process: 'process/browser',
      vm: require.resolve('vm-browserify'),
      async_hooks: false,
      assert: require.resolve('assert/'),
      crypto: require.resolve('crypto-browserify'),
      zlib: require.resolve('browserify-zlib'),
      path: require.resolve('path-browserify'),
      stream: require.resolve('stream-browserify'),
      http: require.resolve('stream-http'),
      https: require.resolve('stream-http'),
      os: false,
      fs: false,
      querystring: require.resolve('querystring-es3'),
      net: require.resolve('net-browserify'),
    },
  },
 
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      __VUE_OPTIONS_API__: JSON.stringify(true),
      __VUE_PROD_DEVTOOLS__: JSON.stringify(false),
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(false),
    }),
    
  ],
};
