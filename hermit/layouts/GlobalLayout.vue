<template>
  <div id="vuepress-theme-hermit">
    <TheHeader />
    <TheMain />
    <!-- <TransitionAnimate>
      <TheFooter />
    </TransitionAnimate> -->
  </div>
</template>

<script>
import TheHeader from '@theme/components/TheHeader'
import TheMain from '@theme/components/TheMain'
import TheFooter from '@theme/components/TheFooter'
import TransitionAnimate from '@theme/components/TransitionAnimate'

export default {
  name: 'vuepress-theme-hermit',

  components: {
    TheHeader,
    TheMain,
    TheFooter,
    TransitionAnimate
  }
}
</script>

<style lang="stylus" src='../styles/global.styl'></style>