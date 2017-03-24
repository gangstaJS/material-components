<template>
    <div>
        <h4>Text Fields</h4>

        <div>
            <m-textfield label="Text..."></m-textfield>
            <br>
            <m-textfield float-label="Textarea..." textarea></m-textfield>
            <br>
            <m-textfield label="Number..." pattern="-?[0-9]*(\.[0-9]+)?" error="Invalid input"></m-textfield>
            <br>
            <m-textfield expandable="search" id="test-id-search" float-label="Expanding..."></m-textfield>
            <br>

            <div>
                <pre v-pre>
                    <code class="html">
                &#x3C;m-textfield label=&#x22;Text...&#x22;&#x3E;&#x3C;/m-textfield&#x3E;
                &#x3C;m-textfield float-label=&#x22;Textarea...&#x22; textarea&#x3E;&#x3C;/m-textfield&#x3E;
                &#x3C;m-textfield label=&#x22;Number...&#x22; pattern=&#x22;-?[0-9]*(\.[0-9]+)?&#x22; error=&#x22;Invalid input&#x22;&#x3E;&#x3C;/m-textfield&#x3E;
                &#x3C;m-textfield expandable=&#x22;search&#x22; id=&#x22;test-id-search&#x22; float-label=&#x22;Expanding...&#x22;&#x3E;&#x3C;/m-textfield&#x3E;
                    </code>
                </pre>
            </div>
        </div>

        <div>
            <h4>Test Form</h4>

            <form @submit.prevent="onSubmit">
                <m-textfield float-label="First Name" v-model="form.firstName"></m-textfield>
                <br>
                <m-textfield float-label="Last Name" v-model="form.lastName"></m-textfield>
                <br>
                <m-textfield float-label="Email" pattern="(.+)@(.+){2,}\.(.+){2,}" error="Invalid email"></m-textfield>
                <br>
                <m-textfield float-label="Password" type="password" v-model="form.password" pattern=".{3,}"></m-textfield>
                <br>
                <m-textfield float-label="Confirm password" type="password" pattern=".{3,}" error="Passwords not match"></m-textfield>
                <br>
                <button class="mdl-button mdl-js-button mdl-button--raised" type="submit">
                    Button
                </button>
            </form>

            <div>{{form}}</div>
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
export default {
    mounted() {
       this.$el.querySelectorAll('.html').forEach(el => hljs.highlightBlock(el))
    },
    data() {
        return {
            form: {
                firstName: '',
                lastName: '',
                email: ''
            }
        }
    }
}
</script>