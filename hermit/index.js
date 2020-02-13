module.exports = (opts, ctx) => {
  Object.assign(opts, Object.assign({
    lang: "en-US",
    nav: [],
    pagination: {
      lengthPerPage: 10
    }
  }, opts))

  const { pagination, lang, nav } = opts

  const plugins = [
    [require('./plugins/blog'), {
      dirname: '_posts',
      pagination: pagination,
      lang: lang
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