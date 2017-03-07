<template>
    <li class="mdl-menu__item" :disabled="disabled" @click="selectSingle" data-upgraded=",MaterialRipple">
        <slot v-if="multiple">
            <m-checkbox v-model="checked" @click.native.stop @change="select">{{_itemValue}}</m-checkbox>
        </slot>

        <slot v-else>
            {{_itemValue}}
        </slot>
    </li>
</template>
<script>
    import { prepareOptionValue } from '../utils'

    export default {
        created() {
            this._checkPreSelected();
        },

        watch: {
            items(n, o) {
                if(n != o) {
                    this._checkPreSelected();
                }
            }
        },

        props: {
            itemValue: {
                type: [String, Number, Object],
                required: true
            },

            items: {
                type: [Array],
                required: true,
            },

            selectedItems: {
                type: [String, Number, Array, Object],
                required: true
            },

            multiple: Boolean,
            disabled: Boolean,
        },


        computed: {
            disabled() {
                if(this.multiple) return false; // only Array

                // Object, String, Number
                if(typeof this.selectedItems == 'object') {
                    return this.selectedItems.value === prepareOptionValue(this.itemValue);
                } else {
                    return this.selectedItems === prepareOptionValue(this.itemValue);
                }
            },

            _itemValue() {
                return prepareOptionValue(this.itemValue, true)
            }
        },

        methods: {
            select(prop) {
                this.parentSelect[prop ? 'selectValue' : 'unselectValue'](this.itemValue);
            },

            selectSingle() {
                if(this.multiple) return;

                this.parentSelect.selectValue(this.itemValue);
            },

            _checkPreSelected() {
                if(this.multiple && this.selectedItems instanceof Array) {
                    for(let el of this.selectedItems) {
                        if(el && (typeof el == 'object') && (el.value === prepareOptionValue(this.itemValue))) {
                            this.checked = true;
                            break;
                        } else if(el === prepareOptionValue(this.itemValue)) {
                            this.checked = true;
                            break;
                        } else {
                            this.checked = false;
                        }
                    }


                }
            }
        },

        mounted() {
            this.parentSelect = this.$parent;
        },

        data() {
            return {
                checked: false,
                parentSelect: {},
            }
        }
    }
</script>
