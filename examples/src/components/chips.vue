<template>
    <div>
        <h3>Chips</h3>

        <m-chip contact="A">Basic Chip</m-chip>
        <m-chip contact-image="https://getmdl.io/templates/dashboard/images/user.jpg">Deletable Contact Chip</m-chip>


        <m-chip contact="A" @delete="del" v-if="showChip">Basic Chip</m-chip>

        <m-snackbar display-on="msgSent"></m-snackbar>


        <div>
            <pre v-pre>
                <code class="html">
&#x3C;m-chip contact=&#x22;A&#x22;&#x3E;Basic Chip&#x3C;/m-chip&#x3E;
&#x3C;m-chip contact-image=&#x22;https://getmdl.io/templates/dashboard/images/user.jpg&#x22;&#x3E;Deletable Contact Chip&#x3C;/m-chip&#x3E;
&#x3C;m-chip contact=&#x22;A&#x22; @delete=&#x22;del&#x22; v-if=&#x22;showChip&#x22;&#x3E;Basic Chip&#x3C;/m-chip&#x3E;
&#x3C;m-snackbar display-on=&#x22;msgSent&#x22;&#x3E;&#x3C;/m-snackbar&#x3E;
                </code>
            </pre>
        </div>

        <m-table style="width: 100%">
            <m-table-head>
                <m-table-row>
                    <m-table-h>Prop</m-table-h>
                    <m-table-h>Effect</m-table-h>
                    <m-table-h>Remarks</m-table-h>
                </m-table-row>
            </m-table-head>

            <m-table-body>
                <m-table-row>
                    <m-table-cell></m-table-cell>
                    <m-table-cell></m-table-cell>
                    <m-table-cell></m-table-cell>
                </m-table-row>
            </m-table-body>
        </m-table>
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
        mounted() {
            hljs.highlightBlock(this.$el.querySelector('.html'));
        },
        data(){
            return {
                showChip: true,
            }
        }
    }
</script>
