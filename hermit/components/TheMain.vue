<template>
  <div>
    <component
      :is="layout"
      :key="$page.path">
    </component>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'TheMain',

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