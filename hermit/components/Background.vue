<script>
export default {
  name: 'Background',

  props: {
    src: {
      type: String,
      default: ''
    },
    show: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    showBg () {
      this.$emit('showBg')
    }
  },

  render (h) {
    let cls = 'bg-img'
    if (this.show) cls += ' show-bg-img'
    return h(
      'div',
      {
        style: {
          'background-image': `url(${this.src})`
        },
        class: cls,
        on: {
          click: this.showBg
        }
      }
    )
  }
}
</script>

<style lang="stylus" scoped>
.bg-img
  width 100vw
  height 100vh
  opacity .03
  z-index -1
  position fixed
  top 0
  background-attachment fixed
  background-repeat no-repeat
  background-size cover
  background-position 50%
  transition opacity .5s

.show-bg-img
  z-index 100
  opacity 1
  cursor pointer
</style>