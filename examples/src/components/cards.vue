<template>
    <div>
        <h3>Cards</h3>

        <m-card class="demo-card-square" title="Updates" supporting-text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia..." actions="actions" actions-text="Update"></m-card>

        <br>
        <br>

        <m-card class="demo-card-wide" title="Welcome" supporting-text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia..." actions="actions" actions-text="Get started"></m-card>

        <hr>

        <div>
            <pre v-pre>
                <code class="html">
 &#x3C;m-card class=&#x22;demo-card-square&#x22; title=&#x22;Updates&#x22; supporting-text=&#x22;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...&#x22; actions=&#x22;actions&#x22; actions-text=&#x22;Update&#x22;&#x3E;&#x3C;/m-card&#x3E;
 &#x3C;m-card class=&#x22;demo-card-wide&#x22; title=&#x22;Welcome&#x22; supporting-text=&#x22;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...&#x22; actions=&#x22;actions&#x22; actions-text=&#x22;Get started&#x22;&#x3E;&#x3C;/m-card&#x3E;

 &#x3C;style&#x3E;
 .demo-card-square.mdl-card {
   width: 320px;
   height: 320px;
 }
 .demo-card-square &#x3E; .mdl-card__title {
   color: #fff;
   background: url(&#x27;https://getmdl.io/assets/demos/dog.png&#x27;) bottom right 15% no-repeat #46B6AC;
 }

 .demo-card-wide.mdl-card {
   width: 512px;
 }
 .demo-card-wide &#x3E; .mdl-card__title {
   color: #fff;
   height: 176px;
   background: url(&#x27;https://getmdl.io/assets/demos/welcome_card.jpg&#x27;) center / cover;
 }
 .demo-card-wide &#x3E; .mdl-card__menu {
   color: #fff;
 }

 &#x3C;/style&#x3E;
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

<style>
.demo-card-square.mdl-card {
  width: 320px;
  height: 320px;
}
.demo-card-square > .mdl-card__title {
  color: #fff;
  background: url('https://getmdl.io/assets/demos/dog.png') bottom right 15% no-repeat #46B6AC;
}

.demo-card-wide.mdl-card {
  width: 512px;
}
.demo-card-wide > .mdl-card__title {
  color: #fff;
  height: 176px;
  background: url('https://getmdl.io/assets/demos/welcome_card.jpg') center / cover;
}
.demo-card-wide > .mdl-card__menu {
  color: #fff;
}

</style>

<script>

    export default {
        mounted() {
            hljs.highlightBlock(this.$el.querySelector('.html'));
        },
        data(){
            return {
                doc: [

                ]
            }
        }
    }
</script>
