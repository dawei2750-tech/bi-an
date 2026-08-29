const uniPostcssPlugin = require('@dcloudio/vue-cli-plugin-uni/packages/postcss')
module.exports = {
  plugins: [
    uniPostcssPlugin,
    require('autoprefixer')({
      overrideBrowserslist: ['Android >= 4', 'ios >= 8'],
    }),
  ],
}
