const path = require('path')

module.exports = ({
  dirname = '_posts',
  pagination = {},
  lang = 'en-US',
  service = {}
}) => {
  Object.assign(pagination, {
    layout: 'Post',
    // getPaginationPageTitle: pageNumber => {
    //   return `${lang.home}`
    // },
    sorter: (prev, next) => {
      const { compareAsc } = require('date-fns')
      return compareAsc(next.frontmatter.date, prev.frontmatter.date)
    }
  })

  return {
    name: '@theme-hermit/vuepress-plugin-blog',

    plugins: [
      ['@vuepress/blog', {
        directories: [
          {
            id: 'Posts',
            dirname: dirname,
            path: '/posts/',
            itemPermalink: '/posts/:year/:month/:day/:slug',
            pagination: pagination,
            layout: 'Post',
            itemLayout: 'PostItem'
          }
        ],
        ...service
      }],
      'vuepress-plugin-smooth-scroll'
    ],

    enhanceAppFiles: [
      path.resolve(__dirname, 'enhanceApp.js')
    ],

    extendPageData: page => {
      if (!('layout' in page.frontmatter)) {
        page.frontmatter.layout = 'Page'
      }
    }
  }
}