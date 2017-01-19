<template>
    <div>
        <m-snackbar display-on="msgSent"></m-snackbar>
        <m-button raised colored @click.native="sAction">Show Snackbar</m-button>
    </div>
</template>
<script>
    export default {
        data(){
            return {}
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
