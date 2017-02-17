<template>
    <div>
        <h3>Dialogs</h3>

        <m-dialog ref="msg" title="MDL Dialog">
            <p>
                This is an example of the Material Design Lite dialog component. Please use responsibly.
            </p>
        </m-dialog>

        <!-- // -->

        <m-dialog ref="msgFullwidth" title="MDL Dialog" full-width>
            <p>
                This is an example of the Material Design Lite dialog component. Please use responsibly.
            </p>
        </m-dialog>

        <!-- // -->

        <m-button @click.native="open" raised>Open Dialog</m-button>

        <m-button @click.native="openFull" raised>Open Dialog Full Width</m-button>

        <m-button @click.native="openAction" raised>Custom Actions</m-button>

        <!-- // -->

        <m-dialog ref="msg2" full-width title="Test Title">
            <p style="padding: 30px">Increment: {{increment}}</p>

            <template slot="actions">
                <m-button raised primary ripple @click.native="increment++">Action</m-button>
            </template>
        </m-dialog>

        <!-- // -->

        <div>
            <div>Code:</div>
            <textarea cols="100" rows="30" :value="examples"></textarea>
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
            },

            openAction() {
                this.$refs.msg2.open();
            }
        },
        data(){
            return {
                increment: 0,
                examples: `
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

                    <m-dialog ref="msg2" full-width title="Test Title">
                        <p style="padding: 30px">Increment: {{increment}}</p>

                        <template slot="actions">
                            <m-button raised primary ripple @click.native="increment++">Action</m-button>
                        </template>
                    </m-dialog>

                    <m-button @click.native="open">Open Dialog</m-button>
                `
            }
        }
    }
</script>
