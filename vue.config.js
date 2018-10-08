const webpack = require('webpack')
const jsonServer = require('json-server')
const router = jsonServer.router('mockapi.json')

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
  devServer: {
    before (server) {
      server.use('/api', router)
    },
  },
}
