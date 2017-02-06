<template>
    <ul class="mdl-menu mdl-js-menu mdl-js-ripple-effect" ref="menu">
        <slot></slot>
    </ul>
</template>
<script>
    export default{
        mounted () {
            componentHandler.upgradeElement(this.$el, 'MaterialMenu');
        }
    }
</script>
