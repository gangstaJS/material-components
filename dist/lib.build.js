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
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// components import
	var components = {
	  MTextfield: _textfield2.default,
	  MButton: _button2.default
	};
	
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
	__vue_options__.__file = "/Users/oz/src/material-components/src/text-fields/textfield.vue";
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
	      hotAPI.createRecord("data-v-7e8eb1fc", __vue_options__);
	    } else {
	      hotAPI.reload("data-v-7e8eb1fc", __vue_options__);
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
	     require("vue-hot-reload-api").rerender("data-v-7e8eb1fc", module.exports)
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

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA4NmY5Y2YyMWVmNTk0YmMwMjllZCIsIndlYnBhY2s6Ly8vLi9zcmMvbGliLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXJlY3RpdmVzL3NldHVwLW1kbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGV4dC1maWVsZHMvdGV4dGZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly8vdGV4dGZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdGV4dC1maWVsZHMvdGV4dGZpZWxkLnZ1ZT83YzIxIiwid2VicGFjazovLy8uL3NyYy9idXR0b24udnVlIiwid2VicGFjazovLy9idXR0b24udnVlIiwid2VicGFjazovLy8uL3NyYy9idXR0b24udnVlPzY1YTgiXSwibmFtZXMiOlsiY29tcG9uZW50cyIsIk1UZXh0ZmllbGQiLCJNQnV0dG9uIiwiZGlyZWN0aXZlcyIsIlNldHVwTWRsIiwibW9kdWxlIiwiZXhwb3J0cyIsImluc3RhbGwiLCJWdWUiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsIm5hbWUiLCJjb21wb25lbnQiLCJkaXJlY3RpdmUiLCJzZXR1cCIsImVsIiwiY29tcG9uZW50SGFuZGxlciIsInVwZ3JhZGVFbGVtZW50cyIsIl9fdnVlX2V4cG9ydHNfXyIsIl9fdnVlX29wdGlvbnNfXyIsIl9fdnVlX3N0eWxlc19fIiwicmVxdWlyZSIsIl9fdnVlX3RlbXBsYXRlX18iLCJkZWZhdWx0Iiwic29tZSIsImtleSIsImNvbnNvbGUiLCJlcnJvciIsIm9wdGlvbnMiLCJfX2ZpbGUiLCJyZW5kZXIiLCJzdGF0aWNSZW5kZXJGbnMiLCJob3RBUEkiLCJjb21wYXRpYmxlIiwiaG90IiwiYWNjZXB0IiwiZGF0YSIsImNyZWF0ZVJlY29yZCIsInJlbG9hZCIsImZ1bmN0aW9uYWwiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FB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RSxJQUFoQixFQUFzQjtBQUNwQkosY0FBT0ssWUFBUCxDQUFvQixpQkFBcEIsRUFBdUNsQixlQUF2QztBQUNELE1BRkQsTUFFTztBQUNMYSxjQUFPTSxNQUFQLENBQWMsaUJBQWQsRUFBaUNuQixlQUFqQztBQUNEO0FBQ0YsSUFWZ0I7QUFVWjtBQUNMLEtBQUlBLGdCQUFnQm9CLFVBQXBCLEVBQWdDO0FBQUNiLFdBQVFDLEtBQVIsQ0FBYyxrSUFBZDtBQUFrSjs7QUFFbkx2QixRQUFPQyxPQUFQLEdBQWlCYSxlQUFqQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCQTs7O0FBRUE7YUFDQTtlQUNBO2NBQ0E7VUFDQTthQUNBO2NBQ0E7b0JBQ0E7YUFDQTt5Q0FDQSx5Q0FDQSw0Q0FDQSw2Q0FFQTs7dUNBRUE7O3NDQUVBO3FDQUNBO2tDQUNBO29DQUNBO3NDQUNBO3FDQUNBOzZDQUNBO29DQUVBO0FBVEE7QUFVQTs2QkFDQTtnREFDQTtBQUVBO0FBaEJBOytCQWlCQTswQ0FDQTtBQUNBO0FBbENBLEc7Ozs7OztBQ1ZBLGlCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0EsSUFBRztBQUNILEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFIiwiZmlsZSI6ImxpYi5idWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlZ1ZVJldXNhYmxlTWF0ZXJpYWxDb21wb25lbnRzXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlZ1ZVJldXNhYmxlTWF0ZXJpYWxDb21wb25lbnRzXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDg2ZjljZjIxZWY1OTRiYzAyOWVkIiwiaW1wb3J0IFNldHVwTWRsIGZyb20gJy4vZGlyZWN0aXZlcy9zZXR1cC1tZGwnO1xuXG4vLyBjb21wb25lbnRzIGltcG9ydFxuaW1wb3J0IE1UZXh0ZmllbGQgZnJvbSAnLi90ZXh0LWZpZWxkcy90ZXh0ZmllbGQudnVlJztcbmltcG9ydCBNQnV0dG9uIGZyb20gJy4vYnV0dG9uLnZ1ZSc7XG5cbmNvbnN0IGNvbXBvbmVudHMgPSB7XG4gIE1UZXh0ZmllbGQsXG4gIE1CdXR0b25cbn1cblxuY29uc3QgZGlyZWN0aXZlcyA9IHtcbiAgU2V0dXBNZGxcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGluc3RhbGwgKFZ1ZSkge1xuICAgIE9iamVjdC5rZXlzKGNvbXBvbmVudHMpLmZvckVhY2goKG5hbWUpID0+IFZ1ZS5jb21wb25lbnQobmFtZSwgY29tcG9uZW50c1tuYW1lXSkpO1xuICAgIE9iamVjdC5rZXlzKGRpcmVjdGl2ZXMpLmZvckVhY2goKG5hbWUpID0+IFZ1ZS5kaXJlY3RpdmUobmFtZSwgZGlyZWN0aXZlc1tuYW1lXSkpO1xuICB9XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIHNldHVwIChlbCkge1xuICAgIGNvbXBvbmVudEhhbmRsZXIudXBncmFkZUVsZW1lbnRzKGVsKVxuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RpcmVjdGl2ZXMvc2V0dXAtbWRsLmpzIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vdGV4dGZpZWxkLnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtN2U4ZWIxZmMhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vdGV4dGZpZWxkLnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCIvVXNlcnMvb3ovc3JjL21hdGVyaWFsLWNvbXBvbmVudHMvc3JjL3RleHQtZmllbGRzL3RleHRmaWVsZC52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTdlOGViMWZjXCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTdlOGViMWZjXCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfVxufSkoKX1cbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gdGV4dGZpZWxkLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy90ZXh0LWZpZWxkcy90ZXh0ZmllbGQudnVlIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJtZGwtdGV4dGZpZWxkIG1kbC1qcy10ZXh0ZmllbGRcIiA6Y2xhc3M9XCJ7J21kbC10ZXh0ZmllbGQtLWZsb2F0aW5nLWxhYmVsJzogZmxvYXRMYWJlbCwgJ21kbC10ZXh0ZmllbGQtLWV4cGFuZGFibGUnOiBleHBhbmRhYmxlLCAnaXMtZGlydHknOiBpc0RpcnR5LCAnaXMtZGlzYWJsZWQnOiBkaXNhYmxlZCB9XCI+XG4gICAgICAgIDxzbG90IHYtaWY9XCJleHBhbmRhYmxlXCIgbmFtZT1cImV4cGFuZGFibGUtYnV0dG9uXCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWJ1dHRvbi0taWNvblwiIDpmb3I9XCJpZFwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj57e2V4cGFuZGFibGV9fTwvaT5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvc2xvdD5cblxuICAgICAgICA8ZGl2IDpjbGFzcz1cInsnbWRsLXRleHRmaWVsZF9fZXhwYW5kYWJsZS1ob2xkZXInOiBleHBhbmRhYmxlfVwiPlxuXG4gICAgICAgICAgICA8c2xvdCB2LWlmPVwidGV4dGFyZWFcIiBuYW1lPVwidGV4dGFyZWFcIj5cbiAgICAgICAgPHRleHRhcmVhIGNsYXNzPVwibWRsLXRleHRmaWVsZF9faW5wdXRcIiByZWY9XCJmb2N1c1RhcmdldFwiIHR5cGU9XCJ0ZXh0XCIgOnZhbHVlPVwidmFsdWVcIiBAaW5wdXQ9XCJmaXJlSW5wdXRFdmVudFwiIDpyZXF1aXJlZD1cInJlcXVpcmVkXCIgOmlkPVwiaWRcIiA6cm93cz1cInJvd3NcIiA6bWF4bGVuZ3RoPVwibWF4bGVuZ3RoXCI+XG4gICAgICAgIDwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8L3Nsb3Q+XG5cbiAgICAgICAgICAgIDxzbG90IHYtZWxzZT1cInYtZWxzZVwiIG5hbWU9XCJpbnB1dFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cIm1kbC10ZXh0ZmllbGRfX2lucHV0XCIgcmVmPVwiZm9jdXNUYXJnZXRcIiA6dHlwZT1cInR5cGVcIiA6dmFsdWU9XCJ2YWx1ZVwiIEBpbnB1dD1cImZpcmVJbnB1dEV2ZW50XCIgOmlkPVwiaWRcIiA6cGF0dGVybj1cInBhdHRlcm5cIiA6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiIDpyZXF1aXJlZD1cInJlcXVpcmVkXCIgOnJlYWRvbmx5PVwicmVhZG9ubHlcIiA6YXV0b2NvbXBsZXRlPVwiYXV0b2NvbXBsZXRlXCIgOm1heGxlbmd0aD1cIm1heGxlbmd0aFwiLz5cbiAgICAgICAgICAgIDwvc2xvdD5cblxuICAgICAgICAgICAgPHNsb3QgbmFtZT1cImVycm9yXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibWRsLXRleHRmaWVsZF9fZXJyb3JcIiB2LWlmPVwiZXJyb3JcIj57e2Vycm9yfX08L2xhYmVsPlxuICAgICAgICAgICAgPC9zbG90PlxuXG4gICAgICAgICAgICA8c2xvdCBuYW1lPVwibGFiZWxcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJtZGwtdGV4dGZpZWxkX19sYWJlbFwiIHYtaWY9XCJzaG93TGFiZWxcIiA6Zm9yPVwiaWRcIj57e3Nob3dMYWJlbH19PC9sYWJlbD5cbiAgICAgICAgICAgIDwvc2xvdD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczoge1xuICAgIGF1dG9jb21wbGV0ZTogU3RyaW5nLFxuICAgIG1heGxlbmd0aDoge1xuICAgICAgcmVxdWlyZWQ6IGZhbHNlXG4gICAgfSxcblxuICAgIGV4cGFuZGFibGU6IFN0cmluZyxcbiAgICB0eXBlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAndGV4dCdcbiAgICB9LFxuXG4gICAgcm93czoge1xuICAgICAgcmVxdWlyZWQ6IGZhbHNlXG4gICAgfSxcblxuICAgIGlkOiBTdHJpbmcsXG5cbiAgICB2YWx1ZToge1xuICAgICAgcmVxdWlyZWQ6IGZhbHNlXG4gICAgfSxcblxuICAgIGRpc2FibGVkOiB7XG4gICAgICB0eXBlOiBbQm9vbGVhbiwgU3RyaW5nXSxcbiAgICAgIGZpbGw6IHRydWUsXG4gICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG5cbiAgICByZXF1aXJlZDoge1xuICAgICAgdHlwZTogW0Jvb2xlYW4sIFN0cmluZ10sXG4gICAgICBmaWxsOiB0cnVlLFxuICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9LFxuXG4gICAgcmVhZG9ubHk6IHtcbiAgICAgIHR5cGU6IFtCb29sZWFuLCBTdHJpbmddLFxuICAgICAgZmlsbDogdHJ1ZSxcbiAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfSxcblxuICAgIGxhYmVsOiBTdHJpbmcsXG4gICAgcGF0dGVybjogU3RyaW5nLFxuICAgIGVycm9yOiBTdHJpbmcsXG4gICAgdGV4dGFyZWE6IEJvb2xlYW4sXG4gICAgZmxvYXRMYWJlbDogW0Jvb2xlYW4sIFN0cmluZ11cbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIHNob3dMYWJlbCAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5sYWJlbCB8fCB0aGlzLmZsb2F0TGFiZWxcbiAgICB9LFxuICAgIGlzRGlydHkgKCkge1xuICAgICAgcmV0dXJuICcnICsgdGhpcy52YWx1ZVxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGZpcmVJbnB1dEV2ZW50OiBmdW5jdGlvbihldmVudCkge1xuICAgICAgdGhpcy4kZW1pdCgnaW5wdXQnLCBldmVudC50YXJnZXQudmFsdWUpXG4gICAgfSxcbiAgICBmb2N1cygpIHtcbiAgICAgIHRoaXMuJHJlZnMuZm9jdXNUYXJnZXQuZm9jdXMoKVxuICAgICAgcmV0dXJuIHRoaXNcbiAgICB9LFxuXG4gICAgc2VsZWN0KCkge1xuICAgICAgdGhpcy4kcmVmcy5mb2N1c1RhcmdldC5zZWxlY3QoKVxuICAgICAgcmV0dXJuIHRoaXNcbiAgICB9LFxuXG4gICAgYmx1cigpIHtcbiAgICAgIHRoaXMuJHJlZnMuZm9jdXNUYXJnZXQuYmx1cigpXG4gICAgICByZXR1cm4gdGhpc1xuICAgIH1cbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICBjb21wb25lbnRIYW5kbGVyLnVwZ3JhZGVFbGVtZW50KHRoaXMuJGVsKVxuICB9XG59XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB0ZXh0ZmllbGQudnVlPzdiYzEwOGQ0IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWRsLXRleHRmaWVsZCBtZGwtanMtdGV4dGZpZWxkXCIsXG4gICAgY2xhc3M6IHtcbiAgICAgICdtZGwtdGV4dGZpZWxkLS1mbG9hdGluZy1sYWJlbCc6IF92bS5mbG9hdExhYmVsLCAnbWRsLXRleHRmaWVsZC0tZXhwYW5kYWJsZSc6IF92bS5leHBhbmRhYmxlLCAnaXMtZGlydHknOiBfdm0uaXNEaXJ0eSwgJ2lzLWRpc2FibGVkJzogX3ZtLmRpc2FibGVkXG4gICAgfVxuICB9LCBbKF92bS5leHBhbmRhYmxlKSA/IF92bS5fdChcImV4cGFuZGFibGUtYnV0dG9uXCIsIFtfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uIG1kbC1idXR0b24tLWljb25cIixcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogX3ZtLmlkXG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWF0ZXJpYWwtaWNvbnNcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uZXhwYW5kYWJsZSkpXSldKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgY2xhc3M6IHtcbiAgICAgICdtZGwtdGV4dGZpZWxkX19leHBhbmRhYmxlLWhvbGRlcic6IF92bS5leHBhbmRhYmxlXG4gICAgfVxuICB9LCBbKF92bS50ZXh0YXJlYSkgPyBfdm0uX3QoXCJ0ZXh0YXJlYVwiLCBbX2MoJ3RleHRhcmVhJywge1xuICAgIHJlZjogXCJmb2N1c1RhcmdldFwiLFxuICAgIHN0YXRpY0NsYXNzOiBcIm1kbC10ZXh0ZmllbGRfX2lucHV0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwicmVxdWlyZWRcIjogX3ZtLnJlcXVpcmVkLFxuICAgICAgXCJpZFwiOiBfdm0uaWQsXG4gICAgICBcInJvd3NcIjogX3ZtLnJvd3MsXG4gICAgICBcIm1heGxlbmd0aFwiOiBfdm0ubWF4bGVuZ3RoXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0udmFsdWVcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IF92bS5maXJlSW5wdXRFdmVudFxuICAgIH1cbiAgfSldKSA6IF92bS5fdChcImlucHV0XCIsIFtfYygnaW5wdXQnLCB7XG4gICAgcmVmOiBcImZvY3VzVGFyZ2V0XCIsXG4gICAgc3RhdGljQ2xhc3M6IFwibWRsLXRleHRmaWVsZF9faW5wdXRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IF92bS50eXBlLFxuICAgICAgXCJpZFwiOiBfdm0uaWQsXG4gICAgICBcInBhdHRlcm5cIjogX3ZtLnBhdHRlcm4sXG4gICAgICBcImRpc2FibGVkXCI6IF92bS5kaXNhYmxlZCxcbiAgICAgIFwicmVxdWlyZWRcIjogX3ZtLnJlcXVpcmVkLFxuICAgICAgXCJyZWFkb25seVwiOiBfdm0ucmVhZG9ubHksXG4gICAgICBcImF1dG9jb21wbGV0ZVwiOiBfdm0uYXV0b2NvbXBsZXRlLFxuICAgICAgXCJtYXhsZW5ndGhcIjogX3ZtLm1heGxlbmd0aFxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLnZhbHVlXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBfdm0uZmlyZUlucHV0RXZlbnRcbiAgICB9XG4gIH0pXSksIF92bS5fdihcIiBcIiksIF92bS5fdChcImVycm9yXCIsIFsoX3ZtLmVycm9yKSA/IF9jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZGwtdGV4dGZpZWxkX19lcnJvclwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5lcnJvcikpXSkgOiBfdm0uX2UoKV0pLCBfdm0uX3YoXCIgXCIpLCBfdm0uX3QoXCJsYWJlbFwiLCBbKF92bS5zaG93TGFiZWwpID8gX2MoJ2xhYmVsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kbC10ZXh0ZmllbGRfX2xhYmVsXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IF92bS5pZFxuICAgIH1cbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnNob3dMYWJlbCkpXSkgOiBfdm0uX2UoKV0pXSwgMildLCAyKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi03ZThlYjFmY1wiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtN2U4ZWIxZmMhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy90ZXh0LWZpZWxkcy90ZXh0ZmllbGQudnVlXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xudmFyIF9fdnVlX3N0eWxlc19fID0ge31cblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2J1dHRvbi52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTMwNTk0OWY3IXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2J1dHRvbi52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiL1VzZXJzL296L3NyYy9tYXRlcmlhbC1jb21wb25lbnRzL3NyYy9idXR0b24udnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0zMDU5NDlmN1wiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0zMDU5NDlmN1wiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH1cbn0pKCl9XG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGJ1dHRvbi52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYnV0dG9uLnZ1ZSIsIjx0ZW1wbGF0ZT5cbiAgICA8YnV0dG9uIGNsYXNzPVwibWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uXCIgOmNsYXNzPVwiY3NzQ2xhc3Nlc1wiIDpkaXNhYmxlZD1cImRpc2FibGVkXCI+XG4gICAgICAgIDxzbG90PlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiIHYtaWY9XCJpc0ljb1wiID57e2ljb259fTwvaT5cbiAgICAgICAgPC9zbG90PlxuICAgIDwvYnV0dG9uPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IHtcbiAgICByaXBwbGU6IEJvb2xlYW4sXG4gICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgbWluaUZhYjogQm9vbGVhbixcbiAgICBmYWI6IEJvb2xlYW4sXG4gICAgcmFpc2VkOiBCb29sZWFuLFxuICAgIGNvbG9yZWQ6IEJvb2xlYW4sXG4gICAgaWNvbjogW1N0cmluZywgQm9vbGVhbl0sXG4gICAgYWNjZW50OiBCb29sZWFuLFxuICAgIG1pbmlGYWI6IEJvb2xlYW4sXG4gICAgZmFiOiBCb29sZWFuLFxuICAgIHJhaXNlZDogQm9vbGVhbixcbiAgICBwcmltYXJ5OiBCb29sZWFuLFxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGNzc0NsYXNzZXMoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAnbWRsLWpzLXJpcHBsZS1lZmZlY3QnOiB0aGlzLnJpcHBsZSxcbiAgICAgICAgJ21kbC1idXR0b24tLWNvbG9yZWQnOiB0aGlzLmNvbG9yZWQsXG4gICAgICAgICdtZGwtYnV0dG9uLS1pY29uJzogdGhpcy5pY29uLFxuICAgICAgICAnbWRsLWJ1dHRvbi0tYWNjZW50JzogdGhpcy5hY2NlbnQsXG4gICAgICAgICdtZGwtYnV0dG9uLS1taW5pLWZhYic6IHRoaXMubWluaUZhYixcbiAgICAgICAgJ21kbC1idXR0b24tLXByaW1hcnknOiB0aGlzLnByaW1hcnksXG4gICAgICAgICdtZGwtYnV0dG9uLS1mYWInOiB0aGlzLmZhYiB8fCB0aGlzLm1pbmlGYWIsXG4gICAgICAgICdtZGwtYnV0dG9uLS1yYWlzZWQnOiB0aGlzLnJhaXNlZCxcbiAgICAgIH1cbiAgICB9LFxuICAgIGlzSWNvKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaWNvbiAmJiB0eXBlb2YgdGhpcy5pY29uID09PSAnc3RyaW5nJ1xuICAgIH1cbiAgfSxcbiAgbW91bnRlZCAoKSB7XG4gICAgY29tcG9uZW50SGFuZGxlci51cGdyYWRlRWxlbWVudCh0aGlzLiRlbClcbiAgfVxufVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYnV0dG9uLnZ1ZT9jNzhlZGJkMiIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kbC1idXR0b24gbWRsLWpzLWJ1dHRvblwiLFxuICAgIGNsYXNzOiBfdm0uY3NzQ2xhc3NlcyxcbiAgICBhdHRyczoge1xuICAgICAgXCJkaXNhYmxlZFwiOiBfdm0uZGlzYWJsZWRcbiAgICB9XG4gIH0sIFtfdm0uX3QoXCJkZWZhdWx0XCIsIFsoX3ZtLmlzSWNvKSA/IF9jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1hdGVyaWFsLWljb25zXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmljb24pKV0pIDogX3ZtLl9lKCldKV0sIDIpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTMwNTk0OWY3XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0zMDU5NDlmNyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2J1dHRvbi52dWVcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==