<template>
    <div class="oz-select-container">
        <div class="mdl-textfield mdl-js-textfield" @click="open">
            <input type="text" readonly="true" :value="_value" :id="id" class="mdl-textfield__input mdl-textfield__input--oz-select"> <span class="caret">▼</span>
        </div>

        <ul class="mdl-menu mdl-js-menu mdl-js-ripple-effect" :for="id" style="width: 300px" ref="menu">

            <li v-if="search" @click.stop class="search-item">
                <m-textfield label="Search..." v-model="searchText" ref="searchField"></m-textfield>
            </li>

            <slot v-if="loading">
                <div style="text-align: center; line-height: 40px;">
                    <span>Loading...</span>
                    <m-progress indeterminate></m-progress>
                </div>
            </slot>

            <slot v-if="notFound">
                <div style="text-align: center; line-height: 40px; opacity: .3">
                    <span>Not found</span>
                </div>
            </slot>

            <m-select-item :multiple="multiple" v-for="option in dataItems" :items="dataItems" :selected-items="value" :item-value="option"></m-select-item>
        </ul>
    </div>
</template>
<style lang="scss">
    .oz-select-container {
        position: relative;
        display: inline-block;

        width: 500px;

        .mdl-textfield__input {
            &--oz-select {
                padding: 4px 20px 4px 4px;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }

        .search-item {
            padding: 0 20px;;
        }

        .mdl-menu__container {
            top:  8px !important;
        }

        .caret {
            position: absolute;
            top: 25px;
            right: -20px;
            font-size: 12px;
            opacity: .7;
        }

        .mdl-checkbox {
            line-height: normal;
        }
    }
</style>
<script>
    import { debounce, escapeRegExp, prepareOptionValue } from '../utils'
    import MSelectItem from './selectItem.vue'

    export default {
        components: {
            MSelectItem
        },

        props: {
            id: {
                type: String,
                required: true,
            },
            dataSource: {
                type: [Array, Function],
            },
            value: {
                type: [Array, Object, String, Number], // multiple value can be only Array
                required: true,
            },

            search: Boolean,
            multiple: Boolean,
        },

        created() {
            if(typeof this.dataSource !== 'function') {
                this.dataItems = this.dataSource;
                this.dataItemsOriginal = this.dataSource;
                this.loading = false;
            }

            if(this.multiple) {
                this.selectedItems = [];
            }
        },

        computed: {
            _value() {
                let val = 'Select...';

                if(this.multiple && this.value.length) {
                    let _i = [];

                    this.value.forEach(v => {
                        _i.push(prepareOptionValue(v, true));
                    });

                    val = _i.join();
                } else {
                    let _i = prepareOptionValue(this.value, true);

                    if(_i) {
                        val = _i;
                    }
                }

                return val;
            }
        },

        data() {
            return {
                dataItems: [],
                dataItemsOriginal: [],
                wasOpen: false,
                searchText: '',
                loading: true,
                notFound: false,
                m: false,
            }
        },

        watch: {
            searchText: debounce(function(newValue, oldValue) {
                if(this.search && newValue != oldValue) {
                    if(!newValue) {
                         this.dataItems = this.dataItemsOriginal;
                         this.notFound = false;
                    } else {
                         let items = this.dataItemsOriginal.filter(el => {
                             let reg = new RegExp(escapeRegExp(newValue), 'i');
                             return reg.test(prepareOptionValue(el, true));
                         });

                         this.notFound = !items.length;
                         this.dataItems = items;
                    }

                    this._recalculateMenuHeight();
                }
            }, 200)
        },

        methods: {
            _success(responseData) {
                this.dataItems = responseData;
                this.dataItemsOriginal = responseData;
                this.loading = false;
                this.$menu.hide();
                Vue.nextTick(() => {
                    this.$menu.show();
                });
            },

            selectValue(val) {
                if(this.multiple) {
                   this.value.push(val);
                } else {
                    if(val && typeof val == 'object') {
                        console.log(val);
                        this.$emit('input', val);
                    } else {
                        this.$emit('input', val);
                    }

                    this.$menu.hide();
                }
            },

            unselectValue(val) {
                if(!this.multiple) return;

                let index = this.value.indexOf(val);

                if(index != -1) {
                    this.value.splice(index, 1);
                }
            },

            _failure(reason) {
                // TODO: handle this
                this.loading = false;
            },

            _recalculateMenuHeight() {
                Vue.nextTick(() => {
                   let height = this.$refs.menu.MaterialMenu.element_.getBoundingClientRect().height;
                   this.$refs.menu.MaterialMenu.container_.style.height = height + 'px';
                   this.$refs.menu.MaterialMenu.outline_.style.height = height + 'px';
                });
            },

            itemClick(ev, option) {
                this.value.name = option.name;
                this.value.value = option.value;

                // TODO: improve this code line
                this.$menu.hide();

                this.isOpen = !this.isOpen;
            },

            open(ev) {
                if(!this.wasOpen && typeof this.dataSource === 'function') {
                    this.wasOpen = true;
                    this.loading = true;
                    this.dataSource(this._success, this._failure);
                }

                if(this.search) {
                    setTimeout(() => {
                        this.$refs.searchField.$el.MaterialTextfield.input_.focus();
                    }, 100);
                }


            }
        },

        mounted () {
            componentHandler.upgradeElement(this.$refs.menu, 'MaterialMenu');
            this.$menu = this.$refs.menu.MaterialMenu;
        }
    }
</script>
