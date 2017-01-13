<template>
    <div class="mdl-textfield mdl-js-textfield">
        <input class="mdl-textfield__input" type="text" id="sample1">
        <label class="mdl-textfield__label" for="sample1">Text...</label>
    </div>
</template>

<script>
import common from '../mixins/text-field';

export default {
  mounted () {
    componentHandler.upgradeElements(this.$el)
  },
  mixins: [common]
}
</script>