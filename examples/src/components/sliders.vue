<template>
    <div>
        <m-slider v-model="amount" min="0" max="100"></m-slider>
        <br>
        <span>Step 10</span>
        <m-slider v-model="amount" min="0" max="100" step="10" disabled></m-slider>

        <p>
            {{amount}}
        </p>

        <hr>

        <div>
            <div>Code:</div>
            <textarea cols="100" rows="6" :value="examples"></textarea>
        </div>


    </div>
</template>
<script>
    export default{
        data(){
            return{
                amount: 0,
                examples: `
                    <m-slider v-model="amount" min="0" max="100"></m-slider>
                    <m-slider v-model="amount" min="0" max="100" step="10" disabled></m-slider>
                `
            }
        }
    }
</script>
