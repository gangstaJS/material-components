<template>
    <div>
        <h3>Lists</h3>

        <m-list class="demo-list-item">
            <m-list-item>Bryan Cranston</m-list-item>
            <m-list-item>Aaron Paul</m-list-item>
            <m-list-item>Bob Odenkirk</m-list-item>
        </m-list>

        <div>
            <pre>
                <code class="html">
                    &#x3C;m-list class=&#x22;demo-list-item&#x22;&#x3E;
                        &#x3C;m-list-item&#x3E;Bryan Cranston&#x3C;/m-list-item&#x3E;
                        &#x3C;m-list-item&#x3E;Aaron Paul&#x3C;/m-list-item&#x3E;
                        &#x3C;m-list-item&#x3E;Bob Odenkirk&#x3C;/m-list-item&#x3E;
                    &#x3C;/m-list&#x3E;
                </code>
            </pre>
        </div>

        <hr>

        <m-list class="demo-list-item">
            <m-list-item icon="person">Bryan Cranston</m-list-item>
            <m-list-item icon="person">Aaron Paul</m-list-item>
            <m-list-item icon="person">Bob Odenkirk</m-list-item>
        </m-list>

        <div>
            <pre>
                <code class="html">
                    &#x3C;m-list class=&#x22;demo-list-item&#x22;&#x3E;
                        &#x3C;m-list-item icon=&#x22;person&#x22;&#x3E;Bryan Cranston&#x3C;/m-list-item&#x3E;
                        &#x3C;m-list-item icon=&#x22;person&#x22;&#x3E;Aaron Paul&#x3C;/m-list-item&#x3E;
                        &#x3C;m-list-item icon=&#x22;person&#x22;&#x3E;Bob Odenkirk&#x3C;/m-list-item&#x3E;
                    &#x3C;/m-list&#x3E;
                </code>
            </pre>
        </div>

        <hr>

        <m-list class="demo-list-item">
            <m-list-item icon-avatar="person">Bryan Cranston</m-list-item>
            <m-list-item icon-avatar="person">Aaron Paul</m-list-item>
            <m-list-item icon-avatar="person">Bob Odenkirk</m-list-item>
        </m-list>

        <div>
            <pre>
                <code class="html">
                    &#x3C;m-list class=&#x22;demo-list-item&#x22;&#x3E;
                        &#x3C;m-list-item icon-avatar=&#x22;person&#x22;&#x3E;Bryan Cranston&#x3C;/m-list-item&#x3E;
                        &#x3C;m-list-item icon-avatar=&#x22;person&#x22;&#x3E;Aaron Paul&#x3C;/m-list-item&#x3E;
                        &#x3C;m-list-item icon-avatar=&#x22;person&#x22;&#x3E;Bob Odenkirk&#x3C;/m-list-item&#x3E;
                    &#x3C;/m-list&#x3E;
                </code>
            </pre>
        </div>

        <hr>

        <m-list class="demo-list-item">
            <m-list-item icon-avatar="person" v-for="person in people">
                {{person.name}}

                <template slot="action">
                    <m-switch v-model="person.on"></m-switch>
                </template>
            </m-list-item>
        </m-list>

        <div>
            <pre v-pre>
                <code class="html">
                    &#x3C;m-list class=&#x22;demo-list-item&#x22;&#x3E;
                        &#x3C;m-list-item icon-avatar=&#x22;person&#x22; v-for=&#x22;person in people&#x22;&#x3E;
                            {{person.name}}

                            &#x3C;template slot=&#x22;action&#x22;&#x3E;
                                &#x3C;m-switch v-model=&#x22;person.on&#x22;&#x3E;&#x3C;/m-switch&#x3E;
                            &#x3C;/template&#x3E;
                        &#x3C;/m-list-item&#x3E;
                    &#x3C;/m-list&#x3E;
                </code>
            </pre>
        </div>

        <hr>

        <m-list class="demo-list-item">
            <m-list-item icon-avatar="person" v-for="person in people" :sub-title="person.sub">
                {{person.name}}

                <template slot="action">
                    <a class="mdl-list__item-secondary-action" href="#">
                        <i class="material-icons">star</i>
                    </a>
                </template>
            </m-list-item>
        </m-list>

        <div>
            <pre v-pre>
                <code class="html">
                    &#x3C;m-list class=&#x22;demo-list-item&#x22;&#x3E;
                         &#x3C;m-list-item icon-avatar=&#x22;person&#x22; v-for=&#x22;person in people&#x22; :sub-title=&#x22;person.sub&#x22;&#x3E;
                            {{person.name}}

                            &#x3C;template slot=&#x22;action&#x22;&#x3E;
                                &#x3C;a class=&#x22;mdl-list__item-secondary-action&#x22; href=&#x22;#&#x22;&#x3E;
                                    &#x3C;i class=&#x22;material-icons&#x22;&#x3E;star&#x3C;/i&#x3E;
                                &#x3C;/a&#x3E;
                            &#x3C;/template&#x3E;
                        &#x3C;/m-list-item&#x3E;
                    &#x3C;/m-list&#x3E;
                </code>
            </pre>
        </div>

        <hr>

        <m-list class="demo-list-three">
            <m-list-item icon-avatar="person" v-for="person in people" :text="person.text">
                {{person.name}}

                <template slot="action">
                    <a class="mdl-list__item-secondary-action" href="#">
                        <i class="material-icons">star</i>
                    </a>
                </template>
            </m-list-item>
        </m-list>

        <div>
            <pre v-pre>
                <code class="html">
                    &#x3C;m-list class=&#x22;demo-list-three&#x22;&#x3E;
                        &#x3C;m-list-item icon-avatar=&#x22;person&#x22; v-for=&#x22;person in people&#x22; :text=&#x22;person.text&#x22;&#x3E;
                            {{person.name}}

                            &#x3C;template slot=&#x22;action&#x22;&#x3E;
                                &#x3C;a class=&#x22;mdl-list__item-secondary-action&#x22; href=&#x22;#&#x22;&#x3E;
                                    &#x3C;i class=&#x22;material-icons&#x22;&#x3E;star&#x3C;/i&#x3E;
                                &#x3C;/a&#x3E;
                            &#x3C;/template&#x3E;
                        &#x3C;/m-list-item&#x3E;
                    &#x3C;/m-list&#x3E;
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
                <m-table-row v-for="prop in doc">
                    <m-table-cell>{{prop.name}}</m-table-cell>
                    <m-table-cell>{{prop.description}}</m-table-cell>
                    <m-table-cell>{{prop.remark}}</m-table-cell>
                </m-table-row>
            </m-table-body>
        </m-table>
    </div>
</template>

<style>
.demo-list-item {
  width: 300px;
}

.demo-list-three {
  width: 650px;
}
</style>

<script>
    export default{
        methods: {
        },
        mounted() {
            this.$el.querySelectorAll('.html').forEach(el => hljs.highlightBlock(el))
        },
        data(){
            return {
                people: [
                    {
                        'name': 'Bryan Cranston',
                        'text': 'Bryan Cranston played the role of Walter in Breaking Bad. He is also known for playing Hal in Malcom in the Middle.',
                        on: true,
                        sub: '62 Episodes',
                    },
                    {
                        'name': 'Aaron Paul',
                        text: 'Aaron Paul played the role of Jesse in Breaking Bad. He also featured in the "Need For Speed" Movie.',
                        on: false,
                        sub: '52 Episodes',
                    },
                    {
                        'name': 'Bob Odenkirk',
                        on: true,
                        text: 'Bob Odinkrik played the role of Saul in Breaking Bad. Due to public fondness for the character, Bob stars in his own show now, called "Better Call Saul".',
                        sub: '32 Episodes',
                    },
                ],

                doc: [
                    {name: 'icon', description: 'A icon for a list item', title: 'Optional'},
                    {name: 'icon-avatar', description: 'A big icon avatar for la list item', title: 'Optional'},
                    {name: 'text', description: 'A description text for a list item', title: 'Optional'},
                    {name: 'sub-title', description: 'Subtitle text for a list item', title: 'Optional'},
                ]
            }
        }
    }
</script>
