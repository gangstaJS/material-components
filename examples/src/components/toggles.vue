<template>
    <div>
        <h4>Checkbox</h4>

        <m-checkbox v-model="checkbox1" @change="select">This one</m-checkbox>

        <m-checkbox v-model="checkbox2">Label</m-checkbox>

        <m-checkbox disabled v-model="checkbox2">Label</m-checkbox>

        <hr>

        <div>
            {{checkbox1}}, {{checkbox2}}
        </div>

        <div>
            <pre v-pre>
                <code class="html">
                    &#x3C;m-checkbox v-model=&#x22;checkbox1&#x22;&#x3E;This one&#x3C;/m-checkbox&#x3E;
                    &#x3C;m-checkbox v-model=&#x22;checkbox2&#x22;&#x3E;Label&#x3C;/m-checkbox&#x3E;
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
                <m-table-row v-for="prop in docCheckboxes">
                    <m-table-cell>{{prop.name}}</m-table-cell>
                    <m-table-cell>{{prop.description}}</m-table-cell>
                    <m-table-cell>{{prop.remark}}</m-table-cell>
                </m-table-row>
            </m-table-body>
        </m-table>


        <h4>Radio</h4>
        <m-radio name="test" v-model="radioVal" val="one">Test 1</m-radio>
        <m-radio name="test" v-model="radioVal" val="two">Test 2</m-radio>
        <m-radio name="test" v-model="radioVal" val="3" disabled>Test 3</m-radio>

        <div>{{radioVal}}</div>

        <div>
            <pre v-pre>
                <code class="html">
                    &#x3C;m-radio name=&#x22;test&#x22; v-model=&#x22;radioVal&#x22; val=&#x22;one&#x22;&#x3E;Test 1&#x3C;/m-radio&#x3E;
                    &#x3C;m-radio name=&#x22;test&#x22; v-model=&#x22;radioVal&#x22; val=&#x22;two&#x22;&#x3E;Test 2&#x3C;/m-radio&#x3E;
                    &#x3C;m-radio name=&#x22;test&#x22; v-model=&#x22;radioVal&#x22; val=&#x22;3&#x22; disabled&#x3E;Test 3&#x3C;/m-radio&#x3E;
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
                <m-table-row v-for="prop in docRadio">
                    <m-table-cell>{{prop.name}}</m-table-cell>
                    <m-table-cell>{{prop.description}}</m-table-cell>
                    <m-table-cell>{{prop.remark}}</m-table-cell>
                </m-table-row>
            </m-table-body>
        </m-table>


        <h4>Switch</h4>

        <m-switch v-model="switch1">On</m-switch>
        <br>
        {{switch1}}
        <br>

        <m-switch v-model="switch2">Off</m-switch>
        <br>
        {{switch2}}

        <m-switch v-model="switch2" disabled>Off</m-switch>
        <br>
        {{switch2}}

        <div>
            <pre v-pre>
                <code class="html">
                    &#x3C;m-switch v-model=&#x22;switch1&#x22;&#x3E;On&#x3C;/m-switch&#x3E;
                    &#x3C;m-switch v-model=&#x22;switch2&#x22;&#x3E;Off&#x3C;/m-switch&#x3E;
                    &#x3C;m-switch v-model=&#x22;switch2&#x22; disabled&#x3E;Off&#x3C;/m-switch&#x3E;
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
                <m-table-row v-for="prop in docSwitch">
                    <m-table-cell>{{prop.name}}</m-table-cell>
                    <m-table-cell>{{prop.description}}</m-table-cell>
                    <m-table-cell>{{prop.remark}}</m-table-cell>
                </m-table-row>
            </m-table-body>
        </m-table>


        <h4>Icon Taggle</h4>

        <m-icon-toggle v-model="iToggle" icon="format_bold"></m-icon-toggle>
        <br>

        {{iToggle}}

        <br>

        <m-icon-toggle v-model="iToggle2" icon="search"></m-icon-toggle>
        <br>
        {{iToggle2}}

        <div>
            <pre v-pre>
                <code class="html">
                    &#x3C;m-icon-toggle v-model=&#x22;iToggle&#x22; icon=&#x22;format_bold&#x22;&#x3E;&#x3C;/m-icon-toggle&#x3E;
                    &#x3C;m-icon-toggle v-model=&#x22;iToggle2&#x22; icon=&#x22;search&#x22;&#x3E;&#x3C;/m-icon-toggle&#x3E;
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
                <m-table-row v-for="prop in docIcon">
                    <m-table-cell>{{prop.name}}</m-table-cell>
                    <m-table-cell>{{prop.description}}</m-table-cell>
                    <m-table-cell>{{prop.remark}}</m-table-cell>
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

        methods: {
            select: function(val) {
                this.checkbox2 = val;
            }
        },
        data() {
            return {
                checkbox1: false,
                checkbox2: true,

                radioVal: 'two',

                switch1: true,
                switch2: false,

                iToggle: true,
                iToggle2: false,

                docCheckboxes: [
                    {name: 'disabled', description: 'Disables the checkbox. Adds the is-disabled class to the button', remark: ''},
                    {name: 'checked', description: 'Control whether the checkbox is checked or not', remark: 'You must use a two way binding. You can either use a boolean or an array'},
                    {name: 'id', description: 'Defines the id used to link the label and the input', remark: ''},
                    {name: 'v-model', description: 'Defines the value of the checkbox. Needed when passing an array to the v-model prop', remark: ''},
                ],

                docRadio: [
                    {name: 'disabled', description: 'Disables the checkbox. Adds the is-disabled class to the button', remark: ''},
                    {name: 'checked', description: 'Control whether the checkbox is checked or not', remark: 'You must use a two way binding. You can either use a boolean or an array'},
                    {name: 'name', description: 'Defines the name used on the input element', remark: ''},
                    {name: 'id', description: 'Defines the id used to link the label and the input', remark: ''},
                    {name: 'v-model', description: 'Defines the value of the radio button', remark: ''},
                ],

                docSwitch: [
                    {name: 'disabled', description: 'Disables the checkbox. Adds the is-disabled class to the button', remark: ''},
                    {name: 'checked', description: 'Control whether the checkbox is checked or not', remark: 'You must use a two way binding. You can either use a boolean or an array'},
                    {name: 'v-model', description: 'Defines the value of the switch. Useful when passing an array to thechecked prop', remark: ''},
                    {name: 'id', description: 'Defines the value of the radio button', remark: ''},
                ],

                docIcon: [
                    {name: 'disabled', description: 'Disables the checkbox. Adds the is-disabled class to the button', remark: ''},
                    {name: 'checked', description: 'Control whether the icon is checked or not', remark: 'You must use a two way binding. You can either use a boolean or an array'},
                    {name: 'icon', description: 'Set the toggle icon', remark: ''},
                    {name: 'id', description: 'Defines the id used to link the label and the input', remark: ''},
                    {name: 'v-model', description: 'Defines the value of the toggle. Useful when passing an array to thechecked prop', remark: ''},
                ],
            }
        }
    }
</script>
