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
/******/ ([
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
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var components = {
	  MTextfield: _textfield2.default,
	  MButton: _button2.default,
	  MSnackbar: _snackbar2.default
	};
	
	// components import
	
	
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

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBjNWZlMDBkNGUxNjdhY2Q5ZmE4MiIsIndlYnBhY2s6Ly8vLi9zcmMvbGliLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXJlY3RpdmVzL3NldHVwLW1kbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGV4dGZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly8vdGV4dGZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdGV4dGZpZWxkLnZ1ZT8xYmIzIiwid2VicGFjazovLy8uL3NyYy9idXR0b24udnVlIiwid2VicGFjazovLy9idXR0b24udnVlIiwid2VicGFjazovLy8uL3NyYy9idXR0b24udnVlPzY1YTgiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NuYWNrYmFyLnZ1ZSIsIndlYnBhY2s6Ly8vc25hY2tiYXIudnVlIiwid2VicGFjazovLy8uL3NyYy9zbmFja2Jhci52dWU/NGEyMyJdLCJuYW1lcyI6WyJjb21wb25lbnRzIiwiTVRleHRmaWVsZCIsIk1CdXR0b24iLCJNU25hY2tiYXIiLCJkaXJlY3RpdmVzIiwiU2V0dXBNZGwiLCJtb2R1bGUiLCJleHBvcnRzIiwiaW5zdGFsbCIsIlZ1ZSIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwibmFtZSIsImNvbXBvbmVudCIsImRpcmVjdGl2ZSIsInNldHVwIiwiZWwiLCJjb21wb25lbnRIYW5kbGVyIiwidXBncmFkZUVsZW1lbnRzIiwiX192dWVfZXhwb3J0c19fIiwiX192dWVfb3B0aW9uc19fIiwiX192dWVfc3R5bGVzX18iLCJyZXF1aXJlIiwiX192dWVfdGVtcGxhdGVfXyIsImRlZmF1bHQiLCJzb21lIiwia2V5IiwiY29uc29sZSIsImVycm9yIiwib3B0aW9ucyIsIl9fZmlsZSIsInJlbmRlciIsInN0YXRpY1JlbmRlckZucyIsImhvdEFQSSIsImNvbXBhdGlibGUiLCJob3QiLCJhY2Nl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LFFBQU9DLE9BQVAsR0FBaUJhLGVBQWpCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBOzs7OzthQUlBO2lCQUNBO29DQUNBO3FCQUNBO0FBRUE7QUFOQTs7YUFRQTtpQkFJQTtBQUxBO0FBUkE7OytCQWNBLENBRUE7O0FBQ0E7OytDQUVBOztvRUFDQTsrQ0FDQTtBQUNBO0FBQ0E7QUF4QkEsRzs7Ozs7O0FDVEEsaUJBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBLEVBQUMsK0JBQStCLGFBQWEsMEJBQTBCO0FBQ3ZFO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEUiLCJmaWxlIjoibGliLmJ1aWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiVnVlUmV1c2FibGVNYXRlcmlhbENvbXBvbmVudHNcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiVnVlUmV1c2FibGVNYXRlcmlhbENvbXBvbmVudHNcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYzVmZTAwZDRlMTY3YWNkOWZhODIiLCJpbXBvcnQgU2V0dXBNZGwgZnJvbSAnLi9kaXJlY3RpdmVzL3NldHVwLW1kbCc7XG5cbi8vIGNvbXBvbmVudHMgaW1wb3J0XG5pbXBvcnQgTVRleHRmaWVsZCBmcm9tICcuL3RleHRmaWVsZC52dWUnO1xuaW1wb3J0IE1CdXR0b24gZnJvbSAnLi9idXR0b24udnVlJztcbmltcG9ydCBNU25hY2tiYXIgZnJvbSAnLi9zbmFja2Jhci52dWUnO1xuXG5jb25zdCBjb21wb25lbnRzID0ge1xuICBNVGV4dGZpZWxkLFxuICBNQnV0dG9uLFxuICBNU25hY2tiYXIsXG59XG5cbmNvbnN0IGRpcmVjdGl2ZXMgPSB7XG4gIFNldHVwTWRsXG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpbnN0YWxsIChWdWUpIHtcbiAgICBPYmplY3Qua2V5cyhjb21wb25lbnRzKS5mb3JFYWNoKChuYW1lKSA9PiBWdWUuY29tcG9uZW50KG5hbWUsIGNvbXBvbmVudHNbbmFtZV0pKTtcbiAgICBPYmplY3Qua2V5cyhkaXJlY3RpdmVzKS5mb3JFYWNoKChuYW1lKSA9PiBWdWUuZGlyZWN0aXZlKG5hbWUsIGRpcmVjdGl2ZXNbbmFtZV0pKTtcbiAgfVxufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGliLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBzZXR1cCAoZWwpIHtcbiAgICBjb21wb25lbnRIYW5kbGVyLnVwZ3JhZGVFbGVtZW50cyhlbClcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kaXJlY3RpdmVzL3NldHVwLW1kbC5qcyIsInZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xudmFyIF9fdnVlX3N0eWxlc19fID0ge31cblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3RleHRmaWVsZC52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTExZTZmZmI4IXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3RleHRmaWVsZC52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiL1VzZXJzL296L3NyYy9tYXRlcmlhbC1jb21wb25lbnRzL3NyYy90ZXh0ZmllbGQudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0xMWU2ZmZiOFwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0xMWU2ZmZiOFwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH1cbn0pKCl9XG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHRleHRmaWVsZC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdGV4dGZpZWxkLnZ1ZSIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwibWRsLXRleHRmaWVsZCBtZGwtanMtdGV4dGZpZWxkXCIgOmNsYXNzPVwieydtZGwtdGV4dGZpZWxkLS1mbG9hdGluZy1sYWJlbCc6IGZsb2F0TGFiZWwsICdtZGwtdGV4dGZpZWxkLS1leHBhbmRhYmxlJzogZXhwYW5kYWJsZSwgJ2lzLWRpcnR5JzogaXNEaXJ0eSwgJ2lzLWRpc2FibGVkJzogZGlzYWJsZWQgfVwiPlxuICAgICAgICA8c2xvdCB2LWlmPVwiZXhwYW5kYWJsZVwiIG5hbWU9XCJleHBhbmRhYmxlLWJ1dHRvblwiPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uIG1kbC1idXR0b24tLWljb25cIiA6Zm9yPVwiaWRcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+e3tleHBhbmRhYmxlfX08L2k+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L3Nsb3Q+XG5cbiAgICAgICAgPGRpdiA6Y2xhc3M9XCJ7J21kbC10ZXh0ZmllbGRfX2V4cGFuZGFibGUtaG9sZGVyJzogZXhwYW5kYWJsZX1cIj5cblxuICAgICAgICAgICAgPHNsb3Qgdi1pZj1cInRleHRhcmVhXCIgbmFtZT1cInRleHRhcmVhXCI+XG4gICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cIm1kbC10ZXh0ZmllbGRfX2lucHV0XCIgcmVmPVwiZm9jdXNUYXJnZXRcIiB0eXBlPVwidGV4dFwiIDp2YWx1ZT1cInZhbHVlXCIgQGlucHV0PVwiZmlyZUlucHV0RXZlbnRcIiA6cmVxdWlyZWQ9XCJyZXF1aXJlZFwiIDppZD1cImlkXCIgOnJvd3M9XCJyb3dzXCIgOm1heGxlbmd0aD1cIm1heGxlbmd0aFwiPlxuICAgICAgICA8L3RleHRhcmVhPlxuICAgICAgICAgICAgPC9zbG90PlxuXG4gICAgICAgICAgICA8c2xvdCB2LWVsc2U9XCJ2LWVsc2VcIiBuYW1lPVwiaW5wdXRcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJtZGwtdGV4dGZpZWxkX19pbnB1dFwiIHJlZj1cImZvY3VzVGFyZ2V0XCIgOnR5cGU9XCJ0eXBlXCIgOnZhbHVlPVwidmFsdWVcIiBAaW5wdXQ9XCJmaXJlSW5wdXRFdmVudFwiIDppZD1cImlkXCIgOnBhdHRlcm49XCJwYXR0ZXJuXCIgOmRpc2FibGVkPVwiZGlzYWJsZWRcIiA6cmVxdWlyZWQ9XCJyZXF1aXJlZFwiIDpyZWFkb25seT1cInJlYWRvbmx5XCIgOmF1dG9jb21wbGV0ZT1cImF1dG9jb21wbGV0ZVwiIDptYXhsZW5ndGg9XCJtYXhsZW5ndGhcIi8+XG4gICAgICAgICAgICA8L3Nsb3Q+XG5cbiAgICAgICAgICAgIDxzbG90IG5hbWU9XCJlcnJvclwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cIm1kbC10ZXh0ZmllbGRfX2Vycm9yXCIgdi1pZj1cImVycm9yXCI+e3tlcnJvcn19PC9sYWJlbD5cbiAgICAgICAgICAgIDwvc2xvdD5cblxuICAgICAgICAgICAgPHNsb3QgbmFtZT1cImxhYmVsXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibWRsLXRleHRmaWVsZF9fbGFiZWxcIiB2LWlmPVwic2hvd0xhYmVsXCIgOmZvcj1cImlkXCI+e3tzaG93TGFiZWx9fTwvbGFiZWw+XG4gICAgICAgICAgICA8L3Nsb3Q+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IHtcbiAgICBhdXRvY29tcGxldGU6IFN0cmluZyxcbiAgICBtYXhsZW5ndGg6IHtcbiAgICAgIHJlcXVpcmVkOiBmYWxzZVxuICAgIH0sXG5cbiAgICBleHBhbmRhYmxlOiBTdHJpbmcsXG4gICAgdHlwZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ3RleHQnXG4gICAgfSxcblxuICAgIHJvd3M6IHtcbiAgICAgIHJlcXVpcmVkOiBmYWxzZVxuICAgIH0sXG5cbiAgICBpZDogU3RyaW5nLFxuXG4gICAgdmFsdWU6IHtcbiAgICAgIHJlcXVpcmVkOiBmYWxzZVxuICAgIH0sXG5cbiAgICBkaXNhYmxlZDoge1xuICAgICAgdHlwZTogW0Jvb2xlYW4sIFN0cmluZ10sXG4gICAgICBmaWxsOiB0cnVlLFxuICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9LFxuXG4gICAgcmVxdWlyZWQ6IHtcbiAgICAgIHR5cGU6IFtCb29sZWFuLCBTdHJpbmddLFxuICAgICAgZmlsbDogdHJ1ZSxcbiAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfSxcblxuICAgIHJlYWRvbmx5OiB7XG4gICAgICB0eXBlOiBbQm9vbGVhbiwgU3RyaW5nXSxcbiAgICAgIGZpbGw6IHRydWUsXG4gICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG5cbiAgICBsYWJlbDogU3RyaW5nLFxuICAgIHBhdHRlcm46IFN0cmluZyxcbiAgICBlcnJvcjogU3RyaW5nLFxuICAgIHRleHRhcmVhOiBCb29sZWFuLFxuICAgIGZsb2F0TGFiZWw6IFtCb29sZWFuLCBTdHJpbmddXG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBzaG93TGFiZWwgKCkge1xuICAgICAgcmV0dXJuIHRoaXMubGFiZWwgfHwgdGhpcy5mbG9hdExhYmVsXG4gICAgfSxcbiAgICBpc0RpcnR5ICgpIHtcbiAgICAgIHJldHVybiAnJyArIHRoaXMudmFsdWVcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBmaXJlSW5wdXRFdmVudDogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgIH0sXG4gICAgZm9jdXMoKSB7XG4gICAgICB0aGlzLiRyZWZzLmZvY3VzVGFyZ2V0LmZvY3VzKClcbiAgICAgIHJldHVybiB0aGlzXG4gICAgfSxcblxuICAgIHNlbGVjdCgpIHtcbiAgICAgIHRoaXMuJHJlZnMuZm9jdXNUYXJnZXQuc2VsZWN0KClcbiAgICAgIHJldHVybiB0aGlzXG4gICAgfSxcblxuICAgIGJsdXIoKSB7XG4gICAgICB0aGlzLiRyZWZzLmZvY3VzVGFyZ2V0LmJsdXIoKVxuICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgY29tcG9uZW50SGFuZGxlci51cGdyYWRlRWxlbWVudCh0aGlzLiRlbClcbiAgfVxufVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gdGV4dGZpZWxkLnZ1ZT83YmMxMDhkNCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kbC10ZXh0ZmllbGQgbWRsLWpzLXRleHRmaWVsZFwiLFxuICAgIGNsYXNzOiB7XG4gICAgICAnbWRsLXRleHRmaWVsZC0tZmxvYXRpbmctbGFiZWwnOiBfdm0uZmxvYXRMYWJlbCwgJ21kbC10ZXh0ZmllbGQtLWV4cGFuZGFibGUnOiBfdm0uZXhwYW5kYWJsZSwgJ2lzLWRpcnR5JzogX3ZtLmlzRGlydHksICdpcy1kaXNhYmxlZCc6IF92bS5kaXNhYmxlZFxuICAgIH1cbiAgfSwgWyhfdm0uZXhwYW5kYWJsZSkgPyBfdm0uX3QoXCJleHBhbmRhYmxlLWJ1dHRvblwiLCBbX2MoJ2xhYmVsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kbC1idXR0b24gbWRsLWpzLWJ1dHRvbiBtZGwtYnV0dG9uLS1pY29uXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IF92bS5pZFxuICAgIH1cbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1hdGVyaWFsLWljb25zXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmV4cGFuZGFibGUpKV0pXSldKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGNsYXNzOiB7XG4gICAgICAnbWRsLXRleHRmaWVsZF9fZXhwYW5kYWJsZS1ob2xkZXInOiBfdm0uZXhwYW5kYWJsZVxuICAgIH1cbiAgfSwgWyhfdm0udGV4dGFyZWEpID8gX3ZtLl90KFwidGV4dGFyZWFcIiwgW19jKCd0ZXh0YXJlYScsIHtcbiAgICByZWY6IFwiZm9jdXNUYXJnZXRcIixcbiAgICBzdGF0aWNDbGFzczogXCJtZGwtdGV4dGZpZWxkX19pbnB1dFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcInJlcXVpcmVkXCI6IF92bS5yZXF1aXJlZCxcbiAgICAgIFwiaWRcIjogX3ZtLmlkLFxuICAgICAgXCJyb3dzXCI6IF92bS5yb3dzLFxuICAgICAgXCJtYXhsZW5ndGhcIjogX3ZtLm1heGxlbmd0aFxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLnZhbHVlXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBfdm0uZmlyZUlucHV0RXZlbnRcbiAgICB9XG4gIH0pXSkgOiBfdm0uX3QoXCJpbnB1dFwiLCBbX2MoJ2lucHV0Jywge1xuICAgIHJlZjogXCJmb2N1c1RhcmdldFwiLFxuICAgIHN0YXRpY0NsYXNzOiBcIm1kbC10ZXh0ZmllbGRfX2lucHV0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBfdm0udHlwZSxcbiAgICAgIFwiaWRcIjogX3ZtLmlkLFxuICAgICAgXCJwYXR0ZXJuXCI6IF92bS5wYXR0ZXJuLFxuICAgICAgXCJkaXNhYmxlZFwiOiBfdm0uZGlzYWJsZWQsXG4gICAgICBcInJlcXVpcmVkXCI6IF92bS5yZXF1aXJlZCxcbiAgICAgIFwicmVhZG9ubHlcIjogX3ZtLnJlYWRvbmx5LFxuICAgICAgXCJhdXRvY29tcGxldGVcIjogX3ZtLmF1dG9jb21wbGV0ZSxcbiAgICAgIFwibWF4bGVuZ3RoXCI6IF92bS5tYXhsZW5ndGhcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS52YWx1ZVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogX3ZtLmZpcmVJbnB1dEV2ZW50XG4gICAgfVxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfdm0uX3QoXCJlcnJvclwiLCBbKF92bS5lcnJvcikgPyBfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWRsLXRleHRmaWVsZF9fZXJyb3JcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uZXJyb3IpKV0pIDogX3ZtLl9lKCldKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl90KFwibGFiZWxcIiwgWyhfdm0uc2hvd0xhYmVsKSA/IF9jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZGwtdGV4dGZpZWxkX19sYWJlbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBfdm0uaWRcbiAgICB9XG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5zaG93TGFiZWwpKV0pIDogX3ZtLl9lKCldKV0sIDIpXSwgMilcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMTFlNmZmYjhcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTExZTZmZmI4IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvdGV4dGZpZWxkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9idXR0b24udnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0zMDU5NDlmNyF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9idXR0b24udnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIi9Vc2Vycy9vei9zcmMvbWF0ZXJpYWwtY29tcG9uZW50cy9zcmMvYnV0dG9uLnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMzA1OTQ5ZjdcIiwgX192dWVfb3B0aW9uc19fKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMzA1OTQ5ZjdcIiwgX192dWVfb3B0aW9uc19fKVxuICB9XG59KSgpfVxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBidXR0b24udnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2J1dHRvbi52dWUiLCI8dGVtcGxhdGU+XG4gICAgPGJ1dHRvbiBjbGFzcz1cIm1kbC1idXR0b24gbWRsLWpzLWJ1dHRvblwiIDpjbGFzcz1cImNzc0NsYXNzZXNcIiA6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiPlxuICAgICAgICA8c2xvdD5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIiB2LWlmPVwiaXNJY29cIiA+e3tpY29ufX08L2k+XG4gICAgICAgIDwvc2xvdD5cbiAgICA8L2J1dHRvbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiB7XG4gICAgcmlwcGxlOiBCb29sZWFuLFxuICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgIG1pbmlGYWI6IEJvb2xlYW4sXG4gICAgZmFiOiBCb29sZWFuLFxuICAgIHJhaXNlZDogQm9vbGVhbixcbiAgICBjb2xvcmVkOiBCb29sZWFuLFxuICAgIGljb246IFtTdHJpbmcsIEJvb2xlYW5dLFxuICAgIGFjY2VudDogQm9vbGVhbixcbiAgICBtaW5pRmFiOiBCb29sZWFuLFxuICAgIGZhYjogQm9vbGVhbixcbiAgICByYWlzZWQ6IEJvb2xlYW4sXG4gICAgcHJpbWFyeTogQm9vbGVhbixcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBjc3NDbGFzc2VzKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJ21kbC1qcy1yaXBwbGUtZWZmZWN0JzogdGhpcy5yaXBwbGUsXG4gICAgICAgICdtZGwtYnV0dG9uLS1jb2xvcmVkJzogdGhpcy5jb2xvcmVkLFxuICAgICAgICAnbWRsLWJ1dHRvbi0taWNvbic6IHRoaXMuaWNvbixcbiAgICAgICAgJ21kbC1idXR0b24tLWFjY2VudCc6IHRoaXMuYWNjZW50LFxuICAgICAgICAnbWRsLWJ1dHRvbi0tbWluaS1mYWInOiB0aGlzLm1pbmlGYWIsXG4gICAgICAgICdtZGwtYnV0dG9uLS1wcmltYXJ5JzogdGhpcy5wcmltYXJ5LFxuICAgICAgICAnbWRsLWJ1dHRvbi0tZmFiJzogdGhpcy5mYWIgfHwgdGhpcy5taW5pRmFiLFxuICAgICAgICAnbWRsLWJ1dHRvbi0tcmFpc2VkJzogdGhpcy5yYWlzZWQsXG4gICAgICB9XG4gICAgfSxcbiAgICBpc0ljbygpIHtcbiAgICAgIHJldHVybiB0aGlzLmljb24gJiYgdHlwZW9mIHRoaXMuaWNvbiA9PT0gJ3N0cmluZydcbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQgKCkge1xuICAgIGNvbXBvbmVudEhhbmRsZXIudXBncmFkZUVsZW1lbnQodGhpcy4kZWwpXG4gIH1cbn1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGJ1dHRvbi52dWU/Yzc4ZWRiZDIiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZGwtYnV0dG9uIG1kbC1qcy1idXR0b25cIixcbiAgICBjbGFzczogX3ZtLmNzc0NsYXNzZXMsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZGlzYWJsZWRcIjogX3ZtLmRpc2FibGVkXG4gICAgfVxuICB9LCBbX3ZtLl90KFwiZGVmYXVsdFwiLCBbKF92bS5pc0ljbykgPyBfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtYXRlcmlhbC1pY29uc1wiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5pY29uKSldKSA6IF92bS5fZSgpXSldLCAyKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0zMDU5NDlmN1wiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMzA1OTQ5ZjchLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9idXR0b24udnVlXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xudmFyIF9fdnVlX3N0eWxlc19fID0ge31cblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3NuYWNrYmFyLnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMzIxYTUzMGEhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc25hY2tiYXIudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIi9Vc2Vycy9vei9zcmMvbWF0ZXJpYWwtY29tcG9uZW50cy9zcmMvc25hY2tiYXIudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0zMjFhNTMwYVwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0zMjFhNTMwYVwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH1cbn0pKCl9XG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHNuYWNrYmFyLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zbmFja2Jhci52dWUiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cIm1kbC1qcy1zbmFja2JhciBtZGwtc25hY2tiYXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1zbmFja2Jhcl9fdGV4dFwiPjwvZGl2PlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwibWRsLXNuYWNrYmFyX19hY3Rpb25cIiB0eXBlPVwiYnV0dG9uXCI+PC9idXR0b24+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczoge1xuICAgIGV2ZW50U291cmNlOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICBkZWZhdWx0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRyb290XG4gICAgICB9XG4gICAgfSxcbiAgICBkaXNwbGF5T246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgfSxcblxuICBjcmVhdGVkKCkge1xuICB9LFxuXG4gIG1vdW50ZWQoKSB7XG4gICAgY29tcG9uZW50SGFuZGxlci51cGdyYWRlRWxlbWVudCh0aGlzLiRlbCwgJ01hdGVyaWFsU25hY2tiYXInKTtcblxuICAgIHRoaXMuZXZlbnRTb3VyY2UuJG9uKHRoaXMuZGlzcGxheU9uLCAoc25hY2tiYXJDb25maWcpID0+IHtcbiAgICAgICAgdGhpcy4kZWwuTWF0ZXJpYWxTbmFja2Jhci5zaG93U25hY2tiYXIoc25hY2tiYXJDb25maWcpXG4gICAgfSlcbiAgfVxufVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNuYWNrYmFyLnZ1ZT81NmJhNjRlYSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfdm0uX20oMClcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kbC1qcy1zbmFja2JhciBtZGwtc25hY2tiYXJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZGwtc25hY2tiYXJfX3RleHRcIlxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZGwtc25hY2tiYXJfX2FjdGlvblwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJidXR0b25cIlxuICAgIH1cbiAgfSldKVxufV19XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTMyMWE1MzBhXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0zMjFhNTMwYSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL3NuYWNrYmFyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==