<template>
    <div>
        <m-snackbar display-on="msgSent"></m-snackbar>
        <m-button raised colored @click.native="sAction">Show Snackbar</m-button>

        <div>
            <pre v-pre>
                <code class="html">
                    &#x3C;m-snackbar display-on=&#x22;msgSent&#x22;&#x3E;&#x3C;/m-snackbar&#x3E;
                    &#x3C;m-button raised colored @click.native=&#x22;sAction&#x22;&#x3E;Show Snackbar&#x3C;/m-button&#x3E;
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
    export default {
        mounted() {
            this.$el.querySelectorAll('.html').forEach(el => hljs.highlightBlock(el))
        },

        data(){
            return {
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
