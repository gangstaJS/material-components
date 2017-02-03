<template>
    <div>
        <m-checkbox v-model="checkbox1">This one</m-checkbox>

        <m-checkbox v-model="checkbox2">Label</m-checkbox>

        <hr>

        <div>
            {{checkbox1}}, {{checkbox2}}
        </div>

        <div>
            <div>Code:</div>
                    <textarea cols="100" rows="6" :value="examples">
                    </textarea>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                checkbox1: false,
                checkbox2: true,
                examples: `
                    <m-checkbox v-model="checkbox1">This one</m-checkbox>
                    <m-checkbox v-model="checkbox2">Label</m-checkbox>
                `
            }
        }
    }
</script>
