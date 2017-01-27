<template>
    <div>
        <m-slider v-model="amount" min="0" max="100"></m-slider>
        <br>
        <span>Step 10</span>
        <m-slider v-model="amount" min="0" max="100" step="10" disabled></m-slider>
        <hr>

        <p>
            {{amount}}
        </p>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                amount: 0
            }
        }
    }
</script>
