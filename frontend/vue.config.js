const path = require('path')

module.exports = {
  lintOnSave: false,
  productionSourceMap: false,
  transpileDependencies: [
    '@dcloudio/uni-app',
    '@dcloudio/uni-h5',
    '@dcloudio/uni-i18n',
    '@dcloudio/uni-cli-shared',
    '@dcloudio/vue-cli-plugin-uni',
  ],
  devServer: {
    disableHostCheck: true,
    port: 8080,
  },
  configureWebpack: {
    resolve: {
      alias: {
        'uview-ui': path.resolve(__dirname, 'src/uview-ui'),
      },
    },
  },
  css: {
    loaderOptions: {
      postcss: {
        config: {
          path: __dirname,
        },
      },
    },
  },
}
