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
import MRadio from './toggles/radio.vue';
import MSwitch from './toggles/switch.vue';
import MIconToggle from './toggles/icon.vue';
import MMenu from './menu/menu.vue';
import MMenuItem from './menu/item.vue';
import MTabs from './tabs/tabs.vue';
import MTab from './tabs/tab.vue';
import MTooltip from './tooltip.vue';

// table
import MTable from './table/table.vue';
import MTableRow from './table/tableRow.vue';
import MTableCell from './table/tableCell.vue';
import MTableHead from './table/tableHead.vue';
import MTableH from './table/tableH.vue';
import MTableBody from './table/tableBody.vue';
import MDialog from './dialog.vue';

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
  MRadio,
  MSwitch,
  MIconToggle,
  MMenu,
  MMenuItem,
  MTabs,
  MTab,
  MTooltip,

  MTable,
  MTableRow,
  MTableCell,
  MTableHead,
  MTableH,
  MTableBody,

  MDialog,
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

