module.exports = (opts, ctx) => {
  Object.assign(opts, Object.assign({
    lang: "en-US",
    nav: [],
    pagination: {
      lengthPerPage: 10
    },
    comment: {},
    feed: {}
  }, opts))

  const { pagination, feed, comment } = opts

  if (typeof opts.lang === 'string') {
    try {
      require.resolve(`./langs/${opts.lang}`)
    } catch (e) {
      opts.lang = 'en-US'
    }
    opts.lang = require(`./langs/${opts.lang}`)
  }

  const plugins = [
    [require('./plugins/blog'), {
      dirname: '_posts',
      pagination: pagination,
      lang: opts.lang,
      service: {
        comment,
        feed,
      }
    }]
  ]

  return {
    name: 'vuepress-theme-hermit',

    plugins: plugins,

    async ready () {
      ctx.addPage({
        permalink: '/',
        frontmatter: {
          layout: 'Home',
          title: `${opts.lang.home}`
        }
      })
    }
  }
}