<template>
    <tr :class="classes">
        <m-table-cell v-if="hasSelection">
            <m-checkbox v-model="checkbox" @change="select"></m-checkbox>
        </m-table-cell>

        <slot></slot>
    </tr>
</template>
<script>
    import { getClosestVueParent } from '../utils';
    export default{
        props: {
            selection: Boolean,
            mItem: Object,
        },

        computed: {
            hasSelection() {
                return this.selection || this.headRow && this.parentTable.hasRowSelection;
            },

            classes() {
                return {
                    'is-selected': this.checkbox
                };
            }
        },

        mounted() {
            this.parentTable = getClosestVueParent(this.$parent, 'mdl-data-table');

            if (this.$el.parentNode.tagName.toLowerCase() === 'thead') {
                this.headRow = true;
            } else {
                this.parentTable.numberOfRows++;
                this.index = this.parentTable.numberOfRows;

                if (this.selection) {
                    this.parentTable.hasRowSelection = true;
                }

                if (this.mItem) {
                    this.parentTable.data.push(this.mItem);
                }
            }
        },

        watch: {
            mItem(newValue, oldValue) {
                this.parentTable.data[this.index] = this.mItem;
                //this.handleMultipleSelection(newValue === oldValue);
            }
    },

        methods: {
            setSelectedRow(value, index) {
                if (value) {
                    this.parentTable.selectedRows[index] = this.parentTable.data[index];
                    ++this.parentTable.numberOfSelected;
                } else {
                    delete this.parentTable.selectedRows[index];
                    --this.parentTable.numberOfSelected;
                }
            },

            handleMultipleSelection(value) {

                console.log(this.parentTable.$children);

                this.parentTable.$children[1].$children.forEach((row, index) => {
                    row.checkbox = value;
                    if (!row.headRow) {
                        this.setSelectedRow(value, index);

                        //if(value) {
                        //    row.checkbox = true;
                        //}

                    }
                });

                this.parentTable.numberOfSelected =  value ? this.parentTable.numberOfRows : 0;

            },

            handleSingleSelection(value) {
                this.setSelectedRow(value, this.index - 1);
                this.parentTable.$children[0].checkbox = this.parentTable.numberOfSelected === this.parentTable.numberOfRows;
            },

            select() {
                if (this.hasSelection) {
                    if (this.headRow) {
                        this.handleMultipleSelection(this.checkbox);
                    } else {
                        this.handleSingleSelection(this.checkbox);
                    }

                    this.parentTable.emitSelection();

                }
            }
        },

        data(){
            return {
                parentTable: {},
                headRow: false,
                checkbox: false,
                index: 0
            }
        }
    }
</script>
