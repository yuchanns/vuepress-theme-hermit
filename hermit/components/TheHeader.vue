<template>
  <div>
    <transition enter-active-class="animated faster slideInUp" leave-active-class="animated faster slideOutDown">
      <header v-if="headerShow" v-show="!hide" class="site-header">
        <div class="hdr-wrapper section-inner">
          <div class="hdr-left">
            <div class="site-branding">
              <router-link to="/">{{ $siteTitle }}</router-link>
            </div>
            <nav class="site-nav">
              <router-link to='/posts/'>Posts</router-link>
              <template
                v-for="(nav, k) in $themeConfig.nav">
                <router-link
                  :key="k"
                  :to="nav.link"
                  v-if="nav.link.startsWith('/')">{{ nav.text }}</router-link>
                <a :href="nav.link" :key="k" target="_blank" rel="nofollow me noopener noreferrer" v-else>{{ nav.text }}</a>
              </template>
            </nav>
          </div>
          <div class="hdr-right hdr-icons">
            <span class="hdr-social">
              <a 
                :href="sns.url"
                :key="k"
                rel="nofollow me noopener noreferrer"
                target="_blank"
                v-for="(sns, k) in $themeConfig.sns">
                <SvgIcon :type="sns.type" />
              </a>
            </span>
            <button class="menu-btn hdr-btn" title="Menu" @click="show = !show">
              <SvgIcon type="menu" />
            </button>
          </div>
        </div>
      </header>
    </transition>
    <transition
      enter-active-class="animated fast bounceInRight"
      leave-active-class="animated fast bounceOutRight">
      <MobileMenu v-if="show" />
    </transition>
  </div>
</template>

<script>
import TransitionAnimate from '@theme/components/TransitionAnimate'
import MobileMenu from '@theme/components/MobileMenu'
import _ from 'lodash'
import 'animate.css'

export default {
  name: 'TheHeader',

  components: {
    MobileMenu,
    TransitionAnimate
  },
  data () {
    return {
      show: false,
      lastScroll: 0,
      hide: false
    }
  },
  computed: {
    headerShow () {
      return !(this.$page.frontmatter.layout === 'Home' || !this.$page.frontmatter.layout)
    }
  },
  methods: {
    detectScroll: _.throttle(function () {
      const st = window.pageYOffset || document.documentElement.scrollTop
      if (st > this.lastScroll) {
        this.hide = true
      } else if (st < this.lastScroll) {
        this.hide = false
      }
      this.lastScroll = st <= 0 ? 0 : st
    }, 500)
  },
  mounted () {
    this.lastScroll = window.pageYOffset || document.documentElement.scrollTop
    window.addEventListener('scroll', this.detectScroll)
  }
}
</script>

<style lang="stylus" scoped>
.site
  &-header
    position fixed
    z-index 1
    bottom 0
    width 100%
    box-sizing border-box
    box-shadow $headerShadow
    background-color $headerColor
  &-branding
    display inline-block
    margin-right .8em
    font-size 1.2em
  &-nav
    display inline-block
    font-size 1.1em
    opacity .8
    @media (max-width $mobileWidth)
      display none
    a
      margin-left .8em

.hdr
  &-wrapper
    display flex
    justify-content space-between
    align-items center
    padding .5em 0
    font-size 1.2rem
  &-icons
    font-size 1.2em
  &-social
    display inline-block
    margin-left .6em
    @media (max-width $mobileWidth)
      display none
  &-btn
    border none
    background 0 0
    padding 0

.menu-btn
  display none
  margin-left .6em
  cursor pointer
  @media (max-width $mobileWidth)
    display inline-block

.section-inner
  margin 0 auto
  max-width 1200px
  width 93%
</style>