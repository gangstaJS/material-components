<template>
    <div class="mdl-textfield mdl-js-textfield" :class="className">
        <input class="mdl-textfield__input" :type="type" id="sample1" :value="value" :pattern="type == 'number' ? '-?[0-9]*(\.[0-9]+)?':''">
        <label class="mdl-textfield__label" for="sample1">{{label}}</label>
        <span class="mdl-textfield__error" v-show="type == 'number'">Input is not a number!</span>
    </div>
</template>

<script>
import common from '../mixins/text-field';

export default {
  props: {
    value: {
        default: '',
        required: false
    },
    type: {
        type: String,
        default: 'text',
        required: false
    },
    label: {
        type: String,
        default: 'Text...',
        required: false
    },
    className: {
        type: Object,
        required: false
    }
  },
  mounted () {
    componentHandler.upgradeElements(this.$el)
  },

  mixins: [common]
}
</script>