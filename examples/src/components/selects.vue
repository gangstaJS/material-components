<template>
    <div>
        <m-select :data-source="testData" id="test1" v-model="m"></m-select>

        <div>{{m}}</div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                testData: [
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

                m: {name: 'NodeJs', value: 1}
            }
        }
    }
</script>
