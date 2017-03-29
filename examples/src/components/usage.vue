<template>
    <div>
        <h3>Getting started</h3>

        <h4>Just add the following &#x3C;link&#x3E; and &#x3C;script&#x3E; elements into your HTML pages</h4>

        <pre v-pre>
            <code class="html">
                // Material Design Icons
                &#x3C;link rel=&#x22;stylesheet&#x22; href=&#x22;https://fonts.googleapis.com/icon?family=Material+Icons&#x22;&#x3E;

                // Material Design Lite
                &#x3C;link rel=&#x22;stylesheet&#x22; href=&#x22;https://code.getmdl.io/1.3.0/material.indigo-pink.min.css&#x22;&#x3E;
                &#x3C;script src=&#x22;https://code.getmdl.io/1.3.0/material.min.js&#x22;&#x3E;&#x3C;/script&#x3E;

                // Vue.Js
                &#x3C;script src=&#x22;https://unpkg.com/vue/dist/vue.min.js&#x22;&#x3E;&#x3C;/script&#x3E;

                // Vue Material Components
                &#x3C;script src=&#x22;https://unpkg.com/milo-material-components@1.0.0/dist/lib.build.js&#x22;&#x3E;&#x3C;/script&#x3E;
            </code>
        </pre>


        <pre v-pre>
            <code class="html">
                &#x3C;div id=&#x22;app&#x22;&#x3E;
                    &#x3C;m-button raised primary ripple&#x3E;Material button&#x3C;/m-button&#x3E;
                &#x3C;/div&#x3E;

                &#x3C;script&#x3E;
                    Vue.use(VueReusableMaterialComponents);

                    new Vue({
                        el: &#x27;#app&#x27;
                    });
                &#x3C;/script&#x3E;
            </code>
        </pre>

        <p>
            <h4><a href="https://jsfiddle.net/ozzon91/2np67okx/" target="_blank">Open example above on jsfiddle</a></h4>
        </p>

    </div>
</template>
<script>
    export default{
        mounted() {
            this.$el.querySelectorAll('.html').forEach(el => hljs.highlightBlock(el))
        },

        data() {
            return {}
        }
    }
</script>
