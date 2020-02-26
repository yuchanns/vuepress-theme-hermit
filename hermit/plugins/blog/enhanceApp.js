import { VLazyImagePlugin } from 'v-lazy-image'
import VueLazyload from 'vue-lazyload'
import Gist from '@theme/components/Gist'
import { Tweet, Timeline, Moment } from 'vue-tweet-embed'
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
  // create gist
  Vue.component('Gist', {
    functional: true,

    props: {
      id: {
        type: String,
        default: ''
      },
      name: {
        type: String,
        default: ''
      }
    },

    render(h, { props, parent }) {
      if (parent._isMounted) {
        return h(Gist, { props: props })
      } else {
        parent.$once('hook:mounted', () => {
          parent.$forceUpdate()
        })
      }
    }
  })
  // create tweet
  Vue.component('Tweet', {
    functional: true,

    props: {
      id: {
        type: String,
        default: ''
      },
      options: {
        type: Object,
        default: () => {
          return {}
        }
      }
    },

    render(h, { props, parent }) {
      if (parent._isMounted) {
        return h(Tweet, { props: props })
      } else {
        parent.$once('hook:mounted', () => {
          parent.$forceUpdate()
        })
      }
    }
  })
  // create timeline
  Vue.component('Timeline', {
    functional: true,

    props: {
      id: {
        type: String,
        default: ''
      },
      options: {
        type: Object,
        default: () => {
          return {}
        }
      },
      sourceType: {
        type: String,
        default: 'profile'
      }
    },

    render(h, { props, parent }) {
      if (parent._isMounted) {
        return h(Timeline, { props: props })
      } else {
        parent.$once('hook:mounted', () => {
          parent.$forceUpdate()
        })
      }
    }
  })
  // create moment
  Vue.component('Moment', {
    functional: true,

    props: {
      id: {
        type: String,
        default: ''
      },
      options: {
        type: Object,
        default: () => {
          return {}
        }
      }
    },

    render(h, { props, parent }) {
      if (parent._isMounted) {
        return h(Moment, { props: props })
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