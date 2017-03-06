(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueReusableMaterialComponents"] = factory();
	else
		root["VueReusableMaterialComponents"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ((function(modules) {
	// Check all modules for deduplicated modules
	for(var i in modules) {
		if(Object.prototype.hasOwnProperty.call(modules, i)) {
			switch(typeof modules[i]) {
			case "function": break;
			case "object":
				// Module can be created from a template
				modules[i] = (function(_m) {
					var args = _m.slice(1), fn = modules[_m[0]];
					return function (a,b,c) {
						fn.apply(this, [a,b,c].concat(args));
					};
				}(modules[i]));
				break;
			default:
				// Module is a copy of another module
				modules[i] = modules[modules[i]];
				break;
			}
		}
	}
	return modules;
}([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _setupMdl = __webpack_require__(1);
	
	var _setupMdl2 = _interopRequireDefault(_setupMdl);
	
	var _textfield = __webpack_require__(2);
	
	var _textfield2 = _interopRequireDefault(_textfield);
	
	var _button = __webpack_require__(5);
	
	var _button2 = _interopRequireDefault(_button);
	
	var _snackbar = __webpack_require__(8);
	
	var _snackbar2 = _interopRequireDefault(_snackbar);
	
	var _select = __webpack_require__(11);
	
	var _select2 = _interopRequireDefault(_select);
	
	var _slider = __webpack_require__(22);
	
	var _slider2 = _interopRequireDefault(_slider);
	
	var _badge = __webpack_require__(25);
	
	var _badge2 = _interopRequireDefault(_badge);
	
	var _progress = __webpack_require__(26);
	
	var _progress2 = _interopRequireDefault(_progress);
	
	var _spinner = __webpack_require__(29);
	
	var _spinner2 = _interopRequireDefault(_spinner);
	
	var _checkbox = __webpack_require__(32);
	
	var _checkbox2 = _interopRequireDefault(_checkbox);
	
	var _radio = __webpack_require__(35);
	
	var _radio2 = _interopRequireDefault(_radio);
	
	var _switch = __webpack_require__(38);
	
	var _switch2 = _interopRequireDefault(_switch);
	
	var _icon = __webpack_require__(41);
	
	var _icon2 = _interopRequireDefault(_icon);
	
	var _menu = __webpack_require__(44);
	
	var _menu2 = _interopRequireDefault(_menu);
	
	var _item = __webpack_require__(47);
	
	var _item2 = _interopRequireDefault(_item);
	
	var _tabs = __webpack_require__(50);
	
	var _tabs2 = _interopRequireDefault(_tabs);
	
	var _tab = __webpack_require__(58);
	
	var _tab2 = _interopRequireDefault(_tab);
	
	var _tooltip = __webpack_require__(63);
	
	var _tooltip2 = _interopRequireDefault(_tooltip);
	
	var _table = __webpack_require__(66);
	
	var _table2 = _interopRequireDefault(_table);
	
	var _tableRow = __webpack_require__(69);
	
	var _tableRow2 = _interopRequireDefault(_tableRow);
	
	var _tableCell = __webpack_require__(72);
	
	var _tableCell2 = _interopRequireDefault(_tableCell);
	
	var _tableHead = __webpack_require__(75);
	
	var _tableHead2 = _interopRequireDefault(_tableHead);
	
	var _tableH = __webpack_require__(78);
	
	var _tableH2 = _interopRequireDefault(_tableH);
	
	var _tableBody = __webpack_require__(81);
	
	var _tableBody2 = _interopRequireDefault(_tableBody);
	
	var _dialog = __webpack_require__(84);
	
	var _dialog2 = _interopRequireDefault(_dialog);
	
	var _card = __webpack_require__(92);
	
	var _card2 = _interopRequireDefault(_card);
	
	var _chip = __webpack_require__(95);
	
	var _chip2 = _interopRequireDefault(_chip);
	
	var _list = __webpack_require__(98);
	
	var _list2 = _interopRequireDefault(_list);
	
	var _listItem = __webpack_require__(101);
	
	var _listItem2 = _interopRequireDefault(_listItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// components import
	var components = {
	  MTextfield: _textfield2.default,
	  MButton: _button2.default,
	  MSnackbar: _snackbar2.default,
	  MSelect: _select2.default,
	  MSlider: _slider2.default,
	  MBadge: _badge2.default,
	  MProgress: _progress2.default,
	  MSpinner: _spinner2.default,
	  MCheckbox: _checkbox2.default,
	  MRadio: _radio2.default,
	  MSwitch: _switch2.default,
	  MIconToggle: _icon2.default,
	  MMenu: _menu2.default,
	  MMenuItem: _item2.default,
	  MTabs: _tabs2.default,
	  MTab: _tab2.default,
	  MTooltip: _tooltip2.default,
	
	  MTable: _table2.default,
	  MTableRow: _tableRow2.default,
	  MTableCell: _tableCell2.default,
	  MTableHead: _tableHead2.default,
	  MTableH: _tableH2.default,
	  MTableBody: _tableBody2.default,
	
	  MDialog: _dialog2.default,
	  MCard: _card2.default,
	  MChip: _chip2.default,
	
	  MList: _list2.default,
	  MListItem: _listItem2.default
	};
	
	// table
	
	
	var directives = {
	  SetupMdl: _setupMdl2.default
	};
	
	module.exports = {
	  install: function install(Vue) {
	    Object.keys(components).forEach(function (name) {
	      return Vue.component(name, components[name]);
	    });
	    Object.keys(directives).forEach(function (name) {
	      return Vue.directive(name, directives[name]);
	    });
	  }
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  setup: function setup(el) {
	    componentHandler.upgradeElements(el);
	  }
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* script */
	__vue_exports__ = __webpack_require__(3);
	
	/* template */
	var __vue_template__ = __webpack_require__(4);
	__vue_options__ = __vue_exports__ = __vue_exports__ || {};
	if (_typeof(__vue_exports__.default) === "object" || typeof __vue_exports__.default === "function") {
	  if (Object.keys(__vue_exports__).some(function (key) {
	    return key !== "default" && key !== "__esModule";
	  })) {
	    console.error("named exports are not supported in *.vue files.");
	  }
	  __vue_options__ = __vue_exports__ = __vue_exports__.default;
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options;
	}
	__vue_options__.__file = "/Users/oz/src/material-components/src/textfield.vue";
	__vue_options__.render = __vue_template__.render;
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns;
	
	/* hot reload */
	if (false) {
	  (function () {
	    var hotAPI = require("vue-hot-reload-api");
	    hotAPI.install(require("vue"), false);
	    if (!hotAPI.compatible) return;
	    module.hot.accept();
	    if (!module.hot.data) {
	      hotAPI.createRecord("data-v-11e6ffb8", __vue_options__);
	    } else {
	      hotAPI.reload("data-v-11e6ffb8", __vue_options__);
	    }
	  })();
	}
	if (__vue_options__.functional) {
	  console.error("[vue-loader] textfield.vue: functional components are not supported and should be defined in plain js files using render functions.");
	}
	
	module.exports = __vue_exports__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	  props: {
	    autocomplete: String,
	    maxlength: {
	      required: false
	    },
	
	    expandable: String,
	    type: {
	      type: String,
	      default: 'text'
	    },
	
	    rows: {
	      required: false
	    },
	
	    id: String,
	
	    value: {
	      required: false
	    },
	
	    disabled: {
	      type: [Boolean, String],
	      fill: true,
	      required: false,
	      default: false
	    },
	
	    required: {
	      type: [Boolean, String],
	      fill: true,
	      required: false,
	      default: false
	    },
	
	    readonly: {
	      type: [Boolean, String],
	      fill: true,
	      required: false,
	      default: false
	    },
	
	    label: String,
	    pattern: String,
	    error: String,
	    textarea: Boolean,
	    floatLabel: [Boolean, String]
	  },
	
	  computed: {
	    showLabel: function showLabel() {
	      return this.label || this.floatLabel;
	    },
	    isDirty: function isDirty() {
	      return '' + this.value;
	    }
	  },
	  methods: {
	    fireInputEvent: function fireInputEvent(event) {
	      this.$emit('input', event.target.value);
	    },
	    focus: function focus() {
	      this.$refs.focusTarget.focus();
	      return this;
	    },
	    select: function select() {
	      this.$refs.focusTarget.select();
	      return this;
	    },
	    blur: function blur() {
	      this.$refs.focusTarget.blur();
	      return this;
	    }
	  },
	  mounted: function mounted() {
	    componentHandler.upgradeElement(this.$el, 'MaterialTextfield');
	  }
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "mdl-textfield mdl-js-textfield",
	    class: {
	      'mdl-textfield--floating-label': _vm.floatLabel, 'mdl-textfield--expandable': _vm.expandable, 'is-dirty': _vm.isDirty, 'is-disabled': _vm.disabled
	    }
	  }, [(_vm.expandable) ? _vm._t("expandable-button", [_c('label', {
	    staticClass: "mdl-button mdl-js-button mdl-button--icon",
	    attrs: {
	      "for": _vm.id
	    }
	  }, [_c('i', {
	    staticClass: "material-icons"
	  }, [_vm._v(_vm._s(_vm.expandable))])])]) : _vm._e(), _vm._v(" "), _c('div', {
	    class: {
	      'mdl-textfield__expandable-holder': _vm.expandable
	    }
	  }, [(_vm.textarea) ? _vm._t("textarea", [_c('textarea', {
	    ref: "focusTarget",
	    staticClass: "mdl-textfield__input",
	    attrs: {
	      "type": "text",
	      "required": _vm.required,
	      "id": _vm.id,
	      "rows": _vm.rows,
	      "maxlength": _vm.maxlength
	    },
	    domProps: {
	      "value": _vm.value
	    },
	    on: {
	      "input": _vm.fireInputEvent
	    }
	  })]) : _vm._t("input", [_c('input', {
	    ref: "focusTarget",
	    staticClass: "mdl-textfield__input",
	    attrs: {
	      "type": _vm.type,
	      "id": _vm.id,
	      "pattern": _vm.pattern,
	      "disabled": _vm.disabled,
	      "required": _vm.required,
	      "readonly": _vm.readonly,
	      "autocomplete": _vm.autocomplete,
	      "maxlength": _vm.maxlength
	    },
	    domProps: {
	      "value": _vm.value
	    },
	    on: {
	      "input": _vm.fireInputEvent
	    }
	  })]), _vm._v(" "), _vm._t("error", [(_vm.error) ? _c('label', {
	    staticClass: "mdl-textfield__error"
	  }, [_vm._v(_vm._s(_vm.error))]) : _vm._e()]), _vm._v(" "), _vm._t("label", [(_vm.showLabel) ? _c('label', {
	    staticClass: "mdl-textfield__label",
	    attrs: {
	      "for": _vm.id
	    }
	  }, [_vm._v(_vm._s(_vm.showLabel))]) : _vm._e()])], 2)], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-11e6ffb8", module.exports)
	  }
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* script */
	__vue_exports__ = __webpack_require__(6);
	
	/* template */
	var __vue_template__ = __webpack_require__(7);
	__vue_options__ = __vue_exports__ = __vue_exports__ || {};
	if (_typeof(__vue_exports__.default) === "object" || typeof __vue_exports__.default === "function") {
	  if (Object.keys(__vue_exports__).some(function (key) {
	    return key !== "default" && key !== "__esModule";
	  })) {
	    console.error("named exports are not supported in *.vue files.");
	  }
	  __vue_options__ = __vue_exports__ = __vue_exports__.default;
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options;
	}
	__vue_options__.__file = "/Users/oz/src/material-components/src/button.vue";
	__vue_options__.render = __vue_template__.render;
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns;
	
	/* hot reload */
	if (false) {
	  (function () {
	    var hotAPI = require("vue-hot-reload-api");
	    hotAPI.install(require("vue"), false);
	    if (!hotAPI.compatible) return;
	    module.hot.accept();
	    if (!module.hot.data) {
	      hotAPI.createRecord("data-v-305949f7", __vue_options__);
	    } else {
	      hotAPI.reload("data-v-305949f7", __vue_options__);
	    }
	  })();
	}
	if (__vue_options__.functional) {
	  console.error("[vue-loader] button.vue: functional components are not supported and should be defined in plain js files using render functions.");
	}
	
	module.exports = __vue_exports__;

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _props;
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	  props: (_props = {
	    ripple: Boolean,
	    disabled: Boolean,
	    miniFab: Boolean,
	    fab: Boolean,
	    raised: Boolean,
	    colored: Boolean,
	    icon: [String, Boolean],
	    accent: Boolean
	  }, _defineProperty(_props, 'miniFab', Boolean), _defineProperty(_props, 'fab', Boolean), _defineProperty(_props, 'raised', Boolean), _defineProperty(_props, 'primary', Boolean), _props),
	  computed: {
	    cssClasses: function cssClasses() {
	      return {
	        'mdl-js-ripple-effect': this.ripple,
	        'mdl-button--colored': this.colored,
	        'mdl-button--icon': this.icon,
	        'mdl-button--accent': this.accent,
	        'mdl-button--mini-fab': this.miniFab,
	        'mdl-button--primary': this.primary,
	        'mdl-button--fab': this.fab || this.miniFab,
	        'mdl-button--raised': this.raised
	      };
	    },
	    isIco: function isIco() {
	      return this.icon && typeof this.icon === 'string';
	    }
	  },
	  mounted: function mounted() {
	    componentHandler.upgradeElement(this.$el);
	  }
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('button', {
	    staticClass: "mdl-button mdl-js-button",
	    class: _vm.cssClasses,
	    attrs: {
	      "disabled": _vm.disabled
	    }
	  }, [_vm._t("default", [(_vm.isIco) ? _c('i', {
	    staticClass: "material-icons"
	  }, [_vm._v(_vm._s(_vm.icon))]) : _vm._e()])], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-305949f7", module.exports)
	  }
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* script */
	__vue_exports__ = __webpack_require__(9);
	
	/* template */
	var __vue_template__ = __webpack_require__(10);
	__vue_options__ = __vue_exports__ = __vue_exports__ || {};
	if (_typeof(__vue_exports__.default) === "object" || typeof __vue_exports__.default === "function") {
	  if (Object.keys(__vue_exports__).some(function (key) {
	    return key !== "default" && key !== "__esModule";
	  })) {
	    console.error("named exports are not supported in *.vue files.");
	  }
	  __vue_options__ = __vue_exports__ = __vue_exports__.default;
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options;
	}
	__vue_options__.__file = "/Users/oz/src/material-components/src/snackbar.vue";
	__vue_options__.render = __vue_template__.render;
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns;
	
	/* hot reload */
	if (false) {
	  (function () {
	    var hotAPI = require("vue-hot-reload-api");
	    hotAPI.install(require("vue"), false);
	    if (!hotAPI.compatible) return;
	    module.hot.accept();
	    if (!module.hot.data) {
	      hotAPI.createRecord("data-v-321a530a", __vue_options__);
	    } else {
	      hotAPI.reload("data-v-321a530a", __vue_options__);
	    }
	  })();
	}
	if (__vue_options__.functional) {
	  console.error("[vue-loader] snackbar.vue: functional components are not supported and should be defined in plain js files using render functions.");
	}
	
	module.exports = __vue_exports__;

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	  props: {
	    eventSource: {
	      type: Object,
	      required: false,
	      default: function _default() {
	        return this.$root;
	      }
	    },
	    displayOn: {
	      type: String,
	      required: true
	    }
	  },
	
	  created: function created() {},
	  mounted: function mounted() {
	    var _this = this;
	
	    componentHandler.upgradeElement(this.$el, 'MaterialSnackbar');
	
	    this.eventSource.$on(this.displayOn, function (snackbarConfig) {
	      _this.$el.MaterialSnackbar.showSnackbar(snackbarConfig);
	    });
	  }
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _vm._m(0)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "mdl-js-snackbar mdl-snackbar"
	  }, [_c('div', {
	    staticClass: "mdl-snackbar__text"
	  }), _vm._v(" "), _c('button', {
	    staticClass: "mdl-snackbar__action",
	    attrs: {
	      "type": "button"
	    }
	  })])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-321a530a", module.exports)
	  }
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* styles */
	__webpack_require__(12);
	
	/* script */
	__vue_exports__ = __webpack_require__(16);
	
	/* template */
	var __vue_template__ = __webpack_require__(21);
	__vue_options__ = __vue_exports__ = __vue_exports__ || {};
	if (_typeof(__vue_exports__.default) === "object" || typeof __vue_exports__.default === "function") {
	  if (Object.keys(__vue_exports__).some(function (key) {
	    return key !== "default" && key !== "__esModule";
	  })) {
	    console.error("named exports are not supported in *.vue files.");
	  }
	  __vue_options__ = __vue_exports__ = __vue_exports__.default;
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options;
	}
	__vue_options__.__file = "/Users/oz/src/material-components/src/select/select.vue";
	__vue_options__.render = __vue_template__.render;
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns;
	
	/* hot reload */
	if (false) {
	  (function () {
	    var hotAPI = require("vue-hot-reload-api");
	    hotAPI.install(require("vue"), false);
	    if (!hotAPI.compatible) return;
	    module.hot.accept();
	    if (!module.hot.data) {
	      hotAPI.createRecord("data-v-2bdb4a8c", __vue_options__);
	    } else {
	      hotAPI.reload("data-v-2bdb4a8c", __vue_options__);
	    }
	  })();
	}
	if (__vue_options__.functional) {
	  console.error("[vue-loader] select.vue: functional components are not supported and should be defined in plain js files using render functions.");
	}
	
	module.exports = __vue_exports__;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(13);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(15)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-2bdb4a8c!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./select.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-2bdb4a8c!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./select.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.oz-select-container {\n  position: relative;\n  display: inline-block;\n  width: 500px;\n}\n.oz-select-container .search-item {\n    padding: 0 20px;\n}\n.oz-select-container .mdl-menu__container {\n    top: 8px !important;\n}\n.oz-select-container .caret {\n    position: absolute;\n    top: 25px;\n    right: 10px;\n    font-size: 12px;\n    opacity: .7;\n}\n.oz-select-container .mdl-checkbox {\n    line-height: normal;\n}\n", ""]);
	
	// exports


/***/ },
/* 14 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(true) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	var _utils = __webpack_require__(17);
	
	var _selectItem = __webpack_require__(18);
	
	var _selectItem2 = _interopRequireDefault(_selectItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    components: {
	        MSelectItem: _selectItem2.default
	    },
	
	    props: {
	        id: {
	            type: String,
	            required: true
	        },
	        dataSource: {
	            type: [Array, Function]
	        },
	        value: {
	            type: [Array, Object, String, Number], // multiple value can be only Array
	            required: true
	        },
	
	        search: Boolean,
	        multiple: Boolean
	    },
	
	    created: function created() {
	        if (typeof this.dataSource !== 'function') {
	            this.dataItems = this.dataSource;
	            this.dataItemsOriginal = this.dataSource;
	            this.loading = false;
	        }
	
	        if (this.multiple) {
	            this.selectedItems = [];
	        }
	    },
	
	
	    computed: {
	        _value: function _value() {
	            var _this = this;
	
	            var val = { name: 'Select...', value: null };
	
	            if (this.value.value) {
	                var res = this.dataItems.find(function (el) {
	                    return el.value == _this.value.value;
	                });
	
	                if (res) val = res;
	            }
	
	            return val;
	        }
	    },
	
	    data: function data() {
	        return {
	            dataItems: [],
	            dataItemsOriginal: [],
	            wasOpen: false,
	            searchText: '',
	            loading: true,
	            notFound: false,
	            m: false
	        };
	    },
	
	
	    watch: {
	        searchText: (0, _utils.debounce)(function (newValue, oldValue) {
	            if (this.search && newValue != oldValue) {
	                if (!newValue) {
	                    this.dataItems = this.dataItemsOriginal;
	                    this.notFound = false;
	                } else {
	                    var items = this.dataItemsOriginal.filter(function (el) {
	                        var reg = new RegExp((0, _utils.escapeRegExp)(newValue), 'i');
	                        return reg.test(el.name);
	                    });
	
	                    this.notFound = !items.length;
	
	                    this.dataItems = items;
	                }
	
	                this._recalculateMenuHeight();
	            }
	        }, 200)
	    },
	
	    methods: {
	        _success: function _success(responseData) {
	            var _this2 = this;
	
	            this.dataItems = responseData;
	            this.dataItemsOriginal = responseData;
	            this.loading = false;
	            this.$menu.hide();
	            Vue.nextTick(function () {
	                _this2.$menu.show();
	            });
	        },
	        selectValue: function selectValue(val) {
	            if (this.multiple) {
	                this.value.push(val);
	            } else {
	                if (val && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) == 'object') {
	                    console.log(val);
	                    this.$emit('input', val);
	                } else {
	                    this.$emit('input', val);
	                }
	
	                this.$menu.hide();
	            }
	        },
	        unselectValue: function unselectValue(val) {
	            if (!this.multiple) return;
	
	            var index = this.value.indexOf(val);
	
	            if (index != -1) {
	                this.value.splice(index, 1);
	            }
	        },
	        _failure: function _failure(reason) {
	            // TODO: handle this
	            this.loading = false;
	        },
	        _recalculateMenuHeight: function _recalculateMenuHeight() {
	            var _this3 = this;
	
	            Vue.nextTick(function () {
	                var height = _this3.$refs.menu.MaterialMenu.element_.getBoundingClientRect().height;
	                _this3.$refs.menu.MaterialMenu.container_.style.height = height + 'px';
	                _this3.$refs.menu.MaterialMenu.outline_.style.height = height + 'px';
	            });
	        },
	        itemClick: function itemClick(ev, option) {
	            this.value.name = option.name;
	            this.value.value = option.value;
	
	            // TODO: improve this code line
	            this.$menu.hide();
	
	            this.isOpen = !this.isOpen;
	        },
	        open: function open(ev) {
	            var _this4 = this;
	
	            if (!this.wasOpen && typeof this.dataSource === 'function') {
	                this.wasOpen = true;
	                this.loading = true;
	                this.dataSource(this._success, this._failure);
	            }
	
	            if (this.search) {
	                setTimeout(function () {
	                    _this4.$refs.searchField.$el.MaterialTextfield.input_.focus();
	                }, 100);
	            }
	        }
	    },
	
	    mounted: function mounted() {
	        componentHandler.upgradeElement(this.$refs.menu, 'MaterialMenu');
	        this.$menu = this.$refs.menu.MaterialMenu;
	    }
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.genId = genId;
	exports.genIdShort = genIdShort;
	exports.removeClass = removeClass;
	exports.getClosestVueParent = getClosestVueParent;
	exports.debounce = debounce;
	exports.escapeRegExp = escapeRegExp;
	exports.prepareOptionValue = prepareOptionValue;
	function genId() {
	  return Math.random().toString(36).substring(7);
	}
	
	function genIdShort() {
	  return Math.random().toString(36).substring(20);
	}
	
	function removeClass(obj) {
	  var cls = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
	
	  var classes = obj.className.split(' ');
	
	  for (var i = 0; i < classes.length; i++) {
	    if (classes[i] == cls) {
	      classes.splice(i, 1);
	      i--;
	    }
	  }
	  obj.className = classes.join(' ');
	}
	
	function getClosestVueParent($parent, cssClass) {
	  if (!$parent || !$parent.$el) {
	    return false;
	  }
	
	  if ($parent._uid === 0) {
	    return false;
	  }
	
	  if ($parent.$el.classList.contains(cssClass)) {
	    return $parent;
	  }
	
	  return getClosestVueParent($parent.$parent, cssClass);
	};
	
	function debounce() {
	  var fn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
	
	  var timer = null;
	
	  return function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    clearInterval(timer);
	
	    var self = this;
	
	    timer = setTimeout(function () {
	      fn.apply(self, args);
	    }, delay);
	  };
	}
	
	function escapeRegExp(str) {
	  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
	}
	
	function prepareOptionValue(val) {
	  var tryFromName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	
	  if (val && typeof val == 'string' || typeof val == 'number') {
	    return val;
	  } else if (val && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) == 'object') {
	    if (tryFromName) {
	      return val.name || val.value;
	    }
	
	    return val.value;
	  } else {
	    console.err('Invalid type of item, must be String, Number or Object');
	    return null;
	  }
	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* script */
	__vue_exports__ = __webpack_require__(19);
	
	/* template */
	var __vue_template__ = __webpack_require__(20);
	__vue_options__ = __vue_exports__ = __vue_exports__ || {};
	if (_typeof(__vue_exports__.default) === "object" || typeof __vue_exports__.default === "function") {
	  if (Object.keys(__vue_exports__).some(function (key) {
	    return key !== "default" && key !== "__esModule";
	  })) {
	    console.error("named exports are not supported in *.vue files.");
	  }
	  __vue_options__ = __vue_exports__ = __vue_exports__.default;
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options;
	}
	__vue_options__.__file = "/Users/oz/src/material-components/src/select/selectItem.vue";
	__vue_options__.render = __vue_template__.render;
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns;
	
	/* hot reload */
	if (false) {
	  (function () {
	    var hotAPI = require("vue-hot-reload-api");
	    hotAPI.install(require("vue"), false);
	    if (!hotAPI.compatible) return;
	    module.hot.accept();
	    if (!module.hot.data) {
	      hotAPI.createRecord("data-v-0080d126", __vue_options__);
	    } else {
	      hotAPI.reload("data-v-0080d126", __vue_options__);
	    }
	  })();
	}
	if (__vue_options__.functional) {
	  console.error("[vue-loader] selectItem.vue: functional components are not supported and should be defined in plain js files using render functions.");
	}
	
	module.exports = __vue_exports__;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	var _utils = __webpack_require__(17);
	
	exports.default = {
	    created: function created() {
	        this._checkPreSelected();
	    },
	
	
	    props: {
	        itemValue: {
	            type: [String, Number, Object],
	            required: true
	        },
	
	        items: {
	            type: [Array],
	            required: true
	        },
	
	        selectedItems: {
	            type: [String, Number, Array, Object],
	            required: true
	        },
	
	        multiple: Boolean,
	        disabled: Boolean
	    },
	
	    computed: {
	        disabled: function disabled() {
	            if (this.multiple) return false; // only Array
	
	            // Object, String, Number
	            if (_typeof(this.selectedItems) == 'object') {
	                return this.selectedItems.value === (0, _utils.prepareOptionValue)(this.itemValue);
	            } else {
	                return this.selectedItems === (0, _utils.prepareOptionValue)(this.itemValue);
	            }
	        },
	        _itemValue: function _itemValue() {
	            return (0, _utils.prepareOptionValue)(this.itemValue, true);
	        }
	    },
	
	    methods: {
	        select: function select(prop) {
	            this.parentSelect[prop ? 'selectValue' : 'unselectValue'](this.itemValue);
	        },
	        selectSingle: function selectSingle() {
	            if (this.multiple) return;
	
	            this.parentSelect.selectValue(this.itemValue);
	        },
	        _checkPreSelected: function _checkPreSelected() {
	            if (this.multiple && this.selectedItems instanceof Array) {
	                var _iteratorNormalCompletion = true;
	                var _didIteratorError = false;
	                var _iteratorError = undefined;
	
	                try {
	                    for (var _iterator = this.selectedItems[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                        var el = _step.value;
	
	                        if (el && (typeof el === 'undefined' ? 'undefined' : _typeof(el)) == 'object' && el.value === (0, _utils.prepareOptionValue)(this.itemValue)) {
	                            this.checked = true;
	                            break;
	                        } else if (el === (0, _utils.prepareOptionValue)(this.itemValue)) {
	                            this.checked = true;
	                            break;
	                        }
	                    }
	                } catch (err) {
	                    _didIteratorError = true;
	                    _iteratorError = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion && _iterator.return) {
	                            _iterator.return();
	                        }
	                    } finally {
	                        if (_didIteratorError) {
	                            throw _iteratorError;
	                        }
	                    }
	                }
	            }
	        }
	    },
	
	    mounted: function mounted() {
	        this.parentSelect = this.$parent;
	    },
	    data: function data() {
	        return {
	            checked: false,
	            parentSelect: {}
	        };
	    }
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('li', {
	    staticClass: "mdl-menu__item",
	    attrs: {
	      "disabled": _vm.disabled,
	      "data-upgraded": ",MaterialRipple"
	    },
	    on: {
	      "click": _vm.selectSingle
	    }
	  }, [(_vm.multiple) ? _vm._t("default", [_c('m-checkbox', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.checked),
	      expression: "checked"
	    }],
	    domProps: {
	      "value": (_vm.checked)
	    },
	    on: {
	      "change": _vm.select,
	      "input": function($event) {
	        _vm.checked = $event
	      }
	    },
	    nativeOn: {
	      "click": function($event) {
	        $event.stopPropagation();
	      }
	    }
	  }, [_vm._v(_vm._s(_vm._itemValue))])]) : _vm._t("default", [_vm._v("\n        " + _vm._s(_vm._itemValue) + "\n    ")])], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-0080d126", module.exports)
	  }
	}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "oz-select-container"
	  }, [_c('div', {
	    staticClass: "mdl-textfield mdl-js-textfield",
	    on: {
	      "click": _vm.open
	    }
	  }, [_c('input', {
	    staticClass: "mdl-textfield__input",
	    attrs: {
	      "type": "text",
	      "readonly": "true",
	      "id": _vm.id
	    },
	    domProps: {
	      "value": _vm._value.name
	    }
	  }), _vm._v(" "), _c('span', {
	    staticClass: "caret"
	  }, [_vm._v("▼")])]), _vm._v(" "), _c('ul', {
	    ref: "menu",
	    staticClass: "mdl-menu mdl-js-menu mdl-js-ripple-effect",
	    staticStyle: {
	      "width": "300px"
	    },
	    attrs: {
	      "for": _vm.id
	    }
	  }, [(_vm.search) ? _c('li', {
	    staticClass: "search-item",
	    on: {
	      "click": function($event) {
	        $event.stopPropagation();
	      }
	    }
	  }, [_c('m-textfield', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.searchText),
	      expression: "searchText"
	    }],
	    ref: "searchField",
	    attrs: {
	      "label": "Search..."
	    },
	    domProps: {
	      "value": (_vm.searchText)
	    },
	    on: {
	      "input": function($event) {
	        _vm.searchText = $event
	      }
	    }
	  })], 1) : _vm._e(), _vm._v(" "), (_vm.loading) ? _vm._t("default", [_c('div', {
	    staticStyle: {
	      "text-align": "center",
	      "line-height": "40px"
	    }
	  }, [_c('span', [_vm._v("Loading...")]), _vm._v(" "), _c('m-progress', {
	    attrs: {
	      "indeterminate": ""
	    }
	  })], 1)]) : _vm._e(), _vm._v(" "), (_vm.notFound) ? _vm._t("default", [_vm._m(0)]) : _vm._e(), _vm._v(" "), _vm._l((_vm.dataItems), function(option) {
	    return _c('m-select-item', {
	      attrs: {
	        "multiple": _vm.multiple,
	        "items": _vm.dataItems,
	        "selected-items": _vm.value,
	        "item-value": option
	      }
	    })
	  })], 2)])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticStyle: {
	      "text-align": "center",
	      "line-height": "40px",
	      "opacity": ".3"
	    }
	  }, [_c('span', [_vm._v("Not found")])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-2bdb4a8c", module.exports)
	  }
	}

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* script */
	__vue_exports__ = __webpack_require__(23);
	
	/* template */
	var __vue_template__ = __webpack_require__(24);
	__vue_options__ = __vue_exports__ = __vue_exports__ || {};
	if (_typeof(__vue_exports__.default) === "object" || typeof __vue_exports__.default === "function") {
	  if (Object.keys(__vue_exports__).some(function (key) {
	    return key !== "default" && key !== "__esModule";
	  })) {
	    console.error("named exports are not supported in *.vue files.");
	  }
	  __vue_options__ = __vue_exports__ = __vue_exports__.default;
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options;
	}
	__vue_options__.__file = "/Users/oz/src/material-components/src/slider.vue";
	__vue_options__.render = __vue_template__.render;
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns;
	
	/* hot reload */
	if (false) {
	  (function () {
	    var hotAPI = require("vue-hot-reload-api");
	    hotAPI.install(require("vue"), false);
	    if (!hotAPI.compatible) return;
	    module.hot.accept();
	    if (!module.hot.data) {
	      hotAPI.createRecord("data-v-5ce92c26", __vue_options__);
	    } else {
	      hotAPI.reload("data-v-5ce92c26", __vue_options__);
	    }
	  })();
	}
	if (__vue_options__.functional) {
	  console.error("[vue-loader] slider.vue: functional components are not supported and should be defined in plain js files using render functions.");
	}
	
	module.exports = __vue_exports__;

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	  computed: {
	    lowerBackgroundStyle: function lowerBackgroundStyle() {
	      return {
	        flex: this.relativeValue + ' 1 0%'
	      };
	    },
	    upperBackgroundStyle: function upperBackgroundStyle() {
	      return {
	        flex: 1 - this.relativeValue + ' 1 0%'
	      };
	    },
	    valueNumber: function valueNumber() {
	      return Number(this.value);
	    },
	    stepNumber: function stepNumber() {
	      return Number(this.step);
	    },
	    minNumber: function minNumber() {
	      return Number(this.min);
	    },
	    maxNumber: function maxNumber() {
	      return Number(this.max);
	    },
	    relativeValue: function relativeValue() {
	      var val = Math.round((this.valueNumber - this.minNumber) / this.stepNumber) * this.stepNumber;
	      return val / (this.maxNumber - this.minNumber);
	    }
	  },
	  props: {
	    value: {
	      type: [String, Number],
	      required: true
	    },
	    step: {
	      type: [String, Number],
	      default: 1
	    },
	    min: {
	      type: [String, Number],
	      default: 0
	    },
	    max: {
	      type: [String, Number],
	      required: true
	    },
	    disabled: {
	      required: false
	    }
	  },
	  methods: {
	    onInput: function onInput(_ref) {
	      var value = _ref.target.value;
	
	      this.$emit('input', typeof this.value === 'string' ? value : Number(value));
	    }
	  }
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "mdl-slider__container"
	  }, [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.valueNumber),
	      expression: "valueNumber"
	    }],
	    ref: "input",
	    staticClass: "mdl-slider mdl-js-slider is-upgraded",
	    attrs: {
	      "type": "range",
	      "min": _vm.min,
	      "max": _vm.max,
	      "step": _vm.step,
	      "data-upgraded": ",MaterialSlider",
	      "disabled": _vm.disabled
	    },
	    domProps: {
	      "value": _vm._s(_vm.valueNumber)
	    },
	    on: {
	      "input": [function($event) {
	        _vm.valueNumber = $event.target.value
	      }, _vm.onInput]
	    }
	  }), _vm._v(" "), _c('div', {
	    staticClass: "mdl-slider__background-flex"
	  }, [_c('div', {
	    staticClass: "mdl-slider__background-lower",
	    style: (_vm.lowerBackgroundStyle)
	  }), _vm._v(" "), _c('div', {
	    staticClass: "mdl-slider__background-upper",
	    style: (_vm.upperBackgroundStyle)
	  })])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-5ce92c26", module.exports)
	  }
	}

/***/ },
/* 25 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    value: [String, Number],
	    overlap: Boolean,
	    icon: Boolean,
	    noBackground: Boolean,
	    hide: Boolean,
	    href: String,
	
	    tag: {
	      type: String,
	      default: function _default() {
	        return 'span';
	      }
	    }
	
	  },
	
	  render: function render(createElement) {
	    var tag = this.tag;
	
	    var attrs = {
	      'class': 'mdl-badge'
	
	    };
	
	    if (!this.hide) attrs['data-badge'] = this.value;
	
	    if (this.href) {
	      tag = 'a';
	      attrs.href = this.href;
	    }
	
	    if (this.overlap) attrs.class += ' mdl-badge--overlap ';
	
	    if (this.icon) attrs.class = 'material-icons ' + attrs.class;
	
	    if (this.noBackground) attrs.class += ' mdl-badge--no-background ';
	
	    return createElement(tag, {
	      attrs: attrs
	    }, this.$slots.default);
	  }
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* script */
	__vue_exports__ = __webpack_require__(27);
	
	/* template */
	var __vue_template__ = __webpack_require__(28);
	__vue_options__ = __vue_exports__ = __vue_exports__ || {};
	if (_typeof(__vue_exports__.default) === "object" || typeof __vue_exports__.default === "function") {
	  if (Object.keys(__vue_exports__).some(function (key) {
	    return key !== "default" && key !== "__esModule";
	  })) {
	    console.error("named exports are not supported in *.vue files.");
	  }
	  __vue_options__ = __vue_exports__ = __vue_exports__.default;
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options;
	}
	__vue_options__.__file = "/Users/oz/src/material-components/src/progress.vue";
	__vue_options__.render = __vue_template__.render;
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns;
	
	/* hot reload */
	if (false) {
	  (function () {
	    var hotAPI = require("vue-hot-reload-api");
	    hotAPI.install(require("vue"), false);
	    if (!hotAPI.compatible) return;
	    module.hot.accept();
	    if (!module.hot.data) {
	      hotAPI.createRecord("data-v-9f634f9c", __vue_options__);
	    } else {
	      hotAPI.reload("data-v-9f634f9c", __vue_options__);
	    }
	  })();
	}
	if (__vue_options__.functional) {
	  console.error("[vue-loader] progress.vue: functional components are not supported and should be defined in plain js files using render functions.");
	}
	
	module.exports = __vue_exports__;

/***/ },
/* 27 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	
	exports.default = {
	    props: {
	        value: [String, Number],
	        buffer: [String, Number],
	        indeterminate: Boolean
	    },
	
	    mounted: function mounted() {
	        var _this = this;
	
	        componentHandler.upgradeElement(this.$el, 'MaterialProgress');
	
	        if (this.value != null) {
	            this.$el.MaterialProgress.setProgress(this.value);
	            this.$watch('value', function (val) {
	                return _this.$el.MaterialProgress.setProgress(val);
	            });
	        }
	
	        if (this.buffer != null) {
	            this.$el.MaterialProgress.setBuffer(this.buffer);
	            this.$watch('buffer', function (val) {
	                return _this.$el.MaterialProgress.setBuffer(val);
	            });
	        }
	    }
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "mdl-progress mdl-js-progress",
	    class: {
	      'mdl-progress__indeterminate': _vm.indeterminate
	    }
	  })
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-9f634f9c", module.exports)
	  }
	}

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* script */
	__vue_exports__ = __webpack_require__(30);
	
	/* template */
	var __vue_template__ = __webpack_require__(31);
	__vue_options__ = __vue_exports__ = __vue_exports__ || {};
	if (_typeof(__vue_exports__.default) === "object" || typeof __vue_exports__.default === "function") {
	  if (Object.keys(__vue_exports__).some(function (key) {
	    return key !== "default" && key !== "__esModule";
	  })) {
	    console.error("named exports are not supported in *.vue files.");
	  }
	  __vue_options__ = __vue_exports__ = __vue_exports__.default;
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options;
	}
	__vue_options__.__file = "/Users/oz/src/material-components/src/spinner.vue";
	__vue_options__.render = __vue_template__.render;
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns;
	
	/* hot reload */
	if (false) {
	  (function () {
	    var hotAPI = require("vue-hot-reload-api");
	    hotAPI.install(require("vue"), false);
	    if (!hotAPI.compatible) return;
	    module.hot.accept();
	    if (!module.hot.data) {
	      hotAPI.createRecord("data-v-2c9706b8", __vue_options__);
	    } else {
	      hotAPI.reload("data-v-2c9706b8", __vue_options__);
	    }
	  })();
	}
	if (__vue_options__.functional) {
	  console.error("[vue-loader] spinner.vue: functional components are not supported and should be defined in plain js files using render functions.");
	}
	
	module.exports = __vue_exports__;

/***/ },
/* 30 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	
	exports.default = {
	    props: {
	        active: {
	            type: Boolean,
	            default: true
	        },
	
	        singleColor: Boolean
	    },
	
	    mounted: function mounted() {
	        componentHandler.upgradeElement(this.$el);
	    }
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "mdl-spinner mdl-js-spinner",
	    class: {
	      'mdl-spinner--single-color': _vm.singleColor, 'is-active': _vm.active, 'is-upgraded': _vm.active
	    }
	  })
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-2c9706b8", module.exports)
	  }
	}

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* script */
	__vue_exports__ = __webpack_require__(33);
	
	/* template */
	var __vue_template__ = __webpack_require__(34);
	__vue_options__ = __vue_exports__ = __vue_exports__ || {};
	if (_typeof(__vue_exports__.default) === "object" || typeof __vue_exports__.default === "function") {
	  if (Object.keys(__vue_exports__).some(function (key) {
	    return key !== "default" && key !== "__esModule";
	  })) {
	    console.error("named exports are not supported in *.vue files.");
	  }
	  __vue_options__ = __vue_exports__ = __vue_exports__.default;
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options;
	}
	__vue_options__.__file = "/Users/oz/src/material-components/src/toggles/checkbox.vue";
	__vue_options__.render = __vue_template__.render;
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns;
	
	/* hot reload */
	if (false) {
	  (function () {
	    var hotAPI = require("vue-hot-reload-api");
	    hotAPI.install(require("vue"), false);
	    if (!hotAPI.compatible) return;
	    module.hot.accept();
	    if (!module.hot.data) {
	      hotAPI.createRecord("data-v-3fd45390", __vue_options__);
	    } else {
	      hotAPI.reload("data-v-3fd45390", __vue_options__);
	    }
	  })();
	}
	if (__vue_options__.functional) {
	  console.error("[vue-loader] checkbox.vue: functional components are not supported and should be defined in plain js files using render functions.");
	}
	
	module.exports = __vue_exports__;

/***/ },
/* 33 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	    props: {
	        value: {
	            type: Boolean,
	            required: true
	        },
	        disabled: { required: false },
	        val: { required: false }
	    },
	
	    computed: {
	        checked: {
	            get: function get() {
	                return this.value;
	            },
	            set: function set(val) {
	                this.checkedProxy = val;
	            }
	        }
	    },
	
	    data: function data() {
	        return {
	            checkedProxy: false
	        };
	    },
	    mounted: function mounted() {
	        componentHandler.upgradeElements(this.$el, 'MaterialCheckbox');
	    },
	
	
	    watch: {
	        value: function value(newValue, oldValue) {
	            if (newValue != oldValue) {
	                this.$el.MaterialCheckbox[newValue ? 'check' : 'uncheck']();
	            }
	        }
	    },
	
	    methods: {
	        fireChange: function fireChange(event) {
	            this.$emit('input', this.checkedProxy);
	            this.$emit('change', this.checkedProxy);
	        }
	    }
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('label', {
	    staticClass: "mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect is-upgraded"
	  }, [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.checked),
	      expression: "checked"
	    }],
	    staticClass: "mdl-checkbox__input",
	    attrs: {
	      "type": "checkbox",
	      "disabled": _vm.disabled
	    },
	    domProps: {
	      "value": _vm.val,
	      "checked": Array.isArray(_vm.checked) ? _vm._i(_vm.checked, _vm.val) > -1 : (_vm.checked)
	    },
	    on: {
	      "change": [function($event) {
	        var $$a = _vm.checked,
	          $$el = $event.target,
	          $$c = $$el.checked ? (true) : (false);
	        if (Array.isArray($$a)) {
	          var $$v = _vm.val,
	            $$i = _vm._i($$a, $$v);
	          if ($$c) {
	            $$i < 0 && (_vm.checked = $$a.concat($$v))
	          } else {
	            $$i > -1 && (_vm.checked = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
	          }
	        } else {
	          _vm.checked = $$c
	        }
	      }, _vm.fireChange]
	    }
	  }), _vm._v(" "), _c('span', {
	    staticClass: "mdl-checkbox__label"
	  }, [_vm._t("default")], 2)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-3fd45390", module.exports)
	  }
	}

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* script */
	__vue_exports__ = __webpack_require__(36);
	
	/* template */
	var __vue_template__ = __webpack_require__(37);
	__vue_options__ = __vue_exports__ = __vue_exports__ || {};
	if (_typeof(__vue_exports__.default) === "object" || typeof __vue_exports__.default === "function") {
	  if (Object.keys(__vue_exports__).some(function (key) {
	    return key !== "default" && key !== "__esModule";
	  })) {
	    console.error("named exports are not supported in *.vue files.");
	  }
	  __vue_options__ = __vue_exports__ = __vue_exports__.default;
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options;
	}
	__vue_options__.__file = "/Users/oz/src/material-components/src/toggles/radio.vue";
	__vue_options__.render = __vue_template__.render;
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns;
	
	/* hot reload */
	if (false) {
	  (function () {
	    var hotAPI = require("vue-hot-reload-api");
	    hotAPI.install(require("vue"), false);
	    if (!hotAPI.compatible) return;
	    module.hot.accept();
	    if (!module.hot.data) {
	      hotAPI.createRecord("data-v-e9a31654", __vue_options__);
	    } else {
	      hotAPI.reload("data-v-e9a31654", __vue_options__);
	    }
	  })();
	}
	if (__vue_options__.functional) {
	  console.error("[vue-loader] radio.vue: functional components are not supported and should be defined in plain js files using render functions.");
	}
	
	module.exports = __vue_exports__;

/***/ },
/* 36 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	  props: {
	    name: String,
	    disabled: { required: false },
	    id: String,
	    value: {
	      type: [String, Number],
	      required: true
	    },
	    val: { required: true }
	  },
	  computed: {
	    checked: {
	      get: function get() {
	        return this.value;
	      },
	      set: function set(val) {
	        this.checkedProxy = val;
	      }
	    },
	    isChecked: function isChecked() {
	      return this.value === this.val;
	    },
	    cssClasses: function cssClasses() {
	      return {
	        'is-disabled': this.disabled,
	        'is-checked': this.isChecked
	      };
	    }
	  },
	  mounted: function mounted() {
	    componentHandler.upgradeElements(this.$el);
	  },
	
	  methods: {
	    fireChange: function fireChange(event) {
	      this.$emit('input', this.checkedProxy);
	    }
	  }
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('label', {
	    staticClass: "mdl-radio mdl-js-radio is-upgraded mdl-js-ripple-effect",
	    class: _vm.cssClasses,
	    attrs: {
	      "for": _vm.id
	    }
	  }, [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.checked),
	      expression: "checked"
	    }],
	    staticClass: "mdl-radio__button",
	    attrs: {
	      "type": "radio",
	      "id": _vm.id,
	      "name": _vm.name,
	      "disabled": _vm.disabled
	    },
	    domProps: {
	      "value": _vm.val,
	      "checked": _vm._q(_vm.checked, _vm.val)
	    },
	    on: {
	      "change": [function($event) {
	        _vm.checked = _vm.val
	      }, _vm.fireChange]
	    }
	  }), _vm._v(" "), _c('span', {
	    staticClass: "mdl-radio__label"
	  }, [_vm._t("default")], 2)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-e9a31654", module.exports)
	  }
	}

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* script */
	__vue_exports__ = __webpack_require__(39);
	
	/* template */
	var __vue_template__ = __webpack_require__(40);
	__vue_options__ = __vue_exports__ = __vue_exports__ || {};
	if (_typeof(__vue_exports__.default) === "object" || typeof __vue_exports__.default === "function") {
	  if (Object.keys(__vue_exports__).some(function (key) {
	    return key !== "default" && key !== "__esModule";
	  })) {
	    console.error("named exports are not supported in *.vue files.");
	  }
	  __vue_options__ = __vue_exports__ = __vue_exports__.default;
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options;
	}
	__vue_options__.__file = "/Users/oz/src/material-components/src/toggles/switch.vue";
	__vue_options__.render = __vue_template__.render;
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns;
	
	/* hot reload */
	if (false) {
	  (function () {
	    var hotAPI = require("vue-hot-reload-api");
	    hotAPI.install(require("vue"), false);
	    if (!hotAPI.compatible) return;
	    module.hot.accept();
	    if (!module.hot.data) {
	      hotAPI.createRecord("data-v-6ea7f72e", __vue_options__);
	    } else {
	      hotAPI.reload("data-v-6ea7f72e", __vue_options__);
	    }
	  })();
	}
	if (__vue_options__.functional) {
	  console.error("[vue-loader] switch.vue: functional components are not supported and should be defined in plain js files using render functions.");
	}
	
	module.exports = __vue_exports__;

/***/ },
/* 39 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	    props: {
	        value: {
	            type: Boolean,
	            required: true
	        },
	        disabled: { required: false }
	    },
	
	    computed: {
	        checked: {
	            get: function get() {
	                return this.value;
	            },
	            set: function set(val) {
	                this.checkedProxy = val;
	            }
	        }
	    },
	
	    data: function data() {
	        return {
	            checkedProxy: false
	        };
	    },
	    mounted: function mounted() {
	        componentHandler.upgradeElements(this.$el);
	    },
	
	
	    methods: {
	        fireChange: function fireChange(event) {
	            this.$emit('input', this.checkedProxy);
	        }
	    }
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('label', {
	    staticClass: "mdl-switch mdl-js-switch is-upgraded mdl-js-ripple-effect"
	  }, [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.checked),
	      expression: "checked"
	    }],
	    staticClass: "mdl-switch__input",
	    attrs: {
	      "type": "checkbox",
	      "disabled": _vm.disabled
	    },
	    domProps: {
	      "checked": Array.isArray(_vm.checked) ? _vm._i(_vm.checked, null) > -1 : (_vm.checked)
	    },
	    on: {
	      "change": [function($event) {
	        var $$a = _vm.checked,
	          $$el = $event.target,
	          $$c = $$el.checked ? (true) : (false);
	        if (Array.isArray($$a)) {
	          var $$v = null,
	            $$i = _vm._i($$a, $$v);
	          if ($$c) {
	            $$i < 0 && (_vm.checked = $$a.concat($$v))
	          } else {
	            $$i > -1 && (_vm.checked = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
	          }
	        } else {
	          _vm.checked = $$c
	        }
	      }, _vm.fireChange]
	    }
	  }), _vm._v(" "), _c('span', {
	    staticClass: "mdl-switch__label"
	  }, [_vm._t("default")], 2)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-6ea7f72e", module.exports)
	  }
	}

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* script */
	__vue_exports__ = __webpack_require__(42);
	
	/* template */
	var __vue_template__ = __webpack_require__(43);
	__vue_options__ = __vue_exports__ = __vue_exports__ || {};
	if (_typeof(__vue_exports__.default) === "object" || typeof __vue_exports__.default === "function") {
	  if (Object.keys(__vue_exports__).some(function (key) {
	    return key !== "default" && key !== "__esModule";
	  })) {
	    console.error("named exports are not supported in *.vue files.");
	  }
	  __vue_options__ = __vue_exports__ = __vue_exports__.default;
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options;
	}
	__vue_options__.__file = "/Users/oz/src/material-components/src/toggles/icon.vue";
	__vue_options__.render = __vue_template__.render;
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns;
	
	/* hot reload */
	if (false) {
	  (function () {
	    var hotAPI = require("vue-hot-reload-api");
	    hotAPI.install(require("vue"), false);
	    if (!hotAPI.compatible) return;
	    module.hot.accept();
	    if (!module.hot.data) {
	      hotAPI.createRecord("data-v-f08c3b24", __vue_options__);
	    } else {
	      hotAPI.reload("data-v-f08c3b24", __vue_options__);
	    }
	  })();
	}
	if (__vue_options__.functional) {
	  console.error("[vue-loader] icon.vue: functional components are not supported and should be defined in plain js files using render functions.");
	}
	
	module.exports = __vue_exports__;

/***/ },
/* 42 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	    props: {
	        value: {
	            type: Boolean,
	            required: true
	        },
	        icon: {
	            required: true,
	            type: String
	        },
	        disabled: { required: false }
	    },
	
	    computed: {
	        checked: {
	            get: function get() {
	                return this.value;
	            },
	            set: function set(val) {
	                this.checkedProxy = val;
	            }
	        }
	    },
	
	    data: function data() {
	        return {
	            checkedProxy: false
	        };
	    },
	    mounted: function mounted() {
	        componentHandler.upgradeElements(this.$el);
	    },
	
	
	    methods: {
	        fireChange: function fireChange(event) {
	            this.$emit('input', this.checkedProxy);
	        }
	    }
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('label', {
	    staticClass: "mdl-icon-toggle mdl-js-icon-toggle is-upgraded mdl-js-ripple-effect"
	  }, [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.checked),
	      expression: "checked"
	    }],
	    staticClass: "mdl-icon-toggle__input",
	    attrs: {
	      "type": "checkbox",
	      "disabled": _vm.disabled
	    },
	    domProps: {
	      "checked": Array.isArray(_vm.checked) ? _vm._i(_vm.checked, null) > -1 : (_vm.checked)
	    },
	    on: {
	      "change": [function($event) {
	        var $$a = _vm.checked,
	          $$el = $event.target,
	          $$c = $$el.checked ? (true) : (false);
	        if (Array.isArray($$a)) {
	          var $$v = null,
	            $$i = _vm._i($$a, $$v);
	          if ($$c) {
	            $$i < 0 && (_vm.checked = $$a.concat($$v))
	          } else {
	            $$i > -1 && (_vm.checked = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
	          }
	        } else {
	          _vm.checked = $$c
	        }
	      }, _vm.fireChange]
	    }
	  }), _vm._v(" "), _c('i', {
	    staticClass: "mdl-icon-toggle__label material-icons"
	  }, [_vm._v(_vm._s(_vm.icon))])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-f08c3b24", module.exports)
	  }
	}

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* script */
	__vue_exports__ = __webpack_require__(45);
	
	/* template */
	var __vue_template__ = __webpack_require__(46);
	__vue_options__ = __vue_exports__ = __vue_exports__ || {};
	if (_typeof(__vue_exports__.default) === "object" || typeof __vue_exports__.default === "function") {
	  if (Object.keys(__vue_exports__).some(function (key) {
	    return key !== "default" && key !== "__esModule";
	  })) {
	    console.error("named exports are not supported in *.vue files.");
	  }
	  __vue_options__ = __vue_exports__ = __vue_exports__.default;
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options;
	}
	__vue_options__.__file = "/Users/oz/src/material-components/src/menu/menu.vue";
	__vue_options__.render = __vue_template__.render;
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns;
	
	/* hot reload */
	if (false) {
	  (function () {
	    var hotAPI = require("vue-hot-reload-api");
	    hotAPI.install(require("vue"), false);
	    if (!hotAPI.compatible) return;
	    module.hot.accept();
	    if (!module.hot.data) {
	      hotAPI.createRecord("data-v-78d662da", __vue_options__);
	    } else {
	      hotAPI.reload("data-v-78d662da", __vue_options__);
	    }
	  })();
	}
	if (__vue_options__.functional) {
	  console.error("[vue-loader] menu.vue: functional components are not supported and should be defined in plain js files using render functions.");
	}
	
	module.exports = __vue_exports__;

/***/ },
/* 45 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	
	exports.default = {
	    mounted: function mounted() {
	        componentHandler.upgradeElement(this.$el, 'MaterialMenu');
	    }
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('ul', {
	    ref: "menu",
	    staticClass: "mdl-menu mdl-js-menu mdl-js-ripple-effect"
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-78d662da", module.exports)
	  }
	}

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* script */
	__vue_exports__ = __webpack_require__(48);
	
	/* template */
	var __vue_template__ = __webpack_require__(49);
	__vue_options__ = __vue_exports__ = __vue_exports__ || {};
	if (_typeof(__vue_exports__.default) === "object" || typeof __vue_exports__.default === "function") {
	  if (Object.keys(__vue_exports__).some(function (key) {
	    return key !== "default" && key !== "__esModule";
	  })) {
	    console.error("named exports are not supported in *.vue files.");
	  }
	  __vue_options__ = __vue_exports__ = __vue_exports__.default;
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options;
	}
	__vue_options__.__file = "/Users/oz/src/material-components/src/menu/item.vue";
	__vue_options__.render = __vue_template__.render;
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns;
	
	/* hot reload */
	if (false) {
	  (function () {
	    var hotAPI = require("vue-hot-reload-api");
	    hotAPI.install(require("vue"), false);
	    if (!hotAPI.compatible) return;
	    module.hot.accept();
	    if (!module.hot.data) {
	      hotAPI.createRecord("data-v-39fa62e4", __vue_options__);
	    } else {
	      hotAPI.reload("data-v-39fa62e4", __vue_options__);
	    }
	  })();
	}
	if (__vue_options__.functional) {
	  console.error("[vue-loader] item.vue: functional components are not supported and should be defined in plain js files using render functions.");
	}
	
	module.exports = __vue_exports__;

/***/ },
/* 48 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	
	exports.default = {};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('li', {
	    staticClass: "mdl-menu__item"
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-39fa62e4", module.exports)
	  }
	}

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* styles */
	__webpack_require__(51);
	
	/* script */
	__vue_exports__ = __webpack_require__(53);
	
	/* template */
	var __vue_template__ = __webpack_require__(57);
	__vue_options__ = __vue_exports__ = __vue_exports__ || {};
	if (_typeof(__vue_exports__.default) === "object" || typeof __vue_exports__.default === "function") {
	  if (Object.keys(__vue_exports__).some(function (key) {
	    return key !== "default" && key !== "__esModule";
	  })) {
	    console.error("named exports are not supported in *.vue files.");
	  }
	  __vue_options__ = __vue_exports__ = __vue_exports__.default;
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options;
	}
	__vue_options__.__file = "/Users/oz/src/material-components/src/tabs/tabs.vue";
	__vue_options__.render = __vue_template__.render;
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns;
	
	/* hot reload */
	if (false) {
	  (function () {
	    var hotAPI = require("vue-hot-reload-api");
	    hotAPI.install(require("vue"), false);
	    if (!hotAPI.compatible) return;
	    module.hot.accept();
	    if (!module.hot.data) {
	      hotAPI.createRecord("data-v-295aa38c", __vue_options__);
	    } else {
	      hotAPI.reload("data-v-295aa38c", __vue_options__);
	    }
	  })();
	}
	if (__vue_options__.functional) {
	  console.error("[vue-loader] tabs.vue: functional components are not supported and should be defined in plain js files using render functions.");
	}
	
	module.exports = __vue_exports__;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(52);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(15)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-295aa38c!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tabs.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-295aa38c!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tabs.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.mdl-tabs--for-animation .mdl-tabs__tab-wrapper {\n  position: relative;\n}\n.mdl-tabs--for-animation .before-enter {\n  transform: translateX(-100%);\n}\n.mdl-tabs--for-animation .enter {\n  transform: translateX(0%);\n}\n.mdl-tabs--for-animation .leave {\n  transform: translateX(100%);\n  z-index: 2;\n  display: block;\n}\n.mdl-tabs.is-upgraded.mdl-tabs--for-animation .mdl-tabs__panel {\n  display: block;\n}\n.mdl-tabs .is-active {\n  z-index: 2;\n}\n", ""]);
	
	// exports


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _tabL = __webpack_require__(54);
	
	var _tabL2 = _interopRequireDefault(_tabL);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    value: {
	      required: false,
	      type: [String, Number]
	    },
	
	    noRippleEffect: {
	      type: Boolean,
	      required: false
	    },
	
	    animation: {
	      type: Boolean,
	      required: false
	    },
	
	    contentStyle: {
	      type: Object,
	      required: false
	    }
	  },
	
	  methods: {
	    selectTab: function selectTab(_ref) {
	      var id = _ref.id;
	
	      if (this.animation) {
	        //let exitTab = this.getExitTab();
	        //let enterTab = this.getEnterTab(id);
	        //
	        //if(this.isAnimating || (this.prepareTabKey(enterTab.tab) == this.value)) return; // TODO: add the same click check
	        //
	        //exitTab.addExit();
	        //enterTab.addEnter();
	        //
	        //setTimeout(() => this.isAnimating = true, 0);
	        //
	        //setTimeout(() => {
	        //    this.isAnimating = false;
	        //
	        //    exitTab.rmExit();
	        //    enterTab.rmEnter();
	        //
	        //    this.$emit('input', id)
	        //}, 300);
	
	        this.$emit('input', id);
	      } else {
	        this.$emit('input', id);
	      }
	    },
	    addTabComponent: function addTabComponent(tabComponent) {
	      this.tabComponents.push(tabComponent);
	    },
	    getExitTab: function getExitTab() {
	      var _this = this;
	
	      return this.tabComponents.find(function (c) {
	        return _this.prepareTabKey(c.tab) == _this.value;
	      });
	    },
	    getEnterTab: function getEnterTab(id) {
	      var _this2 = this;
	
	      return this.tabComponents.find(function (c) {
	        return _this2.prepareTabKey(c.tab) == id;
	      });
	    },
	    prepareTabKey: function prepareTabKey(tab) {
	      return typeof tab == 'string' ? tab : tab.id;
	    },
	    isSelected: function isSelected(_ref2) {
	      var id = _ref2.id;
	
	      return id === this.value;
	    },
	    addTab: function addTab(tab) {
	      this.tabs.push(tab);
	    },
	    updateTab: function updateTab(_ref3, tab) {
	      var id = _ref3.id;
	
	      var index = findTabIndex(this.tabs, id);
	      if (index > -1) this.tabs.splice(index, 1, tab);
	    },
	    removeTab: function removeTab(_ref4) {
	      var id = _ref4.id;
	
	      var index = findTabIndex(this.tabs, id);
	      if (index > -1) this.tabs.splice(index, 1);
	    }
	  },
	
	  data: function data() {
	    return {
	      tabs: [],
	      isAnimating: false,
	      tabComponents: []
	    };
	  },
	
	
	  components: { TabLink: _tabL2.default }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	function findTabIndex(tabs, id) {
	  for (var i = 0; i < tabs.length; ++i) {
	    if (tabs[i].id === id) {
	      return i;
	    }
	  }
	  return -1;
	}

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* script */
	__vue_exports__ = __webpack_require__(55);
	
	/* template */
	var __vue_template__ = __webpack_require__(56);
	__vue_options__ = __vue_exports__ = __vue_exports__ || {};
	if (_typeof(__vue_exports__.default) === "object" || typeof __vue_exports__.default === "function") {
	  if (Object.keys(__vue_exports__).some(function (key) {
	    return key !== "default" && key !== "__esModule";
	  })) {
	    console.error("named exports are not supported in *.vue files.");
	  }
	  __vue_options__ = __vue_exports__ = __vue_exports__.default;
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options;
	}
	__vue_options__.__file = "/Users/oz/src/material-components/src/tabs/tab-l.vue";
	__vue_options__.render = __vue_template__.render;
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns;
	
	/* hot reload */
	if (false) {
	  (function () {
	    var hotAPI = require("vue-hot-reload-api");
	    hotAPI.install(require("vue"), false);
	    if (!hotAPI.compatible) return;
	    module.hot.accept();
	    if (!module.hot.data) {
	      hotAPI.createRecord("data-v-0ad8da28", __vue_options__);
	    } else {
	      hotAPI.reload("data-v-0ad8da28", __vue_options__);
	    }
	  })();
	}
	if (__vue_options__.functional) {
	  console.error("[vue-loader] tab-l.vue: functional components are not supported and should be defined in plain js files using render functions.");
	}
	
	module.exports = __vue_exports__;

/***/ },
/* 55 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	  props: {
	    tab: Object,
	    noRippleEffect: {
	      required: false
	    }
	  },
	
	  mounted: function mounted() {
	    componentHandler.upgradeElement(this.$refs.ripple, 'MaterialRipple');
	  }
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('a', {
	    staticClass: "mdl-tabs__tab",
	    attrs: {
	      "href": "#"
	    }
	  }, [_vm._v(_vm._s(_vm.tab.title) + "\n"), _c('span', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (!_vm.noRippleEffect),
	      expression: "!noRippleEffect"
	    }],
	    ref: "ripple",
	    staticClass: "mdl-tabs__ripple-container mdl-js-ripple-effect"
	  }, [_c('span', {
	    staticClass: "mdl-ripple"
	  })])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-0ad8da28", module.exports)
	  }
	}

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "mdl-tabs is-upgraded",
	    class: {
	      'tabs-animating': _vm.isAnimating, 'mdl-tabs--for-animation': _vm.animation
	    }
	  }, [_c('div', {
	    staticClass: "mdl-tabs__tab-bar"
	  }, _vm._l((_vm.tabs), function(tab) {
	    return _c('tab-link', {
	      key: tab.id,
	      staticClass: "mdl-tabs__tab",
	      class: {
	        'is-active': _vm.isSelected(tab)
	      },
	      attrs: {
	        "no-ripple-effect": _vm.noRippleEffect,
	        "tab": tab
	      },
	      nativeOn: {
	        "click": function($event) {
	          $event.preventDefault();
	          _vm.selectTab(tab)
	        }
	      }
	    })
	  })), _vm._v(" "), _c('div', {
	    staticClass: "mdl-tabs__tab-wrapper",
	    style: (_vm.contentStyle)
	  }, [_vm._t("default")], 2)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-295aa38c", module.exports)
	  }
	}

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* styles */
	__webpack_require__(59);
	
	/* script */
	__vue_exports__ = __webpack_require__(61);
	
	/* template */
	var __vue_template__ = __webpack_require__(62);
	__vue_options__ = __vue_exports__ = __vue_exports__ || {};
	if (_typeof(__vue_exports__.default) === "object" || typeof __vue_exports__.default === "function") {
	  if (Object.keys(__vue_exports__).some(function (key) {
	    return key !== "default" && key !== "__esModule";
	  })) {
	    console.error("named exports are not supported in *.vue files.");
	  }
	  __vue_options__ = __vue_exports__ = __vue_exports__.default;
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options;
	}
	__vue_options__.__file = "/Users/oz/src/material-components/src/tabs/tab.vue";
	__vue_options__.render = __vue_template__.render;
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns;
	
	/* hot reload */
	if (false) {
	  (function () {
	    var hotAPI = require("vue-hot-reload-api");
	    hotAPI.install(require("vue"), false);
	    if (!hotAPI.compatible) return;
	    module.hot.accept();
	    if (!module.hot.data) {
	      hotAPI.createRecord("data-v-41477409", __vue_options__);
	    } else {
	      hotAPI.reload("data-v-41477409", __vue_options__);
	    }
	  })();
	}
	if (__vue_options__.functional) {
	  console.error("[vue-loader] tab.vue: functional components are not supported and should be defined in plain js files using render functions.");
	}
	
	module.exports = __vue_exports__;

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(60);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(15)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-41477409!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tab.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-41477409!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tab.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.mdl-tabs__panel--for-animation {\n  position: absolute;\n  display: block;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: -1;\n  overflow: auto;\n  transition: all .3s;\n}\n", ""]);
	
	// exports


/***/ },
/* 61 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	
	exports.default = {
	  watch: {
	    tab: function tab(newTab, oldTab) {
	      this.$parent.updateTab(tabToOject(oldTab), this.tabData);
	    }
	  },
	
	  mounted: function mounted() {
	    this.$parent.addTab(this.tabData);
	    this.$parent.addTabComponent(this);
	  },
	  beforeDestroy: function beforeDestroy() {
	    this.$parent.removeTab(this.tabData);
	  },
	
	
	  computed: {
	    selected: function selected() {
	      return this.$parent.isSelected(this.tabData);
	    },
	    id: function id() {
	      return typeof this.tab === 'string' ? this.tab : this.tab.id || this.tab.title;
	    },
	    tabData: function tabData() {
	      return tabToOject(this.tab);
	    },
	    animation: function animation() {
	      return this.$parent.animation;
	    }
	  },
	  props: {
	    tab: {
	      required: true,
	      type: [String, Object]
	    }
	  },
	
	  data: function data() {
	    return {
	      classEnter: false,
	      classBeforeEnter: false,
	      current: false,
	      classLeave: false
	    };
	  },
	
	
	  methods: {
	    beforeEnter: function beforeEnter() {
	      this.classBeforeEnter = true;
	      console.log('before enter');
	    },
	    enter: function enter(el) {
	      var _this = this;
	
	      setTimeout(function () {
	        return _this.classEnter = true;
	      }, 10);
	      //this.classEnter = true
	      console.log('enter');
	    },
	    afterEnter: function afterEnter() {
	      this.classEnter = false;
	      this.classBeforeEnter = false;
	    },
	    leave: function leave(el) {
	      //this.current = false;
	      this.classLeave = true;
	    },
	    afterLeave: function afterLeave(el) {
	      this.classLeave = false;
	    },
	    enterCanceled: function enterCanceled() {
	      this.classEnter = false;
	      this.classBeforeEnter = false;
	    },
	    leaveCanceled: function leaveCanceled() {
	      this.classLeave = false;
	    }
	  }
	};
	
	
	function tabToOject(tab) {
	  return typeof tab === 'string' ? { id: tab, title: tab } : { id: tab.id, title: tab.title };
	}

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return (_vm.animation) ? _c('transition', {
	    on: {
	      "leave": _vm.leave,
	      "after-leave": _vm.afterLeave,
	      "before-enter": _vm.beforeEnter,
	      "enter": _vm.enter,
	      "after-enter": _vm.afterEnter,
	      "enter-cancelled": _vm.enterCanceled,
	      "leave-cancelled": _vm.leaveCanceled
	    }
	  }, [_c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.selected),
	      expression: "selected"
	    }],
	    staticClass: "mdl-tabs__panel",
	    class: {
	      'mdl-tabs__panel--for-animation': _vm.animation, 'enter': _vm.classEnter, 'before-enter': _vm.classBeforeEnter, 'leave': _vm.classLeave
	    }
	  }, [_vm._t("default")], 2)]) : _c('div', {
	    staticClass: "mdl-tabs__panel",
	    class: {
	      'is-active': _vm.selected
	    }
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-41477409", module.exports)
	  }
	}

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* script */
	__vue_exports__ = __webpack_require__(64);
	
	/* template */
	var __vue_template__ = __webpack_require__(65);
	__vue_options__ = __vue_exports__ = __vue_exports__ || {};
	if (_typeof(__vue_exports__.default) === "object" || typeof __vue_exports__.default === "function") {
	  if (Object.keys(__vue_exports__).some(function (key) {
	    return key !== "default" && key !== "__esModule";
	  })) {
	    console.error("named exports are not supported in *.vue files.");
	  }
	  __vue_options__ = __vue_exports__ = __vue_exports__.default;
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options;
	}
	__vue_options__.__file = "/Users/oz/src/material-components/src/tooltip.vue";
	__vue_options__.render = __vue_template__.render;
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns;
	
	/* hot reload */
	if (false) {
	  (function () {
	    var hotAPI = require("vue-hot-reload-api");
	    hotAPI.install(require("vue"), false);
	    if (!hotAPI.compatible) return;
	    module.hot.accept();
	    if (!module.hot.data) {
	      hotAPI.createRecord("data-v-7844958e", __vue_options__);
	    } else {
	      hotAPI.reload("data-v-7844958e", __vue_options__);
	    }
	  })();
	}
	if (__vue_options__.functional) {
	  console.error("[vue-loader] tooltip.vue: functional components are not supported and should be defined in plain js files using render functions.");
	}
	
	module.exports = __vue_exports__;

/***/ },
/* 64 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	  props: {
	    target: {
	      required: true,
	      type: String
	    },
	    left: Boolean,
	    right: Boolean,
	    top: Boolean,
	    bottom: Boolean,
	
	    large: Boolean
	  },
	  mounted: function mounted() {
	    componentHandler.upgradeElement(this.$el, 'MaterialTooltip');
	  }
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "mdl-tooltip",
	    class: {
	      'mdl-tooltip--large': _vm.large,
	      'mdl-tooltip--left': _vm.left,
	      'mdl-tooltip--right': _vm.right,
	      'mdl-tooltip--top': _vm.top,
	      'mdl-tooltip--bottom': _vm.bottom,
	    },
	    attrs: {
	      "for": _vm.target
	    }
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-7844958e", module.exports)
	  }
	}

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* script */
	__vue_exports__ = __webpack_require__(67);
	
	/* template */
	var __vue_template__ = __webpack_require__(68);
	__vue_options__ = __vue_exports__ = __vue_exports__ || {};
	if (_typeof(__vue_exports__.default) === "object" || typeof __vue_exports__.default === "function") {
	  if (Object.keys(__vue_exports__).some(function (key) {
	    return key !== "default" && key !== "__esModule";
	  })) {
	    console.error("named exports are not supported in *.vue files.");
	  }
	  __vue_options__ = __vue_exports__ = __vue_exports__.default;
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options;
	}
	__vue_options__.__file = "/Users/oz/src/material-components/src/table/table.vue";
	__vue_options__.render = __vue_template__.render;
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns;
	
	/* hot reload */
	if (false) {
	  (function () {
	    var hotAPI = require("vue-hot-reload-api");
	    hotAPI.install(require("vue"), false);
	    if (!hotAPI.compatible) return;
	    module.hot.accept();
	    if (!module.hot.data) {
	      hotAPI.createRecord("data-v-3a9cc958", __vue_options__);
	    } else {
	      hotAPI.reload("data-v-3a9cc958", __vue_options__);
	    }
	  })();
	}
	if (__vue_options__.functional) {
	  console.error("[vue-loader] table.vue: functional components are not supported and should be defined in plain js files using render functions.");
	}
	
	module.exports = __vue_exports__;

/***/ },
/* 67 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	    props: {},
	
	    data: function data() {
	        return {
	            hasRowSelection: false,
	            numberOfRows: 0,
	            numberOfSelected: 0,
	            selectedRows: {},
	            data: []
	        };
	    },
	
	
	    watch: {
	        data: function data() {
	            this.numberOfRows = this.data.length;
	        }
	    },
	
	    methods: {
	        emitSelection: function emitSelection() {
	            var _this = this;
	
	            var selectedRows = [];
	
	            Object.keys(this.selectedRows).forEach(function (k) {
	                selectedRows.push(_this.selectedRows[k]);
	            });
	
	            this.$emit('select', selectedRows);
	        }
	    },
	
	    mounted: function mounted() {
	        componentHandler.upgradeElement(this.$el);
	    }
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('table', {
	    staticClass: "mdl-data-table mdl-js-data-table"
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-3a9cc958", module.exports)
	  }
	}

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* script */
	__vue_exports__ = __webpack_require__(70);
	
	/* template */
	var __vue_template__ = __webpack_require__(71);
	__vue_options__ = __vue_exports__ = __vue_exports__ || {};
	if (_typeof(__vue_exports__.default) === "object" || typeof __vue_exports__.default === "function") {
	  if (Object.keys(__vue_exports__).some(function (key) {
	    return key !== "default" && key !== "__esModule";
	  })) {
	    console.error("named exports are not supported in *.vue files.");
	  }
	  __vue_options__ = __vue_exports__ = __vue_exports__.default;
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options;
	}
	__vue_options__.__file = "/Users/oz/src/material-components/src/table/tableRow.vue";
	__vue_options__.render = __vue_template__.render;
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns;
	
	/* hot reload */
	if (false) {
	  (function () {
	    var hotAPI = require("vue-hot-reload-api");
	    hotAPI.install(require("vue"), false);
	    if (!hotAPI.compatible) return;
	    module.hot.accept();
	    if (!module.hot.data) {
	      hotAPI.createRecord("data-v-2fddf892", __vue_options__);
	    } else {
	      hotAPI.reload("data-v-2fddf892", __vue_options__);
	    }
	  })();
	}
	if (__vue_options__.functional) {
	  console.error("[vue-loader] tableRow.vue: functional components are not supported and should be defined in plain js files using render functions.");
	}
	
	module.exports = __vue_exports__;

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _utils = __webpack_require__(17);
	
	exports.default = {
	    props: {
	        selection: Boolean,
	        mItem: Object
	    },
	
	    computed: {
	        hasSelection: function hasSelection() {
	            return this.selection || this.headRow && this.parentTable.hasRowSelection;
	        },
	        classes: function classes() {
	            return {
	                'is-selected': this.checkbox
	            };
	        }
	    },
	
	    mounted: function mounted() {
	        this.parentTable = (0, _utils.getClosestVueParent)(this.$parent, 'mdl-data-table');
	
	        if (this.$el.parentNode.tagName.toLowerCase() === 'thead') {
	            this.headRow = true;
	        } else {
	            this.parentTable.numberOfRows++;
	            this.index = this.parentTable.numberOfRows;
	
	            if (this.selection) {
	                this.parentTable.hasRowSelection = true;
	            }
	
	            if (this.mItem) {
	                this.parentTable.data.push(this.mItem);
	            }
	        }
	    },
	
	
	    watch: {
	        mItem: function mItem(newValue, oldValue) {
	            this.parentTable.data[this.index] = this.mItem;
	            //this.handleMultipleSelection(newValue === oldValue);
	        }
	    },
	
	    methods: {
	        setSelectedRow: function setSelectedRow(value, index) {
	            if (value) {
	                this.parentTable.selectedRows[index] = this.parentTable.data[index];
	                ++this.parentTable.numberOfSelected;
	            } else {
	                delete this.parentTable.selectedRows[index];
	                --this.parentTable.numberOfSelected;
	            }
	        },
	        handleMultipleSelection: function handleMultipleSelection(value) {
	            var _this = this;
	
	            console.log(this.parentTable.$children);
	
	            this.parentTable.$children[1].$children.forEach(function (row, index) {
	                row.checkbox = value;
	                if (!row.headRow) {
	                    _this.setSelectedRow(value, index);
	
	                    //if(value) {
	                    //    row.checkbox = true;
	                    //}
	                }
	            });
	
	            this.parentTable.numberOfSelected = value ? this.parentTable.numberOfRows : 0;
	        },
	        handleSingleSelection: function handleSingleSelection(value) {
	            this.setSelectedRow(value, this.index - 1);
	            this.parentTable.$children[0].checkbox = this.parentTable.numberOfSelected === this.parentTable.numberOfRows;
	        },
	        select: function select() {
	            if (this.hasSelection) {
	                if (this.headRow) {
	                    this.handleMultipleSelection(this.checkbox);
	                } else {
	                    this.handleSingleSelection(this.checkbox);
	                }
	
	                this.parentTable.emitSelection();
	            }
	        }
	    },
	
	    data: function data() {
	        return {
	            parentTable: {},
	            headRow: false,
	            checkbox: false,
	            index: 0
	        };
	    }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('tr', {
	    class: _vm.classes
	  }, [(_vm.hasSelection) ? _c('m-table-cell', [_c('m-checkbox', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.checkbox),
	      expression: "checkbox"
	    }],
	    domProps: {
	      "value": (_vm.checkbox)
	    },
	    on: {
	      "change": _vm.select,
	      "input": function($event) {
	        _vm.checkbox = $event
	      }
	    }
	  })], 1) : _vm._e(), _vm._v(" "), _vm._t("default")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-2fddf892", module.exports)
	  }
	}

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* script */
	__vue_exports__ = __webpack_require__(73);
	
	/* template */
	var __vue_template__ = __webpack_require__(74);
	__vue_options__ = __vue_exports__ = __vue_exports__ || {};
	if (_typeof(__vue_exports__.default) === "object" || typeof __vue_exports__.default === "function") {
	  if (Object.keys(__vue_exports__).some(function (key) {
	    return key !== "default" && key !== "__esModule";
	  })) {
	    console.error("named exports are not supported in *.vue files.");
	  }
	  __vue_options__ = __vue_exports__ = __vue_exports__.default;
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options;
	}
	__vue_options__.__file = "/Users/oz/src/material-components/src/table/tableCell.vue";
	__vue_options__.render = __vue_template__.render;
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns;
	
	/* hot reload */
	if (false) {
	  (function () {
	    var hotAPI = require("vue-hot-reload-api");
	    hotAPI.install(require("vue"), false);
	    if (!hotAPI.compatible) return;
	    module.hot.accept();
	    if (!module.hot.data) {
	      hotAPI.createRecord("data-v-d596544c", __vue_options__);
	    } else {
	      hotAPI.reload("data-v-d596544c", __vue_options__);
	    }
	  })();
	}
	if (__vue_options__.functional) {
	  console.error("[vue-loader] tableCell.vue: functional components are not supported and should be defined in plain js files using render functions.");
	}
	
	module.exports = __vue_exports__;

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _utils = __webpack_require__(17);
	
	exports.default = {
	    computed: {
	        id: function id() {
	            return 't' + (0, _utils.genIdShort)();
	        }
	    },
	
	    props: {
	        tooltip: [String, Number],
	        numeric: {
	            type: Boolean,
	            default: false
	        }
	    }
	}; //
	//
	//
	//
	//
	//

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('td', {
	    class: {
	      'mdl-data-table__cell--non-numeric': !_vm.numeric
	    },
	    attrs: {
	      "id": _vm.id
	    }
	  }, [(_vm.tooltip) ? _c('m-tooltip', {
	    attrs: {
	      "target": _vm.id,
	      "top": ""
	    }
	  }, [_vm._v(_vm._s(_vm.tooltip))]) : _vm._e(), _vm._v(" "), _vm._t("default")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-d596544c", module.exports)
	  }
	}

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* script */
	__vue_exports__ = __webpack_require__(76);
	
	/* template */
	var __vue_template__ = __webpack_require__(77);
	__vue_options__ = __vue_exports__ = __vue_exports__ || {};
	if (_typeof(__vue_exports__.default) === "object" || typeof __vue_exports__.default === "function") {
	  if (Object.keys(__vue_exports__).some(function (key) {
	    return key !== "default" && key !== "__esModule";
	  })) {
	    console.error("named exports are not supported in *.vue files.");
	  }
	  __vue_options__ = __vue_exports__ = __vue_exports__.default;
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options;
	}
	__vue_options__.__file = "/Users/oz/src/material-components/src/table/tableHead.vue";
	__vue_options__.render = __vue_template__.render;
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns;
	
	/* hot reload */
	if (false) {
	  (function () {
	    var hotAPI = require("vue-hot-reload-api");
	    hotAPI.install(require("vue"), false);
	    if (!hotAPI.compatible) return;
	    module.hot.accept();
	    if (!module.hot.data) {
	      hotAPI.createRecord("data-v-ed36a950", __vue_options__);
	    } else {
	      hotAPI.reload("data-v-ed36a950", __vue_options__);
	    }
	  })();
	}
	if (__vue_options__.functional) {
	  console.error("[vue-loader] tableHead.vue: functional components are not supported and should be defined in plain js files using render functions.");
	}
	
	module.exports = __vue_exports__;

/***/ },
/* 76 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	
	exports.default = {
	    data: function data() {
	        return {};
	    }
	};

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('thead', [_vm._t("default")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-ed36a950", module.exports)
	  }
	}

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* script */
	__vue_exports__ = __webpack_require__(79);
	
	/* template */
	var __vue_template__ = __webpack_require__(80);
	__vue_options__ = __vue_exports__ = __vue_exports__ || {};
	if (_typeof(__vue_exports__.default) === "object" || typeof __vue_exports__.default === "function") {
	  if (Object.keys(__vue_exports__).some(function (key) {
	    return key !== "default" && key !== "__esModule";
	  })) {
	    console.error("named exports are not supported in *.vue files.");
	  }
	  __vue_options__ = __vue_exports__ = __vue_exports__.default;
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options;
	}
	__vue_options__.__file = "/Users/oz/src/material-components/src/table/tableH.vue";
	__vue_options__.render = __vue_template__.render;
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns;
	
	/* hot reload */
	if (false) {
	  (function () {
	    var hotAPI = require("vue-hot-reload-api");
	    hotAPI.install(require("vue"), false);
	    if (!hotAPI.compatible) return;
	    module.hot.accept();
	    if (!module.hot.data) {
	      hotAPI.createRecord("data-v-1a4a1020", __vue_options__);
	    } else {
	      hotAPI.reload("data-v-1a4a1020", __vue_options__);
	    }
	  })();
	}
	if (__vue_options__.functional) {
	  console.error("[vue-loader] tableH.vue: functional components are not supported and should be defined in plain js files using render functions.");
	}
	
	module.exports = __vue_exports__;

/***/ },
/* 79 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	
	exports.default = {
	    props: {
	        numeric: {
	            type: Boolean,
	            default: false
	        }
	    }
	};

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('th', {
	    class: {
	      'mdl-data-table__cell--non-numeric': !_vm.numeric
	    }
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-1a4a1020", module.exports)
	  }
	}

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* script */
	__vue_exports__ = __webpack_require__(82);
	
	/* template */
	var __vue_template__ = __webpack_require__(83);
	__vue_options__ = __vue_exports__ = __vue_exports__ || {};
	if (_typeof(__vue_exports__.default) === "object" || typeof __vue_exports__.default === "function") {
	  if (Object.keys(__vue_exports__).some(function (key) {
	    return key !== "default" && key !== "__esModule";
	  })) {
	    console.error("named exports are not supported in *.vue files.");
	  }
	  __vue_options__ = __vue_exports__ = __vue_exports__.default;
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options;
	}
	__vue_options__.__file = "/Users/oz/src/material-components/src/table/tableBody.vue";
	__vue_options__.render = __vue_template__.render;
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns;
	
	/* hot reload */
	if (false) {
	  (function () {
	    var hotAPI = require("vue-hot-reload-api");
	    hotAPI.install(require("vue"), false);
	    if (!hotAPI.compatible) return;
	    module.hot.accept();
	    if (!module.hot.data) {
	      hotAPI.createRecord("data-v-3162661a", __vue_options__);
	    } else {
	      hotAPI.reload("data-v-3162661a", __vue_options__);
	    }
	  })();
	}
	if (__vue_options__.functional) {
	  console.error("[vue-loader] tableBody.vue: functional components are not supported and should be defined in plain js files using render functions.");
	}
	
	module.exports = __vue_exports__;

/***/ },
/* 82 */
48,
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('tbody', [_vm._t("default")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-3162661a", module.exports)
	  }
	}

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* styles */
	__webpack_require__(85);
	
	/* script */
	__vue_exports__ = __webpack_require__(88);
	
	/* template */
	var __vue_template__ = __webpack_require__(91);
	__vue_options__ = __vue_exports__ = __vue_exports__ || {};
	if (_typeof(__vue_exports__.default) === "object" || typeof __vue_exports__.default === "function") {
	  if (Object.keys(__vue_exports__).some(function (key) {
	    return key !== "default" && key !== "__esModule";
	  })) {
	    console.error("named exports are not supported in *.vue files.");
	  }
	  __vue_options__ = __vue_exports__ = __vue_exports__.default;
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options;
	}
	__vue_options__.__file = "/Users/oz/src/material-components/src/dialog.vue";
	__vue_options__.render = __vue_template__.render;
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns;
	
	/* hot reload */
	if (false) {
	  (function () {
	    var hotAPI = require("vue-hot-reload-api");
	    hotAPI.install(require("vue"), false);
	    if (!hotAPI.compatible) return;
	    module.hot.accept();
	    if (!module.hot.data) {
	      hotAPI.createRecord("data-v-6f27b5e6", __vue_options__);
	    } else {
	      hotAPI.reload("data-v-6f27b5e6", __vue_options__);
	    }
	  })();
	}
	if (__vue_options__.functional) {
	  console.error("[vue-loader] dialog.vue: functional components are not supported and should be defined in plain js files using render functions.");
	}
	
	module.exports = __vue_exports__;

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(86);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(87)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-6f27b5e6!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./dialog.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-6f27b5e6!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./dialog.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.mdl-dialog-container {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content:center;\n  align-items: center;\n  top:0;\n  left: 0;\n  z-index: 10000;\n  background: rgba(0,0,0,0.3);\n}\n.mdl-dialog-container .mdl-dialog {\n  background-color:white;\n  padding: 1em;\n  color: black;\n  width: initial;\n  min-width: 280px;\n}\n", "", {"version":3,"sources":["/./src/dialog.vue?038bb386"],"names":[],"mappings":";AAuEA;EACA,gBAAA;EACA,YAAA;EACA,aAAA;EACA,cAAA;EACA,gBAAA;EACA,uBAAA;EACA,oBAAA;EACA,MAAA;EACA,QAAA;EACA,eAAA;EACA,4BAAA;CACA;AACA;EACA,uBAAA;EACA,aAAA;EACA,aAAA;EACA,eAAA;EACA,iBAAA;CACA","file":"dialog.vue","sourcesContent":["<template>\n    <div class=\"mdl-dialog-container\"\n         ref=\"out\"\n         @click=\"closeIfOutside\"\n         v-show=\"show\">\n        <div class=\"mdl-dialog\">\n            <div class=\"mdl-dialog__title\">{{title}}</div>\n            <div class=\"mdl-dialog__content\">\n                <slot></slot>\n            </div>\n            <div class=\"mdl-dialog__actions\" :class=\"actionsClasses\">\n                <slot name=\"actions\">\n                    <m-button @click.native.stop=\"close\">Close</m-button>\n                </slot>\n            </div>\n        </div>\n    </div>\n</template>\n\n<script>\nimport createFocusTrap from 'focus-trap'\nexport default {\n  computed: {\n    actionsClasses () {\n      return {\n        'mdl-dialog__actions--full-width': this.fullWidth\n      }\n    }\n  },\n  data () {\n    return {\n      show: false\n    }\n  },\n  props: {\n    title: {\n      type: String\n    },\n    fullWidth: Boolean,\n    noFocusTrap: {\n      type: Boolean,\n      default: false\n    }\n  },\n  mounted () {\n    if (!this.noFocusTrap) this._focusTrap = createFocusTrap(this.$el)\n  },\n  methods: {\n    open () {\n      this.show = true\n      if (this._focusTrap) this.$nextTick(() => this._focusTrap.activate())\n      this.$emit('open')\n    },\n    close () {\n      this.show = false\n      if (this._focusTrap) this._focusTrap.deactivate()\n      this.$emit('close')\n    },\n    closeIfOutside ({ target }) {\n      if (target === this.$refs.out) this.close()\n    }\n  },\n  watch: {\n    noFocusTrap (noFocusTrap) {\n      this._focusTrap = noFocusTrap ? null : createFocusTrap(this.$el)\n    }\n  }\n}\n</script>\n\n<style>\n.mdl-dialog-container {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content:center;\n  align-items: center;\n  top:0;\n  left: 0;\n  z-index: 10000;\n  background: rgba(0,0,0,0.3);\n}\n.mdl-dialog-container .mdl-dialog {\n  background-color:white;\n  padding: 1em;\n  color: black;\n  width: initial;\n  min-width: 280px;\n}\n</style>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(true) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if (media) {
			styleElement.setAttribute("media", media);
		}
	
		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _focusTrap = __webpack_require__(89);
	
	var _focusTrap2 = _interopRequireDefault(_focusTrap);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  computed: {
	    actionsClasses: function actionsClasses() {
	      return {
	        'mdl-dialog__actions--full-width': this.fullWidth
	      };
	    }
	  },
	  data: function data() {
	    return {
	      show: false
	    };
	  },
	
	  props: {
	    title: {
	      type: String
	    },
	    fullWidth: Boolean,
	    noFocusTrap: {
	      type: Boolean,
	      default: false
	    }
	  },
	  mounted: function mounted() {
	    if (!this.noFocusTrap) this._focusTrap = (0, _focusTrap2.default)(this.$el);
	  },
	
	  methods: {
	    open: function open() {
	      var _this = this;
	
	      this.show = true;
	      if (this._focusTrap) this.$nextTick(function () {
	        return _this._focusTrap.activate();
	      });
	      this.$emit('open');
	    },
	    close: function close() {
	      this.show = false;
	      if (this._focusTrap) this._focusTrap.deactivate();
	      this.$emit('close');
	    },
	    closeIfOutside: function closeIfOutside(_ref) {
	      var target = _ref.target;
	
	      if (target === this.$refs.out) this.close();
	    }
	  },
	  watch: {
	    noFocusTrap: function noFocusTrap(_noFocusTrap) {
	      this._focusTrap = _noFocusTrap ? null : (0, _focusTrap2.default)(this.$el);
	    }
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	var tabbable = __webpack_require__(90);
	
	var listeningFocusTrap = null;
	
	function focusTrap(element, userOptions) {
	  var tabbableNodes = [];
	  var nodeFocusedBeforeActivation = null;
	  var active = false;
	  var paused = false;
	
	  var container = (typeof element === 'string')
	    ? document.querySelector(element)
	    : element;
	
	  var config = userOptions || {};
	  config.returnFocusOnDeactivate = (userOptions && userOptions.returnFocusOnDeactivate !== undefined)
	    ? userOptions.returnFocusOnDeactivate
	    : true;
	  config.escapeDeactivates = (userOptions && userOptions.escapeDeactivates !== undefined)
	    ? userOptions.escapeDeactivates
	    : true;
	
	  var trap = {
	    activate: activate,
	    deactivate: deactivate,
	    pause: pause,
	    unpause: unpause,
	  };
	
	  return trap;
	
	  function activate(activateOptions) {
	    if (active) return;
	
	    var defaultedActivateOptions = {
	      onActivate: (activateOptions && activateOptions.onActivate !== undefined)
	        ? activateOptions.onActivate
	        : config.onActivate,
	    };
	
	    active = true;
	    paused = false;
	    nodeFocusedBeforeActivation = document.activeElement;
	
	    if (defaultedActivateOptions.onActivate) {
	      defaultedActivateOptions.onActivate();
	    }
	
	    addListeners();
	    return trap;
	  }
	
	  function deactivate(deactivateOptions) {
	    if (!active) return;
	
	    var defaultedDeactivateOptions = {
	      returnFocus: (deactivateOptions && deactivateOptions.returnFocus !== undefined)
	        ? deactivateOptions.returnFocus
	        : config.returnFocusOnDeactivate,
	      onDeactivate: (deactivateOptions && deactivateOptions.onDeactivate !== undefined)
	        ? deactivateOptions.onDeactivate
	        : config.onDeactivate,
	    };
	
	    removeListeners();
	
	    if (defaultedDeactivateOptions.onDeactivate) {
	      defaultedDeactivateOptions.onDeactivate();
	    }
	
	    if (defaultedDeactivateOptions.returnFocus) {
	      setTimeout(function () {
	        tryFocus(nodeFocusedBeforeActivation);
	      }, 0);
	    }
	
	    active = false;
	    paused = false;
	    return this;
	  }
	
	  function pause() {
	    if (paused || !active) return;
	    paused = true;
	    removeListeners();
	  }
	
	  function unpause() {
	    if (!paused || !active) return;
	    paused = false;
	    addListeners();
	  }
	
	  function addListeners() {
	    if (!active) return;
	
	    // There can be only one listening focus trap at a time
	    if (listeningFocusTrap) {
	      listeningFocusTrap.pause();
	    }
	    listeningFocusTrap = trap;
	
	    updateTabbableNodes();
	    tryFocus(firstFocusNode());
	    document.addEventListener('focus', checkFocus, true);
	    document.addEventListener('click', checkClick, true);
	    document.addEventListener('mousedown', checkPointerDown, true);
	    document.addEventListener('touchstart', checkPointerDown, true);
	    document.addEventListener('keydown', checkKey, true);
	
	    return trap;
	  }
	
	  function removeListeners() {
	    if (!active || listeningFocusTrap !== trap) return;
	
	    document.removeEventListener('focus', checkFocus, true);
	    document.removeEventListener('click', checkClick, true);
	    document.removeEventListener('mousedown', checkPointerDown, true);
	    document.removeEventListener('touchstart', checkPointerDown, true);
	    document.removeEventListener('keydown', checkKey, true);
	
	    listeningFocusTrap = null;
	
	    return trap;
	  }
	
	  function getNodeForOption(optionName) {
	    var optionValue = config[optionName];
	    var node = optionValue;
	    if (!optionValue) {
	      return null;
	    }
	    if (typeof optionValue === 'string') {
	      node = document.querySelector(optionValue);
	      if (!node) {
	        throw new Error('`' + optionName + '` refers to no known node');
	      }
	    }
	    if (typeof optionValue === 'function') {
	      node = optionValue();
	      if (!node) {
	        throw new Error('`' + optionName + '` did not return a node');
	      }
	    }
	    return node;
	  }
	
	  function firstFocusNode() {
	    var node;
	    if (getNodeForOption('initialFocus') !== null) {
	      node = getNodeForOption('initialFocus');
	    } else if (container.contains(document.activeElement)) {
	      node = document.activeElement;
	    } else {
	      node = tabbableNodes[0] || getNodeForOption('fallbackFocus');
	    }
	
	    if (!node) {
	      throw new Error('You can\'t have a focus-trap without at least one focusable element');
	    }
	
	    return node;
	  }
	
	  // This needs to be done on mousedown and touchstart instead of click
	  // so that it precedes the focus event
	  function checkPointerDown(e) {
	    if (config.clickOutsideDeactivates && !container.contains(e.target)) {
	      deactivate({ returnFocus: false });
	    }
	  }
	
	  function checkClick(e) {
	    if (config.clickOutsideDeactivates) return;
	    if (container.contains(e.target)) return;
	    e.preventDefault();
	    e.stopImmediatePropagation();
	  }
	
	  function checkFocus(e) {
	    if (container.contains(e.target)) return;
	    e.preventDefault();
	    e.stopImmediatePropagation();
	    // Checking for a blur method here resolves a Firefox issue (#15)
	    if (typeof e.target.blur === 'function') e.target.blur();
	  }
	
	  function checkKey(e) {
	    if (e.key === 'Tab' || e.keyCode === 9) {
	      handleTab(e);
	    }
	
	    if (config.escapeDeactivates !== false && isEscapeEvent(e)) {
	      deactivate();
	    }
	  }
	
	  function handleTab(e) {
	    e.preventDefault();
	    updateTabbableNodes();
	    var currentFocusIndex = tabbableNodes.indexOf(e.target);
	    var lastTabbableNode = tabbableNodes[tabbableNodes.length - 1];
	    var firstTabbableNode = tabbableNodes[0];
	
	    if (e.shiftKey) {
	      if (e.target === firstTabbableNode || tabbableNodes.indexOf(e.target) === -1) {
	        return tryFocus(lastTabbableNode);
	      }
	      return tryFocus(tabbableNodes[currentFocusIndex - 1]);
	    }
	
	    if (e.target === lastTabbableNode) return tryFocus(firstTabbableNode);
	
	    tryFocus(tabbableNodes[currentFocusIndex + 1]);
	  }
	
	  function updateTabbableNodes() {
	    tabbableNodes = tabbable(container);
	  }
	}
	
	function isEscapeEvent(e) {
	  return e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27;
	}
	
	function tryFocus(node) {
	  if (!node || !node.focus) return;
	  node.focus();
	  if (node.tagName.toLowerCase() === 'input') {
	    node.select();
	  }
	}
	
	module.exports = focusTrap;


/***/ },
/* 90 */
/***/ function(module, exports) {

	module.exports = function(el) {
	  var basicTabbables = [];
	  var orderedTabbables = [];
	
	  // A node is "available" if
	  // - it's computed style
	  var isUnavailable = createIsUnavailable();
	
	  var candidateSelectors = [
	    'input',
	    'select',
	    'a[href]',
	    'textarea',
	    'button',
	    '[tabindex]',
	  ];
	
	  var candidates = el.querySelectorAll(candidateSelectors);
	
	  var candidate, candidateIndex;
	  for (var i = 0, l = candidates.length; i < l; i++) {
	    candidate = candidates[i];
	    candidateIndex = candidate.tabIndex;
	
	    if (
	      candidateIndex < 0
	      || (candidate.tagName === 'INPUT' && candidate.type === 'hidden')
	      || candidate.disabled
	      || isUnavailable(candidate)
	    ) {
	      continue;
	    }
	
	    if (candidateIndex === 0) {
	      basicTabbables.push(candidate);
	    } else {
	      orderedTabbables.push({
	        tabIndex: candidateIndex,
	        node: candidate,
	      });
	    }
	  }
	
	  var tabbableNodes = orderedTabbables
	    .sort(function(a, b) {
	      return a.tabIndex - b.tabIndex;
	    })
	    .map(function(a) {
	      return a.node
	    });
	
	  Array.prototype.push.apply(tabbableNodes, basicTabbables);
	
	  return tabbableNodes;
	}
	
	function createIsUnavailable() {
	  // Node cache must be refreshed on every check, in case
	  // the content of the element has changed
	  var isOffCache = [];
	
	  // "off" means `display: none;`, as opposed to "hidden",
	  // which means `visibility: hidden;`. getComputedStyle
	  // accurately reflects visiblity in context but not
	  // "off" state, so we need to recursively check parents.
	
	  function isOff(node, nodeComputedStyle) {
	    if (node === document.documentElement) return false;
	
	    // Find the cached node (Array.prototype.find not available in IE9)
	    for (var i = 0, length = isOffCache.length; i < length; i++) {
	      if (isOffCache[i][0] === node) return isOffCache[i][1];
	    }
	
	    nodeComputedStyle = nodeComputedStyle || window.getComputedStyle(node);
	
	    var result = false;
	
	    if (nodeComputedStyle.display === 'none') {
	      result = true;
	    } else if (node.parentNode) {
	      result = isOff(node.parentNode);
	    }
	
	    isOffCache.push([node, result]);
	
	    return result;
	  }
	
	  return function isUnavailable(node) {
	    if (node === document.documentElement) return false;
	
	    var computedStyle = window.getComputedStyle(node);
	
	    if (isOff(node, computedStyle)) return true;
	
	    return computedStyle.visibility === 'hidden';
	  }
	}


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.show),
	      expression: "show"
	    }],
	    ref: "out",
	    staticClass: "mdl-dialog-container",
	    on: {
	      "click": _vm.closeIfOutside
	    }
	  }, [_c('div', {
	    staticClass: "mdl-dialog"
	  }, [_c('div', {
	    staticClass: "mdl-dialog__title"
	  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('div', {
	    staticClass: "mdl-dialog__content"
	  }, [_vm._t("default")], 2), _vm._v(" "), _c('div', {
	    staticClass: "mdl-dialog__actions",
	    class: _vm.actionsClasses
	  }, [_vm._t("actions", [_c('m-button', {
	    nativeOn: {
	      "click": function($event) {
	        $event.stopPropagation();
	        _vm.close($event)
	      }
	    }
	  }, [_vm._v("Close")])])], 2)])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-6f27b5e6", module.exports)
	  }
	}

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* script */
	__vue_exports__ = __webpack_require__(93);
	
	/* template */
	var __vue_template__ = __webpack_require__(94);
	__vue_options__ = __vue_exports__ = __vue_exports__ || {};
	if (_typeof(__vue_exports__.default) === "object" || typeof __vue_exports__.default === "function") {
	  if (Object.keys(__vue_exports__).some(function (key) {
	    return key !== "default" && key !== "__esModule";
	  })) {
	    console.error("named exports are not supported in *.vue files.");
	  }
	  __vue_options__ = __vue_exports__ = __vue_exports__.default;
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options;
	}
	__vue_options__.__file = "/Users/oz/src/material-components/src/card.vue";
	__vue_options__.render = __vue_template__.render;
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns;
	
	/* hot reload */
	if (false) {
	  (function () {
	    var hotAPI = require("vue-hot-reload-api");
	    hotAPI.install(require("vue"), false);
	    if (!hotAPI.compatible) return;
	    module.hot.accept();
	    if (!module.hot.data) {
	      hotAPI.createRecord("data-v-5c2a33d6", __vue_options__);
	    } else {
	      hotAPI.reload("data-v-5c2a33d6", __vue_options__);
	    }
	  })();
	}
	if (__vue_options__.functional) {
	  console.error("[vue-loader] card.vue: functional components are not supported and should be defined in plain js files using render functions.");
	}
	
	module.exports = __vue_exports__;

/***/ },
/* 93 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	
	var slots = ['title', 'subtitle', 'supportingText', 'media', 'actions', 'menu'];
	
	exports.default = {
	  props: {
	    title: String,
	    menu: String,
	    actions: String,
	    actionsTarget: {
	      default: '_self',
	      type: String
	    },
	    actionsText: String,
	    media: String,
	    subtitle: String,
	    supportingText: String
	  },
	
	  methods: {
	    triggerMenuEvent: function triggerMenuEvent() {
	      this.$emit(this.menu);
	    },
	    triggerActionsEvent: function triggerActionsEvent() {
	      this.$emit(this.actions);
	    }
	  },
	
	  mounted: function mounted() {
	    var _this = this;
	
	    slots.forEach(function (slot, pos) {
	      if (_this[slot] === true) {
	        var el = _this.$el.children[pos];
	        if (!el || !_this.$el.attributes.getNamedItem('slot')) {
	          _this[slot] = '';
	        }
	      }
	    });
	  }
	};

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "mdl-card mdl-shadow--2dp"
	  }, [(_vm.title) ? _vm._t("title", [_c('div', {
	    staticClass: "mdl-card__title mdl-card--expand"
	  }, [_c('h2', {
	    staticClass: "mdl-card__title-text"
	  }, [_vm._v(_vm._s(_vm.title))])])]) : _vm._e(), _vm._v(" "), (_vm.subtitle) ? _vm._t("subtitle", [_c('div', {
	    staticClass: "mdl-card__subtitle-text"
	  }, [_vm._v(_vm._s(_vm.subtitle))])]) : _vm._e(), _vm._v(" "), (_vm.supportingText) ? _vm._t("supporting-text", [_c('div', {
	    staticClass: "mdl-card__supporting-text"
	  }, [_vm._v(_vm._s(_vm.supportingText))])]) : _vm._e(), _vm._v(" "), (_vm.media) ? _vm._t("media", [_c('div', {
	    staticClass: "mdl-card__media"
	  }, [_c('img', {
	    attrs: {
	      "src": _vm.media
	    }
	  })])]) : _vm._e(), _vm._v(" "), (_vm.actions) ? _vm._t("actions", [_c('div', {
	    staticClass: "mdl-card__actions mdl-card--border"
	  }, [_c('m-button', {
	    staticClass: "mdl-js-ripple-effect",
	    attrs: {
	      "colored": "colored"
	    },
	    nativeOn: {
	      "click": function($event) {
	        _vm.triggerActionsEvent($event)
	      }
	    }
	  }, [_vm._v(_vm._s(_vm.actionsText))])], 1)]) : _vm._e(), _vm._v(" "), (_vm.menu) ? _vm._t("menu", [_c('div', {
	    staticClass: "mdl-card__menu"
	  }, [_c('m-button', {
	    attrs: {
	      "icon": "icon"
	    },
	    nativeOn: {
	      "click": function($event) {
	        _vm.triggerMenuEvent($event)
	      }
	    }
	  }, [_c('i', {
	    staticClass: "material-icons"
	  }, [_vm._v("share")])])], 1)]) : _vm._e()], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-5c2a33d6", module.exports)
	  }
	}

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* script */
	__vue_exports__ = __webpack_require__(96);
	
	/* template */
	var __vue_template__ = __webpack_require__(97);
	__vue_options__ = __vue_exports__ = __vue_exports__ || {};
	if (_typeof(__vue_exports__.default) === "object" || typeof __vue_exports__.default === "function") {
	  if (Object.keys(__vue_exports__).some(function (key) {
	    return key !== "default" && key !== "__esModule";
	  })) {
	    console.error("named exports are not supported in *.vue files.");
	  }
	  __vue_options__ = __vue_exports__ = __vue_exports__.default;
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options;
	}
	__vue_options__.__file = "/Users/oz/src/material-components/src/chip.vue";
	__vue_options__.render = __vue_template__.render;
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns;
	
	/* hot reload */
	if (false) {
	  (function () {
	    var hotAPI = require("vue-hot-reload-api");
	    hotAPI.install(require("vue"), false);
	    if (!hotAPI.compatible) return;
	    module.hot.accept();
	    if (!module.hot.data) {
	      hotAPI.createRecord("data-v-35840151", __vue_options__);
	    } else {
	      hotAPI.reload("data-v-35840151", __vue_options__);
	    }
	  })();
	}
	if (__vue_options__.functional) {
	  console.error("[vue-loader] chip.vue: functional components are not supported and should be defined in plain js files using render functions.");
	}
	
	module.exports = __vue_exports__;

/***/ },
/* 96 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	  data: function data() {
	    return {
	      deletable: !!this._events.delete
	    };
	  },
	
	
	  computed: {
	    hasContact: function hasContact() {
	      return this.contact || this.contactImage;
	    },
	    chipClasses: function chipClasses() {
	      return {
	        'mdl-chip--contact': this.hasContact,
	        'mdl-chip--deletable': this.deletable
	      };
	    }
	  },
	
	  props: {
	    deleteIcon: {
	      type: String,
	      default: 'cancel'
	    },
	    contactImage: String,
	    contact: String
	  }
	};

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('span', {
	    staticClass: "mdl-chip",
	    class: _vm.chipClasses
	  }, [_vm._t("chip-contact", [(_vm.contact) ? _c('span', {
	    staticClass: "mdl-chip__contact mdl-color--teal mdl-color-text--white"
	  }, [_vm._v(_vm._s(_vm.contact))]) : _vm._e(), _vm._v(" "), (_vm.contactImage) ? _c('img', {
	    staticClass: "mdl-chip__contact",
	    attrs: {
	      "src": _vm.contactImage
	    }
	  }) : _vm._e()]), _vm._v(" "), _c('span', {
	    staticClass: "mdl-chip__text"
	  }, [_vm._t("default")], 2), _vm._v(" "), (_vm.deletable) ? _c('a', {
	    staticClass: "mdl-chip__action",
	    attrs: {
	      "href": "#"
	    },
	    on: {
	      "click": function($event) {
	        $event.preventDefault();
	        _vm.$emit('delete')
	      }
	    }
	  }, [_c('i', {
	    staticClass: "material-icons"
	  }, [_vm._v(_vm._s(_vm.deleteIcon))])]) : _vm._e()], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-35840151", module.exports)
	  }
	}

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* script */
	__vue_exports__ = __webpack_require__(99);
	
	/* template */
	var __vue_template__ = __webpack_require__(100);
	__vue_options__ = __vue_exports__ = __vue_exports__ || {};
	if (_typeof(__vue_exports__.default) === "object" || typeof __vue_exports__.default === "function") {
	  if (Object.keys(__vue_exports__).some(function (key) {
	    return key !== "default" && key !== "__esModule";
	  })) {
	    console.error("named exports are not supported in *.vue files.");
	  }
	  __vue_options__ = __vue_exports__ = __vue_exports__.default;
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options;
	}
	__vue_options__.__file = "/Users/oz/src/material-components/src/list/list.vue";
	__vue_options__.render = __vue_template__.render;
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns;
	
	/* hot reload */
	if (false) {
	  (function () {
	    var hotAPI = require("vue-hot-reload-api");
	    hotAPI.install(require("vue"), false);
	    if (!hotAPI.compatible) return;
	    module.hot.accept();
	    if (!module.hot.data) {
	      hotAPI.createRecord("data-v-1179e23a", __vue_options__);
	    } else {
	      hotAPI.reload("data-v-1179e23a", __vue_options__);
	    }
	  })();
	}
	if (__vue_options__.functional) {
	  console.error("[vue-loader] list.vue: functional components are not supported and should be defined in plain js files using render functions.");
	}
	
	module.exports = __vue_exports__;

/***/ },
/* 99 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	
	exports.default = {};

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('ul', {
	    staticClass: "mdl-list"
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-1179e23a", module.exports)
	  }
	}

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* script */
	__vue_exports__ = __webpack_require__(102);
	
	/* template */
	var __vue_template__ = __webpack_require__(103);
	__vue_options__ = __vue_exports__ = __vue_exports__ || {};
	if (_typeof(__vue_exports__.default) === "object" || typeof __vue_exports__.default === "function") {
	  if (Object.keys(__vue_exports__).some(function (key) {
	    return key !== "default" && key !== "__esModule";
	  })) {
	    console.error("named exports are not supported in *.vue files.");
	  }
	  __vue_options__ = __vue_exports__ = __vue_exports__.default;
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options;
	}
	__vue_options__.__file = "/Users/oz/src/material-components/src/list/listItem.vue";
	__vue_options__.render = __vue_template__.render;
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns;
	
	/* hot reload */
	if (false) {
	  (function () {
	    var hotAPI = require("vue-hot-reload-api");
	    hotAPI.install(require("vue"), false);
	    if (!hotAPI.compatible) return;
	    module.hot.accept();
	    if (!module.hot.data) {
	      hotAPI.createRecord("data-v-ddd14226", __vue_options__);
	    } else {
	      hotAPI.reload("data-v-ddd14226", __vue_options__);
	    }
	  })();
	}
	if (__vue_options__.functional) {
	  console.error("[vue-loader] listItem.vue: functional components are not supported and should be defined in plain js files using render functions.");
	}
	
	module.exports = __vue_exports__;

/***/ },
/* 102 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	    props: {
	        icon: String,
	        iconAvatar: String,
	        actionIcon: String,
	        text: [String, Number],
	        subTitle: [String, Number]
	    },
	
	    computed: {
	        showIcon: function showIcon() {
	            return this.icon && !this.iconAvatar ? this.icon : this.iconAvatar;
	        },
	        cssClasses: function cssClasses() {
	            return {
	                'mdl-list__item-icon': !!this.icon,
	                'mdl-list__item-avatar': !!this.iconAvatar && !this.icon
	            };
	        },
	        liClasses: function liClasses() {
	            return {
	                'mdl-list__item--three-line': !!this.text,
	                'mdl-list__item--two-line': !!this.subTitle
	            };
	        }
	    },
	
	    data: function data() {
	        return {};
	    }
	};

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('li', {
	    staticClass: "mdl-list__item",
	    class: _vm.liClasses
	  }, [_c('span', {
	    staticClass: "mdl-list__item-primary-content"
	  }, [(_vm.icon || _vm.iconAvatar) ? _c('i', {
	    staticClass: "material-icons",
	    class: _vm.cssClasses
	  }, [_vm._v(_vm._s(_vm.showIcon))]) : _vm._e(), _vm._v(" "), (_vm.iconAvatar) ? _c('span', [_vm._t("default")], 2) : _vm._t("default"), _vm._v(" "), (_vm.subTitle) ? _c('span', {
	    staticClass: "mdl-list__item-sub-title"
	  }, [_vm._v(_vm._s(_vm.subTitle))]) : _vm._e(), _vm._v(" "), (_vm.text) ? _c('span', {
	    staticClass: "mdl-list__item-text-body"
	  }, [_vm._v(_vm._s(_vm.text))]) : _vm._e()], 2), _vm._v(" "), _c('span', {
	    staticClass: "mdl-list__item-secondary-content"
	  }, [_vm._t("action")], 2)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-ddd14226", module.exports)
	  }
	}

/***/ }
/******/ ])))
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBhNmIwMGI4OTUzODAzZWEzYWZkOCIsIndlYnBhY2s6Ly8vLi9zcmMvbGliLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXJlY3RpdmVzL3NldHVwLW1kbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGV4dGZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly8vdGV4dGZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdGV4dGZpZWxkLnZ1ZT8xYmIzIiwid2VicGFjazovLy8uL3NyYy9idXR0b24udnVlIiwid2VicGFjazovLy9idXR0b24udnVlIiwid2VicGFjazovLy8uL3NyYy9idXR0b24udnVlPzY1YTgiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NuYWNrYmFyLnZ1ZSIsIndlYnBhY2s6Ly8vc25hY2tiYXIudnVlIiwid2VicGFjazovLy8uL3NyYy9zbmFja2Jhci52dWU/NGEyMyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VsZWN0L3NlbGVjdC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlbGVjdC9zZWxlY3QudnVlP2Y5OGUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlbGVjdC9zZWxlY3QudnVlPzc5MDYiLCJ3ZWJwYWNrOi8vLy4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vL3NlbGVjdC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9zZWxlY3Qvc2VsZWN0SXRlbS52dWUiLCJ3ZWJwYWNrOi8vL3NlbGVjdEl0ZW0udnVlIiwid2VicGFjazovLy8uL3NyYy9zZWxlY3Qvc2VsZWN0SXRlbS52dWU/NTcwOSIsIndlYnBhY2s6Ly8vLi9zcmMvc2VsZWN0L3NlbGVjdC52dWU/ZTRmZSIsIndlYnBhY2s6Ly8vLi9zcmMvc2xpZGVyLnZ1ZSIsIndlYnBhY2s6Ly8vc2xpZGVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvc2xpZGVyLnZ1ZT82MzQzIiwid2VicGFjazovLy8uL3NyYy9iYWRnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvZ3Jlc3MudnVlIiwid2VicGFjazovLy9wcm9ncmVzcy52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2dyZXNzLnZ1ZT8wMTZhIiwid2VicGFjazovLy8uL3NyYy9zcGlubmVyLnZ1ZSIsIndlYnBhY2s6Ly8vc3Bpbm5lci52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NwaW5uZXIudnVlPzQ2NGIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RvZ2dsZXMvY2hlY2tib3gudnVlIiwid2VicGFjazovLy9jaGVja2JveC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RvZ2dsZXMvY2hlY2tib3gudnVlP2E0ZWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RvZ2dsZXMvcmFkaW8udnVlIiwid2VicGFjazovLy9yYWRpby52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RvZ2dsZXMvcmFkaW8udnVlPzQwNWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RvZ2dsZXMvc3dpdGNoLnZ1ZSIsIndlYnBhY2s6Ly8vc3dpdGNoLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdG9nZ2xlcy9zd2l0Y2gudnVlPzU3M2MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RvZ2dsZXMvaWNvbi52dWUiLCJ3ZWJwYWNrOi8vL2ljb24udnVlIiwid2VicGFjazovLy8uL3NyYy90b2dnbGVzL2ljb24udnVlPzgxNDUiLCJ3ZWJwYWNrOi8vLy4vc3JjL21lbnUvbWVudS52dWUiLCJ3ZWJwYWNrOi8vL21lbnUudnVlIiwid2VicGFjazovLy8uL3NyYy9tZW51L21lbnUudnVlPzc2M2QiLCJ3ZWJwYWNrOi8vLy4vc3JjL21lbnUvaXRlbS52dWUiLCJ3ZWJwYWNrOi8vL2l0ZW0udnVlIiwid2VicGFjazovLy8uL3NyYy9tZW51L2l0ZW0udnVlPzAxYTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RhYnMvdGFicy52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RhYnMvdGFicy52dWU/YzJhMCIsIndlYnBhY2s6Ly8vLi9zcmMvdGFicy90YWJzLnZ1ZT82YzJiIiwid2VicGFjazovLy90YWJzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdGFicy90YWItbC52dWUiLCJ3ZWJwYWNrOi8vL3RhYi1sLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdGFicy90YWItbC52dWU/YzM5ZCIsIndlYnBhY2s6Ly8vLi9zcmMvdGFicy90YWJzLnZ1ZT9hMWQ4Iiwid2VicGFjazovLy8uL3NyYy90YWJzL3RhYi52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RhYnMvdGFiLnZ1ZT9mOGIzIiwid2VicGFjazovLy8uL3NyYy90YWJzL3RhYi52dWU/YjNlYiIsIndlYnBhY2s6Ly8vdGFiLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdGFicy90YWIudnVlP2E2MTIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rvb2x0aXAudnVlIiwid2VicGFjazovLy90b29sdGlwLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdG9vbHRpcC52dWU/ODgzMCIsIndlYnBhY2s6Ly8vLi9zcmMvdGFibGUvdGFibGUudnVlIiwid2VicGFjazovLy90YWJsZS52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RhYmxlL3RhYmxlLnZ1ZT8xMDM4Iiwid2VicGFjazovLy8uL3NyYy90YWJsZS90YWJsZVJvdy52dWUiLCJ3ZWJwYWNrOi8vL3RhYmxlUm93LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdGFibGUvdGFibGVSb3cudnVlPzYyYTkiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RhYmxlL3RhYmxlQ2VsbC52dWUiLCJ3ZWJwYWNrOi8vL3RhYmxlQ2VsbC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RhYmxlL3RhYmxlQ2VsbC52dWU/MDI5NCIsIndlYnBhY2s6Ly8vLi9zcmMvdGFibGUvdGFibGVIZWFkLnZ1ZSIsIndlYnBhY2s6Ly8vdGFibGVIZWFkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdGFibGUvdGFibGVIZWFkLnZ1ZT9hMWNkIiwid2VicGFjazovLy8uL3NyYy90YWJsZS90YWJsZUgudnVlIiwid2VicGFjazovLy90YWJsZUgudnVlIiwid2VicGFjazovLy8uL3NyYy90YWJsZS90YWJsZUgudnVlP2IwM2IiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RhYmxlL3RhYmxlQm9keS52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RhYmxlL3RhYmxlQm9keS52dWU/YzY0ZSIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9nLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9nLnZ1ZT85MDdhIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2cudnVlP2JhZGEiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vZGlhbG9nLnZ1ZSIsIndlYnBhY2s6Ly8vLi9+L2ZvY3VzLXRyYXAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi90YWJiYWJsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9nLnZ1ZT9hMmI4Iiwid2VicGFjazovLy8uL3NyYy9jYXJkLnZ1ZSIsIndlYnBhY2s6Ly8vY2FyZC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhcmQudnVlPzYyMzMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoaXAudnVlIiwid2VicGFjazovLy9jaGlwLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY2hpcC52dWU/MzdiYiIsIndlYnBhY2s6Ly8vLi9zcmMvbGlzdC9saXN0LnZ1ZSIsIndlYnBhY2s6Ly8vbGlzdC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpc3QvbGlzdC52dWU/OGYwMSIsIndlYnBhY2s6Ly8vLi9zcmMvbGlzdC9saXN0SXRlbS52dWUiLCJ3ZWJwYWNrOi8vL2xpc3RJdGVtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvbGlzdC9saXN0SXRlbS52dWU/NTY3MCJdLCJuYW1lcyI6WyJjb21wb25lbnRzIiwiTVRleHRmaWVsZCIsIk1CdXR0b24iLCJNU25hY2tiYXIiLCJNU2VsZWN0IiwiTVNsaWRlciIsIk1CYWRnZSIsIk1Qcm9ncmVzcyIsIk1TcGlubmVyIiwiTUNoZWNrYm94IiwiTVJhZGlvIiwiTVN3aXRjaCIsIk1JY29uVG9nZ2xlIiwiTU1lbnUiLCJNTWVudUl0ZW0iLCJNVGFicyIsIk1UYWIiLCJNVG9vbHRpcCIsIk1UYWJsZSIsIk1UYWJsZVJvdyIsIk1UYWJsZUNlbGwiLCJNVGFibGVIZWFkIiwiTVRhYmxlSCIsIk1UYWJsZUJvZHkiLCJNRGlhbG9nIiwiTUNhcmQiLCJNQ2hpcCIsIk1MaXN0IiwiTUxpc3RJdGVtIiwiZGlyZWN0aXZlcyIsIlNldHVwTWRsIiwibW9kdWxlIiwiZXhwb3J0cyIsImluc3RhbGwiLCJWdWUiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsIm5hbWUiLCJjb21wb25lbnQiLCJkaXJlY3RpdmUiLCJzZXR1cCIsImVsIiwiY29tcG9uZW50SGFuZGxlciIsInVwZ3JhZGVFbGVtZW50cyIsIl9fdnVlX2V4cG9ydHNfXyIsIl9fdnVlX29wdGlvbnNfXyIsIl9fdnVlX3N0eWxlc19fIiwicmVxdWlyZSIsIl9fdnVlX3RlbXBsYXRlX18iLCJkZWZhdWx0Iiwic29tZSIsImtleSIsImNvbnNvbGUiLCJlcnJvciIsIm9wdGlvbnMiLCJfX2ZpbGUiLCJyZW5kZXIiLCJzdGF0aWNSZW5kZXJGbnMiLCJob3RBUEkiLCJjb21wYXRpYmxlIiwiaG90IiwiYWNjZXB0IiwiZGF0YSIsImNyZWF0ZVJlY29yZCIsInJlbG9hZCIsImZ1bmN0aW9uYWwiLCJnZW5JZCIsImdlbklkU2hvcnQiLCJyZW1vdmVDbGFzcyIsImdldENsb3Nlc3RWdWVQYXJlbnQiLCJkZWJvdW5jZSIsImVzY2FwZVJlZ0V4cCIsInByZXBhcmVPcHRpb25WYWx1ZSIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInN1YnN0cmluZyIsIm9iaiIsImNscyIsImNsYXNzZXMiLCJjbGFzc05hbWUiLCJzcGxpdCIsImkiLCJsZW5ndGgiLCJzcGxpY2UiLCJqb2luIiwiJHBhcmVudCIsImNzc0NsYXNzIiwiJGVsIiwiX3VpZCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiZm4iLCJkZWxheSIsInRpbWVyIiwiYXJncyIsImNsZWFySW50ZXJ2YWwiLCJzZWxmIiwic2V0VGltZW91dCIsImFwcGx5Iiwic3RyIiwicmVwbGFjZSIsInZhbCIsInRyeUZyb21OYW1lIiwidmFsdWUiLCJlcnIiLCJwcm9wcyIsIlN0cmluZyIsIk51bWJlciIsIm92ZXJsYXAiLCJCb29sZWFuIiwiaWNvbiIsIm5vQmFja2dyb3VuZCIsImhpZGUiLCJocmVmIiwidGFnIiwidHlwZSIsImNyZWF0ZUVsZW1lbnQiLCJhdHRycyIsImNsYXNzIiwiJHNsb3RzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENBOzs7O0FBR0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUdBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7OztBQWhDQTtBQWtDQSxLQUFNQSxhQUFhO0FBQ2pCQyxrQ0FEaUI7QUFFakJDLDRCQUZpQjtBQUdqQkMsZ0NBSGlCO0FBSWpCQyw0QkFKaUI7QUFLakJDLDRCQUxpQjtBQU1qQkMsMEJBTmlCO0FBT2pCQyxnQ0FQaUI7QUFRakJDLDhCQVJpQjtBQVNqQkMsZ0NBVGlCO0FBVWpCQywwQkFWaUI7QUFXakJDLDRCQVhpQjtBQVlqQkMsOEJBWmlCO0FBYWpCQyx3QkFiaUI7QUFjakJDLDRCQWRpQjtBQWVqQkMsd0JBZmlCO0FBZ0JqQkMsc0JBaEJpQjtBQWlCakJDLDhCQWpCaUI7O0FBbUJqQkMsMEJBbkJpQjtBQW9CakJDLGdDQXBCaUI7QUFxQmpCQyxrQ0FyQmlCO0FBc0JqQkMsa0NBdEJpQjtBQXVCakJDLDRCQXZCaUI7QUF3QmpCQyxrQ0F4QmlCOztBQTBCakJDLDRCQTFCaUI7QUEyQmpCQyx3QkEzQmlCO0FBNEJqQkMsd0JBNUJpQjs7QUE4QmpCQyx3QkE5QmlCO0FBK0JqQkM7QUEvQmlCLEVBQW5COztBQWZBOzs7QUFpREEsS0FBTUMsYUFBYTtBQUNqQkM7QUFEaUIsRUFBbkI7O0FBSUFDLFFBQU9DLE9BQVAsR0FBaUI7QUFDZkMsVUFEZSxtQkFDTkMsR0FETSxFQUNEO0FBQ1pDLFlBQU9DLElBQVAsQ0FBWXBDLFVBQVosRUFBd0JxQyxPQUF4QixDQUFnQyxVQUFDQyxJQUFEO0FBQUEsY0FBVUosSUFBSUssU0FBSixDQUFjRCxJQUFkLEVBQW9CdEMsV0FBV3NDLElBQVgsQ0FBcEIsQ0FBVjtBQUFBLE1BQWhDO0FBQ0FILFlBQU9DLElBQVAsQ0FBWVAsVUFBWixFQUF3QlEsT0FBeEIsQ0FBZ0MsVUFBQ0MsSUFBRDtBQUFBLGNBQVVKLElBQUlNLFNBQUosQ0FBY0YsSUFBZCxFQUFvQlQsV0FBV1MsSUFBWCxDQUFwQixDQUFWO0FBQUEsTUFBaEM7QUFDRDtBQUpjLEVBQWpCLEM7Ozs7Ozs7Ozs7O21CQzFFZTtBQUNiRyxRQURhLGlCQUNOQyxFQURNLEVBQ0Y7QUFDVEMsc0JBQWlCQyxlQUFqQixDQUFpQ0YsRUFBakM7QUFDRDtBQUhZLEU7Ozs7Ozs7Ozs7QUNBZixLQUFJRyxlQUFKLEVBQXFCQyxlQUFyQjtBQUNBLEtBQUlDLGlCQUFpQixFQUFyQjs7QUFFQTtBQUNBRixtQkFBa0IsbUJBQUFHLENBQVEsQ0FBUixDQUFsQjs7QUFFQTtBQUNBLEtBQUlDLG1CQUFtQixtQkFBQUQsQ0FBUSxDQUFSLENBQXZCO0FBQ0FGLG1CQUFrQkQsa0JBQWtCQSxtQkFBbUIsRUFBdkQ7QUFDQSxLQUNFLFFBQU9BLGdCQUFnQkssT0FBdkIsTUFBbUMsUUFBbkMsSUFDQSxPQUFPTCxnQkFBZ0JLLE9BQXZCLEtBQW1DLFVBRnJDLEVBR0U7QUFDRixPQUFJZixPQUFPQyxJQUFQLENBQVlTLGVBQVosRUFBNkJNLElBQTdCLENBQWtDLFVBQVVDLEdBQVYsRUFBZTtBQUFFLFlBQU9BLFFBQVEsU0FBUixJQUFxQkEsUUFBUSxZQUFwQztBQUFrRCxJQUFyRyxDQUFKLEVBQTRHO0FBQUNDLGFBQVFDLEtBQVIsQ0FBYyxpREFBZDtBQUFpRTtBQUM5S1IscUJBQWtCRCxrQkFBa0JBLGdCQUFnQkssT0FBcEQ7QUFDQztBQUNELEtBQUksT0FBT0osZUFBUCxLQUEyQixVQUEvQixFQUEyQztBQUN6Q0EscUJBQWtCQSxnQkFBZ0JTLE9BQWxDO0FBQ0Q7QUFDRFQsaUJBQWdCVSxNQUFoQixHQUF5QixxREFBekI7QUFDQVYsaUJBQWdCVyxNQUFoQixHQUF5QlIsaUJBQWlCUSxNQUExQztBQUNBWCxpQkFBZ0JZLGVBQWhCLEdBQWtDVCxpQkFBaUJTLGVBQW5EOztBQUVBO0FBQ0EsS0FBSSxLQUFKLEVBQWdCO0FBQUMsSUFBQyxZQUFZO0FBQzVCLFNBQUlDLFNBQVNYLFFBQVEsb0JBQVIsQ0FBYjtBQUNBVyxZQUFPMUIsT0FBUCxDQUFlZSxRQUFRLEtBQVIsQ0FBZixFQUErQixLQUEvQjtBQUNBLFNBQUksQ0FBQ1csT0FBT0MsVUFBWixFQUF3QjtBQUN4QjdCLFlBQU84QixHQUFQLENBQVdDLE1BQVg7QUFDQSxTQUFJLENBQUMvQixPQUFPOEIsR0FBUCxDQUFXRSxJQUFoQixFQUFzQjtBQUNwQkosY0FBT0ssWUFBUCxDQUFvQixpQkFBcEIsRUFBdUNsQixlQUF2QztBQUNELE1BRkQsTUFFTztBQUNMYSxjQUFPTSxNQUFQLENBQWMsaUJBQWQsRUFBaUNuQixlQUFqQztBQUNEO0FBQ0YsSUFWZ0I7QUFVWjtBQUNMLEtBQUlBLGdCQUFnQm9CLFVBQXBCLEVBQWdDO0FBQUNiLFdBQVFDLEtBQVIsQ0FBYyxxSUFBZDtBQUFxSjs7QUFFdEx2QixRQUFPQyxPQUFQLEdBQWlCYSxlQUFqQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7Ozs7bUJBR0E7O2lCQUlBO0FBSEE7O2lCQUlBOzthQUVBO2dCQUdBO0FBSkE7OztpQkFRQTtBQUhBOztTQUtBOzs7aUJBSUE7QUFIQTs7O3VCQUtBO2FBQ0E7aUJBQ0E7Z0JBR0E7QUFOQTs7O3VCQVFBO2FBQ0E7aUJBQ0E7Z0JBR0E7QUFOQTs7O3VCQVFBO2FBQ0E7aUJBQ0E7Z0JBR0E7QUFOQTs7WUFPQTtjQUNBO1lBQ0E7ZUFDQTsyQkFHQTtBQWpEQTs7O3FDQW1EQTtpQ0FDQTtBQUNBO2lDQUNBO3dCQUNBO0FBRUE7QUFQQTs7b0RBU0E7d0NBQ0E7QUFDQTs2QkFDQTs4QkFDQTtjQUNBO0FBRUE7K0JBQ0E7OEJBQ0E7Y0FDQTtBQUVBOzJCQUNBOzhCQUNBO2NBQ0E7QUFFQTtBQWxCQTsrQkFtQkE7K0NBQ0E7QUFDQTtBQWhGQSxHOzs7Ozs7QUNoQ0EsaUJBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7QUNuRUEsS0FBSUEsZUFBSixFQUFxQkMsZUFBckI7QUFDQSxLQUFJQyxpQkFBaUIsRUFBckI7O0FBRUE7QUFDQUYsbUJBQWtCLG1CQUFBRyxDQUFRLENBQVIsQ0FBbEI7O0FBRUE7QUFDQSxLQUFJQyxtQkFBbUIsbUJBQUFELENBQVEsQ0FBUixDQUF2QjtBQUNBRixtQkFBa0JELGtCQUFrQkEsbUJBQW1CLEVBQXZEO0FBQ0EsS0FDRSxRQUFPQSxnQkFBZ0JLLE9BQXZCLE1BQW1DLFFBQW5DLElBQ0EsT0FBT0wsZ0JBQWdCSyxPQUF2QixLQUFtQyxVQUZyQyxFQUdFO0FBQ0YsT0FBSWYsT0FBT0MsSUFBUCxDQUFZUyxlQUFaLEVBQTZCTSxJQUE3QixDQUFrQyxVQUFVQyxHQUFWLEVBQWU7QUFBRSxZQUFPQSxRQUFRLFNBQVIsSUFBcUJBLFFBQVEsWUFBcEM7QUFBa0QsSUFBckcsQ0FBSixFQUE0RztBQUFDQyxhQUFRQyxLQUFSLENBQWMsaURBQWQ7QUFBaUU7QUFDOUtSLHFCQUFrQkQsa0JBQWtCQSxnQkFBZ0JLLE9BQXBEO0FBQ0M7QUFDRCxLQUFJLE9BQU9KLGVBQVAsS0FBMkIsVUFBL0IsRUFBMkM7QUFDekNBLHFCQUFrQkEsZ0JBQWdCUyxPQUFsQztBQUNEO0FBQ0RULGlCQUFnQlUsTUFBaEIsR0FBeUIsa0RBQXpCO0FBQ0FWLGlCQUFnQlcsTUFBaEIsR0FBeUJSLGlCQUFpQlEsTUFBMUM7QUFDQVgsaUJBQWdCWSxlQUFoQixHQUFrQ1QsaUJBQWlCUyxlQUFuRDs7QUFFQTtBQUNBLEtBQUksS0FBSixFQUFnQjtBQUFDLElBQUMsWUFBWTtBQUM1QixTQUFJQyxTQUFTWCxRQUFRLG9CQUFSLENBQWI7QUFDQVcsWUFBTzFCLE9BQVAsQ0FBZWUsUUFBUSxLQUFSLENBQWYsRUFBK0IsS0FBL0I7QUFDQSxTQUFJLENBQUNXLE9BQU9DLFVBQVosRUFBd0I7QUFDeEI3QixZQUFPOEIsR0FBUCxDQUFXQyxNQUFYO0FBQ0EsU0FBSSxDQUFDL0IsT0FBTzhCLEdBQVAsQ0FBV0UsSUFBaEIsRUFBc0I7QUFDcEJKLGNBQU9LLFlBQVAsQ0FBb0IsaUJBQXBCLEVBQXVDbEIsZUFBdkM7QUFDRCxNQUZELE1BRU87QUFDTGEsY0FBT00sTUFBUCxDQUFjLGlCQUFkLEVBQWlDbkIsZUFBakM7QUFDRDtBQUNGLElBVmdCO0FBVVo7QUFDTCxLQUFJQSxnQkFBZ0JvQixVQUFwQixFQUFnQztBQUFDYixXQUFRQyxLQUFSLENBQWMsa0lBQWQ7QUFBa0o7O0FBRW5MdkIsUUFBT0MsT0FBUCxHQUFpQmEsZUFBakIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkE7OztBQUVBO2FBQ0E7ZUFDQTtjQUNBO1VBQ0E7YUFDQTtjQUNBO29CQUNBO2FBQ0E7eUNBQ0EseUNBQ0EsNENBQ0EsNkNBRUE7O3VDQUVBOztzQ0FFQTtxQ0FDQTtrQ0FDQTtvQ0FDQTtzQ0FDQTtxQ0FDQTs2Q0FDQTtvQ0FFQTtBQVRBO0FBVUE7NkJBQ0E7Z0RBQ0E7QUFFQTtBQWhCQTsrQkFpQkE7MENBQ0E7QUFDQTtBQWxDQSxHOzs7Ozs7QUNWQSxpQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSCxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7OztBQ2pCQSxLQUFJQSxlQUFKLEVBQXFCQyxlQUFyQjtBQUNBLEtBQUlDLGlCQUFpQixFQUFyQjs7QUFFQTtBQUNBRixtQkFBa0IsbUJBQUFHLENBQVEsQ0FBUixDQUFsQjs7QUFFQTtBQUNBLEtBQUlDLG1CQUFtQixtQkFBQUQsQ0FBUSxFQUFSLENBQXZCO0FBQ0FGLG1CQUFrQkQsa0JBQWtCQSxtQkFBbUIsRUFBdkQ7QUFDQSxLQUNFLFFBQU9BLGdCQUFnQkssT0FBdkIsTUFBbUMsUUFBbkMsSUFDQSxPQUFPTCxnQkFBZ0JLLE9BQXZCLEtBQW1DLFVBRnJDLEVBR0U7QUFDRixPQUFJZixPQUFPQyxJQUFQLENBQVlTLGVBQVosRUFBNkJNLElBQTdCLENBQWtDLFVBQVVDLEdBQVYsRUFBZTtBQUFFLFlBQU9BLFFBQVEsU0FBUixJQUFxQkEsUUFBUSxZQUFwQztBQUFrRCxJQUFyRyxDQUFKLEVBQTRHO0FBQUNDLGFBQVFDLEtBQVIsQ0FBYyxpREFBZDtBQUFpRTtBQUM5S1IscUJBQWtCRCxrQkFBa0JBLGdCQUFnQkssT0FBcEQ7QUFDQztBQUNELEtBQUksT0FBT0osZUFBUCxLQUEyQixVQUEvQixFQUEyQztBQUN6Q0EscUJBQWtCQSxnQkFBZ0JTLE9BQWxDO0FBQ0Q7QUFDRFQsaUJBQWdCVSxNQUFoQixHQUF5QixvREFBekI7QUFDQVYsaUJBQWdCVyxNQUFoQixHQUF5QlIsaUJBQWlCUSxNQUExQztBQUNBWCxpQkFBZ0JZLGVBQWhCLEdBQWtDVCxpQkFBaUJTLGVBQW5EOztBQUVBO0FBQ0EsS0FBSSxLQUFKLEVBQWdCO0FBQUMsSUFBQyxZQUFZO0FBQzVCLFNBQUlDLFNBQVNYLFFBQVEsb0JBQVIsQ0FBYjtBQUNBVyxZQUFPMUIsT0FBUCxDQUFlZSxRQUFRLEtBQVIsQ0FBZixFQUErQixLQUEvQjtBQUNBLFNBQUksQ0FBQ1csT0FBT0MsVUFBWixFQUF3QjtBQUN4QjdCLFlBQU84QixHQUFQLENBQVdDLE1BQVg7QUFDQSxTQUFJLENBQUMvQixPQUFPOEIsR0FBUCxDQUFXRSxJQUFoQixFQUFzQjtBQUNwQkosY0FBT0ssWUFBUCxDQUFvQixpQkFBcEIsRUFBdUNsQixlQUF2QztBQUNELE1BRkQsTUFFTztBQUNMYSxjQUFPTSxNQUFQLENBQWMsaUJBQWQsRUFBaUNuQixlQUFqQztBQUNEO0FBQ0YsSUFWZ0I7QUFVWjtBQUNMLEtBQUlBLGdCQUFnQm9CLFVBQXBCLEVBQWdDO0FBQUNiLFdBQVFDLEtBQVIsQ0FBYyxvSUFBZDtBQUFvSjs7QUFFckx2QixRQUFPQyxPQUFQLEdBQWlCYSxlQUFqQixDOzs7Ozs7Ozs7Ozs7Ozs7OztBQzdCQTs7Ozs7YUFJQTtpQkFDQTtvQ0FDQTtxQkFDQTtBQUVBO0FBTkE7O2FBUUE7aUJBSUE7QUFMQTtBQVJBOzsrQkFjQSxDQUVBOztBQUNBOzsrQ0FFQTs7b0VBQ0E7K0NBQ0E7QUFDQTtBQUNBO0FBeEJBLEc7Ozs7OztBQ1RBLGlCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQSxFQUFDLCtCQUErQixhQUFhLDBCQUEwQjtBQUN2RTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNILEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7O0FDcEJBLEtBQUlBLGVBQUosRUFBcUJDLGVBQXJCO0FBQ0EsS0FBSUMsaUJBQWlCLEVBQXJCOztBQUVBO0FBQ0Esb0JBQUFDLENBQVEsRUFBUjs7QUFFQTtBQUNBSCxtQkFBa0IsbUJBQUFHLENBQVEsRUFBUixDQUFsQjs7QUFFQTtBQUNBLEtBQUlDLG1CQUFtQixtQkFBQUQsQ0FBUSxFQUFSLENBQXZCO0FBQ0FGLG1CQUFrQkQsa0JBQWtCQSxtQkFBbUIsRUFBdkQ7QUFDQSxLQUNFLFFBQU9BLGdCQUFnQkssT0FBdkIsTUFBbUMsUUFBbkMsSUFDQSxPQUFPTCxnQkFBZ0JLLE9BQXZCLEtBQW1DLFVBRnJDLEVBR0U7QUFDRixPQUFJZixPQUFPQyxJQUFQLENBQVlTLGVBQVosRUFBNkJNLElBQTdCLENBQWtDLFVBQVVDLEdBQVYsRUFBZTtBQUFFLFlBQU9BLFFBQVEsU0FBUixJQUFxQkEsUUFBUSxZQUFwQztBQUFrRCxJQUFyRyxDQUFKLEVBQTRHO0FBQUNDLGFBQVFDLEtBQVIsQ0FBYyxpREFBZDtBQUFpRTtBQUM5S1IscUJBQWtCRCxrQkFBa0JBLGdCQUFnQkssT0FBcEQ7QUFDQztBQUNELEtBQUksT0FBT0osZUFBUCxLQUEyQixVQUEvQixFQUEyQztBQUN6Q0EscUJBQWtCQSxnQkFBZ0JTLE9BQWxDO0FBQ0Q7QUFDRFQsaUJBQWdCVSxNQUFoQixHQUF5Qix5REFBekI7QUFDQVYsaUJBQWdCVyxNQUFoQixHQUF5QlIsaUJBQWlCUSxNQUExQztBQUNBWCxpQkFBZ0JZLGVBQWhCLEdBQWtDVCxpQkFBaUJTLGVBQW5EOztBQUVBO0FBQ0EsS0FBSSxLQUFKLEVBQWdCO0FBQUMsSUFBQyxZQUFZO0FBQzVCLFNBQUlDLFNBQVNYLFFBQVEsb0JBQVIsQ0FBYjtBQUNBVyxZQUFPMUIsT0FBUCxDQUFlZSxRQUFRLEtBQVIsQ0FBZixFQUErQixLQUEvQjtBQUNBLFNBQUksQ0FBQ1csT0FBT0MsVUFBWixFQUF3QjtBQUN4QjdCLFlBQU84QixHQUFQLENBQVdDLE1BQVg7QUFDQSxTQUFJLENBQUMvQixPQUFPOEIsR0FBUCxDQUFXRSxJQUFoQixFQUFzQjtBQUNwQkosY0FBT0ssWUFBUCxDQUFvQixpQkFBcEIsRUFBdUNsQixlQUF2QztBQUNELE1BRkQsTUFFTztBQUNMYSxjQUFPTSxNQUFQLENBQWMsaUJBQWQsRUFBaUNuQixlQUFqQztBQUNEO0FBQ0YsSUFWZ0I7QUFVWjtBQUNMLEtBQUlBLGdCQUFnQm9CLFVBQXBCLEVBQWdDO0FBQUNiLFdBQVFDLEtBQVIsQ0FBYyxrSUFBZDtBQUFrSjs7QUFFbkx2QixRQUFPQyxPQUFQLEdBQWlCYSxlQUFqQixDOzs7Ozs7QUN4Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBbUY7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxpQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEU7Ozs7OztBQ3BCQTtBQUNBOzs7QUFHQTtBQUNBLG1EQUFrRCx1QkFBdUIsMEJBQTBCLGlCQUFpQixHQUFHLHFDQUFxQyxzQkFBc0IsR0FBRyw2Q0FBNkMsMEJBQTBCLEdBQUcsK0JBQStCLHlCQUF5QixnQkFBZ0Isa0JBQWtCLHNCQUFzQixrQkFBa0IsR0FBRyxzQ0FBc0MsMEJBQTBCLEdBQUc7O0FBRXZjOzs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0EseUNBQXdDLGdCQUFnQjtBQUN4RCxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQVksb0JBQW9CO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFnQixtQkFBbUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCLHNCQUFzQjtBQUN0QztBQUNBO0FBQ0EsbUJBQWtCLDJCQUEyQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZSxtQkFBbUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUIsMkJBQTJCO0FBQzVDO0FBQ0E7QUFDQSxTQUFRLHVCQUF1QjtBQUMvQjtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0Esa0JBQWlCLHVCQUF1QjtBQUN4QztBQUNBO0FBQ0EsNEJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZSxpQkFBaUI7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWM7QUFDZDtBQUNBLGlDQUFnQyxzQkFBc0I7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdEQUF1RDtBQUN2RDs7QUFFQSw4QkFBNkIsbUJBQW1COztBQUVoRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0xBOztBQUdBOzs7Ozs7OztBQUtBO0FBSEE7Ozs7bUJBTUE7dUJBRUE7QUFIQTs7MkJBTUE7QUFGQTs7b0RBSUE7dUJBR0E7QUFKQTs7aUJBS0E7bUJBR0E7QUFoQkE7O2lDQWlCQTtvREFDQTttQ0FDQTsyQ0FDQTs0QkFDQTtBQUVBOzs0QkFDQTtrQ0FDQTtBQUNBO0FBRUE7Ozs7O0FBRUE7O21EQUVBOzttQ0FDQTs7b0RBRUE7OztnQ0FDQTtBQUVBOztvQkFDQTtBQUdBO0FBYkE7OzJCQWNBOzt3QkFFQTtnQ0FDQTtzQkFDQTt5QkFDQTtzQkFDQTt1QkFDQTtnQkFFQTtBQVJBO0FBVUE7Ozs7d0VBRUE7c0RBQ0E7Z0NBQ0E7MkNBQ0E7cUNBQ0E7d0JBQ0E7NkVBQ0E7a0ZBQ0E7NENBQ0E7QUFFQTs7NENBRUE7O3NDQUNBO0FBRUE7O3NCQUNBO0FBQ0E7WUFHQTtBQXJCQTs7OztBQXVCQTs7OEJBQ0E7c0NBQ0E7NEJBQ0E7d0JBQ0E7c0NBQ0E7OEJBQ0E7QUFDQTtBQUVBO2dEQUNBO2dDQUNBO2lDQUNBO29CQUNBO21HQUNBO2lDQUNBO3lDQUNBO3dCQUNBO3lDQUNBO0FBRUE7OzRCQUNBO0FBQ0E7QUFFQTtvREFDQTtpQ0FFQTs7NENBRUE7OzhCQUNBOzBDQUNBO0FBQ0E7QUFFQTs2Q0FDQTtBQUNBOzRCQUNBO0FBRUE7O0FBQ0E7O3NDQUNBOzhGQUNBO21GQUNBO2lGQUNBO0FBQ0E7QUFFQTttREFDQTtzQ0FDQTt1Q0FFQTs7QUFDQTt3QkFFQTs7aUNBQ0E7QUFFQTs7QUFDQTs7eUVBQ0E7Z0NBQ0E7Z0NBQ0E7cURBQ0E7QUFFQTs7OEJBQ0E7d0NBQ0E7MkVBQ0E7b0JBQ0E7QUFHQTtBQUdBO0FBM0VBOztpQ0E0RUE7MERBQ0E7c0NBQ0E7QUFDQTtBQWpLQSxHOzs7Ozs7Ozs7Ozs7OztTQzlEZ0JzQixLLEdBQUFBLEs7U0FJQUMsVSxHQUFBQSxVO1NBSUFDLFcsR0FBQUEsVztTQWNBQyxtQixHQUFBQSxtQjtTQWdCQUMsUSxHQUFBQSxRO1NBY0FDLFksR0FBQUEsWTtTQUlBQyxrQixHQUFBQSxrQjtBQXhEVCxVQUFTTixLQUFULEdBQWlCO0FBQ3RCLFVBQU9PLEtBQUtDLE1BQUwsR0FBY0MsUUFBZCxDQUF1QixFQUF2QixFQUEyQkMsU0FBM0IsQ0FBcUMsQ0FBckMsQ0FBUDtBQUNEOztBQUVNLFVBQVNULFVBQVQsR0FBc0I7QUFDM0IsVUFBT00sS0FBS0MsTUFBTCxHQUFjQyxRQUFkLENBQXVCLEVBQXZCLEVBQTJCQyxTQUEzQixDQUFxQyxFQUFyQyxDQUFQO0FBQ0Q7O0FBRU0sVUFBU1IsV0FBVCxDQUFxQlMsR0FBckIsRUFBb0M7QUFBQSxPQUFWQyxHQUFVLHVFQUFKLEVBQUk7O0FBQ3pDLE9BQUlDLFVBQVVGLElBQUlHLFNBQUosQ0FBY0MsS0FBZCxDQUFvQixHQUFwQixDQUFkOztBQUVBLFFBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJSCxRQUFRSSxNQUE1QixFQUFvQ0QsR0FBcEMsRUFBeUM7QUFDdkMsU0FBR0gsUUFBUUcsQ0FBUixLQUFjSixHQUFqQixFQUFzQjtBQUNwQkMsZUFBUUssTUFBUixDQUFlRixDQUFmLEVBQWtCLENBQWxCO0FBQ0FBO0FBQ0Q7QUFDRjtBQUNETCxPQUFJRyxTQUFKLEdBQWdCRCxRQUFRTSxJQUFSLENBQWEsR0FBYixDQUFoQjtBQUVEOztBQUdNLFVBQVNoQixtQkFBVCxDQUE2QmlCLE9BQTdCLEVBQXNDQyxRQUF0QyxFQUFnRDtBQUNyRCxPQUFJLENBQUNELE9BQUQsSUFBWSxDQUFDQSxRQUFRRSxHQUF6QixFQUE4QjtBQUM1QixZQUFPLEtBQVA7QUFDRDs7QUFFRCxPQUFJRixRQUFRRyxJQUFSLEtBQWlCLENBQXJCLEVBQXdCO0FBQ3RCLFlBQU8sS0FBUDtBQUNEOztBQUVELE9BQUlILFFBQVFFLEdBQVIsQ0FBWUUsU0FBWixDQUFzQkMsUUFBdEIsQ0FBK0JKLFFBQS9CLENBQUosRUFBOEM7QUFDNUMsWUFBT0QsT0FBUDtBQUNEOztBQUVELFVBQU9qQixvQkFBb0JpQixRQUFRQSxPQUE1QixFQUFxQ0MsUUFBckMsQ0FBUDtBQUNEOztBQUVNLFVBQVNqQixRQUFULEdBQTBDO0FBQUEsT0FBeEJzQixFQUF3Qix1RUFBbkIsSUFBbUI7QUFBQSxPQUFiQyxLQUFhLHVFQUFMLEdBQUs7O0FBQy9DLE9BQUlDLFFBQVEsSUFBWjs7QUFFQSxVQUFPLFlBQWtCO0FBQUEsdUNBQU5DLElBQU07QUFBTkEsV0FBTTtBQUFBOztBQUN2QkMsbUJBQWNGLEtBQWQ7O0FBRUEsU0FBSUcsT0FBTyxJQUFYOztBQUVBSCxhQUFRSSxXQUFXLFlBQVc7QUFDNUJOLFVBQUdPLEtBQUgsQ0FBU0YsSUFBVCxFQUFlRixJQUFmO0FBQ0QsTUFGTyxFQUVMRixLQUZLLENBQVI7QUFHRCxJQVJEO0FBU0Q7O0FBRU0sVUFBU3RCLFlBQVQsQ0FBc0I2QixHQUF0QixFQUEyQjtBQUNoQyxVQUFPQSxJQUFJQyxPQUFKLENBQVkscUNBQVosRUFBbUQsTUFBbkQsQ0FBUDtBQUNEOztBQUVNLFVBQVM3QixrQkFBVCxDQUE0QjhCLEdBQTVCLEVBQXNEO0FBQUEsT0FBckJDLFdBQXFCLHVFQUFQLEtBQU87O0FBQzNELE9BQUdELE9BQVEsT0FBT0EsR0FBUCxJQUFjLFFBQXRCLElBQW9DLE9BQU9BLEdBQVAsSUFBYyxRQUFyRCxFQUFnRTtBQUM5RCxZQUFPQSxHQUFQO0FBQ0QsSUFGRCxNQUVPLElBQUdBLE9BQU8sUUFBT0EsR0FBUCx5Q0FBT0EsR0FBUCxNQUFjLFFBQXhCLEVBQWtDO0FBQ3ZDLFNBQUdDLFdBQUgsRUFBZ0I7QUFDZCxjQUFPRCxJQUFJakUsSUFBSixJQUFZaUUsSUFBSUUsS0FBdkI7QUFDRDs7QUFFRCxZQUFPRixJQUFJRSxLQUFYO0FBRUQsSUFQTSxNQU9BO0FBQ0xwRCxhQUFRcUQsR0FBUixDQUFZLHdEQUFaO0FBQ0EsWUFBTyxJQUFQO0FBQ0Q7QUFDRixFOzs7Ozs7Ozs7O0FDdEVELEtBQUk3RCxlQUFKLEVBQXFCQyxlQUFyQjtBQUNBLEtBQUlDLGlCQUFpQixFQUFyQjs7QUFFQTtBQUNBRixtQkFBa0IsbUJBQUFHLENBQVEsRUFBUixDQUFsQjs7QUFFQTtBQUNBLEtBQUlDLG1CQUFtQixtQkFBQUQsQ0FBUSxFQUFSLENBQXZCO0FBQ0FGLG1CQUFrQkQsa0JBQWtCQSxtQkFBbUIsRUFBdkQ7QUFDQSxLQUNFLFFBQU9BLGdCQUFnQkssT0FBdkIsTUFBbUMsUUFBbkMsSUFDQSxPQUFPTCxnQkFBZ0JLLE9BQXZCLEtBQW1DLFVBRnJDLEVBR0U7QUFDRixPQUFJZixPQUFPQyxJQUFQLENBQVlTLGVBQVosRUFBNkJNLElBQTdCLENBQWtDLFVBQVVDLEdBQVYsRUFBZTtBQUFFLFlBQU9BLFFBQVEsU0FBUixJQUFxQkEsUUFBUSxZQUFwQztBQUFrRCxJQUFyRyxDQUFKLEVBQTRHO0FBQUNDLGFBQVFDLEtBQVIsQ0FBYyxpREFBZDtBQUFpRTtBQUM5S1IscUJBQWtCRCxrQkFBa0JBLGdCQUFnQkssT0FBcEQ7QUFDQztBQUNELEtBQUksT0FBT0osZUFBUCxLQUEyQixVQUEvQixFQUEyQztBQUN6Q0EscUJBQWtCQSxnQkFBZ0JTLE9BQWxDO0FBQ0Q7QUFDRFQsaUJBQWdCVSxNQUFoQixHQUF5Qiw2REFBekI7QUFDQVYsaUJBQWdCVyxNQUFoQixHQUF5QlIsaUJBQWlCUSxNQUExQztBQUNBWCxpQkFBZ0JZLGVBQWhCLEdBQWtDVCxpQkFBaUJTLGVBQW5EOztBQUVBO0FBQ0EsS0FBSSxLQUFKLEVBQWdCO0FBQUMsSUFBQyxZQUFZO0FBQzVCLFNBQUlDLFNBQVNYLFFBQVEsb0JBQVIsQ0FBYjtBQUNBVyxZQUFPMUIsT0FBUCxDQUFlZSxRQUFRLEtBQVIsQ0FBZixFQUErQixLQUEvQjtBQUNBLFNBQUksQ0FBQ1csT0FBT0MsVUFBWixFQUF3QjtBQUN4QjdCLFlBQU84QixHQUFQLENBQVdDLE1BQVg7QUFDQSxTQUFJLENBQUMvQixPQUFPOEIsR0FBUCxDQUFXRSxJQUFoQixFQUFzQjtBQUNwQkosY0FBT0ssWUFBUCxDQUFvQixpQkFBcEIsRUFBdUNsQixlQUF2QztBQUNELE1BRkQsTUFFTztBQUNMYSxjQUFPTSxNQUFQLENBQWMsaUJBQWQsRUFBaUNuQixlQUFqQztBQUNEO0FBQ0YsSUFWZ0I7QUFVWjtBQUNMLEtBQUlBLGdCQUFnQm9CLFVBQXBCLEVBQWdDO0FBQUNiLFdBQVFDLEtBQVIsQ0FBYyxzSUFBZDtBQUFzSjs7QUFFdkx2QixRQUFPQyxPQUFQLEdBQWlCYSxlQUFqQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7OztpQ0FFQTtjQUNBO0FBRUE7Ozs7O29DQUdBO3VCQUdBO0FBSkE7OztvQkFNQTt1QkFHQTtBQUpBOzs7MkNBTUE7dUJBR0E7QUFKQTs7bUJBS0E7bUJBSUE7QUFwQkE7Ozt1Q0FzQkE7OENBRUE7O0FBQ0E7MERBQ0E7eUZBQ0E7b0JBQ0E7bUZBQ0E7QUFDQTtBQUVBOzJDQUNBO21FQUNBO0FBR0E7QUFoQkE7Ozt1Q0FrQkE7NEVBQ0E7QUFFQTsrQ0FDQTtnQ0FFQTs7Z0RBQ0E7QUFFQTt5REFDQTs7QUFDQTs7Ozs7O0FBQ0E7O3VLQUNBOzRDQUNBO0FBQ0E7MkZBQ0E7NENBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBR0E7QUF6QkE7O2lDQTBCQTtrQ0FDQTtBQUVBOzJCQUNBOztzQkFFQTsyQkFFQTtBQUhBO0FBSUE7QUE5RUEsRzs7Ozs7O0FDZkEsaUJBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNILEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7QUN2Q0EsaUJBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxJQUFHO0FBQ0gsRUFBQywrQkFBK0IsYUFBYSwwQkFBMEI7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNILEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7O0FDekZBLEtBQUlBLGVBQUosRUFBcUJDLGVBQXJCO0FBQ0EsS0FBSUMsaUJBQWlCLEVBQXJCOztBQUVBO0FBQ0FGLG1CQUFrQixtQkFBQUcsQ0FBUSxFQUFSLENBQWxCOztBQUVBO0FBQ0EsS0FBSUMsbUJBQW1CLG1CQUFBRCxDQUFRLEVBQVIsQ0FBdkI7QUFDQUYsbUJBQWtCRCxrQkFBa0JBLG1CQUFtQixFQUF2RDtBQUNBLEtBQ0UsUUFBT0EsZ0JBQWdCSyxPQUF2QixNQUFtQyxRQUFuQyxJQUNBLE9BQU9MLGdCQUFnQkssT0FBdkIsS0FBbUMsVUFGckMsRUFHRTtBQUNGLE9BQUlmLE9BQU9DLElBQVAsQ0FBWVMsZUFBWixFQUE2Qk0sSUFBN0IsQ0FBa0MsVUFBVUMsR0FBVixFQUFlO0FBQUUsWUFBT0EsUUFBUSxTQUFSLElBQXFCQSxRQUFRLFlBQXBDO0FBQWtELElBQXJHLENBQUosRUFBNEc7QUFBQ0MsYUFBUUMsS0FBUixDQUFjLGlEQUFkO0FBQWlFO0FBQzlLUixxQkFBa0JELGtCQUFrQkEsZ0JBQWdCSyxPQUFwRDtBQUNDO0FBQ0QsS0FBSSxPQUFPSixlQUFQLEtBQTJCLFVBQS9CLEVBQTJDO0FBQ3pDQSxxQkFBa0JBLGdCQUFnQlMsT0FBbEM7QUFDRDtBQUNEVCxpQkFBZ0JVLE1BQWhCLEdBQXlCLGtEQUF6QjtBQUNBVixpQkFBZ0JXLE1BQWhCLEdBQXlCUixpQkFBaUJRLE1BQTFDO0FBQ0FYLGlCQUFnQlksZUFBaEIsR0FBa0NULGlCQUFpQlMsZUFBbkQ7O0FBRUE7QUFDQSxLQUFJLEtBQUosRUFBZ0I7QUFBQyxJQUFDLFlBQVk7QUFDNUIsU0FBSUMsU0FBU1gsUUFBUSxvQkFBUixDQUFiO0FBQ0FXLFlBQU8xQixPQUFQLENBQWVlLFFBQVEsS0FBUixDQUFmLEVBQStCLEtBQS9CO0FBQ0EsU0FBSSxDQUFDVyxPQUFPQyxVQUFaLEVBQXdCO0FBQ3hCN0IsWUFBTzhCLEdBQVAsQ0FBV0MsTUFBWDtBQUNBLFNBQUksQ0FBQy9CLE9BQU84QixHQUFQLENBQVdFLElBQWhCLEVBQXNCO0FBQ3BCSixjQUFPSyxZQUFQLENBQW9CLGlCQUFwQixFQUF1Q2xCLGVBQXZDO0FBQ0QsTUFGRCxNQUVPO0FBQ0xhLGNBQU9NLE1BQVAsQ0FBYyxpQkFBZCxFQUFpQ25CLGVBQWpDO0FBQ0Q7QUFDRixJQVZnQjtBQVVaO0FBQ0wsS0FBSUEsZ0JBQWdCb0IsVUFBcEIsRUFBZ0M7QUFBQ2IsV0FBUUMsS0FBUixDQUFjLGtJQUFkO0FBQWtKOztBQUVuTHZCLFFBQU9DLE9BQVAsR0FBaUJhLGVBQWpCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBOzs7OzJEQUdBOztvQkFHQTtBQUZBO0FBR0E7MkRBQ0E7O3dCQUdBO0FBRkE7QUFHQTt5Q0FDQTswQkFDQTtBQUNBO3VDQUNBOzBCQUNBO0FBQ0E7cUNBQ0E7MEJBQ0E7QUFDQTtxQ0FDQTswQkFDQTtBQUNBOzZDQUNBOzBGQUNBOzJDQUNBO0FBRUE7QUEzQkE7OztzQkE4QkE7aUJBRUE7QUFIQTs7c0JBS0E7Z0JBRUE7QUFIQTs7c0JBS0E7Z0JBRUE7QUFIQTs7c0JBS0E7aUJBRUE7QUFIQTs7aUJBT0E7QUFIQTtBQWpCQTs7O0FBc0JBOzsyRUFDQTtBQUVBO0FBSkE7QUFsREEsRzs7Ozs7O0FDZkEsaUJBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0EsSUFBRztBQUNIO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUc7QUFDSCxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7bUJDNUNlO0FBQ2I4RCxVQUFPO0FBQ0xGLFlBQU8sQ0FBQ0csTUFBRCxFQUFTQyxNQUFULENBREY7QUFFTEMsY0FBU0MsT0FGSjtBQUdMQyxXQUFPRCxPQUhGO0FBSUxFLG1CQUFjRixPQUpUO0FBS0xHLFdBQU1ILE9BTEQ7QUFNTEksV0FBTVAsTUFORDs7QUFRTFEsVUFBSztBQUNIQyxhQUFNVCxNQURIO0FBRUgxRCxjQUZHLHNCQUVPO0FBQ1IsZ0JBQU8sTUFBUDtBQUNEO0FBSkU7O0FBUkEsSUFETTs7QUFrQmJPLFdBQVEsZ0JBQVM2RCxhQUFULEVBQXdCO0FBQzlCLFNBQUlGLE1BQU0sS0FBS0EsR0FBZjs7QUFFQSxTQUFJRyxRQUFRO0FBQ1YsZ0JBQVM7O0FBREMsTUFBWjs7QUFLQSxTQUFHLENBQUMsS0FBS0wsSUFBVCxFQUFlSyxNQUFNLFlBQU4sSUFBc0IsS0FBS2QsS0FBM0I7O0FBRWYsU0FBRyxLQUFLVSxJQUFSLEVBQWM7QUFDWkMsYUFBTSxHQUFOO0FBQ0FHLGFBQU1KLElBQU4sR0FBYSxLQUFLQSxJQUFsQjtBQUNEOztBQUVELFNBQUcsS0FBS0wsT0FBUixFQUFpQlMsTUFBTUMsS0FBTixJQUFlLHNCQUFmOztBQUVqQixTQUFHLEtBQUtSLElBQVIsRUFBY08sTUFBTUMsS0FBTixHQUFjLG9CQUFvQkQsTUFBTUMsS0FBeEM7O0FBRWQsU0FBRyxLQUFLUCxZQUFSLEVBQXNCTSxNQUFNQyxLQUFOLElBQWUsNEJBQWY7O0FBRXRCLFlBQU9GLGNBQWNGLEdBQWQsRUFBbUI7QUFDeEJHLGNBQU9BO0FBRGlCLE1BQW5CLEVBRUosS0FBS0UsTUFBTCxDQUFZdkUsT0FGUixDQUFQO0FBR0Q7QUExQ1ksRTs7Ozs7Ozs7OztBQ0FmLEtBQUlMLGVBQUosRUFBcUJDLGVBQXJCO0FBQ0EsS0FBSUMsaUJBQWlCLEVBQXJCOztBQUVBO0FBQ0FGLG1CQUFrQixtQkFBQUcsQ0FBUSxFQUFSLENBQWxCOztBQUVBO0FBQ0EsS0FBSUMsbUJBQW1CLG1CQUFBRCxDQUFRLEVBQVIsQ0FBdkI7QUFDQUYsbUJBQWtCRCxrQkFBa0JBLG1CQUFtQixFQUF2RDtBQUNBLEtBQ0UsUUFBT0EsZ0JBQWdCSyxPQUF2QixNQUFtQyxRQUFuQyxJQUNBLE9BQU9MLGdCQUFnQkssT0FBdkIsS0FBbUMsVUFGckMsRUFHRTtBQUNGLE9BQUlmLE9BQU9DLElBQVAsQ0FBWVMsZUFBWixFQUE2Qk0sSUFBN0IsQ0FBa0MsVUFBVUMsR0FBVixFQUFlO0FBQUUsWUFBT0EsUUFBUSxTQUFSLElBQXFCQSxRQUFRLFlBQXBDO0FBQWtELElBQXJHLENBQUosRUFBNEc7QUFBQ0MsYUFBUUMsS0FBUixDQUFjLGlEQUFkO0FBQWlFO0FBQzlLUixxQkFBa0JELGtCQUFrQkEsZ0JBQWdCSyxPQUFwRDtBQUNDO0FBQ0QsS0FBSSxPQUFPSixlQUFQLEtBQTJCLFVBQS9CLEVBQTJDO0FBQ3pDQSxxQkFBa0JBLGdCQUFnQlMsT0FBbEM7QUFDRDtBQUNEVCxpQkFBZ0JVLE1BQWhCLEdBQXlCLG9EQUF6QjtBQUNBVixpQkFBZ0JXLE1BQWhCLEdBQXlCUixpQkFBaUJRLE1BQTFDO0FBQ0FYLGlCQUFnQlksZUFBaEIsR0FBa0NULGlCQUFpQlMsZUFBbkQ7O0FBRUE7QUFDQSxLQUFJLEtBQUosRUFBZ0I7QUFBQyxJQUFDLFlBQVk7QUFDNUIsU0FBSUMsU0FBU1gsUUFBUSxvQkFBUixDQUFiO0FBQ0FXLFlBQU8xQixPQUFQLENBQWVlLFFBQVEsS0FBUixDQUFmLEVBQStCLEtBQS9CO0FBQ0EsU0FBSSxDQUFDVyxPQUFPQyxVQUFaLEVBQXdCO0FBQ3hCN0IsWUFBTzhCLEdBQVAsQ0FBV0MsTUFBWDtBQUNBLFNBQUksQ0FBQy9CLE9BQU84QixHQUFQLENBQVdFLElBQWhCLEVBQXNCO0FBQ3BCSixjQUFPSyxZQUFQLENBQW9CLGlCQUFwQixFQUF1Q2xCLGVBQXZDO0FBQ0QsTUFGRCxNQUVPO0FBQ0xhLGNBQU9NLE1BQVAsQ0FBYyxpQkFBZCxFQUFpQ25CLGVBQWpDO0FBQ0Q7QUFDRixJQVZnQjtBQVVaO0FBQ0wsS0FBSUEsZ0JBQWdCb0IsVUFBcEIsRUFBZ0M7QUFBQ2IsV0FBUUMsS0FBUixDQUFjLG9JQUFkO0FBQW9KOztBQUVyTHZCLFFBQU9DLE9BQVAsR0FBaUJhLGVBQWpCLEM7Ozs7Ozs7Ozs7Ozs7O0FDaENBOzs7O3lCQUdBOzBCQUNBO3dCQUdBO0FBTEE7OztBQU1BOzttREFFQTs7aUNBQ0E7d0RBQ0E7OytEQUNBOztBQUVBOztrQ0FDQTtzREFDQTs7NkRBQ0E7O0FBQ0E7QUFDQTtBQW5CQSxHOzs7Ozs7QUNOQSxpQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7QUNkQSxLQUFJQSxlQUFKLEVBQXFCQyxlQUFyQjtBQUNBLEtBQUlDLGlCQUFpQixFQUFyQjs7QUFFQTtBQUNBRixtQkFBa0IsbUJBQUFHLENBQVEsRUFBUixDQUFsQjs7QUFFQTtBQUNBLEtBQUlDLG1CQUFtQixtQkFBQUQsQ0FBUSxFQUFSLENBQXZCO0FBQ0FGLG1CQUFrQkQsa0JBQWtCQSxtQkFBbUIsRUFBdkQ7QUFDQSxLQUNFLFFBQU9BLGdCQUFnQkssT0FBdkIsTUFBbUMsUUFBbkMsSUFDQSxPQUFPTCxnQkFBZ0JLLE9BQXZCLEtBQW1DLFVBRnJDLEVBR0U7QUFDRixPQUFJZixPQUFPQyxJQUFQLENBQVlTLGVBQVosRUFBNkJNLElBQTdCLENBQWtDLFVBQVVDLEdBQVYsRUFBZTtBQUFFLFlBQU9BLFFBQVEsU0FBUixJQUFxQkEsUUFBUSxZQUFwQztBQUFrRCxJQUFyRyxDQUFKLEVBQTRHO0FBQUNDLGFBQVFDLEtBQVIsQ0FBYyxpREFBZDtBQUFpRTtBQUM5S1IscUJBQWtCRCxrQkFBa0JBLGdCQUFnQkssT0FBcEQ7QUFDQztBQUNELEtBQUksT0FBT0osZUFBUCxLQUEyQixVQUEvQixFQUEyQztBQUN6Q0EscUJBQWtCQSxnQkFBZ0JTLE9BQWxDO0FBQ0Q7QUFDRFQsaUJBQWdCVSxNQUFoQixHQUF5QixtREFBekI7QUFDQVYsaUJBQWdCVyxNQUFoQixHQUF5QlIsaUJBQWlCUSxNQUExQztBQUNBWCxpQkFBZ0JZLGVBQWhCLEdBQWtDVCxpQkFBaUJTLGVBQW5EOztBQUVBO0FBQ0EsS0FBSSxLQUFKLEVBQWdCO0FBQUMsSUFBQyxZQUFZO0FBQzVCLFNBQUlDLFNBQVNYLFFBQVEsb0JBQVIsQ0FBYjtBQUNBVyxZQUFPMUIsT0FBUCxDQUFlZSxRQUFRLEtBQVIsQ0FBZixFQUErQixLQUEvQjtBQUNBLFNBQUksQ0FBQ1csT0FBT0MsVUFBWixFQUF3QjtBQUN4QjdCLFlBQU84QixHQUFQLENBQVdDLE1BQVg7QUFDQSxTQUFJLENBQUMvQixPQUFPOEIsR0FBUCxDQUFXRSxJQUFoQixFQUFzQjtBQUNwQkosY0FBT0ssWUFBUCxDQUFvQixpQkFBcEIsRUFBdUNsQixlQUF2QztBQUNELE1BRkQsTUFFTztBQUNMYSxjQUFPTSxNQUFQLENBQWMsaUJBQWQsRUFBaUNuQixlQUFqQztBQUNEO0FBQ0YsSUFWZ0I7QUFVWjtBQUNMLEtBQUlBLGdCQUFnQm9CLFVBQXBCLEVBQWdDO0FBQUNiLFdBQVFDLEtBQVIsQ0FBYyxtSUFBZDtBQUFtSjs7QUFFcEx2QixRQUFPQyxPQUFQLEdBQWlCYSxlQUFqQixDOzs7Ozs7Ozs7Ozs7O0FDakNBOzs7OzttQkFJQTtzQkFHQTtBQUpBOztzQkFPQTtBQVJBOztpQ0FTQTs4Q0FDQTtBQUNBO0FBWkEsRzs7Ozs7O0FDTEEsaUJBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNILEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7O0FDZEEsS0FBSUEsZUFBSixFQUFxQkMsZUFBckI7QUFDQSxLQUFJQyxpQkFBaUIsRUFBckI7O0FBRUE7QUFDQUYsbUJBQWtCLG1CQUFBRyxDQUFRLEVBQVIsQ0FBbEI7O0FBRUE7QUFDQSxLQUFJQyxtQkFBbUIsbUJBQUFELENBQVEsRUFBUixDQUF2QjtBQUNBRixtQkFBa0JELGtCQUFrQkEsbUJBQW1CLEVBQXZEO0FBQ0EsS0FDRSxRQUFPQSxnQkFBZ0JLLE9BQXZCLE1BQW1DLFFBQW5DLElBQ0EsT0FBT0wsZ0JBQWdCSyxPQUF2QixLQUFtQyxVQUZyQyxFQUdFO0FBQ0YsT0FBSWYsT0FBT0MsSUFBUCxDQUFZUyxlQUFaLEVBQTZCTSxJQUE3QixDQUFrQyxVQUFVQyxHQUFWLEVBQWU7QUFBRSxZQUFPQSxRQUFRLFNBQVIsSUFBcUJBLFFBQVEsWUFBcEM7QUFBa0QsSUFBckcsQ0FBSixFQUE0RztBQUFDQyxhQUFRQyxLQUFSLENBQWMsaURBQWQ7QUFBaUU7QUFDOUtSLHFCQUFrQkQsa0JBQWtCQSxnQkFBZ0JLLE9BQXBEO0FBQ0M7QUFDRCxLQUFJLE9BQU9KLGVBQVAsS0FBMkIsVUFBL0IsRUFBMkM7QUFDekNBLHFCQUFrQkEsZ0JBQWdCUyxPQUFsQztBQUNEO0FBQ0RULGlCQUFnQlUsTUFBaEIsR0FBeUIsNERBQXpCO0FBQ0FWLGlCQUFnQlcsTUFBaEIsR0FBeUJSLGlCQUFpQlEsTUFBMUM7QUFDQVgsaUJBQWdCWSxlQUFoQixHQUFrQ1QsaUJBQWlCUyxlQUFuRDs7QUFFQTtBQUNBLEtBQUksS0FBSixFQUFnQjtBQUFDLElBQUMsWUFBWTtBQUM1QixTQUFJQyxTQUFTWCxRQUFRLG9CQUFSLENBQWI7QUFDQVcsWUFBTzFCLE9BQVAsQ0FBZWUsUUFBUSxLQUFSLENBQWYsRUFBK0IsS0FBL0I7QUFDQSxTQUFJLENBQUNXLE9BQU9DLFVBQVosRUFBd0I7QUFDeEI3QixZQUFPOEIsR0FBUCxDQUFXQyxNQUFYO0FBQ0EsU0FBSSxDQUFDL0IsT0FBTzhCLEdBQVAsQ0FBV0UsSUFBaEIsRUFBc0I7QUFDcEJKLGNBQU9LLFlBQVAsQ0FBb0IsaUJBQXBCLEVBQXVDbEIsZUFBdkM7QUFDRCxNQUZELE1BRU87QUFDTGEsY0FBT00sTUFBUCxDQUFjLGlCQUFkLEVBQWlDbkIsZUFBakM7QUFDRDtBQUNGLElBVmdCO0FBVVo7QUFDTCxLQUFJQSxnQkFBZ0JvQixVQUFwQixFQUFnQztBQUFDYixXQUFRQyxLQUFSLENBQWMsb0lBQWQ7QUFBb0o7O0FBRXJMdkIsUUFBT0MsT0FBUCxHQUFpQmEsZUFBakIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBOzs7OzttQkFJQTt1QkFFQTtBQUhBOytCQUlBOzBCQUdBO0FBUkE7Ozs7OztBQVdBOzs7QUFJQTtBQUxBO0FBREE7OzJCQU9BOzsyQkFHQTtBQUZBO0FBSUE7aUNBQ0E7b0RBQ0E7QUFFQTs7OzttREFFQTt1Q0FDQTtnRUFDQTtBQUNBO0FBR0E7QUFQQTs7O2dEQVNBO3NDQUNBO3VDQUNBO0FBRUE7QUFMQTtBQW5DQSxHOzs7Ozs7QUNWQSxpQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0EsSUFBRztBQUNIO0FBQ0EsSUFBRztBQUNILEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7O0FDL0NBLEtBQUlBLGVBQUosRUFBcUJDLGVBQXJCO0FBQ0EsS0FBSUMsaUJBQWlCLEVBQXJCOztBQUVBO0FBQ0FGLG1CQUFrQixtQkFBQUcsQ0FBUSxFQUFSLENBQWxCOztBQUVBO0FBQ0EsS0FBSUMsbUJBQW1CLG1CQUFBRCxDQUFRLEVBQVIsQ0FBdkI7QUFDQUYsbUJBQWtCRCxrQkFBa0JBLG1CQUFtQixFQUF2RDtBQUNBLEtBQ0UsUUFBT0EsZ0JBQWdCSyxPQUF2QixNQUFtQyxRQUFuQyxJQUNBLE9BQU9MLGdCQUFnQkssT0FBdkIsS0FBbUMsVUFGckMsRUFHRTtBQUNGLE9BQUlmLE9BQU9DLElBQVAsQ0FBWVMsZUFBWixFQUE2Qk0sSUFBN0IsQ0FBa0MsVUFBVUMsR0FBVixFQUFlO0FBQUUsWUFBT0EsUUFBUSxTQUFSLElBQXFCQSxRQUFRLFlBQXBDO0FBQWtELElBQXJHLENBQUosRUFBNEc7QUFBQ0MsYUFBUUMsS0FBUixDQUFjLGlEQUFkO0FBQWlFO0FBQzlLUixxQkFBa0JELGtCQUFrQkEsZ0JBQWdCSyxPQUFwRDtBQUNDO0FBQ0QsS0FBSSxPQUFPSixlQUFQLEtBQTJCLFVBQS9CLEVBQTJDO0FBQ3pDQSxxQkFBa0JBLGdCQUFnQlMsT0FBbEM7QUFDRDtBQUNEVCxpQkFBZ0JVLE1BQWhCLEdBQXlCLHlEQUF6QjtBQUNBVixpQkFBZ0JXLE1BQWhCLEdBQXlCUixpQkFBaUJRLE1BQTFDO0FBQ0FYLGlCQUFnQlksZUFBaEIsR0FBa0NULGlCQUFpQlMsZUFBbkQ7O0FBRUE7QUFDQSxLQUFJLEtBQUosRUFBZ0I7QUFBQyxJQUFDLFlBQVk7QUFDNUIsU0FBSUMsU0FBU1gsUUFBUSxvQkFBUixDQUFiO0FBQ0FXLFlBQU8xQixPQUFQLENBQWVlLFFBQVEsS0FBUixDQUFmLEVBQStCLEtBQS9CO0FBQ0EsU0FBSSxDQUFDVyxPQUFPQyxVQUFaLEVBQXdCO0FBQ3hCN0IsWUFBTzhCLEdBQVAsQ0FBV0MsTUFBWDtBQUNBLFNBQUksQ0FBQy9CLE9BQU84QixHQUFQLENBQVdFLElBQWhCLEVBQXNCO0FBQ3BCSixjQUFPSyxZQUFQLENBQW9CLGlCQUFwQixFQUF1Q2xCLGVBQXZDO0FBQ0QsTUFGRCxNQUVPO0FBQ0xhLGNBQU9NLE1BQVAsQ0FBYyxpQkFBZCxFQUFpQ25CLGVBQWpDO0FBQ0Q7QUFDRixJQVZnQjtBQVVaO0FBQ0wsS0FBSUEsZ0JBQWdCb0IsVUFBcEIsRUFBZ0M7QUFBQ2IsV0FBUUMsS0FBUixDQUFjLGlJQUFkO0FBQWlKOztBQUVsTHZCLFFBQU9DLE9BQVAsR0FBaUJhLGVBQWpCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7Ozs7V0FHQTsyQkFDQTtTQUNBOztzQkFFQTtpQkFFQTtBQUhBO3NCQUtBO0FBVEE7Ozs7O0FBWUE7OztBQUVBO0FBSEE7cUNBSUE7a0NBQ0E7QUFDQTt1Q0FDQTs7NkJBRUE7NEJBRUE7QUFIQTtBQUtBO0FBZEE7K0JBZUE7MkNBQ0E7QUFDQTs7OzRDQUVBO2dDQUNBO0FBRUE7QUFKQTtBQTdCQSxHOzs7Ozs7QUNwQkEsaUJBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSCxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7OztBQ3hDQSxLQUFJQSxlQUFKLEVBQXFCQyxlQUFyQjtBQUNBLEtBQUlDLGlCQUFpQixFQUFyQjs7QUFFQTtBQUNBRixtQkFBa0IsbUJBQUFHLENBQVEsRUFBUixDQUFsQjs7QUFFQTtBQUNBLEtBQUlDLG1CQUFtQixtQkFBQUQsQ0FBUSxFQUFSLENBQXZCO0FBQ0FGLG1CQUFrQkQsa0JBQWtCQSxtQkFBbUIsRUFBdkQ7QUFDQSxLQUNFLFFBQU9BLGdCQUFnQkssT0FBdkIsTUFBbUMsUUFBbkMsSUFDQSxPQUFPTCxnQkFBZ0JLLE9BQXZCLEtBQW1DLFVBRnJDLEVBR0U7QUFDRixPQUFJZixPQUFPQyxJQUFQLENBQVlTLGVBQVosRUFBNkJNLElBQTdCLENBQWtDLFVBQVVDLEdBQVYsRUFBZTtBQUFFLFlBQU9BLFFBQVEsU0FBUixJQUFxQkEsUUFBUSxZQUFwQztBQUFrRCxJQUFyRyxDQUFKLEVBQTRHO0FBQUNDLGFBQVFDLEtBQVIsQ0FBYyxpREFBZDtBQUFpRTtBQUM5S1IscUJBQWtCRCxrQkFBa0JBLGdCQUFnQkssT0FBcEQ7QUFDQztBQUNELEtBQUksT0FBT0osZUFBUCxLQUEyQixVQUEvQixFQUEyQztBQUN6Q0EscUJBQWtCQSxnQkFBZ0JTLE9BQWxDO0FBQ0Q7QUFDRFQsaUJBQWdCVSxNQUFoQixHQUF5QiwwREFBekI7QUFDQVYsaUJBQWdCVyxNQUFoQixHQUF5QlIsaUJBQWlCUSxNQUExQztBQUNBWCxpQkFBZ0JZLGVBQWhCLEdBQWtDVCxpQkFBaUJTLGVBQW5EOztBQUVBO0FBQ0EsS0FBSSxLQUFKLEVBQWdCO0FBQUMsSUFBQyxZQUFZO0FBQzVCLFNBQUlDLFNBQVNYLFFBQVEsb0JBQVIsQ0FBYjtBQUNBVyxZQUFPMUIsT0FBUCxDQUFlZSxRQUFRLEtBQVIsQ0FBZixFQUErQixLQUEvQjtBQUNBLFNBQUksQ0FBQ1csT0FBT0MsVUFBWixFQUF3QjtBQUN4QjdCLFlBQU84QixHQUFQLENBQVdDLE1BQVg7QUFDQSxTQUFJLENBQUMvQixPQUFPOEIsR0FBUCxDQUFXRSxJQUFoQixFQUFzQjtBQUNwQkosY0FBT0ssWUFBUCxDQUFvQixpQkFBcEIsRUFBdUNsQixlQUF2QztBQUNELE1BRkQsTUFFTztBQUNMYSxjQUFPTSxNQUFQLENBQWMsaUJBQWQsRUFBaUNuQixlQUFqQztBQUNEO0FBQ0YsSUFWZ0I7QUFVWjtBQUNMLEtBQUlBLGdCQUFnQm9CLFVBQXBCLEVBQWdDO0FBQUNiLFdBQVFDLEtBQVIsQ0FBYyxrSUFBZDtBQUFrSjs7QUFFbkx2QixRQUFPQyxPQUFQLEdBQWlCYSxlQUFqQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTs7Ozs7bUJBSUE7dUJBRUE7QUFIQTsrQkFNQTtBQVBBOzs7Ozs7QUFVQTs7O0FBSUE7QUFMQTtBQURBOzsyQkFPQTs7MkJBR0E7QUFGQTtBQUlBO2lDQUNBOytDQUNBO0FBRUE7Ozs7Z0RBRUE7c0NBQ0E7QUFFQTtBQUpBO0FBMUJBLEc7Ozs7OztBQ2ZBLGlCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0EsSUFBRztBQUNIO0FBQ0EsSUFBRztBQUNILEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7O0FDOUNBLEtBQUlBLGVBQUosRUFBcUJDLGVBQXJCO0FBQ0EsS0FBSUMsaUJBQWlCLEVBQXJCOztBQUVBO0FBQ0FGLG1CQUFrQixtQkFBQUcsQ0FBUSxFQUFSLENBQWxCOztBQUVBO0FBQ0EsS0FBSUMsbUJBQW1CLG1CQUFBRCxDQUFRLEVBQVIsQ0FBdkI7QUFDQUYsbUJBQWtCRCxrQkFBa0JBLG1CQUFtQixFQUF2RDtBQUNBLEtBQ0UsUUFBT0EsZ0JBQWdCSyxPQUF2QixNQUFtQyxRQUFuQyxJQUNBLE9BQU9MLGdCQUFnQkssT0FBdkIsS0FBbUMsVUFGckMsRUFHRTtBQUNGLE9BQUlmLE9BQU9DLElBQVAsQ0FBWVMsZUFBWixFQUE2Qk0sSUFBN0IsQ0FBa0MsVUFBVUMsR0FBVixFQUFlO0FBQUUsWUFBT0EsUUFBUSxTQUFSLElBQXFCQSxRQUFRLFlBQXBDO0FBQWtELElBQXJHLENBQUosRUFBNEc7QUFBQ0MsYUFBUUMsS0FBUixDQUFjLGlEQUFkO0FBQWlFO0FBQzlLUixxQkFBa0JELGtCQUFrQkEsZ0JBQWdCSyxPQUFwRDtBQUNDO0FBQ0QsS0FBSSxPQUFPSixlQUFQLEtBQTJCLFVBQS9CLEVBQTJDO0FBQ3pDQSxxQkFBa0JBLGdCQUFnQlMsT0FBbEM7QUFDRDtBQUNEVCxpQkFBZ0JVLE1BQWhCLEdBQXlCLHdEQUF6QjtBQUNBVixpQkFBZ0JXLE1BQWhCLEdBQXlCUixpQkFBaUJRLE1BQTFDO0FBQ0FYLGlCQUFnQlksZUFBaEIsR0FBa0NULGlCQUFpQlMsZUFBbkQ7O0FBRUE7QUFDQSxLQUFJLEtBQUosRUFBZ0I7QUFBQyxJQUFDLFlBQVk7QUFDNUIsU0FBSUMsU0FBU1gsUUFBUSxvQkFBUixDQUFiO0FBQ0FXLFlBQU8xQixPQUFQLENBQWVlLFFBQVEsS0FBUixDQUFmLEVBQStCLEtBQS9CO0FBQ0EsU0FBSSxDQUFDVyxPQUFPQyxVQUFaLEVBQXdCO0FBQ3hCN0IsWUFBTzhCLEdBQVAsQ0FBV0MsTUFBWDtBQUNBLFNBQUksQ0FBQy9CLE9BQU84QixHQUFQLENBQVdFLElBQWhCLEVBQXNCO0FBQ3BCSixjQUFPSyxZQUFQLENBQW9CLGlCQUFwQixFQUF1Q2xCLGVBQXZDO0FBQ0QsTUFGRCxNQUVPO0FBQ0xhLGNBQU9NLE1BQVAsQ0FBYyxpQkFBZCxFQUFpQ25CLGVBQWpDO0FBQ0Q7QUFDRixJQVZnQjtBQVVaO0FBQ0wsS0FBSUEsZ0JBQWdCb0IsVUFBcEIsRUFBZ0M7QUFBQ2IsV0FBUUMsS0FBUixDQUFjLGdJQUFkO0FBQWdKOztBQUVqTHZCLFFBQU9DLE9BQVAsR0FBaUJhLGVBQWpCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTs7Ozs7bUJBSUE7dUJBRUE7QUFIQTs7dUJBS0E7bUJBRUE7QUFIQTsrQkFNQTtBQVhBOzs7Ozs7QUFjQTs7O0FBSUE7QUFMQTtBQURBOzsyQkFPQTs7MkJBR0E7QUFGQTtBQUlBO2lDQUNBOytDQUNBO0FBRUE7Ozs7Z0RBRUE7c0NBQ0E7QUFFQTtBQUpBO0FBOUJBLEc7Ozs7OztBQ2JBLGlCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0EsSUFBRztBQUNIO0FBQ0EsSUFBRztBQUNILEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7O0FDOUNBLEtBQUlBLGVBQUosRUFBcUJDLGVBQXJCO0FBQ0EsS0FBSUMsaUJBQWlCLEVBQXJCOztBQUVBO0FBQ0FGLG1CQUFrQixtQkFBQUcsQ0FBUSxFQUFSLENBQWxCOztBQUVBO0FBQ0EsS0FBSUMsbUJBQW1CLG1CQUFBRCxDQUFRLEVBQVIsQ0FBdkI7QUFDQUYsbUJBQWtCRCxrQkFBa0JBLG1CQUFtQixFQUF2RDtBQUNBLEtBQ0UsUUFBT0EsZ0JBQWdCSyxPQUF2QixNQUFtQyxRQUFuQyxJQUNBLE9BQU9MLGdCQUFnQkssT0FBdkIsS0FBbUMsVUFGckMsRUFHRTtBQUNGLE9BQUlmLE9BQU9DLElBQVAsQ0FBWVMsZUFBWixFQUE2Qk0sSUFBN0IsQ0FBa0MsVUFBVUMsR0FBVixFQUFlO0FBQUUsWUFBT0EsUUFBUSxTQUFSLElBQXFCQSxRQUFRLFlBQXBDO0FBQWtELElBQXJHLENBQUosRUFBNEc7QUFBQ0MsYUFBUUMsS0FBUixDQUFjLGlEQUFkO0FBQWlFO0FBQzlLUixxQkFBa0JELGtCQUFrQkEsZ0JBQWdCSyxPQUFwRDtBQUNDO0FBQ0QsS0FBSSxPQUFPSixlQUFQLEtBQTJCLFVBQS9CLEVBQTJDO0FBQ3pDQSxxQkFBa0JBLGdCQUFnQlMsT0FBbEM7QUFDRDtBQUNEVCxpQkFBZ0JVLE1BQWhCLEdBQXlCLHFEQUF6QjtBQUNBVixpQkFBZ0JXLE1BQWhCLEdBQXlCUixpQkFBaUJRLE1BQTFDO0FBQ0FYLGlCQUFnQlksZUFBaEIsR0FBa0NULGlCQUFpQlMsZUFBbkQ7O0FBRUE7QUFDQSxLQUFJLEtBQUosRUFBZ0I7QUFBQyxJQUFDLFlBQVk7QUFDNUIsU0FBSUMsU0FBU1gsUUFBUSxvQkFBUixDQUFiO0FBQ0FXLFlBQU8xQixPQUFQLENBQWVlLFFBQVEsS0FBUixDQUFmLEVBQStCLEtBQS9CO0FBQ0EsU0FBSSxDQUFDVyxPQUFPQyxVQUFaLEVBQXdCO0FBQ3hCN0IsWUFBTzhCLEdBQVAsQ0FBV0MsTUFBWDtBQUNBLFNBQUksQ0FBQy9CLE9BQU84QixHQUFQLENBQVdFLElBQWhCLEVBQXNCO0FBQ3BCSixjQUFPSyxZQUFQLENBQW9CLGlCQUFwQixFQUF1Q2xCLGVBQXZDO0FBQ0QsTUFGRCxNQUVPO0FBQ0xhLGNBQU9NLE1BQVAsQ0FBYyxpQkFBZCxFQUFpQ25CLGVBQWpDO0FBQ0Q7QUFDRixJQVZnQjtBQVVaO0FBQ0wsS0FBSUEsZ0JBQWdCb0IsVUFBcEIsRUFBZ0M7QUFBQ2IsV0FBUUMsS0FBUixDQUFjLGdJQUFkO0FBQWdKOztBQUVqTHZCLFFBQU9DLE9BQVAsR0FBaUJhLGVBQWpCLEM7Ozs7Ozs7Ozs7Ozs7OztBQy9CQTs7O2lDQUVBO21EQUNBO0FBQ0E7QUFIQSxHOzs7Ozs7QUNQQSxpQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7OztBQ1pBLEtBQUlBLGVBQUosRUFBcUJDLGVBQXJCO0FBQ0EsS0FBSUMsaUJBQWlCLEVBQXJCOztBQUVBO0FBQ0FGLG1CQUFrQixtQkFBQUcsQ0FBUSxFQUFSLENBQWxCOztBQUVBO0FBQ0EsS0FBSUMsbUJBQW1CLG1CQUFBRCxDQUFRLEVBQVIsQ0FBdkI7QUFDQUYsbUJBQWtCRCxrQkFBa0JBLG1CQUFtQixFQUF2RDtBQUNBLEtBQ0UsUUFBT0EsZ0JBQWdCSyxPQUF2QixNQUFtQyxRQUFuQyxJQUNBLE9BQU9MLGdCQUFnQkssT0FBdkIsS0FBbUMsVUFGckMsRUFHRTtBQUNGLE9BQUlmLE9BQU9DLElBQVAsQ0FBWVMsZUFBWixFQUE2Qk0sSUFBN0IsQ0FBa0MsVUFBVUMsR0FBVixFQUFlO0FBQUUsWUFBT0EsUUFBUSxTQUFSLElBQXFCQSxRQUFRLFlBQXBDO0FBQWtELElBQXJHLENBQUosRUFBNEc7QUFBQ0MsYUFBUUMsS0FBUixDQUFjLGlEQUFkO0FBQWlFO0FBQzlLUixxQkFBa0JELGtCQUFrQkEsZ0JBQWdCSyxPQUFwRDtBQUNDO0FBQ0QsS0FBSSxPQUFPSixlQUFQLEtBQTJCLFVBQS9CLEVBQTJDO0FBQ3pDQSxxQkFBa0JBLGdCQUFnQlMsT0FBbEM7QUFDRDtBQUNEVCxpQkFBZ0JVLE1BQWhCLEdBQXlCLHFEQUF6QjtBQUNBVixpQkFBZ0JXLE1BQWhCLEdBQXlCUixpQkFBaUJRLE1BQTFDO0FBQ0FYLGlCQUFnQlksZUFBaEIsR0FBa0NULGlCQUFpQlMsZUFBbkQ7O0FBRUE7QUFDQSxLQUFJLEtBQUosRUFBZ0I7QUFBQyxJQUFDLFlBQVk7QUFDNUIsU0FBSUMsU0FBU1gsUUFBUSxvQkFBUixDQUFiO0FBQ0FXLFlBQU8xQixPQUFQLENBQWVlLFFBQVEsS0FBUixDQUFmLEVBQStCLEtBQS9CO0FBQ0EsU0FBSSxDQUFDVyxPQUFPQyxVQUFaLEVBQXdCO0FBQ3hCN0IsWUFBTzhCLEdBQVAsQ0FBV0MsTUFBWDtBQUNBLFNBQUksQ0FBQy9CLE9BQU84QixHQUFQLENBQVdFLElBQWhCLEVBQXNCO0FBQ3BCSixjQUFPSyxZQUFQLENBQW9CLGlCQUFwQixFQUF1Q2xCLGVBQXZDO0FBQ0QsTUFGRCxNQUVPO0FBQ0xhLGNBQU9NLE1BQVAsQ0FBYyxpQkFBZCxFQUFpQ25CLGVBQWpDO0FBQ0Q7QUFDRixJQVZnQjtBQVVaO0FBQ0wsS0FBSUEsZ0JBQWdCb0IsVUFBcEIsRUFBZ0M7QUFBQ2IsV0FBUUMsS0FBUixDQUFjLGdJQUFkO0FBQWdKOztBQUVqTHZCLFFBQU9DLE9BQVAsR0FBaUJhLGVBQWpCLEM7Ozs7Ozs7Ozs7Ozs7OztBQy9CQTs7Ozs7Ozs7QUNOQSxpQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7QUNYQSxLQUFJQSxlQUFKLEVBQXFCQyxlQUFyQjtBQUNBLEtBQUlDLGlCQUFpQixFQUFyQjs7QUFFQTtBQUNBLG9CQUFBQyxDQUFRLEVBQVI7O0FBRUE7QUFDQUgsbUJBQWtCLG1CQUFBRyxDQUFRLEVBQVIsQ0FBbEI7O0FBRUE7QUFDQSxLQUFJQyxtQkFBbUIsbUJBQUFELENBQVEsRUFBUixDQUF2QjtBQUNBRixtQkFBa0JELGtCQUFrQkEsbUJBQW1CLEVBQXZEO0FBQ0EsS0FDRSxRQUFPQSxnQkFBZ0JLLE9BQXZCLE1BQW1DLFFBQW5DLElBQ0EsT0FBT0wsZ0JBQWdCSyxPQUF2QixLQUFtQyxVQUZyQyxFQUdFO0FBQ0YsT0FBSWYsT0FBT0MsSUFBUCxDQUFZUyxlQUFaLEVBQTZCTSxJQUE3QixDQUFrQyxVQUFVQyxHQUFWLEVBQWU7QUFBRSxZQUFPQSxRQUFRLFNBQVIsSUFBcUJBLFFBQVEsWUFBcEM7QUFBa0QsSUFBckcsQ0FBSixFQUE0RztBQUFDQyxhQUFRQyxLQUFSLENBQWMsaURBQWQ7QUFBaUU7QUFDOUtSLHFCQUFrQkQsa0JBQWtCQSxnQkFBZ0JLLE9BQXBEO0FBQ0M7QUFDRCxLQUFJLE9BQU9KLGVBQVAsS0FBMkIsVUFBL0IsRUFBMkM7QUFDekNBLHFCQUFrQkEsZ0JBQWdCUyxPQUFsQztBQUNEO0FBQ0RULGlCQUFnQlUsTUFBaEIsR0FBeUIscURBQXpCO0FBQ0FWLGlCQUFnQlcsTUFBaEIsR0FBeUJSLGlCQUFpQlEsTUFBMUM7QUFDQVgsaUJBQWdCWSxlQUFoQixHQUFrQ1QsaUJBQWlCUyxlQUFuRDs7QUFFQTtBQUNBLEtBQUksS0FBSixFQUFnQjtBQUFDLElBQUMsWUFBWTtBQUM1QixTQUFJQyxTQUFTWCxRQUFRLG9CQUFSLENBQWI7QUFDQVcsWUFBTzFCLE9BQVAsQ0FBZWUsUUFBUSxLQUFSLENBQWYsRUFBK0IsS0FBL0I7QUFDQSxTQUFJLENBQUNXLE9BQU9DLFVBQVosRUFBd0I7QUFDeEI3QixZQUFPOEIsR0FBUCxDQUFXQyxNQUFYO0FBQ0EsU0FBSSxDQUFDL0IsT0FBTzhCLEdBQVAsQ0FBV0UsSUFBaEIsRUFBc0I7QUFDcEJKLGNBQU9LLFlBQVAsQ0FBb0IsaUJBQXBCLEVBQXVDbEIsZUFBdkM7QUFDRCxNQUZELE1BRU87QUFDTGEsY0FBT00sTUFBUCxDQUFjLGlCQUFkLEVBQWlDbkIsZUFBakM7QUFDRDtBQUNGLElBVmdCO0FBVVo7QUFDTCxLQUFJQSxnQkFBZ0JvQixVQUFwQixFQUFnQztBQUFDYixXQUFRQyxLQUFSLENBQWMsZ0lBQWQ7QUFBZ0o7O0FBRWpMdkIsUUFBT0MsT0FBUCxHQUFpQmEsZUFBakIsQzs7Ozs7O0FDeENBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQW1GO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsaUNBQWdDLFVBQVUsRUFBRTtBQUM1QyxFOzs7Ozs7QUNwQkE7QUFDQTs7O0FBR0E7QUFDQSw4RUFBNkUsdUJBQXVCLEdBQUcsMENBQTBDLGlDQUFpQyxHQUFHLG1DQUFtQyw4QkFBOEIsR0FBRyxtQ0FBbUMsZ0NBQWdDLGVBQWUsbUJBQW1CLEdBQUcsa0VBQWtFLG1CQUFtQixHQUFHLHdCQUF3QixlQUFlLEdBQUc7O0FBRW5lOzs7Ozs7Ozs7Ozs7O0FDZ0ZBOzs7Ozs7Ozs7aUJBSUE7c0JBR0E7QUFKQTs7O2FBTUE7aUJBR0E7QUFKQTs7O2FBTUE7aUJBR0E7QUFKQTs7O2FBTUE7aUJBSUE7QUFMQTtBQWhCQTs7OztBQXVCQTs7MkJBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBRUE7OzZCQUNBO2NBQ0E7NkJBQ0E7QUFDQTtBQUVBOzZEQUNBOytCQUNBO0FBRUE7O0FBQ0E7OztvREFDQTs7QUFFQTs7QUFDQTs7OytDQUNBOztBQUVBO2dEQUNBO2lEQUNBO0FBRUE7O0FBQ0E7OzBCQUNBO0FBRUE7a0NBQ0E7c0JBQ0E7QUFFQTs7QUFDQTs7MkNBQ0E7a0RBQ0E7QUFFQTs7QUFDQTs7MkNBQ0E7K0NBQ0E7QUFHQTtBQTlEQTs7eUJBK0RBOzthQUVBO29CQUNBO3NCQUVBO0FBSkE7QUFNQTs7O2lCQUNBO0FBOUZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0dBLGlDQUNBO3lDQUNBOzRCQUNBO2NBQ0E7QUFDQTtBQUNBO1dBQ0E7Ozs7Ozs7Ozs7O0FDL0xBLEtBQUlBLGVBQUosRUFBcUJDLGVBQXJCO0FBQ0EsS0FBSUMsaUJBQWlCLEVBQXJCOztBQUVBO0FBQ0FGLG1CQUFrQixtQkFBQUcsQ0FBUSxFQUFSLENBQWxCOztBQUVBO0FBQ0EsS0FBSUMsbUJBQW1CLG1CQUFBRCxDQUFRLEVBQVIsQ0FBdkI7QUFDQUYsbUJBQWtCRCxrQkFBa0JBLG1CQUFtQixFQUF2RDtBQUNBLEtBQ0UsUUFBT0EsZ0JBQWdCSyxPQUF2QixNQUFtQyxRQUFuQyxJQUNBLE9BQU9MLGdCQUFnQkssT0FBdkIsS0FBbUMsVUFGckMsRUFHRTtBQUNGLE9BQUlmLE9BQU9DLElBQVAsQ0FBWVMsZUFBWixFQUE2Qk0sSUFBN0IsQ0FBa0MsVUFBVUMsR0FBVixFQUFlO0FBQUUsWUFBT0EsUUFBUSxTQUFSLElBQXFCQSxRQUFRLFlBQXBDO0FBQWtELElBQXJHLENBQUosRUFBNEc7QUFBQ0MsYUFBUUMsS0FBUixDQUFjLGlEQUFkO0FBQWlFO0FBQzlLUixxQkFBa0JELGtCQUFrQkEsZ0JBQWdCSyxPQUFwRDtBQUNDO0FBQ0QsS0FBSSxPQUFPSixlQUFQLEtBQTJCLFVBQS9CLEVBQTJDO0FBQ3pDQSxxQkFBa0JBLGdCQUFnQlMsT0FBbEM7QUFDRDtBQUNEVCxpQkFBZ0JVLE1BQWhCLEdBQXlCLHNEQUF6QjtBQUNBVixpQkFBZ0JXLE1BQWhCLEdBQXlCUixpQkFBaUJRLE1BQTFDO0FBQ0FYLGlCQUFnQlksZUFBaEIsR0FBa0NULGlCQUFpQlMsZUFBbkQ7O0FBRUE7QUFDQSxLQUFJLEtBQUosRUFBZ0I7QUFBQyxJQUFDLFlBQVk7QUFDNUIsU0FBSUMsU0FBU1gsUUFBUSxvQkFBUixDQUFiO0FBQ0FXLFlBQU8xQixPQUFQLENBQWVlLFFBQVEsS0FBUixDQUFmLEVBQStCLEtBQS9CO0FBQ0EsU0FBSSxDQUFDVyxPQUFPQyxVQUFaLEVBQXdCO0FBQ3hCN0IsWUFBTzhCLEdBQVAsQ0FBV0MsTUFBWDtBQUNBLFNBQUksQ0FBQy9CLE9BQU84QixHQUFQLENBQVdFLElBQWhCLEVBQXNCO0FBQ3BCSixjQUFPSyxZQUFQLENBQW9CLGlCQUFwQixFQUF1Q2xCLGVBQXZDO0FBQ0QsTUFGRCxNQUVPO0FBQ0xhLGNBQU9NLE1BQVAsQ0FBYyxpQkFBZCxFQUFpQ25CLGVBQWpDO0FBQ0Q7QUFDRixJQVZnQjtBQVVaO0FBQ0wsS0FBSUEsZ0JBQWdCb0IsVUFBcEIsRUFBZ0M7QUFBQ2IsV0FBUUMsS0FBUixDQUFjLGlJQUFkO0FBQWlKOztBQUVsTHZCLFFBQU9DLE9BQVAsR0FBaUJhLGVBQWpCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBOzs7O1VBR0E7O2lCQUtBO0FBSkE7QUFGQTs7K0JBT0E7d0RBQ0E7QUFDQTtBQVZBLEc7Ozs7OztBQ1pBLGlCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQSxJQUFHO0FBQ0gsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7OztBQ3pCQSxpQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLElBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBRztBQUNILEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7O0FDckNBLEtBQUlBLGVBQUosRUFBcUJDLGVBQXJCO0FBQ0EsS0FBSUMsaUJBQWlCLEVBQXJCOztBQUVBO0FBQ0Esb0JBQUFDLENBQVEsRUFBUjs7QUFFQTtBQUNBSCxtQkFBa0IsbUJBQUFHLENBQVEsRUFBUixDQUFsQjs7QUFFQTtBQUNBLEtBQUlDLG1CQUFtQixtQkFBQUQsQ0FBUSxFQUFSLENBQXZCO0FBQ0FGLG1CQUFrQkQsa0JBQWtCQSxtQkFBbUIsRUFBdkQ7QUFDQSxLQUNFLFFBQU9BLGdCQUFnQkssT0FBdkIsTUFBbUMsUUFBbkMsSUFDQSxPQUFPTCxnQkFBZ0JLLE9BQXZCLEtBQW1DLFVBRnJDLEVBR0U7QUFDRixPQUFJZixPQUFPQyxJQUFQLENBQVlTLGVBQVosRUFBNkJNLElBQTdCLENBQWtDLFVBQVVDLEdBQVYsRUFBZTtBQUFFLFlBQU9BLFFBQVEsU0FBUixJQUFxQkEsUUFBUSxZQUFwQztBQUFrRCxJQUFyRyxDQUFKLEVBQTRHO0FBQUNDLGFBQVFDLEtBQVIsQ0FBYyxpREFBZDtBQUFpRTtBQUM5S1IscUJBQWtCRCxrQkFBa0JBLGdCQUFnQkssT0FBcEQ7QUFDQztBQUNELEtBQUksT0FBT0osZUFBUCxLQUEyQixVQUEvQixFQUEyQztBQUN6Q0EscUJBQWtCQSxnQkFBZ0JTLE9BQWxDO0FBQ0Q7QUFDRFQsaUJBQWdCVSxNQUFoQixHQUF5QixvREFBekI7QUFDQVYsaUJBQWdCVyxNQUFoQixHQUF5QlIsaUJBQWlCUSxNQUExQztBQUNBWCxpQkFBZ0JZLGVBQWhCLEdBQWtDVCxpQkFBaUJTLGVBQW5EOztBQUVBO0FBQ0EsS0FBSSxLQUFKLEVBQWdCO0FBQUMsSUFBQyxZQUFZO0FBQzVCLFNBQUlDLFNBQVNYLFFBQVEsb0JBQVIsQ0FBYjtBQUNBVyxZQUFPMUIsT0FBUCxDQUFlZSxRQUFRLEtBQVIsQ0FBZixFQUErQixLQUEvQjtBQUNBLFNBQUksQ0FBQ1csT0FBT0MsVUFBWixFQUF3QjtBQUN4QjdCLFlBQU84QixHQUFQLENBQVdDLE1BQVg7QUFDQSxTQUFJLENBQUMvQixPQUFPOEIsR0FBUCxDQUFXRSxJQUFoQixFQUFzQjtBQUNwQkosY0FBT0ssWUFBUCxDQUFvQixpQkFBcEIsRUFBdUNsQixlQUF2QztBQUNELE1BRkQsTUFFTztBQUNMYSxjQUFPTSxNQUFQLENBQWMsaUJBQWQsRUFBaUNuQixlQUFqQztBQUNEO0FBQ0YsSUFWZ0I7QUFVWjtBQUNMLEtBQUlBLGdCQUFnQm9CLFVBQXBCLEVBQWdDO0FBQUNiLFdBQVFDLEtBQVIsQ0FBYywrSEFBZDtBQUErSTs7QUFFaEx2QixRQUFPQyxPQUFQLEdBQWlCYSxlQUFqQixDOzs7Ozs7QUN4Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBbUY7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxpQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEU7Ozs7OztBQ3BCQTtBQUNBOzs7QUFHQTtBQUNBLDhEQUE2RCx1QkFBdUIsbUJBQW1CLFlBQVksYUFBYSxXQUFXLGNBQWMsZ0JBQWdCLG1CQUFtQix3QkFBd0IsR0FBRzs7QUFFdk47Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMwQ0E7Ozs7O3VDQUdBO3VEQUNBO0FBR0E7QUFMQTs7K0JBTUE7OEJBQ0E7a0NBQ0E7QUFFQTsyQ0FDQTtpQ0FDQTtBQUVBOzs7O21DQUVBOzJDQUNBO0FBQ0E7dUJBQ0E7a0NBQ0EsZ0JBQ0EsOEJBQ0E7QUFDQTtpQ0FDQTs4QkFDQTtBQUVBO3FDQUNBOzJCQUNBO0FBRUE7QUFoQkE7OztpQkFtQkE7c0JBSUE7QUFMQTtBQURBOzt5QkFPQTs7bUJBRUE7eUJBQ0E7Z0JBQ0E7bUJBRUE7QUFMQTtBQU9BOzs7O3lDQUdBOytCQUNBO21CQUNBO0FBRUE7O0FBQ0E7Ozs7VUFDQTtBQUNBO21CQUNBO0FBRUE7dUNBQ0E7eUJBQ0E7K0JBQ0E7QUFFQTsrQkFDQTtBQUNBO3lCQUNBO0FBRUE7eUNBQ0E7eUJBQ0E7QUFFQTs2Q0FDQTt5QkFDQTsrQkFDQTtBQUVBOzZDQUNBO3lCQUNBO0FBRUE7QUFsQ0E7QUFsREE7OztBQXNGQSwwQkFDQTt1RkFDQTs7Ozs7OztBQzFJQSxpQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7QUNuQ0EsS0FBSUEsZUFBSixFQUFxQkMsZUFBckI7QUFDQSxLQUFJQyxpQkFBaUIsRUFBckI7O0FBRUE7QUFDQUYsbUJBQWtCLG1CQUFBRyxDQUFRLEVBQVIsQ0FBbEI7O0FBRUE7QUFDQSxLQUFJQyxtQkFBbUIsbUJBQUFELENBQVEsRUFBUixDQUF2QjtBQUNBRixtQkFBa0JELGtCQUFrQkEsbUJBQW1CLEVBQXZEO0FBQ0EsS0FDRSxRQUFPQSxnQkFBZ0JLLE9BQXZCLE1BQW1DLFFBQW5DLElBQ0EsT0FBT0wsZ0JBQWdCSyxPQUF2QixLQUFtQyxVQUZyQyxFQUdFO0FBQ0YsT0FBSWYsT0FBT0MsSUFBUCxDQUFZUyxlQUFaLEVBQTZCTSxJQUE3QixDQUFrQyxVQUFVQyxHQUFWLEVBQWU7QUFBRSxZQUFPQSxRQUFRLFNBQVIsSUFBcUJBLFFBQVEsWUFBcEM7QUFBa0QsSUFBckcsQ0FBSixFQUE0RztBQUFDQyxhQUFRQyxLQUFSLENBQWMsaURBQWQ7QUFBaUU7QUFDOUtSLHFCQUFrQkQsa0JBQWtCQSxnQkFBZ0JLLE9BQXBEO0FBQ0M7QUFDRCxLQUFJLE9BQU9KLGVBQVAsS0FBMkIsVUFBL0IsRUFBMkM7QUFDekNBLHFCQUFrQkEsZ0JBQWdCUyxPQUFsQztBQUNEO0FBQ0RULGlCQUFnQlUsTUFBaEIsR0FBeUIsbURBQXpCO0FBQ0FWLGlCQUFnQlcsTUFBaEIsR0FBeUJSLGlCQUFpQlEsTUFBMUM7QUFDQVgsaUJBQWdCWSxlQUFoQixHQUFrQ1QsaUJBQWlCUyxlQUFuRDs7QUFFQTtBQUNBLEtBQUksS0FBSixFQUFnQjtBQUFDLElBQUMsWUFBWTtBQUM1QixTQUFJQyxTQUFTWCxRQUFRLG9CQUFSLENBQWI7QUFDQVcsWUFBTzFCLE9BQVAsQ0FBZWUsUUFBUSxLQUFSLENBQWYsRUFBK0IsS0FBL0I7QUFDQSxTQUFJLENBQUNXLE9BQU9DLFVBQVosRUFBd0I7QUFDeEI3QixZQUFPOEIsR0FBUCxDQUFXQyxNQUFYO0FBQ0EsU0FBSSxDQUFDL0IsT0FBTzhCLEdBQVAsQ0FBV0UsSUFBaEIsRUFBc0I7QUFDcEJKLGNBQU9LLFlBQVAsQ0FBb0IsaUJBQXBCLEVBQXVDbEIsZUFBdkM7QUFDRCxNQUZELE1BRU87QUFDTGEsY0FBT00sTUFBUCxDQUFjLGlCQUFkLEVBQWlDbkIsZUFBakM7QUFDRDtBQUNGLElBVmdCO0FBVVo7QUFDTCxLQUFJQSxnQkFBZ0JvQixVQUFwQixFQUFnQztBQUFDYixXQUFRQyxLQUFSLENBQWMsbUlBQWQ7QUFBbUo7O0FBRXBMdkIsUUFBT0MsT0FBUCxHQUFpQmEsZUFBakIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBOzs7OztpQkFJQTthQUVBO0FBSEE7V0FJQTtZQUNBO1VBQ0E7YUFFQTs7WUFFQTtBQVhBOytCQVlBOytDQUNBO0FBQ0E7QUFmQSxHOzs7Ozs7QUNoQkEsaUJBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7OztBQ3JCQSxLQUFJQSxlQUFKLEVBQXFCQyxlQUFyQjtBQUNBLEtBQUlDLGlCQUFpQixFQUFyQjs7QUFFQTtBQUNBRixtQkFBa0IsbUJBQUFHLENBQVEsRUFBUixDQUFsQjs7QUFFQTtBQUNBLEtBQUlDLG1CQUFtQixtQkFBQUQsQ0FBUSxFQUFSLENBQXZCO0FBQ0FGLG1CQUFrQkQsa0JBQWtCQSxtQkFBbUIsRUFBdkQ7QUFDQSxLQUNFLFFBQU9BLGdCQUFnQkssT0FBdkIsTUFBbUMsUUFBbkMsSUFDQSxPQUFPTCxnQkFBZ0JLLE9BQXZCLEtBQW1DLFVBRnJDLEVBR0U7QUFDRixPQUFJZixPQUFPQyxJQUFQLENBQVlTLGVBQVosRUFBNkJNLElBQTdCLENBQWtDLFVBQVVDLEdBQVYsRUFBZTtBQUFFLFlBQU9BLFFBQVEsU0FBUixJQUFxQkEsUUFBUSxZQUFwQztBQUFrRCxJQUFyRyxDQUFKLEVBQTRHO0FBQUNDLGFBQVFDLEtBQVIsQ0FBYyxpREFBZDtBQUFpRTtBQUM5S1IscUJBQWtCRCxrQkFBa0JBLGdCQUFnQkssT0FBcEQ7QUFDQztBQUNELEtBQUksT0FBT0osZUFBUCxLQUEyQixVQUEvQixFQUEyQztBQUN6Q0EscUJBQWtCQSxnQkFBZ0JTLE9BQWxDO0FBQ0Q7QUFDRFQsaUJBQWdCVSxNQUFoQixHQUF5Qix1REFBekI7QUFDQVYsaUJBQWdCVyxNQUFoQixHQUF5QlIsaUJBQWlCUSxNQUExQztBQUNBWCxpQkFBZ0JZLGVBQWhCLEdBQWtDVCxpQkFBaUJTLGVBQW5EOztBQUVBO0FBQ0EsS0FBSSxLQUFKLEVBQWdCO0FBQUMsSUFBQyxZQUFZO0FBQzVCLFNBQUlDLFNBQVNYLFFBQVEsb0JBQVIsQ0FBYjtBQUNBVyxZQUFPMUIsT0FBUCxDQUFlZSxRQUFRLEtBQVIsQ0FBZixFQUErQixLQUEvQjtBQUNBLFNBQUksQ0FBQ1csT0FBT0MsVUFBWixFQUF3QjtBQUN4QjdCLFlBQU84QixHQUFQLENBQVdDLE1BQVg7QUFDQSxTQUFJLENBQUMvQixPQUFPOEIsR0FBUCxDQUFXRSxJQUFoQixFQUFzQjtBQUNwQkosY0FBT0ssWUFBUCxDQUFvQixpQkFBcEIsRUFBdUNsQixlQUF2QztBQUNELE1BRkQsTUFFTztBQUNMYSxjQUFPTSxNQUFQLENBQWMsaUJBQWQsRUFBaUNuQixlQUFqQztBQUNEO0FBQ0YsSUFWZ0I7QUFVWjtBQUNMLEtBQUlBLGdCQUFnQm9CLFVBQXBCLEVBQWdDO0FBQUNiLFdBQVFDLEtBQVIsQ0FBYyxpSUFBZDtBQUFpSjs7QUFFbEx2QixRQUFPQyxPQUFQLEdBQWlCYSxlQUFqQixDOzs7Ozs7Ozs7Ozs7Ozs7O0FDOUJBOzs7WUFHQTs7MkJBQ0E7OzhCQUVBOzJCQUNBOytCQUNBOzJCQUNBO21CQUVBO0FBTkE7QUFRQTs7OzsrQkFFQTsyQ0FDQTtBQUdBO0FBTEE7Ozs7QUFPQTs7Z0NBRUE7O2lFQUNBO3NEQUNBO0FBRUE7O2tDQUNBO0FBR0E7QUFYQTs7aUNBWUE7OENBQ0E7QUFDQTtBQWpDQSxHOzs7Ozs7QUNSQSxpQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7QUNYQSxLQUFJQSxlQUFKLEVBQXFCQyxlQUFyQjtBQUNBLEtBQUlDLGlCQUFpQixFQUFyQjs7QUFFQTtBQUNBRixtQkFBa0IsbUJBQUFHLENBQVEsRUFBUixDQUFsQjs7QUFFQTtBQUNBLEtBQUlDLG1CQUFtQixtQkFBQUQsQ0FBUSxFQUFSLENBQXZCO0FBQ0FGLG1CQUFrQkQsa0JBQWtCQSxtQkFBbUIsRUFBdkQ7QUFDQSxLQUNFLFFBQU9BLGdCQUFnQkssT0FBdkIsTUFBbUMsUUFBbkMsSUFDQSxPQUFPTCxnQkFBZ0JLLE9BQXZCLEtBQW1DLFVBRnJDLEVBR0U7QUFDRixPQUFJZixPQUFPQyxJQUFQLENBQVlTLGVBQVosRUFBNkJNLElBQTdCLENBQWtDLFVBQVVDLEdBQVYsRUFBZTtBQUFFLFlBQU9BLFFBQVEsU0FBUixJQUFxQkEsUUFBUSxZQUFwQztBQUFrRCxJQUFyRyxDQUFKLEVBQTRHO0FBQUNDLGFBQVFDLEtBQVIsQ0FBYyxpREFBZDtBQUFpRTtBQUM5S1IscUJBQWtCRCxrQkFBa0JBLGdCQUFnQkssT0FBcEQ7QUFDQztBQUNELEtBQUksT0FBT0osZUFBUCxLQUEyQixVQUEvQixFQUEyQztBQUN6Q0EscUJBQWtCQSxnQkFBZ0JTLE9BQWxDO0FBQ0Q7QUFDRFQsaUJBQWdCVSxNQUFoQixHQUF5QiwwREFBekI7QUFDQVYsaUJBQWdCVyxNQUFoQixHQUF5QlIsaUJBQWlCUSxNQUExQztBQUNBWCxpQkFBZ0JZLGVBQWhCLEdBQWtDVCxpQkFBaUJTLGVBQW5EOztBQUVBO0FBQ0EsS0FBSSxLQUFKLEVBQWdCO0FBQUMsSUFBQyxZQUFZO0FBQzVCLFNBQUlDLFNBQVNYLFFBQVEsb0JBQVIsQ0FBYjtBQUNBVyxZQUFPMUIsT0FBUCxDQUFlZSxRQUFRLEtBQVIsQ0FBZixFQUErQixLQUEvQjtBQUNBLFNBQUksQ0FBQ1csT0FBT0MsVUFBWixFQUF3QjtBQUN4QjdCLFlBQU84QixHQUFQLENBQVdDLE1BQVg7QUFDQSxTQUFJLENBQUMvQixPQUFPOEIsR0FBUCxDQUFXRSxJQUFoQixFQUFzQjtBQUNwQkosY0FBT0ssWUFBUCxDQUFvQixpQkFBcEIsRUFBdUNsQixlQUF2QztBQUNELE1BRkQsTUFFTztBQUNMYSxjQUFPTSxNQUFQLENBQWMsaUJBQWQsRUFBaUNuQixlQUFqQztBQUNEO0FBQ0YsSUFWZ0I7QUFVWjtBQUNMLEtBQUlBLGdCQUFnQm9CLFVBQXBCLEVBQWdDO0FBQUNiLFdBQVFDLEtBQVIsQ0FBYyxvSUFBZDtBQUFvSjs7QUFFckx2QixRQUFPQyxPQUFQLEdBQWlCYSxlQUFqQixDOzs7Ozs7Ozs7Ozs7QUMxQkE7Ozs7b0JBR0E7Z0JBR0E7QUFKQTs7OytDQU1BO3VFQUNBO0FBRUE7cUNBQ0E7O3FDQUdBO0FBRkE7QUFLQTtBQVhBOztpQ0FZQTswRUFFQTs7b0VBQ0E7NEJBQ0E7Z0JBQ0E7OEJBQ0E7MkNBRUE7O2lDQUNBO29EQUNBO0FBRUE7OzZCQUNBO2lEQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O21EQUVBO3NEQUNBO0FBQ0E7QUFHQTtBQU5BOzs7K0RBUUE7d0JBQ0E7OEVBQ0E7b0NBQ0E7b0JBQ0E7c0RBQ0E7b0NBQ0E7QUFDQTtBQUVBOztBQUVBOzswQ0FFQTs7bUZBQ0E7Z0NBQ0E7bUNBQ0E7aURBRUE7O0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7eUZBRUE7QUFFQTtzRUFDQTtxREFDQTs2R0FDQTtBQUVBO21DQUNBO29DQUNBO21DQUNBO3VEQUNBO3dCQUNBO3FEQUNBO0FBRUE7O2tDQUVBO0FBQ0E7QUFHQTtBQWpEQTs7MkJBa0RBOzswQkFFQTtzQkFDQTt1QkFDQTtvQkFFQTtBQUxBO0FBTUE7QUFyR0E7Ozs7Ozs7Ozs7Ozs7O0FDWkEsaUJBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7QUMzQkEsS0FBSUEsZUFBSixFQUFxQkMsZUFBckI7QUFDQSxLQUFJQyxpQkFBaUIsRUFBckI7O0FBRUE7QUFDQUYsbUJBQWtCLG1CQUFBRyxDQUFRLEVBQVIsQ0FBbEI7O0FBRUE7QUFDQSxLQUFJQyxtQkFBbUIsbUJBQUFELENBQVEsRUFBUixDQUF2QjtBQUNBRixtQkFBa0JELGtCQUFrQkEsbUJBQW1CLEVBQXZEO0FBQ0EsS0FDRSxRQUFPQSxnQkFBZ0JLLE9BQXZCLE1BQW1DLFFBQW5DLElBQ0EsT0FBT0wsZ0JBQWdCSyxPQUF2QixLQUFtQyxVQUZyQyxFQUdFO0FBQ0YsT0FBSWYsT0FBT0MsSUFBUCxDQUFZUyxlQUFaLEVBQTZCTSxJQUE3QixDQUFrQyxVQUFVQyxHQUFWLEVBQWU7QUFBRSxZQUFPQSxRQUFRLFNBQVIsSUFBcUJBLFFBQVEsWUFBcEM7QUFBa0QsSUFBckcsQ0FBSixFQUE0RztBQUFDQyxhQUFRQyxLQUFSLENBQWMsaURBQWQ7QUFBaUU7QUFDOUtSLHFCQUFrQkQsa0JBQWtCQSxnQkFBZ0JLLE9BQXBEO0FBQ0M7QUFDRCxLQUFJLE9BQU9KLGVBQVAsS0FBMkIsVUFBL0IsRUFBMkM7QUFDekNBLHFCQUFrQkEsZ0JBQWdCUyxPQUFsQztBQUNEO0FBQ0RULGlCQUFnQlUsTUFBaEIsR0FBeUIsMkRBQXpCO0FBQ0FWLGlCQUFnQlcsTUFBaEIsR0FBeUJSLGlCQUFpQlEsTUFBMUM7QUFDQVgsaUJBQWdCWSxlQUFoQixHQUFrQ1QsaUJBQWlCUyxlQUFuRDs7QUFFQTtBQUNBLEtBQUksS0FBSixFQUFnQjtBQUFDLElBQUMsWUFBWTtBQUM1QixTQUFJQyxTQUFTWCxRQUFRLG9CQUFSLENBQWI7QUFDQVcsWUFBTzFCLE9BQVAsQ0FBZWUsUUFBUSxLQUFSLENBQWYsRUFBK0IsS0FBL0I7QUFDQSxTQUFJLENBQUNXLE9BQU9DLFVBQVosRUFBd0I7QUFDeEI3QixZQUFPOEIsR0FBUCxDQUFXQyxNQUFYO0FBQ0EsU0FBSSxDQUFDL0IsT0FBTzhCLEdBQVAsQ0FBV0UsSUFBaEIsRUFBc0I7QUFDcEJKLGNBQU9LLFlBQVAsQ0FBb0IsaUJBQXBCLEVBQXVDbEIsZUFBdkM7QUFDRCxNQUZELE1BRU87QUFDTGEsY0FBT00sTUFBUCxDQUFjLGlCQUFkLEVBQWlDbkIsZUFBakM7QUFDRDtBQUNGLElBVmdCO0FBVVo7QUFDTCxLQUFJQSxnQkFBZ0JvQixVQUFwQixFQUFnQztBQUFDYixXQUFRQyxLQUFSLENBQWMscUlBQWQ7QUFBcUo7O0FBRXRMdkIsUUFBT0MsT0FBUCxHQUFpQmEsZUFBakIsQzs7Ozs7Ozs7Ozs7O0FDNUJBOzs7OzJCQUdBOzBCQUNBO0FBR0E7QUFMQTs7OzJCQU9BOzttQkFFQTtzQkFHQTtBQUpBO0FBRkE7QUFQQTs7Ozs7Ozs7Ozs7QUNWQSxpQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7QUNyQkEsS0FBSUEsZUFBSixFQUFxQkMsZUFBckI7QUFDQSxLQUFJQyxpQkFBaUIsRUFBckI7O0FBRUE7QUFDQUYsbUJBQWtCLG1CQUFBRyxDQUFRLEVBQVIsQ0FBbEI7O0FBRUE7QUFDQSxLQUFJQyxtQkFBbUIsbUJBQUFELENBQVEsRUFBUixDQUF2QjtBQUNBRixtQkFBa0JELGtCQUFrQkEsbUJBQW1CLEVBQXZEO0FBQ0EsS0FDRSxRQUFPQSxnQkFBZ0JLLE9BQXZCLE1BQW1DLFFBQW5DLElBQ0EsT0FBT0wsZ0JBQWdCSyxPQUF2QixLQUFtQyxVQUZyQyxFQUdFO0FBQ0YsT0FBSWYsT0FBT0MsSUFBUCxDQUFZUyxlQUFaLEVBQTZCTSxJQUE3QixDQUFrQyxVQUFVQyxHQUFWLEVBQWU7QUFBRSxZQUFPQSxRQUFRLFNBQVIsSUFBcUJBLFFBQVEsWUFBcEM7QUFBa0QsSUFBckcsQ0FBSixFQUE0RztBQUFDQyxhQUFRQyxLQUFSLENBQWMsaURBQWQ7QUFBaUU7QUFDOUtSLHFCQUFrQkQsa0JBQWtCQSxnQkFBZ0JLLE9BQXBEO0FBQ0M7QUFDRCxLQUFJLE9BQU9KLGVBQVAsS0FBMkIsVUFBL0IsRUFBMkM7QUFDekNBLHFCQUFrQkEsZ0JBQWdCUyxPQUFsQztBQUNEO0FBQ0RULGlCQUFnQlUsTUFBaEIsR0FBeUIsMkRBQXpCO0FBQ0FWLGlCQUFnQlcsTUFBaEIsR0FBeUJSLGlCQUFpQlEsTUFBMUM7QUFDQVgsaUJBQWdCWSxlQUFoQixHQUFrQ1QsaUJBQWlCUyxlQUFuRDs7QUFFQTtBQUNBLEtBQUksS0FBSixFQUFnQjtBQUFDLElBQUMsWUFBWTtBQUM1QixTQUFJQyxTQUFTWCxRQUFRLG9CQUFSLENBQWI7QUFDQVcsWUFBTzFCLE9BQVAsQ0FBZWUsUUFBUSxLQUFSLENBQWYsRUFBK0IsS0FBL0I7QUFDQSxTQUFJLENBQUNXLE9BQU9DLFVBQVosRUFBd0I7QUFDeEI3QixZQUFPOEIsR0FBUCxDQUFXQyxNQUFYO0FBQ0EsU0FBSSxDQUFDL0IsT0FBTzhCLEdBQVAsQ0FBV0UsSUFBaEIsRUFBc0I7QUFDcEJKLGNBQU9LLFlBQVAsQ0FBb0IsaUJBQXBCLEVBQXVDbEIsZUFBdkM7QUFDRCxNQUZELE1BRU87QUFDTGEsY0FBT00sTUFBUCxDQUFjLGlCQUFkLEVBQWlDbkIsZUFBakM7QUFDRDtBQUNGLElBVmdCO0FBVVo7QUFDTCxLQUFJQSxnQkFBZ0JvQixVQUFwQixFQUFnQztBQUFDYixXQUFRQyxLQUFSLENBQWMscUlBQWQ7QUFBcUo7O0FBRXRMdkIsUUFBT0MsT0FBUCxHQUFpQmEsZUFBakIsQzs7Ozs7Ozs7Ozs7Ozs7O0FDL0JBOzs7MkJBRUE7Z0JBQ0E7QUFDQTtBQUhBLEc7Ozs7OztBQ1BBLGlCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7OztBQ1RBLEtBQUlBLGVBQUosRUFBcUJDLGVBQXJCO0FBQ0EsS0FBSUMsaUJBQWlCLEVBQXJCOztBQUVBO0FBQ0FGLG1CQUFrQixtQkFBQUcsQ0FBUSxFQUFSLENBQWxCOztBQUVBO0FBQ0EsS0FBSUMsbUJBQW1CLG1CQUFBRCxDQUFRLEVBQVIsQ0FBdkI7QUFDQUYsbUJBQWtCRCxrQkFBa0JBLG1CQUFtQixFQUF2RDtBQUNBLEtBQ0UsUUFBT0EsZ0JBQWdCSyxPQUF2QixNQUFtQyxRQUFuQyxJQUNBLE9BQU9MLGdCQUFnQkssT0FBdkIsS0FBbUMsVUFGckMsRUFHRTtBQUNGLE9BQUlmLE9BQU9DLElBQVAsQ0FBWVMsZUFBWixFQUE2Qk0sSUFBN0IsQ0FBa0MsVUFBVUMsR0FBVixFQUFlO0FBQUUsWUFBT0EsUUFBUSxTQUFSLElBQXFCQSxRQUFRLFlBQXBDO0FBQWtELElBQXJHLENBQUosRUFBNEc7QUFBQ0MsYUFBUUMsS0FBUixDQUFjLGlEQUFkO0FBQWlFO0FBQzlLUixxQkFBa0JELGtCQUFrQkEsZ0JBQWdCSyxPQUFwRDtBQUNDO0FBQ0QsS0FBSSxPQUFPSixlQUFQLEtBQTJCLFVBQS9CLEVBQTJDO0FBQ3pDQSxxQkFBa0JBLGdCQUFnQlMsT0FBbEM7QUFDRDtBQUNEVCxpQkFBZ0JVLE1BQWhCLEdBQXlCLHdEQUF6QjtBQUNBVixpQkFBZ0JXLE1BQWhCLEdBQXlCUixpQkFBaUJRLE1BQTFDO0FBQ0FYLGlCQUFnQlksZUFBaEIsR0FBa0NULGlCQUFpQlMsZUFBbkQ7O0FBRUE7QUFDQSxLQUFJLEtBQUosRUFBZ0I7QUFBQyxJQUFDLFlBQVk7QUFDNUIsU0FBSUMsU0FBU1gsUUFBUSxvQkFBUixDQUFiO0FBQ0FXLFlBQU8xQixPQUFQLENBQWVlLFFBQVEsS0FBUixDQUFmLEVBQStCLEtBQS9CO0FBQ0EsU0FBSSxDQUFDVyxPQUFPQyxVQUFaLEVBQXdCO0FBQ3hCN0IsWUFBTzhCLEdBQVAsQ0FBV0MsTUFBWDtBQUNBLFNBQUksQ0FBQy9CLE9BQU84QixHQUFQLENBQVdFLElBQWhCLEVBQXNCO0FBQ3BCSixjQUFPSyxZQUFQLENBQW9CLGlCQUFwQixFQUF1Q2xCLGVBQXZDO0FBQ0QsTUFGRCxNQUVPO0FBQ0xhLGNBQU9NLE1BQVAsQ0FBYyxpQkFBZCxFQUFpQ25CLGVBQWpDO0FBQ0Q7QUFDRixJQVZnQjtBQVVaO0FBQ0wsS0FBSUEsZ0JBQWdCb0IsVUFBcEIsRUFBZ0M7QUFBQ2IsV0FBUUMsS0FBUixDQUFjLGtJQUFkO0FBQWtKOztBQUVuTHZCLFFBQU9DLE9BQVAsR0FBaUJhLGVBQWpCLEM7Ozs7Ozs7Ozs7Ozs7OztBQy9CQTs7Ozs7bUJBSUE7c0JBR0E7QUFKQTtBQURBO0FBREEsRzs7Ozs7O0FDUEEsaUJBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7OztBQ2JBLEtBQUlBLGVBQUosRUFBcUJDLGVBQXJCO0FBQ0EsS0FBSUMsaUJBQWlCLEVBQXJCOztBQUVBO0FBQ0FGLG1CQUFrQixtQkFBQUcsQ0FBUSxFQUFSLENBQWxCOztBQUVBO0FBQ0EsS0FBSUMsbUJBQW1CLG1CQUFBRCxDQUFRLEVBQVIsQ0FBdkI7QUFDQUYsbUJBQWtCRCxrQkFBa0JBLG1CQUFtQixFQUF2RDtBQUNBLEtBQ0UsUUFBT0EsZ0JBQWdCSyxPQUF2QixNQUFtQyxRQUFuQyxJQUNBLE9BQU9MLGdCQUFnQkssT0FBdkIsS0FBbUMsVUFGckMsRUFHRTtBQUNGLE9BQUlmLE9BQU9DLElBQVAsQ0FBWVMsZUFBWixFQUE2Qk0sSUFBN0IsQ0FBa0MsVUFBVUMsR0FBVixFQUFlO0FBQUUsWUFBT0EsUUFBUSxTQUFSLElBQXFCQSxRQUFRLFlBQXBDO0FBQWtELElBQXJHLENBQUosRUFBNEc7QUFBQ0MsYUFBUUMsS0FBUixDQUFjLGlEQUFkO0FBQWlFO0FBQzlLUixxQkFBa0JELGtCQUFrQkEsZ0JBQWdCSyxPQUFwRDtBQUNDO0FBQ0QsS0FBSSxPQUFPSixlQUFQLEtBQTJCLFVBQS9CLEVBQTJDO0FBQ3pDQSxxQkFBa0JBLGdCQUFnQlMsT0FBbEM7QUFDRDtBQUNEVCxpQkFBZ0JVLE1BQWhCLEdBQXlCLDJEQUF6QjtBQUNBVixpQkFBZ0JXLE1BQWhCLEdBQXlCUixpQkFBaUJRLE1BQTFDO0FBQ0FYLGlCQUFnQlksZUFBaEIsR0FBa0NULGlCQUFpQlMsZUFBbkQ7O0FBRUE7QUFDQSxLQUFJLEtBQUosRUFBZ0I7QUFBQyxJQUFDLFlBQVk7QUFDNUIsU0FBSUMsU0FBU1gsUUFBUSxvQkFBUixDQUFiO0FBQ0FXLFlBQU8xQixPQUFQLENBQWVlLFFBQVEsS0FBUixDQUFmLEVBQStCLEtBQS9CO0FBQ0EsU0FBSSxDQUFDVyxPQUFPQyxVQUFaLEVBQXdCO0FBQ3hCN0IsWUFBTzhCLEdBQVAsQ0FBV0MsTUFBWDtBQUNBLFNBQUksQ0FBQy9CLE9BQU84QixHQUFQLENBQVdFLElBQWhCLEVBQXNCO0FBQ3BCSixjQUFPSyxZQUFQLENBQW9CLGlCQUFwQixFQUF1Q2xCLGVBQXZDO0FBQ0QsTUFGRCxNQUVPO0FBQ0xhLGNBQU9NLE1BQVAsQ0FBYyxpQkFBZCxFQUFpQ25CLGVBQWpDO0FBQ0Q7QUFDRixJQVZnQjtBQVVaO0FBQ0wsS0FBSUEsZ0JBQWdCb0IsVUFBcEIsRUFBZ0M7QUFBQ2IsV0FBUUMsS0FBUixDQUFjLHFJQUFkO0FBQXFKOztBQUV0THZCLFFBQU9DLE9BQVAsR0FBaUJhLGVBQWpCLEM7Ozs7Ozs7O0FDckNBLGlCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7OztBQ1RBLEtBQUlBLGVBQUosRUFBcUJDLGVBQXJCO0FBQ0EsS0FBSUMsaUJBQWlCLEVBQXJCOztBQUVBO0FBQ0Esb0JBQUFDLENBQVEsRUFBUjs7QUFFQTtBQUNBSCxtQkFBa0IsbUJBQUFHLENBQVEsRUFBUixDQUFsQjs7QUFFQTtBQUNBLEtBQUlDLG1CQUFtQixtQkFBQUQsQ0FBUSxFQUFSLENBQXZCO0FBQ0FGLG1CQUFrQkQsa0JBQWtCQSxtQkFBbUIsRUFBdkQ7QUFDQSxLQUNFLFFBQU9BLGdCQUFnQkssT0FBdkIsTUFBbUMsUUFBbkMsSUFDQSxPQUFPTCxnQkFBZ0JLLE9BQXZCLEtBQW1DLFVBRnJDLEVBR0U7QUFDRixPQUFJZixPQUFPQyxJQUFQLENBQVlTLGVBQVosRUFBNkJNLElBQTdCLENBQWtDLFVBQVVDLEdBQVYsRUFBZTtBQUFFLFlBQU9BLFFBQVEsU0FBUixJQUFxQkEsUUFBUSxZQUFwQztBQUFrRCxJQUFyRyxDQUFKLEVBQTRHO0FBQUNDLGFBQVFDLEtBQVIsQ0FBYyxpREFBZDtBQUFpRTtBQUM5S1IscUJBQWtCRCxrQkFBa0JBLGdCQUFnQkssT0FBcEQ7QUFDQztBQUNELEtBQUksT0FBT0osZUFBUCxLQUEyQixVQUEvQixFQUEyQztBQUN6Q0EscUJBQWtCQSxnQkFBZ0JTLE9BQWxDO0FBQ0Q7QUFDRFQsaUJBQWdCVSxNQUFoQixHQUF5QixrREFBekI7QUFDQVYsaUJBQWdCVyxNQUFoQixHQUF5QlIsaUJBQWlCUSxNQUExQztBQUNBWCxpQkFBZ0JZLGVBQWhCLEdBQWtDVCxpQkFBaUJTLGVBQW5EOztBQUVBO0FBQ0EsS0FBSSxLQUFKLEVBQWdCO0FBQUMsSUFBQyxZQUFZO0FBQzVCLFNBQUlDLFNBQVNYLFFBQVEsb0JBQVIsQ0FBYjtBQUNBVyxZQUFPMUIsT0FBUCxDQUFlZSxRQUFRLEtBQVIsQ0FBZixFQUErQixLQUEvQjtBQUNBLFNBQUksQ0FBQ1csT0FBT0MsVUFBWixFQUF3QjtBQUN4QjdCLFlBQU84QixHQUFQLENBQVdDLE1BQVg7QUFDQSxTQUFJLENBQUMvQixPQUFPOEIsR0FBUCxDQUFXRSxJQUFoQixFQUFzQjtBQUNwQkosY0FBT0ssWUFBUCxDQUFvQixpQkFBcEIsRUFBdUNsQixlQUF2QztBQUNELE1BRkQsTUFFTztBQUNMYSxjQUFPTSxNQUFQLENBQWMsaUJBQWQsRUFBaUNuQixlQUFqQztBQUNEO0FBQ0YsSUFWZ0I7QUFVWjtBQUNMLEtBQUlBLGdCQUFnQm9CLFVBQXBCLEVBQWdDO0FBQUNiLFdBQVFDLEtBQVIsQ0FBYyxrSUFBZDtBQUFrSjs7QUFFbkx2QixRQUFPQyxPQUFQLEdBQWlCYSxlQUFqQixDOzs7Ozs7QUN4Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBb0Y7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxpQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEU7Ozs7OztBQ3BCQTtBQUNBOzs7QUFHQTtBQUNBLG9EQUFtRCxvQkFBb0IsZ0JBQWdCLGlCQUFpQixrQkFBa0Isb0JBQW9CLDJCQUEyQix3QkFBd0IsVUFBVSxZQUFZLG1CQUFtQixnQ0FBZ0MsR0FBRyxxQ0FBcUMsMkJBQTJCLGlCQUFpQixpQkFBaUIsbUJBQW1CLHFCQUFxQixHQUFHLFVBQVUsNkVBQTZFLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsMFFBQTBRLE9BQU8seWNBQXljLGVBQWUseUJBQXlCLGdCQUFnQixvRUFBb0UsT0FBTyxLQUFLLGNBQWMsY0FBYywwQkFBMEIsS0FBSyxhQUFhLGNBQWMsMkJBQTJCLDhDQUE4QyxtREFBbUQsS0FBSyxpQkFBaUIsNkVBQTZFLGVBQWUsZUFBZSxzSUFBc0ksaUJBQWlCLG9IQUFvSCx3QkFBd0IsU0FBUyxHQUFHLDBEQUEwRCxLQUFLLGFBQWEsaUNBQWlDLCtFQUErRSxLQUFLLEdBQUcsK0NBQStDLG9CQUFvQixnQkFBZ0IsaUJBQWlCLGtCQUFrQixvQkFBb0IsMkJBQTJCLHdCQUF3QixVQUFVLFlBQVksbUJBQW1CLGdDQUFnQyxHQUFHLHFDQUFxQywyQkFBMkIsaUJBQWlCLGlCQUFpQixtQkFBbUIscUJBQXFCLEdBQUcsdUNBQXVDOztBQUU3d0Y7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFnQixtQkFBbUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCLHNCQUFzQjtBQUN0QztBQUNBO0FBQ0EsbUJBQWtCLDJCQUEyQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZSxtQkFBbUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUIsMkJBQTJCO0FBQzVDO0FBQ0E7QUFDQSxTQUFRLHVCQUF1QjtBQUMvQjtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0Esa0JBQWlCLHVCQUF1QjtBQUN4QztBQUNBO0FBQ0EsNEJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZSxpQkFBaUI7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWM7QUFDZDtBQUNBLGlDQUFnQyxzQkFBc0I7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXVEO0FBQ3ZEOztBQUVBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbE1BOzs7Ozs7OzsrQ0FHQTs7aURBR0E7QUFGQTtBQUlBO0FBTkE7eUJBT0E7O2FBR0E7QUFGQTtBQUdBOzs7O2FBSUE7QUFGQTtnQkFHQTs7YUFFQTtnQkFHQTtBQUpBO0FBTEE7K0JBVUE7NEVBQ0E7QUFDQTs7OztBQUVBOzttQkFDQTs7aUNBQ0E7O2tCQUNBO0FBQ0E7NkJBQ0E7bUJBQ0E7NENBQ0E7a0JBQ0E7QUFDQTs7QUFDQTs7MkNBQ0E7QUFFQTtBQWRBOztxREFnQkE7NkVBQ0E7QUFFQTtBQUpBO0FBekNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QkE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBQ0EsRSIsImZpbGUiOiJsaWIuYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJWdWVSZXVzYWJsZU1hdGVyaWFsQ29tcG9uZW50c1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJWdWVSZXVzYWJsZU1hdGVyaWFsQ29tcG9uZW50c1wiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBhNmIwMGI4OTUzODAzZWEzYWZkOCIsImltcG9ydCBTZXR1cE1kbCBmcm9tICcuL2RpcmVjdGl2ZXMvc2V0dXAtbWRsJztcblxuLy8gY29tcG9uZW50cyBpbXBvcnRcbmltcG9ydCBNVGV4dGZpZWxkIGZyb20gJy4vdGV4dGZpZWxkLnZ1ZSc7XG5pbXBvcnQgTUJ1dHRvbiBmcm9tICcuL2J1dHRvbi52dWUnO1xuaW1wb3J0IE1TbmFja2JhciBmcm9tICcuL3NuYWNrYmFyLnZ1ZSc7XG5pbXBvcnQgTVNlbGVjdCBmcm9tICcuL3NlbGVjdC9zZWxlY3QudnVlJztcbmltcG9ydCBNU2xpZGVyIGZyb20gJy4vc2xpZGVyLnZ1ZSc7XG5pbXBvcnQgTUJhZGdlIGZyb20gJy4vYmFkZ2UnO1xuaW1wb3J0IE1Qcm9ncmVzcyBmcm9tICcuL3Byb2dyZXNzLnZ1ZSc7XG5pbXBvcnQgTVNwaW5uZXIgZnJvbSAnLi9zcGlubmVyLnZ1ZSc7XG5pbXBvcnQgTUNoZWNrYm94IGZyb20gJy4vdG9nZ2xlcy9jaGVja2JveC52dWUnO1xuaW1wb3J0IE1SYWRpbyBmcm9tICcuL3RvZ2dsZXMvcmFkaW8udnVlJztcbmltcG9ydCBNU3dpdGNoIGZyb20gJy4vdG9nZ2xlcy9zd2l0Y2gudnVlJztcbmltcG9ydCBNSWNvblRvZ2dsZSBmcm9tICcuL3RvZ2dsZXMvaWNvbi52dWUnO1xuaW1wb3J0IE1NZW51IGZyb20gJy4vbWVudS9tZW51LnZ1ZSc7XG5pbXBvcnQgTU1lbnVJdGVtIGZyb20gJy4vbWVudS9pdGVtLnZ1ZSc7XG5pbXBvcnQgTVRhYnMgZnJvbSAnLi90YWJzL3RhYnMudnVlJztcbmltcG9ydCBNVGFiIGZyb20gJy4vdGFicy90YWIudnVlJztcbmltcG9ydCBNVG9vbHRpcCBmcm9tICcuL3Rvb2x0aXAudnVlJztcblxuLy8gdGFibGVcbmltcG9ydCBNVGFibGUgZnJvbSAnLi90YWJsZS90YWJsZS52dWUnO1xuaW1wb3J0IE1UYWJsZVJvdyBmcm9tICcuL3RhYmxlL3RhYmxlUm93LnZ1ZSc7XG5pbXBvcnQgTVRhYmxlQ2VsbCBmcm9tICcuL3RhYmxlL3RhYmxlQ2VsbC52dWUnO1xuaW1wb3J0IE1UYWJsZUhlYWQgZnJvbSAnLi90YWJsZS90YWJsZUhlYWQudnVlJztcbmltcG9ydCBNVGFibGVIIGZyb20gJy4vdGFibGUvdGFibGVILnZ1ZSc7XG5pbXBvcnQgTVRhYmxlQm9keSBmcm9tICcuL3RhYmxlL3RhYmxlQm9keS52dWUnO1xuXG5pbXBvcnQgTURpYWxvZyBmcm9tICcuL2RpYWxvZy52dWUnO1xuaW1wb3J0IE1DYXJkIGZyb20gJy4vY2FyZC52dWUnO1xuaW1wb3J0IE1DaGlwIGZyb20gJy4vY2hpcC52dWUnO1xuXG5pbXBvcnQgTUxpc3QgZnJvbSAnLi9saXN0L2xpc3QudnVlJztcbmltcG9ydCBNTGlzdEl0ZW0gZnJvbSAnLi9saXN0L2xpc3RJdGVtLnZ1ZSc7XG5cbmNvbnN0IGNvbXBvbmVudHMgPSB7XG4gIE1UZXh0ZmllbGQsXG4gIE1CdXR0b24sXG4gIE1TbmFja2JhcixcbiAgTVNlbGVjdCxcbiAgTVNsaWRlcixcbiAgTUJhZGdlLFxuICBNUHJvZ3Jlc3MsXG4gIE1TcGlubmVyLFxuICBNQ2hlY2tib3gsXG4gIE1SYWRpbyxcbiAgTVN3aXRjaCxcbiAgTUljb25Ub2dnbGUsXG4gIE1NZW51LFxuICBNTWVudUl0ZW0sXG4gIE1UYWJzLFxuICBNVGFiLFxuICBNVG9vbHRpcCxcblxuICBNVGFibGUsXG4gIE1UYWJsZVJvdyxcbiAgTVRhYmxlQ2VsbCxcbiAgTVRhYmxlSGVhZCxcbiAgTVRhYmxlSCxcbiAgTVRhYmxlQm9keSxcblxuICBNRGlhbG9nLFxuICBNQ2FyZCxcbiAgTUNoaXAsXG5cbiAgTUxpc3QsXG4gIE1MaXN0SXRlbSxcbn1cblxuY29uc3QgZGlyZWN0aXZlcyA9IHtcbiAgU2V0dXBNZGxcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGluc3RhbGwgKFZ1ZSkge1xuICAgIE9iamVjdC5rZXlzKGNvbXBvbmVudHMpLmZvckVhY2goKG5hbWUpID0+IFZ1ZS5jb21wb25lbnQobmFtZSwgY29tcG9uZW50c1tuYW1lXSkpO1xuICAgIE9iamVjdC5rZXlzKGRpcmVjdGl2ZXMpLmZvckVhY2goKG5hbWUpID0+IFZ1ZS5kaXJlY3RpdmUobmFtZSwgZGlyZWN0aXZlc1tuYW1lXSkpO1xuICB9XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIHNldHVwIChlbCkge1xuICAgIGNvbXBvbmVudEhhbmRsZXIudXBncmFkZUVsZW1lbnRzKGVsKVxuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RpcmVjdGl2ZXMvc2V0dXAtbWRsLmpzIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vdGV4dGZpZWxkLnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMTFlNmZmYjghdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vdGV4dGZpZWxkLnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCIvVXNlcnMvb3ovc3JjL21hdGVyaWFsLWNvbXBvbmVudHMvc3JjL3RleHRmaWVsZC52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTExZTZmZmI4XCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTExZTZmZmI4XCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfVxufSkoKX1cbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gdGV4dGZpZWxkLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy90ZXh0ZmllbGQudnVlIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJtZGwtdGV4dGZpZWxkIG1kbC1qcy10ZXh0ZmllbGRcIiA6Y2xhc3M9XCJ7J21kbC10ZXh0ZmllbGQtLWZsb2F0aW5nLWxhYmVsJzogZmxvYXRMYWJlbCwgJ21kbC10ZXh0ZmllbGQtLWV4cGFuZGFibGUnOiBleHBhbmRhYmxlLCAnaXMtZGlydHknOiBpc0RpcnR5LCAnaXMtZGlzYWJsZWQnOiBkaXNhYmxlZCB9XCI+XG4gICAgICAgIDxzbG90IHYtaWY9XCJleHBhbmRhYmxlXCIgbmFtZT1cImV4cGFuZGFibGUtYnV0dG9uXCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWJ1dHRvbi0taWNvblwiIDpmb3I9XCJpZFwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj57e2V4cGFuZGFibGV9fTwvaT5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvc2xvdD5cblxuICAgICAgICA8ZGl2IDpjbGFzcz1cInsnbWRsLXRleHRmaWVsZF9fZXhwYW5kYWJsZS1ob2xkZXInOiBleHBhbmRhYmxlfVwiPlxuXG4gICAgICAgICAgICA8c2xvdCB2LWlmPVwidGV4dGFyZWFcIiBuYW1lPVwidGV4dGFyZWFcIj5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XCJtZGwtdGV4dGZpZWxkX19pbnB1dFwiIHJlZj1cImZvY3VzVGFyZ2V0XCIgdHlwZT1cInRleHRcIiA6dmFsdWU9XCJ2YWx1ZVwiIEBpbnB1dD1cImZpcmVJbnB1dEV2ZW50XCIgOnJlcXVpcmVkPVwicmVxdWlyZWRcIiA6aWQ9XCJpZFwiIDpyb3dzPVwicm93c1wiIDptYXhsZW5ndGg9XCJtYXhsZW5ndGhcIj5cbiAgICAgICAgICAgICAgICA8L3RleHRhcmVhPlxuICAgICAgICAgICAgPC9zbG90PlxuXG4gICAgICAgICAgICA8c2xvdCB2LWVsc2U9XCJ2LWVsc2VcIiBuYW1lPVwiaW5wdXRcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJtZGwtdGV4dGZpZWxkX19pbnB1dFwiIHJlZj1cImZvY3VzVGFyZ2V0XCIgOnR5cGU9XCJ0eXBlXCIgOnZhbHVlPVwidmFsdWVcIiBAaW5wdXQ9XCJmaXJlSW5wdXRFdmVudFwiIDppZD1cImlkXCIgOnBhdHRlcm49XCJwYXR0ZXJuXCIgOmRpc2FibGVkPVwiZGlzYWJsZWRcIiA6cmVxdWlyZWQ9XCJyZXF1aXJlZFwiIDpyZWFkb25seT1cInJlYWRvbmx5XCIgOmF1dG9jb21wbGV0ZT1cImF1dG9jb21wbGV0ZVwiIDptYXhsZW5ndGg9XCJtYXhsZW5ndGhcIi8+XG4gICAgICAgICAgICA8L3Nsb3Q+XG5cbiAgICAgICAgICAgIDxzbG90IG5hbWU9XCJlcnJvclwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cIm1kbC10ZXh0ZmllbGRfX2Vycm9yXCIgdi1pZj1cImVycm9yXCI+e3tlcnJvcn19PC9sYWJlbD5cbiAgICAgICAgICAgIDwvc2xvdD5cblxuICAgICAgICAgICAgPHNsb3QgbmFtZT1cImxhYmVsXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibWRsLXRleHRmaWVsZF9fbGFiZWxcIiB2LWlmPVwic2hvd0xhYmVsXCIgOmZvcj1cImlkXCI+e3tzaG93TGFiZWx9fTwvbGFiZWw+XG4gICAgICAgICAgICA8L3Nsb3Q+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IHtcbiAgICBhdXRvY29tcGxldGU6IFN0cmluZyxcbiAgICBtYXhsZW5ndGg6IHtcbiAgICAgIHJlcXVpcmVkOiBmYWxzZVxuICAgIH0sXG5cbiAgICBleHBhbmRhYmxlOiBTdHJpbmcsXG4gICAgdHlwZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ3RleHQnXG4gICAgfSxcblxuICAgIHJvd3M6IHtcbiAgICAgIHJlcXVpcmVkOiBmYWxzZVxuICAgIH0sXG5cbiAgICBpZDogU3RyaW5nLFxuXG4gICAgdmFsdWU6IHtcbiAgICAgIHJlcXVpcmVkOiBmYWxzZVxuICAgIH0sXG5cbiAgICBkaXNhYmxlZDoge1xuICAgICAgdHlwZTogW0Jvb2xlYW4sIFN0cmluZ10sXG4gICAgICBmaWxsOiB0cnVlLFxuICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9LFxuXG4gICAgcmVxdWlyZWQ6IHtcbiAgICAgIHR5cGU6IFtCb29sZWFuLCBTdHJpbmddLFxuICAgICAgZmlsbDogdHJ1ZSxcbiAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfSxcblxuICAgIHJlYWRvbmx5OiB7XG4gICAgICB0eXBlOiBbQm9vbGVhbiwgU3RyaW5nXSxcbiAgICAgIGZpbGw6IHRydWUsXG4gICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG5cbiAgICBsYWJlbDogU3RyaW5nLFxuICAgIHBhdHRlcm46IFN0cmluZyxcbiAgICBlcnJvcjogU3RyaW5nLFxuICAgIHRleHRhcmVhOiBCb29sZWFuLFxuICAgIGZsb2F0TGFiZWw6IFtCb29sZWFuLCBTdHJpbmddXG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBzaG93TGFiZWwgKCkge1xuICAgICAgcmV0dXJuIHRoaXMubGFiZWwgfHwgdGhpcy5mbG9hdExhYmVsXG4gICAgfSxcbiAgICBpc0RpcnR5ICgpIHtcbiAgICAgIHJldHVybiAnJyArIHRoaXMudmFsdWVcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBmaXJlSW5wdXRFdmVudDogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgIH0sXG4gICAgZm9jdXMoKSB7XG4gICAgICB0aGlzLiRyZWZzLmZvY3VzVGFyZ2V0LmZvY3VzKClcbiAgICAgIHJldHVybiB0aGlzXG4gICAgfSxcblxuICAgIHNlbGVjdCgpIHtcbiAgICAgIHRoaXMuJHJlZnMuZm9jdXNUYXJnZXQuc2VsZWN0KClcbiAgICAgIHJldHVybiB0aGlzXG4gICAgfSxcblxuICAgIGJsdXIoKSB7XG4gICAgICB0aGlzLiRyZWZzLmZvY3VzVGFyZ2V0LmJsdXIoKVxuICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgY29tcG9uZW50SGFuZGxlci51cGdyYWRlRWxlbWVudCh0aGlzLiRlbCwgJ01hdGVyaWFsVGV4dGZpZWxkJylcbiAgfVxufVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gdGV4dGZpZWxkLnZ1ZT80YWUwMjc0OCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kbC10ZXh0ZmllbGQgbWRsLWpzLXRleHRmaWVsZFwiLFxuICAgIGNsYXNzOiB7XG4gICAgICAnbWRsLXRleHRmaWVsZC0tZmxvYXRpbmctbGFiZWwnOiBfdm0uZmxvYXRMYWJlbCwgJ21kbC10ZXh0ZmllbGQtLWV4cGFuZGFibGUnOiBfdm0uZXhwYW5kYWJsZSwgJ2lzLWRpcnR5JzogX3ZtLmlzRGlydHksICdpcy1kaXNhYmxlZCc6IF92bS5kaXNhYmxlZFxuICAgIH1cbiAgfSwgWyhfdm0uZXhwYW5kYWJsZSkgPyBfdm0uX3QoXCJleHBhbmRhYmxlLWJ1dHRvblwiLCBbX2MoJ2xhYmVsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kbC1idXR0b24gbWRsLWpzLWJ1dHRvbiBtZGwtYnV0dG9uLS1pY29uXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IF92bS5pZFxuICAgIH1cbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1hdGVyaWFsLWljb25zXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmV4cGFuZGFibGUpKV0pXSldKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGNsYXNzOiB7XG4gICAgICAnbWRsLXRleHRmaWVsZF9fZXhwYW5kYWJsZS1ob2xkZXInOiBfdm0uZXhwYW5kYWJsZVxuICAgIH1cbiAgfSwgWyhfdm0udGV4dGFyZWEpID8gX3ZtLl90KFwidGV4dGFyZWFcIiwgW19jKCd0ZXh0YXJlYScsIHtcbiAgICByZWY6IFwiZm9jdXNUYXJnZXRcIixcbiAgICBzdGF0aWNDbGFzczogXCJtZGwtdGV4dGZpZWxkX19pbnB1dFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcInJlcXVpcmVkXCI6IF92bS5yZXF1aXJlZCxcbiAgICAgIFwiaWRcIjogX3ZtLmlkLFxuICAgICAgXCJyb3dzXCI6IF92bS5yb3dzLFxuICAgICAgXCJtYXhsZW5ndGhcIjogX3ZtLm1heGxlbmd0aFxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLnZhbHVlXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBfdm0uZmlyZUlucHV0RXZlbnRcbiAgICB9XG4gIH0pXSkgOiBfdm0uX3QoXCJpbnB1dFwiLCBbX2MoJ2lucHV0Jywge1xuICAgIHJlZjogXCJmb2N1c1RhcmdldFwiLFxuICAgIHN0YXRpY0NsYXNzOiBcIm1kbC10ZXh0ZmllbGRfX2lucHV0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBfdm0udHlwZSxcbiAgICAgIFwiaWRcIjogX3ZtLmlkLFxuICAgICAgXCJwYXR0ZXJuXCI6IF92bS5wYXR0ZXJuLFxuICAgICAgXCJkaXNhYmxlZFwiOiBfdm0uZGlzYWJsZWQsXG4gICAgICBcInJlcXVpcmVkXCI6IF92bS5yZXF1aXJlZCxcbiAgICAgIFwicmVhZG9ubHlcIjogX3ZtLnJlYWRvbmx5LFxuICAgICAgXCJhdXRvY29tcGxldGVcIjogX3ZtLmF1dG9jb21wbGV0ZSxcbiAgICAgIFwibWF4bGVuZ3RoXCI6IF92bS5tYXhsZW5ndGhcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS52YWx1ZVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogX3ZtLmZpcmVJbnB1dEV2ZW50XG4gICAgfVxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfdm0uX3QoXCJlcnJvclwiLCBbKF92bS5lcnJvcikgPyBfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWRsLXRleHRmaWVsZF9fZXJyb3JcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uZXJyb3IpKV0pIDogX3ZtLl9lKCldKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl90KFwibGFiZWxcIiwgWyhfdm0uc2hvd0xhYmVsKSA/IF9jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZGwtdGV4dGZpZWxkX19sYWJlbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBfdm0uaWRcbiAgICB9XG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5zaG93TGFiZWwpKV0pIDogX3ZtLl9lKCldKV0sIDIpXSwgMilcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMTFlNmZmYjhcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTExZTZmZmI4IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvdGV4dGZpZWxkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9idXR0b24udnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0zMDU5NDlmNyF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9idXR0b24udnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIi9Vc2Vycy9vei9zcmMvbWF0ZXJpYWwtY29tcG9uZW50cy9zcmMvYnV0dG9uLnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMzA1OTQ5ZjdcIiwgX192dWVfb3B0aW9uc19fKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMzA1OTQ5ZjdcIiwgX192dWVfb3B0aW9uc19fKVxuICB9XG59KSgpfVxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBidXR0b24udnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2J1dHRvbi52dWUiLCI8dGVtcGxhdGU+XG4gICAgPGJ1dHRvbiBjbGFzcz1cIm1kbC1idXR0b24gbWRsLWpzLWJ1dHRvblwiIDpjbGFzcz1cImNzc0NsYXNzZXNcIiA6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiPlxuICAgICAgICA8c2xvdD5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIiB2LWlmPVwiaXNJY29cIiA+e3tpY29ufX08L2k+XG4gICAgICAgIDwvc2xvdD5cbiAgICA8L2J1dHRvbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiB7XG4gICAgcmlwcGxlOiBCb29sZWFuLFxuICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgIG1pbmlGYWI6IEJvb2xlYW4sXG4gICAgZmFiOiBCb29sZWFuLFxuICAgIHJhaXNlZDogQm9vbGVhbixcbiAgICBjb2xvcmVkOiBCb29sZWFuLFxuICAgIGljb246IFtTdHJpbmcsIEJvb2xlYW5dLFxuICAgIGFjY2VudDogQm9vbGVhbixcbiAgICBtaW5pRmFiOiBCb29sZWFuLFxuICAgIGZhYjogQm9vbGVhbixcbiAgICByYWlzZWQ6IEJvb2xlYW4sXG4gICAgcHJpbWFyeTogQm9vbGVhbixcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBjc3NDbGFzc2VzKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJ21kbC1qcy1yaXBwbGUtZWZmZWN0JzogdGhpcy5yaXBwbGUsXG4gICAgICAgICdtZGwtYnV0dG9uLS1jb2xvcmVkJzogdGhpcy5jb2xvcmVkLFxuICAgICAgICAnbWRsLWJ1dHRvbi0taWNvbic6IHRoaXMuaWNvbixcbiAgICAgICAgJ21kbC1idXR0b24tLWFjY2VudCc6IHRoaXMuYWNjZW50LFxuICAgICAgICAnbWRsLWJ1dHRvbi0tbWluaS1mYWInOiB0aGlzLm1pbmlGYWIsXG4gICAgICAgICdtZGwtYnV0dG9uLS1wcmltYXJ5JzogdGhpcy5wcmltYXJ5LFxuICAgICAgICAnbWRsLWJ1dHRvbi0tZmFiJzogdGhpcy5mYWIgfHwgdGhpcy5taW5pRmFiLFxuICAgICAgICAnbWRsLWJ1dHRvbi0tcmFpc2VkJzogdGhpcy5yYWlzZWQsXG4gICAgICB9XG4gICAgfSxcbiAgICBpc0ljbygpIHtcbiAgICAgIHJldHVybiB0aGlzLmljb24gJiYgdHlwZW9mIHRoaXMuaWNvbiA9PT0gJ3N0cmluZydcbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQgKCkge1xuICAgIGNvbXBvbmVudEhhbmRsZXIudXBncmFkZUVsZW1lbnQodGhpcy4kZWwpXG4gIH1cbn1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGJ1dHRvbi52dWU/Yzc4ZWRiZDIiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZGwtYnV0dG9uIG1kbC1qcy1idXR0b25cIixcbiAgICBjbGFzczogX3ZtLmNzc0NsYXNzZXMsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZGlzYWJsZWRcIjogX3ZtLmRpc2FibGVkXG4gICAgfVxuICB9LCBbX3ZtLl90KFwiZGVmYXVsdFwiLCBbKF92bS5pc0ljbykgPyBfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtYXRlcmlhbC1pY29uc1wiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5pY29uKSldKSA6IF92bS5fZSgpXSldLCAyKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0zMDU5NDlmN1wiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMzA1OTQ5ZjchLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9idXR0b24udnVlXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xudmFyIF9fdnVlX3N0eWxlc19fID0ge31cblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3NuYWNrYmFyLnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMzIxYTUzMGEhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc25hY2tiYXIudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIi9Vc2Vycy9vei9zcmMvbWF0ZXJpYWwtY29tcG9uZW50cy9zcmMvc25hY2tiYXIudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0zMjFhNTMwYVwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0zMjFhNTMwYVwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH1cbn0pKCl9XG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHNuYWNrYmFyLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zbmFja2Jhci52dWUiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cIm1kbC1qcy1zbmFja2JhciBtZGwtc25hY2tiYXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1zbmFja2Jhcl9fdGV4dFwiPjwvZGl2PlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwibWRsLXNuYWNrYmFyX19hY3Rpb25cIiB0eXBlPVwiYnV0dG9uXCI+PC9idXR0b24+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczoge1xuICAgIGV2ZW50U291cmNlOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICBkZWZhdWx0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRyb290XG4gICAgICB9XG4gICAgfSxcbiAgICBkaXNwbGF5T246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgfSxcblxuICBjcmVhdGVkKCkge1xuICB9LFxuXG4gIG1vdW50ZWQoKSB7XG4gICAgY29tcG9uZW50SGFuZGxlci51cGdyYWRlRWxlbWVudCh0aGlzLiRlbCwgJ01hdGVyaWFsU25hY2tiYXInKTtcblxuICAgIHRoaXMuZXZlbnRTb3VyY2UuJG9uKHRoaXMuZGlzcGxheU9uLCAoc25hY2tiYXJDb25maWcpID0+IHtcbiAgICAgICAgdGhpcy4kZWwuTWF0ZXJpYWxTbmFja2Jhci5zaG93U25hY2tiYXIoc25hY2tiYXJDb25maWcpXG4gICAgfSlcbiAgfVxufVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNuYWNrYmFyLnZ1ZT81NmJhNjRlYSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfdm0uX20oMClcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kbC1qcy1zbmFja2JhciBtZGwtc25hY2tiYXJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZGwtc25hY2tiYXJfX3RleHRcIlxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZGwtc25hY2tiYXJfX2FjdGlvblwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJidXR0b25cIlxuICAgIH1cbiAgfSldKVxufV19XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTMyMWE1MzBhXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0zMjFhNTMwYSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL3NuYWNrYmFyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXN0eWxlIWNzcyF2dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtMmJkYjRhOGMhc2FzcyF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vc2VsZWN0LnZ1ZVwiKVxuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vc2VsZWN0LnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMmJkYjRhOGMhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc2VsZWN0LnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCIvVXNlcnMvb3ovc3JjL21hdGVyaWFsLWNvbXBvbmVudHMvc3JjL3NlbGVjdC9zZWxlY3QudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0yYmRiNGE4Y1wiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0yYmRiNGE4Y1wiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH1cbn0pKCl9XG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHNlbGVjdC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VsZWN0L3NlbGVjdC52dWUiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMmJkYjRhOGMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NlbGVjdC52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0yYmRiNGE4YyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vc2VsZWN0LnZ1ZVwiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMmJkYjRhOGMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NlbGVjdC52dWVcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0yYmRiNGE4YyEuL34vc2Fzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zcmMvc2VsZWN0L3NlbGVjdC52dWVcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLm96LXNlbGVjdC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDUwMHB4O1xcbn1cXG4ub3otc2VsZWN0LWNvbnRhaW5lciAuc2VhcmNoLWl0ZW0ge1xcbiAgICBwYWRkaW5nOiAwIDIwcHg7XFxufVxcbi5vei1zZWxlY3QtY29udGFpbmVyIC5tZGwtbWVudV9fY29udGFpbmVyIHtcXG4gICAgdG9wOiA4cHggIWltcG9ydGFudDtcXG59XFxuLm96LXNlbGVjdC1jb250YWluZXIgLmNhcmV0IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDI1cHg7XFxuICAgIHJpZ2h0OiAxMHB4O1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIG9wYWNpdHk6IC43O1xcbn1cXG4ub3otc2VsZWN0LWNvbnRhaW5lciAubWRsLWNoZWNrYm94IHtcXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0yYmRiNGE4YyEuL34vc2Fzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zcmMvc2VsZWN0L3NlbGVjdC52dWVcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGxpc3QgPSBbXTtcclxuXHJcblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcclxuXHRcdFx0aWYoaXRlbVsyXSkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xyXG5cdH07XHJcblxyXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xyXG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcclxuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xyXG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXHJcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XHJcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcclxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcclxuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cclxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcclxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcclxuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdHJldHVybiBsaXN0O1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbnZhciBzdHlsZXNJbkRvbSA9IHt9LFxyXG5cdG1lbW9pemUgPSBmdW5jdGlvbihmbikge1xyXG5cdFx0dmFyIG1lbW87XHJcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0XHRyZXR1cm4gbWVtbztcclxuXHRcdH07XHJcblx0fSxcclxuXHRpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAvbXNpZSBbNi05XVxcYi8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKTtcclxuXHR9KSxcclxuXHRnZXRIZWFkRWxlbWVudCA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO1xyXG5cdH0pLFxyXG5cdHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsLFxyXG5cdHNpbmdsZXRvbkNvdW50ZXIgPSAwLFxyXG5cdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wID0gW107XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcclxuXHRpZih0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcclxuXHRcdGlmKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xyXG5cdH1cclxuXHJcblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XHJcblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxyXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xyXG5cclxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgPGhlYWQ+LlxyXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XHJcblxyXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCk7XHJcblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XHJcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xyXG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcclxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xyXG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XHJcblx0XHR9XHJcblx0XHRpZihuZXdMaXN0KSB7XHJcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCk7XHJcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XHJcblx0XHR9XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcclxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xyXG5cdFx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKylcclxuXHRcdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKCk7XHJcblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xyXG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XHJcblx0XHRpZihkb21TdHlsZSkge1xyXG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XHJcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xyXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzKGxpc3QpIHtcclxuXHR2YXIgc3R5bGVzID0gW107XHJcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XHJcblx0XHR2YXIgaWQgPSBpdGVtWzBdO1xyXG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XHJcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xyXG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XHJcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XHJcblx0XHRpZighbmV3U3R5bGVzW2lkXSlcclxuXHRcdFx0c3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcclxuXHRcdGVsc2VcclxuXHRcdFx0bmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xyXG5cdH1cclxuXHRyZXR1cm4gc3R5bGVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KSB7XHJcblx0dmFyIGhlYWQgPSBnZXRIZWFkRWxlbWVudCgpO1xyXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wW3N0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xyXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XHJcblx0XHRpZighbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcclxuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBoZWFkLmZpcnN0Q2hpbGQpO1xyXG5cdFx0fSBlbHNlIGlmKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XHJcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0fVxyXG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AucHVzaChzdHlsZUVsZW1lbnQpO1xyXG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xyXG5cdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0Jy4gTXVzdCBiZSAndG9wJyBvciAnYm90dG9tJy5cIik7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XHJcblx0c3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHR2YXIgaWR4ID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZUVsZW1lbnQpO1xyXG5cdGlmKGlkeCA+PSAwKSB7XHJcblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSB7XHJcblx0dmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuXHRzdHlsZUVsZW1lbnQudHlwZSA9IFwidGV4dC9jc3NcIjtcclxuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KTtcclxuXHRyZXR1cm4gc3R5bGVFbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKSB7XHJcblx0dmFyIGxpbmtFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XHJcblx0bGlua0VsZW1lbnQucmVsID0gXCJzdHlsZXNoZWV0XCI7XHJcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmtFbGVtZW50KTtcclxuXHRyZXR1cm4gbGlua0VsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xyXG5cdHZhciBzdHlsZUVsZW1lbnQsIHVwZGF0ZSwgcmVtb3ZlO1xyXG5cclxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcclxuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XHJcblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSk7XHJcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCB0cnVlKTtcclxuXHR9IGVsc2UgaWYob2JqLnNvdXJjZU1hcCAmJlxyXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcclxuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xyXG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0XHRpZihzdHlsZUVsZW1lbnQuaHJlZilcclxuXHRcdFx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlRWxlbWVudC5ocmVmKTtcclxuXHRcdH07XHJcblx0fSBlbHNlIHtcclxuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcclxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xyXG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZShvYmopO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XHJcblx0XHRpZihuZXdPYmopIHtcclxuXHRcdFx0aWYobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZW1vdmUoKTtcclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xyXG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcclxuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcclxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xyXG5cdH07XHJcbn0pKCk7XHJcblxyXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xyXG5cclxuXHRpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xyXG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2RlcztcclxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcclxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGVFbGVtZW50LCBvYmopIHtcclxuXHR2YXIgY3NzID0gb2JqLmNzcztcclxuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XHJcblxyXG5cdGlmKG1lZGlhKSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXHJcblx0fVxyXG5cclxuXHRpZihzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcclxuXHR9IGVsc2Uge1xyXG5cdFx0d2hpbGUoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcclxuXHRcdH1cclxuXHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUxpbmsobGlua0VsZW1lbnQsIG9iaikge1xyXG5cdHZhciBjc3MgPSBvYmouY3NzO1xyXG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xyXG5cclxuXHRpZihzb3VyY2VNYXApIHtcclxuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XHJcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XHJcblx0fVxyXG5cclxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcclxuXHJcblx0dmFyIG9sZFNyYyA9IGxpbmtFbGVtZW50LmhyZWY7XHJcblxyXG5cdGxpbmtFbGVtZW50LmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG5cclxuXHRpZihvbGRTcmMpXHJcblx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwib3otc2VsZWN0LWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLXRleHRmaWVsZCBtZGwtanMtdGV4dGZpZWxkXCIgQGNsaWNrPVwib3BlblwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVhZG9ubHk9XCJ0cnVlXCIgOnZhbHVlPVwiX3ZhbHVlLm5hbWVcIiA6aWQ9XCJpZFwiIGNsYXNzPVwibWRsLXRleHRmaWVsZF9faW5wdXRcIj4gPHNwYW4gY2xhc3M9XCJjYXJldFwiPuKWvDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHVsIGNsYXNzPVwibWRsLW1lbnUgbWRsLWpzLW1lbnUgbWRsLWpzLXJpcHBsZS1lZmZlY3RcIiA6Zm9yPVwiaWRcIiBzdHlsZT1cIndpZHRoOiAzMDBweFwiIHJlZj1cIm1lbnVcIj5cblxuICAgICAgICAgICAgPGxpIHYtaWY9XCJzZWFyY2hcIiBAY2xpY2suc3RvcCBjbGFzcz1cInNlYXJjaC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgPG0tdGV4dGZpZWxkIGxhYmVsPVwiU2VhcmNoLi4uXCIgdi1tb2RlbD1cInNlYXJjaFRleHRcIiByZWY9XCJzZWFyY2hGaWVsZFwiPjwvbS10ZXh0ZmllbGQ+XG4gICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICA8c2xvdCB2LWlmPVwibG9hZGluZ1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJ0ZXh0LWFsaWduOiBjZW50ZXI7IGxpbmUtaGVpZ2h0OiA0MHB4O1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Mb2FkaW5nLi4uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8bS1wcm9ncmVzcyBpbmRldGVybWluYXRlPjwvbS1wcm9ncmVzcz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc2xvdD5cblxuICAgICAgICAgICAgPHNsb3Qgdi1pZj1cIm5vdEZvdW5kXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlcjsgbGluZS1oZWlnaHQ6IDQwcHg7IG9wYWNpdHk6IC4zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPk5vdCBmb3VuZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc2xvdD5cblxuICAgICAgICAgICAgPG0tc2VsZWN0LWl0ZW0gOm11bHRpcGxlPVwibXVsdGlwbGVcIiB2LWZvcj1cIm9wdGlvbiBpbiBkYXRhSXRlbXNcIiA6aXRlbXM9XCJkYXRhSXRlbXNcIiA6c2VsZWN0ZWQtaXRlbXM9XCJ2YWx1ZVwiIDppdGVtLXZhbHVlPVwib3B0aW9uXCI+PC9tLXNlbGVjdC1pdGVtPlxuICAgICAgICA8L3VsPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuICAgIC5vei1zZWxlY3QtY29udGFpbmVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cbiAgICAgICAgd2lkdGg6IDUwMHB4O1xuXG4gICAgICAgIC5zZWFyY2gtaXRlbSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDIwcHg7O1xuICAgICAgICB9XG5cbiAgICAgICAgLm1kbC1tZW51X19jb250YWluZXIge1xuICAgICAgICAgICAgdG9wOiAgOHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZXQge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAyNXB4O1xuICAgICAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBvcGFjaXR5OiAuNztcbiAgICAgICAgfVxuXG4gICAgICAgIC5tZGwtY2hlY2tib3gge1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgfVxuICAgIH1cbjwvc3R5bGU+XG48c2NyaXB0PlxuICAgIGltcG9ydCB7IGRlYm91bmNlLCBlc2NhcGVSZWdFeHAgfSBmcm9tICcuLi91dGlscydcbiAgICBpbXBvcnQgTVNlbGVjdEl0ZW0gZnJvbSAnLi9zZWxlY3RJdGVtLnZ1ZSdcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgTVNlbGVjdEl0ZW1cbiAgICAgICAgfSxcblxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgaWQ6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGF0YVNvdXJjZToge1xuICAgICAgICAgICAgICAgIHR5cGU6IFtBcnJheSwgRnVuY3Rpb25dLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogW0FycmF5LCBPYmplY3QsIFN0cmluZywgTnVtYmVyXSwgLy8gbXVsdGlwbGUgdmFsdWUgY2FuIGJlIG9ubHkgQXJyYXlcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHNlYXJjaDogQm9vbGVhbixcbiAgICAgICAgICAgIG11bHRpcGxlOiBCb29sZWFuLFxuICAgICAgICB9LFxuXG4gICAgICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgICAgICBpZih0eXBlb2YgdGhpcy5kYXRhU291cmNlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhSXRlbXMgPSB0aGlzLmRhdGFTb3VyY2U7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhSXRlbXNPcmlnaW5hbCA9IHRoaXMuZGF0YVNvdXJjZTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYodGhpcy5tdWx0aXBsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcyA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBfdmFsdWUoKSB7XG4gICAgICAgICAgICAgICAgbGV0IHZhbCA9IHtuYW1lOiAnU2VsZWN0Li4uJywgdmFsdWU6IG51bGx9O1xuXG4gICAgICAgICAgICAgICAgaWYodGhpcy52YWx1ZS52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gdGhpcy5kYXRhSXRlbXMuZmluZChlbCA9PiBlbC52YWx1ZSA9PSB0aGlzLnZhbHVlLnZhbHVlKTtcblxuICAgICAgICAgICAgICAgICAgICBpZihyZXMpIHZhbCA9IHJlcztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGRhdGFJdGVtczogW10sXG4gICAgICAgICAgICAgICAgZGF0YUl0ZW1zT3JpZ2luYWw6IFtdLFxuICAgICAgICAgICAgICAgIHdhc09wZW46IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNlYXJjaFRleHQ6ICcnLFxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgbm90Rm91bmQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG06IGZhbHNlLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHdhdGNoOiB7XG4gICAgICAgICAgICBzZWFyY2hUZXh0OiBkZWJvdW5jZShmdW5jdGlvbihuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZih0aGlzLnNlYXJjaCAmJiBuZXdWYWx1ZSAhPSBvbGRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZighbmV3VmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFJdGVtcyA9IHRoaXMuZGF0YUl0ZW1zT3JpZ2luYWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3RGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpdGVtcyA9IHRoaXMuZGF0YUl0ZW1zT3JpZ2luYWwuZmlsdGVyKGVsID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlZyA9IG5ldyBSZWdFeHAoZXNjYXBlUmVnRXhwKG5ld1ZhbHVlKSwgJ2knKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlZy50ZXN0KGVsLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3RGb3VuZCA9ICFpdGVtcy5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFJdGVtcyA9IGl0ZW1zO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVjYWxjdWxhdGVNZW51SGVpZ2h0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMjAwKVxuICAgICAgICB9LFxuXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIF9zdWNjZXNzKHJlc3BvbnNlRGF0YSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YUl0ZW1zID0gcmVzcG9uc2VEYXRhO1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YUl0ZW1zT3JpZ2luYWwgPSByZXNwb25zZURhdGE7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy4kbWVudS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgVnVlLm5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kbWVudS5zaG93KCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBzZWxlY3RWYWx1ZSh2YWwpIHtcbiAgICAgICAgICAgICAgICBpZih0aGlzLm11bHRpcGxlKSB7XG4gICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZS5wdXNoKHZhbCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYodmFsICYmIHR5cGVvZiB2YWwgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIHZhbCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIHZhbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRtZW51LmhpZGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICB1bnNlbGVjdFZhbHVlKHZhbCkge1xuICAgICAgICAgICAgICAgIGlmKCF0aGlzLm11bHRpcGxlKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSB0aGlzLnZhbHVlLmluZGV4T2YodmFsKTtcblxuICAgICAgICAgICAgICAgIGlmKGluZGV4ICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWUuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBfZmFpbHVyZShyZWFzb24pIHtcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBoYW5kbGUgdGhpc1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgX3JlY2FsY3VsYXRlTWVudUhlaWdodCgpIHtcbiAgICAgICAgICAgICAgICBWdWUubmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgIGxldCBoZWlnaHQgPSB0aGlzLiRyZWZzLm1lbnUuTWF0ZXJpYWxNZW51LmVsZW1lbnRfLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLm1lbnUuTWF0ZXJpYWxNZW51LmNvbnRhaW5lcl8uc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLm1lbnUuTWF0ZXJpYWxNZW51Lm91dGxpbmVfLnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBpdGVtQ2xpY2soZXYsIG9wdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUubmFtZSA9IG9wdGlvbi5uYW1lO1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUudmFsdWUgPSBvcHRpb24udmFsdWU7XG5cbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBpbXByb3ZlIHRoaXMgY29kZSBsaW5lXG4gICAgICAgICAgICAgICAgdGhpcy4kbWVudS5oaWRlKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmlzT3BlbiA9ICF0aGlzLmlzT3BlbjtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIG9wZW4oZXYpIHtcbiAgICAgICAgICAgICAgICBpZighdGhpcy53YXNPcGVuICYmIHR5cGVvZiB0aGlzLmRhdGFTb3VyY2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53YXNPcGVuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlKHRoaXMuX3N1Y2Nlc3MsIHRoaXMuX2ZhaWx1cmUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKHRoaXMuc2VhcmNoKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5zZWFyY2hGaWVsZC4kZWwuTWF0ZXJpYWxUZXh0ZmllbGQuaW5wdXRfLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBtb3VudGVkICgpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudEhhbmRsZXIudXBncmFkZUVsZW1lbnQodGhpcy4kcmVmcy5tZW51LCAnTWF0ZXJpYWxNZW51Jyk7XG4gICAgICAgICAgICB0aGlzLiRtZW51ID0gdGhpcy4kcmVmcy5tZW51Lk1hdGVyaWFsTWVudTtcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNlbGVjdC52dWU/YzBhZTQzYTIiLCJleHBvcnQgZnVuY3Rpb24gZ2VuSWQoKSB7XG4gIHJldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoNyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5JZFNob3J0KCkge1xuICByZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIwKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNsYXNzKG9iaiwgY2xzID0gJycpIHtcbiAgbGV0IGNsYXNzZXMgPSBvYmouY2xhc3NOYW1lLnNwbGl0KCcgJyk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjbGFzc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYoY2xhc3Nlc1tpXSA9PSBjbHMpIHtcbiAgICAgIGNsYXNzZXMuc3BsaWNlKGksIDEpO1xuICAgICAgaS0tO1xuICAgIH1cbiAgfVxuICBvYmouY2xhc3NOYW1lID0gY2xhc3Nlcy5qb2luKCcgJyk7XG5cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xvc2VzdFZ1ZVBhcmVudCgkcGFyZW50LCBjc3NDbGFzcykge1xuICBpZiAoISRwYXJlbnQgfHwgISRwYXJlbnQuJGVsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKCRwYXJlbnQuX3VpZCA9PT0gMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICgkcGFyZW50LiRlbC5jbGFzc0xpc3QuY29udGFpbnMoY3NzQ2xhc3MpKSB7XG4gICAgcmV0dXJuICRwYXJlbnQ7XG4gIH1cblxuICByZXR1cm4gZ2V0Q2xvc2VzdFZ1ZVBhcmVudCgkcGFyZW50LiRwYXJlbnQsIGNzc0NsYXNzKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWJvdW5jZShmbiA9IG51bGwsIGRlbGF5ID0gMzAwKSB7XG4gIGxldCB0aW1lciA9IG51bGw7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICBjbGVhckludGVydmFsKHRpbWVyKTtcblxuICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgIH0sIGRlbGF5KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXNjYXBlUmVnRXhwKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1tcXC1cXFtcXF1cXC9cXHtcXH1cXChcXClcXCpcXCtcXD9cXC5cXFxcXFxeXFwkXFx8XS9nLCBcIlxcXFwkJlwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZXBhcmVPcHRpb25WYWx1ZSh2YWwsIHRyeUZyb21OYW1lID0gZmFsc2UpIHtcbiAgaWYodmFsICYmICh0eXBlb2YgdmFsID09ICdzdHJpbmcnKSB8fCAodHlwZW9mIHZhbCA9PSAnbnVtYmVyJykpIHtcbiAgICByZXR1cm4gdmFsO1xuICB9IGVsc2UgaWYodmFsICYmIHR5cGVvZiB2YWwgPT0gJ29iamVjdCcpIHtcbiAgICBpZih0cnlGcm9tTmFtZSkge1xuICAgICAgcmV0dXJuIHZhbC5uYW1lIHx8IHZhbC52YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsLnZhbHVlO1xuICAgIFxuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUuZXJyKCdJbnZhbGlkIHR5cGUgb2YgaXRlbSwgbXVzdCBiZSBTdHJpbmcsIE51bWJlciBvciBPYmplY3QnKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzLmpzIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vc2VsZWN0SXRlbS52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTAwODBkMTI2IXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NlbGVjdEl0ZW0udnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIi9Vc2Vycy9vei9zcmMvbWF0ZXJpYWwtY29tcG9uZW50cy9zcmMvc2VsZWN0L3NlbGVjdEl0ZW0udnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0wMDgwZDEyNlwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0wMDgwZDEyNlwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH1cbn0pKCl9XG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHNlbGVjdEl0ZW0udnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlbGVjdC9zZWxlY3RJdGVtLnZ1ZSIsIjx0ZW1wbGF0ZT5cbiAgICA8bGkgY2xhc3M9XCJtZGwtbWVudV9faXRlbVwiIDpkaXNhYmxlZD1cImRpc2FibGVkXCIgQGNsaWNrPVwic2VsZWN0U2luZ2xlXCIgZGF0YS11cGdyYWRlZD1cIixNYXRlcmlhbFJpcHBsZVwiPlxuICAgICAgICA8c2xvdCB2LWlmPVwibXVsdGlwbGVcIj5cbiAgICAgICAgICAgIDxtLWNoZWNrYm94IHYtbW9kZWw9XCJjaGVja2VkXCIgQGNsaWNrLm5hdGl2ZS5zdG9wIEBjaGFuZ2U9XCJzZWxlY3RcIj57e19pdGVtVmFsdWV9fTwvbS1jaGVja2JveD5cbiAgICAgICAgPC9zbG90PlxuXG4gICAgICAgIDxzbG90IHYtZWxzZT5cbiAgICAgICAgICAgIHt7X2l0ZW1WYWx1ZX19XG4gICAgICAgIDwvc2xvdD5cbiAgICA8L2xpPlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IHsgcHJlcGFyZU9wdGlvblZhbHVlIH0gZnJvbSAnLi4vdXRpbHMnXG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgICAgICB0aGlzLl9jaGVja1ByZVNlbGVjdGVkKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGl0ZW1WYWx1ZToge1xuICAgICAgICAgICAgICAgIHR5cGU6IFtTdHJpbmcsIE51bWJlciwgT2JqZWN0XSxcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaXRlbXM6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBbQXJyYXldLFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgc2VsZWN0ZWRJdGVtczoge1xuICAgICAgICAgICAgICAgIHR5cGU6IFtTdHJpbmcsIE51bWJlciwgQXJyYXksIE9iamVjdF0sXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIG11bHRpcGxlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgICAgIH0sXG5cblxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgZGlzYWJsZWQoKSB7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5tdWx0aXBsZSkgcmV0dXJuIGZhbHNlOyAvLyBvbmx5IEFycmF5XG5cbiAgICAgICAgICAgICAgICAvLyBPYmplY3QsIFN0cmluZywgTnVtYmVyXG4gICAgICAgICAgICAgICAgaWYodHlwZW9mIHRoaXMuc2VsZWN0ZWRJdGVtcyA9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZEl0ZW1zLnZhbHVlID09PSBwcmVwYXJlT3B0aW9uVmFsdWUodGhpcy5pdGVtVmFsdWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkSXRlbXMgPT09IHByZXBhcmVPcHRpb25WYWx1ZSh0aGlzLml0ZW1WYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgX2l0ZW1WYWx1ZSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJlcGFyZU9wdGlvblZhbHVlKHRoaXMuaXRlbVZhbHVlLCB0cnVlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHNlbGVjdChwcm9wKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnRTZWxlY3RbcHJvcCA/ICdzZWxlY3RWYWx1ZScgOiAndW5zZWxlY3RWYWx1ZSddKHRoaXMuaXRlbVZhbHVlKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHNlbGVjdFNpbmdsZSgpIHtcbiAgICAgICAgICAgICAgICBpZih0aGlzLm11bHRpcGxlKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudFNlbGVjdC5zZWxlY3RWYWx1ZSh0aGlzLml0ZW1WYWx1ZSk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBfY2hlY2tQcmVTZWxlY3RlZCgpIHtcbiAgICAgICAgICAgICAgICBpZih0aGlzLm11bHRpcGxlICYmIHRoaXMuc2VsZWN0ZWRJdGVtcyBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgZWwgb2YgdGhpcy5zZWxlY3RlZEl0ZW1zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihlbCAmJiB0eXBlb2YgZWwgPT0gJ29iamVjdCcgJiYgZWwudmFsdWUgPT09IHByZXBhcmVPcHRpb25WYWx1ZSh0aGlzLml0ZW1WYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKGVsID09PSBwcmVwYXJlT3B0aW9uVmFsdWUodGhpcy5pdGVtVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnRTZWxlY3QgPSB0aGlzLiRwYXJlbnQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgcGFyZW50U2VsZWN0OiB7fSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNlbGVjdEl0ZW0udnVlPzMwM2FhOTBhIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdsaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZGwtbWVudV9faXRlbVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImRpc2FibGVkXCI6IF92bS5kaXNhYmxlZCxcbiAgICAgIFwiZGF0YS11cGdyYWRlZFwiOiBcIixNYXRlcmlhbFJpcHBsZVwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uc2VsZWN0U2luZ2xlXG4gICAgfVxuICB9LCBbKF92bS5tdWx0aXBsZSkgPyBfdm0uX3QoXCJkZWZhdWx0XCIsIFtfYygnbS1jaGVja2JveCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5jaGVja2VkKSxcbiAgICAgIGV4cHJlc3Npb246IFwiY2hlY2tlZFwiXG4gICAgfV0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5jaGVja2VkKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2hhbmdlXCI6IF92bS5zZWxlY3QsXG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uY2hlY2tlZCA9ICRldmVudFxuICAgICAgfVxuICAgIH0sXG4gICAgbmF0aXZlT246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5faXRlbVZhbHVlKSldKV0pIDogX3ZtLl90KFwiZGVmYXVsdFwiLCBbX3ZtLl92KFwiXFxuICAgICAgICBcIiArIF92bS5fcyhfdm0uX2l0ZW1WYWx1ZSkgKyBcIlxcbiAgICBcIildKV0sIDIpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTAwODBkMTI2XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0wMDgwZDEyNiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL3NlbGVjdC9zZWxlY3RJdGVtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwib3otc2VsZWN0LWNvbnRhaW5lclwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kbC10ZXh0ZmllbGQgbWRsLWpzLXRleHRmaWVsZFwiLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5vcGVuXG4gICAgfVxuICB9LCBbX2MoJ2lucHV0Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kbC10ZXh0ZmllbGRfX2lucHV0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwicmVhZG9ubHlcIjogXCJ0cnVlXCIsXG4gICAgICBcImlkXCI6IF92bS5pZFxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLl92YWx1ZS5uYW1lXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2FyZXRcIlxuICB9LCBbX3ZtLl92KFwi4pa8XCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3VsJywge1xuICAgIHJlZjogXCJtZW51XCIsXG4gICAgc3RhdGljQ2xhc3M6IFwibWRsLW1lbnUgbWRsLWpzLW1lbnUgbWRsLWpzLXJpcHBsZS1lZmZlY3RcIixcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJ3aWR0aFwiOiBcIjMwMHB4XCJcbiAgICB9LFxuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBfdm0uaWRcbiAgICB9XG4gIH0sIFsoX3ZtLnNlYXJjaCkgPyBfYygnbGknLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwic2VhcmNoLWl0ZW1cIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdtLXRleHRmaWVsZCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5zZWFyY2hUZXh0KSxcbiAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoVGV4dFwiXG4gICAgfV0sXG4gICAgcmVmOiBcInNlYXJjaEZpZWxkXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwibGFiZWxcIjogXCJTZWFyY2guLi5cIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5zZWFyY2hUZXh0KVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5zZWFyY2hUZXh0ID0gJGV2ZW50XG4gICAgICB9XG4gICAgfVxuICB9KV0sIDEpIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIChfdm0ubG9hZGluZykgPyBfdm0uX3QoXCJkZWZhdWx0XCIsIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcInRleHQtYWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICAgIFwibGluZS1oZWlnaHRcIjogXCI0MHB4XCJcbiAgICB9XG4gIH0sIFtfYygnc3BhbicsIFtfdm0uX3YoXCJMb2FkaW5nLi4uXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtLXByb2dyZXNzJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImluZGV0ZXJtaW5hdGVcIjogXCJcIlxuICAgIH1cbiAgfSldLCAxKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIChfdm0ubm90Rm91bmQpID8gX3ZtLl90KFwiZGVmYXVsdFwiLCBbX3ZtLl9tKDApXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9sKChfdm0uZGF0YUl0ZW1zKSwgZnVuY3Rpb24ob3B0aW9uKSB7XG4gICAgcmV0dXJuIF9jKCdtLXNlbGVjdC1pdGVtJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJtdWx0aXBsZVwiOiBfdm0ubXVsdGlwbGUsXG4gICAgICAgIFwiaXRlbXNcIjogX3ZtLmRhdGFJdGVtcyxcbiAgICAgICAgXCJzZWxlY3RlZC1pdGVtc1wiOiBfdm0udmFsdWUsXG4gICAgICAgIFwiaXRlbS12YWx1ZVwiOiBvcHRpb25cbiAgICAgIH1cbiAgICB9KVxuICB9KV0sIDIpXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcInRleHQtYWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICAgIFwibGluZS1oZWlnaHRcIjogXCI0MHB4XCIsXG4gICAgICBcIm9wYWNpdHlcIjogXCIuM1wiXG4gICAgfVxuICB9LCBbX2MoJ3NwYW4nLCBbX3ZtLl92KFwiTm90IGZvdW5kXCIpXSldKVxufV19XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTJiZGI0YThjXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0yYmRiNGE4YyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL3NlbGVjdC9zZWxlY3QudnVlXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9zbGlkZXIudnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi01Y2U5MmMyNiF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zbGlkZXIudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIi9Vc2Vycy9vei9zcmMvbWF0ZXJpYWwtY29tcG9uZW50cy9zcmMvc2xpZGVyLnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNWNlOTJjMjZcIiwgX192dWVfb3B0aW9uc19fKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNWNlOTJjMjZcIiwgX192dWVfb3B0aW9uc19fKVxuICB9XG59KSgpfVxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBzbGlkZXIudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NsaWRlci52dWUiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cIm1kbC1zbGlkZXJfX2NvbnRhaW5lclwiPlxuICAgICAgICA8aW5wdXQgcmVmPVwiaW5wdXRcIiB0eXBlPVwicmFuZ2VcIiBjbGFzcz1cIm1kbC1zbGlkZXIgbWRsLWpzLXNsaWRlciBpcy11cGdyYWRlZFwiIDptaW49XCJtaW5cIiA6bWF4PVwibWF4XCIgOnN0ZXA9XCJzdGVwXCIgdi1tb2RlbD1cInZhbHVlTnVtYmVyXCIgQGlucHV0PVwib25JbnB1dFwiIGRhdGEtdXBncmFkZWQ9XCIsTWF0ZXJpYWxTbGlkZXJcIiA6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLXNsaWRlcl9fYmFja2dyb3VuZC1mbGV4XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLXNsaWRlcl9fYmFja2dyb3VuZC1sb3dlclwiXG4gICAgICAgICAgICAgICAgIDpzdHlsZT1cImxvd2VyQmFja2dyb3VuZFN0eWxlXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtc2xpZGVyX19iYWNrZ3JvdW5kLXVwcGVyXCJcbiAgICAgICAgICAgICAgICAgOnN0eWxlPVwidXBwZXJCYWNrZ3JvdW5kU3R5bGVcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wdXRlZDoge1xuICAgIGxvd2VyQmFja2dyb3VuZFN0eWxlICgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGZsZXg6IGAke3RoaXMucmVsYXRpdmVWYWx1ZX0gMSAwJWBcbiAgICAgIH1cbiAgICB9LFxuICAgIHVwcGVyQmFja2dyb3VuZFN0eWxlICgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGZsZXg6IGAkezEgLSB0aGlzLnJlbGF0aXZlVmFsdWV9IDEgMCVgXG4gICAgICB9XG4gICAgfSxcbiAgICB2YWx1ZU51bWJlciAoKSB7XG4gICAgICByZXR1cm4gTnVtYmVyKHRoaXMudmFsdWUpXG4gICAgfSxcbiAgICBzdGVwTnVtYmVyICgpIHtcbiAgICAgIHJldHVybiBOdW1iZXIodGhpcy5zdGVwKVxuICAgIH0sXG4gICAgbWluTnVtYmVyICgpIHtcbiAgICAgIHJldHVybiBOdW1iZXIodGhpcy5taW4pXG4gICAgfSxcbiAgICBtYXhOdW1iZXIgKCkge1xuICAgICAgcmV0dXJuIE51bWJlcih0aGlzLm1heClcbiAgICB9LFxuICAgIHJlbGF0aXZlVmFsdWUgKCkge1xuICAgICAgY29uc3QgdmFsID0gTWF0aC5yb3VuZCgodGhpcy52YWx1ZU51bWJlciAtIHRoaXMubWluTnVtYmVyKSAvIHRoaXMuc3RlcE51bWJlcikgKiB0aGlzLnN0ZXBOdW1iZXJcbiAgICAgIHJldHVybiB2YWwgLyAodGhpcy5tYXhOdW1iZXIgLSB0aGlzLm1pbk51bWJlcilcbiAgICB9XG4gIH0sXG4gIHByb3BzOiB7XG4gICAgdmFsdWU6IHtcbiAgICAgIHR5cGU6IFtTdHJpbmcsIE51bWJlcl0sXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgc3RlcDoge1xuICAgICAgdHlwZTogW1N0cmluZywgTnVtYmVyXSxcbiAgICAgIGRlZmF1bHQ6IDFcbiAgICB9LFxuICAgIG1pbjoge1xuICAgICAgdHlwZTogW1N0cmluZywgTnVtYmVyXSxcbiAgICAgIGRlZmF1bHQ6IDBcbiAgICB9LFxuICAgIG1heDoge1xuICAgICAgdHlwZTogW1N0cmluZywgTnVtYmVyXSxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBkaXNhYmxlZDoge1xuICAgICAgcmVxdWlyZWQ6IGZhbHNlXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgb25JbnB1dCAoeyB0YXJnZXQ6IHsgdmFsdWUgfSB9KSB7XG4gICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIHR5cGVvZiB0aGlzLnZhbHVlID09PSAnc3RyaW5nJyA/IHZhbHVlIDogTnVtYmVyKHZhbHVlKSk7XG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzbGlkZXIudnVlP2ZjNWIxYWY4IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWRsLXNsaWRlcl9fY29udGFpbmVyXCJcbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS52YWx1ZU51bWJlciksXG4gICAgICBleHByZXNzaW9uOiBcInZhbHVlTnVtYmVyXCJcbiAgICB9XSxcbiAgICByZWY6IFwiaW5wdXRcIixcbiAgICBzdGF0aWNDbGFzczogXCJtZGwtc2xpZGVyIG1kbC1qcy1zbGlkZXIgaXMtdXBncmFkZWRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwicmFuZ2VcIixcbiAgICAgIFwibWluXCI6IF92bS5taW4sXG4gICAgICBcIm1heFwiOiBfdm0ubWF4LFxuICAgICAgXCJzdGVwXCI6IF92bS5zdGVwLFxuICAgICAgXCJkYXRhLXVwZ3JhZGVkXCI6IFwiLE1hdGVyaWFsU2xpZGVyXCIsXG4gICAgICBcImRpc2FibGVkXCI6IF92bS5kaXNhYmxlZFxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLl9zKF92bS52YWx1ZU51bWJlcilcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IFtmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnZhbHVlTnVtYmVyID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfSwgX3ZtLm9uSW5wdXRdXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZGwtc2xpZGVyX19iYWNrZ3JvdW5kLWZsZXhcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZGwtc2xpZGVyX19iYWNrZ3JvdW5kLWxvd2VyXCIsXG4gICAgc3R5bGU6IChfdm0ubG93ZXJCYWNrZ3JvdW5kU3R5bGUpXG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kbC1zbGlkZXJfX2JhY2tncm91bmQtdXBwZXJcIixcbiAgICBzdHlsZTogKF92bS51cHBlckJhY2tncm91bmRTdHlsZSlcbiAgfSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTVjZTkyYzI2XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi01Y2U5MmMyNiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL3NsaWRlci52dWVcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IHtcbiAgICB2YWx1ZTogW1N0cmluZywgTnVtYmVyXSxcbiAgICBvdmVybGFwOiBCb29sZWFuLFxuICAgIGljb246ICBCb29sZWFuLFxuICAgIG5vQmFja2dyb3VuZDogQm9vbGVhbixcbiAgICBoaWRlOiBCb29sZWFuLFxuICAgIGhyZWY6IFN0cmluZyxcblxuICAgIHRhZzoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdCgpIHtcbiAgICAgICAgcmV0dXJuICdzcGFuJztcbiAgICAgIH1cbiAgICB9XG5cbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKGNyZWF0ZUVsZW1lbnQpIHtcbiAgICBsZXQgdGFnID0gdGhpcy50YWc7XG5cbiAgICBsZXQgYXR0cnMgPSB7XG4gICAgICAnY2xhc3MnOiAnbWRsLWJhZGdlJ1xuXG4gICAgfTtcblxuICAgIGlmKCF0aGlzLmhpZGUpIGF0dHJzWydkYXRhLWJhZGdlJ10gPSB0aGlzLnZhbHVlO1xuXG4gICAgaWYodGhpcy5ocmVmKSB7XG4gICAgICB0YWcgPSAnYSc7XG4gICAgICBhdHRycy5ocmVmID0gdGhpcy5ocmVmO1xuICAgIH1cblxuICAgIGlmKHRoaXMub3ZlcmxhcCkgYXR0cnMuY2xhc3MgKz0gJyBtZGwtYmFkZ2UtLW92ZXJsYXAgJztcblxuICAgIGlmKHRoaXMuaWNvbikgYXR0cnMuY2xhc3MgPSAnbWF0ZXJpYWwtaWNvbnMgJyArIGF0dHJzLmNsYXNzO1xuXG4gICAgaWYodGhpcy5ub0JhY2tncm91bmQpIGF0dHJzLmNsYXNzICs9ICcgbWRsLWJhZGdlLS1uby1iYWNrZ3JvdW5kICc7XG5cbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCh0YWcsIHtcbiAgICAgIGF0dHJzOiBhdHRycyxcbiAgICB9LCB0aGlzLiRzbG90cy5kZWZhdWx0KVxuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2JhZGdlLmpzIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vcHJvZ3Jlc3MudnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi05ZjYzNGY5YyF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9wcm9ncmVzcy52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiL1VzZXJzL296L3NyYy9tYXRlcmlhbC1jb21wb25lbnRzL3NyYy9wcm9ncmVzcy52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTlmNjM0ZjljXCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTlmNjM0ZjljXCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfVxufSkoKX1cbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gcHJvZ3Jlc3MudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb2dyZXNzLnZ1ZSIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwibWRsLXByb2dyZXNzIG1kbC1qcy1wcm9ncmVzc1wiIDpjbGFzcz1cInsgJ21kbC1wcm9ncmVzc19faW5kZXRlcm1pbmF0ZSc6IGluZGV0ZXJtaW5hdGUgfVwiPjwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHZhbHVlOiBbU3RyaW5nLCBOdW1iZXJdLFxuICAgICAgICAgICAgYnVmZmVyOiBbU3RyaW5nLCBOdW1iZXJdLFxuICAgICAgICAgICAgaW5kZXRlcm1pbmF0ZTogQm9vbGVhbixcbiAgICAgICAgfSxcblxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgY29tcG9uZW50SGFuZGxlci51cGdyYWRlRWxlbWVudCh0aGlzLiRlbCwgJ01hdGVyaWFsUHJvZ3Jlc3MnKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMudmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVsLk1hdGVyaWFsUHJvZ3Jlc3Muc2V0UHJvZ3Jlc3ModGhpcy52YWx1ZSlcbiAgICAgICAgICAgICAgICB0aGlzLiR3YXRjaCgndmFsdWUnLCB2YWwgPT4gdGhpcy4kZWwuTWF0ZXJpYWxQcm9ncmVzcy5zZXRQcm9ncmVzcyh2YWwpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuYnVmZmVyICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbC5NYXRlcmlhbFByb2dyZXNzLnNldEJ1ZmZlcih0aGlzLmJ1ZmZlcilcbiAgICAgICAgICAgICAgICB0aGlzLiR3YXRjaCgnYnVmZmVyJywgdmFsID0+IHRoaXMuJGVsLk1hdGVyaWFsUHJvZ3Jlc3Muc2V0QnVmZmVyKHZhbCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcHJvZ3Jlc3MudnVlPzQyNmRlNWY2IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWRsLXByb2dyZXNzIG1kbC1qcy1wcm9ncmVzc1wiLFxuICAgIGNsYXNzOiB7XG4gICAgICAnbWRsLXByb2dyZXNzX19pbmRldGVybWluYXRlJzogX3ZtLmluZGV0ZXJtaW5hdGVcbiAgICB9XG4gIH0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTlmNjM0ZjljXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi05ZjYzNGY5YyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL3Byb2dyZXNzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vc3Bpbm5lci52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTJjOTcwNmI4IXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NwaW5uZXIudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIi9Vc2Vycy9vei9zcmMvbWF0ZXJpYWwtY29tcG9uZW50cy9zcmMvc3Bpbm5lci52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTJjOTcwNmI4XCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTJjOTcwNmI4XCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfVxufSkoKX1cbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gc3Bpbm5lci52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3Bpbm5lci52dWUiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cIm1kbC1zcGlubmVyIG1kbC1qcy1zcGlubmVyXCIgOmNsYXNzPVwieyAnbWRsLXNwaW5uZXItLXNpbmdsZS1jb2xvcic6IHNpbmdsZUNvbG9yLCAnaXMtYWN0aXZlJzogYWN0aXZlLCAnaXMtdXBncmFkZWQnOiBhY3RpdmUgfVwiPjwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHR7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBhY3RpdmU6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHRydWUsXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBzaW5nbGVDb2xvcjogQm9vbGVhblxuICAgICAgICB9LFxuXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICBjb21wb25lbnRIYW5kbGVyLnVwZ3JhZGVFbGVtZW50KHRoaXMuJGVsKTtcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNwaW5uZXIudnVlP2EzZmYzYjFjIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWRsLXNwaW5uZXIgbWRsLWpzLXNwaW5uZXJcIixcbiAgICBjbGFzczoge1xuICAgICAgJ21kbC1zcGlubmVyLS1zaW5nbGUtY29sb3InOiBfdm0uc2luZ2xlQ29sb3IsICdpcy1hY3RpdmUnOiBfdm0uYWN0aXZlLCAnaXMtdXBncmFkZWQnOiBfdm0uYWN0aXZlXG4gICAgfVxuICB9KVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0yYzk3MDZiOFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMmM5NzA2YjghLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9zcGlubmVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vY2hlY2tib3gudnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0zZmQ0NTM5MCF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9jaGVja2JveC52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiL1VzZXJzL296L3NyYy9tYXRlcmlhbC1jb21wb25lbnRzL3NyYy90b2dnbGVzL2NoZWNrYm94LnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtM2ZkNDUzOTBcIiwgX192dWVfb3B0aW9uc19fKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtM2ZkNDUzOTBcIiwgX192dWVfb3B0aW9uc19fKVxuICB9XG59KSgpfVxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBjaGVja2JveC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdG9nZ2xlcy9jaGVja2JveC52dWUiLCI8dGVtcGxhdGU+XG4gICAgPGxhYmVsIGNsYXNzPVwibWRsLWNoZWNrYm94IG1kbC1qcy1jaGVja2JveCBtZGwtanMtcmlwcGxlLWVmZmVjdCBpcy11cGdyYWRlZFwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJtZGwtY2hlY2tib3hfX2lucHV0XCIgOmRpc2FibGVkPVwiZGlzYWJsZWRcIiB2LW1vZGVsPVwiY2hlY2tlZFwiIDp2YWx1ZT1cInZhbFwiIEBjaGFuZ2U9XCJmaXJlQ2hhbmdlXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwibWRsLWNoZWNrYm94X19sYWJlbFwiPlxuICAgICAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgICA8L3NwYW4+XG4gICAgPC9sYWJlbD5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkaXNhYmxlZDogeyByZXF1aXJlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHZhbDogeyByZXF1aXJlZDogZmFsc2UgfSxcbiAgICAgICAgfSxcblxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgY2hlY2tlZDoge1xuICAgICAgICAgICAgICAgIGdldCAoKSB7IHJldHVybiB0aGlzLnZhbHVlIH0sXG4gICAgICAgICAgICAgICAgc2V0ICh2YWwpIHsgdGhpcy5jaGVja2VkUHJveHkgPSB2YWwgfSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY2hlY2tlZFByb3h5OiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICBjb21wb25lbnRIYW5kbGVyLnVwZ3JhZGVFbGVtZW50cyh0aGlzLiRlbCwgJ01hdGVyaWFsQ2hlY2tib3gnKTtcbiAgICAgICAgfSxcblxuICAgICAgICB3YXRjaDoge1xuICAgICAgICAgICAgdmFsdWUobmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYobmV3VmFsdWUgIT0gb2xkVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZWwuTWF0ZXJpYWxDaGVja2JveFtuZXdWYWx1ZSA/ICdjaGVjaycgOiAndW5jaGVjayddKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGZpcmVDaGFuZ2UgKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnaW5wdXQnLCB0aGlzLmNoZWNrZWRQcm94eSk7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgdGhpcy5jaGVja2VkUHJveHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY2hlY2tib3gudnVlPzI0ZGZmOTlmIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZGwtY2hlY2tib3ggbWRsLWpzLWNoZWNrYm94IG1kbC1qcy1yaXBwbGUtZWZmZWN0IGlzLXVwZ3JhZGVkXCJcbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5jaGVja2VkKSxcbiAgICAgIGV4cHJlc3Npb246IFwiY2hlY2tlZFwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwibWRsLWNoZWNrYm94X19pbnB1dFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJjaGVja2JveFwiLFxuICAgICAgXCJkaXNhYmxlZFwiOiBfdm0uZGlzYWJsZWRcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS52YWwsXG4gICAgICBcImNoZWNrZWRcIjogQXJyYXkuaXNBcnJheShfdm0uY2hlY2tlZCkgPyBfdm0uX2koX3ZtLmNoZWNrZWQsIF92bS52YWwpID4gLTEgOiAoX3ZtLmNoZWNrZWQpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjaGFuZ2VcIjogW2Z1bmN0aW9uKCRldmVudCkge1xuICAgICAgICB2YXIgJCRhID0gX3ZtLmNoZWNrZWQsXG4gICAgICAgICAgJCRlbCA9ICRldmVudC50YXJnZXQsXG4gICAgICAgICAgJCRjID0gJCRlbC5jaGVja2VkID8gKHRydWUpIDogKGZhbHNlKTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoJCRhKSkge1xuICAgICAgICAgIHZhciAkJHYgPSBfdm0udmFsLFxuICAgICAgICAgICAgJCRpID0gX3ZtLl9pKCQkYSwgJCR2KTtcbiAgICAgICAgICBpZiAoJCRjKSB7XG4gICAgICAgICAgICAkJGkgPCAwICYmIChfdm0uY2hlY2tlZCA9ICQkYS5jb25jYXQoJCR2KSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCRpID4gLTEgJiYgKF92bS5jaGVja2VkID0gJCRhLnNsaWNlKDAsICQkaSkuY29uY2F0KCQkYS5zbGljZSgkJGkgKyAxKSkpXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF92bS5jaGVja2VkID0gJCRjXG4gICAgICAgIH1cbiAgICAgIH0sIF92bS5maXJlQ2hhbmdlXVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kbC1jaGVja2JveF9fbGFiZWxcIlxuICB9LCBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sIDIpXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtM2ZkNDUzOTBcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTNmZDQ1MzkwIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvdG9nZ2xlcy9jaGVja2JveC52dWVcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xudmFyIF9fdnVlX3N0eWxlc19fID0ge31cblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3JhZGlvLnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtZTlhMzE2NTQhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmFkaW8udnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIi9Vc2Vycy9vei9zcmMvbWF0ZXJpYWwtY29tcG9uZW50cy9zcmMvdG9nZ2xlcy9yYWRpby52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWU5YTMxNjU0XCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWU5YTMxNjU0XCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfVxufSkoKX1cbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gcmFkaW8udnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3RvZ2dsZXMvcmFkaW8udnVlIiwiPHRlbXBsYXRlPlxuICAgIDxsYWJlbCBjbGFzcz1cIm1kbC1yYWRpbyBtZGwtanMtcmFkaW8gaXMtdXBncmFkZWQgbWRsLWpzLXJpcHBsZS1lZmZlY3RcIlxuICAgICAgICAgICA6Zm9yPVwiaWRcIlxuICAgICAgICAgICA6Y2xhc3M9XCJjc3NDbGFzc2VzXCI+XG4gICAgICAgIDxpbnB1dCBjbGFzcz1cIm1kbC1yYWRpb19fYnV0dG9uXCJcbiAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICA6aWQ9XCJpZFwiXG4gICAgICAgICAgICAgICA6bmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgdi1tb2RlbD1cImNoZWNrZWRcIlxuICAgICAgICAgICAgICAgOnZhbHVlPVwidmFsXCJcbiAgICAgICAgICAgICAgIEBjaGFuZ2U9XCJmaXJlQ2hhbmdlXCJcbiAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cImRpc2FibGVkXCIvPlxuICAgIDxzcGFuIGNsYXNzPVwibWRsLXJhZGlvX19sYWJlbFwiPlxuICAgICAgPHNsb3Q+PC9zbG90PlxuICAgIDwvc3Bhbj5cbiAgICA8L2xhYmVsPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IHtcbiAgICBuYW1lOiBTdHJpbmcsXG4gICAgZGlzYWJsZWQ6IHsgcmVxdWlyZWQ6IGZhbHNlIH0sXG4gICAgaWQ6IFN0cmluZyxcbiAgICB2YWx1ZToge1xuICAgICAgdHlwZTogW1N0cmluZywgTnVtYmVyXSxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICB2YWw6IHsgcmVxdWlyZWQ6IHRydWUgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGNoZWNrZWQ6IHtcbiAgICAgIGdldCAoKSB7IHJldHVybiB0aGlzLnZhbHVlIH0sXG4gICAgICBzZXQgKHZhbCkgeyB0aGlzLmNoZWNrZWRQcm94eSA9IHZhbCB9XG4gICAgfSxcbiAgICBpc0NoZWNrZWQgKCkge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWUgPT09IHRoaXMudmFsXG4gICAgfSxcbiAgICBjc3NDbGFzc2VzICgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICdpcy1kaXNhYmxlZCc6IHRoaXMuZGlzYWJsZWQsXG4gICAgICAgICdpcy1jaGVja2VkJzogdGhpcy5pc0NoZWNrZWRcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQgKCkge1xuICAgIGNvbXBvbmVudEhhbmRsZXIudXBncmFkZUVsZW1lbnRzKHRoaXMuJGVsKVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgZmlyZUNoYW5nZSAoZXZlbnQpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgdGhpcy5jaGVja2VkUHJveHkpXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmFkaW8udnVlP2E5MjE3MDRlIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZGwtcmFkaW8gbWRsLWpzLXJhZGlvIGlzLXVwZ3JhZGVkIG1kbC1qcy1yaXBwbGUtZWZmZWN0XCIsXG4gICAgY2xhc3M6IF92bS5jc3NDbGFzc2VzLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBfdm0uaWRcbiAgICB9XG4gIH0sIFtfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uY2hlY2tlZCksXG4gICAgICBleHByZXNzaW9uOiBcImNoZWNrZWRcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcIm1kbC1yYWRpb19fYnV0dG9uXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInJhZGlvXCIsXG4gICAgICBcImlkXCI6IF92bS5pZCxcbiAgICAgIFwibmFtZVwiOiBfdm0ubmFtZSxcbiAgICAgIFwiZGlzYWJsZWRcIjogX3ZtLmRpc2FibGVkXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0udmFsLFxuICAgICAgXCJjaGVja2VkXCI6IF92bS5fcShfdm0uY2hlY2tlZCwgX3ZtLnZhbClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNoYW5nZVwiOiBbZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5jaGVja2VkID0gX3ZtLnZhbFxuICAgICAgfSwgX3ZtLmZpcmVDaGFuZ2VdXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWRsLXJhZGlvX19sYWJlbFwiXG4gIH0sIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSwgMildKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi1lOWEzMTY1NFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtZTlhMzE2NTQhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy90b2dnbGVzL3JhZGlvLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vc3dpdGNoLnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNmVhN2Y3MmUhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3dpdGNoLnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCIvVXNlcnMvb3ovc3JjL21hdGVyaWFsLWNvbXBvbmVudHMvc3JjL3RvZ2dsZXMvc3dpdGNoLnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNmVhN2Y3MmVcIiwgX192dWVfb3B0aW9uc19fKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNmVhN2Y3MmVcIiwgX192dWVfb3B0aW9uc19fKVxuICB9XG59KSgpfVxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBzd2l0Y2gudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3RvZ2dsZXMvc3dpdGNoLnZ1ZSIsIjx0ZW1wbGF0ZT5cbiAgICA8bGFiZWwgY2xhc3M9XCJtZGwtc3dpdGNoIG1kbC1qcy1zd2l0Y2ggaXMtdXBncmFkZWQgbWRsLWpzLXJpcHBsZS1lZmZlY3RcIj5cbiAgICAgICAgPGlucHV0IGNsYXNzPVwibWRsLXN3aXRjaF9faW5wdXRcIlxuICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgIHYtbW9kZWw9XCJjaGVja2VkXCJcbiAgICAgICAgICAgICAgIEBjaGFuZ2U9XCJmaXJlQ2hhbmdlXCJcbiAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cImRpc2FibGVkXCIvPlxuICAgIDxzcGFuIGNsYXNzPVwibWRsLXN3aXRjaF9fbGFiZWxcIj5cbiAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICA8L3NwYW4+XG4gICAgPC9sYWJlbD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRpc2FibGVkOiB7IHJlcXVpcmVkOiBmYWxzZSB9LFxuICAgICAgICB9LFxuXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBjaGVja2VkOiB7XG4gICAgICAgICAgICAgICAgZ2V0ICgpIHsgcmV0dXJuIHRoaXMudmFsdWUgfSxcbiAgICAgICAgICAgICAgICBzZXQgKHZhbCkgeyB0aGlzLmNoZWNrZWRQcm94eSA9IHZhbCB9LFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjaGVja2VkUHJveHk6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudEhhbmRsZXIudXBncmFkZUVsZW1lbnRzKHRoaXMuJGVsKTtcbiAgICAgICAgfSxcblxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBmaXJlQ2hhbmdlIChldmVudCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnaW5wdXQnLCB0aGlzLmNoZWNrZWRQcm94eSlcbiAgICAgICAgfVxuICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3dpdGNoLnZ1ZT9hYjAwMzlmZSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWRsLXN3aXRjaCBtZGwtanMtc3dpdGNoIGlzLXVwZ3JhZGVkIG1kbC1qcy1yaXBwbGUtZWZmZWN0XCJcbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5jaGVja2VkKSxcbiAgICAgIGV4cHJlc3Npb246IFwiY2hlY2tlZFwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwibWRsLXN3aXRjaF9faW5wdXRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiY2hlY2tib3hcIixcbiAgICAgIFwiZGlzYWJsZWRcIjogX3ZtLmRpc2FibGVkXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJjaGVja2VkXCI6IEFycmF5LmlzQXJyYXkoX3ZtLmNoZWNrZWQpID8gX3ZtLl9pKF92bS5jaGVja2VkLCBudWxsKSA+IC0xIDogKF92bS5jaGVja2VkKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2hhbmdlXCI6IFtmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgdmFyICQkYSA9IF92bS5jaGVja2VkLFxuICAgICAgICAgICQkZWwgPSAkZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICQkYyA9ICQkZWwuY2hlY2tlZCA/ICh0cnVlKSA6IChmYWxzZSk7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KCQkYSkpIHtcbiAgICAgICAgICB2YXIgJCR2ID0gbnVsbCxcbiAgICAgICAgICAgICQkaSA9IF92bS5faSgkJGEsICQkdik7XG4gICAgICAgICAgaWYgKCQkYykge1xuICAgICAgICAgICAgJCRpIDwgMCAmJiAoX3ZtLmNoZWNrZWQgPSAkJGEuY29uY2F0KCQkdikpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQkaSA+IC0xICYmIChfdm0uY2hlY2tlZCA9ICQkYS5zbGljZSgwLCAkJGkpLmNvbmNhdCgkJGEuc2xpY2UoJCRpICsgMSkpKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdm0uY2hlY2tlZCA9ICQkY1xuICAgICAgICB9XG4gICAgICB9LCBfdm0uZmlyZUNoYW5nZV1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZGwtc3dpdGNoX19sYWJlbFwiXG4gIH0sIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSwgMildKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi02ZWE3ZjcyZVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNmVhN2Y3MmUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy90b2dnbGVzL3N3aXRjaC52dWVcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xudmFyIF9fdnVlX3N0eWxlc19fID0ge31cblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2ljb24udnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi1mMDhjM2IyNCF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9pY29uLnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCIvVXNlcnMvb3ovc3JjL21hdGVyaWFsLWNvbXBvbmVudHMvc3JjL3RvZ2dsZXMvaWNvbi52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWYwOGMzYjI0XCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWYwOGMzYjI0XCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfVxufSkoKX1cbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gaWNvbi52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdG9nZ2xlcy9pY29uLnZ1ZSIsIjx0ZW1wbGF0ZT5cbiAgICA8bGFiZWwgY2xhc3M9XCJtZGwtaWNvbi10b2dnbGUgbWRsLWpzLWljb24tdG9nZ2xlIGlzLXVwZ3JhZGVkIG1kbC1qcy1yaXBwbGUtZWZmZWN0XCI+XG4gICAgICAgIDxpbnB1dCBjbGFzcz1cIm1kbC1pY29uLXRvZ2dsZV9faW5wdXRcIlxuICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgIHYtbW9kZWw9XCJjaGVja2VkXCJcbiAgICAgICAgICAgICAgIEBjaGFuZ2U9XCJmaXJlQ2hhbmdlXCJcbiAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cImRpc2FibGVkXCIvPlxuICAgICAgICA8aSBjbGFzcz1cIm1kbC1pY29uLXRvZ2dsZV9fbGFiZWwgbWF0ZXJpYWwtaWNvbnNcIj57e2ljb259fTwvaT5cbiAgICA8L2xhYmVsPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaWNvbjoge1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRpc2FibGVkOiB7IHJlcXVpcmVkOiBmYWxzZSB9LFxuICAgICAgICB9LFxuXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBjaGVja2VkOiB7XG4gICAgICAgICAgICAgICAgZ2V0ICgpIHsgcmV0dXJuIHRoaXMudmFsdWUgfSxcbiAgICAgICAgICAgICAgICBzZXQgKHZhbCkgeyB0aGlzLmNoZWNrZWRQcm94eSA9IHZhbCB9LFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjaGVja2VkUHJveHk6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudEhhbmRsZXIudXBncmFkZUVsZW1lbnRzKHRoaXMuJGVsKTtcbiAgICAgICAgfSxcblxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBmaXJlQ2hhbmdlIChldmVudCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnaW5wdXQnLCB0aGlzLmNoZWNrZWRQcm94eSlcbiAgICAgICAgfVxuICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gaWNvbi52dWU/MzY3NWE0N2IiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2xhYmVsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kbC1pY29uLXRvZ2dsZSBtZGwtanMtaWNvbi10b2dnbGUgaXMtdXBncmFkZWQgbWRsLWpzLXJpcHBsZS1lZmZlY3RcIlxuICB9LCBbX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmNoZWNrZWQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJjaGVja2VkXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJtZGwtaWNvbi10b2dnbGVfX2lucHV0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImNoZWNrYm94XCIsXG4gICAgICBcImRpc2FibGVkXCI6IF92bS5kaXNhYmxlZFxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwiY2hlY2tlZFwiOiBBcnJheS5pc0FycmF5KF92bS5jaGVja2VkKSA/IF92bS5faShfdm0uY2hlY2tlZCwgbnVsbCkgPiAtMSA6IChfdm0uY2hlY2tlZClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNoYW5nZVwiOiBbZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIHZhciAkJGEgPSBfdm0uY2hlY2tlZCxcbiAgICAgICAgICAkJGVsID0gJGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAkJGMgPSAkJGVsLmNoZWNrZWQgPyAodHJ1ZSkgOiAoZmFsc2UpO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSgkJGEpKSB7XG4gICAgICAgICAgdmFyICQkdiA9IG51bGwsXG4gICAgICAgICAgICAkJGkgPSBfdm0uX2koJCRhLCAkJHYpO1xuICAgICAgICAgIGlmICgkJGMpIHtcbiAgICAgICAgICAgICQkaSA8IDAgJiYgKF92bS5jaGVja2VkID0gJCRhLmNvbmNhdCgkJHYpKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkJGkgPiAtMSAmJiAoX3ZtLmNoZWNrZWQgPSAkJGEuc2xpY2UoMCwgJCRpKS5jb25jYXQoJCRhLnNsaWNlKCQkaSArIDEpKSlcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3ZtLmNoZWNrZWQgPSAkJGNcbiAgICAgICAgfVxuICAgICAgfSwgX3ZtLmZpcmVDaGFuZ2VdXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWRsLWljb24tdG9nZ2xlX19sYWJlbCBtYXRlcmlhbC1pY29uc1wiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5pY29uKSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LWYwOGMzYjI0XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi1mMDhjM2IyNCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL3RvZ2dsZXMvaWNvbi52dWVcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xudmFyIF9fdnVlX3N0eWxlc19fID0ge31cblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL21lbnUudnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi03OGQ2NjJkYSF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9tZW51LnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCIvVXNlcnMvb3ovc3JjL21hdGVyaWFsLWNvbXBvbmVudHMvc3JjL21lbnUvbWVudS52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTc4ZDY2MmRhXCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTc4ZDY2MmRhXCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfVxufSkoKX1cbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gbWVudS52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWVudS9tZW51LnZ1ZSIsIjx0ZW1wbGF0ZT5cbiAgICA8dWwgY2xhc3M9XCJtZGwtbWVudSBtZGwtanMtbWVudSBtZGwtanMtcmlwcGxlLWVmZmVjdFwiIHJlZj1cIm1lbnVcIj5cbiAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgIDwvdWw+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdHtcbiAgICAgICAgbW91bnRlZCAoKSB7XG4gICAgICAgICAgICBjb21wb25lbnRIYW5kbGVyLnVwZ3JhZGVFbGVtZW50KHRoaXMuJGVsLCAnTWF0ZXJpYWxNZW51Jyk7XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBtZW51LnZ1ZT82ZmE2Njc5YSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygndWwnLCB7XG4gICAgcmVmOiBcIm1lbnVcIixcbiAgICBzdGF0aWNDbGFzczogXCJtZGwtbWVudSBtZGwtanMtbWVudSBtZGwtanMtcmlwcGxlLWVmZmVjdFwiXG4gIH0sIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSwgMilcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNzhkNjYyZGFcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTc4ZDY2MmRhIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvbWVudS9tZW51LnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vaXRlbS52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTM5ZmE2MmU0IXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2l0ZW0udnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIi9Vc2Vycy9vei9zcmMvbWF0ZXJpYWwtY29tcG9uZW50cy9zcmMvbWVudS9pdGVtLnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMzlmYTYyZTRcIiwgX192dWVfb3B0aW9uc19fKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMzlmYTYyZTRcIiwgX192dWVfb3B0aW9uc19fKVxuICB9XG59KSgpfVxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBpdGVtLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tZW51L2l0ZW0udnVlIiwiPHRlbXBsYXRlPlxuICAgIDxsaSBjbGFzcz1cIm1kbC1tZW51X19pdGVtXCI+XG4gICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICA8L2xpPlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHR7fVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gaXRlbS52dWU/NDI3MTI3MmYiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2xpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kbC1tZW51X19pdGVtXCJcbiAgfSwgW192bS5fdChcImRlZmF1bHRcIildLCAyKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0zOWZhNjJlNFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMzlmYTYyZTQhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9tZW51L2l0ZW0udnVlXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhc3R5bGUhY3NzIXZ1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi0yOTVhYTM4YyFzYXNzIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi90YWJzLnZ1ZVwiKVxuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vdGFicy52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTI5NWFhMzhjIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3RhYnMudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIi9Vc2Vycy9vei9zcmMvbWF0ZXJpYWwtY29tcG9uZW50cy9zcmMvdGFicy90YWJzLnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMjk1YWEzOGNcIiwgX192dWVfb3B0aW9uc19fKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMjk1YWEzOGNcIiwgX192dWVfb3B0aW9uc19fKVxuICB9XG59KSgpfVxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSB0YWJzLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy90YWJzL3RhYnMudnVlIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTI5NWFhMzhjIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi90YWJzLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTI5NWFhMzhjIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi90YWJzLnZ1ZVwiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMjk1YWEzOGMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3RhYnMudnVlXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMjk1YWEzOGMhLi9+L3Nhc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vc3JjL3RhYnMvdGFicy52dWVcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLm1kbC10YWJzLS1mb3ItYW5pbWF0aW9uIC5tZGwtdGFic19fdGFiLXdyYXBwZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ubWRsLXRhYnMtLWZvci1hbmltYXRpb24gLmJlZm9yZS1lbnRlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcbn1cXG4ubWRsLXRhYnMtLWZvci1hbmltYXRpb24gLmVudGVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XFxufVxcbi5tZGwtdGFicy0tZm9yLWFuaW1hdGlvbiAubGVhdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcbiAgei1pbmRleDogMjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4ubWRsLXRhYnMuaXMtdXBncmFkZWQubWRsLXRhYnMtLWZvci1hbmltYXRpb24gLm1kbC10YWJzX19wYW5lbCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLm1kbC10YWJzIC5pcy1hY3RpdmUge1xcbiAgei1pbmRleDogMjtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0yOTVhYTM4YyEuL34vc2Fzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zcmMvdGFicy90YWJzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJtZGwtdGFicyBpcy11cGdyYWRlZFwiIDpjbGFzcz1cInsndGFicy1hbmltYXRpbmcnOiBpc0FuaW1hdGluZywgJ21kbC10YWJzLS1mb3ItYW5pbWF0aW9uJzogYW5pbWF0aW9ufVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLXRhYnNfX3RhYi1iYXJcIj5cbiAgICAgICAgICAgIDx0YWItbGlua1xuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1kbC10YWJzX190YWJcIlxuICAgICAgICAgICAgICAgICAgICB2LWZvcj1cInRhYiBpbiB0YWJzXCJcbiAgICAgICAgICAgICAgICAgICAgOmtleT1cInRhYi5pZFwiXG4gICAgICAgICAgICAgICAgICAgIDpuby1yaXBwbGUtZWZmZWN0PVwibm9SaXBwbGVFZmZlY3RcIlxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdpcy1hY3RpdmUnOiBpc1NlbGVjdGVkKHRhYikgfVwiXG4gICAgICAgICAgICAgICAgICAgIEBjbGljay5uYXRpdmUucHJldmVudD1cInNlbGVjdFRhYih0YWIpXCJcbiAgICAgICAgICAgICAgICAgICAgOnRhYj1cInRhYlwiXG4gICAgICAgICAgICA+PC90YWItbGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtdGFic19fdGFiLXdyYXBwZXJcIiA6c3R5bGU9XCJjb250ZW50U3R5bGVcIj5cbiAgICAgICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbiAgICAubWRsLXRhYnMge1xuICAgICAgICAmLS1mb3ItYW5pbWF0aW9uIHtcbiAgICAgICAgICAgIC5tZGwtdGFic19fdGFiLXdyYXBwZXIge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJlZm9yZS1lbnRlciB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmVudGVyIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubGVhdmUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5pcy11cGdyYWRlZCB7XG4gICAgICAgICAgICAmLm1kbC10YWJzLS1mb3ItYW5pbWF0aW9uIHtcbiAgICAgICAgICAgICAgICAubWRsLXRhYnNfX3BhbmVsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmlzLWFjdGl2ZSB7XG4gICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYW5pbWF0aW9uc1xuXG4gICAgICAgIC8vLnRhYi1leGl0IHtcbiAgICAgICAgLy8gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgICAgICAgLy99XG5cbiAgICAgICAgLy8udGFiLWVudGVyIHtcbiAgICAgICAgLy8gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDsgLy8gJ2ltcG9ydGFudCcgaXMgbmVlZCBmb3IgcmV3cml0ZSBtZGwgc3R5bGVcbiAgICAgICAgLy8gICAgei1pbmRleDogMjtcbiAgICAgICAgLy8gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICAgICAgLy99XG5cbiAgICAgICAgJi50YWJzLWFuaW1hdGluZyB7XG4gICAgICAgICAgICAvLy50YWItZXhpdCwgLnRhYi1lbnRlciB7XG4gICAgICAgICAgICAvLyAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgLy99XG5cbiAgICAgICAgICAgIC8vLnRhYi1lbnRlciB7XG4gICAgICAgICAgICAgLy8gICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgICAgICAgICAgLy99XG5cbiAgICAgICAgICAgIC8vLnRhYi1leGl0IHtcbiAgICAgICAgICAgIC8vICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICAgICAgICAgIC8vfVxuXG5cbiAgICAgICAgfVxuXG4gICAgfVxuPC9zdHlsZT5cblxuPHNjcmlwdD5cbmltcG9ydCBUYWJMaW5rIGZyb20gJy4vdGFiLWwudnVlJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiB7XG4gICAgdmFsdWU6IHtcbiAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgIHR5cGU6IFtTdHJpbmcsIE51bWJlcl1cbiAgICB9LFxuXG4gICAgbm9SaXBwbGVFZmZlY3Q6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICByZXF1aXJlZDogZmFsc2VcbiAgICB9LFxuXG4gICAgYW5pbWF0aW9uOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHJlcXVpcmVkOiBmYWxzZVxuICAgIH0sXG5cbiAgICBjb250ZW50U3R5bGU6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICByZXF1aXJlZDogZmFsc2VcbiAgICB9XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIHNlbGVjdFRhYih7aWR9KSB7XG4gICAgICAgIGlmKHRoaXMuYW5pbWF0aW9uKSB7XG4gICAgICAgICAgICAvL2xldCBleGl0VGFiID0gdGhpcy5nZXRFeGl0VGFiKCk7XG4gICAgICAgICAgICAvL2xldCBlbnRlclRhYiA9IHRoaXMuZ2V0RW50ZXJUYWIoaWQpO1xuLy9cbiAgICAgICAgICAgIC8vaWYodGhpcy5pc0FuaW1hdGluZyB8fCAodGhpcy5wcmVwYXJlVGFiS2V5KGVudGVyVGFiLnRhYikgPT0gdGhpcy52YWx1ZSkpIHJldHVybjsgLy8gVE9ETzogYWRkIHRoZSBzYW1lIGNsaWNrIGNoZWNrXG4vL1xuICAgICAgICAgICAgLy9leGl0VGFiLmFkZEV4aXQoKTtcbiAgICAgICAgICAgIC8vZW50ZXJUYWIuYWRkRW50ZXIoKTtcbi8vXG4gICAgICAgICAgICAvL3NldFRpbWVvdXQoKCkgPT4gdGhpcy5pc0FuaW1hdGluZyA9IHRydWUsIDApO1xuLy9cbiAgICAgICAgICAgIC8vc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBcdCAgICAvLyAgICB0aGlzLmlzQW5pbWF0aW5nID0gZmFsc2U7XG4vL1xuICAgICAgICAgICAgLy8gICAgZXhpdFRhYi5ybUV4aXQoKTtcbiAgICAgIFx0ICAgIC8vICAgIGVudGVyVGFiLnJtRW50ZXIoKTtcbi8vXG4gICAgICBcdCAgICAvLyAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIGlkKVxuICAgICAgICAgICAgLy99LCAzMDApO1xuXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIGlkKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnaW5wdXQnLCBpZClcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBhZGRUYWJDb21wb25lbnQodGFiQ29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMudGFiQ29tcG9uZW50cy5wdXNoKHRhYkNvbXBvbmVudCk7XG4gICAgfSxcblxuICAgIGdldEV4aXRUYWIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhYkNvbXBvbmVudHMuZmluZChjID0+IHRoaXMucHJlcGFyZVRhYktleShjLnRhYikgPT0gdGhpcy52YWx1ZSk7XG4gICAgfSxcblxuICAgIGdldEVudGVyVGFiKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhYkNvbXBvbmVudHMuZmluZChjID0+IHRoaXMucHJlcGFyZVRhYktleShjLnRhYikgPT0gaWQpO1xuICAgIH0sXG5cbiAgICBwcmVwYXJlVGFiS2V5KHRhYikge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHRhYiA9PSAnc3RyaW5nJyA/IHRhYiA6IHRhYi5pZDtcbiAgICB9LFxuXG4gICAgaXNTZWxlY3RlZCh7aWR9KSB7XG4gICAgICByZXR1cm4gaWQgPT09IHRoaXMudmFsdWVcbiAgICB9LFxuXG4gICAgYWRkVGFiKHRhYikge1xuICAgICAgdGhpcy50YWJzLnB1c2godGFiKVxuICAgIH0sXG5cbiAgICB1cGRhdGVUYWIoe2lkfSwgdGFiKSB7XG4gICAgICBjb25zdCBpbmRleCA9IGZpbmRUYWJJbmRleCh0aGlzLnRhYnMsIGlkKVxuICAgICAgaWYgKGluZGV4ID4gLTEpIHRoaXMudGFicy5zcGxpY2UoaW5kZXgsIDEsIHRhYilcbiAgICB9LFxuXG4gICAgcmVtb3ZlVGFiKHtpZH0pIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gZmluZFRhYkluZGV4KHRoaXMudGFicywgaWQpXG4gICAgICBpZiAoaW5kZXggPiAtMSkgdGhpcy50YWJzLnNwbGljZShpbmRleCwgMSlcbiAgICB9XG4gIH0sXG5cbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGFiczogW10sXG4gICAgICBpc0FuaW1hdGluZzogZmFsc2UsXG4gICAgICB0YWJDb21wb25lbnRzOiBbXSxcbiAgICB9XG4gIH0sXG5cbiAgY29tcG9uZW50czoge1RhYkxpbmt9XG59XG5cbmZ1bmN0aW9uIGZpbmRUYWJJbmRleCh0YWJzLCBpZCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRhYnMubGVuZ3RoOyArK2kpIHtcbiAgICBpZiAodGFic1tpXS5pZCA9PT0gaWQpIHtcbiAgICAgIHJldHVybiBpXG4gICAgfVxuICB9XG4gIHJldHVybiAtMVxufVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHRhYnMudnVlPzc5NGI5MTZlIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vdGFiLWwudnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0wYWQ4ZGEyOCF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi90YWItbC52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiL1VzZXJzL296L3NyYy9tYXRlcmlhbC1jb21wb25lbnRzL3NyYy90YWJzL3RhYi1sLnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMGFkOGRhMjhcIiwgX192dWVfb3B0aW9uc19fKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMGFkOGRhMjhcIiwgX192dWVfb3B0aW9uc19fKVxuICB9XG59KSgpfVxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSB0YWItbC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdGFicy90YWItbC52dWUiLCI8dGVtcGxhdGU+XG4gICAgPGEgY2xhc3M9XCJtZGwtdGFic19fdGFiXCIgaHJlZj1cIiNcIj57e3RhYi50aXRsZX19XG4gICAgPHNwYW4gcmVmPVwicmlwcGxlXCJcbiAgICAgICAgICB2LXNob3c9XCIhbm9SaXBwbGVFZmZlY3RcIlxuICAgICAgICAgIGNsYXNzPVwibWRsLXRhYnNfX3JpcHBsZS1jb250YWluZXIgbWRsLWpzLXJpcHBsZS1lZmZlY3RcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwibWRsLXJpcHBsZVwiPjwvc3Bhbj5cbiAgICA8L3NwYW4+XG4gICAgPC9hPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IHtcbiAgICB0YWI6IE9iamVjdCxcbiAgICBub1JpcHBsZUVmZmVjdDoge1xuICAgICAgcmVxdWlyZWQ6IGZhbHNlXG4gICAgfVxuICB9LFxuXG4gIG1vdW50ZWQgKCkge1xuICAgIGNvbXBvbmVudEhhbmRsZXIudXBncmFkZUVsZW1lbnQodGhpcy4kcmVmcy5yaXBwbGUsICdNYXRlcmlhbFJpcHBsZScpXG4gIH1cbn1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB0YWItbC52dWU/NzI1ZTJjN2UiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2EnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWRsLXRhYnNfX3RhYlwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImhyZWZcIjogXCIjXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS50YWIudGl0bGUpICsgXCJcXG5cIiksIF9jKCdzcGFuJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKCFfdm0ubm9SaXBwbGVFZmZlY3QpLFxuICAgICAgZXhwcmVzc2lvbjogXCIhbm9SaXBwbGVFZmZlY3RcIlxuICAgIH1dLFxuICAgIHJlZjogXCJyaXBwbGVcIixcbiAgICBzdGF0aWNDbGFzczogXCJtZGwtdGFic19fcmlwcGxlLWNvbnRhaW5lciBtZGwtanMtcmlwcGxlLWVmZmVjdFwiXG4gIH0sIFtfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZGwtcmlwcGxlXCJcbiAgfSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTBhZDhkYTI4XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0wYWQ4ZGEyOCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL3RhYnMvdGFiLWwudnVlXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZGwtdGFicyBpcy11cGdyYWRlZFwiLFxuICAgIGNsYXNzOiB7XG4gICAgICAndGFicy1hbmltYXRpbmcnOiBfdm0uaXNBbmltYXRpbmcsICdtZGwtdGFicy0tZm9yLWFuaW1hdGlvbic6IF92bS5hbmltYXRpb25cbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kbC10YWJzX190YWItYmFyXCJcbiAgfSwgX3ZtLl9sKChfdm0udGFicyksIGZ1bmN0aW9uKHRhYikge1xuICAgIHJldHVybiBfYygndGFiLWxpbmsnLCB7XG4gICAgICBrZXk6IHRhYi5pZCxcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1kbC10YWJzX190YWJcIixcbiAgICAgIGNsYXNzOiB7XG4gICAgICAgICdpcy1hY3RpdmUnOiBfdm0uaXNTZWxlY3RlZCh0YWIpXG4gICAgICB9LFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJuby1yaXBwbGUtZWZmZWN0XCI6IF92bS5ub1JpcHBsZUVmZmVjdCxcbiAgICAgICAgXCJ0YWJcIjogdGFiXG4gICAgICB9LFxuICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBfdm0uc2VsZWN0VGFiKHRhYilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZGwtdGFic19fdGFiLXdyYXBwZXJcIixcbiAgICBzdHlsZTogKF92bS5jb250ZW50U3R5bGUpXG4gIH0sIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSwgMildKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0yOTVhYTM4Y1wiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMjk1YWEzOGMhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy90YWJzL3RhYnMudnVlXG4vLyBtb2R1bGUgaWQgPSA1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhc3R5bGUhY3NzIXZ1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi00MTQ3NzQwOSFzYXNzIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi90YWIudnVlXCIpXG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi90YWIudnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi00MTQ3NzQwOSF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi90YWIudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIi9Vc2Vycy9vei9zcmMvbWF0ZXJpYWwtY29tcG9uZW50cy9zcmMvdGFicy90YWIudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi00MTQ3NzQwOVwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi00MTQ3NzQwOVwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH1cbn0pKCl9XG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHRhYi52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdGFicy90YWIudnVlIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTQxNDc3NDA5IS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi90YWIudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNDE0Nzc0MDkhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3RhYi52dWVcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTQxNDc3NDA5IS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi90YWIudnVlXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNDE0Nzc0MDkhLi9+L3Nhc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vc3JjL3RhYnMvdGFiLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4ubWRsLXRhYnNfX3BhbmVsLS1mb3ItYW5pbWF0aW9uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgei1pbmRleDogLTE7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIHRyYW5zaXRpb246IGFsbCAuM3M7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNDE0Nzc0MDkhLi9+L3Nhc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vc3JjL3RhYnMvdGFiLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPHRlbXBsYXRlPlxuICAgIDx0cmFuc2l0aW9uXG4gICAgICAgICAgICB2LWlmPVwiYW5pbWF0aW9uXCJcbiAgICAgICAgICAgIEBsZWF2ZT1cImxlYXZlXCJcbiAgICAgICAgICAgIEBhZnRlci1sZWF2ZT1cImFmdGVyTGVhdmVcIlxuICAgICAgICAgICAgQGJlZm9yZS1lbnRlcj1cImJlZm9yZUVudGVyXCJcbiAgICAgICAgICAgIEBlbnRlcj1cImVudGVyXCJcbiAgICAgICAgICAgIEBhZnRlci1lbnRlcj1cImFmdGVyRW50ZXJcIlxuICAgICAgICAgICAgQGVudGVyLWNhbmNlbGxlZD1cImVudGVyQ2FuY2VsZWRcIlxuICAgICAgICAgICAgQGxlYXZlLWNhbmNlbGxlZD1cImxlYXZlQ2FuY2VsZWRcIj5cblxuICAgICAgICA8ZGl2XG4gICAgICAgICAgICB2LXNob3c9XCJzZWxlY3RlZFwiXG4gICAgICAgICAgICBjbGFzcz1cIm1kbC10YWJzX19wYW5lbFwiXG4gICAgICAgICAgICA6Y2xhc3M9XCJ7J21kbC10YWJzX19wYW5lbC0tZm9yLWFuaW1hdGlvbic6IGFuaW1hdGlvbiwgJ2VudGVyJzogY2xhc3NFbnRlciwgJ2JlZm9yZS1lbnRlcic6IGNsYXNzQmVmb3JlRW50ZXIsICdsZWF2ZSc6IGNsYXNzTGVhdmV9XCI+XG5cbiAgICAgICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC90cmFuc2l0aW9uPlxuXG4gICAgPGRpdlxuICAgICAgICAgdi1lbHNlXG4gICAgICAgICBjbGFzcz1cIm1kbC10YWJzX19wYW5lbFwiXG4gICAgICAgICA6Y2xhc3M9XCJ7J2lzLWFjdGl2ZSc6IHNlbGVjdGVkfVwiPlxuXG4gICAgIDxzbG90Pjwvc2xvdD5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuICAgIC5tZGwtdGFicyB7XG4gICAgICAgICZfX3BhbmVsIHtcbiAgICAgICAgICAgICYtLWZvci1hbmltYXRpb24ge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc3R5bGU+XG5cbjxzY3JpcHQ+XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgd2F0Y2g6IHtcbiAgICB0YWIgKG5ld1RhYiwgb2xkVGFiKSB7XG4gICAgICB0aGlzLiRwYXJlbnQudXBkYXRlVGFiKHRhYlRvT2plY3Qob2xkVGFiKSwgdGhpcy50YWJEYXRhKVxuICAgIH1cbiAgfSxcblxuICBtb3VudGVkICgpIHtcbiAgICB0aGlzLiRwYXJlbnQuYWRkVGFiKHRoaXMudGFiRGF0YSlcbiAgICB0aGlzLiRwYXJlbnQuYWRkVGFiQ29tcG9uZW50KHRoaXMpO1xuICB9LFxuXG4gIGJlZm9yZURlc3Ryb3kgKCkge1xuICAgIHRoaXMuJHBhcmVudC5yZW1vdmVUYWIodGhpcy50YWJEYXRhKVxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgc2VsZWN0ZWQgKCkge1xuICAgICAgcmV0dXJuIHRoaXMuJHBhcmVudC5pc1NlbGVjdGVkKHRoaXMudGFiRGF0YSlcbiAgICB9LFxuICAgIGlkICgpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgdGhpcy50YWIgPT09ICdzdHJpbmcnXG4gICAgICAgICAgID8gdGhpcy50YWJcbiAgICAgICAgICAgOiB0aGlzLnRhYi5pZCB8fCB0aGlzLnRhYi50aXRsZVxuICAgIH0sXG4gICAgdGFiRGF0YSAoKSB7XG4gICAgICByZXR1cm4gdGFiVG9PamVjdCh0aGlzLnRhYilcbiAgICB9LFxuXG4gICAgYW5pbWF0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kcGFyZW50LmFuaW1hdGlvbjtcbiAgICB9XG4gIH0sXG4gIHByb3BzOiB7XG4gICAgdGFiOiB7XG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIHR5cGU6IFtTdHJpbmcsIE9iamVjdF1cbiAgICB9LFxuICB9LFxuXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY2xhc3NFbnRlcjogZmFsc2UsXG4gICAgICAgIGNsYXNzQmVmb3JlRW50ZXI6IGZhbHNlLFxuICAgICAgICBjdXJyZW50OiBmYWxzZSxcbiAgICAgICAgY2xhc3NMZWF2ZTogZmFsc2UsXG4gICAgfVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcblxuICAgIGJlZm9yZUVudGVyKCkge1xuICAgIFx0dGhpcy5jbGFzc0JlZm9yZUVudGVyID0gdHJ1ZTtcbiAgICBcdGNvbnNvbGUubG9nKCdiZWZvcmUgZW50ZXInKVxuICAgIH0sXG5cbiAgXHRlbnRlcihlbCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmNsYXNzRW50ZXIgPSB0cnVlLCAxMCk7XG4gICAgICAvL3RoaXMuY2xhc3NFbnRlciA9IHRydWVcbiAgICAgIGNvbnNvbGUubG9nKCdlbnRlcicpO1xuICAgIH0sXG5cbiAgICBhZnRlckVudGVyKCkge1xuICAgICAgdGhpcy5jbGFzc0VudGVyID0gZmFsc2U7XG4gICAgICB0aGlzLmNsYXNzQmVmb3JlRW50ZXIgPSBmYWxzZTtcbiAgICB9LFxuXG4gICAgbGVhdmUoZWwpIHtcbiAgICAgIC8vdGhpcy5jdXJyZW50ID0gZmFsc2U7XG4gICAgICB0aGlzLmNsYXNzTGVhdmUgPSB0cnVlO1xuICAgIH0sXG5cbiAgICBhZnRlckxlYXZlKGVsKSB7XG4gICAgICB0aGlzLmNsYXNzTGVhdmUgPSBmYWxzZTtcbiAgICB9LFxuXG4gICAgZW50ZXJDYW5jZWxlZCgpIHtcbiAgICAgIHRoaXMuY2xhc3NFbnRlciA9IGZhbHNlO1xuICAgICAgdGhpcy5jbGFzc0JlZm9yZUVudGVyID0gZmFsc2U7XG4gICAgfSxcblxuICAgIGxlYXZlQ2FuY2VsZWQoKSB7XG4gICAgXHR0aGlzLmNsYXNzTGVhdmUgPSBmYWxzZTtcbiAgICB9LFxuICB9XG59XG5cbmZ1bmN0aW9uIHRhYlRvT2plY3QgKHRhYikge1xuICByZXR1cm4gdHlwZW9mIHRhYiA9PT0gJ3N0cmluZycgPyB7IGlkOiB0YWIsIHRpdGxlOiB0YWIgfSA6IHsgaWQ6IHRhYi5pZCwgdGl0bGU6IHRhYi50aXRsZSB9O1xufVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHRhYi52dWU/NDA4MWVjNGYiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gKF92bS5hbmltYXRpb24pID8gX2MoJ3RyYW5zaXRpb24nLCB7XG4gICAgb246IHtcbiAgICAgIFwibGVhdmVcIjogX3ZtLmxlYXZlLFxuICAgICAgXCJhZnRlci1sZWF2ZVwiOiBfdm0uYWZ0ZXJMZWF2ZSxcbiAgICAgIFwiYmVmb3JlLWVudGVyXCI6IF92bS5iZWZvcmVFbnRlcixcbiAgICAgIFwiZW50ZXJcIjogX3ZtLmVudGVyLFxuICAgICAgXCJhZnRlci1lbnRlclwiOiBfdm0uYWZ0ZXJFbnRlcixcbiAgICAgIFwiZW50ZXItY2FuY2VsbGVkXCI6IF92bS5lbnRlckNhbmNlbGVkLFxuICAgICAgXCJsZWF2ZS1jYW5jZWxsZWRcIjogX3ZtLmxlYXZlQ2FuY2VsZWRcbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5zZWxlY3RlZCksXG4gICAgICBleHByZXNzaW9uOiBcInNlbGVjdGVkXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJtZGwtdGFic19fcGFuZWxcIixcbiAgICBjbGFzczoge1xuICAgICAgJ21kbC10YWJzX19wYW5lbC0tZm9yLWFuaW1hdGlvbic6IF92bS5hbmltYXRpb24sICdlbnRlcic6IF92bS5jbGFzc0VudGVyLCAnYmVmb3JlLWVudGVyJzogX3ZtLmNsYXNzQmVmb3JlRW50ZXIsICdsZWF2ZSc6IF92bS5jbGFzc0xlYXZlXG4gICAgfVxuICB9LCBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sIDIpXSkgOiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kbC10YWJzX19wYW5lbFwiLFxuICAgIGNsYXNzOiB7XG4gICAgICAnaXMtYWN0aXZlJzogX3ZtLnNlbGVjdGVkXG4gICAgfVxuICB9LCBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sIDIpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTQxNDc3NDA5XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi00MTQ3NzQwOSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL3RhYnMvdGFiLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vdG9vbHRpcC52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTc4NDQ5NThlIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Rvb2x0aXAudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIi9Vc2Vycy9vei9zcmMvbWF0ZXJpYWwtY29tcG9uZW50cy9zcmMvdG9vbHRpcC52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTc4NDQ5NThlXCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTc4NDQ5NThlXCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfVxufSkoKX1cbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gdG9vbHRpcC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdG9vbHRpcC52dWUiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cIm1kbC10b29sdGlwXCJcbiAgICAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgICdtZGwtdG9vbHRpcC0tbGFyZ2UnOiBsYXJnZSxcbiAgICAgICAgICdtZGwtdG9vbHRpcC0tbGVmdCc6IGxlZnQsXG4gICAgICAgICAnbWRsLXRvb2x0aXAtLXJpZ2h0JzogcmlnaHQsXG4gICAgICAgICAnbWRsLXRvb2x0aXAtLXRvcCc6IHRvcCxcbiAgICAgICAgICdtZGwtdG9vbHRpcC0tYm90dG9tJzogYm90dG9tLFxuICAgICAgICAgfVwiXG4gICAgICAgICA6Zm9yPSd0YXJnZXQnPlxuICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczoge1xuICAgIHRhcmdldDoge1xuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICB0eXBlOiBTdHJpbmdcbiAgICB9LFxuICAgIGxlZnQ6IEJvb2xlYW4sXG4gICAgcmlnaHQ6IEJvb2xlYW4sXG4gICAgdG9wOiBCb29sZWFuLFxuICAgIGJvdHRvbTogQm9vbGVhbixcblxuICAgIGxhcmdlOiBCb29sZWFuXG4gIH0sXG4gIG1vdW50ZWQgKCkge1xuICAgIGNvbXBvbmVudEhhbmRsZXIudXBncmFkZUVsZW1lbnQodGhpcy4kZWwsICdNYXRlcmlhbFRvb2x0aXAnKVxuICB9XG59XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gdG9vbHRpcC52dWU/NzU4MTNjYTAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZGwtdG9vbHRpcFwiLFxuICAgIGNsYXNzOiB7XG4gICAgICAnbWRsLXRvb2x0aXAtLWxhcmdlJzogX3ZtLmxhcmdlLFxuICAgICAgJ21kbC10b29sdGlwLS1sZWZ0JzogX3ZtLmxlZnQsXG4gICAgICAnbWRsLXRvb2x0aXAtLXJpZ2h0JzogX3ZtLnJpZ2h0LFxuICAgICAgJ21kbC10b29sdGlwLS10b3AnOiBfdm0udG9wLFxuICAgICAgJ21kbC10b29sdGlwLS1ib3R0b20nOiBfdm0uYm90dG9tLFxuICAgIH0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IF92bS50YXJnZXRcbiAgICB9XG4gIH0sIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSwgMilcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNzg0NDk1OGVcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTc4NDQ5NThlIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvdG9vbHRpcC52dWVcbi8vIG1vZHVsZSBpZCA9IDY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xudmFyIF9fdnVlX3N0eWxlc19fID0ge31cblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3RhYmxlLnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtM2E5Y2M5NTghdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vdGFibGUudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIi9Vc2Vycy9vei9zcmMvbWF0ZXJpYWwtY29tcG9uZW50cy9zcmMvdGFibGUvdGFibGUudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0zYTljYzk1OFwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0zYTljYzk1OFwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH1cbn0pKCl9XG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHRhYmxlLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy90YWJsZS90YWJsZS52dWUiLCI8dGVtcGxhdGU+XG4gICAgPHRhYmxlIGNsYXNzPVwibWRsLWRhdGEtdGFibGUgbWRsLWpzLWRhdGEtdGFibGVcIj5cbiAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgIDwvdGFibGU+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0e1xuICAgICAgICBwcm9wczoge30sXG5cbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaGFzUm93U2VsZWN0aW9uOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBudW1iZXJPZlJvd3M6IDAsXG4gICAgICAgICAgICAgICAgbnVtYmVyT2ZTZWxlY3RlZDogMCxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFJvd3M6IHt9LFxuICAgICAgICAgICAgICAgIGRhdGE6IFtdLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHdhdGNoOiB7XG4gICAgICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgICAgIHRoaXMubnVtYmVyT2ZSb3dzID0gdGhpcy5kYXRhLmxlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBlbWl0U2VsZWN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZFJvd3MgPSBbXTtcblxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMuc2VsZWN0ZWRSb3dzKS5mb3JFYWNoKGsgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFJvd3MucHVzaCh0aGlzLnNlbGVjdGVkUm93c1trXSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdzZWxlY3QnLCBzZWxlY3RlZFJvd3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICBjb21wb25lbnRIYW5kbGVyLnVwZ3JhZGVFbGVtZW50KHRoaXMuJGVsKTtcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHRhYmxlLnZ1ZT9iMTNiOTU3ZSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygndGFibGUnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWRsLWRhdGEtdGFibGUgbWRsLWpzLWRhdGEtdGFibGVcIlxuICB9LCBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sIDIpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTNhOWNjOTU4XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0zYTljYzk1OCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL3RhYmxlL3RhYmxlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vdGFibGVSb3cudnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0yZmRkZjg5MiF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi90YWJsZVJvdy52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiL1VzZXJzL296L3NyYy9tYXRlcmlhbC1jb21wb25lbnRzL3NyYy90YWJsZS90YWJsZVJvdy52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTJmZGRmODkyXCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTJmZGRmODkyXCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfVxufSkoKX1cbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gdGFibGVSb3cudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3RhYmxlL3RhYmxlUm93LnZ1ZSIsIjx0ZW1wbGF0ZT5cbiAgICA8dHIgOmNsYXNzPVwiY2xhc3Nlc1wiPlxuICAgICAgICA8bS10YWJsZS1jZWxsIHYtaWY9XCJoYXNTZWxlY3Rpb25cIj5cbiAgICAgICAgICAgIDxtLWNoZWNrYm94IHYtbW9kZWw9XCJjaGVja2JveFwiIEBjaGFuZ2U9XCJzZWxlY3RcIj48L20tY2hlY2tib3g+XG4gICAgICAgIDwvbS10YWJsZS1jZWxsPlxuXG4gICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICA8L3RyPlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IHsgZ2V0Q2xvc2VzdFZ1ZVBhcmVudCB9IGZyb20gJy4uL3V0aWxzJztcbiAgICBleHBvcnQgZGVmYXVsdHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHNlbGVjdGlvbjogQm9vbGVhbixcbiAgICAgICAgICAgIG1JdGVtOiBPYmplY3QsXG4gICAgICAgIH0sXG5cbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIGhhc1NlbGVjdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3Rpb24gfHwgdGhpcy5oZWFkUm93ICYmIHRoaXMucGFyZW50VGFibGUuaGFzUm93U2VsZWN0aW9uO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgY2xhc3NlcygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAnaXMtc2VsZWN0ZWQnOiB0aGlzLmNoZWNrYm94XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnRUYWJsZSA9IGdldENsb3Nlc3RWdWVQYXJlbnQodGhpcy4kcGFyZW50LCAnbWRsLWRhdGEtdGFibGUnKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuJGVsLnBhcmVudE5vZGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAndGhlYWQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWFkUm93ID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnRUYWJsZS5udW1iZXJPZlJvd3MrKztcbiAgICAgICAgICAgICAgICB0aGlzLmluZGV4ID0gdGhpcy5wYXJlbnRUYWJsZS5udW1iZXJPZlJvd3M7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnRUYWJsZS5oYXNSb3dTZWxlY3Rpb24gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1JdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50VGFibGUuZGF0YS5wdXNoKHRoaXMubUl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICB3YXRjaDoge1xuICAgICAgICAgICAgbUl0ZW0obmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnRUYWJsZS5kYXRhW3RoaXMuaW5kZXhdID0gdGhpcy5tSXRlbTtcbiAgICAgICAgICAgICAgICAvL3RoaXMuaGFuZGxlTXVsdGlwbGVTZWxlY3Rpb24obmV3VmFsdWUgPT09IG9sZFZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICB9LFxuXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHNldFNlbGVjdGVkUm93KHZhbHVlLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudFRhYmxlLnNlbGVjdGVkUm93c1tpbmRleF0gPSB0aGlzLnBhcmVudFRhYmxlLmRhdGFbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICArK3RoaXMucGFyZW50VGFibGUubnVtYmVyT2ZTZWxlY3RlZDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5wYXJlbnRUYWJsZS5zZWxlY3RlZFJvd3NbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAtLXRoaXMucGFyZW50VGFibGUubnVtYmVyT2ZTZWxlY3RlZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBoYW5kbGVNdWx0aXBsZVNlbGVjdGlvbih2YWx1ZSkge1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5wYXJlbnRUYWJsZS4kY2hpbGRyZW4pO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnRUYWJsZS4kY2hpbGRyZW5bMV0uJGNoaWxkcmVuLmZvckVhY2goKHJvdywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcm93LmNoZWNrYm94ID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcm93LmhlYWRSb3cpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U2VsZWN0ZWRSb3codmFsdWUsIGluZGV4KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy9pZih2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgcm93LmNoZWNrYm94ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vfVxuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHRoaXMucGFyZW50VGFibGUubnVtYmVyT2ZTZWxlY3RlZCA9ICB2YWx1ZSA/IHRoaXMucGFyZW50VGFibGUubnVtYmVyT2ZSb3dzIDogMDtcblxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaGFuZGxlU2luZ2xlU2VsZWN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTZWxlY3RlZFJvdyh2YWx1ZSwgdGhpcy5pbmRleCAtIDEpO1xuICAgICAgICAgICAgICAgIHRoaXMucGFyZW50VGFibGUuJGNoaWxkcmVuWzBdLmNoZWNrYm94ID0gdGhpcy5wYXJlbnRUYWJsZS5udW1iZXJPZlNlbGVjdGVkID09PSB0aGlzLnBhcmVudFRhYmxlLm51bWJlck9mUm93cztcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHNlbGVjdCgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5oYXNTZWxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaGVhZFJvdykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVNdWx0aXBsZVNlbGVjdGlvbih0aGlzLmNoZWNrYm94KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlU2luZ2xlU2VsZWN0aW9uKHRoaXMuY2hlY2tib3gpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnRUYWJsZS5lbWl0U2VsZWN0aW9uKCk7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGF0YSgpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBwYXJlbnRUYWJsZToge30sXG4gICAgICAgICAgICAgICAgaGVhZFJvdzogZmFsc2UsXG4gICAgICAgICAgICAgICAgY2hlY2tib3g6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGluZGV4OiAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB0YWJsZVJvdy52dWU/NzRkZGY3NmMiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ3RyJywge1xuICAgIGNsYXNzOiBfdm0uY2xhc3Nlc1xuICB9LCBbKF92bS5oYXNTZWxlY3Rpb24pID8gX2MoJ20tdGFibGUtY2VsbCcsIFtfYygnbS1jaGVja2JveCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5jaGVja2JveCksXG4gICAgICBleHByZXNzaW9uOiBcImNoZWNrYm94XCJcbiAgICB9XSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLmNoZWNrYm94KVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2hhbmdlXCI6IF92bS5zZWxlY3QsXG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uY2hlY2tib3ggPSAkZXZlbnRcbiAgICAgIH1cbiAgICB9XG4gIH0pXSwgMSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl90KFwiZGVmYXVsdFwiKV0sIDIpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTJmZGRmODkyXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0yZmRkZjg5MiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL3RhYmxlL3RhYmxlUm93LnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vdGFibGVDZWxsLnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtZDU5NjU0NGMhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vdGFibGVDZWxsLnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCIvVXNlcnMvb3ovc3JjL21hdGVyaWFsLWNvbXBvbmVudHMvc3JjL3RhYmxlL3RhYmxlQ2VsbC52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWQ1OTY1NDRjXCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWQ1OTY1NDRjXCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfVxufSkoKX1cbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gdGFibGVDZWxsLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy90YWJsZS90YWJsZUNlbGwudnVlIiwiPHRlbXBsYXRlPlxuICAgIDx0ZCA6Y2xhc3M9XCJ7J21kbC1kYXRhLXRhYmxlX19jZWxsLS1ub24tbnVtZXJpYyc6ICFudW1lcmljfVwiIDppZD1cImlkXCI+XG4gICAgICAgIDxtLXRvb2x0aXAgOnRhcmdldD1cImlkXCIgdi1pZj1cInRvb2x0aXBcIiB0b3A+e3t0b29sdGlwfX08L20tdG9vbHRpcD5cbiAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgIDwvdGQ+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbiAgICBpbXBvcnQgeyBnZW5JZFNob3J0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBpZDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICd0JytnZW5JZFNob3J0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHRvb2x0aXA6IFtTdHJpbmcsIE51bWJlcl0sXG4gICAgICAgICAgICBudW1lcmljOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gdGFibGVDZWxsLnZ1ZT8wNmRiMzU2MiIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygndGQnLCB7XG4gICAgY2xhc3M6IHtcbiAgICAgICdtZGwtZGF0YS10YWJsZV9fY2VsbC0tbm9uLW51bWVyaWMnOiAhX3ZtLm51bWVyaWNcbiAgICB9LFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IF92bS5pZFxuICAgIH1cbiAgfSwgWyhfdm0udG9vbHRpcCkgPyBfYygnbS10b29sdGlwJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRhcmdldFwiOiBfdm0uaWQsXG4gICAgICBcInRvcFwiOiBcIlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0udG9vbHRpcCkpXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl90KFwiZGVmYXVsdFwiKV0sIDIpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LWQ1OTY1NDRjXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi1kNTk2NTQ0YyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL3RhYmxlL3RhYmxlQ2VsbC52dWVcbi8vIG1vZHVsZSBpZCA9IDc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xudmFyIF9fdnVlX3N0eWxlc19fID0ge31cblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3RhYmxlSGVhZC52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LWVkMzZhOTUwIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3RhYmxlSGVhZC52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiL1VzZXJzL296L3NyYy9tYXRlcmlhbC1jb21wb25lbnRzL3NyYy90YWJsZS90YWJsZUhlYWQudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1lZDM2YTk1MFwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi1lZDM2YTk1MFwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH1cbn0pKCl9XG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHRhYmxlSGVhZC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdGFibGUvdGFibGVIZWFkLnZ1ZSIsIjx0ZW1wbGF0ZT5cbiAgICA8dGhlYWQ+XG4gICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICA8L3RoZWFkPlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHR7XG4gICAgICAgIGRhdGEoKXtcbiAgICAgICAgICAgIHJldHVybiB7fVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gdGFibGVIZWFkLnZ1ZT81Y2ZlOTg4NCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygndGhlYWQnLCBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sIDIpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LWVkMzZhOTUwXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi1lZDM2YTk1MCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL3RhYmxlL3RhYmxlSGVhZC52dWVcbi8vIG1vZHVsZSBpZCA9IDc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xudmFyIF9fdnVlX3N0eWxlc19fID0ge31cblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3RhYmxlSC52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTFhNGExMDIwIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3RhYmxlSC52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiL1VzZXJzL296L3NyYy9tYXRlcmlhbC1jb21wb25lbnRzL3NyYy90YWJsZS90YWJsZUgudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0xYTRhMTAyMFwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0xYTRhMTAyMFwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH1cbn0pKCl9XG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHRhYmxlSC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdGFibGUvdGFibGVILnZ1ZSIsIjx0ZW1wbGF0ZT5cbiAgICA8dGggOmNsYXNzPVwieydtZGwtZGF0YS10YWJsZV9fY2VsbC0tbm9uLW51bWVyaWMnOiAhbnVtZXJpY31cIj5cbiAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgIDwvdGg+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBudW1lcmljOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gdGFibGVILnZ1ZT84MmE3YjZiNiIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygndGgnLCB7XG4gICAgY2xhc3M6IHtcbiAgICAgICdtZGwtZGF0YS10YWJsZV9fY2VsbC0tbm9uLW51bWVyaWMnOiAhX3ZtLm51bWVyaWNcbiAgICB9XG4gIH0sIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSwgMilcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMWE0YTEwMjBcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTFhNGExMDIwIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvdGFibGUvdGFibGVILnZ1ZVxuLy8gbW9kdWxlIGlkID0gODBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vdGFibGVCb2R5LnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMzE2MjY2MWEhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vdGFibGVCb2R5LnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCIvVXNlcnMvb3ovc3JjL21hdGVyaWFsLWNvbXBvbmVudHMvc3JjL3RhYmxlL3RhYmxlQm9keS52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTMxNjI2NjFhXCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTMxNjI2NjFhXCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfVxufSkoKX1cbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gdGFibGVCb2R5LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy90YWJsZS90YWJsZUJvZHkudnVlIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCd0Ym9keScsIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSwgMilcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMzE2MjY2MWFcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTMxNjI2NjFhIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvdGFibGUvdGFibGVCb2R5LnZ1ZVxuLy8gbW9kdWxlIGlkID0gODNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTZmMjdiNWU2IXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9kaWFsb2cudnVlXCIpXG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9kaWFsb2cudnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi02ZjI3YjVlNiF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9kaWFsb2cudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIi9Vc2Vycy9vei9zcmMvbWF0ZXJpYWwtY29tcG9uZW50cy9zcmMvZGlhbG9nLnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNmYyN2I1ZTZcIiwgX192dWVfb3B0aW9uc19fKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNmYyN2I1ZTZcIiwgX192dWVfb3B0aW9uc19fKVxuICB9XG59KSgpfVxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBkaWFsb2cudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RpYWxvZy52dWUiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTZmMjdiNWU2IS4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9kaWFsb2cudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi02ZjI3YjVlNiEuLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vZGlhbG9nLnZ1ZVwiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTZmMjdiNWU2IS4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9kaWFsb2cudnVlXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi02ZjI3YjVlNiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy9kaWFsb2cudnVlXG4vLyBtb2R1bGUgaWQgPSA4NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5tZGwtZGlhbG9nLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRvcDowO1xcbiAgbGVmdDogMDtcXG4gIHotaW5kZXg6IDEwMDAwO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjMpO1xcbn1cXG4ubWRsLWRpYWxvZy1jb250YWluZXIgLm1kbC1kaWFsb2cge1xcbiAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHdpZHRoOiBpbml0aWFsO1xcbiAgbWluLXdpZHRoOiAyODBweDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi8uL3NyYy9kaWFsb2cudnVlPzAzOGJiMzg2XCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUF1RUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0NBQ0E7QUFDQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiZGlhbG9nLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICAgIDxkaXYgY2xhc3M9XFxcIm1kbC1kaWFsb2ctY29udGFpbmVyXFxcIlxcbiAgICAgICAgIHJlZj1cXFwib3V0XFxcIlxcbiAgICAgICAgIEBjbGljaz1cXFwiY2xvc2VJZk91dHNpZGVcXFwiXFxuICAgICAgICAgdi1zaG93PVxcXCJzaG93XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm1kbC1kaWFsb2dcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1kbC1kaWFsb2dfX3RpdGxlXFxcIj57e3RpdGxlfX08L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtZGwtZGlhbG9nX19jb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgPHNsb3Q+PC9zbG90PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1kbC1kaWFsb2dfX2FjdGlvbnNcXFwiIDpjbGFzcz1cXFwiYWN0aW9uc0NsYXNzZXNcXFwiPlxcbiAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVxcXCJhY3Rpb25zXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxtLWJ1dHRvbiBAY2xpY2submF0aXZlLnN0b3A9XFxcImNsb3NlXFxcIj5DbG9zZTwvbS1idXR0b24+XFxuICAgICAgICAgICAgICAgIDwvc2xvdD5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuaW1wb3J0IGNyZWF0ZUZvY3VzVHJhcCBmcm9tICdmb2N1cy10cmFwJ1xcbmV4cG9ydCBkZWZhdWx0IHtcXG4gIGNvbXB1dGVkOiB7XFxuICAgIGFjdGlvbnNDbGFzc2VzICgpIHtcXG4gICAgICByZXR1cm4ge1xcbiAgICAgICAgJ21kbC1kaWFsb2dfX2FjdGlvbnMtLWZ1bGwtd2lkdGgnOiB0aGlzLmZ1bGxXaWR0aFxcbiAgICAgIH1cXG4gICAgfVxcbiAgfSxcXG4gIGRhdGEgKCkge1xcbiAgICByZXR1cm4ge1xcbiAgICAgIHNob3c6IGZhbHNlXFxuICAgIH1cXG4gIH0sXFxuICBwcm9wczoge1xcbiAgICB0aXRsZToge1xcbiAgICAgIHR5cGU6IFN0cmluZ1xcbiAgICB9LFxcbiAgICBmdWxsV2lkdGg6IEJvb2xlYW4sXFxuICAgIG5vRm9jdXNUcmFwOiB7XFxuICAgICAgdHlwZTogQm9vbGVhbixcXG4gICAgICBkZWZhdWx0OiBmYWxzZVxcbiAgICB9XFxuICB9LFxcbiAgbW91bnRlZCAoKSB7XFxuICAgIGlmICghdGhpcy5ub0ZvY3VzVHJhcCkgdGhpcy5fZm9jdXNUcmFwID0gY3JlYXRlRm9jdXNUcmFwKHRoaXMuJGVsKVxcbiAgfSxcXG4gIG1ldGhvZHM6IHtcXG4gICAgb3BlbiAoKSB7XFxuICAgICAgdGhpcy5zaG93ID0gdHJ1ZVxcbiAgICAgIGlmICh0aGlzLl9mb2N1c1RyYXApIHRoaXMuJG5leHRUaWNrKCgpID0+IHRoaXMuX2ZvY3VzVHJhcC5hY3RpdmF0ZSgpKVxcbiAgICAgIHRoaXMuJGVtaXQoJ29wZW4nKVxcbiAgICB9LFxcbiAgICBjbG9zZSAoKSB7XFxuICAgICAgdGhpcy5zaG93ID0gZmFsc2VcXG4gICAgICBpZiAodGhpcy5fZm9jdXNUcmFwKSB0aGlzLl9mb2N1c1RyYXAuZGVhY3RpdmF0ZSgpXFxuICAgICAgdGhpcy4kZW1pdCgnY2xvc2UnKVxcbiAgICB9LFxcbiAgICBjbG9zZUlmT3V0c2lkZSAoeyB0YXJnZXQgfSkge1xcbiAgICAgIGlmICh0YXJnZXQgPT09IHRoaXMuJHJlZnMub3V0KSB0aGlzLmNsb3NlKClcXG4gICAgfVxcbiAgfSxcXG4gIHdhdGNoOiB7XFxuICAgIG5vRm9jdXNUcmFwIChub0ZvY3VzVHJhcCkge1xcbiAgICAgIHRoaXMuX2ZvY3VzVHJhcCA9IG5vRm9jdXNUcmFwID8gbnVsbCA6IGNyZWF0ZUZvY3VzVHJhcCh0aGlzLiRlbClcXG4gICAgfVxcbiAgfVxcbn1cXG48L3NjcmlwdD5cXG5cXG48c3R5bGU+XFxuLm1kbC1kaWFsb2ctY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdG9wOjA7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogMTAwMDA7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMyk7XFxufVxcbi5tZGwtZGlhbG9nLWNvbnRhaW5lciAubWRsLWRpYWxvZyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgd2lkdGg6IGluaXRpYWw7XFxuICBtaW4td2lkdGg6IDI4MHB4O1xcbn1cXG48L3N0eWxlPlwiXSxcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNmYyN2I1ZTYhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zcmMvZGlhbG9nLnZ1ZVxuLy8gbW9kdWxlIGlkID0gODZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbnZhciBzdHlsZXNJbkRvbSA9IHt9LFxuXHRtZW1vaXplID0gZnVuY3Rpb24oZm4pIHtcblx0XHR2YXIgbWVtbztcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRcdHJldHVybiBtZW1vO1xuXHRcdH07XG5cdH0sXG5cdGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiAvbXNpZSBbNi05XVxcYi8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKTtcblx0fSksXG5cdGdldEhlYWRFbGVtZW50ID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO1xuXHR9KSxcblx0c2luZ2xldG9uRWxlbWVudCA9IG51bGwsXG5cdHNpbmdsZXRvbkNvdW50ZXIgPSAwLFxuXHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIDxoZWFkPi5cblx0aWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QpO1xuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspXG5cdFx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oKTtcblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0KSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKVxuXHRcdFx0c3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlXG5cdFx0XHRuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCkge1xuXHR2YXIgaGVhZCA9IGdldEhlYWRFbGVtZW50KCk7XG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wW3N0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBoZWFkLmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZihsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcblx0XHR9XG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AucHVzaChzdHlsZUVsZW1lbnQpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcblx0c3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcblx0dmFyIGlkeCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGVFbGVtZW50KTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuXHR2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXHRzdHlsZUVsZW1lbnQudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCk7XG5cdHJldHVybiBzdHlsZUVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVFbGVtZW50LCB1cGRhdGUsIHJlbW92ZTtcblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblx0XHRzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcblx0XHRpZihuZXdPYmopIHtcblx0XHRcdGlmKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcClcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzO1xuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGVFbGVtZW50LCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0aWYgKG1lZGlhKSB7XG5cdFx0c3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL2RldnRvb2xzL2RvY3MvamF2YXNjcmlwdC1kZWJ1Z2dpbmdcblx0XHQvLyB0aGlzIG1ha2VzIHNvdXJjZSBtYXBzIGluc2lkZSBzdHlsZSB0YWdzIHdvcmsgcHJvcGVybHkgaW4gQ2hyb21lXG5cdFx0Y3NzICs9ICdcXG4vKiMgc291cmNlVVJMPScgKyBzb3VyY2VNYXAuc291cmNlc1swXSArICcgKi8nO1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0aWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcblx0XHR9XG5cdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDg3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwibWRsLWRpYWxvZy1jb250YWluZXJcIlxuICAgICAgICAgcmVmPVwib3V0XCJcbiAgICAgICAgIEBjbGljaz1cImNsb3NlSWZPdXRzaWRlXCJcbiAgICAgICAgIHYtc2hvdz1cInNob3dcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1kaWFsb2dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtZGlhbG9nX190aXRsZVwiPnt7dGl0bGV9fTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1kaWFsb2dfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtZGlhbG9nX19hY3Rpb25zXCIgOmNsYXNzPVwiYWN0aW9uc0NsYXNzZXNcIj5cbiAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVwiYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICA8bS1idXR0b24gQGNsaWNrLm5hdGl2ZS5zdG9wPVwiY2xvc2VcIj5DbG9zZTwvbS1idXR0b24+XG4gICAgICAgICAgICAgICAgPC9zbG90PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBjcmVhdGVGb2N1c1RyYXAgZnJvbSAnZm9jdXMtdHJhcCdcbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcHV0ZWQ6IHtcbiAgICBhY3Rpb25zQ2xhc3NlcyAoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAnbWRsLWRpYWxvZ19fYWN0aW9ucy0tZnVsbC13aWR0aCc6IHRoaXMuZnVsbFdpZHRoXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2hvdzogZmFsc2VcbiAgICB9XG4gIH0sXG4gIHByb3BzOiB7XG4gICAgdGl0bGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZ1xuICAgIH0sXG4gICAgZnVsbFdpZHRoOiBCb29sZWFuLFxuICAgIG5vRm9jdXNUcmFwOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQgKCkge1xuICAgIGlmICghdGhpcy5ub0ZvY3VzVHJhcCkgdGhpcy5fZm9jdXNUcmFwID0gY3JlYXRlRm9jdXNUcmFwKHRoaXMuJGVsKVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgb3BlbiAoKSB7XG4gICAgICB0aGlzLnNob3cgPSB0cnVlXG4gICAgICBpZiAodGhpcy5fZm9jdXNUcmFwKSB0aGlzLiRuZXh0VGljaygoKSA9PiB0aGlzLl9mb2N1c1RyYXAuYWN0aXZhdGUoKSlcbiAgICAgIHRoaXMuJGVtaXQoJ29wZW4nKVxuICAgIH0sXG4gICAgY2xvc2UgKCkge1xuICAgICAgdGhpcy5zaG93ID0gZmFsc2VcbiAgICAgIGlmICh0aGlzLl9mb2N1c1RyYXApIHRoaXMuX2ZvY3VzVHJhcC5kZWFjdGl2YXRlKClcbiAgICAgIHRoaXMuJGVtaXQoJ2Nsb3NlJylcbiAgICB9LFxuICAgIGNsb3NlSWZPdXRzaWRlICh7IHRhcmdldCB9KSB7XG4gICAgICBpZiAodGFyZ2V0ID09PSB0aGlzLiRyZWZzLm91dCkgdGhpcy5jbG9zZSgpXG4gICAgfVxuICB9LFxuICB3YXRjaDoge1xuICAgIG5vRm9jdXNUcmFwIChub0ZvY3VzVHJhcCkge1xuICAgICAgdGhpcy5fZm9jdXNUcmFwID0gbm9Gb2N1c1RyYXAgPyBudWxsIDogY3JlYXRlRm9jdXNUcmFwKHRoaXMuJGVsKVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbi5tZGwtZGlhbG9nLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0b3A6MDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTAwMDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4zKTtcbn1cbi5tZGwtZGlhbG9nLWNvbnRhaW5lciAubWRsLWRpYWxvZyB7XG4gIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG4gIHBhZGRpbmc6IDFlbTtcbiAgY29sb3I6IGJsYWNrO1xuICB3aWR0aDogaW5pdGlhbDtcbiAgbWluLXdpZHRoOiAyODBweDtcbn1cbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGRpYWxvZy52dWU/MDM4YmIzODYiLCJ2YXIgdGFiYmFibGUgPSByZXF1aXJlKCd0YWJiYWJsZScpO1xuXG52YXIgbGlzdGVuaW5nRm9jdXNUcmFwID0gbnVsbDtcblxuZnVuY3Rpb24gZm9jdXNUcmFwKGVsZW1lbnQsIHVzZXJPcHRpb25zKSB7XG4gIHZhciB0YWJiYWJsZU5vZGVzID0gW107XG4gIHZhciBub2RlRm9jdXNlZEJlZm9yZUFjdGl2YXRpb24gPSBudWxsO1xuICB2YXIgYWN0aXZlID0gZmFsc2U7XG4gIHZhciBwYXVzZWQgPSBmYWxzZTtcblxuICB2YXIgY29udGFpbmVyID0gKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJylcbiAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbWVudClcbiAgICA6IGVsZW1lbnQ7XG5cbiAgdmFyIGNvbmZpZyA9IHVzZXJPcHRpb25zIHx8IHt9O1xuICBjb25maWcucmV0dXJuRm9jdXNPbkRlYWN0aXZhdGUgPSAodXNlck9wdGlvbnMgJiYgdXNlck9wdGlvbnMucmV0dXJuRm9jdXNPbkRlYWN0aXZhdGUgIT09IHVuZGVmaW5lZClcbiAgICA/IHVzZXJPcHRpb25zLnJldHVybkZvY3VzT25EZWFjdGl2YXRlXG4gICAgOiB0cnVlO1xuICBjb25maWcuZXNjYXBlRGVhY3RpdmF0ZXMgPSAodXNlck9wdGlvbnMgJiYgdXNlck9wdGlvbnMuZXNjYXBlRGVhY3RpdmF0ZXMgIT09IHVuZGVmaW5lZClcbiAgICA/IHVzZXJPcHRpb25zLmVzY2FwZURlYWN0aXZhdGVzXG4gICAgOiB0cnVlO1xuXG4gIHZhciB0cmFwID0ge1xuICAgIGFjdGl2YXRlOiBhY3RpdmF0ZSxcbiAgICBkZWFjdGl2YXRlOiBkZWFjdGl2YXRlLFxuICAgIHBhdXNlOiBwYXVzZSxcbiAgICB1bnBhdXNlOiB1bnBhdXNlLFxuICB9O1xuXG4gIHJldHVybiB0cmFwO1xuXG4gIGZ1bmN0aW9uIGFjdGl2YXRlKGFjdGl2YXRlT3B0aW9ucykge1xuICAgIGlmIChhY3RpdmUpIHJldHVybjtcblxuICAgIHZhciBkZWZhdWx0ZWRBY3RpdmF0ZU9wdGlvbnMgPSB7XG4gICAgICBvbkFjdGl2YXRlOiAoYWN0aXZhdGVPcHRpb25zICYmIGFjdGl2YXRlT3B0aW9ucy5vbkFjdGl2YXRlICE9PSB1bmRlZmluZWQpXG4gICAgICAgID8gYWN0aXZhdGVPcHRpb25zLm9uQWN0aXZhdGVcbiAgICAgICAgOiBjb25maWcub25BY3RpdmF0ZSxcbiAgICB9O1xuXG4gICAgYWN0aXZlID0gdHJ1ZTtcbiAgICBwYXVzZWQgPSBmYWxzZTtcbiAgICBub2RlRm9jdXNlZEJlZm9yZUFjdGl2YXRpb24gPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuXG4gICAgaWYgKGRlZmF1bHRlZEFjdGl2YXRlT3B0aW9ucy5vbkFjdGl2YXRlKSB7XG4gICAgICBkZWZhdWx0ZWRBY3RpdmF0ZU9wdGlvbnMub25BY3RpdmF0ZSgpO1xuICAgIH1cblxuICAgIGFkZExpc3RlbmVycygpO1xuICAgIHJldHVybiB0cmFwO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVhY3RpdmF0ZShkZWFjdGl2YXRlT3B0aW9ucykge1xuICAgIGlmICghYWN0aXZlKSByZXR1cm47XG5cbiAgICB2YXIgZGVmYXVsdGVkRGVhY3RpdmF0ZU9wdGlvbnMgPSB7XG4gICAgICByZXR1cm5Gb2N1czogKGRlYWN0aXZhdGVPcHRpb25zICYmIGRlYWN0aXZhdGVPcHRpb25zLnJldHVybkZvY3VzICE9PSB1bmRlZmluZWQpXG4gICAgICAgID8gZGVhY3RpdmF0ZU9wdGlvbnMucmV0dXJuRm9jdXNcbiAgICAgICAgOiBjb25maWcucmV0dXJuRm9jdXNPbkRlYWN0aXZhdGUsXG4gICAgICBvbkRlYWN0aXZhdGU6IChkZWFjdGl2YXRlT3B0aW9ucyAmJiBkZWFjdGl2YXRlT3B0aW9ucy5vbkRlYWN0aXZhdGUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgPyBkZWFjdGl2YXRlT3B0aW9ucy5vbkRlYWN0aXZhdGVcbiAgICAgICAgOiBjb25maWcub25EZWFjdGl2YXRlLFxuICAgIH07XG5cbiAgICByZW1vdmVMaXN0ZW5lcnMoKTtcblxuICAgIGlmIChkZWZhdWx0ZWREZWFjdGl2YXRlT3B0aW9ucy5vbkRlYWN0aXZhdGUpIHtcbiAgICAgIGRlZmF1bHRlZERlYWN0aXZhdGVPcHRpb25zLm9uRGVhY3RpdmF0ZSgpO1xuICAgIH1cblxuICAgIGlmIChkZWZhdWx0ZWREZWFjdGl2YXRlT3B0aW9ucy5yZXR1cm5Gb2N1cykge1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRyeUZvY3VzKG5vZGVGb2N1c2VkQmVmb3JlQWN0aXZhdGlvbik7XG4gICAgICB9LCAwKTtcbiAgICB9XG5cbiAgICBhY3RpdmUgPSBmYWxzZTtcbiAgICBwYXVzZWQgPSBmYWxzZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhdXNlKCkge1xuICAgIGlmIChwYXVzZWQgfHwgIWFjdGl2ZSkgcmV0dXJuO1xuICAgIHBhdXNlZCA9IHRydWU7XG4gICAgcmVtb3ZlTGlzdGVuZXJzKCk7XG4gIH1cblxuICBmdW5jdGlvbiB1bnBhdXNlKCkge1xuICAgIGlmICghcGF1c2VkIHx8ICFhY3RpdmUpIHJldHVybjtcbiAgICBwYXVzZWQgPSBmYWxzZTtcbiAgICBhZGRMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZExpc3RlbmVycygpIHtcbiAgICBpZiAoIWFjdGl2ZSkgcmV0dXJuO1xuXG4gICAgLy8gVGhlcmUgY2FuIGJlIG9ubHkgb25lIGxpc3RlbmluZyBmb2N1cyB0cmFwIGF0IGEgdGltZVxuICAgIGlmIChsaXN0ZW5pbmdGb2N1c1RyYXApIHtcbiAgICAgIGxpc3RlbmluZ0ZvY3VzVHJhcC5wYXVzZSgpO1xuICAgIH1cbiAgICBsaXN0ZW5pbmdGb2N1c1RyYXAgPSB0cmFwO1xuXG4gICAgdXBkYXRlVGFiYmFibGVOb2RlcygpO1xuICAgIHRyeUZvY3VzKGZpcnN0Rm9jdXNOb2RlKCkpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgY2hlY2tGb2N1cywgdHJ1ZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGVja0NsaWNrLCB0cnVlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBjaGVja1BvaW50ZXJEb3duLCB0cnVlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgY2hlY2tQb2ludGVyRG93biwgdHJ1ZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGNoZWNrS2V5LCB0cnVlKTtcblxuICAgIHJldHVybiB0cmFwO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXJzKCkge1xuICAgIGlmICghYWN0aXZlIHx8IGxpc3RlbmluZ0ZvY3VzVHJhcCAhPT0gdHJhcCkgcmV0dXJuO1xuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBjaGVja0ZvY3VzLCB0cnVlKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNoZWNrQ2xpY2ssIHRydWUpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGNoZWNrUG9pbnRlckRvd24sIHRydWUpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBjaGVja1BvaW50ZXJEb3duLCB0cnVlKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgY2hlY2tLZXksIHRydWUpO1xuXG4gICAgbGlzdGVuaW5nRm9jdXNUcmFwID0gbnVsbDtcblxuICAgIHJldHVybiB0cmFwO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Tm9kZUZvck9wdGlvbihvcHRpb25OYW1lKSB7XG4gICAgdmFyIG9wdGlvblZhbHVlID0gY29uZmlnW29wdGlvbk5hbWVdO1xuICAgIHZhciBub2RlID0gb3B0aW9uVmFsdWU7XG4gICAgaWYgKCFvcHRpb25WYWx1ZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb3B0aW9uVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBub2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvcHRpb25WYWx1ZSk7XG4gICAgICBpZiAoIW5vZGUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdgJyArIG9wdGlvbk5hbWUgKyAnYCByZWZlcnMgdG8gbm8ga25vd24gbm9kZScpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodHlwZW9mIG9wdGlvblZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBub2RlID0gb3B0aW9uVmFsdWUoKTtcbiAgICAgIGlmICghbm9kZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2AnICsgb3B0aW9uTmFtZSArICdgIGRpZCBub3QgcmV0dXJuIGEgbm9kZScpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZpcnN0Rm9jdXNOb2RlKCkge1xuICAgIHZhciBub2RlO1xuICAgIGlmIChnZXROb2RlRm9yT3B0aW9uKCdpbml0aWFsRm9jdXMnKSAhPT0gbnVsbCkge1xuICAgICAgbm9kZSA9IGdldE5vZGVGb3JPcHRpb24oJ2luaXRpYWxGb2N1cycpO1xuICAgIH0gZWxzZSBpZiAoY29udGFpbmVyLmNvbnRhaW5zKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICBub2RlID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgbm9kZSA9IHRhYmJhYmxlTm9kZXNbMF0gfHwgZ2V0Tm9kZUZvck9wdGlvbignZmFsbGJhY2tGb2N1cycpO1xuICAgIH1cblxuICAgIGlmICghbm9kZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgY2FuXFwndCBoYXZlIGEgZm9jdXMtdHJhcCB3aXRob3V0IGF0IGxlYXN0IG9uZSBmb2N1c2FibGUgZWxlbWVudCcpO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgLy8gVGhpcyBuZWVkcyB0byBiZSBkb25lIG9uIG1vdXNlZG93biBhbmQgdG91Y2hzdGFydCBpbnN0ZWFkIG9mIGNsaWNrXG4gIC8vIHNvIHRoYXQgaXQgcHJlY2VkZXMgdGhlIGZvY3VzIGV2ZW50XG4gIGZ1bmN0aW9uIGNoZWNrUG9pbnRlckRvd24oZSkge1xuICAgIGlmIChjb25maWcuY2xpY2tPdXRzaWRlRGVhY3RpdmF0ZXMgJiYgIWNvbnRhaW5lci5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgIGRlYWN0aXZhdGUoeyByZXR1cm5Gb2N1czogZmFsc2UgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2hlY2tDbGljayhlKSB7XG4gICAgaWYgKGNvbmZpZy5jbGlja091dHNpZGVEZWFjdGl2YXRlcykgcmV0dXJuO1xuICAgIGlmIChjb250YWluZXIuY29udGFpbnMoZS50YXJnZXQpKSByZXR1cm47XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICBmdW5jdGlvbiBjaGVja0ZvY3VzKGUpIHtcbiAgICBpZiAoY29udGFpbmVyLmNvbnRhaW5zKGUudGFyZ2V0KSkgcmV0dXJuO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIC8vIENoZWNraW5nIGZvciBhIGJsdXIgbWV0aG9kIGhlcmUgcmVzb2x2ZXMgYSBGaXJlZm94IGlzc3VlICgjMTUpXG4gICAgaWYgKHR5cGVvZiBlLnRhcmdldC5ibHVyID09PSAnZnVuY3Rpb24nKSBlLnRhcmdldC5ibHVyKCk7XG4gIH1cblxuICBmdW5jdGlvbiBjaGVja0tleShlKSB7XG4gICAgaWYgKGUua2V5ID09PSAnVGFiJyB8fCBlLmtleUNvZGUgPT09IDkpIHtcbiAgICAgIGhhbmRsZVRhYihlKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmVzY2FwZURlYWN0aXZhdGVzICE9PSBmYWxzZSAmJiBpc0VzY2FwZUV2ZW50KGUpKSB7XG4gICAgICBkZWFjdGl2YXRlKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlVGFiKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdXBkYXRlVGFiYmFibGVOb2RlcygpO1xuICAgIHZhciBjdXJyZW50Rm9jdXNJbmRleCA9IHRhYmJhYmxlTm9kZXMuaW5kZXhPZihlLnRhcmdldCk7XG4gICAgdmFyIGxhc3RUYWJiYWJsZU5vZGUgPSB0YWJiYWJsZU5vZGVzW3RhYmJhYmxlTm9kZXMubGVuZ3RoIC0gMV07XG4gICAgdmFyIGZpcnN0VGFiYmFibGVOb2RlID0gdGFiYmFibGVOb2Rlc1swXTtcblxuICAgIGlmIChlLnNoaWZ0S2V5KSB7XG4gICAgICBpZiAoZS50YXJnZXQgPT09IGZpcnN0VGFiYmFibGVOb2RlIHx8IHRhYmJhYmxlTm9kZXMuaW5kZXhPZihlLnRhcmdldCkgPT09IC0xKSB7XG4gICAgICAgIHJldHVybiB0cnlGb2N1cyhsYXN0VGFiYmFibGVOb2RlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnlGb2N1cyh0YWJiYWJsZU5vZGVzW2N1cnJlbnRGb2N1c0luZGV4IC0gMV0pO1xuICAgIH1cblxuICAgIGlmIChlLnRhcmdldCA9PT0gbGFzdFRhYmJhYmxlTm9kZSkgcmV0dXJuIHRyeUZvY3VzKGZpcnN0VGFiYmFibGVOb2RlKTtcblxuICAgIHRyeUZvY3VzKHRhYmJhYmxlTm9kZXNbY3VycmVudEZvY3VzSW5kZXggKyAxXSk7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVUYWJiYWJsZU5vZGVzKCkge1xuICAgIHRhYmJhYmxlTm9kZXMgPSB0YWJiYWJsZShjb250YWluZXIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzRXNjYXBlRXZlbnQoZSkge1xuICByZXR1cm4gZS5rZXkgPT09ICdFc2NhcGUnIHx8IGUua2V5ID09PSAnRXNjJyB8fCBlLmtleUNvZGUgPT09IDI3O1xufVxuXG5mdW5jdGlvbiB0cnlGb2N1cyhub2RlKSB7XG4gIGlmICghbm9kZSB8fCAhbm9kZS5mb2N1cykgcmV0dXJuO1xuICBub2RlLmZvY3VzKCk7XG4gIGlmIChub2RlLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2lucHV0Jykge1xuICAgIG5vZGUuc2VsZWN0KCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmb2N1c1RyYXA7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZm9jdXMtdHJhcC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gODlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihlbCkge1xuICB2YXIgYmFzaWNUYWJiYWJsZXMgPSBbXTtcbiAgdmFyIG9yZGVyZWRUYWJiYWJsZXMgPSBbXTtcblxuICAvLyBBIG5vZGUgaXMgXCJhdmFpbGFibGVcIiBpZlxuICAvLyAtIGl0J3MgY29tcHV0ZWQgc3R5bGVcbiAgdmFyIGlzVW5hdmFpbGFibGUgPSBjcmVhdGVJc1VuYXZhaWxhYmxlKCk7XG5cbiAgdmFyIGNhbmRpZGF0ZVNlbGVjdG9ycyA9IFtcbiAgICAnaW5wdXQnLFxuICAgICdzZWxlY3QnLFxuICAgICdhW2hyZWZdJyxcbiAgICAndGV4dGFyZWEnLFxuICAgICdidXR0b24nLFxuICAgICdbdGFiaW5kZXhdJyxcbiAgXTtcblxuICB2YXIgY2FuZGlkYXRlcyA9IGVsLnF1ZXJ5U2VsZWN0b3JBbGwoY2FuZGlkYXRlU2VsZWN0b3JzKTtcblxuICB2YXIgY2FuZGlkYXRlLCBjYW5kaWRhdGVJbmRleDtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBjYW5kaWRhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGNhbmRpZGF0ZSA9IGNhbmRpZGF0ZXNbaV07XG4gICAgY2FuZGlkYXRlSW5kZXggPSBjYW5kaWRhdGUudGFiSW5kZXg7XG5cbiAgICBpZiAoXG4gICAgICBjYW5kaWRhdGVJbmRleCA8IDBcbiAgICAgIHx8IChjYW5kaWRhdGUudGFnTmFtZSA9PT0gJ0lOUFVUJyAmJiBjYW5kaWRhdGUudHlwZSA9PT0gJ2hpZGRlbicpXG4gICAgICB8fCBjYW5kaWRhdGUuZGlzYWJsZWRcbiAgICAgIHx8IGlzVW5hdmFpbGFibGUoY2FuZGlkYXRlKVxuICAgICkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGNhbmRpZGF0ZUluZGV4ID09PSAwKSB7XG4gICAgICBiYXNpY1RhYmJhYmxlcy5wdXNoKGNhbmRpZGF0ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9yZGVyZWRUYWJiYWJsZXMucHVzaCh7XG4gICAgICAgIHRhYkluZGV4OiBjYW5kaWRhdGVJbmRleCxcbiAgICAgICAgbm9kZTogY2FuZGlkYXRlLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIHRhYmJhYmxlTm9kZXMgPSBvcmRlcmVkVGFiYmFibGVzXG4gICAgLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgcmV0dXJuIGEudGFiSW5kZXggLSBiLnRhYkluZGV4O1xuICAgIH0pXG4gICAgLm1hcChmdW5jdGlvbihhKSB7XG4gICAgICByZXR1cm4gYS5ub2RlXG4gICAgfSk7XG5cbiAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkodGFiYmFibGVOb2RlcywgYmFzaWNUYWJiYWJsZXMpO1xuXG4gIHJldHVybiB0YWJiYWJsZU5vZGVzO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVJc1VuYXZhaWxhYmxlKCkge1xuICAvLyBOb2RlIGNhY2hlIG11c3QgYmUgcmVmcmVzaGVkIG9uIGV2ZXJ5IGNoZWNrLCBpbiBjYXNlXG4gIC8vIHRoZSBjb250ZW50IG9mIHRoZSBlbGVtZW50IGhhcyBjaGFuZ2VkXG4gIHZhciBpc09mZkNhY2hlID0gW107XG5cbiAgLy8gXCJvZmZcIiBtZWFucyBgZGlzcGxheTogbm9uZTtgLCBhcyBvcHBvc2VkIHRvIFwiaGlkZGVuXCIsXG4gIC8vIHdoaWNoIG1lYW5zIGB2aXNpYmlsaXR5OiBoaWRkZW47YC4gZ2V0Q29tcHV0ZWRTdHlsZVxuICAvLyBhY2N1cmF0ZWx5IHJlZmxlY3RzIHZpc2libGl0eSBpbiBjb250ZXh0IGJ1dCBub3RcbiAgLy8gXCJvZmZcIiBzdGF0ZSwgc28gd2UgbmVlZCB0byByZWN1cnNpdmVseSBjaGVjayBwYXJlbnRzLlxuXG4gIGZ1bmN0aW9uIGlzT2ZmKG5vZGUsIG5vZGVDb21wdXRlZFN0eWxlKSB7XG4gICAgaWYgKG5vZGUgPT09IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgLy8gRmluZCB0aGUgY2FjaGVkIG5vZGUgKEFycmF5LnByb3RvdHlwZS5maW5kIG5vdCBhdmFpbGFibGUgaW4gSUU5KVxuICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBpc09mZkNhY2hlLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaXNPZmZDYWNoZVtpXVswXSA9PT0gbm9kZSkgcmV0dXJuIGlzT2ZmQ2FjaGVbaV1bMV07XG4gICAgfVxuXG4gICAgbm9kZUNvbXB1dGVkU3R5bGUgPSBub2RlQ29tcHV0ZWRTdHlsZSB8fCB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcblxuICAgIHZhciByZXN1bHQgPSBmYWxzZTtcblxuICAgIGlmIChub2RlQ29tcHV0ZWRTdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChub2RlLnBhcmVudE5vZGUpIHtcbiAgICAgIHJlc3VsdCA9IGlzT2ZmKG5vZGUucGFyZW50Tm9kZSk7XG4gICAgfVxuXG4gICAgaXNPZmZDYWNoZS5wdXNoKFtub2RlLCByZXN1bHRdKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gaXNVbmF2YWlsYWJsZShub2RlKSB7XG4gICAgaWYgKG5vZGUgPT09IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgdmFyIGNvbXB1dGVkU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcblxuICAgIGlmIChpc09mZihub2RlLCBjb21wdXRlZFN0eWxlKSkgcmV0dXJuIHRydWU7XG5cbiAgICByZXR1cm4gY29tcHV0ZWRTdHlsZS52aXNpYmlsaXR5ID09PSAnaGlkZGVuJztcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3RhYmJhYmxlL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0uc2hvdyksXG4gICAgICBleHByZXNzaW9uOiBcInNob3dcIlxuICAgIH1dLFxuICAgIHJlZjogXCJvdXRcIixcbiAgICBzdGF0aWNDbGFzczogXCJtZGwtZGlhbG9nLWNvbnRhaW5lclwiLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5jbG9zZUlmT3V0c2lkZVxuICAgIH1cbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWRsLWRpYWxvZ1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kbC1kaWFsb2dfX3RpdGxlXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnRpdGxlKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZGwtZGlhbG9nX19jb250ZW50XCJcbiAgfSwgW192bS5fdChcImRlZmF1bHRcIildLCAyKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZGwtZGlhbG9nX19hY3Rpb25zXCIsXG4gICAgY2xhc3M6IF92bS5hY3Rpb25zQ2xhc3Nlc1xuICB9LCBbX3ZtLl90KFwiYWN0aW9uc1wiLCBbX2MoJ20tYnV0dG9uJywge1xuICAgIG5hdGl2ZU9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIF92bS5jbG9zZSgkZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiQ2xvc2VcIildKV0pXSwgMildKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTZmMjdiNWU2XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi02ZjI3YjVlNiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2RpYWxvZy52dWVcbi8vIG1vZHVsZSBpZCA9IDkxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xudmFyIF9fdnVlX3N0eWxlc19fID0ge31cblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2NhcmQudnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi01YzJhMzNkNiF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9jYXJkLnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCIvVXNlcnMvb3ovc3JjL21hdGVyaWFsLWNvbXBvbmVudHMvc3JjL2NhcmQudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi01YzJhMzNkNlwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi01YzJhMzNkNlwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH1cbn0pKCl9XG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGNhcmQudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NhcmQudnVlIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJtZGwtY2FyZCBtZGwtc2hhZG93LS0yZHBcIj5cbiAgICAgICAgPHNsb3QgbmFtZT1cInRpdGxlXCIgdi1pZj1cInRpdGxlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLWNhcmRfX3RpdGxlIG1kbC1jYXJkLS1leHBhbmRcIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJtZGwtY2FyZF9fdGl0bGUtdGV4dFwiPnt7dGl0bGV9fTwvaDI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zbG90PlxuXG4gICAgICAgIDxzbG90IG5hbWU9XCJzdWJ0aXRsZVwiIHYtaWY9XCJzdWJ0aXRsZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1jYXJkX19zdWJ0aXRsZS10ZXh0XCI+e3tzdWJ0aXRsZX19PC9kaXY+XG4gICAgICAgIDwvc2xvdD5cblxuICAgICAgICA8c2xvdCBuYW1lPVwic3VwcG9ydGluZy10ZXh0XCIgdi1pZj1cInN1cHBvcnRpbmdUZXh0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLWNhcmRfX3N1cHBvcnRpbmctdGV4dFwiPnt7c3VwcG9ydGluZ1RleHR9fTwvZGl2PlxuICAgICAgICA8L3Nsb3Q+XG5cbiAgICAgICAgPHNsb3QgbmFtZT1cIm1lZGlhXCIgdi1pZj1cIm1lZGlhXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLWNhcmRfX21lZGlhXCI+PGltZyA6c3JjPVwibWVkaWFcIi8+PC9kaXY+XG4gICAgICAgIDwvc2xvdD5cblxuICAgICAgICA8c2xvdCBuYW1lPVwiYWN0aW9uc1wiIHYtaWY9XCJhY3Rpb25zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLWNhcmRfX2FjdGlvbnMgbWRsLWNhcmQtLWJvcmRlclwiPlxuICAgICAgICAgICAgICAgIDxtLWJ1dHRvbiBjb2xvcmVkPVwiY29sb3JlZFwiIEBjbGljay5uYXRpdmU9XCJ0cmlnZ2VyQWN0aW9uc0V2ZW50XCIgY2xhc3M9XCJtZGwtanMtcmlwcGxlLWVmZmVjdFwiPnt7YWN0aW9uc1RleHR9fTwvbS1idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zbG90PlxuXG4gICAgICAgIDxzbG90IG5hbWU9XCJtZW51XCIgdi1pZj1cIm1lbnVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtY2FyZF9fbWVudVwiPlxuICAgICAgICAgICAgICAgIDxtLWJ1dHRvbiBpY29uPVwiaWNvblwiIEBjbGljay5uYXRpdmU9XCJ0cmlnZ2VyTWVudUV2ZW50XCI+PGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPnNoYXJlPC9pPjwvbS1idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zbG90PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuY29uc3Qgc2xvdHMgPSBbXG4gICd0aXRsZScsXG4gICdzdWJ0aXRsZScsXG4gICdzdXBwb3J0aW5nVGV4dCcsXG4gICdtZWRpYScsXG4gICdhY3Rpb25zJyxcbiAgJ21lbnUnXG5dO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiB7XG4gICAgdGl0bGU6IFN0cmluZyxcbiAgICBtZW51OiBTdHJpbmcsXG4gICAgYWN0aW9uczogU3RyaW5nLFxuICAgIGFjdGlvbnNUYXJnZXQ6IHtcbiAgICAgIGRlZmF1bHQ6ICdfc2VsZicsXG4gICAgICB0eXBlOiBTdHJpbmdcbiAgICB9LFxuICAgIGFjdGlvbnNUZXh0OiBTdHJpbmcsXG4gICAgbWVkaWE6IFN0cmluZyxcbiAgICBzdWJ0aXRsZTogU3RyaW5nLFxuICAgIHN1cHBvcnRpbmdUZXh0OiBTdHJpbmdcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgdHJpZ2dlck1lbnVFdmVudCgpIHtcbiAgICAgIHRoaXMuJGVtaXQodGhpcy5tZW51KVxuICAgIH0sXG5cbiAgICB0cmlnZ2VyQWN0aW9uc0V2ZW50KCkge1xuICAgICAgdGhpcy4kZW1pdCh0aGlzLmFjdGlvbnMpXG4gICAgfVxuICB9LFxuXG4gIG1vdW50ZWQoKSB7XG4gICAgc2xvdHMuZm9yRWFjaCgoc2xvdCwgcG9zKSA9PiB7XG4gICAgICBpZiAodGhpc1tzbG90XSA9PT0gdHJ1ZSkge1xuICAgICAgICBsZXQgZWwgPSB0aGlzLiRlbC5jaGlsZHJlbltwb3NdXG4gICAgICAgIGlmICghZWwgfHwgIXRoaXMuJGVsLmF0dHJpYnV0ZXMuZ2V0TmFtZWRJdGVtKCdzbG90JykpIHtcbiAgICAgICAgICB0aGlzW3Nsb3RdID0gJydcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjYXJkLnZ1ZT83Yzg4YWU3ZCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kbC1jYXJkIG1kbC1zaGFkb3ctLTJkcFwiXG4gIH0sIFsoX3ZtLnRpdGxlKSA/IF92bS5fdChcInRpdGxlXCIsIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kbC1jYXJkX190aXRsZSBtZGwtY2FyZC0tZXhwYW5kXCJcbiAgfSwgW19jKCdoMicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZGwtY2FyZF9fdGl0bGUtdGV4dFwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS50aXRsZSkpXSldKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIChfdm0uc3VidGl0bGUpID8gX3ZtLl90KFwic3VidGl0bGVcIiwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWRsLWNhcmRfX3N1YnRpdGxlLXRleHRcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uc3VidGl0bGUpKV0pXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgKF92bS5zdXBwb3J0aW5nVGV4dCkgPyBfdm0uX3QoXCJzdXBwb3J0aW5nLXRleHRcIiwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWRsLWNhcmRfX3N1cHBvcnRpbmctdGV4dFwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5zdXBwb3J0aW5nVGV4dCkpXSldKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLm1lZGlhKSA/IF92bS5fdChcIm1lZGlhXCIsIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kbC1jYXJkX19tZWRpYVwiXG4gIH0sIFtfYygnaW1nJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNyY1wiOiBfdm0ubWVkaWFcbiAgICB9XG4gIH0pXSldKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLmFjdGlvbnMpID8gX3ZtLl90KFwiYWN0aW9uc1wiLCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZGwtY2FyZF9fYWN0aW9ucyBtZGwtY2FyZC0tYm9yZGVyXCJcbiAgfSwgW19jKCdtLWJ1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZGwtanMtcmlwcGxlLWVmZmVjdFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImNvbG9yZWRcIjogXCJjb2xvcmVkXCJcbiAgICB9LFxuICAgIG5hdGl2ZU9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0udHJpZ2dlckFjdGlvbnNFdmVudCgkZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uYWN0aW9uc1RleHQpKV0pXSwgMSldKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLm1lbnUpID8gX3ZtLl90KFwibWVudVwiLCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZGwtY2FyZF9fbWVudVwiXG4gIH0sIFtfYygnbS1idXR0b24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWNvblwiOiBcImljb25cIlxuICAgIH0sXG4gICAgbmF0aXZlT246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS50cmlnZ2VyTWVudUV2ZW50KCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtYXRlcmlhbC1pY29uc1wiXG4gIH0sIFtfdm0uX3YoXCJzaGFyZVwiKV0pXSldLCAxKV0pIDogX3ZtLl9lKCldLCAyKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi01YzJhMzNkNlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNWMyYTMzZDYhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9jYXJkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gOTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vY2hpcC52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTM1ODQwMTUxIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2NoaXAudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIi9Vc2Vycy9vei9zcmMvbWF0ZXJpYWwtY29tcG9uZW50cy9zcmMvY2hpcC52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTM1ODQwMTUxXCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTM1ODQwMTUxXCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfVxufSkoKX1cbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gY2hpcC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2hpcC52dWUiLCI8dGVtcGxhdGU+XG4gIDxzcGFuIGNsYXNzPVwibWRsLWNoaXBcIiA6Y2xhc3M9XCJjaGlwQ2xhc3Nlc1wiPlxuICAgIDxzbG90IG5hbWU9XCJjaGlwLWNvbnRhY3RcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwibWRsLWNoaXBfX2NvbnRhY3QgbWRsLWNvbG9yLS10ZWFsIG1kbC1jb2xvci10ZXh0LS13aGl0ZVwiIHYtaWY9XCJjb250YWN0XCI+e3sgY29udGFjdCB9fTwvc3Bhbj5cbiAgICAgIDxpbWcgY2xhc3M9XCJtZGwtY2hpcF9fY29udGFjdFwiIHYtaWY9XCJjb250YWN0SW1hZ2VcIiA6c3JjPVwiY29udGFjdEltYWdlXCIvPlxuICAgIDwvc2xvdD5cblxuICAgIDxzcGFuIGNsYXNzPVwibWRsLWNoaXBfX3RleHRcIj5cbiAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICA8L3NwYW4+XG5cbiAgICA8YSBocmVmPVwiI1wiIEBjbGljay5wcmV2ZW50PVwiJGVtaXQoJ2RlbGV0ZScpXCIgY2xhc3M9XCJtZGwtY2hpcF9fYWN0aW9uXCIgdi1pZj1cImRlbGV0YWJsZVwiPlxuICAgICAgPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPnt7IGRlbGV0ZUljb24gfX08L2k+XG4gICAgPC9hPlxuICA8L3NwYW4+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGVsZXRhYmxlOiAhIXRoaXMuX2V2ZW50cy5kZWxldGVcbiAgICB9XG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBoYXNDb250YWN0ICgpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnRhY3QgfHwgdGhpcy5jb250YWN0SW1hZ2VcbiAgICB9LFxuICAgIGNoaXBDbGFzc2VzICgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICdtZGwtY2hpcC0tY29udGFjdCc6IHRoaXMuaGFzQ29udGFjdCxcbiAgICAgICAgJ21kbC1jaGlwLS1kZWxldGFibGUnOiB0aGlzLmRlbGV0YWJsZVxuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBwcm9wczoge1xuICAgIGRlbGV0ZUljb246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdjYW5jZWwnXG4gICAgfSxcbiAgICBjb250YWN0SW1hZ2U6IFN0cmluZyxcbiAgICBjb250YWN0OiBTdHJpbmdcbiAgfVxufVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNoaXAudnVlP2FjZjIzMWE0IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kbC1jaGlwXCIsXG4gICAgY2xhc3M6IF92bS5jaGlwQ2xhc3Nlc1xuICB9LCBbX3ZtLl90KFwiY2hpcC1jb250YWN0XCIsIFsoX3ZtLmNvbnRhY3QpID8gX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWRsLWNoaXBfX2NvbnRhY3QgbWRsLWNvbG9yLS10ZWFsIG1kbC1jb2xvci10ZXh0LS13aGl0ZVwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5jb250YWN0KSldKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLmNvbnRhY3RJbWFnZSkgPyBfYygnaW1nJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kbC1jaGlwX19jb250YWN0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3JjXCI6IF92bS5jb250YWN0SW1hZ2VcbiAgICB9XG4gIH0pIDogX3ZtLl9lKCldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWRsLWNoaXBfX3RleHRcIlxuICB9LCBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sIDIpLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLmRlbGV0YWJsZSkgPyBfYygnYScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZGwtY2hpcF9fYWN0aW9uXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaHJlZlwiOiBcIiNcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBfdm0uJGVtaXQoJ2RlbGV0ZScpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWF0ZXJpYWwtaWNvbnNcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uZGVsZXRlSWNvbikpXSldKSA6IF92bS5fZSgpXSwgMilcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMzU4NDAxNTFcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTM1ODQwMTUxIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvY2hpcC52dWVcbi8vIG1vZHVsZSBpZCA9IDk3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xudmFyIF9fdnVlX3N0eWxlc19fID0ge31cblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2xpc3QudnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0xMTc5ZTIzYSF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9saXN0LnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCIvVXNlcnMvb3ovc3JjL21hdGVyaWFsLWNvbXBvbmVudHMvc3JjL2xpc3QvbGlzdC52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTExNzllMjNhXCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTExNzllMjNhXCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfVxufSkoKX1cbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gbGlzdC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGlzdC9saXN0LnZ1ZSIsIjx0ZW1wbGF0ZT5cbiAgICA8dWwgY2xhc3M9XCJtZGwtbGlzdFwiPlxuICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgPC91bD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge31cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGxpc3QudnVlPzM0NjE3MDVlIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCd1bCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZGwtbGlzdFwiXG4gIH0sIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSwgMilcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMTE3OWUyM2FcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTExNzllMjNhIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvbGlzdC9saXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xudmFyIF9fdnVlX3N0eWxlc19fID0ge31cblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2xpc3RJdGVtLnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtZGRkMTQyMjYhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vbGlzdEl0ZW0udnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIi9Vc2Vycy9vei9zcmMvbWF0ZXJpYWwtY29tcG9uZW50cy9zcmMvbGlzdC9saXN0SXRlbS52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWRkZDE0MjI2XCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWRkZDE0MjI2XCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfVxufSkoKX1cbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gbGlzdEl0ZW0udnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpc3QvbGlzdEl0ZW0udnVlIiwiPHRlbXBsYXRlPlxuICAgIDxsaSBjbGFzcz1cIm1kbC1saXN0X19pdGVtXCIgOmNsYXNzPVwibGlDbGFzc2VzXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwibWRsLWxpc3RfX2l0ZW0tcHJpbWFyeS1jb250ZW50XCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCIgOmNsYXNzPVwiY3NzQ2xhc3Nlc1wiIHYtaWY9XCJpY29uIHx8IGljb25BdmF0YXJcIj57e3Nob3dJY29ufX08L2k+XG4gICAgICAgICAgICA8c3BhbiB2LWlmPVwiaWNvbkF2YXRhclwiPlxuICAgICAgICAgICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgICAgPHNsb3Qgdi1lbHNlPjwvc2xvdD5cblxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtZGwtbGlzdF9faXRlbS1zdWItdGl0bGVcIiB2LWlmPVwic3ViVGl0bGVcIj57e3N1YlRpdGxlfX08L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1kbC1saXN0X19pdGVtLXRleHQtYm9keVwiIHYtaWY9XCJ0ZXh0XCI+e3t0ZXh0fX08L3NwYW4+XG4gICAgICAgIDwvc3Bhbj5cblxuICAgICAgICA8c3BhbiBjbGFzcz1cIm1kbC1saXN0X19pdGVtLXNlY29uZGFyeS1jb250ZW50XCI+XG4gICAgICAgICAgICA8c2xvdCBuYW1lPVwiYWN0aW9uXCI+PC9zbG90PlxuICAgICAgICA8L3NwYW4+XG4gICAgPC9saT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHR7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBpY29uOiBTdHJpbmcsXG4gICAgICAgICAgICBpY29uQXZhdGFyOiBTdHJpbmcsXG4gICAgICAgICAgICBhY3Rpb25JY29uOiBTdHJpbmcsXG4gICAgICAgICAgICB0ZXh0OiBbU3RyaW5nLCBOdW1iZXJdLFxuICAgICAgICAgICAgc3ViVGl0bGU6IFtTdHJpbmcsIE51bWJlcl0sXG4gICAgICAgIH0sXG5cbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIHNob3dJY29uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmljb24gJiYgIXRoaXMuaWNvbkF2YXRhciA/IHRoaXMuaWNvbiA6IHRoaXMuaWNvbkF2YXRhcjtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGNzc0NsYXNzZXMoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgJ21kbC1saXN0X19pdGVtLWljb24nOiAhIXRoaXMuaWNvbixcbiAgICAgICAgICAgICAgICAgICAgJ21kbC1saXN0X19pdGVtLWF2YXRhcic6ICEhdGhpcy5pY29uQXZhdGFyICYmICF0aGlzLmljb24sXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgbGlDbGFzc2VzKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICdtZGwtbGlzdF9faXRlbS0tdGhyZWUtbGluZSc6ICEhdGhpcy50ZXh0LFxuICAgICAgICAgICAgICAgICAgICAnbWRsLWxpc3RfX2l0ZW0tLXR3by1saW5lJzogISF0aGlzLnN1YlRpdGxlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGRhdGEoKXtcbiAgICAgICAgICAgIHJldHVybiB7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBsaXN0SXRlbS52dWU/ZDQwYjY0MmEiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2xpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kbC1saXN0X19pdGVtXCIsXG4gICAgY2xhc3M6IF92bS5saUNsYXNzZXNcbiAgfSwgW19jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kbC1saXN0X19pdGVtLXByaW1hcnktY29udGVudFwiXG4gIH0sIFsoX3ZtLmljb24gfHwgX3ZtLmljb25BdmF0YXIpID8gX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWF0ZXJpYWwtaWNvbnNcIixcbiAgICBjbGFzczogX3ZtLmNzc0NsYXNzZXNcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnNob3dJY29uKSldKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLmljb25BdmF0YXIpID8gX2MoJ3NwYW4nLCBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sIDIpIDogX3ZtLl90KFwiZGVmYXVsdFwiKSwgX3ZtLl92KFwiIFwiKSwgKF92bS5zdWJUaXRsZSkgPyBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZGwtbGlzdF9faXRlbS1zdWItdGl0bGVcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uc3ViVGl0bGUpKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIChfdm0udGV4dCkgPyBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZGwtbGlzdF9faXRlbS10ZXh0LWJvZHlcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0udGV4dCkpXSkgOiBfdm0uX2UoKV0sIDIpLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZGwtbGlzdF9faXRlbS1zZWNvbmRhcnktY29udGVudFwiXG4gIH0sIFtfdm0uX3QoXCJhY3Rpb25cIildLCAyKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LWRkZDE0MjI2XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi1kZGQxNDIyNiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2xpc3QvbGlzdEl0ZW0udnVlXG4vLyBtb2R1bGUgaWQgPSAxMDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==