<template>
    <div class="mdl-js-snackbar mdl-snackbar">
        <div class="mdl-snackbar__text"></div>
        <button class="mdl-snackbar__action" type="button"></button>
    </div>
</template>

<script>
export default {
  props: {
    eventSource: {
      type: Object,
      required: false,
      default: function () {
        return this.$root
      }
    },
    displayOn: {
      type: String,
      required: true
    },
  },

  created() {
  },

  mounted() {
    componentHandler.upgradeElement(this.$el, 'MaterialSnackbar');

    this.eventSource.$on(this.displayOn, (snackbarConfig) => {
        this.$el.MaterialSnackbar.showSnackbar(snackbarConfig)
    })
  }
}
</script>