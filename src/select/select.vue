<template>
    <div class="oz-select-container">
        <div class="mdl-textfield mdl-js-textfield" @click="open">
            <input type="text" readonly="true" :value="_value.name" :id="id" class="mdl-textfield__input"> <span class="caret">▼</span>
        </div>

        <ul class="mdl-menu mdl-js-menu mdl-js-ripple-effect" :for="id" style="width: 300px" ref="menu">

            <li v-if="search" @click.stop class="search-item">
                <m-textfield label="Search..." v-model="searchText"></m-textfield>
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



            <li class="mdl-menu__item" v-for="option in dataItems" :disabled="value.value == option.value" @click="itemClick(option)">{{option.name}}</li>
        </ul>
    </div>
</template>
<style lang="scss">
    .oz-select-container {
        position: relative;
        display: inline-block;

        width: 500px;

        .search-item {
            padding: 0 20px;;
        }

        .mdl-menu__container {
            top:  10px !important;
        }

        .caret {
            position: absolute;
            top: 25px;
            right: 10px;
            font-size: 12px;
            opacity: .7;
        }
    }
</style>
<script>
    import { debounce, escapeRegExp } from '../utils';

    export default {
        props: {
            id: {
                type: String,
                required: true,
            },
            dataSource: {
                type: [Array, Function],
            },
            value: {
                type: Object,
                required: true,
            },

            search: Boolean,
        },

        created () {
            if(typeof this.dataSource !== 'function') {
                this.dataItems = this.dataSource;
                this.dataItemsOriginal = this.dataSource;
                this.loading = false;
            }
        },

        computed: {
            _value() {
                let val = {name: 'Select...', value: null};

                if(this.value.value) {
                    let res = this.dataItems.find(el => el.value == this.value.value);

                    if(res) val = res;
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
            }
        },

        watch: {
            searchText: debounce(function(newValue, oldValue) {
                if(newValue != oldValue) {
                    if(!newValue) {
                         this.dataItems = this.dataItemsOriginal;
                         this.notFound = false;
                    } else {
                         let items = this.dataItemsOriginal.filter(el => {
                             let reg = new RegExp(escapeRegExp(newValue), 'i');
                             return reg.test(el.name);
                         });

                         this.notFound = !items.length;

                         this.dataItems = items;
                    }

                    Vue.nextTick(() => {
                         this.$menu.show();
                    });
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

            _failure(reason) {
                // TODO: handle this
                this.loading = false;
            },

            itemClick(option) {
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


            }
        },

        mounted () {
            componentHandler.upgradeElement(this.$refs.menu, 'MaterialMenu');
            this.$menu = this.$refs.menu.MaterialMenu;
        }
    }
</script>
