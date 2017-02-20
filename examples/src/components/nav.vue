<template>
    <div class="mdl-layout__drawer">
        <span class="mdl-layout-title">Examples</span>
        <nav class="mdl-navigation">
            <router-link to="/usage" class="mdl-navigation__link">
                <b>Getting started</b>
            </router-link>

            <router-link :to="'/'+i.path" v-for="i in sortedMenuItems" class="mdl-navigation__link">
                {{i.title}}
            </router-link>
        </nav>
    </div>
</template>

<script>
import { sortByKey } from '../helpers';

export default {
    computed: {
        sortedMenuItems() {
            return sortByKey(this.menuItems, 'title');
        }
    },

    data() {
        return {
            menuItems: [
                {
                    title: 'Text Fields',
                    path: 'textfields',
                },
                {
                    title: 'Buttons',
                    path: 'buttons',
                },
                {
                    title: 'Snackbar',
                    path: 'snackbar',
                },
                {
                    title: 'Selects',
                    path: 'selects',
                },
                {
                    title: 'Sliders',
                    path: 'sliders',
                },
                {
                    title: 'Badges',
                    path: 'badges',
                },
                {
                    title: 'Menu',
                    path: 'menu',
                },
                {
                    title: 'Loading',
                    path: 'loading',
                },
                {
                    title: 'Toggles',
                    path: 'toggles',
                },
                {
                    title: 'Tabs',
                    path: 'tabs',
                },
                {
                    title: 'Tooltips',
                    path: 'tooltips',
                },
                {
                    title: 'Tables',
                    path: 'table',
                },
                {
                    title: 'Dialogs',
                    path: 'dialogs',
                },
                {
                    title: 'Cards',
                    path: 'cards',
                },
                {
                    title: 'Chips',
                    path: 'chips',
                },
                {
                    title: 'Lists',
                    path: 'lists',
                },
            ]

        }
    }
}
</script>
