import SetupMdl from './directives/setup-mdl';

// components import
import MTextfield from './textfield.vue';
import MButton from './button.vue';
import MSnackbar from './snackbar.vue';
import MSelect from './select/select.vue';
import MSlider from './slider.vue';
import MBadge from './badge';
import MProgress from './progress.vue';
import MSpinner from './spinner.vue';
import MCheckbox from './toggles/checkbox.vue';

const components = {
  MTextfield,
  MButton,
  MSnackbar,
  MSelect,
  MSlider,
  MBadge,
  MProgress,
  MSpinner,
  MCheckbox,
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

