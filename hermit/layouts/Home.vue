<template>
  <div class="spotlight">
    <div class="home-center">
      <h1 class="home-title">{{ $siteTitle }}</h1>
      <p class="home-subtitle">{{ $description }}</p>
      <div class="home-social">
        <a 
          :href="sns.url"
          :key="k"
          rel="nofollow me noopener noreferrer"
          target="_blank"
          v-for="(sns, k) in $themeConfig.sns">
          <component v-if="sns.svg" :is="sns.svg" />
          <SvgIcon v-else :type="sns.type" />
        </a>
      </div>
      <nav class="home-nav site-nav">
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
    <div class="home-footer">
      <p>© {{ year }} <a :href="$themeConfig.author.url" target="_blank" rel="nofollow me noopener noreferrer">{{ $themeConfig.author.name }}</a> · <a href="https://github.com/yuchanns/vuepress-theme-hermit/blob/master/LICENSE" target="_blank" rel="nofollow me noopener noreferrer">MIT LICENSE</a><template v-if="$service.feed.rss"> · <a href="/rss.xml" target="_blank"><SvgIcon type="rss" /></a></template></p>
    </div>
  </div>
</template>

<script>
import { format } from 'date-fns'

export default {
  name: 'Home',

  computed: {
    year () {
      return format(new Date(), 'YYYY')
    }
  }
}
</script>

<style lang="stylus" scoped>
.home
  &-center
    display flex
    flex-grow 1
    flex-direction column
    justify-content center
  &-title
    margin 0
    text-align center
  &-subtitle
    margin-top 0
    margin-bottom 1.5em
    text-align center
    line-height normal
    font-size .7em
    font-style italic
    opacity .9
  &-social
    font-size 1.4em
    text-align center
    opacity .8
    a
      margin 0 .2em
  &-nav 
    opacity .8
    a
      display block
      text-align center
      margin-top .5em
  &-footer
    text-align center
    font-size .6em
    line-height normal
    opacity .6
    p
      margin-top 0
</style>