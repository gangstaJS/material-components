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
