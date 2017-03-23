<template>
    <div>
        <h4>Buttons</h4>

        <div>

            <m-button raised v-on:click.native="testClick">Click me</m-button>

            <m-button icon="add" raised accent></m-button>

            <m-button raised primary ripple>Ripple</m-button>

            <m-button disabled>Disabled</m-button>

            <pre v-pre>
                <code class="html">
 &#x3C;m-button raised v-on:click.native=&#x22;testClick&#x22;&#x3E;Click me&#x3C;/m-button&#x3E;

 &#x3C;m-button icon=&#x22;add&#x22; raised accent&#x3E;&#x3C;/m-button&#x3E;

 &#x3C;m-button raised primary ripple&#x3E;Ripple&#x3C;/m-button&#x3E;

 &#x3C;m-button disabled&#x3E;Disabled&#x3C;/m-button&#x3E;
                </code>
            </pre>

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
    </div>
</template>
<script>
    export default{
        mounted() {
            hljs.highlightBlock(this.$el.querySelector('.html'));
        },
        data(){
            return {
                doc: [
                    {name: 'ripple', description: 'Applies ripple click effect', remark: 'May be used in combination with any other classes'},

                    {name: 'disabled', description: 'disable button', remark: ''},

                    {name: 'fab', description: 'Applies fab (circular) display effect', remark: 'Mutually exclusive with raised, mini-fab, and icon'},

                    {name: 'raised', description: 'Applies raised display effect', remark: 'Mutually exclusive with fab, mini-fab, and icon'},

                    {name: 'colored', description: 'Applies colored display effect (primary or accent color, depending on the type of button)', remark: 'Colors are defined in material.min.css'},

                    {name: 'icon', description: 'Applies icon (small plain circular) display effect', remark: 'Mutually exclusive with raised, fab, and mini-fab'},

                    {name: 'accent', description: 'Applies accent color display effect', remark: 'Colors are defined in material.min.css'},

                    {name: 'mini-fab', description: 'Applies mini-fab (small fab circular) display effect', remark: 'Mutually exclusive with raised, fab, and icon'},

                    {name: 'primary', description: 'Applies primary color display effect', remark: 'Colors are defined in material.min.css'}
                ]
            }
        },
        methods: {
            testClick: function() {
                alert("Hi");
            }
        }
    }
</script>
