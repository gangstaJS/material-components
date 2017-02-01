<template>
    <div class="mdl-progress mdl-js-progress" :class="{ 'mdl-progress__indeterminate': indeterminate }"></div>
</template>

<script>
    export default{
        props: {
            value: [String, Number],
            buffer: [String, Number],
            indeterminate: Boolean,
        },

        mounted() {
            componentHandler.upgradeElement(this.$el, 'MaterialProgress');

            if (this.value != null) {
                this.$el.MaterialProgress.setProgress(this.value)
                this.$watch('value', val => this.$el.MaterialProgress.setProgress(val));
            }

            if (this.buffer != null) {
                this.$el.MaterialProgress.setBuffer(this.buffer)
                this.$watch('buffer', val => this.$el.MaterialProgress.setBuffer(val));
            }
        }
    }
</script>
