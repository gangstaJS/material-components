<template>
    <button class="mdl-button mdl-js-button" :class="cssClasses" :disabled="disabled">
        <slot>
            <i class="material-icons" v-if="isIco" >{{icon}}</i>
        </slot>
    </button>
</template>

<script>
export default {
  props: {
    ripple: Boolean,
    disabled: Boolean,
    miniFab: Boolean,
    fab: Boolean,
    raised: Boolean,
    colored: Boolean,
    icon: [String, Boolean],
    accent: Boolean,
    primary: Boolean,
  },
  computed: {
    cssClasses() {
      return {
        'mdl-js-ripple-effect': this.ripple,
        'mdl-button--colored': this.colored,
        'mdl-button--icon': this.icon,
        'mdl-button--accent': this.accent,
        'mdl-button--mini-fab': this.miniFab,
        'mdl-button--primary': this.primary,
        'mdl-button--fab': this.fab || this.miniFab,
        'mdl-button--raised': this.raised,
      }
    },
    isIco() {
      return this.icon && typeof this.icon === 'string'
    }
  },
  mounted () {
    componentHandler.upgradeElement(this.$el)
  }
}
</script>
