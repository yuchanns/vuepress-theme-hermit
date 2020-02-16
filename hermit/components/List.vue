<template>
  <main class="site-main section-inner thin">
    <h1>{{ title }}</h1>
    <div class="posts-group"
      v-for="(year, k) in posts.years"
      :key="k">
      <div class="post-year">{{ year }}</div>
      <ul class="posts-list">
        <li class="post-item"
          v-for="(post, kp) in posts.yearsPosts[year]"
          :key="kp">
          <router-link :to="post.path">
            <span class="post-title">{{ post.title }}</span>
            <span class="post-day">{{ post.frontmatter.formatDate }}</span>
          </router-link>
        </li>
      </ul>
    </div>
    <Pagination /> 
  </main>
</template>

<script>
import Pagination from '@theme/components/Pagination'

export default {
  name: 'List',

  components: {
    Pagination
  },

  props: {
    posts: {
      type: Object,
      default: () => {
        return {
          years: [],
          yearsPosts: []
        }
      }
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
.posts
  &-group
    display flex
    margin-bottom 1.9em
    line-height normal
    @media (max-width 760px)
      display block
      margin -6px 0 4px
    .post-year
      padding-top 6px
      margin-right 1.8em
      font-size 1.6em
      opacity .6
      @media (max-width 760px)
        margin -6px 0 4px
    .post-item
      border-bottom 1px $dashedColor dashed
      a
        display flex
        justify-content space-between
        align-items baseline
        padding 12px 0
    .post-day
      flex-shrink 0
      margin-left 1em
      opacity .6
  &-list
    flex-grow 1
    margin 0
    padding 0
    list-style none
</style>