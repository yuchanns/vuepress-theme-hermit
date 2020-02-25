<template>
  <VueEmbedGist :gist-id="id" :file="name" />
</template>

<script>
import VueEmbedGist from 'vue-embed-gist'

export default {
  name: 'Gist',
  
  components: {
    VueEmbedGist
  },

  props: {
    id: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  }
}
</script>