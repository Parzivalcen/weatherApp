const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  target: "web",
  mode: 'production',
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
},
  entry: {
    index: './src/index.js',
    home: './src/modules/home.js',
    getData: './src/modules/getData.js',
    displayData: './src/modules/displayData.js',
    footer: './src/modules/footer.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Get weather',
      favicon: "./src/imgs/Sun.svg"
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      
    //  sass
    {
      test: /\.s[ac]ss$/i,
      use: [
        // Creates `style` nodes from JS strings
        "style-loader",
        // Translates CSS into CommonJS
        "css-loader",
        // Compiles Sass to CSS
        "sass-loader",
      ],
    },
    ],
  },
};