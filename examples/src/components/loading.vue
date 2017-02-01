<template>
    <div>
        <h3>Progress bar</h3>

        <m-progress v-model="progress"></m-progress>


        <div style="width: 200px; margin-top: 30px;">
            <div style="margin-left: 26px;">Change value:</div>
            <m-slider v-model="progress" min="0" max="100"></m-slider>
        </div>


        <h4>Progress with buffer</h4>
        <div>
            <m-progress v-model="progress2" :buffer="buffer"></m-progress>
        </div>


        <h4>Indeterminate</h4>
        <div>
            <m-progress indeterminate></m-progress>
        </div>


        <div>
            <div>Code:</div>
            <textarea cols="100" rows="6" :value="examples"></textarea>
        </div>

        <h3>Spinner</h3>

        <div>
            <h4>Default:</h4>
            <m-spinner></m-spinner>
        </div>

        <div>
            <h4>Single color:</h4>
            <m-spinner single-color></m-spinner>
        </div>

        <div>
            <h4>Hide spinner</h4>
            <m-spinner :active="active"></m-spinner>

            <div>
                <input type="checkbox" v-model="active">
            </div>
        </div>

        <div>
            <div>Code:</div>
            <textarea cols="100" rows="6" :value="examples_spinner"></textarea>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                progress: 40,
                progress2: 30,
                buffer: 60,
                active: false,
                examples: `
                    <m-progress v-model="progress"></m-progress>
                    <m-progress v-model="progress2" :buffer="buffer"></m-progress>
                    <m-progress indeterminate></m-progress>
                `,

                examples_spinner: `
                   <m-spinner></m-spinner>
                   <m-spinner single-color></m-spinner>
                   <m-spinner :active="active"></m-spinner>
                `,
            }
        }
    }
</script>
