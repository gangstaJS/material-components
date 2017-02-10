<template>
    <div class="mdl-tooltip"
         :class="{
         'mdl-tooltip--large': large,
         'mdl-tooltip--left': left,
         'mdl-tooltip--right': right,
         'mdl-tooltip--top': top,
         'mdl-tooltip--bottom': bottom,
         }"
         :for='target'>
        <slot></slot>
    </div>
</template>

<script>
export default {
  props: {
    target: {
      required: true,
      type: String
    },
    left: Boolean,
    right: Boolean,
    top: Boolean,
    bottom: Boolean,

    large: Boolean
  },
  mounted () {
    componentHandler.upgradeElement(this.$el, 'MaterialTooltip')
  }
}
</script>