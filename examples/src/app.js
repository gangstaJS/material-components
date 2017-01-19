// import Vue from 'vue';
import VueRouter from 'vue-router'
import ExNav from './components/nav.vue';
import TextFields from './components/textfields.vue';
import Buttons from './components/buttons.vue';
import Snackbar from './components/snackbar.vue';

// const components = {
//   ExNav,
// }

Vue.use(VueRouter);
Vue.use(VueReusableMaterialComponents);


const routes = [
  { path: '/textfields', component: TextFields, name: 'textfields'},
  { path: '/buttons', component: Buttons },
  { path: '/snackbar', component: Snackbar },
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