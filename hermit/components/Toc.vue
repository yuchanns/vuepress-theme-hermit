<template>
  <aside class="toc">
    <div class="toc-title">{{ $page.title }}</div>
    <nav class="toc-contents">
      <TOC />
    </nav>
  </aside>
</template>

<script>
export default {
  name: 'Toc'
}
</script>

<style lang="stylus" scoped>
.toc
  position fixed
  left 50%
  top 0
  @media (min-width 1300px)
    top 13em
    margin-left 370px
    max-width 220px
  @media (max-width 1300px)
    display none
  &-title
    margin-left 1em
    margin-bottom .5em
    font-size .8em
    font-weight 700
  &-contents 
    font-size .8em
    opacity .6
    ul
      padding-left 1em
      margin 0
    &>ul
      list-style-type none
</style>