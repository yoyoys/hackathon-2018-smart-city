const webpack = require('webpack')

module.exports = {
  baseUrl: './',
  configureWebpack: {
    plugins: [new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery',
      Popper: ['popper.js', 'default'],
    }) ],
  },
}
