<template>
  <TransitionAnimate>
    <component
      :is="layout"
      :key="$page.path">
    </component>
  </TransitionAnimate>
</template>

<script>
import TransitionAnimate from '@theme/components/TransitionAnimate'
import Vue from 'vue'

export default {
  name: 'TheMain',

  components: {
    TransitionAnimate
  },

  computed: {
    layout () {
      const layout = this.$page.frontmatter.layout
      if (layout && (this.$vuepress.getLayoutAsyncComponent(layout) || this.$vuepress.getVueComponent(layout))) {
        return Vue.component(layout)
      }
      return 'NotFound'
    }
  }
}
</script>