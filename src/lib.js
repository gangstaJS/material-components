import SetupMdl from './directives/setup-mdl';

// components import
import MTextfield from './textfield.vue';
import MButton from './button.vue';
import MSnackbar from './snackbar.vue';
import MSelect from './select/select.vue';
import MSlider from './slider.vue';

const components = {
  MTextfield,
  MButton,
  MSnackbar,
  MSelect,
  MSlider,
}

const directives = {
  SetupMdl
}

module.exports = {
  install (Vue) {
    Object.keys(components).forEach((name) => Vue.component(name, components[name]));
    Object.keys(directives).forEach((name) => Vue.directive(name, directives[name]));
  }
}

