<template>
   <div>
       <div class="menu-block">
           <m-button icon="more_vert" id="test-menu"></m-button>

           <m-menu for="test-menu">
               <m-menu-item>NodeJs</m-menu-item>
               <m-menu-item>PHP</m-menu-item>
               <m-menu-item disabled="disabled">JS</m-menu-item>
               <m-menu-item>GO</m-menu-item>
           </m-menu>
       </div>

       <!-- / -->

       <div>
           <div>Code:</div>
           <textarea cols="100" rows="10" :value="examples"></textarea>
       </div>
   </div>
</template>
<style scoped>
    .menu-block {
        color: #fff;
        background: #3F51B5;
        padding: 10px;
    }
</style>
<script>
    export default{
        data(){
            return {
                examples: `
               <m-button icon="more_vert" id="test-menu"></m-button>

                <m-menu for="test-menu">
                    <m-menu-item>NodeJs</m-menu-item>
                    <m-menu-item>PHP</m-menu-item>
                    <m-menu-item disabled="disabled">JS</m-menu-item>
                    <m-menu-item>GO</m-menu-item>
                </m-menu>
            `
            }
        }
    }
</script>
