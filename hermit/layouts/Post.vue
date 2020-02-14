<template>
  <main class="site-main section-inner thin">
    <h1>Posts</h1>
    <div class="posts-group"
      v-for="(year, k) in $posts.years"
      :key="k">
      <div class="post-year">{{ year }}</div>
      <ul class="posts-list">
        <li class="post-item"
          v-for="(post, kp) in $posts.yearsPosts[year]"
          :key="kp">
          <router-link :to="post.path">
            <span class="post-title">{{ post.title }}</span>
            <span class="post-day">{{ post.frontmatter.formatDate }}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
// TODO: pagination
export default {
  name: 'Post'
}
</script>

<style lang="stylus" scoped>
.site-main
  @media (min-width 800px)
    margin-top 3em
  @media (min-width 960px)
    margin-top 6em

.posts
  &-group
    display flex
    margin-bottom 1.9em
    line-height normal
    .post-year
      padding-top 6px
      margin-right 1.8em
      font-size 1.6em
      opacity .6
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