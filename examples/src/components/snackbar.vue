<template>
    <div>
        <m-snackbar display-on="msgSent"></m-snackbar>
        <m-button raised colored @click.native="sAction">Show Snackbar</m-button>

        <div>
            <div>Code:</div>
            <textarea cols="100" rows="6" :value="examples"></textarea>
        </div>

    </div>
</template>
<script>
    export default {
        data(){
            return {
                examples: `
                    <m-snackbar display-on="msgSent"></m-snackbar>
                    <m-button raised colored @click.native="sAction">Show Snackbar</m-button>
                `
            }
        },

        methods: {
            sAction() {
                this.$root.$emit('msgSent', {
                    message: 'Message Sent',
                    actionText: 'Undo',
                    timeout: 2000,
                    actionHandler: (event) => {
                        console.log(event);
                    },
                });
            }
        }
    }
</script>
