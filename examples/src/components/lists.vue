<template>
    <div>
        <h3>Lists</h3>



        <div>
            <div>Code:</div>
            <textarea cols="110" rows="10" :value="examples"></textarea>
        </div>
    </div>
</template>

<script>
    export default{
        methods: {
        },
        data(){
            return {
                examples: ``
            }
        }
    }
</script>
