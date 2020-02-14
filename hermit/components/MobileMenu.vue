<template>
  <div class="mobile-menu">
    <ul>
      <li>
        <router-link to='/posts/'>Posts</router-link>
      </li>
      <li v-for="(nav, k) in $themeConfig.nav" :key="k">
        <router-link
          :to="nav.link"
          v-if="nav.link.startsWith('/')">{{ nav.text }}</router-link>
        <a :href="nav.link" :key="k" target="_blank" rel="nofollow me noopener noreferrer" v-else>{{ nav.text }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MobileMenu'
}
</script>

<style lang="stylus" scoped>
.mobile-menu
  position fixed
  bottom 4.8em
  right 1.5em
  padding .6em 1.8em
  z-index 1
  box-sizing border-box
  box-shadow $headerShadow
  background-color $headerColor
  @media (max-width $mobileWidth)
    right 1.2em
  ul
    list-style none
    margin 0
    padding 0
    line-height 2
    font-size 1.2em
</style>