<template>
  <main class="site-main section-inner">
    <article class="thin">
      <header class="post-header">
        <div class="post-meta">
          <span>{{ $page.frontmatter.metaDate }}</span>
        </div>
        <h1>{{ $page.title }}</h1>
      </header>
      <Content class="content" />
      <hr class="post-end">
      <footer class="post-info">
        <p>
          <SvgIcon type="tag" />
          <span class="tag" v-for="(tag, k) in $page.frontmatter.tags" :key="k">
            <router-link :to="'/tags/' + tag">{{ tag }}</router-link>
          </span>
        </p>
        <p>
          <SvgIcon type="file-text" />
          {{ $page.readingTime.words }} Words
        </p>
        <p>
          <SvgIcon type="calendar" />
          {{ $page.frontmatter.calendar }}
        </p>
      </footer>
    </article>
    <transition
      enter-active-class="animated fast bounceInRight"
      leave-active-class="animated fast bounceOutRight">
      <Toc v-if="toc" />
    </transition>
    <div class="post-nav thin">
      <router-link
        v-if="nextPost"
        :to="nextPost.path"
        class="next-post">
        <span class="post-nav-label">
          <SvgIcon type="arrow-left" />
          {{ $themeConfig.lang.next }}
        </span>
        <br>
        <span>{{ nextPost.title }}</span>
      </router-link>
      <router-link
        v-if="prevPost"
        :to="prevPost.path"
        class="prev-post">
        <span class="post-nav-label">
          {{ $themeConfig.lang.prev }}
          <SvgIcon type="arrow-right" />
        </span>
        <br>
        <span>{{ prevPost.title }}</span>
      </router-link>
    </div>
    <div class="thin comments" v-if="$service.comment.enabled">
      <Comment />
    </div>
  </main>
</template>

<script>
import { Comment } from '@vuepress/plugin-blog/lib/client/components'
import Toc from '@theme/components/Toc'
import _ from 'lodash'

export default {
  name: 'PostItem',

  components: {
    Toc,
    Comment
  },

  props: {
    toc: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    index () {
      return _.findIndex(this.$posts.posts, post => {
        return post.key === this.$page.key
      })
    },

    prevPost () {
      if (this.index === this.$posts.posts.length) {
        return null
      }
      return this.$posts.posts[this.index + 1]
    },

    nextPost () {
      if (this.index === 0) {
        return null
      }
      return this.$posts.posts[this.index - 1]
    },
  }
}
</script>

<style lang="stylus" scoped>
.post
  &-header
    margin-top 1.2em
    line-height normal
    h1
      margin-top .1em
  &-meta
    font-size .9em
    letter-spacing normal
    opacity .6
  &-end
    margin-top 1.6em
    margin-bottom .8em
    margin-left 0
    border-style solid
    border-bottom-width 4px
    opacity .2
    border-width 0 0 5px
    background transparent
    @media (min-width 520px)
      width 60%
    @media (min-width 800px)
      width 40%
    @media (min-width 1300px)
      width 30%
    width 50%
  &-info
    font-size .8rem
    line-height normal
    opacity .6
    p
      margin .8em 0
      svg
        margin-right .8em
    .tag
      margin-right .5em
      &:before
        content '#'
  &-nav
    display flex
    justify-content space-between
    margin-top 1.5em
    margin-bottom 2.5em
    font-size 1.2em
    a
      flex-basis 50%
      flex-grow 1
    &-label
      font-size .8em
      opacity .8
      text-transform uppercase
.next-post
  text-align left
  padding-right 5px

.prev-post
  text-align right
  padding-left 5px
</style>