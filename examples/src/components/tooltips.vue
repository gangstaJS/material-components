<template>
    <div style="margin: 100px">
        <m-tooltip target="add-button">Hello World</m-tooltip>
        <m-button raised primary ripple id="add-button">Add</m-button>

        <hr>

        <m-tooltip target="add" large>Upload <strong>file.zip</strong></m-tooltip>
        <m-button icon="add" id="add" raised accent></m-button>

        <hr>

        <ul>
            <li>
               <p>
                   <m-tooltip target="left" left>Left tooltipe</m-tooltip>
                   <m-button raised primary ripple id="left">Left</m-button>
               </p>
            </li>
            <li>
                <p>
                    <m-tooltip target="right" right>Right tooltipe</m-tooltip>
                    <m-button raised primary ripple id="right">Right</m-button>
                </p>
            </li>

            <li>
                <p>
                    <m-tooltip target="top" top>Top tooltipe</m-tooltip>
                    <m-button raised primary ripple id="top">Top</m-button>
                </p>
            </li>

            <li>
                <p>
                    <m-tooltip target="bottom" bottom>Bottom tooltipe</m-tooltip>
                    <m-button raised primary ripple id="bottom">Bottom</m-button>
                </p>
            </li>
        </ul>

        <div>
            <div>Code:</div>
            <textarea cols="100" rows="6" :value="examples"></textarea>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                examples: `
                    <m-tooltip target="add-button">Hello World</m-tooltip>
                    <m-button raised primary ripple id="add-button">Add</m-button>

                    <m-tooltip target="add" large>Upload <strong>file.zip</strong></m-tooltip>
                    <m-button icon="add" id="add" raised accent></m-button>

                    <m-tooltip target="left" left>Left tooltipe</m-tooltip>
                    <m-button raised primary ripple id="left">Left</m-button>
                `
            }
        }
    }
</script>
