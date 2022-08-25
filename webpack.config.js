const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    form: './src/components/form.js',
    listeners: './src/components/listeners.js',
    dom: './src/components/dom.js',
    footer: './src/components/footer.js',
    hamburger: './src/components/hamburger.js',
    inbox: './src/components/inbox.js',
    localStorage: './src/components/localStorage.js',
    navi: './src/components/navi.js',
    priority: './src/components/priority.js',
    task: './src/components/task.js',
    today: './src/components/today.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {
    runtimeChunk: 'single',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(svg|eot|woff|woff2|ttf)$/,
        use: ['file-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
  target: 'node',
  resolve: {
    fallback: {
      fs: false,
    },
  },
};
