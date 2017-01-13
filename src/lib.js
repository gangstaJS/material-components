import SetupMdl from './directives/setup-mdl';

// components import
import MaterialInput from './text-fields/input.vue';

const components = {
  MaterialInput
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

