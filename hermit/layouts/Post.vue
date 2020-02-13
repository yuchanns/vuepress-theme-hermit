<template>
  <div>
    <br>
    <router-link :to='post.path' v-for="(post, k) in $posts" :key="k">{{ post.title }}</router-link>
  </div>
</template>

<script>
export default {
  name: 'Post'
}
</script>

<style lang="stylus" scoped>

</style>