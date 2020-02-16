import getYear from 'date-fns/get_year'
import { format, compareDesc } from 'date-fns'
import { VLazyImagePlugin } from 'v-lazy-image'
import VueLazyload from 'vue-lazyload'
import SvgIcon from '@theme/components/icons/SvgIcon'
import LazyVideo from '@theme/components/LazyVideo'
import { postsPrepare } from '@theme/utils/posts-prepare'

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
        let current = 0, lengthPerPage = pages.length
        if (this.$pagination) {
          current = this.$pagination.paginationIndex * this.$themeConfig.pagination.lengthPerPage
          lengthPerPage = this.$themeConfig.pagination.lengthPerPage
        }
        return postsPrepare(pages, current, lengthPerPage)
      }
    }
  })
}