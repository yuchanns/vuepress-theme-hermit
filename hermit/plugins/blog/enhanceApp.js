import compareDesc from 'date-fns/compare_desc'

export default ({ Vue }) => {
  Vue.mixin({
    computed: {
      $posts () {
        const posts = this.$site.pages
        const finalPages = posts.filter(page => {
          return page.id === 'Posts'
        }).sort((a, b) => {
          return compareDesc(a.frontmatter.date, b.frontmatter.date)
        })

        return finalPages
      }
    }
  })
}