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

  const { pagination, lang, feed, comment } = opts

  const plugins = [
    [require('./plugins/blog'), {
      dirname: '_posts',
      pagination: pagination,
      lang: lang,
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
          layout: 'Home'
        }
      })
    }
  }
}