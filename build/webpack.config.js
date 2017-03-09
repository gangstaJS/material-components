var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
const open = require('open');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const sourcePath =  './src';

const wpConfig = {
  entry: {
    'lib': `${sourcePath}/lib.js`,
    vendors: 'vue',
  },
  output: {
    path: path.join('./', 'dist'),
    filename: '[name].build.js',
    library: 'VueReusableMaterialComponents',
    libraryTarget: 'umd',
  },

  resolve: {
    alias: {},
    extensions: ['', '.js', '.vue'],
    root: [
      // path.resolve(__dirname),
      path.resolve(sourcePath),
    ]
  },

  // resolveLoader: {
  //   fallback: [path.join(__dirname, '../node_modules')]
  // },

  module: {
    loaders: [
      {
        exclude: /(node_modules|bower_components)/,
        test: /\.js|\.vue$/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-0']
        }
      },
      {
        test: /\.html$/,
        loader: 'raw',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.sass$/,
        loaders: ['style', 'css?root=' + __dirname + sourcePath, 'sass-loader', 'sass'],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',

      },
    ]
  },
  vue: {
    loaders: {
      scss: 'style!css!sass'
    }
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    // new webpack.DefinePlugin({})
  ],
  postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],

  sassLoader: {
    includePaths: [path.resolve(__dirname, sourcePath)]
  },
  devtool: '#source-map',
  debug: false,

  devServer: {
    host: '0.0.0.0',
    port: '9095',
    // stats: {
    //   assets: true,
    //   colors: true,
    //   version: true,
    //   hash: false,
    //   timings: true,
    //   chunks: true,
    //   chunkModules: false
    // }
  }
};


if(process.env.NODE_ENV === 'production') {
  wpConfig.plugins.push(new webpack.optimize.UglifyJsPlugin({
    sourceMap: false,
    output: {
      comments: false ,
    },
    compress: {
      warnings: false,
    }
  }));

  wpConfig.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }));

} else {
  wpConfig.debug = true;
  wpConfig.devtool = "#inline-source-map";

  wpConfig.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }));
}

module.exports = wpConfig;
