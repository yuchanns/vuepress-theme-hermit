<template>
  <List :posts="$posts" :title="$themeConfig.lang.posts" />
</template>

<script>
import List from '@theme/components/List'

export default {
  name: 'Post',

  components: {
    List
  }
}
</script>