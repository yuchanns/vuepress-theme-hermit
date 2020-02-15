import getYear from 'date-fns/get_year'
import { format, compareDesc } from 'date-fns'
import { VLazyImagePlugin } from 'v-lazy-image'
import VueLazyload from 'vue-lazyload'
import SvgIcon from '@theme/components/icons/SvgIcon'
import LazyVideo from '@theme/components/LazyVideo'

export default ({ Vue }) => {
  // use lazyimage
  Vue.use(VLazyImagePlugin)
  Vue.use(VueLazyload, {
    lazyComponent: true,
  })
  // create lazyvideo
  Vue.component('LazyVideo', {
    functional: true,

    props: {
      src: {
        type: String,
        default: ''
      }
    },

    render(h, { props, parent }) {
      if (parent._isMounted) {
        return h(LazyVideo, { props: props })
      } else {
        parent.$once('hook:mounted', () => {
          parent.$forceUpdate()
        })
      }
    }
  })
  // create svgicon
  Vue.component('SvgIcon', {
    functional: true,

    props: {
      type: {
        type: String,
        default: 'link'
      }
    },

    render (h, { props, parent }) {
      if (parent._isMounted) {
        return h(SvgIcon, { props: props })
      } else {
        parent.$once('hook:mounted', () => {
          parent.$forceUpdate()
        })
      }
    }
  })
  Vue.mixin({
    computed: {
      $posts () {
        const pages = this.$site.pages
        const current = this.$pagination.paginationIndex * this.$themeConfig.pagination.lengthPerPage
        let yearsPosts = {}
        pages.filter(page => {
          return page.id === 'Posts'
        })
          .sort((a, b) => {
            return compareDesc(a.frontmatter.date, b.frontmatter.date)
          })
          .slice(current, current + this.$themeConfig.pagination.lengthPerPage)
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

        return { years: years, yearsPosts: yearsPosts }
      }
    }
  })
}