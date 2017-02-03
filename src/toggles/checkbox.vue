<template>
    <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
        <input type="checkbox" class="mdl-checkbox__input" v-model="checked" @change="fireChange">
        <span class="mdl-checkbox__label">
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
            }
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
