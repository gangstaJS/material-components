<template>
    <div>
        <p>
            <h3>Simple select</h3>
            <m-select :data-source="testData2" id="test2" v-model="m2"></m-select>

            <div>{{m2}}</div>

        <p>
            <h3>Async select</h3>
            <m-select :data-source="testData" id="test1" v-model="m"></m-select>

            <div>{{m}}</div>
        </p>


        </p>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                testData: this.$http.get('https://restcountries.eu/rest/v1/all').then(res => {
                    let c = [];
                    res.data.forEach(el => {
                        c.push({
                            name: el.name,
                            value: el.numericCode,
                        });


                    });

                    return {data: c.splice(0, 10)};

                }),

                m: {name: '', value: null},


                // simple select

                testData2: [
                   {
                        name: 'NodeJs', value: 1,
                    },
                    {
                        name: 'JS', value: 2,
                    },
                    {
                        name: 'PHP', value: 3,
                    }
                ],

                m2: {name: '', value: null},
            }
        }
    }
</script>
