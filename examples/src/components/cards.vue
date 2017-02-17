<template>
    <div>
        <h3>Cards</h3>

        <m-card class="demo-card-square" title="Updates" supporting-text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia..." actions="actions" actions-text="Update"></m-card>

        <br>
        <br>

        <m-card class="demo-card-wide" title="Welcome" supporting-text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia..." actions="actions" actions-text="Get started"></m-card>

        <hr>

        <div>
            <div>Code:</div>
            <textarea cols="150" rows="40" :value="examples"></textarea>
        </div>
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
        data(){
            return {
                examples: `
                    <m-card class="demo-card-square" title="Updates" supporting-text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia..." actions="actions" actions-text="Update"></m-card>
                    <m-card class="demo-card-wide" title="Welcome" supporting-text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia..." actions="actions" actions-text="Get started"></m-card>

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


                `
            }
        }
    }
</script>
