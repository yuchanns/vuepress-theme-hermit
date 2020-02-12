const path = require('path')

module.exports = {
  title: 'vuepress-theme-hermit',

  description: 'An implementation of Hugo theme hermit in vuepress',

  theme: path.resolve(__dirname, '../../theme'),

  locales: {
    '/': {
      lang: 'en-US'
    }
  },

  themeConfig: {
    lang: 'en-US',

    pagination: {
      lengthPerPage: 5
    },
  }
}