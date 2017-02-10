<template>
    <th :class="{'mdl-data-table__cell--non-numeric': !numeric}">
        <slot></slot>
    </th>
</template>
<script>
    export default {
        props: {
            numeric: {
                type: Boolean,
                default: false
            }
        }
    }
</script>
