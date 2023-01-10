
// var webpack = require('webpack');
// const nodeExternals = require('webpack-node-externals');

module.exports = {

//    resolve: {
//         mainFields: ['es2015', 'browser', 'module', 'main'],
//         fallback: {
//             util: require.resolve("util/"),
//             "fs": false,
//             "tls": false,
//             "net": false,
//             "path": false,
//             "zlib": false,
//             "http": false,
//             "https": false,
//             "stream": false,
//             "crypto": false,
//             "buffer": false,
//             "url": false,
//             "vm": false,
//             "querystring": false,
//             "os": false,
//             extensions: ['.js', '.jsx'],
            
//         } 
//     },
//     plugins: [
//         new webpack.ProvidePlugin({
//         "React": "react",
//         }),
//     ],
//     // entry: "pokemanager/frontend/src/components/App.js",
//     // target: 'node', // in order to ignore built-in modules like path, fs, etc.
//     externals: [nodeExternals({
//         importType: 'umd'
//     }), ],
//     externalsPresets: { node: true },   // <-- here
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    }
  }