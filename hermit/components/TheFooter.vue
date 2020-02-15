<template>
  <transition enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
    <footer
      class="site-footer section-inner thin animated fadeInUp"
      v-if="footerShow">
      <p>© {{ year }} <a :href="$themeConfig.author.url" target="_blank" rel="nofollow me noopener noreferrer">{{ $themeConfig.author.name }}</a> · <a href="https://github.com/yuchanns/vuepress-theme-hermit/blob/master/LICENSE" target="_blank" rel="nofollow me noopener noreferrer">MIT LICENSE</a></p>
      <p>Made with <a href="http://vuepress.vuejs.org/" target="_blank" rel="nofollow me noopener noreferrer">Vueperss</a> · Theme <a href="https://github.com/yuchanns/vuepress-theme-hermit" target="_blank" rel="nofollow me noopener noreferrer">Hermit</a><template v-if="$service.feed.rss"> · <a href="/rss.xml" target="_blank"><SvgIcon type="rss" /></a></template></p>
    </footer>
  </transition>
</template>

<script>
import TransitionAnimate from '@theme/components/TransitionAnimate'
import { format } from 'date-fns'

export default {
  name: 'TheFooter',

  components: {
    TransitionAnimate
  },

  computed: {
    footerShow () {
      return !(this.$page.frontmatter.layout === 'Home' || !this.$page.frontmatter.layout)
    },
    year () {
      return format(new Date(), 'YYYY')
    }
  }
}
</script>

<style lang="stylus" scoped>
.site-footer
  text-align center
  font-size .9em
  margin-bottom 96px
  margin-top 64px
  p
    margin 0
</style>