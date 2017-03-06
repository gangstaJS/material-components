<template>
    <div>
        <m-tabs v-model="currentTub">
            <m-tab :tab="{ title: 'Jon', id: 'tab-1' }">
                <p>
                    Hello 1
                </p>
            </m-tab>
            <m-tab :tab="{ title: 'Tom', id: 'tab-2' }">
                <p>
                    Hello 2
                </p>
            </m-tab>

        </m-tabs>

        <div>
            <pre v-pre>
            <code class="html">
&#x3C;template&#x3E;
    &#x3C;div&#x3E;
        &#x3C;m-tabs v-model=&#x22;currentTub&#x22;&#x3E;
            &#x3C;m-tab :tab=&#x22;{ title: &#x27;Jon&#x27;, id: &#x27;tab-1&#x27; }&#x22;&#x3E;
                &#x3C;p&#x3E;
                    Hello 1
                &#x3C;/p&#x3E;
            &#x3C;/m-tab&#x3E;
            &#x3C;m-tab :tab=&#x22;{ title: &#x27;Tom&#x27;, id: &#x27;tab-2&#x27; }&#x22;&#x3E;
                &#x3C;p&#x3E;
                    Hello 2
                &#x3C;/p&#x3E;
            &#x3C;/m-tab&#x3E;

        &#x3C;/m-tabs&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/template&#x3E;

&#x3C;script&#x3E;
    export default{
        data(){
            return {
                currentTub: &#x27;tab-1&#x27;,
            }
        }
    }
&#x3C;/script&#x3E;
            </code></pre>
        </div>

        <br>
        <br>



        <m-tabs v-model="currentTub2" :no-ripple-effect="true" :animation="true" :content-style="{height: '300px'}">
            <m-tab tab="Tab 1">
                <p style="min-height: 250px; background: #fafafa; padding: 10px;">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mi dolor, molestie ut porttitor vitae, viverra ac lorem.<br>
                    Pellentesque eu lobortis felis. Nulla id pretium ante. Aliquam turpis enim, imperdiet efficitur mauris a, <br>
                    tempor lacinia ante. Nam vel velit metus. Integer nulla turpis, tristique non dui eget, malesuada blandit nisi.<br>
                    Phasellus id volutpat orci. Curabitur malesuada augue efficitur massa consequat consequat. Class aptent taciti sociosqu
                    ad litora torquent per conubia nostra, per inceptos himenaeos.

                </p>
            </m-tab>
            <m-tab tab="Tab 2">
                <p style="min-height: 250px; background: #333; color: #fff; padding: 10px;">
                    Quisque et hendrerit odio, viverra efficitur risus. Mauris tempus mi ut fringilla placerat. Vestibulum sagittis pellentesque nunc nec congue. Maecenas eu enim suscipit augue maximus viverra. Fusce tincidunt, nibh non eleifend placerat, lectus nunc lacinia nisi, a maximus purus mauris vel dui. Fusce in urna vel diam lobortis tempor non sed nisi. Etiam metus orci, convallis eget rhoncus vel, cursus a mauris. Proin maximus velit sed semper commodo. Maecenas sit amet laoreet leo. Nulla facilisi. Integer eget mauris mi. Nulla dictum erat eget mi maximus venenatis.
                </p>
            </m-tab>

            <m-tab tab="Tab 3">
                <p style="min-height: 250px; background: #3f51b5; color: #fff; padding: 10px;">
                    Quisque et hendrerit odio, viverra efficitur risus. Mauris tempus mi ut fringilla placerat. Vestibulum sagittis pellentesque nunc nec congue. Maecenas eu enim suscipit augue maximus viverra. Fusce tincidunt, nibh non eleifend placerat, lectus nunc lacinia nisi, a maximus purus mauris vel dui. Fusce in urna vel diam lobortis tempor non sed nisi. Etiam metus orci, convallis eget rhoncus vel, cursus a mauris. Proin maximus velit sed semper commodo. Maecenas sit amet laoreet leo. Nulla facilisi. Integer eget mauris mi. Nulla dictum erat eget mi maximus venenatis.
                </p>
            </m-tab>

        </m-tabs>

        <pre v-pre>
            <code class="html">
&#x3C;template&#x3E;
        &#x3C;m-tabs v-model=&#x22;currentTub&#x22; :no-ripple-effect=&#x22;true&#x22; :animation=&#x22;true&#x22; :content-style=&#x22;{height: &#x27;300px&#x27;}&#x22;&#x3E;
            &#x3C;m-tab tab=&#x22;Tab 1&#x22;&#x3E;
                &#x3C;p style=&#x22;min-height: 250px; background: #fafafa; padding: 10px;&#x22;&#x3E;
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mi dolor, molestie ut porttitor vitae, viverra ac lorem.&#x3C;br&#x3E;
                    Pellentesque eu lobortis felis. Nulla id pretium ante. Aliquam turpis enim, imperdiet efficitur mauris a, &#x3C;br&#x3E;
                    tempor lacinia ante. Nam vel velit metus. Integer nulla turpis, tristique non dui eget, malesuada blandit nisi.&#x3C;br&#x3E;
                    Phasellus id volutpat orci. Curabitur malesuada augue efficitur massa consequat consequat. Class aptent taciti sociosqu
                    ad litora torquent per conubia nostra, per inceptos himenaeos.

                &#x3C;/p&#x3E;
            &#x3C;/m-tab&#x3E;
            &#x3C;m-tab tab=&#x22;Tab 2&#x22;&#x3E;
                &#x3C;p style=&#x22;min-height: 250px; background: #333; color: #fff; padding: 10px;&#x22;&#x3E;
                    Quisque et hendrerit odio, viverra efficitur risus. Mauris tempus mi ut fringilla placerat. Vestibulum sagittis pellentesque nunc nec congue. Maecenas eu enim suscipit augue maximus viverra. Fusce tincidunt, nibh non eleifend placerat, lectus nunc lacinia nisi, a maximus purus mauris vel dui. Fusce in urna vel diam lobortis tempor non sed nisi. Etiam metus orci, convallis eget rhoncus vel, cursus a mauris. Proin maximus velit sed semper commodo. Maecenas sit amet laoreet leo. Nulla facilisi. Integer eget mauris mi. Nulla dictum erat eget mi maximus venenatis.
                &#x3C;/p&#x3E;
            &#x3C;/m-tab&#x3E;

            &#x3C;m-tab tab=&#x22;Tab 3&#x22;&#x3E;
                &#x3C;p style=&#x22;min-height: 250px; background: #3f51b5; color: #fff; padding: 10px;&#x22;&#x3E;
                    Quisque et hendrerit odio, viverra efficitur risus. Mauris tempus mi ut fringilla placerat. Vestibulum sagittis pellentesque nunc nec congue. Maecenas eu enim suscipit augue maximus viverra. Fusce tincidunt, nibh non eleifend placerat, lectus nunc lacinia nisi, a maximus purus mauris vel dui. Fusce in urna vel diam lobortis tempor non sed nisi. Etiam metus orci, convallis eget rhoncus vel, cursus a mauris. Proin maximus velit sed semper commodo. Maecenas sit amet laoreet leo. Nulla facilisi. Integer eget mauris mi. Nulla dictum erat eget mi maximus venenatis.
                &#x3C;/p&#x3E;
            &#x3C;/m-tab&#x3E;

        &#x3C;/m-tabs&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/template&#x3E;

&#x3C;script&#x3E;
  export default{
      data(){
          return {
              currentTub: &#x27;Tab 2&#x27;
          }
      }
  }
&#x3C;/script&#x3E;

            </code>
        </pre>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                currentTub: 'tab-1',
                currentTub2: 'Tab 2',
            }
        }
    }
</script>
