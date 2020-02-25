<template>
  <div id="vuepress-theme-hermit">
    <TheHeader @switchToc="switchToc" />
    <TheMain :toc="toc" />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@theme/components/TheHeader'
import TheMain from '@theme/components/TheMain'
import TheFooter from '@theme/components/TheFooter'
import 'animate.css'
import 'github-syntax-light/lib/github-light.css'

export default {
  name: 'vuepress-theme-hermit',

  components: {
    TheHeader,
    TheMain,
    TheFooter
  },

  data () {
    return {
      toc: false
    }
  },

  methods: {
    switchToc () {
      this.toc = !this.toc
    }
  }
}
</script>

<style lang="stylus" src='../styles/global.styl'></style>