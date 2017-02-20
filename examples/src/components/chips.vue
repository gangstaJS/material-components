<template>
    <div>
        <h3>Chips</h3>

        <m-chip contact="A">Basic Chip</m-chip>
        <m-chip contact-image="https://getmdl.io/templates/dashboard/images/user.jpg">Deletable Contact Chip</m-chip>


        <m-chip contact="A" @delete="del" v-if="showChip">Basic Chip</m-chip>

        <m-snackbar display-on="msgSent"></m-snackbar>


        <div>
            <div>Code:</div>
            <textarea cols="110" rows="10" :value="examples"></textarea>
        </div>
    </div>
</template>

<script>
    export default{
        methods: {
            del() {
                this.showChip = false;
                this.$root.$emit('msgSent', {
                    message: 'Deleted',
                    actionText: 'Undo',
                    timeout: 3000,
                    actionHandler: (event) => {
                      this.showChip = true;
                    },
                });
            }
        },
        data(){
            return {
                showChip: true,
                examples: `
                    <m-chip contact="A">Basic Chip</m-chip>
                    <m-chip contact-image="https://getmdl.io/templates/dashboard/images/user.jpg">Deletable Contact Chip</m-chip>

                    <m-chip contact="A" @delete="del" v-if="showChip">Basic Chip</m-chip>

                    <m-snackbar display-on="msgSent"></m-snackbar>
                `
            }
        }
    }
</script>
