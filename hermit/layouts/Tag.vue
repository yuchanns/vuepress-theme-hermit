<template>
  <main v-if="!$currentTags" class="site-main section-inner thin">
    <h1>{{ $themeConfig.lang.tags }}</h1>
    <span class="tags" v-for="(tag, key) in $tags._metaMap" :key="key">
      <router-link :to="tag.path">{{ key }}</router-link>
    </span>
  </main>
  <List :title="$themeConfig.lang.tags + ':' + $currentTags.key" :posts="posts" v-else />
</template>

<script>
import List from '@theme/components/List'
import { format, compareDesc } from 'date-fns'
import getYear from 'date-fns/get_year'
import { postsPrepare } from '@theme/utils/posts-prepare'

export default {
  name: 'Tag',

  components: {
    List
  },

  computed: {
    posts () {
      let posts
      if (this.$currentTags) {
        const pages = this.$currentTags.pages
        let current = 0, lengthPerPage = pages.length
        if (this.$pagination) {
          current = this.$pagination.paginationIndex * this.$themeConfig.pagination.lengthPerPage
          lengthPerPage = this.$themeConfig.pagination.lengthPerPage
        }

        posts = postsPrepare(pages, current, lengthPerPage)
      }

      return posts
    }
  }
}
</script>

<style lang="stylus" scoped>
.tags
  margin-right .5em
  &:before
    content '#'
</style>