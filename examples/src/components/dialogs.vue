<template>
    <div>
        <h3>Dialogs</h3>

        <m-dialog ref="msg" title="MDL Dialog" :close-cb="test">
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
            <pre v-pre>
                <code class="html">
&#x3C;m-dialog ref=&#x22;msg&#x22; title=&#x22;MDL Dialog&#x22;&#x3E;
    &#x3C;p&#x3E;
        This is an example of the Material Design Lite dialog component. Please use responsibly.
    &#x3C;/p&#x3E;
&#x3C;/m-dialog&#x3E;

&#x3C;m-dialog ref=&#x22;msgFullwidth&#x22; title=&#x22;MDL Dialog&#x22; full-width&#x3E;
    &#x3C;p&#x3E;
        This is an example of the Material Design Lite dialog component. Please use responsibly.
    &#x3C;/p&#x3E;
&#x3C;/m-dialog&#x3E;

&#x3C;m-dialog ref=&#x22;msg2&#x22; full-width title=&#x22;Test Title&#x22;&#x3E;
    &#x3C;p style=&#x22;padding: 30px&#x22;&#x3E;Increment: {{increment}}&#x3C;/p&#x3E;

    &#x3C;template slot=&#x22;actions&#x22;&#x3E;
        &#x3C;m-button raised primary ripple @click.native=&#x22;increment++&#x22;&#x3E;Action&#x3C;/m-button&#x3E;
    &#x3C;/template&#x3E;
&#x3C;/m-dialog&#x3E;

&#x3C;m-button @click.native=&#x22;open&#x22;&#x3E;Open Dialog&#x3C;/m-button&#x3E;
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
                <m-table-row v-for="prop in doc">
                    <m-table-cell>{{prop.name}}</m-table-cell>
                    <m-table-cell>{{prop.description}}</m-table-cell>
                    <m-table-cell>{{prop.remark}}</m-table-cell>
                </m-table-row>
            </m-table-body>
        </m-table>
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
            },

            test() {
                console.log(12321);
            }
        },
        mounted() {
            hljs.highlightBlock(this.$el.querySelector('.html'));
        },
        data(){
            return {
                increment: 0,
                doc: [
                    {name: 'title', description: 'Title of the dialog', remark: ''},
                    {name: 'full-width', description: 'Make buttons full width by applying the mdl-dialog__actions--full-width modifier', remark: ''},
                    {name: 'no-focus-trap', description: 'Create custom focus for a tub navigation', remark: 'Optional'},
                ]
            }
        }
    }
</script>
