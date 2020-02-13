<script>
export default {
  name: 'TransitionFadeSlide',
  functional: true,
  props: {
    appear: {
      type: Boolean,
      default: true
    },
    direction: {
      type: String,
      default: 'y'
    },
    group: {
      type: Boolean,
      default: false
    },
    mode: {
      type: String,
      default: 'out-in'
    },
    tag: {
      type: String,
      default: ''
    },
    speed: {
      type: String,
      default: 'normal'
    }
  },
  computed: {
    name () {
      return `fade-slide-${this.direction}-${this.speed}`
    },
    component () {
      return this.group ? 'transition-group' : 'transition'
    }
  },
  render (h, { props, children }) {
    return h(
      props.group ? 'TransitionGroup' : 'Transition',
      {
        props: {
          name: `fade-slide-${props.direction}-${props.speed}`,
          ...props
        }
      },
      children
    )
  }
}
</script>

<style lang="stylus">
.fade-slide
  &-y
    &-normal
      &-enter-active
        transition: all .3s ease
      &-leave-active
        transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0)
      &-enter
      &-leave-to
        transform: translateY(10px)
        opacity: 0
    &-slow
      &-enter-active
        transition: all 1.5s ease
      &-leave-active
        transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0)
      &-enter
      &-leave-to
        transform: translateY(10px)
        opacity: 0
  &-x
    &-normal
      &-enter-active
        transition: all .3s ease
      &-leave-active
        transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0)
      &-enter
      &-leave-to
        transform: translateX(10px)
        opacity: 0
    &-slow
      &-enter-active
        transition: all 1.5s ease
      &-leave-active
        transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0)
      &-enter
      &-leave-to
        transform: translateX(10px)
        opacity: 0
</style>