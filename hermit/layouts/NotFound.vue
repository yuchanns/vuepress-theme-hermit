<template>
  <div class="spotlight error-404">
    <p class="img-404">
      <NotFoundIcon />
    </p>
    <div class="banner-404">
      <h1>404</h1>
      <p>{{ hint }}</p>
      <p class="btn-404">
        <router-link to="/"><SvgIcon type="home" />Home</router-link>
        <router-link to="/posts/"><SvgIcon type="archives" />Archives</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import NotFoundIcon from '@theme/components/icons/NotFoundIcon'
import SvgIcon from '@theme/components/icons/SvgIcon'

export default {
  name: 'NotFound',

  components: {
    NotFoundIcon,
    SvgIcon
  },

  computed: {
    hint () {
      const hints = [
        'How did we get here?',
        'There\'s nothing here.',
        'That\'s a Four-Oh-Four.',
        'Oops, page not found.'
      ]
      const index = Math.floor(Math.random() * (hints.length))
      return hints[index]
    }
  }
}
</script>

<style lang="stylus" scoped>
.error-404
  flex-direction row
  line-height normal

p.img-404
  margin 0

.banner-404
  margin-left 2em
  h1
    font-size 3em
    margin .5rem 0
  p
    margin-top 0
  .btn-404
    font-size .8em
    a
      display inline-block
      border 2px solid $keyColor
      border-radius 5px
      padding 5px
      transition-property color border-color
      &:first-child
        margin-right 1em
      svg
        margin-right .5em
</style>