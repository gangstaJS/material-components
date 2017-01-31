<template>
  <div>
    <m-badge v-model="b" href="https://google.com" :hide="h">Inbox</m-badge>

    <br>
    <br>
    <br>

    <m-badge v-model="b" tag="span" icon overlap>account_box</m-badge>

    <br>

    <m-slider v-model="b" min="0" max="100"></m-slider>

    <br>

    <m-button raised v-on:click.native="testClick">Hide badge value</m-button>

    <hr>

    <div>
      <div>Code:</div>
      <textarea cols="100" rows="6" :value="examples"></textarea>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        b: 10,
        h: false,
        testClick: function(e) {
          this.h = !this.h;
        },
        examples: `
          <m-badge v-model="b" href="https://google.com" :hide="h">Inbox</m-badge>
          <m-badge v-model="b" tag="span" icon overlap>account_box</m-badge>
        `
      }
    }
  }
</script>