// import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';


import ExNav from './components/nav.vue';
import TextFields from './components/textfields.vue';
import Buttons from './components/buttons.vue';
import Snackbar from './components/snackbar.vue';
import Selects from './components/selects.vue';
import Sliders from './components/sliders.vue';
import Badges from './components/badges.vue';
import Menu from './components/menu.vue';
import Loading from './components/loading.vue';
import Toggles from './components/toggles.vue';
import Tabs from './components/tabs.vue';
import Tooltips from './components/tooltips.vue';
import Table from './components/table.vue';
import Dialogs from './components/dialogs.vue';
import Cards from './components/cards.vue';

// const components = {
//   ExNav,
// }

Vue.use(VueRouter);
Vue.use(VueReusableMaterialComponents);
Vue.use(VueResource);


const routes = [
  { path: '/textfields', component: TextFields, name: 'textfields'},
  { path: '/buttons', component: Buttons },
  { path: '/snackbar', component: Snackbar },
  { path: '/selects', component: Selects },
  { path: '/sliders', component: Sliders },
  { path: '/badges', component: Badges },
  { path: '/menu', component: Menu },
  { path: '/loading', component: Loading },
  { path: '/toggles', component: Toggles },
  { path: '/tabs', component: Tabs },
  { path: '/tooltips', component: Tooltips },
  { path: '/table', component: Table },
  { path: '/dialogs', component: Dialogs },
  { path: '/cards', component: Cards },
  { path: '*', redirect: { name: 'textfields' }},
];

const router = new VueRouter({
  base: '/examples/',
  linkActiveClass: 'mdl-navigation__link--active',
  routes
});

new Vue({
  el: '#examples',
  router,
  components: {
    ExNav,
  },
  methods: {
    onSubmit: function(e) {
      console.log(this.form.firstName);
      console.log(this.form.lastName);
      console.log(this.form.email);
    }
  }
});