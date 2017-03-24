<template>
    <div>
        <h3>Table</h3>

        <p style="float: left;">
            <m-table @select="onSelect">
                <m-table-head>
                    <m-table-row>
                        <m-table-h numeric>Id</m-table-h>
                        <m-table-h>Email</m-table-h>
                        <m-table-h>Name</m-table-h>
                    </m-table-row>
                </m-table-head>


                <m-table-body>
                    <m-table-row v-for="user in testDataSet" selection :m-item="user">
                        <m-table-cell numeric>{{user.id}}</m-table-cell>
                        <m-table-cell :tooltip="'E-mail: '+user.email" >{{user.email}}</m-table-cell>
                        <m-table-cell>{{user.name}}</m-table-cell>
                    </m-table-row>
                </m-table-body>
            </m-table>
        </p>

        <div style="float: left; padding-left: 20px; width: 300px;">
            <div><b>Selected Items:</b></div>
            <p v-for="s in sel">{{s.id}}, {{s.email}}, {{s.name}}</p>
        </div>

        <div style="float: left; padding-left: 20px;">
            <pre v-pre>
                <code class="html">
                    &#x3C;m-table @select=&#x22;onSelect&#x22;&#x3E;
                        &#x3C;m-table-head&#x3E;
                            &#x3C;m-table-row&#x3E;
                                &#x3C;m-table-h numeric&#x3E;Id&#x3C;/m-table-h&#x3E;
                                &#x3C;m-table-h&#x3E;Email&#x3C;/m-table-h&#x3E;
                                &#x3C;m-table-h&#x3E;Name&#x3C;/m-table-h&#x3E;
                            &#x3C;/m-table-row&#x3E;
                        &#x3C;/m-table-head&#x3E;


                        &#x3C;m-table-body&#x3E;
                            &#x3C;m-table-row v-for=&#x22;user in testDataSet&#x22; selection :m-item=&#x22;user&#x22;&#x3E;
                                &#x3C;m-table-cell numeric&#x3E;{{user.id}}&#x3C;/m-table-cell&#x3E;
                                &#x3C;m-table-cell :tooltip=&#x22;&#x27;E-mail: &#x27;+user.email&#x22; &#x3E;{{user.email}}&#x3C;/m-table-cell&#x3E;
                                &#x3C;m-table-cell&#x3E;{{user.name}}&#x3C;/m-table-cell&#x3E;
                            &#x3C;/m-table-row&#x3E;
                        &#x3C;/m-table-body&#x3E;
                    &#x3C;/m-table&#x3E;
                </code>
            </pre>
        </div>

        <div style="clear: both;"></div>

        <div>
            <h4>Static Table</h4>

            <m-table>
                <m-table-head>
                    <m-table-row>
                        <m-table-h numeric>Id</m-table-h>
                        <m-table-h>Email</m-table-h>
                        <m-table-h>Name</m-table-h>
                    </m-table-row>
                </m-table-head>


                <m-table-body>
                    <m-table-row v-for="user in testDataSet">
                        <m-table-cell numeric>{{user.id}}</m-table-cell>
                        <m-table-cell>{{user.email}}</m-table-cell>
                        <m-table-cell>{{user.name}}</m-table-cell>
                    </m-table-row>
                </m-table-body>
            </m-table>
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
        created() {
            this.$http.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                this.testDataSet = res.data;
            });
        },

        mounted() {
            this.$el.querySelectorAll('.html').forEach(el => hljs.highlightBlock(el))
        },

        methods: {
            onSelect: function(items) {
                this.sel = items;
            },
        },

        data() {
            return {
                sel: {},
                testDataSet: []
            }
        }
    }
</script>
