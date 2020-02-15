<template>
  <div class="btn-pagination" v-if="$pagination.hasPrev || $pagination.hasNext">
    <router-link v-if="$pagination.hasPrev" :to="$pagination.prevLink">
      <SvgIcon type="chevron-left" :svg='{ viewBox: "0 0 8 16" }' />
      Newer
    </router-link>
    <router-link v-if="$pagination.hasNext" :to="$pagination.nextLink">
      Older
      <SvgIcon type="chevron-right" :svg='{ viewBox: "0 0 8 16" }' />
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'Pagination'
}
</script>

<style lang="stylus" scoped>
.btn-pagination
  margin-top 20px
  margin-bottom 15px
  text-align center
  a
    display inline-block
    border 2px solid $keyColor
    border-radius 5px
    padding 5px 8px
    transition-property color, border-color
    &:first-child
      margin-right 1em
</style>