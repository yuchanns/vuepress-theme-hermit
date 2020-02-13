module.exports = (opts, ctx) => {
  Object.assign(opts, Object.assign({
    lang: "en-US",
    pagination: {
      lengthPerPage: 10
    }
  }, opts))

  const { pagination } = opts

  const plugins = [
    ['@vuepress/blog', {
      directories: [
        {
          id: 'Posts',
          dirname: '_posts',
          path: '/posts',
          itemPermalink: '/posts/:year/:month/:day/:slug',
          pagination: pagination,
          layout: 'Post',
          itemLayout: 'PostItem'
        }
      ]
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