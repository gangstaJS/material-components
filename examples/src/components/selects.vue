<template>
    <div>
        <h3>Selects</h3>
        <p>
            <h4>Default</h4>
            <m-select :data-source="testData2" id="test2" v-model="m2"></m-select>

            <div>{{m2}}</div>
        </p>

        <p>
        <h4>Array source (single)</h4>
        <m-select :data-source="testData4" id="test10" v-model="m10" search></m-select>

        <div>{{m10}}</div>
        </p>

        <p>

            <h4>AJAX select <span>{{m}}</span></h4>
            <m-select :data-source="testData" id="test1" v-model="m" multiple></m-select>

            <div>{{m}}</div>

        </p>

        <p>

        <h4>AJAX select with search <span>{{m5}}</span></h4>
        <m-select :data-source="testData" id="test3" v-model="m5" search></m-select>

        </p>

        <p>

        <h4>Multiple selecth <span>{{m6}}</span></h4>
        <m-select :data-source="testData3" id="test4" v-model="m6" multiple search></m-select>



        </p>

        <div>
            <div>Code:</div>
            <textarea cols="100" rows="6" :value="examples"></textarea>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                testData:  function(success, failure) {
                   this.$http.get('https://restcountries.eu/rest/v1/all').then(res => {
                        let c = [];
                        res.data.forEach(el => {
                            c.push({
                                name: el.name,
                                value: el.numericCode,
                            });
                        });

                        success(c.splice(0, 10));
                   });
                },

                m: [],

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

                testData4: [1,2,3,4,5,6,7,8,9],
                m10: 3,

                m2: {name: 'NodeJs', value: 1},

                m5: {name: '', value: ''},

                m6: ['004', 100],

                testData3: ['004','005', 100],

                examples: `
                     <m-select :data-source="testData2" id="test2" v-model="m2"></m-select>
                     <m-select :data-source="testData" id="test1" v-model="m"></m-select>
                     <m-select :data-source="testData" id="test3" v-model="m" search></m-select>
                `
            }
        }
    }
</script>
