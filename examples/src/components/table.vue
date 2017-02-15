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
                        <m-table-cell>{{user.email}}</m-table-cell>
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
            <div>Code:</div>
            <textarea cols="100" rows="20" :value="examples"></textarea>
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

        methods: {
            onSelect: function(items) {
                this.sel = items;
            },
        },

        data() {
            return {
                sel: {},
                testDataSet: [],
                examples: `
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
                                <m-table-cell>{{user.email}}</m-table-cell>
                                <m-table-cell>{{user.name}}</m-table-cell>
                            </m-table-row>
                        </m-table-body>
                    </m-table>
                `
            }
        }
    }
</script>
