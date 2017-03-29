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
            },

            doc: [
                {name: 'v-model', description: 'Defines a value for the textfield', remark: ''},
                {name: 'label', description: 'Defines the label used on the the textfield', remark: 'You don\'t need this if you use floating-label'},
                {name: 'floating-label', description: 'Defines whether the label should float or not. If the given value is a String, you don\'t need to provide a label prop', remark: ''},
                {name: 'textarea', description: 'Makes the textfield a textarea instead of an input', remark: ''},
                {name: 'rows', description: 'Controls the number of rows used in the textarea', remark: 'Needs the textarea prop'},
                {name: 'pattern', description: 'Input validation using a Regex', remark: 'Only works on non-textareas'},
                {name: 'error', description: 'Defines the error displayed when the input text doesn\'t match the given pattern', remark: 'Needs the pattern prop'},
                {name: 'expandable', description: 'Makes the textfield look like a button that expands. You need to pass a material icon to this prop', remark: 'Needs to have an id set'},
                {name: 'type', description: 'Defines the type of the input', remark: 'Defaults to text. Only works on non-textarea'},
                {name: 'disabled', description: 'Disables the input', remark: 'Add it without any value or bind it to a Boolean'},
                {name: 'readonly', description: 'Makes the input readonly', remark: 'Add it without any value or bind it to a Boolean'},
                {name: 'maxlength', description: 'Defines the maxlength of the input or textarea', remark: 'This uses html attribute maxlength'},
            ]
        }
    }
}
</script>