<template>
    <div>
        <m-slider v-model="amount" min="0" max="100"></m-slider>
        <br>
        <span>Step 10</span>
        <m-slider v-model="amount" min="0" max="100" step="10" disabled></m-slider>

        <p>
            {{amount}}
        </p>

        <hr>

        <div>
            <pre>
                <code class="html">
                    &#x3C;m-slider v-model=&#x22;amount&#x22; min=&#x22;0&#x22; max=&#x22;100&#x22;&#x3E;&#x3C;/m-slider&#x3E;
                    &#x3C;m-slider v-model=&#x22;amount&#x22; min=&#x22;0&#x22; max=&#x22;100&#x22; step=&#x22;10&#x22; disabled&#x3E;&#x3C;/m-slider&#x3E;
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
        mounted() {
            this.$el.querySelectorAll('.html').forEach(el => hljs.highlightBlock(el))
        },
        data(){
            return{
                amount: 0,
                doc: [
                    {name: 'v-model', description: 'Current value of a slider', remark: ''},
                    {name: 'step', description: 'Step of slide', remark: ''},
                    {name: 'min', description: 'Minimal value of a slider', remark: ''},
                    {name: 'max', description: 'Maximal value of a slider', remark: ''},
                    {name: 'disabled', description: 'true | false', remark: ''},
                ]
            }
        }
    }
</script>
