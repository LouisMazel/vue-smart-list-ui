const path = require('path')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, './src/assets/scss/_variables.scss')
      ]
    }
  }
}
