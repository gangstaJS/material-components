<template>
    <div class="mdl-layout__drawer">
        <span class="mdl-layout-title">Examples</span>
        <nav class="mdl-navigation">

            <router-link to="/textfields" class="mdl-navigation__link">
                Text Fields
            </router-link>

            <router-link to="/buttons" class="mdl-navigation__link">
                Buttons
            </router-link>

            <router-link to="/snackbar" class="mdl-navigation__link">
                Snackbar
            </router-link>

            <router-link to="/selects" class="mdl-navigation__link">
                Selects
            </router-link>

            <router-link to="/sliders" class="mdl-navigation__link">
                Sliders
            </router-link>

            <router-link to="/badges" class="mdl-navigation__link">
                Badges
            </router-link>

            <router-link to="/menu" class="mdl-navigation__link">
                Menu
            </router-link>

            <router-link to="/loading" class="mdl-navigation__link">
                Loading
            </router-link>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    }
}
</script>
