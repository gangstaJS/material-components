<template>
    <div>
        <h4>Buttons</h4>

        <div>

            <m-button raised v-on:click.native="testClick">Click me</m-button>

            <m-button icon="add" raised accent></m-button>

            <m-button raised primary ripple>Ripple</m-button>

            <m-button disabled>Disabled</m-button>

            <hr>

            <div>
                <div>Code:</div>
                    <textarea cols="100" rows="6" :value="examples"></textarea>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                examples: `
                    <m-button raised v-on:click.native="testClick">Click me</m-button>

                    <m-button icon="add" raised accent></m-button>

                    <m-button raised primary ripple>Ripple</m-button>

                    <m-button disabled>Disabled</m-button>
                `
            }
        },
        methods: {
            testClick: function() {
                alert("Hi");
            }
        }
    }
</script>
