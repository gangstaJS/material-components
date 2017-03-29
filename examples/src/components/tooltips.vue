<template>
    <div style="margin: 100px">
        <m-tooltip target="add-button">Hello World</m-tooltip>
        <m-button raised primary ripple id="add-button">Add</m-button>

        <hr>

        <m-tooltip target="add" large>Upload <strong>file.zip</strong></m-tooltip>
        <m-button icon="add" id="add" raised accent></m-button>

        <hr>

        <ul>
            <li>
               <p>
                   <m-tooltip target="left" left>Left tooltipe</m-tooltip>
                   <m-button raised primary ripple id="left">Left</m-button>
               </p>
            </li>
            <li>
                <p>
                    <m-tooltip target="right" right>Right tooltipe</m-tooltip>
                    <m-button raised primary ripple id="right">Right</m-button>
                </p>
            </li>

            <li>
                <p>
                    <m-tooltip target="top" top>Top tooltipe</m-tooltip>
                    <m-button raised primary ripple id="top">Top</m-button>
                </p>
            </li>

            <li>
                <p>
                    <m-tooltip target="bottom" bottom>Bottom tooltipe</m-tooltip>
                    <m-button raised primary ripple id="bottom">Bottom</m-button>
                </p>
            </li>
        </ul>

        <div>
            <pre v-pre>
                <code class="html">
                    &#x3C;m-tooltip target=&#x22;add-button&#x22;&#x3E;Hello World&#x3C;/m-tooltip&#x3E;
                    &#x3C;m-button raised primary ripple id=&#x22;add-button&#x22;&#x3E;Add&#x3C;/m-button&#x3E;

                    &#x3C;m-tooltip target=&#x22;add&#x22; large&#x3E;Upload &#x3C;strong&#x3E;file.zip&#x3C;/strong&#x3E;&#x3C;/m-tooltip&#x3E;
                    &#x3C;m-button icon=&#x22;add&#x22; id=&#x22;add&#x22; raised accent&#x3E;&#x3C;/m-button&#x3E;

                    &#x3C;m-tooltip target=&#x22;left&#x22; left&#x3E;Left tooltipe&#x3C;/m-tooltip&#x3E;
                    &#x3C;m-button raised primary ripple id=&#x22;left&#x22;&#x3E;Left&#x3C;/m-button&#x3E;
                </code>
            </pre>
        </div>

        <br>

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
        mounted() {
           this.$el.querySelectorAll('.html').forEach(el => hljs.highlightBlock(el))
        },

        data(){
            return {
                doc: [
                    {name: 'target', description: 'id of another item. The tooltip is binded to the item with the specified id', remark: 'Required'},
                    {name: 'large', description: 'Makes the tooltip bigger', remark: ''},
                    {name: 'left', description: '', remark: ''},
                    {name: 'right', description: '', remark: ''},
                    {name: 'top', description: '', remark: ''},
                    {name: 'bottom', description: '', remark: ''},
                ]
            }
        }
    }
</script>
