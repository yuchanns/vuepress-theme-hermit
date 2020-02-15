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
    </article>
  </main>
</template>

<script>
export default {
  name: 'PostItem'
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
</style>