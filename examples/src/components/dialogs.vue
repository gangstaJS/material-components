<template>
    <div>
        <h3>Dialogs</h3>

        <m-dialog ref="msg" title="MDL Dialog">
            <p>
                This is an example of the Material Design Lite dialog component. Please use responsibly.
            </p>
        </m-dialog>

        <m-dialog ref="msgFullwidth" title="MDL Dialog" full-width>
            <p>
                This is an example of the Material Design Lite dialog component. Please use responsibly.
            </p>
        </m-dialog>

        <m-button @click.native="open" raised>Open Dialog</m-button>

        <m-button @click.native="openFull" raised>Open Dialog Full Width</m-button>

        <div>
            <div>Code:</div>
            <textarea cols="100" rows="6" :value="examples"></textarea>
        </div>
    </div>
</template>

<script>
    export default{
        methods: {
            open() {
                this.$refs.msg.open();
            },

            openFull() {
                this.$refs.msgFullwidth.open();
            }
        },
        data(){
            return {
                examples: `
                    <m-dialog ref="msg" title="MDL Dialog">
                        <p>
                            This is an example of the Material Design Lite dialog component. Please use responsibly.
                        </p>
                    </m-dialog>

                    <m-button @click.native="open">Open Dialog</m-button>
                `
            }
        }
    }
</script>
