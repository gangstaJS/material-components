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
                <div>Code:</div>
                    <textarea cols="100" rows="6">

                    <m-textfield label="Text..."></m-textfield>
                    <m-textfield float-label="Textarea..." textarea></m-textfield>
                    <m-textfield label="Number..." pattern="-?[0-9]*(\.[0-9]+)?" error="Invalid input"></m-textfield>
                    <m-textfield expandable="search" id="test-id-search" float-label="Expanding..."></m-textfield>

                    </textarea>
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
    </div>
</template>

<script>
export default {
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