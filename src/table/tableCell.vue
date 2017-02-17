<template>
    <td :class="{'mdl-data-table__cell--non-numeric': !numeric}" :id="id">
        <m-tooltip :target="id" v-if="tooltip" top>{{tooltip}}</m-tooltip>
        <slot></slot>
    </td>
</template>
<script>
    import { genIdShort } from '../utils'

    export default {
        computed: {
            id: function() {
                return 't'+genIdShort();
            }
        },

        props: {
            tooltip: [String, Number],
            numeric: {
                type: Boolean,
                default: false
            }
        }
    }
</script>
