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
	
	var _input = __webpack_require__(2);
	
	var _input2 = _interopRequireDefault(_input);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var components = {
	  MaterialInput: _input2.default
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
	var __vue_template__ = __webpack_require__(5);
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
	__vue_options__.__file = "/Users/oz/src/material-components/src/text-fields/input.vue";
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
	      hotAPI.createRecord("data-v-d20f8242", __vue_options__);
	    } else {
	      hotAPI.reload("data-v-d20f8242", __vue_options__);
	    }
	  })();
	}
	if (__vue_options__.functional) {
	  console.error("[vue-loader] input.vue: functional components are not supported and should be defined in plain js files using render functions.");
	}
	
	module.exports = __vue_exports__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _textField = __webpack_require__(4);
	
	var _textField2 = _interopRequireDefault(_textField);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mounted: function mounted() {
	    componentHandler.upgradeElements(this.$el);
	  },
	
	  mixins: [_textField2.default]
	}; //
	//
	//
	//
	//
	//
	//

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _vm._m(0)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "mdl-textfield mdl-js-textfield"
	  }, [_c('input', {
	    staticClass: "mdl-textfield__input",
	    attrs: {
	      "type": "text",
	      "id": "sample1"
	    }
	  }), _vm._v(" "), _c('label', {
	    staticClass: "mdl-textfield__label",
	    attrs: {
	      "for": "sample1"
	    }
	  }, [_vm._v("Text...")])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-d20f8242", module.exports)
	  }
	}

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAyNGE2MThhNTIxYzc3OTMwYzRlZiIsIndlYnBhY2s6Ly8vLi9zcmMvbGliLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXJlY3RpdmVzL3NldHVwLW1kbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGV4dC1maWVsZHMvaW5wdXQudnVlIiwid2VicGFjazovLy9pbnB1dC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL21peGlucy90ZXh0LWZpZWxkLmpzIiwid2VicGFjazovLy8uL3NyYy90ZXh0LWZpZWxkcy9pbnB1dC52dWU/YmZkOSJdLCJuYW1lcyI6WyJjb21wb25lbnRzIiwiTWF0ZXJpYWxJbnB1dCIsImRpcmVjdGl2ZXMiLCJTZXR1cE1kbCIsIm1vZHVsZSIsImV4cG9ydHMiLCJpbnN0YWxsIiwiVnVlIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJuYW1lIiwiY29tcG9uZW50IiwiZGlyZWN0aXZlIiwic2V0dXAiLCJlbCIsImNvbXBvbmVudEhhbmRsZXIiLCJ1cGdyYWRlRWxlbWVudHMiLCJfX3Z1ZV9leHBvcnRzX18iLCJfX3Z1ZV9vcHRpb25zX18iLCJfX3Z1ZV9zdHlsZXNfXyIsInJlcXVpcmUiLCJfX3Z1ZV90ZW1wbGF0ZV9fIiwiZGVmYXVsdCIsInNvbWUiLCJrZXkiLCJjb25zb2xlIiwiZXJyb3IiLCJvcHRpb25zIiwiX19maWxlIiwicmVuZGVyIiwic3RhdGljUmVuZGVyRm5zIiwiaG90QVBJIiwiY29tcGF0aWJsZSIsImhvdCIsImFjY2VwdCIsImRhdGEiLCJjcmVhdGVSZWNvcmQiLCJyZWxvYWQiLCJmdW5jdGlvbmFsIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtB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Ozs7OytCQUVBOzJDQUNBO0FBQ0E7O1dBQ0E7QUFKQTs7Ozs7Ozs7Ozs7Ozs7Ozs7bUJDWGUsRTs7Ozs7O0FDQWYsaUJBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBLEVBQUMsK0JBQStCLGFBQWEsMEJBQTBCO0FBQ3ZFO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRSIsImZpbGUiOiJsaWIuYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJWdWVSZXVzYWJsZU1hdGVyaWFsQ29tcG9uZW50c1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJWdWVSZXVzYWJsZU1hdGVyaWFsQ29tcG9uZW50c1wiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAyNGE2MThhNTIxYzc3OTMwYzRlZiIsImltcG9ydCBTZXR1cE1kbCBmcm9tICcuL2RpcmVjdGl2ZXMvc2V0dXAtbWRsJztcblxuLy8gY29tcG9uZW50cyBpbXBvcnRcbmltcG9ydCBNYXRlcmlhbElucHV0IGZyb20gJy4vdGV4dC1maWVsZHMvaW5wdXQudnVlJztcblxuY29uc3QgY29tcG9uZW50cyA9IHtcbiAgTWF0ZXJpYWxJbnB1dFxufVxuXG5jb25zdCBkaXJlY3RpdmVzID0ge1xuICBTZXR1cE1kbFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaW5zdGFsbCAoVnVlKSB7XG4gICAgT2JqZWN0LmtleXMoY29tcG9uZW50cykuZm9yRWFjaCgobmFtZSkgPT4gVnVlLmNvbXBvbmVudChuYW1lLCBjb21wb25lbnRzW25hbWVdKSk7XG4gICAgT2JqZWN0LmtleXMoZGlyZWN0aXZlcykuZm9yRWFjaCgobmFtZSkgPT4gVnVlLmRpcmVjdGl2ZShuYW1lLCBkaXJlY3RpdmVzW25hbWVdKSk7XG4gIH1cbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpYi5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgc2V0dXAgKGVsKSB7XG4gICAgY29tcG9uZW50SGFuZGxlci51cGdyYWRlRWxlbWVudHMoZWwpXG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGlyZWN0aXZlcy9zZXR1cC1tZGwuanMiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9pbnB1dC52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LWQyMGY4MjQyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2lucHV0LnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCIvVXNlcnMvb3ovc3JjL21hdGVyaWFsLWNvbXBvbmVudHMvc3JjL3RleHQtZmllbGRzL2lucHV0LnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtZDIwZjgyNDJcIiwgX192dWVfb3B0aW9uc19fKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtZDIwZjgyNDJcIiwgX192dWVfb3B0aW9uc19fKVxuICB9XG59KSgpfVxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBpbnB1dC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdGV4dC1maWVsZHMvaW5wdXQudnVlIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJtZGwtdGV4dGZpZWxkIG1kbC1qcy10ZXh0ZmllbGRcIj5cbiAgICAgICAgPGlucHV0IGNsYXNzPVwibWRsLXRleHRmaWVsZF9faW5wdXRcIiB0eXBlPVwidGV4dFwiIGlkPVwic2FtcGxlMVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJtZGwtdGV4dGZpZWxkX19sYWJlbFwiIGZvcj1cInNhbXBsZTFcIj5UZXh0Li4uPC9sYWJlbD5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgY29tbW9uIGZyb20gJy4uL21peGlucy90ZXh0LWZpZWxkJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBtb3VudGVkICgpIHtcbiAgICBjb21wb25lbnRIYW5kbGVyLnVwZ3JhZGVFbGVtZW50cyh0aGlzLiRlbClcbiAgfSxcbiAgbWl4aW5zOiBbY29tbW9uXVxufVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGlucHV0LnZ1ZT85ZmFhNDQzOCIsImV4cG9ydCBkZWZhdWx0IHtcbiAgXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWl4aW5zL3RleHQtZmllbGQuanMiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX3ZtLl9tKDApXG59LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZGwtdGV4dGZpZWxkIG1kbC1qcy10ZXh0ZmllbGRcIlxuICB9LCBbX2MoJ2lucHV0Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kbC10ZXh0ZmllbGRfX2lucHV0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwiaWRcIjogXCJzYW1wbGUxXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWRsLXRleHRmaWVsZF9fbGFiZWxcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogXCJzYW1wbGUxXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJUZXh0Li4uXCIpXSldKVxufV19XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LWQyMGY4MjQyXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi1kMjBmODI0MiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL3RleHQtZmllbGRzL2lucHV0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9