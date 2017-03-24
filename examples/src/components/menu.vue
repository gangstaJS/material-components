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
           <pre>
               <code class="html">
               &#x3C;m-button icon=&#x22;more_vert&#x22; id=&#x22;test-menu&#x22;&#x3E;&#x3C;/m-button&#x3E;
               &#x3C;m-menu for=&#x22;test-menu&#x22;&#x3E;
                   &#x3C;m-menu-item&#x3E;NodeJs&#x3C;/m-menu-item&#x3E;
                   &#x3C;m-menu-item&#x3E;PHP&#x3C;/m-menu-item&#x3E;
                   &#x3C;m-menu-item disabled=&#x22;disabled&#x22;&#x3E;JS&#x3C;/m-menu-item&#x3E;
                   &#x3C;m-menu-item&#x3E;GO&#x3C;/m-menu-item&#x3E;
               &#x3C;/m-menu&#x3E;
               </code>
           </pre>
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
<style scoped>
    .menu-block {
        color: #fff;
        background: #3F51B5;
        padding: 10px;
    }
</style>
<script>
    export default{
        mounted() {
            this.$el.querySelectorAll('.html').forEach(el => hljs.highlightBlock(el))
        },

        data(){
            return {}
        }
    }
</script>
