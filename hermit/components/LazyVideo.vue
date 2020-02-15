<template>
  <lazy-component
    tag="div"
    class="container"
  >
    <iframe
      :src="src"
      frameborder="0"
      allowfullscreen
      class="video"
    />
  </lazy-component>
</template>
<script>
export default {
  name: 'LazyVideo',
  props: {
    src: {
      type: String,
      default: '',
    },
  },
}
</script>
<style lang="stylus" scoped>
.container {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
}
.video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow 0 0 10px #555
    border-radius 6px
}
</style>