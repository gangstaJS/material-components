<template>
    <div class="oz-select-container">
        <div class="mdl-textfield mdl-js-textfield">
            <input type="text" readonly="true" :value="_value.name" :id="id" class="mdl-textfield__input"> <span class="caret">▼</span>
        </div>

        <ul class="mdl-menu mdl-js-menu mdl-js-ripple-effect" :for="id" style="width: 300px">

            <slot v-if="!data.length">
                <div style="text-align: center;">
                    <div class="mdl-spinner mdl-js-spinner is-active"></div>
                </div>
            </slot>

            <slot v-if="data.length">
                <li class="mdl-menu__item" v-for="option in data" :disabled="value.value == option.value" :class="cssClasses" @click="itemClick(option)">{{option.name}}</li>
            </slot>
        </ul>
    </div>
</template>
<style lang="scss">
    .oz-select-container {
        position: relative;
        display: inline-block;

        width: 500px;

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
    import { removeClass } from '../utils';

    export default {
        props: {
            id: {
                type: String,
                required: true,
            },
            dataSource: {
                type: [Array, Promise, Object],
            },
            value: {
                type: Object,
                required: true,
            },
        },

        created () {
            if('function' === typeof this.source.then) {
                this.source.then((res) => {
                   this.data = res.data;
                });
            } else {
                this.data = this.source;
            }
        },

        computed: {
            _value() {
                let val = {name: 'Select...', value: null};

                if(this.value.value) {
                    let res = this.data.find(el => el.value == this.value.value);

                    if(res) val = res;
                }

                return val;
            },

            cssClasses() {
                return {

                }
            }
        },

        watch: {
            data: function (n) {
                Vue.nextTick(() => {
                    // toggle menu for recalculate dropdown size
                    if(this.$menu.container_.classList.contains('is-visible')) {
                        this.$menu.hide();
                        this.$menu.show();
                    }
                });
            }
        },

        data() {
            return {
                source: this.dataSource,
                data: [],
            }
        },

        methods: {
            itemClick(option) {
                this.value.name = option.name;
                this.value.value = option.value;

                // TODO: improve this code line
                this.$menu.hide();

                this.isOpen = !this.isOpen;
            }
        },

        mounted () {
            componentHandler.upgradeElement(this.$el.querySelector('.mdl-menu'), 'MaterialMenu');
            this.$menu = this.$el.querySelector('.mdl-menu').MaterialMenu;
        }
    }
</script>
