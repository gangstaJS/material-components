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

    <pre v-pre>
      <code class="html">
&#x3C;template&#x3E;
  &#x3C;div&#x3E;
    &#x3C;m-badge v-model=&#x22;b&#x22; href=&#x22;https://google.com&#x22; :hide=&#x22;h&#x22;&#x3E;Inbox&#x3C;/m-badge&#x3E;

    &#x3C;m-badge v-model=&#x22;b&#x22; tag=&#x22;span&#x22; icon overlap&#x3E;account_box&#x3C;/m-badge&#x3E;

    &#x3C;m-slider v-model=&#x22;b&#x22; min=&#x22;0&#x22; max=&#x22;100&#x22;&#x3E;&#x3C;/m-slider&#x3E;

    &#x3C;m-button raised v-on:click.native=&#x22;testClick&#x22;&#x3E;Hide badge value&#x3C;/m-button&#x3E;

  &#x3C;/div&#x3E;
&#x3C;/template&#x3E;

&#x3C;script&#x3E;
  export default {
    data() {
      return {
        b: 10,
        h: false,
        testClick: function(e) {
          this.h = !this.h;
        }
      }
    }
  }
&#x3C;/script&#x3E;
      </code>
    </pre>

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
    data() {
      return {
        b: 10,
        h: false,
        testClick: function(e) {
          this.h = !this.h;
        },

        doc: [
          {name: 'overlap', description: 'Make the badge overlap with its container', remark: 'Optional'},
          {name: 'icon', description: 'You can pass the icon you want to display as a string', remark: ''},
          {name: 'no-background', description: 'Applies open-circle effect to badge', remark: 'Optional'},
          {name: 'hide', description: 'Hides the badge', remark: 'Can be bound to a computed property so the value is hidden if some conditions are met.'},
          {name: 'href', description: 'Href attribute for link badge', remark: 'Optional'}
        ]
      }
    }
  }
</script>