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
	
	var _slider = __webpack_require__(19);
	
	var _slider2 = _interopRequireDefault(_slider);
	
	var _badge = __webpack_require__(22);
	
	var _badge2 = _interopRequireDefault(_badge);
	
	var _progress = __webpack_require__(23);
	
	var _progress2 = _interopRequireDefault(_progress);
	
	var _spinner = __webpack_require__(26);
	
	var _spinner2 = _interopRequireDefault(_spinner);
	
	var _checkbox = __webpack_require__(29);
	
	var _checkbox2 = _interopRequireDefault(_checkbox);
	
	var _radio = __webpack_require__(32);
	
	var _radio2 = _interopRequireDefault(_radio);
	
	var _switch = __webpack_require__(35);
	
	var _switch2 = _interopRequireDefault(_switch);
	
	var _icon = __webpack_require__(38);
	
	var _icon2 = _interopRequireDefault(_icon);
	
	var _menu = __webpack_require__(41);
	
	var _menu2 = _interopRequireDefault(_menu);
	
	var _item = __webpack_require__(44);
	
	var _item2 = _interopRequireDefault(_item);
	
	var _tabs = __webpack_require__(47);
	
	var _tabs2 = _interopRequireDefault(_tabs);
	
	var _tab = __webpack_require__(53);
	
	var _tab2 = _interopRequireDefault(_tab);
	
	var _tooltip = __webpack_require__(56);
	
	var _tooltip2 = _interopRequireDefault(_tooltip);
	
	var _table = __webpack_require__(59);
	
	var _table2 = _interopRequireDefault(_table);
	
	var _tableRow = __webpack_require__(62);
	
	var _tableRow2 = _interopRequireDefault(_tableRow);
	
	var _tableCell = __webpack_require__(65);
	
	var _tableCell2 = _interopRequireDefault(_tableCell);
	
	var _tableHead = __webpack_require__(68);
	
	var _tableHead2 = _interopRequireDefault(_tableHead);
	
	var _tableH = __webpack_require__(71);
	
	var _tableH2 = _interopRequireDefault(_tableH);
	
	var _tableBody = __webpack_require__(74);
	
	var _tableBody2 = _interopRequireDefault(_tableBody);
	
	var _dialog = __webpack_require__(77);
	
	var _dialog2 = _interopRequireDefault(_dialog);
	
	var _card = __webpack_require__(85);
	
	var _card2 = _interopRequireDefault(_card);
	
	var _chip = __webpack_require__(88);
	
	var _chip2 = _interopRequireDefault(_chip);
	
	var _list = __webpack_require__(91);
	
	var _list2 = _interopRequireDefault(_list);
	
	var _listItem = __webpack_require__(94);
	
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
	    componentHandler.upgradeElement(this.$el);
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
	var __vue_template__ = __webpack_require__(18);
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
	exports.push([module.id, "\n.oz-select-container {\n  position: relative;\n  display: inline-block;\n  width: 500px;\n}\n.oz-select-container .mdl-menu__container {\n    top: 10px !important;\n}\n.oz-select-container .caret {\n    position: absolute;\n    top: 25px;\n    right: 10px;\n    font-size: 12px;\n    opacity: .7;\n}\n", ""]);
	
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
	
	var _utils = __webpack_require__(17);
	
	exports.default = {
	    props: {
	        id: {
	            type: String,
	            required: true
	        },
	        dataSource: {
	            type: [Array, Promise, Object]
	        },
	        value: {
	            type: Object,
	            required: true
	        }
	    },
	
	    created: function created() {
	        var _this = this;
	
	        if ('function' === typeof this.source.then) {
	            this.source.then(function (res) {
	                _this.data = res.data;
	            });
	        } else {
	            this.data = this.source;
	        }
	    },
	
	
	    computed: {
	        _value: function _value() {
	            var _this2 = this;
	
	            var val = { name: 'Select...', value: null };
	
	            if (this.value.value) {
	                var res = this.data.find(function (el) {
	                    return el.value == _this2.value.value;
	                });
	
	                if (res) val = res;
	            }
	
	            return val;
	        },
	        cssClasses: function cssClasses() {
	            return {};
	        }
	    },
	
	    watch: {
	        data: function data(n) {
	            var _this3 = this;
	
	            Vue.nextTick(function () {
	                // toggle menu for recalculate dropdown size
	                if (_this3.$menu.container_.classList.contains('is-visible')) {
	                    _this3.$menu.hide();
	                    _this3.$menu.show();
	                }
	            });
	        }
	    },
	
	    data: function data() {
	        return {
	            source: this.dataSource,
	            data: []
	        };
	    },
	
	
	    methods: {
	        itemClick: function itemClick(option) {
	            this.value.name = option.name;
	            this.value.value = option.value;
	
	            // TODO: improve this code line
	            this.$menu.hide();
	
	            this.isOpen = !this.isOpen;
	        }
	    },
	
	    mounted: function mounted() {
	        componentHandler.upgradeElement(this.$refs.menu, 'MaterialMenu');
	        this.$menu = this.$refs.menu.MaterialMenu;
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
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
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
/* 17 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.genId = genId;
	exports.genIdShort = genIdShort;
	exports.removeClass = removeClass;
	exports.getClosestVueParent = getClosestVueParent;
	function genId() {
	  return Math.random().toString(36).substring(7);
	};
	
	function genIdShort() {
	  return Math.random().toString(36).substring(20);
	};
	
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
	};
	
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

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "oz-select-container"
	  }, [_c('div', {
	    staticClass: "mdl-textfield mdl-js-textfield"
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
	  }, [(!_vm.data.length) ? _vm._t("default", [_vm._m(0)]) : _vm._e(), _vm._v(" "), (_vm.data.length) ? _vm._t("default", _vm._l((_vm.data), function(option) {
	    return _c('li', {
	      staticClass: "mdl-menu__item",
	      class: _vm.cssClasses,
	      attrs: {
	        "disabled": _vm.value.value == option.value
	      },
	      on: {
	        "click": function($event) {
	          _vm.itemClick(option)
	        }
	      }
	    }, [_vm._v(_vm._s(option.name))])
	  })) : _vm._e()], 2)])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticStyle: {
	      "text-align": "center"
	    }
	  }, [_c('div', {
	    staticClass: "mdl-spinner mdl-js-spinner is-active"
	  })])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-2bdb4a8c", module.exports)
	  }
	}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* script */
	__vue_exports__ = __webpack_require__(20);
	
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
/* 20 */
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
/* 21 */
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
/* 22 */
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
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* script */
	__vue_exports__ = __webpack_require__(24);
	
	/* template */
	var __vue_template__ = __webpack_require__(25);
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
/* 24 */
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
/* 25 */
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
/* 27 */
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
/* 28 */
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
/* 30 */
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
/* 31 */
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
	//
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
/* 34 */
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
/* 37 */
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
/* 40 */
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
	
	exports.default = {
	    mounted: function mounted() {
	        componentHandler.upgradeElement(this.$el, 'MaterialMenu');
	    }
	};

/***/ },
/* 43 */
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
/* 45 */
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
/* 46 */
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
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* script */
	__vue_exports__ = __webpack_require__(48);
	
	/* template */
	var __vue_template__ = __webpack_require__(52);
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
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _tabL = __webpack_require__(49);
	
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
	    }
	  },
	
	  methods: {
	    selectTab: function selectTab(_ref) {
	      var id = _ref.id;
	
	      this.$emit('input', id);
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
	      tabs: []
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
	
	function findTabIndex(tabs, id) {
	  for (var i = 0; i < tabs.length; ++i) {
	    if (tabs[i].id === id) {
	      return i;
	    }
	  }
	  return -1;
	}

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* script */
	__vue_exports__ = __webpack_require__(50);
	
	/* template */
	var __vue_template__ = __webpack_require__(51);
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
/* 50 */
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
/* 51 */
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
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "mdl-tabs is-upgraded"
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
	  })), _vm._v(" "), _vm._t("default")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-295aa38c", module.exports)
	  }
	}

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* script */
	__vue_exports__ = __webpack_require__(54);
	
	/* template */
	var __vue_template__ = __webpack_require__(55);
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
/* 54 */
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
	  watch: {
	    tab: function tab(newTab, oldTab) {
	      this.$parent.updateTab(tabToOject(oldTab), this.tabData);
	    }
	  },
	
	  mounted: function mounted() {
	    this.$parent.addTab(this.tabData);
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
	    }
	  },
	  props: {
	    tab: {
	      required: true,
	      type: [String, Object]
	    }
	  }
	};
	
	
	function tabToOject(tab) {
	  return typeof tab === 'string' ? { id: tab, title: tab } : { id: tab.id, title: tab.title };
	}

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
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
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* script */
	__vue_exports__ = __webpack_require__(57);
	
	/* template */
	var __vue_template__ = __webpack_require__(58);
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
/* 57 */
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
/* 58 */
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
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* script */
	__vue_exports__ = __webpack_require__(60);
	
	/* template */
	var __vue_template__ = __webpack_require__(61);
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
/* 60 */
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
/* 61 */
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
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* script */
	__vue_exports__ = __webpack_require__(63);
	
	/* template */
	var __vue_template__ = __webpack_require__(64);
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
/* 63 */
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
/* 64 */
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
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* script */
	__vue_exports__ = __webpack_require__(66);
	
	/* template */
	var __vue_template__ = __webpack_require__(67);
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
/* 66 */
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
/* 67 */
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
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* script */
	__vue_exports__ = __webpack_require__(69);
	
	/* template */
	var __vue_template__ = __webpack_require__(70);
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
/* 69 */
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
/* 70 */
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
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* script */
	__vue_exports__ = __webpack_require__(72);
	
	/* template */
	var __vue_template__ = __webpack_require__(73);
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
/* 72 */
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
/* 73 */
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
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* script */
	__vue_exports__ = __webpack_require__(75);
	
	/* template */
	var __vue_template__ = __webpack_require__(76);
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
/* 75 */
45,
/* 76 */
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
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* styles */
	__webpack_require__(78);
	
	/* script */
	__vue_exports__ = __webpack_require__(81);
	
	/* template */
	var __vue_template__ = __webpack_require__(84);
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
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(79);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(80)(content, {});
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
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.mdl-dialog-container {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content:center;\n  align-items: center;\n  top:0;\n  left: 0;\n  z-index: 10000;\n  background: rgba(0,0,0,0.3);\n}\n.mdl-dialog-container .mdl-dialog {\n  background-color:white;\n  padding: 1em;\n  color: black;\n  width: initial;\n  min-width: 280px;\n}\n", "", {"version":3,"sources":["/./src/dialog.vue?038bb386"],"names":[],"mappings":";AAuEA;EACA,gBAAA;EACA,YAAA;EACA,aAAA;EACA,cAAA;EACA,gBAAA;EACA,uBAAA;EACA,oBAAA;EACA,MAAA;EACA,QAAA;EACA,eAAA;EACA,4BAAA;CACA;AACA;EACA,uBAAA;EACA,aAAA;EACA,aAAA;EACA,eAAA;EACA,iBAAA;CACA","file":"dialog.vue","sourcesContent":["<template>\n    <div class=\"mdl-dialog-container\"\n         ref=\"out\"\n         @click=\"closeIfOutside\"\n         v-show=\"show\">\n        <div class=\"mdl-dialog\">\n            <div class=\"mdl-dialog__title\">{{title}}</div>\n            <div class=\"mdl-dialog__content\">\n                <slot></slot>\n            </div>\n            <div class=\"mdl-dialog__actions\" :class=\"actionsClasses\">\n                <slot name=\"actions\">\n                    <m-button @click.native.stop=\"close\">Close</m-button>\n                </slot>\n            </div>\n        </div>\n    </div>\n</template>\n\n<script>\nimport createFocusTrap from 'focus-trap'\nexport default {\n  computed: {\n    actionsClasses () {\n      return {\n        'mdl-dialog__actions--full-width': this.fullWidth\n      }\n    }\n  },\n  data () {\n    return {\n      show: false\n    }\n  },\n  props: {\n    title: {\n      type: String\n    },\n    fullWidth: Boolean,\n    noFocusTrap: {\n      type: Boolean,\n      default: false\n    }\n  },\n  mounted () {\n    if (!this.noFocusTrap) this._focusTrap = createFocusTrap(this.$el)\n  },\n  methods: {\n    open () {\n      this.show = true\n      if (this._focusTrap) this.$nextTick(() => this._focusTrap.activate())\n      this.$emit('open')\n    },\n    close () {\n      this.show = false\n      if (this._focusTrap) this._focusTrap.deactivate()\n      this.$emit('close')\n    },\n    closeIfOutside ({ target }) {\n      if (target === this.$refs.out) this.close()\n    }\n  },\n  watch: {\n    noFocusTrap (noFocusTrap) {\n      this._focusTrap = noFocusTrap ? null : createFocusTrap(this.$el)\n    }\n  }\n}\n</script>\n\n<style>\n.mdl-dialog-container {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content:center;\n  align-items: center;\n  top:0;\n  left: 0;\n  z-index: 10000;\n  background: rgba(0,0,0,0.3);\n}\n.mdl-dialog-container .mdl-dialog {\n  background-color:white;\n  padding: 1em;\n  color: black;\n  width: initial;\n  min-width: 280px;\n}\n</style>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 80 */
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
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _focusTrap = __webpack_require__(82);
	
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
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var tabbable = __webpack_require__(83);
	
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
/* 83 */
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
/* 84 */
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
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* script */
	__vue_exports__ = __webpack_require__(86);
	
	/* template */
	var __vue_template__ = __webpack_require__(87);
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
/* 86 */
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
/* 87 */
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
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* script */
	__vue_exports__ = __webpack_require__(89);
	
	/* template */
	var __vue_template__ = __webpack_require__(90);
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
/* 89 */
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
/* 90 */
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
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* script */
	__vue_exports__ = __webpack_require__(92);
	
	/* template */
	var __vue_template__ = __webpack_require__(93);
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
/* 92 */
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
/* 93 */
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
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* script */
	__vue_exports__ = __webpack_require__(95);
	
	/* template */
	var __vue_template__ = __webpack_require__(96);
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
/* 95 */
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
/* 96 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAzZmZmZjNkNzEyNzE1MDU2M2E0MyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXJlY3RpdmVzL3NldHVwLW1kbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGV4dGZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly8vdGV4dGZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdGV4dGZpZWxkLnZ1ZT8xYmIzIiwid2VicGFjazovLy8uL3NyYy9idXR0b24udnVlIiwid2VicGFjazovLy9idXR0b24udnVlIiwid2VicGFjazovLy8uL3NyYy9idXR0b24udnVlPzY1YTgiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NuYWNrYmFyLnZ1ZSIsIndlYnBhY2s6Ly8vc25hY2tiYXIudnVlIiwid2VicGFjazovLy8uL3NyYy9zbmFja2Jhci52dWU/NGEyMyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VsZWN0L3NlbGVjdC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlbGVjdC9zZWxlY3QudnVlP2Y5OGUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlbGVjdC9zZWxlY3QudnVlPzc5MDYiLCJ3ZWJwYWNrOi8vLy4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vL3NlbGVjdC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9zZWxlY3Qvc2VsZWN0LnZ1ZT9lNGZlIiwid2VicGFjazovLy8uL3NyYy9zbGlkZXIudnVlIiwid2VicGFjazovLy9zbGlkZXIudnVlIiwid2VicGFjazovLy8uL3NyYy9zbGlkZXIudnVlPzYzNDMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhZGdlLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm9ncmVzcy52dWUiLCJ3ZWJwYWNrOi8vL3Byb2dyZXNzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvZ3Jlc3MudnVlPzAxNmEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NwaW5uZXIudnVlIiwid2VicGFjazovLy9zcGlubmVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvc3Bpbm5lci52dWU/NDY0YiIsIndlYnBhY2s6Ly8vLi9zcmMvdG9nZ2xlcy9jaGVja2JveC52dWUiLCJ3ZWJwYWNrOi8vL2NoZWNrYm94LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdG9nZ2xlcy9jaGVja2JveC52dWU/YTRlYiIsIndlYnBhY2s6Ly8vLi9zcmMvdG9nZ2xlcy9yYWRpby52dWUiLCJ3ZWJwYWNrOi8vL3JhZGlvLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdG9nZ2xlcy9yYWRpby52dWU/NDA1ZCIsIndlYnBhY2s6Ly8vLi9zcmMvdG9nZ2xlcy9zd2l0Y2gudnVlIiwid2VicGFjazovLy9zd2l0Y2gudnVlIiwid2VicGFjazovLy8uL3NyYy90b2dnbGVzL3N3aXRjaC52dWU/NTczYyIsIndlYnBhY2s6Ly8vLi9zcmMvdG9nZ2xlcy9pY29uLnZ1ZSIsIndlYnBhY2s6Ly8vaWNvbi52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RvZ2dsZXMvaWNvbi52dWU/ODE0NSIsIndlYnBhY2s6Ly8vLi9zcmMvbWVudS9tZW51LnZ1ZSIsIndlYnBhY2s6Ly8vbWVudS52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL21lbnUvbWVudS52dWU/NzYzZCIsIndlYnBhY2s6Ly8vLi9zcmMvbWVudS9pdGVtLnZ1ZSIsIndlYnBhY2s6Ly8vaXRlbS52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL21lbnUvaXRlbS52dWU/MDFhMCIsIndlYnBhY2s6Ly8vLi9zcmMvdGFicy90YWJzLnZ1ZSIsIndlYnBhY2s6Ly8vdGFicy52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RhYnMvdGFiLWwudnVlIiwid2VicGFjazovLy90YWItbC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RhYnMvdGFiLWwudnVlP2MzOWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RhYnMvdGFicy52dWU/YTFkOCIsIndlYnBhY2s6Ly8vLi9zcmMvdGFicy90YWIudnVlIiwid2VicGFjazovLy90YWIudnVlIiwid2VicGFjazovLy8uL3NyYy90YWJzL3RhYi52dWU/YTYxMiIsIndlYnBhY2s6Ly8vLi9zcmMvdG9vbHRpcC52dWUiLCJ3ZWJwYWNrOi8vL3Rvb2x0aXAudnVlIiwid2VicGFjazovLy8uL3NyYy90b29sdGlwLnZ1ZT84ODMwIiwid2VicGFjazovLy8uL3NyYy90YWJsZS90YWJsZS52dWUiLCJ3ZWJwYWNrOi8vL3RhYmxlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdGFibGUvdGFibGUudnVlPzEwMzgiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RhYmxlL3RhYmxlUm93LnZ1ZSIsIndlYnBhY2s6Ly8vdGFibGVSb3cudnVlIiwid2VicGFjazovLy8uL3NyYy90YWJsZS90YWJsZVJvdy52dWU/NjJhOSIsIndlYnBhY2s6Ly8vLi9zcmMvdGFibGUvdGFibGVDZWxsLnZ1ZSIsIndlYnBhY2s6Ly8vdGFibGVDZWxsLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdGFibGUvdGFibGVDZWxsLnZ1ZT8wMjk0Iiwid2VicGFjazovLy8uL3NyYy90YWJsZS90YWJsZUhlYWQudnVlIiwid2VicGFjazovLy90YWJsZUhlYWQudnVlIiwid2VicGFjazovLy8uL3NyYy90YWJsZS90YWJsZUhlYWQudnVlP2ExY2QiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RhYmxlL3RhYmxlSC52dWUiLCJ3ZWJwYWNrOi8vL3RhYmxlSC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RhYmxlL3RhYmxlSC52dWU/YjAzYiIsIndlYnBhY2s6Ly8vLi9zcmMvdGFibGUvdGFibGVCb2R5LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdGFibGUvdGFibGVCb2R5LnZ1ZT9jNjRlIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2cudnVlIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2cudnVlPzkwN2EiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZy52dWU/YmFkYSIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy9kaWFsb2cudnVlIiwid2VicGFjazovLy8uL34vZm9jdXMtdHJhcC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3RhYmJhYmxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2cudnVlP2EyYjgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhcmQudnVlIiwid2VicGFjazovLy9jYXJkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY2FyZC52dWU/NjIzMyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hpcC52dWUiLCJ3ZWJwYWNrOi8vL2NoaXAudnVlIiwid2VicGFjazovLy8uL3NyYy9jaGlwLnZ1ZT8zN2JiIiwid2VicGFjazovLy8uL3NyYy9saXN0L2xpc3QudnVlIiwid2VicGFjazovLy9saXN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvbGlzdC9saXN0LnZ1ZT84ZjAxIiwid2VicGFjazovLy8uL3NyYy9saXN0L2xpc3RJdGVtLnZ1ZSIsIndlYnBhY2s6Ly8vbGlzdEl0ZW0udnVlIiwid2VicGFjazovLy8uL3NyYy9saXN0L2xpc3RJdGVtLnZ1ZT81NjcwIl0sIm5hbWVzIjpbImNvbXBvbmVudHMiLCJNVGV4dGZpZWxkIiwiTUJ1dHRvbiIsIk1TbmFja2JhciIsIk1TZWxlY3QiLCJNU2xpZGVyIiwiTUJhZGdlIiwiTVByb2dyZXNzIiwiTVNwaW5uZXIiLCJNQ2hlY2tib3giLCJNUmFkaW8iLCJNU3dpdGNoIiwiTUljb25Ub2dnbGUiLCJNTWVudSIsIk1NZW51SXRlbSIsIk1UYWJzIiwiTVRhYiIsIk1Ub29sdGlwIiwiTVRhYmxlIiwiTVRhYmxlUm93IiwiTVRhYmxlQ2VsbCIsIk1UYWJsZUhlYWQiLCJNVGFibGVIIiwiTVRhYmxlQm9keSIsIk1EaWFsb2ciLCJNQ2FyZCIsIk1DaGlwIiwiTUxpc3QiLCJNTGlzdEl0ZW0iLCJkaXJlY3RpdmVzIiwiU2V0dXBNZGwiLCJtb2R1bGUiLCJleHBvcnRzIiwiaW5zdGFsbCIsIlZ1ZSIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwibmFtZSIsImNvbXBvbmVudCIsImRpcmVjdGl2ZSIsInNldHVwIiwiZWwiLCJjb21wb25lbnRIYW5kbGVyIiwidXBncmFkZUVsZW1lbnRzIiwiX192dWVfZXhwb3J0c19fIiwiX192dWVfb3B0aW9uc19fIiwiX192dWVfc3R5bGVzX18iLCJyZXF1aXJlIiwiX192dWVfdGVtcGxhdGVfXyIsImRlZmF1bHQiLCJzb21lIiwia2V5IiwiY29uc29sZSIsImVycm9yIiwib3B0aW9ucyIsIl9fZmlsZSIsInJlbmRlciIsInN0YXRpY1JlbmRlckZucyIsImhvdEFQSSIsImNvbXBhdGlibGUiLCJob3QiLCJhY2NlcHQiLCJkYXRhIiwiY3JlYXRlUmVjb3JkIiwicmVsb2FkIiwiZnVuY3Rpb25hbCIsImdlbklkIiwiZ2VuSWRTaG9ydCIsInJlbW92ZUNsYXNzIiwiZ2V0Q2xvc2VzdFZ1ZVBhcmVudCIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInN1YnN0cmluZyIsIm9iaiIsImNscyIsImNsYXNzZXMiLCJjbGFzc05hbWUiLCJzcGxpdCIsImkiLCJsZW5ndGgiLCJzcGxpY2UiLCJqb2luIiwiJHBhcmVudCIsImNzc0NsYXNzIiwiJGVsIiwiX3VpZCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicHJvcHMiLCJ2YWx1ZSIsIlN0cmluZyIsIk51bWJlciIsIm92ZXJsYXAiLCJCb29sZWFuIiwiaWNvbiIsIm5vQmFja2dyb3VuZCIsImhpZGUiLCJocmVmIiwidGFnIiwidHlwZSIsImNyZWF0ZUVsZW1lbnQiLCJhdHRycyIsImNsYXNzIiwiJHNsb3RzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFD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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsTUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBa0IscUJBQXFCO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUMxT0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EseUNBQXdD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QixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7Ozs7ZUFHQTtxQkFDQTtxQkFDQTt3QkFDQTs0QkFHQTtBQVBBOzs7dUNBU0E7cUVBQ0E7QUFFQTsyQ0FDQTs7K0NBRUE7cUVBRUE7QUFIQTtBQUtBO3lDQUNBOztzREFFQTtvREFFQTtBQUhBO0FBTUE7QUFuQkE7OzJCQW9CQTtnQkFHQTtBQUNBO0FBakNBLEc7Ozs7OztBQ3RCQSxpQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0EsSUFBRztBQUNIO0FBQ0EsSUFBRztBQUNIO0FBQ0EsSUFBRztBQUNILEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFIiwiZmlsZSI6ImxpYi5idWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlZ1ZVJldXNhYmxlTWF0ZXJpYWxDb21wb25lbnRzXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlZ1ZVJldXNhYmxlTWF0ZXJpYWxDb21wb25lbnRzXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDNmZmZmM2Q3MTI3MTUwNTYzYTQzIiwiaW1wb3J0IFNldHVwTWRsIGZyb20gJy4vZGlyZWN0aXZlcy9zZXR1cC1tZGwnO1xuXG4vLyBjb21wb25lbnRzIGltcG9ydFxuaW1wb3J0IE1UZXh0ZmllbGQgZnJvbSAnLi90ZXh0ZmllbGQudnVlJztcbmltcG9ydCBNQnV0dG9uIGZyb20gJy4vYnV0dG9uLnZ1ZSc7XG5pbXBvcnQgTVNuYWNrYmFyIGZyb20gJy4vc25hY2tiYXIudnVlJztcbmltcG9ydCBNU2VsZWN0IGZyb20gJy4vc2VsZWN0L3NlbGVjdC52dWUnO1xuaW1wb3J0IE1TbGlkZXIgZnJvbSAnLi9zbGlkZXIudnVlJztcbmltcG9ydCBNQmFkZ2UgZnJvbSAnLi9iYWRnZSc7XG5pbXBvcnQgTVByb2dyZXNzIGZyb20gJy4vcHJvZ3Jlc3MudnVlJztcbmltcG9ydCBNU3Bpbm5lciBmcm9tICcuL3NwaW5uZXIudnVlJztcbmltcG9ydCBNQ2hlY2tib3ggZnJvbSAnLi90b2dnbGVzL2NoZWNrYm94LnZ1ZSc7XG5pbXBvcnQgTVJhZGlvIGZyb20gJy4vdG9nZ2xlcy9yYWRpby52dWUnO1xuaW1wb3J0IE1Td2l0Y2ggZnJvbSAnLi90b2dnbGVzL3N3aXRjaC52dWUnO1xuaW1wb3J0IE1JY29uVG9nZ2xlIGZyb20gJy4vdG9nZ2xlcy9pY29uLnZ1ZSc7XG5pbXBvcnQgTU1lbnUgZnJvbSAnLi9tZW51L21lbnUudnVlJztcbmltcG9ydCBNTWVudUl0ZW0gZnJvbSAnLi9tZW51L2l0ZW0udnVlJztcbmltcG9ydCBNVGFicyBmcm9tICcuL3RhYnMvdGFicy52dWUnO1xuaW1wb3J0IE1UYWIgZnJvbSAnLi90YWJzL3RhYi52dWUnO1xuaW1wb3J0IE1Ub29sdGlwIGZyb20gJy4vdG9vbHRpcC52dWUnO1xuXG4vLyB0YWJsZVxuaW1wb3J0IE1UYWJsZSBmcm9tICcuL3RhYmxlL3RhYmxlLnZ1ZSc7XG5pbXBvcnQgTVRhYmxlUm93IGZyb20gJy4vdGFibGUvdGFibGVSb3cudnVlJztcbmltcG9ydCBNVGFibGVDZWxsIGZyb20gJy4vdGFibGUvdGFibGVDZWxsLnZ1ZSc7XG5pbXBvcnQgTVRhYmxlSGVhZCBmcm9tICcuL3RhYmxlL3RhYmxlSGVhZC52dWUnO1xuaW1wb3J0IE1UYWJsZUggZnJvbSAnLi90YWJsZS90YWJsZUgudnVlJztcbmltcG9ydCBNVGFibGVCb2R5IGZyb20gJy4vdGFibGUvdGFibGVCb2R5LnZ1ZSc7XG5cbmltcG9ydCBNRGlhbG9nIGZyb20gJy4vZGlhbG9nLnZ1ZSc7XG5pbXBvcnQgTUNhcmQgZnJvbSAnLi9jYXJkLnZ1ZSc7XG5pbXBvcnQgTUNoaXAgZnJvbSAnLi9jaGlwLnZ1ZSc7XG5cbmltcG9ydCBNTGlzdCBmcm9tICcuL2xpc3QvbGlzdC52dWUnO1xuaW1wb3J0IE1MaXN0SXRlbSBmcm9tICcuL2xpc3QvbGlzdEl0ZW0udnVlJztcblxuY29uc3QgY29tcG9uZW50cyA9IHtcbiAgTVRleHRmaWVsZCxcbiAgTUJ1dHRvbixcbiAgTVNuYWNrYmFyLFxuICBNU2VsZWN0LFxuICBNU2xpZGVyLFxuICBNQmFkZ2UsXG4gIE1Qcm9ncmVzcyxcbiAgTVNwaW5uZXIsXG4gIE1DaGVja2JveCxcbiAgTVJhZGlvLFxuICBNU3dpdGNoLFxuICBNSWNvblRvZ2dsZSxcbiAgTU1lbnUsXG4gIE1NZW51SXRlbSxcbiAgTVRhYnMsXG4gIE1UYWIsXG4gIE1Ub29sdGlwLFxuXG4gIE1UYWJsZSxcbiAgTVRhYmxlUm93LFxuICBNVGFibGVDZWxsLFxuICBNVGFibGVIZWFkLFxuICBNVGFibGVILFxuICBNVGFibGVCb2R5LFxuXG4gIE1EaWFsb2csXG4gIE1DYXJkLFxuICBNQ2hpcCxcblxuICBNTGlzdCxcbiAgTUxpc3RJdGVtLFxufVxuXG5jb25zdCBkaXJlY3RpdmVzID0ge1xuICBTZXR1cE1kbFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaW5zdGFsbCAoVnVlKSB7XG4gICAgT2JqZWN0LmtleXMoY29tcG9uZW50cykuZm9yRWFjaCgobmFtZSkgPT4gVnVlLmNvbXBvbmVudChuYW1lLCBjb21wb25lbnRzW25hbWVdKSk7XG4gICAgT2JqZWN0LmtleXMoZGlyZWN0aXZlcykuZm9yRWFjaCgobmFtZSkgPT4gVnVlLmRpcmVjdGl2ZShuYW1lLCBkaXJlY3RpdmVzW25hbWVdKSk7XG4gIH1cbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpYi5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgc2V0dXAgKGVsKSB7XG4gICAgY29tcG9uZW50SGFuZGxlci51cGdyYWRlRWxlbWVudHMoZWwpXG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGlyZWN0aXZlcy9zZXR1cC1tZGwuanMiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi90ZXh0ZmllbGQudnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0xMWU2ZmZiOCF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi90ZXh0ZmllbGQudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIi9Vc2Vycy9vei9zcmMvbWF0ZXJpYWwtY29tcG9uZW50cy9zcmMvdGV4dGZpZWxkLnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMTFlNmZmYjhcIiwgX192dWVfb3B0aW9uc19fKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMTFlNmZmYjhcIiwgX192dWVfb3B0aW9uc19fKVxuICB9XG59KSgpfVxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSB0ZXh0ZmllbGQudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3RleHRmaWVsZC52dWUiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cIm1kbC10ZXh0ZmllbGQgbWRsLWpzLXRleHRmaWVsZFwiIDpjbGFzcz1cInsnbWRsLXRleHRmaWVsZC0tZmxvYXRpbmctbGFiZWwnOiBmbG9hdExhYmVsLCAnbWRsLXRleHRmaWVsZC0tZXhwYW5kYWJsZSc6IGV4cGFuZGFibGUsICdpcy1kaXJ0eSc6IGlzRGlydHksICdpcy1kaXNhYmxlZCc6IGRpc2FibGVkIH1cIj5cbiAgICAgICAgPHNsb3Qgdi1pZj1cImV4cGFuZGFibGVcIiBuYW1lPVwiZXhwYW5kYWJsZS1idXR0b25cIj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cIm1kbC1idXR0b24gbWRsLWpzLWJ1dHRvbiBtZGwtYnV0dG9uLS1pY29uXCIgOmZvcj1cImlkXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPnt7ZXhwYW5kYWJsZX19PC9pPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9zbG90PlxuXG4gICAgICAgIDxkaXYgOmNsYXNzPVwieydtZGwtdGV4dGZpZWxkX19leHBhbmRhYmxlLWhvbGRlcic6IGV4cGFuZGFibGV9XCI+XG5cbiAgICAgICAgICAgIDxzbG90IHYtaWY9XCJ0ZXh0YXJlYVwiIG5hbWU9XCJ0ZXh0YXJlYVwiPlxuICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XCJtZGwtdGV4dGZpZWxkX19pbnB1dFwiIHJlZj1cImZvY3VzVGFyZ2V0XCIgdHlwZT1cInRleHRcIiA6dmFsdWU9XCJ2YWx1ZVwiIEBpbnB1dD1cImZpcmVJbnB1dEV2ZW50XCIgOnJlcXVpcmVkPVwicmVxdWlyZWRcIiA6aWQ9XCJpZFwiIDpyb3dzPVwicm93c1wiIDptYXhsZW5ndGg9XCJtYXhsZW5ndGhcIj5cbiAgICAgICAgPC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDwvc2xvdD5cblxuICAgICAgICAgICAgPHNsb3Qgdi1lbHNlPVwidi1lbHNlXCIgbmFtZT1cImlucHV0XCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwibWRsLXRleHRmaWVsZF9faW5wdXRcIiByZWY9XCJmb2N1c1RhcmdldFwiIDp0eXBlPVwidHlwZVwiIDp2YWx1ZT1cInZhbHVlXCIgQGlucHV0PVwiZmlyZUlucHV0RXZlbnRcIiA6aWQ9XCJpZFwiIDpwYXR0ZXJuPVwicGF0dGVyblwiIDpkaXNhYmxlZD1cImRpc2FibGVkXCIgOnJlcXVpcmVkPVwicmVxdWlyZWRcIiA6cmVhZG9ubHk9XCJyZWFkb25seVwiIDphdXRvY29tcGxldGU9XCJhdXRvY29tcGxldGVcIiA6bWF4bGVuZ3RoPVwibWF4bGVuZ3RoXCIvPlxuICAgICAgICAgICAgPC9zbG90PlxuXG4gICAgICAgICAgICA8c2xvdCBuYW1lPVwiZXJyb3JcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJtZGwtdGV4dGZpZWxkX19lcnJvclwiIHYtaWY9XCJlcnJvclwiPnt7ZXJyb3J9fTwvbGFiZWw+XG4gICAgICAgICAgICA8L3Nsb3Q+XG5cbiAgICAgICAgICAgIDxzbG90IG5hbWU9XCJsYWJlbFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cIm1kbC10ZXh0ZmllbGRfX2xhYmVsXCIgdi1pZj1cInNob3dMYWJlbFwiIDpmb3I9XCJpZFwiPnt7c2hvd0xhYmVsfX08L2xhYmVsPlxuICAgICAgICAgICAgPC9zbG90PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiB7XG4gICAgYXV0b2NvbXBsZXRlOiBTdHJpbmcsXG4gICAgbWF4bGVuZ3RoOiB7XG4gICAgICByZXF1aXJlZDogZmFsc2VcbiAgICB9LFxuXG4gICAgZXhwYW5kYWJsZTogU3RyaW5nLFxuICAgIHR5cGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICd0ZXh0J1xuICAgIH0sXG5cbiAgICByb3dzOiB7XG4gICAgICByZXF1aXJlZDogZmFsc2VcbiAgICB9LFxuXG4gICAgaWQ6IFN0cmluZyxcblxuICAgIHZhbHVlOiB7XG4gICAgICByZXF1aXJlZDogZmFsc2VcbiAgICB9LFxuXG4gICAgZGlzYWJsZWQ6IHtcbiAgICAgIHR5cGU6IFtCb29sZWFuLCBTdHJpbmddLFxuICAgICAgZmlsbDogdHJ1ZSxcbiAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfSxcblxuICAgIHJlcXVpcmVkOiB7XG4gICAgICB0eXBlOiBbQm9vbGVhbiwgU3RyaW5nXSxcbiAgICAgIGZpbGw6IHRydWUsXG4gICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG5cbiAgICByZWFkb25seToge1xuICAgICAgdHlwZTogW0Jvb2xlYW4sIFN0cmluZ10sXG4gICAgICBmaWxsOiB0cnVlLFxuICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9LFxuXG4gICAgbGFiZWw6IFN0cmluZyxcbiAgICBwYXR0ZXJuOiBTdHJpbmcsXG4gICAgZXJyb3I6IFN0cmluZyxcbiAgICB0ZXh0YXJlYTogQm9vbGVhbixcbiAgICBmbG9hdExhYmVsOiBbQm9vbGVhbiwgU3RyaW5nXVxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgc2hvd0xhYmVsICgpIHtcbiAgICAgIHJldHVybiB0aGlzLmxhYmVsIHx8IHRoaXMuZmxvYXRMYWJlbFxuICAgIH0sXG4gICAgaXNEaXJ0eSAoKSB7XG4gICAgICByZXR1cm4gJycgKyB0aGlzLnZhbHVlXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgZmlyZUlucHV0RXZlbnQ6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICB9LFxuICAgIGZvY3VzKCkge1xuICAgICAgdGhpcy4kcmVmcy5mb2N1c1RhcmdldC5mb2N1cygpXG4gICAgICByZXR1cm4gdGhpc1xuICAgIH0sXG5cbiAgICBzZWxlY3QoKSB7XG4gICAgICB0aGlzLiRyZWZzLmZvY3VzVGFyZ2V0LnNlbGVjdCgpXG4gICAgICByZXR1cm4gdGhpc1xuICAgIH0sXG5cbiAgICBibHVyKCkge1xuICAgICAgdGhpcy4kcmVmcy5mb2N1c1RhcmdldC5ibHVyKClcbiAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIGNvbXBvbmVudEhhbmRsZXIudXBncmFkZUVsZW1lbnQodGhpcy4kZWwpXG4gIH1cbn1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHRleHRmaWVsZC52dWU/N2JjMTA4ZDQiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZGwtdGV4dGZpZWxkIG1kbC1qcy10ZXh0ZmllbGRcIixcbiAgICBjbGFzczoge1xuICAgICAgJ21kbC10ZXh0ZmllbGQtLWZsb2F0aW5nLWxhYmVsJzogX3ZtLmZsb2F0TGFiZWwsICdtZGwtdGV4dGZpZWxkLS1leHBhbmRhYmxlJzogX3ZtLmV4cGFuZGFibGUsICdpcy1kaXJ0eSc6IF92bS5pc0RpcnR5LCAnaXMtZGlzYWJsZWQnOiBfdm0uZGlzYWJsZWRcbiAgICB9XG4gIH0sIFsoX3ZtLmV4cGFuZGFibGUpID8gX3ZtLl90KFwiZXhwYW5kYWJsZS1idXR0b25cIiwgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWJ1dHRvbi0taWNvblwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBfdm0uaWRcbiAgICB9XG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtYXRlcmlhbC1pY29uc1wiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5leHBhbmRhYmxlKSldKV0pXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBjbGFzczoge1xuICAgICAgJ21kbC10ZXh0ZmllbGRfX2V4cGFuZGFibGUtaG9sZGVyJzogX3ZtLmV4cGFuZGFibGVcbiAgICB9XG4gIH0sIFsoX3ZtLnRleHRhcmVhKSA/IF92bS5fdChcInRleHRhcmVhXCIsIFtfYygndGV4dGFyZWEnLCB7XG4gICAgcmVmOiBcImZvY3VzVGFyZ2V0XCIsXG4gICAgc3RhdGljQ2xhc3M6IFwibWRsLXRleHRmaWVsZF9faW5wdXRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJyZXF1aXJlZFwiOiBfdm0ucmVxdWlyZWQsXG4gICAgICBcImlkXCI6IF92bS5pZCxcbiAgICAgIFwicm93c1wiOiBfdm0ucm93cyxcbiAgICAgIFwibWF4bGVuZ3RoXCI6IF92bS5tYXhsZW5ndGhcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS52YWx1ZVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogX3ZtLmZpcmVJbnB1dEV2ZW50XG4gICAgfVxuICB9KV0pIDogX3ZtLl90KFwiaW5wdXRcIiwgW19jKCdpbnB1dCcsIHtcbiAgICByZWY6IFwiZm9jdXNUYXJnZXRcIixcbiAgICBzdGF0aWNDbGFzczogXCJtZGwtdGV4dGZpZWxkX19pbnB1dFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogX3ZtLnR5cGUsXG4gICAgICBcImlkXCI6IF92bS5pZCxcbiAgICAgIFwicGF0dGVyblwiOiBfdm0ucGF0dGVybixcbiAgICAgIFwiZGlzYWJsZWRcIjogX3ZtLmRpc2FibGVkLFxuICAgICAgXCJyZXF1aXJlZFwiOiBfdm0ucmVxdWlyZWQsXG4gICAgICBcInJlYWRvbmx5XCI6IF92bS5yZWFkb25seSxcbiAgICAgIFwiYXV0b2NvbXBsZXRlXCI6IF92bS5hdXRvY29tcGxldGUsXG4gICAgICBcIm1heGxlbmd0aFwiOiBfdm0ubWF4bGVuZ3RoXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0udmFsdWVcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IF92bS5maXJlSW5wdXRFdmVudFxuICAgIH1cbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl90KFwiZXJyb3JcIiwgWyhfdm0uZXJyb3IpID8gX2MoJ2xhYmVsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kbC10ZXh0ZmllbGRfX2Vycm9yXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmVycm9yKSldKSA6IF92bS5fZSgpXSksIF92bS5fdihcIiBcIiksIF92bS5fdChcImxhYmVsXCIsIFsoX3ZtLnNob3dMYWJlbCkgPyBfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWRsLXRleHRmaWVsZF9fbGFiZWxcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogX3ZtLmlkXG4gICAgfVxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uc2hvd0xhYmVsKSldKSA6IF92bS5fZSgpXSldLCAyKV0sIDIpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTExZTZmZmI4XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0xMWU2ZmZiOCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL3RleHRmaWVsZC52dWVcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vYnV0dG9uLnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMzA1OTQ5ZjchdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vYnV0dG9uLnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCIvVXNlcnMvb3ovc3JjL21hdGVyaWFsLWNvbXBvbmVudHMvc3JjL2J1dHRvbi52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTMwNTk0OWY3XCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTMwNTk0OWY3XCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfVxufSkoKX1cbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gYnV0dG9uLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9idXR0b24udnVlIiwiPHRlbXBsYXRlPlxuICAgIDxidXR0b24gY2xhc3M9XCJtZGwtYnV0dG9uIG1kbC1qcy1idXR0b25cIiA6Y2xhc3M9XCJjc3NDbGFzc2VzXCIgOmRpc2FibGVkPVwiZGlzYWJsZWRcIj5cbiAgICAgICAgPHNsb3Q+XG4gICAgICAgICAgICA8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCIgdi1pZj1cImlzSWNvXCIgPnt7aWNvbn19PC9pPlxuICAgICAgICA8L3Nsb3Q+XG4gICAgPC9idXR0b24+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczoge1xuICAgIHJpcHBsZTogQm9vbGVhbixcbiAgICBkaXNhYmxlZDogQm9vbGVhbixcbiAgICBtaW5pRmFiOiBCb29sZWFuLFxuICAgIGZhYjogQm9vbGVhbixcbiAgICByYWlzZWQ6IEJvb2xlYW4sXG4gICAgY29sb3JlZDogQm9vbGVhbixcbiAgICBpY29uOiBbU3RyaW5nLCBCb29sZWFuXSxcbiAgICBhY2NlbnQ6IEJvb2xlYW4sXG4gICAgbWluaUZhYjogQm9vbGVhbixcbiAgICBmYWI6IEJvb2xlYW4sXG4gICAgcmFpc2VkOiBCb29sZWFuLFxuICAgIHByaW1hcnk6IEJvb2xlYW4sXG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgY3NzQ2xhc3NlcygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICdtZGwtanMtcmlwcGxlLWVmZmVjdCc6IHRoaXMucmlwcGxlLFxuICAgICAgICAnbWRsLWJ1dHRvbi0tY29sb3JlZCc6IHRoaXMuY29sb3JlZCxcbiAgICAgICAgJ21kbC1idXR0b24tLWljb24nOiB0aGlzLmljb24sXG4gICAgICAgICdtZGwtYnV0dG9uLS1hY2NlbnQnOiB0aGlzLmFjY2VudCxcbiAgICAgICAgJ21kbC1idXR0b24tLW1pbmktZmFiJzogdGhpcy5taW5pRmFiLFxuICAgICAgICAnbWRsLWJ1dHRvbi0tcHJpbWFyeSc6IHRoaXMucHJpbWFyeSxcbiAgICAgICAgJ21kbC1idXR0b24tLWZhYic6IHRoaXMuZmFiIHx8IHRoaXMubWluaUZhYixcbiAgICAgICAgJ21kbC1idXR0b24tLXJhaXNlZCc6IHRoaXMucmFpc2VkLFxuICAgICAgfVxuICAgIH0sXG4gICAgaXNJY28oKSB7XG4gICAgICByZXR1cm4gdGhpcy5pY29uICYmIHR5cGVvZiB0aGlzLmljb24gPT09ICdzdHJpbmcnXG4gICAgfVxuICB9LFxuICBtb3VudGVkICgpIHtcbiAgICBjb21wb25lbnRIYW5kbGVyLnVwZ3JhZGVFbGVtZW50KHRoaXMuJGVsKVxuICB9XG59XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBidXR0b24udnVlP2M3OGVkYmQyIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uXCIsXG4gICAgY2xhc3M6IF92bS5jc3NDbGFzc2VzLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImRpc2FibGVkXCI6IF92bS5kaXNhYmxlZFxuICAgIH1cbiAgfSwgW192bS5fdChcImRlZmF1bHRcIiwgWyhfdm0uaXNJY28pID8gX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWF0ZXJpYWwtaWNvbnNcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uaWNvbikpXSkgOiBfdm0uX2UoKV0pXSwgMilcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMzA1OTQ5ZjdcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTMwNTk0OWY3IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvYnV0dG9uLnZ1ZVxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9zbmFja2Jhci52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTMyMWE1MzBhIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NuYWNrYmFyLnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCIvVXNlcnMvb3ovc3JjL21hdGVyaWFsLWNvbXBvbmVudHMvc3JjL3NuYWNrYmFyLnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMzIxYTUzMGFcIiwgX192dWVfb3B0aW9uc19fKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMzIxYTUzMGFcIiwgX192dWVfb3B0aW9uc19fKVxuICB9XG59KSgpfVxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBzbmFja2Jhci52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc25hY2tiYXIudnVlIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJtZGwtanMtc25hY2tiYXIgbWRsLXNuYWNrYmFyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtc25hY2tiYXJfX3RleHRcIj48L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1kbC1zbmFja2Jhcl9fYWN0aW9uXCIgdHlwZT1cImJ1dHRvblwiPjwvYnV0dG9uPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IHtcbiAgICBldmVudFNvdXJjZToge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgZGVmYXVsdDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kcm9vdFxuICAgICAgfVxuICAgIH0sXG4gICAgZGlzcGxheU9uOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gIH0sXG5cbiAgY3JlYXRlZCgpIHtcbiAgfSxcblxuICBtb3VudGVkKCkge1xuICAgIGNvbXBvbmVudEhhbmRsZXIudXBncmFkZUVsZW1lbnQodGhpcy4kZWwsICdNYXRlcmlhbFNuYWNrYmFyJyk7XG5cbiAgICB0aGlzLmV2ZW50U291cmNlLiRvbih0aGlzLmRpc3BsYXlPbiwgKHNuYWNrYmFyQ29uZmlnKSA9PiB7XG4gICAgICAgIHRoaXMuJGVsLk1hdGVyaWFsU25hY2tiYXIuc2hvd1NuYWNrYmFyKHNuYWNrYmFyQ29uZmlnKVxuICAgIH0pXG4gIH1cbn1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzbmFja2Jhci52dWU/NTZiYTY0ZWEiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX3ZtLl9tKDApXG59LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZGwtanMtc25hY2tiYXIgbWRsLXNuYWNrYmFyXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWRsLXNuYWNrYmFyX190ZXh0XCJcbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWRsLXNuYWNrYmFyX19hY3Rpb25cIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCJcbiAgICB9XG4gIH0pXSlcbn1dfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0zMjFhNTMwYVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMzIxYTUzMGEhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9zbmFja2Jhci52dWVcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xudmFyIF9fdnVlX3N0eWxlc19fID0ge31cblxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISFzdHlsZSFjc3MhdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTJiZGI0YThjIXNhc3MhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NlbGVjdC52dWVcIilcblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3NlbGVjdC52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTJiZGI0YThjIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NlbGVjdC52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiL1VzZXJzL296L3NyYy9tYXRlcmlhbC1jb21wb25lbnRzL3NyYy9zZWxlY3Qvc2VsZWN0LnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMmJkYjRhOGNcIiwgX192dWVfb3B0aW9uc19fKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMmJkYjRhOGNcIiwgX192dWVfb3B0aW9uc19fKVxuICB9XG59KSgpfVxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBzZWxlY3QudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlbGVjdC9zZWxlY3QudnVlIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTJiZGI0YThjIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zZWxlY3QudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMmJkYjRhOGMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NlbGVjdC52dWVcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTJiZGI0YThjIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zZWxlY3QudnVlXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMmJkYjRhOGMhLi9+L3Nhc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vc3JjL3NlbGVjdC9zZWxlY3QudnVlXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5vei1zZWxlY3QtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA1MDBweDtcXG59XFxuLm96LXNlbGVjdC1jb250YWluZXIgLm1kbC1tZW51X19jb250YWluZXIge1xcbiAgICB0b3A6IDEwcHggIWltcG9ydGFudDtcXG59XFxuLm96LXNlbGVjdC1jb250YWluZXIgLmNhcmV0IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDI1cHg7XFxuICAgIHJpZ2h0OiAxMHB4O1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIG9wYWNpdHk6IC43O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTJiZGI0YThjIS4vfi9zYXNzLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy9zZWxlY3Qvc2VsZWN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHR2YXIgbGlzdCA9IFtdO1xyXG5cclxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzW2ldO1xyXG5cdFx0XHRpZihpdGVtWzJdKSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBpdGVtWzFdICsgXCJ9XCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKGl0ZW1bMV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oXCJcIik7XHJcblx0fTtcclxuXHJcblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcclxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XHJcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xyXG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XHJcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcclxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcclxuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxyXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xyXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxyXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxyXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xyXG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xyXG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblx0cmV0dXJuIGxpc3Q7XHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxudmFyIHN0eWxlc0luRG9tID0ge30sXHJcblx0bWVtb2l6ZSA9IGZ1bmN0aW9uKGZuKSB7XHJcblx0XHR2YXIgbWVtbztcclxuXHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHRcdHJldHVybiBtZW1vO1xyXG5cdFx0fTtcclxuXHR9LFxyXG5cdGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIC9tc2llIFs2LTldXFxiLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpO1xyXG5cdH0pLFxyXG5cdGdldEhlYWRFbGVtZW50ID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07XHJcblx0fSksXHJcblx0c2luZ2xldG9uRWxlbWVudCA9IG51bGwsXHJcblx0c2luZ2xldG9uQ291bnRlciA9IDAsXHJcblx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AgPSBbXTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xyXG5cdGlmKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xyXG5cdFx0aWYodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XHJcblx0fVxyXG5cclxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cclxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXHJcblx0aWYgKHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XHJcblxyXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiA8aGVhZD4uXHJcblx0aWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcclxuXHJcblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0KTtcclxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcclxuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XHJcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xyXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XHJcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcclxuXHRcdH1cclxuXHRcdGlmKG5ld0xpc3QpIHtcclxuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0KTtcclxuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcclxuXHRcdH1cclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xyXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XHJcblx0XHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKVxyXG5cdFx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oKTtcclxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKSB7XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XHJcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcclxuXHRcdGlmKGRvbVN0eWxlKSB7XHJcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcclxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XHJcblx0XHRcdH1cclxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dmFyIHBhcnRzID0gW107XHJcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XHJcblx0XHRcdH1cclxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCkge1xyXG5cdHZhciBzdHlsZXMgPSBbXTtcclxuXHR2YXIgbmV3U3R5bGVzID0ge307XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcclxuXHRcdHZhciBpZCA9IGl0ZW1bMF07XHJcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcclxuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XHJcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcclxuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcclxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKVxyXG5cdFx0XHRzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XHJcblx0fVxyXG5cdHJldHVybiBzdHlsZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpIHtcclxuXHR2YXIgaGVhZCA9IGdldEhlYWRFbGVtZW50KCk7XHJcblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Bbc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XHJcblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcclxuXHRcdGlmKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xyXG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGhlYWQuZmlyc3RDaGlsZCk7XHJcblx0XHR9IGVsc2UgaWYobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcclxuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0XHR9XHJcblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlRWxlbWVudCk7XHJcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XHJcblx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnLiBNdXN0IGJlICd0b3AnIG9yICdib3R0b20nLlwiKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcclxuXHRzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdHZhciBpZHggPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlRWxlbWVudCk7XHJcblx0aWYoaWR4ID49IDApIHtcclxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcclxuXHR2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xyXG5cdHN0eWxlRWxlbWVudC50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xyXG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpO1xyXG5cdHJldHVybiBzdHlsZUVsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpIHtcclxuXHR2YXIgbGlua0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcclxuXHRsaW5rRWxlbWVudC5yZWwgPSBcInN0eWxlc2hlZXRcIjtcclxuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGlua0VsZW1lbnQpO1xyXG5cdHJldHVybiBsaW5rRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XHJcblx0dmFyIHN0eWxlRWxlbWVudCwgdXBkYXRlLCByZW1vdmU7XHJcblxyXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xyXG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcclxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKTtcclxuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpO1xyXG5cdH0gZWxzZSBpZihvYmouc291cmNlTWFwICYmXHJcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xyXG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XHJcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XHJcblx0XHRcdGlmKHN0eWxlRWxlbWVudC5ocmVmKVxyXG5cdFx0XHRcdFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGVFbGVtZW50LmhyZWYpO1xyXG5cdFx0fTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xyXG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XHJcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0dXBkYXRlKG9iaik7XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcclxuXHRcdGlmKG5ld09iaikge1xyXG5cdFx0XHRpZihuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJlbW92ZSgpO1xyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XHJcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xyXG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xyXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XHJcblx0fTtcclxufSkoKTtcclxuXHJcbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcclxuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XHJcblxyXG5cdGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XHJcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzO1xyXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xyXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZUVsZW1lbnQsIG9iaikge1xyXG5cdHZhciBjc3MgPSBvYmouY3NzO1xyXG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcclxuXHJcblx0aWYobWVkaWEpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcclxuXHR9XHJcblxyXG5cdGlmKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR3aGlsZShzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xyXG5cdFx0fVxyXG5cdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlTGluayhsaW5rRWxlbWVudCwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IG9iai5jc3M7XHJcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XHJcblxyXG5cdGlmKHNvdXJjZU1hcCkge1xyXG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcclxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcclxuXHR9XHJcblxyXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xyXG5cclxuXHR2YXIgb2xkU3JjID0gbGlua0VsZW1lbnQuaHJlZjtcclxuXHJcblx0bGlua0VsZW1lbnQuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcblxyXG5cdGlmKG9sZFNyYylcclxuXHRcdFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJvei1zZWxlY3QtY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtdGV4dGZpZWxkIG1kbC1qcy10ZXh0ZmllbGRcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlYWRvbmx5PVwidHJ1ZVwiIDp2YWx1ZT1cIl92YWx1ZS5uYW1lXCIgOmlkPVwiaWRcIiBjbGFzcz1cIm1kbC10ZXh0ZmllbGRfX2lucHV0XCI+IDxzcGFuIGNsYXNzPVwiY2FyZXRcIj7ilrw8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDx1bCBjbGFzcz1cIm1kbC1tZW51IG1kbC1qcy1tZW51IG1kbC1qcy1yaXBwbGUtZWZmZWN0XCIgOmZvcj1cImlkXCIgc3R5bGU9XCJ3aWR0aDogMzAwcHhcIiByZWY9XCJtZW51XCI+XG5cbiAgICAgICAgICAgIDxzbG90IHYtaWY9XCIhZGF0YS5sZW5ndGhcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyO1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLXNwaW5uZXIgbWRsLWpzLXNwaW5uZXIgaXMtYWN0aXZlXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3Nsb3Q+XG5cbiAgICAgICAgICAgIDxzbG90IHYtaWY9XCJkYXRhLmxlbmd0aFwiPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1kbC1tZW51X19pdGVtXCIgdi1mb3I9XCJvcHRpb24gaW4gZGF0YVwiIDpkaXNhYmxlZD1cInZhbHVlLnZhbHVlID09IG9wdGlvbi52YWx1ZVwiIDpjbGFzcz1cImNzc0NsYXNzZXNcIiBAY2xpY2s9XCJpdGVtQ2xpY2sob3B0aW9uKVwiPnt7b3B0aW9uLm5hbWV9fTwvbGk+XG4gICAgICAgICAgICA8L3Nsb3Q+XG4gICAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG4gICAgLm96LXNlbGVjdC1jb250YWluZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICAgICAgICB3aWR0aDogNTAwcHg7XG5cbiAgICAgICAgLm1kbC1tZW51X19jb250YWluZXIge1xuICAgICAgICAgICAgdG9wOiAgMTBweCAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmV0IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMjVweDtcbiAgICAgICAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgb3BhY2l0eTogLjc7XG4gICAgICAgIH1cbiAgICB9XG48L3N0eWxlPlxuPHNjcmlwdD5cbiAgICBpbXBvcnQgeyByZW1vdmVDbGFzcyB9IGZyb20gJy4uL3V0aWxzJztcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGlkOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRhdGFTb3VyY2U6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBbQXJyYXksIFByb21pc2UsIE9iamVjdF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuXG4gICAgICAgIGNyZWF0ZWQgKCkge1xuICAgICAgICAgICAgaWYoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIHRoaXMuc291cmNlLnRoZW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNvdXJjZS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEgPSByZXMuZGF0YTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5zb3VyY2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIF92YWx1ZSgpIHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsID0ge25hbWU6ICdTZWxlY3QuLi4nLCB2YWx1ZTogbnVsbH07XG5cbiAgICAgICAgICAgICAgICBpZih0aGlzLnZhbHVlLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSB0aGlzLmRhdGEuZmluZChlbCA9PiBlbC52YWx1ZSA9PSB0aGlzLnZhbHVlLnZhbHVlKTtcblxuICAgICAgICAgICAgICAgICAgICBpZihyZXMpIHZhbCA9IHJlcztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgY3NzQ2xhc3NlcygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHdhdGNoOiB7XG4gICAgICAgICAgICBkYXRhOiBmdW5jdGlvbiAobikge1xuICAgICAgICAgICAgICAgIFZ1ZS5uZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRvZ2dsZSBtZW51IGZvciByZWNhbGN1bGF0ZSBkcm9wZG93biBzaXplXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuJG1lbnUuY29udGFpbmVyXy5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLXZpc2libGUnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kbWVudS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRtZW51LnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHNvdXJjZTogdGhpcy5kYXRhU291cmNlLFxuICAgICAgICAgICAgICAgIGRhdGE6IFtdLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGl0ZW1DbGljayhvcHRpb24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlLm5hbWUgPSBvcHRpb24ubmFtZTtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlLnZhbHVlID0gb3B0aW9uLnZhbHVlO1xuXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogaW1wcm92ZSB0aGlzIGNvZGUgbGluZVxuICAgICAgICAgICAgICAgIHRoaXMuJG1lbnUuaGlkZSgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5pc09wZW4gPSAhdGhpcy5pc09wZW47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgbW91bnRlZCAoKSB7XG4gICAgICAgICAgICBjb21wb25lbnRIYW5kbGVyLnVwZ3JhZGVFbGVtZW50KHRoaXMuJHJlZnMubWVudSwgJ01hdGVyaWFsTWVudScpO1xuICAgICAgICAgICAgdGhpcy4kbWVudSA9IHRoaXMuJHJlZnMubWVudS5NYXRlcmlhbE1lbnU7XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzZWxlY3QudnVlP2M3OGYyYWQ2IiwiZXhwb3J0IGZ1bmN0aW9uIGdlbklkKCkge1xuICByZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDcpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdlbklkU2hvcnQoKSB7XG4gIHJldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMjApO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNsYXNzKG9iaiwgY2xzID0gJycpIHtcbiAgbGV0IGNsYXNzZXMgPSBvYmouY2xhc3NOYW1lLnNwbGl0KCcgJyk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjbGFzc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYoY2xhc3Nlc1tpXSA9PSBjbHMpIHtcbiAgICAgIGNsYXNzZXMuc3BsaWNlKGksIDEpO1xuICAgICAgaS0tO1xuICAgIH1cbiAgfVxuICBvYmouY2xhc3NOYW1lID0gY2xhc3Nlcy5qb2luKCcgJyk7XG5cbn07XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENsb3Nlc3RWdWVQYXJlbnQoJHBhcmVudCwgY3NzQ2xhc3MpIHtcbiAgaWYgKCEkcGFyZW50IHx8ICEkcGFyZW50LiRlbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICgkcGFyZW50Ll91aWQgPT09IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoJHBhcmVudC4kZWwuY2xhc3NMaXN0LmNvbnRhaW5zKGNzc0NsYXNzKSkge1xuICAgIHJldHVybiAkcGFyZW50O1xuICB9XG5cbiAgcmV0dXJuIGdldENsb3Nlc3RWdWVQYXJlbnQoJHBhcmVudC4kcGFyZW50LCBjc3NDbGFzcyk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzLmpzIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwib3otc2VsZWN0LWNvbnRhaW5lclwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kbC10ZXh0ZmllbGQgbWRsLWpzLXRleHRmaWVsZFwiXG4gIH0sIFtfYygnaW5wdXQnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWRsLXRleHRmaWVsZF9faW5wdXRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJyZWFkb25seVwiOiBcInRydWVcIixcbiAgICAgIFwiaWRcIjogX3ZtLmlkXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0uX3ZhbHVlLm5hbWVcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjYXJldFwiXG4gIH0sIFtfdm0uX3YoXCLilrxcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndWwnLCB7XG4gICAgcmVmOiBcIm1lbnVcIixcbiAgICBzdGF0aWNDbGFzczogXCJtZGwtbWVudSBtZGwtanMtbWVudSBtZGwtanMtcmlwcGxlLWVmZmVjdFwiLFxuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcIndpZHRoXCI6IFwiMzAwcHhcIlxuICAgIH0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IF92bS5pZFxuICAgIH1cbiAgfSwgWyghX3ZtLmRhdGEubGVuZ3RoKSA/IF92bS5fdChcImRlZmF1bHRcIiwgW192bS5fbSgwKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIChfdm0uZGF0YS5sZW5ndGgpID8gX3ZtLl90KFwiZGVmYXVsdFwiLCBfdm0uX2woKF92bS5kYXRhKSwgZnVuY3Rpb24ob3B0aW9uKSB7XG4gICAgcmV0dXJuIF9jKCdsaScsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1kbC1tZW51X19pdGVtXCIsXG4gICAgICBjbGFzczogX3ZtLmNzc0NsYXNzZXMsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcImRpc2FibGVkXCI6IF92bS52YWx1ZS52YWx1ZSA9PSBvcHRpb24udmFsdWVcbiAgICAgIH0sXG4gICAgICBvbjoge1xuICAgICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIF92bS5pdGVtQ2xpY2sob3B0aW9uKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgW192bS5fdihfdm0uX3Mob3B0aW9uLm5hbWUpKV0pXG4gIH0pKSA6IF92bS5fZSgpXSwgMildKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwidGV4dC1hbGlnblwiOiBcImNlbnRlclwiXG4gICAgfVxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZGwtc3Bpbm5lciBtZGwtanMtc3Bpbm5lciBpcy1hY3RpdmVcIlxuICB9KV0pXG59XX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMmJkYjRhOGNcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTJiZGI0YThjIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvc2VsZWN0L3NlbGVjdC52dWVcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xudmFyIF9fdnVlX3N0eWxlc19fID0ge31cblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3NsaWRlci52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTVjZTkyYzI2IXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NsaWRlci52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiL1VzZXJzL296L3NyYy9tYXRlcmlhbC1jb21wb25lbnRzL3NyYy9zbGlkZXIudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi01Y2U5MmMyNlwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi01Y2U5MmMyNlwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH1cbn0pKCl9XG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHNsaWRlci52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2xpZGVyLnZ1ZSIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwibWRsLXNsaWRlcl9fY29udGFpbmVyXCI+XG4gICAgICAgIDxpbnB1dCByZWY9XCJpbnB1dFwiIHR5cGU9XCJyYW5nZVwiIGNsYXNzPVwibWRsLXNsaWRlciBtZGwtanMtc2xpZGVyIGlzLXVwZ3JhZGVkXCIgOm1pbj1cIm1pblwiIDptYXg9XCJtYXhcIiA6c3RlcD1cInN0ZXBcIiB2LW1vZGVsPVwidmFsdWVOdW1iZXJcIiBAaW5wdXQ9XCJvbklucHV0XCIgZGF0YS11cGdyYWRlZD1cIixNYXRlcmlhbFNsaWRlclwiIDpkaXNhYmxlZD1cImRpc2FibGVkXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtc2xpZGVyX19iYWNrZ3JvdW5kLWZsZXhcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtc2xpZGVyX19iYWNrZ3JvdW5kLWxvd2VyXCJcbiAgICAgICAgICAgICAgICAgOnN0eWxlPVwibG93ZXJCYWNrZ3JvdW5kU3R5bGVcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1zbGlkZXJfX2JhY2tncm91bmQtdXBwZXJcIlxuICAgICAgICAgICAgICAgICA6c3R5bGU9XCJ1cHBlckJhY2tncm91bmRTdHlsZVwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXB1dGVkOiB7XG4gICAgbG93ZXJCYWNrZ3JvdW5kU3R5bGUgKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZmxleDogYCR7dGhpcy5yZWxhdGl2ZVZhbHVlfSAxIDAlYFxuICAgICAgfVxuICAgIH0sXG4gICAgdXBwZXJCYWNrZ3JvdW5kU3R5bGUgKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZmxleDogYCR7MSAtIHRoaXMucmVsYXRpdmVWYWx1ZX0gMSAwJWBcbiAgICAgIH1cbiAgICB9LFxuICAgIHZhbHVlTnVtYmVyICgpIHtcbiAgICAgIHJldHVybiBOdW1iZXIodGhpcy52YWx1ZSlcbiAgICB9LFxuICAgIHN0ZXBOdW1iZXIgKCkge1xuICAgICAgcmV0dXJuIE51bWJlcih0aGlzLnN0ZXApXG4gICAgfSxcbiAgICBtaW5OdW1iZXIgKCkge1xuICAgICAgcmV0dXJuIE51bWJlcih0aGlzLm1pbilcbiAgICB9LFxuICAgIG1heE51bWJlciAoKSB7XG4gICAgICByZXR1cm4gTnVtYmVyKHRoaXMubWF4KVxuICAgIH0sXG4gICAgcmVsYXRpdmVWYWx1ZSAoKSB7XG4gICAgICBjb25zdCB2YWwgPSBNYXRoLnJvdW5kKCh0aGlzLnZhbHVlTnVtYmVyIC0gdGhpcy5taW5OdW1iZXIpIC8gdGhpcy5zdGVwTnVtYmVyKSAqIHRoaXMuc3RlcE51bWJlclxuICAgICAgcmV0dXJuIHZhbCAvICh0aGlzLm1heE51bWJlciAtIHRoaXMubWluTnVtYmVyKVxuICAgIH1cbiAgfSxcbiAgcHJvcHM6IHtcbiAgICB2YWx1ZToge1xuICAgICAgdHlwZTogW1N0cmluZywgTnVtYmVyXSxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBzdGVwOiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxuICAgICAgZGVmYXVsdDogMVxuICAgIH0sXG4gICAgbWluOiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxuICAgICAgZGVmYXVsdDogMFxuICAgIH0sXG4gICAgbWF4OiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIGRpc2FibGVkOiB7XG4gICAgICByZXF1aXJlZDogZmFsc2VcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBvbklucHV0ICh7IHRhcmdldDogeyB2YWx1ZSB9IH0pIHtcbiAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgdHlwZW9mIHRoaXMudmFsdWUgPT09ICdzdHJpbmcnID8gdmFsdWUgOiBOdW1iZXIodmFsdWUpKTtcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNsaWRlci52dWU/ZmM1YjFhZjgiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZGwtc2xpZGVyX19jb250YWluZXJcIlxuICB9LCBbX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnZhbHVlTnVtYmVyKSxcbiAgICAgIGV4cHJlc3Npb246IFwidmFsdWVOdW1iZXJcIlxuICAgIH1dLFxuICAgIHJlZjogXCJpbnB1dFwiLFxuICAgIHN0YXRpY0NsYXNzOiBcIm1kbC1zbGlkZXIgbWRsLWpzLXNsaWRlciBpcy11cGdyYWRlZFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJyYW5nZVwiLFxuICAgICAgXCJtaW5cIjogX3ZtLm1pbixcbiAgICAgIFwibWF4XCI6IF92bS5tYXgsXG4gICAgICBcInN0ZXBcIjogX3ZtLnN0ZXAsXG4gICAgICBcImRhdGEtdXBncmFkZWRcIjogXCIsTWF0ZXJpYWxTbGlkZXJcIixcbiAgICAgIFwiZGlzYWJsZWRcIjogX3ZtLmRpc2FibGVkXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0uX3MoX3ZtLnZhbHVlTnVtYmVyKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogW2Z1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0udmFsdWVOdW1iZXIgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9LCBfdm0ub25JbnB1dF1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kbC1zbGlkZXJfX2JhY2tncm91bmQtZmxleFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kbC1zbGlkZXJfX2JhY2tncm91bmQtbG93ZXJcIixcbiAgICBzdHlsZTogKF92bS5sb3dlckJhY2tncm91bmRTdHlsZSlcbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWRsLXNsaWRlcl9fYmFja2dyb3VuZC11cHBlclwiLFxuICAgIHN0eWxlOiAoX3ZtLnVwcGVyQmFja2dyb3VuZFN0eWxlKVxuICB9KV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNWNlOTJjMjZcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTVjZTkyYzI2IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvc2xpZGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczoge1xuICAgIHZhbHVlOiBbU3RyaW5nLCBOdW1iZXJdLFxuICAgIG92ZXJsYXA6IEJvb2xlYW4sXG4gICAgaWNvbjogIEJvb2xlYW4sXG4gICAgbm9CYWNrZ3JvdW5kOiBCb29sZWFuLFxuICAgIGhpZGU6IEJvb2xlYW4sXG4gICAgaHJlZjogU3RyaW5nLFxuXG4gICAgdGFnOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0KCkge1xuICAgICAgICByZXR1cm4gJ3NwYW4nO1xuICAgICAgfVxuICAgIH1cblxuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oY3JlYXRlRWxlbWVudCkge1xuICAgIGxldCB0YWcgPSB0aGlzLnRhZztcblxuICAgIGxldCBhdHRycyA9IHtcbiAgICAgICdjbGFzcyc6ICdtZGwtYmFkZ2UnXG5cbiAgICB9O1xuXG4gICAgaWYoIXRoaXMuaGlkZSkgYXR0cnNbJ2RhdGEtYmFkZ2UnXSA9IHRoaXMudmFsdWU7XG5cbiAgICBpZih0aGlzLmhyZWYpIHtcbiAgICAgIHRhZyA9ICdhJztcbiAgICAgIGF0dHJzLmhyZWYgPSB0aGlzLmhyZWY7XG4gICAgfVxuXG4gICAgaWYodGhpcy5vdmVybGFwKSBhdHRycy5jbGFzcyArPSAnIG1kbC1iYWRnZS0tb3ZlcmxhcCAnO1xuXG4gICAgaWYodGhpcy5pY29uKSBhdHRycy5jbGFzcyA9ICdtYXRlcmlhbC1pY29ucyAnICsgYXR0cnMuY2xhc3M7XG5cbiAgICBpZih0aGlzLm5vQmFja2dyb3VuZCkgYXR0cnMuY2xhc3MgKz0gJyBtZGwtYmFkZ2UtLW5vLWJhY2tncm91bmQgJztcblxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KHRhZywge1xuICAgICAgYXR0cnM6IGF0dHJzLFxuICAgIH0sIHRoaXMuJHNsb3RzLmRlZmF1bHQpXG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmFkZ2UuanMiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9wcm9ncmVzcy52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTlmNjM0ZjljIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Byb2dyZXNzLnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCIvVXNlcnMvb3ovc3JjL21hdGVyaWFsLWNvbXBvbmVudHMvc3JjL3Byb2dyZXNzLnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtOWY2MzRmOWNcIiwgX192dWVfb3B0aW9uc19fKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtOWY2MzRmOWNcIiwgX192dWVfb3B0aW9uc19fKVxuICB9XG59KSgpfVxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBwcm9ncmVzcy52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvZ3Jlc3MudnVlIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJtZGwtcHJvZ3Jlc3MgbWRsLWpzLXByb2dyZXNzXCIgOmNsYXNzPVwieyAnbWRsLXByb2dyZXNzX19pbmRldGVybWluYXRlJzogaW5kZXRlcm1pbmF0ZSB9XCI+PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0e1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgdmFsdWU6IFtTdHJpbmcsIE51bWJlcl0sXG4gICAgICAgICAgICBidWZmZXI6IFtTdHJpbmcsIE51bWJlcl0sXG4gICAgICAgICAgICBpbmRldGVybWluYXRlOiBCb29sZWFuLFxuICAgICAgICB9LFxuXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICBjb21wb25lbnRIYW5kbGVyLnVwZ3JhZGVFbGVtZW50KHRoaXMuJGVsLCAnTWF0ZXJpYWxQcm9ncmVzcycpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy52YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZWwuTWF0ZXJpYWxQcm9ncmVzcy5zZXRQcm9ncmVzcyh0aGlzLnZhbHVlKVxuICAgICAgICAgICAgICAgIHRoaXMuJHdhdGNoKCd2YWx1ZScsIHZhbCA9PiB0aGlzLiRlbC5NYXRlcmlhbFByb2dyZXNzLnNldFByb2dyZXNzKHZhbCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5idWZmZXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVsLk1hdGVyaWFsUHJvZ3Jlc3Muc2V0QnVmZmVyKHRoaXMuYnVmZmVyKVxuICAgICAgICAgICAgICAgIHRoaXMuJHdhdGNoKCdidWZmZXInLCB2YWwgPT4gdGhpcy4kZWwuTWF0ZXJpYWxQcm9ncmVzcy5zZXRCdWZmZXIodmFsKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBwcm9ncmVzcy52dWU/NDI2ZGU1ZjYiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZGwtcHJvZ3Jlc3MgbWRsLWpzLXByb2dyZXNzXCIsXG4gICAgY2xhc3M6IHtcbiAgICAgICdtZGwtcHJvZ3Jlc3NfX2luZGV0ZXJtaW5hdGUnOiBfdm0uaW5kZXRlcm1pbmF0ZVxuICAgIH1cbiAgfSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtOWY2MzRmOWNcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTlmNjM0ZjljIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvcHJvZ3Jlc3MudnVlXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9zcGlubmVyLnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMmM5NzA2YjghdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3Bpbm5lci52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiL1VzZXJzL296L3NyYy9tYXRlcmlhbC1jb21wb25lbnRzL3NyYy9zcGlubmVyLnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMmM5NzA2YjhcIiwgX192dWVfb3B0aW9uc19fKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMmM5NzA2YjhcIiwgX192dWVfb3B0aW9uc19fKVxuICB9XG59KSgpfVxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBzcGlubmVyLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zcGlubmVyLnZ1ZSIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwibWRsLXNwaW5uZXIgbWRsLWpzLXNwaW5uZXJcIiA6Y2xhc3M9XCJ7ICdtZGwtc3Bpbm5lci0tc2luZ2xlLWNvbG9yJzogc2luZ2xlQ29sb3IsICdpcy1hY3RpdmUnOiBhY3RpdmUsICdpcy11cGdyYWRlZCc6IGFjdGl2ZSB9XCI+PC9kaXY+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGFjdGl2ZToge1xuICAgICAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHNpbmdsZUNvbG9yOiBCb29sZWFuXG4gICAgICAgIH0sXG5cbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudEhhbmRsZXIudXBncmFkZUVsZW1lbnQodGhpcy4kZWwpO1xuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3Bpbm5lci52dWU/YTNmZjNiMWMiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZGwtc3Bpbm5lciBtZGwtanMtc3Bpbm5lclwiLFxuICAgIGNsYXNzOiB7XG4gICAgICAnbWRsLXNwaW5uZXItLXNpbmdsZS1jb2xvcic6IF92bS5zaW5nbGVDb2xvciwgJ2lzLWFjdGl2ZSc6IF92bS5hY3RpdmUsICdpcy11cGdyYWRlZCc6IF92bS5hY3RpdmVcbiAgICB9XG4gIH0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTJjOTcwNmI4XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0yYzk3MDZiOCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL3NwaW5uZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9jaGVja2JveC52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTNmZDQ1MzkwIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2NoZWNrYm94LnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCIvVXNlcnMvb3ovc3JjL21hdGVyaWFsLWNvbXBvbmVudHMvc3JjL3RvZ2dsZXMvY2hlY2tib3gudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0zZmQ0NTM5MFwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0zZmQ0NTM5MFwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH1cbn0pKCl9XG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGNoZWNrYm94LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy90b2dnbGVzL2NoZWNrYm94LnZ1ZSIsIjx0ZW1wbGF0ZT5cbiAgICA8bGFiZWwgY2xhc3M9XCJtZGwtY2hlY2tib3ggbWRsLWpzLWNoZWNrYm94IG1kbC1qcy1yaXBwbGUtZWZmZWN0IGlzLXVwZ3JhZGVkXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cIm1kbC1jaGVja2JveF9faW5wdXRcIiA6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiIHYtbW9kZWw9XCJjaGVja2VkXCIgOnZhbHVlPVwidmFsXCIgQGNoYW5nZT1cImZpcmVDaGFuZ2VcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJtZGwtY2hlY2tib3hfX2xhYmVsXCI+XG4gICAgICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICAgIDwvc3Bhbj5cbiAgICA8L2xhYmVsPlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRpc2FibGVkOiB7IHJlcXVpcmVkOiBmYWxzZSB9LFxuICAgICAgICAgICAgdmFsOiB7IHJlcXVpcmVkOiBmYWxzZSB9LFxuICAgICAgICB9LFxuXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBjaGVja2VkOiB7XG4gICAgICAgICAgICAgICAgZ2V0ICgpIHsgcmV0dXJuIHRoaXMudmFsdWUgfSxcbiAgICAgICAgICAgICAgICBzZXQgKHZhbCkgeyB0aGlzLmNoZWNrZWRQcm94eSA9IHZhbCB9LFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjaGVja2VkUHJveHk6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudEhhbmRsZXIudXBncmFkZUVsZW1lbnRzKHRoaXMuJGVsLCAnTWF0ZXJpYWxDaGVja2JveCcpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHdhdGNoOiB7XG4gICAgICAgICAgICB2YWx1ZShuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZihuZXdWYWx1ZSAhPSBvbGRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbC5NYXRlcmlhbENoZWNrYm94W25ld1ZhbHVlID8gJ2NoZWNrJyA6ICd1bmNoZWNrJ10oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgZmlyZUNoYW5nZSAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIHRoaXMuY2hlY2tlZFByb3h5KTtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCB0aGlzLmNoZWNrZWRQcm94eSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjaGVja2JveC52dWU/MjRkZmY5OWYiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2xhYmVsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kbC1jaGVja2JveCBtZGwtanMtY2hlY2tib3ggbWRsLWpzLXJpcHBsZS1lZmZlY3QgaXMtdXBncmFkZWRcIlxuICB9LCBbX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmNoZWNrZWQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJjaGVja2VkXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJtZGwtY2hlY2tib3hfX2lucHV0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImNoZWNrYm94XCIsXG4gICAgICBcImRpc2FibGVkXCI6IF92bS5kaXNhYmxlZFxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLnZhbCxcbiAgICAgIFwiY2hlY2tlZFwiOiBBcnJheS5pc0FycmF5KF92bS5jaGVja2VkKSA/IF92bS5faShfdm0uY2hlY2tlZCwgX3ZtLnZhbCkgPiAtMSA6IChfdm0uY2hlY2tlZClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNoYW5nZVwiOiBbZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIHZhciAkJGEgPSBfdm0uY2hlY2tlZCxcbiAgICAgICAgICAkJGVsID0gJGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAkJGMgPSAkJGVsLmNoZWNrZWQgPyAodHJ1ZSkgOiAoZmFsc2UpO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSgkJGEpKSB7XG4gICAgICAgICAgdmFyICQkdiA9IF92bS52YWwsXG4gICAgICAgICAgICAkJGkgPSBfdm0uX2koJCRhLCAkJHYpO1xuICAgICAgICAgIGlmICgkJGMpIHtcbiAgICAgICAgICAgICQkaSA8IDAgJiYgKF92bS5jaGVja2VkID0gJCRhLmNvbmNhdCgkJHYpKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkJGkgPiAtMSAmJiAoX3ZtLmNoZWNrZWQgPSAkJGEuc2xpY2UoMCwgJCRpKS5jb25jYXQoJCRhLnNsaWNlKCQkaSArIDEpKSlcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3ZtLmNoZWNrZWQgPSAkJGNcbiAgICAgICAgfVxuICAgICAgfSwgX3ZtLmZpcmVDaGFuZ2VdXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWRsLWNoZWNrYm94X19sYWJlbFwiXG4gIH0sIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSwgMildKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0zZmQ0NTM5MFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtM2ZkNDUzOTAhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy90b2dnbGVzL2NoZWNrYm94LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vcmFkaW8udnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi1lOWEzMTY1NCF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yYWRpby52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiL1VzZXJzL296L3NyYy9tYXRlcmlhbC1jb21wb25lbnRzL3NyYy90b2dnbGVzL3JhZGlvLnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtZTlhMzE2NTRcIiwgX192dWVfb3B0aW9uc19fKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtZTlhMzE2NTRcIiwgX192dWVfb3B0aW9uc19fKVxuICB9XG59KSgpfVxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSByYWRpby52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdG9nZ2xlcy9yYWRpby52dWUiLCI8dGVtcGxhdGU+XG4gICAgPGxhYmVsIGNsYXNzPVwibWRsLXJhZGlvIG1kbC1qcy1yYWRpbyBpcy11cGdyYWRlZCBtZGwtanMtcmlwcGxlLWVmZmVjdFwiXG4gICAgICAgICAgIDpmb3I9XCJpZFwiXG4gICAgICAgICAgIDpjbGFzcz1cImNzc0NsYXNzZXNcIj5cbiAgICAgICAgPGlucHV0IGNsYXNzPVwibWRsLXJhZGlvX19idXR0b25cIlxuICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgIDppZD1cImlkXCJcbiAgICAgICAgICAgICAgIDpuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICB2LW1vZGVsPVwiY2hlY2tlZFwiXG4gICAgICAgICAgICAgICA6dmFsdWU9XCJ2YWxcIlxuICAgICAgICAgICAgICAgQGNoYW5nZT1cImZpcmVDaGFuZ2VcIlxuICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiZGlzYWJsZWRcIi8+XG4gICAgPHNwYW4gY2xhc3M9XCJtZGwtcmFkaW9fX2xhYmVsXCI+XG4gICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgPC9zcGFuPlxuICAgIDwvbGFiZWw+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczoge1xuICAgIG5hbWU6IFN0cmluZyxcbiAgICBkaXNhYmxlZDogeyByZXF1aXJlZDogZmFsc2UgfSxcbiAgICBpZDogU3RyaW5nLFxuICAgIHZhbHVlOiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIHZhbDogeyByZXF1aXJlZDogdHJ1ZSB9XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgY2hlY2tlZDoge1xuICAgICAgZ2V0ICgpIHsgcmV0dXJuIHRoaXMudmFsdWUgfSxcbiAgICAgIHNldCAodmFsKSB7IHRoaXMuY2hlY2tlZFByb3h5ID0gdmFsIH1cbiAgICB9LFxuICAgIGlzQ2hlY2tlZCAoKSB7XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZSA9PT0gdGhpcy52YWxcbiAgICB9LFxuICAgIGNzc0NsYXNzZXMgKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJ2lzLWRpc2FibGVkJzogdGhpcy5kaXNhYmxlZCxcbiAgICAgICAgJ2lzLWNoZWNrZWQnOiB0aGlzLmlzQ2hlY2tlZFxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgbW91bnRlZCAoKSB7XG4gICAgY29tcG9uZW50SGFuZGxlci51cGdyYWRlRWxlbWVudHModGhpcy4kZWwpXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBmaXJlQ2hhbmdlIChldmVudCkge1xuICAgICAgdGhpcy4kZW1pdCgnaW5wdXQnLCB0aGlzLmNoZWNrZWRQcm94eSlcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByYWRpby52dWU/YTkyMTcwNGUiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2xhYmVsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kbC1yYWRpbyBtZGwtanMtcmFkaW8gaXMtdXBncmFkZWQgbWRsLWpzLXJpcHBsZS1lZmZlY3RcIixcbiAgICBjbGFzczogX3ZtLmNzc0NsYXNzZXMsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IF92bS5pZFxuICAgIH1cbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5jaGVja2VkKSxcbiAgICAgIGV4cHJlc3Npb246IFwiY2hlY2tlZFwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwibWRsLXJhZGlvX19idXR0b25cIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwicmFkaW9cIixcbiAgICAgIFwiaWRcIjogX3ZtLmlkLFxuICAgICAgXCJuYW1lXCI6IF92bS5uYW1lLFxuICAgICAgXCJkaXNhYmxlZFwiOiBfdm0uZGlzYWJsZWRcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS52YWwsXG4gICAgICBcImNoZWNrZWRcIjogX3ZtLl9xKF92bS5jaGVja2VkLCBfdm0udmFsKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2hhbmdlXCI6IFtmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmNoZWNrZWQgPSBfdm0udmFsXG4gICAgICB9LCBfdm0uZmlyZUNoYW5nZV1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZGwtcmFkaW9fX2xhYmVsXCJcbiAgfSwgW192bS5fdChcImRlZmF1bHRcIildLCAyKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LWU5YTMxNjU0XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi1lOWEzMTY1NCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL3RvZ2dsZXMvcmFkaW8udnVlXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9zd2l0Y2gudnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi02ZWE3ZjcyZSF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zd2l0Y2gudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIi9Vc2Vycy9vei9zcmMvbWF0ZXJpYWwtY29tcG9uZW50cy9zcmMvdG9nZ2xlcy9zd2l0Y2gudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi02ZWE3ZjcyZVwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi02ZWE3ZjcyZVwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH1cbn0pKCl9XG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHN3aXRjaC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdG9nZ2xlcy9zd2l0Y2gudnVlIiwiPHRlbXBsYXRlPlxuICAgIDxsYWJlbCBjbGFzcz1cIm1kbC1zd2l0Y2ggbWRsLWpzLXN3aXRjaCBpcy11cGdyYWRlZCBtZGwtanMtcmlwcGxlLWVmZmVjdFwiPlxuICAgICAgICA8aW5wdXQgY2xhc3M9XCJtZGwtc3dpdGNoX19pbnB1dFwiXG4gICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgdi1tb2RlbD1cImNoZWNrZWRcIlxuICAgICAgICAgICAgICAgQGNoYW5nZT1cImZpcmVDaGFuZ2VcIlxuICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiZGlzYWJsZWRcIi8+XG4gICAgPHNwYW4gY2xhc3M9XCJtZGwtc3dpdGNoX19sYWJlbFwiPlxuICAgICAgPHNsb3Q+PC9zbG90PlxuICAgIDwvc3Bhbj5cbiAgICA8L2xhYmVsPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGlzYWJsZWQ6IHsgcmVxdWlyZWQ6IGZhbHNlIH0sXG4gICAgICAgIH0sXG5cbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIGNoZWNrZWQ6IHtcbiAgICAgICAgICAgICAgICBnZXQgKCkgeyByZXR1cm4gdGhpcy52YWx1ZSB9LFxuICAgICAgICAgICAgICAgIHNldCAodmFsKSB7IHRoaXMuY2hlY2tlZFByb3h5ID0gdmFsIH0sXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGNoZWNrZWRQcm94eTogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgY29tcG9uZW50SGFuZGxlci51cGdyYWRlRWxlbWVudHModGhpcy4kZWwpO1xuICAgICAgICB9LFxuXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGZpcmVDaGFuZ2UgKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIHRoaXMuY2hlY2tlZFByb3h5KVxuICAgICAgICB9XG4gIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzd2l0Y2gudnVlP2FiMDAzOWZlIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZGwtc3dpdGNoIG1kbC1qcy1zd2l0Y2ggaXMtdXBncmFkZWQgbWRsLWpzLXJpcHBsZS1lZmZlY3RcIlxuICB9LCBbX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmNoZWNrZWQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJjaGVja2VkXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJtZGwtc3dpdGNoX19pbnB1dFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJjaGVja2JveFwiLFxuICAgICAgXCJkaXNhYmxlZFwiOiBfdm0uZGlzYWJsZWRcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcImNoZWNrZWRcIjogQXJyYXkuaXNBcnJheShfdm0uY2hlY2tlZCkgPyBfdm0uX2koX3ZtLmNoZWNrZWQsIG51bGwpID4gLTEgOiAoX3ZtLmNoZWNrZWQpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjaGFuZ2VcIjogW2Z1bmN0aW9uKCRldmVudCkge1xuICAgICAgICB2YXIgJCRhID0gX3ZtLmNoZWNrZWQsXG4gICAgICAgICAgJCRlbCA9ICRldmVudC50YXJnZXQsXG4gICAgICAgICAgJCRjID0gJCRlbC5jaGVja2VkID8gKHRydWUpIDogKGZhbHNlKTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoJCRhKSkge1xuICAgICAgICAgIHZhciAkJHYgPSBudWxsLFxuICAgICAgICAgICAgJCRpID0gX3ZtLl9pKCQkYSwgJCR2KTtcbiAgICAgICAgICBpZiAoJCRjKSB7XG4gICAgICAgICAgICAkJGkgPCAwICYmIChfdm0uY2hlY2tlZCA9ICQkYS5jb25jYXQoJCR2KSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCRpID4gLTEgJiYgKF92bS5jaGVja2VkID0gJCRhLnNsaWNlKDAsICQkaSkuY29uY2F0KCQkYS5zbGljZSgkJGkgKyAxKSkpXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF92bS5jaGVja2VkID0gJCRjXG4gICAgICAgIH1cbiAgICAgIH0sIF92bS5maXJlQ2hhbmdlXVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kbC1zd2l0Y2hfX2xhYmVsXCJcbiAgfSwgW192bS5fdChcImRlZmF1bHRcIildLCAyKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTZlYTdmNzJlXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi02ZWE3ZjcyZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL3RvZ2dsZXMvc3dpdGNoLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vaWNvbi52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LWYwOGMzYjI0IXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2ljb24udnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIi9Vc2Vycy9vei9zcmMvbWF0ZXJpYWwtY29tcG9uZW50cy9zcmMvdG9nZ2xlcy9pY29uLnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtZjA4YzNiMjRcIiwgX192dWVfb3B0aW9uc19fKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtZjA4YzNiMjRcIiwgX192dWVfb3B0aW9uc19fKVxuICB9XG59KSgpfVxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBpY29uLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy90b2dnbGVzL2ljb24udnVlIiwiPHRlbXBsYXRlPlxuICAgIDxsYWJlbCBjbGFzcz1cIm1kbC1pY29uLXRvZ2dsZSBtZGwtanMtaWNvbi10b2dnbGUgaXMtdXBncmFkZWQgbWRsLWpzLXJpcHBsZS1lZmZlY3RcIj5cbiAgICAgICAgPGlucHV0IGNsYXNzPVwibWRsLWljb24tdG9nZ2xlX19pbnB1dFwiXG4gICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgdi1tb2RlbD1cImNoZWNrZWRcIlxuICAgICAgICAgICAgICAgQGNoYW5nZT1cImZpcmVDaGFuZ2VcIlxuICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiZGlzYWJsZWRcIi8+XG4gICAgICAgIDxpIGNsYXNzPVwibWRsLWljb24tdG9nZ2xlX19sYWJlbCBtYXRlcmlhbC1pY29uc1wiPnt7aWNvbn19PC9pPlxuICAgIDwvbGFiZWw+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpY29uOiB7XG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGlzYWJsZWQ6IHsgcmVxdWlyZWQ6IGZhbHNlIH0sXG4gICAgICAgIH0sXG5cbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIGNoZWNrZWQ6IHtcbiAgICAgICAgICAgICAgICBnZXQgKCkgeyByZXR1cm4gdGhpcy52YWx1ZSB9LFxuICAgICAgICAgICAgICAgIHNldCAodmFsKSB7IHRoaXMuY2hlY2tlZFByb3h5ID0gdmFsIH0sXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGNoZWNrZWRQcm94eTogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgY29tcG9uZW50SGFuZGxlci51cGdyYWRlRWxlbWVudHModGhpcy4kZWwpO1xuICAgICAgICB9LFxuXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGZpcmVDaGFuZ2UgKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIHRoaXMuY2hlY2tlZFByb3h5KVxuICAgICAgICB9XG4gIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBpY29uLnZ1ZT8zNjc1YTQ3YiIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWRsLWljb24tdG9nZ2xlIG1kbC1qcy1pY29uLXRvZ2dsZSBpcy11cGdyYWRlZCBtZGwtanMtcmlwcGxlLWVmZmVjdFwiXG4gIH0sIFtfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uY2hlY2tlZCksXG4gICAgICBleHByZXNzaW9uOiBcImNoZWNrZWRcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcIm1kbC1pY29uLXRvZ2dsZV9faW5wdXRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiY2hlY2tib3hcIixcbiAgICAgIFwiZGlzYWJsZWRcIjogX3ZtLmRpc2FibGVkXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJjaGVja2VkXCI6IEFycmF5LmlzQXJyYXkoX3ZtLmNoZWNrZWQpID8gX3ZtLl9pKF92bS5jaGVja2VkLCBudWxsKSA+IC0xIDogKF92bS5jaGVja2VkKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2hhbmdlXCI6IFtmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgdmFyICQkYSA9IF92bS5jaGVja2VkLFxuICAgICAgICAgICQkZWwgPSAkZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICQkYyA9ICQkZWwuY2hlY2tlZCA/ICh0cnVlKSA6IChmYWxzZSk7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KCQkYSkpIHtcbiAgICAgICAgICB2YXIgJCR2ID0gbnVsbCxcbiAgICAgICAgICAgICQkaSA9IF92bS5faSgkJGEsICQkdik7XG4gICAgICAgICAgaWYgKCQkYykge1xuICAgICAgICAgICAgJCRpIDwgMCAmJiAoX3ZtLmNoZWNrZWQgPSAkJGEuY29uY2F0KCQkdikpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQkaSA+IC0xICYmIChfdm0uY2hlY2tlZCA9ICQkYS5zbGljZSgwLCAkJGkpLmNvbmNhdCgkJGEuc2xpY2UoJCRpICsgMSkpKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdm0uY2hlY2tlZCA9ICQkY1xuICAgICAgICB9XG4gICAgICB9LCBfdm0uZmlyZUNoYW5nZV1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZGwtaWNvbi10b2dnbGVfX2xhYmVsIG1hdGVyaWFsLWljb25zXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmljb24pKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtZjA4YzNiMjRcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LWYwOGMzYjI0IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvdG9nZ2xlcy9pY29uLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vbWVudS52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTc4ZDY2MmRhIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL21lbnUudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIi9Vc2Vycy9vei9zcmMvbWF0ZXJpYWwtY29tcG9uZW50cy9zcmMvbWVudS9tZW51LnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNzhkNjYyZGFcIiwgX192dWVfb3B0aW9uc19fKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNzhkNjYyZGFcIiwgX192dWVfb3B0aW9uc19fKVxuICB9XG59KSgpfVxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBtZW51LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tZW51L21lbnUudnVlIiwiPHRlbXBsYXRlPlxuICAgIDx1bCBjbGFzcz1cIm1kbC1tZW51IG1kbC1qcy1tZW51IG1kbC1qcy1yaXBwbGUtZWZmZWN0XCIgcmVmPVwibWVudVwiPlxuICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgPC91bD5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0e1xuICAgICAgICBtb3VudGVkICgpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudEhhbmRsZXIudXBncmFkZUVsZW1lbnQodGhpcy4kZWwsICdNYXRlcmlhbE1lbnUnKTtcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIG1lbnUudnVlPzZmYTY2NzlhIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCd1bCcsIHtcbiAgICByZWY6IFwibWVudVwiLFxuICAgIHN0YXRpY0NsYXNzOiBcIm1kbC1tZW51IG1kbC1qcy1tZW51IG1kbC1qcy1yaXBwbGUtZWZmZWN0XCJcbiAgfSwgW192bS5fdChcImRlZmF1bHRcIildLCAyKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi03OGQ2NjJkYVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNzhkNjYyZGEhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9tZW51L21lbnUudnVlXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9pdGVtLnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMzlmYTYyZTQhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vaXRlbS52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiL1VzZXJzL296L3NyYy9tYXRlcmlhbC1jb21wb25lbnRzL3NyYy9tZW51L2l0ZW0udnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0zOWZhNjJlNFwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0zOWZhNjJlNFwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH1cbn0pKCl9XG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGl0ZW0udnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21lbnUvaXRlbS52dWUiLCI8dGVtcGxhdGU+XG4gICAgPGxpIGNsYXNzPVwibWRsLW1lbnVfX2l0ZW1cIj5cbiAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgIDwvbGk+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdHt9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBpdGVtLnZ1ZT80MjcxMjcyZiIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnbGknLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWRsLW1lbnVfX2l0ZW1cIlxuICB9LCBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sIDIpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTM5ZmE2MmU0XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0zOWZhNjJlNCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL21lbnUvaXRlbS52dWVcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xudmFyIF9fdnVlX3N0eWxlc19fID0ge31cblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3RhYnMudnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0yOTVhYTM4YyF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi90YWJzLnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCIvVXNlcnMvb3ovc3JjL21hdGVyaWFsLWNvbXBvbmVudHMvc3JjL3RhYnMvdGFicy52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTI5NWFhMzhjXCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTI5NWFhMzhjXCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfVxufSkoKX1cbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gdGFicy52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdGFicy90YWJzLnZ1ZSIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwibWRsLXRhYnMgaXMtdXBncmFkZWRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC10YWJzX190YWItYmFyXCI+XG4gICAgICAgICAgICA8dGFiLWxpbmtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtZGwtdGFic19fdGFiXCJcbiAgICAgICAgICAgICAgICAgICAgdi1mb3I9XCJ0YWIgaW4gdGFic1wiXG4gICAgICAgICAgICAgICAgICAgIDprZXk9XCJ0YWIuaWRcIlxuICAgICAgICAgICAgICAgICAgICA6bm8tcmlwcGxlLWVmZmVjdD1cIm5vUmlwcGxlRWZmZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnaXMtYWN0aXZlJzogaXNTZWxlY3RlZCh0YWIpIH1cIlxuICAgICAgICAgICAgICAgICAgICBAY2xpY2submF0aXZlLnByZXZlbnQ9XCJzZWxlY3RUYWIodGFiKVwiXG4gICAgICAgICAgICAgICAgICAgIDp0YWI9XCJ0YWJcIlxuICAgICAgICAgICAgPjwvdGFiLWxpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IFRhYkxpbmsgZnJvbSAnLi90YWItbC52dWUnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IHtcbiAgICB2YWx1ZToge1xuICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgdHlwZTogW1N0cmluZywgTnVtYmVyXVxuICAgIH0sXG4gICAgbm9SaXBwbGVFZmZlY3Q6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICByZXF1aXJlZDogZmFsc2VcbiAgICB9XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIHNlbGVjdFRhYih7aWR9KSB7XG4gICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIGlkKVxuICAgIH0sXG5cbiAgICBpc1NlbGVjdGVkKHtpZH0pIHtcbiAgICAgIHJldHVybiBpZCA9PT0gdGhpcy52YWx1ZVxuICAgIH0sXG5cbiAgICBhZGRUYWIodGFiKSB7XG4gICAgICB0aGlzLnRhYnMucHVzaCh0YWIpXG4gICAgfSxcblxuICAgIHVwZGF0ZVRhYih7aWR9LCB0YWIpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gZmluZFRhYkluZGV4KHRoaXMudGFicywgaWQpXG4gICAgICBpZiAoaW5kZXggPiAtMSkgdGhpcy50YWJzLnNwbGljZShpbmRleCwgMSwgdGFiKVxuICAgIH0sXG5cbiAgICByZW1vdmVUYWIoe2lkfSkge1xuICAgICAgY29uc3QgaW5kZXggPSBmaW5kVGFiSW5kZXgodGhpcy50YWJzLCBpZClcbiAgICAgIGlmIChpbmRleCA+IC0xKSB0aGlzLnRhYnMuc3BsaWNlKGluZGV4LCAxKVxuICAgIH1cbiAgfSxcblxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0YWJzOiBbXVxuICAgIH1cbiAgfSxcblxuICBjb21wb25lbnRzOiB7VGFiTGlua31cbn1cblxuZnVuY3Rpb24gZmluZFRhYkluZGV4KHRhYnMsIGlkKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGFicy5sZW5ndGg7ICsraSkge1xuICAgIGlmICh0YWJzW2ldLmlkID09PSBpZCkge1xuICAgICAgcmV0dXJuIGlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xXG59XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gdGFicy52dWU/ZmQyZmU4YjYiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi90YWItbC52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTBhZDhkYTI4IXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3RhYi1sLnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCIvVXNlcnMvb3ovc3JjL21hdGVyaWFsLWNvbXBvbmVudHMvc3JjL3RhYnMvdGFiLWwudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0wYWQ4ZGEyOFwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0wYWQ4ZGEyOFwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH1cbn0pKCl9XG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHRhYi1sLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy90YWJzL3RhYi1sLnZ1ZSIsIjx0ZW1wbGF0ZT5cbiAgICA8YSBjbGFzcz1cIm1kbC10YWJzX190YWJcIiBocmVmPVwiI1wiPnt7dGFiLnRpdGxlfX1cbiAgICA8c3BhbiByZWY9XCJyaXBwbGVcIlxuICAgICAgICAgIHYtc2hvdz1cIiFub1JpcHBsZUVmZmVjdFwiXG4gICAgICAgICAgY2xhc3M9XCJtZGwtdGFic19fcmlwcGxlLWNvbnRhaW5lciBtZGwtanMtcmlwcGxlLWVmZmVjdFwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJtZGwtcmlwcGxlXCI+PC9zcGFuPlxuICAgIDwvc3Bhbj5cbiAgICA8L2E+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczoge1xuICAgIHRhYjogT2JqZWN0LFxuICAgIG5vUmlwcGxlRWZmZWN0OiB7XG4gICAgICByZXF1aXJlZDogZmFsc2VcbiAgICB9XG4gIH0sXG5cbiAgbW91bnRlZCAoKSB7XG4gICAgY29tcG9uZW50SGFuZGxlci51cGdyYWRlRWxlbWVudCh0aGlzLiRyZWZzLnJpcHBsZSwgJ01hdGVyaWFsUmlwcGxlJylcbiAgfVxufVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHRhYi1sLnZ1ZT83MjVlMmM3ZSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnYScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZGwtdGFic19fdGFiXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaHJlZlwiOiBcIiNcIlxuICAgIH1cbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnRhYi50aXRsZSkgKyBcIlxcblwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoIV92bS5ub1JpcHBsZUVmZmVjdCksXG4gICAgICBleHByZXNzaW9uOiBcIiFub1JpcHBsZUVmZmVjdFwiXG4gICAgfV0sXG4gICAgcmVmOiBcInJpcHBsZVwiLFxuICAgIHN0YXRpY0NsYXNzOiBcIm1kbC10YWJzX19yaXBwbGUtY29udGFpbmVyIG1kbC1qcy1yaXBwbGUtZWZmZWN0XCJcbiAgfSwgW19jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kbC1yaXBwbGVcIlxuICB9KV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMGFkOGRhMjhcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTBhZDhkYTI4IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvdGFicy90YWItbC52dWVcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kbC10YWJzIGlzLXVwZ3JhZGVkXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWRsLXRhYnNfX3RhYi1iYXJcIlxuICB9LCBfdm0uX2woKF92bS50YWJzKSwgZnVuY3Rpb24odGFiKSB7XG4gICAgcmV0dXJuIF9jKCd0YWItbGluaycsIHtcbiAgICAgIGtleTogdGFiLmlkLFxuICAgICAgc3RhdGljQ2xhc3M6IFwibWRsLXRhYnNfX3RhYlwiLFxuICAgICAgY2xhc3M6IHtcbiAgICAgICAgJ2lzLWFjdGl2ZSc6IF92bS5pc1NlbGVjdGVkKHRhYilcbiAgICAgIH0sXG4gICAgICBhdHRyczoge1xuICAgICAgICBcIm5vLXJpcHBsZS1lZmZlY3RcIjogX3ZtLm5vUmlwcGxlRWZmZWN0LFxuICAgICAgICBcInRhYlwiOiB0YWJcbiAgICAgIH0sXG4gICAgICBuYXRpdmVPbjoge1xuICAgICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIF92bS5zZWxlY3RUYWIodGFiKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSkpLCBfdm0uX3YoXCIgXCIpLCBfdm0uX3QoXCJkZWZhdWx0XCIpXSwgMilcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMjk1YWEzOGNcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTI5NWFhMzhjIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvdGFicy90YWJzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vdGFiLnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNDE0Nzc0MDkhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vdGFiLnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCIvVXNlcnMvb3ovc3JjL21hdGVyaWFsLWNvbXBvbmVudHMvc3JjL3RhYnMvdGFiLnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNDE0Nzc0MDlcIiwgX192dWVfb3B0aW9uc19fKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNDE0Nzc0MDlcIiwgX192dWVfb3B0aW9uc19fKVxuICB9XG59KSgpfVxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSB0YWIudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3RhYnMvdGFiLnZ1ZSIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwibWRsLXRhYnNfX3BhbmVsXCJcbiAgICAgICAgIDpjbGFzcz1cInsnaXMtYWN0aXZlJzogc2VsZWN0ZWQgfVwiPlxuICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHdhdGNoOiB7XG4gICAgdGFiIChuZXdUYWIsIG9sZFRhYikge1xuICAgICAgdGhpcy4kcGFyZW50LnVwZGF0ZVRhYih0YWJUb09qZWN0KG9sZFRhYiksIHRoaXMudGFiRGF0YSlcbiAgICB9XG4gIH0sXG5cbiAgbW91bnRlZCAoKSB7XG4gICAgdGhpcy4kcGFyZW50LmFkZFRhYih0aGlzLnRhYkRhdGEpXG4gIH0sXG5cbiAgYmVmb3JlRGVzdHJveSAoKSB7XG4gICAgdGhpcy4kcGFyZW50LnJlbW92ZVRhYih0aGlzLnRhYkRhdGEpXG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBzZWxlY3RlZCAoKSB7XG4gICAgICByZXR1cm4gdGhpcy4kcGFyZW50LmlzU2VsZWN0ZWQodGhpcy50YWJEYXRhKVxuICAgIH0sXG4gICAgaWQgKCkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB0aGlzLnRhYiA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgPyB0aGlzLnRhYlxuICAgICAgICAgICA6IHRoaXMudGFiLmlkIHx8IHRoaXMudGFiLnRpdGxlXG4gICAgfSxcbiAgICB0YWJEYXRhICgpIHtcbiAgICAgIHJldHVybiB0YWJUb09qZWN0KHRoaXMudGFiKVxuICAgIH1cbiAgfSxcbiAgcHJvcHM6IHtcbiAgICB0YWI6IHtcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgdHlwZTogW1N0cmluZywgT2JqZWN0XVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB0YWJUb09qZWN0ICh0YWIpIHtcbiAgcmV0dXJuIHR5cGVvZiB0YWIgPT09ICdzdHJpbmcnID8geyBpZDogdGFiLCB0aXRsZTogdGFiIH0gOiB7IGlkOiB0YWIuaWQsIHRpdGxlOiB0YWIudGl0bGUgfTtcbn1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB0YWIudnVlPzI1ZWNlNDJjIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWRsLXRhYnNfX3BhbmVsXCIsXG4gICAgY2xhc3M6IHtcbiAgICAgICdpcy1hY3RpdmUnOiBfdm0uc2VsZWN0ZWRcbiAgICB9XG4gIH0sIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSwgMilcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNDE0Nzc0MDlcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTQxNDc3NDA5IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvdGFicy90YWIudnVlXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi90b29sdGlwLnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNzg0NDk1OGUhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vdG9vbHRpcC52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiL1VzZXJzL296L3NyYy9tYXRlcmlhbC1jb21wb25lbnRzL3NyYy90b29sdGlwLnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNzg0NDk1OGVcIiwgX192dWVfb3B0aW9uc19fKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNzg0NDk1OGVcIiwgX192dWVfb3B0aW9uc19fKVxuICB9XG59KSgpfVxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSB0b29sdGlwLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy90b29sdGlwLnZ1ZSIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwibWRsLXRvb2x0aXBcIlxuICAgICAgICAgOmNsYXNzPVwie1xuICAgICAgICAgJ21kbC10b29sdGlwLS1sYXJnZSc6IGxhcmdlLFxuICAgICAgICAgJ21kbC10b29sdGlwLS1sZWZ0JzogbGVmdCxcbiAgICAgICAgICdtZGwtdG9vbHRpcC0tcmlnaHQnOiByaWdodCxcbiAgICAgICAgICdtZGwtdG9vbHRpcC0tdG9wJzogdG9wLFxuICAgICAgICAgJ21kbC10b29sdGlwLS1ib3R0b20nOiBib3R0b20sXG4gICAgICAgICB9XCJcbiAgICAgICAgIDpmb3I9J3RhcmdldCc+XG4gICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiB7XG4gICAgdGFyZ2V0OiB7XG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIHR5cGU6IFN0cmluZ1xuICAgIH0sXG4gICAgbGVmdDogQm9vbGVhbixcbiAgICByaWdodDogQm9vbGVhbixcbiAgICB0b3A6IEJvb2xlYW4sXG4gICAgYm90dG9tOiBCb29sZWFuLFxuXG4gICAgbGFyZ2U6IEJvb2xlYW5cbiAgfSxcbiAgbW91bnRlZCAoKSB7XG4gICAgY29tcG9uZW50SGFuZGxlci51cGdyYWRlRWxlbWVudCh0aGlzLiRlbCwgJ01hdGVyaWFsVG9vbHRpcCcpXG4gIH1cbn1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB0b29sdGlwLnZ1ZT83NTgxM2NhMCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kbC10b29sdGlwXCIsXG4gICAgY2xhc3M6IHtcbiAgICAgICdtZGwtdG9vbHRpcC0tbGFyZ2UnOiBfdm0ubGFyZ2UsXG4gICAgICAnbWRsLXRvb2x0aXAtLWxlZnQnOiBfdm0ubGVmdCxcbiAgICAgICdtZGwtdG9vbHRpcC0tcmlnaHQnOiBfdm0ucmlnaHQsXG4gICAgICAnbWRsLXRvb2x0aXAtLXRvcCc6IF92bS50b3AsXG4gICAgICAnbWRsLXRvb2x0aXAtLWJvdHRvbSc6IF92bS5ib3R0b20sXG4gICAgfSxcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogX3ZtLnRhcmdldFxuICAgIH1cbiAgfSwgW192bS5fdChcImRlZmF1bHRcIildLCAyKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi03ODQ0OTU4ZVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNzg0NDk1OGUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy90b29sdGlwLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vdGFibGUudnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0zYTljYzk1OCF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi90YWJsZS52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiL1VzZXJzL296L3NyYy9tYXRlcmlhbC1jb21wb25lbnRzL3NyYy90YWJsZS90YWJsZS52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTNhOWNjOTU4XCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTNhOWNjOTU4XCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfVxufSkoKX1cbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gdGFibGUudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3RhYmxlL3RhYmxlLnZ1ZSIsIjx0ZW1wbGF0ZT5cbiAgICA8dGFibGUgY2xhc3M9XCJtZGwtZGF0YS10YWJsZSBtZGwtanMtZGF0YS10YWJsZVwiPlxuICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgPC90YWJsZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHR7XG4gICAgICAgIHByb3BzOiB7fSxcblxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBoYXNSb3dTZWxlY3Rpb246IGZhbHNlLFxuICAgICAgICAgICAgICAgIG51bWJlck9mUm93czogMCxcbiAgICAgICAgICAgICAgICBudW1iZXJPZlNlbGVjdGVkOiAwLFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkUm93czoge30sXG4gICAgICAgICAgICAgICAgZGF0YTogW10sXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5udW1iZXJPZlJvd3MgPSB0aGlzLmRhdGEubGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGVtaXRTZWxlY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkUm93cyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5zZWxlY3RlZFJvd3MpLmZvckVhY2goayA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUm93cy5wdXNoKHRoaXMuc2VsZWN0ZWRSb3dzW2tdKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3NlbGVjdCcsIHNlbGVjdGVkUm93cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudEhhbmRsZXIudXBncmFkZUVsZW1lbnQodGhpcy4kZWwpO1xuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gdGFibGUudnVlP2IxM2I5NTdlIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCd0YWJsZScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZGwtZGF0YS10YWJsZSBtZGwtanMtZGF0YS10YWJsZVwiXG4gIH0sIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSwgMilcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtM2E5Y2M5NThcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTNhOWNjOTU4IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvdGFibGUvdGFibGUudnVlXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi90YWJsZVJvdy52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTJmZGRmODkyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3RhYmxlUm93LnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCIvVXNlcnMvb3ovc3JjL21hdGVyaWFsLWNvbXBvbmVudHMvc3JjL3RhYmxlL3RhYmxlUm93LnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMmZkZGY4OTJcIiwgX192dWVfb3B0aW9uc19fKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMmZkZGY4OTJcIiwgX192dWVfb3B0aW9uc19fKVxuICB9XG59KSgpfVxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSB0YWJsZVJvdy52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdGFibGUvdGFibGVSb3cudnVlIiwiPHRlbXBsYXRlPlxuICAgIDx0ciA6Y2xhc3M9XCJjbGFzc2VzXCI+XG4gICAgICAgIDxtLXRhYmxlLWNlbGwgdi1pZj1cImhhc1NlbGVjdGlvblwiPlxuICAgICAgICAgICAgPG0tY2hlY2tib3ggdi1tb2RlbD1cImNoZWNrYm94XCIgQGNoYW5nZT1cInNlbGVjdFwiPjwvbS1jaGVja2JveD5cbiAgICAgICAgPC9tLXRhYmxlLWNlbGw+XG5cbiAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgIDwvdHI+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbiAgICBpbXBvcnQgeyBnZXRDbG9zZXN0VnVlUGFyZW50IH0gZnJvbSAnLi4vdXRpbHMnO1xuICAgIGV4cG9ydCBkZWZhdWx0e1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgc2VsZWN0aW9uOiBCb29sZWFuLFxuICAgICAgICAgICAgbUl0ZW06IE9iamVjdCxcbiAgICAgICAgfSxcblxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgaGFzU2VsZWN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGlvbiB8fCB0aGlzLmhlYWRSb3cgJiYgdGhpcy5wYXJlbnRUYWJsZS5oYXNSb3dTZWxlY3Rpb247XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBjbGFzc2VzKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICdpcy1zZWxlY3RlZCc6IHRoaXMuY2hlY2tib3hcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICB0aGlzLnBhcmVudFRhYmxlID0gZ2V0Q2xvc2VzdFZ1ZVBhcmVudCh0aGlzLiRwYXJlbnQsICdtZGwtZGF0YS10YWJsZScpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy4kZWwucGFyZW50Tm9kZS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICd0aGVhZCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhlYWRSb3cgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudFRhYmxlLm51bWJlck9mUm93cysrO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggPSB0aGlzLnBhcmVudFRhYmxlLm51bWJlck9mUm93cztcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudFRhYmxlLmhhc1Jvd1NlbGVjdGlvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubUl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnRUYWJsZS5kYXRhLnB1c2godGhpcy5tSXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHdhdGNoOiB7XG4gICAgICAgICAgICBtSXRlbShuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudFRhYmxlLmRhdGFbdGhpcy5pbmRleF0gPSB0aGlzLm1JdGVtO1xuICAgICAgICAgICAgICAgIC8vdGhpcy5oYW5kbGVNdWx0aXBsZVNlbGVjdGlvbihuZXdWYWx1ZSA9PT0gb2xkVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgIH0sXG5cbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgc2V0U2VsZWN0ZWRSb3codmFsdWUsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50VGFibGUuc2VsZWN0ZWRSb3dzW2luZGV4XSA9IHRoaXMucGFyZW50VGFibGUuZGF0YVtpbmRleF07XG4gICAgICAgICAgICAgICAgICAgICsrdGhpcy5wYXJlbnRUYWJsZS5udW1iZXJPZlNlbGVjdGVkO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnBhcmVudFRhYmxlLnNlbGVjdGVkUm93c1tpbmRleF07XG4gICAgICAgICAgICAgICAgICAgIC0tdGhpcy5wYXJlbnRUYWJsZS5udW1iZXJPZlNlbGVjdGVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGhhbmRsZU11bHRpcGxlU2VsZWN0aW9uKHZhbHVlKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnBhcmVudFRhYmxlLiRjaGlsZHJlbik7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudFRhYmxlLiRjaGlsZHJlblsxXS4kY2hpbGRyZW4uZm9yRWFjaCgocm93LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByb3cuY2hlY2tib3ggPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyb3cuaGVhZFJvdykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTZWxlY3RlZFJvdyh2YWx1ZSwgaW5kZXgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2lmKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICByb3cuY2hlY2tib3ggPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy99XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnRUYWJsZS5udW1iZXJPZlNlbGVjdGVkID0gIHZhbHVlID8gdGhpcy5wYXJlbnRUYWJsZS5udW1iZXJPZlJvd3MgOiAwO1xuXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBoYW5kbGVTaW5nbGVTZWxlY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFNlbGVjdGVkUm93KHZhbHVlLCB0aGlzLmluZGV4IC0gMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnRUYWJsZS4kY2hpbGRyZW5bMF0uY2hlY2tib3ggPSB0aGlzLnBhcmVudFRhYmxlLm51bWJlck9mU2VsZWN0ZWQgPT09IHRoaXMucGFyZW50VGFibGUubnVtYmVyT2ZSb3dzO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgc2VsZWN0KCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmhhc1NlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5oZWFkUm93KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZU11bHRpcGxlU2VsZWN0aW9uKHRoaXMuY2hlY2tib3gpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVTaW5nbGVTZWxlY3Rpb24odGhpcy5jaGVja2JveCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudFRhYmxlLmVtaXRTZWxlY3Rpb24oKTtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBkYXRhKCl7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHBhcmVudFRhYmxlOiB7fSxcbiAgICAgICAgICAgICAgICBoZWFkUm93OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjaGVja2JveDogZmFsc2UsXG4gICAgICAgICAgICAgICAgaW5kZXg6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHRhYmxlUm93LnZ1ZT83NGRkZjc2YyIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygndHInLCB7XG4gICAgY2xhc3M6IF92bS5jbGFzc2VzXG4gIH0sIFsoX3ZtLmhhc1NlbGVjdGlvbikgPyBfYygnbS10YWJsZS1jZWxsJywgW19jKCdtLWNoZWNrYm94Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmNoZWNrYm94KSxcbiAgICAgIGV4cHJlc3Npb246IFwiY2hlY2tib3hcIlxuICAgIH1dLFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0uY2hlY2tib3gpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjaGFuZ2VcIjogX3ZtLnNlbGVjdCxcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5jaGVja2JveCA9ICRldmVudFxuICAgICAgfVxuICAgIH1cbiAgfSldLCAxKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfdm0uX3QoXCJkZWZhdWx0XCIpXSwgMilcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMmZkZGY4OTJcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTJmZGRmODkyIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvdGFibGUvdGFibGVSb3cudnVlXG4vLyBtb2R1bGUgaWQgPSA2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi90YWJsZUNlbGwudnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi1kNTk2NTQ0YyF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi90YWJsZUNlbGwudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIi9Vc2Vycy9vei9zcmMvbWF0ZXJpYWwtY29tcG9uZW50cy9zcmMvdGFibGUvdGFibGVDZWxsLnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtZDU5NjU0NGNcIiwgX192dWVfb3B0aW9uc19fKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtZDU5NjU0NGNcIiwgX192dWVfb3B0aW9uc19fKVxuICB9XG59KSgpfVxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSB0YWJsZUNlbGwudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3RhYmxlL3RhYmxlQ2VsbC52dWUiLCI8dGVtcGxhdGU+XG4gICAgPHRkIDpjbGFzcz1cInsnbWRsLWRhdGEtdGFibGVfX2NlbGwtLW5vbi1udW1lcmljJzogIW51bWVyaWN9XCIgOmlkPVwiaWRcIj5cbiAgICAgICAgPG0tdG9vbHRpcCA6dGFyZ2V0PVwiaWRcIiB2LWlmPVwidG9vbHRpcFwiIHRvcD57e3Rvb2x0aXB9fTwvbS10b29sdGlwPlxuICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgPC90ZD5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuICAgIGltcG9ydCB7IGdlbklkU2hvcnQgfSBmcm9tICcuLi91dGlscydcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIGlkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3QnK2dlbklkU2hvcnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgdG9vbHRpcDogW1N0cmluZywgTnVtYmVyXSxcbiAgICAgICAgICAgIG51bWVyaWM6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB0YWJsZUNlbGwudnVlPzA2ZGIzNTYyIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCd0ZCcsIHtcbiAgICBjbGFzczoge1xuICAgICAgJ21kbC1kYXRhLXRhYmxlX19jZWxsLS1ub24tbnVtZXJpYyc6ICFfdm0ubnVtZXJpY1xuICAgIH0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogX3ZtLmlkXG4gICAgfVxuICB9LCBbKF92bS50b29sdGlwKSA/IF9jKCdtLXRvb2x0aXAnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGFyZ2V0XCI6IF92bS5pZCxcbiAgICAgIFwidG9wXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS50b29sdGlwKSldKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfdm0uX3QoXCJkZWZhdWx0XCIpXSwgMilcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtZDU5NjU0NGNcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LWQ1OTY1NDRjIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvdGFibGUvdGFibGVDZWxsLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vdGFibGVIZWFkLnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtZWQzNmE5NTAhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vdGFibGVIZWFkLnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCIvVXNlcnMvb3ovc3JjL21hdGVyaWFsLWNvbXBvbmVudHMvc3JjL3RhYmxlL3RhYmxlSGVhZC52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWVkMzZhOTUwXCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWVkMzZhOTUwXCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfVxufSkoKX1cbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gdGFibGVIZWFkLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy90YWJsZS90YWJsZUhlYWQudnVlIiwiPHRlbXBsYXRlPlxuICAgIDx0aGVhZD5cbiAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgIDwvdGhlYWQ+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdHtcbiAgICAgICAgZGF0YSgpe1xuICAgICAgICAgICAgcmV0dXJuIHt9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB0YWJsZUhlYWQudnVlPzVjZmU5ODg0IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCd0aGVhZCcsIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSwgMilcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtZWQzNmE5NTBcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LWVkMzZhOTUwIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvdGFibGUvdGFibGVIZWFkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vdGFibGVILnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMWE0YTEwMjAhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vdGFibGVILnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCIvVXNlcnMvb3ovc3JjL21hdGVyaWFsLWNvbXBvbmVudHMvc3JjL3RhYmxlL3RhYmxlSC52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTFhNGExMDIwXCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTFhNGExMDIwXCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfVxufSkoKX1cbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gdGFibGVILnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy90YWJsZS90YWJsZUgudnVlIiwiPHRlbXBsYXRlPlxuICAgIDx0aCA6Y2xhc3M9XCJ7J21kbC1kYXRhLXRhYmxlX19jZWxsLS1ub24tbnVtZXJpYyc6ICFudW1lcmljfVwiPlxuICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgPC90aD5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIG51bWVyaWM6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB0YWJsZUgudnVlPzgyYTdiNmI2IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCd0aCcsIHtcbiAgICBjbGFzczoge1xuICAgICAgJ21kbC1kYXRhLXRhYmxlX19jZWxsLS1ub24tbnVtZXJpYyc6ICFfdm0ubnVtZXJpY1xuICAgIH1cbiAgfSwgW192bS5fdChcImRlZmF1bHRcIildLCAyKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0xYTRhMTAyMFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMWE0YTEwMjAhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy90YWJsZS90YWJsZUgudnVlXG4vLyBtb2R1bGUgaWQgPSA3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi90YWJsZUJvZHkudnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0zMTYyNjYxYSF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi90YWJsZUJvZHkudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIi9Vc2Vycy9vei9zcmMvbWF0ZXJpYWwtY29tcG9uZW50cy9zcmMvdGFibGUvdGFibGVCb2R5LnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMzE2MjY2MWFcIiwgX192dWVfb3B0aW9uc19fKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMzE2MjY2MWFcIiwgX192dWVfb3B0aW9uc19fKVxuICB9XG59KSgpfVxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSB0YWJsZUJvZHkudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3RhYmxlL3RhYmxlQm9keS52dWUiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ3Rib2R5JywgW192bS5fdChcImRlZmF1bHRcIildLCAyKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0zMTYyNjYxYVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMzE2MjY2MWEhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy90YWJsZS90YWJsZUJvZHkudnVlXG4vLyBtb2R1bGUgaWQgPSA3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCF2dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtNmYyN2I1ZTYhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2RpYWxvZy52dWVcIilcblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2RpYWxvZy52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTZmMjdiNWU2IXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2RpYWxvZy52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiL1VzZXJzL296L3NyYy9tYXRlcmlhbC1jb21wb25lbnRzL3NyYy9kaWFsb2cudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi02ZjI3YjVlNlwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi02ZjI3YjVlNlwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH1cbn0pKCl9XG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGRpYWxvZy52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGlhbG9nLnZ1ZSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNmYyN2I1ZTYhLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2RpYWxvZy52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTZmMjdiNWU2IS4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9kaWFsb2cudnVlXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNmYyN2I1ZTYhLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2RpYWxvZy52dWVcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTZmMjdiNWU2IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vc3JjL2RpYWxvZy52dWVcbi8vIG1vZHVsZSBpZCA9IDc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLm1kbC1kaWFsb2ctY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdG9wOjA7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogMTAwMDA7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMyk7XFxufVxcbi5tZGwtZGlhbG9nLWNvbnRhaW5lciAubWRsLWRpYWxvZyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgd2lkdGg6IGluaXRpYWw7XFxuICBtaW4td2lkdGg6IDI4MHB4O1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiLy4vc3JjL2RpYWxvZy52dWU/MDM4YmIzODZcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQXVFQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7Q0FDQTtBQUNBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtDQUNBXCIsXCJmaWxlXCI6XCJkaWFsb2cudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gICAgPGRpdiBjbGFzcz1cXFwibWRsLWRpYWxvZy1jb250YWluZXJcXFwiXFxuICAgICAgICAgcmVmPVxcXCJvdXRcXFwiXFxuICAgICAgICAgQGNsaWNrPVxcXCJjbG9zZUlmT3V0c2lkZVxcXCJcXG4gICAgICAgICB2LXNob3c9XFxcInNob3dcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibWRsLWRpYWxvZ1xcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibWRsLWRpYWxvZ19fdGl0bGVcXFwiPnt7dGl0bGV9fTwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1kbC1kaWFsb2dfX2NvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgICAgICA8c2xvdD48L3Nsb3Q+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibWRsLWRpYWxvZ19fYWN0aW9uc1xcXCIgOmNsYXNzPVxcXCJhY3Rpb25zQ2xhc3Nlc1xcXCI+XFxuICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XFxcImFjdGlvbnNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPG0tYnV0dG9uIEBjbGljay5uYXRpdmUuc3RvcD1cXFwiY2xvc2VcXFwiPkNsb3NlPC9tLWJ1dHRvbj5cXG4gICAgICAgICAgICAgICAgPC9zbG90PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5pbXBvcnQgY3JlYXRlRm9jdXNUcmFwIGZyb20gJ2ZvY3VzLXRyYXAnXFxuZXhwb3J0IGRlZmF1bHQge1xcbiAgY29tcHV0ZWQ6IHtcXG4gICAgYWN0aW9uc0NsYXNzZXMgKCkge1xcbiAgICAgIHJldHVybiB7XFxuICAgICAgICAnbWRsLWRpYWxvZ19fYWN0aW9ucy0tZnVsbC13aWR0aCc6IHRoaXMuZnVsbFdpZHRoXFxuICAgICAgfVxcbiAgICB9XFxuICB9LFxcbiAgZGF0YSAoKSB7XFxuICAgIHJldHVybiB7XFxuICAgICAgc2hvdzogZmFsc2VcXG4gICAgfVxcbiAgfSxcXG4gIHByb3BzOiB7XFxuICAgIHRpdGxlOiB7XFxuICAgICAgdHlwZTogU3RyaW5nXFxuICAgIH0sXFxuICAgIGZ1bGxXaWR0aDogQm9vbGVhbixcXG4gICAgbm9Gb2N1c1RyYXA6IHtcXG4gICAgICB0eXBlOiBCb29sZWFuLFxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXFxuICAgIH1cXG4gIH0sXFxuICBtb3VudGVkICgpIHtcXG4gICAgaWYgKCF0aGlzLm5vRm9jdXNUcmFwKSB0aGlzLl9mb2N1c1RyYXAgPSBjcmVhdGVGb2N1c1RyYXAodGhpcy4kZWwpXFxuICB9LFxcbiAgbWV0aG9kczoge1xcbiAgICBvcGVuICgpIHtcXG4gICAgICB0aGlzLnNob3cgPSB0cnVlXFxuICAgICAgaWYgKHRoaXMuX2ZvY3VzVHJhcCkgdGhpcy4kbmV4dFRpY2soKCkgPT4gdGhpcy5fZm9jdXNUcmFwLmFjdGl2YXRlKCkpXFxuICAgICAgdGhpcy4kZW1pdCgnb3BlbicpXFxuICAgIH0sXFxuICAgIGNsb3NlICgpIHtcXG4gICAgICB0aGlzLnNob3cgPSBmYWxzZVxcbiAgICAgIGlmICh0aGlzLl9mb2N1c1RyYXApIHRoaXMuX2ZvY3VzVHJhcC5kZWFjdGl2YXRlKClcXG4gICAgICB0aGlzLiRlbWl0KCdjbG9zZScpXFxuICAgIH0sXFxuICAgIGNsb3NlSWZPdXRzaWRlICh7IHRhcmdldCB9KSB7XFxuICAgICAgaWYgKHRhcmdldCA9PT0gdGhpcy4kcmVmcy5vdXQpIHRoaXMuY2xvc2UoKVxcbiAgICB9XFxuICB9LFxcbiAgd2F0Y2g6IHtcXG4gICAgbm9Gb2N1c1RyYXAgKG5vRm9jdXNUcmFwKSB7XFxuICAgICAgdGhpcy5fZm9jdXNUcmFwID0gbm9Gb2N1c1RyYXAgPyBudWxsIDogY3JlYXRlRm9jdXNUcmFwKHRoaXMuJGVsKVxcbiAgICB9XFxuICB9XFxufVxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZT5cXG4ubWRsLWRpYWxvZy1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0b3A6MDtcXG4gIGxlZnQ6IDA7XFxuICB6LWluZGV4OiAxMDAwMDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4zKTtcXG59XFxuLm1kbC1kaWFsb2ctY29udGFpbmVyIC5tZGwtZGlhbG9nIHtcXG4gIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XFxuICBwYWRkaW5nOiAxZW07XFxuICBjb2xvcjogYmxhY2s7XFxuICB3aWR0aDogaW5pdGlhbDtcXG4gIG1pbi13aWR0aDogMjgwcHg7XFxufVxcbjwvc3R5bGU+XCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi02ZjI3YjVlNiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy9kaWFsb2cudnVlXG4vLyBtb2R1bGUgaWQgPSA3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xudmFyIHN0eWxlc0luRG9tID0ge30sXG5cdG1lbW9pemUgPSBmdW5jdGlvbihmbikge1xuXHRcdHZhciBtZW1vO1xuXHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdFx0cmV0dXJuIG1lbW87XG5cdFx0fTtcblx0fSxcblx0aXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIC9tc2llIFs2LTldXFxiLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpO1xuXHR9KSxcblx0Z2V0SGVhZEVsZW1lbnQgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07XG5cdH0pLFxuXHRzaW5nbGV0b25FbGVtZW50ID0gbnVsbCxcblx0c2luZ2xldG9uQ291bnRlciA9IDAsXG5cdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wID0gW107XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZih0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZih0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAodHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgPGhlYWQ+LlxuXHRpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCk7XG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKylcblx0XHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzKGxpc3QpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pXG5cdFx0XHRzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2Vcblx0XHRcdG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KSB7XG5cdHZhciBoZWFkID0gZ2V0SGVhZEVsZW1lbnQoKTtcblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Bbc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGhlYWQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xuXHRcdH1cblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlRWxlbWVudCk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0Jy4gTXVzdCBiZSAndG9wJyBvciAnYm90dG9tJy5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuXHRzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xuXHR2YXIgaWR4ID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZUVsZW1lbnQpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSB7XG5cdHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cdHN0eWxlRWxlbWVudC50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KTtcblx0cmV0dXJuIHN0eWxlRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZUVsZW1lbnQsIHVwZGF0ZSwgcmVtb3ZlO1xuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXHRcdHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCB0cnVlKTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuXHRcdGlmKG5ld09iaikge1xuXHRcdFx0aWYobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKVxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXM7XG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZUVsZW1lbnQsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHRpZiAobWVkaWEpIHtcblx0XHRzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHBzOi8vZGV2ZWxvcGVyLmNocm9tZS5jb20vZGV2dG9vbHMvZG9jcy9qYXZhc2NyaXB0LWRlYnVnZ2luZ1xuXHRcdC8vIHRoaXMgbWFrZXMgc291cmNlIG1hcHMgaW5zaWRlIHN0eWxlIHRhZ3Mgd29yayBwcm9wZXJseSBpbiBDaHJvbWVcblx0XHRjc3MgKz0gJ1xcbi8qIyBzb3VyY2VVUkw9JyArIHNvdXJjZU1hcC5zb3VyY2VzWzBdICsgJyAqLyc7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHRpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuXHRcdH1cblx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gODBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJtZGwtZGlhbG9nLWNvbnRhaW5lclwiXG4gICAgICAgICByZWY9XCJvdXRcIlxuICAgICAgICAgQGNsaWNrPVwiY2xvc2VJZk91dHNpZGVcIlxuICAgICAgICAgdi1zaG93PVwic2hvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLWRpYWxvZ1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1kaWFsb2dfX3RpdGxlXCI+e3t0aXRsZX19PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLWRpYWxvZ19fY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1kaWFsb2dfX2FjdGlvbnNcIiA6Y2xhc3M9XCJhY3Rpb25zQ2xhc3Nlc1wiPlxuICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XCJhY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxtLWJ1dHRvbiBAY2xpY2submF0aXZlLnN0b3A9XCJjbG9zZVwiPkNsb3NlPC9tLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8L3Nsb3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IGNyZWF0ZUZvY3VzVHJhcCBmcm9tICdmb2N1cy10cmFwJ1xuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wdXRlZDoge1xuICAgIGFjdGlvbnNDbGFzc2VzICgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICdtZGwtZGlhbG9nX19hY3Rpb25zLS1mdWxsLXdpZHRoJzogdGhpcy5mdWxsV2lkdGhcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzaG93OiBmYWxzZVxuICAgIH1cbiAgfSxcbiAgcHJvcHM6IHtcbiAgICB0aXRsZToge1xuICAgICAgdHlwZTogU3RyaW5nXG4gICAgfSxcbiAgICBmdWxsV2lkdGg6IEJvb2xlYW4sXG4gICAgbm9Gb2N1c1RyYXA6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH1cbiAgfSxcbiAgbW91bnRlZCAoKSB7XG4gICAgaWYgKCF0aGlzLm5vRm9jdXNUcmFwKSB0aGlzLl9mb2N1c1RyYXAgPSBjcmVhdGVGb2N1c1RyYXAodGhpcy4kZWwpXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBvcGVuICgpIHtcbiAgICAgIHRoaXMuc2hvdyA9IHRydWVcbiAgICAgIGlmICh0aGlzLl9mb2N1c1RyYXApIHRoaXMuJG5leHRUaWNrKCgpID0+IHRoaXMuX2ZvY3VzVHJhcC5hY3RpdmF0ZSgpKVxuICAgICAgdGhpcy4kZW1pdCgnb3BlbicpXG4gICAgfSxcbiAgICBjbG9zZSAoKSB7XG4gICAgICB0aGlzLnNob3cgPSBmYWxzZVxuICAgICAgaWYgKHRoaXMuX2ZvY3VzVHJhcCkgdGhpcy5fZm9jdXNUcmFwLmRlYWN0aXZhdGUoKVxuICAgICAgdGhpcy4kZW1pdCgnY2xvc2UnKVxuICAgIH0sXG4gICAgY2xvc2VJZk91dHNpZGUgKHsgdGFyZ2V0IH0pIHtcbiAgICAgIGlmICh0YXJnZXQgPT09IHRoaXMuJHJlZnMub3V0KSB0aGlzLmNsb3NlKClcbiAgICB9XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgbm9Gb2N1c1RyYXAgKG5vRm9jdXNUcmFwKSB7XG4gICAgICB0aGlzLl9mb2N1c1RyYXAgPSBub0ZvY3VzVHJhcCA/IG51bGwgOiBjcmVhdGVGb2N1c1RyYXAodGhpcy4kZWwpXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuLm1kbC1kaWFsb2ctY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRvcDowO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxMDAwMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjMpO1xufVxuLm1kbC1kaWFsb2ctY29udGFpbmVyIC5tZGwtZGlhbG9nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbiAgcGFkZGluZzogMWVtO1xuICBjb2xvcjogYmxhY2s7XG4gIHdpZHRoOiBpbml0aWFsO1xuICBtaW4td2lkdGg6IDI4MHB4O1xufVxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZGlhbG9nLnZ1ZT8wMzhiYjM4NiIsInZhciB0YWJiYWJsZSA9IHJlcXVpcmUoJ3RhYmJhYmxlJyk7XG5cbnZhciBsaXN0ZW5pbmdGb2N1c1RyYXAgPSBudWxsO1xuXG5mdW5jdGlvbiBmb2N1c1RyYXAoZWxlbWVudCwgdXNlck9wdGlvbnMpIHtcbiAgdmFyIHRhYmJhYmxlTm9kZXMgPSBbXTtcbiAgdmFyIG5vZGVGb2N1c2VkQmVmb3JlQWN0aXZhdGlvbiA9IG51bGw7XG4gIHZhciBhY3RpdmUgPSBmYWxzZTtcbiAgdmFyIHBhdXNlZCA9IGZhbHNlO1xuXG4gIHZhciBjb250YWluZXIgPSAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnKVxuICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtZW50KVxuICAgIDogZWxlbWVudDtcblxuICB2YXIgY29uZmlnID0gdXNlck9wdGlvbnMgfHwge307XG4gIGNvbmZpZy5yZXR1cm5Gb2N1c09uRGVhY3RpdmF0ZSA9ICh1c2VyT3B0aW9ucyAmJiB1c2VyT3B0aW9ucy5yZXR1cm5Gb2N1c09uRGVhY3RpdmF0ZSAhPT0gdW5kZWZpbmVkKVxuICAgID8gdXNlck9wdGlvbnMucmV0dXJuRm9jdXNPbkRlYWN0aXZhdGVcbiAgICA6IHRydWU7XG4gIGNvbmZpZy5lc2NhcGVEZWFjdGl2YXRlcyA9ICh1c2VyT3B0aW9ucyAmJiB1c2VyT3B0aW9ucy5lc2NhcGVEZWFjdGl2YXRlcyAhPT0gdW5kZWZpbmVkKVxuICAgID8gdXNlck9wdGlvbnMuZXNjYXBlRGVhY3RpdmF0ZXNcbiAgICA6IHRydWU7XG5cbiAgdmFyIHRyYXAgPSB7XG4gICAgYWN0aXZhdGU6IGFjdGl2YXRlLFxuICAgIGRlYWN0aXZhdGU6IGRlYWN0aXZhdGUsXG4gICAgcGF1c2U6IHBhdXNlLFxuICAgIHVucGF1c2U6IHVucGF1c2UsXG4gIH07XG5cbiAgcmV0dXJuIHRyYXA7XG5cbiAgZnVuY3Rpb24gYWN0aXZhdGUoYWN0aXZhdGVPcHRpb25zKSB7XG4gICAgaWYgKGFjdGl2ZSkgcmV0dXJuO1xuXG4gICAgdmFyIGRlZmF1bHRlZEFjdGl2YXRlT3B0aW9ucyA9IHtcbiAgICAgIG9uQWN0aXZhdGU6IChhY3RpdmF0ZU9wdGlvbnMgJiYgYWN0aXZhdGVPcHRpb25zLm9uQWN0aXZhdGUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgPyBhY3RpdmF0ZU9wdGlvbnMub25BY3RpdmF0ZVxuICAgICAgICA6IGNvbmZpZy5vbkFjdGl2YXRlLFxuICAgIH07XG5cbiAgICBhY3RpdmUgPSB0cnVlO1xuICAgIHBhdXNlZCA9IGZhbHNlO1xuICAgIG5vZGVGb2N1c2VkQmVmb3JlQWN0aXZhdGlvbiA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG5cbiAgICBpZiAoZGVmYXVsdGVkQWN0aXZhdGVPcHRpb25zLm9uQWN0aXZhdGUpIHtcbiAgICAgIGRlZmF1bHRlZEFjdGl2YXRlT3B0aW9ucy5vbkFjdGl2YXRlKCk7XG4gICAgfVxuXG4gICAgYWRkTGlzdGVuZXJzKCk7XG4gICAgcmV0dXJuIHRyYXA7XG4gIH1cblxuICBmdW5jdGlvbiBkZWFjdGl2YXRlKGRlYWN0aXZhdGVPcHRpb25zKSB7XG4gICAgaWYgKCFhY3RpdmUpIHJldHVybjtcblxuICAgIHZhciBkZWZhdWx0ZWREZWFjdGl2YXRlT3B0aW9ucyA9IHtcbiAgICAgIHJldHVybkZvY3VzOiAoZGVhY3RpdmF0ZU9wdGlvbnMgJiYgZGVhY3RpdmF0ZU9wdGlvbnMucmV0dXJuRm9jdXMgIT09IHVuZGVmaW5lZClcbiAgICAgICAgPyBkZWFjdGl2YXRlT3B0aW9ucy5yZXR1cm5Gb2N1c1xuICAgICAgICA6IGNvbmZpZy5yZXR1cm5Gb2N1c09uRGVhY3RpdmF0ZSxcbiAgICAgIG9uRGVhY3RpdmF0ZTogKGRlYWN0aXZhdGVPcHRpb25zICYmIGRlYWN0aXZhdGVPcHRpb25zLm9uRGVhY3RpdmF0ZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICA/IGRlYWN0aXZhdGVPcHRpb25zLm9uRGVhY3RpdmF0ZVxuICAgICAgICA6IGNvbmZpZy5vbkRlYWN0aXZhdGUsXG4gICAgfTtcblxuICAgIHJlbW92ZUxpc3RlbmVycygpO1xuXG4gICAgaWYgKGRlZmF1bHRlZERlYWN0aXZhdGVPcHRpb25zLm9uRGVhY3RpdmF0ZSkge1xuICAgICAgZGVmYXVsdGVkRGVhY3RpdmF0ZU9wdGlvbnMub25EZWFjdGl2YXRlKCk7XG4gICAgfVxuXG4gICAgaWYgKGRlZmF1bHRlZERlYWN0aXZhdGVPcHRpb25zLnJldHVybkZvY3VzKSB7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdHJ5Rm9jdXMobm9kZUZvY3VzZWRCZWZvcmVBY3RpdmF0aW9uKTtcbiAgICAgIH0sIDApO1xuICAgIH1cblxuICAgIGFjdGl2ZSA9IGZhbHNlO1xuICAgIHBhdXNlZCA9IGZhbHNlO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZnVuY3Rpb24gcGF1c2UoKSB7XG4gICAgaWYgKHBhdXNlZCB8fCAhYWN0aXZlKSByZXR1cm47XG4gICAgcGF1c2VkID0gdHJ1ZTtcbiAgICByZW1vdmVMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVucGF1c2UoKSB7XG4gICAgaWYgKCFwYXVzZWQgfHwgIWFjdGl2ZSkgcmV0dXJuO1xuICAgIHBhdXNlZCA9IGZhbHNlO1xuICAgIGFkZExpc3RlbmVycygpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkTGlzdGVuZXJzKCkge1xuICAgIGlmICghYWN0aXZlKSByZXR1cm47XG5cbiAgICAvLyBUaGVyZSBjYW4gYmUgb25seSBvbmUgbGlzdGVuaW5nIGZvY3VzIHRyYXAgYXQgYSB0aW1lXG4gICAgaWYgKGxpc3RlbmluZ0ZvY3VzVHJhcCkge1xuICAgICAgbGlzdGVuaW5nRm9jdXNUcmFwLnBhdXNlKCk7XG4gICAgfVxuICAgIGxpc3RlbmluZ0ZvY3VzVHJhcCA9IHRyYXA7XG5cbiAgICB1cGRhdGVUYWJiYWJsZU5vZGVzKCk7XG4gICAgdHJ5Rm9jdXMoZmlyc3RGb2N1c05vZGUoKSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBjaGVja0ZvY3VzLCB0cnVlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoZWNrQ2xpY2ssIHRydWUpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGNoZWNrUG9pbnRlckRvd24sIHRydWUpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBjaGVja1BvaW50ZXJEb3duLCB0cnVlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgY2hlY2tLZXksIHRydWUpO1xuXG4gICAgcmV0dXJuIHRyYXA7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKCFhY3RpdmUgfHwgbGlzdGVuaW5nRm9jdXNUcmFwICE9PSB0cmFwKSByZXR1cm47XG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1cycsIGNoZWNrRm9jdXMsIHRydWUpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hlY2tDbGljaywgdHJ1ZSk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgY2hlY2tQb2ludGVyRG93biwgdHJ1ZSk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGNoZWNrUG9pbnRlckRvd24sIHRydWUpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBjaGVja0tleSwgdHJ1ZSk7XG5cbiAgICBsaXN0ZW5pbmdGb2N1c1RyYXAgPSBudWxsO1xuXG4gICAgcmV0dXJuIHRyYXA7XG4gIH1cblxuICBmdW5jdGlvbiBnZXROb2RlRm9yT3B0aW9uKG9wdGlvbk5hbWUpIHtcbiAgICB2YXIgb3B0aW9uVmFsdWUgPSBjb25maWdbb3B0aW9uTmFtZV07XG4gICAgdmFyIG5vZGUgPSBvcHRpb25WYWx1ZTtcbiAgICBpZiAoIW9wdGlvblZhbHVlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvcHRpb25WYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9wdGlvblZhbHVlKTtcbiAgICAgIGlmICghbm9kZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2AnICsgb3B0aW9uTmFtZSArICdgIHJlZmVycyB0byBubyBrbm93biBub2RlJyk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb3B0aW9uVmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG5vZGUgPSBvcHRpb25WYWx1ZSgpO1xuICAgICAgaWYgKCFub2RlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignYCcgKyBvcHRpb25OYW1lICsgJ2AgZGlkIG5vdCByZXR1cm4gYSBub2RlJyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgZnVuY3Rpb24gZmlyc3RGb2N1c05vZGUoKSB7XG4gICAgdmFyIG5vZGU7XG4gICAgaWYgKGdldE5vZGVGb3JPcHRpb24oJ2luaXRpYWxGb2N1cycpICE9PSBudWxsKSB7XG4gICAgICBub2RlID0gZ2V0Tm9kZUZvck9wdGlvbignaW5pdGlhbEZvY3VzJyk7XG4gICAgfSBlbHNlIGlmIChjb250YWluZXIuY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgIG5vZGUgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICBub2RlID0gdGFiYmFibGVOb2Rlc1swXSB8fCBnZXROb2RlRm9yT3B0aW9uKCdmYWxsYmFja0ZvY3VzJyk7XG4gICAgfVxuXG4gICAgaWYgKCFub2RlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBjYW5cXCd0IGhhdmUgYSBmb2N1cy10cmFwIHdpdGhvdXQgYXQgbGVhc3Qgb25lIGZvY3VzYWJsZSBlbGVtZW50Jyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICAvLyBUaGlzIG5lZWRzIHRvIGJlIGRvbmUgb24gbW91c2Vkb3duIGFuZCB0b3VjaHN0YXJ0IGluc3RlYWQgb2YgY2xpY2tcbiAgLy8gc28gdGhhdCBpdCBwcmVjZWRlcyB0aGUgZm9jdXMgZXZlbnRcbiAgZnVuY3Rpb24gY2hlY2tQb2ludGVyRG93bihlKSB7XG4gICAgaWYgKGNvbmZpZy5jbGlja091dHNpZGVEZWFjdGl2YXRlcyAmJiAhY29udGFpbmVyLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgZGVhY3RpdmF0ZSh7IHJldHVybkZvY3VzOiBmYWxzZSB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjaGVja0NsaWNrKGUpIHtcbiAgICBpZiAoY29uZmlnLmNsaWNrT3V0c2lkZURlYWN0aXZhdGVzKSByZXR1cm47XG4gICAgaWYgKGNvbnRhaW5lci5jb250YWlucyhlLnRhcmdldCkpIHJldHVybjtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrRm9jdXMoZSkge1xuICAgIGlmIChjb250YWluZXIuY29udGFpbnMoZS50YXJnZXQpKSByZXR1cm47XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgLy8gQ2hlY2tpbmcgZm9yIGEgYmx1ciBtZXRob2QgaGVyZSByZXNvbHZlcyBhIEZpcmVmb3ggaXNzdWUgKCMxNSlcbiAgICBpZiAodHlwZW9mIGUudGFyZ2V0LmJsdXIgPT09ICdmdW5jdGlvbicpIGUudGFyZ2V0LmJsdXIoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrS2V5KGUpIHtcbiAgICBpZiAoZS5rZXkgPT09ICdUYWInIHx8IGUua2V5Q29kZSA9PT0gOSkge1xuICAgICAgaGFuZGxlVGFiKGUpO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuZXNjYXBlRGVhY3RpdmF0ZXMgIT09IGZhbHNlICYmIGlzRXNjYXBlRXZlbnQoZSkpIHtcbiAgICAgIGRlYWN0aXZhdGUoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVUYWIoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB1cGRhdGVUYWJiYWJsZU5vZGVzKCk7XG4gICAgdmFyIGN1cnJlbnRGb2N1c0luZGV4ID0gdGFiYmFibGVOb2Rlcy5pbmRleE9mKGUudGFyZ2V0KTtcbiAgICB2YXIgbGFzdFRhYmJhYmxlTm9kZSA9IHRhYmJhYmxlTm9kZXNbdGFiYmFibGVOb2Rlcy5sZW5ndGggLSAxXTtcbiAgICB2YXIgZmlyc3RUYWJiYWJsZU5vZGUgPSB0YWJiYWJsZU5vZGVzWzBdO1xuXG4gICAgaWYgKGUuc2hpZnRLZXkpIHtcbiAgICAgIGlmIChlLnRhcmdldCA9PT0gZmlyc3RUYWJiYWJsZU5vZGUgfHwgdGFiYmFibGVOb2Rlcy5pbmRleE9mKGUudGFyZ2V0KSA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIHRyeUZvY3VzKGxhc3RUYWJiYWJsZU5vZGUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRyeUZvY3VzKHRhYmJhYmxlTm9kZXNbY3VycmVudEZvY3VzSW5kZXggLSAxXSk7XG4gICAgfVxuXG4gICAgaWYgKGUudGFyZ2V0ID09PSBsYXN0VGFiYmFibGVOb2RlKSByZXR1cm4gdHJ5Rm9jdXMoZmlyc3RUYWJiYWJsZU5vZGUpO1xuXG4gICAgdHJ5Rm9jdXModGFiYmFibGVOb2Rlc1tjdXJyZW50Rm9jdXNJbmRleCArIDFdKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVRhYmJhYmxlTm9kZXMoKSB7XG4gICAgdGFiYmFibGVOb2RlcyA9IHRhYmJhYmxlKGNvbnRhaW5lcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNFc2NhcGVFdmVudChlKSB7XG4gIHJldHVybiBlLmtleSA9PT0gJ0VzY2FwZScgfHwgZS5rZXkgPT09ICdFc2MnIHx8IGUua2V5Q29kZSA9PT0gMjc7XG59XG5cbmZ1bmN0aW9uIHRyeUZvY3VzKG5vZGUpIHtcbiAgaWYgKCFub2RlIHx8ICFub2RlLmZvY3VzKSByZXR1cm47XG4gIG5vZGUuZm9jdXMoKTtcbiAgaWYgKG5vZGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaW5wdXQnKSB7XG4gICAgbm9kZS5zZWxlY3QoKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZvY3VzVHJhcDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9mb2N1cy10cmFwL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGVsKSB7XG4gIHZhciBiYXNpY1RhYmJhYmxlcyA9IFtdO1xuICB2YXIgb3JkZXJlZFRhYmJhYmxlcyA9IFtdO1xuXG4gIC8vIEEgbm9kZSBpcyBcImF2YWlsYWJsZVwiIGlmXG4gIC8vIC0gaXQncyBjb21wdXRlZCBzdHlsZVxuICB2YXIgaXNVbmF2YWlsYWJsZSA9IGNyZWF0ZUlzVW5hdmFpbGFibGUoKTtcblxuICB2YXIgY2FuZGlkYXRlU2VsZWN0b3JzID0gW1xuICAgICdpbnB1dCcsXG4gICAgJ3NlbGVjdCcsXG4gICAgJ2FbaHJlZl0nLFxuICAgICd0ZXh0YXJlYScsXG4gICAgJ2J1dHRvbicsXG4gICAgJ1t0YWJpbmRleF0nLFxuICBdO1xuXG4gIHZhciBjYW5kaWRhdGVzID0gZWwucXVlcnlTZWxlY3RvckFsbChjYW5kaWRhdGVTZWxlY3RvcnMpO1xuXG4gIHZhciBjYW5kaWRhdGUsIGNhbmRpZGF0ZUluZGV4O1xuICBmb3IgKHZhciBpID0gMCwgbCA9IGNhbmRpZGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgY2FuZGlkYXRlID0gY2FuZGlkYXRlc1tpXTtcbiAgICBjYW5kaWRhdGVJbmRleCA9IGNhbmRpZGF0ZS50YWJJbmRleDtcblxuICAgIGlmIChcbiAgICAgIGNhbmRpZGF0ZUluZGV4IDwgMFxuICAgICAgfHwgKGNhbmRpZGF0ZS50YWdOYW1lID09PSAnSU5QVVQnICYmIGNhbmRpZGF0ZS50eXBlID09PSAnaGlkZGVuJylcbiAgICAgIHx8IGNhbmRpZGF0ZS5kaXNhYmxlZFxuICAgICAgfHwgaXNVbmF2YWlsYWJsZShjYW5kaWRhdGUpXG4gICAgKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoY2FuZGlkYXRlSW5kZXggPT09IDApIHtcbiAgICAgIGJhc2ljVGFiYmFibGVzLnB1c2goY2FuZGlkYXRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3JkZXJlZFRhYmJhYmxlcy5wdXNoKHtcbiAgICAgICAgdGFiSW5kZXg6IGNhbmRpZGF0ZUluZGV4LFxuICAgICAgICBub2RlOiBjYW5kaWRhdGUsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICB2YXIgdGFiYmFibGVOb2RlcyA9IG9yZGVyZWRUYWJiYWJsZXNcbiAgICAuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICByZXR1cm4gYS50YWJJbmRleCAtIGIudGFiSW5kZXg7XG4gICAgfSlcbiAgICAubWFwKGZ1bmN0aW9uKGEpIHtcbiAgICAgIHJldHVybiBhLm5vZGVcbiAgICB9KTtcblxuICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseSh0YWJiYWJsZU5vZGVzLCBiYXNpY1RhYmJhYmxlcyk7XG5cbiAgcmV0dXJuIHRhYmJhYmxlTm9kZXM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUlzVW5hdmFpbGFibGUoKSB7XG4gIC8vIE5vZGUgY2FjaGUgbXVzdCBiZSByZWZyZXNoZWQgb24gZXZlcnkgY2hlY2ssIGluIGNhc2VcbiAgLy8gdGhlIGNvbnRlbnQgb2YgdGhlIGVsZW1lbnQgaGFzIGNoYW5nZWRcbiAgdmFyIGlzT2ZmQ2FjaGUgPSBbXTtcblxuICAvLyBcIm9mZlwiIG1lYW5zIGBkaXNwbGF5OiBub25lO2AsIGFzIG9wcG9zZWQgdG8gXCJoaWRkZW5cIixcbiAgLy8gd2hpY2ggbWVhbnMgYHZpc2liaWxpdHk6IGhpZGRlbjtgLiBnZXRDb21wdXRlZFN0eWxlXG4gIC8vIGFjY3VyYXRlbHkgcmVmbGVjdHMgdmlzaWJsaXR5IGluIGNvbnRleHQgYnV0IG5vdFxuICAvLyBcIm9mZlwiIHN0YXRlLCBzbyB3ZSBuZWVkIHRvIHJlY3Vyc2l2ZWx5IGNoZWNrIHBhcmVudHMuXG5cbiAgZnVuY3Rpb24gaXNPZmYobm9kZSwgbm9kZUNvbXB1dGVkU3R5bGUpIHtcbiAgICBpZiAobm9kZSA9PT0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSByZXR1cm4gZmFsc2U7XG5cbiAgICAvLyBGaW5kIHRoZSBjYWNoZWQgbm9kZSAoQXJyYXkucHJvdG90eXBlLmZpbmQgbm90IGF2YWlsYWJsZSBpbiBJRTkpXG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IGlzT2ZmQ2FjaGUubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChpc09mZkNhY2hlW2ldWzBdID09PSBub2RlKSByZXR1cm4gaXNPZmZDYWNoZVtpXVsxXTtcbiAgICB9XG5cbiAgICBub2RlQ29tcHV0ZWRTdHlsZSA9IG5vZGVDb21wdXRlZFN0eWxlIHx8IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuXG4gICAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuXG4gICAgaWYgKG5vZGVDb21wdXRlZFN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKG5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgcmVzdWx0ID0gaXNPZmYobm9kZS5wYXJlbnROb2RlKTtcbiAgICB9XG5cbiAgICBpc09mZkNhY2hlLnB1c2goW25vZGUsIHJlc3VsdF0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiBpc1VuYXZhaWxhYmxlKG5vZGUpIHtcbiAgICBpZiAobm9kZSA9PT0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSByZXR1cm4gZmFsc2U7XG5cbiAgICB2YXIgY29tcHV0ZWRTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuXG4gICAgaWYgKGlzT2ZmKG5vZGUsIGNvbXB1dGVkU3R5bGUpKSByZXR1cm4gdHJ1ZTtcblxuICAgIHJldHVybiBjb21wdXRlZFN0eWxlLnZpc2liaWxpdHkgPT09ICdoaWRkZW4nO1xuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdGFiYmFibGUvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5zaG93KSxcbiAgICAgIGV4cHJlc3Npb246IFwic2hvd1wiXG4gICAgfV0sXG4gICAgcmVmOiBcIm91dFwiLFxuICAgIHN0YXRpY0NsYXNzOiBcIm1kbC1kaWFsb2ctY29udGFpbmVyXCIsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLmNsb3NlSWZPdXRzaWRlXG4gICAgfVxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZGwtZGlhbG9nXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWRsLWRpYWxvZ19fdGl0bGVcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0udGl0bGUpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kbC1kaWFsb2dfX2NvbnRlbnRcIlxuICB9LCBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sIDIpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kbC1kaWFsb2dfX2FjdGlvbnNcIixcbiAgICBjbGFzczogX3ZtLmFjdGlvbnNDbGFzc2VzXG4gIH0sIFtfdm0uX3QoXCJhY3Rpb25zXCIsIFtfYygnbS1idXR0b24nLCB7XG4gICAgbmF0aXZlT246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgX3ZtLmNsb3NlKCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJDbG9zZVwiKV0pXSldLCAyKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNmYyN2I1ZTZcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTZmMjdiNWU2IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvZGlhbG9nLnZ1ZVxuLy8gbW9kdWxlIGlkID0gODRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vY2FyZC52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTVjMmEzM2Q2IXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2NhcmQudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIi9Vc2Vycy9vei9zcmMvbWF0ZXJpYWwtY29tcG9uZW50cy9zcmMvY2FyZC52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTVjMmEzM2Q2XCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTVjMmEzM2Q2XCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfVxufSkoKX1cbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gY2FyZC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2FyZC52dWUiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cIm1kbC1jYXJkIG1kbC1zaGFkb3ctLTJkcFwiPlxuICAgICAgICA8c2xvdCBuYW1lPVwidGl0bGVcIiB2LWlmPVwidGl0bGVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtY2FyZF9fdGl0bGUgbWRsLWNhcmQtLWV4cGFuZFwiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cIm1kbC1jYXJkX190aXRsZS10ZXh0XCI+e3t0aXRsZX19PC9oMj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3Nsb3Q+XG5cbiAgICAgICAgPHNsb3QgbmFtZT1cInN1YnRpdGxlXCIgdi1pZj1cInN1YnRpdGxlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLWNhcmRfX3N1YnRpdGxlLXRleHRcIj57e3N1YnRpdGxlfX08L2Rpdj5cbiAgICAgICAgPC9zbG90PlxuXG4gICAgICAgIDxzbG90IG5hbWU9XCJzdXBwb3J0aW5nLXRleHRcIiB2LWlmPVwic3VwcG9ydGluZ1RleHRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtY2FyZF9fc3VwcG9ydGluZy10ZXh0XCI+e3tzdXBwb3J0aW5nVGV4dH19PC9kaXY+XG4gICAgICAgIDwvc2xvdD5cblxuICAgICAgICA8c2xvdCBuYW1lPVwibWVkaWFcIiB2LWlmPVwibWVkaWFcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtY2FyZF9fbWVkaWFcIj48aW1nIDpzcmM9XCJtZWRpYVwiLz48L2Rpdj5cbiAgICAgICAgPC9zbG90PlxuXG4gICAgICAgIDxzbG90IG5hbWU9XCJhY3Rpb25zXCIgdi1pZj1cImFjdGlvbnNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtY2FyZF9fYWN0aW9ucyBtZGwtY2FyZC0tYm9yZGVyXCI+XG4gICAgICAgICAgICAgICAgPG0tYnV0dG9uIGNvbG9yZWQ9XCJjb2xvcmVkXCIgQGNsaWNrLm5hdGl2ZT1cInRyaWdnZXJBY3Rpb25zRXZlbnRcIiBjbGFzcz1cIm1kbC1qcy1yaXBwbGUtZWZmZWN0XCI+e3thY3Rpb25zVGV4dH19PC9tLWJ1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3Nsb3Q+XG5cbiAgICAgICAgPHNsb3QgbmFtZT1cIm1lbnVcIiB2LWlmPVwibWVudVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1jYXJkX19tZW51XCI+XG4gICAgICAgICAgICAgICAgPG0tYnV0dG9uIGljb249XCJpY29uXCIgQGNsaWNrLm5hdGl2ZT1cInRyaWdnZXJNZW51RXZlbnRcIj48aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+c2hhcmU8L2k+PC9tLWJ1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3Nsb3Q+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5jb25zdCBzbG90cyA9IFtcbiAgJ3RpdGxlJyxcbiAgJ3N1YnRpdGxlJyxcbiAgJ3N1cHBvcnRpbmdUZXh0JyxcbiAgJ21lZGlhJyxcbiAgJ2FjdGlvbnMnLFxuICAnbWVudSdcbl07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IHtcbiAgICB0aXRsZTogU3RyaW5nLFxuICAgIG1lbnU6IFN0cmluZyxcbiAgICBhY3Rpb25zOiBTdHJpbmcsXG4gICAgYWN0aW9uc1RhcmdldDoge1xuICAgICAgZGVmYXVsdDogJ19zZWxmJyxcbiAgICAgIHR5cGU6IFN0cmluZ1xuICAgIH0sXG4gICAgYWN0aW9uc1RleHQ6IFN0cmluZyxcbiAgICBtZWRpYTogU3RyaW5nLFxuICAgIHN1YnRpdGxlOiBTdHJpbmcsXG4gICAgc3VwcG9ydGluZ1RleHQ6IFN0cmluZ1xuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICB0cmlnZ2VyTWVudUV2ZW50KCkge1xuICAgICAgdGhpcy4kZW1pdCh0aGlzLm1lbnUpXG4gICAgfSxcblxuICAgIHRyaWdnZXJBY3Rpb25zRXZlbnQoKSB7XG4gICAgICB0aGlzLiRlbWl0KHRoaXMuYWN0aW9ucylcbiAgICB9XG4gIH0sXG5cbiAgbW91bnRlZCgpIHtcbiAgICBzbG90cy5mb3JFYWNoKChzbG90LCBwb3MpID0+IHtcbiAgICAgIGlmICh0aGlzW3Nsb3RdID09PSB0cnVlKSB7XG4gICAgICAgIGxldCBlbCA9IHRoaXMuJGVsLmNoaWxkcmVuW3Bvc11cbiAgICAgICAgaWYgKCFlbCB8fCAhdGhpcy4kZWwuYXR0cmlidXRlcy5nZXROYW1lZEl0ZW0oJ3Nsb3QnKSkge1xuICAgICAgICAgIHRoaXNbc2xvdF0gPSAnJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNhcmQudnVlPzdjODhhZTdkIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWRsLWNhcmQgbWRsLXNoYWRvdy0tMmRwXCJcbiAgfSwgWyhfdm0udGl0bGUpID8gX3ZtLl90KFwidGl0bGVcIiwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWRsLWNhcmRfX3RpdGxlIG1kbC1jYXJkLS1leHBhbmRcIlxuICB9LCBbX2MoJ2gyJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kbC1jYXJkX190aXRsZS10ZXh0XCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnRpdGxlKSldKV0pXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgKF92bS5zdWJ0aXRsZSkgPyBfdm0uX3QoXCJzdWJ0aXRsZVwiLCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZGwtY2FyZF9fc3VidGl0bGUtdGV4dFwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5zdWJ0aXRsZSkpXSldKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLnN1cHBvcnRpbmdUZXh0KSA/IF92bS5fdChcInN1cHBvcnRpbmctdGV4dFwiLCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZGwtY2FyZF9fc3VwcG9ydGluZy10ZXh0XCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnN1cHBvcnRpbmdUZXh0KSldKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIChfdm0ubWVkaWEpID8gX3ZtLl90KFwibWVkaWFcIiwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWRsLWNhcmRfX21lZGlhXCJcbiAgfSwgW19jKCdpbWcnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3JjXCI6IF92bS5tZWRpYVxuICAgIH1cbiAgfSldKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIChfdm0uYWN0aW9ucykgPyBfdm0uX3QoXCJhY3Rpb25zXCIsIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kbC1jYXJkX19hY3Rpb25zIG1kbC1jYXJkLS1ib3JkZXJcIlxuICB9LCBbX2MoJ20tYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kbC1qcy1yaXBwbGUtZWZmZWN0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiY29sb3JlZFwiOiBcImNvbG9yZWRcIlxuICAgIH0sXG4gICAgbmF0aXZlT246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS50cmlnZ2VyQWN0aW9uc0V2ZW50KCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5hY3Rpb25zVGV4dCkpXSldLCAxKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIChfdm0ubWVudSkgPyBfdm0uX3QoXCJtZW51XCIsIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kbC1jYXJkX19tZW51XCJcbiAgfSwgW19jKCdtLWJ1dHRvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJpY29uXCI6IFwiaWNvblwiXG4gICAgfSxcbiAgICBuYXRpdmVPbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnRyaWdnZXJNZW51RXZlbnQoJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1hdGVyaWFsLWljb25zXCJcbiAgfSwgW192bS5fdihcInNoYXJlXCIpXSldKV0sIDEpXSkgOiBfdm0uX2UoKV0sIDIpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTVjMmEzM2Q2XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi01YzJhMzNkNiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2NhcmQudnVlXG4vLyBtb2R1bGUgaWQgPSA4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9jaGlwLnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMzU4NDAxNTEhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vY2hpcC52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiL1VzZXJzL296L3NyYy9tYXRlcmlhbC1jb21wb25lbnRzL3NyYy9jaGlwLnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMzU4NDAxNTFcIiwgX192dWVfb3B0aW9uc19fKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMzU4NDAxNTFcIiwgX192dWVfb3B0aW9uc19fKVxuICB9XG59KSgpfVxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBjaGlwLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jaGlwLnZ1ZSIsIjx0ZW1wbGF0ZT5cbiAgPHNwYW4gY2xhc3M9XCJtZGwtY2hpcFwiIDpjbGFzcz1cImNoaXBDbGFzc2VzXCI+XG4gICAgPHNsb3QgbmFtZT1cImNoaXAtY29udGFjdFwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJtZGwtY2hpcF9fY29udGFjdCBtZGwtY29sb3ItLXRlYWwgbWRsLWNvbG9yLXRleHQtLXdoaXRlXCIgdi1pZj1cImNvbnRhY3RcIj57eyBjb250YWN0IH19PC9zcGFuPlxuICAgICAgPGltZyBjbGFzcz1cIm1kbC1jaGlwX19jb250YWN0XCIgdi1pZj1cImNvbnRhY3RJbWFnZVwiIDpzcmM9XCJjb250YWN0SW1hZ2VcIi8+XG4gICAgPC9zbG90PlxuXG4gICAgPHNwYW4gY2xhc3M9XCJtZGwtY2hpcF9fdGV4dFwiPlxuICAgICAgPHNsb3Q+PC9zbG90PlxuICAgIDwvc3Bhbj5cblxuICAgIDxhIGhyZWY9XCIjXCIgQGNsaWNrLnByZXZlbnQ9XCIkZW1pdCgnZGVsZXRlJylcIiBjbGFzcz1cIm1kbC1jaGlwX19hY3Rpb25cIiB2LWlmPVwiZGVsZXRhYmxlXCI+XG4gICAgICA8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+e3sgZGVsZXRlSWNvbiB9fTwvaT5cbiAgICA8L2E+XG4gIDwvc3Bhbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkZWxldGFibGU6ICEhdGhpcy5fZXZlbnRzLmRlbGV0ZVxuICAgIH1cbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIGhhc0NvbnRhY3QgKCkge1xuICAgICAgcmV0dXJuIHRoaXMuY29udGFjdCB8fCB0aGlzLmNvbnRhY3RJbWFnZVxuICAgIH0sXG4gICAgY2hpcENsYXNzZXMgKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJ21kbC1jaGlwLS1jb250YWN0JzogdGhpcy5oYXNDb250YWN0LFxuICAgICAgICAnbWRsLWNoaXAtLWRlbGV0YWJsZSc6IHRoaXMuZGVsZXRhYmxlXG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHByb3BzOiB7XG4gICAgZGVsZXRlSWNvbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2NhbmNlbCdcbiAgICB9LFxuICAgIGNvbnRhY3RJbWFnZTogU3RyaW5nLFxuICAgIGNvbnRhY3Q6IFN0cmluZ1xuICB9XG59XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY2hpcC52dWU/YWNmMjMxYTQiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWRsLWNoaXBcIixcbiAgICBjbGFzczogX3ZtLmNoaXBDbGFzc2VzXG4gIH0sIFtfdm0uX3QoXCJjaGlwLWNvbnRhY3RcIiwgWyhfdm0uY29udGFjdCkgPyBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZGwtY2hpcF9fY29udGFjdCBtZGwtY29sb3ItLXRlYWwgbWRsLWNvbG9yLXRleHQtLXdoaXRlXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmNvbnRhY3QpKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIChfdm0uY29udGFjdEltYWdlKSA/IF9jKCdpbWcnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWRsLWNoaXBfX2NvbnRhY3RcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcmNcIjogX3ZtLmNvbnRhY3RJbWFnZVxuICAgIH1cbiAgfSkgOiBfdm0uX2UoKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZGwtY2hpcF9fdGV4dFwiXG4gIH0sIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSwgMiksIF92bS5fdihcIiBcIiksIChfdm0uZGVsZXRhYmxlKSA/IF9jKCdhJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kbC1jaGlwX19hY3Rpb25cIixcbiAgICBhdHRyczoge1xuICAgICAgXCJocmVmXCI6IFwiI1wiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF92bS4kZW1pdCgnZGVsZXRlJylcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtYXRlcmlhbC1pY29uc1wiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5kZWxldGVJY29uKSldKV0pIDogX3ZtLl9lKCldLCAyKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0zNTg0MDE1MVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMzU4NDAxNTEhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9jaGlwLnZ1ZVxuLy8gbW9kdWxlIGlkID0gOTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vbGlzdC52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTExNzllMjNhIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2xpc3QudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIi9Vc2Vycy9vei9zcmMvbWF0ZXJpYWwtY29tcG9uZW50cy9zcmMvbGlzdC9saXN0LnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMTE3OWUyM2FcIiwgX192dWVfb3B0aW9uc19fKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMTE3OWUyM2FcIiwgX192dWVfb3B0aW9uc19fKVxuICB9XG59KSgpfVxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBsaXN0LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saXN0L2xpc3QudnVlIiwiPHRlbXBsYXRlPlxuICAgIDx1bCBjbGFzcz1cIm1kbC1saXN0XCI+XG4gICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICA8L3VsPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7fVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbGlzdC52dWU/MzQ2MTcwNWUiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ3VsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kbC1saXN0XCJcbiAgfSwgW192bS5fdChcImRlZmF1bHRcIildLCAyKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0xMTc5ZTIzYVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMTE3OWUyM2EhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9saXN0L2xpc3QudnVlXG4vLyBtb2R1bGUgaWQgPSA5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9saXN0SXRlbS52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LWRkZDE0MjI2IXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2xpc3RJdGVtLnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCIvVXNlcnMvb3ovc3JjL21hdGVyaWFsLWNvbXBvbmVudHMvc3JjL2xpc3QvbGlzdEl0ZW0udnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1kZGQxNDIyNlwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi1kZGQxNDIyNlwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH1cbn0pKCl9XG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGxpc3RJdGVtLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saXN0L2xpc3RJdGVtLnZ1ZSIsIjx0ZW1wbGF0ZT5cbiAgICA8bGkgY2xhc3M9XCJtZGwtbGlzdF9faXRlbVwiIDpjbGFzcz1cImxpQ2xhc3Nlc1wiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cIm1kbC1saXN0X19pdGVtLXByaW1hcnktY29udGVudFwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiIDpjbGFzcz1cImNzc0NsYXNzZXNcIiB2LWlmPVwiaWNvbiB8fCBpY29uQXZhdGFyXCI+e3tzaG93SWNvbn19PC9pPlxuICAgICAgICAgICAgPHNwYW4gdi1pZj1cImljb25BdmF0YXJcIj5cbiAgICAgICAgICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICAgIDxzbG90IHYtZWxzZT48L3Nsb3Q+XG5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWRsLWxpc3RfX2l0ZW0tc3ViLXRpdGxlXCIgdi1pZj1cInN1YlRpdGxlXCI+e3tzdWJUaXRsZX19PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtZGwtbGlzdF9faXRlbS10ZXh0LWJvZHlcIiB2LWlmPVwidGV4dFwiPnt7dGV4dH19PC9zcGFuPlxuICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJtZGwtbGlzdF9faXRlbS1zZWNvbmRhcnktY29udGVudFwiPlxuICAgICAgICAgICAgPHNsb3QgbmFtZT1cImFjdGlvblwiPjwvc2xvdD5cbiAgICAgICAgPC9zcGFuPlxuICAgIDwvbGk+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0e1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgaWNvbjogU3RyaW5nLFxuICAgICAgICAgICAgaWNvbkF2YXRhcjogU3RyaW5nLFxuICAgICAgICAgICAgYWN0aW9uSWNvbjogU3RyaW5nLFxuICAgICAgICAgICAgdGV4dDogW1N0cmluZywgTnVtYmVyXSxcbiAgICAgICAgICAgIHN1YlRpdGxlOiBbU3RyaW5nLCBOdW1iZXJdLFxuICAgICAgICB9LFxuXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBzaG93SWNvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pY29uICYmICF0aGlzLmljb25BdmF0YXIgPyB0aGlzLmljb24gOiB0aGlzLmljb25BdmF0YXI7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBjc3NDbGFzc2VzKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICdtZGwtbGlzdF9faXRlbS1pY29uJzogISF0aGlzLmljb24sXG4gICAgICAgICAgICAgICAgICAgICdtZGwtbGlzdF9faXRlbS1hdmF0YXInOiAhIXRoaXMuaWNvbkF2YXRhciAmJiAhdGhpcy5pY29uLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGxpQ2xhc3NlcygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAnbWRsLWxpc3RfX2l0ZW0tLXRocmVlLWxpbmUnOiAhIXRoaXMudGV4dCxcbiAgICAgICAgICAgICAgICAgICAgJ21kbC1saXN0X19pdGVtLS10d28tbGluZSc6ICEhdGhpcy5zdWJUaXRsZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBkYXRhKCl7XG4gICAgICAgICAgICByZXR1cm4ge1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbGlzdEl0ZW0udnVlP2Q0MGI2NDJhIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdsaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZGwtbGlzdF9faXRlbVwiLFxuICAgIGNsYXNzOiBfdm0ubGlDbGFzc2VzXG4gIH0sIFtfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZGwtbGlzdF9faXRlbS1wcmltYXJ5LWNvbnRlbnRcIlxuICB9LCBbKF92bS5pY29uIHx8IF92bS5pY29uQXZhdGFyKSA/IF9jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1hdGVyaWFsLWljb25zXCIsXG4gICAgY2xhc3M6IF92bS5jc3NDbGFzc2VzXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5zaG93SWNvbikpXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgKF92bS5pY29uQXZhdGFyKSA/IF9jKCdzcGFuJywgW192bS5fdChcImRlZmF1bHRcIildLCAyKSA6IF92bS5fdChcImRlZmF1bHRcIiksIF92bS5fdihcIiBcIiksIChfdm0uc3ViVGl0bGUpID8gX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWRsLWxpc3RfX2l0ZW0tc3ViLXRpdGxlXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnN1YlRpdGxlKSldKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLnRleHQpID8gX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWRsLWxpc3RfX2l0ZW0tdGV4dC1ib2R5XCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnRleHQpKV0pIDogX3ZtLl9lKCldLCAyKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWRsLWxpc3RfX2l0ZW0tc2Vjb25kYXJ5LWNvbnRlbnRcIlxuICB9LCBbX3ZtLl90KFwiYWN0aW9uXCIpXSwgMildKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi1kZGQxNDIyNlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtZGRkMTQyMjYhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9saXN0L2xpc3RJdGVtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gOTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==