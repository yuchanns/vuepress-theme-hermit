const path = require('path')

module.exports = {
  title: 'vuepress-theme-hermit',

  description: 'An implementation of Hugo theme hermit in vuepress',

  theme: path.resolve(__dirname, '../../hermit'),

  locales: {
    '/': {
      lang: 'en-US'
    }
  },

  themeConfig: {
    lang: 'en-US',

    author: {
      name: 'yuchanns',
      url: 'https://yuchanns.org'
    },

    nav: [
      { text: 'About', link: '/about/', dirname: 'about' },
      { text: 'yuchanns', link: 'https://yuchanns.org' }
    ],

    sns: [
      { type: 'codepen', url: 'https://codepen.io/' },
      { type: 'facebook', url: 'https://www.facebook.com' },
      { type: 'github', url: 'https://github.com/yuchanns' },
      { type: 'gitlab', url: 'https://gitlab.com/yuchanns' },
      { type: 'instagram', url: 'https://www.instagram.com/' },
      { type: 'linkedin', url: 'https://www.linkedin.com/' },
      { type: 'slack', url: 'https://slack.com/' },
      { type: 'stackoverflow', url: 'https://stackoverflow.com/users/10038512/yuchanns?tab=profile' },
      { type: 'telegram', url: 'https://telegram.org/' },
      { type: 'twitch', url: 'https://www.twitch.tv/' },
      { type: 'twitter', url: 'https://twitter.com/Airamusume' },
      { type: 'youtube', url: 'https://www.youtube.com/' },
      { type: 'email', url: 'mailto:airamusume@gmail.com' },
      { type: 'dribbble', url: 'https://dribbble.com/' },
      { type: 'behance', url: 'https://www.behance.net/' },
      { type: 'freepik', url: 'https://www.freepik.com/' },
      { type: 'adobestock', url: 'https://stock.adobe.com/' },
      { type: 'shutterstock', url: 'https://www.shutterstock.com/' },
      { type: '123rf', url: 'https://www.123rf.com/' },
      { type: 'dreamstime', url: 'https://www.dreamstime.com/' },
      { type: 'paypal', url: 'https://www.paypal.com/' }
    ],

    pagination: {
      lengthPerPage: 5
    },
  }
}