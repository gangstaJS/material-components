<template>
    <div>
        <h4>Checkbox</h4>

        <m-checkbox v-model="checkbox1">This one</m-checkbox>

        <m-checkbox v-model="checkbox2">Label</m-checkbox>

        <m-checkbox disabled v-model="checkbox2">Label</m-checkbox>

        <hr>

        <div>
            {{checkbox1}}, {{checkbox2}}
        </div>

        <div>
            <div>Code:</div>
                    <textarea cols="100" rows="6" :value="examples">
                    </textarea>
        </div>


        <h4>Radio</h4>
        <m-radio name="test" v-model="radioVal" val="one">Test 1</m-radio>
        <m-radio name="test" v-model="radioVal" val="two">Test 2</m-radio>
        <m-radio name="test" v-model="radioVal" val="3" disabled>Test 3</m-radio>

        <div>{{radioVal}}</div>

        <div>
            <div>Code:</div>
                    <textarea cols="100" rows="6" :value="examplesRadio">
                    </textarea>
        </div>


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
            <div>Code:</div>
                    <textarea cols="100" rows="6" :value="examplesSwitch">
                    </textarea>
        </div>


        <h4>Icon Taggle</h4>

        <m-icon-toggle v-model="iToggle" icon="format_bold"></m-icon-toggle>
        <br>

        {{iToggle}}

        <br>

        <m-icon-toggle v-model="iToggle2" icon="search"></m-icon-toggle>
        <br>
        {{iToggle2}}

        <div>
            <div>Code:</div>
                    <textarea cols="100" rows="6" :value="examplesIconToggles">
                    </textarea>
        </div>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                checkbox1: false,
                checkbox2: true,
                examples: `
                    <m-checkbox v-model="checkbox1">This one</m-checkbox>
                    <m-checkbox v-model="checkbox2">Label</m-checkbox>
                `,

                radioVal: 'two',
                examplesRadio: `
                    <m-radio name="test" v-model="radioVal" val="one">Test 1</m-radio>
                    <m-radio name="test" v-model="radioVal" val="two">Test 2</m-radio>
                    <m-radio name="test" v-model="radioVal" val="3" disabled>Test 3</m-radio>
                `,

                switch1: true,
                switch2: false,
                examplesSwitch: `
                    <m-switch v-model="switch1">On</m-switch>
                    <m-switch v-model="switch2">Off</m-switch>
                `,

                iToggle: true,
                iToggle2: false,

                examplesIconToggles: `
                    <m-icon-toggle v-model="iToggle" icon="format_bold"></m-icon-toggle>
                    <m-icon-toggle v-model="iToggle2" icon="search"></m-icon-toggle>
                `,
            }
        }
    }
</script>
