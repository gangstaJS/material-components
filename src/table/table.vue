<template>
    <table class="mdl-data-table mdl-js-data-table">
        <slot></slot>
    </table>
</template>

<script>
    export default{
        props: {},

        data() {
            return {
                hasRowSelection: false,
                numberOfRows: 0,
                numberOfSelected: 0,
                selectedRows: {},
                data: [],
            }
        },

        watch: {
            data() {
                this.numberOfRows = this.data.length;
            }
        },

        methods: {
            emitSelection() {
                let selectedRows = [];

                Object.keys(this.selectedRows).forEach(k => {
                    selectedRows.push(this.selectedRows[k]);
                });

                this.$emit('select', selectedRows);
            }
        },

        mounted() {
            componentHandler.upgradeElement(this.$el);
        }
    }
</script>
