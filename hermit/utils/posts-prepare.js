const getYear = require('date-fns/get_year')
const { format, compareDesc } = require('date-fns')

function postsPrepare(pages, current, lengthPerPage) {
  let yearsPosts = {}
  const sortedPosts = pages.filter(page => {
    return page.id === 'Posts'
  }).sort((a, b) => {
      return compareDesc(a.frontmatter.date, b.frontmatter.date)
  })
  sortedPosts.slice(current, current + lengthPerPage)
    .map(page => {
      const year = getYear(page.frontmatter.date)
      if (!(year in yearsPosts)) {
        yearsPosts[year] = []
      }
      page.frontmatter.formatDate = format(page.frontmatter.date, 'MMM D')
      yearsPosts[year].push(page)
    })
  const years = Object.keys(yearsPosts).sort((a, b) => {
    return b - a
  })

  return { years: years, yearsPosts: yearsPosts, posts: sortedPosts }
}

export { postsPrepare }