const webpack = require('webpack')

module.exports = {
  configureWebpack: {
    plugins: [new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery',
      Popper: ['popper.js', 'default']
    })]
  }
}
