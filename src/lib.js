import SetupMdl from './directives/setup-mdl';

// components import
import MTextfield from './text-fields/textfield.vue';

const components = {
  MTextfield
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

