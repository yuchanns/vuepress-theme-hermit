<template>
  <div id="vuepress-theme-hermit">
    <TheHeader />
    <TheMain />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@theme/components/TheHeader'
import TheMain from '@theme/components/TheMain'
import TheFooter from '@theme/components/TheFooter'

export default {
  name: 'vuepress-theme-hermit',

  components: {
    TheHeader,
    TheMain,
    TheFooter
  }
}
</script>

<style lang="stylus" src='../styles/global.styl'></style>