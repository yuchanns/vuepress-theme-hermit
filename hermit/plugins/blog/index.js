const path = require('path')
const markdownItAnchor = require('../markdown-it/anchor')
const markdownItLink = require('../markdown-it/link')
const { format } = require('date-fns')

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

    extendMarkdown: md => {
      md.use(markdownItAnchor)
      md.use(markdownItLink)
    },

    extendPageData: page => {
      if (!('layout' in page.frontmatter)) {
        if (page.regularPath.startsWith(`/${dirname}/`)) {
          page.frontmatter.layout = 'PostItem'
          page.frontmatter.type = 'post'
        } else {
          page.frontmatter.layout = 'Page'
          page.frontmatter.type = 'page'
        }
      }
      if ('date' in page.frontmatter) {
        page.frontmatter.metaDate = format(page.frontmatter.date, 'MMM D, YYYY')
      }
    }
  }
}