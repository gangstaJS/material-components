<template>
    <div class="oz-select-container">
        <div class="mdl-textfield mdl-js-textfield">
            <input type="text" readonly="true" :value="_value.name" :id="id" class="mdl-textfield__input"> <span class="caret">▼</span>
            <label class="mdl-textfield__label">Text...</label>
        </div>

        <ul class="mdl-menu mdl-js-menu mdl-js-ripple-effect" :for="id" style="width: 300px">
            <li class="mdl-menu__item" v-for="option in source" :disabled="value.value == option.value" :class="cssClasses" @click="itemClick(option)">{{option.name}}</li>
        </ul>
    </div>
</template>
<style lang="scss">
    .oz-select-container {
        position: relative;
        display: inline-block;

        width: 500px;

        .caret {
            position: absolute;
            top: 25px;
            right: 10px;
            font-size: 12px;
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
            dataSource: Array,
            value: Object,
        },

        computed: {
            _value() {
                let val = this.source.find(el => el.value == this.value.value);

                if(!val) {
                    val = {name: 'Placeholder', value: null};
                }

                return val;
            },

            cssClasses() {
                return {

                }
            }
        },

        data(){
            return {
                source: this.dataSource
            }
        },

        methods: {
            itemClick(option) {
                this.value.name = option.name;
                this.value.value = option.value;

                // TODO rewrite this code;
                removeClass(this.$el.querySelector('.mdl-menu__container'), 'is-visible');
            }
        },

        mounted () {
            componentHandler.upgradeElement(this.$el);
        }
    }
</script>
