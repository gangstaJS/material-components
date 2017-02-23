<template>
    <div>
        <h3>Selects</h3>
        <p>
            <h4>Default</h4>
            <m-select :data-source="testData2" id="test2" v-model="m2"></m-select>

            <div>{{m2}}</div>
        </p>

        <p>

            <h4>AJAX select</h4>
            <m-select :data-source="testData" id="test1" v-model="m" search></m-select>

            <div>{{m}}</div>

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

                        setTimeout(() => { success(c.splice(0, 10)); }, 2000);
                   });
                },

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

                examples: `
                     <m-select :data-source="testData2" id="test2" v-model="m2"></m-select>
                     <m-select :data-source="testData" id="test1" v-model="m"></m-select>
                `
            }
        }
    }
</script>
