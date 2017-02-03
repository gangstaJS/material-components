<template>
    <label class="mdl-switch mdl-js-switch is-upgraded mdl-js-ripple-effect">
        <input class="mdl-switch__input"
               type="checkbox"
               v-model="checked"
               @change="fireChange"
               :disabled="disabled"/>
    <span class="mdl-switch__label">
      <slot></slot>
    </span>
    </label>
</template>

<script>
    export default {
        props: {
            value: {
                type: Boolean,
                required: true,
            },
            disabled: { required: false },
        },

        computed: {
            checked: {
                get () { return this.value },
                set (val) { this.checkedProxy = val },
                }
        },

        data() {
            return {
                checkedProxy: false
            }
        },

        mounted() {
            componentHandler.upgradeElements(this.$el);
        },

        methods: {
            fireChange (event) {
            this.$emit('input', this.checkedProxy)
        }
  }
    }
</script>
