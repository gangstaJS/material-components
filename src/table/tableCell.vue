<template>
    <td :class="{'mdl-data-table__cell--non-numeric': !numeric}">
        <slot></slot>
    </td>
</template>
<script>
    export default{
        props: {
            numeric: {
                type: Boolean,
                default: false
            }
        }
    }
</script>
