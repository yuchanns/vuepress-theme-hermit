const path = require('path')
const { format } = require('date-fns')
const markdownItAnchor = require('../markdown-it/anchor')
const markdownItLink = require('../markdown-it/link')
const markdownItLazyImage = require('../markdown-it/lazy-image')
const readingTime = require('../../utils/reading-time')

module.exports = ({
  dirname = '_posts',
  pagination = {},
  lang = {},
  service = {}
}) => {
  Object.assign(pagination, {
    layout: 'Post',
    getPaginationPageTitle: () => {
      return `${lang.home}`
    },
    sorter: (prev, next) => {
      const { compareAsc } = require('date-fns')
      return compareAsc(next.frontmatter.date, prev.frontmatter.date)
    }
  })

  const tagPagination = Object.assign(Object.assign({}, pagination), {
    layout: 'Tag',
    getPaginationPageTitle: (pageNumber, name) => {
      return `${name} ${lang.tags}`
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
            itemLayout: 'PostItem',
            title: lang.posts
          }
        ],
        frontmatters: [
          {
            id: 'tags',
            keys: ['tags'],
            path: '/tags/',
            layout: 'Tag',
            scopeLayout: 'Tag',
            pagination: tagPagination,
            title: lang.tags
          }
        ],
        ...service
      }],
      'vuepress-plugin-smooth-scroll',
      'vuepress-plugin-table-of-contents'
    ],

    enhanceAppFiles: [
      path.resolve(__dirname, 'enhanceApp.js')
    ],

    extendMarkdown: md => {
      md.use(markdownItAnchor)
      md.use(markdownItLink)
      md.use(markdownItLazyImage)
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
        page.frontmatter.calendar = format(page.frontmatter.date, 'YYYY-MM-DD HH:mm ZZ')
      }
      if (page._strippedContent) {
        const _strippedContent = page._strippedContent
        // filter out html annotations, spaces, newlines first
        // and then calculate readingtime
        page.readingTime = readingTime(_strippedContent.replace(/(<!--.*?-->)|[\r\n]| +/g, ''))
      }
    }
  }
}