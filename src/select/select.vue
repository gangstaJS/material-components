<template>
    <div class="oz-select-container">
        <div class="mdl-textfield mdl-js-textfield" @click="open">
            <input type="text" readonly="true" :value="_value.name" :id="id" class="mdl-textfield__input"> <span class="caret">▼</span>
        </div>

        <ul class="mdl-menu mdl-js-menu mdl-js-ripple-effect" :for="id" style="width: 300px" ref="menu">

            <slot v-if="!dataItems.length">
                <div style="text-align: center; line-height: 40px;">
                    <div class="mdl-spinner mdl-js-spinner is-active"></div> <span>Loading...</span>
                </div>
            </slot>

            <slot>
                <li class="mdl-menu__item" v-for="option in dataItems" :disabled="value.value == option.value" @click="itemClick(option)">{{option.name}}</li>
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
        },

        created () {
            if(typeof this.dataSource !== 'function') {
                this.dataItems = this.dataSource;
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
                wasOpen: false,
            }
        },

        methods: {

            _success(responseData) {
                this.dataItems = responseData;
                this.$menu.hide();
                Vue.nextTick(() => {
                    this.$menu.show();
                });
            },

            _failure(reason) {
                // TODO
                console.log(reason);
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
                    this.dataSource(this._success);
                }


            }
        },

        mounted () {
            componentHandler.upgradeElement(this.$refs.menu, 'MaterialMenu');
            this.$menu = this.$refs.menu.MaterialMenu;
        }
    }
</script>
