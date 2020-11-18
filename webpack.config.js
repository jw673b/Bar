const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist'),
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: [
              'style-loader', 'css-loader',
            ],
          },
          {
            test: /\.(png|svg|jpg|gif)$/i,
            use: [
              'file-loader',
            ],
          },
        ],
      },
};