<template>
    <div>
        <h3>Progress bar</h3>

        <m-progress v-model="progress"></m-progress>


        <div style="width: 200px; margin-top: 30px;">
            <div style="margin-left: 26px;">Change value:</div>
            <m-slider v-model="progress" min="0" max="100"></m-slider>
        </div>


        <h4>Progress with buffer</h4>
        <div>
            <m-progress v-model="progress2" :buffer="buffer"></m-progress>
        </div>


        <h4>Indeterminate</h4>
        <div>
            <m-progress indeterminate></m-progress>
        </div>

        <div>
            <pre v-pre>
                <code class="html">
                    &#x3C;m-progress v-model=&#x22;progress&#x22;&#x3E;&#x3C;/m-progress&#x3E;
                    &#x3C;m-progress v-model=&#x22;progress2&#x22; :buffer=&#x22;buffer&#x22;&#x3E;&#x3C;/m-progress&#x3E;
                    &#x3C;m-progress indeterminate&#x3E;&#x3C;/m-progress&#x3E;
                </code>
            </pre>
        </div>

        <h3>Spinner</h3>

        <div>
            <h4>Default:</h4>
            <m-spinner></m-spinner>
        </div>

        <div>
            <h4>Single color:</h4>
            <m-spinner single-color></m-spinner>
        </div>

        <div>
            <h4>Hide spinner</h4>
            <m-spinner :active="active"></m-spinner>

            <div>
                <input type="checkbox" v-model="active">
            </div>
        </div>

        <div>
            <pre>
                <code class="html">
                   &#x3C;m-spinner&#x3E;&#x3C;/m-spinner&#x3E;
                   &#x3C;m-spinner single-color&#x3E;&#x3C;/m-spinner&#x3E;
                   &#x3C;m-spinner :active=&#x22;active&#x22;&#x3E;&#x3C;/m-spinner&#x3E;
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
        mounted() {
            this.$el.querySelectorAll('.html').forEach(el => hljs.highlightBlock(el))
        },

        data(){
            return {
                progress: 40,
                progress2: 30,
                buffer: 60,
                active: false,
            }
        }
    }
</script>
