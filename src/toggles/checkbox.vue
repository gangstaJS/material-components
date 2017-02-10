<template>
    <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect is-upgraded">
        <input type="checkbox" class="mdl-checkbox__input" :disabled="disabled" v-model="checked" :value="val" @change="fireChange">
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
            },
            disabled: { required: false },
            val: { required: false },
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
            componentHandler.upgradeElements(this.$el, 'MaterialCheckbox');
        },

        watch: {
            value(newValue, oldValue) {
                if(newValue != oldValue) {
                    this.$el.MaterialCheckbox[newValue ? 'check' : 'uncheck']();
                }
            }
        },

        methods: {
            fireChange (event) {
                this.$emit('input', this.checkedProxy);
                this.$emit('change', this.checkedProxy);
            }
        }
    }
</script>
