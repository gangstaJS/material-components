<template>
    <label class="mdl-icon-toggle mdl-js-icon-toggle is-upgraded mdl-js-ripple-effect">
        <input class="mdl-icon-toggle__input"
               type="checkbox"
               v-model="checked"
               @change="fireChange"
               :disabled="disabled"/>
        <i class="mdl-icon-toggle__label material-icons">{{icon}}</i>
    </label>
</template>

<script>
    export default {
        props: {
            value: {
                type: Boolean,
                required: true,
            },
            icon: {
                required: true,
                type: String
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
