import getYear from 'date-fns/get_year'
import { format, compareDesc } from 'date-fns'

export default ({ Vue }) => {
  Vue.mixin({
    computed: {
      $posts () {
        const pages = this.$site.pages
        const current = this.$pagination.paginationIndex * this.$themeConfig.pagination.lengthPerPage
        let yearsPosts = {}
        pages.filter(page => {
          return page.id === 'Posts'
        }).sort((a, b) => {
          return compareDesc(a.frontmatter.date, b.frontmatter.date)
        }).slice(current, current + this.$themeConfig.pagination.lengthPerPage).map(page => {
          const year = getYear(page.frontmatter.date)
          if (!(year in yearsPosts)) {
            yearsPosts[year] = []
          }
          page.frontmatter.formatDate = format(page.frontmatter.date, 'MMM D')
          yearsPosts[year].push(page)
        })
        const years = Object.keys(yearsPosts).sort((a, b) => {
          return a - b
        }).reverse()

        return { years: years, yearsPosts: yearsPosts }
      }
    }
  })
}