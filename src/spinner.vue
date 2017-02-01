<template>
    <div class="mdl-spinner mdl-js-spinner" :class="{ 'mdl-spinner--single-color': singleColor, 'is-active': active, 'is-upgraded': active }"></div>
</template>
<script>
    export default{
        props: {
            active: {
                type: Boolean,
                default: true,
            },

            singleColor: Boolean
        },

        mounted() {
            componentHandler.upgradeElement(this.$el);
        }
    }
</script>
