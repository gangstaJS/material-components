<template>
    <div>
        <h3>Lists</h3>

        <m-list class="demo-list-item">
            <m-list-item>Bryan Cranston</m-list-item>
            <m-list-item>Aaron Paul</m-list-item>
            <m-list-item>Bob Odenkirk</m-list-item>
        </m-list>

        <div>
            <div>Code:</div>
            <textarea cols="110" rows="10" :value="examples1"></textarea>
        </div>

        <hr>

        <m-list class="demo-list-item">
            <m-list-item icon="person">Bryan Cranston</m-list-item>
            <m-list-item icon="person">Aaron Paul</m-list-item>
            <m-list-item icon="person">Bob Odenkirk</m-list-item>
        </m-list>

        <div>
            <div>Code:</div>
            <textarea cols="110" rows="10" :value="examples2"></textarea>
        </div>

        <hr>

        <m-list class="demo-list-item">
            <m-list-item icon-avatar="person">Bryan Cranston</m-list-item>
            <m-list-item icon-avatar="person">Aaron Paul</m-list-item>
            <m-list-item icon-avatar="person">Bob Odenkirk</m-list-item>
        </m-list>

        <div>
            <div>Code:</div>
            <textarea cols="110" rows="10" :value="examples3"></textarea>
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
            <div>Code:</div>
            <textarea cols="110" rows="10" :value="examples4"></textarea>
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
            <div>Code:</div>
            <textarea cols="110" rows="10" :value="examples5"></textarea>
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
            <div>Code:</div>
            <textarea cols="110" rows="10" :value="examples6"></textarea>
        </div>
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
                examples1: `
                    <m-list class="demo-list-item">
                        <m-list-item>Bryan Cranston</m-list-item>
                        <m-list-item>Aaron Paul</m-list-item>
                        <m-list-item>Bob Odenkirk</m-list-item>
                    </m-list>
                `,
                examples2: `
                    <m-list class="demo-list-item">
                        <m-list-item icon="person">Bryan Cranston</m-list-item>
                        <m-list-item icon="person">Aaron Paul</m-list-item>
                        <m-list-item icon="person">Bob Odenkirk</m-list-item>
                    </m-list>
                `,
                examples3: `
                    <m-list class="demo-list-item">
                        <m-list-item icon-avatar="person">Bryan Cranston</m-list-item>
                        <m-list-item icon-avatar="person">Aaron Paul</m-list-item>
                        <m-list-item icon-avatar="person">Bob Odenkirk</m-list-item>
                    </m-list>
                `,
                examples4: `
                    <m-list class="demo-list-item">
                        <m-list-item icon-avatar="person" v-for="person in people">
                            {{person.name}}

                            <template slot="action">
                                <m-switch v-model="person.on"></m-switch>
                            </template>
                        </m-list-item>
                    </m-list>
                `,
                examples5: `
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
                `,
                examples6: `
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
                `,
            }
        }
    }
</script>
