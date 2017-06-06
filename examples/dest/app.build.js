/******/ (function(modules) { // webpackBootstrap
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
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _vueRouter = __webpack_require__(1);
	
	var _vueRouter2 = _interopRequireDefault(_vueRouter);
	
	var _vueResource = __webpack_require__(3);
	
	var _vueResource2 = _interopRequireDefault(_vueResource);
	
	var _usage = __webpack_require__(5);
	
	var _usage2 = _interopRequireDefault(_usage);
	
	var _nav = __webpack_require__(8);
	
	var _nav2 = _interopRequireDefault(_nav);
	
	var _textfields = __webpack_require__(12);
	
	var _textfields2 = _interopRequireDefault(_textfields);
	
	var _buttons = __webpack_require__(15);
	
	var _buttons2 = _interopRequireDefault(_buttons);
	
	var _snackbar = __webpack_require__(18);
	
	var _snackbar2 = _interopRequireDefault(_snackbar);
	
	var _selects = __webpack_require__(21);
	
	var _selects2 = _interopRequireDefault(_selects);
	
	var _sliders = __webpack_require__(24);
	
	var _sliders2 = _interopRequireDefault(_sliders);
	
	var _badges = __webpack_require__(27);
	
	var _badges2 = _interopRequireDefault(_badges);
	
	var _menu = __webpack_require__(30);
	
	var _menu2 = _interopRequireDefault(_menu);
	
	var _loading = __webpack_require__(37);
	
	var _loading2 = _interopRequireDefault(_loading);
	
	var _toggles = __webpack_require__(40);
	
	var _toggles2 = _interopRequireDefault(_toggles);
	
	var _tabs = __webpack_require__(43);
	
	var _tabs2 = _interopRequireDefault(_tabs);
	
	var _tooltips = __webpack_require__(46);
	
	var _tooltips2 = _interopRequireDefault(_tooltips);
	
	var _table = __webpack_require__(49);
	
	var _table2 = _interopRequireDefault(_table);
	
	var _dialogs = __webpack_require__(52);
	
	var _dialogs2 = _interopRequireDefault(_dialogs);
	
	var _cards = __webpack_require__(55);
	
	var _cards2 = _interopRequireDefault(_cards);
	
	var _chips = __webpack_require__(60);
	
	var _chips2 = _interopRequireDefault(_chips);
	
	var _lists = __webpack_require__(63);
	
	var _lists2 = _interopRequireDefault(_lists);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// const components = {
	//   ExNav,
	// }
	
	// import Vue from 'vue';
	Vue.use(_vueRouter2.default);
	Vue.use(VueReusableMaterialComponents);
	Vue.use(_vueResource2.default);
	
	var routes = [{ path: '/textfields', component: _textfields2.default, name: 'textfields' }, { path: '/buttons', component: _buttons2.default }, { path: '/snackbar', component: _snackbar2.default }, { path: '/selects', component: _selects2.default }, { path: '/sliders', component: _sliders2.default }, { path: '/badges', component: _badges2.default }, { path: '/menu', component: _menu2.default }, { path: '/loading', component: _loading2.default }, { path: '/toggles', component: _toggles2.default }, { path: '/tabs', component: _tabs2.default }, { path: '/tooltips', component: _tooltips2.default }, { path: '/table', component: _table2.default }, { path: '/dialogs', component: _dialogs2.default }, { path: '/cards', component: _cards2.default }, { path: '/chips', component: _chips2.default }, { path: '/lists', component: _lists2.default }, { path: '/usage', component: _usage2.default }, { path: '*', redirect: { name: 'textfields' } }];
	
	var router = new _vueRouter2.default({
	  base: '/examples/',
	  linkActiveClass: 'mdl-navigation__link--active',
	  routes: routes
	});
	
	new Vue({
	  el: '#examples',
	  router: router,
	  components: {
	    ExNav: _nav2.default
	  },
	  methods: {
	    onSubmit: function onSubmit(e) {
	      console.log(this.form.firstName);
	      console.log(this.form.lastName);
	      console.log(this.form.email);
	    }
	  }
	});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	  * vue-router v2.5.0
	  * (c) 2017 Evan You
	  * @license MIT
	  */
	'use strict';
	
	/*  */
	
	function assert (condition, message) {
	  if (!condition) {
	    throw new Error(("[vue-router] " + message))
	  }
	}
	
	function warn (condition, message) {
	  if (process.env.NODE_ENV !== 'production' && !condition) {
	    typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
	  }
	}
	
	var View = {
	  name: 'router-view',
	  functional: true,
	  props: {
	    name: {
	      type: String,
	      default: 'default'
	    }
	  },
	  render: function render (h, ref) {
	    var props = ref.props;
	    var children = ref.children;
	    var parent = ref.parent;
	    var data = ref.data;
	
	    data.routerView = true;
	
	    var name = props.name;
	    var route = parent.$route;
	    var cache = parent._routerViewCache || (parent._routerViewCache = {});
	
	    // determine current view depth, also check to see if the tree
	    // has been toggled inactive but kept-alive.
	    var depth = 0;
	    var inactive = false;
	    while (parent) {
	      if (parent.$vnode && parent.$vnode.data.routerView) {
	        depth++;
	      }
	      if (parent._inactive) {
	        inactive = true;
	      }
	      parent = parent.$parent;
	    }
	    data.routerViewDepth = depth;
	
	    // render previous view if the tree is inactive and kept-alive
	    if (inactive) {
	      return h(cache[name], data, children)
	    }
	
	    var matched = route.matched[depth];
	    // render empty node if no matched route
	    if (!matched) {
	      cache[name] = null;
	      return h()
	    }
	
	    var component = cache[name] = matched.components[name];
	
	    // attach instance registration hook
	    // this will be called in the instance's injected lifecycle hooks
	    data.registerRouteInstance = function (vm, val) {
	      // val could be undefined for unregistration
	      if (matched.instances[name] !== vm) {
	        matched.instances[name] = val;
	      }
	    }
	
	    // also regiseter instance in prepatch hook
	    // in case the same component instance is reused across different routes
	    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
	      matched.instances[name] = vnode.componentInstance;
	    };
	
	    // resolve props
	    data.props = resolveProps(route, matched.props && matched.props[name]);
	
	    return h(component, data, children)
	  }
	};
	
	function resolveProps (route, config) {
	  switch (typeof config) {
	    case 'undefined':
	      return
	    case 'object':
	      return config
	    case 'function':
	      return config(route)
	    case 'boolean':
	      return config ? route.params : undefined
	    default:
	      if (process.env.NODE_ENV !== 'production') {
	        warn(
	          false,
	          "props in \"" + (route.path) + "\" is a " + (typeof config) + ", " +
	          "expecting an object, function or boolean."
	        );
	      }
	  }
	}
	
	/*  */
	
	var encodeReserveRE = /[!'()*]/g;
	var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
	var commaRE = /%2C/g;
	
	// fixed encodeURIComponent which is more conformant to RFC3986:
	// - escapes [!'()*]
	// - preserve commas
	var encode = function (str) { return encodeURIComponent(str)
	  .replace(encodeReserveRE, encodeReserveReplacer)
	  .replace(commaRE, ','); };
	
	var decode = decodeURIComponent;
	
	function resolveQuery (
	  query,
	  extraQuery,
	  _parseQuery
	) {
	  if ( extraQuery === void 0 ) extraQuery = {};
	
	  var parse = _parseQuery || parseQuery;
	  var parsedQuery;
	  try {
	    parsedQuery = parse(query || '');
	  } catch (e) {
	    process.env.NODE_ENV !== 'production' && warn(false, e.message);
	    parsedQuery = {};
	  }
	  for (var key in extraQuery) {
	    var val = extraQuery[key];
	    parsedQuery[key] = Array.isArray(val) ? val.slice() : val;
	  }
	  return parsedQuery
	}
	
	function parseQuery (query) {
	  var res = {};
	
	  query = query.trim().replace(/^(\?|#|&)/, '');
	
	  if (!query) {
	    return res
	  }
	
	  query.split('&').forEach(function (param) {
	    var parts = param.replace(/\+/g, ' ').split('=');
	    var key = decode(parts.shift());
	    var val = parts.length > 0
	      ? decode(parts.join('='))
	      : null;
	
	    if (res[key] === undefined) {
	      res[key] = val;
	    } else if (Array.isArray(res[key])) {
	      res[key].push(val);
	    } else {
	      res[key] = [res[key], val];
	    }
	  });
	
	  return res
	}
	
	function stringifyQuery (obj) {
	  var res = obj ? Object.keys(obj).map(function (key) {
	    var val = obj[key];
	
	    if (val === undefined) {
	      return ''
	    }
	
	    if (val === null) {
	      return encode(key)
	    }
	
	    if (Array.isArray(val)) {
	      var result = [];
	      val.slice().forEach(function (val2) {
	        if (val2 === undefined) {
	          return
	        }
	        if (val2 === null) {
	          result.push(encode(key));
	        } else {
	          result.push(encode(key) + '=' + encode(val2));
	        }
	      });
	      return result.join('&')
	    }
	
	    return encode(key) + '=' + encode(val)
	  }).filter(function (x) { return x.length > 0; }).join('&') : null;
	  return res ? ("?" + res) : ''
	}
	
	/*  */
	
	
	var trailingSlashRE = /\/?$/;
	
	function createRoute (
	  record,
	  location,
	  redirectedFrom,
	  router
	) {
	  var stringifyQuery$$1 = router && router.options.stringifyQuery;
	  var route = {
	    name: location.name || (record && record.name),
	    meta: (record && record.meta) || {},
	    path: location.path || '/',
	    hash: location.hash || '',
	    query: location.query || {},
	    params: location.params || {},
	    fullPath: getFullPath(location, stringifyQuery$$1),
	    matched: record ? formatMatch(record) : []
	  };
	  if (redirectedFrom) {
	    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery$$1);
	  }
	  return Object.freeze(route)
	}
	
	// the starting route that represents the initial state
	var START = createRoute(null, {
	  path: '/'
	});
	
	function formatMatch (record) {
	  var res = [];
	  while (record) {
	    res.unshift(record);
	    record = record.parent;
	  }
	  return res
	}
	
	function getFullPath (
	  ref,
	  _stringifyQuery
	) {
	  var path = ref.path;
	  var query = ref.query; if ( query === void 0 ) query = {};
	  var hash = ref.hash; if ( hash === void 0 ) hash = '';
	
	  var stringify = _stringifyQuery || stringifyQuery;
	  return (path || '/') + stringify(query) + hash
	}
	
	function isSameRoute (a, b) {
	  if (b === START) {
	    return a === b
	  } else if (!b) {
	    return false
	  } else if (a.path && b.path) {
	    return (
	      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
	      a.hash === b.hash &&
	      isObjectEqual(a.query, b.query)
	    )
	  } else if (a.name && b.name) {
	    return (
	      a.name === b.name &&
	      a.hash === b.hash &&
	      isObjectEqual(a.query, b.query) &&
	      isObjectEqual(a.params, b.params)
	    )
	  } else {
	    return false
	  }
	}
	
	function isObjectEqual (a, b) {
	  if ( a === void 0 ) a = {};
	  if ( b === void 0 ) b = {};
	
	  var aKeys = Object.keys(a);
	  var bKeys = Object.keys(b);
	  if (aKeys.length !== bKeys.length) {
	    return false
	  }
	  return aKeys.every(function (key) { return String(a[key]) === String(b[key]); })
	}
	
	function isIncludedRoute (current, target) {
	  return (
	    current.path.replace(trailingSlashRE, '/').indexOf(
	      target.path.replace(trailingSlashRE, '/')
	    ) === 0 &&
	    (!target.hash || current.hash === target.hash) &&
	    queryIncludes(current.query, target.query)
	  )
	}
	
	function queryIncludes (current, target) {
	  for (var key in target) {
	    if (!(key in current)) {
	      return false
	    }
	  }
	  return true
	}
	
	/*  */
	
	// work around weird flow bug
	var toTypes = [String, Object];
	var eventTypes = [String, Array];
	
	var Link = {
	  name: 'router-link',
	  props: {
	    to: {
	      type: toTypes,
	      required: true
	    },
	    tag: {
	      type: String,
	      default: 'a'
	    },
	    exact: Boolean,
	    append: Boolean,
	    replace: Boolean,
	    activeClass: String,
	    exactActiveClass: String,
	    event: {
	      type: eventTypes,
	      default: 'click'
	    }
	  },
	  render: function render (h) {
	    var this$1 = this;
	
	    var router = this.$router;
	    var current = this.$route;
	    var ref = router.resolve(this.to, current, this.append);
	    var location = ref.location;
	    var route = ref.route;
	    var href = ref.href;
	
	    var classes = {};
	    var globalActiveClass = router.options.linkActiveClass;
	    var globalExactActiveClass = router.options.linkExactActiveClass;
	    // Support global empty active class
	    var activeClassFallback = globalActiveClass == null
	            ? 'router-link-active'
	            : globalActiveClass;
	    var exactActiveClassFallback = globalExactActiveClass == null
	            ? 'router-link-exact-active'
	            : globalExactActiveClass;
	    var activeClass = this.activeClass == null
	            ? activeClassFallback
	            : this.activeClass;
	    var exactActiveClass = this.exactActiveClass == null
	            ? exactActiveClassFallback
	            : this.exactActiveClass;
	    var compareTarget = location.path
	      ? createRoute(null, location, null, router)
	      : route;
	
	    classes[exactActiveClass] = isSameRoute(current, compareTarget);
	    classes[activeClass] = this.exact
	      ? classes[exactActiveClass]
	      : isIncludedRoute(current, compareTarget);
	
	    var handler = function (e) {
	      if (guardEvent(e)) {
	        if (this$1.replace) {
	          router.replace(location);
	        } else {
	          router.push(location);
	        }
	      }
	    };
	
	    var on = { click: guardEvent };
	    if (Array.isArray(this.event)) {
	      this.event.forEach(function (e) { on[e] = handler; });
	    } else {
	      on[this.event] = handler;
	    }
	
	    var data = {
	      class: classes
	    };
	
	    if (this.tag === 'a') {
	      data.on = on;
	      data.attrs = { href: href };
	    } else {
	      // find the first <a> child and apply listener and href
	      var a = findAnchor(this.$slots.default);
	      if (a) {
	        // in case the <a> is a static node
	        a.isStatic = false;
	        var extend = _Vue.util.extend;
	        var aData = a.data = extend({}, a.data);
	        aData.on = on;
	        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
	        aAttrs.href = href;
	      } else {
	        // doesn't have <a> child, apply listener to self
	        data.on = on;
	      }
	    }
	
	    return h(this.tag, data, this.$slots.default)
	  }
	};
	
	function guardEvent (e) {
	  // don't redirect with control keys
	  if (e.metaKey || e.ctrlKey || e.shiftKey) { return }
	  // don't redirect when preventDefault called
	  if (e.defaultPrevented) { return }
	  // don't redirect on right click
	  if (e.button !== undefined && e.button !== 0) { return }
	  // don't redirect if `target="_blank"`
	  if (e.currentTarget && e.currentTarget.getAttribute) {
	    var target = e.currentTarget.getAttribute('target');
	    if (/\b_blank\b/i.test(target)) { return }
	  }
	  // this may be a Weex event which doesn't have this method
	  if (e.preventDefault) {
	    e.preventDefault();
	  }
	  return true
	}
	
	function findAnchor (children) {
	  if (children) {
	    var child;
	    for (var i = 0; i < children.length; i++) {
	      child = children[i];
	      if (child.tag === 'a') {
	        return child
	      }
	      if (child.children && (child = findAnchor(child.children))) {
	        return child
	      }
	    }
	  }
	}
	
	var _Vue;
	
	function install (Vue) {
	  if (install.installed) { return }
	  install.installed = true;
	
	  _Vue = Vue;
	
	  Object.defineProperty(Vue.prototype, '$router', {
	    get: function get () { return this.$root._router }
	  });
	
	  Object.defineProperty(Vue.prototype, '$route', {
	    get: function get () { return this.$root._route }
	  });
	
	  var isDef = function (v) { return v !== undefined; };
	
	  var registerInstance = function (vm, callVal) {
	    var i = vm.$options._parentVnode;
	    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
	      i(vm, callVal);
	    }
	  };
	
	  Vue.mixin({
	    beforeCreate: function beforeCreate () {
	      if (isDef(this.$options.router)) {
	        this._router = this.$options.router;
	        this._router.init(this);
	        Vue.util.defineReactive(this, '_route', this._router.history.current);
	      }
	      registerInstance(this, this);
	    },
	    destroyed: function destroyed () {
	      registerInstance(this);
	    }
	  });
	
	  Vue.component('router-view', View);
	  Vue.component('router-link', Link);
	
	  var strats = Vue.config.optionMergeStrategies;
	  // use the same hook merging strategy for route hooks
	  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.created;
	}
	
	/*  */
	
	var inBrowser = typeof window !== 'undefined';
	
	/*  */
	
	function resolvePath (
	  relative,
	  base,
	  append
	) {
	  var firstChar = relative.charAt(0);
	  if (firstChar === '/') {
	    return relative
	  }
	
	  if (firstChar === '?' || firstChar === '#') {
	    return base + relative
	  }
	
	  var stack = base.split('/');
	
	  // remove trailing segment if:
	  // - not appending
	  // - appending to trailing slash (last segment is empty)
	  if (!append || !stack[stack.length - 1]) {
	    stack.pop();
	  }
	
	  // resolve relative path
	  var segments = relative.replace(/^\//, '').split('/');
	  for (var i = 0; i < segments.length; i++) {
	    var segment = segments[i];
	    if (segment === '..') {
	      stack.pop();
	    } else if (segment !== '.') {
	      stack.push(segment);
	    }
	  }
	
	  // ensure leading slash
	  if (stack[0] !== '') {
	    stack.unshift('');
	  }
	
	  return stack.join('/')
	}
	
	function parsePath (path) {
	  var hash = '';
	  var query = '';
	
	  var hashIndex = path.indexOf('#');
	  if (hashIndex >= 0) {
	    hash = path.slice(hashIndex);
	    path = path.slice(0, hashIndex);
	  }
	
	  var queryIndex = path.indexOf('?');
	  if (queryIndex >= 0) {
	    query = path.slice(queryIndex + 1);
	    path = path.slice(0, queryIndex);
	  }
	
	  return {
	    path: path,
	    query: query,
	    hash: hash
	  }
	}
	
	function cleanPath (path) {
	  return path.replace(/\/\//g, '/')
	}
	
	var index$1 = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};
	
	var isarray = index$1;
	
	/**
	 * Expose `pathToRegexp`.
	 */
	var index = pathToRegexp;
	var parse_1 = parse;
	var compile_1 = compile;
	var tokensToFunction_1 = tokensToFunction;
	var tokensToRegExp_1 = tokensToRegExp;
	
	/**
	 * The main path matching regexp utility.
	 *
	 * @type {RegExp}
	 */
	var PATH_REGEXP = new RegExp([
	  // Match escaped characters that would otherwise appear in future matches.
	  // This allows the user to escape special characters that won't transform.
	  '(\\\\.)',
	  // Match Express-style parameters and un-named parameters with a prefix
	  // and optional suffixes. Matches appear as:
	  //
	  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
	  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
	  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
	  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
	].join('|'), 'g');
	
	/**
	 * Parse a string for the raw tokens.
	 *
	 * @param  {string}  str
	 * @param  {Object=} options
	 * @return {!Array}
	 */
	function parse (str, options) {
	  var tokens = [];
	  var key = 0;
	  var index = 0;
	  var path = '';
	  var defaultDelimiter = options && options.delimiter || '/';
	  var res;
	
	  while ((res = PATH_REGEXP.exec(str)) != null) {
	    var m = res[0];
	    var escaped = res[1];
	    var offset = res.index;
	    path += str.slice(index, offset);
	    index = offset + m.length;
	
	    // Ignore already escaped sequences.
	    if (escaped) {
	      path += escaped[1];
	      continue
	    }
	
	    var next = str[index];
	    var prefix = res[2];
	    var name = res[3];
	    var capture = res[4];
	    var group = res[5];
	    var modifier = res[6];
	    var asterisk = res[7];
	
	    // Push the current path onto the tokens.
	    if (path) {
	      tokens.push(path);
	      path = '';
	    }
	
	    var partial = prefix != null && next != null && next !== prefix;
	    var repeat = modifier === '+' || modifier === '*';
	    var optional = modifier === '?' || modifier === '*';
	    var delimiter = res[2] || defaultDelimiter;
	    var pattern = capture || group;
	
	    tokens.push({
	      name: name || key++,
	      prefix: prefix || '',
	      delimiter: delimiter,
	      optional: optional,
	      repeat: repeat,
	      partial: partial,
	      asterisk: !!asterisk,
	      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
	    });
	  }
	
	  // Match any characters still remaining.
	  if (index < str.length) {
	    path += str.substr(index);
	  }
	
	  // If the path exists, push it onto the end.
	  if (path) {
	    tokens.push(path);
	  }
	
	  return tokens
	}
	
	/**
	 * Compile a string to a template function for the path.
	 *
	 * @param  {string}             str
	 * @param  {Object=}            options
	 * @return {!function(Object=, Object=)}
	 */
	function compile (str, options) {
	  return tokensToFunction(parse(str, options))
	}
	
	/**
	 * Prettier encoding of URI path segments.
	 *
	 * @param  {string}
	 * @return {string}
	 */
	function encodeURIComponentPretty (str) {
	  return encodeURI(str).replace(/[\/?#]/g, function (c) {
	    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
	  })
	}
	
	/**
	 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
	 *
	 * @param  {string}
	 * @return {string}
	 */
	function encodeAsterisk (str) {
	  return encodeURI(str).replace(/[?#]/g, function (c) {
	    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
	  })
	}
	
	/**
	 * Expose a method for transforming tokens into the path function.
	 */
	function tokensToFunction (tokens) {
	  // Compile all the tokens into regexps.
	  var matches = new Array(tokens.length);
	
	  // Compile all the patterns before compilation.
	  for (var i = 0; i < tokens.length; i++) {
	    if (typeof tokens[i] === 'object') {
	      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
	    }
	  }
	
	  return function (obj, opts) {
	    var path = '';
	    var data = obj || {};
	    var options = opts || {};
	    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;
	
	    for (var i = 0; i < tokens.length; i++) {
	      var token = tokens[i];
	
	      if (typeof token === 'string') {
	        path += token;
	
	        continue
	      }
	
	      var value = data[token.name];
	      var segment;
	
	      if (value == null) {
	        if (token.optional) {
	          // Prepend partial segment prefixes.
	          if (token.partial) {
	            path += token.prefix;
	          }
	
	          continue
	        } else {
	          throw new TypeError('Expected "' + token.name + '" to be defined')
	        }
	      }
	
	      if (isarray(value)) {
	        if (!token.repeat) {
	          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
	        }
	
	        if (value.length === 0) {
	          if (token.optional) {
	            continue
	          } else {
	            throw new TypeError('Expected "' + token.name + '" to not be empty')
	          }
	        }
	
	        for (var j = 0; j < value.length; j++) {
	          segment = encode(value[j]);
	
	          if (!matches[i].test(segment)) {
	            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
	          }
	
	          path += (j === 0 ? token.prefix : token.delimiter) + segment;
	        }
	
	        continue
	      }
	
	      segment = token.asterisk ? encodeAsterisk(value) : encode(value);
	
	      if (!matches[i].test(segment)) {
	        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
	      }
	
	      path += token.prefix + segment;
	    }
	
	    return path
	  }
	}
	
	/**
	 * Escape a regular expression string.
	 *
	 * @param  {string} str
	 * @return {string}
	 */
	function escapeString (str) {
	  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
	}
	
	/**
	 * Escape the capturing group by escaping special characters and meaning.
	 *
	 * @param  {string} group
	 * @return {string}
	 */
	function escapeGroup (group) {
	  return group.replace(/([=!:$\/()])/g, '\\$1')
	}
	
	/**
	 * Attach the keys as a property of the regexp.
	 *
	 * @param  {!RegExp} re
	 * @param  {Array}   keys
	 * @return {!RegExp}
	 */
	function attachKeys (re, keys) {
	  re.keys = keys;
	  return re
	}
	
	/**
	 * Get the flags for a regexp from the options.
	 *
	 * @param  {Object} options
	 * @return {string}
	 */
	function flags (options) {
	  return options.sensitive ? '' : 'i'
	}
	
	/**
	 * Pull out keys from a regexp.
	 *
	 * @param  {!RegExp} path
	 * @param  {!Array}  keys
	 * @return {!RegExp}
	 */
	function regexpToRegexp (path, keys) {
	  // Use a negative lookahead to match only capturing groups.
	  var groups = path.source.match(/\((?!\?)/g);
	
	  if (groups) {
	    for (var i = 0; i < groups.length; i++) {
	      keys.push({
	        name: i,
	        prefix: null,
	        delimiter: null,
	        optional: false,
	        repeat: false,
	        partial: false,
	        asterisk: false,
	        pattern: null
	      });
	    }
	  }
	
	  return attachKeys(path, keys)
	}
	
	/**
	 * Transform an array into a regexp.
	 *
	 * @param  {!Array}  path
	 * @param  {Array}   keys
	 * @param  {!Object} options
	 * @return {!RegExp}
	 */
	function arrayToRegexp (path, keys, options) {
	  var parts = [];
	
	  for (var i = 0; i < path.length; i++) {
	    parts.push(pathToRegexp(path[i], keys, options).source);
	  }
	
	  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));
	
	  return attachKeys(regexp, keys)
	}
	
	/**
	 * Create a path regexp from string input.
	 *
	 * @param  {string}  path
	 * @param  {!Array}  keys
	 * @param  {!Object} options
	 * @return {!RegExp}
	 */
	function stringToRegexp (path, keys, options) {
	  return tokensToRegExp(parse(path, options), keys, options)
	}
	
	/**
	 * Expose a function for taking tokens and returning a RegExp.
	 *
	 * @param  {!Array}          tokens
	 * @param  {(Array|Object)=} keys
	 * @param  {Object=}         options
	 * @return {!RegExp}
	 */
	function tokensToRegExp (tokens, keys, options) {
	  if (!isarray(keys)) {
	    options = /** @type {!Object} */ (keys || options);
	    keys = [];
	  }
	
	  options = options || {};
	
	  var strict = options.strict;
	  var end = options.end !== false;
	  var route = '';
	
	  // Iterate over the tokens and create our regexp string.
	  for (var i = 0; i < tokens.length; i++) {
	    var token = tokens[i];
	
	    if (typeof token === 'string') {
	      route += escapeString(token);
	    } else {
	      var prefix = escapeString(token.prefix);
	      var capture = '(?:' + token.pattern + ')';
	
	      keys.push(token);
	
	      if (token.repeat) {
	        capture += '(?:' + prefix + capture + ')*';
	      }
	
	      if (token.optional) {
	        if (!token.partial) {
	          capture = '(?:' + prefix + '(' + capture + '))?';
	        } else {
	          capture = prefix + '(' + capture + ')?';
	        }
	      } else {
	        capture = prefix + '(' + capture + ')';
	      }
	
	      route += capture;
	    }
	  }
	
	  var delimiter = escapeString(options.delimiter || '/');
	  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;
	
	  // In non-strict mode we allow a slash at the end of match. If the path to
	  // match already ends with a slash, we remove it for consistency. The slash
	  // is valid at the end of a path match, not in the middle. This is important
	  // in non-ending mode, where "/test/" shouldn't match "/test//route".
	  if (!strict) {
	    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
	  }
	
	  if (end) {
	    route += '$';
	  } else {
	    // In non-ending mode, we need the capturing groups to match as much as
	    // possible by using a positive lookahead to the end or next path segment.
	    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
	  }
	
	  return attachKeys(new RegExp('^' + route, flags(options)), keys)
	}
	
	/**
	 * Normalize the given path string, returning a regular expression.
	 *
	 * An empty array can be passed in for the keys, which will hold the
	 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
	 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
	 *
	 * @param  {(string|RegExp|Array)} path
	 * @param  {(Array|Object)=}       keys
	 * @param  {Object=}               options
	 * @return {!RegExp}
	 */
	function pathToRegexp (path, keys, options) {
	  if (!isarray(keys)) {
	    options = /** @type {!Object} */ (keys || options);
	    keys = [];
	  }
	
	  options = options || {};
	
	  if (path instanceof RegExp) {
	    return regexpToRegexp(path, /** @type {!Array} */ (keys))
	  }
	
	  if (isarray(path)) {
	    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
	  }
	
	  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
	}
	
	index.parse = parse_1;
	index.compile = compile_1;
	index.tokensToFunction = tokensToFunction_1;
	index.tokensToRegExp = tokensToRegExp_1;
	
	/*  */
	
	var regexpCompileCache = Object.create(null);
	
	function fillParams (
	  path,
	  params,
	  routeMsg
	) {
	  try {
	    var filler =
	      regexpCompileCache[path] ||
	      (regexpCompileCache[path] = index.compile(path));
	    return filler(params || {}, { pretty: true })
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production') {
	      warn(false, ("missing param for " + routeMsg + ": " + (e.message)));
	    }
	    return ''
	  }
	}
	
	/*  */
	
	function createRouteMap (
	  routes,
	  oldPathList,
	  oldPathMap,
	  oldNameMap
	) {
	  // the path list is used to control path matching priority
	  var pathList = oldPathList || [];
	  var pathMap = oldPathMap || Object.create(null);
	  var nameMap = oldNameMap || Object.create(null);
	
	  routes.forEach(function (route) {
	    addRouteRecord(pathList, pathMap, nameMap, route);
	  });
	
	  // ensure wildcard routes are always at the end
	  for (var i = 0, l = pathList.length; i < l; i++) {
	    if (pathList[i] === '*') {
	      pathList.push(pathList.splice(i, 1)[0]);
	      l--;
	      i--;
	    }
	  }
	
	  return {
	    pathList: pathList,
	    pathMap: pathMap,
	    nameMap: nameMap
	  }
	}
	
	function addRouteRecord (
	  pathList,
	  pathMap,
	  nameMap,
	  route,
	  parent,
	  matchAs
	) {
	  var path = route.path;
	  var name = route.name;
	  if (process.env.NODE_ENV !== 'production') {
	    assert(path != null, "\"path\" is required in a route configuration.");
	    assert(
	      typeof route.component !== 'string',
	      "route config \"component\" for path: " + (String(path || name)) + " cannot be a " +
	      "string id. Use an actual component instead."
	    );
	  }
	
	  var normalizedPath = normalizePath(path, parent);
	  var record = {
	    path: normalizedPath,
	    regex: compileRouteRegex(normalizedPath),
	    components: route.components || { default: route.component },
	    instances: {},
	    name: name,
	    parent: parent,
	    matchAs: matchAs,
	    redirect: route.redirect,
	    beforeEnter: route.beforeEnter,
	    meta: route.meta || {},
	    props: route.props == null
	      ? {}
	      : route.components
	        ? route.props
	        : { default: route.props }
	  };
	
	  if (route.children) {
	    // Warn if route is named and has a default child route.
	    // If users navigate to this route by name, the default child will
	    // not be rendered (GH Issue #629)
	    if (process.env.NODE_ENV !== 'production') {
	      if (route.name && route.children.some(function (child) { return /^\/?$/.test(child.path); })) {
	        warn(
	          false,
	          "Named Route '" + (route.name) + "' has a default child route. " +
	          "When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), " +
	          "the default child route will not be rendered. Remove the name from " +
	          "this route and use the name of the default child route for named " +
	          "links instead."
	        );
	      }
	    }
	    route.children.forEach(function (child) {
	      var childMatchAs = matchAs
	        ? cleanPath((matchAs + "/" + (child.path)))
	        : undefined;
	      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
	    });
	  }
	
	  if (route.alias !== undefined) {
	    if (Array.isArray(route.alias)) {
	      route.alias.forEach(function (alias) {
	        var aliasRoute = {
	          path: alias,
	          children: route.children
	        };
	        addRouteRecord(pathList, pathMap, nameMap, aliasRoute, parent, record.path);
	      });
	    } else {
	      var aliasRoute = {
	        path: route.alias,
	        children: route.children
	      };
	      addRouteRecord(pathList, pathMap, nameMap, aliasRoute, parent, record.path);
	    }
	  }
	
	  if (!pathMap[record.path]) {
	    pathList.push(record.path);
	    pathMap[record.path] = record;
	  }
	
	  if (name) {
	    if (!nameMap[name]) {
	      nameMap[name] = record;
	    } else if (process.env.NODE_ENV !== 'production' && !matchAs) {
	      warn(
	        false,
	        "Duplicate named routes definition: " +
	        "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }"
	      );
	    }
	  }
	}
	
	function compileRouteRegex (path) {
	  var regex = index(path);
	  if (process.env.NODE_ENV !== 'production') {
	    var keys = {};
	    regex.keys.forEach(function (key) {
	      warn(!keys[key], ("Duplicate param keys in route with path: \"" + path + "\""));
	      keys[key] = true;
	    });
	  }
	  return regex
	}
	
	function normalizePath (path, parent) {
	  path = path.replace(/\/$/, '');
	  if (path[0] === '/') { return path }
	  if (parent == null) { return path }
	  return cleanPath(((parent.path) + "/" + path))
	}
	
	/*  */
	
	
	function normalizeLocation (
	  raw,
	  current,
	  append,
	  router
	) {
	  var next = typeof raw === 'string' ? { path: raw } : raw;
	  // named target
	  if (next.name || next._normalized) {
	    return next
	  }
	
	  // relative params
	  if (!next.path && next.params && current) {
	    next = assign({}, next);
	    next._normalized = true;
	    var params = assign(assign({}, current.params), next.params);
	    if (current.name) {
	      next.name = current.name;
	      next.params = params;
	    } else if (current.matched) {
	      var rawPath = current.matched[current.matched.length - 1].path;
	      next.path = fillParams(rawPath, params, ("path " + (current.path)));
	    } else if (process.env.NODE_ENV !== 'production') {
	      warn(false, "relative params navigation requires a current route.");
	    }
	    return next
	  }
	
	  var parsedPath = parsePath(next.path || '');
	  var basePath = (current && current.path) || '/';
	  var path = parsedPath.path
	    ? resolvePath(parsedPath.path, basePath, append || next.append)
	    : basePath;
	
	  var query = resolveQuery(
	    parsedPath.query,
	    next.query,
	    router && router.options.parseQuery
	  );
	
	  var hash = next.hash || parsedPath.hash;
	  if (hash && hash.charAt(0) !== '#') {
	    hash = "#" + hash;
	  }
	
	  return {
	    _normalized: true,
	    path: path,
	    query: query,
	    hash: hash
	  }
	}
	
	function assign (a, b) {
	  for (var key in b) {
	    a[key] = b[key];
	  }
	  return a
	}
	
	/*  */
	
	
	function createMatcher (
	  routes,
	  router
	) {
	  var ref = createRouteMap(routes);
	  var pathList = ref.pathList;
	  var pathMap = ref.pathMap;
	  var nameMap = ref.nameMap;
	
	  function addRoutes (routes) {
	    createRouteMap(routes, pathList, pathMap, nameMap);
	  }
	
	  function match (
	    raw,
	    currentRoute,
	    redirectedFrom
	  ) {
	    var location = normalizeLocation(raw, currentRoute, false, router);
	    var name = location.name;
	
	    if (name) {
	      var record = nameMap[name];
	      if (process.env.NODE_ENV !== 'production') {
	        warn(record, ("Route with name '" + name + "' does not exist"));
	      }
	      var paramNames = record.regex.keys
	        .filter(function (key) { return !key.optional; })
	        .map(function (key) { return key.name; });
	
	      if (typeof location.params !== 'object') {
	        location.params = {};
	      }
	
	      if (currentRoute && typeof currentRoute.params === 'object') {
	        for (var key in currentRoute.params) {
	          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
	            location.params[key] = currentRoute.params[key];
	          }
	        }
	      }
	
	      if (record) {
	        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
	        return _createRoute(record, location, redirectedFrom)
	      }
	    } else if (location.path) {
	      location.params = {};
	      for (var i = 0; i < pathList.length; i++) {
	        var path = pathList[i];
	        var record$1 = pathMap[path];
	        if (matchRoute(record$1.regex, location.path, location.params)) {
	          return _createRoute(record$1, location, redirectedFrom)
	        }
	      }
	    }
	    // no match
	    return _createRoute(null, location)
	  }
	
	  function redirect (
	    record,
	    location
	  ) {
	    var originalRedirect = record.redirect;
	    var redirect = typeof originalRedirect === 'function'
	        ? originalRedirect(createRoute(record, location, null, router))
	        : originalRedirect;
	
	    if (typeof redirect === 'string') {
	      redirect = { path: redirect };
	    }
	
	    if (!redirect || typeof redirect !== 'object') {
	      if (process.env.NODE_ENV !== 'production') {
	        warn(
	          false, ("invalid redirect option: " + (JSON.stringify(redirect)))
	        );
	      }
	      return _createRoute(null, location)
	    }
	
	    var re = redirect;
	    var name = re.name;
	    var path = re.path;
	    var query = location.query;
	    var hash = location.hash;
	    var params = location.params;
	    query = re.hasOwnProperty('query') ? re.query : query;
	    hash = re.hasOwnProperty('hash') ? re.hash : hash;
	    params = re.hasOwnProperty('params') ? re.params : params;
	
	    if (name) {
	      // resolved named direct
	      var targetRecord = nameMap[name];
	      if (process.env.NODE_ENV !== 'production') {
	        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."));
	      }
	      return match({
	        _normalized: true,
	        name: name,
	        query: query,
	        hash: hash,
	        params: params
	      }, undefined, location)
	    } else if (path) {
	      // 1. resolve relative redirect
	      var rawPath = resolveRecordPath(path, record);
	      // 2. resolve params
	      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
	      // 3. rematch with existing query and hash
	      return match({
	        _normalized: true,
	        path: resolvedPath,
	        query: query,
	        hash: hash
	      }, undefined, location)
	    } else {
	      if (process.env.NODE_ENV !== 'production') {
	        warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
	      }
	      return _createRoute(null, location)
	    }
	  }
	
	  function alias (
	    record,
	    location,
	    matchAs
	  ) {
	    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
	    var aliasedMatch = match({
	      _normalized: true,
	      path: aliasedPath
	    });
	    if (aliasedMatch) {
	      var matched = aliasedMatch.matched;
	      var aliasedRecord = matched[matched.length - 1];
	      location.params = aliasedMatch.params;
	      return _createRoute(aliasedRecord, location)
	    }
	    return _createRoute(null, location)
	  }
	
	  function _createRoute (
	    record,
	    location,
	    redirectedFrom
	  ) {
	    if (record && record.redirect) {
	      return redirect(record, redirectedFrom || location)
	    }
	    if (record && record.matchAs) {
	      return alias(record, location, record.matchAs)
	    }
	    return createRoute(record, location, redirectedFrom, router)
	  }
	
	  return {
	    match: match,
	    addRoutes: addRoutes
	  }
	}
	
	function matchRoute (
	  regex,
	  path,
	  params
	) {
	  var m = path.match(regex);
	
	  if (!m) {
	    return false
	  } else if (!params) {
	    return true
	  }
	
	  for (var i = 1, len = m.length; i < len; ++i) {
	    var key = regex.keys[i - 1];
	    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
	    if (key) {
	      params[key.name] = val;
	    }
	  }
	
	  return true
	}
	
	function resolveRecordPath (path, record) {
	  return resolvePath(path, record.parent ? record.parent.path : '/', true)
	}
	
	/*  */
	
	
	var positionStore = Object.create(null);
	
	function setupScroll () {
	  window.addEventListener('popstate', function (e) {
	    saveScrollPosition();
	    if (e.state && e.state.key) {
	      setStateKey(e.state.key);
	    }
	  });
	}
	
	function handleScroll (
	  router,
	  to,
	  from,
	  isPop
	) {
	  if (!router.app) {
	    return
	  }
	
	  var behavior = router.options.scrollBehavior;
	  if (!behavior) {
	    return
	  }
	
	  if (process.env.NODE_ENV !== 'production') {
	    assert(typeof behavior === 'function', "scrollBehavior must be a function");
	  }
	
	  // wait until re-render finishes before scrolling
	  router.app.$nextTick(function () {
	    var position = getScrollPosition();
	    var shouldScroll = behavior(to, from, isPop ? position : null);
	    if (!shouldScroll) {
	      return
	    }
	    var isObject = typeof shouldScroll === 'object';
	    if (isObject && typeof shouldScroll.selector === 'string') {
	      var el = document.querySelector(shouldScroll.selector);
	      if (el) {
	        position = getElementPosition(el);
	      } else if (isValidPosition(shouldScroll)) {
	        position = normalizePosition(shouldScroll);
	      }
	    } else if (isObject && isValidPosition(shouldScroll)) {
	      position = normalizePosition(shouldScroll);
	    }
	
	    if (position) {
	      window.scrollTo(position.x, position.y);
	    }
	  });
	}
	
	function saveScrollPosition () {
	  var key = getStateKey();
	  if (key) {
	    positionStore[key] = {
	      x: window.pageXOffset,
	      y: window.pageYOffset
	    };
	  }
	}
	
	function getScrollPosition () {
	  var key = getStateKey();
	  if (key) {
	    return positionStore[key]
	  }
	}
	
	function getElementPosition (el) {
	  var docEl = document.documentElement;
	  var docRect = docEl.getBoundingClientRect();
	  var elRect = el.getBoundingClientRect();
	  return {
	    x: elRect.left - docRect.left,
	    y: elRect.top - docRect.top
	  }
	}
	
	function isValidPosition (obj) {
	  return isNumber(obj.x) || isNumber(obj.y)
	}
	
	function normalizePosition (obj) {
	  return {
	    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
	    y: isNumber(obj.y) ? obj.y : window.pageYOffset
	  }
	}
	
	function isNumber (v) {
	  return typeof v === 'number'
	}
	
	/*  */
	
	var supportsPushState = inBrowser && (function () {
	  var ua = window.navigator.userAgent;
	
	  if (
	    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
	    ua.indexOf('Mobile Safari') !== -1 &&
	    ua.indexOf('Chrome') === -1 &&
	    ua.indexOf('Windows Phone') === -1
	  ) {
	    return false
	  }
	
	  return window.history && 'pushState' in window.history
	})();
	
	// use User Timing api (if present) for more accurate key precision
	var Time = inBrowser && window.performance && window.performance.now
	  ? window.performance
	  : Date;
	
	var _key = genKey();
	
	function genKey () {
	  return Time.now().toFixed(3)
	}
	
	function getStateKey () {
	  return _key
	}
	
	function setStateKey (key) {
	  _key = key;
	}
	
	function pushState (url, replace) {
	  saveScrollPosition();
	  // try...catch the pushState call to get around Safari
	  // DOM Exception 18 where it limits to 100 pushState calls
	  var history = window.history;
	  try {
	    if (replace) {
	      history.replaceState({ key: _key }, '', url);
	    } else {
	      _key = genKey();
	      history.pushState({ key: _key }, '', url);
	    }
	  } catch (e) {
	    window.location[replace ? 'replace' : 'assign'](url);
	  }
	}
	
	function replaceState (url) {
	  pushState(url, true);
	}
	
	/*  */
	
	function runQueue (queue, fn, cb) {
	  var step = function (index) {
	    if (index >= queue.length) {
	      cb();
	    } else {
	      if (queue[index]) {
	        fn(queue[index], function () {
	          step(index + 1);
	        });
	      } else {
	        step(index + 1);
	      }
	    }
	  };
	  step(0);
	}
	
	/*  */
	
	var History = function History (router, base) {
	  this.router = router;
	  this.base = normalizeBase(base);
	  // start with a route object that stands for "nowhere"
	  this.current = START;
	  this.pending = null;
	  this.ready = false;
	  this.readyCbs = [];
	  this.readyErrorCbs = [];
	  this.errorCbs = [];
	};
	
	History.prototype.listen = function listen (cb) {
	  this.cb = cb;
	};
	
	History.prototype.onReady = function onReady (cb, errorCb) {
	  if (this.ready) {
	    cb();
	  } else {
	    this.readyCbs.push(cb);
	    if (errorCb) {
	      this.readyErrorCbs.push(errorCb);
	    }
	  }
	};
	
	History.prototype.onError = function onError (errorCb) {
	  this.errorCbs.push(errorCb);
	};
	
	History.prototype.transitionTo = function transitionTo (location, onComplete, onAbort) {
	    var this$1 = this;
	
	  var route = this.router.match(location, this.current);
	  this.confirmTransition(route, function () {
	    this$1.updateRoute(route);
	    onComplete && onComplete(route);
	    this$1.ensureURL();
	
	    // fire ready cbs once
	    if (!this$1.ready) {
	      this$1.ready = true;
	      this$1.readyCbs.forEach(function (cb) { cb(route); });
	    }
	  }, function (err) {
	    if (onAbort) {
	      onAbort(err);
	    }
	    if (err && !this$1.ready) {
	      this$1.ready = true;
	      this$1.readyErrorCbs.forEach(function (cb) { cb(err); });
	    }
	  });
	};
	
	History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
	    var this$1 = this;
	
	  var current = this.current;
	  var abort = function (err) {
	    if (err instanceof Error) {
	      if (this$1.errorCbs.length) {
	        this$1.errorCbs.forEach(function (cb) { cb(err); });
	      } else {
	        warn(false, 'uncaught error during route navigation:');
	        console.error(err);
	      }
	    }
	    onAbort && onAbort(err);
	  };
	  if (
	    isSameRoute(route, current) &&
	    // in the case the route map has been dynamically appended to
	    route.matched.length === current.matched.length
	  ) {
	    this.ensureURL();
	    return abort()
	  }
	
	  var ref = resolveQueue(this.current.matched, route.matched);
	    var updated = ref.updated;
	    var deactivated = ref.deactivated;
	    var activated = ref.activated;
	
	  var queue = [].concat(
	    // in-component leave guards
	    extractLeaveGuards(deactivated),
	    // global before hooks
	    this.router.beforeHooks,
	    // in-component update hooks
	    extractUpdateHooks(updated),
	    // in-config enter guards
	    activated.map(function (m) { return m.beforeEnter; }),
	    // async components
	    resolveAsyncComponents(activated)
	  );
	
	  this.pending = route;
	  var iterator = function (hook, next) {
	    if (this$1.pending !== route) {
	      return abort()
	    }
	    try {
	      hook(route, current, function (to) {
	        if (to === false || to instanceof Error) {
	          // next(false) -> abort navigation, ensure current URL
	          this$1.ensureURL(true);
	          abort(to);
	        } else if (
	          typeof to === 'string' ||
	          (typeof to === 'object' && (
	            typeof to.path === 'string' ||
	            typeof to.name === 'string'
	          ))
	        ) {
	          // next('/') or next({ path: '/' }) -> redirect
	          abort();
	          if (typeof to === 'object' && to.replace) {
	            this$1.replace(to);
	          } else {
	            this$1.push(to);
	          }
	        } else {
	          // confirm transition and pass on the value
	          next(to);
	        }
	      });
	    } catch (e) {
	      abort(e);
	    }
	  };
	
	  runQueue(queue, iterator, function () {
	    var postEnterCbs = [];
	    var isValid = function () { return this$1.current === route; };
	    // wait until async components are resolved before
	    // extracting in-component enter guards
	    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
	    var queue = enterGuards.concat(this$1.router.resolveHooks);
	    runQueue(queue, iterator, function () {
	      if (this$1.pending !== route) {
	        return abort()
	      }
	      this$1.pending = null;
	      onComplete(route);
	      if (this$1.router.app) {
	        this$1.router.app.$nextTick(function () {
	          postEnterCbs.forEach(function (cb) { cb(); });
	        });
	      }
	    });
	  });
	};
	
	History.prototype.updateRoute = function updateRoute (route) {
	  var prev = this.current;
	  this.current = route;
	  this.cb && this.cb(route);
	  this.router.afterHooks.forEach(function (hook) {
	    hook && hook(route, prev);
	  });
	};
	
	function normalizeBase (base) {
	  if (!base) {
	    if (inBrowser) {
	      // respect <base> tag
	      var baseEl = document.querySelector('base');
	      base = (baseEl && baseEl.getAttribute('href')) || '/';
	    } else {
	      base = '/';
	    }
	  }
	  // make sure there's the starting slash
	  if (base.charAt(0) !== '/') {
	    base = '/' + base;
	  }
	  // remove trailing slash
	  return base.replace(/\/$/, '')
	}
	
	function resolveQueue (
	  current,
	  next
	) {
	  var i;
	  var max = Math.max(current.length, next.length);
	  for (i = 0; i < max; i++) {
	    if (current[i] !== next[i]) {
	      break
	    }
	  }
	  return {
	    updated: next.slice(0, i),
	    activated: next.slice(i),
	    deactivated: current.slice(i)
	  }
	}
	
	function extractGuards (
	  records,
	  name,
	  bind,
	  reverse
	) {
	  var guards = flatMapComponents(records, function (def, instance, match, key) {
	    var guard = extractGuard(def, name);
	    if (guard) {
	      return Array.isArray(guard)
	        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
	        : bind(guard, instance, match, key)
	    }
	  });
	  return flatten(reverse ? guards.reverse() : guards)
	}
	
	function extractGuard (
	  def,
	  key
	) {
	  if (typeof def !== 'function') {
	    // extend now so that global mixins are applied.
	    def = _Vue.extend(def);
	  }
	  return def.options[key]
	}
	
	function extractLeaveGuards (deactivated) {
	  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
	}
	
	function extractUpdateHooks (updated) {
	  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
	}
	
	function bindGuard (guard, instance) {
	  if (instance) {
	    return function boundRouteGuard () {
	      return guard.apply(instance, arguments)
	    }
	  }
	}
	
	function extractEnterGuards (
	  activated,
	  cbs,
	  isValid
	) {
	  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
	    return bindEnterGuard(guard, match, key, cbs, isValid)
	  })
	}
	
	function bindEnterGuard (
	  guard,
	  match,
	  key,
	  cbs,
	  isValid
	) {
	  return function routeEnterGuard (to, from, next) {
	    return guard(to, from, function (cb) {
	      next(cb);
	      if (typeof cb === 'function') {
	        cbs.push(function () {
	          // #750
	          // if a router-view is wrapped with an out-in transition,
	          // the instance may not have been registered at this time.
	          // we will need to poll for registration until current route
	          // is no longer valid.
	          poll(cb, match.instances, key, isValid);
	        });
	      }
	    })
	  }
	}
	
	function poll (
	  cb, // somehow flow cannot infer this is a function
	  instances,
	  key,
	  isValid
	) {
	  if (instances[key]) {
	    cb(instances[key]);
	  } else if (isValid()) {
	    setTimeout(function () {
	      poll(cb, instances, key, isValid);
	    }, 16);
	  }
	}
	
	function resolveAsyncComponents (matched) {
	  return function (to, from, next) {
	    var hasAsync = false;
	    var pending = 0;
	    var error = null;
	
	    flatMapComponents(matched, function (def, _, match, key) {
	      // if it's a function and doesn't have cid attached,
	      // assume it's an async component resolve function.
	      // we are not using Vue's default async resolving mechanism because
	      // we want to halt the navigation until the incoming component has been
	      // resolved.
	      if (typeof def === 'function' && def.cid === undefined) {
	        hasAsync = true;
	        pending++;
	
	        var resolve = once(function (resolvedDef) {
	          // save resolved on async factory in case it's used elsewhere
	          def.resolved = typeof resolvedDef === 'function'
	            ? resolvedDef
	            : _Vue.extend(resolvedDef);
	          match.components[key] = resolvedDef;
	          pending--;
	          if (pending <= 0) {
	            next();
	          }
	        });
	
	        var reject = once(function (reason) {
	          var msg = "Failed to resolve async component " + key + ": " + reason;
	          process.env.NODE_ENV !== 'production' && warn(false, msg);
	          if (!error) {
	            error = reason instanceof Error
	              ? reason
	              : new Error(msg);
	            next(error);
	          }
	        });
	
	        var res;
	        try {
	          res = def(resolve, reject);
	        } catch (e) {
	          reject(e);
	        }
	        if (res) {
	          if (typeof res.then === 'function') {
	            res.then(resolve, reject);
	          } else {
	            // new syntax in Vue 2.3
	            var comp = res.component;
	            if (comp && typeof comp.then === 'function') {
	              comp.then(resolve, reject);
	            }
	          }
	        }
	      }
	    });
	
	    if (!hasAsync) { next(); }
	  }
	}
	
	function flatMapComponents (
	  matched,
	  fn
	) {
	  return flatten(matched.map(function (m) {
	    return Object.keys(m.components).map(function (key) { return fn(
	      m.components[key],
	      m.instances[key],
	      m, key
	    ); })
	  }))
	}
	
	function flatten (arr) {
	  return Array.prototype.concat.apply([], arr)
	}
	
	// in Webpack 2, require.ensure now also returns a Promise
	// so the resolve/reject functions may get called an extra time
	// if the user uses an arrow function shorthand that happens to
	// return that Promise.
	function once (fn) {
	  var called = false;
	  return function () {
	    if (called) { return }
	    called = true;
	    return fn.apply(this, arguments)
	  }
	}
	
	/*  */
	
	
	var HTML5History = (function (History$$1) {
	  function HTML5History (router, base) {
	    var this$1 = this;
	
	    History$$1.call(this, router, base);
	
	    var expectScroll = router.options.scrollBehavior;
	
	    if (expectScroll) {
	      setupScroll();
	    }
	
	    window.addEventListener('popstate', function (e) {
	      this$1.transitionTo(getLocation(this$1.base), function (route) {
	        if (expectScroll) {
	          handleScroll(router, route, this$1.current, true);
	        }
	      });
	    });
	  }
	
	  if ( History$$1 ) HTML5History.__proto__ = History$$1;
	  HTML5History.prototype = Object.create( History$$1 && History$$1.prototype );
	  HTML5History.prototype.constructor = HTML5History;
	
	  HTML5History.prototype.go = function go (n) {
	    window.history.go(n);
	  };
	
	  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
	    var this$1 = this;
	
	    var ref = this;
	    var fromRoute = ref.current;
	    this.transitionTo(location, function (route) {
	      pushState(cleanPath(this$1.base + route.fullPath));
	      handleScroll(this$1.router, route, fromRoute, false);
	      onComplete && onComplete(route);
	    }, onAbort);
	  };
	
	  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
	    var this$1 = this;
	
	    var ref = this;
	    var fromRoute = ref.current;
	    this.transitionTo(location, function (route) {
	      replaceState(cleanPath(this$1.base + route.fullPath));
	      handleScroll(this$1.router, route, fromRoute, false);
	      onComplete && onComplete(route);
	    }, onAbort);
	  };
	
	  HTML5History.prototype.ensureURL = function ensureURL (push) {
	    if (getLocation(this.base) !== this.current.fullPath) {
	      var current = cleanPath(this.base + this.current.fullPath);
	      push ? pushState(current) : replaceState(current);
	    }
	  };
	
	  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
	    return getLocation(this.base)
	  };
	
	  return HTML5History;
	}(History));
	
	function getLocation (base) {
	  var path = window.location.pathname;
	  if (base && path.indexOf(base) === 0) {
	    path = path.slice(base.length);
	  }
	  return (path || '/') + window.location.search + window.location.hash
	}
	
	/*  */
	
	
	var HashHistory = (function (History$$1) {
	  function HashHistory (router, base, fallback) {
	    History$$1.call(this, router, base);
	    // check history fallback deeplinking
	    if (fallback && checkFallback(this.base)) {
	      return
	    }
	    ensureSlash();
	  }
	
	  if ( History$$1 ) HashHistory.__proto__ = History$$1;
	  HashHistory.prototype = Object.create( History$$1 && History$$1.prototype );
	  HashHistory.prototype.constructor = HashHistory;
	
	  // this is delayed until the app mounts
	  // to avoid the hashchange listener being fired too early
	  HashHistory.prototype.setupListeners = function setupListeners () {
	    var this$1 = this;
	
	    window.addEventListener('hashchange', function () {
	      if (!ensureSlash()) {
	        return
	      }
	      this$1.transitionTo(getHash(), function (route) {
	        replaceHash(route.fullPath);
	      });
	    });
	  };
	
	  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
	    this.transitionTo(location, function (route) {
	      pushHash(route.fullPath);
	      onComplete && onComplete(route);
	    }, onAbort);
	  };
	
	  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
	    this.transitionTo(location, function (route) {
	      replaceHash(route.fullPath);
	      onComplete && onComplete(route);
	    }, onAbort);
	  };
	
	  HashHistory.prototype.go = function go (n) {
	    window.history.go(n);
	  };
	
	  HashHistory.prototype.ensureURL = function ensureURL (push) {
	    var current = this.current.fullPath;
	    if (getHash() !== current) {
	      push ? pushHash(current) : replaceHash(current);
	    }
	  };
	
	  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
	    return getHash()
	  };
	
	  return HashHistory;
	}(History));
	
	function checkFallback (base) {
	  var location = getLocation(base);
	  if (!/^\/#/.test(location)) {
	    window.location.replace(
	      cleanPath(base + '/#' + location)
	    );
	    return true
	  }
	}
	
	function ensureSlash () {
	  var path = getHash();
	  if (path.charAt(0) === '/') {
	    return true
	  }
	  replaceHash('/' + path);
	  return false
	}
	
	function getHash () {
	  // We can't use window.location.hash here because it's not
	  // consistent across browsers - Firefox will pre-decode it!
	  var href = window.location.href;
	  var index = href.indexOf('#');
	  return index === -1 ? '' : href.slice(index + 1)
	}
	
	function pushHash (path) {
	  window.location.hash = path;
	}
	
	function replaceHash (path) {
	  var i = window.location.href.indexOf('#');
	  window.location.replace(
	    window.location.href.slice(0, i >= 0 ? i : 0) + '#' + path
	  );
	}
	
	/*  */
	
	
	var AbstractHistory = (function (History$$1) {
	  function AbstractHistory (router, base) {
	    History$$1.call(this, router, base);
	    this.stack = [];
	    this.index = -1;
	  }
	
	  if ( History$$1 ) AbstractHistory.__proto__ = History$$1;
	  AbstractHistory.prototype = Object.create( History$$1 && History$$1.prototype );
	  AbstractHistory.prototype.constructor = AbstractHistory;
	
	  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
	    var this$1 = this;
	
	    this.transitionTo(location, function (route) {
	      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
	      this$1.index++;
	      onComplete && onComplete(route);
	    }, onAbort);
	  };
	
	  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
	    var this$1 = this;
	
	    this.transitionTo(location, function (route) {
	      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
	      onComplete && onComplete(route);
	    }, onAbort);
	  };
	
	  AbstractHistory.prototype.go = function go (n) {
	    var this$1 = this;
	
	    var targetIndex = this.index + n;
	    if (targetIndex < 0 || targetIndex >= this.stack.length) {
	      return
	    }
	    var route = this.stack[targetIndex];
	    this.confirmTransition(route, function () {
	      this$1.index = targetIndex;
	      this$1.updateRoute(route);
	    });
	  };
	
	  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
	    var current = this.stack[this.stack.length - 1];
	    return current ? current.fullPath : '/'
	  };
	
	  AbstractHistory.prototype.ensureURL = function ensureURL () {
	    // noop
	  };
	
	  return AbstractHistory;
	}(History));
	
	/*  */
	
	var VueRouter = function VueRouter (options) {
	  if ( options === void 0 ) options = {};
	
	  this.app = null;
	  this.apps = [];
	  this.options = options;
	  this.beforeHooks = [];
	  this.resolveHooks = [];
	  this.afterHooks = [];
	  this.matcher = createMatcher(options.routes || [], this);
	
	  var mode = options.mode || 'hash';
	  this.fallback = mode === 'history' && !supportsPushState;
	  if (this.fallback) {
	    mode = 'hash';
	  }
	  if (!inBrowser) {
	    mode = 'abstract';
	  }
	  this.mode = mode;
	
	  switch (mode) {
	    case 'history':
	      this.history = new HTML5History(this, options.base);
	      break
	    case 'hash':
	      this.history = new HashHistory(this, options.base, this.fallback);
	      break
	    case 'abstract':
	      this.history = new AbstractHistory(this, options.base);
	      break
	    default:
	      if (process.env.NODE_ENV !== 'production') {
	        assert(false, ("invalid mode: " + mode));
	      }
	  }
	};
	
	var prototypeAccessors = { currentRoute: {} };
	
	VueRouter.prototype.match = function match (
	  raw,
	  current,
	  redirectedFrom
	) {
	  return this.matcher.match(raw, current, redirectedFrom)
	};
	
	prototypeAccessors.currentRoute.get = function () {
	  return this.history && this.history.current
	};
	
	VueRouter.prototype.init = function init (app /* Vue component instance */) {
	    var this$1 = this;
	
	  process.env.NODE_ENV !== 'production' && assert(
	    install.installed,
	    "not installed. Make sure to call `Vue.use(VueRouter)` " +
	    "before creating root instance."
	  );
	
	  this.apps.push(app);
	
	  // main app already initialized.
	  if (this.app) {
	    return
	  }
	
	  this.app = app;
	
	  var history = this.history;
	
	  if (history instanceof HTML5History) {
	    history.transitionTo(history.getCurrentLocation());
	  } else if (history instanceof HashHistory) {
	    var setupHashListener = function () {
	      history.setupListeners();
	    };
	    history.transitionTo(
	      history.getCurrentLocation(),
	      setupHashListener,
	      setupHashListener
	    );
	  }
	
	  history.listen(function (route) {
	    this$1.apps.forEach(function (app) {
	      app._route = route;
	    });
	  });
	};
	
	VueRouter.prototype.beforeEach = function beforeEach (fn) {
	  return registerHook(this.beforeHooks, fn)
	};
	
	VueRouter.prototype.beforeResolve = function beforeResolve (fn) {
	  return registerHook(this.resolveHooks, fn)
	};
	
	VueRouter.prototype.afterEach = function afterEach (fn) {
	  return registerHook(this.afterHooks, fn)
	};
	
	VueRouter.prototype.onReady = function onReady (cb, errorCb) {
	  this.history.onReady(cb, errorCb);
	};
	
	VueRouter.prototype.onError = function onError (errorCb) {
	  this.history.onError(errorCb);
	};
	
	VueRouter.prototype.push = function push (location, onComplete, onAbort) {
	  this.history.push(location, onComplete, onAbort);
	};
	
	VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
	  this.history.replace(location, onComplete, onAbort);
	};
	
	VueRouter.prototype.go = function go (n) {
	  this.history.go(n);
	};
	
	VueRouter.prototype.back = function back () {
	  this.go(-1);
	};
	
	VueRouter.prototype.forward = function forward () {
	  this.go(1);
	};
	
	VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
	  var route = to
	    ? this.resolve(to).route
	    : this.currentRoute;
	  if (!route) {
	    return []
	  }
	  return [].concat.apply([], route.matched.map(function (m) {
	    return Object.keys(m.components).map(function (key) {
	      return m.components[key]
	    })
	  }))
	};
	
	VueRouter.prototype.resolve = function resolve (
	  to,
	  current,
	  append
	) {
	  var location = normalizeLocation(
	    to,
	    current || this.history.current,
	    append,
	    this
	  );
	  var route = this.match(location, current);
	  var fullPath = route.redirectedFrom || route.fullPath;
	  var base = this.history.base;
	  var href = createHref(base, fullPath, this.mode);
	  return {
	    location: location,
	    route: route,
	    href: href,
	    // for backwards compat
	    normalizedTo: location,
	    resolved: route
	  }
	};
	
	VueRouter.prototype.addRoutes = function addRoutes (routes) {
	  this.matcher.addRoutes(routes);
	  if (this.history.current !== START) {
	    this.history.transitionTo(this.history.getCurrentLocation());
	  }
	};
	
	Object.defineProperties( VueRouter.prototype, prototypeAccessors );
	
	function registerHook (list, fn) {
	  list.push(fn);
	  return function () {
	    var i = list.indexOf(fn);
	    if (i > -1) { list.splice(i, 1); }
	  }
	}
	
	function createHref (base, fullPath, mode) {
	  var path = mode === 'hash' ? '#' + fullPath : fullPath;
	  return base ? cleanPath(base + '/' + path) : path
	}
	
	VueRouter.install = install;
	VueRouter.version = '2.5.0';
	
	if (inBrowser && window.Vue) {
	  window.Vue.use(VueRouter);
	}
	
	module.exports = VueRouter;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	/*!
	 * vue-resource v1.3.1
	 * https://github.com/pagekit/vue-resource
	 * Released under the MIT License.
	 */
	
	'use strict';
	
	/**
	 * Promises/A+ polyfill v1.1.4 (https://github.com/bramstein/promis)
	 */
	
	var RESOLVED = 0;
	var REJECTED = 1;
	var PENDING  = 2;
	
	function Promise$1(executor) {
	
	    this.state = PENDING;
	    this.value = undefined;
	    this.deferred = [];
	
	    var promise = this;
	
	    try {
	        executor(function (x) {
	            promise.resolve(x);
	        }, function (r) {
	            promise.reject(r);
	        });
	    } catch (e) {
	        promise.reject(e);
	    }
	}
	
	Promise$1.reject = function (r) {
	    return new Promise$1(function (resolve, reject) {
	        reject(r);
	    });
	};
	
	Promise$1.resolve = function (x) {
	    return new Promise$1(function (resolve, reject) {
	        resolve(x);
	    });
	};
	
	Promise$1.all = function all(iterable) {
	    return new Promise$1(function (resolve, reject) {
	        var count = 0, result = [];
	
	        if (iterable.length === 0) {
	            resolve(result);
	        }
	
	        function resolver(i) {
	            return function (x) {
	                result[i] = x;
	                count += 1;
	
	                if (count === iterable.length) {
	                    resolve(result);
	                }
	            };
	        }
	
	        for (var i = 0; i < iterable.length; i += 1) {
	            Promise$1.resolve(iterable[i]).then(resolver(i), reject);
	        }
	    });
	};
	
	Promise$1.race = function race(iterable) {
	    return new Promise$1(function (resolve, reject) {
	        for (var i = 0; i < iterable.length; i += 1) {
	            Promise$1.resolve(iterable[i]).then(resolve, reject);
	        }
	    });
	};
	
	var p$1 = Promise$1.prototype;
	
	p$1.resolve = function resolve(x) {
	    var promise = this;
	
	    if (promise.state === PENDING) {
	        if (x === promise) {
	            throw new TypeError('Promise settled with itself.');
	        }
	
	        var called = false;
	
	        try {
	            var then = x && x['then'];
	
	            if (x !== null && typeof x === 'object' && typeof then === 'function') {
	                then.call(x, function (x) {
	                    if (!called) {
	                        promise.resolve(x);
	                    }
	                    called = true;
	
	                }, function (r) {
	                    if (!called) {
	                        promise.reject(r);
	                    }
	                    called = true;
	                });
	                return;
	            }
	        } catch (e) {
	            if (!called) {
	                promise.reject(e);
	            }
	            return;
	        }
	
	        promise.state = RESOLVED;
	        promise.value = x;
	        promise.notify();
	    }
	};
	
	p$1.reject = function reject(reason) {
	    var promise = this;
	
	    if (promise.state === PENDING) {
	        if (reason === promise) {
	            throw new TypeError('Promise settled with itself.');
	        }
	
	        promise.state = REJECTED;
	        promise.value = reason;
	        promise.notify();
	    }
	};
	
	p$1.notify = function notify() {
	    var promise = this;
	
	    nextTick(function () {
	        if (promise.state !== PENDING) {
	            while (promise.deferred.length) {
	                var deferred = promise.deferred.shift(),
	                    onResolved = deferred[0],
	                    onRejected = deferred[1],
	                    resolve = deferred[2],
	                    reject = deferred[3];
	
	                try {
	                    if (promise.state === RESOLVED) {
	                        if (typeof onResolved === 'function') {
	                            resolve(onResolved.call(undefined, promise.value));
	                        } else {
	                            resolve(promise.value);
	                        }
	                    } else if (promise.state === REJECTED) {
	                        if (typeof onRejected === 'function') {
	                            resolve(onRejected.call(undefined, promise.value));
	                        } else {
	                            reject(promise.value);
	                        }
	                    }
	                } catch (e) {
	                    reject(e);
	                }
	            }
	        }
	    });
	};
	
	p$1.then = function then(onResolved, onRejected) {
	    var promise = this;
	
	    return new Promise$1(function (resolve, reject) {
	        promise.deferred.push([onResolved, onRejected, resolve, reject]);
	        promise.notify();
	    });
	};
	
	p$1.catch = function (onRejected) {
	    return this.then(undefined, onRejected);
	};
	
	/**
	 * Promise adapter.
	 */
	
	if (typeof Promise === 'undefined') {
	    window.Promise = Promise$1;
	}
	
	function PromiseObj(executor, context) {
	
	    if (executor instanceof Promise) {
	        this.promise = executor;
	    } else {
	        this.promise = new Promise(executor.bind(context));
	    }
	
	    this.context = context;
	}
	
	PromiseObj.all = function (iterable, context) {
	    return new PromiseObj(Promise.all(iterable), context);
	};
	
	PromiseObj.resolve = function (value, context) {
	    return new PromiseObj(Promise.resolve(value), context);
	};
	
	PromiseObj.reject = function (reason, context) {
	    return new PromiseObj(Promise.reject(reason), context);
	};
	
	PromiseObj.race = function (iterable, context) {
	    return new PromiseObj(Promise.race(iterable), context);
	};
	
	var p = PromiseObj.prototype;
	
	p.bind = function (context) {
	    this.context = context;
	    return this;
	};
	
	p.then = function (fulfilled, rejected) {
	
	    if (fulfilled && fulfilled.bind && this.context) {
	        fulfilled = fulfilled.bind(this.context);
	    }
	
	    if (rejected && rejected.bind && this.context) {
	        rejected = rejected.bind(this.context);
	    }
	
	    return new PromiseObj(this.promise.then(fulfilled, rejected), this.context);
	};
	
	p.catch = function (rejected) {
	
	    if (rejected && rejected.bind && this.context) {
	        rejected = rejected.bind(this.context);
	    }
	
	    return new PromiseObj(this.promise.catch(rejected), this.context);
	};
	
	p.finally = function (callback) {
	
	    return this.then(function (value) {
	            callback.call(this);
	            return value;
	        }, function (reason) {
	            callback.call(this);
	            return Promise.reject(reason);
	        }
	    );
	};
	
	/**
	 * Utility functions.
	 */
	
	var ref = {};
	var hasOwnProperty = ref.hasOwnProperty;
	
	var ref$1 = [];
	var slice = ref$1.slice;
	var debug = false;
	var ntick;
	
	var inBrowser = typeof window !== 'undefined';
	
	var Util = function (ref) {
	    var config = ref.config;
	    var nextTick = ref.nextTick;
	
	    ntick = nextTick;
	    debug = config.debug || !config.silent;
	};
	
	function warn(msg) {
	    if (typeof console !== 'undefined' && debug) {
	        console.warn('[VueResource warn]: ' + msg);
	    }
	}
	
	function error(msg) {
	    if (typeof console !== 'undefined') {
	        console.error(msg);
	    }
	}
	
	function nextTick(cb, ctx) {
	    return ntick(cb, ctx);
	}
	
	function trim(str) {
	    return str ? str.replace(/^\s*|\s*$/g, '') : '';
	}
	
	function toLower(str) {
	    return str ? str.toLowerCase() : '';
	}
	
	function toUpper(str) {
	    return str ? str.toUpperCase() : '';
	}
	
	var isArray = Array.isArray;
	
	function isString(val) {
	    return typeof val === 'string';
	}
	
	
	
	function isFunction(val) {
	    return typeof val === 'function';
	}
	
	function isObject(obj) {
	    return obj !== null && typeof obj === 'object';
	}
	
	function isPlainObject(obj) {
	    return isObject(obj) && Object.getPrototypeOf(obj) == Object.prototype;
	}
	
	function isBlob(obj) {
	    return typeof Blob !== 'undefined' && obj instanceof Blob;
	}
	
	function isFormData(obj) {
	    return typeof FormData !== 'undefined' && obj instanceof FormData;
	}
	
	function when(value, fulfilled, rejected) {
	
	    var promise = PromiseObj.resolve(value);
	
	    if (arguments.length < 2) {
	        return promise;
	    }
	
	    return promise.then(fulfilled, rejected);
	}
	
	function options(fn, obj, opts) {
	
	    opts = opts || {};
	
	    if (isFunction(opts)) {
	        opts = opts.call(obj);
	    }
	
	    return merge(fn.bind({$vm: obj, $options: opts}), fn, {$options: opts});
	}
	
	function each(obj, iterator) {
	
	    var i, key;
	
	    if (isArray(obj)) {
	        for (i = 0; i < obj.length; i++) {
	            iterator.call(obj[i], obj[i], i);
	        }
	    } else if (isObject(obj)) {
	        for (key in obj) {
	            if (hasOwnProperty.call(obj, key)) {
	                iterator.call(obj[key], obj[key], key);
	            }
	        }
	    }
	
	    return obj;
	}
	
	var assign = Object.assign || _assign;
	
	function merge(target) {
	
	    var args = slice.call(arguments, 1);
	
	    args.forEach(function (source) {
	        _merge(target, source, true);
	    });
	
	    return target;
	}
	
	function defaults(target) {
	
	    var args = slice.call(arguments, 1);
	
	    args.forEach(function (source) {
	
	        for (var key in source) {
	            if (target[key] === undefined) {
	                target[key] = source[key];
	            }
	        }
	
	    });
	
	    return target;
	}
	
	function _assign(target) {
	
	    var args = slice.call(arguments, 1);
	
	    args.forEach(function (source) {
	        _merge(target, source);
	    });
	
	    return target;
	}
	
	function _merge(target, source, deep) {
	    for (var key in source) {
	        if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
	            if (isPlainObject(source[key]) && !isPlainObject(target[key])) {
	                target[key] = {};
	            }
	            if (isArray(source[key]) && !isArray(target[key])) {
	                target[key] = [];
	            }
	            _merge(target[key], source[key], deep);
	        } else if (source[key] !== undefined) {
	            target[key] = source[key];
	        }
	    }
	}
	
	/**
	 * Root Prefix Transform.
	 */
	
	var root = function (options$$1, next) {
	
	    var url = next(options$$1);
	
	    if (isString(options$$1.root) && !url.match(/^(https?:)?\//)) {
	        url = options$$1.root + '/' + url;
	    }
	
	    return url;
	};
	
	/**
	 * Query Parameter Transform.
	 */
	
	var query = function (options$$1, next) {
	
	    var urlParams = Object.keys(Url.options.params), query = {}, url = next(options$$1);
	
	    each(options$$1.params, function (value, key) {
	        if (urlParams.indexOf(key) === -1) {
	            query[key] = value;
	        }
	    });
	
	    query = Url.params(query);
	
	    if (query) {
	        url += (url.indexOf('?') == -1 ? '?' : '&') + query;
	    }
	
	    return url;
	};
	
	/**
	 * URL Template v2.0.6 (https://github.com/bramstein/url-template)
	 */
	
	function expand(url, params, variables) {
	
	    var tmpl = parse(url), expanded = tmpl.expand(params);
	
	    if (variables) {
	        variables.push.apply(variables, tmpl.vars);
	    }
	
	    return expanded;
	}
	
	function parse(template) {
	
	    var operators = ['+', '#', '.', '/', ';', '?', '&'], variables = [];
	
	    return {
	        vars: variables,
	        expand: function expand(context) {
	            return template.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, function (_, expression, literal) {
	                if (expression) {
	
	                    var operator = null, values = [];
	
	                    if (operators.indexOf(expression.charAt(0)) !== -1) {
	                        operator = expression.charAt(0);
	                        expression = expression.substr(1);
	                    }
	
	                    expression.split(/,/g).forEach(function (variable) {
	                        var tmp = /([^:\*]*)(?::(\d+)|(\*))?/.exec(variable);
	                        values.push.apply(values, getValues(context, operator, tmp[1], tmp[2] || tmp[3]));
	                        variables.push(tmp[1]);
	                    });
	
	                    if (operator && operator !== '+') {
	
	                        var separator = ',';
	
	                        if (operator === '?') {
	                            separator = '&';
	                        } else if (operator !== '#') {
	                            separator = operator;
	                        }
	
	                        return (values.length !== 0 ? operator : '') + values.join(separator);
	                    } else {
	                        return values.join(',');
	                    }
	
	                } else {
	                    return encodeReserved(literal);
	                }
	            });
	        }
	    };
	}
	
	function getValues(context, operator, key, modifier) {
	
	    var value = context[key], result = [];
	
	    if (isDefined(value) && value !== '') {
	        if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
	            value = value.toString();
	
	            if (modifier && modifier !== '*') {
	                value = value.substring(0, parseInt(modifier, 10));
	            }
	
	            result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : null));
	        } else {
	            if (modifier === '*') {
	                if (Array.isArray(value)) {
	                    value.filter(isDefined).forEach(function (value) {
	                        result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : null));
	                    });
	                } else {
	                    Object.keys(value).forEach(function (k) {
	                        if (isDefined(value[k])) {
	                            result.push(encodeValue(operator, value[k], k));
	                        }
	                    });
	                }
	            } else {
	                var tmp = [];
	
	                if (Array.isArray(value)) {
	                    value.filter(isDefined).forEach(function (value) {
	                        tmp.push(encodeValue(operator, value));
	                    });
	                } else {
	                    Object.keys(value).forEach(function (k) {
	                        if (isDefined(value[k])) {
	                            tmp.push(encodeURIComponent(k));
	                            tmp.push(encodeValue(operator, value[k].toString()));
	                        }
	                    });
	                }
	
	                if (isKeyOperator(operator)) {
	                    result.push(encodeURIComponent(key) + '=' + tmp.join(','));
	                } else if (tmp.length !== 0) {
	                    result.push(tmp.join(','));
	                }
	            }
	        }
	    } else {
	        if (operator === ';') {
	            result.push(encodeURIComponent(key));
	        } else if (value === '' && (operator === '&' || operator === '?')) {
	            result.push(encodeURIComponent(key) + '=');
	        } else if (value === '') {
	            result.push('');
	        }
	    }
	
	    return result;
	}
	
	function isDefined(value) {
	    return value !== undefined && value !== null;
	}
	
	function isKeyOperator(operator) {
	    return operator === ';' || operator === '&' || operator === '?';
	}
	
	function encodeValue(operator, value, key) {
	
	    value = (operator === '+' || operator === '#') ? encodeReserved(value) : encodeURIComponent(value);
	
	    if (key) {
	        return encodeURIComponent(key) + '=' + value;
	    } else {
	        return value;
	    }
	}
	
	function encodeReserved(str) {
	    return str.split(/(%[0-9A-Fa-f]{2})/g).map(function (part) {
	        if (!/%[0-9A-Fa-f]/.test(part)) {
	            part = encodeURI(part);
	        }
	        return part;
	    }).join('');
	}
	
	/**
	 * URL Template (RFC 6570) Transform.
	 */
	
	var template = function (options) {
	
	    var variables = [], url = expand(options.url, options.params, variables);
	
	    variables.forEach(function (key) {
	        delete options.params[key];
	    });
	
	    return url;
	};
	
	/**
	 * Service for URL templating.
	 */
	
	function Url(url, params) {
	
	    var self = this || {}, options$$1 = url, transform;
	
	    if (isString(url)) {
	        options$$1 = {url: url, params: params};
	    }
	
	    options$$1 = merge({}, Url.options, self.$options, options$$1);
	
	    Url.transforms.forEach(function (handler) {
	
	        if (isString(handler)) {
	            handler = Url.transform[handler];
	        }
	
	        if (isFunction(handler)) {
	            transform = factory(handler, transform, self.$vm);
	        }
	
	    });
	
	    return transform(options$$1);
	}
	
	/**
	 * Url options.
	 */
	
	Url.options = {
	    url: '',
	    root: null,
	    params: {}
	};
	
	/**
	 * Url transforms.
	 */
	
	Url.transform = {template: template, query: query, root: root};
	Url.transforms = ['template', 'query', 'root'];
	
	/**
	 * Encodes a Url parameter string.
	 *
	 * @param {Object} obj
	 */
	
	Url.params = function (obj) {
	
	    var params = [], escape = encodeURIComponent;
	
	    params.add = function (key, value) {
	
	        if (isFunction(value)) {
	            value = value();
	        }
	
	        if (value === null) {
	            value = '';
	        }
	
	        this.push(escape(key) + '=' + escape(value));
	    };
	
	    serialize(params, obj);
	
	    return params.join('&').replace(/%20/g, '+');
	};
	
	/**
	 * Parse a URL and return its components.
	 *
	 * @param {String} url
	 */
	
	Url.parse = function (url) {
	
	    var el = document.createElement('a');
	
	    if (document.documentMode) {
	        el.href = url;
	        url = el.href;
	    }
	
	    el.href = url;
	
	    return {
	        href: el.href,
	        protocol: el.protocol ? el.protocol.replace(/:$/, '') : '',
	        port: el.port,
	        host: el.host,
	        hostname: el.hostname,
	        pathname: el.pathname.charAt(0) === '/' ? el.pathname : '/' + el.pathname,
	        search: el.search ? el.search.replace(/^\?/, '') : '',
	        hash: el.hash ? el.hash.replace(/^#/, '') : ''
	    };
	};
	
	function factory(handler, next, vm) {
	    return function (options$$1) {
	        return handler.call(vm, options$$1, next);
	    };
	}
	
	function serialize(params, obj, scope) {
	
	    var array = isArray(obj), plain = isPlainObject(obj), hash;
	
	    each(obj, function (value, key) {
	
	        hash = isObject(value) || isArray(value);
	
	        if (scope) {
	            key = scope + '[' + (plain || hash ? key : '') + ']';
	        }
	
	        if (!scope && array) {
	            params.add(value.name, value.value);
	        } else if (hash) {
	            serialize(params, value, key);
	        } else {
	            params.add(key, value);
	        }
	    });
	}
	
	/**
	 * XDomain client (Internet Explorer).
	 */
	
	var xdrClient = function (request) {
	    return new PromiseObj(function (resolve) {
	
	        var xdr = new XDomainRequest(), handler = function (ref) {
	            var type = ref.type;
	
	
	            var status = 0;
	
	            if (type === 'load') {
	                status = 200;
	            } else if (type === 'error') {
	                status = 500;
	            }
	
	            resolve(request.respondWith(xdr.responseText, {status: status}));
	        };
	
	        request.abort = function () { return xdr.abort(); };
	
	        xdr.open(request.method, request.getUrl());
	
	        if (request.timeout) {
	            xdr.timeout = request.timeout;
	        }
	
	        xdr.onload = handler;
	        xdr.onabort = handler;
	        xdr.onerror = handler;
	        xdr.ontimeout = handler;
	        xdr.onprogress = function () {};
	        xdr.send(request.getBody());
	    });
	};
	
	/**
	 * CORS Interceptor.
	 */
	
	var SUPPORTS_CORS = inBrowser && 'withCredentials' in new XMLHttpRequest();
	
	var cors = function (request, next) {
	
	    if (inBrowser) {
	
	        var orgUrl = Url.parse(location.href);
	        var reqUrl = Url.parse(request.getUrl());
	
	        if (reqUrl.protocol !== orgUrl.protocol || reqUrl.host !== orgUrl.host) {
	
	            request.crossOrigin = true;
	            request.emulateHTTP = false;
	
	            if (!SUPPORTS_CORS) {
	                request.client = xdrClient;
	            }
	        }
	    }
	
	    next();
	};
	
	/**
	 * Body Interceptor.
	 */
	
	var body = function (request, next) {
	
	    if (isFormData(request.body)) {
	
	        request.headers.delete('Content-Type');
	
	    } else if (isObject(request.body) || isArray(request.body)) {
	
	        if (request.emulateJSON) {
	            request.body = Url.params(request.body);
	            request.headers.set('Content-Type', 'application/x-www-form-urlencoded');
	        } else {
	            request.body = JSON.stringify(request.body);
	        }
	    }
	
	    next(function (response) {
	
	        Object.defineProperty(response, 'data', {
	
	            get: function get() {
	                return this.body;
	            },
	
	            set: function set(body) {
	                this.body = body;
	            }
	
	        });
	
	        return response.bodyText ? when(response.text(), function (text) {
	
	            var type = response.headers.get('Content-Type') || '';
	
	            if (type.indexOf('application/json') === 0 || isJson(text)) {
	
	                try {
	                    response.body = JSON.parse(text);
	                } catch (e) {
	                    response.body = null;
	                }
	
	            } else {
	                response.body = text;
	            }
	
	            return response;
	
	        }) : response;
	
	    });
	};
	
	function isJson(str) {
	
	    var start = str.match(/^\[|^\{(?!\{)/), end = {'[': /]$/, '{': /}$/};
	
	    return start && end[start[0]].test(str);
	}
	
	/**
	 * JSONP client (Browser).
	 */
	
	var jsonpClient = function (request) {
	    return new PromiseObj(function (resolve) {
	
	        var name = request.jsonp || 'callback', callback = request.jsonpCallback || '_jsonp' + Math.random().toString(36).substr(2), body = null, handler, script;
	
	        handler = function (ref) {
	            var type = ref.type;
	
	
	            var status = 0;
	
	            if (type === 'load' && body !== null) {
	                status = 200;
	            } else if (type === 'error') {
	                status = 500;
	            }
	
	            if (status && window[callback]) {
	                delete window[callback];
	                document.body.removeChild(script);
	            }
	
	            resolve(request.respondWith(body, {status: status}));
	        };
	
	        window[callback] = function (result) {
	            body = JSON.stringify(result);
	        };
	
	        request.abort = function () {
	            handler({type: 'abort'});
	        };
	
	        request.params[name] = callback;
	
	        if (request.timeout) {
	            setTimeout(request.abort, request.timeout);
	        }
	
	        script = document.createElement('script');
	        script.src = request.getUrl();
	        script.type = 'text/javascript';
	        script.async = true;
	        script.onload = handler;
	        script.onerror = handler;
	
	        document.body.appendChild(script);
	    });
	};
	
	/**
	 * JSONP Interceptor.
	 */
	
	var jsonp = function (request, next) {
	
	    if (request.method == 'JSONP') {
	        request.client = jsonpClient;
	    }
	
	    next();
	};
	
	/**
	 * Before Interceptor.
	 */
	
	var before = function (request, next) {
	
	    if (isFunction(request.before)) {
	        request.before.call(this, request);
	    }
	
	    next();
	};
	
	/**
	 * HTTP method override Interceptor.
	 */
	
	var method = function (request, next) {
	
	    if (request.emulateHTTP && /^(PUT|PATCH|DELETE)$/i.test(request.method)) {
	        request.headers.set('X-HTTP-Method-Override', request.method);
	        request.method = 'POST';
	    }
	
	    next();
	};
	
	/**
	 * Header Interceptor.
	 */
	
	var header = function (request, next) {
	
	    var headers = assign({}, Http.headers.common,
	        !request.crossOrigin ? Http.headers.custom : {},
	        Http.headers[toLower(request.method)]
	    );
	
	    each(headers, function (value, name) {
	        if (!request.headers.has(name)) {
	            request.headers.set(name, value);
	        }
	    });
	
	    next();
	};
	
	/**
	 * XMLHttp client (Browser).
	 */
	
	var xhrClient = function (request) {
	    return new PromiseObj(function (resolve) {
	
	        var xhr = new XMLHttpRequest(), handler = function (event) {
	
	            var response = request.respondWith(
	                'response' in xhr ? xhr.response : xhr.responseText, {
	                    status: xhr.status === 1223 ? 204 : xhr.status, // IE9 status bug
	                    statusText: xhr.status === 1223 ? 'No Content' : trim(xhr.statusText)
	                }
	            );
	
	            each(trim(xhr.getAllResponseHeaders()).split('\n'), function (row) {
	                response.headers.append(row.slice(0, row.indexOf(':')), row.slice(row.indexOf(':') + 1));
	            });
	
	            resolve(response);
	        };
	
	        request.abort = function () { return xhr.abort(); };
	
	        if (request.progress) {
	            if (request.method === 'GET') {
	                xhr.addEventListener('progress', request.progress);
	            } else if (/^(POST|PUT)$/i.test(request.method)) {
	                xhr.upload.addEventListener('progress', request.progress);
	            }
	        }
	
	        xhr.open(request.method, request.getUrl(), true);
	
	        if (request.timeout) {
	            xhr.timeout = request.timeout;
	        }
	
	        if (request.responseType && 'responseType' in xhr) {
	            xhr.responseType = request.responseType;
	        }
	
	        if (request.withCredentials || request.credentials) {
	            xhr.withCredentials = true;
	        }
	
	        if (!request.crossOrigin) {
	            request.headers.set('X-Requested-With', 'XMLHttpRequest');
	        }
	
	        request.headers.forEach(function (value, name) {
	            xhr.setRequestHeader(name, value);
	        });
	
	        xhr.onload = handler;
	        xhr.onabort = handler;
	        xhr.onerror = handler;
	        xhr.ontimeout = handler;
	        xhr.send(request.getBody());
	    });
	};
	
	/**
	 * Http client (Node).
	 */
	
	var nodeClient = function (request) {
	
	    var client = __webpack_require__(4);
	
	    return new PromiseObj(function (resolve) {
	
	        var url = request.getUrl();
	        var body = request.getBody();
	        var method = request.method;
	        var headers = {}, handler;
	
	        request.headers.forEach(function (value, name) {
	            headers[name] = value;
	        });
	
	        client(url, {body: body, method: method, headers: headers}).then(handler = function (resp) {
	
	            var response = request.respondWith(resp.body, {
	                    status: resp.statusCode,
	                    statusText: trim(resp.statusMessage)
	                }
	            );
	
	            each(resp.headers, function (value, name) {
	                response.headers.set(name, value);
	            });
	
	            resolve(response);
	
	        }, function (error$$1) { return handler(error$$1.response); });
	    });
	};
	
	/**
	 * Base client.
	 */
	
	var Client = function (context) {
	
	    var reqHandlers = [sendRequest], resHandlers = [], handler;
	
	    if (!isObject(context)) {
	        context = null;
	    }
	
	    function Client(request) {
	        return new PromiseObj(function (resolve) {
	
	            function exec() {
	
	                handler = reqHandlers.pop();
	
	                if (isFunction(handler)) {
	                    handler.call(context, request, next);
	                } else {
	                    warn(("Invalid interceptor of type " + (typeof handler) + ", must be a function"));
	                    next();
	                }
	            }
	
	            function next(response) {
	
	                if (isFunction(response)) {
	
	                    resHandlers.unshift(response);
	
	                } else if (isObject(response)) {
	
	                    resHandlers.forEach(function (handler) {
	                        response = when(response, function (response) {
	                            return handler.call(context, response) || response;
	                        });
	                    });
	
	                    when(response, resolve);
	
	                    return;
	                }
	
	                exec();
	            }
	
	            exec();
	
	        }, context);
	    }
	
	    Client.use = function (handler) {
	        reqHandlers.push(handler);
	    };
	
	    return Client;
	};
	
	function sendRequest(request, resolve) {
	
	    var client = request.client || (inBrowser ? xhrClient : nodeClient);
	
	    resolve(client(request));
	}
	
	/**
	 * HTTP Headers.
	 */
	
	var Headers = function Headers(headers) {
	    var this$1 = this;
	
	
	    this.map = {};
	
	    each(headers, function (value, name) { return this$1.append(name, value); });
	};
	
	Headers.prototype.has = function has (name) {
	    return getName(this.map, name) !== null;
	};
	
	Headers.prototype.get = function get (name) {
	
	    var list = this.map[getName(this.map, name)];
	
	    return list ? list.join() : null;
	};
	
	Headers.prototype.getAll = function getAll (name) {
	    return this.map[getName(this.map, name)] || [];
	};
	
	Headers.prototype.set = function set (name, value) {
	    this.map[normalizeName(getName(this.map, name) || name)] = [trim(value)];
	};
	
	Headers.prototype.append = function append (name, value){
	
	    var list = this.map[getName(this.map, name)];
	
	    if (list) {
	        list.push(trim(value));
	    } else {
	        this.set(name, value);
	    }
	};
	
	Headers.prototype.delete = function delete$1 (name){
	    delete this.map[getName(this.map, name)];
	};
	
	Headers.prototype.deleteAll = function deleteAll (){
	    this.map = {};
	};
	
	Headers.prototype.forEach = function forEach (callback, thisArg) {
	        var this$1 = this;
	
	    each(this.map, function (list, name) {
	        each(list, function (value) { return callback.call(thisArg, value, name, this$1); });
	    });
	};
	
	function getName(map, name) {
	    return Object.keys(map).reduce(function (prev, curr) {
	        return toLower(name) === toLower(curr) ? curr : prev;
	    }, null);
	}
	
	function normalizeName(name) {
	
	    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
	        throw new TypeError('Invalid character in header field name');
	    }
	
	    return trim(name);
	}
	
	/**
	 * HTTP Response.
	 */
	
	var Response = function Response(body, ref) {
	    var url = ref.url;
	    var headers = ref.headers;
	    var status = ref.status;
	    var statusText = ref.statusText;
	
	
	    this.url = url;
	    this.ok = status >= 200 && status < 300;
	    this.status = status || 0;
	    this.statusText = statusText || '';
	    this.headers = new Headers(headers);
	    this.body = body;
	
	    if (isString(body)) {
	
	        this.bodyText = body;
	
	    } else if (isBlob(body)) {
	
	        this.bodyBlob = body;
	
	        if (isBlobText(body)) {
	            this.bodyText = blobText(body);
	        }
	    }
	};
	
	Response.prototype.blob = function blob () {
	    return when(this.bodyBlob);
	};
	
	Response.prototype.text = function text () {
	    return when(this.bodyText);
	};
	
	Response.prototype.json = function json () {
	    return when(this.text(), function (text) { return JSON.parse(text); });
	};
	
	function blobText(body) {
	    return new PromiseObj(function (resolve) {
	
	        var reader = new FileReader();
	
	        reader.readAsText(body);
	        reader.onload = function () {
	            resolve(reader.result);
	        };
	
	    });
	}
	
	function isBlobText(body) {
	    return body.type.indexOf('text') === 0 || body.type.indexOf('json') !== -1;
	}
	
	/**
	 * HTTP Request.
	 */
	
	var Request = function Request(options$$1) {
	
	    this.body = null;
	    this.params = {};
	
	    assign(this, options$$1, {
	        method: toUpper(options$$1.method || 'GET')
	    });
	
	    if (!(this.headers instanceof Headers)) {
	        this.headers = new Headers(this.headers);
	    }
	};
	
	Request.prototype.getUrl = function getUrl (){
	    return Url(this);
	};
	
	Request.prototype.getBody = function getBody (){
	    return this.body;
	};
	
	Request.prototype.respondWith = function respondWith (body, options$$1) {
	    return new Response(body, assign(options$$1 || {}, {url: this.getUrl()}));
	};
	
	/**
	 * Service for sending network requests.
	 */
	
	var COMMON_HEADERS = {'Accept': 'application/json, text/plain, */*'};
	var JSON_CONTENT_TYPE = {'Content-Type': 'application/json;charset=utf-8'};
	
	function Http(options$$1) {
	
	    var self = this || {}, client = Client(self.$vm);
	
	    defaults(options$$1 || {}, self.$options, Http.options);
	
	    Http.interceptors.forEach(function (handler) {
	
	        if (isString(handler)) {
	            handler = Http.interceptor[handler];
	        }
	
	        if (isFunction(handler)) {
	            client.use(handler);
	        }
	
	    });
	
	    return client(new Request(options$$1)).then(function (response) {
	
	        return response.ok ? response : PromiseObj.reject(response);
	
	    }, function (response) {
	
	        if (response instanceof Error) {
	            error(response);
	        }
	
	        return PromiseObj.reject(response);
	    });
	}
	
	Http.options = {};
	
	Http.headers = {
	    put: JSON_CONTENT_TYPE,
	    post: JSON_CONTENT_TYPE,
	    patch: JSON_CONTENT_TYPE,
	    delete: JSON_CONTENT_TYPE,
	    common: COMMON_HEADERS,
	    custom: {}
	};
	
	Http.interceptor = {before: before, method: method, body: body, jsonp: jsonp, header: header, cors: cors};
	Http.interceptors = ['before', 'method', 'body', 'jsonp', 'header', 'cors'];
	
	['get', 'delete', 'head', 'jsonp'].forEach(function (method$$1) {
	
	    Http[method$$1] = function (url, options$$1) {
	        return this(assign(options$$1 || {}, {url: url, method: method$$1}));
	    };
	
	});
	
	['post', 'put', 'patch'].forEach(function (method$$1) {
	
	    Http[method$$1] = function (url, body$$1, options$$1) {
	        return this(assign(options$$1 || {}, {url: url, method: method$$1, body: body$$1}));
	    };
	
	});
	
	/**
	 * Service for interacting with RESTful services.
	 */
	
	function Resource(url, params, actions, options$$1) {
	
	    var self = this || {}, resource = {};
	
	    actions = assign({},
	        Resource.actions,
	        actions
	    );
	
	    each(actions, function (action, name) {
	
	        action = merge({url: url, params: assign({}, params)}, options$$1, action);
	
	        resource[name] = function () {
	            return (self.$http || Http)(opts(action, arguments));
	        };
	    });
	
	    return resource;
	}
	
	function opts(action, args) {
	
	    var options$$1 = assign({}, action), params = {}, body;
	
	    switch (args.length) {
	
	        case 2:
	
	            params = args[0];
	            body = args[1];
	
	            break;
	
	        case 1:
	
	            if (/^(POST|PUT|PATCH)$/i.test(options$$1.method)) {
	                body = args[0];
	            } else {
	                params = args[0];
	            }
	
	            break;
	
	        case 0:
	
	            break;
	
	        default:
	
	            throw 'Expected up to 2 arguments [params, body], got ' + args.length + ' arguments';
	    }
	
	    options$$1.body = body;
	    options$$1.params = assign({}, options$$1.params, params);
	
	    return options$$1;
	}
	
	Resource.actions = {
	
	    get: {method: 'GET'},
	    save: {method: 'POST'},
	    query: {method: 'GET'},
	    update: {method: 'PUT'},
	    remove: {method: 'DELETE'},
	    delete: {method: 'DELETE'}
	
	};
	
	/**
	 * Install plugin.
	 */
	
	function plugin(Vue) {
	
	    if (plugin.installed) {
	        return;
	    }
	
	    Util(Vue);
	
	    Vue.url = Url;
	    Vue.http = Http;
	    Vue.resource = Resource;
	    Vue.Promise = PromiseObj;
	
	    Object.defineProperties(Vue.prototype, {
	
	        $url: {
	            get: function get() {
	                return options(Vue.url, this, this.$options.url);
	            }
	        },
	
	        $http: {
	            get: function get() {
	                return options(Vue.http, this, this.$options.http);
	            }
	        },
	
	        $resource: {
	            get: function get() {
	                return Vue.resource.bind(this);
	            }
	        },
	
	        $promise: {
	            get: function get() {
	                var this$1 = this;
	
	                return function (executor) { return new Vue.Promise(executor, this$1); };
	            }
	        }
	
	    });
	}
	
	if (typeof window !== 'undefined' && window.Vue) {
	    window.Vue.use(plugin);
	}
	
	module.exports = plugin;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	/* (ignored) */

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

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
	__vue_options__.__file = "/Users/oz/src/material-components/examples/src/components/usage.vue";
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
	      hotAPI.createRecord("data-v-bacbc222", __vue_options__);
	    } else {
	      hotAPI.reload("data-v-bacbc222", __vue_options__);
	    }
	  })();
	}
	if (__vue_options__.functional) {
	  console.error("[vue-loader] usage.vue: functional components are not supported and should be defined in plain js files using render functions.");
	}
	
	module.exports = __vue_exports__;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

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
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	    mounted: function mounted() {
	        this.$el.querySelectorAll('.html').forEach(function (el) {
	            return hljs.highlightBlock(el);
	        });
	    },
	    data: function data() {
	        return {};
	    }
	};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _vm._m(0)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('h3', [_vm._v("Getting started")]), _vm._v(" "), _c('h4', [_vm._v("Just add the following <link> and <script> elements into your HTML pages")]), _vm._v(" "), _c('pre', {
	    pre: true
	  }, [_vm._v("\n            "), _c('code', {
	    attrs: {
	      "class": "html"
	    }
	  }, [_vm._v("\n                // Material Design Icons\n                <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/icon?family=Material+Icons\">\n\n                // Material Design Lite\n                <link rel=\"stylesheet\" href=\"https://code.getmdl.io/1.3.0/material.indigo-pink.min.css\">\n                <script src=\"https://code.getmdl.io/1.3.0/material.min.js\"></script>\n\n                // Vue.Js\n                <script src=\"https://unpkg.com/vue/dist/vue.min.js\"></script>\n\n                // Vue Material Components\n                <script src=\"https://unpkg.com/milo-material-components@1.0.0/dist/lib.build.js\"></script>\n            ")]), _vm._v("\n        ")]), _vm._v(" "), _c('pre', {
	    pre: true
	  }, [_vm._v("\n            "), _c('code', {
	    attrs: {
	      "class": "html"
	    }
	  }, [_vm._v("\n                <div id=\"app\">\n                    <m-button raised primary ripple>Material button</m-button>\n                </div>\n\n                <script>\n                    Vue.use(VueReusableMaterialComponents);\n\n                    new Vue({\n                        el: '#app'\n                    });\n                </script>\n            ")]), _vm._v("\n        ")]), _vm._v(" "), _c('p'), _c('h4', [_c('a', {
	    attrs: {
	      "href": "https://jsfiddle.net/ozzon91/2np67okx/",
	      "target": "_blank"
	    }
	  }, [_vm._v("Open example above on jsfiddle")])]), _vm._v(" "), _c('p'), _vm._v(" "), _c('h4', [_vm._v("Install from npm")]), _vm._v(" "), _c('pre', {
	    pre: true
	  }, [_vm._v("\n                "), _c('code', {
	    attrs: {
	      "class": "html"
	    }
	  }, [_vm._v("\nnpm i -S milo-material-components\n                ")]), _vm._v("\n            ")])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-bacbc222", module.exports)
	  }
	}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* script */
	__vue_exports__ = __webpack_require__(9);
	
	/* template */
	var __vue_template__ = __webpack_require__(11);
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
	__vue_options__.__file = "/Users/oz/src/material-components/examples/src/components/nav.vue";
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
	      hotAPI.createRecord("data-v-3747e21e", __vue_options__);
	    } else {
	      hotAPI.reload("data-v-3747e21e", __vue_options__);
	    }
	  })();
	}
	if (__vue_options__.functional) {
	  console.error("[vue-loader] nav.vue: functional components are not supported and should be defined in plain js files using render functions.");
	}
	
	module.exports = __vue_exports__;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _helpers = __webpack_require__(10);
	
	exports.default = {
	    computed: {
	        sortedMenuItems: function sortedMenuItems() {
	            return (0, _helpers.sortByKey)(this.menuItems, 'title');
	        }
	    },
	
	    data: function data() {
	        return {
	            menuItems: [{
	                title: 'Text Fields',
	                path: 'textfields'
	            }, {
	                title: 'Buttons',
	                path: 'buttons'
	            }, {
	                title: 'Snackbar',
	                path: 'snackbar'
	            }, {
	                title: 'Selects',
	                path: 'selects'
	            }, {
	                title: 'Sliders',
	                path: 'sliders'
	            }, {
	                title: 'Badges',
	                path: 'badges'
	            }, {
	                title: 'Menu',
	                path: 'menu'
	            }, {
	                title: 'Loading',
	                path: 'loading'
	            }, {
	                title: 'Toggles',
	                path: 'toggles'
	            }, {
	                title: 'Tabs',
	                path: 'tabs'
	            }, {
	                title: 'Tooltips',
	                path: 'tooltips'
	            }, {
	                title: 'Tables',
	                path: 'table'
	            }, {
	                title: 'Dialogs',
	                path: 'dialogs'
	            }, {
	                title: 'Cards',
	                path: 'cards'
	            }, {
	                title: 'Chips',
	                path: 'chips'
	            }, {
	                title: 'Lists',
	                path: 'lists'
	            }]
	
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
	//
	//
	//
	//
	//
	//

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.sortByKey = sortByKey;
	function sortByKey(array, key) {
	  return array.sort(function (a, b) {
	    var x = a[key];var y = b[key];
	    return x < y ? -1 : x > y ? 1 : 0;
	  });
	}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "mdl-layout__drawer"
	  }, [_c('span', {
	    staticClass: "mdl-layout-title"
	  }, [_vm._v("Examples")]), _vm._v(" "), _c('nav', {
	    staticClass: "mdl-navigation"
	  }, [_c('router-link', {
	    staticClass: "mdl-navigation__link",
	    attrs: {
	      "to": "/usage"
	    }
	  }, [_c('b', [_vm._v("Getting started")])]), _vm._v(" "), _vm._l((_vm.sortedMenuItems), function(i) {
	    return _c('router-link', {
	      staticClass: "mdl-navigation__link",
	      attrs: {
	        "to": '/' + i.path
	      }
	    }, [_vm._v("\n            " + _vm._s(i.title) + "\n        ")])
	  })], 2)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-3747e21e", module.exports)
	  }
	}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* script */
	__vue_exports__ = __webpack_require__(13);
	
	/* template */
	var __vue_template__ = __webpack_require__(14);
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
	__vue_options__.__file = "/Users/oz/src/material-components/examples/src/components/textfields.vue";
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
	      hotAPI.createRecord("data-v-6d230848", __vue_options__);
	    } else {
	      hotAPI.reload("data-v-6d230848", __vue_options__);
	    }
	  })();
	}
	if (__vue_options__.functional) {
	  console.error("[vue-loader] textfields.vue: functional components are not supported and should be defined in plain js files using render functions.");
	}
	
	module.exports = __vue_exports__;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

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
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
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
	    mounted: function mounted() {
	        this.$el.querySelectorAll('.html').forEach(function (el) {
	            return hljs.highlightBlock(el);
	        });
	    },
	    data: function data() {
	        return {
	            form: {
	                firstName: '',
	                lastName: '',
	                email: ''
	            },
	
	            doc: [{ name: 'v-model', description: 'Defines a value for the textfield', remark: '' }, { name: 'label', description: 'Defines the label used on the the textfield', remark: 'You don\'t need this if you use floating-label' }, { name: 'floating-label', description: 'Defines whether the label should float or not. If the given value is a String, you don\'t need to provide a label prop', remark: '' }, { name: 'textarea', description: 'Makes the textfield a textarea instead of an input', remark: '' }, { name: 'rows', description: 'Controls the number of rows used in the textarea', remark: 'Needs the textarea prop' }, { name: 'pattern', description: 'Input validation using a Regex', remark: 'Only works on non-textareas' }, { name: 'error', description: 'Defines the error displayed when the input text doesn\'t match the given pattern', remark: 'Needs the pattern prop' }, { name: 'expandable', description: 'Makes the textfield look like a button that expands. You need to pass a material icon to this prop', remark: 'Needs to have an id set' }, { name: 'type', description: 'Defines the type of the input', remark: 'Defaults to text. Only works on non-textarea' }, { name: 'disabled', description: 'Disables the input', remark: 'Add it without any value or bind it to a Boolean' }, { name: 'readonly', description: 'Makes the input readonly', remark: 'Add it without any value or bind it to a Boolean' }, { name: 'maxlength', description: 'Defines the maxlength of the input or textarea', remark: 'This uses html attribute maxlength' }]
	        };
	    }
	};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('h4', [_vm._v("Text Fields")]), _vm._v(" "), _c('div', [_c('m-textfield', {
	    attrs: {
	      "label": "Text..."
	    }
	  }), _vm._v(" "), _c('br'), _vm._v(" "), _c('m-textfield', {
	    attrs: {
	      "float-label": "Textarea...",
	      "textarea": ""
	    }
	  }), _vm._v(" "), _c('br'), _vm._v(" "), _c('m-textfield', {
	    attrs: {
	      "label": "Number...",
	      "pattern": "-?[0-9]*(\\.[0-9]+)?",
	      "error": "Invalid input"
	    }
	  }), _vm._v(" "), _c('br'), _vm._v(" "), _c('m-textfield', {
	    attrs: {
	      "expandable": "search",
	      "id": "test-id-search",
	      "float-label": "Expanding..."
	    }
	  }), _vm._v(" "), _c('br'), _vm._v(" "), _vm._m(0)], 1), _vm._v(" "), _c('div', [_c('h4', [_vm._v("Test Form")]), _vm._v(" "), _c('form', {
	    on: {
	      "submit": function($event) {
	        $event.preventDefault();
	        _vm.onSubmit($event)
	      }
	    }
	  }, [_c('m-textfield', {
	    attrs: {
	      "float-label": "First Name"
	    },
	    model: {
	      value: (_vm.form.firstName),
	      callback: function($$v) {
	        _vm.form.firstName = $$v
	      },
	      expression: "form.firstName"
	    }
	  }), _vm._v(" "), _c('br'), _vm._v(" "), _c('m-textfield', {
	    attrs: {
	      "float-label": "Last Name"
	    },
	    model: {
	      value: (_vm.form.lastName),
	      callback: function($$v) {
	        _vm.form.lastName = $$v
	      },
	      expression: "form.lastName"
	    }
	  }), _vm._v(" "), _c('br'), _vm._v(" "), _c('m-textfield', {
	    attrs: {
	      "float-label": "Email",
	      "pattern": "(.+)@(.+){2,}\\.(.+){2,}",
	      "error": "Invalid email"
	    }
	  }), _vm._v(" "), _c('br'), _vm._v(" "), _c('m-textfield', {
	    attrs: {
	      "float-label": "Password",
	      "type": "password",
	      "pattern": ".{3,}"
	    },
	    model: {
	      value: (_vm.form.password),
	      callback: function($$v) {
	        _vm.form.password = $$v
	      },
	      expression: "form.password"
	    }
	  }), _vm._v(" "), _c('br'), _vm._v(" "), _c('m-textfield', {
	    attrs: {
	      "float-label": "Confirm password",
	      "type": "password",
	      "pattern": ".{3,}",
	      "error": "Passwords not match"
	    }
	  }), _vm._v(" "), _c('br'), _vm._v(" "), _c('button', {
	    staticClass: "mdl-button mdl-js-button mdl-button--raised",
	    attrs: {
	      "type": "submit"
	    }
	  }, [_vm._v("\n                Button\n            ")])], 1), _vm._v(" "), _c('div', [_vm._v(_vm._s(_vm.form))])]), _vm._v(" "), _c('m-table', {
	    staticStyle: {
	      "width": "100%"
	    }
	  }, [_c('m-table-head', [_c('m-table-row', [_c('m-table-h', [_vm._v("Prop")]), _vm._v(" "), _c('m-table-h', [_vm._v("Effect")]), _vm._v(" "), _c('m-table-h', [_vm._v("Remarks")])], 1)], 1), _vm._v(" "), _c('m-table-body', _vm._l((_vm.doc), function(prop) {
	    return _c('m-table-row', [_c('m-table-cell', [_vm._v(_vm._s(prop.name))]), _vm._v(" "), _c('m-table-cell', [_vm._v(_vm._s(prop.description))]), _vm._v(" "), _c('m-table-cell', [_vm._v(_vm._s(prop.remark))])], 1)
	  }))], 1)], 1)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('pre', {
	    pre: true
	  }, [_vm._v("\n                "), _c('code', {
	    attrs: {
	      "class": "html"
	    }
	  }, [_vm._v("\n            <m-textfield label=\"Text...\"></m-textfield>\n            <m-textfield float-label=\"Textarea...\" textarea></m-textfield>\n            <m-textfield label=\"Number...\" pattern=\"-?[0-9]*(\\.[0-9]+)?\" error=\"Invalid input\"></m-textfield>\n            <m-textfield expandable=\"search\" id=\"test-id-search\" float-label=\"Expanding...\"></m-textfield>\n                ")]), _vm._v("\n            ")])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-6d230848", module.exports)
	  }
	}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* script */
	__vue_exports__ = __webpack_require__(16);
	
	/* template */
	var __vue_template__ = __webpack_require__(17);
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
	__vue_options__.__file = "/Users/oz/src/material-components/examples/src/components/buttons.vue";
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
	      hotAPI.createRecord("data-v-05957b4f", __vue_options__);
	    } else {
	      hotAPI.reload("data-v-05957b4f", __vue_options__);
	    }
	  })();
	}
	if (__vue_options__.functional) {
	  console.error("[vue-loader] buttons.vue: functional components are not supported and should be defined in plain js files using render functions.");
	}
	
	module.exports = __vue_exports__;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

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
	
	exports.default = {
	    mounted: function mounted() {
	        hljs.highlightBlock(this.$el.querySelector('.html'));
	    },
	    data: function data() {
	        return {
	            doc: [{ name: 'ripple', description: 'Applies ripple click effect', remark: 'May be used in combination with any other classes' }, { name: 'disabled', description: 'disable button', remark: '' }, { name: 'fab', description: 'Applies fab (circular) display effect', remark: 'Mutually exclusive with raised, mini-fab, and icon' }, { name: 'raised', description: 'Applies raised display effect', remark: 'Mutually exclusive with fab, mini-fab, and icon' }, { name: 'colored', description: 'Applies colored display effect (primary or accent color, depending on the type of button)', remark: 'Colors are defined in material.min.css' }, { name: 'icon', description: 'Applies icon (small plain circular) display effect', remark: 'Mutually exclusive with raised, fab, and mini-fab' }, { name: 'accent', description: 'Applies accent color display effect', remark: 'Colors are defined in material.min.css' }, { name: 'mini-fab', description: 'Applies mini-fab (small fab circular) display effect', remark: 'Mutually exclusive with raised, fab, and icon' }, { name: 'primary', description: 'Applies primary color display effect', remark: 'Colors are defined in material.min.css' }]
	        };
	    },
	
	    methods: {
	        testClick: function testClick() {
	            alert("Hi");
	        }
	    }
	};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('h4', [_vm._v("Buttons")]), _vm._v(" "), _c('div', [_c('m-button', {
	    attrs: {
	      "raised": ""
	    },
	    nativeOn: {
	      "click": function($event) {
	        _vm.testClick($event)
	      }
	    }
	  }, [_vm._v("Click me")]), _vm._v(" "), _c('m-button', {
	    attrs: {
	      "icon": "add",
	      "raised": "",
	      "accent": ""
	    }
	  }), _vm._v(" "), _c('m-button', {
	    attrs: {
	      "raised": "",
	      "primary": "",
	      "ripple": ""
	    }
	  }, [_vm._v("Ripple")]), _vm._v(" "), _c('m-button', {
	    attrs: {
	      "disabled": ""
	    }
	  }, [_vm._v("Disabled")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('m-table', {
	    staticStyle: {
	      "width": "100%"
	    }
	  }, [_c('m-table-head', [_c('m-table-row', [_c('m-table-h', [_vm._v("Prop")]), _vm._v(" "), _c('m-table-h', [_vm._v("Effect")]), _vm._v(" "), _c('m-table-h', [_vm._v("Remarks")])], 1)], 1), _vm._v(" "), _c('m-table-body', _vm._l((_vm.doc), function(prop) {
	    return _c('m-table-row', [_c('m-table-cell', [_vm._v(_vm._s(prop.name))]), _vm._v(" "), _c('m-table-cell', [_vm._v(_vm._s(prop.description))]), _vm._v(" "), _c('m-table-cell', [_vm._v(_vm._s(prop.remark))])], 1)
	  }))], 1)], 1)])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('pre', {
	    pre: true
	  }, [_vm._v("\n               "), _c('code', {
	    attrs: {
	      "class": "html"
	    }
	  }, [_vm._v("\n<m-button raised v-on:click.native=\"testClick\">Click me</m-button>\n\n<m-button icon=\"add\" raised accent></m-button>\n\n<m-button raised primary ripple>Ripple</m-button>\n\n<m-button disabled>Disabled</m-button>\n               ")]), _vm._v("\n           ")])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-05957b4f", module.exports)
	  }
	}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

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
	__vue_options__.__file = "/Users/oz/src/material-components/examples/src/components/snackbar.vue";
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
	      hotAPI.createRecord("data-v-2385d3b2", __vue_options__);
	    } else {
	      hotAPI.reload("data-v-2385d3b2", __vue_options__);
	    }
	  })();
	}
	if (__vue_options__.functional) {
	  console.error("[vue-loader] snackbar.vue: functional components are not supported and should be defined in plain js files using render functions.");
	}
	
	module.exports = __vue_exports__;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

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
	
	exports.default = {
	    mounted: function mounted() {
	        this.$el.querySelectorAll('.html').forEach(function (el) {
	            return hljs.highlightBlock(el);
	        });
	    },
	    data: function data() {
	        return {
	            doc: [
	            //{name: 'event-source', description: '', remark: ''},
	            { name: 'display-on', description: 'Name of event which will be fired after trigger emit', remark: '' }]
	        };
	    },
	
	
	    methods: {
	        sAction: function sAction() {
	            this.$root.$emit('msgSent', {
	                message: 'Message Sent',
	                actionText: 'Undo',
	                timeout: 2000,
	                actionHandler: function actionHandler(event) {
	                    console.log(event);
	                }
	            });
	        }
	    }
	};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('m-snackbar', {
	    attrs: {
	      "display-on": "msgSent"
	    }
	  }), _vm._v(" "), _c('m-button', {
	    attrs: {
	      "raised": "",
	      "colored": ""
	    },
	    nativeOn: {
	      "click": function($event) {
	        _vm.sAction($event)
	      }
	    }
	  }, [_vm._v("Show Snackbar")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('m-table', {
	    staticStyle: {
	      "width": "100%"
	    }
	  }, [_c('m-table-head', [_c('m-table-row', [_c('m-table-h', [_vm._v("Prop")]), _vm._v(" "), _c('m-table-h', [_vm._v("Effect")]), _vm._v(" "), _c('m-table-h', [_vm._v("Remarks")])], 1)], 1), _vm._v(" "), _c('m-table-body', _vm._l((_vm.doc), function(prop) {
	    return _c('m-table-row', [_c('m-table-cell', [_vm._v(_vm._s(prop.name))]), _vm._v(" "), _c('m-table-cell', [_vm._v(_vm._s(prop.description))]), _vm._v(" "), _c('m-table-cell', [_vm._v(_vm._s(prop.remark))])], 1)
	  }))], 1), _vm._v(" "), _c('p', [_vm._v("\n        If you use multiple snackbars at the same time, they will overlap. Click on both button to see an example. If you don't want this to happen use one single snackbar for all your notifications\n    ")])], 1)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('pre', {
	    pre: true
	  }, [_vm._v("\n            "), _c('code', {
	    attrs: {
	      "class": "html"
	    }
	  }, [_vm._v("\n                <m-snackbar display-on=\"msgSent\"></m-snackbar>\n                <m-button raised colored @click.native=\"sAction\">Show Snackbar</m-button>\n            ")]), _vm._v("\n        ")])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-2385d3b2", module.exports)
	  }
	}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* script */
	__vue_exports__ = __webpack_require__(22);
	
	/* template */
	var __vue_template__ = __webpack_require__(23);
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
	__vue_options__.__file = "/Users/oz/src/material-components/examples/src/components/selects.vue";
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
	      hotAPI.createRecord("data-v-7b4b7bc5", __vue_options__);
	    } else {
	      hotAPI.reload("data-v-7b4b7bc5", __vue_options__);
	    }
	  })();
	}
	if (__vue_options__.functional) {
	  console.error("[vue-loader] selects.vue: functional components are not supported and should be defined in plain js files using render functions.");
	}
	
	module.exports = __vue_exports__;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

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
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
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
	    mounted: function mounted() {
	        this.$el.querySelectorAll('.html').forEach(function (el) {
	            return hljs.highlightBlock(el);
	        });
	    },
	    data: function data() {
	        return {
	            testData: function testData(success, failure) {
	                this.$http.get('https://restcountries.eu/rest/v1/all').then(function (res) {
	                    var c = [];
	                    res.data.forEach(function (el) {
	                        c.push({
	                            name: el.name,
	                            value: el.numericCode
	                        });
	                    });
	
	                    success(c.splice(0, 10));
	                });
	            },
	
	            m: [],
	
	            // simple select
	
	            testData2: [{
	                name: 'NodeJs', value: 1
	            }, {
	                name: 'JS', value: 2
	            }, {
	                name: 'PHP', value: 3
	            }],
	
	            testData4: [1, 2, 3, 4, 5, 6, 7, 8, 9],
	            m10: 3,
	
	            m2: { name: 'NodeJs', value: 1 },
	
	            m5: { name: '', value: '' },
	
	            m6: ['004', 100],
	
	            testData3: ['004', '005', 100],
	
	            doc: [{ name: 'data-source', description: 'Data source for a select, must be an array', remark: 'Required' }, { name: 'v-model', description: 'Current value of a select', remark: '' }, { name: 'id', description: 'need an id to handle the menu toggling.', remark: 'Required' }, { name: 'search', description: 'Add search input to a select', remark: 'Optional' }, { name: 'multiple', description: 'multiple select items', remark: 'Optional' }]
	        };
	    }
	};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('h3', [_vm._v("Selects")]), _vm._v(" "), _c('p'), _c('h4', [_vm._v("Default")]), _vm._v(" "), _c('m-select', {
	    attrs: {
	      "data-source": _vm.testData2,
	      "id": "test2"
	    },
	    model: {
	      value: (_vm.m2),
	      callback: function($$v) {
	        _vm.m2 = $$v
	      },
	      expression: "m2"
	    }
	  }), _vm._v(" "), _c('div', [_vm._v(_vm._s(_vm.m2))]), _vm._v(" "), _c('p'), _vm._v(" "), _c('p'), _c('h4', [_vm._v("Array source (single)")]), _vm._v(" "), _c('m-select', {
	    attrs: {
	      "data-source": _vm.testData4,
	      "id": "test10",
	      "search": ""
	    },
	    model: {
	      value: (_vm.m10),
	      callback: function($$v) {
	        _vm.m10 = $$v
	      },
	      expression: "m10"
	    }
	  }), _vm._v(" "), _c('div', [_vm._v(_vm._s(_vm.m10))]), _vm._v(" "), _c('p'), _vm._v(" "), _c('p'), _c('h4', [_vm._v("AJAX select "), _c('span', [_vm._v(_vm._s(_vm.m))])]), _vm._v(" "), _c('m-select', {
	    attrs: {
	      "data-source": _vm.testData,
	      "id": "test1",
	      "multiple": ""
	    },
	    model: {
	      value: (_vm.m),
	      callback: function($$v) {
	        _vm.m = $$v
	      },
	      expression: "m"
	    }
	  }), _vm._v(" "), _c('div', [_vm._v(_vm._s(_vm.m))]), _vm._v(" "), _c('p'), _vm._v(" "), _c('p'), _c('h4', [_vm._v("AJAX select with search "), _c('span', [_vm._v(_vm._s(_vm.m5))])]), _vm._v(" "), _c('m-select', {
	    attrs: {
	      "data-source": _vm.testData,
	      "id": "test3",
	      "search": ""
	    },
	    model: {
	      value: (_vm.m5),
	      callback: function($$v) {
	        _vm.m5 = $$v
	      },
	      expression: "m5"
	    }
	  }), _vm._v(" "), _c('p'), _vm._v(" "), _c('p'), _c('h4', [_vm._v("Multiple selecth "), _c('span', [_vm._v(_vm._s(_vm.m6))])]), _vm._v(" "), _c('m-select', {
	    attrs: {
	      "data-source": _vm.testData3,
	      "id": "test4",
	      "multiple": "",
	      "search": ""
	    },
	    model: {
	      value: (_vm.m6),
	      callback: function($$v) {
	        _vm.m6 = $$v
	      },
	      expression: "m6"
	    }
	  }), _vm._v(" "), _c('p'), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('m-table', {
	    staticStyle: {
	      "width": "100%"
	    }
	  }, [_c('m-table-head', [_c('m-table-row', [_c('m-table-h', [_vm._v("Prop")]), _vm._v(" "), _c('m-table-h', [_vm._v("Effect")]), _vm._v(" "), _c('m-table-h', [_vm._v("Remarks")])], 1)], 1), _vm._v(" "), _c('m-table-body', _vm._l((_vm.doc), function(prop) {
	    return _c('m-table-row', [_c('m-table-cell', [_vm._v(_vm._s(prop.name))]), _vm._v(" "), _c('m-table-cell', [_vm._v(_vm._s(prop.description))]), _vm._v(" "), _c('m-table-cell', [_vm._v(_vm._s(prop.remark))])], 1)
	  }))], 1)], 1)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('pre', {
	    pre: true
	  }, [_vm._v("\n            "), _c('code', {
	    attrs: {
	      "class": "html"
	    }
	  }, [_vm._v("\n            <m-select :data-source=\"testData2\" id=\"test2\" v-model=\"m2\"></m-select>\n            <m-select :data-source=\"testData\" id=\"test1\" v-model=\"m\"></m-select>\n            <m-select :data-source=\"testData\" id=\"test3\" v-model=\"m\" search></m-select>\n            ")]), _vm._v("\n        ")])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-7b4b7bc5", module.exports)
	  }
	}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* script */
	__vue_exports__ = __webpack_require__(25);
	
	/* template */
	var __vue_template__ = __webpack_require__(26);
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
	__vue_options__.__file = "/Users/oz/src/material-components/examples/src/components/sliders.vue";
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
	      hotAPI.createRecord("data-v-6b01df00", __vue_options__);
	    } else {
	      hotAPI.reload("data-v-6b01df00", __vue_options__);
	    }
	  })();
	}
	if (__vue_options__.functional) {
	  console.error("[vue-loader] sliders.vue: functional components are not supported and should be defined in plain js files using render functions.");
	}
	
	module.exports = __vue_exports__;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

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
	
	exports.default = {
	    mounted: function mounted() {
	        this.$el.querySelectorAll('.html').forEach(function (el) {
	            return hljs.highlightBlock(el);
	        });
	    },
	    data: function data() {
	        return {
	            amount: 0,
	            doc: [{ name: 'v-model', description: 'Current value of a slider', remark: '' }, { name: 'step', description: 'Step of slide', remark: '' }, { name: 'min', description: 'Minimal value of a slider', remark: '' }, { name: 'max', description: 'Maximal value of a slider', remark: '' }, { name: 'disabled', description: 'true | false', remark: '' }]
	        };
	    }
	};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('m-slider', {
	    attrs: {
	      "min": "0",
	      "max": "100"
	    },
	    model: {
	      value: (_vm.amount),
	      callback: function($$v) {
	        _vm.amount = $$v
	      },
	      expression: "amount"
	    }
	  }), _vm._v(" "), _c('br'), _vm._v(" "), _c('span', [_vm._v("Step 10")]), _vm._v(" "), _c('m-slider', {
	    attrs: {
	      "min": "0",
	      "max": "100",
	      "step": "10",
	      "disabled": ""
	    },
	    model: {
	      value: (_vm.amount),
	      callback: function($$v) {
	        _vm.amount = $$v
	      },
	      expression: "amount"
	    }
	  }), _vm._v(" "), _c('p', [_vm._v("\n        " + _vm._s(_vm.amount) + "\n    ")]), _vm._v(" "), _c('hr'), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('m-table', {
	    staticStyle: {
	      "width": "100%"
	    }
	  }, [_c('m-table-head', [_c('m-table-row', [_c('m-table-h', [_vm._v("Prop")]), _vm._v(" "), _c('m-table-h', [_vm._v("Effect")]), _vm._v(" "), _c('m-table-h', [_vm._v("Remarks")])], 1)], 1), _vm._v(" "), _c('m-table-body', _vm._l((_vm.doc), function(prop) {
	    return _c('m-table-row', [_c('m-table-cell', [_vm._v(_vm._s(prop.name))]), _vm._v(" "), _c('m-table-cell', [_vm._v(_vm._s(prop.description))]), _vm._v(" "), _c('m-table-cell', [_vm._v(_vm._s(prop.remark))])], 1)
	  }))], 1)], 1)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('pre', [_vm._v("\n            "), _c('code', {
	    staticClass: "html"
	  }, [_vm._v("\n                <m-slider v-model=\"amount\" min=\"0\" max=\"100\"></m-slider>\n                <m-slider v-model=\"amount\" min=\"0\" max=\"100\" step=\"10\" disabled></m-slider>\n            ")]), _vm._v("\n        ")])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-6b01df00", module.exports)
	  }
	}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* script */
	__vue_exports__ = __webpack_require__(28);
	
	/* template */
	var __vue_template__ = __webpack_require__(29);
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
	__vue_options__.__file = "/Users/oz/src/material-components/examples/src/components/badges.vue";
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
	      hotAPI.createRecord("data-v-5db5b352", __vue_options__);
	    } else {
	      hotAPI.reload("data-v-5db5b352", __vue_options__);
	    }
	  })();
	}
	if (__vue_options__.functional) {
	  console.error("[vue-loader] badges.vue: functional components are not supported and should be defined in plain js files using render functions.");
	}
	
	module.exports = __vue_exports__;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

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
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
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
	  mounted: function mounted() {
	    hljs.highlightBlock(this.$el.querySelector('.html'));
	  },
	  data: function data() {
	    return {
	      b: 10,
	      h: false,
	      testClick: function testClick(e) {
	        this.h = !this.h;
	      },
	
	      doc: [{ name: 'overlap', description: 'Make the badge overlap with its container', remark: 'Optional' }, { name: 'icon', description: 'You can pass the icon you want to display as a string', remark: '' }, { name: 'no-background', description: 'Applies open-circle effect to badge', remark: 'Optional' }, { name: 'hide', description: 'Hides the badge', remark: 'Can be bound to a computed property so the value is hidden if some conditions are met.' }, { name: 'href', description: 'Href attribute for link badge', remark: 'Optional' }]
	    };
	  }
	};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('m-badge', {
	    attrs: {
	      "href": "https://google.com",
	      "hide": _vm.h
	    },
	    model: {
	      value: (_vm.b),
	      callback: function($$v) {
	        _vm.b = $$v
	      },
	      expression: "b"
	    }
	  }, [_vm._v("Inbox")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('m-badge', {
	    attrs: {
	      "tag": "span",
	      "icon": "",
	      "overlap": ""
	    },
	    model: {
	      value: (_vm.b),
	      callback: function($$v) {
	        _vm.b = $$v
	      },
	      expression: "b"
	    }
	  }, [_vm._v("account_box")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('m-slider', {
	    attrs: {
	      "min": "0",
	      "max": "100"
	    },
	    model: {
	      value: (_vm.b),
	      callback: function($$v) {
	        _vm.b = $$v
	      },
	      expression: "b"
	    }
	  }), _vm._v(" "), _c('br'), _vm._v(" "), _c('m-button', {
	    attrs: {
	      "raised": ""
	    },
	    nativeOn: {
	      "click": function($event) {
	        _vm.testClick($event)
	      }
	    }
	  }, [_vm._v("Hide badge value")]), _vm._v(" "), _c('hr'), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('m-table', {
	    staticStyle: {
	      "width": "100%"
	    }
	  }, [_c('m-table-head', [_c('m-table-row', [_c('m-table-h', [_vm._v("Prop")]), _vm._v(" "), _c('m-table-h', [_vm._v("Effect")]), _vm._v(" "), _c('m-table-h', [_vm._v("Remarks")])], 1)], 1), _vm._v(" "), _c('m-table-body', _vm._l((_vm.doc), function(prop) {
	    return _c('m-table-row', [_c('m-table-cell', [_vm._v(_vm._s(prop.name))]), _vm._v(" "), _c('m-table-cell', [_vm._v(_vm._s(prop.description))]), _vm._v(" "), _c('m-table-cell', [_vm._v(_vm._s(prop.remark))])], 1)
	  }))], 1)], 1)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('pre', {
	    pre: true
	  }, [_vm._v("\n      "), _c('code', {
	    attrs: {
	      "class": "html"
	    }
	  }, [_vm._v("\n<template>\n  <div>\n    <m-badge v-model=\"b\" href=\"https://google.com\" :hide=\"h\">Inbox</m-badge>\n\n    <m-badge v-model=\"b\" tag=\"span\" icon overlap>account_box</m-badge>\n\n    <m-slider v-model=\"b\" min=\"0\" max=\"100\"></m-slider>\n\n    <m-button raised v-on:click.native=\"testClick\">Hide badge value</m-button>\n\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        b: 10,\n        h: false,\n        testClick: function(e) {\n          this.h = !this.h;\n        }\n      }\n    }\n  }\n</script>\n      ")]), _vm._v("\n    ")])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-5db5b352", module.exports)
	  }
	}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* styles */
	__webpack_require__(31);
	
	/* script */
	__vue_exports__ = __webpack_require__(35);
	
	/* template */
	var __vue_template__ = __webpack_require__(36);
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
	__vue_options__.__file = "/Users/oz/src/material-components/examples/src/components/menu.vue";
	__vue_options__.render = __vue_template__.render;
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns;
	__vue_options__._scopeId = "data-v-08fe9a81";
	
	/* hot reload */
	if (false) {
	  (function () {
	    var hotAPI = require("vue-hot-reload-api");
	    hotAPI.install(require("vue"), false);
	    if (!hotAPI.compatible) return;
	    module.hot.accept();
	    if (!module.hot.data) {
	      hotAPI.createRecord("data-v-08fe9a81", __vue_options__);
	    } else {
	      hotAPI.reload("data-v-08fe9a81", __vue_options__);
	    }
	  })();
	}
	if (__vue_options__.functional) {
	  console.error("[vue-loader] menu.vue: functional components are not supported and should be defined in plain js files using render functions.");
	}
	
	module.exports = __vue_exports__;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(32);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(34)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-08fe9a81&scoped=true!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./menu.vue", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-08fe9a81&scoped=true!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./menu.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(33)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.menu-block[data-v-08fe9a81] {\n    color: #fff;\n    background: #3F51B5;\n    padding: 10px;\n}\n", "", {"version":3,"sources":["/./examples/src/components/menu.vue?1ef6ba49"],"names":[],"mappings":";AAiDA;IACA,YAAA;IACA,oBAAA;IACA,cAAA;CACA","file":"menu.vue","sourcesContent":["<template>\n   <div>\n       <div class=\"menu-block\">\n           <m-button icon=\"more_vert\" id=\"test-menu\"></m-button>\n\n           <m-menu for=\"test-menu\">\n               <m-menu-item>NodeJs</m-menu-item>\n               <m-menu-item>PHP</m-menu-item>\n               <m-menu-item disabled=\"disabled\">JS</m-menu-item>\n               <m-menu-item>GO</m-menu-item>\n           </m-menu>\n       </div>\n\n       <!-- / -->\n\n       <div>\n           <pre>\n               <code class=\"html\">\n               &#x3C;m-button icon=&#x22;more_vert&#x22; id=&#x22;test-menu&#x22;&#x3E;&#x3C;/m-button&#x3E;\n               &#x3C;m-menu for=&#x22;test-menu&#x22;&#x3E;\n                   &#x3C;m-menu-item&#x3E;NodeJs&#x3C;/m-menu-item&#x3E;\n                   &#x3C;m-menu-item&#x3E;PHP&#x3C;/m-menu-item&#x3E;\n                   &#x3C;m-menu-item disabled=&#x22;disabled&#x22;&#x3E;JS&#x3C;/m-menu-item&#x3E;\n                   &#x3C;m-menu-item&#x3E;GO&#x3C;/m-menu-item&#x3E;\n               &#x3C;/m-menu&#x3E;\n               </code>\n           </pre>\n       </div>\n\n       <m-table style=\"width: 100%\">\n           <m-table-head>\n               <m-table-row>\n                   <m-table-h>Prop</m-table-h>\n                   <m-table-h>Effect</m-table-h>\n                   <m-table-h>Remarks</m-table-h>\n               </m-table-row>\n           </m-table-head>\n\n           <m-table-body>\n               <m-table-row>\n                   <m-table-cell></m-table-cell>\n                   <m-table-cell></m-table-cell>\n                   <m-table-cell></m-table-cell>\n               </m-table-row>\n           </m-table-body>\n       </m-table>\n   </div>\n</template>\n<style scoped>\n    .menu-block {\n        color: #fff;\n        background: #3F51B5;\n        padding: 10px;\n    }\n</style>\n<script>\n    export default{\n        mounted() {\n            this.$el.querySelectorAll('.html').forEach(el => hljs.highlightBlock(el))\n        },\n\n        data(){\n            return {}\n        }\n    }\n</script>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 33 */
/***/ (function(module, exports) {

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


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

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


/***/ }),
/* 35 */
6,
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('div', {
	    staticClass: "menu-block"
	  }, [_c('m-button', {
	    attrs: {
	      "icon": "more_vert",
	      "id": "test-menu"
	    }
	  }), _vm._v(" "), _c('m-menu', {
	    attrs: {
	      "for": "test-menu"
	    }
	  }, [_c('m-menu-item', [_vm._v("NodeJs")]), _vm._v(" "), _c('m-menu-item', [_vm._v("PHP")]), _vm._v(" "), _c('m-menu-item', {
	    attrs: {
	      "disabled": "disabled"
	    }
	  }, [_vm._v("JS")]), _vm._v(" "), _c('m-menu-item', [_vm._v("GO")])], 1)], 1), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('m-table', {
	    staticStyle: {
	      "width": "100%"
	    }
	  }, [_c('m-table-head', [_c('m-table-row', [_c('m-table-h', [_vm._v("Prop")]), _vm._v(" "), _c('m-table-h', [_vm._v("Effect")]), _vm._v(" "), _c('m-table-h', [_vm._v("Remarks")])], 1)], 1), _vm._v(" "), _c('m-table-body', [_c('m-table-row', [_c('m-table-cell'), _vm._v(" "), _c('m-table-cell'), _vm._v(" "), _c('m-table-cell')], 1)], 1)], 1)], 1)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('pre', [_vm._v("\n            "), _c('code', {
	    staticClass: "html"
	  }, [_vm._v("\n            <m-button icon=\"more_vert\" id=\"test-menu\"></m-button>\n            <m-menu for=\"test-menu\">\n                <m-menu-item>NodeJs</m-menu-item>\n                <m-menu-item>PHP</m-menu-item>\n                <m-menu-item disabled=\"disabled\">JS</m-menu-item>\n                <m-menu-item>GO</m-menu-item>\n            </m-menu>\n            ")]), _vm._v("\n        ")])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-08fe9a81", module.exports)
	  }
	}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* script */
	__vue_exports__ = __webpack_require__(38);
	
	/* template */
	var __vue_template__ = __webpack_require__(39);
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
	__vue_options__.__file = "/Users/oz/src/material-components/examples/src/components/loading.vue";
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
	      hotAPI.createRecord("data-v-5f96478a", __vue_options__);
	    } else {
	      hotAPI.reload("data-v-5f96478a", __vue_options__);
	    }
	  })();
	}
	if (__vue_options__.functional) {
	  console.error("[vue-loader] loading.vue: functional components are not supported and should be defined in plain js files using render functions.");
	}
	
	module.exports = __vue_exports__;

/***/ }),
/* 38 */
/***/ (function(module, exports) {

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
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
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
	    mounted: function mounted() {
	        this.$el.querySelectorAll('.html').forEach(function (el) {
	            return hljs.highlightBlock(el);
	        });
	    },
	    data: function data() {
	        return {
	            progress: 40,
	            progress2: 30,
	            buffer: 60,
	            active: false,
	
	            doc: [{ name: 'v-model', description: 'A value of a progress', remark: '' }, { name: 'indeterminate', description: 'Applies animation effect', remark: '' }, { name: 'buffer', description: 'Buffering', remark: '' }],
	
	            docSpinners: [{ name: 'single-color', description: 'Uses a single (primary palette) color instead of changing colors', remark: '' }, { name: 'active', description: 'true|false', remark: '' }]
	        };
	    }
	};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('h3', [_vm._v("Progress bar")]), _vm._v(" "), _c('m-progress', {
	    model: {
	      value: (_vm.progress),
	      callback: function($$v) {
	        _vm.progress = $$v
	      },
	      expression: "progress"
	    }
	  }), _vm._v(" "), _c('div', {
	    staticStyle: {
	      "width": "200px",
	      "margin-top": "30px"
	    }
	  }, [_c('div', {
	    staticStyle: {
	      "margin-left": "26px"
	    }
	  }, [_vm._v("Change value:")]), _vm._v(" "), _c('m-slider', {
	    attrs: {
	      "min": "0",
	      "max": "100"
	    },
	    model: {
	      value: (_vm.progress),
	      callback: function($$v) {
	        _vm.progress = $$v
	      },
	      expression: "progress"
	    }
	  })], 1), _vm._v(" "), _c('h4', [_vm._v("Progress with buffer")]), _vm._v(" "), _c('div', [_c('m-progress', {
	    attrs: {
	      "buffer": _vm.buffer
	    },
	    model: {
	      value: (_vm.progress2),
	      callback: function($$v) {
	        _vm.progress2 = $$v
	      },
	      expression: "progress2"
	    }
	  })], 1), _vm._v(" "), _c('h4', [_vm._v("Indeterminate")]), _vm._v(" "), _c('div', [_c('m-progress', {
	    attrs: {
	      "indeterminate": ""
	    }
	  })], 1), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('m-table', {
	    staticStyle: {
	      "width": "100%"
	    }
	  }, [_c('m-table-head', [_c('m-table-row', [_c('m-table-h', [_vm._v("Prop")]), _vm._v(" "), _c('m-table-h', [_vm._v("Effect")]), _vm._v(" "), _c('m-table-h', [_vm._v("Remarks")])], 1)], 1), _vm._v(" "), _c('m-table-body', _vm._l((_vm.doc), function(prop) {
	    return _c('m-table-row', [_c('m-table-cell', [_vm._v(_vm._s(prop.name))]), _vm._v(" "), _c('m-table-cell', [_vm._v(_vm._s(prop.description))]), _vm._v(" "), _c('m-table-cell', [_vm._v(_vm._s(prop.remark))])], 1)
	  }))], 1), _vm._v(" "), _c('h3', [_vm._v("Spinner")]), _vm._v(" "), _c('div', [_c('h4', [_vm._v("Default:")]), _vm._v(" "), _c('m-spinner')], 1), _vm._v(" "), _c('div', [_c('h4', [_vm._v("Single color:")]), _vm._v(" "), _c('m-spinner', {
	    attrs: {
	      "single-color": ""
	    }
	  })], 1), _vm._v(" "), _c('div', [_c('h4', [_vm._v("Hide spinner")]), _vm._v(" "), _c('m-spinner', {
	    attrs: {
	      "active": _vm.active
	    }
	  }), _vm._v(" "), _c('div', [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.active),
	      expression: "active"
	    }],
	    attrs: {
	      "type": "checkbox"
	    },
	    domProps: {
	      "checked": Array.isArray(_vm.active) ? _vm._i(_vm.active, null) > -1 : (_vm.active)
	    },
	    on: {
	      "__c": function($event) {
	        var $$a = _vm.active,
	          $$el = $event.target,
	          $$c = $$el.checked ? (true) : (false);
	        if (Array.isArray($$a)) {
	          var $$v = null,
	            $$i = _vm._i($$a, $$v);
	          if ($$c) {
	            $$i < 0 && (_vm.active = $$a.concat($$v))
	          } else {
	            $$i > -1 && (_vm.active = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
	          }
	        } else {
	          _vm.active = $$c
	        }
	      }
	    }
	  })])], 1), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('m-table', {
	    staticStyle: {
	      "width": "100%"
	    }
	  }, [_c('m-table-head', [_c('m-table-row', [_c('m-table-h', [_vm._v("Prop")]), _vm._v(" "), _c('m-table-h', [_vm._v("Effect")]), _vm._v(" "), _c('m-table-h', [_vm._v("Remarks")])], 1)], 1), _vm._v(" "), _c('m-table-body', _vm._l((_vm.docSpinners), function(prop) {
	    return _c('m-table-row', [_c('m-table-cell', [_vm._v(_vm._s(prop.name))]), _vm._v(" "), _c('m-table-cell', [_vm._v(_vm._s(prop.description))]), _vm._v(" "), _c('m-table-cell', [_vm._v(_vm._s(prop.remark))])], 1)
	  }))], 1)], 1)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('pre', {
	    pre: true
	  }, [_vm._v("\n            "), _c('code', {
	    attrs: {
	      "class": "html"
	    }
	  }, [_vm._v("\n                <m-progress v-model=\"progress\"></m-progress>\n                <m-progress v-model=\"progress2\" :buffer=\"buffer\"></m-progress>\n                <m-progress indeterminate></m-progress>\n            ")]), _vm._v("\n        ")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('pre', [_vm._v("\n            "), _c('code', {
	    staticClass: "html"
	  }, [_vm._v("\n               <m-spinner></m-spinner>\n               <m-spinner single-color></m-spinner>\n               <m-spinner :active=\"active\"></m-spinner>\n            ")]), _vm._v("\n        ")])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-5f96478a", module.exports)
	  }
	}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* script */
	__vue_exports__ = __webpack_require__(41);
	
	/* template */
	var __vue_template__ = __webpack_require__(42);
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
	__vue_options__.__file = "/Users/oz/src/material-components/examples/src/components/toggles.vue";
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
	      hotAPI.createRecord("data-v-47fa2c6d", __vue_options__);
	    } else {
	      hotAPI.reload("data-v-47fa2c6d", __vue_options__);
	    }
	  })();
	}
	if (__vue_options__.functional) {
	  console.error("[vue-loader] toggles.vue: functional components are not supported and should be defined in plain js files using render functions.");
	}
	
	module.exports = __vue_exports__;

/***/ }),
/* 41 */
/***/ (function(module, exports) {

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
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
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
	    mounted: function mounted() {
	        this.$el.querySelectorAll('.html').forEach(function (el) {
	            return hljs.highlightBlock(el);
	        });
	    },
	
	
	    methods: {
	        select: function select(val) {
	            this.checkbox2 = val;
	        }
	    },
	    data: function data() {
	        return {
	            checkbox1: false,
	            checkbox2: true,
	
	            radioVal: 'two',
	
	            switch1: true,
	            switch2: false,
	
	            iToggle: true,
	            iToggle2: false,
	
	            docCheckboxes: [{ name: 'disabled', description: 'Disables the checkbox. Adds the is-disabled class to the button', remark: '' }, { name: 'checked', description: 'Control whether the checkbox is checked or not', remark: 'You must use a two way binding. You can either use a boolean or an array' }, { name: 'id', description: 'Defines the id used to link the label and the input', remark: '' }, { name: 'v-model', description: 'Defines the value of the checkbox. Needed when passing an array to the v-model prop', remark: '' }],
	
	            docRadio: [{ name: 'disabled', description: 'Disables the checkbox. Adds the is-disabled class to the button', remark: '' }, { name: 'checked', description: 'Control whether the checkbox is checked or not', remark: 'You must use a two way binding. You can either use a boolean or an array' }, { name: 'name', description: 'Defines the name used on the input element', remark: '' }, { name: 'id', description: 'Defines the id used to link the label and the input', remark: '' }, { name: 'v-model', description: 'Defines the value of the radio button', remark: '' }],
	
	            docSwitch: [{ name: 'disabled', description: 'Disables the checkbox. Adds the is-disabled class to the button', remark: '' }, { name: 'checked', description: 'Control whether the checkbox is checked or not', remark: 'You must use a two way binding. You can either use a boolean or an array' }, { name: 'v-model', description: 'Defines the value of the switch. Useful when passing an array to thechecked prop', remark: '' }, { name: 'id', description: 'Defines the value of the radio button', remark: '' }],
	
	            docIcon: [{ name: 'disabled', description: 'Disables the checkbox. Adds the is-disabled class to the button', remark: '' }, { name: 'checked', description: 'Control whether the icon is checked or not', remark: 'You must use a two way binding. You can either use a boolean or an array' }, { name: 'icon', description: 'Set the toggle icon', remark: '' }, { name: 'id', description: 'Defines the id used to link the label and the input', remark: '' }, { name: 'v-model', description: 'Defines the value of the toggle. Useful when passing an array to thechecked prop', remark: '' }]
	        };
	    }
	};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('h4', [_vm._v("Checkbox")]), _vm._v(" "), _c('m-checkbox', {
	    on: {
	      "change": _vm.select
	    },
	    model: {
	      value: (_vm.checkbox1),
	      callback: function($$v) {
	        _vm.checkbox1 = $$v
	      },
	      expression: "checkbox1"
	    }
	  }, [_vm._v("This one")]), _vm._v(" "), _c('m-checkbox', {
	    model: {
	      value: (_vm.checkbox2),
	      callback: function($$v) {
	        _vm.checkbox2 = $$v
	      },
	      expression: "checkbox2"
	    }
	  }, [_vm._v("Label")]), _vm._v(" "), _c('m-checkbox', {
	    attrs: {
	      "disabled": ""
	    },
	    model: {
	      value: (_vm.checkbox2),
	      callback: function($$v) {
	        _vm.checkbox2 = $$v
	      },
	      expression: "checkbox2"
	    }
	  }, [_vm._v("Label")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('div', [_vm._v("\n        " + _vm._s(_vm.checkbox1) + ", " + _vm._s(_vm.checkbox2) + "\n    ")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('m-table', {
	    staticStyle: {
	      "width": "100%"
	    }
	  }, [_c('m-table-head', [_c('m-table-row', [_c('m-table-h', [_vm._v("Prop")]), _vm._v(" "), _c('m-table-h', [_vm._v("Effect")]), _vm._v(" "), _c('m-table-h', [_vm._v("Remarks")])], 1)], 1), _vm._v(" "), _c('m-table-body', _vm._l((_vm.docCheckboxes), function(prop) {
	    return _c('m-table-row', [_c('m-table-cell', [_vm._v(_vm._s(prop.name))]), _vm._v(" "), _c('m-table-cell', [_vm._v(_vm._s(prop.description))]), _vm._v(" "), _c('m-table-cell', [_vm._v(_vm._s(prop.remark))])], 1)
	  }))], 1), _vm._v(" "), _c('h4', [_vm._v("Radio")]), _vm._v(" "), _c('m-radio', {
	    attrs: {
	      "name": "test",
	      "val": "one"
	    },
	    model: {
	      value: (_vm.radioVal),
	      callback: function($$v) {
	        _vm.radioVal = $$v
	      },
	      expression: "radioVal"
	    }
	  }, [_vm._v("Test 1")]), _vm._v(" "), _c('m-radio', {
	    attrs: {
	      "name": "test",
	      "val": "two"
	    },
	    model: {
	      value: (_vm.radioVal),
	      callback: function($$v) {
	        _vm.radioVal = $$v
	      },
	      expression: "radioVal"
	    }
	  }, [_vm._v("Test 2")]), _vm._v(" "), _c('m-radio', {
	    attrs: {
	      "name": "test",
	      "val": "3",
	      "disabled": ""
	    },
	    model: {
	      value: (_vm.radioVal),
	      callback: function($$v) {
	        _vm.radioVal = $$v
	      },
	      expression: "radioVal"
	    }
	  }, [_vm._v("Test 3")]), _vm._v(" "), _c('div', [_vm._v(_vm._s(_vm.radioVal))]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('m-table', {
	    staticStyle: {
	      "width": "100%"
	    }
	  }, [_c('m-table-head', [_c('m-table-row', [_c('m-table-h', [_vm._v("Prop")]), _vm._v(" "), _c('m-table-h', [_vm._v("Effect")]), _vm._v(" "), _c('m-table-h', [_vm._v("Remarks")])], 1)], 1), _vm._v(" "), _c('m-table-body', _vm._l((_vm.docRadio), function(prop) {
	    return _c('m-table-row', [_c('m-table-cell', [_vm._v(_vm._s(prop.name))]), _vm._v(" "), _c('m-table-cell', [_vm._v(_vm._s(prop.description))]), _vm._v(" "), _c('m-table-cell', [_vm._v(_vm._s(prop.remark))])], 1)
	  }))], 1), _vm._v(" "), _c('h4', [_vm._v("Switch")]), _vm._v(" "), _c('m-switch', {
	    model: {
	      value: (_vm.switch1),
	      callback: function($$v) {
	        _vm.switch1 = $$v
	      },
	      expression: "switch1"
	    }
	  }, [_vm._v("On")]), _vm._v(" "), _c('br'), _vm._v("\n    " + _vm._s(_vm.switch1) + "\n    "), _c('br'), _vm._v(" "), _c('m-switch', {
	    model: {
	      value: (_vm.switch2),
	      callback: function($$v) {
	        _vm.switch2 = $$v
	      },
	      expression: "switch2"
	    }
	  }, [_vm._v("Off")]), _vm._v(" "), _c('br'), _vm._v("\n    " + _vm._s(_vm.switch2) + "\n\n    "), _c('m-switch', {
	    attrs: {
	      "disabled": ""
	    },
	    model: {
	      value: (_vm.switch2),
	      callback: function($$v) {
	        _vm.switch2 = $$v
	      },
	      expression: "switch2"
	    }
	  }, [_vm._v("Off")]), _vm._v(" "), _c('br'), _vm._v("\n    " + _vm._s(_vm.switch2) + "\n\n    "), _vm._m(2), _vm._v(" "), _c('m-table', {
	    staticStyle: {
	      "width": "100%"
	    }
	  }, [_c('m-table-head', [_c('m-table-row', [_c('m-table-h', [_vm._v("Prop")]), _vm._v(" "), _c('m-table-h', [_vm._v("Effect")]), _vm._v(" "), _c('m-table-h', [_vm._v("Remarks")])], 1)], 1), _vm._v(" "), _c('m-table-body', _vm._l((_vm.docSwitch), function(prop) {
	    return _c('m-table-row', [_c('m-table-cell', [_vm._v(_vm._s(prop.name))]), _vm._v(" "), _c('m-table-cell', [_vm._v(_vm._s(prop.description))]), _vm._v(" "), _c('m-table-cell', [_vm._v(_vm._s(prop.remark))])], 1)
	  }))], 1), _vm._v(" "), _c('h4', [_vm._v("Icon Taggle")]), _vm._v(" "), _c('m-icon-toggle', {
	    attrs: {
	      "icon": "format_bold"
	    },
	    model: {
	      value: (_vm.iToggle),
	      callback: function($$v) {
	        _vm.iToggle = $$v
	      },
	      expression: "iToggle"
	    }
	  }), _vm._v(" "), _c('br'), _vm._v("\n\n    " + _vm._s(_vm.iToggle) + "\n\n    "), _c('br'), _vm._v(" "), _c('m-icon-toggle', {
	    attrs: {
	      "icon": "search"
	    },
	    model: {
	      value: (_vm.iToggle2),
	      callback: function($$v) {
	        _vm.iToggle2 = $$v
	      },
	      expression: "iToggle2"
	    }
	  }), _vm._v(" "), _c('br'), _vm._v("\n    " + _vm._s(_vm.iToggle2) + "\n\n    "), _vm._m(3), _vm._v(" "), _c('br'), _vm._v(" "), _c('m-table', {
	    staticStyle: {
	      "width": "100%"
	    }
	  }, [_c('m-table-head', [_c('m-table-row', [_c('m-table-h', [_vm._v("Prop")]), _vm._v(" "), _c('m-table-h', [_vm._v("Effect")]), _vm._v(" "), _c('m-table-h', [_vm._v("Remarks")])], 1)], 1), _vm._v(" "), _c('m-table-body', _vm._l((_vm.docIcon), function(prop) {
	    return _c('m-table-row', [_c('m-table-cell', [_vm._v(_vm._s(prop.name))]), _vm._v(" "), _c('m-table-cell', [_vm._v(_vm._s(prop.description))]), _vm._v(" "), _c('m-table-cell', [_vm._v(_vm._s(prop.remark))])], 1)
	  }))], 1)], 1)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('pre', {
	    pre: true
	  }, [_vm._v("\n            "), _c('code', {
	    attrs: {
	      "class": "html"
	    }
	  }, [_vm._v("\n                <m-checkbox v-model=\"checkbox1\">This one</m-checkbox>\n                <m-checkbox v-model=\"checkbox2\">Label</m-checkbox>\n            ")]), _vm._v("\n        ")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('pre', {
	    pre: true
	  }, [_vm._v("\n            "), _c('code', {
	    attrs: {
	      "class": "html"
	    }
	  }, [_vm._v("\n                <m-radio name=\"test\" v-model=\"radioVal\" val=\"one\">Test 1</m-radio>\n                <m-radio name=\"test\" v-model=\"radioVal\" val=\"two\">Test 2</m-radio>\n                <m-radio name=\"test\" v-model=\"radioVal\" val=\"3\" disabled>Test 3</m-radio>\n            ")]), _vm._v("\n        ")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('pre', {
	    pre: true
	  }, [_vm._v("\n            "), _c('code', {
	    attrs: {
	      "class": "html"
	    }
	  }, [_vm._v("\n                <m-switch v-model=\"switch1\">On</m-switch>\n                <m-switch v-model=\"switch2\">Off</m-switch>\n                <m-switch v-model=\"switch2\" disabled>Off</m-switch>\n            ")]), _vm._v("\n        ")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('pre', {
	    pre: true
	  }, [_vm._v("\n            "), _c('code', {
	    attrs: {
	      "class": "html"
	    }
	  }, [_vm._v("\n                <m-icon-toggle v-model=\"iToggle\" icon=\"format_bold\"></m-icon-toggle>\n                <m-icon-toggle v-model=\"iToggle2\" icon=\"search\"></m-icon-toggle>\n            ")]), _vm._v("\n        ")])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-47fa2c6d", module.exports)
	  }
	}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* script */
	__vue_exports__ = __webpack_require__(44);
	
	/* template */
	var __vue_template__ = __webpack_require__(45);
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
	__vue_options__.__file = "/Users/oz/src/material-components/examples/src/components/tabs.vue";
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
	      hotAPI.createRecord("data-v-1010ddc0", __vue_options__);
	    } else {
	      hotAPI.reload("data-v-1010ddc0", __vue_options__);
	    }
	  })();
	}
	if (__vue_options__.functional) {
	  console.error("[vue-loader] tabs.vue: functional components are not supported and should be defined in plain js files using render functions.");
	}
	
	module.exports = __vue_exports__;

/***/ }),
/* 44 */
/***/ (function(module, exports) {

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
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
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
	    mounted: function mounted() {
	        this.$el.querySelectorAll('.html').forEach(function (el) {
	            return hljs.highlightBlock(el);
	        });
	    },
	    data: function data() {
	        return {
	            currentTub: 'tab-1',
	            currentTub2: 'Tab 2',
	
	            doc: [{ name: 'v-model', description: 'Current tab. It should use with m-tabs component', remark: '' }, { name: 'tab', description: 'Tab init object with params: title, id', remark: '' }, { name: 'no-ripple-effect', description: 'Disable ripple effect for tabs controls. It should use with m-tabs component', remark: '' }, { name: 'animation', description: 'Enable animation effect: true | false. It should use with m-tabs component', remark: '' }, { name: 'content-style', description: 'Style attribute params for a tabs container, It should use with m-tabs component', remark: '' }]
	        };
	    }
	};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('m-tabs', {
	    model: {
	      value: (_vm.currentTub),
	      callback: function($$v) {
	        _vm.currentTub = $$v
	      },
	      expression: "currentTub"
	    }
	  }, [_c('m-tab', {
	    attrs: {
	      "tab": {
	        title: 'Jon',
	        id: 'tab-1'
	      }
	    }
	  }, [_c('p', [_vm._v("\n                    Hello 1\n                ")])]), _vm._v(" "), _c('m-tab', {
	    attrs: {
	      "tab": {
	        title: 'Tom',
	        id: 'tab-2'
	      }
	    }
	  }, [_c('p', [_vm._v("\n                    Hello 2\n                ")])])], 1), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('m-tabs', {
	    attrs: {
	      "no-ripple-effect": true,
	      "animation": true,
	      "content-style": {
	        height: '300px'
	      }
	    },
	    model: {
	      value: (_vm.currentTub2),
	      callback: function($$v) {
	        _vm.currentTub2 = $$v
	      },
	      expression: "currentTub2"
	    }
	  }, [_c('m-tab', {
	    attrs: {
	      "tab": "Tab 1"
	    }
	  }, [_c('p', {
	    staticStyle: {
	      "min-height": "250px",
	      "background": "#fafafa",
	      "padding": "10px"
	    }
	  }, [_vm._v("\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mi dolor, molestie ut porttitor vitae, viverra ac lorem."), _c('br'), _vm._v("\n                    Pellentesque eu lobortis felis. Nulla id pretium ante. Aliquam turpis enim, imperdiet efficitur mauris a, "), _c('br'), _vm._v("\n                    tempor lacinia ante. Nam vel velit metus. Integer nulla turpis, tristique non dui eget, malesuada blandit nisi."), _c('br'), _vm._v("\n                    Phasellus id volutpat orci. Curabitur malesuada augue efficitur massa consequat consequat. Class aptent taciti sociosqu\n                    ad litora torquent per conubia nostra, per inceptos himenaeos.\n\n                ")])]), _vm._v(" "), _c('m-tab', {
	    attrs: {
	      "tab": "Tab 2"
	    }
	  }, [_c('p', {
	    staticStyle: {
	      "min-height": "250px",
	      "background": "#333",
	      "color": "#fff",
	      "padding": "10px"
	    }
	  }, [_vm._v("\n                    Quisque et hendrerit odio, viverra efficitur risus. Mauris tempus mi ut fringilla placerat. Vestibulum sagittis pellentesque nunc nec congue. Maecenas eu enim suscipit augue maximus viverra. Fusce tincidunt, nibh non eleifend placerat, lectus nunc lacinia nisi, a maximus purus mauris vel dui. Fusce in urna vel diam lobortis tempor non sed nisi. Etiam metus orci, convallis eget rhoncus vel, cursus a mauris. Proin maximus velit sed semper commodo. Maecenas sit amet laoreet leo. Nulla facilisi. Integer eget mauris mi. Nulla dictum erat eget mi maximus venenatis.\n                ")])]), _vm._v(" "), _c('m-tab', {
	    attrs: {
	      "tab": "Tab 3"
	    }
	  }, [_c('p', {
	    staticStyle: {
	      "min-height": "250px",
	      "background": "#3f51b5",
	      "color": "#fff",
	      "padding": "10px"
	    }
	  }, [_vm._v("\n                    Quisque et hendrerit odio, viverra efficitur risus. Mauris tempus mi ut fringilla placerat. Vestibulum sagittis pellentesque nunc nec congue. Maecenas eu enim suscipit augue maximus viverra. Fusce tincidunt, nibh non eleifend placerat, lectus nunc lacinia nisi, a maximus purus mauris vel dui. Fusce in urna vel diam lobortis tempor non sed nisi. Etiam metus orci, convallis eget rhoncus vel, cursus a mauris. Proin maximus velit sed semper commodo. Maecenas sit amet laoreet leo. Nulla facilisi. Integer eget mauris mi. Nulla dictum erat eget mi maximus venenatis.\n                ")])])], 1), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('br'), _vm._v(" "), _c('m-table', {
	    staticStyle: {
	      "width": "100%"
	    }
	  }, [_c('m-table-head', [_c('m-table-row', [_c('m-table-h', [_vm._v("Prop")]), _vm._v(" "), _c('m-table-h', [_vm._v("Effect")]), _vm._v(" "), _c('m-table-h', [_vm._v("Remarks")])], 1)], 1), _vm._v(" "), _c('m-table-body', _vm._l((_vm.doc), function(prop) {
	    return _c('m-table-row', [_c('m-table-cell', [_vm._v(_vm._s(prop.name))]), _vm._v(" "), _c('m-table-cell', [_vm._v(_vm._s(prop.description))]), _vm._v(" "), _c('m-table-cell', [_vm._v(_vm._s(prop.remark))])], 1)
	  }))], 1)], 1)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('pre', {
	    pre: true
	  }, [_vm._v("\n            "), _c('code', {
	    attrs: {
	      "class": "html"
	    }
	  }, [_vm._v("\n<template>\n    <div>\n        <m-tabs v-model=\"currentTub\">\n            <m-tab :tab=\"{ title: 'Jon', id: 'tab-1' }\">\n                <p>\n                    Hello 1\n                </p>\n            </m-tab>\n            <m-tab :tab=\"{ title: 'Tom', id: 'tab-2' }\">\n                <p>\n                    Hello 2\n                </p>\n            </m-tab>\n\n        </m-tabs>\n    </div>\n</template>\n\n<script>\n    export default{\n        data(){\n            return {\n                currentTub: 'tab-1',\n            }\n        }\n    }\n</script>\n            ")])])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('pre', {
	    pre: true
	  }, [_vm._v("\n            "), _c('code', {
	    attrs: {
	      "class": "html"
	    }
	  }, [_vm._v("\n<template>\n        <m-tabs v-model=\"currentTub\" :no-ripple-effect=\"true\" :animation=\"true\" :content-style=\"{height: '300px'}\">\n            <m-tab tab=\"Tab 1\">\n                <p style=\"min-height: 250px; background: #fafafa; padding: 10px;\">\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mi dolor, molestie ut porttitor vitae, viverra ac lorem.<br>\n                    Pellentesque eu lobortis felis. Nulla id pretium ante. Aliquam turpis enim, imperdiet efficitur mauris a, <br>\n                    tempor lacinia ante. Nam vel velit metus. Integer nulla turpis, tristique non dui eget, malesuada blandit nisi.<br>\n                    Phasellus id volutpat orci. Curabitur malesuada augue efficitur massa consequat consequat. Class aptent taciti sociosqu\n                    ad litora torquent per conubia nostra, per inceptos himenaeos.\n\n                </p>\n            </m-tab>\n            <m-tab tab=\"Tab 2\">\n                <p style=\"min-height: 250px; background: #333; color: #fff; padding: 10px;\">\n                    Quisque et hendrerit odio, viverra efficitur risus. Mauris tempus mi ut fringilla placerat. Vestibulum sagittis pellentesque nunc nec congue. Maecenas eu enim suscipit augue maximus viverra. Fusce tincidunt, nibh non eleifend placerat, lectus nunc lacinia nisi, a maximus purus mauris vel dui. Fusce in urna vel diam lobortis tempor non sed nisi. Etiam metus orci, convallis eget rhoncus vel, cursus a mauris. Proin maximus velit sed semper commodo. Maecenas sit amet laoreet leo. Nulla facilisi. Integer eget mauris mi. Nulla dictum erat eget mi maximus venenatis.\n                </p>\n            </m-tab>\n\n            <m-tab tab=\"Tab 3\">\n                <p style=\"min-height: 250px; background: #3f51b5; color: #fff; padding: 10px;\">\n                    Quisque et hendrerit odio, viverra efficitur risus. Mauris tempus mi ut fringilla placerat. Vestibulum sagittis pellentesque nunc nec congue. Maecenas eu enim suscipit augue maximus viverra. Fusce tincidunt, nibh non eleifend placerat, lectus nunc lacinia nisi, a maximus purus mauris vel dui. Fusce in urna vel diam lobortis tempor non sed nisi. Etiam metus orci, convallis eget rhoncus vel, cursus a mauris. Proin maximus velit sed semper commodo. Maecenas sit amet laoreet leo. Nulla facilisi. Integer eget mauris mi. Nulla dictum erat eget mi maximus venenatis.\n                </p>\n            </m-tab>\n\n        </m-tabs>\n    </div>\n</template>\n\n<script>\n  export default{\n      data(){\n          return {\n              currentTub: 'Tab 2'\n          }\n      }\n  }\n</script>\n\n            ")]), _vm._v("\n        ")])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-1010ddc0", module.exports)
	  }
	}

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* script */
	__vue_exports__ = __webpack_require__(47);
	
	/* template */
	var __vue_template__ = __webpack_require__(48);
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
	__vue_options__.__file = "/Users/oz/src/material-components/examples/src/components/tooltips.vue";
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
	      hotAPI.createRecord("data-v-501c8072", __vue_options__);
	    } else {
	      hotAPI.reload("data-v-501c8072", __vue_options__);
	    }
	  })();
	}
	if (__vue_options__.functional) {
	  console.error("[vue-loader] tooltips.vue: functional components are not supported and should be defined in plain js files using render functions.");
	}
	
	module.exports = __vue_exports__;

/***/ }),
/* 47 */
/***/ (function(module, exports) {

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
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
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
	    mounted: function mounted() {
	        this.$el.querySelectorAll('.html').forEach(function (el) {
	            return hljs.highlightBlock(el);
	        });
	    },
	    data: function data() {
	        return {
	            doc: [{ name: 'target', description: 'id of another item. The tooltip is binded to the item with the specified id', remark: 'Required' }, { name: 'large', description: 'Makes the tooltip bigger', remark: '' }, { name: 'left', description: '', remark: '' }, { name: 'right', description: '', remark: '' }, { name: 'top', description: '', remark: '' }, { name: 'bottom', description: '', remark: '' }]
	        };
	    }
	};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticStyle: {
	      "margin": "100px"
	    }
	  }, [_c('m-tooltip', {
	    attrs: {
	      "target": "add-button"
	    }
	  }, [_vm._v("Hello World")]), _vm._v(" "), _c('m-button', {
	    attrs: {
	      "raised": "",
	      "primary": "",
	      "ripple": "",
	      "id": "add-button"
	    }
	  }, [_vm._v("Add")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('m-tooltip', {
	    attrs: {
	      "target": "add",
	      "large": ""
	    }
	  }, [_vm._v("Upload "), _c('strong', [_vm._v("file.zip")])]), _vm._v(" "), _c('m-button', {
	    attrs: {
	      "icon": "add",
	      "id": "add",
	      "raised": "",
	      "accent": ""
	    }
	  }), _vm._v(" "), _c('hr'), _vm._v(" "), _c('ul', [_c('li', [_c('p', [_c('m-tooltip', {
	    attrs: {
	      "target": "left",
	      "left": ""
	    }
	  }, [_vm._v("Left tooltipe")]), _vm._v(" "), _c('m-button', {
	    attrs: {
	      "raised": "",
	      "primary": "",
	      "ripple": "",
	      "id": "left"
	    }
	  }, [_vm._v("Left")])], 1)]), _vm._v(" "), _c('li', [_c('p', [_c('m-tooltip', {
	    attrs: {
	      "target": "right",
	      "right": ""
	    }
	  }, [_vm._v("Right tooltipe")]), _vm._v(" "), _c('m-button', {
	    attrs: {
	      "raised": "",
	      "primary": "",
	      "ripple": "",
	      "id": "right"
	    }
	  }, [_vm._v("Right")])], 1)]), _vm._v(" "), _c('li', [_c('p', [_c('m-tooltip', {
	    attrs: {
	      "target": "top",
	      "top": ""
	    }
	  }, [_vm._v("Top tooltipe")]), _vm._v(" "), _c('m-button', {
	    attrs: {
	      "raised": "",
	      "primary": "",
	      "ripple": "",
	      "id": "top"
	    }
	  }, [_vm._v("Top")])], 1)]), _vm._v(" "), _c('li', [_c('p', [_c('m-tooltip', {
	    attrs: {
	      "target": "bottom",
	      "bottom": ""
	    }
	  }, [_vm._v("Bottom tooltipe")]), _vm._v(" "), _c('m-button', {
	    attrs: {
	      "raised": "",
	      "primary": "",
	      "ripple": "",
	      "id": "bottom"
	    }
	  }, [_vm._v("Bottom")])], 1)])]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('br'), _vm._v(" "), _c('m-table', {
	    staticStyle: {
	      "width": "100%"
	    }
	  }, [_c('m-table-head', [_c('m-table-row', [_c('m-table-h', [_vm._v("Prop")]), _vm._v(" "), _c('m-table-h', [_vm._v("Effect")]), _vm._v(" "), _c('m-table-h', [_vm._v("Remarks")])], 1)], 1), _vm._v(" "), _c('m-table-body', _vm._l((_vm.doc), function(prop) {
	    return _c('m-table-row', [_c('m-table-cell', [_vm._v(_vm._s(prop.name))]), _vm._v(" "), _c('m-table-cell', [_vm._v(_vm._s(prop.description))]), _vm._v(" "), _c('m-table-cell', [_vm._v(_vm._s(prop.remark))])], 1)
	  }))], 1)], 1)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('pre', {
	    pre: true
	  }, [_vm._v("\n            "), _c('code', {
	    attrs: {
	      "class": "html"
	    }
	  }, [_vm._v("\n                <m-tooltip target=\"add-button\">Hello World</m-tooltip>\n                <m-button raised primary ripple id=\"add-button\">Add</m-button>\n\n                <m-tooltip target=\"add\" large>Upload <strong>file.zip</strong></m-tooltip>\n                <m-button icon=\"add\" id=\"add\" raised accent></m-button>\n\n                <m-tooltip target=\"left\" left>Left tooltipe</m-tooltip>\n                <m-button raised primary ripple id=\"left\">Left</m-button>\n            ")]), _vm._v("\n        ")])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-501c8072", module.exports)
	  }
	}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

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
	__vue_options__.__file = "/Users/oz/src/material-components/examples/src/components/table.vue";
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
	      hotAPI.createRecord("data-v-042202c8", __vue_options__);
	    } else {
	      hotAPI.reload("data-v-042202c8", __vue_options__);
	    }
	  })();
	}
	if (__vue_options__.functional) {
	  console.error("[vue-loader] table.vue: functional components are not supported and should be defined in plain js files using render functions.");
	}
	
	module.exports = __vue_exports__;

/***/ }),
/* 50 */
/***/ (function(module, exports) {

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
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
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
	    created: function created() {
	        var _this = this;
	
	        this.$http.get('https://jsonplaceholder.typicode.com/users').then(function (res) {
	            _this.testDataSet = res.data;
	        });
	    },
	    mounted: function mounted() {
	        this.$el.querySelectorAll('.html').forEach(function (el) {
	            return hljs.highlightBlock(el);
	        });
	    },
	
	
	    methods: {
	        onSelect: function onSelect(items) {
	            this.sel = items;
	        }
	    },
	
	    data: function data() {
	        return {
	            sel: {},
	            testDataSet: [],
	            doc: [{ name: 'select', description: 'This is callback prop for get selected rows, It should use with m-table component', remark: '' }, { name: 'selection', description: 'It should use with m-table-row component', remark: '' }, { name: 'm-item', description: 'For table row value passing. It should use with m-table-row component', remark: '' }, { name: 'numeric', description: 'Define data type of cell, It should use with m-table-cell component', remark: '' }, { name: 'tooltip', description: 'Add tooltip for table cell, It should use with m-table-cell component', remark: '' }]
	        };
	    }
	};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('h3', [_vm._v("Table")]), _vm._v(" "), _c('p', {
	    staticStyle: {
	      "float": "left"
	    }
	  }, [_c('m-table', {
	    on: {
	      "select": _vm.onSelect
	    }
	  }, [_c('m-table-head', [_c('m-table-row', [_c('m-table-h', {
	    attrs: {
	      "numeric": ""
	    }
	  }, [_vm._v("Id")]), _vm._v(" "), _c('m-table-h', [_vm._v("Email")]), _vm._v(" "), _c('m-table-h', [_vm._v("Name")])], 1)], 1), _vm._v(" "), _c('m-table-body', _vm._l((_vm.testDataSet), function(user) {
	    return _c('m-table-row', {
	      attrs: {
	        "selection": "",
	        "m-item": user
	      }
	    }, [_c('m-table-cell', {
	      attrs: {
	        "numeric": ""
	      }
	    }, [_vm._v(_vm._s(user.id))]), _vm._v(" "), _c('m-table-cell', {
	      attrs: {
	        "tooltip": 'E-mail: ' + user.email
	      }
	    }, [_vm._v(_vm._s(user.email))]), _vm._v(" "), _c('m-table-cell', [_vm._v(_vm._s(user.name))])], 1)
	  }))], 1)], 1), _vm._v(" "), _c('div', {
	    staticStyle: {
	      "float": "left",
	      "padding-left": "20px",
	      "width": "300px"
	    }
	  }, [_vm._m(0), _vm._v(" "), _vm._l((_vm.sel), function(s) {
	    return _c('p', [_vm._v(_vm._s(s.id) + ", " + _vm._s(s.email) + ", " + _vm._s(s.name))])
	  })], 2), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('div', {
	    staticStyle: {
	      "clear": "both"
	    }
	  }), _vm._v(" "), _c('div', [_c('h4', [_vm._v("Static Table")]), _vm._v(" "), _c('m-table', [_c('m-table-head', [_c('m-table-row', [_c('m-table-h', {
	    attrs: {
	      "numeric": ""
	    }
	  }, [_vm._v("Id")]), _vm._v(" "), _c('m-table-h', [_vm._v("Email")]), _vm._v(" "), _c('m-table-h', [_vm._v("Name")])], 1)], 1), _vm._v(" "), _c('m-table-body', _vm._l((_vm.testDataSet), function(user) {
	    return _c('m-table-row', [_c('m-table-cell', {
	      attrs: {
	        "numeric": ""
	      }
	    }, [_vm._v(_vm._s(user.id))]), _vm._v(" "), _c('m-table-cell', [_vm._v(_vm._s(user.email))]), _vm._v(" "), _c('m-table-cell', [_vm._v(_vm._s(user.name))])], 1)
	  }))], 1)], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('m-table', {
	    staticStyle: {
	      "width": "100%"
	    }
	  }, [_c('m-table-head', [_c('m-table-row', [_c('m-table-h', [_vm._v("Prop")]), _vm._v(" "), _c('m-table-h', [_vm._v("Effect")]), _vm._v(" "), _c('m-table-h', [_vm._v("Remarks")])], 1)], 1), _vm._v(" "), _c('m-table-body', _vm._l((_vm.doc), function(prop) {
	    return _c('m-table-row', [_c('m-table-cell', [_vm._v(_vm._s(prop.name))]), _vm._v(" "), _c('m-table-cell', [_vm._v(_vm._s(prop.description))]), _vm._v(" "), _c('m-table-cell', [_vm._v(_vm._s(prop.remark))])], 1)
	  }))], 1)], 1)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('b', [_vm._v("Selected Items:")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticStyle: {
	      "float": "left",
	      "padding-left": "20px"
	    }
	  }, [_c('pre', {
	    pre: true
	  }, [_vm._v("\n            "), _c('code', {
	    attrs: {
	      "class": "html"
	    }
	  }, [_vm._v("\n                <m-table @select=\"onSelect\">\n                    <m-table-head>\n                        <m-table-row>\n                            <m-table-h numeric>Id</m-table-h>\n                            <m-table-h>Email</m-table-h>\n                            <m-table-h>Name</m-table-h>\n                        </m-table-row>\n                    </m-table-head>\n\n\n                    <m-table-body>\n                        <m-table-row v-for=\"user in testDataSet\" selection :m-item=\"user\">\n                            <m-table-cell numeric>{{user.id}}</m-table-cell>\n                            <m-table-cell :tooltip=\"'E-mail: '+user.email\" >{{user.email}}</m-table-cell>\n                            <m-table-cell>{{user.name}}</m-table-cell>\n                        </m-table-row>\n                    </m-table-body>\n                </m-table>\n            ")]), _vm._v("\n        ")])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-042202c8", module.exports)
	  }
	}

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* script */
	__vue_exports__ = __webpack_require__(53);
	
	/* template */
	var __vue_template__ = __webpack_require__(54);
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
	__vue_options__.__file = "/Users/oz/src/material-components/examples/src/components/dialogs.vue";
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
	      hotAPI.createRecord("data-v-6fde02f9", __vue_options__);
	    } else {
	      hotAPI.reload("data-v-6fde02f9", __vue_options__);
	    }
	  })();
	}
	if (__vue_options__.functional) {
	  console.error("[vue-loader] dialogs.vue: functional components are not supported and should be defined in plain js files using render functions.");
	}
	
	module.exports = __vue_exports__;

/***/ }),
/* 53 */
/***/ (function(module, exports) {

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
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
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
	    methods: {
	        open: function open() {
	            this.$refs.msg.open();
	        },
	        openFull: function openFull() {
	            this.$refs.msgFullwidth.open();
	        },
	        openAction: function openAction() {
	            this.$refs.msg2.open();
	        },
	        test: function test() {
	            console.log(12321);
	        }
	    },
	    mounted: function mounted() {
	        hljs.highlightBlock(this.$el.querySelector('.html'));
	    },
	    data: function data() {
	        return {
	            increment: 0,
	            doc: [{ name: 'title', description: 'Title of the dialog', remark: '' }, { name: 'full-width', description: 'Make buttons full width by applying the mdl-dialog__actions--full-width modifier', remark: '' }, { name: 'no-focus-trap', description: 'Create custom focus for a tub navigation', remark: 'Optional' }]
	        };
	    }
	};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('h3', [_vm._v("Dialogs")]), _vm._v(" "), _c('m-dialog', {
	    ref: "msg",
	    attrs: {
	      "title": "MDL Dialog",
	      "close-cb": _vm.test
	    }
	  }, [_c('p', [_vm._v("\n                This is an example of the Material Design Lite dialog component. Please use responsibly.\n            ")])]), _vm._v(" "), _c('m-dialog', {
	    ref: "msgFullwidth",
	    attrs: {
	      "title": "MDL Dialog",
	      "full-width": ""
	    }
	  }, [_c('p', [_vm._v("\n                This is an example of the Material Design Lite dialog component. Please use responsibly.\n            ")])]), _vm._v(" "), _c('m-button', {
	    attrs: {
	      "raised": ""
	    },
	    nativeOn: {
	      "click": function($event) {
	        _vm.open($event)
	      }
	    }
	  }, [_vm._v("Open Dialog")]), _vm._v(" "), _c('m-button', {
	    attrs: {
	      "raised": ""
	    },
	    nativeOn: {
	      "click": function($event) {
	        _vm.openFull($event)
	      }
	    }
	  }, [_vm._v("Open Dialog Full Width")]), _vm._v(" "), _c('m-button', {
	    attrs: {
	      "raised": ""
	    },
	    nativeOn: {
	      "click": function($event) {
	        _vm.openAction($event)
	      }
	    }
	  }, [_vm._v("Custom Actions")]), _vm._v(" "), _c('m-dialog', {
	    ref: "msg2",
	    attrs: {
	      "full-width": "",
	      "title": "Test Title"
	    }
	  }, [_c('p', {
	    staticStyle: {
	      "padding": "30px"
	    }
	  }, [_vm._v("Increment: " + _vm._s(_vm.increment))]), _vm._v(" "), _c('template', {
	    slot: "actions"
	  }, [_c('m-button', {
	    attrs: {
	      "raised": "",
	      "primary": "",
	      "ripple": ""
	    },
	    nativeOn: {
	      "click": function($event) {
	        _vm.increment++
	      }
	    }
	  }, [_vm._v("Action")])], 1)], 2), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('m-table', {
	    staticStyle: {
	      "width": "100%"
	    }
	  }, [_c('m-table-head', [_c('m-table-row', [_c('m-table-h', [_vm._v("Prop")]), _vm._v(" "), _c('m-table-h', [_vm._v("Effect")]), _vm._v(" "), _c('m-table-h', [_vm._v("Remarks")])], 1)], 1), _vm._v(" "), _c('m-table-body', _vm._l((_vm.doc), function(prop) {
	    return _c('m-table-row', [_c('m-table-cell', [_vm._v(_vm._s(prop.name))]), _vm._v(" "), _c('m-table-cell', [_vm._v(_vm._s(prop.description))]), _vm._v(" "), _c('m-table-cell', [_vm._v(_vm._s(prop.remark))])], 1)
	  }))], 1)], 1)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('pre', {
	    pre: true
	  }, [_vm._v("\n                "), _c('code', {
	    attrs: {
	      "class": "html"
	    }
	  }, [_vm._v("\n<m-dialog ref=\"msg\" title=\"MDL Dialog\">\n    <p>\n        This is an example of the Material Design Lite dialog component. Please use responsibly.\n    </p>\n</m-dialog>\n\n<m-dialog ref=\"msgFullwidth\" title=\"MDL Dialog\" full-width>\n    <p>\n        This is an example of the Material Design Lite dialog component. Please use responsibly.\n    </p>\n</m-dialog>\n\n<m-dialog ref=\"msg2\" full-width title=\"Test Title\">\n    <p style=\"padding: 30px\">Increment: {{increment}}</p>\n\n    <template slot=\"actions\">\n        <m-button raised primary ripple @click.native=\"increment++\">Action</m-button>\n    </template>\n</m-dialog>\n\n<m-button @click.native=\"open\">Open Dialog</m-button>\n                ")]), _vm._v("\n            ")])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-6fde02f9", module.exports)
	  }
	}

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* styles */
	__webpack_require__(56);
	
	/* script */
	__vue_exports__ = __webpack_require__(58);
	
	/* template */
	var __vue_template__ = __webpack_require__(59);
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
	__vue_options__.__file = "/Users/oz/src/material-components/examples/src/components/cards.vue";
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
	      hotAPI.createRecord("data-v-66e5d7b1", __vue_options__);
	    } else {
	      hotAPI.reload("data-v-66e5d7b1", __vue_options__);
	    }
	  })();
	}
	if (__vue_options__.functional) {
	  console.error("[vue-loader] cards.vue: functional components are not supported and should be defined in plain js files using render functions.");
	}
	
	module.exports = __vue_exports__;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(57);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(34)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-66e5d7b1!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./cards.vue", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-66e5d7b1!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./cards.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(33)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.demo-card-square.mdl-card {\n  width: 320px;\n  height: 320px;\n}\n.demo-card-square > .mdl-card__title {\n  color: #fff;\n  background: url('https://getmdl.io/assets/demos/dog.png') bottom right 15% no-repeat #46B6AC;\n}\n.demo-card-wide.mdl-card {\n  width: 512px;\n}\n.demo-card-wide > .mdl-card__title {\n  color: #fff;\n  height: 176px;\n  background: url('https://getmdl.io/assets/demos/welcome_card.jpg') center / cover;\n}\n.demo-card-wide > .mdl-card__menu {\n  color: #fff;\n}\n\n", "", {"version":3,"sources":["/./examples/src/components/cards.vue?1751cdd4"],"names":[],"mappings":";AAmEA;EACA,aAAA;EACA,cAAA;CACA;AACA;EACA,YAAA;EACA,6FAAA;CACA;AAEA;EACA,aAAA;CACA;AACA;EACA,YAAA;EACA,cAAA;EACA,kFAAA;CACA;AACA;EACA,YAAA;CACA","file":"cards.vue","sourcesContent":["<template>\n    <div>\n        <h3>Cards</h3>\n\n        <m-card class=\"demo-card-square\" title=\"Updates\" supporting-text=\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...\" actions=\"actions\" actions-text=\"Update\"></m-card>\n\n        <br>\n        <br>\n\n        <m-card class=\"demo-card-wide\" title=\"Welcome\" supporting-text=\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...\" actions=\"actions\" actions-text=\"Get started\"></m-card>\n\n        <hr>\n\n        <div>\n            <pre v-pre>\n                <code class=\"html\">\n &#x3C;m-card class=&#x22;demo-card-square&#x22; title=&#x22;Updates&#x22; supporting-text=&#x22;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...&#x22; actions=&#x22;actions&#x22; actions-text=&#x22;Update&#x22;&#x3E;&#x3C;/m-card&#x3E;\n &#x3C;m-card class=&#x22;demo-card-wide&#x22; title=&#x22;Welcome&#x22; supporting-text=&#x22;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...&#x22; actions=&#x22;actions&#x22; actions-text=&#x22;Get started&#x22;&#x3E;&#x3C;/m-card&#x3E;\n\n &#x3C;style&#x3E;\n .demo-card-square.mdl-card {\n   width: 320px;\n   height: 320px;\n }\n .demo-card-square &#x3E; .mdl-card__title {\n   color: #fff;\n   background: url(&#x27;https://getmdl.io/assets/demos/dog.png&#x27;) bottom right 15% no-repeat #46B6AC;\n }\n\n .demo-card-wide.mdl-card {\n   width: 512px;\n }\n .demo-card-wide &#x3E; .mdl-card__title {\n   color: #fff;\n   height: 176px;\n   background: url(&#x27;https://getmdl.io/assets/demos/welcome_card.jpg&#x27;) center / cover;\n }\n .demo-card-wide &#x3E; .mdl-card__menu {\n   color: #fff;\n }\n\n &#x3C;/style&#x3E;\n                </code>\n            </pre>\n        </div>\n\n        <m-table style=\"width: 100%\">\n            <m-table-head>\n                <m-table-row>\n                    <m-table-h>Prop</m-table-h>\n                    <m-table-h>Effect</m-table-h>\n                    <m-table-h>Remarks</m-table-h>\n                </m-table-row>\n            </m-table-head>\n\n            <m-table-body>\n                <m-table-row v-for=\"prop in doc\">\n                    <m-table-cell>{{prop.name}}</m-table-cell>\n                    <m-table-cell>{{prop.description}}</m-table-cell>\n                    <m-table-cell>{{prop.remark}}</m-table-cell>\n                </m-table-row>\n            </m-table-body>\n        </m-table>\n    </div>\n</template>\n\n<style>\n.demo-card-square.mdl-card {\n  width: 320px;\n  height: 320px;\n}\n.demo-card-square > .mdl-card__title {\n  color: #fff;\n  background: url('https://getmdl.io/assets/demos/dog.png') bottom right 15% no-repeat #46B6AC;\n}\n\n.demo-card-wide.mdl-card {\n  width: 512px;\n}\n.demo-card-wide > .mdl-card__title {\n  color: #fff;\n  height: 176px;\n  background: url('https://getmdl.io/assets/demos/welcome_card.jpg') center / cover;\n}\n.demo-card-wide > .mdl-card__menu {\n  color: #fff;\n}\n\n</style>\n\n<script>\n\n    export default {\n        mounted() {\n            hljs.highlightBlock(this.$el.querySelector('.html'));\n        },\n        data(){\n            return {\n                doc: [\n                    {name: 'title', description: 'Defines card\\'s title', remark: ''},\n                    {name: 'actions', description: 'Makes the actions section visible', remark: 'You must set it to a non empty string in order to make it work'},\n                    {name: 'supporting-text', description: 'Defines card\\'s supporting text', remark: ''},\n                    {name: 'actions-text', description: 'Defines the actions section button\\'s text', remark: ''},\n                    {name: 'menu', description: 'Defines element as top right menu button', remark: ''},\n                    {name: 'subtitle', description: 'Assigns text characteristics to a card subtitle', remark: ''},\n                    {name: 'media', description: 'Defines src url for a card media background', remark: ''},\n                ]\n            }\n        }\n    }\n</script>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 58 */
/***/ (function(module, exports) {

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
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
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
	    mounted: function mounted() {
	        hljs.highlightBlock(this.$el.querySelector('.html'));
	    },
	    data: function data() {
	        return {
	            doc: [{ name: 'title', description: 'Defines card\'s title', remark: '' }, { name: 'actions', description: 'Makes the actions section visible', remark: 'You must set it to a non empty string in order to make it work' }, { name: 'supporting-text', description: 'Defines card\'s supporting text', remark: '' }, { name: 'actions-text', description: 'Defines the actions section button\'s text', remark: '' }, { name: 'menu', description: 'Defines element as top right menu button', remark: '' }, { name: 'subtitle', description: 'Assigns text characteristics to a card subtitle', remark: '' }, { name: 'media', description: 'Defines src url for a card media background', remark: '' }]
	        };
	    }
	};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('h3', [_vm._v("Cards")]), _vm._v(" "), _c('m-card', {
	    staticClass: "demo-card-square",
	    attrs: {
	      "title": "Updates",
	      "supporting-text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...",
	      "actions": "actions",
	      "actions-text": "Update"
	    }
	  }), _vm._v(" "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('m-card', {
	    staticClass: "demo-card-wide",
	    attrs: {
	      "title": "Welcome",
	      "supporting-text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...",
	      "actions": "actions",
	      "actions-text": "Get started"
	    }
	  }), _vm._v(" "), _c('hr'), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('m-table', {
	    staticStyle: {
	      "width": "100%"
	    }
	  }, [_c('m-table-head', [_c('m-table-row', [_c('m-table-h', [_vm._v("Prop")]), _vm._v(" "), _c('m-table-h', [_vm._v("Effect")]), _vm._v(" "), _c('m-table-h', [_vm._v("Remarks")])], 1)], 1), _vm._v(" "), _c('m-table-body', _vm._l((_vm.doc), function(prop) {
	    return _c('m-table-row', [_c('m-table-cell', [_vm._v(_vm._s(prop.name))]), _vm._v(" "), _c('m-table-cell', [_vm._v(_vm._s(prop.description))]), _vm._v(" "), _c('m-table-cell', [_vm._v(_vm._s(prop.remark))])], 1)
	  }))], 1)], 1)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('pre', {
	    pre: true
	  }, [_vm._v("\n               "), _c('code', {
	    attrs: {
	      "class": "html"
	    }
	  }, [_vm._v("\n<m-card class=\"demo-card-square\" title=\"Updates\" supporting-text=\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...\" actions=\"actions\" actions-text=\"Update\"></m-card>\n<m-card class=\"demo-card-wide\" title=\"Welcome\" supporting-text=\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...\" actions=\"actions\" actions-text=\"Get started\"></m-card>\n\n<style>\n.demo-card-square.mdl-card {\n  width: 320px;\n  height: 320px;\n}\n.demo-card-square > .mdl-card__title {\n  color: #fff;\n  background: url('https://getmdl.io/assets/demos/dog.png') bottom right 15% no-repeat #46B6AC;\n}\n\n.demo-card-wide.mdl-card {\n  width: 512px;\n}\n.demo-card-wide > .mdl-card__title {\n  color: #fff;\n  height: 176px;\n  background: url('https://getmdl.io/assets/demos/welcome_card.jpg') center / cover;\n}\n.demo-card-wide > .mdl-card__menu {\n  color: #fff;\n}\n\n</style>\n               ")]), _vm._v("\n           ")])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-66e5d7b1", module.exports)
	  }
	}

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
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
	__vue_options__.__file = "/Users/oz/src/material-components/examples/src/components/chips.vue";
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
	      hotAPI.createRecord("data-v-767023f5", __vue_options__);
	    } else {
	      hotAPI.reload("data-v-767023f5", __vue_options__);
	    }
	  })();
	}
	if (__vue_options__.functional) {
	  console.error("[vue-loader] chips.vue: functional components are not supported and should be defined in plain js files using render functions.");
	}
	
	module.exports = __vue_exports__;

/***/ }),
/* 61 */
/***/ (function(module, exports) {

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
	
	exports.default = {
	    methods: {
	        del: function del() {
	            var _this = this;
	
	            this.showChip = false;
	            this.$root.$emit('msgSent', {
	                message: 'Deleted',
	                actionText: 'Undo',
	                timeout: 3000,
	                actionHandler: function actionHandler(event) {
	                    _this.showChip = true;
	                }
	            });
	        }
	    },
	    mounted: function mounted() {
	        hljs.highlightBlock(this.$el.querySelector('.html'));
	    },
	    data: function data() {
	        return {
	            showChip: true,
	            doc: [{ name: 'contact-image', description: 'src attributes\' value for a contact image', remark: '' }, { name: 'delete-icon', description: '', remark: 'Optional' }, { name: 'contact', description: 'Defines element as the chip\'s text', remark: '' }]
	        };
	    }
	};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('h3', [_vm._v("Chips")]), _vm._v(" "), _c('m-chip', {
	    attrs: {
	      "contact": "A"
	    }
	  }, [_vm._v("Basic Chip")]), _vm._v(" "), _c('m-chip', {
	    attrs: {
	      "contact-image": "https://getmdl.io/templates/dashboard/images/user.jpg"
	    }
	  }, [_vm._v("Deletable Contact Chip")]), _vm._v(" "), (_vm.showChip) ? _c('m-chip', {
	    attrs: {
	      "contact": "A"
	    },
	    on: {
	      "delete": _vm.del
	    }
	  }, [_vm._v("Basic Chip")]) : _vm._e(), _vm._v(" "), _c('m-snackbar', {
	    attrs: {
	      "display-on": "msgSent"
	    }
	  }), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('m-table', {
	    staticStyle: {
	      "width": "100%"
	    }
	  }, [_c('m-table-head', [_c('m-table-row', [_c('m-table-h', [_vm._v("Prop")]), _vm._v(" "), _c('m-table-h', [_vm._v("Effect")]), _vm._v(" "), _c('m-table-h', [_vm._v("Remarks")])], 1)], 1), _vm._v(" "), _c('m-table-body', _vm._l((_vm.doc), function(prop) {
	    return _c('m-table-row', [_c('m-table-cell', [_vm._v(_vm._s(prop.name))]), _vm._v(" "), _c('m-table-cell', [_vm._v(_vm._s(prop.description))]), _vm._v(" "), _c('m-table-cell', [_vm._v(_vm._s(prop.remark))])], 1)
	  }))], 1)], 1)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('pre', {
	    pre: true
	  }, [_vm._v("\n                "), _c('code', {
	    attrs: {
	      "class": "html"
	    }
	  }, [_vm._v("\n<m-chip contact=\"A\">Basic Chip</m-chip>\n<m-chip contact-image=\"https://getmdl.io/templates/dashboard/images/user.jpg\">Deletable Contact Chip</m-chip>\n<m-chip contact=\"A\" @delete=\"del\" v-if=\"showChip\">Basic Chip</m-chip>\n<m-snackbar display-on=\"msgSent\"></m-snackbar>\n                ")]), _vm._v("\n            ")])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-767023f5", module.exports)
	  }
	}

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* styles */
	__webpack_require__(64);
	
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
	__vue_options__.__file = "/Users/oz/src/material-components/examples/src/components/lists.vue";
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
	      hotAPI.createRecord("data-v-2c8aeae3", __vue_options__);
	    } else {
	      hotAPI.reload("data-v-2c8aeae3", __vue_options__);
	    }
	  })();
	}
	if (__vue_options__.functional) {
	  console.error("[vue-loader] lists.vue: functional components are not supported and should be defined in plain js files using render functions.");
	}
	
	module.exports = __vue_exports__;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(65);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(34)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-2c8aeae3!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./lists.vue", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-2c8aeae3!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./lists.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(33)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.demo-list-item {\n  width: 300px;\n}\n.demo-list-three {\n  width: 650px;\n}\n", "", {"version":3,"sources":["/./examples/src/components/lists.vue?5db72dc0"],"names":[],"mappings":";AA+KA;EACA,aAAA;CACA;AAEA;EACA,aAAA;CACA","file":"lists.vue","sourcesContent":["<template>\n    <div>\n        <h3>Lists</h3>\n\n        <m-list class=\"demo-list-item\">\n            <m-list-item>Bryan Cranston</m-list-item>\n            <m-list-item>Aaron Paul</m-list-item>\n            <m-list-item>Bob Odenkirk</m-list-item>\n        </m-list>\n\n        <div>\n            <pre>\n                <code class=\"html\">\n                    &#x3C;m-list class=&#x22;demo-list-item&#x22;&#x3E;\n                        &#x3C;m-list-item&#x3E;Bryan Cranston&#x3C;/m-list-item&#x3E;\n                        &#x3C;m-list-item&#x3E;Aaron Paul&#x3C;/m-list-item&#x3E;\n                        &#x3C;m-list-item&#x3E;Bob Odenkirk&#x3C;/m-list-item&#x3E;\n                    &#x3C;/m-list&#x3E;\n                </code>\n            </pre>\n        </div>\n\n        <hr>\n\n        <m-list class=\"demo-list-item\">\n            <m-list-item icon=\"person\">Bryan Cranston</m-list-item>\n            <m-list-item icon=\"person\">Aaron Paul</m-list-item>\n            <m-list-item icon=\"person\">Bob Odenkirk</m-list-item>\n        </m-list>\n\n        <div>\n            <pre>\n                <code class=\"html\">\n                    &#x3C;m-list class=&#x22;demo-list-item&#x22;&#x3E;\n                        &#x3C;m-list-item icon=&#x22;person&#x22;&#x3E;Bryan Cranston&#x3C;/m-list-item&#x3E;\n                        &#x3C;m-list-item icon=&#x22;person&#x22;&#x3E;Aaron Paul&#x3C;/m-list-item&#x3E;\n                        &#x3C;m-list-item icon=&#x22;person&#x22;&#x3E;Bob Odenkirk&#x3C;/m-list-item&#x3E;\n                    &#x3C;/m-list&#x3E;\n                </code>\n            </pre>\n        </div>\n\n        <hr>\n\n        <m-list class=\"demo-list-item\">\n            <m-list-item icon-avatar=\"person\">Bryan Cranston</m-list-item>\n            <m-list-item icon-avatar=\"person\">Aaron Paul</m-list-item>\n            <m-list-item icon-avatar=\"person\">Bob Odenkirk</m-list-item>\n        </m-list>\n\n        <div>\n            <pre>\n                <code class=\"html\">\n                    &#x3C;m-list class=&#x22;demo-list-item&#x22;&#x3E;\n                        &#x3C;m-list-item icon-avatar=&#x22;person&#x22;&#x3E;Bryan Cranston&#x3C;/m-list-item&#x3E;\n                        &#x3C;m-list-item icon-avatar=&#x22;person&#x22;&#x3E;Aaron Paul&#x3C;/m-list-item&#x3E;\n                        &#x3C;m-list-item icon-avatar=&#x22;person&#x22;&#x3E;Bob Odenkirk&#x3C;/m-list-item&#x3E;\n                    &#x3C;/m-list&#x3E;\n                </code>\n            </pre>\n        </div>\n\n        <hr>\n\n        <m-list class=\"demo-list-item\">\n            <m-list-item icon-avatar=\"person\" v-for=\"person in people\">\n                {{person.name}}\n\n                <template slot=\"action\">\n                    <m-switch v-model=\"person.on\"></m-switch>\n                </template>\n            </m-list-item>\n        </m-list>\n\n        <div>\n            <pre v-pre>\n                <code class=\"html\">\n                    &#x3C;m-list class=&#x22;demo-list-item&#x22;&#x3E;\n                        &#x3C;m-list-item icon-avatar=&#x22;person&#x22; v-for=&#x22;person in people&#x22;&#x3E;\n                            {{person.name}}\n\n                            &#x3C;template slot=&#x22;action&#x22;&#x3E;\n                                &#x3C;m-switch v-model=&#x22;person.on&#x22;&#x3E;&#x3C;/m-switch&#x3E;\n                            &#x3C;/template&#x3E;\n                        &#x3C;/m-list-item&#x3E;\n                    &#x3C;/m-list&#x3E;\n                </code>\n            </pre>\n        </div>\n\n        <hr>\n\n        <m-list class=\"demo-list-item\">\n            <m-list-item icon-avatar=\"person\" v-for=\"person in people\" :sub-title=\"person.sub\">\n                {{person.name}}\n\n                <template slot=\"action\">\n                    <a class=\"mdl-list__item-secondary-action\" href=\"#\">\n                        <i class=\"material-icons\">star</i>\n                    </a>\n                </template>\n            </m-list-item>\n        </m-list>\n\n        <div>\n            <pre v-pre>\n                <code class=\"html\">\n                    &#x3C;m-list class=&#x22;demo-list-item&#x22;&#x3E;\n                         &#x3C;m-list-item icon-avatar=&#x22;person&#x22; v-for=&#x22;person in people&#x22; :sub-title=&#x22;person.sub&#x22;&#x3E;\n                            {{person.name}}\n\n                            &#x3C;template slot=&#x22;action&#x22;&#x3E;\n                                &#x3C;a class=&#x22;mdl-list__item-secondary-action&#x22; href=&#x22;#&#x22;&#x3E;\n                                    &#x3C;i class=&#x22;material-icons&#x22;&#x3E;star&#x3C;/i&#x3E;\n                                &#x3C;/a&#x3E;\n                            &#x3C;/template&#x3E;\n                        &#x3C;/m-list-item&#x3E;\n                    &#x3C;/m-list&#x3E;\n                </code>\n            </pre>\n        </div>\n\n        <hr>\n\n        <m-list class=\"demo-list-three\">\n            <m-list-item icon-avatar=\"person\" v-for=\"person in people\" :text=\"person.text\">\n                {{person.name}}\n\n                <template slot=\"action\">\n                    <a class=\"mdl-list__item-secondary-action\" href=\"#\">\n                        <i class=\"material-icons\">star</i>\n                    </a>\n                </template>\n            </m-list-item>\n        </m-list>\n\n        <div>\n            <pre v-pre>\n                <code class=\"html\">\n                    &#x3C;m-list class=&#x22;demo-list-three&#x22;&#x3E;\n                        &#x3C;m-list-item icon-avatar=&#x22;person&#x22; v-for=&#x22;person in people&#x22; :text=&#x22;person.text&#x22;&#x3E;\n                            {{person.name}}\n\n                            &#x3C;template slot=&#x22;action&#x22;&#x3E;\n                                &#x3C;a class=&#x22;mdl-list__item-secondary-action&#x22; href=&#x22;#&#x22;&#x3E;\n                                    &#x3C;i class=&#x22;material-icons&#x22;&#x3E;star&#x3C;/i&#x3E;\n                                &#x3C;/a&#x3E;\n                            &#x3C;/template&#x3E;\n                        &#x3C;/m-list-item&#x3E;\n                    &#x3C;/m-list&#x3E;\n                </code>\n            </pre>\n        </div>\n\n        <m-table style=\"width: 100%\">\n            <m-table-head>\n                <m-table-row>\n                    <m-table-h>Prop</m-table-h>\n                    <m-table-h>Effect</m-table-h>\n                    <m-table-h>Remarks</m-table-h>\n                </m-table-row>\n            </m-table-head>\n\n            <m-table-body>\n                <m-table-row v-for=\"prop in doc\">\n                    <m-table-cell>{{prop.name}}</m-table-cell>\n                    <m-table-cell>{{prop.description}}</m-table-cell>\n                    <m-table-cell>{{prop.remark}}</m-table-cell>\n                </m-table-row>\n            </m-table-body>\n        </m-table>\n    </div>\n</template>\n\n<style>\n.demo-list-item {\n  width: 300px;\n}\n\n.demo-list-three {\n  width: 650px;\n}\n</style>\n\n<script>\n    export default{\n        methods: {\n        },\n        mounted() {\n            this.$el.querySelectorAll('.html').forEach(el => hljs.highlightBlock(el))\n        },\n        data(){\n            return {\n                people: [\n                    {\n                        'name': 'Bryan Cranston',\n                        'text': 'Bryan Cranston played the role of Walter in Breaking Bad. He is also known for playing Hal in Malcom in the Middle.',\n                        on: true,\n                        sub: '62 Episodes',\n                    },\n                    {\n                        'name': 'Aaron Paul',\n                        text: 'Aaron Paul played the role of Jesse in Breaking Bad. He also featured in the \"Need For Speed\" Movie.',\n                        on: false,\n                        sub: '52 Episodes',\n                    },\n                    {\n                        'name': 'Bob Odenkirk',\n                        on: true,\n                        text: 'Bob Odinkrik played the role of Saul in Breaking Bad. Due to public fondness for the character, Bob stars in his own show now, called \"Better Call Saul\".',\n                        sub: '32 Episodes',\n                    },\n                ],\n\n                doc: [\n                    {name: 'icon', description: 'A icon for a list item', title: 'Optional'},\n                    {name: 'icon-avatar', description: 'A big icon avatar for la list item', title: 'Optional'},\n                    {name: 'text', description: 'A description text for a list item', title: 'Optional'},\n                    {name: 'sub-title', description: 'Subtitle text for a list item', title: 'Optional'},\n                ]\n            }\n        }\n    }\n</script>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 66 */
/***/ (function(module, exports) {

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
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
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
	    methods: {},
	    mounted: function mounted() {
	        this.$el.querySelectorAll('.html').forEach(function (el) {
	            return hljs.highlightBlock(el);
	        });
	    },
	    data: function data() {
	        return {
	            people: [{
	                'name': 'Bryan Cranston',
	                'text': 'Bryan Cranston played the role of Walter in Breaking Bad. He is also known for playing Hal in Malcom in the Middle.',
	                on: true,
	                sub: '62 Episodes'
	            }, {
	                'name': 'Aaron Paul',
	                text: 'Aaron Paul played the role of Jesse in Breaking Bad. He also featured in the "Need For Speed" Movie.',
	                on: false,
	                sub: '52 Episodes'
	            }, {
	                'name': 'Bob Odenkirk',
	                on: true,
	                text: 'Bob Odinkrik played the role of Saul in Breaking Bad. Due to public fondness for the character, Bob stars in his own show now, called "Better Call Saul".',
	                sub: '32 Episodes'
	            }],
	
	            doc: [{ name: 'icon', description: 'A icon for a list item', title: 'Optional' }, { name: 'icon-avatar', description: 'A big icon avatar for la list item', title: 'Optional' }, { name: 'text', description: 'A description text for a list item', title: 'Optional' }, { name: 'sub-title', description: 'Subtitle text for a list item', title: 'Optional' }]
	        };
	    }
	};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('h3', [_vm._v("Lists")]), _vm._v(" "), _c('m-list', {
	    staticClass: "demo-list-item"
	  }, [_c('m-list-item', [_vm._v("Bryan Cranston")]), _vm._v(" "), _c('m-list-item', [_vm._v("Aaron Paul")]), _vm._v(" "), _c('m-list-item', [_vm._v("Bob Odenkirk")])], 1), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('hr'), _vm._v(" "), _c('m-list', {
	    staticClass: "demo-list-item"
	  }, [_c('m-list-item', {
	    attrs: {
	      "icon": "person"
	    }
	  }, [_vm._v("Bryan Cranston")]), _vm._v(" "), _c('m-list-item', {
	    attrs: {
	      "icon": "person"
	    }
	  }, [_vm._v("Aaron Paul")]), _vm._v(" "), _c('m-list-item', {
	    attrs: {
	      "icon": "person"
	    }
	  }, [_vm._v("Bob Odenkirk")])], 1), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('hr'), _vm._v(" "), _c('m-list', {
	    staticClass: "demo-list-item"
	  }, [_c('m-list-item', {
	    attrs: {
	      "icon-avatar": "person"
	    }
	  }, [_vm._v("Bryan Cranston")]), _vm._v(" "), _c('m-list-item', {
	    attrs: {
	      "icon-avatar": "person"
	    }
	  }, [_vm._v("Aaron Paul")]), _vm._v(" "), _c('m-list-item', {
	    attrs: {
	      "icon-avatar": "person"
	    }
	  }, [_vm._v("Bob Odenkirk")])], 1), _vm._v(" "), _vm._m(2), _vm._v(" "), _c('hr'), _vm._v(" "), _c('m-list', {
	    staticClass: "demo-list-item"
	  }, _vm._l((_vm.people), function(person) {
	    return _c('m-list-item', {
	      attrs: {
	        "icon-avatar": "person"
	      }
	    }, [_vm._v("\n            " + _vm._s(person.name) + "\n\n            "), _c('template', {
	      slot: "action"
	    }, [_c('m-switch', {
	      model: {
	        value: (person.on),
	        callback: function($$v) {
	          person.on = $$v
	        },
	        expression: "person.on"
	      }
	    })], 1)], 2)
	  })), _vm._v(" "), _vm._m(3), _vm._v(" "), _c('hr'), _vm._v(" "), _c('m-list', {
	    staticClass: "demo-list-item"
	  }, _vm._l((_vm.people), function(person) {
	    return _c('m-list-item', {
	      attrs: {
	        "icon-avatar": "person",
	        "sub-title": person.sub
	      }
	    }, [_vm._v("\n            " + _vm._s(person.name) + "\n\n            "), _c('template', {
	      slot: "action"
	    }, [_c('a', {
	      staticClass: "mdl-list__item-secondary-action",
	      attrs: {
	        "href": "#"
	      }
	    }, [_c('i', {
	      staticClass: "material-icons"
	    }, [_vm._v("star")])])])], 2)
	  })), _vm._v(" "), _vm._m(4), _vm._v(" "), _c('hr'), _vm._v(" "), _c('m-list', {
	    staticClass: "demo-list-three"
	  }, _vm._l((_vm.people), function(person) {
	    return _c('m-list-item', {
	      attrs: {
	        "icon-avatar": "person",
	        "text": person.text
	      }
	    }, [_vm._v("\n            " + _vm._s(person.name) + "\n\n            "), _c('template', {
	      slot: "action"
	    }, [_c('a', {
	      staticClass: "mdl-list__item-secondary-action",
	      attrs: {
	        "href": "#"
	      }
	    }, [_c('i', {
	      staticClass: "material-icons"
	    }, [_vm._v("star")])])])], 2)
	  })), _vm._v(" "), _vm._m(5), _vm._v(" "), _c('m-table', {
	    staticStyle: {
	      "width": "100%"
	    }
	  }, [_c('m-table-head', [_c('m-table-row', [_c('m-table-h', [_vm._v("Prop")]), _vm._v(" "), _c('m-table-h', [_vm._v("Effect")]), _vm._v(" "), _c('m-table-h', [_vm._v("Remarks")])], 1)], 1), _vm._v(" "), _c('m-table-body', _vm._l((_vm.doc), function(prop) {
	    return _c('m-table-row', [_c('m-table-cell', [_vm._v(_vm._s(prop.name))]), _vm._v(" "), _c('m-table-cell', [_vm._v(_vm._s(prop.description))]), _vm._v(" "), _c('m-table-cell', [_vm._v(_vm._s(prop.remark))])], 1)
	  }))], 1)], 1)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('pre', [_vm._v("\n            "), _c('code', {
	    staticClass: "html"
	  }, [_vm._v("\n                <m-list class=\"demo-list-item\">\n                    <m-list-item>Bryan Cranston</m-list-item>\n                    <m-list-item>Aaron Paul</m-list-item>\n                    <m-list-item>Bob Odenkirk</m-list-item>\n                </m-list>\n            ")]), _vm._v("\n        ")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('pre', [_vm._v("\n            "), _c('code', {
	    staticClass: "html"
	  }, [_vm._v("\n                <m-list class=\"demo-list-item\">\n                    <m-list-item icon=\"person\">Bryan Cranston</m-list-item>\n                    <m-list-item icon=\"person\">Aaron Paul</m-list-item>\n                    <m-list-item icon=\"person\">Bob Odenkirk</m-list-item>\n                </m-list>\n            ")]), _vm._v("\n        ")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('pre', [_vm._v("\n            "), _c('code', {
	    staticClass: "html"
	  }, [_vm._v("\n                <m-list class=\"demo-list-item\">\n                    <m-list-item icon-avatar=\"person\">Bryan Cranston</m-list-item>\n                    <m-list-item icon-avatar=\"person\">Aaron Paul</m-list-item>\n                    <m-list-item icon-avatar=\"person\">Bob Odenkirk</m-list-item>\n                </m-list>\n            ")]), _vm._v("\n        ")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('pre', {
	    pre: true
	  }, [_vm._v("\n            "), _c('code', {
	    attrs: {
	      "class": "html"
	    }
	  }, [_vm._v("\n                <m-list class=\"demo-list-item\">\n                    <m-list-item icon-avatar=\"person\" v-for=\"person in people\">\n                        {{person.name}}\n\n                        <template slot=\"action\">\n                            <m-switch v-model=\"person.on\"></m-switch>\n                        </template>\n                    </m-list-item>\n                </m-list>\n            ")]), _vm._v("\n        ")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('pre', {
	    pre: true
	  }, [_vm._v("\n            "), _c('code', {
	    attrs: {
	      "class": "html"
	    }
	  }, [_vm._v("\n                <m-list class=\"demo-list-item\">\n                     <m-list-item icon-avatar=\"person\" v-for=\"person in people\" :sub-title=\"person.sub\">\n                        {{person.name}}\n\n                        <template slot=\"action\">\n                            <a class=\"mdl-list__item-secondary-action\" href=\"#\">\n                                <i class=\"material-icons\">star</i>\n                            </a>\n                        </template>\n                    </m-list-item>\n                </m-list>\n            ")]), _vm._v("\n        ")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('pre', {
	    pre: true
	  }, [_vm._v("\n            "), _c('code', {
	    attrs: {
	      "class": "html"
	    }
	  }, [_vm._v("\n                <m-list class=\"demo-list-three\">\n                    <m-list-item icon-avatar=\"person\" v-for=\"person in people\" :text=\"person.text\">\n                        {{person.name}}\n\n                        <template slot=\"action\">\n                            <a class=\"mdl-list__item-secondary-action\" href=\"#\">\n                                <i class=\"material-icons\">star</i>\n                            </a>\n                        </template>\n                    </m-list-item>\n                </m-list>\n            ")]), _vm._v("\n        ")])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-2c8aeae3", module.exports)
	  }
	}

/***/ })
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjQxZGUxZDU2MmJlMjI5ZGZmZTAiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1yb3V0ZXIvZGlzdC92dWUtcm91dGVyLmNvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi9+L3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1yZXNvdXJjZS9kaXN0L3Z1ZS1yZXNvdXJjZS5jb21tb24uanMiLCJ3ZWJwYWNrOi8vL2dvdCAoaWdub3JlZCkiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvdXNhZ2UudnVlIiwid2VicGFjazovLy91c2FnZS52dWUiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvdXNhZ2UudnVlP2VhNGMiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvbmF2LnZ1ZSIsIndlYnBhY2s6Ly8vbmF2LnZ1ZSIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9zcmMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9uYXYudnVlPzY0NTQiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvdGV4dGZpZWxkcy52dWUiLCJ3ZWJwYWNrOi8vL3RleHRmaWVsZHMudnVlIiwid2VicGFjazovLy8uL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL3RleHRmaWVsZHMudnVlPzMxNDciLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvYnV0dG9ucy52dWUiLCJ3ZWJwYWNrOi8vL2J1dHRvbnMudnVlIiwid2VicGFjazovLy8uL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL2J1dHRvbnMudnVlP2QxNzUiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvc25hY2tiYXIudnVlIiwid2VicGFjazovLy9zbmFja2Jhci52dWUiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvc25hY2tiYXIudnVlP2IzMWEiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvc2VsZWN0cy52dWUiLCJ3ZWJwYWNrOi8vL3NlbGVjdHMudnVlIiwid2VicGFjazovLy8uL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL3NlbGVjdHMudnVlPzFjOGIiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvc2xpZGVycy52dWUiLCJ3ZWJwYWNrOi8vL3NsaWRlcnMudnVlIiwid2VicGFjazovLy8uL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL3NsaWRlcnMudnVlPzFlNjciLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvYmFkZ2VzLnZ1ZSIsIndlYnBhY2s6Ly8vYmFkZ2VzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9iYWRnZXMudnVlP2U4YTciLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvbWVudS52dWUiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvbWVudS52dWU/ZGU5YSIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9tZW51LnZ1ZT80NTEzIiwid2VicGFjazovLy8uL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9tZW51LnZ1ZT9hNTVjIiwid2VicGFjazovLy8uL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL2xvYWRpbmcudnVlIiwid2VicGFjazovLy9sb2FkaW5nLnZ1ZSIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9sb2FkaW5nLnZ1ZT85ZThmIiwid2VicGFjazovLy8uL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL3RvZ2dsZXMudnVlIiwid2VicGFjazovLy90b2dnbGVzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy90b2dnbGVzLnZ1ZT80NDM5Iiwid2VicGFjazovLy8uL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL3RhYnMudnVlIiwid2VicGFjazovLy90YWJzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy90YWJzLnZ1ZT9mOTc5Iiwid2VicGFjazovLy8uL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL3Rvb2x0aXBzLnZ1ZSIsIndlYnBhY2s6Ly8vdG9vbHRpcHMudnVlIiwid2VicGFjazovLy8uL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL3Rvb2x0aXBzLnZ1ZT80Yzg5Iiwid2VicGFjazovLy8uL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL3RhYmxlLnZ1ZSIsIndlYnBhY2s6Ly8vdGFibGUudnVlIiwid2VicGFjazovLy8uL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL3RhYmxlLnZ1ZT8wNGM3Iiwid2VicGFjazovLy8uL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL2RpYWxvZ3MudnVlIiwid2VicGFjazovLy9kaWFsb2dzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9kaWFsb2dzLnZ1ZT84MDg3Iiwid2VicGFjazovLy8uL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL2NhcmRzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9jYXJkcy52dWU/MTE1NSIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9jYXJkcy52dWU/MzI2YiIsIndlYnBhY2s6Ly8vY2FyZHMudnVlIiwid2VicGFjazovLy8uL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL2NhcmRzLnZ1ZT8yODg4Iiwid2VicGFjazovLy8uL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL2NoaXBzLnZ1ZSIsIndlYnBhY2s6Ly8vY2hpcHMudnVlIiwid2VicGFjazovLy8uL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL2NoaXBzLnZ1ZT8xMDVmIiwid2VicGFjazovLy8uL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL2xpc3RzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9saXN0cy52dWU/NWZlNCIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9saXN0cy52dWU/NjI3ZCIsIndlYnBhY2s6Ly8vbGlzdHMudnVlIiwid2VicGFjazovLy8uL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL2xpc3RzLnZ1ZT9kNTdkIl0sIm5hbWVzIjpbIlZ1ZSIsInVzZSIsIlZ1ZVJldXNhYmxlTWF0ZXJpYWxDb21wb25lbnRzIiwicm91dGVzIiwicGF0aCIsImNvbXBvbmVudCIsIm5hbWUiLCJyZWRpcmVjdCIsInJvdXRlciIsImJhc2UiLCJsaW5rQWN0aXZlQ2xhc3MiLCJlbCIsImNvbXBvbmVudHMiLCJFeE5hdiIsIm1ldGhvZHMiLCJvblN1Ym1pdCIsImUiLCJjb25zb2xlIiwibG9nIiwiZm9ybSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJfX3Z1ZV9leHBvcnRzX18iLCJfX3Z1ZV9vcHRpb25zX18iLCJfX3Z1ZV9zdHlsZXNfXyIsInJlcXVpcmUiLCJfX3Z1ZV90ZW1wbGF0ZV9fIiwiZGVmYXVsdCIsIk9iamVjdCIsImtleXMiLCJzb21lIiwia2V5IiwiZXJyb3IiLCJvcHRpb25zIiwiX19maWxlIiwicmVuZGVyIiwic3RhdGljUmVuZGVyRm5zIiwiaG90QVBJIiwiaW5zdGFsbCIsImNvbXBhdGlibGUiLCJtb2R1bGUiLCJob3QiLCJhY2NlcHQiLCJkYXRhIiwiY3JlYXRlUmVjb3JkIiwicmVsb2FkIiwiZnVuY3Rpb25hbCIsImV4cG9ydHMiLCJzb3J0QnlLZXkiLCJhcnJheSIsInNvcnQiLCJhIiwi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QUNBO0FBQ0EsUUFBTztBQUNQLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBOztBQUVBLGtDQUFpQyxTQUFTO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0EsTUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUwscUJBQW9CLFFBQVE7QUFDNUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQXlEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLE9BQU0sRUFBRTtBQUNSLElBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUCxNQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1AsTUFBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUM7O0FBRUQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTBCLGlCQUFpQjs7QUFFM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxJQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQixtQkFBbUI7QUFDcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUN0NUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNkJBQTRCLFVBQVU7Ozs7Ozs7QUNuTHRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0EsVUFBUztBQUNULE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXVCLHFCQUFxQjtBQUM1QztBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSx3QkFBdUIscUJBQXFCO0FBQzVDO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUF5QjtBQUN6QjtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCO0FBQ0E7QUFDQSwwQkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDJCQUEwQix5QkFBeUIsUUFBUSxlQUFlO0FBQzFFOztBQUVBOztBQUVBOztBQUVBO0FBQ0Esb0JBQW1CLGdCQUFnQjtBQUNuQztBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7O0FBRUE7O0FB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O0FBQ0gsRUFBQyxhQUFhLGFBQWEsMEJBQTBCO0FBQ3JEO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRywrS0FBK0ssYUFBYTtBQUMvTCxFQUFDLGFBQWEsYUFBYSwwQkFBMEI7QUFDckQ7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHLDBNQUEwTSxhQUFhO0FBQzFOLEVBQUMsYUFBYSxhQUFhLDBCQUEwQjtBQUNyRDtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUcsc01BQXNNLGFBQWE7QUFDdE4sRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEUiLCJmaWxlIjoiYXBwLmJ1aWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZjQxZGUxZDU2MmJlMjI5ZGZmZTAiLCIvLyBpbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XG5pbXBvcnQgVnVlUm91dGVyIGZyb20gJ3Z1ZS1yb3V0ZXInO1xuaW1wb3J0IFZ1ZVJlc291cmNlIGZyb20gJ3Z1ZS1yZXNvdXJjZSc7XG5cblxuaW1wb3J0IFVzYWdlIGZyb20gJy4vY29tcG9uZW50cy91c2FnZS52dWUnO1xuaW1wb3J0IEV4TmF2IGZyb20gJy4vY29tcG9uZW50cy9uYXYudnVlJztcbmltcG9ydCBUZXh0RmllbGRzIGZyb20gJy4vY29tcG9uZW50cy90ZXh0ZmllbGRzLnZ1ZSc7XG5pbXBvcnQgQnV0dG9ucyBmcm9tICcuL2NvbXBvbmVudHMvYnV0dG9ucy52dWUnO1xuaW1wb3J0IFNuYWNrYmFyIGZyb20gJy4vY29tcG9uZW50cy9zbmFja2Jhci52dWUnO1xuaW1wb3J0IFNlbGVjdHMgZnJvbSAnLi9jb21wb25lbnRzL3NlbGVjdHMudnVlJztcbmltcG9ydCBTbGlkZXJzIGZyb20gJy4vY29tcG9uZW50cy9zbGlkZXJzLnZ1ZSc7XG5pbXBvcnQgQmFkZ2VzIGZyb20gJy4vY29tcG9uZW50cy9iYWRnZXMudnVlJztcbmltcG9ydCBNZW51IGZyb20gJy4vY29tcG9uZW50cy9tZW51LnZ1ZSc7XG5pbXBvcnQgTG9hZGluZyBmcm9tICcuL2NvbXBvbmVudHMvbG9hZGluZy52dWUnO1xuaW1wb3J0IFRvZ2dsZXMgZnJvbSAnLi9jb21wb25lbnRzL3RvZ2dsZXMudnVlJztcbmltcG9ydCBUYWJzIGZyb20gJy4vY29tcG9uZW50cy90YWJzLnZ1ZSc7XG5pbXBvcnQgVG9vbHRpcHMgZnJvbSAnLi9jb21wb25lbnRzL3Rvb2x0aXBzLnZ1ZSc7XG5pbXBvcnQgVGFibGUgZnJvbSAnLi9jb21wb25lbnRzL3RhYmxlLnZ1ZSc7XG5pbXBvcnQgRGlhbG9ncyBmcm9tICcuL2NvbXBvbmVudHMvZGlhbG9ncy52dWUnO1xuaW1wb3J0IENhcmRzIGZyb20gJy4vY29tcG9uZW50cy9jYXJkcy52dWUnO1xuaW1wb3J0IENoaXBzIGZyb20gJy4vY29tcG9uZW50cy9jaGlwcy52dWUnO1xuaW1wb3J0IExpc3RzIGZyb20gJy4vY29tcG9uZW50cy9saXN0cy52dWUnO1xuXG4vLyBjb25zdCBjb21wb25lbnRzID0ge1xuLy8gICBFeE5hdixcbi8vIH1cblxuVnVlLnVzZShWdWVSb3V0ZXIpO1xuVnVlLnVzZShWdWVSZXVzYWJsZU1hdGVyaWFsQ29tcG9uZW50cyk7XG5WdWUudXNlKFZ1ZVJlc291cmNlKTtcblxuXG5jb25zdCByb3V0ZXMgPSBbXG4gIHsgcGF0aDogJy90ZXh0ZmllbGRzJywgY29tcG9uZW50OiBUZXh0RmllbGRzLCBuYW1lOiAndGV4dGZpZWxkcyd9LFxuICB7IHBhdGg6ICcvYnV0dG9ucycsIGNvbXBvbmVudDogQnV0dG9ucyB9LFxuICB7IHBhdGg6ICcvc25hY2tiYXInLCBjb21wb25lbnQ6IFNuYWNrYmFyIH0sXG4gIHsgcGF0aDogJy9zZWxlY3RzJywgY29tcG9uZW50OiBTZWxlY3RzIH0sXG4gIHsgcGF0aDogJy9zbGlkZXJzJywgY29tcG9uZW50OiBTbGlkZXJzIH0sXG4gIHsgcGF0aDogJy9iYWRnZXMnLCBjb21wb25lbnQ6IEJhZGdlcyB9LFxuICB7IHBhdGg6ICcvbWVudScsIGNvbXBvbmVudDogTWVudSB9LFxuICB7IHBhdGg6ICcvbG9hZGluZycsIGNvbXBvbmVudDogTG9hZGluZyB9LFxuICB7IHBhdGg6ICcvdG9nZ2xlcycsIGNvbXBvbmVudDogVG9nZ2xlcyB9LFxuICB7IHBhdGg6ICcvdGFicycsIGNvbXBvbmVudDogVGFicyB9LFxuICB7IHBhdGg6ICcvdG9vbHRpcHMnLCBjb21wb25lbnQ6IFRvb2x0aXBzIH0sXG4gIHsgcGF0aDogJy90YWJsZScsIGNvbXBvbmVudDogVGFibGUgfSxcbiAgeyBwYXRoOiAnL2RpYWxvZ3MnLCBjb21wb25lbnQ6IERpYWxvZ3MgfSxcbiAgeyBwYXRoOiAnL2NhcmRzJywgY29tcG9uZW50OiBDYXJkcyB9LFxuICB7IHBhdGg6ICcvY2hpcHMnLCBjb21wb25lbnQ6IENoaXBzIH0sXG4gIHsgcGF0aDogJy9saXN0cycsIGNvbXBvbmVudDogTGlzdHMgfSxcbiAgeyBwYXRoOiAnL3VzYWdlJywgY29tcG9uZW50OiBVc2FnZSB9LFxuICB7IHBhdGg6ICcqJywgcmVkaXJlY3Q6IHsgbmFtZTogJ3RleHRmaWVsZHMnIH19LFxuXTtcblxuY29uc3Qgcm91dGVyID0gbmV3IFZ1ZVJvdXRlcih7XG4gIGJhc2U6ICcvZXhhbXBsZXMvJyxcbiAgbGlua0FjdGl2ZUNsYXNzOiAnbWRsLW5hdmlnYXRpb25fX2xpbmstLWFjdGl2ZScsXG4gIHJvdXRlc1xufSk7XG5cbm5ldyBWdWUoe1xuICBlbDogJyNleGFtcGxlcycsXG4gIHJvdXRlcixcbiAgY29tcG9uZW50czoge1xuICAgIEV4TmF2LFxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgb25TdWJtaXQ6IGZ1bmN0aW9uKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuZm9ybS5maXJzdE5hbWUpO1xuICAgICAgY29uc29sZS5sb2codGhpcy5mb3JtLmxhc3ROYW1lKTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuZm9ybS5lbWFpbCk7XG4gICAgfVxuICB9XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9leGFtcGxlcy9zcmMvYXBwLmpzIiwiLyoqXG4gICogdnVlLXJvdXRlciB2Mi41LjBcbiAgKiAoYykgMjAxNyBFdmFuIFlvdVxuICAqIEBsaWNlbnNlIE1JVFxuICAqL1xuJ3VzZSBzdHJpY3QnO1xuXG4vKiAgKi9cblxuZnVuY3Rpb24gYXNzZXJ0IChjb25kaXRpb24sIG1lc3NhZ2UpIHtcbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoKFwiW3Z1ZS1yb3V0ZXJdIFwiICsgbWVzc2FnZSkpXG4gIH1cbn1cblxuZnVuY3Rpb24gd2FybiAoY29uZGl0aW9uLCBtZXNzYWdlKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmICFjb25kaXRpb24pIHtcbiAgICB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgY29uc29sZS53YXJuKChcIlt2dWUtcm91dGVyXSBcIiArIG1lc3NhZ2UpKTtcbiAgfVxufVxuXG52YXIgVmlldyA9IHtcbiAgbmFtZTogJ3JvdXRlci12aWV3JyxcbiAgZnVuY3Rpb25hbDogdHJ1ZSxcbiAgcHJvcHM6IHtcbiAgICBuYW1lOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnZGVmYXVsdCdcbiAgICB9XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyIChoLCByZWYpIHtcbiAgICB2YXIgcHJvcHMgPSByZWYucHJvcHM7XG4gICAgdmFyIGNoaWxkcmVuID0gcmVmLmNoaWxkcmVuO1xuICAgIHZhciBwYXJlbnQgPSByZWYucGFyZW50O1xuICAgIHZhciBkYXRhID0gcmVmLmRhdGE7XG5cbiAgICBkYXRhLnJvdXRlclZpZXcgPSB0cnVlO1xuXG4gICAgdmFyIG5hbWUgPSBwcm9wcy5uYW1lO1xuICAgIHZhciByb3V0ZSA9IHBhcmVudC4kcm91dGU7XG4gICAgdmFyIGNhY2hlID0gcGFyZW50Ll9yb3V0ZXJWaWV3Q2FjaGUgfHwgKHBhcmVudC5fcm91dGVyVmlld0NhY2hlID0ge30pO1xuXG4gICAgLy8gZGV0ZXJtaW5lIGN1cnJlbnQgdmlldyBkZXB0aCwgYWxzbyBjaGVjayB0byBzZWUgaWYgdGhlIHRyZWVcbiAgICAvLyBoYXMgYmVlbiB0b2dnbGVkIGluYWN0aXZlIGJ1dCBrZXB0LWFsaXZlLlxuICAgIHZhciBkZXB0aCA9IDA7XG4gICAgdmFyIGluYWN0aXZlID0gZmFsc2U7XG4gICAgd2hpbGUgKHBhcmVudCkge1xuICAgICAgaWYgKHBhcmVudC4kdm5vZGUgJiYgcGFyZW50LiR2bm9kZS5kYXRhLnJvdXRlclZpZXcpIHtcbiAgICAgICAgZGVwdGgrKztcbiAgICAgIH1cbiAgICAgIGlmIChwYXJlbnQuX2luYWN0aXZlKSB7XG4gICAgICAgIGluYWN0aXZlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHBhcmVudCA9IHBhcmVudC4kcGFyZW50O1xuICAgIH1cbiAgICBkYXRhLnJvdXRlclZpZXdEZXB0aCA9IGRlcHRoO1xuXG4gICAgLy8gcmVuZGVyIHByZXZpb3VzIHZpZXcgaWYgdGhlIHRyZWUgaXMgaW5hY3RpdmUgYW5kIGtlcHQtYWxpdmVcbiAgICBpZiAoaW5hY3RpdmUpIHtcbiAgICAgIHJldHVybiBoKGNhY2hlW25hbWVdLCBkYXRhLCBjaGlsZHJlbilcbiAgICB9XG5cbiAgICB2YXIgbWF0Y2hlZCA9IHJvdXRlLm1hdGNoZWRbZGVwdGhdO1xuICAgIC8vIHJlbmRlciBlbXB0eSBub2RlIGlmIG5vIG1hdGNoZWQgcm91dGVcbiAgICBpZiAoIW1hdGNoZWQpIHtcbiAgICAgIGNhY2hlW25hbWVdID0gbnVsbDtcbiAgICAgIHJldHVybiBoKClcbiAgICB9XG5cbiAgICB2YXIgY29tcG9uZW50ID0gY2FjaGVbbmFtZV0gPSBtYXRjaGVkLmNvbXBvbmVudHNbbmFtZV07XG5cbiAgICAvLyBhdHRhY2ggaW5zdGFuY2UgcmVnaXN0cmF0aW9uIGhvb2tcbiAgICAvLyB0aGlzIHdpbGwgYmUgY2FsbGVkIGluIHRoZSBpbnN0YW5jZSdzIGluamVjdGVkIGxpZmVjeWNsZSBob29rc1xuICAgIGRhdGEucmVnaXN0ZXJSb3V0ZUluc3RhbmNlID0gZnVuY3Rpb24gKHZtLCB2YWwpIHtcbiAgICAgIC8vIHZhbCBjb3VsZCBiZSB1bmRlZmluZWQgZm9yIHVucmVnaXN0cmF0aW9uXG4gICAgICBpZiAobWF0Y2hlZC5pbnN0YW5jZXNbbmFtZV0gIT09IHZtKSB7XG4gICAgICAgIG1hdGNoZWQuaW5zdGFuY2VzW25hbWVdID0gdmFsO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGFsc28gcmVnaXNldGVyIGluc3RhbmNlIGluIHByZXBhdGNoIGhvb2tcbiAgICAvLyBpbiBjYXNlIHRoZSBzYW1lIGNvbXBvbmVudCBpbnN0YW5jZSBpcyByZXVzZWQgYWNyb3NzIGRpZmZlcmVudCByb3V0ZXNcbiAgICA7KGRhdGEuaG9vayB8fCAoZGF0YS5ob29rID0ge30pKS5wcmVwYXRjaCA9IGZ1bmN0aW9uIChfLCB2bm9kZSkge1xuICAgICAgbWF0Y2hlZC5pbnN0YW5jZXNbbmFtZV0gPSB2bm9kZS5jb21wb25lbnRJbnN0YW5jZTtcbiAgICB9O1xuXG4gICAgLy8gcmVzb2x2ZSBwcm9wc1xuICAgIGRhdGEucHJvcHMgPSByZXNvbHZlUHJvcHMocm91dGUsIG1hdGNoZWQucHJvcHMgJiYgbWF0Y2hlZC5wcm9wc1tuYW1lXSk7XG5cbiAgICByZXR1cm4gaChjb21wb25lbnQsIGRhdGEsIGNoaWxkcmVuKVxuICB9XG59O1xuXG5mdW5jdGlvbiByZXNvbHZlUHJvcHMgKHJvdXRlLCBjb25maWcpIHtcbiAgc3dpdGNoICh0eXBlb2YgY29uZmlnKSB7XG4gICAgY2FzZSAndW5kZWZpbmVkJzpcbiAgICAgIHJldHVyblxuICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICByZXR1cm4gY29uZmlnXG4gICAgY2FzZSAnZnVuY3Rpb24nOlxuICAgICAgcmV0dXJuIGNvbmZpZyhyb3V0ZSlcbiAgICBjYXNlICdib29sZWFuJzpcbiAgICAgIHJldHVybiBjb25maWcgPyByb3V0ZS5wYXJhbXMgOiB1bmRlZmluZWRcbiAgICBkZWZhdWx0OlxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICBcInByb3BzIGluIFxcXCJcIiArIChyb3V0ZS5wYXRoKSArIFwiXFxcIiBpcyBhIFwiICsgKHR5cGVvZiBjb25maWcpICsgXCIsIFwiICtcbiAgICAgICAgICBcImV4cGVjdGluZyBhbiBvYmplY3QsIGZ1bmN0aW9uIG9yIGJvb2xlYW4uXCJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgfVxufVxuXG4vKiAgKi9cblxudmFyIGVuY29kZVJlc2VydmVSRSA9IC9bIScoKSpdL2c7XG52YXIgZW5jb2RlUmVzZXJ2ZVJlcGxhY2VyID0gZnVuY3Rpb24gKGMpIHsgcmV0dXJuICclJyArIGMuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNik7IH07XG52YXIgY29tbWFSRSA9IC8lMkMvZztcblxuLy8gZml4ZWQgZW5jb2RlVVJJQ29tcG9uZW50IHdoaWNoIGlzIG1vcmUgY29uZm9ybWFudCB0byBSRkMzOTg2OlxuLy8gLSBlc2NhcGVzIFshJygpKl1cbi8vIC0gcHJlc2VydmUgY29tbWFzXG52YXIgZW5jb2RlID0gZnVuY3Rpb24gKHN0cikgeyByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cilcbiAgLnJlcGxhY2UoZW5jb2RlUmVzZXJ2ZVJFLCBlbmNvZGVSZXNlcnZlUmVwbGFjZXIpXG4gIC5yZXBsYWNlKGNvbW1hUkUsICcsJyk7IH07XG5cbnZhciBkZWNvZGUgPSBkZWNvZGVVUklDb21wb25lbnQ7XG5cbmZ1bmN0aW9uIHJlc29sdmVRdWVyeSAoXG4gIHF1ZXJ5LFxuICBleHRyYVF1ZXJ5LFxuICBfcGFyc2VRdWVyeVxuKSB7XG4gIGlmICggZXh0cmFRdWVyeSA9PT0gdm9pZCAwICkgZXh0cmFRdWVyeSA9IHt9O1xuXG4gIHZhciBwYXJzZSA9IF9wYXJzZVF1ZXJ5IHx8IHBhcnNlUXVlcnk7XG4gIHZhciBwYXJzZWRRdWVyeTtcbiAgdHJ5IHtcbiAgICBwYXJzZWRRdWVyeSA9IHBhcnNlKHF1ZXJ5IHx8ICcnKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihmYWxzZSwgZS5tZXNzYWdlKTtcbiAgICBwYXJzZWRRdWVyeSA9IHt9O1xuICB9XG4gIGZvciAodmFyIGtleSBpbiBleHRyYVF1ZXJ5KSB7XG4gICAgdmFyIHZhbCA9IGV4dHJhUXVlcnlba2V5XTtcbiAgICBwYXJzZWRRdWVyeVtrZXldID0gQXJyYXkuaXNBcnJheSh2YWwpID8gdmFsLnNsaWNlKCkgOiB2YWw7XG4gIH1cbiAgcmV0dXJuIHBhcnNlZFF1ZXJ5XG59XG5cbmZ1bmN0aW9uIHBhcnNlUXVlcnkgKHF1ZXJ5KSB7XG4gIHZhciByZXMgPSB7fTtcblxuICBxdWVyeSA9IHF1ZXJ5LnRyaW0oKS5yZXBsYWNlKC9eKFxcP3wjfCYpLywgJycpO1xuXG4gIGlmICghcXVlcnkpIHtcbiAgICByZXR1cm4gcmVzXG4gIH1cblxuICBxdWVyeS5zcGxpdCgnJicpLmZvckVhY2goZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgdmFyIHBhcnRzID0gcGFyYW0ucmVwbGFjZSgvXFwrL2csICcgJykuc3BsaXQoJz0nKTtcbiAgICB2YXIga2V5ID0gZGVjb2RlKHBhcnRzLnNoaWZ0KCkpO1xuICAgIHZhciB2YWwgPSBwYXJ0cy5sZW5ndGggPiAwXG4gICAgICA/IGRlY29kZShwYXJ0cy5qb2luKCc9JykpXG4gICAgICA6IG51bGw7XG5cbiAgICBpZiAocmVzW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVzW2tleV0gPSB2YWw7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHJlc1trZXldKSkge1xuICAgICAgcmVzW2tleV0ucHVzaCh2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXNba2V5XSA9IFtyZXNba2V5XSwgdmFsXTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiByZXNcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5UXVlcnkgKG9iaikge1xuICB2YXIgcmVzID0gb2JqID8gT2JqZWN0LmtleXMob2JqKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciB2YWwgPSBvYmpba2V5XTtcblxuICAgIGlmICh2YWwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuICcnXG4gICAgfVxuXG4gICAgaWYgKHZhbCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGVuY29kZShrZXkpXG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgdmFsLnNsaWNlKCkuZm9yRWFjaChmdW5jdGlvbiAodmFsMikge1xuICAgICAgICBpZiAodmFsMiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbDIgPT09IG51bGwpIHtcbiAgICAgICAgICByZXN1bHQucHVzaChlbmNvZGUoa2V5KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2goZW5jb2RlKGtleSkgKyAnPScgKyBlbmNvZGUodmFsMikpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiByZXN1bHQuam9pbignJicpXG4gICAgfVxuXG4gICAgcmV0dXJuIGVuY29kZShrZXkpICsgJz0nICsgZW5jb2RlKHZhbClcbiAgfSkuZmlsdGVyKGZ1bmN0aW9uICh4KSB7IHJldHVybiB4Lmxlbmd0aCA+IDA7IH0pLmpvaW4oJyYnKSA6IG51bGw7XG4gIHJldHVybiByZXMgPyAoXCI/XCIgKyByZXMpIDogJydcbn1cblxuLyogICovXG5cblxudmFyIHRyYWlsaW5nU2xhc2hSRSA9IC9cXC8/JC87XG5cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlIChcbiAgcmVjb3JkLFxuICBsb2NhdGlvbixcbiAgcmVkaXJlY3RlZEZyb20sXG4gIHJvdXRlclxuKSB7XG4gIHZhciBzdHJpbmdpZnlRdWVyeSQkMSA9IHJvdXRlciAmJiByb3V0ZXIub3B0aW9ucy5zdHJpbmdpZnlRdWVyeTtcbiAgdmFyIHJvdXRlID0ge1xuICAgIG5hbWU6IGxvY2F0aW9uLm5hbWUgfHwgKHJlY29yZCAmJiByZWNvcmQubmFtZSksXG4gICAgbWV0YTogKHJlY29yZCAmJiByZWNvcmQubWV0YSkgfHwge30sXG4gICAgcGF0aDogbG9jYXRpb24ucGF0aCB8fCAnLycsXG4gICAgaGFzaDogbG9jYXRpb24uaGFzaCB8fCAnJyxcbiAgICBxdWVyeTogbG9jYXRpb24ucXVlcnkgfHwge30sXG4gICAgcGFyYW1zOiBsb2NhdGlvbi5wYXJhbXMgfHwge30sXG4gICAgZnVsbFBhdGg6IGdldEZ1bGxQYXRoKGxvY2F0aW9uLCBzdHJpbmdpZnlRdWVyeSQkMSksXG4gICAgbWF0Y2hlZDogcmVjb3JkID8gZm9ybWF0TWF0Y2gocmVjb3JkKSA6IFtdXG4gIH07XG4gIGlmIChyZWRpcmVjdGVkRnJvbSkge1xuICAgIHJvdXRlLnJlZGlyZWN0ZWRGcm9tID0gZ2V0RnVsbFBhdGgocmVkaXJlY3RlZEZyb20sIHN0cmluZ2lmeVF1ZXJ5JCQxKTtcbiAgfVxuICByZXR1cm4gT2JqZWN0LmZyZWV6ZShyb3V0ZSlcbn1cblxuLy8gdGhlIHN0YXJ0aW5nIHJvdXRlIHRoYXQgcmVwcmVzZW50cyB0aGUgaW5pdGlhbCBzdGF0ZVxudmFyIFNUQVJUID0gY3JlYXRlUm91dGUobnVsbCwge1xuICBwYXRoOiAnLydcbn0pO1xuXG5mdW5jdGlvbiBmb3JtYXRNYXRjaCAocmVjb3JkKSB7XG4gIHZhciByZXMgPSBbXTtcbiAgd2hpbGUgKHJlY29yZCkge1xuICAgIHJlcy51bnNoaWZ0KHJlY29yZCk7XG4gICAgcmVjb3JkID0gcmVjb3JkLnBhcmVudDtcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIGdldEZ1bGxQYXRoIChcbiAgcmVmLFxuICBfc3RyaW5naWZ5UXVlcnlcbikge1xuICB2YXIgcGF0aCA9IHJlZi5wYXRoO1xuICB2YXIgcXVlcnkgPSByZWYucXVlcnk7IGlmICggcXVlcnkgPT09IHZvaWQgMCApIHF1ZXJ5ID0ge307XG4gIHZhciBoYXNoID0gcmVmLmhhc2g7IGlmICggaGFzaCA9PT0gdm9pZCAwICkgaGFzaCA9ICcnO1xuXG4gIHZhciBzdHJpbmdpZnkgPSBfc3RyaW5naWZ5UXVlcnkgfHwgc3RyaW5naWZ5UXVlcnk7XG4gIHJldHVybiAocGF0aCB8fCAnLycpICsgc3RyaW5naWZ5KHF1ZXJ5KSArIGhhc2hcbn1cblxuZnVuY3Rpb24gaXNTYW1lUm91dGUgKGEsIGIpIHtcbiAgaWYgKGIgPT09IFNUQVJUKSB7XG4gICAgcmV0dXJuIGEgPT09IGJcbiAgfSBlbHNlIGlmICghYikge1xuICAgIHJldHVybiBmYWxzZVxuICB9IGVsc2UgaWYgKGEucGF0aCAmJiBiLnBhdGgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgYS5wYXRoLnJlcGxhY2UodHJhaWxpbmdTbGFzaFJFLCAnJykgPT09IGIucGF0aC5yZXBsYWNlKHRyYWlsaW5nU2xhc2hSRSwgJycpICYmXG4gICAgICBhLmhhc2ggPT09IGIuaGFzaCAmJlxuICAgICAgaXNPYmplY3RFcXVhbChhLnF1ZXJ5LCBiLnF1ZXJ5KVxuICAgIClcbiAgfSBlbHNlIGlmIChhLm5hbWUgJiYgYi5uYW1lKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGEubmFtZSA9PT0gYi5uYW1lICYmXG4gICAgICBhLmhhc2ggPT09IGIuaGFzaCAmJlxuICAgICAgaXNPYmplY3RFcXVhbChhLnF1ZXJ5LCBiLnF1ZXJ5KSAmJlxuICAgICAgaXNPYmplY3RFcXVhbChhLnBhcmFtcywgYi5wYXJhbXMpXG4gICAgKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0RXF1YWwgKGEsIGIpIHtcbiAgaWYgKCBhID09PSB2b2lkIDAgKSBhID0ge307XG4gIGlmICggYiA9PT0gdm9pZCAwICkgYiA9IHt9O1xuXG4gIHZhciBhS2V5cyA9IE9iamVjdC5rZXlzKGEpO1xuICB2YXIgYktleXMgPSBPYmplY3Qua2V5cyhiKTtcbiAgaWYgKGFLZXlzLmxlbmd0aCAhPT0gYktleXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgcmV0dXJuIGFLZXlzLmV2ZXJ5KGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIFN0cmluZyhhW2tleV0pID09PSBTdHJpbmcoYltrZXldKTsgfSlcbn1cblxuZnVuY3Rpb24gaXNJbmNsdWRlZFJvdXRlIChjdXJyZW50LCB0YXJnZXQpIHtcbiAgcmV0dXJuIChcbiAgICBjdXJyZW50LnBhdGgucmVwbGFjZSh0cmFpbGluZ1NsYXNoUkUsICcvJykuaW5kZXhPZihcbiAgICAgIHRhcmdldC5wYXRoLnJlcGxhY2UodHJhaWxpbmdTbGFzaFJFLCAnLycpXG4gICAgKSA9PT0gMCAmJlxuICAgICghdGFyZ2V0Lmhhc2ggfHwgY3VycmVudC5oYXNoID09PSB0YXJnZXQuaGFzaCkgJiZcbiAgICBxdWVyeUluY2x1ZGVzKGN1cnJlbnQucXVlcnksIHRhcmdldC5xdWVyeSlcbiAgKVxufVxuXG5mdW5jdGlvbiBxdWVyeUluY2x1ZGVzIChjdXJyZW50LCB0YXJnZXQpIHtcbiAgZm9yICh2YXIga2V5IGluIHRhcmdldCkge1xuICAgIGlmICghKGtleSBpbiBjdXJyZW50KSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlXG59XG5cbi8qICAqL1xuXG4vLyB3b3JrIGFyb3VuZCB3ZWlyZCBmbG93IGJ1Z1xudmFyIHRvVHlwZXMgPSBbU3RyaW5nLCBPYmplY3RdO1xudmFyIGV2ZW50VHlwZXMgPSBbU3RyaW5nLCBBcnJheV07XG5cbnZhciBMaW5rID0ge1xuICBuYW1lOiAncm91dGVyLWxpbmsnLFxuICBwcm9wczoge1xuICAgIHRvOiB7XG4gICAgICB0eXBlOiB0b1R5cGVzLFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIHRhZzoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2EnXG4gICAgfSxcbiAgICBleGFjdDogQm9vbGVhbixcbiAgICBhcHBlbmQ6IEJvb2xlYW4sXG4gICAgcmVwbGFjZTogQm9vbGVhbixcbiAgICBhY3RpdmVDbGFzczogU3RyaW5nLFxuICAgIGV4YWN0QWN0aXZlQ2xhc3M6IFN0cmluZyxcbiAgICBldmVudDoge1xuICAgICAgdHlwZTogZXZlbnRUeXBlcyxcbiAgICAgIGRlZmF1bHQ6ICdjbGljaydcbiAgICB9XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyIChoKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICB2YXIgcm91dGVyID0gdGhpcy4kcm91dGVyO1xuICAgIHZhciBjdXJyZW50ID0gdGhpcy4kcm91dGU7XG4gICAgdmFyIHJlZiA9IHJvdXRlci5yZXNvbHZlKHRoaXMudG8sIGN1cnJlbnQsIHRoaXMuYXBwZW5kKTtcbiAgICB2YXIgbG9jYXRpb24gPSByZWYubG9jYXRpb247XG4gICAgdmFyIHJvdXRlID0gcmVmLnJvdXRlO1xuICAgIHZhciBocmVmID0gcmVmLmhyZWY7XG5cbiAgICB2YXIgY2xhc3NlcyA9IHt9O1xuICAgIHZhciBnbG9iYWxBY3RpdmVDbGFzcyA9IHJvdXRlci5vcHRpb25zLmxpbmtBY3RpdmVDbGFzcztcbiAgICB2YXIgZ2xvYmFsRXhhY3RBY3RpdmVDbGFzcyA9IHJvdXRlci5vcHRpb25zLmxpbmtFeGFjdEFjdGl2ZUNsYXNzO1xuICAgIC8vIFN1cHBvcnQgZ2xvYmFsIGVtcHR5IGFjdGl2ZSBjbGFzc1xuICAgIHZhciBhY3RpdmVDbGFzc0ZhbGxiYWNrID0gZ2xvYmFsQWN0aXZlQ2xhc3MgPT0gbnVsbFxuICAgICAgICAgICAgPyAncm91dGVyLWxpbmstYWN0aXZlJ1xuICAgICAgICAgICAgOiBnbG9iYWxBY3RpdmVDbGFzcztcbiAgICB2YXIgZXhhY3RBY3RpdmVDbGFzc0ZhbGxiYWNrID0gZ2xvYmFsRXhhY3RBY3RpdmVDbGFzcyA9PSBudWxsXG4gICAgICAgICAgICA/ICdyb3V0ZXItbGluay1leGFjdC1hY3RpdmUnXG4gICAgICAgICAgICA6IGdsb2JhbEV4YWN0QWN0aXZlQ2xhc3M7XG4gICAgdmFyIGFjdGl2ZUNsYXNzID0gdGhpcy5hY3RpdmVDbGFzcyA9PSBudWxsXG4gICAgICAgICAgICA/IGFjdGl2ZUNsYXNzRmFsbGJhY2tcbiAgICAgICAgICAgIDogdGhpcy5hY3RpdmVDbGFzcztcbiAgICB2YXIgZXhhY3RBY3RpdmVDbGFzcyA9IHRoaXMuZXhhY3RBY3RpdmVDbGFzcyA9PSBudWxsXG4gICAgICAgICAgICA/IGV4YWN0QWN0aXZlQ2xhc3NGYWxsYmFja1xuICAgICAgICAgICAgOiB0aGlzLmV4YWN0QWN0aXZlQ2xhc3M7XG4gICAgdmFyIGNvbXBhcmVUYXJnZXQgPSBsb2NhdGlvbi5wYXRoXG4gICAgICA/IGNyZWF0ZVJvdXRlKG51bGwsIGxvY2F0aW9uLCBudWxsLCByb3V0ZXIpXG4gICAgICA6IHJvdXRlO1xuXG4gICAgY2xhc3Nlc1tleGFjdEFjdGl2ZUNsYXNzXSA9IGlzU2FtZVJvdXRlKGN1cnJlbnQsIGNvbXBhcmVUYXJnZXQpO1xuICAgIGNsYXNzZXNbYWN0aXZlQ2xhc3NdID0gdGhpcy5leGFjdFxuICAgICAgPyBjbGFzc2VzW2V4YWN0QWN0aXZlQ2xhc3NdXG4gICAgICA6IGlzSW5jbHVkZWRSb3V0ZShjdXJyZW50LCBjb21wYXJlVGFyZ2V0KTtcblxuICAgIHZhciBoYW5kbGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChndWFyZEV2ZW50KGUpKSB7XG4gICAgICAgIGlmICh0aGlzJDEucmVwbGFjZSkge1xuICAgICAgICAgIHJvdXRlci5yZXBsYWNlKGxvY2F0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByb3V0ZXIucHVzaChsb2NhdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIG9uID0geyBjbGljazogZ3VhcmRFdmVudCB9O1xuICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMuZXZlbnQpKSB7XG4gICAgICB0aGlzLmV2ZW50LmZvckVhY2goZnVuY3Rpb24gKGUpIHsgb25bZV0gPSBoYW5kbGVyOyB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgb25bdGhpcy5ldmVudF0gPSBoYW5kbGVyO1xuICAgIH1cblxuICAgIHZhciBkYXRhID0ge1xuICAgICAgY2xhc3M6IGNsYXNzZXNcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMudGFnID09PSAnYScpIHtcbiAgICAgIGRhdGEub24gPSBvbjtcbiAgICAgIGRhdGEuYXR0cnMgPSB7IGhyZWY6IGhyZWYgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZmluZCB0aGUgZmlyc3QgPGE+IGNoaWxkIGFuZCBhcHBseSBsaXN0ZW5lciBhbmQgaHJlZlxuICAgICAgdmFyIGEgPSBmaW5kQW5jaG9yKHRoaXMuJHNsb3RzLmRlZmF1bHQpO1xuICAgICAgaWYgKGEpIHtcbiAgICAgICAgLy8gaW4gY2FzZSB0aGUgPGE+IGlzIGEgc3RhdGljIG5vZGVcbiAgICAgICAgYS5pc1N0YXRpYyA9IGZhbHNlO1xuICAgICAgICB2YXIgZXh0ZW5kID0gX1Z1ZS51dGlsLmV4dGVuZDtcbiAgICAgICAgdmFyIGFEYXRhID0gYS5kYXRhID0gZXh0ZW5kKHt9LCBhLmRhdGEpO1xuICAgICAgICBhRGF0YS5vbiA9IG9uO1xuICAgICAgICB2YXIgYUF0dHJzID0gYS5kYXRhLmF0dHJzID0gZXh0ZW5kKHt9LCBhLmRhdGEuYXR0cnMpO1xuICAgICAgICBhQXR0cnMuaHJlZiA9IGhyZWY7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBkb2Vzbid0IGhhdmUgPGE+IGNoaWxkLCBhcHBseSBsaXN0ZW5lciB0byBzZWxmXG4gICAgICAgIGRhdGEub24gPSBvbjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaCh0aGlzLnRhZywgZGF0YSwgdGhpcy4kc2xvdHMuZGVmYXVsdClcbiAgfVxufTtcblxuZnVuY3Rpb24gZ3VhcmRFdmVudCAoZSkge1xuICAvLyBkb24ndCByZWRpcmVjdCB3aXRoIGNvbnRyb2wga2V5c1xuICBpZiAoZS5tZXRhS2V5IHx8IGUuY3RybEtleSB8fCBlLnNoaWZ0S2V5KSB7IHJldHVybiB9XG4gIC8vIGRvbid0IHJlZGlyZWN0IHdoZW4gcHJldmVudERlZmF1bHQgY2FsbGVkXG4gIGlmIChlLmRlZmF1bHRQcmV2ZW50ZWQpIHsgcmV0dXJuIH1cbiAgLy8gZG9uJ3QgcmVkaXJlY3Qgb24gcmlnaHQgY2xpY2tcbiAgaWYgKGUuYnV0dG9uICE9PSB1bmRlZmluZWQgJiYgZS5idXR0b24gIT09IDApIHsgcmV0dXJuIH1cbiAgLy8gZG9uJ3QgcmVkaXJlY3QgaWYgYHRhcmdldD1cIl9ibGFua1wiYFxuICBpZiAoZS5jdXJyZW50VGFyZ2V0ICYmIGUuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUpIHtcbiAgICB2YXIgdGFyZ2V0ID0gZS5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgndGFyZ2V0Jyk7XG4gICAgaWYgKC9cXGJfYmxhbmtcXGIvaS50ZXN0KHRhcmdldCkpIHsgcmV0dXJuIH1cbiAgfVxuICAvLyB0aGlzIG1heSBiZSBhIFdlZXggZXZlbnQgd2hpY2ggZG9lc24ndCBoYXZlIHRoaXMgbWV0aG9kXG4gIGlmIChlLnByZXZlbnREZWZhdWx0KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG4gIHJldHVybiB0cnVlXG59XG5cbmZ1bmN0aW9uIGZpbmRBbmNob3IgKGNoaWxkcmVuKSB7XG4gIGlmIChjaGlsZHJlbikge1xuICAgIHZhciBjaGlsZDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgaWYgKGNoaWxkLnRhZyA9PT0gJ2EnKSB7XG4gICAgICAgIHJldHVybiBjaGlsZFxuICAgICAgfVxuICAgICAgaWYgKGNoaWxkLmNoaWxkcmVuICYmIChjaGlsZCA9IGZpbmRBbmNob3IoY2hpbGQuY2hpbGRyZW4pKSkge1xuICAgICAgICByZXR1cm4gY2hpbGRcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxudmFyIF9WdWU7XG5cbmZ1bmN0aW9uIGluc3RhbGwgKFZ1ZSkge1xuICBpZiAoaW5zdGFsbC5pbnN0YWxsZWQpIHsgcmV0dXJuIH1cbiAgaW5zdGFsbC5pbnN0YWxsZWQgPSB0cnVlO1xuXG4gIF9WdWUgPSBWdWU7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZ1ZS5wcm90b3R5cGUsICckcm91dGVyJywge1xuICAgIGdldDogZnVuY3Rpb24gZ2V0ICgpIHsgcmV0dXJuIHRoaXMuJHJvb3QuX3JvdXRlciB9XG4gIH0pO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWdWUucHJvdG90eXBlLCAnJHJvdXRlJywge1xuICAgIGdldDogZnVuY3Rpb24gZ2V0ICgpIHsgcmV0dXJuIHRoaXMuJHJvb3QuX3JvdXRlIH1cbiAgfSk7XG5cbiAgdmFyIGlzRGVmID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHYgIT09IHVuZGVmaW5lZDsgfTtcblxuICB2YXIgcmVnaXN0ZXJJbnN0YW5jZSA9IGZ1bmN0aW9uICh2bSwgY2FsbFZhbCkge1xuICAgIHZhciBpID0gdm0uJG9wdGlvbnMuX3BhcmVudFZub2RlO1xuICAgIGlmIChpc0RlZihpKSAmJiBpc0RlZihpID0gaS5kYXRhKSAmJiBpc0RlZihpID0gaS5yZWdpc3RlclJvdXRlSW5zdGFuY2UpKSB7XG4gICAgICBpKHZtLCBjYWxsVmFsKTtcbiAgICB9XG4gIH07XG5cbiAgVnVlLm1peGluKHtcbiAgICBiZWZvcmVDcmVhdGU6IGZ1bmN0aW9uIGJlZm9yZUNyZWF0ZSAoKSB7XG4gICAgICBpZiAoaXNEZWYodGhpcy4kb3B0aW9ucy5yb3V0ZXIpKSB7XG4gICAgICAgIHRoaXMuX3JvdXRlciA9IHRoaXMuJG9wdGlvbnMucm91dGVyO1xuICAgICAgICB0aGlzLl9yb3V0ZXIuaW5pdCh0aGlzKTtcbiAgICAgICAgVnVlLnV0aWwuZGVmaW5lUmVhY3RpdmUodGhpcywgJ19yb3V0ZScsIHRoaXMuX3JvdXRlci5oaXN0b3J5LmN1cnJlbnQpO1xuICAgICAgfVxuICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCB0aGlzKTtcbiAgICB9LFxuICAgIGRlc3Ryb3llZDogZnVuY3Rpb24gZGVzdHJveWVkICgpIHtcbiAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcyk7XG4gICAgfVxuICB9KTtcblxuICBWdWUuY29tcG9uZW50KCdyb3V0ZXItdmlldycsIFZpZXcpO1xuICBWdWUuY29tcG9uZW50KCdyb3V0ZXItbGluaycsIExpbmspO1xuXG4gIHZhciBzdHJhdHMgPSBWdWUuY29uZmlnLm9wdGlvbk1lcmdlU3RyYXRlZ2llcztcbiAgLy8gdXNlIHRoZSBzYW1lIGhvb2sgbWVyZ2luZyBzdHJhdGVneSBmb3Igcm91dGUgaG9va3NcbiAgc3RyYXRzLmJlZm9yZVJvdXRlRW50ZXIgPSBzdHJhdHMuYmVmb3JlUm91dGVMZWF2ZSA9IHN0cmF0cy5jcmVhdGVkO1xufVxuXG4vKiAgKi9cblxudmFyIGluQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xuXG4vKiAgKi9cblxuZnVuY3Rpb24gcmVzb2x2ZVBhdGggKFxuICByZWxhdGl2ZSxcbiAgYmFzZSxcbiAgYXBwZW5kXG4pIHtcbiAgdmFyIGZpcnN0Q2hhciA9IHJlbGF0aXZlLmNoYXJBdCgwKTtcbiAgaWYgKGZpcnN0Q2hhciA9PT0gJy8nKSB7XG4gICAgcmV0dXJuIHJlbGF0aXZlXG4gIH1cblxuICBpZiAoZmlyc3RDaGFyID09PSAnPycgfHwgZmlyc3RDaGFyID09PSAnIycpIHtcbiAgICByZXR1cm4gYmFzZSArIHJlbGF0aXZlXG4gIH1cblxuICB2YXIgc3RhY2sgPSBiYXNlLnNwbGl0KCcvJyk7XG5cbiAgLy8gcmVtb3ZlIHRyYWlsaW5nIHNlZ21lbnQgaWY6XG4gIC8vIC0gbm90IGFwcGVuZGluZ1xuICAvLyAtIGFwcGVuZGluZyB0byB0cmFpbGluZyBzbGFzaCAobGFzdCBzZWdtZW50IGlzIGVtcHR5KVxuICBpZiAoIWFwcGVuZCB8fCAhc3RhY2tbc3RhY2subGVuZ3RoIC0gMV0pIHtcbiAgICBzdGFjay5wb3AoKTtcbiAgfVxuXG4gIC8vIHJlc29sdmUgcmVsYXRpdmUgcGF0aFxuICB2YXIgc2VnbWVudHMgPSByZWxhdGl2ZS5yZXBsYWNlKC9eXFwvLywgJycpLnNwbGl0KCcvJyk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc2VnbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc2VnbWVudCA9IHNlZ21lbnRzW2ldO1xuICAgIGlmIChzZWdtZW50ID09PSAnLi4nKSB7XG4gICAgICBzdGFjay5wb3AoKTtcbiAgICB9IGVsc2UgaWYgKHNlZ21lbnQgIT09ICcuJykge1xuICAgICAgc3RhY2sucHVzaChzZWdtZW50KTtcbiAgICB9XG4gIH1cblxuICAvLyBlbnN1cmUgbGVhZGluZyBzbGFzaFxuICBpZiAoc3RhY2tbMF0gIT09ICcnKSB7XG4gICAgc3RhY2sudW5zaGlmdCgnJyk7XG4gIH1cblxuICByZXR1cm4gc3RhY2suam9pbignLycpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGF0aCAocGF0aCkge1xuICB2YXIgaGFzaCA9ICcnO1xuICB2YXIgcXVlcnkgPSAnJztcblxuICB2YXIgaGFzaEluZGV4ID0gcGF0aC5pbmRleE9mKCcjJyk7XG4gIGlmIChoYXNoSW5kZXggPj0gMCkge1xuICAgIGhhc2ggPSBwYXRoLnNsaWNlKGhhc2hJbmRleCk7XG4gICAgcGF0aCA9IHBhdGguc2xpY2UoMCwgaGFzaEluZGV4KTtcbiAgfVxuXG4gIHZhciBxdWVyeUluZGV4ID0gcGF0aC5pbmRleE9mKCc/Jyk7XG4gIGlmIChxdWVyeUluZGV4ID49IDApIHtcbiAgICBxdWVyeSA9IHBhdGguc2xpY2UocXVlcnlJbmRleCArIDEpO1xuICAgIHBhdGggPSBwYXRoLnNsaWNlKDAsIHF1ZXJ5SW5kZXgpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRoOiBwYXRoLFxuICAgIHF1ZXJ5OiBxdWVyeSxcbiAgICBoYXNoOiBoYXNoXG4gIH1cbn1cblxuZnVuY3Rpb24gY2xlYW5QYXRoIChwYXRoKSB7XG4gIHJldHVybiBwYXRoLnJlcGxhY2UoL1xcL1xcLy9nLCAnLycpXG59XG5cbnZhciBpbmRleCQxID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoYXJyKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJyKSA9PSAnW29iamVjdCBBcnJheV0nO1xufTtcblxudmFyIGlzYXJyYXkgPSBpbmRleCQxO1xuXG4vKipcbiAqIEV4cG9zZSBgcGF0aFRvUmVnZXhwYC5cbiAqL1xudmFyIGluZGV4ID0gcGF0aFRvUmVnZXhwO1xudmFyIHBhcnNlXzEgPSBwYXJzZTtcbnZhciBjb21waWxlXzEgPSBjb21waWxlO1xudmFyIHRva2Vuc1RvRnVuY3Rpb25fMSA9IHRva2Vuc1RvRnVuY3Rpb247XG52YXIgdG9rZW5zVG9SZWdFeHBfMSA9IHRva2Vuc1RvUmVnRXhwO1xuXG4vKipcbiAqIFRoZSBtYWluIHBhdGggbWF0Y2hpbmcgcmVnZXhwIHV0aWxpdHkuXG4gKlxuICogQHR5cGUge1JlZ0V4cH1cbiAqL1xudmFyIFBBVEhfUkVHRVhQID0gbmV3IFJlZ0V4cChbXG4gIC8vIE1hdGNoIGVzY2FwZWQgY2hhcmFjdGVycyB0aGF0IHdvdWxkIG90aGVyd2lzZSBhcHBlYXIgaW4gZnV0dXJlIG1hdGNoZXMuXG4gIC8vIFRoaXMgYWxsb3dzIHRoZSB1c2VyIHRvIGVzY2FwZSBzcGVjaWFsIGNoYXJhY3RlcnMgdGhhdCB3b24ndCB0cmFuc2Zvcm0uXG4gICcoXFxcXFxcXFwuKScsXG4gIC8vIE1hdGNoIEV4cHJlc3Mtc3R5bGUgcGFyYW1ldGVycyBhbmQgdW4tbmFtZWQgcGFyYW1ldGVycyB3aXRoIGEgcHJlZml4XG4gIC8vIGFuZCBvcHRpb25hbCBzdWZmaXhlcy4gTWF0Y2hlcyBhcHBlYXIgYXM6XG4gIC8vXG4gIC8vIFwiLzp0ZXN0KFxcXFxkKyk/XCIgPT4gW1wiL1wiLCBcInRlc3RcIiwgXCJcXGQrXCIsIHVuZGVmaW5lZCwgXCI/XCIsIHVuZGVmaW5lZF1cbiAgLy8gXCIvcm91dGUoXFxcXGQrKVwiICA9PiBbdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgXCJcXGQrXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkXVxuICAvLyBcIi8qXCIgICAgICAgICAgICA9PiBbXCIvXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgXCIqXCJdXG4gICcoW1xcXFwvLl0pPyg/Oig/OlxcXFw6KFxcXFx3KykoPzpcXFxcKCgoPzpcXFxcXFxcXC58W15cXFxcXFxcXCgpXSkrKVxcXFwpKT98XFxcXCgoKD86XFxcXFxcXFwufFteXFxcXFxcXFwoKV0pKylcXFxcKSkoWysqP10pP3woXFxcXCopKSdcbl0uam9pbignfCcpLCAnZycpO1xuXG4vKipcbiAqIFBhcnNlIGEgc3RyaW5nIGZvciB0aGUgcmF3IHRva2Vucy5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICBzdHJcbiAqIEBwYXJhbSAge09iamVjdD19IG9wdGlvbnNcbiAqIEByZXR1cm4geyFBcnJheX1cbiAqL1xuZnVuY3Rpb24gcGFyc2UgKHN0ciwgb3B0aW9ucykge1xuICB2YXIgdG9rZW5zID0gW107XG4gIHZhciBrZXkgPSAwO1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIgcGF0aCA9ICcnO1xuICB2YXIgZGVmYXVsdERlbGltaXRlciA9IG9wdGlvbnMgJiYgb3B0aW9ucy5kZWxpbWl0ZXIgfHwgJy8nO1xuICB2YXIgcmVzO1xuXG4gIHdoaWxlICgocmVzID0gUEFUSF9SRUdFWFAuZXhlYyhzdHIpKSAhPSBudWxsKSB7XG4gICAgdmFyIG0gPSByZXNbMF07XG4gICAgdmFyIGVzY2FwZWQgPSByZXNbMV07XG4gICAgdmFyIG9mZnNldCA9IHJlcy5pbmRleDtcbiAgICBwYXRoICs9IHN0ci5zbGljZShpbmRleCwgb2Zmc2V0KTtcbiAgICBpbmRleCA9IG9mZnNldCArIG0ubGVuZ3RoO1xuXG4gICAgLy8gSWdub3JlIGFscmVhZHkgZXNjYXBlZCBzZXF1ZW5jZXMuXG4gICAgaWYgKGVzY2FwZWQpIHtcbiAgICAgIHBhdGggKz0gZXNjYXBlZFsxXTtcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgdmFyIG5leHQgPSBzdHJbaW5kZXhdO1xuICAgIHZhciBwcmVmaXggPSByZXNbMl07XG4gICAgdmFyIG5hbWUgPSByZXNbM107XG4gICAgdmFyIGNhcHR1cmUgPSByZXNbNF07XG4gICAgdmFyIGdyb3VwID0gcmVzWzVdO1xuICAgIHZhciBtb2RpZmllciA9IHJlc1s2XTtcbiAgICB2YXIgYXN0ZXJpc2sgPSByZXNbN107XG5cbiAgICAvLyBQdXNoIHRoZSBjdXJyZW50IHBhdGggb250byB0aGUgdG9rZW5zLlxuICAgIGlmIChwYXRoKSB7XG4gICAgICB0b2tlbnMucHVzaChwYXRoKTtcbiAgICAgIHBhdGggPSAnJztcbiAgICB9XG5cbiAgICB2YXIgcGFydGlhbCA9IHByZWZpeCAhPSBudWxsICYmIG5leHQgIT0gbnVsbCAmJiBuZXh0ICE9PSBwcmVmaXg7XG4gICAgdmFyIHJlcGVhdCA9IG1vZGlmaWVyID09PSAnKycgfHwgbW9kaWZpZXIgPT09ICcqJztcbiAgICB2YXIgb3B0aW9uYWwgPSBtb2RpZmllciA9PT0gJz8nIHx8IG1vZGlmaWVyID09PSAnKic7XG4gICAgdmFyIGRlbGltaXRlciA9IHJlc1syXSB8fCBkZWZhdWx0RGVsaW1pdGVyO1xuICAgIHZhciBwYXR0ZXJuID0gY2FwdHVyZSB8fCBncm91cDtcblxuICAgIHRva2Vucy5wdXNoKHtcbiAgICAgIG5hbWU6IG5hbWUgfHwga2V5KyssXG4gICAgICBwcmVmaXg6IHByZWZpeCB8fCAnJyxcbiAgICAgIGRlbGltaXRlcjogZGVsaW1pdGVyLFxuICAgICAgb3B0aW9uYWw6IG9wdGlvbmFsLFxuICAgICAgcmVwZWF0OiByZXBlYXQsXG4gICAgICBwYXJ0aWFsOiBwYXJ0aWFsLFxuICAgICAgYXN0ZXJpc2s6ICEhYXN0ZXJpc2ssXG4gICAgICBwYXR0ZXJuOiBwYXR0ZXJuID8gZXNjYXBlR3JvdXAocGF0dGVybikgOiAoYXN0ZXJpc2sgPyAnLionIDogJ1teJyArIGVzY2FwZVN0cmluZyhkZWxpbWl0ZXIpICsgJ10rPycpXG4gICAgfSk7XG4gIH1cblxuICAvLyBNYXRjaCBhbnkgY2hhcmFjdGVycyBzdGlsbCByZW1haW5pbmcuXG4gIGlmIChpbmRleCA8IHN0ci5sZW5ndGgpIHtcbiAgICBwYXRoICs9IHN0ci5zdWJzdHIoaW5kZXgpO1xuICB9XG5cbiAgLy8gSWYgdGhlIHBhdGggZXhpc3RzLCBwdXNoIGl0IG9udG8gdGhlIGVuZC5cbiAgaWYgKHBhdGgpIHtcbiAgICB0b2tlbnMucHVzaChwYXRoKTtcbiAgfVxuXG4gIHJldHVybiB0b2tlbnNcbn1cblxuLyoqXG4gKiBDb21waWxlIGEgc3RyaW5nIHRvIGEgdGVtcGxhdGUgZnVuY3Rpb24gZm9yIHRoZSBwYXRoLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gICAgICAgICAgICAgc3RyXG4gKiBAcGFyYW0gIHtPYmplY3Q9fSAgICAgICAgICAgIG9wdGlvbnNcbiAqIEByZXR1cm4geyFmdW5jdGlvbihPYmplY3Q9LCBPYmplY3Q9KX1cbiAqL1xuZnVuY3Rpb24gY29tcGlsZSAoc3RyLCBvcHRpb25zKSB7XG4gIHJldHVybiB0b2tlbnNUb0Z1bmN0aW9uKHBhcnNlKHN0ciwgb3B0aW9ucykpXG59XG5cbi8qKlxuICogUHJldHRpZXIgZW5jb2Rpbmcgb2YgVVJJIHBhdGggc2VnbWVudHMuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBlbmNvZGVVUklDb21wb25lbnRQcmV0dHkgKHN0cikge1xuICByZXR1cm4gZW5jb2RlVVJJKHN0cikucmVwbGFjZSgvW1xcLz8jXS9nLCBmdW5jdGlvbiAoYykge1xuICAgIHJldHVybiAnJScgKyBjLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKClcbiAgfSlcbn1cblxuLyoqXG4gKiBFbmNvZGUgdGhlIGFzdGVyaXNrIHBhcmFtZXRlci4gU2ltaWxhciB0byBgcHJldHR5YCwgYnV0IGFsbG93cyBzbGFzaGVzLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ31cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZW5jb2RlQXN0ZXJpc2sgKHN0cikge1xuICByZXR1cm4gZW5jb2RlVVJJKHN0cikucmVwbGFjZSgvWz8jXS9nLCBmdW5jdGlvbiAoYykge1xuICAgIHJldHVybiAnJScgKyBjLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKClcbiAgfSlcbn1cblxuLyoqXG4gKiBFeHBvc2UgYSBtZXRob2QgZm9yIHRyYW5zZm9ybWluZyB0b2tlbnMgaW50byB0aGUgcGF0aCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9GdW5jdGlvbiAodG9rZW5zKSB7XG4gIC8vIENvbXBpbGUgYWxsIHRoZSB0b2tlbnMgaW50byByZWdleHBzLlxuICB2YXIgbWF0Y2hlcyA9IG5ldyBBcnJheSh0b2tlbnMubGVuZ3RoKTtcblxuICAvLyBDb21waWxlIGFsbCB0aGUgcGF0dGVybnMgYmVmb3JlIGNvbXBpbGF0aW9uLlxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0eXBlb2YgdG9rZW5zW2ldID09PSAnb2JqZWN0Jykge1xuICAgICAgbWF0Y2hlc1tpXSA9IG5ldyBSZWdFeHAoJ14oPzonICsgdG9rZW5zW2ldLnBhdHRlcm4gKyAnKSQnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKG9iaiwgb3B0cykge1xuICAgIHZhciBwYXRoID0gJyc7XG4gICAgdmFyIGRhdGEgPSBvYmogfHwge307XG4gICAgdmFyIG9wdGlvbnMgPSBvcHRzIHx8IHt9O1xuICAgIHZhciBlbmNvZGUgPSBvcHRpb25zLnByZXR0eSA/IGVuY29kZVVSSUNvbXBvbmVudFByZXR0eSA6IGVuY29kZVVSSUNvbXBvbmVudDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG5cbiAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHBhdGggKz0gdG9rZW47XG5cbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgdmFyIHZhbHVlID0gZGF0YVt0b2tlbi5uYW1lXTtcbiAgICAgIHZhciBzZWdtZW50O1xuXG4gICAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgICBpZiAodG9rZW4ub3B0aW9uYWwpIHtcbiAgICAgICAgICAvLyBQcmVwZW5kIHBhcnRpYWwgc2VnbWVudCBwcmVmaXhlcy5cbiAgICAgICAgICBpZiAodG9rZW4ucGFydGlhbCkge1xuICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBcIicgKyB0b2tlbi5uYW1lICsgJ1wiIHRvIGJlIGRlZmluZWQnKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChpc2FycmF5KHZhbHVlKSkge1xuICAgICAgICBpZiAoIXRva2VuLnJlcGVhdCkge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIFwiJyArIHRva2VuLm5hbWUgKyAnXCIgdG8gbm90IHJlcGVhdCwgYnV0IHJlY2VpdmVkIGAnICsgSlNPTi5zdHJpbmdpZnkodmFsdWUpICsgJ2AnKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGlmICh0b2tlbi5vcHRpb25hbCkge1xuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgXCInICsgdG9rZW4ubmFtZSArICdcIiB0byBub3QgYmUgZW1wdHknKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsdWUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBzZWdtZW50ID0gZW5jb2RlKHZhbHVlW2pdKTtcblxuICAgICAgICAgIGlmICghbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBhbGwgXCInICsgdG9rZW4ubmFtZSArICdcIiB0byBtYXRjaCBcIicgKyB0b2tlbi5wYXR0ZXJuICsgJ1wiLCBidXQgcmVjZWl2ZWQgYCcgKyBKU09OLnN0cmluZ2lmeShzZWdtZW50KSArICdgJylcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwYXRoICs9IChqID09PSAwID8gdG9rZW4ucHJlZml4IDogdG9rZW4uZGVsaW1pdGVyKSArIHNlZ21lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBzZWdtZW50ID0gdG9rZW4uYXN0ZXJpc2sgPyBlbmNvZGVBc3Rlcmlzayh2YWx1ZSkgOiBlbmNvZGUodmFsdWUpO1xuXG4gICAgICBpZiAoIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBcIicgKyB0b2tlbi5uYW1lICsgJ1wiIHRvIG1hdGNoIFwiJyArIHRva2VuLnBhdHRlcm4gKyAnXCIsIGJ1dCByZWNlaXZlZCBcIicgKyBzZWdtZW50ICsgJ1wiJylcbiAgICAgIH1cblxuICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50O1xuICAgIH1cblxuICAgIHJldHVybiBwYXRoXG4gIH1cbn1cblxuLyoqXG4gKiBFc2NhcGUgYSByZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVN0cmluZyAoc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKyo/PV4hOiR7fSgpW1xcXXxcXC9cXFxcXSkvZywgJ1xcXFwkMScpXG59XG5cbi8qKlxuICogRXNjYXBlIHRoZSBjYXB0dXJpbmcgZ3JvdXAgYnkgZXNjYXBpbmcgc3BlY2lhbCBjaGFyYWN0ZXJzIGFuZCBtZWFuaW5nLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gZ3JvdXBcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZXNjYXBlR3JvdXAgKGdyb3VwKSB7XG4gIHJldHVybiBncm91cC5yZXBsYWNlKC8oWz0hOiRcXC8oKV0pL2csICdcXFxcJDEnKVxufVxuXG4vKipcbiAqIEF0dGFjaCB0aGUga2V5cyBhcyBhIHByb3BlcnR5IG9mIHRoZSByZWdleHAuXG4gKlxuICogQHBhcmFtICB7IVJlZ0V4cH0gcmVcbiAqIEBwYXJhbSAge0FycmF5fSAgIGtleXNcbiAqIEByZXR1cm4geyFSZWdFeHB9XG4gKi9cbmZ1bmN0aW9uIGF0dGFjaEtleXMgKHJlLCBrZXlzKSB7XG4gIHJlLmtleXMgPSBrZXlzO1xuICByZXR1cm4gcmVcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGZsYWdzIGZvciBhIHJlZ2V4cCBmcm9tIHRoZSBvcHRpb25zLlxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBmbGFncyAob3B0aW9ucykge1xuICByZXR1cm4gb3B0aW9ucy5zZW5zaXRpdmUgPyAnJyA6ICdpJ1xufVxuXG4vKipcbiAqIFB1bGwgb3V0IGtleXMgZnJvbSBhIHJlZ2V4cC5cbiAqXG4gKiBAcGFyYW0gIHshUmVnRXhwfSBwYXRoXG4gKiBAcGFyYW0gIHshQXJyYXl9ICBrZXlzXG4gKiBAcmV0dXJuIHshUmVnRXhwfVxuICovXG5mdW5jdGlvbiByZWdleHBUb1JlZ2V4cCAocGF0aCwga2V5cykge1xuICAvLyBVc2UgYSBuZWdhdGl2ZSBsb29rYWhlYWQgdG8gbWF0Y2ggb25seSBjYXB0dXJpbmcgZ3JvdXBzLlxuICB2YXIgZ3JvdXBzID0gcGF0aC5zb3VyY2UubWF0Y2goL1xcKCg/IVxcPykvZyk7XG5cbiAgaWYgKGdyb3Vwcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXlzLnB1c2goe1xuICAgICAgICBuYW1lOiBpLFxuICAgICAgICBwcmVmaXg6IG51bGwsXG4gICAgICAgIGRlbGltaXRlcjogbnVsbCxcbiAgICAgICAgb3B0aW9uYWw6IGZhbHNlLFxuICAgICAgICByZXBlYXQ6IGZhbHNlLFxuICAgICAgICBwYXJ0aWFsOiBmYWxzZSxcbiAgICAgICAgYXN0ZXJpc2s6IGZhbHNlLFxuICAgICAgICBwYXR0ZXJuOiBudWxsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXR0YWNoS2V5cyhwYXRoLCBrZXlzKVxufVxuXG4vKipcbiAqIFRyYW5zZm9ybSBhbiBhcnJheSBpbnRvIGEgcmVnZXhwLlxuICpcbiAqIEBwYXJhbSAgeyFBcnJheX0gIHBhdGhcbiAqIEBwYXJhbSAge0FycmF5fSAgIGtleXNcbiAqIEBwYXJhbSAgeyFPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4geyFSZWdFeHB9XG4gKi9cbmZ1bmN0aW9uIGFycmF5VG9SZWdleHAgKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgdmFyIHBhcnRzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXRoLmxlbmd0aDsgaSsrKSB7XG4gICAgcGFydHMucHVzaChwYXRoVG9SZWdleHAocGF0aFtpXSwga2V5cywgb3B0aW9ucykuc291cmNlKTtcbiAgfVxuXG4gIHZhciByZWdleHAgPSBuZXcgUmVnRXhwKCcoPzonICsgcGFydHMuam9pbignfCcpICsgJyknLCBmbGFncyhvcHRpb25zKSk7XG5cbiAgcmV0dXJuIGF0dGFjaEtleXMocmVnZXhwLCBrZXlzKVxufVxuXG4vKipcbiAqIENyZWF0ZSBhIHBhdGggcmVnZXhwIGZyb20gc3RyaW5nIGlucHV0LlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gIHBhdGhcbiAqIEBwYXJhbSAgeyFBcnJheX0gIGtleXNcbiAqIEBwYXJhbSAgeyFPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4geyFSZWdFeHB9XG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvUmVnZXhwIChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gIHJldHVybiB0b2tlbnNUb1JlZ0V4cChwYXJzZShwYXRoLCBvcHRpb25zKSwga2V5cywgb3B0aW9ucylcbn1cblxuLyoqXG4gKiBFeHBvc2UgYSBmdW5jdGlvbiBmb3IgdGFraW5nIHRva2VucyBhbmQgcmV0dXJuaW5nIGEgUmVnRXhwLlxuICpcbiAqIEBwYXJhbSAgeyFBcnJheX0gICAgICAgICAgdG9rZW5zXG4gKiBAcGFyYW0gIHsoQXJyYXl8T2JqZWN0KT19IGtleXNcbiAqIEBwYXJhbSAge09iamVjdD19ICAgICAgICAgb3B0aW9uc1xuICogQHJldHVybiB7IVJlZ0V4cH1cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9SZWdFeHAgKHRva2Vucywga2V5cywgb3B0aW9ucykge1xuICBpZiAoIWlzYXJyYXkoa2V5cykpIHtcbiAgICBvcHRpb25zID0gLyoqIEB0eXBlIHshT2JqZWN0fSAqLyAoa2V5cyB8fCBvcHRpb25zKTtcbiAgICBrZXlzID0gW107XG4gIH1cblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICB2YXIgc3RyaWN0ID0gb3B0aW9ucy5zdHJpY3Q7XG4gIHZhciBlbmQgPSBvcHRpb25zLmVuZCAhPT0gZmFsc2U7XG4gIHZhciByb3V0ZSA9ICcnO1xuXG4gIC8vIEl0ZXJhdGUgb3ZlciB0aGUgdG9rZW5zIGFuZCBjcmVhdGUgb3VyIHJlZ2V4cCBzdHJpbmcuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHRva2VuID0gdG9rZW5zW2ldO1xuXG4gICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJvdXRlICs9IGVzY2FwZVN0cmluZyh0b2tlbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBwcmVmaXggPSBlc2NhcGVTdHJpbmcodG9rZW4ucHJlZml4KTtcbiAgICAgIHZhciBjYXB0dXJlID0gJyg/OicgKyB0b2tlbi5wYXR0ZXJuICsgJyknO1xuXG4gICAgICBrZXlzLnB1c2godG9rZW4pO1xuXG4gICAgICBpZiAodG9rZW4ucmVwZWF0KSB7XG4gICAgICAgIGNhcHR1cmUgKz0gJyg/OicgKyBwcmVmaXggKyBjYXB0dXJlICsgJykqJztcbiAgICAgIH1cblxuICAgICAgaWYgKHRva2VuLm9wdGlvbmFsKSB7XG4gICAgICAgIGlmICghdG9rZW4ucGFydGlhbCkge1xuICAgICAgICAgIGNhcHR1cmUgPSAnKD86JyArIHByZWZpeCArICcoJyArIGNhcHR1cmUgKyAnKSk/JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYXB0dXJlID0gcHJlZml4ICsgJygnICsgY2FwdHVyZSArICcpPyc7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhcHR1cmUgPSBwcmVmaXggKyAnKCcgKyBjYXB0dXJlICsgJyknO1xuICAgICAgfVxuXG4gICAgICByb3V0ZSArPSBjYXB0dXJlO1xuICAgIH1cbiAgfVxuXG4gIHZhciBkZWxpbWl0ZXIgPSBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgJy8nKTtcbiAgdmFyIGVuZHNXaXRoRGVsaW1pdGVyID0gcm91dGUuc2xpY2UoLWRlbGltaXRlci5sZW5ndGgpID09PSBkZWxpbWl0ZXI7XG5cbiAgLy8gSW4gbm9uLXN0cmljdCBtb2RlIHdlIGFsbG93IGEgc2xhc2ggYXQgdGhlIGVuZCBvZiBtYXRjaC4gSWYgdGhlIHBhdGggdG9cbiAgLy8gbWF0Y2ggYWxyZWFkeSBlbmRzIHdpdGggYSBzbGFzaCwgd2UgcmVtb3ZlIGl0IGZvciBjb25zaXN0ZW5jeS4gVGhlIHNsYXNoXG4gIC8vIGlzIHZhbGlkIGF0IHRoZSBlbmQgb2YgYSBwYXRoIG1hdGNoLCBub3QgaW4gdGhlIG1pZGRsZS4gVGhpcyBpcyBpbXBvcnRhbnRcbiAgLy8gaW4gbm9uLWVuZGluZyBtb2RlLCB3aGVyZSBcIi90ZXN0L1wiIHNob3VsZG4ndCBtYXRjaCBcIi90ZXN0Ly9yb3V0ZVwiLlxuICBpZiAoIXN0cmljdCkge1xuICAgIHJvdXRlID0gKGVuZHNXaXRoRGVsaW1pdGVyID8gcm91dGUuc2xpY2UoMCwgLWRlbGltaXRlci5sZW5ndGgpIDogcm91dGUpICsgJyg/OicgKyBkZWxpbWl0ZXIgKyAnKD89JCkpPyc7XG4gIH1cblxuICBpZiAoZW5kKSB7XG4gICAgcm91dGUgKz0gJyQnO1xuICB9IGVsc2Uge1xuICAgIC8vIEluIG5vbi1lbmRpbmcgbW9kZSwgd2UgbmVlZCB0aGUgY2FwdHVyaW5nIGdyb3VwcyB0byBtYXRjaCBhcyBtdWNoIGFzXG4gICAgLy8gcG9zc2libGUgYnkgdXNpbmcgYSBwb3NpdGl2ZSBsb29rYWhlYWQgdG8gdGhlIGVuZCBvciBuZXh0IHBhdGggc2VnbWVudC5cbiAgICByb3V0ZSArPSBzdHJpY3QgJiYgZW5kc1dpdGhEZWxpbWl0ZXIgPyAnJyA6ICcoPz0nICsgZGVsaW1pdGVyICsgJ3wkKSc7XG4gIH1cblxuICByZXR1cm4gYXR0YWNoS2V5cyhuZXcgUmVnRXhwKCdeJyArIHJvdXRlLCBmbGFncyhvcHRpb25zKSksIGtleXMpXG59XG5cbi8qKlxuICogTm9ybWFsaXplIHRoZSBnaXZlbiBwYXRoIHN0cmluZywgcmV0dXJuaW5nIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEFuIGVtcHR5IGFycmF5IGNhbiBiZSBwYXNzZWQgaW4gZm9yIHRoZSBrZXlzLCB3aGljaCB3aWxsIGhvbGQgdGhlXG4gKiBwbGFjZWhvbGRlciBrZXkgZGVzY3JpcHRpb25zLiBGb3IgZXhhbXBsZSwgdXNpbmcgYC91c2VyLzppZGAsIGBrZXlzYCB3aWxsXG4gKiBjb250YWluIGBbeyBuYW1lOiAnaWQnLCBkZWxpbWl0ZXI6ICcvJywgb3B0aW9uYWw6IGZhbHNlLCByZXBlYXQ6IGZhbHNlIH1dYC5cbiAqXG4gKiBAcGFyYW0gIHsoc3RyaW5nfFJlZ0V4cHxBcnJheSl9IHBhdGhcbiAqIEBwYXJhbSAgeyhBcnJheXxPYmplY3QpPX0gICAgICAga2V5c1xuICogQHBhcmFtICB7T2JqZWN0PX0gICAgICAgICAgICAgICBvcHRpb25zXG4gKiBAcmV0dXJuIHshUmVnRXhwfVxuICovXG5mdW5jdGlvbiBwYXRoVG9SZWdleHAgKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgaWYgKCFpc2FycmF5KGtleXMpKSB7XG4gICAgb3B0aW9ucyA9IC8qKiBAdHlwZSB7IU9iamVjdH0gKi8gKGtleXMgfHwgb3B0aW9ucyk7XG4gICAga2V5cyA9IFtdO1xuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgaWYgKHBhdGggaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICByZXR1cm4gcmVnZXhwVG9SZWdleHAocGF0aCwgLyoqIEB0eXBlIHshQXJyYXl9ICovIChrZXlzKSlcbiAgfVxuXG4gIGlmIChpc2FycmF5KHBhdGgpKSB7XG4gICAgcmV0dXJuIGFycmF5VG9SZWdleHAoLyoqIEB0eXBlIHshQXJyYXl9ICovIChwYXRoKSwgLyoqIEB0eXBlIHshQXJyYXl9ICovIChrZXlzKSwgb3B0aW9ucylcbiAgfVxuXG4gIHJldHVybiBzdHJpbmdUb1JlZ2V4cCgvKiogQHR5cGUge3N0cmluZ30gKi8gKHBhdGgpLCAvKiogQHR5cGUgeyFBcnJheX0gKi8gKGtleXMpLCBvcHRpb25zKVxufVxuXG5pbmRleC5wYXJzZSA9IHBhcnNlXzE7XG5pbmRleC5jb21waWxlID0gY29tcGlsZV8xO1xuaW5kZXgudG9rZW5zVG9GdW5jdGlvbiA9IHRva2Vuc1RvRnVuY3Rpb25fMTtcbmluZGV4LnRva2Vuc1RvUmVnRXhwID0gdG9rZW5zVG9SZWdFeHBfMTtcblxuLyogICovXG5cbnZhciByZWdleHBDb21waWxlQ2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG5mdW5jdGlvbiBmaWxsUGFyYW1zIChcbiAgcGF0aCxcbiAgcGFyYW1zLFxuICByb3V0ZU1zZ1xuKSB7XG4gIHRyeSB7XG4gICAgdmFyIGZpbGxlciA9XG4gICAgICByZWdleHBDb21waWxlQ2FjaGVbcGF0aF0gfHxcbiAgICAgIChyZWdleHBDb21waWxlQ2FjaGVbcGF0aF0gPSBpbmRleC5jb21waWxlKHBhdGgpKTtcbiAgICByZXR1cm4gZmlsbGVyKHBhcmFtcyB8fCB7fSwgeyBwcmV0dHk6IHRydWUgfSlcbiAgfSBjYXRjaCAoZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB3YXJuKGZhbHNlLCAoXCJtaXNzaW5nIHBhcmFtIGZvciBcIiArIHJvdXRlTXNnICsgXCI6IFwiICsgKGUubWVzc2FnZSkpKTtcbiAgICB9XG4gICAgcmV0dXJuICcnXG4gIH1cbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlTWFwIChcbiAgcm91dGVzLFxuICBvbGRQYXRoTGlzdCxcbiAgb2xkUGF0aE1hcCxcbiAgb2xkTmFtZU1hcFxuKSB7XG4gIC8vIHRoZSBwYXRoIGxpc3QgaXMgdXNlZCB0byBjb250cm9sIHBhdGggbWF0Y2hpbmcgcHJpb3JpdHlcbiAgdmFyIHBhdGhMaXN0ID0gb2xkUGF0aExpc3QgfHwgW107XG4gIHZhciBwYXRoTWFwID0gb2xkUGF0aE1hcCB8fCBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB2YXIgbmFtZU1hcCA9IG9sZE5hbWVNYXAgfHwgT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuICByb3V0ZXMuZm9yRWFjaChmdW5jdGlvbiAocm91dGUpIHtcbiAgICBhZGRSb3V0ZVJlY29yZChwYXRoTGlzdCwgcGF0aE1hcCwgbmFtZU1hcCwgcm91dGUpO1xuICB9KTtcblxuICAvLyBlbnN1cmUgd2lsZGNhcmQgcm91dGVzIGFyZSBhbHdheXMgYXQgdGhlIGVuZFxuICBmb3IgKHZhciBpID0gMCwgbCA9IHBhdGhMaXN0Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGlmIChwYXRoTGlzdFtpXSA9PT0gJyonKSB7XG4gICAgICBwYXRoTGlzdC5wdXNoKHBhdGhMaXN0LnNwbGljZShpLCAxKVswXSk7XG4gICAgICBsLS07XG4gICAgICBpLS07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRoTGlzdDogcGF0aExpc3QsXG4gICAgcGF0aE1hcDogcGF0aE1hcCxcbiAgICBuYW1lTWFwOiBuYW1lTWFwXG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkUm91dGVSZWNvcmQgKFxuICBwYXRoTGlzdCxcbiAgcGF0aE1hcCxcbiAgbmFtZU1hcCxcbiAgcm91dGUsXG4gIHBhcmVudCxcbiAgbWF0Y2hBc1xuKSB7XG4gIHZhciBwYXRoID0gcm91dGUucGF0aDtcbiAgdmFyIG5hbWUgPSByb3V0ZS5uYW1lO1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGFzc2VydChwYXRoICE9IG51bGwsIFwiXFxcInBhdGhcXFwiIGlzIHJlcXVpcmVkIGluIGEgcm91dGUgY29uZmlndXJhdGlvbi5cIik7XG4gICAgYXNzZXJ0KFxuICAgICAgdHlwZW9mIHJvdXRlLmNvbXBvbmVudCAhPT0gJ3N0cmluZycsXG4gICAgICBcInJvdXRlIGNvbmZpZyBcXFwiY29tcG9uZW50XFxcIiBmb3IgcGF0aDogXCIgKyAoU3RyaW5nKHBhdGggfHwgbmFtZSkpICsgXCIgY2Fubm90IGJlIGEgXCIgK1xuICAgICAgXCJzdHJpbmcgaWQuIFVzZSBhbiBhY3R1YWwgY29tcG9uZW50IGluc3RlYWQuXCJcbiAgICApO1xuICB9XG5cbiAgdmFyIG5vcm1hbGl6ZWRQYXRoID0gbm9ybWFsaXplUGF0aChwYXRoLCBwYXJlbnQpO1xuICB2YXIgcmVjb3JkID0ge1xuICAgIHBhdGg6IG5vcm1hbGl6ZWRQYXRoLFxuICAgIHJlZ2V4OiBjb21waWxlUm91dGVSZWdleChub3JtYWxpemVkUGF0aCksXG4gICAgY29tcG9uZW50czogcm91dGUuY29tcG9uZW50cyB8fCB7IGRlZmF1bHQ6IHJvdXRlLmNvbXBvbmVudCB9LFxuICAgIGluc3RhbmNlczoge30sXG4gICAgbmFtZTogbmFtZSxcbiAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICBtYXRjaEFzOiBtYXRjaEFzLFxuICAgIHJlZGlyZWN0OiByb3V0ZS5yZWRpcmVjdCxcbiAgICBiZWZvcmVFbnRlcjogcm91dGUuYmVmb3JlRW50ZXIsXG4gICAgbWV0YTogcm91dGUubWV0YSB8fCB7fSxcbiAgICBwcm9wczogcm91dGUucHJvcHMgPT0gbnVsbFxuICAgICAgPyB7fVxuICAgICAgOiByb3V0ZS5jb21wb25lbnRzXG4gICAgICAgID8gcm91dGUucHJvcHNcbiAgICAgICAgOiB7IGRlZmF1bHQ6IHJvdXRlLnByb3BzIH1cbiAgfTtcblxuICBpZiAocm91dGUuY2hpbGRyZW4pIHtcbiAgICAvLyBXYXJuIGlmIHJvdXRlIGlzIG5hbWVkIGFuZCBoYXMgYSBkZWZhdWx0IGNoaWxkIHJvdXRlLlxuICAgIC8vIElmIHVzZXJzIG5hdmlnYXRlIHRvIHRoaXMgcm91dGUgYnkgbmFtZSwgdGhlIGRlZmF1bHQgY2hpbGQgd2lsbFxuICAgIC8vIG5vdCBiZSByZW5kZXJlZCAoR0ggSXNzdWUgIzYyOSlcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHJvdXRlLm5hbWUgJiYgcm91dGUuY2hpbGRyZW4uc29tZShmdW5jdGlvbiAoY2hpbGQpIHsgcmV0dXJuIC9eXFwvPyQvLnRlc3QoY2hpbGQucGF0aCk7IH0pKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgXCJOYW1lZCBSb3V0ZSAnXCIgKyAocm91dGUubmFtZSkgKyBcIicgaGFzIGEgZGVmYXVsdCBjaGlsZCByb3V0ZS4gXCIgK1xuICAgICAgICAgIFwiV2hlbiBuYXZpZ2F0aW5nIHRvIHRoaXMgbmFtZWQgcm91dGUgKDp0bz1cXFwie25hbWU6ICdcIiArIChyb3V0ZS5uYW1lKSArIFwiJ1xcXCIpLCBcIiArXG4gICAgICAgICAgXCJ0aGUgZGVmYXVsdCBjaGlsZCByb3V0ZSB3aWxsIG5vdCBiZSByZW5kZXJlZC4gUmVtb3ZlIHRoZSBuYW1lIGZyb20gXCIgK1xuICAgICAgICAgIFwidGhpcyByb3V0ZSBhbmQgdXNlIHRoZSBuYW1lIG9mIHRoZSBkZWZhdWx0IGNoaWxkIHJvdXRlIGZvciBuYW1lZCBcIiArXG4gICAgICAgICAgXCJsaW5rcyBpbnN0ZWFkLlwiXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIHJvdXRlLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICB2YXIgY2hpbGRNYXRjaEFzID0gbWF0Y2hBc1xuICAgICAgICA/IGNsZWFuUGF0aCgobWF0Y2hBcyArIFwiL1wiICsgKGNoaWxkLnBhdGgpKSlcbiAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgICBhZGRSb3V0ZVJlY29yZChwYXRoTGlzdCwgcGF0aE1hcCwgbmFtZU1hcCwgY2hpbGQsIHJlY29yZCwgY2hpbGRNYXRjaEFzKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChyb3V0ZS5hbGlhcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocm91dGUuYWxpYXMpKSB7XG4gICAgICByb3V0ZS5hbGlhcy5mb3JFYWNoKGZ1bmN0aW9uIChhbGlhcykge1xuICAgICAgICB2YXIgYWxpYXNSb3V0ZSA9IHtcbiAgICAgICAgICBwYXRoOiBhbGlhcyxcbiAgICAgICAgICBjaGlsZHJlbjogcm91dGUuY2hpbGRyZW5cbiAgICAgICAgfTtcbiAgICAgICAgYWRkUm91dGVSZWNvcmQocGF0aExpc3QsIHBhdGhNYXAsIG5hbWVNYXAsIGFsaWFzUm91dGUsIHBhcmVudCwgcmVjb3JkLnBhdGgpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhbGlhc1JvdXRlID0ge1xuICAgICAgICBwYXRoOiByb3V0ZS5hbGlhcyxcbiAgICAgICAgY2hpbGRyZW46IHJvdXRlLmNoaWxkcmVuXG4gICAgICB9O1xuICAgICAgYWRkUm91dGVSZWNvcmQocGF0aExpc3QsIHBhdGhNYXAsIG5hbWVNYXAsIGFsaWFzUm91dGUsIHBhcmVudCwgcmVjb3JkLnBhdGgpO1xuICAgIH1cbiAgfVxuXG4gIGlmICghcGF0aE1hcFtyZWNvcmQucGF0aF0pIHtcbiAgICBwYXRoTGlzdC5wdXNoKHJlY29yZC5wYXRoKTtcbiAgICBwYXRoTWFwW3JlY29yZC5wYXRoXSA9IHJlY29yZDtcbiAgfVxuXG4gIGlmIChuYW1lKSB7XG4gICAgaWYgKCFuYW1lTWFwW25hbWVdKSB7XG4gICAgICBuYW1lTWFwW25hbWVdID0gcmVjb3JkO1xuICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhbWF0Y2hBcykge1xuICAgICAgd2FybihcbiAgICAgICAgZmFsc2UsXG4gICAgICAgIFwiRHVwbGljYXRlIG5hbWVkIHJvdXRlcyBkZWZpbml0aW9uOiBcIiArXG4gICAgICAgIFwieyBuYW1lOiBcXFwiXCIgKyBuYW1lICsgXCJcXFwiLCBwYXRoOiBcXFwiXCIgKyAocmVjb3JkLnBhdGgpICsgXCJcXFwiIH1cIlxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY29tcGlsZVJvdXRlUmVnZXggKHBhdGgpIHtcbiAgdmFyIHJlZ2V4ID0gaW5kZXgocGF0aCk7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgdmFyIGtleXMgPSB7fTtcbiAgICByZWdleC5rZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgd2Fybigha2V5c1trZXldLCAoXCJEdXBsaWNhdGUgcGFyYW0ga2V5cyBpbiByb3V0ZSB3aXRoIHBhdGg6IFxcXCJcIiArIHBhdGggKyBcIlxcXCJcIikpO1xuICAgICAga2V5c1trZXldID0gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gcmVnZXhcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplUGF0aCAocGF0aCwgcGFyZW50KSB7XG4gIHBhdGggPSBwYXRoLnJlcGxhY2UoL1xcLyQvLCAnJyk7XG4gIGlmIChwYXRoWzBdID09PSAnLycpIHsgcmV0dXJuIHBhdGggfVxuICBpZiAocGFyZW50ID09IG51bGwpIHsgcmV0dXJuIHBhdGggfVxuICByZXR1cm4gY2xlYW5QYXRoKCgocGFyZW50LnBhdGgpICsgXCIvXCIgKyBwYXRoKSlcbn1cblxuLyogICovXG5cblxuZnVuY3Rpb24gbm9ybWFsaXplTG9jYXRpb24gKFxuICByYXcsXG4gIGN1cnJlbnQsXG4gIGFwcGVuZCxcbiAgcm91dGVyXG4pIHtcbiAgdmFyIG5leHQgPSB0eXBlb2YgcmF3ID09PSAnc3RyaW5nJyA/IHsgcGF0aDogcmF3IH0gOiByYXc7XG4gIC8vIG5hbWVkIHRhcmdldFxuICBpZiAobmV4dC5uYW1lIHx8IG5leHQuX25vcm1hbGl6ZWQpIHtcbiAgICByZXR1cm4gbmV4dFxuICB9XG5cbiAgLy8gcmVsYXRpdmUgcGFyYW1zXG4gIGlmICghbmV4dC5wYXRoICYmIG5leHQucGFyYW1zICYmIGN1cnJlbnQpIHtcbiAgICBuZXh0ID0gYXNzaWduKHt9LCBuZXh0KTtcbiAgICBuZXh0Ll9ub3JtYWxpemVkID0gdHJ1ZTtcbiAgICB2YXIgcGFyYW1zID0gYXNzaWduKGFzc2lnbih7fSwgY3VycmVudC5wYXJhbXMpLCBuZXh0LnBhcmFtcyk7XG4gICAgaWYgKGN1cnJlbnQubmFtZSkge1xuICAgICAgbmV4dC5uYW1lID0gY3VycmVudC5uYW1lO1xuICAgICAgbmV4dC5wYXJhbXMgPSBwYXJhbXM7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50Lm1hdGNoZWQpIHtcbiAgICAgIHZhciByYXdQYXRoID0gY3VycmVudC5tYXRjaGVkW2N1cnJlbnQubWF0Y2hlZC5sZW5ndGggLSAxXS5wYXRoO1xuICAgICAgbmV4dC5wYXRoID0gZmlsbFBhcmFtcyhyYXdQYXRoLCBwYXJhbXMsIChcInBhdGggXCIgKyAoY3VycmVudC5wYXRoKSkpO1xuICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgd2FybihmYWxzZSwgXCJyZWxhdGl2ZSBwYXJhbXMgbmF2aWdhdGlvbiByZXF1aXJlcyBhIGN1cnJlbnQgcm91dGUuXCIpO1xuICAgIH1cbiAgICByZXR1cm4gbmV4dFxuICB9XG5cbiAgdmFyIHBhcnNlZFBhdGggPSBwYXJzZVBhdGgobmV4dC5wYXRoIHx8ICcnKTtcbiAgdmFyIGJhc2VQYXRoID0gKGN1cnJlbnQgJiYgY3VycmVudC5wYXRoKSB8fCAnLyc7XG4gIHZhciBwYXRoID0gcGFyc2VkUGF0aC5wYXRoXG4gICAgPyByZXNvbHZlUGF0aChwYXJzZWRQYXRoLnBhdGgsIGJhc2VQYXRoLCBhcHBlbmQgfHwgbmV4dC5hcHBlbmQpXG4gICAgOiBiYXNlUGF0aDtcblxuICB2YXIgcXVlcnkgPSByZXNvbHZlUXVlcnkoXG4gICAgcGFyc2VkUGF0aC5xdWVyeSxcbiAgICBuZXh0LnF1ZXJ5LFxuICAgIHJvdXRlciAmJiByb3V0ZXIub3B0aW9ucy5wYXJzZVF1ZXJ5XG4gICk7XG5cbiAgdmFyIGhhc2ggPSBuZXh0Lmhhc2ggfHwgcGFyc2VkUGF0aC5oYXNoO1xuICBpZiAoaGFzaCAmJiBoYXNoLmNoYXJBdCgwKSAhPT0gJyMnKSB7XG4gICAgaGFzaCA9IFwiI1wiICsgaGFzaDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgX25vcm1hbGl6ZWQ6IHRydWUsXG4gICAgcGF0aDogcGF0aCxcbiAgICBxdWVyeTogcXVlcnksXG4gICAgaGFzaDogaGFzaFxuICB9XG59XG5cbmZ1bmN0aW9uIGFzc2lnbiAoYSwgYikge1xuICBmb3IgKHZhciBrZXkgaW4gYikge1xuICAgIGFba2V5XSA9IGJba2V5XTtcbiAgfVxuICByZXR1cm4gYVxufVxuXG4vKiAgKi9cblxuXG5mdW5jdGlvbiBjcmVhdGVNYXRjaGVyIChcbiAgcm91dGVzLFxuICByb3V0ZXJcbikge1xuICB2YXIgcmVmID0gY3JlYXRlUm91dGVNYXAocm91dGVzKTtcbiAgdmFyIHBhdGhMaXN0ID0gcmVmLnBhdGhMaXN0O1xuICB2YXIgcGF0aE1hcCA9IHJlZi5wYXRoTWFwO1xuICB2YXIgbmFtZU1hcCA9IHJlZi5uYW1lTWFwO1xuXG4gIGZ1bmN0aW9uIGFkZFJvdXRlcyAocm91dGVzKSB7XG4gICAgY3JlYXRlUm91dGVNYXAocm91dGVzLCBwYXRoTGlzdCwgcGF0aE1hcCwgbmFtZU1hcCk7XG4gIH1cblxuICBmdW5jdGlvbiBtYXRjaCAoXG4gICAgcmF3LFxuICAgIGN1cnJlbnRSb3V0ZSxcbiAgICByZWRpcmVjdGVkRnJvbVxuICApIHtcbiAgICB2YXIgbG9jYXRpb24gPSBub3JtYWxpemVMb2NhdGlvbihyYXcsIGN1cnJlbnRSb3V0ZSwgZmFsc2UsIHJvdXRlcik7XG4gICAgdmFyIG5hbWUgPSBsb2NhdGlvbi5uYW1lO1xuXG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIHZhciByZWNvcmQgPSBuYW1lTWFwW25hbWVdO1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgd2FybihyZWNvcmQsIChcIlJvdXRlIHdpdGggbmFtZSAnXCIgKyBuYW1lICsgXCInIGRvZXMgbm90IGV4aXN0XCIpKTtcbiAgICAgIH1cbiAgICAgIHZhciBwYXJhbU5hbWVzID0gcmVjb3JkLnJlZ2V4LmtleXNcbiAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7IHJldHVybiAha2V5Lm9wdGlvbmFsOyB9KVxuICAgICAgICAubWFwKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleS5uYW1lOyB9KTtcblxuICAgICAgaWYgKHR5cGVvZiBsb2NhdGlvbi5wYXJhbXMgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGxvY2F0aW9uLnBhcmFtcyA9IHt9O1xuICAgICAgfVxuXG4gICAgICBpZiAoY3VycmVudFJvdXRlICYmIHR5cGVvZiBjdXJyZW50Um91dGUucGFyYW1zID09PSAnb2JqZWN0Jykge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gY3VycmVudFJvdXRlLnBhcmFtcykge1xuICAgICAgICAgIGlmICghKGtleSBpbiBsb2NhdGlvbi5wYXJhbXMpICYmIHBhcmFtTmFtZXMuaW5kZXhPZihrZXkpID4gLTEpIHtcbiAgICAgICAgICAgIGxvY2F0aW9uLnBhcmFtc1trZXldID0gY3VycmVudFJvdXRlLnBhcmFtc1trZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkKSB7XG4gICAgICAgIGxvY2F0aW9uLnBhdGggPSBmaWxsUGFyYW1zKHJlY29yZC5wYXRoLCBsb2NhdGlvbi5wYXJhbXMsIChcIm5hbWVkIHJvdXRlIFxcXCJcIiArIG5hbWUgKyBcIlxcXCJcIikpO1xuICAgICAgICByZXR1cm4gX2NyZWF0ZVJvdXRlKHJlY29yZCwgbG9jYXRpb24sIHJlZGlyZWN0ZWRGcm9tKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobG9jYXRpb24ucGF0aCkge1xuICAgICAgbG9jYXRpb24ucGFyYW1zID0ge307XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhdGhMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBwYXRoID0gcGF0aExpc3RbaV07XG4gICAgICAgIHZhciByZWNvcmQkMSA9IHBhdGhNYXBbcGF0aF07XG4gICAgICAgIGlmIChtYXRjaFJvdXRlKHJlY29yZCQxLnJlZ2V4LCBsb2NhdGlvbi5wYXRoLCBsb2NhdGlvbi5wYXJhbXMpKSB7XG4gICAgICAgICAgcmV0dXJuIF9jcmVhdGVSb3V0ZShyZWNvcmQkMSwgbG9jYXRpb24sIHJlZGlyZWN0ZWRGcm9tKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vIG5vIG1hdGNoXG4gICAgcmV0dXJuIF9jcmVhdGVSb3V0ZShudWxsLCBsb2NhdGlvbilcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlZGlyZWN0IChcbiAgICByZWNvcmQsXG4gICAgbG9jYXRpb25cbiAgKSB7XG4gICAgdmFyIG9yaWdpbmFsUmVkaXJlY3QgPSByZWNvcmQucmVkaXJlY3Q7XG4gICAgdmFyIHJlZGlyZWN0ID0gdHlwZW9mIG9yaWdpbmFsUmVkaXJlY3QgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBvcmlnaW5hbFJlZGlyZWN0KGNyZWF0ZVJvdXRlKHJlY29yZCwgbG9jYXRpb24sIG51bGwsIHJvdXRlcikpXG4gICAgICAgIDogb3JpZ2luYWxSZWRpcmVjdDtcblxuICAgIGlmICh0eXBlb2YgcmVkaXJlY3QgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZWRpcmVjdCA9IHsgcGF0aDogcmVkaXJlY3QgfTtcbiAgICB9XG5cbiAgICBpZiAoIXJlZGlyZWN0IHx8IHR5cGVvZiByZWRpcmVjdCAhPT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgZmFsc2UsIChcImludmFsaWQgcmVkaXJlY3Qgb3B0aW9uOiBcIiArIChKU09OLnN0cmluZ2lmeShyZWRpcmVjdCkpKVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIF9jcmVhdGVSb3V0ZShudWxsLCBsb2NhdGlvbilcbiAgICB9XG5cbiAgICB2YXIgcmUgPSByZWRpcmVjdDtcbiAgICB2YXIgbmFtZSA9IHJlLm5hbWU7XG4gICAgdmFyIHBhdGggPSByZS5wYXRoO1xuICAgIHZhciBxdWVyeSA9IGxvY2F0aW9uLnF1ZXJ5O1xuICAgIHZhciBoYXNoID0gbG9jYXRpb24uaGFzaDtcbiAgICB2YXIgcGFyYW1zID0gbG9jYXRpb24ucGFyYW1zO1xuICAgIHF1ZXJ5ID0gcmUuaGFzT3duUHJvcGVydHkoJ3F1ZXJ5JykgPyByZS5xdWVyeSA6IHF1ZXJ5O1xuICAgIGhhc2ggPSByZS5oYXNPd25Qcm9wZXJ0eSgnaGFzaCcpID8gcmUuaGFzaCA6IGhhc2g7XG4gICAgcGFyYW1zID0gcmUuaGFzT3duUHJvcGVydHkoJ3BhcmFtcycpID8gcmUucGFyYW1zIDogcGFyYW1zO1xuXG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIC8vIHJlc29sdmVkIG5hbWVkIGRpcmVjdFxuICAgICAgdmFyIHRhcmdldFJlY29yZCA9IG5hbWVNYXBbbmFtZV07XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBhc3NlcnQodGFyZ2V0UmVjb3JkLCAoXCJyZWRpcmVjdCBmYWlsZWQ6IG5hbWVkIHJvdXRlIFxcXCJcIiArIG5hbWUgKyBcIlxcXCIgbm90IGZvdW5kLlwiKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbWF0Y2goe1xuICAgICAgICBfbm9ybWFsaXplZDogdHJ1ZSxcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgcXVlcnk6IHF1ZXJ5LFxuICAgICAgICBoYXNoOiBoYXNoLFxuICAgICAgICBwYXJhbXM6IHBhcmFtc1xuICAgICAgfSwgdW5kZWZpbmVkLCBsb2NhdGlvbilcbiAgICB9IGVsc2UgaWYgKHBhdGgpIHtcbiAgICAgIC8vIDEuIHJlc29sdmUgcmVsYXRpdmUgcmVkaXJlY3RcbiAgICAgIHZhciByYXdQYXRoID0gcmVzb2x2ZVJlY29yZFBhdGgocGF0aCwgcmVjb3JkKTtcbiAgICAgIC8vIDIuIHJlc29sdmUgcGFyYW1zXG4gICAgICB2YXIgcmVzb2x2ZWRQYXRoID0gZmlsbFBhcmFtcyhyYXdQYXRoLCBwYXJhbXMsIChcInJlZGlyZWN0IHJvdXRlIHdpdGggcGF0aCBcXFwiXCIgKyByYXdQYXRoICsgXCJcXFwiXCIpKTtcbiAgICAgIC8vIDMuIHJlbWF0Y2ggd2l0aCBleGlzdGluZyBxdWVyeSBhbmQgaGFzaFxuICAgICAgcmV0dXJuIG1hdGNoKHtcbiAgICAgICAgX25vcm1hbGl6ZWQ6IHRydWUsXG4gICAgICAgIHBhdGg6IHJlc29sdmVkUGF0aCxcbiAgICAgICAgcXVlcnk6IHF1ZXJ5LFxuICAgICAgICBoYXNoOiBoYXNoXG4gICAgICB9LCB1bmRlZmluZWQsIGxvY2F0aW9uKVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB3YXJuKGZhbHNlLCAoXCJpbnZhbGlkIHJlZGlyZWN0IG9wdGlvbjogXCIgKyAoSlNPTi5zdHJpbmdpZnkocmVkaXJlY3QpKSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIF9jcmVhdGVSb3V0ZShudWxsLCBsb2NhdGlvbilcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBhbGlhcyAoXG4gICAgcmVjb3JkLFxuICAgIGxvY2F0aW9uLFxuICAgIG1hdGNoQXNcbiAgKSB7XG4gICAgdmFyIGFsaWFzZWRQYXRoID0gZmlsbFBhcmFtcyhtYXRjaEFzLCBsb2NhdGlvbi5wYXJhbXMsIChcImFsaWFzZWQgcm91dGUgd2l0aCBwYXRoIFxcXCJcIiArIG1hdGNoQXMgKyBcIlxcXCJcIikpO1xuICAgIHZhciBhbGlhc2VkTWF0Y2ggPSBtYXRjaCh7XG4gICAgICBfbm9ybWFsaXplZDogdHJ1ZSxcbiAgICAgIHBhdGg6IGFsaWFzZWRQYXRoXG4gICAgfSk7XG4gICAgaWYgKGFsaWFzZWRNYXRjaCkge1xuICAgICAgdmFyIG1hdGNoZWQgPSBhbGlhc2VkTWF0Y2gubWF0Y2hlZDtcbiAgICAgIHZhciBhbGlhc2VkUmVjb3JkID0gbWF0Y2hlZFttYXRjaGVkLmxlbmd0aCAtIDFdO1xuICAgICAgbG9jYXRpb24ucGFyYW1zID0gYWxpYXNlZE1hdGNoLnBhcmFtcztcbiAgICAgIHJldHVybiBfY3JlYXRlUm91dGUoYWxpYXNlZFJlY29yZCwgbG9jYXRpb24pXG4gICAgfVxuICAgIHJldHVybiBfY3JlYXRlUm91dGUobnVsbCwgbG9jYXRpb24pXG4gIH1cblxuICBmdW5jdGlvbiBfY3JlYXRlUm91dGUgKFxuICAgIHJlY29yZCxcbiAgICBsb2NhdGlvbixcbiAgICByZWRpcmVjdGVkRnJvbVxuICApIHtcbiAgICBpZiAocmVjb3JkICYmIHJlY29yZC5yZWRpcmVjdCkge1xuICAgICAgcmV0dXJuIHJlZGlyZWN0KHJlY29yZCwgcmVkaXJlY3RlZEZyb20gfHwgbG9jYXRpb24pXG4gICAgfVxuICAgIGlmIChyZWNvcmQgJiYgcmVjb3JkLm1hdGNoQXMpIHtcbiAgICAgIHJldHVybiBhbGlhcyhyZWNvcmQsIGxvY2F0aW9uLCByZWNvcmQubWF0Y2hBcylcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZVJvdXRlKHJlY29yZCwgbG9jYXRpb24sIHJlZGlyZWN0ZWRGcm9tLCByb3V0ZXIpXG4gIH1cblxuICByZXR1cm4ge1xuICAgIG1hdGNoOiBtYXRjaCxcbiAgICBhZGRSb3V0ZXM6IGFkZFJvdXRlc1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hdGNoUm91dGUgKFxuICByZWdleCxcbiAgcGF0aCxcbiAgcGFyYW1zXG4pIHtcbiAgdmFyIG0gPSBwYXRoLm1hdGNoKHJlZ2V4KTtcblxuICBpZiAoIW0pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfSBlbHNlIGlmICghcGFyYW1zKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAxLCBsZW4gPSBtLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgdmFyIGtleSA9IHJlZ2V4LmtleXNbaSAtIDFdO1xuICAgIHZhciB2YWwgPSB0eXBlb2YgbVtpXSA9PT0gJ3N0cmluZycgPyBkZWNvZGVVUklDb21wb25lbnQobVtpXSkgOiBtW2ldO1xuICAgIGlmIChrZXkpIHtcbiAgICAgIHBhcmFtc1trZXkubmFtZV0gPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWVcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZVJlY29yZFBhdGggKHBhdGgsIHJlY29yZCkge1xuICByZXR1cm4gcmVzb2x2ZVBhdGgocGF0aCwgcmVjb3JkLnBhcmVudCA/IHJlY29yZC5wYXJlbnQucGF0aCA6ICcvJywgdHJ1ZSlcbn1cblxuLyogICovXG5cblxudmFyIHBvc2l0aW9uU3RvcmUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG5mdW5jdGlvbiBzZXR1cFNjcm9sbCAoKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgc2F2ZVNjcm9sbFBvc2l0aW9uKCk7XG4gICAgaWYgKGUuc3RhdGUgJiYgZS5zdGF0ZS5rZXkpIHtcbiAgICAgIHNldFN0YXRlS2V5KGUuc3RhdGUua2V5KTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVTY3JvbGwgKFxuICByb3V0ZXIsXG4gIHRvLFxuICBmcm9tLFxuICBpc1BvcFxuKSB7XG4gIGlmICghcm91dGVyLmFwcCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgdmFyIGJlaGF2aW9yID0gcm91dGVyLm9wdGlvbnMuc2Nyb2xsQmVoYXZpb3I7XG4gIGlmICghYmVoYXZpb3IpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgYXNzZXJ0KHR5cGVvZiBiZWhhdmlvciA9PT0gJ2Z1bmN0aW9uJywgXCJzY3JvbGxCZWhhdmlvciBtdXN0IGJlIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICAvLyB3YWl0IHVudGlsIHJlLXJlbmRlciBmaW5pc2hlcyBiZWZvcmUgc2Nyb2xsaW5nXG4gIHJvdXRlci5hcHAuJG5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcG9zaXRpb24gPSBnZXRTY3JvbGxQb3NpdGlvbigpO1xuICAgIHZhciBzaG91bGRTY3JvbGwgPSBiZWhhdmlvcih0bywgZnJvbSwgaXNQb3AgPyBwb3NpdGlvbiA6IG51bGwpO1xuICAgIGlmICghc2hvdWxkU2Nyb2xsKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdmFyIGlzT2JqZWN0ID0gdHlwZW9mIHNob3VsZFNjcm9sbCA9PT0gJ29iamVjdCc7XG4gICAgaWYgKGlzT2JqZWN0ICYmIHR5cGVvZiBzaG91bGRTY3JvbGwuc2VsZWN0b3IgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YXIgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNob3VsZFNjcm9sbC5zZWxlY3Rvcik7XG4gICAgICBpZiAoZWwpIHtcbiAgICAgICAgcG9zaXRpb24gPSBnZXRFbGVtZW50UG9zaXRpb24oZWwpO1xuICAgICAgfSBlbHNlIGlmIChpc1ZhbGlkUG9zaXRpb24oc2hvdWxkU2Nyb2xsKSkge1xuICAgICAgICBwb3NpdGlvbiA9IG5vcm1hbGl6ZVBvc2l0aW9uKHNob3VsZFNjcm9sbCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpc09iamVjdCAmJiBpc1ZhbGlkUG9zaXRpb24oc2hvdWxkU2Nyb2xsKSkge1xuICAgICAgcG9zaXRpb24gPSBub3JtYWxpemVQb3NpdGlvbihzaG91bGRTY3JvbGwpO1xuICAgIH1cblxuICAgIGlmIChwb3NpdGlvbikge1xuICAgICAgd2luZG93LnNjcm9sbFRvKHBvc2l0aW9uLngsIHBvc2l0aW9uLnkpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNhdmVTY3JvbGxQb3NpdGlvbiAoKSB7XG4gIHZhciBrZXkgPSBnZXRTdGF0ZUtleSgpO1xuICBpZiAoa2V5KSB7XG4gICAgcG9zaXRpb25TdG9yZVtrZXldID0ge1xuICAgICAgeDogd2luZG93LnBhZ2VYT2Zmc2V0LFxuICAgICAgeTogd2luZG93LnBhZ2VZT2Zmc2V0XG4gICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRTY3JvbGxQb3NpdGlvbiAoKSB7XG4gIHZhciBrZXkgPSBnZXRTdGF0ZUtleSgpO1xuICBpZiAoa2V5KSB7XG4gICAgcmV0dXJuIHBvc2l0aW9uU3RvcmVba2V5XVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldEVsZW1lbnRQb3NpdGlvbiAoZWwpIHtcbiAgdmFyIGRvY0VsID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICB2YXIgZG9jUmVjdCA9IGRvY0VsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB2YXIgZWxSZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHJldHVybiB7XG4gICAgeDogZWxSZWN0LmxlZnQgLSBkb2NSZWN0LmxlZnQsXG4gICAgeTogZWxSZWN0LnRvcCAtIGRvY1JlY3QudG9wXG4gIH1cbn1cblxuZnVuY3Rpb24gaXNWYWxpZFBvc2l0aW9uIChvYmopIHtcbiAgcmV0dXJuIGlzTnVtYmVyKG9iai54KSB8fCBpc051bWJlcihvYmoueSlcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplUG9zaXRpb24gKG9iaikge1xuICByZXR1cm4ge1xuICAgIHg6IGlzTnVtYmVyKG9iai54KSA/IG9iai54IDogd2luZG93LnBhZ2VYT2Zmc2V0LFxuICAgIHk6IGlzTnVtYmVyKG9iai55KSA/IG9iai55IDogd2luZG93LnBhZ2VZT2Zmc2V0XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNOdW1iZXIgKHYpIHtcbiAgcmV0dXJuIHR5cGVvZiB2ID09PSAnbnVtYmVyJ1xufVxuXG4vKiAgKi9cblxudmFyIHN1cHBvcnRzUHVzaFN0YXRlID0gaW5Ccm93c2VyICYmIChmdW5jdGlvbiAoKSB7XG4gIHZhciB1YSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50O1xuXG4gIGlmIChcbiAgICAodWEuaW5kZXhPZignQW5kcm9pZCAyLicpICE9PSAtMSB8fCB1YS5pbmRleE9mKCdBbmRyb2lkIDQuMCcpICE9PSAtMSkgJiZcbiAgICB1YS5pbmRleE9mKCdNb2JpbGUgU2FmYXJpJykgIT09IC0xICYmXG4gICAgdWEuaW5kZXhPZignQ2hyb21lJykgPT09IC0xICYmXG4gICAgdWEuaW5kZXhPZignV2luZG93cyBQaG9uZScpID09PSAtMVxuICApIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiB3aW5kb3cuaGlzdG9yeSAmJiAncHVzaFN0YXRlJyBpbiB3aW5kb3cuaGlzdG9yeVxufSkoKTtcblxuLy8gdXNlIFVzZXIgVGltaW5nIGFwaSAoaWYgcHJlc2VudCkgZm9yIG1vcmUgYWNjdXJhdGUga2V5IHByZWNpc2lvblxudmFyIFRpbWUgPSBpbkJyb3dzZXIgJiYgd2luZG93LnBlcmZvcm1hbmNlICYmIHdpbmRvdy5wZXJmb3JtYW5jZS5ub3dcbiAgPyB3aW5kb3cucGVyZm9ybWFuY2VcbiAgOiBEYXRlO1xuXG52YXIgX2tleSA9IGdlbktleSgpO1xuXG5mdW5jdGlvbiBnZW5LZXkgKCkge1xuICByZXR1cm4gVGltZS5ub3coKS50b0ZpeGVkKDMpXG59XG5cbmZ1bmN0aW9uIGdldFN0YXRlS2V5ICgpIHtcbiAgcmV0dXJuIF9rZXlcbn1cblxuZnVuY3Rpb24gc2V0U3RhdGVLZXkgKGtleSkge1xuICBfa2V5ID0ga2V5O1xufVxuXG5mdW5jdGlvbiBwdXNoU3RhdGUgKHVybCwgcmVwbGFjZSkge1xuICBzYXZlU2Nyb2xsUG9zaXRpb24oKTtcbiAgLy8gdHJ5Li4uY2F0Y2ggdGhlIHB1c2hTdGF0ZSBjYWxsIHRvIGdldCBhcm91bmQgU2FmYXJpXG4gIC8vIERPTSBFeGNlcHRpb24gMTggd2hlcmUgaXQgbGltaXRzIHRvIDEwMCBwdXNoU3RhdGUgY2FsbHNcbiAgdmFyIGhpc3RvcnkgPSB3aW5kb3cuaGlzdG9yeTtcbiAgdHJ5IHtcbiAgICBpZiAocmVwbGFjZSkge1xuICAgICAgaGlzdG9yeS5yZXBsYWNlU3RhdGUoeyBrZXk6IF9rZXkgfSwgJycsIHVybCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIF9rZXkgPSBnZW5LZXkoKTtcbiAgICAgIGhpc3RvcnkucHVzaFN0YXRlKHsga2V5OiBfa2V5IH0sICcnLCB1cmwpO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIHdpbmRvdy5sb2NhdGlvbltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ2Fzc2lnbiddKHVybCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVwbGFjZVN0YXRlICh1cmwpIHtcbiAgcHVzaFN0YXRlKHVybCwgdHJ1ZSk7XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBydW5RdWV1ZSAocXVldWUsIGZuLCBjYikge1xuICB2YXIgc3RlcCA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgIGlmIChpbmRleCA+PSBxdWV1ZS5sZW5ndGgpIHtcbiAgICAgIGNiKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChxdWV1ZVtpbmRleF0pIHtcbiAgICAgICAgZm4ocXVldWVbaW5kZXhdLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc3RlcChpbmRleCArIDEpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0ZXAoaW5kZXggKyAxKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIHN0ZXAoMCk7XG59XG5cbi8qICAqL1xuXG52YXIgSGlzdG9yeSA9IGZ1bmN0aW9uIEhpc3RvcnkgKHJvdXRlciwgYmFzZSkge1xuICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgdGhpcy5iYXNlID0gbm9ybWFsaXplQmFzZShiYXNlKTtcbiAgLy8gc3RhcnQgd2l0aCBhIHJvdXRlIG9iamVjdCB0aGF0IHN0YW5kcyBmb3IgXCJub3doZXJlXCJcbiAgdGhpcy5jdXJyZW50ID0gU1RBUlQ7XG4gIHRoaXMucGVuZGluZyA9IG51bGw7XG4gIHRoaXMucmVhZHkgPSBmYWxzZTtcbiAgdGhpcy5yZWFkeUNicyA9IFtdO1xuICB0aGlzLnJlYWR5RXJyb3JDYnMgPSBbXTtcbiAgdGhpcy5lcnJvckNicyA9IFtdO1xufTtcblxuSGlzdG9yeS5wcm90b3R5cGUubGlzdGVuID0gZnVuY3Rpb24gbGlzdGVuIChjYikge1xuICB0aGlzLmNiID0gY2I7XG59O1xuXG5IaXN0b3J5LnByb3RvdHlwZS5vblJlYWR5ID0gZnVuY3Rpb24gb25SZWFkeSAoY2IsIGVycm9yQ2IpIHtcbiAgaWYgKHRoaXMucmVhZHkpIHtcbiAgICBjYigpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMucmVhZHlDYnMucHVzaChjYik7XG4gICAgaWYgKGVycm9yQ2IpIHtcbiAgICAgIHRoaXMucmVhZHlFcnJvckNicy5wdXNoKGVycm9yQ2IpO1xuICAgIH1cbiAgfVxufTtcblxuSGlzdG9yeS5wcm90b3R5cGUub25FcnJvciA9IGZ1bmN0aW9uIG9uRXJyb3IgKGVycm9yQ2IpIHtcbiAgdGhpcy5lcnJvckNicy5wdXNoKGVycm9yQ2IpO1xufTtcblxuSGlzdG9yeS5wcm90b3R5cGUudHJhbnNpdGlvblRvID0gZnVuY3Rpb24gdHJhbnNpdGlvblRvIChsb2NhdGlvbiwgb25Db21wbGV0ZSwgb25BYm9ydCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIHZhciByb3V0ZSA9IHRoaXMucm91dGVyLm1hdGNoKGxvY2F0aW9uLCB0aGlzLmN1cnJlbnQpO1xuICB0aGlzLmNvbmZpcm1UcmFuc2l0aW9uKHJvdXRlLCBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcyQxLnVwZGF0ZVJvdXRlKHJvdXRlKTtcbiAgICBvbkNvbXBsZXRlICYmIG9uQ29tcGxldGUocm91dGUpO1xuICAgIHRoaXMkMS5lbnN1cmVVUkwoKTtcblxuICAgIC8vIGZpcmUgcmVhZHkgY2JzIG9uY2VcbiAgICBpZiAoIXRoaXMkMS5yZWFkeSkge1xuICAgICAgdGhpcyQxLnJlYWR5ID0gdHJ1ZTtcbiAgICAgIHRoaXMkMS5yZWFkeUNicy5mb3JFYWNoKGZ1bmN0aW9uIChjYikgeyBjYihyb3V0ZSk7IH0pO1xuICAgIH1cbiAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgIGlmIChvbkFib3J0KSB7XG4gICAgICBvbkFib3J0KGVycik7XG4gICAgfVxuICAgIGlmIChlcnIgJiYgIXRoaXMkMS5yZWFkeSkge1xuICAgICAgdGhpcyQxLnJlYWR5ID0gdHJ1ZTtcbiAgICAgIHRoaXMkMS5yZWFkeUVycm9yQ2JzLmZvckVhY2goZnVuY3Rpb24gKGNiKSB7IGNiKGVycik7IH0pO1xuICAgIH1cbiAgfSk7XG59O1xuXG5IaXN0b3J5LnByb3RvdHlwZS5jb25maXJtVHJhbnNpdGlvbiA9IGZ1bmN0aW9uIGNvbmZpcm1UcmFuc2l0aW9uIChyb3V0ZSwgb25Db21wbGV0ZSwgb25BYm9ydCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIHZhciBjdXJyZW50ID0gdGhpcy5jdXJyZW50O1xuICB2YXIgYWJvcnQgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICBpZiAodGhpcyQxLmVycm9yQ2JzLmxlbmd0aCkge1xuICAgICAgICB0aGlzJDEuZXJyb3JDYnMuZm9yRWFjaChmdW5jdGlvbiAoY2IpIHsgY2IoZXJyKTsgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3YXJuKGZhbHNlLCAndW5jYXVnaHQgZXJyb3IgZHVyaW5nIHJvdXRlIG5hdmlnYXRpb246Jyk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIH1cbiAgICB9XG4gICAgb25BYm9ydCAmJiBvbkFib3J0KGVycik7XG4gIH07XG4gIGlmIChcbiAgICBpc1NhbWVSb3V0ZShyb3V0ZSwgY3VycmVudCkgJiZcbiAgICAvLyBpbiB0aGUgY2FzZSB0aGUgcm91dGUgbWFwIGhhcyBiZWVuIGR5bmFtaWNhbGx5IGFwcGVuZGVkIHRvXG4gICAgcm91dGUubWF0Y2hlZC5sZW5ndGggPT09IGN1cnJlbnQubWF0Y2hlZC5sZW5ndGhcbiAgKSB7XG4gICAgdGhpcy5lbnN1cmVVUkwoKTtcbiAgICByZXR1cm4gYWJvcnQoKVxuICB9XG5cbiAgdmFyIHJlZiA9IHJlc29sdmVRdWV1ZSh0aGlzLmN1cnJlbnQubWF0Y2hlZCwgcm91dGUubWF0Y2hlZCk7XG4gICAgdmFyIHVwZGF0ZWQgPSByZWYudXBkYXRlZDtcbiAgICB2YXIgZGVhY3RpdmF0ZWQgPSByZWYuZGVhY3RpdmF0ZWQ7XG4gICAgdmFyIGFjdGl2YXRlZCA9IHJlZi5hY3RpdmF0ZWQ7XG5cbiAgdmFyIHF1ZXVlID0gW10uY29uY2F0KFxuICAgIC8vIGluLWNvbXBvbmVudCBsZWF2ZSBndWFyZHNcbiAgICBleHRyYWN0TGVhdmVHdWFyZHMoZGVhY3RpdmF0ZWQpLFxuICAgIC8vIGdsb2JhbCBiZWZvcmUgaG9va3NcbiAgICB0aGlzLnJvdXRlci5iZWZvcmVIb29rcyxcbiAgICAvLyBpbi1jb21wb25lbnQgdXBkYXRlIGhvb2tzXG4gICAgZXh0cmFjdFVwZGF0ZUhvb2tzKHVwZGF0ZWQpLFxuICAgIC8vIGluLWNvbmZpZyBlbnRlciBndWFyZHNcbiAgICBhY3RpdmF0ZWQubWFwKGZ1bmN0aW9uIChtKSB7IHJldHVybiBtLmJlZm9yZUVudGVyOyB9KSxcbiAgICAvLyBhc3luYyBjb21wb25lbnRzXG4gICAgcmVzb2x2ZUFzeW5jQ29tcG9uZW50cyhhY3RpdmF0ZWQpXG4gICk7XG5cbiAgdGhpcy5wZW5kaW5nID0gcm91dGU7XG4gIHZhciBpdGVyYXRvciA9IGZ1bmN0aW9uIChob29rLCBuZXh0KSB7XG4gICAgaWYgKHRoaXMkMS5wZW5kaW5nICE9PSByb3V0ZSkge1xuICAgICAgcmV0dXJuIGFib3J0KClcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGhvb2socm91dGUsIGN1cnJlbnQsIGZ1bmN0aW9uICh0bykge1xuICAgICAgICBpZiAodG8gPT09IGZhbHNlIHx8IHRvIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAvLyBuZXh0KGZhbHNlKSAtPiBhYm9ydCBuYXZpZ2F0aW9uLCBlbnN1cmUgY3VycmVudCBVUkxcbiAgICAgICAgICB0aGlzJDEuZW5zdXJlVVJMKHRydWUpO1xuICAgICAgICAgIGFib3J0KHRvKTtcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICB0eXBlb2YgdG8gPT09ICdzdHJpbmcnIHx8XG4gICAgICAgICAgKHR5cGVvZiB0byA9PT0gJ29iamVjdCcgJiYgKFxuICAgICAgICAgICAgdHlwZW9mIHRvLnBhdGggPT09ICdzdHJpbmcnIHx8XG4gICAgICAgICAgICB0eXBlb2YgdG8ubmFtZSA9PT0gJ3N0cmluZydcbiAgICAgICAgICApKVxuICAgICAgICApIHtcbiAgICAgICAgICAvLyBuZXh0KCcvJykgb3IgbmV4dCh7IHBhdGg6ICcvJyB9KSAtPiByZWRpcmVjdFxuICAgICAgICAgIGFib3J0KCk7XG4gICAgICAgICAgaWYgKHR5cGVvZiB0byA9PT0gJ29iamVjdCcgJiYgdG8ucmVwbGFjZSkge1xuICAgICAgICAgICAgdGhpcyQxLnJlcGxhY2UodG8pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzJDEucHVzaCh0byk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGNvbmZpcm0gdHJhbnNpdGlvbiBhbmQgcGFzcyBvbiB0aGUgdmFsdWVcbiAgICAgICAgICBuZXh0KHRvKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgYWJvcnQoZSk7XG4gICAgfVxuICB9O1xuXG4gIHJ1blF1ZXVlKHF1ZXVlLCBpdGVyYXRvciwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBwb3N0RW50ZXJDYnMgPSBbXTtcbiAgICB2YXIgaXNWYWxpZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMkMS5jdXJyZW50ID09PSByb3V0ZTsgfTtcbiAgICAvLyB3YWl0IHVudGlsIGFzeW5jIGNvbXBvbmVudHMgYXJlIHJlc29sdmVkIGJlZm9yZVxuICAgIC8vIGV4dHJhY3RpbmcgaW4tY29tcG9uZW50IGVudGVyIGd1YXJkc1xuICAgIHZhciBlbnRlckd1YXJkcyA9IGV4dHJhY3RFbnRlckd1YXJkcyhhY3RpdmF0ZWQsIHBvc3RFbnRlckNicywgaXNWYWxpZCk7XG4gICAgdmFyIHF1ZXVlID0gZW50ZXJHdWFyZHMuY29uY2F0KHRoaXMkMS5yb3V0ZXIucmVzb2x2ZUhvb2tzKTtcbiAgICBydW5RdWV1ZShxdWV1ZSwgaXRlcmF0b3IsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0aGlzJDEucGVuZGluZyAhPT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGFib3J0KClcbiAgICAgIH1cbiAgICAgIHRoaXMkMS5wZW5kaW5nID0gbnVsbDtcbiAgICAgIG9uQ29tcGxldGUocm91dGUpO1xuICAgICAgaWYgKHRoaXMkMS5yb3V0ZXIuYXBwKSB7XG4gICAgICAgIHRoaXMkMS5yb3V0ZXIuYXBwLiRuZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcG9zdEVudGVyQ2JzLmZvckVhY2goZnVuY3Rpb24gKGNiKSB7IGNiKCk7IH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG5IaXN0b3J5LnByb3RvdHlwZS51cGRhdGVSb3V0ZSA9IGZ1bmN0aW9uIHVwZGF0ZVJvdXRlIChyb3V0ZSkge1xuICB2YXIgcHJldiA9IHRoaXMuY3VycmVudDtcbiAgdGhpcy5jdXJyZW50ID0gcm91dGU7XG4gIHRoaXMuY2IgJiYgdGhpcy5jYihyb3V0ZSk7XG4gIHRoaXMucm91dGVyLmFmdGVySG9va3MuZm9yRWFjaChmdW5jdGlvbiAoaG9vaykge1xuICAgIGhvb2sgJiYgaG9vayhyb3V0ZSwgcHJldik7XG4gIH0pO1xufTtcblxuZnVuY3Rpb24gbm9ybWFsaXplQmFzZSAoYmFzZSkge1xuICBpZiAoIWJhc2UpIHtcbiAgICBpZiAoaW5Ccm93c2VyKSB7XG4gICAgICAvLyByZXNwZWN0IDxiYXNlPiB0YWdcbiAgICAgIHZhciBiYXNlRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdiYXNlJyk7XG4gICAgICBiYXNlID0gKGJhc2VFbCAmJiBiYXNlRWwuZ2V0QXR0cmlidXRlKCdocmVmJykpIHx8ICcvJztcbiAgICB9IGVsc2Uge1xuICAgICAgYmFzZSA9ICcvJztcbiAgICB9XG4gIH1cbiAgLy8gbWFrZSBzdXJlIHRoZXJlJ3MgdGhlIHN0YXJ0aW5nIHNsYXNoXG4gIGlmIChiYXNlLmNoYXJBdCgwKSAhPT0gJy8nKSB7XG4gICAgYmFzZSA9ICcvJyArIGJhc2U7XG4gIH1cbiAgLy8gcmVtb3ZlIHRyYWlsaW5nIHNsYXNoXG4gIHJldHVybiBiYXNlLnJlcGxhY2UoL1xcLyQvLCAnJylcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZVF1ZXVlIChcbiAgY3VycmVudCxcbiAgbmV4dFxuKSB7XG4gIHZhciBpO1xuICB2YXIgbWF4ID0gTWF0aC5tYXgoY3VycmVudC5sZW5ndGgsIG5leHQubGVuZ3RoKTtcbiAgZm9yIChpID0gMDsgaSA8IG1heDsgaSsrKSB7XG4gICAgaWYgKGN1cnJlbnRbaV0gIT09IG5leHRbaV0pIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG4gIHJldHVybiB7XG4gICAgdXBkYXRlZDogbmV4dC5zbGljZSgwLCBpKSxcbiAgICBhY3RpdmF0ZWQ6IG5leHQuc2xpY2UoaSksXG4gICAgZGVhY3RpdmF0ZWQ6IGN1cnJlbnQuc2xpY2UoaSlcbiAgfVxufVxuXG5mdW5jdGlvbiBleHRyYWN0R3VhcmRzIChcbiAgcmVjb3JkcyxcbiAgbmFtZSxcbiAgYmluZCxcbiAgcmV2ZXJzZVxuKSB7XG4gIHZhciBndWFyZHMgPSBmbGF0TWFwQ29tcG9uZW50cyhyZWNvcmRzLCBmdW5jdGlvbiAoZGVmLCBpbnN0YW5jZSwgbWF0Y2gsIGtleSkge1xuICAgIHZhciBndWFyZCA9IGV4dHJhY3RHdWFyZChkZWYsIG5hbWUpO1xuICAgIGlmIChndWFyZCkge1xuICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoZ3VhcmQpXG4gICAgICAgID8gZ3VhcmQubWFwKGZ1bmN0aW9uIChndWFyZCkgeyByZXR1cm4gYmluZChndWFyZCwgaW5zdGFuY2UsIG1hdGNoLCBrZXkpOyB9KVxuICAgICAgICA6IGJpbmQoZ3VhcmQsIGluc3RhbmNlLCBtYXRjaCwga2V5KVxuICAgIH1cbiAgfSk7XG4gIHJldHVybiBmbGF0dGVuKHJldmVyc2UgPyBndWFyZHMucmV2ZXJzZSgpIDogZ3VhcmRzKVxufVxuXG5mdW5jdGlvbiBleHRyYWN0R3VhcmQgKFxuICBkZWYsXG4gIGtleVxuKSB7XG4gIGlmICh0eXBlb2YgZGVmICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gZXh0ZW5kIG5vdyBzbyB0aGF0IGdsb2JhbCBtaXhpbnMgYXJlIGFwcGxpZWQuXG4gICAgZGVmID0gX1Z1ZS5leHRlbmQoZGVmKTtcbiAgfVxuICByZXR1cm4gZGVmLm9wdGlvbnNba2V5XVxufVxuXG5mdW5jdGlvbiBleHRyYWN0TGVhdmVHdWFyZHMgKGRlYWN0aXZhdGVkKSB7XG4gIHJldHVybiBleHRyYWN0R3VhcmRzKGRlYWN0aXZhdGVkLCAnYmVmb3JlUm91dGVMZWF2ZScsIGJpbmRHdWFyZCwgdHJ1ZSlcbn1cblxuZnVuY3Rpb24gZXh0cmFjdFVwZGF0ZUhvb2tzICh1cGRhdGVkKSB7XG4gIHJldHVybiBleHRyYWN0R3VhcmRzKHVwZGF0ZWQsICdiZWZvcmVSb3V0ZVVwZGF0ZScsIGJpbmRHdWFyZClcbn1cblxuZnVuY3Rpb24gYmluZEd1YXJkIChndWFyZCwgaW5zdGFuY2UpIHtcbiAgaWYgKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGJvdW5kUm91dGVHdWFyZCAoKSB7XG4gICAgICByZXR1cm4gZ3VhcmQuYXBwbHkoaW5zdGFuY2UsIGFyZ3VtZW50cylcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZXh0cmFjdEVudGVyR3VhcmRzIChcbiAgYWN0aXZhdGVkLFxuICBjYnMsXG4gIGlzVmFsaWRcbikge1xuICByZXR1cm4gZXh0cmFjdEd1YXJkcyhhY3RpdmF0ZWQsICdiZWZvcmVSb3V0ZUVudGVyJywgZnVuY3Rpb24gKGd1YXJkLCBfLCBtYXRjaCwga2V5KSB7XG4gICAgcmV0dXJuIGJpbmRFbnRlckd1YXJkKGd1YXJkLCBtYXRjaCwga2V5LCBjYnMsIGlzVmFsaWQpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGJpbmRFbnRlckd1YXJkIChcbiAgZ3VhcmQsXG4gIG1hdGNoLFxuICBrZXksXG4gIGNicyxcbiAgaXNWYWxpZFxuKSB7XG4gIHJldHVybiBmdW5jdGlvbiByb3V0ZUVudGVyR3VhcmQgKHRvLCBmcm9tLCBuZXh0KSB7XG4gICAgcmV0dXJuIGd1YXJkKHRvLCBmcm9tLCBmdW5jdGlvbiAoY2IpIHtcbiAgICAgIG5leHQoY2IpO1xuICAgICAgaWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjYnMucHVzaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gIzc1MFxuICAgICAgICAgIC8vIGlmIGEgcm91dGVyLXZpZXcgaXMgd3JhcHBlZCB3aXRoIGFuIG91dC1pbiB0cmFuc2l0aW9uLFxuICAgICAgICAgIC8vIHRoZSBpbnN0YW5jZSBtYXkgbm90IGhhdmUgYmVlbiByZWdpc3RlcmVkIGF0IHRoaXMgdGltZS5cbiAgICAgICAgICAvLyB3ZSB3aWxsIG5lZWQgdG8gcG9sbCBmb3IgcmVnaXN0cmF0aW9uIHVudGlsIGN1cnJlbnQgcm91dGVcbiAgICAgICAgICAvLyBpcyBubyBsb25nZXIgdmFsaWQuXG4gICAgICAgICAgcG9sbChjYiwgbWF0Y2guaW5zdGFuY2VzLCBrZXksIGlzVmFsaWQpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmZ1bmN0aW9uIHBvbGwgKFxuICBjYiwgLy8gc29tZWhvdyBmbG93IGNhbm5vdCBpbmZlciB0aGlzIGlzIGEgZnVuY3Rpb25cbiAgaW5zdGFuY2VzLFxuICBrZXksXG4gIGlzVmFsaWRcbikge1xuICBpZiAoaW5zdGFuY2VzW2tleV0pIHtcbiAgICBjYihpbnN0YW5jZXNba2V5XSk7XG4gIH0gZWxzZSBpZiAoaXNWYWxpZCgpKSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBwb2xsKGNiLCBpbnN0YW5jZXMsIGtleSwgaXNWYWxpZCk7XG4gICAgfSwgMTYpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVBc3luY0NvbXBvbmVudHMgKG1hdGNoZWQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0bywgZnJvbSwgbmV4dCkge1xuICAgIHZhciBoYXNBc3luYyA9IGZhbHNlO1xuICAgIHZhciBwZW5kaW5nID0gMDtcbiAgICB2YXIgZXJyb3IgPSBudWxsO1xuXG4gICAgZmxhdE1hcENvbXBvbmVudHMobWF0Y2hlZCwgZnVuY3Rpb24gKGRlZiwgXywgbWF0Y2gsIGtleSkge1xuICAgICAgLy8gaWYgaXQncyBhIGZ1bmN0aW9uIGFuZCBkb2Vzbid0IGhhdmUgY2lkIGF0dGFjaGVkLFxuICAgICAgLy8gYXNzdW1lIGl0J3MgYW4gYXN5bmMgY29tcG9uZW50IHJlc29sdmUgZnVuY3Rpb24uXG4gICAgICAvLyB3ZSBhcmUgbm90IHVzaW5nIFZ1ZSdzIGRlZmF1bHQgYXN5bmMgcmVzb2x2aW5nIG1lY2hhbmlzbSBiZWNhdXNlXG4gICAgICAvLyB3ZSB3YW50IHRvIGhhbHQgdGhlIG5hdmlnYXRpb24gdW50aWwgdGhlIGluY29taW5nIGNvbXBvbmVudCBoYXMgYmVlblxuICAgICAgLy8gcmVzb2x2ZWQuXG4gICAgICBpZiAodHlwZW9mIGRlZiA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWYuY2lkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaGFzQXN5bmMgPSB0cnVlO1xuICAgICAgICBwZW5kaW5nKys7XG5cbiAgICAgICAgdmFyIHJlc29sdmUgPSBvbmNlKGZ1bmN0aW9uIChyZXNvbHZlZERlZikge1xuICAgICAgICAgIC8vIHNhdmUgcmVzb2x2ZWQgb24gYXN5bmMgZmFjdG9yeSBpbiBjYXNlIGl0J3MgdXNlZCBlbHNld2hlcmVcbiAgICAgICAgICBkZWYucmVzb2x2ZWQgPSB0eXBlb2YgcmVzb2x2ZWREZWYgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgID8gcmVzb2x2ZWREZWZcbiAgICAgICAgICAgIDogX1Z1ZS5leHRlbmQocmVzb2x2ZWREZWYpO1xuICAgICAgICAgIG1hdGNoLmNvbXBvbmVudHNba2V5XSA9IHJlc29sdmVkRGVmO1xuICAgICAgICAgIHBlbmRpbmctLTtcbiAgICAgICAgICBpZiAocGVuZGluZyA8PSAwKSB7XG4gICAgICAgICAgICBuZXh0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgcmVqZWN0ID0gb25jZShmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgICAgdmFyIG1zZyA9IFwiRmFpbGVkIHRvIHJlc29sdmUgYXN5bmMgY29tcG9uZW50IFwiICsga2V5ICsgXCI6IFwiICsgcmVhc29uO1xuICAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihmYWxzZSwgbXNnKTtcbiAgICAgICAgICBpZiAoIWVycm9yKSB7XG4gICAgICAgICAgICBlcnJvciA9IHJlYXNvbiBpbnN0YW5jZW9mIEVycm9yXG4gICAgICAgICAgICAgID8gcmVhc29uXG4gICAgICAgICAgICAgIDogbmV3IEVycm9yKG1zZyk7XG4gICAgICAgICAgICBuZXh0KGVycm9yKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciByZXM7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmVzID0gZGVmKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlcykge1xuICAgICAgICAgIGlmICh0eXBlb2YgcmVzLnRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJlcy50aGVuKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIG5ldyBzeW50YXggaW4gVnVlIDIuM1xuICAgICAgICAgICAgdmFyIGNvbXAgPSByZXMuY29tcG9uZW50O1xuICAgICAgICAgICAgaWYgKGNvbXAgJiYgdHlwZW9mIGNvbXAudGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICBjb21wLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICghaGFzQXN5bmMpIHsgbmV4dCgpOyB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZmxhdE1hcENvbXBvbmVudHMgKFxuICBtYXRjaGVkLFxuICBmblxuKSB7XG4gIHJldHVybiBmbGF0dGVuKG1hdGNoZWQubWFwKGZ1bmN0aW9uIChtKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG0uY29tcG9uZW50cykubWFwKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGZuKFxuICAgICAgbS5jb21wb25lbnRzW2tleV0sXG4gICAgICBtLmluc3RhbmNlc1trZXldLFxuICAgICAgbSwga2V5XG4gICAgKTsgfSlcbiAgfSkpXG59XG5cbmZ1bmN0aW9uIGZsYXR0ZW4gKGFycikge1xuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShbXSwgYXJyKVxufVxuXG4vLyBpbiBXZWJwYWNrIDIsIHJlcXVpcmUuZW5zdXJlIG5vdyBhbHNvIHJldHVybnMgYSBQcm9taXNlXG4vLyBzbyB0aGUgcmVzb2x2ZS9yZWplY3QgZnVuY3Rpb25zIG1heSBnZXQgY2FsbGVkIGFuIGV4dHJhIHRpbWVcbi8vIGlmIHRoZSB1c2VyIHVzZXMgYW4gYXJyb3cgZnVuY3Rpb24gc2hvcnRoYW5kIHRoYXQgaGFwcGVucyB0b1xuLy8gcmV0dXJuIHRoYXQgUHJvbWlzZS5cbmZ1bmN0aW9uIG9uY2UgKGZuKSB7XG4gIHZhciBjYWxsZWQgPSBmYWxzZTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoY2FsbGVkKSB7IHJldHVybiB9XG4gICAgY2FsbGVkID0gdHJ1ZTtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICB9XG59XG5cbi8qICAqL1xuXG5cbnZhciBIVE1MNUhpc3RvcnkgPSAoZnVuY3Rpb24gKEhpc3RvcnkkJDEpIHtcbiAgZnVuY3Rpb24gSFRNTDVIaXN0b3J5IChyb3V0ZXIsIGJhc2UpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgIEhpc3RvcnkkJDEuY2FsbCh0aGlzLCByb3V0ZXIsIGJhc2UpO1xuXG4gICAgdmFyIGV4cGVjdFNjcm9sbCA9IHJvdXRlci5vcHRpb25zLnNjcm9sbEJlaGF2aW9yO1xuXG4gICAgaWYgKGV4cGVjdFNjcm9sbCkge1xuICAgICAgc2V0dXBTY3JvbGwoKTtcbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgdGhpcyQxLnRyYW5zaXRpb25UbyhnZXRMb2NhdGlvbih0aGlzJDEuYmFzZSksIGZ1bmN0aW9uIChyb3V0ZSkge1xuICAgICAgICBpZiAoZXhwZWN0U2Nyb2xsKSB7XG4gICAgICAgICAgaGFuZGxlU2Nyb2xsKHJvdXRlciwgcm91dGUsIHRoaXMkMS5jdXJyZW50LCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBpZiAoIEhpc3RvcnkkJDEgKSBIVE1MNUhpc3RvcnkuX19wcm90b19fID0gSGlzdG9yeSQkMTtcbiAgSFRNTDVIaXN0b3J5LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEhpc3RvcnkkJDEgJiYgSGlzdG9yeSQkMS5wcm90b3R5cGUgKTtcbiAgSFRNTDVIaXN0b3J5LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEhUTUw1SGlzdG9yeTtcblxuICBIVE1MNUhpc3RvcnkucHJvdG90eXBlLmdvID0gZnVuY3Rpb24gZ28gKG4pIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5nbyhuKTtcbiAgfTtcblxuICBIVE1MNUhpc3RvcnkucHJvdG90eXBlLnB1c2ggPSBmdW5jdGlvbiBwdXNoIChsb2NhdGlvbiwgb25Db21wbGV0ZSwgb25BYm9ydCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgdmFyIHJlZiA9IHRoaXM7XG4gICAgdmFyIGZyb21Sb3V0ZSA9IHJlZi5jdXJyZW50O1xuICAgIHRoaXMudHJhbnNpdGlvblRvKGxvY2F0aW9uLCBmdW5jdGlvbiAocm91dGUpIHtcbiAgICAgIHB1c2hTdGF0ZShjbGVhblBhdGgodGhpcyQxLmJhc2UgKyByb3V0ZS5mdWxsUGF0aCkpO1xuICAgICAgaGFuZGxlU2Nyb2xsKHRoaXMkMS5yb3V0ZXIsIHJvdXRlLCBmcm9tUm91dGUsIGZhbHNlKTtcbiAgICAgIG9uQ29tcGxldGUgJiYgb25Db21wbGV0ZShyb3V0ZSk7XG4gICAgfSwgb25BYm9ydCk7XG4gIH07XG5cbiAgSFRNTDVIaXN0b3J5LnByb3RvdHlwZS5yZXBsYWNlID0gZnVuY3Rpb24gcmVwbGFjZSAobG9jYXRpb24sIG9uQ29tcGxldGUsIG9uQWJvcnQpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgIHZhciByZWYgPSB0aGlzO1xuICAgIHZhciBmcm9tUm91dGUgPSByZWYuY3VycmVudDtcbiAgICB0aGlzLnRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgICByZXBsYWNlU3RhdGUoY2xlYW5QYXRoKHRoaXMkMS5iYXNlICsgcm91dGUuZnVsbFBhdGgpKTtcbiAgICAgIGhhbmRsZVNjcm9sbCh0aGlzJDEucm91dGVyLCByb3V0ZSwgZnJvbVJvdXRlLCBmYWxzZSk7XG4gICAgICBvbkNvbXBsZXRlICYmIG9uQ29tcGxldGUocm91dGUpO1xuICAgIH0sIG9uQWJvcnQpO1xuICB9O1xuXG4gIEhUTUw1SGlzdG9yeS5wcm90b3R5cGUuZW5zdXJlVVJMID0gZnVuY3Rpb24gZW5zdXJlVVJMIChwdXNoKSB7XG4gICAgaWYgKGdldExvY2F0aW9uKHRoaXMuYmFzZSkgIT09IHRoaXMuY3VycmVudC5mdWxsUGF0aCkge1xuICAgICAgdmFyIGN1cnJlbnQgPSBjbGVhblBhdGgodGhpcy5iYXNlICsgdGhpcy5jdXJyZW50LmZ1bGxQYXRoKTtcbiAgICAgIHB1c2ggPyBwdXNoU3RhdGUoY3VycmVudCkgOiByZXBsYWNlU3RhdGUoY3VycmVudCk7XG4gICAgfVxuICB9O1xuXG4gIEhUTUw1SGlzdG9yeS5wcm90b3R5cGUuZ2V0Q3VycmVudExvY2F0aW9uID0gZnVuY3Rpb24gZ2V0Q3VycmVudExvY2F0aW9uICgpIHtcbiAgICByZXR1cm4gZ2V0TG9jYXRpb24odGhpcy5iYXNlKVxuICB9O1xuXG4gIHJldHVybiBIVE1MNUhpc3Rvcnk7XG59KEhpc3RvcnkpKTtcblxuZnVuY3Rpb24gZ2V0TG9jYXRpb24gKGJhc2UpIHtcbiAgdmFyIHBhdGggPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG4gIGlmIChiYXNlICYmIHBhdGguaW5kZXhPZihiYXNlKSA9PT0gMCkge1xuICAgIHBhdGggPSBwYXRoLnNsaWNlKGJhc2UubGVuZ3RoKTtcbiAgfVxuICByZXR1cm4gKHBhdGggfHwgJy8nKSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2ggKyB3aW5kb3cubG9jYXRpb24uaGFzaFxufVxuXG4vKiAgKi9cblxuXG52YXIgSGFzaEhpc3RvcnkgPSAoZnVuY3Rpb24gKEhpc3RvcnkkJDEpIHtcbiAgZnVuY3Rpb24gSGFzaEhpc3RvcnkgKHJvdXRlciwgYmFzZSwgZmFsbGJhY2spIHtcbiAgICBIaXN0b3J5JCQxLmNhbGwodGhpcywgcm91dGVyLCBiYXNlKTtcbiAgICAvLyBjaGVjayBoaXN0b3J5IGZhbGxiYWNrIGRlZXBsaW5raW5nXG4gICAgaWYgKGZhbGxiYWNrICYmIGNoZWNrRmFsbGJhY2sodGhpcy5iYXNlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGVuc3VyZVNsYXNoKCk7XG4gIH1cblxuICBpZiAoIEhpc3RvcnkkJDEgKSBIYXNoSGlzdG9yeS5fX3Byb3RvX18gPSBIaXN0b3J5JCQxO1xuICBIYXNoSGlzdG9yeS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBIaXN0b3J5JCQxICYmIEhpc3RvcnkkJDEucHJvdG90eXBlICk7XG4gIEhhc2hIaXN0b3J5LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEhhc2hIaXN0b3J5O1xuXG4gIC8vIHRoaXMgaXMgZGVsYXllZCB1bnRpbCB0aGUgYXBwIG1vdW50c1xuICAvLyB0byBhdm9pZCB0aGUgaGFzaGNoYW5nZSBsaXN0ZW5lciBiZWluZyBmaXJlZCB0b28gZWFybHlcbiAgSGFzaEhpc3RvcnkucHJvdG90eXBlLnNldHVwTGlzdGVuZXJzID0gZnVuY3Rpb24gc2V0dXBMaXN0ZW5lcnMgKCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIWVuc3VyZVNsYXNoKCkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB0aGlzJDEudHJhbnNpdGlvblRvKGdldEhhc2goKSwgZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgICAgIHJlcGxhY2VIYXNoKHJvdXRlLmZ1bGxQYXRoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIEhhc2hIaXN0b3J5LnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24gcHVzaCAobG9jYXRpb24sIG9uQ29tcGxldGUsIG9uQWJvcnQpIHtcbiAgICB0aGlzLnRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgICBwdXNoSGFzaChyb3V0ZS5mdWxsUGF0aCk7XG4gICAgICBvbkNvbXBsZXRlICYmIG9uQ29tcGxldGUocm91dGUpO1xuICAgIH0sIG9uQWJvcnQpO1xuICB9O1xuXG4gIEhhc2hIaXN0b3J5LnByb3RvdHlwZS5yZXBsYWNlID0gZnVuY3Rpb24gcmVwbGFjZSAobG9jYXRpb24sIG9uQ29tcGxldGUsIG9uQWJvcnQpIHtcbiAgICB0aGlzLnRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgICByZXBsYWNlSGFzaChyb3V0ZS5mdWxsUGF0aCk7XG4gICAgICBvbkNvbXBsZXRlICYmIG9uQ29tcGxldGUocm91dGUpO1xuICAgIH0sIG9uQWJvcnQpO1xuICB9O1xuXG4gIEhhc2hIaXN0b3J5LnByb3RvdHlwZS5nbyA9IGZ1bmN0aW9uIGdvIChuKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuZ28obik7XG4gIH07XG5cbiAgSGFzaEhpc3RvcnkucHJvdG90eXBlLmVuc3VyZVVSTCA9IGZ1bmN0aW9uIGVuc3VyZVVSTCAocHVzaCkge1xuICAgIHZhciBjdXJyZW50ID0gdGhpcy5jdXJyZW50LmZ1bGxQYXRoO1xuICAgIGlmIChnZXRIYXNoKCkgIT09IGN1cnJlbnQpIHtcbiAgICAgIHB1c2ggPyBwdXNoSGFzaChjdXJyZW50KSA6IHJlcGxhY2VIYXNoKGN1cnJlbnQpO1xuICAgIH1cbiAgfTtcblxuICBIYXNoSGlzdG9yeS5wcm90b3R5cGUuZ2V0Q3VycmVudExvY2F0aW9uID0gZnVuY3Rpb24gZ2V0Q3VycmVudExvY2F0aW9uICgpIHtcbiAgICByZXR1cm4gZ2V0SGFzaCgpXG4gIH07XG5cbiAgcmV0dXJuIEhhc2hIaXN0b3J5O1xufShIaXN0b3J5KSk7XG5cbmZ1bmN0aW9uIGNoZWNrRmFsbGJhY2sgKGJhc2UpIHtcbiAgdmFyIGxvY2F0aW9uID0gZ2V0TG9jYXRpb24oYmFzZSk7XG4gIGlmICghL15cXC8jLy50ZXN0KGxvY2F0aW9uKSkge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKFxuICAgICAgY2xlYW5QYXRoKGJhc2UgKyAnLyMnICsgbG9jYXRpb24pXG4gICAgKTtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG59XG5cbmZ1bmN0aW9uIGVuc3VyZVNsYXNoICgpIHtcbiAgdmFyIHBhdGggPSBnZXRIYXNoKCk7XG4gIGlmIChwYXRoLmNoYXJBdCgwKSA9PT0gJy8nKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuICByZXBsYWNlSGFzaCgnLycgKyBwYXRoKTtcbiAgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIGdldEhhc2ggKCkge1xuICAvLyBXZSBjYW4ndCB1c2Ugd2luZG93LmxvY2F0aW9uLmhhc2ggaGVyZSBiZWNhdXNlIGl0J3Mgbm90XG4gIC8vIGNvbnNpc3RlbnQgYWNyb3NzIGJyb3dzZXJzIC0gRmlyZWZveCB3aWxsIHByZS1kZWNvZGUgaXQhXG4gIHZhciBocmVmID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gIHZhciBpbmRleCA9IGhyZWYuaW5kZXhPZignIycpO1xuICByZXR1cm4gaW5kZXggPT09IC0xID8gJycgOiBocmVmLnNsaWNlKGluZGV4ICsgMSlcbn1cblxuZnVuY3Rpb24gcHVzaEhhc2ggKHBhdGgpIHtcbiAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBwYXRoO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlSGFzaCAocGF0aCkge1xuICB2YXIgaSA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoJyMnKTtcbiAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYuc2xpY2UoMCwgaSA+PSAwID8gaSA6IDApICsgJyMnICsgcGF0aFxuICApO1xufVxuXG4vKiAgKi9cblxuXG52YXIgQWJzdHJhY3RIaXN0b3J5ID0gKGZ1bmN0aW9uIChIaXN0b3J5JCQxKSB7XG4gIGZ1bmN0aW9uIEFic3RyYWN0SGlzdG9yeSAocm91dGVyLCBiYXNlKSB7XG4gICAgSGlzdG9yeSQkMS5jYWxsKHRoaXMsIHJvdXRlciwgYmFzZSk7XG4gICAgdGhpcy5zdGFjayA9IFtdO1xuICAgIHRoaXMuaW5kZXggPSAtMTtcbiAgfVxuXG4gIGlmICggSGlzdG9yeSQkMSApIEFic3RyYWN0SGlzdG9yeS5fX3Byb3RvX18gPSBIaXN0b3J5JCQxO1xuICBBYnN0cmFjdEhpc3RvcnkucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggSGlzdG9yeSQkMSAmJiBIaXN0b3J5JCQxLnByb3RvdHlwZSApO1xuICBBYnN0cmFjdEhpc3RvcnkucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQWJzdHJhY3RIaXN0b3J5O1xuXG4gIEFic3RyYWN0SGlzdG9yeS5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uIHB1c2ggKGxvY2F0aW9uLCBvbkNvbXBsZXRlLCBvbkFib3J0KSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICB0aGlzLnRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgICB0aGlzJDEuc3RhY2sgPSB0aGlzJDEuc3RhY2suc2xpY2UoMCwgdGhpcyQxLmluZGV4ICsgMSkuY29uY2F0KHJvdXRlKTtcbiAgICAgIHRoaXMkMS5pbmRleCsrO1xuICAgICAgb25Db21wbGV0ZSAmJiBvbkNvbXBsZXRlKHJvdXRlKTtcbiAgICB9LCBvbkFib3J0KTtcbiAgfTtcblxuICBBYnN0cmFjdEhpc3RvcnkucHJvdG90eXBlLnJlcGxhY2UgPSBmdW5jdGlvbiByZXBsYWNlIChsb2NhdGlvbiwgb25Db21wbGV0ZSwgb25BYm9ydCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgdGhpcy50cmFuc2l0aW9uVG8obG9jYXRpb24sIGZ1bmN0aW9uIChyb3V0ZSkge1xuICAgICAgdGhpcyQxLnN0YWNrID0gdGhpcyQxLnN0YWNrLnNsaWNlKDAsIHRoaXMkMS5pbmRleCkuY29uY2F0KHJvdXRlKTtcbiAgICAgIG9uQ29tcGxldGUgJiYgb25Db21wbGV0ZShyb3V0ZSk7XG4gICAgfSwgb25BYm9ydCk7XG4gIH07XG5cbiAgQWJzdHJhY3RIaXN0b3J5LnByb3RvdHlwZS5nbyA9IGZ1bmN0aW9uIGdvIChuKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICB2YXIgdGFyZ2V0SW5kZXggPSB0aGlzLmluZGV4ICsgbjtcbiAgICBpZiAodGFyZ2V0SW5kZXggPCAwIHx8IHRhcmdldEluZGV4ID49IHRoaXMuc3RhY2subGVuZ3RoKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdmFyIHJvdXRlID0gdGhpcy5zdGFja1t0YXJnZXRJbmRleF07XG4gICAgdGhpcy5jb25maXJtVHJhbnNpdGlvbihyb3V0ZSwgZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcyQxLmluZGV4ID0gdGFyZ2V0SW5kZXg7XG4gICAgICB0aGlzJDEudXBkYXRlUm91dGUocm91dGUpO1xuICAgIH0pO1xuICB9O1xuXG4gIEFic3RyYWN0SGlzdG9yeS5wcm90b3R5cGUuZ2V0Q3VycmVudExvY2F0aW9uID0gZnVuY3Rpb24gZ2V0Q3VycmVudExvY2F0aW9uICgpIHtcbiAgICB2YXIgY3VycmVudCA9IHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXTtcbiAgICByZXR1cm4gY3VycmVudCA/IGN1cnJlbnQuZnVsbFBhdGggOiAnLydcbiAgfTtcblxuICBBYnN0cmFjdEhpc3RvcnkucHJvdG90eXBlLmVuc3VyZVVSTCA9IGZ1bmN0aW9uIGVuc3VyZVVSTCAoKSB7XG4gICAgLy8gbm9vcFxuICB9O1xuXG4gIHJldHVybiBBYnN0cmFjdEhpc3Rvcnk7XG59KEhpc3RvcnkpKTtcblxuLyogICovXG5cbnZhciBWdWVSb3V0ZXIgPSBmdW5jdGlvbiBWdWVSb3V0ZXIgKG9wdGlvbnMpIHtcbiAgaWYgKCBvcHRpb25zID09PSB2b2lkIDAgKSBvcHRpb25zID0ge307XG5cbiAgdGhpcy5hcHAgPSBudWxsO1xuICB0aGlzLmFwcHMgPSBbXTtcbiAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgdGhpcy5iZWZvcmVIb29rcyA9IFtdO1xuICB0aGlzLnJlc29sdmVIb29rcyA9IFtdO1xuICB0aGlzLmFmdGVySG9va3MgPSBbXTtcbiAgdGhpcy5tYXRjaGVyID0gY3JlYXRlTWF0Y2hlcihvcHRpb25zLnJvdXRlcyB8fCBbXSwgdGhpcyk7XG5cbiAgdmFyIG1vZGUgPSBvcHRpb25zLm1vZGUgfHwgJ2hhc2gnO1xuICB0aGlzLmZhbGxiYWNrID0gbW9kZSA9PT0gJ2hpc3RvcnknICYmICFzdXBwb3J0c1B1c2hTdGF0ZTtcbiAgaWYgKHRoaXMuZmFsbGJhY2spIHtcbiAgICBtb2RlID0gJ2hhc2gnO1xuICB9XG4gIGlmICghaW5Ccm93c2VyKSB7XG4gICAgbW9kZSA9ICdhYnN0cmFjdCc7XG4gIH1cbiAgdGhpcy5tb2RlID0gbW9kZTtcblxuICBzd2l0Y2ggKG1vZGUpIHtcbiAgICBjYXNlICdoaXN0b3J5JzpcbiAgICAgIHRoaXMuaGlzdG9yeSA9IG5ldyBIVE1MNUhpc3RvcnkodGhpcywgb3B0aW9ucy5iYXNlKTtcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnaGFzaCc6XG4gICAgICB0aGlzLmhpc3RvcnkgPSBuZXcgSGFzaEhpc3RvcnkodGhpcywgb3B0aW9ucy5iYXNlLCB0aGlzLmZhbGxiYWNrKTtcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYWJzdHJhY3QnOlxuICAgICAgdGhpcy5oaXN0b3J5ID0gbmV3IEFic3RyYWN0SGlzdG9yeSh0aGlzLCBvcHRpb25zLmJhc2UpO1xuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgYXNzZXJ0KGZhbHNlLCAoXCJpbnZhbGlkIG1vZGU6IFwiICsgbW9kZSkpO1xuICAgICAgfVxuICB9XG59O1xuXG52YXIgcHJvdG90eXBlQWNjZXNzb3JzID0geyBjdXJyZW50Um91dGU6IHt9IH07XG5cblZ1ZVJvdXRlci5wcm90b3R5cGUubWF0Y2ggPSBmdW5jdGlvbiBtYXRjaCAoXG4gIHJhdyxcbiAgY3VycmVudCxcbiAgcmVkaXJlY3RlZEZyb21cbikge1xuICByZXR1cm4gdGhpcy5tYXRjaGVyLm1hdGNoKHJhdywgY3VycmVudCwgcmVkaXJlY3RlZEZyb20pXG59O1xuXG5wcm90b3R5cGVBY2Nlc3NvcnMuY3VycmVudFJvdXRlLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuaGlzdG9yeSAmJiB0aGlzLmhpc3RvcnkuY3VycmVudFxufTtcblxuVnVlUm91dGVyLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gaW5pdCAoYXBwIC8qIFZ1ZSBjb21wb25lbnQgaW5zdGFuY2UgKi8pIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGFzc2VydChcbiAgICBpbnN0YWxsLmluc3RhbGxlZCxcbiAgICBcIm5vdCBpbnN0YWxsZWQuIE1ha2Ugc3VyZSB0byBjYWxsIGBWdWUudXNlKFZ1ZVJvdXRlcilgIFwiICtcbiAgICBcImJlZm9yZSBjcmVhdGluZyByb290IGluc3RhbmNlLlwiXG4gICk7XG5cbiAgdGhpcy5hcHBzLnB1c2goYXBwKTtcblxuICAvLyBtYWluIGFwcCBhbHJlYWR5IGluaXRpYWxpemVkLlxuICBpZiAodGhpcy5hcHApIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHRoaXMuYXBwID0gYXBwO1xuXG4gIHZhciBoaXN0b3J5ID0gdGhpcy5oaXN0b3J5O1xuXG4gIGlmIChoaXN0b3J5IGluc3RhbmNlb2YgSFRNTDVIaXN0b3J5KSB7XG4gICAgaGlzdG9yeS50cmFuc2l0aW9uVG8oaGlzdG9yeS5nZXRDdXJyZW50TG9jYXRpb24oKSk7XG4gIH0gZWxzZSBpZiAoaGlzdG9yeSBpbnN0YW5jZW9mIEhhc2hIaXN0b3J5KSB7XG4gICAgdmFyIHNldHVwSGFzaExpc3RlbmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgaGlzdG9yeS5zZXR1cExpc3RlbmVycygpO1xuICAgIH07XG4gICAgaGlzdG9yeS50cmFuc2l0aW9uVG8oXG4gICAgICBoaXN0b3J5LmdldEN1cnJlbnRMb2NhdGlvbigpLFxuICAgICAgc2V0dXBIYXNoTGlzdGVuZXIsXG4gICAgICBzZXR1cEhhc2hMaXN0ZW5lclxuICAgICk7XG4gIH1cblxuICBoaXN0b3J5Lmxpc3RlbihmdW5jdGlvbiAocm91dGUpIHtcbiAgICB0aGlzJDEuYXBwcy5mb3JFYWNoKGZ1bmN0aW9uIChhcHApIHtcbiAgICAgIGFwcC5fcm91dGUgPSByb3V0ZTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5WdWVSb3V0ZXIucHJvdG90eXBlLmJlZm9yZUVhY2ggPSBmdW5jdGlvbiBiZWZvcmVFYWNoIChmbikge1xuICByZXR1cm4gcmVnaXN0ZXJIb29rKHRoaXMuYmVmb3JlSG9va3MsIGZuKVxufTtcblxuVnVlUm91dGVyLnByb3RvdHlwZS5iZWZvcmVSZXNvbHZlID0gZnVuY3Rpb24gYmVmb3JlUmVzb2x2ZSAoZm4pIHtcbiAgcmV0dXJuIHJlZ2lzdGVySG9vayh0aGlzLnJlc29sdmVIb29rcywgZm4pXG59O1xuXG5WdWVSb3V0ZXIucHJvdG90eXBlLmFmdGVyRWFjaCA9IGZ1bmN0aW9uIGFmdGVyRWFjaCAoZm4pIHtcbiAgcmV0dXJuIHJlZ2lzdGVySG9vayh0aGlzLmFmdGVySG9va3MsIGZuKVxufTtcblxuVnVlUm91dGVyLnByb3RvdHlwZS5vblJlYWR5ID0gZnVuY3Rpb24gb25SZWFkeSAoY2IsIGVycm9yQ2IpIHtcbiAgdGhpcy5oaXN0b3J5Lm9uUmVhZHkoY2IsIGVycm9yQ2IpO1xufTtcblxuVnVlUm91dGVyLnByb3RvdHlwZS5vbkVycm9yID0gZnVuY3Rpb24gb25FcnJvciAoZXJyb3JDYikge1xuICB0aGlzLmhpc3Rvcnkub25FcnJvcihlcnJvckNiKTtcbn07XG5cblZ1ZVJvdXRlci5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uIHB1c2ggKGxvY2F0aW9uLCBvbkNvbXBsZXRlLCBvbkFib3J0KSB7XG4gIHRoaXMuaGlzdG9yeS5wdXNoKGxvY2F0aW9uLCBvbkNvbXBsZXRlLCBvbkFib3J0KTtcbn07XG5cblZ1ZVJvdXRlci5wcm90b3R5cGUucmVwbGFjZSA9IGZ1bmN0aW9uIHJlcGxhY2UgKGxvY2F0aW9uLCBvbkNvbXBsZXRlLCBvbkFib3J0KSB7XG4gIHRoaXMuaGlzdG9yeS5yZXBsYWNlKGxvY2F0aW9uLCBvbkNvbXBsZXRlLCBvbkFib3J0KTtcbn07XG5cblZ1ZVJvdXRlci5wcm90b3R5cGUuZ28gPSBmdW5jdGlvbiBnbyAobikge1xuICB0aGlzLmhpc3RvcnkuZ28obik7XG59O1xuXG5WdWVSb3V0ZXIucHJvdG90eXBlLmJhY2sgPSBmdW5jdGlvbiBiYWNrICgpIHtcbiAgdGhpcy5nbygtMSk7XG59O1xuXG5WdWVSb3V0ZXIucHJvdG90eXBlLmZvcndhcmQgPSBmdW5jdGlvbiBmb3J3YXJkICgpIHtcbiAgdGhpcy5nbygxKTtcbn07XG5cblZ1ZVJvdXRlci5wcm90b3R5cGUuZ2V0TWF0Y2hlZENvbXBvbmVudHMgPSBmdW5jdGlvbiBnZXRNYXRjaGVkQ29tcG9uZW50cyAodG8pIHtcbiAgdmFyIHJvdXRlID0gdG9cbiAgICA/IHRoaXMucmVzb2x2ZSh0bykucm91dGVcbiAgICA6IHRoaXMuY3VycmVudFJvdXRlO1xuICBpZiAoIXJvdXRlKSB7XG4gICAgcmV0dXJuIFtdXG4gIH1cbiAgcmV0dXJuIFtdLmNvbmNhdC5hcHBseShbXSwgcm91dGUubWF0Y2hlZC5tYXAoZnVuY3Rpb24gKG0pIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMobS5jb21wb25lbnRzKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIG0uY29tcG9uZW50c1trZXldXG4gICAgfSlcbiAgfSkpXG59O1xuXG5WdWVSb3V0ZXIucHJvdG90eXBlLnJlc29sdmUgPSBmdW5jdGlvbiByZXNvbHZlIChcbiAgdG8sXG4gIGN1cnJlbnQsXG4gIGFwcGVuZFxuKSB7XG4gIHZhciBsb2NhdGlvbiA9IG5vcm1hbGl6ZUxvY2F0aW9uKFxuICAgIHRvLFxuICAgIGN1cnJlbnQgfHwgdGhpcy5oaXN0b3J5LmN1cnJlbnQsXG4gICAgYXBwZW5kLFxuICAgIHRoaXNcbiAgKTtcbiAgdmFyIHJvdXRlID0gdGhpcy5tYXRjaChsb2NhdGlvbiwgY3VycmVudCk7XG4gIHZhciBmdWxsUGF0aCA9IHJvdXRlLnJlZGlyZWN0ZWRGcm9tIHx8IHJvdXRlLmZ1bGxQYXRoO1xuICB2YXIgYmFzZSA9IHRoaXMuaGlzdG9yeS5iYXNlO1xuICB2YXIgaHJlZiA9IGNyZWF0ZUhyZWYoYmFzZSwgZnVsbFBhdGgsIHRoaXMubW9kZSk7XG4gIHJldHVybiB7XG4gICAgbG9jYXRpb246IGxvY2F0aW9uLFxuICAgIHJvdXRlOiByb3V0ZSxcbiAgICBocmVmOiBocmVmLFxuICAgIC8vIGZvciBiYWNrd2FyZHMgY29tcGF0XG4gICAgbm9ybWFsaXplZFRvOiBsb2NhdGlvbixcbiAgICByZXNvbHZlZDogcm91dGVcbiAgfVxufTtcblxuVnVlUm91dGVyLnByb3RvdHlwZS5hZGRSb3V0ZXMgPSBmdW5jdGlvbiBhZGRSb3V0ZXMgKHJvdXRlcykge1xuICB0aGlzLm1hdGNoZXIuYWRkUm91dGVzKHJvdXRlcyk7XG4gIGlmICh0aGlzLmhpc3RvcnkuY3VycmVudCAhPT0gU1RBUlQpIHtcbiAgICB0aGlzLmhpc3RvcnkudHJhbnNpdGlvblRvKHRoaXMuaGlzdG9yeS5nZXRDdXJyZW50TG9jYXRpb24oKSk7XG4gIH1cbn07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKCBWdWVSb3V0ZXIucHJvdG90eXBlLCBwcm90b3R5cGVBY2Nlc3NvcnMgKTtcblxuZnVuY3Rpb24gcmVnaXN0ZXJIb29rIChsaXN0LCBmbikge1xuICBsaXN0LnB1c2goZm4pO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBpID0gbGlzdC5pbmRleE9mKGZuKTtcbiAgICBpZiAoaSA+IC0xKSB7IGxpc3Quc3BsaWNlKGksIDEpOyB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlSHJlZiAoYmFzZSwgZnVsbFBhdGgsIG1vZGUpIHtcbiAgdmFyIHBhdGggPSBtb2RlID09PSAnaGFzaCcgPyAnIycgKyBmdWxsUGF0aCA6IGZ1bGxQYXRoO1xuICByZXR1cm4gYmFzZSA/IGNsZWFuUGF0aChiYXNlICsgJy8nICsgcGF0aCkgOiBwYXRoXG59XG5cblZ1ZVJvdXRlci5pbnN0YWxsID0gaW5zdGFsbDtcblZ1ZVJvdXRlci52ZXJzaW9uID0gJzIuNS4wJztcblxuaWYgKGluQnJvd3NlciAmJiB3aW5kb3cuVnVlKSB7XG4gIHdpbmRvdy5WdWUudXNlKFZ1ZVJvdXRlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVnVlUm91dGVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1yb3V0ZXIvZGlzdC92dWUtcm91dGVyLmNvbW1vbi5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Byb2Nlc3MvYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiFcbiAqIHZ1ZS1yZXNvdXJjZSB2MS4zLjFcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9wYWdla2l0L3Z1ZS1yZXNvdXJjZVxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBQcm9taXNlcy9BKyBwb2x5ZmlsbCB2MS4xLjQgKGh0dHBzOi8vZ2l0aHViLmNvbS9icmFtc3RlaW4vcHJvbWlzKVxuICovXG5cbnZhciBSRVNPTFZFRCA9IDA7XG52YXIgUkVKRUNURUQgPSAxO1xudmFyIFBFTkRJTkcgID0gMjtcblxuZnVuY3Rpb24gUHJvbWlzZSQxKGV4ZWN1dG9yKSB7XG5cbiAgICB0aGlzLnN0YXRlID0gUEVORElORztcbiAgICB0aGlzLnZhbHVlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZGVmZXJyZWQgPSBbXTtcblxuICAgIHZhciBwcm9taXNlID0gdGhpcztcblxuICAgIHRyeSB7XG4gICAgICAgIGV4ZWN1dG9yKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICBwcm9taXNlLnJlc29sdmUoeCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChyKSB7XG4gICAgICAgICAgICBwcm9taXNlLnJlamVjdChyKTtcbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBwcm9taXNlLnJlamVjdChlKTtcbiAgICB9XG59XG5cblByb21pc2UkMS5yZWplY3QgPSBmdW5jdGlvbiAocikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgcmVqZWN0KHIpO1xuICAgIH0pO1xufTtcblxuUHJvbWlzZSQxLnJlc29sdmUgPSBmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgcmVzb2x2ZSh4KTtcbiAgICB9KTtcbn07XG5cblByb21pc2UkMS5hbGwgPSBmdW5jdGlvbiBhbGwoaXRlcmFibGUpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHZhciBjb3VudCA9IDAsIHJlc3VsdCA9IFtdO1xuXG4gICAgICAgIGlmIChpdGVyYWJsZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHJlc29sdmVyKGkpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdFtpXSA9IHg7XG4gICAgICAgICAgICAgICAgY291bnQgKz0gMTtcblxuICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PT0gaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVyYWJsZS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgUHJvbWlzZSQxLnJlc29sdmUoaXRlcmFibGVbaV0pLnRoZW4ocmVzb2x2ZXIoaSksIHJlamVjdCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cblByb21pc2UkMS5yYWNlID0gZnVuY3Rpb24gcmFjZShpdGVyYWJsZSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVyYWJsZS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgUHJvbWlzZSQxLnJlc29sdmUoaXRlcmFibGVbaV0pLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxudmFyIHAkMSA9IFByb21pc2UkMS5wcm90b3R5cGU7XG5cbnAkMS5yZXNvbHZlID0gZnVuY3Rpb24gcmVzb2x2ZSh4KSB7XG4gICAgdmFyIHByb21pc2UgPSB0aGlzO1xuXG4gICAgaWYgKHByb21pc2Uuc3RhdGUgPT09IFBFTkRJTkcpIHtcbiAgICAgICAgaWYgKHggPT09IHByb21pc2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Byb21pc2Ugc2V0dGxlZCB3aXRoIGl0c2VsZi4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjYWxsZWQgPSBmYWxzZTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIHRoZW4gPSB4ICYmIHhbJ3RoZW4nXTtcblxuICAgICAgICAgICAgaWYgKHggIT09IG51bGwgJiYgdHlwZW9mIHggPT09ICdvYmplY3QnICYmIHR5cGVvZiB0aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdGhlbi5jYWxsKHgsIGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghY2FsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlLnJlc29sdmUoeCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FsbGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChyKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghY2FsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlLnJlamVjdChyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgaWYgKCFjYWxsZWQpIHtcbiAgICAgICAgICAgICAgICBwcm9taXNlLnJlamVjdChlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHByb21pc2Uuc3RhdGUgPSBSRVNPTFZFRDtcbiAgICAgICAgcHJvbWlzZS52YWx1ZSA9IHg7XG4gICAgICAgIHByb21pc2Uubm90aWZ5KCk7XG4gICAgfVxufTtcblxucCQxLnJlamVjdCA9IGZ1bmN0aW9uIHJlamVjdChyZWFzb24pIHtcbiAgICB2YXIgcHJvbWlzZSA9IHRoaXM7XG5cbiAgICBpZiAocHJvbWlzZS5zdGF0ZSA9PT0gUEVORElORykge1xuICAgICAgICBpZiAocmVhc29uID09PSBwcm9taXNlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdQcm9taXNlIHNldHRsZWQgd2l0aCBpdHNlbGYuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBwcm9taXNlLnN0YXRlID0gUkVKRUNURUQ7XG4gICAgICAgIHByb21pc2UudmFsdWUgPSByZWFzb247XG4gICAgICAgIHByb21pc2Uubm90aWZ5KCk7XG4gICAgfVxufTtcblxucCQxLm5vdGlmeSA9IGZ1bmN0aW9uIG5vdGlmeSgpIHtcbiAgICB2YXIgcHJvbWlzZSA9IHRoaXM7XG5cbiAgICBuZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChwcm9taXNlLnN0YXRlICE9PSBQRU5ESU5HKSB7XG4gICAgICAgICAgICB3aGlsZSAocHJvbWlzZS5kZWZlcnJlZC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSBwcm9taXNlLmRlZmVycmVkLnNoaWZ0KCksXG4gICAgICAgICAgICAgICAgICAgIG9uUmVzb2x2ZWQgPSBkZWZlcnJlZFswXSxcbiAgICAgICAgICAgICAgICAgICAgb25SZWplY3RlZCA9IGRlZmVycmVkWzFdLFxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlID0gZGVmZXJyZWRbMl0sXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCA9IGRlZmVycmVkWzNdO1xuXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb21pc2Uuc3RhdGUgPT09IFJFU09MVkVEKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9uUmVzb2x2ZWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG9uUmVzb2x2ZWQuY2FsbCh1bmRlZmluZWQsIHByb21pc2UudmFsdWUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShwcm9taXNlLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9taXNlLnN0YXRlID09PSBSRUpFQ1RFRCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvblJlamVjdGVkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShvblJlamVjdGVkLmNhbGwodW5kZWZpbmVkLCBwcm9taXNlLnZhbHVlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChwcm9taXNlLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxucCQxLnRoZW4gPSBmdW5jdGlvbiB0aGVuKG9uUmVzb2x2ZWQsIG9uUmVqZWN0ZWQpIHtcbiAgICB2YXIgcHJvbWlzZSA9IHRoaXM7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHByb21pc2UuZGVmZXJyZWQucHVzaChbb25SZXNvbHZlZCwgb25SZWplY3RlZCwgcmVzb2x2ZSwgcmVqZWN0XSk7XG4gICAgICAgIHByb21pc2Uubm90aWZ5KCk7XG4gICAgfSk7XG59O1xuXG5wJDEuY2F0Y2ggPSBmdW5jdGlvbiAob25SZWplY3RlZCkge1xuICAgIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBvblJlamVjdGVkKTtcbn07XG5cbi8qKlxuICogUHJvbWlzZSBhZGFwdGVyLlxuICovXG5cbmlmICh0eXBlb2YgUHJvbWlzZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB3aW5kb3cuUHJvbWlzZSA9IFByb21pc2UkMTtcbn1cblxuZnVuY3Rpb24gUHJvbWlzZU9iaihleGVjdXRvciwgY29udGV4dCkge1xuXG4gICAgaWYgKGV4ZWN1dG9yIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICB0aGlzLnByb21pc2UgPSBleGVjdXRvcjtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZShleGVjdXRvci5iaW5kKGNvbnRleHQpKTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xufVxuXG5Qcm9taXNlT2JqLmFsbCA9IGZ1bmN0aW9uIChpdGVyYWJsZSwgY29udGV4dCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZU9iaihQcm9taXNlLmFsbChpdGVyYWJsZSksIGNvbnRleHQpO1xufTtcblxuUHJvbWlzZU9iai5yZXNvbHZlID0gZnVuY3Rpb24gKHZhbHVlLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlT2JqKFByb21pc2UucmVzb2x2ZSh2YWx1ZSksIGNvbnRleHQpO1xufTtcblxuUHJvbWlzZU9iai5yZWplY3QgPSBmdW5jdGlvbiAocmVhc29uLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlT2JqKFByb21pc2UucmVqZWN0KHJlYXNvbiksIGNvbnRleHQpO1xufTtcblxuUHJvbWlzZU9iai5yYWNlID0gZnVuY3Rpb24gKGl0ZXJhYmxlLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlT2JqKFByb21pc2UucmFjZShpdGVyYWJsZSksIGNvbnRleHQpO1xufTtcblxudmFyIHAgPSBQcm9taXNlT2JqLnByb3RvdHlwZTtcblxucC5iaW5kID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHJldHVybiB0aGlzO1xufTtcblxucC50aGVuID0gZnVuY3Rpb24gKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpIHtcblxuICAgIGlmIChmdWxmaWxsZWQgJiYgZnVsZmlsbGVkLmJpbmQgJiYgdGhpcy5jb250ZXh0KSB7XG4gICAgICAgIGZ1bGZpbGxlZCA9IGZ1bGZpbGxlZC5iaW5kKHRoaXMuY29udGV4dCk7XG4gICAgfVxuXG4gICAgaWYgKHJlamVjdGVkICYmIHJlamVjdGVkLmJpbmQgJiYgdGhpcy5jb250ZXh0KSB7XG4gICAgICAgIHJlamVjdGVkID0gcmVqZWN0ZWQuYmluZCh0aGlzLmNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgUHJvbWlzZU9iaih0aGlzLnByb21pc2UudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKSwgdGhpcy5jb250ZXh0KTtcbn07XG5cbnAuY2F0Y2ggPSBmdW5jdGlvbiAocmVqZWN0ZWQpIHtcblxuICAgIGlmIChyZWplY3RlZCAmJiByZWplY3RlZC5iaW5kICYmIHRoaXMuY29udGV4dCkge1xuICAgICAgICByZWplY3RlZCA9IHJlamVjdGVkLmJpbmQodGhpcy5jb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2VPYmoodGhpcy5wcm9taXNlLmNhdGNoKHJlamVjdGVkKSwgdGhpcy5jb250ZXh0KTtcbn07XG5cbnAuZmluYWxseSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXG4gICAgcmV0dXJuIHRoaXMudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpcyk7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpcyk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVhc29uKTtcbiAgICAgICAgfVxuICAgICk7XG59O1xuXG4vKipcbiAqIFV0aWxpdHkgZnVuY3Rpb25zLlxuICovXG5cbnZhciByZWYgPSB7fTtcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IHJlZi5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIHJlZiQxID0gW107XG52YXIgc2xpY2UgPSByZWYkMS5zbGljZTtcbnZhciBkZWJ1ZyA9IGZhbHNlO1xudmFyIG50aWNrO1xuXG52YXIgaW5Ccm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG5cbnZhciBVdGlsID0gZnVuY3Rpb24gKHJlZikge1xuICAgIHZhciBjb25maWcgPSByZWYuY29uZmlnO1xuICAgIHZhciBuZXh0VGljayA9IHJlZi5uZXh0VGljaztcblxuICAgIG50aWNrID0gbmV4dFRpY2s7XG4gICAgZGVidWcgPSBjb25maWcuZGVidWcgfHwgIWNvbmZpZy5zaWxlbnQ7XG59O1xuXG5mdW5jdGlvbiB3YXJuKG1zZykge1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgZGVidWcpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdbVnVlUmVzb3VyY2Ugd2Fybl06ICcgKyBtc2cpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZXJyb3IobXNnKSB7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKG1zZyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBuZXh0VGljayhjYiwgY3R4KSB7XG4gICAgcmV0dXJuIG50aWNrKGNiLCBjdHgpO1xufVxuXG5mdW5jdGlvbiB0cmltKHN0cikge1xuICAgIHJldHVybiBzdHIgPyBzdHIucmVwbGFjZSgvXlxccyp8XFxzKiQvZywgJycpIDogJyc7XG59XG5cbmZ1bmN0aW9uIHRvTG93ZXIoc3RyKSB7XG4gICAgcmV0dXJuIHN0ciA/IHN0ci50b0xvd2VyQ2FzZSgpIDogJyc7XG59XG5cbmZ1bmN0aW9uIHRvVXBwZXIoc3RyKSB7XG4gICAgcmV0dXJuIHN0ciA/IHN0ci50b1VwcGVyQ2FzZSgpIDogJyc7XG59XG5cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxuZnVuY3Rpb24gaXNTdHJpbmcodmFsKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnO1xufVxuXG5cblxuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWwpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZnVuY3Rpb24gaXNPYmplY3Qob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAhPT0gbnVsbCAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jztcbn1cblxuZnVuY3Rpb24gaXNQbGFpbk9iamVjdChvYmopIHtcbiAgICByZXR1cm4gaXNPYmplY3Qob2JqKSAmJiBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKSA9PSBPYmplY3QucHJvdG90eXBlO1xufVxuXG5mdW5jdGlvbiBpc0Jsb2Iob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBCbG9iICE9PSAndW5kZWZpbmVkJyAmJiBvYmogaW5zdGFuY2VvZiBCbG9iO1xufVxuXG5mdW5jdGlvbiBpc0Zvcm1EYXRhKG9iaikge1xuICAgIHJldHVybiB0eXBlb2YgRm9ybURhdGEgIT09ICd1bmRlZmluZWQnICYmIG9iaiBpbnN0YW5jZW9mIEZvcm1EYXRhO1xufVxuXG5mdW5jdGlvbiB3aGVuKHZhbHVlLCBmdWxmaWxsZWQsIHJlamVjdGVkKSB7XG5cbiAgICB2YXIgcHJvbWlzZSA9IFByb21pc2VPYmoucmVzb2x2ZSh2YWx1ZSk7XG5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb21pc2UudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTtcbn1cblxuZnVuY3Rpb24gb3B0aW9ucyhmbiwgb2JqLCBvcHRzKSB7XG5cbiAgICBvcHRzID0gb3B0cyB8fCB7fTtcblxuICAgIGlmIChpc0Z1bmN0aW9uKG9wdHMpKSB7XG4gICAgICAgIG9wdHMgPSBvcHRzLmNhbGwob2JqKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVyZ2UoZm4uYmluZCh7JHZtOiBvYmosICRvcHRpb25zOiBvcHRzfSksIGZuLCB7JG9wdGlvbnM6IG9wdHN9KTtcbn1cblxuZnVuY3Rpb24gZWFjaChvYmosIGl0ZXJhdG9yKSB7XG5cbiAgICB2YXIgaSwga2V5O1xuXG4gICAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgb2JqLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpdGVyYXRvci5jYWxsKG9ialtpXSwgb2JqW2ldLCBpKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNPYmplY3Qob2JqKSkge1xuICAgICAgICBmb3IgKGtleSBpbiBvYmopIHtcbiAgICAgICAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICAgICAgICAgIGl0ZXJhdG9yLmNhbGwob2JqW2tleV0sIG9ialtrZXldLCBrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbn1cblxudmFyIGFzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgX2Fzc2lnbjtcblxuZnVuY3Rpb24gbWVyZ2UodGFyZ2V0KSB7XG5cbiAgICB2YXIgYXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcblxuICAgIGFyZ3MuZm9yRWFjaChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICAgIF9tZXJnZSh0YXJnZXQsIHNvdXJjZSwgdHJ1ZSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0cyh0YXJnZXQpIHtcblxuICAgIHZhciBhcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuXG4gICAgYXJncy5mb3JFYWNoKGZ1bmN0aW9uIChzb3VyY2UpIHtcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgICAgICBpZiAodGFyZ2V0W2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gX2Fzc2lnbih0YXJnZXQpIHtcblxuICAgIHZhciBhcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuXG4gICAgYXJncy5mb3JFYWNoKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgICAgX21lcmdlKHRhcmdldCwgc291cmNlKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIF9tZXJnZSh0YXJnZXQsIHNvdXJjZSwgZGVlcCkge1xuICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKGRlZXAgJiYgKGlzUGxhaW5PYmplY3Qoc291cmNlW2tleV0pIHx8IGlzQXJyYXkoc291cmNlW2tleV0pKSkge1xuICAgICAgICAgICAgaWYgKGlzUGxhaW5PYmplY3Qoc291cmNlW2tleV0pICYmICFpc1BsYWluT2JqZWN0KHRhcmdldFtrZXldKSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNBcnJheShzb3VyY2Vba2V5XSkgJiYgIWlzQXJyYXkodGFyZ2V0W2tleV0pKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF9tZXJnZSh0YXJnZXRba2V5XSwgc291cmNlW2tleV0sIGRlZXApO1xuICAgICAgICB9IGVsc2UgaWYgKHNvdXJjZVtrZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICogUm9vdCBQcmVmaXggVHJhbnNmb3JtLlxuICovXG5cbnZhciByb290ID0gZnVuY3Rpb24gKG9wdGlvbnMkJDEsIG5leHQpIHtcblxuICAgIHZhciB1cmwgPSBuZXh0KG9wdGlvbnMkJDEpO1xuXG4gICAgaWYgKGlzU3RyaW5nKG9wdGlvbnMkJDEucm9vdCkgJiYgIXVybC5tYXRjaCgvXihodHRwcz86KT9cXC8vKSkge1xuICAgICAgICB1cmwgPSBvcHRpb25zJCQxLnJvb3QgKyAnLycgKyB1cmw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVybDtcbn07XG5cbi8qKlxuICogUXVlcnkgUGFyYW1ldGVyIFRyYW5zZm9ybS5cbiAqL1xuXG52YXIgcXVlcnkgPSBmdW5jdGlvbiAob3B0aW9ucyQkMSwgbmV4dCkge1xuXG4gICAgdmFyIHVybFBhcmFtcyA9IE9iamVjdC5rZXlzKFVybC5vcHRpb25zLnBhcmFtcyksIHF1ZXJ5ID0ge30sIHVybCA9IG5leHQob3B0aW9ucyQkMSk7XG5cbiAgICBlYWNoKG9wdGlvbnMkJDEucGFyYW1zLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICBpZiAodXJsUGFyYW1zLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcXVlcnkgPSBVcmwucGFyYW1zKHF1ZXJ5KTtcblxuICAgIGlmIChxdWVyeSkge1xuICAgICAgICB1cmwgKz0gKHVybC5pbmRleE9mKCc/JykgPT0gLTEgPyAnPycgOiAnJicpICsgcXVlcnk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVybDtcbn07XG5cbi8qKlxuICogVVJMIFRlbXBsYXRlIHYyLjAuNiAoaHR0cHM6Ly9naXRodWIuY29tL2JyYW1zdGVpbi91cmwtdGVtcGxhdGUpXG4gKi9cblxuZnVuY3Rpb24gZXhwYW5kKHVybCwgcGFyYW1zLCB2YXJpYWJsZXMpIHtcblxuICAgIHZhciB0bXBsID0gcGFyc2UodXJsKSwgZXhwYW5kZWQgPSB0bXBsLmV4cGFuZChwYXJhbXMpO1xuXG4gICAgaWYgKHZhcmlhYmxlcykge1xuICAgICAgICB2YXJpYWJsZXMucHVzaC5hcHBseSh2YXJpYWJsZXMsIHRtcGwudmFycyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGV4cGFuZGVkO1xufVxuXG5mdW5jdGlvbiBwYXJzZSh0ZW1wbGF0ZSkge1xuXG4gICAgdmFyIG9wZXJhdG9ycyA9IFsnKycsICcjJywgJy4nLCAnLycsICc7JywgJz8nLCAnJiddLCB2YXJpYWJsZXMgPSBbXTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHZhcnM6IHZhcmlhYmxlcyxcbiAgICAgICAgZXhwYW5kOiBmdW5jdGlvbiBleHBhbmQoY29udGV4dCkge1xuICAgICAgICAgICAgcmV0dXJuIHRlbXBsYXRlLnJlcGxhY2UoL1xceyhbXlxce1xcfV0rKVxcfXwoW15cXHtcXH1dKykvZywgZnVuY3Rpb24gKF8sIGV4cHJlc3Npb24sIGxpdGVyYWwpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXhwcmVzc2lvbikge1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBvcGVyYXRvciA9IG51bGwsIHZhbHVlcyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcGVyYXRvcnMuaW5kZXhPZihleHByZXNzaW9uLmNoYXJBdCgwKSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRvciA9IGV4cHJlc3Npb24uY2hhckF0KDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb24uc3Vic3RyKDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbi5zcGxpdCgvLC9nKS5mb3JFYWNoKGZ1bmN0aW9uICh2YXJpYWJsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRtcCA9IC8oW146XFwqXSopKD86OihcXGQrKXwoXFwqKSk/Ly5leGVjKHZhcmlhYmxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcy5wdXNoLmFwcGx5KHZhbHVlcywgZ2V0VmFsdWVzKGNvbnRleHQsIG9wZXJhdG9yLCB0bXBbMV0sIHRtcFsyXSB8fCB0bXBbM10pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlcy5wdXNoKHRtcFsxXSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcGVyYXRvciAmJiBvcGVyYXRvciAhPT0gJysnKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzZXBhcmF0b3IgPSAnLCc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcGVyYXRvciA9PT0gJz8nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VwYXJhdG9yID0gJyYnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvcGVyYXRvciAhPT0gJyMnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VwYXJhdG9yID0gb3BlcmF0b3I7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAodmFsdWVzLmxlbmd0aCAhPT0gMCA/IG9wZXJhdG9yIDogJycpICsgdmFsdWVzLmpvaW4oc2VwYXJhdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZXMuam9pbignLCcpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZW5jb2RlUmVzZXJ2ZWQobGl0ZXJhbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5mdW5jdGlvbiBnZXRWYWx1ZXMoY29udGV4dCwgb3BlcmF0b3IsIGtleSwgbW9kaWZpZXIpIHtcblxuICAgIHZhciB2YWx1ZSA9IGNvbnRleHRba2V5XSwgcmVzdWx0ID0gW107XG5cbiAgICBpZiAoaXNEZWZpbmVkKHZhbHVlKSAmJiB2YWx1ZSAhPT0gJycpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS50b1N0cmluZygpO1xuXG4gICAgICAgICAgICBpZiAobW9kaWZpZXIgJiYgbW9kaWZpZXIgIT09ICcqJykge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuc3Vic3RyaW5nKDAsIHBhcnNlSW50KG1vZGlmaWVyLCAxMCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXN1bHQucHVzaChlbmNvZGVWYWx1ZShvcGVyYXRvciwgdmFsdWUsIGlzS2V5T3BlcmF0b3Iob3BlcmF0b3IpID8ga2V5IDogbnVsbCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKG1vZGlmaWVyID09PSAnKicpIHtcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUuZmlsdGVyKGlzRGVmaW5lZCkuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGVuY29kZVZhbHVlKG9wZXJhdG9yLCB2YWx1ZSwgaXNLZXlPcGVyYXRvcihvcGVyYXRvcikgPyBrZXkgOiBudWxsKSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNEZWZpbmVkKHZhbHVlW2tdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGVuY29kZVZhbHVlKG9wZXJhdG9yLCB2YWx1ZVtrXSwgaykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciB0bXAgPSBbXTtcblxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5maWx0ZXIoaXNEZWZpbmVkKS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG1wLnB1c2goZW5jb2RlVmFsdWUob3BlcmF0b3IsIHZhbHVlKSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNEZWZpbmVkKHZhbHVlW2tdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRtcC5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChrKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG1wLnB1c2goZW5jb2RlVmFsdWUob3BlcmF0b3IsIHZhbHVlW2tdLnRvU3RyaW5nKCkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGlzS2V5T3BlcmF0b3Iob3BlcmF0b3IpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChrZXkpICsgJz0nICsgdG1wLmpvaW4oJywnKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0bXAubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRtcC5qb2luKCcsJykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChvcGVyYXRvciA9PT0gJzsnKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChlbmNvZGVVUklDb21wb25lbnQoa2V5KSk7XG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09ICcnICYmIChvcGVyYXRvciA9PT0gJyYnIHx8IG9wZXJhdG9yID09PSAnPycpKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChlbmNvZGVVUklDb21wb25lbnQoa2V5KSArICc9Jyk7XG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaCgnJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBpc0RlZmluZWQodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbDtcbn1cblxuZnVuY3Rpb24gaXNLZXlPcGVyYXRvcihvcGVyYXRvcikge1xuICAgIHJldHVybiBvcGVyYXRvciA9PT0gJzsnIHx8IG9wZXJhdG9yID09PSAnJicgfHwgb3BlcmF0b3IgPT09ICc/Jztcbn1cblxuZnVuY3Rpb24gZW5jb2RlVmFsdWUob3BlcmF0b3IsIHZhbHVlLCBrZXkpIHtcblxuICAgIHZhbHVlID0gKG9wZXJhdG9yID09PSAnKycgfHwgb3BlcmF0b3IgPT09ICcjJykgPyBlbmNvZGVSZXNlcnZlZCh2YWx1ZSkgOiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpO1xuXG4gICAgaWYgKGtleSkge1xuICAgICAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgKyAnPScgKyB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBlbmNvZGVSZXNlcnZlZChzdHIpIHtcbiAgICByZXR1cm4gc3RyLnNwbGl0KC8oJVswLTlBLUZhLWZdezJ9KS9nKS5tYXAoZnVuY3Rpb24gKHBhcnQpIHtcbiAgICAgICAgaWYgKCEvJVswLTlBLUZhLWZdLy50ZXN0KHBhcnQpKSB7XG4gICAgICAgICAgICBwYXJ0ID0gZW5jb2RlVVJJKHBhcnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXJ0O1xuICAgIH0pLmpvaW4oJycpO1xufVxuXG4vKipcbiAqIFVSTCBUZW1wbGF0ZSAoUkZDIDY1NzApIFRyYW5zZm9ybS5cbiAqL1xuXG52YXIgdGVtcGxhdGUgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICAgdmFyIHZhcmlhYmxlcyA9IFtdLCB1cmwgPSBleHBhbmQob3B0aW9ucy51cmwsIG9wdGlvbnMucGFyYW1zLCB2YXJpYWJsZXMpO1xuXG4gICAgdmFyaWFibGVzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBkZWxldGUgb3B0aW9ucy5wYXJhbXNba2V5XTtcbiAgICB9KTtcblxuICAgIHJldHVybiB1cmw7XG59O1xuXG4vKipcbiAqIFNlcnZpY2UgZm9yIFVSTCB0ZW1wbGF0aW5nLlxuICovXG5cbmZ1bmN0aW9uIFVybCh1cmwsIHBhcmFtcykge1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzIHx8IHt9LCBvcHRpb25zJCQxID0gdXJsLCB0cmFuc2Zvcm07XG5cbiAgICBpZiAoaXNTdHJpbmcodXJsKSkge1xuICAgICAgICBvcHRpb25zJCQxID0ge3VybDogdXJsLCBwYXJhbXM6IHBhcmFtc307XG4gICAgfVxuXG4gICAgb3B0aW9ucyQkMSA9IG1lcmdlKHt9LCBVcmwub3B0aW9ucywgc2VsZi4kb3B0aW9ucywgb3B0aW9ucyQkMSk7XG5cbiAgICBVcmwudHJhbnNmb3Jtcy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVyKSB7XG5cbiAgICAgICAgaWYgKGlzU3RyaW5nKGhhbmRsZXIpKSB7XG4gICAgICAgICAgICBoYW5kbGVyID0gVXJsLnRyYW5zZm9ybVtoYW5kbGVyXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0Z1bmN0aW9uKGhhbmRsZXIpKSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm0gPSBmYWN0b3J5KGhhbmRsZXIsIHRyYW5zZm9ybSwgc2VsZi4kdm0pO1xuICAgICAgICB9XG5cbiAgICB9KTtcblxuICAgIHJldHVybiB0cmFuc2Zvcm0ob3B0aW9ucyQkMSk7XG59XG5cbi8qKlxuICogVXJsIG9wdGlvbnMuXG4gKi9cblxuVXJsLm9wdGlvbnMgPSB7XG4gICAgdXJsOiAnJyxcbiAgICByb290OiBudWxsLFxuICAgIHBhcmFtczoge31cbn07XG5cbi8qKlxuICogVXJsIHRyYW5zZm9ybXMuXG4gKi9cblxuVXJsLnRyYW5zZm9ybSA9IHt0ZW1wbGF0ZTogdGVtcGxhdGUsIHF1ZXJ5OiBxdWVyeSwgcm9vdDogcm9vdH07XG5VcmwudHJhbnNmb3JtcyA9IFsndGVtcGxhdGUnLCAncXVlcnknLCAncm9vdCddO1xuXG4vKipcbiAqIEVuY29kZXMgYSBVcmwgcGFyYW1ldGVyIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKi9cblxuVXJsLnBhcmFtcyA9IGZ1bmN0aW9uIChvYmopIHtcblxuICAgIHZhciBwYXJhbXMgPSBbXSwgZXNjYXBlID0gZW5jb2RlVVJJQ29tcG9uZW50O1xuXG4gICAgcGFyYW1zLmFkZCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG5cbiAgICAgICAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHZhbHVlID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnB1c2goZXNjYXBlKGtleSkgKyAnPScgKyBlc2NhcGUodmFsdWUpKTtcbiAgICB9O1xuXG4gICAgc2VyaWFsaXplKHBhcmFtcywgb2JqKTtcblxuICAgIHJldHVybiBwYXJhbXMuam9pbignJicpLnJlcGxhY2UoLyUyMC9nLCAnKycpO1xufTtcblxuLyoqXG4gKiBQYXJzZSBhIFVSTCBhbmQgcmV0dXJuIGl0cyBjb21wb25lbnRzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqL1xuXG5VcmwucGFyc2UgPSBmdW5jdGlvbiAodXJsKSB7XG5cbiAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cbiAgICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRNb2RlKSB7XG4gICAgICAgIGVsLmhyZWYgPSB1cmw7XG4gICAgICAgIHVybCA9IGVsLmhyZWY7XG4gICAgfVxuXG4gICAgZWwuaHJlZiA9IHVybDtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGhyZWY6IGVsLmhyZWYsXG4gICAgICAgIHByb3RvY29sOiBlbC5wcm90b2NvbCA/IGVsLnByb3RvY29sLnJlcGxhY2UoLzokLywgJycpIDogJycsXG4gICAgICAgIHBvcnQ6IGVsLnBvcnQsXG4gICAgICAgIGhvc3Q6IGVsLmhvc3QsXG4gICAgICAgIGhvc3RuYW1lOiBlbC5ob3N0bmFtZSxcbiAgICAgICAgcGF0aG5hbWU6IGVsLnBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gJy8nID8gZWwucGF0aG5hbWUgOiAnLycgKyBlbC5wYXRobmFtZSxcbiAgICAgICAgc2VhcmNoOiBlbC5zZWFyY2ggPyBlbC5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKSA6ICcnLFxuICAgICAgICBoYXNoOiBlbC5oYXNoID8gZWwuaGFzaC5yZXBsYWNlKC9eIy8sICcnKSA6ICcnXG4gICAgfTtcbn07XG5cbmZ1bmN0aW9uIGZhY3RvcnkoaGFuZGxlciwgbmV4dCwgdm0pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKG9wdGlvbnMkJDEpIHtcbiAgICAgICAgcmV0dXJuIGhhbmRsZXIuY2FsbCh2bSwgb3B0aW9ucyQkMSwgbmV4dCk7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gc2VyaWFsaXplKHBhcmFtcywgb2JqLCBzY29wZSkge1xuXG4gICAgdmFyIGFycmF5ID0gaXNBcnJheShvYmopLCBwbGFpbiA9IGlzUGxhaW5PYmplY3Qob2JqKSwgaGFzaDtcblxuICAgIGVhY2gob2JqLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuXG4gICAgICAgIGhhc2ggPSBpc09iamVjdCh2YWx1ZSkgfHwgaXNBcnJheSh2YWx1ZSk7XG5cbiAgICAgICAgaWYgKHNjb3BlKSB7XG4gICAgICAgICAgICBrZXkgPSBzY29wZSArICdbJyArIChwbGFpbiB8fCBoYXNoID8ga2V5IDogJycpICsgJ10nO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFzY29wZSAmJiBhcnJheSkge1xuICAgICAgICAgICAgcGFyYW1zLmFkZCh2YWx1ZS5uYW1lLCB2YWx1ZS52YWx1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaGFzaCkge1xuICAgICAgICAgICAgc2VyaWFsaXplKHBhcmFtcywgdmFsdWUsIGtleSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJhbXMuYWRkKGtleSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbi8qKlxuICogWERvbWFpbiBjbGllbnQgKEludGVybmV0IEV4cGxvcmVyKS5cbiAqL1xuXG52YXIgeGRyQ2xpZW50ID0gZnVuY3Rpb24gKHJlcXVlc3QpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2VPYmooZnVuY3Rpb24gKHJlc29sdmUpIHtcblxuICAgICAgICB2YXIgeGRyID0gbmV3IFhEb21haW5SZXF1ZXN0KCksIGhhbmRsZXIgPSBmdW5jdGlvbiAocmVmKSB7XG4gICAgICAgICAgICB2YXIgdHlwZSA9IHJlZi50eXBlO1xuXG5cbiAgICAgICAgICAgIHZhciBzdGF0dXMgPSAwO1xuXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2xvYWQnKSB7XG4gICAgICAgICAgICAgICAgc3RhdHVzID0gMjAwO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnZXJyb3InKSB7XG4gICAgICAgICAgICAgICAgc3RhdHVzID0gNTAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXNvbHZlKHJlcXVlc3QucmVzcG9uZFdpdGgoeGRyLnJlc3BvbnNlVGV4dCwge3N0YXR1czogc3RhdHVzfSkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJlcXVlc3QuYWJvcnQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB4ZHIuYWJvcnQoKTsgfTtcblxuICAgICAgICB4ZHIub3BlbihyZXF1ZXN0Lm1ldGhvZCwgcmVxdWVzdC5nZXRVcmwoKSk7XG5cbiAgICAgICAgaWYgKHJlcXVlc3QudGltZW91dCkge1xuICAgICAgICAgICAgeGRyLnRpbWVvdXQgPSByZXF1ZXN0LnRpbWVvdXQ7XG4gICAgICAgIH1cblxuICAgICAgICB4ZHIub25sb2FkID0gaGFuZGxlcjtcbiAgICAgICAgeGRyLm9uYWJvcnQgPSBoYW5kbGVyO1xuICAgICAgICB4ZHIub25lcnJvciA9IGhhbmRsZXI7XG4gICAgICAgIHhkci5vbnRpbWVvdXQgPSBoYW5kbGVyO1xuICAgICAgICB4ZHIub25wcm9ncmVzcyA9IGZ1bmN0aW9uICgpIHt9O1xuICAgICAgICB4ZHIuc2VuZChyZXF1ZXN0LmdldEJvZHkoKSk7XG4gICAgfSk7XG59O1xuXG4vKipcbiAqIENPUlMgSW50ZXJjZXB0b3IuXG4gKi9cblxudmFyIFNVUFBPUlRTX0NPUlMgPSBpbkJyb3dzZXIgJiYgJ3dpdGhDcmVkZW50aWFscycgaW4gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbnZhciBjb3JzID0gZnVuY3Rpb24gKHJlcXVlc3QsIG5leHQpIHtcblxuICAgIGlmIChpbkJyb3dzZXIpIHtcblxuICAgICAgICB2YXIgb3JnVXJsID0gVXJsLnBhcnNlKGxvY2F0aW9uLmhyZWYpO1xuICAgICAgICB2YXIgcmVxVXJsID0gVXJsLnBhcnNlKHJlcXVlc3QuZ2V0VXJsKCkpO1xuXG4gICAgICAgIGlmIChyZXFVcmwucHJvdG9jb2wgIT09IG9yZ1VybC5wcm90b2NvbCB8fCByZXFVcmwuaG9zdCAhPT0gb3JnVXJsLmhvc3QpIHtcblxuICAgICAgICAgICAgcmVxdWVzdC5jcm9zc09yaWdpbiA9IHRydWU7XG4gICAgICAgICAgICByZXF1ZXN0LmVtdWxhdGVIVFRQID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmICghU1VQUE9SVFNfQ09SUykge1xuICAgICAgICAgICAgICAgIHJlcXVlc3QuY2xpZW50ID0geGRyQ2xpZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmV4dCgpO1xufTtcblxuLyoqXG4gKiBCb2R5IEludGVyY2VwdG9yLlxuICovXG5cbnZhciBib2R5ID0gZnVuY3Rpb24gKHJlcXVlc3QsIG5leHQpIHtcblxuICAgIGlmIChpc0Zvcm1EYXRhKHJlcXVlc3QuYm9keSkpIHtcblxuICAgICAgICByZXF1ZXN0LmhlYWRlcnMuZGVsZXRlKCdDb250ZW50LVR5cGUnKTtcblxuICAgIH0gZWxzZSBpZiAoaXNPYmplY3QocmVxdWVzdC5ib2R5KSB8fCBpc0FycmF5KHJlcXVlc3QuYm9keSkpIHtcblxuICAgICAgICBpZiAocmVxdWVzdC5lbXVsYXRlSlNPTikge1xuICAgICAgICAgICAgcmVxdWVzdC5ib2R5ID0gVXJsLnBhcmFtcyhyZXF1ZXN0LmJvZHkpO1xuICAgICAgICAgICAgcmVxdWVzdC5oZWFkZXJzLnNldCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVxdWVzdC5ib2R5ID0gSlNPTi5zdHJpbmdpZnkocmVxdWVzdC5ib2R5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5leHQoZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlc3BvbnNlLCAnZGF0YScsIHtcblxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYm9keTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gc2V0KGJvZHkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvZHkgPSBib2R5O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXNwb25zZS5ib2R5VGV4dCA/IHdoZW4ocmVzcG9uc2UudGV4dCgpLCBmdW5jdGlvbiAodGV4dCkge1xuXG4gICAgICAgICAgICB2YXIgdHlwZSA9IHJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdDb250ZW50LVR5cGUnKSB8fCAnJztcblxuICAgICAgICAgICAgaWYgKHR5cGUuaW5kZXhPZignYXBwbGljYXRpb24vanNvbicpID09PSAwIHx8IGlzSnNvbih0ZXh0KSkge1xuXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuYm9keSA9IEpTT04ucGFyc2UodGV4dCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5ib2R5ID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuYm9keSA9IHRleHQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcblxuICAgICAgICB9KSA6IHJlc3BvbnNlO1xuXG4gICAgfSk7XG59O1xuXG5mdW5jdGlvbiBpc0pzb24oc3RyKSB7XG5cbiAgICB2YXIgc3RhcnQgPSBzdHIubWF0Y2goL15cXFt8Xlxceyg/IVxceykvKSwgZW5kID0geydbJzogL10kLywgJ3snOiAvfSQvfTtcblxuICAgIHJldHVybiBzdGFydCAmJiBlbmRbc3RhcnRbMF1dLnRlc3Qoc3RyKTtcbn1cblxuLyoqXG4gKiBKU09OUCBjbGllbnQgKEJyb3dzZXIpLlxuICovXG5cbnZhciBqc29ucENsaWVudCA9IGZ1bmN0aW9uIChyZXF1ZXN0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlT2JqKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG5cbiAgICAgICAgdmFyIG5hbWUgPSByZXF1ZXN0Lmpzb25wIHx8ICdjYWxsYmFjaycsIGNhbGxiYWNrID0gcmVxdWVzdC5qc29ucENhbGxiYWNrIHx8ICdfanNvbnAnICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIpLCBib2R5ID0gbnVsbCwgaGFuZGxlciwgc2NyaXB0O1xuXG4gICAgICAgIGhhbmRsZXIgPSBmdW5jdGlvbiAocmVmKSB7XG4gICAgICAgICAgICB2YXIgdHlwZSA9IHJlZi50eXBlO1xuXG5cbiAgICAgICAgICAgIHZhciBzdGF0dXMgPSAwO1xuXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2xvYWQnICYmIGJvZHkgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBzdGF0dXMgPSAyMDA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdlcnJvcicpIHtcbiAgICAgICAgICAgICAgICBzdGF0dXMgPSA1MDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzdGF0dXMgJiYgd2luZG93W2NhbGxiYWNrXSkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB3aW5kb3dbY2FsbGJhY2tdO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVzb2x2ZShyZXF1ZXN0LnJlc3BvbmRXaXRoKGJvZHksIHtzdGF0dXM6IHN0YXR1c30pKTtcbiAgICAgICAgfTtcblxuICAgICAgICB3aW5kb3dbY2FsbGJhY2tdID0gZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgYm9keSA9IEpTT04uc3RyaW5naWZ5KHJlc3VsdCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmVxdWVzdC5hYm9ydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGhhbmRsZXIoe3R5cGU6ICdhYm9ydCd9KTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXF1ZXN0LnBhcmFtc1tuYW1lXSA9IGNhbGxiYWNrO1xuXG4gICAgICAgIGlmIChyZXF1ZXN0LnRpbWVvdXQpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQocmVxdWVzdC5hYm9ydCwgcmVxdWVzdC50aW1lb3V0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICBzY3JpcHQuc3JjID0gcmVxdWVzdC5nZXRVcmwoKTtcbiAgICAgICAgc2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgICAgICAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcbiAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IGhhbmRsZXI7XG4gICAgICAgIHNjcmlwdC5vbmVycm9yID0gaGFuZGxlcjtcblxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgfSk7XG59O1xuXG4vKipcbiAqIEpTT05QIEludGVyY2VwdG9yLlxuICovXG5cbnZhciBqc29ucCA9IGZ1bmN0aW9uIChyZXF1ZXN0LCBuZXh0KSB7XG5cbiAgICBpZiAocmVxdWVzdC5tZXRob2QgPT0gJ0pTT05QJykge1xuICAgICAgICByZXF1ZXN0LmNsaWVudCA9IGpzb25wQ2xpZW50O1xuICAgIH1cblxuICAgIG5leHQoKTtcbn07XG5cbi8qKlxuICogQmVmb3JlIEludGVyY2VwdG9yLlxuICovXG5cbnZhciBiZWZvcmUgPSBmdW5jdGlvbiAocmVxdWVzdCwgbmV4dCkge1xuXG4gICAgaWYgKGlzRnVuY3Rpb24ocmVxdWVzdC5iZWZvcmUpKSB7XG4gICAgICAgIHJlcXVlc3QuYmVmb3JlLmNhbGwodGhpcywgcmVxdWVzdCk7XG4gICAgfVxuXG4gICAgbmV4dCgpO1xufTtcblxuLyoqXG4gKiBIVFRQIG1ldGhvZCBvdmVycmlkZSBJbnRlcmNlcHRvci5cbiAqL1xuXG52YXIgbWV0aG9kID0gZnVuY3Rpb24gKHJlcXVlc3QsIG5leHQpIHtcblxuICAgIGlmIChyZXF1ZXN0LmVtdWxhdGVIVFRQICYmIC9eKFBVVHxQQVRDSHxERUxFVEUpJC9pLnRlc3QocmVxdWVzdC5tZXRob2QpKSB7XG4gICAgICAgIHJlcXVlc3QuaGVhZGVycy5zZXQoJ1gtSFRUUC1NZXRob2QtT3ZlcnJpZGUnLCByZXF1ZXN0Lm1ldGhvZCk7XG4gICAgICAgIHJlcXVlc3QubWV0aG9kID0gJ1BPU1QnO1xuICAgIH1cblxuICAgIG5leHQoKTtcbn07XG5cbi8qKlxuICogSGVhZGVyIEludGVyY2VwdG9yLlxuICovXG5cbnZhciBoZWFkZXIgPSBmdW5jdGlvbiAocmVxdWVzdCwgbmV4dCkge1xuXG4gICAgdmFyIGhlYWRlcnMgPSBhc3NpZ24oe30sIEh0dHAuaGVhZGVycy5jb21tb24sXG4gICAgICAgICFyZXF1ZXN0LmNyb3NzT3JpZ2luID8gSHR0cC5oZWFkZXJzLmN1c3RvbSA6IHt9LFxuICAgICAgICBIdHRwLmhlYWRlcnNbdG9Mb3dlcihyZXF1ZXN0Lm1ldGhvZCldXG4gICAgKTtcblxuICAgIGVhY2goaGVhZGVycywgZnVuY3Rpb24gKHZhbHVlLCBuYW1lKSB7XG4gICAgICAgIGlmICghcmVxdWVzdC5oZWFkZXJzLmhhcyhuYW1lKSkge1xuICAgICAgICAgICAgcmVxdWVzdC5oZWFkZXJzLnNldChuYW1lLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIG5leHQoKTtcbn07XG5cbi8qKlxuICogWE1MSHR0cCBjbGllbnQgKEJyb3dzZXIpLlxuICovXG5cbnZhciB4aHJDbGllbnQgPSBmdW5jdGlvbiAocmVxdWVzdCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZU9iaihmdW5jdGlvbiAocmVzb2x2ZSkge1xuXG4gICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKSwgaGFuZGxlciA9IGZ1bmN0aW9uIChldmVudCkge1xuXG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSByZXF1ZXN0LnJlc3BvbmRXaXRoKFxuICAgICAgICAgICAgICAgICdyZXNwb25zZScgaW4geGhyID8geGhyLnJlc3BvbnNlIDogeGhyLnJlc3BvbnNlVGV4dCwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IHhoci5zdGF0dXMgPT09IDEyMjMgPyAyMDQgOiB4aHIuc3RhdHVzLCAvLyBJRTkgc3RhdHVzIGJ1Z1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXNUZXh0OiB4aHIuc3RhdHVzID09PSAxMjIzID8gJ05vIENvbnRlbnQnIDogdHJpbSh4aHIuc3RhdHVzVGV4dClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBlYWNoKHRyaW0oeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpKS5zcGxpdCgnXFxuJyksIGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgICAgICAgICAgICByZXNwb25zZS5oZWFkZXJzLmFwcGVuZChyb3cuc2xpY2UoMCwgcm93LmluZGV4T2YoJzonKSksIHJvdy5zbGljZShyb3cuaW5kZXhPZignOicpICsgMSkpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJlcXVlc3QuYWJvcnQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB4aHIuYWJvcnQoKTsgfTtcblxuICAgICAgICBpZiAocmVxdWVzdC5wcm9ncmVzcykge1xuICAgICAgICAgICAgaWYgKHJlcXVlc3QubWV0aG9kID09PSAnR0VUJykge1xuICAgICAgICAgICAgICAgIHhoci5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIHJlcXVlc3QucHJvZ3Jlc3MpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgvXihQT1NUfFBVVCkkL2kudGVzdChyZXF1ZXN0Lm1ldGhvZCkpIHtcbiAgICAgICAgICAgICAgICB4aHIudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgcmVxdWVzdC5wcm9ncmVzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB4aHIub3BlbihyZXF1ZXN0Lm1ldGhvZCwgcmVxdWVzdC5nZXRVcmwoKSwgdHJ1ZSk7XG5cbiAgICAgICAgaWYgKHJlcXVlc3QudGltZW91dCkge1xuICAgICAgICAgICAgeGhyLnRpbWVvdXQgPSByZXF1ZXN0LnRpbWVvdXQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVxdWVzdC5yZXNwb25zZVR5cGUgJiYgJ3Jlc3BvbnNlVHlwZScgaW4geGhyKSB7XG4gICAgICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gcmVxdWVzdC5yZXNwb25zZVR5cGU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVxdWVzdC53aXRoQ3JlZGVudGlhbHMgfHwgcmVxdWVzdC5jcmVkZW50aWFscykge1xuICAgICAgICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXJlcXVlc3QuY3Jvc3NPcmlnaW4pIHtcbiAgICAgICAgICAgIHJlcXVlc3QuaGVhZGVycy5zZXQoJ1gtUmVxdWVzdGVkLVdpdGgnLCAnWE1MSHR0cFJlcXVlc3QnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3QuaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwgbmFtZSkge1xuICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIobmFtZSwgdmFsdWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICB4aHIub25sb2FkID0gaGFuZGxlcjtcbiAgICAgICAgeGhyLm9uYWJvcnQgPSBoYW5kbGVyO1xuICAgICAgICB4aHIub25lcnJvciA9IGhhbmRsZXI7XG4gICAgICAgIHhoci5vbnRpbWVvdXQgPSBoYW5kbGVyO1xuICAgICAgICB4aHIuc2VuZChyZXF1ZXN0LmdldEJvZHkoKSk7XG4gICAgfSk7XG59O1xuXG4vKipcbiAqIEh0dHAgY2xpZW50IChOb2RlKS5cbiAqL1xuXG52YXIgbm9kZUNsaWVudCA9IGZ1bmN0aW9uIChyZXF1ZXN0KSB7XG5cbiAgICB2YXIgY2xpZW50ID0gcmVxdWlyZSgnZ290Jyk7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2VPYmooZnVuY3Rpb24gKHJlc29sdmUpIHtcblxuICAgICAgICB2YXIgdXJsID0gcmVxdWVzdC5nZXRVcmwoKTtcbiAgICAgICAgdmFyIGJvZHkgPSByZXF1ZXN0LmdldEJvZHkoKTtcbiAgICAgICAgdmFyIG1ldGhvZCA9IHJlcXVlc3QubWV0aG9kO1xuICAgICAgICB2YXIgaGVhZGVycyA9IHt9LCBoYW5kbGVyO1xuXG4gICAgICAgIHJlcXVlc3QuaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwgbmFtZSkge1xuICAgICAgICAgICAgaGVhZGVyc1tuYW1lXSA9IHZhbHVlO1xuICAgICAgICB9KTtcblxuICAgICAgICBjbGllbnQodXJsLCB7Ym9keTogYm9keSwgbWV0aG9kOiBtZXRob2QsIGhlYWRlcnM6IGhlYWRlcnN9KS50aGVuKGhhbmRsZXIgPSBmdW5jdGlvbiAocmVzcCkge1xuXG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSByZXF1ZXN0LnJlc3BvbmRXaXRoKHJlc3AuYm9keSwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IHJlc3Auc3RhdHVzQ29kZSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzVGV4dDogdHJpbShyZXNwLnN0YXR1c01lc3NhZ2UpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgZWFjaChyZXNwLmhlYWRlcnMsIGZ1bmN0aW9uICh2YWx1ZSwgbmFtZSkge1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmhlYWRlcnMuc2V0KG5hbWUsIHZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcblxuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyb3IkJDEpIHsgcmV0dXJuIGhhbmRsZXIoZXJyb3IkJDEucmVzcG9uc2UpOyB9KTtcbiAgICB9KTtcbn07XG5cbi8qKlxuICogQmFzZSBjbGllbnQuXG4gKi9cblxudmFyIENsaWVudCA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG5cbiAgICB2YXIgcmVxSGFuZGxlcnMgPSBbc2VuZFJlcXVlc3RdLCByZXNIYW5kbGVycyA9IFtdLCBoYW5kbGVyO1xuXG4gICAgaWYgKCFpc09iamVjdChjb250ZXh0KSkge1xuICAgICAgICBjb250ZXh0ID0gbnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBDbGllbnQocmVxdWVzdCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VPYmooZnVuY3Rpb24gKHJlc29sdmUpIHtcblxuICAgICAgICAgICAgZnVuY3Rpb24gZXhlYygpIHtcblxuICAgICAgICAgICAgICAgIGhhbmRsZXIgPSByZXFIYW5kbGVycy5wb3AoKTtcblxuICAgICAgICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKGhhbmRsZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXIuY2FsbChjb250ZXh0LCByZXF1ZXN0LCBuZXh0KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3YXJuKChcIkludmFsaWQgaW50ZXJjZXB0b3Igb2YgdHlwZSBcIiArICh0eXBlb2YgaGFuZGxlcikgKyBcIiwgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgbmV4dCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gbmV4dChyZXNwb25zZSkge1xuXG4gICAgICAgICAgICAgICAgaWYgKGlzRnVuY3Rpb24ocmVzcG9uc2UpKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgcmVzSGFuZGxlcnMudW5zaGlmdChyZXNwb25zZSk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlzT2JqZWN0KHJlc3BvbnNlKSkge1xuXG4gICAgICAgICAgICAgICAgICAgIHJlc0hhbmRsZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gd2hlbihyZXNwb25zZSwgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZXIuY2FsbChjb250ZXh0LCByZXNwb25zZSkgfHwgcmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgd2hlbihyZXNwb25zZSwgcmVzb2x2ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGV4ZWMoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZXhlYygpO1xuXG4gICAgICAgIH0sIGNvbnRleHQpO1xuICAgIH1cblxuICAgIENsaWVudC51c2UgPSBmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgICAgICByZXFIYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xuICAgIH07XG5cbiAgICByZXR1cm4gQ2xpZW50O1xufTtcblxuZnVuY3Rpb24gc2VuZFJlcXVlc3QocmVxdWVzdCwgcmVzb2x2ZSkge1xuXG4gICAgdmFyIGNsaWVudCA9IHJlcXVlc3QuY2xpZW50IHx8IChpbkJyb3dzZXIgPyB4aHJDbGllbnQgOiBub2RlQ2xpZW50KTtcblxuICAgIHJlc29sdmUoY2xpZW50KHJlcXVlc3QpKTtcbn1cblxuLyoqXG4gKiBIVFRQIEhlYWRlcnMuXG4gKi9cblxudmFyIEhlYWRlcnMgPSBmdW5jdGlvbiBIZWFkZXJzKGhlYWRlcnMpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuXG4gICAgdGhpcy5tYXAgPSB7fTtcblxuICAgIGVhY2goaGVhZGVycywgZnVuY3Rpb24gKHZhbHVlLCBuYW1lKSB7IHJldHVybiB0aGlzJDEuYXBwZW5kKG5hbWUsIHZhbHVlKTsgfSk7XG59O1xuXG5IZWFkZXJzLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiBoYXMgKG5hbWUpIHtcbiAgICByZXR1cm4gZ2V0TmFtZSh0aGlzLm1hcCwgbmFtZSkgIT09IG51bGw7XG59O1xuXG5IZWFkZXJzLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiBnZXQgKG5hbWUpIHtcblxuICAgIHZhciBsaXN0ID0gdGhpcy5tYXBbZ2V0TmFtZSh0aGlzLm1hcCwgbmFtZSldO1xuXG4gICAgcmV0dXJuIGxpc3QgPyBsaXN0LmpvaW4oKSA6IG51bGw7XG59O1xuXG5IZWFkZXJzLnByb3RvdHlwZS5nZXRBbGwgPSBmdW5jdGlvbiBnZXRBbGwgKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5tYXBbZ2V0TmFtZSh0aGlzLm1hcCwgbmFtZSldIHx8IFtdO1xufTtcblxuSGVhZGVycy5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gc2V0IChuYW1lLCB2YWx1ZSkge1xuICAgIHRoaXMubWFwW25vcm1hbGl6ZU5hbWUoZ2V0TmFtZSh0aGlzLm1hcCwgbmFtZSkgfHwgbmFtZSldID0gW3RyaW0odmFsdWUpXTtcbn07XG5cbkhlYWRlcnMucHJvdG90eXBlLmFwcGVuZCA9IGZ1bmN0aW9uIGFwcGVuZCAobmFtZSwgdmFsdWUpe1xuXG4gICAgdmFyIGxpc3QgPSB0aGlzLm1hcFtnZXROYW1lKHRoaXMubWFwLCBuYW1lKV07XG5cbiAgICBpZiAobGlzdCkge1xuICAgICAgICBsaXN0LnB1c2godHJpbSh2YWx1ZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0KG5hbWUsIHZhbHVlKTtcbiAgICB9XG59O1xuXG5IZWFkZXJzLnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbiBkZWxldGUkMSAobmFtZSl7XG4gICAgZGVsZXRlIHRoaXMubWFwW2dldE5hbWUodGhpcy5tYXAsIG5hbWUpXTtcbn07XG5cbkhlYWRlcnMucHJvdG90eXBlLmRlbGV0ZUFsbCA9IGZ1bmN0aW9uIGRlbGV0ZUFsbCAoKXtcbiAgICB0aGlzLm1hcCA9IHt9O1xufTtcblxuSGVhZGVycy5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIGZvckVhY2ggKGNhbGxiYWNrLCB0aGlzQXJnKSB7XG4gICAgICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgZWFjaCh0aGlzLm1hcCwgZnVuY3Rpb24gKGxpc3QsIG5hbWUpIHtcbiAgICAgICAgZWFjaChsaXN0LCBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIGNhbGxiYWNrLmNhbGwodGhpc0FyZywgdmFsdWUsIG5hbWUsIHRoaXMkMSk7IH0pO1xuICAgIH0pO1xufTtcblxuZnVuY3Rpb24gZ2V0TmFtZShtYXAsIG5hbWUpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMobWFwKS5yZWR1Y2UoZnVuY3Rpb24gKHByZXYsIGN1cnIpIHtcbiAgICAgICAgcmV0dXJuIHRvTG93ZXIobmFtZSkgPT09IHRvTG93ZXIoY3VycikgPyBjdXJyIDogcHJldjtcbiAgICB9LCBudWxsKTtcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplTmFtZShuYW1lKSB7XG5cbiAgICBpZiAoL1teYS16MC05XFwtIyQlJicqKy5cXF5fYHx+XS9pLnRlc3QobmFtZSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBjaGFyYWN0ZXIgaW4gaGVhZGVyIGZpZWxkIG5hbWUnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJpbShuYW1lKTtcbn1cblxuLyoqXG4gKiBIVFRQIFJlc3BvbnNlLlxuICovXG5cbnZhciBSZXNwb25zZSA9IGZ1bmN0aW9uIFJlc3BvbnNlKGJvZHksIHJlZikge1xuICAgIHZhciB1cmwgPSByZWYudXJsO1xuICAgIHZhciBoZWFkZXJzID0gcmVmLmhlYWRlcnM7XG4gICAgdmFyIHN0YXR1cyA9IHJlZi5zdGF0dXM7XG4gICAgdmFyIHN0YXR1c1RleHQgPSByZWYuc3RhdHVzVGV4dDtcblxuXG4gICAgdGhpcy51cmwgPSB1cmw7XG4gICAgdGhpcy5vayA9IHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwO1xuICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzIHx8IDA7XG4gICAgdGhpcy5zdGF0dXNUZXh0ID0gc3RhdHVzVGV4dCB8fCAnJztcbiAgICB0aGlzLmhlYWRlcnMgPSBuZXcgSGVhZGVycyhoZWFkZXJzKTtcbiAgICB0aGlzLmJvZHkgPSBib2R5O1xuXG4gICAgaWYgKGlzU3RyaW5nKGJvZHkpKSB7XG5cbiAgICAgICAgdGhpcy5ib2R5VGV4dCA9IGJvZHk7XG5cbiAgICB9IGVsc2UgaWYgKGlzQmxvYihib2R5KSkge1xuXG4gICAgICAgIHRoaXMuYm9keUJsb2IgPSBib2R5O1xuXG4gICAgICAgIGlmIChpc0Jsb2JUZXh0KGJvZHkpKSB7XG4gICAgICAgICAgICB0aGlzLmJvZHlUZXh0ID0gYmxvYlRleHQoYm9keSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5SZXNwb25zZS5wcm90b3R5cGUuYmxvYiA9IGZ1bmN0aW9uIGJsb2IgKCkge1xuICAgIHJldHVybiB3aGVuKHRoaXMuYm9keUJsb2IpO1xufTtcblxuUmVzcG9uc2UucHJvdG90eXBlLnRleHQgPSBmdW5jdGlvbiB0ZXh0ICgpIHtcbiAgICByZXR1cm4gd2hlbih0aGlzLmJvZHlUZXh0KTtcbn07XG5cblJlc3BvbnNlLnByb3RvdHlwZS5qc29uID0gZnVuY3Rpb24ganNvbiAoKSB7XG4gICAgcmV0dXJuIHdoZW4odGhpcy50ZXh0KCksIGZ1bmN0aW9uICh0ZXh0KSB7IHJldHVybiBKU09OLnBhcnNlKHRleHQpOyB9KTtcbn07XG5cbmZ1bmN0aW9uIGJsb2JUZXh0KGJvZHkpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2VPYmooZnVuY3Rpb24gKHJlc29sdmUpIHtcblxuICAgICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblxuICAgICAgICByZWFkZXIucmVhZEFzVGV4dChib2R5KTtcbiAgICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJlc29sdmUocmVhZGVyLnJlc3VsdCk7XG4gICAgICAgIH07XG5cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gaXNCbG9iVGV4dChib2R5KSB7XG4gICAgcmV0dXJuIGJvZHkudHlwZS5pbmRleE9mKCd0ZXh0JykgPT09IDAgfHwgYm9keS50eXBlLmluZGV4T2YoJ2pzb24nKSAhPT0gLTE7XG59XG5cbi8qKlxuICogSFRUUCBSZXF1ZXN0LlxuICovXG5cbnZhciBSZXF1ZXN0ID0gZnVuY3Rpb24gUmVxdWVzdChvcHRpb25zJCQxKSB7XG5cbiAgICB0aGlzLmJvZHkgPSBudWxsO1xuICAgIHRoaXMucGFyYW1zID0ge307XG5cbiAgICBhc3NpZ24odGhpcywgb3B0aW9ucyQkMSwge1xuICAgICAgICBtZXRob2Q6IHRvVXBwZXIob3B0aW9ucyQkMS5tZXRob2QgfHwgJ0dFVCcpXG4gICAgfSk7XG5cbiAgICBpZiAoISh0aGlzLmhlYWRlcnMgaW5zdGFuY2VvZiBIZWFkZXJzKSkge1xuICAgICAgICB0aGlzLmhlYWRlcnMgPSBuZXcgSGVhZGVycyh0aGlzLmhlYWRlcnMpO1xuICAgIH1cbn07XG5cblJlcXVlc3QucHJvdG90eXBlLmdldFVybCA9IGZ1bmN0aW9uIGdldFVybCAoKXtcbiAgICByZXR1cm4gVXJsKHRoaXMpO1xufTtcblxuUmVxdWVzdC5wcm90b3R5cGUuZ2V0Qm9keSA9IGZ1bmN0aW9uIGdldEJvZHkgKCl7XG4gICAgcmV0dXJuIHRoaXMuYm9keTtcbn07XG5cblJlcXVlc3QucHJvdG90eXBlLnJlc3BvbmRXaXRoID0gZnVuY3Rpb24gcmVzcG9uZFdpdGggKGJvZHksIG9wdGlvbnMkJDEpIHtcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKGJvZHksIGFzc2lnbihvcHRpb25zJCQxIHx8IHt9LCB7dXJsOiB0aGlzLmdldFVybCgpfSkpO1xufTtcblxuLyoqXG4gKiBTZXJ2aWNlIGZvciBzZW5kaW5nIG5ldHdvcmsgcmVxdWVzdHMuXG4gKi9cblxudmFyIENPTU1PTl9IRUFERVJTID0geydBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJ307XG52YXIgSlNPTl9DT05URU5UX1RZUEUgPSB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTgnfTtcblxuZnVuY3Rpb24gSHR0cChvcHRpb25zJCQxKSB7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXMgfHwge30sIGNsaWVudCA9IENsaWVudChzZWxmLiR2bSk7XG5cbiAgICBkZWZhdWx0cyhvcHRpb25zJCQxIHx8IHt9LCBzZWxmLiRvcHRpb25zLCBIdHRwLm9wdGlvbnMpO1xuXG4gICAgSHR0cC5pbnRlcmNlcHRvcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlcikge1xuXG4gICAgICAgIGlmIChpc1N0cmluZyhoYW5kbGVyKSkge1xuICAgICAgICAgICAgaGFuZGxlciA9IEh0dHAuaW50ZXJjZXB0b3JbaGFuZGxlcl07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNGdW5jdGlvbihoYW5kbGVyKSkge1xuICAgICAgICAgICAgY2xpZW50LnVzZShoYW5kbGVyKTtcbiAgICAgICAgfVxuXG4gICAgfSk7XG5cbiAgICByZXR1cm4gY2xpZW50KG5ldyBSZXF1ZXN0KG9wdGlvbnMkJDEpKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXG4gICAgICAgIHJldHVybiByZXNwb25zZS5vayA/IHJlc3BvbnNlIDogUHJvbWlzZU9iai5yZWplY3QocmVzcG9uc2UpO1xuXG4gICAgfSwgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cbiAgICAgICAgaWYgKHJlc3BvbnNlIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgIGVycm9yKHJlc3BvbnNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlT2JqLnJlamVjdChyZXNwb25zZSk7XG4gICAgfSk7XG59XG5cbkh0dHAub3B0aW9ucyA9IHt9O1xuXG5IdHRwLmhlYWRlcnMgPSB7XG4gICAgcHV0OiBKU09OX0NPTlRFTlRfVFlQRSxcbiAgICBwb3N0OiBKU09OX0NPTlRFTlRfVFlQRSxcbiAgICBwYXRjaDogSlNPTl9DT05URU5UX1RZUEUsXG4gICAgZGVsZXRlOiBKU09OX0NPTlRFTlRfVFlQRSxcbiAgICBjb21tb246IENPTU1PTl9IRUFERVJTLFxuICAgIGN1c3RvbToge31cbn07XG5cbkh0dHAuaW50ZXJjZXB0b3IgPSB7YmVmb3JlOiBiZWZvcmUsIG1ldGhvZDogbWV0aG9kLCBib2R5OiBib2R5LCBqc29ucDoganNvbnAsIGhlYWRlcjogaGVhZGVyLCBjb3JzOiBjb3JzfTtcbkh0dHAuaW50ZXJjZXB0b3JzID0gWydiZWZvcmUnLCAnbWV0aG9kJywgJ2JvZHknLCAnanNvbnAnLCAnaGVhZGVyJywgJ2NvcnMnXTtcblxuWydnZXQnLCAnZGVsZXRlJywgJ2hlYWQnLCAnanNvbnAnXS5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QkJDEpIHtcblxuICAgIEh0dHBbbWV0aG9kJCQxXSA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMkJDEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMoYXNzaWduKG9wdGlvbnMkJDEgfHwge30sIHt1cmw6IHVybCwgbWV0aG9kOiBtZXRob2QkJDF9KSk7XG4gICAgfTtcblxufSk7XG5cblsncG9zdCcsICdwdXQnLCAncGF0Y2gnXS5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QkJDEpIHtcblxuICAgIEh0dHBbbWV0aG9kJCQxXSA9IGZ1bmN0aW9uICh1cmwsIGJvZHkkJDEsIG9wdGlvbnMkJDEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMoYXNzaWduKG9wdGlvbnMkJDEgfHwge30sIHt1cmw6IHVybCwgbWV0aG9kOiBtZXRob2QkJDEsIGJvZHk6IGJvZHkkJDF9KSk7XG4gICAgfTtcblxufSk7XG5cbi8qKlxuICogU2VydmljZSBmb3IgaW50ZXJhY3Rpbmcgd2l0aCBSRVNUZnVsIHNlcnZpY2VzLlxuICovXG5cbmZ1bmN0aW9uIFJlc291cmNlKHVybCwgcGFyYW1zLCBhY3Rpb25zLCBvcHRpb25zJCQxKSB7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXMgfHwge30sIHJlc291cmNlID0ge307XG5cbiAgICBhY3Rpb25zID0gYXNzaWduKHt9LFxuICAgICAgICBSZXNvdXJjZS5hY3Rpb25zLFxuICAgICAgICBhY3Rpb25zXG4gICAgKTtcblxuICAgIGVhY2goYWN0aW9ucywgZnVuY3Rpb24gKGFjdGlvbiwgbmFtZSkge1xuXG4gICAgICAgIGFjdGlvbiA9IG1lcmdlKHt1cmw6IHVybCwgcGFyYW1zOiBhc3NpZ24oe30sIHBhcmFtcyl9LCBvcHRpb25zJCQxLCBhY3Rpb24pO1xuXG4gICAgICAgIHJlc291cmNlW25hbWVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIChzZWxmLiRodHRwIHx8IEh0dHApKG9wdHMoYWN0aW9uLCBhcmd1bWVudHMpKTtcbiAgICAgICAgfTtcbiAgICB9KTtcblxuICAgIHJldHVybiByZXNvdXJjZTtcbn1cblxuZnVuY3Rpb24gb3B0cyhhY3Rpb24sIGFyZ3MpIHtcblxuICAgIHZhciBvcHRpb25zJCQxID0gYXNzaWduKHt9LCBhY3Rpb24pLCBwYXJhbXMgPSB7fSwgYm9keTtcblxuICAgIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcblxuICAgICAgICBjYXNlIDI6XG5cbiAgICAgICAgICAgIHBhcmFtcyA9IGFyZ3NbMF07XG4gICAgICAgICAgICBib2R5ID0gYXJnc1sxXTtcblxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAxOlxuXG4gICAgICAgICAgICBpZiAoL14oUE9TVHxQVVR8UEFUQ0gpJC9pLnRlc3Qob3B0aW9ucyQkMS5tZXRob2QpKSB7XG4gICAgICAgICAgICAgICAgYm9keSA9IGFyZ3NbMF07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmFtcyA9IGFyZ3NbMF07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMDpcblxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcblxuICAgICAgICAgICAgdGhyb3cgJ0V4cGVjdGVkIHVwIHRvIDIgYXJndW1lbnRzIFtwYXJhbXMsIGJvZHldLCBnb3QgJyArIGFyZ3MubGVuZ3RoICsgJyBhcmd1bWVudHMnO1xuICAgIH1cblxuICAgIG9wdGlvbnMkJDEuYm9keSA9IGJvZHk7XG4gICAgb3B0aW9ucyQkMS5wYXJhbXMgPSBhc3NpZ24oe30sIG9wdGlvbnMkJDEucGFyYW1zLCBwYXJhbXMpO1xuXG4gICAgcmV0dXJuIG9wdGlvbnMkJDE7XG59XG5cblJlc291cmNlLmFjdGlvbnMgPSB7XG5cbiAgICBnZXQ6IHttZXRob2Q6ICdHRVQnfSxcbiAgICBzYXZlOiB7bWV0aG9kOiAnUE9TVCd9LFxuICAgIHF1ZXJ5OiB7bWV0aG9kOiAnR0VUJ30sXG4gICAgdXBkYXRlOiB7bWV0aG9kOiAnUFVUJ30sXG4gICAgcmVtb3ZlOiB7bWV0aG9kOiAnREVMRVRFJ30sXG4gICAgZGVsZXRlOiB7bWV0aG9kOiAnREVMRVRFJ31cblxufTtcblxuLyoqXG4gKiBJbnN0YWxsIHBsdWdpbi5cbiAqL1xuXG5mdW5jdGlvbiBwbHVnaW4oVnVlKSB7XG5cbiAgICBpZiAocGx1Z2luLmluc3RhbGxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgVXRpbChWdWUpO1xuXG4gICAgVnVlLnVybCA9IFVybDtcbiAgICBWdWUuaHR0cCA9IEh0dHA7XG4gICAgVnVlLnJlc291cmNlID0gUmVzb3VyY2U7XG4gICAgVnVlLlByb21pc2UgPSBQcm9taXNlT2JqO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoVnVlLnByb3RvdHlwZSwge1xuXG4gICAgICAgICR1cmw6IHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25zKFZ1ZS51cmwsIHRoaXMsIHRoaXMuJG9wdGlvbnMudXJsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAkaHR0cDoge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMoVnVlLmh0dHAsIHRoaXMsIHRoaXMuJG9wdGlvbnMuaHR0cCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgJHJlc291cmNlOiB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gVnVlLnJlc291cmNlLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgJHByb21pc2U6IHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChleGVjdXRvcikgeyByZXR1cm4gbmV3IFZ1ZS5Qcm9taXNlKGV4ZWN1dG9yLCB0aGlzJDEpOyB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9KTtcbn1cblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5WdWUpIHtcbiAgICB3aW5kb3cuVnVlLnVzZShwbHVnaW4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBsdWdpbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtcmVzb3VyY2UvZGlzdC92dWUtcmVzb3VyY2UuY29tbW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIChpZ25vcmVkKSAqL1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGdvdCAoaWdub3JlZClcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vdXNhZ2UudnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi1iYWNiYzIyMiF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi91c2FnZS52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiL1VzZXJzL296L3NyYy9tYXRlcmlhbC1jb21wb25lbnRzL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL3VzYWdlLnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtYmFjYmMyMjJcIiwgX192dWVfb3B0aW9uc19fKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtYmFjYmMyMjJcIiwgX192dWVfb3B0aW9uc19fKVxuICB9XG59KSgpfVxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSB1c2FnZS52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy91c2FnZS52dWUiLCI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPGgzPkdldHRpbmcgc3RhcnRlZDwvaDM+XG5cbiAgICAgICAgPGg0Pkp1c3QgYWRkIHRoZSBmb2xsb3dpbmcgJiN4M0M7bGluayYjeDNFOyBhbmQgJiN4M0M7c2NyaXB0JiN4M0U7IGVsZW1lbnRzIGludG8geW91ciBIVE1MIHBhZ2VzPC9oND5cblxuICAgICAgICA8cHJlIHYtcHJlPlxuICAgICAgICAgICAgPGNvZGUgY2xhc3M9XCJodG1sXCI+XG4gICAgICAgICAgICAgICAgLy8gTWF0ZXJpYWwgRGVzaWduIEljb25zXG4gICAgICAgICAgICAgICAgJiN4M0M7bGluayByZWw9JiN4MjI7c3R5bGVzaGVldCYjeDIyOyBocmVmPSYjeDIyO2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vaWNvbj9mYW1pbHk9TWF0ZXJpYWwrSWNvbnMmI3gyMjsmI3gzRTtcblxuICAgICAgICAgICAgICAgIC8vIE1hdGVyaWFsIERlc2lnbiBMaXRlXG4gICAgICAgICAgICAgICAgJiN4M0M7bGluayByZWw9JiN4MjI7c3R5bGVzaGVldCYjeDIyOyBocmVmPSYjeDIyO2h0dHBzOi8vY29kZS5nZXRtZGwuaW8vMS4zLjAvbWF0ZXJpYWwuaW5kaWdvLXBpbmsubWluLmNzcyYjeDIyOyYjeDNFO1xuICAgICAgICAgICAgICAgICYjeDNDO3NjcmlwdCBzcmM9JiN4MjI7aHR0cHM6Ly9jb2RlLmdldG1kbC5pby8xLjMuMC9tYXRlcmlhbC5taW4uanMmI3gyMjsmI3gzRTsmI3gzQzsvc2NyaXB0JiN4M0U7XG5cbiAgICAgICAgICAgICAgICAvLyBWdWUuSnNcbiAgICAgICAgICAgICAgICAmI3gzQztzY3JpcHQgc3JjPSYjeDIyO2h0dHBzOi8vdW5wa2cuY29tL3Z1ZS9kaXN0L3Z1ZS5taW4uanMmI3gyMjsmI3gzRTsmI3gzQzsvc2NyaXB0JiN4M0U7XG5cbiAgICAgICAgICAgICAgICAvLyBWdWUgTWF0ZXJpYWwgQ29tcG9uZW50c1xuICAgICAgICAgICAgICAgICYjeDNDO3NjcmlwdCBzcmM9JiN4MjI7aHR0cHM6Ly91bnBrZy5jb20vbWlsby1tYXRlcmlhbC1jb21wb25lbnRzQDEuMC4wL2Rpc3QvbGliLmJ1aWxkLmpzJiN4MjI7JiN4M0U7JiN4M0M7L3NjcmlwdCYjeDNFO1xuICAgICAgICAgICAgPC9jb2RlPlxuICAgICAgICA8L3ByZT5cblxuXG4gICAgICAgIDxwcmUgdi1wcmU+XG4gICAgICAgICAgICA8Y29kZSBjbGFzcz1cImh0bWxcIj5cbiAgICAgICAgICAgICAgICAmI3gzQztkaXYgaWQ9JiN4MjI7YXBwJiN4MjI7JiN4M0U7XG4gICAgICAgICAgICAgICAgICAgICYjeDNDO20tYnV0dG9uIHJhaXNlZCBwcmltYXJ5IHJpcHBsZSYjeDNFO01hdGVyaWFsIGJ1dHRvbiYjeDNDOy9tLWJ1dHRvbiYjeDNFO1xuICAgICAgICAgICAgICAgICYjeDNDOy9kaXYmI3gzRTtcblxuICAgICAgICAgICAgICAgICYjeDNDO3NjcmlwdCYjeDNFO1xuICAgICAgICAgICAgICAgICAgICBWdWUudXNlKFZ1ZVJldXNhYmxlTWF0ZXJpYWxDb21wb25lbnRzKTtcblxuICAgICAgICAgICAgICAgICAgICBuZXcgVnVlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsOiAmI3gyNzsjYXBwJiN4Mjc7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICYjeDNDOy9zY3JpcHQmI3gzRTtcbiAgICAgICAgICAgIDwvY29kZT5cbiAgICAgICAgPC9wcmU+XG5cbiAgICAgICAgPHA+XG4gICAgICAgICAgICA8aDQ+PGEgaHJlZj1cImh0dHBzOi8vanNmaWRkbGUubmV0L296em9uOTEvMm5wNjdva3gvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+T3BlbiBleGFtcGxlIGFib3ZlIG9uIGpzZmlkZGxlPC9hPjwvaDQ+XG4gICAgICAgIDwvcD5cblxuXG4gICAgICAgIDxoND5JbnN0YWxsIGZyb20gbnBtPC9oND5cblxuICAgICAgICAgICAgPHByZSB2LXByZT5cbiAgICAgICAgICAgICAgICA8Y29kZSBjbGFzcz1cImh0bWxcIj5cbm5wbSBpIC1TIG1pbG8tbWF0ZXJpYWwtY29tcG9uZW50c1xuICAgICAgICAgICAgICAgIDwvY29kZT5cbiAgICAgICAgICAgIDwvcHJlPlxuXG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdHtcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIHRoaXMuJGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5odG1sJykuZm9yRWFjaChlbCA9PiBobGpzLmhpZ2hsaWdodEJsb2NrKGVsKSlcbiAgICAgICAgfSxcblxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHt9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB1c2FnZS52dWU/MjA0OTdmNDMiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX3ZtLl9tKDApXG59LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygnaDMnLCBbX3ZtLl92KFwiR2V0dGluZyBzdGFydGVkXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdoNCcsIFtfdm0uX3YoXCJKdXN0IGFkZCB0aGUgZm9sbG93aW5nIDxsaW5rPiBhbmQgPHNjcmlwdD4gZWxlbWVudHMgaW50byB5b3VyIEhUTUwgcGFnZXNcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3ByZScsIHtcbiAgICBwcmU6IHRydWVcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgIFwiKSwgX2MoJ2NvZGUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiY2xhc3NcIjogXCJodG1sXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgLy8gTWF0ZXJpYWwgRGVzaWduIEljb25zXFxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cXFwic3R5bGVzaGVldFxcXCIgaHJlZj1cXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29uc1xcXCI+XFxuXFxuICAgICAgICAgICAgICAgIC8vIE1hdGVyaWFsIERlc2lnbiBMaXRlXFxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cXFwic3R5bGVzaGVldFxcXCIgaHJlZj1cXFwiaHR0cHM6Ly9jb2RlLmdldG1kbC5pby8xLjMuMC9tYXRlcmlhbC5pbmRpZ28tcGluay5taW4uY3NzXFxcIj5cXG4gICAgICAgICAgICAgICAgPHNjcmlwdCBzcmM9XFxcImh0dHBzOi8vY29kZS5nZXRtZGwuaW8vMS4zLjAvbWF0ZXJpYWwubWluLmpzXFxcIj48L3NjcmlwdD5cXG5cXG4gICAgICAgICAgICAgICAgLy8gVnVlLkpzXFxuICAgICAgICAgICAgICAgIDxzY3JpcHQgc3JjPVxcXCJodHRwczovL3VucGtnLmNvbS92dWUvZGlzdC92dWUubWluLmpzXFxcIj48L3NjcmlwdD5cXG5cXG4gICAgICAgICAgICAgICAgLy8gVnVlIE1hdGVyaWFsIENvbXBvbmVudHNcXG4gICAgICAgICAgICAgICAgPHNjcmlwdCBzcmM9XFxcImh0dHBzOi8vdW5wa2cuY29tL21pbG8tbWF0ZXJpYWwtY29tcG9uZW50c0AxLjAuMC9kaXN0L2xpYi5idWlsZC5qc1xcXCI+PC9zY3JpcHQ+XFxuICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIlxcbiAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdwcmUnLCB7XG4gICAgcHJlOiB0cnVlXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBcIiksIF9jKCdjb2RlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImNsYXNzXCI6IFwiaHRtbFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XFxcImFwcFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8bS1idXR0b24gcmFpc2VkIHByaW1hcnkgcmlwcGxlPk1hdGVyaWFsIGJ1dHRvbjwvbS1idXR0b24+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICA8c2NyaXB0PlxcbiAgICAgICAgICAgICAgICAgICAgVnVlLnVzZShWdWVSZXVzYWJsZU1hdGVyaWFsQ29tcG9uZW50cyk7XFxuXFxuICAgICAgICAgICAgICAgICAgICBuZXcgVnVlKHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBlbDogJyNhcHAnXFxuICAgICAgICAgICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICAgICAgPC9zY3JpcHQ+XFxuICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIlxcbiAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdwJyksIF9jKCdoNCcsIFtfYygnYScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly9qc2ZpZGRsZS5uZXQvb3p6b245MS8ybnA2N29reC9cIixcbiAgICAgIFwidGFyZ2V0XCI6IFwiX2JsYW5rXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJPcGVuIGV4YW1wbGUgYWJvdmUgb24ganNmaWRkbGVcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncCcpLCBfdm0uX3YoXCIgXCIpLCBfYygnaDQnLCBbX3ZtLl92KFwiSW5zdGFsbCBmcm9tIG5wbVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncHJlJywge1xuICAgIHByZTogdHJ1ZVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIFwiKSwgX2MoJ2NvZGUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiY2xhc3NcIjogXCJodG1sXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG5ucG0gaSAtUyBtaWxvLW1hdGVyaWFsLWNvbXBvbmVudHNcXG4gICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIlxcbiAgICAgICAgICAgIFwiKV0pXSlcbn1dfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi1iYWNiYzIyMlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtYmFjYmMyMjIhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL3VzYWdlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9uYXYudnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0zNzQ3ZTIxZSF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9uYXYudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIi9Vc2Vycy9vei9zcmMvbWF0ZXJpYWwtY29tcG9uZW50cy9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9uYXYudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0zNzQ3ZTIxZVwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0zNzQ3ZTIxZVwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH1cbn0pKCl9XG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIG5hdi52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9uYXYudnVlIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJtZGwtbGF5b3V0X19kcmF3ZXJcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJtZGwtbGF5b3V0LXRpdGxlXCI+RXhhbXBsZXM8L3NwYW4+XG4gICAgICAgIDxuYXYgY2xhc3M9XCJtZGwtbmF2aWdhdGlvblwiPlxuICAgICAgICAgICAgPHJvdXRlci1saW5rIHRvPVwiL3VzYWdlXCIgY2xhc3M9XCJtZGwtbmF2aWdhdGlvbl9fbGlua1wiPlxuICAgICAgICAgICAgICAgIDxiPkdldHRpbmcgc3RhcnRlZDwvYj5cbiAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XG5cbiAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCInLycraS5wYXRoXCIgdi1mb3I9XCJpIGluIHNvcnRlZE1lbnVJdGVtc1wiIGNsYXNzPVwibWRsLW5hdmlnYXRpb25fX2xpbmtcIj5cbiAgICAgICAgICAgICAgICB7e2kudGl0bGV9fVxuICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cbiAgICAgICAgPC9uYXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgc29ydEJ5S2V5IH0gZnJvbSAnLi4vaGVscGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb21wdXRlZDoge1xuICAgICAgICBzb3J0ZWRNZW51SXRlbXMoKSB7XG4gICAgICAgICAgICByZXR1cm4gc29ydEJ5S2V5KHRoaXMubWVudUl0ZW1zLCAndGl0bGUnKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWVudUl0ZW1zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1RleHQgRmllbGRzJyxcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogJ3RleHRmaWVsZHMnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0J1dHRvbnMnLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiAnYnV0dG9ucycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnU25hY2tiYXInLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiAnc25hY2tiYXInLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1NlbGVjdHMnLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiAnc2VsZWN0cycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnU2xpZGVycycsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6ICdzbGlkZXJzJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdCYWRnZXMnLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiAnYmFkZ2VzJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdNZW51JyxcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogJ21lbnUnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0xvYWRpbmcnLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiAnbG9hZGluZycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnVG9nZ2xlcycsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6ICd0b2dnbGVzJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdUYWJzJyxcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogJ3RhYnMnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1Rvb2x0aXBzJyxcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogJ3Rvb2x0aXBzJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdUYWJsZXMnLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiAndGFibGUnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0RpYWxvZ3MnLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiAnZGlhbG9ncycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnQ2FyZHMnLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiAnY2FyZHMnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0NoaXBzJyxcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogJ2NoaXBzJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdMaXN0cycsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6ICdsaXN0cycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF1cblxuICAgICAgICB9XG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbmF2LnZ1ZT8xYzEzYWIyZSIsImV4cG9ydCBmdW5jdGlvbiBzb3J0QnlLZXkoYXJyYXksIGtleSkge1xuICByZXR1cm4gYXJyYXkuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgdmFyIHggPSBhW2tleV07IHZhciB5ID0gYltrZXldO1xuICAgIHJldHVybiAoKHggPCB5KSA/IC0xIDogKCh4ID4geSkgPyAxIDogMCkpO1xuICB9KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2V4YW1wbGVzL3NyYy9oZWxwZXJzLmpzIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWRsLWxheW91dF9fZHJhd2VyXCJcbiAgfSwgW19jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kbC1sYXlvdXQtdGl0bGVcIlxuICB9LCBbX3ZtLl92KFwiRXhhbXBsZXNcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ25hdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZGwtbmF2aWdhdGlvblwiXG4gIH0sIFtfYygncm91dGVyLWxpbmsnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWRsLW5hdmlnYXRpb25fX2xpbmtcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0b1wiOiBcIi91c2FnZVwiXG4gICAgfVxuICB9LCBbX2MoJ2InLCBbX3ZtLl92KFwiR2V0dGluZyBzdGFydGVkXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9sKChfdm0uc29ydGVkTWVudUl0ZW1zKSwgZnVuY3Rpb24oaSkge1xuICAgIHJldHVybiBfYygncm91dGVyLWxpbmsnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJtZGwtbmF2aWdhdGlvbl9fbGlua1wiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJ0b1wiOiAnLycgKyBpLnBhdGhcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgXCIgKyBfdm0uX3MoaS50aXRsZSkgKyBcIlxcbiAgICAgICAgXCIpXSlcbiAgfSldLCAyKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTM3NDdlMjFlXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0zNzQ3ZTIxZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvbmF2LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vdGV4dGZpZWxkcy52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTZkMjMwODQ4IXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3RleHRmaWVsZHMudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIi9Vc2Vycy9vei9zcmMvbWF0ZXJpYWwtY29tcG9uZW50cy9leGFtcGxlcy9zcmMvY29tcG9uZW50cy90ZXh0ZmllbGRzLnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNmQyMzA4NDhcIiwgX192dWVfb3B0aW9uc19fKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNmQyMzA4NDhcIiwgX192dWVfb3B0aW9uc19fKVxuICB9XG59KSgpfVxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSB0ZXh0ZmllbGRzLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL3RleHRmaWVsZHMudnVlIiwiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxoND5UZXh0IEZpZWxkczwvaDQ+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxtLXRleHRmaWVsZCBsYWJlbD1cIlRleHQuLi5cIj48L20tdGV4dGZpZWxkPlxuICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgPG0tdGV4dGZpZWxkIGZsb2F0LWxhYmVsPVwiVGV4dGFyZWEuLi5cIiB0ZXh0YXJlYT48L20tdGV4dGZpZWxkPlxuICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgPG0tdGV4dGZpZWxkIGxhYmVsPVwiTnVtYmVyLi4uXCIgcGF0dGVybj1cIi0/WzAtOV0qKFxcLlswLTldKyk/XCIgZXJyb3I9XCJJbnZhbGlkIGlucHV0XCI+PC9tLXRleHRmaWVsZD5cbiAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgIDxtLXRleHRmaWVsZCBleHBhbmRhYmxlPVwic2VhcmNoXCIgaWQ9XCJ0ZXN0LWlkLXNlYXJjaFwiIGZsb2F0LWxhYmVsPVwiRXhwYW5kaW5nLi4uXCI+PC9tLXRleHRmaWVsZD5cbiAgICAgICAgICAgIDxicj5cblxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8cHJlIHYtcHJlPlxuICAgICAgICAgICAgICAgICAgICA8Y29kZSBjbGFzcz1cImh0bWxcIj5cbiAgICAgICAgICAgICAgICAmI3gzQzttLXRleHRmaWVsZCBsYWJlbD0mI3gyMjtUZXh0Li4uJiN4MjI7JiN4M0U7JiN4M0M7L20tdGV4dGZpZWxkJiN4M0U7XG4gICAgICAgICAgICAgICAgJiN4M0M7bS10ZXh0ZmllbGQgZmxvYXQtbGFiZWw9JiN4MjI7VGV4dGFyZWEuLi4mI3gyMjsgdGV4dGFyZWEmI3gzRTsmI3gzQzsvbS10ZXh0ZmllbGQmI3gzRTtcbiAgICAgICAgICAgICAgICAmI3gzQzttLXRleHRmaWVsZCBsYWJlbD0mI3gyMjtOdW1iZXIuLi4mI3gyMjsgcGF0dGVybj0mI3gyMjstP1swLTldKihcXC5bMC05XSspPyYjeDIyOyBlcnJvcj0mI3gyMjtJbnZhbGlkIGlucHV0JiN4MjI7JiN4M0U7JiN4M0M7L20tdGV4dGZpZWxkJiN4M0U7XG4gICAgICAgICAgICAgICAgJiN4M0M7bS10ZXh0ZmllbGQgZXhwYW5kYWJsZT0mI3gyMjtzZWFyY2gmI3gyMjsgaWQ9JiN4MjI7dGVzdC1pZC1zZWFyY2gmI3gyMjsgZmxvYXQtbGFiZWw9JiN4MjI7RXhwYW5kaW5nLi4uJiN4MjI7JiN4M0U7JiN4M0M7L20tdGV4dGZpZWxkJiN4M0U7XG4gICAgICAgICAgICAgICAgICAgIDwvY29kZT5cbiAgICAgICAgICAgICAgICA8L3ByZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGg0PlRlc3QgRm9ybTwvaDQ+XG5cbiAgICAgICAgICAgIDxmb3JtIEBzdWJtaXQucHJldmVudD1cIm9uU3VibWl0XCI+XG4gICAgICAgICAgICAgICAgPG0tdGV4dGZpZWxkIGZsb2F0LWxhYmVsPVwiRmlyc3QgTmFtZVwiIHYtbW9kZWw9XCJmb3JtLmZpcnN0TmFtZVwiPjwvbS10ZXh0ZmllbGQ+XG4gICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgIDxtLXRleHRmaWVsZCBmbG9hdC1sYWJlbD1cIkxhc3QgTmFtZVwiIHYtbW9kZWw9XCJmb3JtLmxhc3ROYW1lXCI+PC9tLXRleHRmaWVsZD5cbiAgICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgICAgPG0tdGV4dGZpZWxkIGZsb2F0LWxhYmVsPVwiRW1haWxcIiBwYXR0ZXJuPVwiKC4rKUAoLispezIsfVxcLiguKyl7Mix9XCIgZXJyb3I9XCJJbnZhbGlkIGVtYWlsXCI+PC9tLXRleHRmaWVsZD5cbiAgICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgICAgPG0tdGV4dGZpZWxkIGZsb2F0LWxhYmVsPVwiUGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiB2LW1vZGVsPVwiZm9ybS5wYXNzd29yZFwiIHBhdHRlcm49XCIuezMsfVwiPjwvbS10ZXh0ZmllbGQ+XG4gICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgIDxtLXRleHRmaWVsZCBmbG9hdC1sYWJlbD1cIkNvbmZpcm0gcGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiBwYXR0ZXJuPVwiLnszLH1cIiBlcnJvcj1cIlBhc3N3b3JkcyBub3QgbWF0Y2hcIj48L20tdGV4dGZpZWxkPlxuICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uIG1kbC1idXR0b24tLXJhaXNlZFwiIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgQnV0dG9uXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgICAgIDxkaXY+e3tmb3JtfX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPG0tdGFibGUgc3R5bGU9XCJ3aWR0aDogMTAwJVwiPlxuICAgICAgICAgICAgPG0tdGFibGUtaGVhZD5cbiAgICAgICAgICAgICAgICA8bS10YWJsZS1yb3c+XG4gICAgICAgICAgICAgICAgICAgIDxtLXRhYmxlLWg+UHJvcDwvbS10YWJsZS1oPlxuICAgICAgICAgICAgICAgICAgICA8bS10YWJsZS1oPkVmZmVjdDwvbS10YWJsZS1oPlxuICAgICAgICAgICAgICAgICAgICA8bS10YWJsZS1oPlJlbWFya3M8L20tdGFibGUtaD5cbiAgICAgICAgICAgICAgICA8L20tdGFibGUtcm93PlxuICAgICAgICAgICAgPC9tLXRhYmxlLWhlYWQ+XG5cbiAgICAgICAgICAgIDxtLXRhYmxlLWJvZHk+XG4gICAgICAgICAgICAgICAgPG0tdGFibGUtcm93IHYtZm9yPVwicHJvcCBpbiBkb2NcIj5cbiAgICAgICAgICAgICAgICAgICAgPG0tdGFibGUtY2VsbD57e3Byb3AubmFtZX19PC9tLXRhYmxlLWNlbGw+XG4gICAgICAgICAgICAgICAgICAgIDxtLXRhYmxlLWNlbGw+e3twcm9wLmRlc2NyaXB0aW9ufX08L20tdGFibGUtY2VsbD5cbiAgICAgICAgICAgICAgICAgICAgPG0tdGFibGUtY2VsbD57e3Byb3AucmVtYXJrfX08L20tdGFibGUtY2VsbD5cbiAgICAgICAgICAgICAgICA8L20tdGFibGUtcm93PlxuICAgICAgICAgICAgPC9tLXRhYmxlLWJvZHk+XG4gICAgICAgIDwvbS10YWJsZT5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbW91bnRlZCgpIHtcbiAgICAgICB0aGlzLiRlbC5xdWVyeVNlbGVjdG9yQWxsKCcuaHRtbCcpLmZvckVhY2goZWwgPT4gaGxqcy5oaWdobGlnaHRCbG9jayhlbCkpXG4gICAgfSxcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZm9ybToge1xuICAgICAgICAgICAgICAgIGZpcnN0TmFtZTogJycsXG4gICAgICAgICAgICAgICAgbGFzdE5hbWU6ICcnLFxuICAgICAgICAgICAgICAgIGVtYWlsOiAnJ1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgZG9jOiBbXG4gICAgICAgICAgICAgICAge25hbWU6ICd2LW1vZGVsJywgZGVzY3JpcHRpb246ICdEZWZpbmVzIGEgdmFsdWUgZm9yIHRoZSB0ZXh0ZmllbGQnLCByZW1hcms6ICcnfSxcbiAgICAgICAgICAgICAgICB7bmFtZTogJ2xhYmVsJywgZGVzY3JpcHRpb246ICdEZWZpbmVzIHRoZSBsYWJlbCB1c2VkIG9uIHRoZSB0aGUgdGV4dGZpZWxkJywgcmVtYXJrOiAnWW91IGRvblxcJ3QgbmVlZCB0aGlzIGlmIHlvdSB1c2UgZmxvYXRpbmctbGFiZWwnfSxcbiAgICAgICAgICAgICAgICB7bmFtZTogJ2Zsb2F0aW5nLWxhYmVsJywgZGVzY3JpcHRpb246ICdEZWZpbmVzIHdoZXRoZXIgdGhlIGxhYmVsIHNob3VsZCBmbG9hdCBvciBub3QuIElmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhIFN0cmluZywgeW91IGRvblxcJ3QgbmVlZCB0byBwcm92aWRlIGEgbGFiZWwgcHJvcCcsIHJlbWFyazogJyd9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAndGV4dGFyZWEnLCBkZXNjcmlwdGlvbjogJ01ha2VzIHRoZSB0ZXh0ZmllbGQgYSB0ZXh0YXJlYSBpbnN0ZWFkIG9mIGFuIGlucHV0JywgcmVtYXJrOiAnJ30sXG4gICAgICAgICAgICAgICAge25hbWU6ICdyb3dzJywgZGVzY3JpcHRpb246ICdDb250cm9scyB0aGUgbnVtYmVyIG9mIHJvd3MgdXNlZCBpbiB0aGUgdGV4dGFyZWEnLCByZW1hcms6ICdOZWVkcyB0aGUgdGV4dGFyZWEgcHJvcCd9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAncGF0dGVybicsIGRlc2NyaXB0aW9uOiAnSW5wdXQgdmFsaWRhdGlvbiB1c2luZyBhIFJlZ2V4JywgcmVtYXJrOiAnT25seSB3b3JrcyBvbiBub24tdGV4dGFyZWFzJ30sXG4gICAgICAgICAgICAgICAge25hbWU6ICdlcnJvcicsIGRlc2NyaXB0aW9uOiAnRGVmaW5lcyB0aGUgZXJyb3IgZGlzcGxheWVkIHdoZW4gdGhlIGlucHV0IHRleHQgZG9lc25cXCd0IG1hdGNoIHRoZSBnaXZlbiBwYXR0ZXJuJywgcmVtYXJrOiAnTmVlZHMgdGhlIHBhdHRlcm4gcHJvcCd9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnZXhwYW5kYWJsZScsIGRlc2NyaXB0aW9uOiAnTWFrZXMgdGhlIHRleHRmaWVsZCBsb29rIGxpa2UgYSBidXR0b24gdGhhdCBleHBhbmRzLiBZb3UgbmVlZCB0byBwYXNzIGEgbWF0ZXJpYWwgaWNvbiB0byB0aGlzIHByb3AnLCByZW1hcms6ICdOZWVkcyB0byBoYXZlIGFuIGlkIHNldCd9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAndHlwZScsIGRlc2NyaXB0aW9uOiAnRGVmaW5lcyB0aGUgdHlwZSBvZiB0aGUgaW5wdXQnLCByZW1hcms6ICdEZWZhdWx0cyB0byB0ZXh0LiBPbmx5IHdvcmtzIG9uIG5vbi10ZXh0YXJlYSd9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnZGlzYWJsZWQnLCBkZXNjcmlwdGlvbjogJ0Rpc2FibGVzIHRoZSBpbnB1dCcsIHJlbWFyazogJ0FkZCBpdCB3aXRob3V0IGFueSB2YWx1ZSBvciBiaW5kIGl0IHRvIGEgQm9vbGVhbid9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAncmVhZG9ubHknLCBkZXNjcmlwdGlvbjogJ01ha2VzIHRoZSBpbnB1dCByZWFkb25seScsIHJlbWFyazogJ0FkZCBpdCB3aXRob3V0IGFueSB2YWx1ZSBvciBiaW5kIGl0IHRvIGEgQm9vbGVhbid9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnbWF4bGVuZ3RoJywgZGVzY3JpcHRpb246ICdEZWZpbmVzIHRoZSBtYXhsZW5ndGggb2YgdGhlIGlucHV0IG9yIHRleHRhcmVhJywgcmVtYXJrOiAnVGhpcyB1c2VzIGh0bWwgYXR0cmlidXRlIG1heGxlbmd0aCd9LFxuICAgICAgICAgICAgXVxuICAgICAgICB9XG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHRleHRmaWVsZHMudnVlPzQ0MDdhYTE2IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ2g0JywgW192bS5fdihcIlRleHQgRmllbGRzXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCBbX2MoJ20tdGV4dGZpZWxkJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImxhYmVsXCI6IFwiVGV4dC4uLlwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdtLXRleHRmaWVsZCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJmbG9hdC1sYWJlbFwiOiBcIlRleHRhcmVhLi4uXCIsXG4gICAgICBcInRleHRhcmVhXCI6IFwiXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tdGV4dGZpZWxkJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImxhYmVsXCI6IFwiTnVtYmVyLi4uXCIsXG4gICAgICBcInBhdHRlcm5cIjogXCItP1swLTldKihcXFxcLlswLTldKyk/XCIsXG4gICAgICBcImVycm9yXCI6IFwiSW52YWxpZCBpbnB1dFwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdtLXRleHRmaWVsZCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJleHBhbmRhYmxlXCI6IFwic2VhcmNoXCIsXG4gICAgICBcImlkXCI6IFwidGVzdC1pZC1zZWFyY2hcIixcbiAgICAgIFwiZmxvYXQtbGFiZWxcIjogXCJFeHBhbmRpbmcuLi5cIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfdm0uX20oMCldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIFtfYygnaDQnLCBbX3ZtLl92KFwiVGVzdCBGb3JtXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdmb3JtJywge1xuICAgIG9uOiB7XG4gICAgICBcInN1Ym1pdFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF92bS5vblN1Ym1pdCgkZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ20tdGV4dGZpZWxkJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImZsb2F0LWxhYmVsXCI6IFwiRmlyc3QgTmFtZVwiXG4gICAgfSxcbiAgICBtb2RlbDoge1xuICAgICAgdmFsdWU6IChfdm0uZm9ybS5maXJzdE5hbWUpLFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICBfdm0uZm9ybS5maXJzdE5hbWUgPSAkJHZcbiAgICAgIH0sXG4gICAgICBleHByZXNzaW9uOiBcImZvcm0uZmlyc3ROYW1lXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tdGV4dGZpZWxkJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImZsb2F0LWxhYmVsXCI6IFwiTGFzdCBOYW1lXCJcbiAgICB9LFxuICAgIG1vZGVsOiB7XG4gICAgICB2YWx1ZTogKF92bS5mb3JtLmxhc3ROYW1lKSxcbiAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgX3ZtLmZvcm0ubGFzdE5hbWUgPSAkJHZcbiAgICAgIH0sXG4gICAgICBleHByZXNzaW9uOiBcImZvcm0ubGFzdE5hbWVcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnbS10ZXh0ZmllbGQnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZmxvYXQtbGFiZWxcIjogXCJFbWFpbFwiLFxuICAgICAgXCJwYXR0ZXJuXCI6IFwiKC4rKUAoLispezIsfVxcXFwuKC4rKXsyLH1cIixcbiAgICAgIFwiZXJyb3JcIjogXCJJbnZhbGlkIGVtYWlsXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tdGV4dGZpZWxkJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImZsb2F0LWxhYmVsXCI6IFwiUGFzc3dvcmRcIixcbiAgICAgIFwidHlwZVwiOiBcInBhc3N3b3JkXCIsXG4gICAgICBcInBhdHRlcm5cIjogXCIuezMsfVwiXG4gICAgfSxcbiAgICBtb2RlbDoge1xuICAgICAgdmFsdWU6IChfdm0uZm9ybS5wYXNzd29yZCksXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgIF92bS5mb3JtLnBhc3N3b3JkID0gJCR2XG4gICAgICB9LFxuICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnBhc3N3b3JkXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tdGV4dGZpZWxkJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImZsb2F0LWxhYmVsXCI6IFwiQ29uZmlybSBwYXNzd29yZFwiLFxuICAgICAgXCJ0eXBlXCI6IFwicGFzc3dvcmRcIixcbiAgICAgIFwicGF0dGVyblwiOiBcIi57Myx9XCIsXG4gICAgICBcImVycm9yXCI6IFwiUGFzc3dvcmRzIG5vdCBtYXRjaFwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uIG1kbC1idXR0b24tLXJhaXNlZFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJzdWJtaXRcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICBCdXR0b25cXG4gICAgICAgICAgICBcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2JywgW192bS5fdihfdm0uX3MoX3ZtLmZvcm0pKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdtLXRhYmxlJywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcIndpZHRoXCI6IFwiMTAwJVwiXG4gICAgfVxuICB9LCBbX2MoJ20tdGFibGUtaGVhZCcsIFtfYygnbS10YWJsZS1yb3cnLCBbX2MoJ20tdGFibGUtaCcsIFtfdm0uX3YoXCJQcm9wXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtLXRhYmxlLWgnLCBbX3ZtLl92KFwiRWZmZWN0XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtLXRhYmxlLWgnLCBbX3ZtLl92KFwiUmVtYXJrc1wiKV0pXSwgMSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tdGFibGUtYm9keScsIF92bS5fbCgoX3ZtLmRvYyksIGZ1bmN0aW9uKHByb3ApIHtcbiAgICByZXR1cm4gX2MoJ20tdGFibGUtcm93JywgW19jKCdtLXRhYmxlLWNlbGwnLCBbX3ZtLl92KF92bS5fcyhwcm9wLm5hbWUpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS10YWJsZS1jZWxsJywgW192bS5fdihfdm0uX3MocHJvcC5kZXNjcmlwdGlvbikpXSksIF92bS5fdihcIiBcIiksIF9jKCdtLXRhYmxlLWNlbGwnLCBbX3ZtLl92KF92bS5fcyhwcm9wLnJlbWFyaykpXSldLCAxKVxuICB9KSldLCAxKV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygncHJlJywge1xuICAgIHByZTogdHJ1ZVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIFwiKSwgX2MoJ2NvZGUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiY2xhc3NcIjogXCJodG1sXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICA8bS10ZXh0ZmllbGQgbGFiZWw9XFxcIlRleHQuLi5cXFwiPjwvbS10ZXh0ZmllbGQ+XFxuICAgICAgICAgICAgPG0tdGV4dGZpZWxkIGZsb2F0LWxhYmVsPVxcXCJUZXh0YXJlYS4uLlxcXCIgdGV4dGFyZWE+PC9tLXRleHRmaWVsZD5cXG4gICAgICAgICAgICA8bS10ZXh0ZmllbGQgbGFiZWw9XFxcIk51bWJlci4uLlxcXCIgcGF0dGVybj1cXFwiLT9bMC05XSooXFxcXC5bMC05XSspP1xcXCIgZXJyb3I9XFxcIkludmFsaWQgaW5wdXRcXFwiPjwvbS10ZXh0ZmllbGQ+XFxuICAgICAgICAgICAgPG0tdGV4dGZpZWxkIGV4cGFuZGFibGU9XFxcInNlYXJjaFxcXCIgaWQ9XFxcInRlc3QtaWQtc2VhcmNoXFxcIiBmbG9hdC1sYWJlbD1cXFwiRXhwYW5kaW5nLi4uXFxcIj48L20tdGV4dGZpZWxkPlxcbiAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiXFxuICAgICAgICAgICAgXCIpXSldKVxufV19XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTZkMjMwODQ4XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi02ZDIzMDg0OCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvdGV4dGZpZWxkcy52dWVcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xudmFyIF9fdnVlX3N0eWxlc19fID0ge31cblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2J1dHRvbnMudnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0wNTk1N2I0ZiF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9idXR0b25zLnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCIvVXNlcnMvb3ovc3JjL21hdGVyaWFsLWNvbXBvbmVudHMvZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvYnV0dG9ucy52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTA1OTU3YjRmXCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTA1OTU3YjRmXCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfVxufSkoKX1cbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gYnV0dG9ucy52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9idXR0b25zLnZ1ZSIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8aDQ+QnV0dG9uczwvaDQ+XG5cbiAgICAgICAgPGRpdj5cblxuICAgICAgICAgICAgPG0tYnV0dG9uIHJhaXNlZCB2LW9uOmNsaWNrLm5hdGl2ZT1cInRlc3RDbGlja1wiPkNsaWNrIG1lPC9tLWJ1dHRvbj5cblxuICAgICAgICAgICAgPG0tYnV0dG9uIGljb249XCJhZGRcIiByYWlzZWQgYWNjZW50PjwvbS1idXR0b24+XG5cbiAgICAgICAgICAgIDxtLWJ1dHRvbiByYWlzZWQgcHJpbWFyeSByaXBwbGU+UmlwcGxlPC9tLWJ1dHRvbj5cblxuICAgICAgICAgICAgPG0tYnV0dG9uIGRpc2FibGVkPkRpc2FibGVkPC9tLWJ1dHRvbj5cblxuICAgICAgICAgICAgPHByZSB2LXByZT5cbiAgICAgICAgICAgICAgICA8Y29kZSBjbGFzcz1cImh0bWxcIj5cbiAmI3gzQzttLWJ1dHRvbiByYWlzZWQgdi1vbjpjbGljay5uYXRpdmU9JiN4MjI7dGVzdENsaWNrJiN4MjI7JiN4M0U7Q2xpY2sgbWUmI3gzQzsvbS1idXR0b24mI3gzRTtcblxuICYjeDNDO20tYnV0dG9uIGljb249JiN4MjI7YWRkJiN4MjI7IHJhaXNlZCBhY2NlbnQmI3gzRTsmI3gzQzsvbS1idXR0b24mI3gzRTtcblxuICYjeDNDO20tYnV0dG9uIHJhaXNlZCBwcmltYXJ5IHJpcHBsZSYjeDNFO1JpcHBsZSYjeDNDOy9tLWJ1dHRvbiYjeDNFO1xuXG4gJiN4M0M7bS1idXR0b24gZGlzYWJsZWQmI3gzRTtEaXNhYmxlZCYjeDNDOy9tLWJ1dHRvbiYjeDNFO1xuICAgICAgICAgICAgICAgIDwvY29kZT5cbiAgICAgICAgICAgIDwvcHJlPlxuXG4gICAgICAgICAgICA8bS10YWJsZSBzdHlsZT1cIndpZHRoOiAxMDAlXCI+XG4gICAgICAgICAgICAgICAgPG0tdGFibGUtaGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPG0tdGFibGUtcm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgPG0tdGFibGUtaD5Qcm9wPC9tLXRhYmxlLWg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bS10YWJsZS1oPkVmZmVjdDwvbS10YWJsZS1oPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG0tdGFibGUtaD5SZW1hcmtzPC9tLXRhYmxlLWg+XG4gICAgICAgICAgICAgICAgICAgIDwvbS10YWJsZS1yb3c+XG4gICAgICAgICAgICAgICAgPC9tLXRhYmxlLWhlYWQ+XG5cbiAgICAgICAgICAgICAgICA8bS10YWJsZS1ib2R5PlxuICAgICAgICAgICAgICAgICAgICA8bS10YWJsZS1yb3cgdi1mb3I9XCJwcm9wIGluIGRvY1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG0tdGFibGUtY2VsbD57e3Byb3AubmFtZX19PC9tLXRhYmxlLWNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bS10YWJsZS1jZWxsPnt7cHJvcC5kZXNjcmlwdGlvbn19PC9tLXRhYmxlLWNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bS10YWJsZS1jZWxsPnt7cHJvcC5yZW1hcmt9fTwvbS10YWJsZS1jZWxsPlxuICAgICAgICAgICAgICAgICAgICA8L20tdGFibGUtcm93PlxuICAgICAgICAgICAgICAgIDwvbS10YWJsZS1ib2R5PlxuICAgICAgICAgICAgPC9tLXRhYmxlPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0e1xuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgaGxqcy5oaWdobGlnaHRCbG9jayh0aGlzLiRlbC5xdWVyeVNlbGVjdG9yKCcuaHRtbCcpKTtcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YSgpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBkb2M6IFtcbiAgICAgICAgICAgICAgICAgICAge25hbWU6ICdyaXBwbGUnLCBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgcmlwcGxlIGNsaWNrIGVmZmVjdCcsIHJlbWFyazogJ01heSBiZSB1c2VkIGluIGNvbWJpbmF0aW9uIHdpdGggYW55IG90aGVyIGNsYXNzZXMnfSxcblxuICAgICAgICAgICAgICAgICAgICB7bmFtZTogJ2Rpc2FibGVkJywgZGVzY3JpcHRpb246ICdkaXNhYmxlIGJ1dHRvbicsIHJlbWFyazogJyd9LFxuXG4gICAgICAgICAgICAgICAgICAgIHtuYW1lOiAnZmFiJywgZGVzY3JpcHRpb246ICdBcHBsaWVzIGZhYiAoY2lyY3VsYXIpIGRpc3BsYXkgZWZmZWN0JywgcmVtYXJrOiAnTXV0dWFsbHkgZXhjbHVzaXZlIHdpdGggcmFpc2VkLCBtaW5pLWZhYiwgYW5kIGljb24nfSxcblxuICAgICAgICAgICAgICAgICAgICB7bmFtZTogJ3JhaXNlZCcsIGRlc2NyaXB0aW9uOiAnQXBwbGllcyByYWlzZWQgZGlzcGxheSBlZmZlY3QnLCByZW1hcms6ICdNdXR1YWxseSBleGNsdXNpdmUgd2l0aCBmYWIsIG1pbmktZmFiLCBhbmQgaWNvbid9LFxuXG4gICAgICAgICAgICAgICAgICAgIHtuYW1lOiAnY29sb3JlZCcsIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBjb2xvcmVkIGRpc3BsYXkgZWZmZWN0IChwcmltYXJ5IG9yIGFjY2VudCBjb2xvciwgZGVwZW5kaW5nIG9uIHRoZSB0eXBlIG9mIGJ1dHRvbiknLCByZW1hcms6ICdDb2xvcnMgYXJlIGRlZmluZWQgaW4gbWF0ZXJpYWwubWluLmNzcyd9LFxuXG4gICAgICAgICAgICAgICAgICAgIHtuYW1lOiAnaWNvbicsIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBpY29uIChzbWFsbCBwbGFpbiBjaXJjdWxhcikgZGlzcGxheSBlZmZlY3QnLCByZW1hcms6ICdNdXR1YWxseSBleGNsdXNpdmUgd2l0aCByYWlzZWQsIGZhYiwgYW5kIG1pbmktZmFiJ30sXG5cbiAgICAgICAgICAgICAgICAgICAge25hbWU6ICdhY2NlbnQnLCBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgYWNjZW50IGNvbG9yIGRpc3BsYXkgZWZmZWN0JywgcmVtYXJrOiAnQ29sb3JzIGFyZSBkZWZpbmVkIGluIG1hdGVyaWFsLm1pbi5jc3MnfSxcblxuICAgICAgICAgICAgICAgICAgICB7bmFtZTogJ21pbmktZmFiJywgZGVzY3JpcHRpb246ICdBcHBsaWVzIG1pbmktZmFiIChzbWFsbCBmYWIgY2lyY3VsYXIpIGRpc3BsYXkgZWZmZWN0JywgcmVtYXJrOiAnTXV0dWFsbHkgZXhjbHVzaXZlIHdpdGggcmFpc2VkLCBmYWIsIGFuZCBpY29uJ30sXG5cbiAgICAgICAgICAgICAgICAgICAge25hbWU6ICdwcmltYXJ5JywgZGVzY3JpcHRpb246ICdBcHBsaWVzIHByaW1hcnkgY29sb3IgZGlzcGxheSBlZmZlY3QnLCByZW1hcms6ICdDb2xvcnMgYXJlIGRlZmluZWQgaW4gbWF0ZXJpYWwubWluLmNzcyd9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICB0ZXN0Q2xpY2s6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwiSGlcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBidXR0b25zLnZ1ZT83ZjNiYThjYSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW19jKCdoNCcsIFtfdm0uX3YoXCJCdXR0b25zXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCBbX2MoJ20tYnV0dG9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInJhaXNlZFwiOiBcIlwiXG4gICAgfSxcbiAgICBuYXRpdmVPbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnRlc3RDbGljaygkZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiQ2xpY2sgbWVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tYnV0dG9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImljb25cIjogXCJhZGRcIixcbiAgICAgIFwicmFpc2VkXCI6IFwiXCIsXG4gICAgICBcImFjY2VudFwiOiBcIlwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tYnV0dG9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInJhaXNlZFwiOiBcIlwiLFxuICAgICAgXCJwcmltYXJ5XCI6IFwiXCIsXG4gICAgICBcInJpcHBsZVwiOiBcIlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiUmlwcGxlXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtLWJ1dHRvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJkaXNhYmxlZFwiOiBcIlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiRGlzYWJsZWRcIildKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9tKDApLCBfdm0uX3YoXCIgXCIpLCBfYygnbS10YWJsZScsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJ3aWR0aFwiOiBcIjEwMCVcIlxuICAgIH1cbiAgfSwgW19jKCdtLXRhYmxlLWhlYWQnLCBbX2MoJ20tdGFibGUtcm93JywgW19jKCdtLXRhYmxlLWgnLCBbX3ZtLl92KFwiUHJvcFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS10YWJsZS1oJywgW192bS5fdihcIkVmZmVjdFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS10YWJsZS1oJywgW192bS5fdihcIlJlbWFya3NcIildKV0sIDEpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdtLXRhYmxlLWJvZHknLCBfdm0uX2woKF92bS5kb2MpLCBmdW5jdGlvbihwcm9wKSB7XG4gICAgcmV0dXJuIF9jKCdtLXRhYmxlLXJvdycsIFtfYygnbS10YWJsZS1jZWxsJywgW192bS5fdihfdm0uX3MocHJvcC5uYW1lKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tdGFibGUtY2VsbCcsIFtfdm0uX3YoX3ZtLl9zKHByb3AuZGVzY3JpcHRpb24pKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS10YWJsZS1jZWxsJywgW192bS5fdihfdm0uX3MocHJvcC5yZW1hcmspKV0pXSwgMSlcbiAgfSkpXSwgMSldLCAxKV0pXG59LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ3ByZScsIHtcbiAgICBwcmU6IHRydWVcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgIFwiKSwgX2MoJ2NvZGUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiY2xhc3NcIjogXCJodG1sXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG48bS1idXR0b24gcmFpc2VkIHYtb246Y2xpY2submF0aXZlPVxcXCJ0ZXN0Q2xpY2tcXFwiPkNsaWNrIG1lPC9tLWJ1dHRvbj5cXG5cXG48bS1idXR0b24gaWNvbj1cXFwiYWRkXFxcIiByYWlzZWQgYWNjZW50PjwvbS1idXR0b24+XFxuXFxuPG0tYnV0dG9uIHJhaXNlZCBwcmltYXJ5IHJpcHBsZT5SaXBwbGU8L20tYnV0dG9uPlxcblxcbjxtLWJ1dHRvbiBkaXNhYmxlZD5EaXNhYmxlZDwvbS1idXR0b24+XFxuICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIlxcbiAgICAgICAgICAgXCIpXSlcbn1dfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0wNTk1N2I0ZlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMDU5NTdiNGYhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL2J1dHRvbnMudnVlXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9zbmFja2Jhci52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTIzODVkM2IyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NuYWNrYmFyLnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCIvVXNlcnMvb3ovc3JjL21hdGVyaWFsLWNvbXBvbmVudHMvZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvc25hY2tiYXIudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0yMzg1ZDNiMlwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0yMzg1ZDNiMlwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH1cbn0pKCl9XG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHNuYWNrYmFyLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL3NuYWNrYmFyLnZ1ZSIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8bS1zbmFja2JhciBkaXNwbGF5LW9uPVwibXNnU2VudFwiPjwvbS1zbmFja2Jhcj5cbiAgICAgICAgPG0tYnV0dG9uIHJhaXNlZCBjb2xvcmVkIEBjbGljay5uYXRpdmU9XCJzQWN0aW9uXCI+U2hvdyBTbmFja2JhcjwvbS1idXR0b24+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxwcmUgdi1wcmU+XG4gICAgICAgICAgICAgICAgPGNvZGUgY2xhc3M9XCJodG1sXCI+XG4gICAgICAgICAgICAgICAgICAgICYjeDNDO20tc25hY2tiYXIgZGlzcGxheS1vbj0mI3gyMjttc2dTZW50JiN4MjI7JiN4M0U7JiN4M0M7L20tc25hY2tiYXImI3gzRTtcbiAgICAgICAgICAgICAgICAgICAgJiN4M0M7bS1idXR0b24gcmFpc2VkIGNvbG9yZWQgQGNsaWNrLm5hdGl2ZT0mI3gyMjtzQWN0aW9uJiN4MjI7JiN4M0U7U2hvdyBTbmFja2JhciYjeDNDOy9tLWJ1dHRvbiYjeDNFO1xuICAgICAgICAgICAgICAgIDwvY29kZT5cbiAgICAgICAgICAgIDwvcHJlPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8bS10YWJsZSBzdHlsZT1cIndpZHRoOiAxMDAlXCI+XG4gICAgICAgICAgICA8bS10YWJsZS1oZWFkPlxuICAgICAgICAgICAgICAgIDxtLXRhYmxlLXJvdz5cbiAgICAgICAgICAgICAgICAgICAgPG0tdGFibGUtaD5Qcm9wPC9tLXRhYmxlLWg+XG4gICAgICAgICAgICAgICAgICAgIDxtLXRhYmxlLWg+RWZmZWN0PC9tLXRhYmxlLWg+XG4gICAgICAgICAgICAgICAgICAgIDxtLXRhYmxlLWg+UmVtYXJrczwvbS10YWJsZS1oPlxuICAgICAgICAgICAgICAgIDwvbS10YWJsZS1yb3c+XG4gICAgICAgICAgICA8L20tdGFibGUtaGVhZD5cblxuICAgICAgICAgICAgPG0tdGFibGUtYm9keT5cbiAgICAgICAgICAgICAgICA8bS10YWJsZS1yb3cgdi1mb3I9XCJwcm9wIGluIGRvY1wiPlxuICAgICAgICAgICAgICAgICAgICA8bS10YWJsZS1jZWxsPnt7cHJvcC5uYW1lfX08L20tdGFibGUtY2VsbD5cbiAgICAgICAgICAgICAgICAgICAgPG0tdGFibGUtY2VsbD57e3Byb3AuZGVzY3JpcHRpb259fTwvbS10YWJsZS1jZWxsPlxuICAgICAgICAgICAgICAgICAgICA8bS10YWJsZS1jZWxsPnt7cHJvcC5yZW1hcmt9fTwvbS10YWJsZS1jZWxsPlxuICAgICAgICAgICAgICAgIDwvbS10YWJsZS1yb3c+XG4gICAgICAgICAgICA8L20tdGFibGUtYm9keT5cbiAgICAgICAgPC9tLXRhYmxlPlxuXG4gICAgICAgIDxwPlxuICAgICAgICAgICAgSWYgeW91IHVzZSBtdWx0aXBsZSBzbmFja2JhcnMgYXQgdGhlIHNhbWUgdGltZSwgdGhleSB3aWxsIG92ZXJsYXAuIENsaWNrIG9uIGJvdGggYnV0dG9uIHRvIHNlZSBhbiBleGFtcGxlLiBJZiB5b3UgZG9uJ3Qgd2FudCB0aGlzIHRvIGhhcHBlbiB1c2Ugb25lIHNpbmdsZSBzbmFja2JhciBmb3IgYWxsIHlvdXIgbm90aWZpY2F0aW9uc1xuICAgICAgICA8L3A+XG5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIHRoaXMuJGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5odG1sJykuZm9yRWFjaChlbCA9PiBobGpzLmhpZ2hsaWdodEJsb2NrKGVsKSlcbiAgICAgICAgfSxcblxuICAgICAgICBkYXRhKCl7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGRvYzogW1xuICAgICAgICAgICAgICAgICAgICAvL3tuYW1lOiAnZXZlbnQtc291cmNlJywgZGVzY3JpcHRpb246ICcnLCByZW1hcms6ICcnfSxcbiAgICAgICAgICAgICAgICAgICAge25hbWU6ICdkaXNwbGF5LW9uJywgZGVzY3JpcHRpb246ICdOYW1lIG9mIGV2ZW50IHdoaWNoIHdpbGwgYmUgZmlyZWQgYWZ0ZXIgdHJpZ2dlciBlbWl0JywgcmVtYXJrOiAnJ30sXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHNBY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kcm9vdC4kZW1pdCgnbXNnU2VudCcsIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ01lc3NhZ2UgU2VudCcsXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvblRleHQ6ICdVbmRvJyxcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dDogMjAwMCxcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uSGFuZGxlcjogKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzbmFja2Jhci52dWU/ZDY5NGZiNDgiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygnbS1zbmFja2JhcicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJkaXNwbGF5LW9uXCI6IFwibXNnU2VudFwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tYnV0dG9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInJhaXNlZFwiOiBcIlwiLFxuICAgICAgXCJjb2xvcmVkXCI6IFwiXCJcbiAgICB9LFxuICAgIG5hdGl2ZU9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uc0FjdGlvbigkZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiU2hvdyBTbmFja2JhclwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfdm0uX20oMCksIF92bS5fdihcIiBcIiksIF9jKCdtLXRhYmxlJywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcIndpZHRoXCI6IFwiMTAwJVwiXG4gICAgfVxuICB9LCBbX2MoJ20tdGFibGUtaGVhZCcsIFtfYygnbS10YWJsZS1yb3cnLCBbX2MoJ20tdGFibGUtaCcsIFtfdm0uX3YoXCJQcm9wXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtLXRhYmxlLWgnLCBbX3ZtLl92KFwiRWZmZWN0XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtLXRhYmxlLWgnLCBbX3ZtLl92KFwiUmVtYXJrc1wiKV0pXSwgMSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tdGFibGUtYm9keScsIF92bS5fbCgoX3ZtLmRvYyksIGZ1bmN0aW9uKHByb3ApIHtcbiAgICByZXR1cm4gX2MoJ20tdGFibGUtcm93JywgW19jKCdtLXRhYmxlLWNlbGwnLCBbX3ZtLl92KF92bS5fcyhwcm9wLm5hbWUpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS10YWJsZS1jZWxsJywgW192bS5fdihfdm0uX3MocHJvcC5kZXNjcmlwdGlvbikpXSksIF92bS5fdihcIiBcIiksIF9jKCdtLXRhYmxlLWNlbGwnLCBbX3ZtLl92KF92bS5fcyhwcm9wLnJlbWFyaykpXSldLCAxKVxuICB9KSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCBbX3ZtLl92KFwiXFxuICAgICAgICBJZiB5b3UgdXNlIG11bHRpcGxlIHNuYWNrYmFycyBhdCB0aGUgc2FtZSB0aW1lLCB0aGV5IHdpbGwgb3ZlcmxhcC4gQ2xpY2sgb24gYm90aCBidXR0b24gdG8gc2VlIGFuIGV4YW1wbGUuIElmIHlvdSBkb24ndCB3YW50IHRoaXMgdG8gaGFwcGVuIHVzZSBvbmUgc2luZ2xlIHNuYWNrYmFyIGZvciBhbGwgeW91ciBub3RpZmljYXRpb25zXFxuICAgIFwiKV0pXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW19jKCdwcmUnLCB7XG4gICAgcHJlOiB0cnVlXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBcIiksIF9jKCdjb2RlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImNsYXNzXCI6IFwiaHRtbFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIDxtLXNuYWNrYmFyIGRpc3BsYXktb249XFxcIm1zZ1NlbnRcXFwiPjwvbS1zbmFja2Jhcj5cXG4gICAgICAgICAgICAgICAgPG0tYnV0dG9uIHJhaXNlZCBjb2xvcmVkIEBjbGljay5uYXRpdmU9XFxcInNBY3Rpb25cXFwiPlNob3cgU25hY2tiYXI8L20tYnV0dG9uPlxcbiAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCJcXG4gICAgICAgIFwiKV0pXSlcbn1dfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0yMzg1ZDNiMlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMjM4NWQzYjIhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL3NuYWNrYmFyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vc2VsZWN0cy52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTdiNGI3YmM1IXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NlbGVjdHMudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIi9Vc2Vycy9vei9zcmMvbWF0ZXJpYWwtY29tcG9uZW50cy9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9zZWxlY3RzLnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtN2I0YjdiYzVcIiwgX192dWVfb3B0aW9uc19fKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtN2I0YjdiYzVcIiwgX192dWVfb3B0aW9uc19fKVxuICB9XG59KSgpfVxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBzZWxlY3RzLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL3NlbGVjdHMudnVlIiwiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxoMz5TZWxlY3RzPC9oMz5cbiAgICAgICAgPHA+XG4gICAgICAgICAgICA8aDQ+RGVmYXVsdDwvaDQ+XG4gICAgICAgICAgICA8bS1zZWxlY3QgOmRhdGEtc291cmNlPVwidGVzdERhdGEyXCIgaWQ9XCJ0ZXN0MlwiIHYtbW9kZWw9XCJtMlwiPjwvbS1zZWxlY3Q+XG5cbiAgICAgICAgICAgIDxkaXY+e3ttMn19PC9kaXY+XG4gICAgICAgIDwvcD5cblxuICAgICAgICA8cD5cbiAgICAgICAgPGg0PkFycmF5IHNvdXJjZSAoc2luZ2xlKTwvaDQ+XG4gICAgICAgIDxtLXNlbGVjdCA6ZGF0YS1zb3VyY2U9XCJ0ZXN0RGF0YTRcIiBpZD1cInRlc3QxMFwiIHYtbW9kZWw9XCJtMTBcIiBzZWFyY2g+PC9tLXNlbGVjdD5cblxuICAgICAgICA8ZGl2Pnt7bTEwfX08L2Rpdj5cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxwPlxuXG4gICAgICAgICAgICA8aDQ+QUpBWCBzZWxlY3QgPHNwYW4+e3ttfX08L3NwYW4+PC9oND5cbiAgICAgICAgICAgIDxtLXNlbGVjdCA6ZGF0YS1zb3VyY2U9XCJ0ZXN0RGF0YVwiIGlkPVwidGVzdDFcIiB2LW1vZGVsPVwibVwiIG11bHRpcGxlPjwvbS1zZWxlY3Q+XG5cbiAgICAgICAgICAgIDxkaXY+e3ttfX08L2Rpdj5cblxuICAgICAgICA8L3A+XG5cbiAgICAgICAgPHA+XG5cbiAgICAgICAgPGg0PkFKQVggc2VsZWN0IHdpdGggc2VhcmNoIDxzcGFuPnt7bTV9fTwvc3Bhbj48L2g0PlxuICAgICAgICA8bS1zZWxlY3QgOmRhdGEtc291cmNlPVwidGVzdERhdGFcIiBpZD1cInRlc3QzXCIgdi1tb2RlbD1cIm01XCIgc2VhcmNoPjwvbS1zZWxlY3Q+XG5cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxwPlxuXG4gICAgICAgIDxoND5NdWx0aXBsZSBzZWxlY3RoIDxzcGFuPnt7bTZ9fTwvc3Bhbj48L2g0PlxuICAgICAgICA8bS1zZWxlY3QgOmRhdGEtc291cmNlPVwidGVzdERhdGEzXCIgaWQ9XCJ0ZXN0NFwiIHYtbW9kZWw9XCJtNlwiIG11bHRpcGxlIHNlYXJjaD48L20tc2VsZWN0PlxuXG5cblxuICAgICAgICA8L3A+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxwcmUgdi1wcmU+XG4gICAgICAgICAgICAgICAgPGNvZGUgY2xhc3M9XCJodG1sXCI+XG4gICAgICAgICAgICAgICAgJiN4M0M7bS1zZWxlY3QgOmRhdGEtc291cmNlPSYjeDIyO3Rlc3REYXRhMiYjeDIyOyBpZD0mI3gyMjt0ZXN0MiYjeDIyOyB2LW1vZGVsPSYjeDIyO20yJiN4MjI7JiN4M0U7JiN4M0M7L20tc2VsZWN0JiN4M0U7XG4gICAgICAgICAgICAgICAgJiN4M0M7bS1zZWxlY3QgOmRhdGEtc291cmNlPSYjeDIyO3Rlc3REYXRhJiN4MjI7IGlkPSYjeDIyO3Rlc3QxJiN4MjI7IHYtbW9kZWw9JiN4MjI7bSYjeDIyOyYjeDNFOyYjeDNDOy9tLXNlbGVjdCYjeDNFO1xuICAgICAgICAgICAgICAgICYjeDNDO20tc2VsZWN0IDpkYXRhLXNvdXJjZT0mI3gyMjt0ZXN0RGF0YSYjeDIyOyBpZD0mI3gyMjt0ZXN0MyYjeDIyOyB2LW1vZGVsPSYjeDIyO20mI3gyMjsgc2VhcmNoJiN4M0U7JiN4M0M7L20tc2VsZWN0JiN4M0U7XG4gICAgICAgICAgICAgICAgPC9jb2RlPlxuICAgICAgICAgICAgPC9wcmU+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxtLXRhYmxlIHN0eWxlPVwid2lkdGg6IDEwMCVcIj5cbiAgICAgICAgICAgIDxtLXRhYmxlLWhlYWQ+XG4gICAgICAgICAgICAgICAgPG0tdGFibGUtcm93PlxuICAgICAgICAgICAgICAgICAgICA8bS10YWJsZS1oPlByb3A8L20tdGFibGUtaD5cbiAgICAgICAgICAgICAgICAgICAgPG0tdGFibGUtaD5FZmZlY3Q8L20tdGFibGUtaD5cbiAgICAgICAgICAgICAgICAgICAgPG0tdGFibGUtaD5SZW1hcmtzPC9tLXRhYmxlLWg+XG4gICAgICAgICAgICAgICAgPC9tLXRhYmxlLXJvdz5cbiAgICAgICAgICAgIDwvbS10YWJsZS1oZWFkPlxuXG4gICAgICAgICAgICA8bS10YWJsZS1ib2R5PlxuICAgICAgICAgICAgICAgIDxtLXRhYmxlLXJvdyB2LWZvcj1cInByb3AgaW4gZG9jXCI+XG4gICAgICAgICAgICAgICAgICAgIDxtLXRhYmxlLWNlbGw+e3twcm9wLm5hbWV9fTwvbS10YWJsZS1jZWxsPlxuICAgICAgICAgICAgICAgICAgICA8bS10YWJsZS1jZWxsPnt7cHJvcC5kZXNjcmlwdGlvbn19PC9tLXRhYmxlLWNlbGw+XG4gICAgICAgICAgICAgICAgICAgIDxtLXRhYmxlLWNlbGw+e3twcm9wLnJlbWFya319PC9tLXRhYmxlLWNlbGw+XG4gICAgICAgICAgICAgICAgPC9tLXRhYmxlLXJvdz5cbiAgICAgICAgICAgIDwvbS10YWJsZS1ib2R5PlxuICAgICAgICA8L20tdGFibGU+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICB0aGlzLiRlbC5xdWVyeVNlbGVjdG9yQWxsKCcuaHRtbCcpLmZvckVhY2goZWwgPT4gaGxqcy5oaWdobGlnaHRCbG9jayhlbCkpXG4gICAgICAgIH0sXG5cbiAgICAgICAgZGF0YSgpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0ZXN0RGF0YTogIGZ1bmN0aW9uKHN1Y2Nlc3MsIGZhaWx1cmUpIHtcbiAgICAgICAgICAgICAgICAgICB0aGlzLiRodHRwLmdldCgnaHR0cHM6Ly9yZXN0Y291bnRyaWVzLmV1L3Jlc3QvdjEvYWxsJykudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5kYXRhLmZvckVhY2goZWwgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGVsLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBlbC5udW1lcmljQ29kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKGMuc3BsaWNlKDAsIDEwKSk7XG4gICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIG06IFtdLFxuXG4gICAgICAgICAgICAgICAgLy8gc2ltcGxlIHNlbGVjdFxuXG4gICAgICAgICAgICAgICAgdGVzdERhdGEyOiBbXG4gICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ05vZGVKcycsIHZhbHVlOiAxLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnSlMnLCB2YWx1ZTogMixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ1BIUCcsIHZhbHVlOiAzLFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcblxuICAgICAgICAgICAgICAgIHRlc3REYXRhNDogWzEsMiwzLDQsNSw2LDcsOCw5XSxcbiAgICAgICAgICAgICAgICBtMTA6IDMsXG5cbiAgICAgICAgICAgICAgICBtMjoge25hbWU6ICdOb2RlSnMnLCB2YWx1ZTogMX0sXG5cbiAgICAgICAgICAgICAgICBtNToge25hbWU6ICcnLCB2YWx1ZTogJyd9LFxuXG4gICAgICAgICAgICAgICAgbTY6IFsnMDA0JywgMTAwXSxcblxuICAgICAgICAgICAgICAgIHRlc3REYXRhMzogWycwMDQnLCcwMDUnLCAxMDBdLFxuXG4gICAgICAgICAgICAgICAgZG9jOiBbXG4gICAgICAgICAgICAgICAgICAgIHtuYW1lOiAnZGF0YS1zb3VyY2UnLCBkZXNjcmlwdGlvbjogJ0RhdGEgc291cmNlIGZvciBhIHNlbGVjdCwgbXVzdCBiZSBhbiBhcnJheScsIHJlbWFyazogJ1JlcXVpcmVkJ30sXG4gICAgICAgICAgICAgICAgICAgIHtuYW1lOiAndi1tb2RlbCcsIGRlc2NyaXB0aW9uOiAnQ3VycmVudCB2YWx1ZSBvZiBhIHNlbGVjdCcsIHJlbWFyazogJyd9LFxuICAgICAgICAgICAgICAgICAgICB7bmFtZTogJ2lkJywgZGVzY3JpcHRpb246ICduZWVkIGFuIGlkIHRvIGhhbmRsZSB0aGUgbWVudSB0b2dnbGluZy4nLCByZW1hcms6ICdSZXF1aXJlZCd9LFxuICAgICAgICAgICAgICAgICAgICB7bmFtZTogJ3NlYXJjaCcsIGRlc2NyaXB0aW9uOiAnQWRkIHNlYXJjaCBpbnB1dCB0byBhIHNlbGVjdCcsIHJlbWFyazogJ09wdGlvbmFsJ30sXG4gICAgICAgICAgICAgICAgICAgIHtuYW1lOiAnbXVsdGlwbGUnLCBkZXNjcmlwdGlvbjogJ211bHRpcGxlIHNlbGVjdCBpdGVtcycsIHJlbWFyazogJ09wdGlvbmFsJ30sXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc2VsZWN0cy52dWU/NjBmMzZkMWQiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygnaDMnLCBbX3ZtLl92KFwiU2VsZWN0c1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncCcpLCBfYygnaDQnLCBbX3ZtLl92KFwiRGVmYXVsdFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS1zZWxlY3QnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZGF0YS1zb3VyY2VcIjogX3ZtLnRlc3REYXRhMixcbiAgICAgIFwiaWRcIjogXCJ0ZXN0MlwiXG4gICAgfSxcbiAgICBtb2RlbDoge1xuICAgICAgdmFsdWU6IChfdm0ubTIpLFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICBfdm0ubTIgPSAkJHZcbiAgICAgIH0sXG4gICAgICBleHByZXNzaW9uOiBcIm0yXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2JywgW192bS5fdihfdm0uX3MoX3ZtLm0yKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnKSwgX2MoJ2g0JywgW192bS5fdihcIkFycmF5IHNvdXJjZSAoc2luZ2xlKVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS1zZWxlY3QnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZGF0YS1zb3VyY2VcIjogX3ZtLnRlc3REYXRhNCxcbiAgICAgIFwiaWRcIjogXCJ0ZXN0MTBcIixcbiAgICAgIFwic2VhcmNoXCI6IFwiXCJcbiAgICB9LFxuICAgIG1vZGVsOiB7XG4gICAgICB2YWx1ZTogKF92bS5tMTApLFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICBfdm0ubTEwID0gJCR2XG4gICAgICB9LFxuICAgICAgZXhwcmVzc2lvbjogXCJtMTBcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCBbX3ZtLl92KF92bS5fcyhfdm0ubTEwKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnKSwgX2MoJ2g0JywgW192bS5fdihcIkFKQVggc2VsZWN0IFwiKSwgX2MoJ3NwYW4nLCBbX3ZtLl92KF92bS5fcyhfdm0ubSkpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tc2VsZWN0Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImRhdGEtc291cmNlXCI6IF92bS50ZXN0RGF0YSxcbiAgICAgIFwiaWRcIjogXCJ0ZXN0MVwiLFxuICAgICAgXCJtdWx0aXBsZVwiOiBcIlwiXG4gICAgfSxcbiAgICBtb2RlbDoge1xuICAgICAgdmFsdWU6IChfdm0ubSksXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgIF92bS5tID0gJCR2XG4gICAgICB9LFxuICAgICAgZXhwcmVzc2lvbjogXCJtXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2JywgW192bS5fdihfdm0uX3MoX3ZtLm0pKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncCcpLCBfdm0uX3YoXCIgXCIpLCBfYygncCcpLCBfYygnaDQnLCBbX3ZtLl92KFwiQUpBWCBzZWxlY3Qgd2l0aCBzZWFyY2ggXCIpLCBfYygnc3BhbicsIFtfdm0uX3YoX3ZtLl9zKF92bS5tNSkpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tc2VsZWN0Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImRhdGEtc291cmNlXCI6IF92bS50ZXN0RGF0YSxcbiAgICAgIFwiaWRcIjogXCJ0ZXN0M1wiLFxuICAgICAgXCJzZWFyY2hcIjogXCJcIlxuICAgIH0sXG4gICAgbW9kZWw6IHtcbiAgICAgIHZhbHVlOiAoX3ZtLm01KSxcbiAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgX3ZtLm01ID0gJCR2XG4gICAgICB9LFxuICAgICAgZXhwcmVzc2lvbjogXCJtNVwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnKSwgX2MoJ2g0JywgW192bS5fdihcIk11bHRpcGxlIHNlbGVjdGggXCIpLCBfYygnc3BhbicsIFtfdm0uX3YoX3ZtLl9zKF92bS5tNikpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tc2VsZWN0Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImRhdGEtc291cmNlXCI6IF92bS50ZXN0RGF0YTMsXG4gICAgICBcImlkXCI6IFwidGVzdDRcIixcbiAgICAgIFwibXVsdGlwbGVcIjogXCJcIixcbiAgICAgIFwic2VhcmNoXCI6IFwiXCJcbiAgICB9LFxuICAgIG1vZGVsOiB7XG4gICAgICB2YWx1ZTogKF92bS5tNiksXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgIF92bS5tNiA9ICQkdlxuICAgICAgfSxcbiAgICAgIGV4cHJlc3Npb246IFwibTZcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdwJyksIF92bS5fdihcIiBcIiksIF92bS5fbSgwKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tdGFibGUnLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwid2lkdGhcIjogXCIxMDAlXCJcbiAgICB9XG4gIH0sIFtfYygnbS10YWJsZS1oZWFkJywgW19jKCdtLXRhYmxlLXJvdycsIFtfYygnbS10YWJsZS1oJywgW192bS5fdihcIlByb3BcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tdGFibGUtaCcsIFtfdm0uX3YoXCJFZmZlY3RcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tdGFibGUtaCcsIFtfdm0uX3YoXCJSZW1hcmtzXCIpXSldLCAxKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnbS10YWJsZS1ib2R5JywgX3ZtLl9sKChfdm0uZG9jKSwgZnVuY3Rpb24ocHJvcCkge1xuICAgIHJldHVybiBfYygnbS10YWJsZS1yb3cnLCBbX2MoJ20tdGFibGUtY2VsbCcsIFtfdm0uX3YoX3ZtLl9zKHByb3AubmFtZSkpXSksIF92bS5fdihcIiBcIiksIF9jKCdtLXRhYmxlLWNlbGwnLCBbX3ZtLl92KF92bS5fcyhwcm9wLmRlc2NyaXB0aW9uKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tdGFibGUtY2VsbCcsIFtfdm0uX3YoX3ZtLl9zKHByb3AucmVtYXJrKSldKV0sIDEpXG4gIH0pKV0sIDEpXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW19jKCdwcmUnLCB7XG4gICAgcHJlOiB0cnVlXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBcIiksIF9jKCdjb2RlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImNsYXNzXCI6IFwiaHRtbFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgPG0tc2VsZWN0IDpkYXRhLXNvdXJjZT1cXFwidGVzdERhdGEyXFxcIiBpZD1cXFwidGVzdDJcXFwiIHYtbW9kZWw9XFxcIm0yXFxcIj48L20tc2VsZWN0PlxcbiAgICAgICAgICAgIDxtLXNlbGVjdCA6ZGF0YS1zb3VyY2U9XFxcInRlc3REYXRhXFxcIiBpZD1cXFwidGVzdDFcXFwiIHYtbW9kZWw9XFxcIm1cXFwiPjwvbS1zZWxlY3Q+XFxuICAgICAgICAgICAgPG0tc2VsZWN0IDpkYXRhLXNvdXJjZT1cXFwidGVzdERhdGFcXFwiIGlkPVxcXCJ0ZXN0M1xcXCIgdi1tb2RlbD1cXFwibVxcXCIgc2VhcmNoPjwvbS1zZWxlY3Q+XFxuICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIlxcbiAgICAgICAgXCIpXSldKVxufV19XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTdiNGI3YmM1XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi03YjRiN2JjNSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvc2VsZWN0cy52dWVcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xudmFyIF9fdnVlX3N0eWxlc19fID0ge31cblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3NsaWRlcnMudnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi02YjAxZGYwMCF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zbGlkZXJzLnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCIvVXNlcnMvb3ovc3JjL21hdGVyaWFsLWNvbXBvbmVudHMvZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvc2xpZGVycy52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTZiMDFkZjAwXCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTZiMDFkZjAwXCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfVxufSkoKX1cbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gc2xpZGVycy52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9zbGlkZXJzLnZ1ZSIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8bS1zbGlkZXIgdi1tb2RlbD1cImFtb3VudFwiIG1pbj1cIjBcIiBtYXg9XCIxMDBcIj48L20tc2xpZGVyPlxuICAgICAgICA8YnI+XG4gICAgICAgIDxzcGFuPlN0ZXAgMTA8L3NwYW4+XG4gICAgICAgIDxtLXNsaWRlciB2LW1vZGVsPVwiYW1vdW50XCIgbWluPVwiMFwiIG1heD1cIjEwMFwiIHN0ZXA9XCIxMFwiIGRpc2FibGVkPjwvbS1zbGlkZXI+XG5cbiAgICAgICAgPHA+XG4gICAgICAgICAgICB7e2Ftb3VudH19XG4gICAgICAgIDwvcD5cblxuICAgICAgICA8aHI+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxwcmU+XG4gICAgICAgICAgICAgICAgPGNvZGUgY2xhc3M9XCJodG1sXCI+XG4gICAgICAgICAgICAgICAgICAgICYjeDNDO20tc2xpZGVyIHYtbW9kZWw9JiN4MjI7YW1vdW50JiN4MjI7IG1pbj0mI3gyMjswJiN4MjI7IG1heD0mI3gyMjsxMDAmI3gyMjsmI3gzRTsmI3gzQzsvbS1zbGlkZXImI3gzRTtcbiAgICAgICAgICAgICAgICAgICAgJiN4M0M7bS1zbGlkZXIgdi1tb2RlbD0mI3gyMjthbW91bnQmI3gyMjsgbWluPSYjeDIyOzAmI3gyMjsgbWF4PSYjeDIyOzEwMCYjeDIyOyBzdGVwPSYjeDIyOzEwJiN4MjI7IGRpc2FibGVkJiN4M0U7JiN4M0M7L20tc2xpZGVyJiN4M0U7XG4gICAgICAgICAgICAgICAgPC9jb2RlPlxuICAgICAgICAgICAgPC9wcmU+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxtLXRhYmxlIHN0eWxlPVwid2lkdGg6IDEwMCVcIj5cbiAgICAgICAgICAgIDxtLXRhYmxlLWhlYWQ+XG4gICAgICAgICAgICAgICAgPG0tdGFibGUtcm93PlxuICAgICAgICAgICAgICAgICAgICA8bS10YWJsZS1oPlByb3A8L20tdGFibGUtaD5cbiAgICAgICAgICAgICAgICAgICAgPG0tdGFibGUtaD5FZmZlY3Q8L20tdGFibGUtaD5cbiAgICAgICAgICAgICAgICAgICAgPG0tdGFibGUtaD5SZW1hcmtzPC9tLXRhYmxlLWg+XG4gICAgICAgICAgICAgICAgPC9tLXRhYmxlLXJvdz5cbiAgICAgICAgICAgIDwvbS10YWJsZS1oZWFkPlxuXG4gICAgICAgICAgICA8bS10YWJsZS1ib2R5PlxuICAgICAgICAgICAgICAgIDxtLXRhYmxlLXJvdyB2LWZvcj1cInByb3AgaW4gZG9jXCI+XG4gICAgICAgICAgICAgICAgICAgIDxtLXRhYmxlLWNlbGw+e3twcm9wLm5hbWV9fTwvbS10YWJsZS1jZWxsPlxuICAgICAgICAgICAgICAgICAgICA8bS10YWJsZS1jZWxsPnt7cHJvcC5kZXNjcmlwdGlvbn19PC9tLXRhYmxlLWNlbGw+XG4gICAgICAgICAgICAgICAgICAgIDxtLXRhYmxlLWNlbGw+e3twcm9wLnJlbWFya319PC9tLXRhYmxlLWNlbGw+XG4gICAgICAgICAgICAgICAgPC9tLXRhYmxlLXJvdz5cbiAgICAgICAgICAgIDwvbS10YWJsZS1ib2R5PlxuICAgICAgICA8L20tdGFibGU+XG5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0e1xuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgdGhpcy4kZWwucXVlcnlTZWxlY3RvckFsbCgnLmh0bWwnKS5mb3JFYWNoKGVsID0+IGhsanMuaGlnaGxpZ2h0QmxvY2soZWwpKVxuICAgICAgICB9LFxuICAgICAgICBkYXRhKCl7XG4gICAgICAgICAgICByZXR1cm57XG4gICAgICAgICAgICAgICAgYW1vdW50OiAwLFxuICAgICAgICAgICAgICAgIGRvYzogW1xuICAgICAgICAgICAgICAgICAgICB7bmFtZTogJ3YtbW9kZWwnLCBkZXNjcmlwdGlvbjogJ0N1cnJlbnQgdmFsdWUgb2YgYSBzbGlkZXInLCByZW1hcms6ICcnfSxcbiAgICAgICAgICAgICAgICAgICAge25hbWU6ICdzdGVwJywgZGVzY3JpcHRpb246ICdTdGVwIG9mIHNsaWRlJywgcmVtYXJrOiAnJ30sXG4gICAgICAgICAgICAgICAgICAgIHtuYW1lOiAnbWluJywgZGVzY3JpcHRpb246ICdNaW5pbWFsIHZhbHVlIG9mIGEgc2xpZGVyJywgcmVtYXJrOiAnJ30sXG4gICAgICAgICAgICAgICAgICAgIHtuYW1lOiAnbWF4JywgZGVzY3JpcHRpb246ICdNYXhpbWFsIHZhbHVlIG9mIGEgc2xpZGVyJywgcmVtYXJrOiAnJ30sXG4gICAgICAgICAgICAgICAgICAgIHtuYW1lOiAnZGlzYWJsZWQnLCBkZXNjcmlwdGlvbjogJ3RydWUgfCBmYWxzZScsIHJlbWFyazogJyd9LFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNsaWRlcnMudnVlPzYwM2YxOWJlIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ20tc2xpZGVyJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm1pblwiOiBcIjBcIixcbiAgICAgIFwibWF4XCI6IFwiMTAwXCJcbiAgICB9LFxuICAgIG1vZGVsOiB7XG4gICAgICB2YWx1ZTogKF92bS5hbW91bnQpLFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICBfdm0uYW1vdW50ID0gJCR2XG4gICAgICB9LFxuICAgICAgZXhwcmVzc2lvbjogXCJhbW91bnRcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIFtfdm0uX3YoXCJTdGVwIDEwXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtLXNsaWRlcicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJtaW5cIjogXCIwXCIsXG4gICAgICBcIm1heFwiOiBcIjEwMFwiLFxuICAgICAgXCJzdGVwXCI6IFwiMTBcIixcbiAgICAgIFwiZGlzYWJsZWRcIjogXCJcIlxuICAgIH0sXG4gICAgbW9kZWw6IHtcbiAgICAgIHZhbHVlOiAoX3ZtLmFtb3VudCksXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgIF92bS5hbW91bnQgPSAkJHZcbiAgICAgIH0sXG4gICAgICBleHByZXNzaW9uOiBcImFtb3VudFwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCBbX3ZtLl92KFwiXFxuICAgICAgICBcIiArIF92bS5fcyhfdm0uYW1vdW50KSArIFwiXFxuICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaHInKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9tKDApLCBfdm0uX3YoXCIgXCIpLCBfYygnbS10YWJsZScsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJ3aWR0aFwiOiBcIjEwMCVcIlxuICAgIH1cbiAgfSwgW19jKCdtLXRhYmxlLWhlYWQnLCBbX2MoJ20tdGFibGUtcm93JywgW19jKCdtLXRhYmxlLWgnLCBbX3ZtLl92KFwiUHJvcFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS10YWJsZS1oJywgW192bS5fdihcIkVmZmVjdFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS10YWJsZS1oJywgW192bS5fdihcIlJlbWFya3NcIildKV0sIDEpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdtLXRhYmxlLWJvZHknLCBfdm0uX2woKF92bS5kb2MpLCBmdW5jdGlvbihwcm9wKSB7XG4gICAgcmV0dXJuIF9jKCdtLXRhYmxlLXJvdycsIFtfYygnbS10YWJsZS1jZWxsJywgW192bS5fdihfdm0uX3MocHJvcC5uYW1lKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tdGFibGUtY2VsbCcsIFtfdm0uX3YoX3ZtLl9zKHByb3AuZGVzY3JpcHRpb24pKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS10YWJsZS1jZWxsJywgW192bS5fdihfdm0uX3MocHJvcC5yZW1hcmspKV0pXSwgMSlcbiAgfSkpXSwgMSldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ3ByZScsIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBcIiksIF9jKCdjb2RlJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImh0bWxcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIDxtLXNsaWRlciB2LW1vZGVsPVxcXCJhbW91bnRcXFwiIG1pbj1cXFwiMFxcXCIgbWF4PVxcXCIxMDBcXFwiPjwvbS1zbGlkZXI+XFxuICAgICAgICAgICAgICAgIDxtLXNsaWRlciB2LW1vZGVsPVxcXCJhbW91bnRcXFwiIG1pbj1cXFwiMFxcXCIgbWF4PVxcXCIxMDBcXFwiIHN0ZXA9XFxcIjEwXFxcIiBkaXNhYmxlZD48L20tc2xpZGVyPlxcbiAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCJcXG4gICAgICAgIFwiKV0pXSlcbn1dfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi02YjAxZGYwMFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNmIwMWRmMDAhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL3NsaWRlcnMudnVlXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9iYWRnZXMudnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi01ZGI1YjM1MiF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9iYWRnZXMudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIi9Vc2Vycy9vei9zcmMvbWF0ZXJpYWwtY29tcG9uZW50cy9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9iYWRnZXMudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi01ZGI1YjM1MlwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi01ZGI1YjM1MlwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH1cbn0pKCl9XG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGJhZGdlcy52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9iYWRnZXMudnVlIiwiPHRlbXBsYXRlPlxuICA8ZGl2PlxuICAgIDxtLWJhZGdlIHYtbW9kZWw9XCJiXCIgaHJlZj1cImh0dHBzOi8vZ29vZ2xlLmNvbVwiIDpoaWRlPVwiaFwiPkluYm94PC9tLWJhZGdlPlxuXG4gICAgPGJyPlxuICAgIDxicj5cbiAgICA8YnI+XG5cbiAgICA8bS1iYWRnZSB2LW1vZGVsPVwiYlwiIHRhZz1cInNwYW5cIiBpY29uIG92ZXJsYXA+YWNjb3VudF9ib3g8L20tYmFkZ2U+XG5cbiAgICA8YnI+XG5cbiAgICA8bS1zbGlkZXIgdi1tb2RlbD1cImJcIiBtaW49XCIwXCIgbWF4PVwiMTAwXCI+PC9tLXNsaWRlcj5cblxuICAgIDxicj5cblxuICAgIDxtLWJ1dHRvbiByYWlzZWQgdi1vbjpjbGljay5uYXRpdmU9XCJ0ZXN0Q2xpY2tcIj5IaWRlIGJhZGdlIHZhbHVlPC9tLWJ1dHRvbj5cblxuICAgIDxocj5cblxuICAgIDxwcmUgdi1wcmU+XG4gICAgICA8Y29kZSBjbGFzcz1cImh0bWxcIj5cbiYjeDNDO3RlbXBsYXRlJiN4M0U7XG4gICYjeDNDO2RpdiYjeDNFO1xuICAgICYjeDNDO20tYmFkZ2Ugdi1tb2RlbD0mI3gyMjtiJiN4MjI7IGhyZWY9JiN4MjI7aHR0cHM6Ly9nb29nbGUuY29tJiN4MjI7IDpoaWRlPSYjeDIyO2gmI3gyMjsmI3gzRTtJbmJveCYjeDNDOy9tLWJhZGdlJiN4M0U7XG5cbiAgICAmI3gzQzttLWJhZGdlIHYtbW9kZWw9JiN4MjI7YiYjeDIyOyB0YWc9JiN4MjI7c3BhbiYjeDIyOyBpY29uIG92ZXJsYXAmI3gzRTthY2NvdW50X2JveCYjeDNDOy9tLWJhZGdlJiN4M0U7XG5cbiAgICAmI3gzQzttLXNsaWRlciB2LW1vZGVsPSYjeDIyO2ImI3gyMjsgbWluPSYjeDIyOzAmI3gyMjsgbWF4PSYjeDIyOzEwMCYjeDIyOyYjeDNFOyYjeDNDOy9tLXNsaWRlciYjeDNFO1xuXG4gICAgJiN4M0M7bS1idXR0b24gcmFpc2VkIHYtb246Y2xpY2submF0aXZlPSYjeDIyO3Rlc3RDbGljayYjeDIyOyYjeDNFO0hpZGUgYmFkZ2UgdmFsdWUmI3gzQzsvbS1idXR0b24mI3gzRTtcblxuICAmI3gzQzsvZGl2JiN4M0U7XG4mI3gzQzsvdGVtcGxhdGUmI3gzRTtcblxuJiN4M0M7c2NyaXB0JiN4M0U7XG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYjogMTAsXG4gICAgICAgIGg6IGZhbHNlLFxuICAgICAgICB0ZXN0Q2xpY2s6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICB0aGlzLmggPSAhdGhpcy5oO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4mI3gzQzsvc2NyaXB0JiN4M0U7XG4gICAgICA8L2NvZGU+XG4gICAgPC9wcmU+XG5cbiAgICA8bS10YWJsZSBzdHlsZT1cIndpZHRoOiAxMDAlXCI+XG4gICAgICA8bS10YWJsZS1oZWFkPlxuICAgICAgICA8bS10YWJsZS1yb3c+XG4gICAgICAgICAgPG0tdGFibGUtaD5Qcm9wPC9tLXRhYmxlLWg+XG4gICAgICAgICAgPG0tdGFibGUtaD5FZmZlY3Q8L20tdGFibGUtaD5cbiAgICAgICAgICA8bS10YWJsZS1oPlJlbWFya3M8L20tdGFibGUtaD5cbiAgICAgICAgPC9tLXRhYmxlLXJvdz5cbiAgICAgIDwvbS10YWJsZS1oZWFkPlxuXG4gICAgICA8bS10YWJsZS1ib2R5PlxuICAgICAgICA8bS10YWJsZS1yb3cgdi1mb3I9XCJwcm9wIGluIGRvY1wiPlxuICAgICAgICAgIDxtLXRhYmxlLWNlbGw+e3twcm9wLm5hbWV9fTwvbS10YWJsZS1jZWxsPlxuICAgICAgICAgIDxtLXRhYmxlLWNlbGw+e3twcm9wLmRlc2NyaXB0aW9ufX08L20tdGFibGUtY2VsbD5cbiAgICAgICAgICA8bS10YWJsZS1jZWxsPnt7cHJvcC5yZW1hcmt9fTwvbS10YWJsZS1jZWxsPlxuICAgICAgICA8L20tdGFibGUtcm93PlxuICAgICAgPC9tLXRhYmxlLWJvZHk+XG4gICAgPC9tLXRhYmxlPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBtb3VudGVkKCkge1xuICAgICAgaGxqcy5oaWdobGlnaHRCbG9jayh0aGlzLiRlbC5xdWVyeVNlbGVjdG9yKCcuaHRtbCcpKTtcbiAgICB9LFxuICAgIGRhdGEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBiOiAxMCxcbiAgICAgICAgaDogZmFsc2UsXG4gICAgICAgIHRlc3RDbGljazogZnVuY3Rpb24oZSkge1xuICAgICAgICAgIHRoaXMuaCA9ICF0aGlzLmg7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZG9jOiBbXG4gICAgICAgICAge25hbWU6ICdvdmVybGFwJywgZGVzY3JpcHRpb246ICdNYWtlIHRoZSBiYWRnZSBvdmVybGFwIHdpdGggaXRzIGNvbnRhaW5lcicsIHJlbWFyazogJ09wdGlvbmFsJ30sXG4gICAgICAgICAge25hbWU6ICdpY29uJywgZGVzY3JpcHRpb246ICdZb3UgY2FuIHBhc3MgdGhlIGljb24geW91IHdhbnQgdG8gZGlzcGxheSBhcyBhIHN0cmluZycsIHJlbWFyazogJyd9LFxuICAgICAgICAgIHtuYW1lOiAnbm8tYmFja2dyb3VuZCcsIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBvcGVuLWNpcmNsZSBlZmZlY3QgdG8gYmFkZ2UnLCByZW1hcms6ICdPcHRpb25hbCd9LFxuICAgICAgICAgIHtuYW1lOiAnaGlkZScsIGRlc2NyaXB0aW9uOiAnSGlkZXMgdGhlIGJhZGdlJywgcmVtYXJrOiAnQ2FuIGJlIGJvdW5kIHRvIGEgY29tcHV0ZWQgcHJvcGVydHkgc28gdGhlIHZhbHVlIGlzIGhpZGRlbiBpZiBzb21lIGNvbmRpdGlvbnMgYXJlIG1ldC4nfSxcbiAgICAgICAgICB7bmFtZTogJ2hyZWYnLCBkZXNjcmlwdGlvbjogJ0hyZWYgYXR0cmlidXRlIGZvciBsaW5rIGJhZGdlJywgcmVtYXJrOiAnT3B0aW9uYWwnfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYmFkZ2VzLnZ1ZT8wMmMyNjIxYyIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW19jKCdtLWJhZGdlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImhyZWZcIjogXCJodHRwczovL2dvb2dsZS5jb21cIixcbiAgICAgIFwiaGlkZVwiOiBfdm0uaFxuICAgIH0sXG4gICAgbW9kZWw6IHtcbiAgICAgIHZhbHVlOiAoX3ZtLmIpLFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICBfdm0uYiA9ICQkdlxuICAgICAgfSxcbiAgICAgIGV4cHJlc3Npb246IFwiYlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiSW5ib3hcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tYmFkZ2UnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGFnXCI6IFwic3BhblwiLFxuICAgICAgXCJpY29uXCI6IFwiXCIsXG4gICAgICBcIm92ZXJsYXBcIjogXCJcIlxuICAgIH0sXG4gICAgbW9kZWw6IHtcbiAgICAgIHZhbHVlOiAoX3ZtLmIpLFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICBfdm0uYiA9ICQkdlxuICAgICAgfSxcbiAgICAgIGV4cHJlc3Npb246IFwiYlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiYWNjb3VudF9ib3hcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdtLXNsaWRlcicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJtaW5cIjogXCIwXCIsXG4gICAgICBcIm1heFwiOiBcIjEwMFwiXG4gICAgfSxcbiAgICBtb2RlbDoge1xuICAgICAgdmFsdWU6IChfdm0uYiksXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgIF92bS5iID0gJCR2XG4gICAgICB9LFxuICAgICAgZXhwcmVzc2lvbjogXCJiXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tYnV0dG9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInJhaXNlZFwiOiBcIlwiXG4gICAgfSxcbiAgICBuYXRpdmVPbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnRlc3RDbGljaygkZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiSGlkZSBiYWRnZSB2YWx1ZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaHInKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9tKDApLCBfdm0uX3YoXCIgXCIpLCBfYygnbS10YWJsZScsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJ3aWR0aFwiOiBcIjEwMCVcIlxuICAgIH1cbiAgfSwgW19jKCdtLXRhYmxlLWhlYWQnLCBbX2MoJ20tdGFibGUtcm93JywgW19jKCdtLXRhYmxlLWgnLCBbX3ZtLl92KFwiUHJvcFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS10YWJsZS1oJywgW192bS5fdihcIkVmZmVjdFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS10YWJsZS1oJywgW192bS5fdihcIlJlbWFya3NcIildKV0sIDEpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdtLXRhYmxlLWJvZHknLCBfdm0uX2woKF92bS5kb2MpLCBmdW5jdGlvbihwcm9wKSB7XG4gICAgcmV0dXJuIF9jKCdtLXRhYmxlLXJvdycsIFtfYygnbS10YWJsZS1jZWxsJywgW192bS5fdihfdm0uX3MocHJvcC5uYW1lKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tdGFibGUtY2VsbCcsIFtfdm0uX3YoX3ZtLl9zKHByb3AuZGVzY3JpcHRpb24pKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS10YWJsZS1jZWxsJywgW192bS5fdihfdm0uX3MocHJvcC5yZW1hcmspKV0pXSwgMSlcbiAgfSkpXSwgMSldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdwcmUnLCB7XG4gICAgcHJlOiB0cnVlXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICBcIiksIF9jKCdjb2RlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImNsYXNzXCI6IFwiaHRtbFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuPHRlbXBsYXRlPlxcbiAgPGRpdj5cXG4gICAgPG0tYmFkZ2Ugdi1tb2RlbD1cXFwiYlxcXCIgaHJlZj1cXFwiaHR0cHM6Ly9nb29nbGUuY29tXFxcIiA6aGlkZT1cXFwiaFxcXCI+SW5ib3g8L20tYmFkZ2U+XFxuXFxuICAgIDxtLWJhZGdlIHYtbW9kZWw9XFxcImJcXFwiIHRhZz1cXFwic3BhblxcXCIgaWNvbiBvdmVybGFwPmFjY291bnRfYm94PC9tLWJhZGdlPlxcblxcbiAgICA8bS1zbGlkZXIgdi1tb2RlbD1cXFwiYlxcXCIgbWluPVxcXCIwXFxcIiBtYXg9XFxcIjEwMFxcXCI+PC9tLXNsaWRlcj5cXG5cXG4gICAgPG0tYnV0dG9uIHJhaXNlZCB2LW9uOmNsaWNrLm5hdGl2ZT1cXFwidGVzdENsaWNrXFxcIj5IaWRlIGJhZGdlIHZhbHVlPC9tLWJ1dHRvbj5cXG5cXG4gIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG4gIGV4cG9ydCBkZWZhdWx0IHtcXG4gICAgZGF0YSgpIHtcXG4gICAgICByZXR1cm4ge1xcbiAgICAgICAgYjogMTAsXFxuICAgICAgICBoOiBmYWxzZSxcXG4gICAgICAgIHRlc3RDbGljazogZnVuY3Rpb24oZSkge1xcbiAgICAgICAgICB0aGlzLmggPSAhdGhpcy5oO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbjwvc2NyaXB0PlxcbiAgICAgIFwiKV0pLCBfdm0uX3YoXCJcXG4gICAgXCIpXSlcbn1dfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi01ZGI1YjM1MlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNWRiNWIzNTIhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL2JhZGdlcy52dWVcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xudmFyIF9fdnVlX3N0eWxlc19fID0ge31cblxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIXZ1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi0wOGZlOWE4MSZzY29wZWQ9dHJ1ZSF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vbWVudS52dWVcIilcblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL21lbnUudnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0wOGZlOWE4MSF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9tZW51LnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCIvVXNlcnMvb3ovc3JjL21hdGVyaWFsLWNvbXBvbmVudHMvZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvbWVudS52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcbl9fdnVlX29wdGlvbnNfXy5fc2NvcGVJZCA9IFwiZGF0YS12LTA4ZmU5YTgxXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTA4ZmU5YTgxXCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTA4ZmU5YTgxXCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfVxufSkoKX1cbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gbWVudS52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9tZW51LnZ1ZSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0wOGZlOWE4MSZzY29wZWQ9dHJ1ZSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL21lbnUudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0wOGZlOWE4MSZzY29wZWQ9dHJ1ZSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL21lbnUudnVlXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0wOGZlOWE4MSZzY29wZWQ9dHJ1ZSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL21lbnUudnVlXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0wOGZlOWE4MSZzY29wZWQ9dHJ1ZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL21lbnUudnVlXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4ubWVudS1ibG9ja1tkYXRhLXYtMDhmZTlhODFdIHtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJhY2tncm91bmQ6ICMzRjUxQjU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9tZW51LnZ1ZT8xZWY2YmE0OVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBaURBO0lBQ0EsWUFBQTtJQUNBLG9CQUFBO0lBQ0EsY0FBQTtDQUNBXCIsXCJmaWxlXCI6XCJtZW51LnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICAgPGRpdj5cXG4gICAgICAgPGRpdiBjbGFzcz1cXFwibWVudS1ibG9ja1xcXCI+XFxuICAgICAgICAgICA8bS1idXR0b24gaWNvbj1cXFwibW9yZV92ZXJ0XFxcIiBpZD1cXFwidGVzdC1tZW51XFxcIj48L20tYnV0dG9uPlxcblxcbiAgICAgICAgICAgPG0tbWVudSBmb3I9XFxcInRlc3QtbWVudVxcXCI+XFxuICAgICAgICAgICAgICAgPG0tbWVudS1pdGVtPk5vZGVKczwvbS1tZW51LWl0ZW0+XFxuICAgICAgICAgICAgICAgPG0tbWVudS1pdGVtPlBIUDwvbS1tZW51LWl0ZW0+XFxuICAgICAgICAgICAgICAgPG0tbWVudS1pdGVtIGRpc2FibGVkPVxcXCJkaXNhYmxlZFxcXCI+SlM8L20tbWVudS1pdGVtPlxcbiAgICAgICAgICAgICAgIDxtLW1lbnUtaXRlbT5HTzwvbS1tZW51LWl0ZW0+XFxuICAgICAgICAgICA8L20tbWVudT5cXG4gICAgICAgPC9kaXY+XFxuXFxuICAgICAgIDwhLS0gLyAtLT5cXG5cXG4gICAgICAgPGRpdj5cXG4gICAgICAgICAgIDxwcmU+XFxuICAgICAgICAgICAgICAgPGNvZGUgY2xhc3M9XFxcImh0bWxcXFwiPlxcbiAgICAgICAgICAgICAgICYjeDNDO20tYnV0dG9uIGljb249JiN4MjI7bW9yZV92ZXJ0JiN4MjI7IGlkPSYjeDIyO3Rlc3QtbWVudSYjeDIyOyYjeDNFOyYjeDNDOy9tLWJ1dHRvbiYjeDNFO1xcbiAgICAgICAgICAgICAgICYjeDNDO20tbWVudSBmb3I9JiN4MjI7dGVzdC1tZW51JiN4MjI7JiN4M0U7XFxuICAgICAgICAgICAgICAgICAgICYjeDNDO20tbWVudS1pdGVtJiN4M0U7Tm9kZUpzJiN4M0M7L20tbWVudS1pdGVtJiN4M0U7XFxuICAgICAgICAgICAgICAgICAgICYjeDNDO20tbWVudS1pdGVtJiN4M0U7UEhQJiN4M0M7L20tbWVudS1pdGVtJiN4M0U7XFxuICAgICAgICAgICAgICAgICAgICYjeDNDO20tbWVudS1pdGVtIGRpc2FibGVkPSYjeDIyO2Rpc2FibGVkJiN4MjI7JiN4M0U7SlMmI3gzQzsvbS1tZW51LWl0ZW0mI3gzRTtcXG4gICAgICAgICAgICAgICAgICAgJiN4M0M7bS1tZW51LWl0ZW0mI3gzRTtHTyYjeDNDOy9tLW1lbnUtaXRlbSYjeDNFO1xcbiAgICAgICAgICAgICAgICYjeDNDOy9tLW1lbnUmI3gzRTtcXG4gICAgICAgICAgICAgICA8L2NvZGU+XFxuICAgICAgICAgICA8L3ByZT5cXG4gICAgICAgPC9kaXY+XFxuXFxuICAgICAgIDxtLXRhYmxlIHN0eWxlPVxcXCJ3aWR0aDogMTAwJVxcXCI+XFxuICAgICAgICAgICA8bS10YWJsZS1oZWFkPlxcbiAgICAgICAgICAgICAgIDxtLXRhYmxlLXJvdz5cXG4gICAgICAgICAgICAgICAgICAgPG0tdGFibGUtaD5Qcm9wPC9tLXRhYmxlLWg+XFxuICAgICAgICAgICAgICAgICAgIDxtLXRhYmxlLWg+RWZmZWN0PC9tLXRhYmxlLWg+XFxuICAgICAgICAgICAgICAgICAgIDxtLXRhYmxlLWg+UmVtYXJrczwvbS10YWJsZS1oPlxcbiAgICAgICAgICAgICAgIDwvbS10YWJsZS1yb3c+XFxuICAgICAgICAgICA8L20tdGFibGUtaGVhZD5cXG5cXG4gICAgICAgICAgIDxtLXRhYmxlLWJvZHk+XFxuICAgICAgICAgICAgICAgPG0tdGFibGUtcm93PlxcbiAgICAgICAgICAgICAgICAgICA8bS10YWJsZS1jZWxsPjwvbS10YWJsZS1jZWxsPlxcbiAgICAgICAgICAgICAgICAgICA8bS10YWJsZS1jZWxsPjwvbS10YWJsZS1jZWxsPlxcbiAgICAgICAgICAgICAgICAgICA8bS10YWJsZS1jZWxsPjwvbS10YWJsZS1jZWxsPlxcbiAgICAgICAgICAgICAgIDwvbS10YWJsZS1yb3c+XFxuICAgICAgICAgICA8L20tdGFibGUtYm9keT5cXG4gICAgICAgPC9tLXRhYmxlPlxcbiAgIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuPHN0eWxlIHNjb3BlZD5cXG4gICAgLm1lbnUtYmxvY2sge1xcbiAgICAgICAgY29sb3I6ICNmZmY7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjM0Y1MUI1O1xcbiAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgfVxcbjwvc3R5bGU+XFxuPHNjcmlwdD5cXG4gICAgZXhwb3J0IGRlZmF1bHR7XFxuICAgICAgICBtb3VudGVkKCkge1xcbiAgICAgICAgICAgIHRoaXMuJGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5odG1sJykuZm9yRWFjaChlbCA9PiBobGpzLmhpZ2hsaWdodEJsb2NrKGVsKSlcXG4gICAgICAgIH0sXFxuXFxuICAgICAgICBkYXRhKCl7XFxuICAgICAgICAgICAgcmV0dXJuIHt9XFxuICAgICAgICB9XFxuICAgIH1cXG48L3NjcmlwdD5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTA4ZmU5YTgxJnNjb3BlZD10cnVlIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvbWVudS52dWVcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGxpc3QgPSBbXTtcclxuXHJcblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcclxuXHRcdFx0aWYoaXRlbVsyXSkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xyXG5cdH07XHJcblxyXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xyXG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcclxuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xyXG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXHJcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XHJcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcclxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcclxuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cclxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcclxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcclxuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdHJldHVybiBsaXN0O1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG52YXIgc3R5bGVzSW5Eb20gPSB7fSxcblx0bWVtb2l6ZSA9IGZ1bmN0aW9uKGZuKSB7XG5cdFx0dmFyIG1lbW87XG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0XHRyZXR1cm4gbWVtbztcblx0XHR9O1xuXHR9LFxuXHRpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gL21zaWUgWzYtOV1cXGIvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XG5cdH0pLFxuXHRnZXRIZWFkRWxlbWVudCA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcblx0fSksXG5cdHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsLFxuXHRzaW5nbGV0b25Db3VudGVyID0gMCxcblx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AgPSBbXTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiA8aGVhZD4uXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0KTtcblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0KTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKVxuXHRcdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCkge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblx0XHRpZighbmV3U3R5bGVzW2lkXSlcblx0XHRcdHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZVxuXHRcdFx0bmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpIHtcblx0dmFyIGhlYWQgPSBnZXRIZWFkRWxlbWVudCgpO1xuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcFtzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZighbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgaGVhZC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XG5cdFx0fVxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGVFbGVtZW50KTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnLiBNdXN0IGJlICd0b3AnIG9yICdib3R0b20nLlwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG5cdHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG5cdHZhciBpZHggPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlRWxlbWVudCk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblx0c3R5bGVFbGVtZW50LnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpO1xuXHRyZXR1cm4gc3R5bGVFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlRWxlbWVudCwgdXBkYXRlLCByZW1vdmU7XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cdFx0c3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpO1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG5cdFx0aWYobmV3T2JqKSB7XG5cdFx0XHRpZihuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApXG5cdFx0XHRcdHJldHVybjtcblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2Rlcztcblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlRWxlbWVudCwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdGlmIChtZWRpYSkge1xuXHRcdHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cHM6Ly9kZXZlbG9wZXIuY2hyb21lLmNvbS9kZXZ0b29scy9kb2NzL2phdmFzY3JpcHQtZGVidWdnaW5nXG5cdFx0Ly8gdGhpcyBtYWtlcyBzb3VyY2UgbWFwcyBpbnNpZGUgc3R5bGUgdGFncyB3b3JrIHByb3Blcmx5IGluIENocm9tZVxuXHRcdGNzcyArPSAnXFxuLyojIHNvdXJjZVVSTD0nICsgc291cmNlTWFwLnNvdXJjZXNbMF0gKyAnICovJztcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1lbnUtYmxvY2tcIlxuICB9LCBbX2MoJ20tYnV0dG9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImljb25cIjogXCJtb3JlX3ZlcnRcIixcbiAgICAgIFwiaWRcIjogXCJ0ZXN0LW1lbnVcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdtLW1lbnUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwidGVzdC1tZW51XCJcbiAgICB9XG4gIH0sIFtfYygnbS1tZW51LWl0ZW0nLCBbX3ZtLl92KFwiTm9kZUpzXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtLW1lbnUtaXRlbScsIFtfdm0uX3YoXCJQSFBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tbWVudS1pdGVtJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImRpc2FibGVkXCI6IFwiZGlzYWJsZWRcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkpTXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtLW1lbnUtaXRlbScsIFtfdm0uX3YoXCJHT1wiKV0pXSwgMSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9tKDApLCBfdm0uX3YoXCIgXCIpLCBfYygnbS10YWJsZScsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJ3aWR0aFwiOiBcIjEwMCVcIlxuICAgIH1cbiAgfSwgW19jKCdtLXRhYmxlLWhlYWQnLCBbX2MoJ20tdGFibGUtcm93JywgW19jKCdtLXRhYmxlLWgnLCBbX3ZtLl92KFwiUHJvcFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS10YWJsZS1oJywgW192bS5fdihcIkVmZmVjdFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS10YWJsZS1oJywgW192bS5fdihcIlJlbWFya3NcIildKV0sIDEpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdtLXRhYmxlLWJvZHknLCBbX2MoJ20tdGFibGUtcm93JywgW19jKCdtLXRhYmxlLWNlbGwnKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tdGFibGUtY2VsbCcpLCBfdm0uX3YoXCIgXCIpLCBfYygnbS10YWJsZS1jZWxsJyldLCAxKV0sIDEpXSwgMSldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ3ByZScsIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBcIiksIF9jKCdjb2RlJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImh0bWxcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgPG0tYnV0dG9uIGljb249XFxcIm1vcmVfdmVydFxcXCIgaWQ9XFxcInRlc3QtbWVudVxcXCI+PC9tLWJ1dHRvbj5cXG4gICAgICAgICAgICA8bS1tZW51IGZvcj1cXFwidGVzdC1tZW51XFxcIj5cXG4gICAgICAgICAgICAgICAgPG0tbWVudS1pdGVtPk5vZGVKczwvbS1tZW51LWl0ZW0+XFxuICAgICAgICAgICAgICAgIDxtLW1lbnUtaXRlbT5QSFA8L20tbWVudS1pdGVtPlxcbiAgICAgICAgICAgICAgICA8bS1tZW51LWl0ZW0gZGlzYWJsZWQ9XFxcImRpc2FibGVkXFxcIj5KUzwvbS1tZW51LWl0ZW0+XFxuICAgICAgICAgICAgICAgIDxtLW1lbnUtaXRlbT5HTzwvbS1tZW51LWl0ZW0+XFxuICAgICAgICAgICAgPC9tLW1lbnU+XFxuICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIlxcbiAgICAgICAgXCIpXSldKVxufV19XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTA4ZmU5YTgxXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0wOGZlOWE4MSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvbWVudS52dWVcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xudmFyIF9fdnVlX3N0eWxlc19fID0ge31cblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2xvYWRpbmcudnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi01Zjk2NDc4YSF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9sb2FkaW5nLnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCIvVXNlcnMvb3ovc3JjL21hdGVyaWFsLWNvbXBvbmVudHMvZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvbG9hZGluZy52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTVmOTY0NzhhXCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTVmOTY0NzhhXCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfVxufSkoKX1cbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gbG9hZGluZy52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9sb2FkaW5nLnZ1ZSIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8aDM+UHJvZ3Jlc3MgYmFyPC9oMz5cblxuICAgICAgICA8bS1wcm9ncmVzcyB2LW1vZGVsPVwicHJvZ3Jlc3NcIj48L20tcHJvZ3Jlc3M+XG5cblxuICAgICAgICA8ZGl2IHN0eWxlPVwid2lkdGg6IDIwMHB4OyBtYXJnaW4tdG9wOiAzMHB4O1wiPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT1cIm1hcmdpbi1sZWZ0OiAyNnB4O1wiPkNoYW5nZSB2YWx1ZTo8L2Rpdj5cbiAgICAgICAgICAgIDxtLXNsaWRlciB2LW1vZGVsPVwicHJvZ3Jlc3NcIiBtaW49XCIwXCIgbWF4PVwiMTAwXCI+PC9tLXNsaWRlcj5cbiAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICA8aDQ+UHJvZ3Jlc3Mgd2l0aCBidWZmZXI8L2g0PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPG0tcHJvZ3Jlc3Mgdi1tb2RlbD1cInByb2dyZXNzMlwiIDpidWZmZXI9XCJidWZmZXJcIj48L20tcHJvZ3Jlc3M+XG4gICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgPGg0PkluZGV0ZXJtaW5hdGU8L2g0PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPG0tcHJvZ3Jlc3MgaW5kZXRlcm1pbmF0ZT48L20tcHJvZ3Jlc3M+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cHJlIHYtcHJlPlxuICAgICAgICAgICAgICAgIDxjb2RlIGNsYXNzPVwiaHRtbFwiPlxuICAgICAgICAgICAgICAgICAgICAmI3gzQzttLXByb2dyZXNzIHYtbW9kZWw9JiN4MjI7cHJvZ3Jlc3MmI3gyMjsmI3gzRTsmI3gzQzsvbS1wcm9ncmVzcyYjeDNFO1xuICAgICAgICAgICAgICAgICAgICAmI3gzQzttLXByb2dyZXNzIHYtbW9kZWw9JiN4MjI7cHJvZ3Jlc3MyJiN4MjI7IDpidWZmZXI9JiN4MjI7YnVmZmVyJiN4MjI7JiN4M0U7JiN4M0M7L20tcHJvZ3Jlc3MmI3gzRTtcbiAgICAgICAgICAgICAgICAgICAgJiN4M0M7bS1wcm9ncmVzcyBpbmRldGVybWluYXRlJiN4M0U7JiN4M0M7L20tcHJvZ3Jlc3MmI3gzRTtcbiAgICAgICAgICAgICAgICA8L2NvZGU+XG4gICAgICAgICAgICA8L3ByZT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPG0tdGFibGUgc3R5bGU9XCJ3aWR0aDogMTAwJVwiPlxuICAgICAgICAgICAgPG0tdGFibGUtaGVhZD5cbiAgICAgICAgICAgICAgICA8bS10YWJsZS1yb3c+XG4gICAgICAgICAgICAgICAgICAgIDxtLXRhYmxlLWg+UHJvcDwvbS10YWJsZS1oPlxuICAgICAgICAgICAgICAgICAgICA8bS10YWJsZS1oPkVmZmVjdDwvbS10YWJsZS1oPlxuICAgICAgICAgICAgICAgICAgICA8bS10YWJsZS1oPlJlbWFya3M8L20tdGFibGUtaD5cbiAgICAgICAgICAgICAgICA8L20tdGFibGUtcm93PlxuICAgICAgICAgICAgPC9tLXRhYmxlLWhlYWQ+XG5cbiAgICAgICAgICAgIDxtLXRhYmxlLWJvZHk+XG4gICAgICAgICAgICAgICAgPG0tdGFibGUtcm93IHYtZm9yPVwicHJvcCBpbiBkb2NcIj5cbiAgICAgICAgICAgICAgICAgICAgPG0tdGFibGUtY2VsbD57e3Byb3AubmFtZX19PC9tLXRhYmxlLWNlbGw+XG4gICAgICAgICAgICAgICAgICAgIDxtLXRhYmxlLWNlbGw+e3twcm9wLmRlc2NyaXB0aW9ufX08L20tdGFibGUtY2VsbD5cbiAgICAgICAgICAgICAgICAgICAgPG0tdGFibGUtY2VsbD57e3Byb3AucmVtYXJrfX08L20tdGFibGUtY2VsbD5cbiAgICAgICAgICAgICAgICA8L20tdGFibGUtcm93PlxuICAgICAgICAgICAgPC9tLXRhYmxlLWJvZHk+XG4gICAgICAgIDwvbS10YWJsZT5cblxuICAgICAgICA8aDM+U3Bpbm5lcjwvaDM+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoND5EZWZhdWx0OjwvaDQ+XG4gICAgICAgICAgICA8bS1zcGlubmVyPjwvbS1zcGlubmVyPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGg0PlNpbmdsZSBjb2xvcjo8L2g0PlxuICAgICAgICAgICAgPG0tc3Bpbm5lciBzaW5nbGUtY29sb3I+PC9tLXNwaW5uZXI+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDQ+SGlkZSBzcGlubmVyPC9oND5cbiAgICAgICAgICAgIDxtLXNwaW5uZXIgOmFjdGl2ZT1cImFjdGl2ZVwiPjwvbS1zcGlubmVyPlxuXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiB2LW1vZGVsPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxwcmU+XG4gICAgICAgICAgICAgICAgPGNvZGUgY2xhc3M9XCJodG1sXCI+XG4gICAgICAgICAgICAgICAgICAgJiN4M0M7bS1zcGlubmVyJiN4M0U7JiN4M0M7L20tc3Bpbm5lciYjeDNFO1xuICAgICAgICAgICAgICAgICAgICYjeDNDO20tc3Bpbm5lciBzaW5nbGUtY29sb3ImI3gzRTsmI3gzQzsvbS1zcGlubmVyJiN4M0U7XG4gICAgICAgICAgICAgICAgICAgJiN4M0M7bS1zcGlubmVyIDphY3RpdmU9JiN4MjI7YWN0aXZlJiN4MjI7JiN4M0U7JiN4M0M7L20tc3Bpbm5lciYjeDNFO1xuICAgICAgICAgICAgICAgIDwvY29kZT5cbiAgICAgICAgICAgIDwvcHJlPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8bS10YWJsZSBzdHlsZT1cIndpZHRoOiAxMDAlXCI+XG4gICAgICAgICAgICA8bS10YWJsZS1oZWFkPlxuICAgICAgICAgICAgICAgIDxtLXRhYmxlLXJvdz5cbiAgICAgICAgICAgICAgICAgICAgPG0tdGFibGUtaD5Qcm9wPC9tLXRhYmxlLWg+XG4gICAgICAgICAgICAgICAgICAgIDxtLXRhYmxlLWg+RWZmZWN0PC9tLXRhYmxlLWg+XG4gICAgICAgICAgICAgICAgICAgIDxtLXRhYmxlLWg+UmVtYXJrczwvbS10YWJsZS1oPlxuICAgICAgICAgICAgICAgIDwvbS10YWJsZS1yb3c+XG4gICAgICAgICAgICA8L20tdGFibGUtaGVhZD5cblxuICAgICAgICAgICAgPG0tdGFibGUtYm9keT5cbiAgICAgICAgICAgICAgICA8bS10YWJsZS1yb3cgdi1mb3I9XCJwcm9wIGluIGRvY1NwaW5uZXJzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxtLXRhYmxlLWNlbGw+e3twcm9wLm5hbWV9fTwvbS10YWJsZS1jZWxsPlxuICAgICAgICAgICAgICAgICAgICA8bS10YWJsZS1jZWxsPnt7cHJvcC5kZXNjcmlwdGlvbn19PC9tLXRhYmxlLWNlbGw+XG4gICAgICAgICAgICAgICAgICAgIDxtLXRhYmxlLWNlbGw+e3twcm9wLnJlbWFya319PC9tLXRhYmxlLWNlbGw+XG4gICAgICAgICAgICAgICAgPC9tLXRhYmxlLXJvdz5cbiAgICAgICAgICAgIDwvbS10YWJsZS1ib2R5PlxuICAgICAgICA8L20tdGFibGU+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0e1xuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgdGhpcy4kZWwucXVlcnlTZWxlY3RvckFsbCgnLmh0bWwnKS5mb3JFYWNoKGVsID0+IGhsanMuaGlnaGxpZ2h0QmxvY2soZWwpKVxuICAgICAgICB9LFxuXG4gICAgICAgIGRhdGEoKXtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3M6IDQwLFxuICAgICAgICAgICAgICAgIHByb2dyZXNzMjogMzAsXG4gICAgICAgICAgICAgICAgYnVmZmVyOiA2MCxcbiAgICAgICAgICAgICAgICBhY3RpdmU6IGZhbHNlLFxuXG4gICAgICAgICAgICAgICAgZG9jOiBbXG4gICAgICAgICAgICAgICAgICAgIHtuYW1lOiAndi1tb2RlbCcsIGRlc2NyaXB0aW9uOiAnQSB2YWx1ZSBvZiBhIHByb2dyZXNzJywgcmVtYXJrOiAnJ30sXG4gICAgICAgICAgICAgICAgICAgIHtuYW1lOiAnaW5kZXRlcm1pbmF0ZScsIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBhbmltYXRpb24gZWZmZWN0JywgcmVtYXJrOiAnJ30sXG4gICAgICAgICAgICAgICAgICAgIHtuYW1lOiAnYnVmZmVyJywgZGVzY3JpcHRpb246ICdCdWZmZXJpbmcnLCByZW1hcms6ICcnfSxcbiAgICAgICAgICAgICAgICBdLFxuXG4gICAgICAgICAgICAgICAgZG9jU3Bpbm5lcnM6IFtcbiAgICAgICAgICAgICAgICAgICAge25hbWU6ICdzaW5nbGUtY29sb3InLCBkZXNjcmlwdGlvbjogJ1VzZXMgYSBzaW5nbGUgKHByaW1hcnkgcGFsZXR0ZSkgY29sb3IgaW5zdGVhZCBvZiBjaGFuZ2luZyBjb2xvcnMnLCByZW1hcms6ICcnfSxcbiAgICAgICAgICAgICAgICAgICAge25hbWU6ICdhY3RpdmUnLCBkZXNjcmlwdGlvbjogJ3RydWV8ZmFsc2UnLCByZW1hcms6ICcnfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbG9hZGluZy52dWU/Yjc0YmUyNWMiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygnaDMnLCBbX3ZtLl92KFwiUHJvZ3Jlc3MgYmFyXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtLXByb2dyZXNzJywge1xuICAgIG1vZGVsOiB7XG4gICAgICB2YWx1ZTogKF92bS5wcm9ncmVzcyksXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgIF92bS5wcm9ncmVzcyA9ICQkdlxuICAgICAgfSxcbiAgICAgIGV4cHJlc3Npb246IFwicHJvZ3Jlc3NcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwid2lkdGhcIjogXCIyMDBweFwiLFxuICAgICAgXCJtYXJnaW4tdG9wXCI6IFwiMzBweFwiXG4gICAgfVxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJtYXJnaW4tbGVmdFwiOiBcIjI2cHhcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkNoYW5nZSB2YWx1ZTpcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tc2xpZGVyJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm1pblwiOiBcIjBcIixcbiAgICAgIFwibWF4XCI6IFwiMTAwXCJcbiAgICB9LFxuICAgIG1vZGVsOiB7XG4gICAgICB2YWx1ZTogKF92bS5wcm9ncmVzcyksXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgIF92bS5wcm9ncmVzcyA9ICQkdlxuICAgICAgfSxcbiAgICAgIGV4cHJlc3Npb246IFwicHJvZ3Jlc3NcIlxuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2g0JywgW192bS5fdihcIlByb2dyZXNzIHdpdGggYnVmZmVyXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCBbX2MoJ20tcHJvZ3Jlc3MnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiYnVmZmVyXCI6IF92bS5idWZmZXJcbiAgICB9LFxuICAgIG1vZGVsOiB7XG4gICAgICB2YWx1ZTogKF92bS5wcm9ncmVzczIpLFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICBfdm0ucHJvZ3Jlc3MyID0gJCR2XG4gICAgICB9LFxuICAgICAgZXhwcmVzc2lvbjogXCJwcm9ncmVzczJcIlxuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2g0JywgW192bS5fdihcIkluZGV0ZXJtaW5hdGVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIFtfYygnbS1wcm9ncmVzcycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJpbmRldGVybWluYXRlXCI6IFwiXCJcbiAgICB9XG4gIH0pXSwgMSksIF92bS5fdihcIiBcIiksIF92bS5fbSgwKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tdGFibGUnLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwid2lkdGhcIjogXCIxMDAlXCJcbiAgICB9XG4gIH0sIFtfYygnbS10YWJsZS1oZWFkJywgW19jKCdtLXRhYmxlLXJvdycsIFtfYygnbS10YWJsZS1oJywgW192bS5fdihcIlByb3BcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tdGFibGUtaCcsIFtfdm0uX3YoXCJFZmZlY3RcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tdGFibGUtaCcsIFtfdm0uX3YoXCJSZW1hcmtzXCIpXSldLCAxKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnbS10YWJsZS1ib2R5JywgX3ZtLl9sKChfdm0uZG9jKSwgZnVuY3Rpb24ocHJvcCkge1xuICAgIHJldHVybiBfYygnbS10YWJsZS1yb3cnLCBbX2MoJ20tdGFibGUtY2VsbCcsIFtfdm0uX3YoX3ZtLl9zKHByb3AubmFtZSkpXSksIF92bS5fdihcIiBcIiksIF9jKCdtLXRhYmxlLWNlbGwnLCBbX3ZtLl92KF92bS5fcyhwcm9wLmRlc2NyaXB0aW9uKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tdGFibGUtY2VsbCcsIFtfdm0uX3YoX3ZtLl9zKHByb3AucmVtYXJrKSldKV0sIDEpXG4gIH0pKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnaDMnLCBbX3ZtLl92KFwiU3Bpbm5lclwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2JywgW19jKCdoNCcsIFtfdm0uX3YoXCJEZWZhdWx0OlwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS1zcGlubmVyJyldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIFtfYygnaDQnLCBbX3ZtLl92KFwiU2luZ2xlIGNvbG9yOlwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS1zcGlubmVyJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNpbmdsZS1jb2xvclwiOiBcIlwiXG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2JywgW19jKCdoNCcsIFtfdm0uX3YoXCJIaWRlIHNwaW5uZXJcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tc3Bpbm5lcicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJhY3RpdmVcIjogX3ZtLmFjdGl2ZVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCBbX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmFjdGl2ZSksXG4gICAgICBleHByZXNzaW9uOiBcImFjdGl2ZVwiXG4gICAgfV0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImNoZWNrYm94XCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcImNoZWNrZWRcIjogQXJyYXkuaXNBcnJheShfdm0uYWN0aXZlKSA/IF92bS5faShfdm0uYWN0aXZlLCBudWxsKSA+IC0xIDogKF92bS5hY3RpdmUpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJfX2NcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIHZhciAkJGEgPSBfdm0uYWN0aXZlLFxuICAgICAgICAgICQkZWwgPSAkZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICQkYyA9ICQkZWwuY2hlY2tlZCA/ICh0cnVlKSA6IChmYWxzZSk7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KCQkYSkpIHtcbiAgICAgICAgICB2YXIgJCR2ID0gbnVsbCxcbiAgICAgICAgICAgICQkaSA9IF92bS5faSgkJGEsICQkdik7XG4gICAgICAgICAgaWYgKCQkYykge1xuICAgICAgICAgICAgJCRpIDwgMCAmJiAoX3ZtLmFjdGl2ZSA9ICQkYS5jb25jYXQoJCR2KSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCRpID4gLTEgJiYgKF92bS5hY3RpdmUgPSAkJGEuc2xpY2UoMCwgJCRpKS5jb25jYXQoJCRhLnNsaWNlKCQkaSArIDEpKSlcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3ZtLmFjdGl2ZSA9ICQkY1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KV0pXSwgMSksIF92bS5fdihcIiBcIiksIF92bS5fbSgxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tdGFibGUnLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwid2lkdGhcIjogXCIxMDAlXCJcbiAgICB9XG4gIH0sIFtfYygnbS10YWJsZS1oZWFkJywgW19jKCdtLXRhYmxlLXJvdycsIFtfYygnbS10YWJsZS1oJywgW192bS5fdihcIlByb3BcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tdGFibGUtaCcsIFtfdm0uX3YoXCJFZmZlY3RcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tdGFibGUtaCcsIFtfdm0uX3YoXCJSZW1hcmtzXCIpXSldLCAxKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnbS10YWJsZS1ib2R5JywgX3ZtLl9sKChfdm0uZG9jU3Bpbm5lcnMpLCBmdW5jdGlvbihwcm9wKSB7XG4gICAgcmV0dXJuIF9jKCdtLXRhYmxlLXJvdycsIFtfYygnbS10YWJsZS1jZWxsJywgW192bS5fdihfdm0uX3MocHJvcC5uYW1lKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tdGFibGUtY2VsbCcsIFtfdm0uX3YoX3ZtLl9zKHByb3AuZGVzY3JpcHRpb24pKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS10YWJsZS1jZWxsJywgW192bS5fdihfdm0uX3MocHJvcC5yZW1hcmspKV0pXSwgMSlcbiAgfSkpXSwgMSldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ3ByZScsIHtcbiAgICBwcmU6IHRydWVcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgIFwiKSwgX2MoJ2NvZGUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiY2xhc3NcIjogXCJodG1sXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgPG0tcHJvZ3Jlc3Mgdi1tb2RlbD1cXFwicHJvZ3Jlc3NcXFwiPjwvbS1wcm9ncmVzcz5cXG4gICAgICAgICAgICAgICAgPG0tcHJvZ3Jlc3Mgdi1tb2RlbD1cXFwicHJvZ3Jlc3MyXFxcIiA6YnVmZmVyPVxcXCJidWZmZXJcXFwiPjwvbS1wcm9ncmVzcz5cXG4gICAgICAgICAgICAgICAgPG0tcHJvZ3Jlc3MgaW5kZXRlcm1pbmF0ZT48L20tcHJvZ3Jlc3M+XFxuICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIlxcbiAgICAgICAgXCIpXSldKVxufSxmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ3ByZScsIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBcIiksIF9jKCdjb2RlJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImh0bWxcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgPG0tc3Bpbm5lcj48L20tc3Bpbm5lcj5cXG4gICAgICAgICAgICAgICA8bS1zcGlubmVyIHNpbmdsZS1jb2xvcj48L20tc3Bpbm5lcj5cXG4gICAgICAgICAgICAgICA8bS1zcGlubmVyIDphY3RpdmU9XFxcImFjdGl2ZVxcXCI+PC9tLXNwaW5uZXI+XFxuICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIlxcbiAgICAgICAgXCIpXSldKVxufV19XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTVmOTY0NzhhXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi01Zjk2NDc4YSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvbG9hZGluZy52dWVcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xudmFyIF9fdnVlX3N0eWxlc19fID0ge31cblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3RvZ2dsZXMudnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi00N2ZhMmM2ZCF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi90b2dnbGVzLnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCIvVXNlcnMvb3ovc3JjL21hdGVyaWFsLWNvbXBvbmVudHMvZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvdG9nZ2xlcy52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTQ3ZmEyYzZkXCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTQ3ZmEyYzZkXCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfVxufSkoKX1cbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gdG9nZ2xlcy52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy90b2dnbGVzLnZ1ZSIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8aDQ+Q2hlY2tib3g8L2g0PlxuXG4gICAgICAgIDxtLWNoZWNrYm94IHYtbW9kZWw9XCJjaGVja2JveDFcIiBAY2hhbmdlPVwic2VsZWN0XCI+VGhpcyBvbmU8L20tY2hlY2tib3g+XG5cbiAgICAgICAgPG0tY2hlY2tib3ggdi1tb2RlbD1cImNoZWNrYm94MlwiPkxhYmVsPC9tLWNoZWNrYm94PlxuXG4gICAgICAgIDxtLWNoZWNrYm94IGRpc2FibGVkIHYtbW9kZWw9XCJjaGVja2JveDJcIj5MYWJlbDwvbS1jaGVja2JveD5cblxuICAgICAgICA8aHI+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHt7Y2hlY2tib3gxfX0sIHt7Y2hlY2tib3gyfX1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxwcmUgdi1wcmU+XG4gICAgICAgICAgICAgICAgPGNvZGUgY2xhc3M9XCJodG1sXCI+XG4gICAgICAgICAgICAgICAgICAgICYjeDNDO20tY2hlY2tib3ggdi1tb2RlbD0mI3gyMjtjaGVja2JveDEmI3gyMjsmI3gzRTtUaGlzIG9uZSYjeDNDOy9tLWNoZWNrYm94JiN4M0U7XG4gICAgICAgICAgICAgICAgICAgICYjeDNDO20tY2hlY2tib3ggdi1tb2RlbD0mI3gyMjtjaGVja2JveDImI3gyMjsmI3gzRTtMYWJlbCYjeDNDOy9tLWNoZWNrYm94JiN4M0U7XG4gICAgICAgICAgICAgICAgPC9jb2RlPlxuICAgICAgICAgICAgPC9wcmU+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxtLXRhYmxlIHN0eWxlPVwid2lkdGg6IDEwMCVcIj5cbiAgICAgICAgICAgIDxtLXRhYmxlLWhlYWQ+XG4gICAgICAgICAgICAgICAgPG0tdGFibGUtcm93PlxuICAgICAgICAgICAgICAgICAgICA8bS10YWJsZS1oPlByb3A8L20tdGFibGUtaD5cbiAgICAgICAgICAgICAgICAgICAgPG0tdGFibGUtaD5FZmZlY3Q8L20tdGFibGUtaD5cbiAgICAgICAgICAgICAgICAgICAgPG0tdGFibGUtaD5SZW1hcmtzPC9tLXRhYmxlLWg+XG4gICAgICAgICAgICAgICAgPC9tLXRhYmxlLXJvdz5cbiAgICAgICAgICAgIDwvbS10YWJsZS1oZWFkPlxuXG4gICAgICAgICAgICA8bS10YWJsZS1ib2R5PlxuICAgICAgICAgICAgICAgIDxtLXRhYmxlLXJvdyB2LWZvcj1cInByb3AgaW4gZG9jQ2hlY2tib3hlc1wiPlxuICAgICAgICAgICAgICAgICAgICA8bS10YWJsZS1jZWxsPnt7cHJvcC5uYW1lfX08L20tdGFibGUtY2VsbD5cbiAgICAgICAgICAgICAgICAgICAgPG0tdGFibGUtY2VsbD57e3Byb3AuZGVzY3JpcHRpb259fTwvbS10YWJsZS1jZWxsPlxuICAgICAgICAgICAgICAgICAgICA8bS10YWJsZS1jZWxsPnt7cHJvcC5yZW1hcmt9fTwvbS10YWJsZS1jZWxsPlxuICAgICAgICAgICAgICAgIDwvbS10YWJsZS1yb3c+XG4gICAgICAgICAgICA8L20tdGFibGUtYm9keT5cbiAgICAgICAgPC9tLXRhYmxlPlxuXG5cbiAgICAgICAgPGg0PlJhZGlvPC9oND5cbiAgICAgICAgPG0tcmFkaW8gbmFtZT1cInRlc3RcIiB2LW1vZGVsPVwicmFkaW9WYWxcIiB2YWw9XCJvbmVcIj5UZXN0IDE8L20tcmFkaW8+XG4gICAgICAgIDxtLXJhZGlvIG5hbWU9XCJ0ZXN0XCIgdi1tb2RlbD1cInJhZGlvVmFsXCIgdmFsPVwidHdvXCI+VGVzdCAyPC9tLXJhZGlvPlxuICAgICAgICA8bS1yYWRpbyBuYW1lPVwidGVzdFwiIHYtbW9kZWw9XCJyYWRpb1ZhbFwiIHZhbD1cIjNcIiBkaXNhYmxlZD5UZXN0IDM8L20tcmFkaW8+XG5cbiAgICAgICAgPGRpdj57e3JhZGlvVmFsfX08L2Rpdj5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHByZSB2LXByZT5cbiAgICAgICAgICAgICAgICA8Y29kZSBjbGFzcz1cImh0bWxcIj5cbiAgICAgICAgICAgICAgICAgICAgJiN4M0M7bS1yYWRpbyBuYW1lPSYjeDIyO3Rlc3QmI3gyMjsgdi1tb2RlbD0mI3gyMjtyYWRpb1ZhbCYjeDIyOyB2YWw9JiN4MjI7b25lJiN4MjI7JiN4M0U7VGVzdCAxJiN4M0M7L20tcmFkaW8mI3gzRTtcbiAgICAgICAgICAgICAgICAgICAgJiN4M0M7bS1yYWRpbyBuYW1lPSYjeDIyO3Rlc3QmI3gyMjsgdi1tb2RlbD0mI3gyMjtyYWRpb1ZhbCYjeDIyOyB2YWw9JiN4MjI7dHdvJiN4MjI7JiN4M0U7VGVzdCAyJiN4M0M7L20tcmFkaW8mI3gzRTtcbiAgICAgICAgICAgICAgICAgICAgJiN4M0M7bS1yYWRpbyBuYW1lPSYjeDIyO3Rlc3QmI3gyMjsgdi1tb2RlbD0mI3gyMjtyYWRpb1ZhbCYjeDIyOyB2YWw9JiN4MjI7MyYjeDIyOyBkaXNhYmxlZCYjeDNFO1Rlc3QgMyYjeDNDOy9tLXJhZGlvJiN4M0U7XG4gICAgICAgICAgICAgICAgPC9jb2RlPlxuICAgICAgICAgICAgPC9wcmU+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxtLXRhYmxlIHN0eWxlPVwid2lkdGg6IDEwMCVcIj5cbiAgICAgICAgICAgIDxtLXRhYmxlLWhlYWQ+XG4gICAgICAgICAgICAgICAgPG0tdGFibGUtcm93PlxuICAgICAgICAgICAgICAgICAgICA8bS10YWJsZS1oPlByb3A8L20tdGFibGUtaD5cbiAgICAgICAgICAgICAgICAgICAgPG0tdGFibGUtaD5FZmZlY3Q8L20tdGFibGUtaD5cbiAgICAgICAgICAgICAgICAgICAgPG0tdGFibGUtaD5SZW1hcmtzPC9tLXRhYmxlLWg+XG4gICAgICAgICAgICAgICAgPC9tLXRhYmxlLXJvdz5cbiAgICAgICAgICAgIDwvbS10YWJsZS1oZWFkPlxuXG4gICAgICAgICAgICA8bS10YWJsZS1ib2R5PlxuICAgICAgICAgICAgICAgIDxtLXRhYmxlLXJvdyB2LWZvcj1cInByb3AgaW4gZG9jUmFkaW9cIj5cbiAgICAgICAgICAgICAgICAgICAgPG0tdGFibGUtY2VsbD57e3Byb3AubmFtZX19PC9tLXRhYmxlLWNlbGw+XG4gICAgICAgICAgICAgICAgICAgIDxtLXRhYmxlLWNlbGw+e3twcm9wLmRlc2NyaXB0aW9ufX08L20tdGFibGUtY2VsbD5cbiAgICAgICAgICAgICAgICAgICAgPG0tdGFibGUtY2VsbD57e3Byb3AucmVtYXJrfX08L20tdGFibGUtY2VsbD5cbiAgICAgICAgICAgICAgICA8L20tdGFibGUtcm93PlxuICAgICAgICAgICAgPC9tLXRhYmxlLWJvZHk+XG4gICAgICAgIDwvbS10YWJsZT5cblxuXG4gICAgICAgIDxoND5Td2l0Y2g8L2g0PlxuXG4gICAgICAgIDxtLXN3aXRjaCB2LW1vZGVsPVwic3dpdGNoMVwiPk9uPC9tLXN3aXRjaD5cbiAgICAgICAgPGJyPlxuICAgICAgICB7e3N3aXRjaDF9fVxuICAgICAgICA8YnI+XG5cbiAgICAgICAgPG0tc3dpdGNoIHYtbW9kZWw9XCJzd2l0Y2gyXCI+T2ZmPC9tLXN3aXRjaD5cbiAgICAgICAgPGJyPlxuICAgICAgICB7e3N3aXRjaDJ9fVxuXG4gICAgICAgIDxtLXN3aXRjaCB2LW1vZGVsPVwic3dpdGNoMlwiIGRpc2FibGVkPk9mZjwvbS1zd2l0Y2g+XG4gICAgICAgIDxicj5cbiAgICAgICAge3tzd2l0Y2gyfX1cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHByZSB2LXByZT5cbiAgICAgICAgICAgICAgICA8Y29kZSBjbGFzcz1cImh0bWxcIj5cbiAgICAgICAgICAgICAgICAgICAgJiN4M0M7bS1zd2l0Y2ggdi1tb2RlbD0mI3gyMjtzd2l0Y2gxJiN4MjI7JiN4M0U7T24mI3gzQzsvbS1zd2l0Y2gmI3gzRTtcbiAgICAgICAgICAgICAgICAgICAgJiN4M0M7bS1zd2l0Y2ggdi1tb2RlbD0mI3gyMjtzd2l0Y2gyJiN4MjI7JiN4M0U7T2ZmJiN4M0M7L20tc3dpdGNoJiN4M0U7XG4gICAgICAgICAgICAgICAgICAgICYjeDNDO20tc3dpdGNoIHYtbW9kZWw9JiN4MjI7c3dpdGNoMiYjeDIyOyBkaXNhYmxlZCYjeDNFO09mZiYjeDNDOy9tLXN3aXRjaCYjeDNFO1xuICAgICAgICAgICAgICAgIDwvY29kZT5cbiAgICAgICAgICAgIDwvcHJlPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8bS10YWJsZSBzdHlsZT1cIndpZHRoOiAxMDAlXCI+XG4gICAgICAgICAgICA8bS10YWJsZS1oZWFkPlxuICAgICAgICAgICAgICAgIDxtLXRhYmxlLXJvdz5cbiAgICAgICAgICAgICAgICAgICAgPG0tdGFibGUtaD5Qcm9wPC9tLXRhYmxlLWg+XG4gICAgICAgICAgICAgICAgICAgIDxtLXRhYmxlLWg+RWZmZWN0PC9tLXRhYmxlLWg+XG4gICAgICAgICAgICAgICAgICAgIDxtLXRhYmxlLWg+UmVtYXJrczwvbS10YWJsZS1oPlxuICAgICAgICAgICAgICAgIDwvbS10YWJsZS1yb3c+XG4gICAgICAgICAgICA8L20tdGFibGUtaGVhZD5cblxuICAgICAgICAgICAgPG0tdGFibGUtYm9keT5cbiAgICAgICAgICAgICAgICA8bS10YWJsZS1yb3cgdi1mb3I9XCJwcm9wIGluIGRvY1N3aXRjaFwiPlxuICAgICAgICAgICAgICAgICAgICA8bS10YWJsZS1jZWxsPnt7cHJvcC5uYW1lfX08L20tdGFibGUtY2VsbD5cbiAgICAgICAgICAgICAgICAgICAgPG0tdGFibGUtY2VsbD57e3Byb3AuZGVzY3JpcHRpb259fTwvbS10YWJsZS1jZWxsPlxuICAgICAgICAgICAgICAgICAgICA8bS10YWJsZS1jZWxsPnt7cHJvcC5yZW1hcmt9fTwvbS10YWJsZS1jZWxsPlxuICAgICAgICAgICAgICAgIDwvbS10YWJsZS1yb3c+XG4gICAgICAgICAgICA8L20tdGFibGUtYm9keT5cbiAgICAgICAgPC9tLXRhYmxlPlxuXG5cbiAgICAgICAgPGg0Pkljb24gVGFnZ2xlPC9oND5cblxuICAgICAgICA8bS1pY29uLXRvZ2dsZSB2LW1vZGVsPVwiaVRvZ2dsZVwiIGljb249XCJmb3JtYXRfYm9sZFwiPjwvbS1pY29uLXRvZ2dsZT5cbiAgICAgICAgPGJyPlxuXG4gICAgICAgIHt7aVRvZ2dsZX19XG5cbiAgICAgICAgPGJyPlxuXG4gICAgICAgIDxtLWljb24tdG9nZ2xlIHYtbW9kZWw9XCJpVG9nZ2xlMlwiIGljb249XCJzZWFyY2hcIj48L20taWNvbi10b2dnbGU+XG4gICAgICAgIDxicj5cbiAgICAgICAge3tpVG9nZ2xlMn19XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxwcmUgdi1wcmU+XG4gICAgICAgICAgICAgICAgPGNvZGUgY2xhc3M9XCJodG1sXCI+XG4gICAgICAgICAgICAgICAgICAgICYjeDNDO20taWNvbi10b2dnbGUgdi1tb2RlbD0mI3gyMjtpVG9nZ2xlJiN4MjI7IGljb249JiN4MjI7Zm9ybWF0X2JvbGQmI3gyMjsmI3gzRTsmI3gzQzsvbS1pY29uLXRvZ2dsZSYjeDNFO1xuICAgICAgICAgICAgICAgICAgICAmI3gzQzttLWljb24tdG9nZ2xlIHYtbW9kZWw9JiN4MjI7aVRvZ2dsZTImI3gyMjsgaWNvbj0mI3gyMjtzZWFyY2gmI3gyMjsmI3gzRTsmI3gzQzsvbS1pY29uLXRvZ2dsZSYjeDNFO1xuICAgICAgICAgICAgICAgIDwvY29kZT5cbiAgICAgICAgICAgIDwvcHJlPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8YnI+XG5cbiAgICAgICAgPG0tdGFibGUgc3R5bGU9XCJ3aWR0aDogMTAwJVwiPlxuICAgICAgICAgICAgPG0tdGFibGUtaGVhZD5cbiAgICAgICAgICAgICAgICA8bS10YWJsZS1yb3c+XG4gICAgICAgICAgICAgICAgICAgIDxtLXRhYmxlLWg+UHJvcDwvbS10YWJsZS1oPlxuICAgICAgICAgICAgICAgICAgICA8bS10YWJsZS1oPkVmZmVjdDwvbS10YWJsZS1oPlxuICAgICAgICAgICAgICAgICAgICA8bS10YWJsZS1oPlJlbWFya3M8L20tdGFibGUtaD5cbiAgICAgICAgICAgICAgICA8L20tdGFibGUtcm93PlxuICAgICAgICAgICAgPC9tLXRhYmxlLWhlYWQ+XG5cbiAgICAgICAgICAgIDxtLXRhYmxlLWJvZHk+XG4gICAgICAgICAgICAgICAgPG0tdGFibGUtcm93IHYtZm9yPVwicHJvcCBpbiBkb2NJY29uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxtLXRhYmxlLWNlbGw+e3twcm9wLm5hbWV9fTwvbS10YWJsZS1jZWxsPlxuICAgICAgICAgICAgICAgICAgICA8bS10YWJsZS1jZWxsPnt7cHJvcC5kZXNjcmlwdGlvbn19PC9tLXRhYmxlLWNlbGw+XG4gICAgICAgICAgICAgICAgICAgIDxtLXRhYmxlLWNlbGw+e3twcm9wLnJlbWFya319PC9tLXRhYmxlLWNlbGw+XG4gICAgICAgICAgICAgICAgPC9tLXRhYmxlLXJvdz5cbiAgICAgICAgICAgIDwvbS10YWJsZS1ib2R5PlxuICAgICAgICA8L20tdGFibGU+XG5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgdGhpcy4kZWwucXVlcnlTZWxlY3RvckFsbCgnLmh0bWwnKS5mb3JFYWNoKGVsID0+IGhsanMuaGlnaGxpZ2h0QmxvY2soZWwpKVxuICAgICAgICB9LFxuXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHNlbGVjdDogZnVuY3Rpb24odmFsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja2JveDIgPSB2YWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGNoZWNrYm94MTogZmFsc2UsXG4gICAgICAgICAgICAgICAgY2hlY2tib3gyOiB0cnVlLFxuXG4gICAgICAgICAgICAgICAgcmFkaW9WYWw6ICd0d28nLFxuXG4gICAgICAgICAgICAgICAgc3dpdGNoMTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzd2l0Y2gyOiBmYWxzZSxcblxuICAgICAgICAgICAgICAgIGlUb2dnbGU6IHRydWUsXG4gICAgICAgICAgICAgICAgaVRvZ2dsZTI6IGZhbHNlLFxuXG4gICAgICAgICAgICAgICAgZG9jQ2hlY2tib3hlczogW1xuICAgICAgICAgICAgICAgICAgICB7bmFtZTogJ2Rpc2FibGVkJywgZGVzY3JpcHRpb246ICdEaXNhYmxlcyB0aGUgY2hlY2tib3guIEFkZHMgdGhlIGlzLWRpc2FibGVkIGNsYXNzIHRvIHRoZSBidXR0b24nLCByZW1hcms6ICcnfSxcbiAgICAgICAgICAgICAgICAgICAge25hbWU6ICdjaGVja2VkJywgZGVzY3JpcHRpb246ICdDb250cm9sIHdoZXRoZXIgdGhlIGNoZWNrYm94IGlzIGNoZWNrZWQgb3Igbm90JywgcmVtYXJrOiAnWW91IG11c3QgdXNlIGEgdHdvIHdheSBiaW5kaW5nLiBZb3UgY2FuIGVpdGhlciB1c2UgYSBib29sZWFuIG9yIGFuIGFycmF5J30sXG4gICAgICAgICAgICAgICAgICAgIHtuYW1lOiAnaWQnLCBkZXNjcmlwdGlvbjogJ0RlZmluZXMgdGhlIGlkIHVzZWQgdG8gbGluayB0aGUgbGFiZWwgYW5kIHRoZSBpbnB1dCcsIHJlbWFyazogJyd9LFxuICAgICAgICAgICAgICAgICAgICB7bmFtZTogJ3YtbW9kZWwnLCBkZXNjcmlwdGlvbjogJ0RlZmluZXMgdGhlIHZhbHVlIG9mIHRoZSBjaGVja2JveC4gTmVlZGVkIHdoZW4gcGFzc2luZyBhbiBhcnJheSB0byB0aGUgdi1tb2RlbCBwcm9wJywgcmVtYXJrOiAnJ30sXG4gICAgICAgICAgICAgICAgXSxcblxuICAgICAgICAgICAgICAgIGRvY1JhZGlvOiBbXG4gICAgICAgICAgICAgICAgICAgIHtuYW1lOiAnZGlzYWJsZWQnLCBkZXNjcmlwdGlvbjogJ0Rpc2FibGVzIHRoZSBjaGVja2JveC4gQWRkcyB0aGUgaXMtZGlzYWJsZWQgY2xhc3MgdG8gdGhlIGJ1dHRvbicsIHJlbWFyazogJyd9LFxuICAgICAgICAgICAgICAgICAgICB7bmFtZTogJ2NoZWNrZWQnLCBkZXNjcmlwdGlvbjogJ0NvbnRyb2wgd2hldGhlciB0aGUgY2hlY2tib3ggaXMgY2hlY2tlZCBvciBub3QnLCByZW1hcms6ICdZb3UgbXVzdCB1c2UgYSB0d28gd2F5IGJpbmRpbmcuIFlvdSBjYW4gZWl0aGVyIHVzZSBhIGJvb2xlYW4gb3IgYW4gYXJyYXknfSxcbiAgICAgICAgICAgICAgICAgICAge25hbWU6ICduYW1lJywgZGVzY3JpcHRpb246ICdEZWZpbmVzIHRoZSBuYW1lIHVzZWQgb24gdGhlIGlucHV0IGVsZW1lbnQnLCByZW1hcms6ICcnfSxcbiAgICAgICAgICAgICAgICAgICAge25hbWU6ICdpZCcsIGRlc2NyaXB0aW9uOiAnRGVmaW5lcyB0aGUgaWQgdXNlZCB0byBsaW5rIHRoZSBsYWJlbCBhbmQgdGhlIGlucHV0JywgcmVtYXJrOiAnJ30sXG4gICAgICAgICAgICAgICAgICAgIHtuYW1lOiAndi1tb2RlbCcsIGRlc2NyaXB0aW9uOiAnRGVmaW5lcyB0aGUgdmFsdWUgb2YgdGhlIHJhZGlvIGJ1dHRvbicsIHJlbWFyazogJyd9LFxuICAgICAgICAgICAgICAgIF0sXG5cbiAgICAgICAgICAgICAgICBkb2NTd2l0Y2g6IFtcbiAgICAgICAgICAgICAgICAgICAge25hbWU6ICdkaXNhYmxlZCcsIGRlc2NyaXB0aW9uOiAnRGlzYWJsZXMgdGhlIGNoZWNrYm94LiBBZGRzIHRoZSBpcy1kaXNhYmxlZCBjbGFzcyB0byB0aGUgYnV0dG9uJywgcmVtYXJrOiAnJ30sXG4gICAgICAgICAgICAgICAgICAgIHtuYW1lOiAnY2hlY2tlZCcsIGRlc2NyaXB0aW9uOiAnQ29udHJvbCB3aGV0aGVyIHRoZSBjaGVja2JveCBpcyBjaGVja2VkIG9yIG5vdCcsIHJlbWFyazogJ1lvdSBtdXN0IHVzZSBhIHR3byB3YXkgYmluZGluZy4gWW91IGNhbiBlaXRoZXIgdXNlIGEgYm9vbGVhbiBvciBhbiBhcnJheSd9LFxuICAgICAgICAgICAgICAgICAgICB7bmFtZTogJ3YtbW9kZWwnLCBkZXNjcmlwdGlvbjogJ0RlZmluZXMgdGhlIHZhbHVlIG9mIHRoZSBzd2l0Y2guIFVzZWZ1bCB3aGVuIHBhc3NpbmcgYW4gYXJyYXkgdG8gdGhlY2hlY2tlZCBwcm9wJywgcmVtYXJrOiAnJ30sXG4gICAgICAgICAgICAgICAgICAgIHtuYW1lOiAnaWQnLCBkZXNjcmlwdGlvbjogJ0RlZmluZXMgdGhlIHZhbHVlIG9mIHRoZSByYWRpbyBidXR0b24nLCByZW1hcms6ICcnfSxcbiAgICAgICAgICAgICAgICBdLFxuXG4gICAgICAgICAgICAgICAgZG9jSWNvbjogW1xuICAgICAgICAgICAgICAgICAgICB7bmFtZTogJ2Rpc2FibGVkJywgZGVzY3JpcHRpb246ICdEaXNhYmxlcyB0aGUgY2hlY2tib3guIEFkZHMgdGhlIGlzLWRpc2FibGVkIGNsYXNzIHRvIHRoZSBidXR0b24nLCByZW1hcms6ICcnfSxcbiAgICAgICAgICAgICAgICAgICAge25hbWU6ICdjaGVja2VkJywgZGVzY3JpcHRpb246ICdDb250cm9sIHdoZXRoZXIgdGhlIGljb24gaXMgY2hlY2tlZCBvciBub3QnLCByZW1hcms6ICdZb3UgbXVzdCB1c2UgYSB0d28gd2F5IGJpbmRpbmcuIFlvdSBjYW4gZWl0aGVyIHVzZSBhIGJvb2xlYW4gb3IgYW4gYXJyYXknfSxcbiAgICAgICAgICAgICAgICAgICAge25hbWU6ICdpY29uJywgZGVzY3JpcHRpb246ICdTZXQgdGhlIHRvZ2dsZSBpY29uJywgcmVtYXJrOiAnJ30sXG4gICAgICAgICAgICAgICAgICAgIHtuYW1lOiAnaWQnLCBkZXNjcmlwdGlvbjogJ0RlZmluZXMgdGhlIGlkIHVzZWQgdG8gbGluayB0aGUgbGFiZWwgYW5kIHRoZSBpbnB1dCcsIHJlbWFyazogJyd9LFxuICAgICAgICAgICAgICAgICAgICB7bmFtZTogJ3YtbW9kZWwnLCBkZXNjcmlwdGlvbjogJ0RlZmluZXMgdGhlIHZhbHVlIG9mIHRoZSB0b2dnbGUuIFVzZWZ1bCB3aGVuIHBhc3NpbmcgYW4gYXJyYXkgdG8gdGhlY2hlY2tlZCBwcm9wJywgcmVtYXJrOiAnJ30sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHRvZ2dsZXMudnVlPzZiMTdkYTQ5IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ2g0JywgW192bS5fdihcIkNoZWNrYm94XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtLWNoZWNrYm94Jywge1xuICAgIG9uOiB7XG4gICAgICBcImNoYW5nZVwiOiBfdm0uc2VsZWN0XG4gICAgfSxcbiAgICBtb2RlbDoge1xuICAgICAgdmFsdWU6IChfdm0uY2hlY2tib3gxKSxcbiAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgX3ZtLmNoZWNrYm94MSA9ICQkdlxuICAgICAgfSxcbiAgICAgIGV4cHJlc3Npb246IFwiY2hlY2tib3gxXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJUaGlzIG9uZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS1jaGVja2JveCcsIHtcbiAgICBtb2RlbDoge1xuICAgICAgdmFsdWU6IChfdm0uY2hlY2tib3gyKSxcbiAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgX3ZtLmNoZWNrYm94MiA9ICQkdlxuICAgICAgfSxcbiAgICAgIGV4cHJlc3Npb246IFwiY2hlY2tib3gyXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJMYWJlbFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS1jaGVja2JveCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJkaXNhYmxlZFwiOiBcIlwiXG4gICAgfSxcbiAgICBtb2RlbDoge1xuICAgICAgdmFsdWU6IChfdm0uY2hlY2tib3gyKSxcbiAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgX3ZtLmNoZWNrYm94MiA9ICQkdlxuICAgICAgfSxcbiAgICAgIGV4cHJlc3Npb246IFwiY2hlY2tib3gyXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJMYWJlbFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaHInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIFtfdm0uX3YoXCJcXG4gICAgICAgIFwiICsgX3ZtLl9zKF92bS5jaGVja2JveDEpICsgXCIsIFwiICsgX3ZtLl9zKF92bS5jaGVja2JveDIpICsgXCJcXG4gICAgXCIpXSksIF92bS5fdihcIiBcIiksIF92bS5fbSgwKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tdGFibGUnLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwid2lkdGhcIjogXCIxMDAlXCJcbiAgICB9XG4gIH0sIFtfYygnbS10YWJsZS1oZWFkJywgW19jKCdtLXRhYmxlLXJvdycsIFtfYygnbS10YWJsZS1oJywgW192bS5fdihcIlByb3BcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tdGFibGUtaCcsIFtfdm0uX3YoXCJFZmZlY3RcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tdGFibGUtaCcsIFtfdm0uX3YoXCJSZW1hcmtzXCIpXSldLCAxKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnbS10YWJsZS1ib2R5JywgX3ZtLl9sKChfdm0uZG9jQ2hlY2tib3hlcyksIGZ1bmN0aW9uKHByb3ApIHtcbiAgICByZXR1cm4gX2MoJ20tdGFibGUtcm93JywgW19jKCdtLXRhYmxlLWNlbGwnLCBbX3ZtLl92KF92bS5fcyhwcm9wLm5hbWUpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS10YWJsZS1jZWxsJywgW192bS5fdihfdm0uX3MocHJvcC5kZXNjcmlwdGlvbikpXSksIF92bS5fdihcIiBcIiksIF9jKCdtLXRhYmxlLWNlbGwnLCBbX3ZtLl92KF92bS5fcyhwcm9wLnJlbWFyaykpXSldLCAxKVxuICB9KSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2g0JywgW192bS5fdihcIlJhZGlvXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtLXJhZGlvJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm5hbWVcIjogXCJ0ZXN0XCIsXG4gICAgICBcInZhbFwiOiBcIm9uZVwiXG4gICAgfSxcbiAgICBtb2RlbDoge1xuICAgICAgdmFsdWU6IChfdm0ucmFkaW9WYWwpLFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICBfdm0ucmFkaW9WYWwgPSAkJHZcbiAgICAgIH0sXG4gICAgICBleHByZXNzaW9uOiBcInJhZGlvVmFsXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJUZXN0IDFcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tcmFkaW8nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibmFtZVwiOiBcInRlc3RcIixcbiAgICAgIFwidmFsXCI6IFwidHdvXCJcbiAgICB9LFxuICAgIG1vZGVsOiB7XG4gICAgICB2YWx1ZTogKF92bS5yYWRpb1ZhbCksXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgIF92bS5yYWRpb1ZhbCA9ICQkdlxuICAgICAgfSxcbiAgICAgIGV4cHJlc3Npb246IFwicmFkaW9WYWxcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlRlc3QgMlwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS1yYWRpbycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJuYW1lXCI6IFwidGVzdFwiLFxuICAgICAgXCJ2YWxcIjogXCIzXCIsXG4gICAgICBcImRpc2FibGVkXCI6IFwiXCJcbiAgICB9LFxuICAgIG1vZGVsOiB7XG4gICAgICB2YWx1ZTogKF92bS5yYWRpb1ZhbCksXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgIF92bS5yYWRpb1ZhbCA9ICQkdlxuICAgICAgfSxcbiAgICAgIGV4cHJlc3Npb246IFwicmFkaW9WYWxcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlRlc3QgM1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2JywgW192bS5fdihfdm0uX3MoX3ZtLnJhZGlvVmFsKSldKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9tKDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnbS10YWJsZScsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJ3aWR0aFwiOiBcIjEwMCVcIlxuICAgIH1cbiAgfSwgW19jKCdtLXRhYmxlLWhlYWQnLCBbX2MoJ20tdGFibGUtcm93JywgW19jKCdtLXRhYmxlLWgnLCBbX3ZtLl92KFwiUHJvcFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS10YWJsZS1oJywgW192bS5fdihcIkVmZmVjdFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS10YWJsZS1oJywgW192bS5fdihcIlJlbWFya3NcIildKV0sIDEpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdtLXRhYmxlLWJvZHknLCBfdm0uX2woKF92bS5kb2NSYWRpbyksIGZ1bmN0aW9uKHByb3ApIHtcbiAgICByZXR1cm4gX2MoJ20tdGFibGUtcm93JywgW19jKCdtLXRhYmxlLWNlbGwnLCBbX3ZtLl92KF92bS5fcyhwcm9wLm5hbWUpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS10YWJsZS1jZWxsJywgW192bS5fdihfdm0uX3MocHJvcC5kZXNjcmlwdGlvbikpXSksIF92bS5fdihcIiBcIiksIF9jKCdtLXRhYmxlLWNlbGwnLCBbX3ZtLl92KF92bS5fcyhwcm9wLnJlbWFyaykpXSldLCAxKVxuICB9KSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2g0JywgW192bS5fdihcIlN3aXRjaFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS1zd2l0Y2gnLCB7XG4gICAgbW9kZWw6IHtcbiAgICAgIHZhbHVlOiAoX3ZtLnN3aXRjaDEpLFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICBfdm0uc3dpdGNoMSA9ICQkdlxuICAgICAgfSxcbiAgICAgIGV4cHJlc3Npb246IFwic3dpdGNoMVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiT25cIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIlxcbiAgICBcIiArIF92bS5fcyhfdm0uc3dpdGNoMSkgKyBcIlxcbiAgICBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnbS1zd2l0Y2gnLCB7XG4gICAgbW9kZWw6IHtcbiAgICAgIHZhbHVlOiAoX3ZtLnN3aXRjaDIpLFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICBfdm0uc3dpdGNoMiA9ICQkdlxuICAgICAgfSxcbiAgICAgIGV4cHJlc3Npb246IFwic3dpdGNoMlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiT2ZmXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCJcXG4gICAgXCIgKyBfdm0uX3MoX3ZtLnN3aXRjaDIpICsgXCJcXG5cXG4gICAgXCIpLCBfYygnbS1zd2l0Y2gnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZGlzYWJsZWRcIjogXCJcIlxuICAgIH0sXG4gICAgbW9kZWw6IHtcbiAgICAgIHZhbHVlOiAoX3ZtLnN3aXRjaDIpLFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICBfdm0uc3dpdGNoMiA9ICQkdlxuICAgICAgfSxcbiAgICAgIGV4cHJlc3Npb246IFwic3dpdGNoMlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiT2ZmXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCJcXG4gICAgXCIgKyBfdm0uX3MoX3ZtLnN3aXRjaDIpICsgXCJcXG5cXG4gICAgXCIpLCBfdm0uX20oMiksIF92bS5fdihcIiBcIiksIF9jKCdtLXRhYmxlJywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcIndpZHRoXCI6IFwiMTAwJVwiXG4gICAgfVxuICB9LCBbX2MoJ20tdGFibGUtaGVhZCcsIFtfYygnbS10YWJsZS1yb3cnLCBbX2MoJ20tdGFibGUtaCcsIFtfdm0uX3YoXCJQcm9wXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtLXRhYmxlLWgnLCBbX3ZtLl92KFwiRWZmZWN0XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtLXRhYmxlLWgnLCBbX3ZtLl92KFwiUmVtYXJrc1wiKV0pXSwgMSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tdGFibGUtYm9keScsIF92bS5fbCgoX3ZtLmRvY1N3aXRjaCksIGZ1bmN0aW9uKHByb3ApIHtcbiAgICByZXR1cm4gX2MoJ20tdGFibGUtcm93JywgW19jKCdtLXRhYmxlLWNlbGwnLCBbX3ZtLl92KF92bS5fcyhwcm9wLm5hbWUpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS10YWJsZS1jZWxsJywgW192bS5fdihfdm0uX3MocHJvcC5kZXNjcmlwdGlvbikpXSksIF92bS5fdihcIiBcIiksIF9jKCdtLXRhYmxlLWNlbGwnLCBbX3ZtLl92KF92bS5fcyhwcm9wLnJlbWFyaykpXSldLCAxKVxuICB9KSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2g0JywgW192bS5fdihcIkljb24gVGFnZ2xlXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtLWljb24tdG9nZ2xlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImljb25cIjogXCJmb3JtYXRfYm9sZFwiXG4gICAgfSxcbiAgICBtb2RlbDoge1xuICAgICAgdmFsdWU6IChfdm0uaVRvZ2dsZSksXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgIF92bS5pVG9nZ2xlID0gJCR2XG4gICAgICB9LFxuICAgICAgZXhwcmVzc2lvbjogXCJpVG9nZ2xlXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiXFxuXFxuICAgIFwiICsgX3ZtLl9zKF92bS5pVG9nZ2xlKSArIFwiXFxuXFxuICAgIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdtLWljb24tdG9nZ2xlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImljb25cIjogXCJzZWFyY2hcIlxuICAgIH0sXG4gICAgbW9kZWw6IHtcbiAgICAgIHZhbHVlOiAoX3ZtLmlUb2dnbGUyKSxcbiAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgX3ZtLmlUb2dnbGUyID0gJCR2XG4gICAgICB9LFxuICAgICAgZXhwcmVzc2lvbjogXCJpVG9nZ2xlMlwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIlxcbiAgICBcIiArIF92bS5fcyhfdm0uaVRvZ2dsZTIpICsgXCJcXG5cXG4gICAgXCIpLCBfdm0uX20oMyksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnbS10YWJsZScsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJ3aWR0aFwiOiBcIjEwMCVcIlxuICAgIH1cbiAgfSwgW19jKCdtLXRhYmxlLWhlYWQnLCBbX2MoJ20tdGFibGUtcm93JywgW19jKCdtLXRhYmxlLWgnLCBbX3ZtLl92KFwiUHJvcFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS10YWJsZS1oJywgW192bS5fdihcIkVmZmVjdFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS10YWJsZS1oJywgW192bS5fdihcIlJlbWFya3NcIildKV0sIDEpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdtLXRhYmxlLWJvZHknLCBfdm0uX2woKF92bS5kb2NJY29uKSwgZnVuY3Rpb24ocHJvcCkge1xuICAgIHJldHVybiBfYygnbS10YWJsZS1yb3cnLCBbX2MoJ20tdGFibGUtY2VsbCcsIFtfdm0uX3YoX3ZtLl9zKHByb3AubmFtZSkpXSksIF92bS5fdihcIiBcIiksIF9jKCdtLXRhYmxlLWNlbGwnLCBbX3ZtLl92KF92bS5fcyhwcm9wLmRlc2NyaXB0aW9uKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tdGFibGUtY2VsbCcsIFtfdm0uX3YoX3ZtLl9zKHByb3AucmVtYXJrKSldKV0sIDEpXG4gIH0pKV0sIDEpXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW19jKCdwcmUnLCB7XG4gICAgcHJlOiB0cnVlXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBcIiksIF9jKCdjb2RlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImNsYXNzXCI6IFwiaHRtbFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIDxtLWNoZWNrYm94IHYtbW9kZWw9XFxcImNoZWNrYm94MVxcXCI+VGhpcyBvbmU8L20tY2hlY2tib3g+XFxuICAgICAgICAgICAgICAgIDxtLWNoZWNrYm94IHYtbW9kZWw9XFxcImNoZWNrYm94MlxcXCI+TGFiZWw8L20tY2hlY2tib3g+XFxuICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIlxcbiAgICAgICAgXCIpXSldKVxufSxmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ3ByZScsIHtcbiAgICBwcmU6IHRydWVcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgIFwiKSwgX2MoJ2NvZGUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiY2xhc3NcIjogXCJodG1sXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgPG0tcmFkaW8gbmFtZT1cXFwidGVzdFxcXCIgdi1tb2RlbD1cXFwicmFkaW9WYWxcXFwiIHZhbD1cXFwib25lXFxcIj5UZXN0IDE8L20tcmFkaW8+XFxuICAgICAgICAgICAgICAgIDxtLXJhZGlvIG5hbWU9XFxcInRlc3RcXFwiIHYtbW9kZWw9XFxcInJhZGlvVmFsXFxcIiB2YWw9XFxcInR3b1xcXCI+VGVzdCAyPC9tLXJhZGlvPlxcbiAgICAgICAgICAgICAgICA8bS1yYWRpbyBuYW1lPVxcXCJ0ZXN0XFxcIiB2LW1vZGVsPVxcXCJyYWRpb1ZhbFxcXCIgdmFsPVxcXCIzXFxcIiBkaXNhYmxlZD5UZXN0IDM8L20tcmFkaW8+XFxuICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIlxcbiAgICAgICAgXCIpXSldKVxufSxmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ3ByZScsIHtcbiAgICBwcmU6IHRydWVcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgIFwiKSwgX2MoJ2NvZGUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiY2xhc3NcIjogXCJodG1sXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgPG0tc3dpdGNoIHYtbW9kZWw9XFxcInN3aXRjaDFcXFwiPk9uPC9tLXN3aXRjaD5cXG4gICAgICAgICAgICAgICAgPG0tc3dpdGNoIHYtbW9kZWw9XFxcInN3aXRjaDJcXFwiPk9mZjwvbS1zd2l0Y2g+XFxuICAgICAgICAgICAgICAgIDxtLXN3aXRjaCB2LW1vZGVsPVxcXCJzd2l0Y2gyXFxcIiBkaXNhYmxlZD5PZmY8L20tc3dpdGNoPlxcbiAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCJcXG4gICAgICAgIFwiKV0pXSlcbn0sZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW19jKCdwcmUnLCB7XG4gICAgcHJlOiB0cnVlXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBcIiksIF9jKCdjb2RlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImNsYXNzXCI6IFwiaHRtbFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIDxtLWljb24tdG9nZ2xlIHYtbW9kZWw9XFxcImlUb2dnbGVcXFwiIGljb249XFxcImZvcm1hdF9ib2xkXFxcIj48L20taWNvbi10b2dnbGU+XFxuICAgICAgICAgICAgICAgIDxtLWljb24tdG9nZ2xlIHYtbW9kZWw9XFxcImlUb2dnbGUyXFxcIiBpY29uPVxcXCJzZWFyY2hcXFwiPjwvbS1pY29uLXRvZ2dsZT5cXG4gICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiXFxuICAgICAgICBcIildKV0pXG59XX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNDdmYTJjNmRcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTQ3ZmEyYzZkIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy90b2dnbGVzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vdGFicy52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTEwMTBkZGMwIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3RhYnMudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIi9Vc2Vycy9vei9zcmMvbWF0ZXJpYWwtY29tcG9uZW50cy9leGFtcGxlcy9zcmMvY29tcG9uZW50cy90YWJzLnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMTAxMGRkYzBcIiwgX192dWVfb3B0aW9uc19fKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMTAxMGRkYzBcIiwgX192dWVfb3B0aW9uc19fKVxuICB9XG59KSgpfVxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSB0YWJzLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL3RhYnMudnVlIiwiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxtLXRhYnMgdi1tb2RlbD1cImN1cnJlbnRUdWJcIj5cbiAgICAgICAgICAgIDxtLXRhYiA6dGFiPVwieyB0aXRsZTogJ0pvbicsIGlkOiAndGFiLTEnIH1cIj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgSGVsbG8gMVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvbS10YWI+XG4gICAgICAgICAgICA8bS10YWIgOnRhYj1cInsgdGl0bGU6ICdUb20nLCBpZDogJ3RhYi0yJyB9XCI+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIEhlbGxvIDJcbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L20tdGFiPlxuXG4gICAgICAgIDwvbS10YWJzPlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cHJlIHYtcHJlPlxuICAgICAgICAgICAgPGNvZGUgY2xhc3M9XCJodG1sXCI+XG4mI3gzQzt0ZW1wbGF0ZSYjeDNFO1xuICAgICYjeDNDO2RpdiYjeDNFO1xuICAgICAgICAmI3gzQzttLXRhYnMgdi1tb2RlbD0mI3gyMjtjdXJyZW50VHViJiN4MjI7JiN4M0U7XG4gICAgICAgICAgICAmI3gzQzttLXRhYiA6dGFiPSYjeDIyO3sgdGl0bGU6ICYjeDI3O0pvbiYjeDI3OywgaWQ6ICYjeDI3O3RhYi0xJiN4Mjc7IH0mI3gyMjsmI3gzRTtcbiAgICAgICAgICAgICAgICAmI3gzQztwJiN4M0U7XG4gICAgICAgICAgICAgICAgICAgIEhlbGxvIDFcbiAgICAgICAgICAgICAgICAmI3gzQzsvcCYjeDNFO1xuICAgICAgICAgICAgJiN4M0M7L20tdGFiJiN4M0U7XG4gICAgICAgICAgICAmI3gzQzttLXRhYiA6dGFiPSYjeDIyO3sgdGl0bGU6ICYjeDI3O1RvbSYjeDI3OywgaWQ6ICYjeDI3O3RhYi0yJiN4Mjc7IH0mI3gyMjsmI3gzRTtcbiAgICAgICAgICAgICAgICAmI3gzQztwJiN4M0U7XG4gICAgICAgICAgICAgICAgICAgIEhlbGxvIDJcbiAgICAgICAgICAgICAgICAmI3gzQzsvcCYjeDNFO1xuICAgICAgICAgICAgJiN4M0M7L20tdGFiJiN4M0U7XG5cbiAgICAgICAgJiN4M0M7L20tdGFicyYjeDNFO1xuICAgICYjeDNDOy9kaXYmI3gzRTtcbiYjeDNDOy90ZW1wbGF0ZSYjeDNFO1xuXG4mI3gzQztzY3JpcHQmI3gzRTtcbiAgICBleHBvcnQgZGVmYXVsdHtcbiAgICAgICAgZGF0YSgpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50VHViOiAmI3gyNzt0YWItMSYjeDI3OyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiYjeDNDOy9zY3JpcHQmI3gzRTtcbiAgICAgICAgICAgIDwvY29kZT48L3ByZT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGJyPlxuICAgICAgICA8YnI+XG5cblxuXG4gICAgICAgIDxtLXRhYnMgdi1tb2RlbD1cImN1cnJlbnRUdWIyXCIgOm5vLXJpcHBsZS1lZmZlY3Q9XCJ0cnVlXCIgOmFuaW1hdGlvbj1cInRydWVcIiA6Y29udGVudC1zdHlsZT1cIntoZWlnaHQ6ICczMDBweCd9XCI+XG4gICAgICAgICAgICA8bS10YWIgdGFiPVwiVGFiIDFcIj5cbiAgICAgICAgICAgICAgICA8cCBzdHlsZT1cIm1pbi1oZWlnaHQ6IDI1MHB4OyBiYWNrZ3JvdW5kOiAjZmFmYWZhOyBwYWRkaW5nOiAxMHB4O1wiPlxuICAgICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBTZWQgbWkgZG9sb3IsIG1vbGVzdGllIHV0IHBvcnR0aXRvciB2aXRhZSwgdml2ZXJyYSBhYyBsb3JlbS48YnI+XG4gICAgICAgICAgICAgICAgICAgIFBlbGxlbnRlc3F1ZSBldSBsb2JvcnRpcyBmZWxpcy4gTnVsbGEgaWQgcHJldGl1bSBhbnRlLiBBbGlxdWFtIHR1cnBpcyBlbmltLCBpbXBlcmRpZXQgZWZmaWNpdHVyIG1hdXJpcyBhLCA8YnI+XG4gICAgICAgICAgICAgICAgICAgIHRlbXBvciBsYWNpbmlhIGFudGUuIE5hbSB2ZWwgdmVsaXQgbWV0dXMuIEludGVnZXIgbnVsbGEgdHVycGlzLCB0cmlzdGlxdWUgbm9uIGR1aSBlZ2V0LCBtYWxlc3VhZGEgYmxhbmRpdCBuaXNpLjxicj5cbiAgICAgICAgICAgICAgICAgICAgUGhhc2VsbHVzIGlkIHZvbHV0cGF0IG9yY2kuIEN1cmFiaXR1ciBtYWxlc3VhZGEgYXVndWUgZWZmaWNpdHVyIG1hc3NhIGNvbnNlcXVhdCBjb25zZXF1YXQuIENsYXNzIGFwdGVudCB0YWNpdGkgc29jaW9zcXVcbiAgICAgICAgICAgICAgICAgICAgYWQgbGl0b3JhIHRvcnF1ZW50IHBlciBjb251YmlhIG5vc3RyYSwgcGVyIGluY2VwdG9zIGhpbWVuYWVvcy5cblxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvbS10YWI+XG4gICAgICAgICAgICA8bS10YWIgdGFiPVwiVGFiIDJcIj5cbiAgICAgICAgICAgICAgICA8cCBzdHlsZT1cIm1pbi1oZWlnaHQ6IDI1MHB4OyBiYWNrZ3JvdW5kOiAjMzMzOyBjb2xvcjogI2ZmZjsgcGFkZGluZzogMTBweDtcIj5cbiAgICAgICAgICAgICAgICAgICAgUXVpc3F1ZSBldCBoZW5kcmVyaXQgb2Rpbywgdml2ZXJyYSBlZmZpY2l0dXIgcmlzdXMuIE1hdXJpcyB0ZW1wdXMgbWkgdXQgZnJpbmdpbGxhIHBsYWNlcmF0LiBWZXN0aWJ1bHVtIHNhZ2l0dGlzIHBlbGxlbnRlc3F1ZSBudW5jIG5lYyBjb25ndWUuIE1hZWNlbmFzIGV1IGVuaW0gc3VzY2lwaXQgYXVndWUgbWF4aW11cyB2aXZlcnJhLiBGdXNjZSB0aW5jaWR1bnQsIG5pYmggbm9uIGVsZWlmZW5kIHBsYWNlcmF0LCBsZWN0dXMgbnVuYyBsYWNpbmlhIG5pc2ksIGEgbWF4aW11cyBwdXJ1cyBtYXVyaXMgdmVsIGR1aS4gRnVzY2UgaW4gdXJuYSB2ZWwgZGlhbSBsb2JvcnRpcyB0ZW1wb3Igbm9uIHNlZCBuaXNpLiBFdGlhbSBtZXR1cyBvcmNpLCBjb252YWxsaXMgZWdldCByaG9uY3VzIHZlbCwgY3Vyc3VzIGEgbWF1cmlzLiBQcm9pbiBtYXhpbXVzIHZlbGl0IHNlZCBzZW1wZXIgY29tbW9kby4gTWFlY2VuYXMgc2l0IGFtZXQgbGFvcmVldCBsZW8uIE51bGxhIGZhY2lsaXNpLiBJbnRlZ2VyIGVnZXQgbWF1cmlzIG1pLiBOdWxsYSBkaWN0dW0gZXJhdCBlZ2V0IG1pIG1heGltdXMgdmVuZW5hdGlzLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvbS10YWI+XG5cbiAgICAgICAgICAgIDxtLXRhYiB0YWI9XCJUYWIgM1wiPlxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPVwibWluLWhlaWdodDogMjUwcHg7IGJhY2tncm91bmQ6ICMzZjUxYjU7IGNvbG9yOiAjZmZmOyBwYWRkaW5nOiAxMHB4O1wiPlxuICAgICAgICAgICAgICAgICAgICBRdWlzcXVlIGV0IGhlbmRyZXJpdCBvZGlvLCB2aXZlcnJhIGVmZmljaXR1ciByaXN1cy4gTWF1cmlzIHRlbXB1cyBtaSB1dCBmcmluZ2lsbGEgcGxhY2VyYXQuIFZlc3RpYnVsdW0gc2FnaXR0aXMgcGVsbGVudGVzcXVlIG51bmMgbmVjIGNvbmd1ZS4gTWFlY2VuYXMgZXUgZW5pbSBzdXNjaXBpdCBhdWd1ZSBtYXhpbXVzIHZpdmVycmEuIEZ1c2NlIHRpbmNpZHVudCwgbmliaCBub24gZWxlaWZlbmQgcGxhY2VyYXQsIGxlY3R1cyBudW5jIGxhY2luaWEgbmlzaSwgYSBtYXhpbXVzIHB1cnVzIG1hdXJpcyB2ZWwgZHVpLiBGdXNjZSBpbiB1cm5hIHZlbCBkaWFtIGxvYm9ydGlzIHRlbXBvciBub24gc2VkIG5pc2kuIEV0aWFtIG1ldHVzIG9yY2ksIGNvbnZhbGxpcyBlZ2V0IHJob25jdXMgdmVsLCBjdXJzdXMgYSBtYXVyaXMuIFByb2luIG1heGltdXMgdmVsaXQgc2VkIHNlbXBlciBjb21tb2RvLiBNYWVjZW5hcyBzaXQgYW1ldCBsYW9yZWV0IGxlby4gTnVsbGEgZmFjaWxpc2kuIEludGVnZXIgZWdldCBtYXVyaXMgbWkuIE51bGxhIGRpY3R1bSBlcmF0IGVnZXQgbWkgbWF4aW11cyB2ZW5lbmF0aXMuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9tLXRhYj5cblxuICAgICAgICA8L20tdGFicz5cblxuICAgICAgICA8cHJlIHYtcHJlPlxuICAgICAgICAgICAgPGNvZGUgY2xhc3M9XCJodG1sXCI+XG4mI3gzQzt0ZW1wbGF0ZSYjeDNFO1xuICAgICAgICAmI3gzQzttLXRhYnMgdi1tb2RlbD0mI3gyMjtjdXJyZW50VHViJiN4MjI7IDpuby1yaXBwbGUtZWZmZWN0PSYjeDIyO3RydWUmI3gyMjsgOmFuaW1hdGlvbj0mI3gyMjt0cnVlJiN4MjI7IDpjb250ZW50LXN0eWxlPSYjeDIyO3toZWlnaHQ6ICYjeDI3OzMwMHB4JiN4Mjc7fSYjeDIyOyYjeDNFO1xuICAgICAgICAgICAgJiN4M0M7bS10YWIgdGFiPSYjeDIyO1RhYiAxJiN4MjI7JiN4M0U7XG4gICAgICAgICAgICAgICAgJiN4M0M7cCBzdHlsZT0mI3gyMjttaW4taGVpZ2h0OiAyNTBweDsgYmFja2dyb3VuZDogI2ZhZmFmYTsgcGFkZGluZzogMTBweDsmI3gyMjsmI3gzRTtcbiAgICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gU2VkIG1pIGRvbG9yLCBtb2xlc3RpZSB1dCBwb3J0dGl0b3Igdml0YWUsIHZpdmVycmEgYWMgbG9yZW0uJiN4M0M7YnImI3gzRTtcbiAgICAgICAgICAgICAgICAgICAgUGVsbGVudGVzcXVlIGV1IGxvYm9ydGlzIGZlbGlzLiBOdWxsYSBpZCBwcmV0aXVtIGFudGUuIEFsaXF1YW0gdHVycGlzIGVuaW0sIGltcGVyZGlldCBlZmZpY2l0dXIgbWF1cmlzIGEsICYjeDNDO2JyJiN4M0U7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBvciBsYWNpbmlhIGFudGUuIE5hbSB2ZWwgdmVsaXQgbWV0dXMuIEludGVnZXIgbnVsbGEgdHVycGlzLCB0cmlzdGlxdWUgbm9uIGR1aSBlZ2V0LCBtYWxlc3VhZGEgYmxhbmRpdCBuaXNpLiYjeDNDO2JyJiN4M0U7XG4gICAgICAgICAgICAgICAgICAgIFBoYXNlbGx1cyBpZCB2b2x1dHBhdCBvcmNpLiBDdXJhYml0dXIgbWFsZXN1YWRhIGF1Z3VlIGVmZmljaXR1ciBtYXNzYSBjb25zZXF1YXQgY29uc2VxdWF0LiBDbGFzcyBhcHRlbnQgdGFjaXRpIHNvY2lvc3F1XG4gICAgICAgICAgICAgICAgICAgIGFkIGxpdG9yYSB0b3JxdWVudCBwZXIgY29udWJpYSBub3N0cmEsIHBlciBpbmNlcHRvcyBoaW1lbmFlb3MuXG5cbiAgICAgICAgICAgICAgICAmI3gzQzsvcCYjeDNFO1xuICAgICAgICAgICAgJiN4M0M7L20tdGFiJiN4M0U7XG4gICAgICAgICAgICAmI3gzQzttLXRhYiB0YWI9JiN4MjI7VGFiIDImI3gyMjsmI3gzRTtcbiAgICAgICAgICAgICAgICAmI3gzQztwIHN0eWxlPSYjeDIyO21pbi1oZWlnaHQ6IDI1MHB4OyBiYWNrZ3JvdW5kOiAjMzMzOyBjb2xvcjogI2ZmZjsgcGFkZGluZzogMTBweDsmI3gyMjsmI3gzRTtcbiAgICAgICAgICAgICAgICAgICAgUXVpc3F1ZSBldCBoZW5kcmVyaXQgb2Rpbywgdml2ZXJyYSBlZmZpY2l0dXIgcmlzdXMuIE1hdXJpcyB0ZW1wdXMgbWkgdXQgZnJpbmdpbGxhIHBsYWNlcmF0LiBWZXN0aWJ1bHVtIHNhZ2l0dGlzIHBlbGxlbnRlc3F1ZSBudW5jIG5lYyBjb25ndWUuIE1hZWNlbmFzIGV1IGVuaW0gc3VzY2lwaXQgYXVndWUgbWF4aW11cyB2aXZlcnJhLiBGdXNjZSB0aW5jaWR1bnQsIG5pYmggbm9uIGVsZWlmZW5kIHBsYWNlcmF0LCBsZWN0dXMgbnVuYyBsYWNpbmlhIG5pc2ksIGEgbWF4aW11cyBwdXJ1cyBtYXVyaXMgdmVsIGR1aS4gRnVzY2UgaW4gdXJuYSB2ZWwgZGlhbSBsb2JvcnRpcyB0ZW1wb3Igbm9uIHNlZCBuaXNpLiBFdGlhbSBtZXR1cyBvcmNpLCBjb252YWxsaXMgZWdldCByaG9uY3VzIHZlbCwgY3Vyc3VzIGEgbWF1cmlzLiBQcm9pbiBtYXhpbXVzIHZlbGl0IHNlZCBzZW1wZXIgY29tbW9kby4gTWFlY2VuYXMgc2l0IGFtZXQgbGFvcmVldCBsZW8uIE51bGxhIGZhY2lsaXNpLiBJbnRlZ2VyIGVnZXQgbWF1cmlzIG1pLiBOdWxsYSBkaWN0dW0gZXJhdCBlZ2V0IG1pIG1heGltdXMgdmVuZW5hdGlzLlxuICAgICAgICAgICAgICAgICYjeDNDOy9wJiN4M0U7XG4gICAgICAgICAgICAmI3gzQzsvbS10YWImI3gzRTtcblxuICAgICAgICAgICAgJiN4M0M7bS10YWIgdGFiPSYjeDIyO1RhYiAzJiN4MjI7JiN4M0U7XG4gICAgICAgICAgICAgICAgJiN4M0M7cCBzdHlsZT0mI3gyMjttaW4taGVpZ2h0OiAyNTBweDsgYmFja2dyb3VuZDogIzNmNTFiNTsgY29sb3I6ICNmZmY7IHBhZGRpbmc6IDEwcHg7JiN4MjI7JiN4M0U7XG4gICAgICAgICAgICAgICAgICAgIFF1aXNxdWUgZXQgaGVuZHJlcml0IG9kaW8sIHZpdmVycmEgZWZmaWNpdHVyIHJpc3VzLiBNYXVyaXMgdGVtcHVzIG1pIHV0IGZyaW5naWxsYSBwbGFjZXJhdC4gVmVzdGlidWx1bSBzYWdpdHRpcyBwZWxsZW50ZXNxdWUgbnVuYyBuZWMgY29uZ3VlLiBNYWVjZW5hcyBldSBlbmltIHN1c2NpcGl0IGF1Z3VlIG1heGltdXMgdml2ZXJyYS4gRnVzY2UgdGluY2lkdW50LCBuaWJoIG5vbiBlbGVpZmVuZCBwbGFjZXJhdCwgbGVjdHVzIG51bmMgbGFjaW5pYSBuaXNpLCBhIG1heGltdXMgcHVydXMgbWF1cmlzIHZlbCBkdWkuIEZ1c2NlIGluIHVybmEgdmVsIGRpYW0gbG9ib3J0aXMgdGVtcG9yIG5vbiBzZWQgbmlzaS4gRXRpYW0gbWV0dXMgb3JjaSwgY29udmFsbGlzIGVnZXQgcmhvbmN1cyB2ZWwsIGN1cnN1cyBhIG1hdXJpcy4gUHJvaW4gbWF4aW11cyB2ZWxpdCBzZWQgc2VtcGVyIGNvbW1vZG8uIE1hZWNlbmFzIHNpdCBhbWV0IGxhb3JlZXQgbGVvLiBOdWxsYSBmYWNpbGlzaS4gSW50ZWdlciBlZ2V0IG1hdXJpcyBtaS4gTnVsbGEgZGljdHVtIGVyYXQgZWdldCBtaSBtYXhpbXVzIHZlbmVuYXRpcy5cbiAgICAgICAgICAgICAgICAmI3gzQzsvcCYjeDNFO1xuICAgICAgICAgICAgJiN4M0M7L20tdGFiJiN4M0U7XG5cbiAgICAgICAgJiN4M0M7L20tdGFicyYjeDNFO1xuICAgICYjeDNDOy9kaXYmI3gzRTtcbiYjeDNDOy90ZW1wbGF0ZSYjeDNFO1xuXG4mI3gzQztzY3JpcHQmI3gzRTtcbiAgZXhwb3J0IGRlZmF1bHR7XG4gICAgICBkYXRhKCl7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgY3VycmVudFR1YjogJiN4Mjc7VGFiIDImI3gyNztcbiAgICAgICAgICB9XG4gICAgICB9XG4gIH1cbiYjeDNDOy9zY3JpcHQmI3gzRTtcblxuICAgICAgICAgICAgPC9jb2RlPlxuICAgICAgICA8L3ByZT5cblxuICAgICAgICA8YnI+XG5cbiAgICAgICAgPG0tdGFibGUgc3R5bGU9XCJ3aWR0aDogMTAwJVwiPlxuICAgICAgICAgICAgPG0tdGFibGUtaGVhZD5cbiAgICAgICAgICAgICAgICA8bS10YWJsZS1yb3c+XG4gICAgICAgICAgICAgICAgICAgIDxtLXRhYmxlLWg+UHJvcDwvbS10YWJsZS1oPlxuICAgICAgICAgICAgICAgICAgICA8bS10YWJsZS1oPkVmZmVjdDwvbS10YWJsZS1oPlxuICAgICAgICAgICAgICAgICAgICA8bS10YWJsZS1oPlJlbWFya3M8L20tdGFibGUtaD5cbiAgICAgICAgICAgICAgICA8L20tdGFibGUtcm93PlxuICAgICAgICAgICAgPC9tLXRhYmxlLWhlYWQ+XG5cbiAgICAgICAgICAgIDxtLXRhYmxlLWJvZHk+XG4gICAgICAgICAgICAgICAgPG0tdGFibGUtcm93IHYtZm9yPVwicHJvcCBpbiBkb2NcIj5cbiAgICAgICAgICAgICAgICAgICAgPG0tdGFibGUtY2VsbD57e3Byb3AubmFtZX19PC9tLXRhYmxlLWNlbGw+XG4gICAgICAgICAgICAgICAgICAgIDxtLXRhYmxlLWNlbGw+e3twcm9wLmRlc2NyaXB0aW9ufX08L20tdGFibGUtY2VsbD5cbiAgICAgICAgICAgICAgICAgICAgPG0tdGFibGUtY2VsbD57e3Byb3AucmVtYXJrfX08L20tdGFibGUtY2VsbD5cbiAgICAgICAgICAgICAgICA8L20tdGFibGUtcm93PlxuICAgICAgICAgICAgPC9tLXRhYmxlLWJvZHk+XG4gICAgICAgIDwvbS10YWJsZT5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHR7XG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICB0aGlzLiRlbC5xdWVyeVNlbGVjdG9yQWxsKCcuaHRtbCcpLmZvckVhY2goZWwgPT4gaGxqcy5oaWdobGlnaHRCbG9jayhlbCkpXG4gICAgICAgIH0sXG5cbiAgICAgICAgZGF0YSgpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50VHViOiAndGFiLTEnLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRUdWIyOiAnVGFiIDInLFxuXG4gICAgICAgICAgICAgICAgZG9jOiBbXG4gICAgICAgICAgICAgICAgICAgIHtuYW1lOiAndi1tb2RlbCcsIGRlc2NyaXB0aW9uOiAnQ3VycmVudCB0YWIuIEl0IHNob3VsZCB1c2Ugd2l0aCBtLXRhYnMgY29tcG9uZW50JywgcmVtYXJrOiAnJ30sXG4gICAgICAgICAgICAgICAgICAgIHtuYW1lOiAndGFiJywgZGVzY3JpcHRpb246ICdUYWIgaW5pdCBvYmplY3Qgd2l0aCBwYXJhbXM6IHRpdGxlLCBpZCcsIHJlbWFyazogJyd9LFxuICAgICAgICAgICAgICAgICAgICB7bmFtZTogJ25vLXJpcHBsZS1lZmZlY3QnLCBkZXNjcmlwdGlvbjogJ0Rpc2FibGUgcmlwcGxlIGVmZmVjdCBmb3IgdGFicyBjb250cm9scy4gSXQgc2hvdWxkIHVzZSB3aXRoIG0tdGFicyBjb21wb25lbnQnLCByZW1hcms6ICcnfSxcbiAgICAgICAgICAgICAgICAgICAge25hbWU6ICdhbmltYXRpb24nLCBkZXNjcmlwdGlvbjogJ0VuYWJsZSBhbmltYXRpb24gZWZmZWN0OiB0cnVlIHwgZmFsc2UuIEl0IHNob3VsZCB1c2Ugd2l0aCBtLXRhYnMgY29tcG9uZW50JywgcmVtYXJrOiAnJ30sXG4gICAgICAgICAgICAgICAgICAgIHtuYW1lOiAnY29udGVudC1zdHlsZScsIGRlc2NyaXB0aW9uOiAnU3R5bGUgYXR0cmlidXRlIHBhcmFtcyBmb3IgYSB0YWJzIGNvbnRhaW5lciwgSXQgc2hvdWxkIHVzZSB3aXRoIG0tdGFicyBjb21wb25lbnQnLCByZW1hcms6ICcnfSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB0YWJzLnZ1ZT9jM2UxMDk0NCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW19jKCdtLXRhYnMnLCB7XG4gICAgbW9kZWw6IHtcbiAgICAgIHZhbHVlOiAoX3ZtLmN1cnJlbnRUdWIpLFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICBfdm0uY3VycmVudFR1YiA9ICQkdlxuICAgICAgfSxcbiAgICAgIGV4cHJlc3Npb246IFwiY3VycmVudFR1YlwiXG4gICAgfVxuICB9LCBbX2MoJ20tdGFiJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRhYlwiOiB7XG4gICAgICAgIHRpdGxlOiAnSm9uJyxcbiAgICAgICAgaWQ6ICd0YWItMSdcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygncCcsIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIEhlbGxvIDFcXG4gICAgICAgICAgICAgICAgXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tdGFiJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRhYlwiOiB7XG4gICAgICAgIHRpdGxlOiAnVG9tJyxcbiAgICAgICAgaWQ6ICd0YWItMidcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygncCcsIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIEhlbGxvIDJcXG4gICAgICAgICAgICAgICAgXCIpXSldKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfdm0uX20oMCksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tdGFicycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJuby1yaXBwbGUtZWZmZWN0XCI6IHRydWUsXG4gICAgICBcImFuaW1hdGlvblwiOiB0cnVlLFxuICAgICAgXCJjb250ZW50LXN0eWxlXCI6IHtcbiAgICAgICAgaGVpZ2h0OiAnMzAwcHgnXG4gICAgICB9XG4gICAgfSxcbiAgICBtb2RlbDoge1xuICAgICAgdmFsdWU6IChfdm0uY3VycmVudFR1YjIpLFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICBfdm0uY3VycmVudFR1YjIgPSAkJHZcbiAgICAgIH0sXG4gICAgICBleHByZXNzaW9uOiBcImN1cnJlbnRUdWIyXCJcbiAgICB9XG4gIH0sIFtfYygnbS10YWInLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGFiXCI6IFwiVGFiIDFcIlxuICAgIH1cbiAgfSwgW19jKCdwJywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcIm1pbi1oZWlnaHRcIjogXCIyNTBweFwiLFxuICAgICAgXCJiYWNrZ3JvdW5kXCI6IFwiI2ZhZmFmYVwiLFxuICAgICAgXCJwYWRkaW5nXCI6IFwiMTBweFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBTZWQgbWkgZG9sb3IsIG1vbGVzdGllIHV0IHBvcnR0aXRvciB2aXRhZSwgdml2ZXJyYSBhYyBsb3JlbS5cIiksIF9jKCdicicpLCBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIFBlbGxlbnRlc3F1ZSBldSBsb2JvcnRpcyBmZWxpcy4gTnVsbGEgaWQgcHJldGl1bSBhbnRlLiBBbGlxdWFtIHR1cnBpcyBlbmltLCBpbXBlcmRpZXQgZWZmaWNpdHVyIG1hdXJpcyBhLCBcIiksIF9jKCdicicpLCBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIHRlbXBvciBsYWNpbmlhIGFudGUuIE5hbSB2ZWwgdmVsaXQgbWV0dXMuIEludGVnZXIgbnVsbGEgdHVycGlzLCB0cmlzdGlxdWUgbm9uIGR1aSBlZ2V0LCBtYWxlc3VhZGEgYmxhbmRpdCBuaXNpLlwiKSwgX2MoJ2JyJyksIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgUGhhc2VsbHVzIGlkIHZvbHV0cGF0IG9yY2kuIEN1cmFiaXR1ciBtYWxlc3VhZGEgYXVndWUgZWZmaWNpdHVyIG1hc3NhIGNvbnNlcXVhdCBjb25zZXF1YXQuIENsYXNzIGFwdGVudCB0YWNpdGkgc29jaW9zcXVcXG4gICAgICAgICAgICAgICAgICAgIGFkIGxpdG9yYSB0b3JxdWVudCBwZXIgY29udWJpYSBub3N0cmEsIHBlciBpbmNlcHRvcyBoaW1lbmFlb3MuXFxuXFxuICAgICAgICAgICAgICAgIFwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdtLXRhYicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0YWJcIjogXCJUYWIgMlwiXG4gICAgfVxuICB9LCBbX2MoJ3AnLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwibWluLWhlaWdodFwiOiBcIjI1MHB4XCIsXG4gICAgICBcImJhY2tncm91bmRcIjogXCIjMzMzXCIsXG4gICAgICBcImNvbG9yXCI6IFwiI2ZmZlwiLFxuICAgICAgXCJwYWRkaW5nXCI6IFwiMTBweFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICBRdWlzcXVlIGV0IGhlbmRyZXJpdCBvZGlvLCB2aXZlcnJhIGVmZmljaXR1ciByaXN1cy4gTWF1cmlzIHRlbXB1cyBtaSB1dCBmcmluZ2lsbGEgcGxhY2VyYXQuIFZlc3RpYnVsdW0gc2FnaXR0aXMgcGVsbGVudGVzcXVlIG51bmMgbmVjIGNvbmd1ZS4gTWFlY2VuYXMgZXUgZW5pbSBzdXNjaXBpdCBhdWd1ZSBtYXhpbXVzIHZpdmVycmEuIEZ1c2NlIHRpbmNpZHVudCwgbmliaCBub24gZWxlaWZlbmQgcGxhY2VyYXQsIGxlY3R1cyBudW5jIGxhY2luaWEgbmlzaSwgYSBtYXhpbXVzIHB1cnVzIG1hdXJpcyB2ZWwgZHVpLiBGdXNjZSBpbiB1cm5hIHZlbCBkaWFtIGxvYm9ydGlzIHRlbXBvciBub24gc2VkIG5pc2kuIEV0aWFtIG1ldHVzIG9yY2ksIGNvbnZhbGxpcyBlZ2V0IHJob25jdXMgdmVsLCBjdXJzdXMgYSBtYXVyaXMuIFByb2luIG1heGltdXMgdmVsaXQgc2VkIHNlbXBlciBjb21tb2RvLiBNYWVjZW5hcyBzaXQgYW1ldCBsYW9yZWV0IGxlby4gTnVsbGEgZmFjaWxpc2kuIEludGVnZXIgZWdldCBtYXVyaXMgbWkuIE51bGxhIGRpY3R1bSBlcmF0IGVnZXQgbWkgbWF4aW11cyB2ZW5lbmF0aXMuXFxuICAgICAgICAgICAgICAgIFwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdtLXRhYicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0YWJcIjogXCJUYWIgM1wiXG4gICAgfVxuICB9LCBbX2MoJ3AnLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwibWluLWhlaWdodFwiOiBcIjI1MHB4XCIsXG4gICAgICBcImJhY2tncm91bmRcIjogXCIjM2Y1MWI1XCIsXG4gICAgICBcImNvbG9yXCI6IFwiI2ZmZlwiLFxuICAgICAgXCJwYWRkaW5nXCI6IFwiMTBweFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICBRdWlzcXVlIGV0IGhlbmRyZXJpdCBvZGlvLCB2aXZlcnJhIGVmZmljaXR1ciByaXN1cy4gTWF1cmlzIHRlbXB1cyBtaSB1dCBmcmluZ2lsbGEgcGxhY2VyYXQuIFZlc3RpYnVsdW0gc2FnaXR0aXMgcGVsbGVudGVzcXVlIG51bmMgbmVjIGNvbmd1ZS4gTWFlY2VuYXMgZXUgZW5pbSBzdXNjaXBpdCBhdWd1ZSBtYXhpbXVzIHZpdmVycmEuIEZ1c2NlIHRpbmNpZHVudCwgbmliaCBub24gZWxlaWZlbmQgcGxhY2VyYXQsIGxlY3R1cyBudW5jIGxhY2luaWEgbmlzaSwgYSBtYXhpbXVzIHB1cnVzIG1hdXJpcyB2ZWwgZHVpLiBGdXNjZSBpbiB1cm5hIHZlbCBkaWFtIGxvYm9ydGlzIHRlbXBvciBub24gc2VkIG5pc2kuIEV0aWFtIG1ldHVzIG9yY2ksIGNvbnZhbGxpcyBlZ2V0IHJob25jdXMgdmVsLCBjdXJzdXMgYSBtYXVyaXMuIFByb2luIG1heGltdXMgdmVsaXQgc2VkIHNlbXBlciBjb21tb2RvLiBNYWVjZW5hcyBzaXQgYW1ldCBsYW9yZWV0IGxlby4gTnVsbGEgZmFjaWxpc2kuIEludGVnZXIgZWdldCBtYXVyaXMgbWkuIE51bGxhIGRpY3R1bSBlcmF0IGVnZXQgbWkgbWF4aW11cyB2ZW5lbmF0aXMuXFxuICAgICAgICAgICAgICAgIFwiKV0pXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9tKDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tdGFibGUnLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwid2lkdGhcIjogXCIxMDAlXCJcbiAgICB9XG4gIH0sIFtfYygnbS10YWJsZS1oZWFkJywgW19jKCdtLXRhYmxlLXJvdycsIFtfYygnbS10YWJsZS1oJywgW192bS5fdihcIlByb3BcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tdGFibGUtaCcsIFtfdm0uX3YoXCJFZmZlY3RcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tdGFibGUtaCcsIFtfdm0uX3YoXCJSZW1hcmtzXCIpXSldLCAxKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnbS10YWJsZS1ib2R5JywgX3ZtLl9sKChfdm0uZG9jKSwgZnVuY3Rpb24ocHJvcCkge1xuICAgIHJldHVybiBfYygnbS10YWJsZS1yb3cnLCBbX2MoJ20tdGFibGUtY2VsbCcsIFtfdm0uX3YoX3ZtLl9zKHByb3AubmFtZSkpXSksIF92bS5fdihcIiBcIiksIF9jKCdtLXRhYmxlLWNlbGwnLCBbX3ZtLl92KF92bS5fcyhwcm9wLmRlc2NyaXB0aW9uKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tdGFibGUtY2VsbCcsIFtfdm0uX3YoX3ZtLl9zKHByb3AucmVtYXJrKSldKV0sIDEpXG4gIH0pKV0sIDEpXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW19jKCdwcmUnLCB7XG4gICAgcHJlOiB0cnVlXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBcIiksIF9jKCdjb2RlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImNsYXNzXCI6IFwiaHRtbFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuPHRlbXBsYXRlPlxcbiAgICA8ZGl2PlxcbiAgICAgICAgPG0tdGFicyB2LW1vZGVsPVxcXCJjdXJyZW50VHViXFxcIj5cXG4gICAgICAgICAgICA8bS10YWIgOnRhYj1cXFwieyB0aXRsZTogJ0pvbicsIGlkOiAndGFiLTEnIH1cXFwiPlxcbiAgICAgICAgICAgICAgICA8cD5cXG4gICAgICAgICAgICAgICAgICAgIEhlbGxvIDFcXG4gICAgICAgICAgICAgICAgPC9wPlxcbiAgICAgICAgICAgIDwvbS10YWI+XFxuICAgICAgICAgICAgPG0tdGFiIDp0YWI9XFxcInsgdGl0bGU6ICdUb20nLCBpZDogJ3RhYi0yJyB9XFxcIj5cXG4gICAgICAgICAgICAgICAgPHA+XFxuICAgICAgICAgICAgICAgICAgICBIZWxsbyAyXFxuICAgICAgICAgICAgICAgIDwvcD5cXG4gICAgICAgICAgICA8L20tdGFiPlxcblxcbiAgICAgICAgPC9tLXRhYnM+XFxuICAgIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG4gICAgZXhwb3J0IGRlZmF1bHR7XFxuICAgICAgICBkYXRhKCl7XFxuICAgICAgICAgICAgcmV0dXJuIHtcXG4gICAgICAgICAgICAgICAgY3VycmVudFR1YjogJ3RhYi0xJyxcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG48L3NjcmlwdD5cXG4gICAgICAgICAgICBcIildKV0pXSlcbn0sZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygncHJlJywge1xuICAgIHByZTogdHJ1ZVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgXCIpLCBfYygnY29kZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJjbGFzc1wiOiBcImh0bWxcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbjx0ZW1wbGF0ZT5cXG4gICAgICAgIDxtLXRhYnMgdi1tb2RlbD1cXFwiY3VycmVudFR1YlxcXCIgOm5vLXJpcHBsZS1lZmZlY3Q9XFxcInRydWVcXFwiIDphbmltYXRpb249XFxcInRydWVcXFwiIDpjb250ZW50LXN0eWxlPVxcXCJ7aGVpZ2h0OiAnMzAwcHgnfVxcXCI+XFxuICAgICAgICAgICAgPG0tdGFiIHRhYj1cXFwiVGFiIDFcXFwiPlxcbiAgICAgICAgICAgICAgICA8cCBzdHlsZT1cXFwibWluLWhlaWdodDogMjUwcHg7IGJhY2tncm91bmQ6ICNmYWZhZmE7IHBhZGRpbmc6IDEwcHg7XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFNlZCBtaSBkb2xvciwgbW9sZXN0aWUgdXQgcG9ydHRpdG9yIHZpdGFlLCB2aXZlcnJhIGFjIGxvcmVtLjxicj5cXG4gICAgICAgICAgICAgICAgICAgIFBlbGxlbnRlc3F1ZSBldSBsb2JvcnRpcyBmZWxpcy4gTnVsbGEgaWQgcHJldGl1bSBhbnRlLiBBbGlxdWFtIHR1cnBpcyBlbmltLCBpbXBlcmRpZXQgZWZmaWNpdHVyIG1hdXJpcyBhLCA8YnI+XFxuICAgICAgICAgICAgICAgICAgICB0ZW1wb3IgbGFjaW5pYSBhbnRlLiBOYW0gdmVsIHZlbGl0IG1ldHVzLiBJbnRlZ2VyIG51bGxhIHR1cnBpcywgdHJpc3RpcXVlIG5vbiBkdWkgZWdldCwgbWFsZXN1YWRhIGJsYW5kaXQgbmlzaS48YnI+XFxuICAgICAgICAgICAgICAgICAgICBQaGFzZWxsdXMgaWQgdm9sdXRwYXQgb3JjaS4gQ3VyYWJpdHVyIG1hbGVzdWFkYSBhdWd1ZSBlZmZpY2l0dXIgbWFzc2EgY29uc2VxdWF0IGNvbnNlcXVhdC4gQ2xhc3MgYXB0ZW50IHRhY2l0aSBzb2Npb3NxdVxcbiAgICAgICAgICAgICAgICAgICAgYWQgbGl0b3JhIHRvcnF1ZW50IHBlciBjb251YmlhIG5vc3RyYSwgcGVyIGluY2VwdG9zIGhpbWVuYWVvcy5cXG5cXG4gICAgICAgICAgICAgICAgPC9wPlxcbiAgICAgICAgICAgIDwvbS10YWI+XFxuICAgICAgICAgICAgPG0tdGFiIHRhYj1cXFwiVGFiIDJcXFwiPlxcbiAgICAgICAgICAgICAgICA8cCBzdHlsZT1cXFwibWluLWhlaWdodDogMjUwcHg7IGJhY2tncm91bmQ6ICMzMzM7IGNvbG9yOiAjZmZmOyBwYWRkaW5nOiAxMHB4O1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICBRdWlzcXVlIGV0IGhlbmRyZXJpdCBvZGlvLCB2aXZlcnJhIGVmZmljaXR1ciByaXN1cy4gTWF1cmlzIHRlbXB1cyBtaSB1dCBmcmluZ2lsbGEgcGxhY2VyYXQuIFZlc3RpYnVsdW0gc2FnaXR0aXMgcGVsbGVudGVzcXVlIG51bmMgbmVjIGNvbmd1ZS4gTWFlY2VuYXMgZXUgZW5pbSBzdXNjaXBpdCBhdWd1ZSBtYXhpbXVzIHZpdmVycmEuIEZ1c2NlIHRpbmNpZHVudCwgbmliaCBub24gZWxlaWZlbmQgcGxhY2VyYXQsIGxlY3R1cyBudW5jIGxhY2luaWEgbmlzaSwgYSBtYXhpbXVzIHB1cnVzIG1hdXJpcyB2ZWwgZHVpLiBGdXNjZSBpbiB1cm5hIHZlbCBkaWFtIGxvYm9ydGlzIHRlbXBvciBub24gc2VkIG5pc2kuIEV0aWFtIG1ldHVzIG9yY2ksIGNvbnZhbGxpcyBlZ2V0IHJob25jdXMgdmVsLCBjdXJzdXMgYSBtYXVyaXMuIFByb2luIG1heGltdXMgdmVsaXQgc2VkIHNlbXBlciBjb21tb2RvLiBNYWVjZW5hcyBzaXQgYW1ldCBsYW9yZWV0IGxlby4gTnVsbGEgZmFjaWxpc2kuIEludGVnZXIgZWdldCBtYXVyaXMgbWkuIE51bGxhIGRpY3R1bSBlcmF0IGVnZXQgbWkgbWF4aW11cyB2ZW5lbmF0aXMuXFxuICAgICAgICAgICAgICAgIDwvcD5cXG4gICAgICAgICAgICA8L20tdGFiPlxcblxcbiAgICAgICAgICAgIDxtLXRhYiB0YWI9XFxcIlRhYiAzXFxcIj5cXG4gICAgICAgICAgICAgICAgPHAgc3R5bGU9XFxcIm1pbi1oZWlnaHQ6IDI1MHB4OyBiYWNrZ3JvdW5kOiAjM2Y1MWI1OyBjb2xvcjogI2ZmZjsgcGFkZGluZzogMTBweDtcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgUXVpc3F1ZSBldCBoZW5kcmVyaXQgb2Rpbywgdml2ZXJyYSBlZmZpY2l0dXIgcmlzdXMuIE1hdXJpcyB0ZW1wdXMgbWkgdXQgZnJpbmdpbGxhIHBsYWNlcmF0LiBWZXN0aWJ1bHVtIHNhZ2l0dGlzIHBlbGxlbnRlc3F1ZSBudW5jIG5lYyBjb25ndWUuIE1hZWNlbmFzIGV1IGVuaW0gc3VzY2lwaXQgYXVndWUgbWF4aW11cyB2aXZlcnJhLiBGdXNjZSB0aW5jaWR1bnQsIG5pYmggbm9uIGVsZWlmZW5kIHBsYWNlcmF0LCBsZWN0dXMgbnVuYyBsYWNpbmlhIG5pc2ksIGEgbWF4aW11cyBwdXJ1cyBtYXVyaXMgdmVsIGR1aS4gRnVzY2UgaW4gdXJuYSB2ZWwgZGlhbSBsb2JvcnRpcyB0ZW1wb3Igbm9uIHNlZCBuaXNpLiBFdGlhbSBtZXR1cyBvcmNpLCBjb252YWxsaXMgZWdldCByaG9uY3VzIHZlbCwgY3Vyc3VzIGEgbWF1cmlzLiBQcm9pbiBtYXhpbXVzIHZlbGl0IHNlZCBzZW1wZXIgY29tbW9kby4gTWFlY2VuYXMgc2l0IGFtZXQgbGFvcmVldCBsZW8uIE51bGxhIGZhY2lsaXNpLiBJbnRlZ2VyIGVnZXQgbWF1cmlzIG1pLiBOdWxsYSBkaWN0dW0gZXJhdCBlZ2V0IG1pIG1heGltdXMgdmVuZW5hdGlzLlxcbiAgICAgICAgICAgICAgICA8L3A+XFxuICAgICAgICAgICAgPC9tLXRhYj5cXG5cXG4gICAgICAgIDwvbS10YWJzPlxcbiAgICA8L2Rpdj5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuICBleHBvcnQgZGVmYXVsdHtcXG4gICAgICBkYXRhKCl7XFxuICAgICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgICBjdXJyZW50VHViOiAnVGFiIDInXFxuICAgICAgICAgIH1cXG4gICAgICB9XFxuICB9XFxuPC9zY3JpcHQ+XFxuXFxuICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIlxcbiAgICAgICAgXCIpXSlcbn1dfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0xMDEwZGRjMFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMTAxMGRkYzAhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL3RhYnMudnVlXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi90b29sdGlwcy52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTUwMWM4MDcyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Rvb2x0aXBzLnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCIvVXNlcnMvb3ovc3JjL21hdGVyaWFsLWNvbXBvbmVudHMvZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvdG9vbHRpcHMudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi01MDFjODA3MlwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi01MDFjODA3MlwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH1cbn0pKCl9XG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHRvb2x0aXBzLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL3Rvb2x0aXBzLnZ1ZSIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IHN0eWxlPVwibWFyZ2luOiAxMDBweFwiPlxuICAgICAgICA8bS10b29sdGlwIHRhcmdldD1cImFkZC1idXR0b25cIj5IZWxsbyBXb3JsZDwvbS10b29sdGlwPlxuICAgICAgICA8bS1idXR0b24gcmFpc2VkIHByaW1hcnkgcmlwcGxlIGlkPVwiYWRkLWJ1dHRvblwiPkFkZDwvbS1idXR0b24+XG5cbiAgICAgICAgPGhyPlxuXG4gICAgICAgIDxtLXRvb2x0aXAgdGFyZ2V0PVwiYWRkXCIgbGFyZ2U+VXBsb2FkIDxzdHJvbmc+ZmlsZS56aXA8L3N0cm9uZz48L20tdG9vbHRpcD5cbiAgICAgICAgPG0tYnV0dG9uIGljb249XCJhZGRcIiBpZD1cImFkZFwiIHJhaXNlZCBhY2NlbnQ+PC9tLWJ1dHRvbj5cblxuICAgICAgICA8aHI+XG5cbiAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgPG0tdG9vbHRpcCB0YXJnZXQ9XCJsZWZ0XCIgbGVmdD5MZWZ0IHRvb2x0aXBlPC9tLXRvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgPG0tYnV0dG9uIHJhaXNlZCBwcmltYXJ5IHJpcHBsZSBpZD1cImxlZnRcIj5MZWZ0PC9tLWJ1dHRvbj5cbiAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIDxtLXRvb2x0aXAgdGFyZ2V0PVwicmlnaHRcIiByaWdodD5SaWdodCB0b29sdGlwZTwvbS10b29sdGlwPlxuICAgICAgICAgICAgICAgICAgICA8bS1idXR0b24gcmFpc2VkIHByaW1hcnkgcmlwcGxlIGlkPVwicmlnaHRcIj5SaWdodDwvbS1idXR0b24+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICA8bS10b29sdGlwIHRhcmdldD1cInRvcFwiIHRvcD5Ub3AgdG9vbHRpcGU8L20tdG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgPG0tYnV0dG9uIHJhaXNlZCBwcmltYXJ5IHJpcHBsZSBpZD1cInRvcFwiPlRvcDwvbS1idXR0b24+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICA8bS10b29sdGlwIHRhcmdldD1cImJvdHRvbVwiIGJvdHRvbT5Cb3R0b20gdG9vbHRpcGU8L20tdG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgPG0tYnV0dG9uIHJhaXNlZCBwcmltYXJ5IHJpcHBsZSBpZD1cImJvdHRvbVwiPkJvdHRvbTwvbS1idXR0b24+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHByZSB2LXByZT5cbiAgICAgICAgICAgICAgICA8Y29kZSBjbGFzcz1cImh0bWxcIj5cbiAgICAgICAgICAgICAgICAgICAgJiN4M0M7bS10b29sdGlwIHRhcmdldD0mI3gyMjthZGQtYnV0dG9uJiN4MjI7JiN4M0U7SGVsbG8gV29ybGQmI3gzQzsvbS10b29sdGlwJiN4M0U7XG4gICAgICAgICAgICAgICAgICAgICYjeDNDO20tYnV0dG9uIHJhaXNlZCBwcmltYXJ5IHJpcHBsZSBpZD0mI3gyMjthZGQtYnV0dG9uJiN4MjI7JiN4M0U7QWRkJiN4M0M7L20tYnV0dG9uJiN4M0U7XG5cbiAgICAgICAgICAgICAgICAgICAgJiN4M0M7bS10b29sdGlwIHRhcmdldD0mI3gyMjthZGQmI3gyMjsgbGFyZ2UmI3gzRTtVcGxvYWQgJiN4M0M7c3Ryb25nJiN4M0U7ZmlsZS56aXAmI3gzQzsvc3Ryb25nJiN4M0U7JiN4M0M7L20tdG9vbHRpcCYjeDNFO1xuICAgICAgICAgICAgICAgICAgICAmI3gzQzttLWJ1dHRvbiBpY29uPSYjeDIyO2FkZCYjeDIyOyBpZD0mI3gyMjthZGQmI3gyMjsgcmFpc2VkIGFjY2VudCYjeDNFOyYjeDNDOy9tLWJ1dHRvbiYjeDNFO1xuXG4gICAgICAgICAgICAgICAgICAgICYjeDNDO20tdG9vbHRpcCB0YXJnZXQ9JiN4MjI7bGVmdCYjeDIyOyBsZWZ0JiN4M0U7TGVmdCB0b29sdGlwZSYjeDNDOy9tLXRvb2x0aXAmI3gzRTtcbiAgICAgICAgICAgICAgICAgICAgJiN4M0M7bS1idXR0b24gcmFpc2VkIHByaW1hcnkgcmlwcGxlIGlkPSYjeDIyO2xlZnQmI3gyMjsmI3gzRTtMZWZ0JiN4M0M7L20tYnV0dG9uJiN4M0U7XG4gICAgICAgICAgICAgICAgPC9jb2RlPlxuICAgICAgICAgICAgPC9wcmU+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxicj5cblxuICAgICAgICA8bS10YWJsZSBzdHlsZT1cIndpZHRoOiAxMDAlXCI+XG4gICAgICAgICAgICA8bS10YWJsZS1oZWFkPlxuICAgICAgICAgICAgICAgIDxtLXRhYmxlLXJvdz5cbiAgICAgICAgICAgICAgICAgICAgPG0tdGFibGUtaD5Qcm9wPC9tLXRhYmxlLWg+XG4gICAgICAgICAgICAgICAgICAgIDxtLXRhYmxlLWg+RWZmZWN0PC9tLXRhYmxlLWg+XG4gICAgICAgICAgICAgICAgICAgIDxtLXRhYmxlLWg+UmVtYXJrczwvbS10YWJsZS1oPlxuICAgICAgICAgICAgICAgIDwvbS10YWJsZS1yb3c+XG4gICAgICAgICAgICA8L20tdGFibGUtaGVhZD5cblxuICAgICAgICAgICAgPG0tdGFibGUtYm9keT5cbiAgICAgICAgICAgICAgICA8bS10YWJsZS1yb3cgdi1mb3I9XCJwcm9wIGluIGRvY1wiPlxuICAgICAgICAgICAgICAgICAgICA8bS10YWJsZS1jZWxsPnt7cHJvcC5uYW1lfX08L20tdGFibGUtY2VsbD5cbiAgICAgICAgICAgICAgICAgICAgPG0tdGFibGUtY2VsbD57e3Byb3AuZGVzY3JpcHRpb259fTwvbS10YWJsZS1jZWxsPlxuICAgICAgICAgICAgICAgICAgICA8bS10YWJsZS1jZWxsPnt7cHJvcC5yZW1hcmt9fTwvbS10YWJsZS1jZWxsPlxuICAgICAgICAgICAgICAgIDwvbS10YWJsZS1yb3c+XG4gICAgICAgICAgICA8L20tdGFibGUtYm9keT5cbiAgICAgICAgPC9tLXRhYmxlPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdHtcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgdGhpcy4kZWwucXVlcnlTZWxlY3RvckFsbCgnLmh0bWwnKS5mb3JFYWNoKGVsID0+IGhsanMuaGlnaGxpZ2h0QmxvY2soZWwpKVxuICAgICAgICB9LFxuXG4gICAgICAgIGRhdGEoKXtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZG9jOiBbXG4gICAgICAgICAgICAgICAgICAgIHtuYW1lOiAndGFyZ2V0JywgZGVzY3JpcHRpb246ICdpZCBvZiBhbm90aGVyIGl0ZW0uIFRoZSB0b29sdGlwIGlzIGJpbmRlZCB0byB0aGUgaXRlbSB3aXRoIHRoZSBzcGVjaWZpZWQgaWQnLCByZW1hcms6ICdSZXF1aXJlZCd9LFxuICAgICAgICAgICAgICAgICAgICB7bmFtZTogJ2xhcmdlJywgZGVzY3JpcHRpb246ICdNYWtlcyB0aGUgdG9vbHRpcCBiaWdnZXInLCByZW1hcms6ICcnfSxcbiAgICAgICAgICAgICAgICAgICAge25hbWU6ICdsZWZ0JywgZGVzY3JpcHRpb246ICcnLCByZW1hcms6ICcnfSxcbiAgICAgICAgICAgICAgICAgICAge25hbWU6ICdyaWdodCcsIGRlc2NyaXB0aW9uOiAnJywgcmVtYXJrOiAnJ30sXG4gICAgICAgICAgICAgICAgICAgIHtuYW1lOiAndG9wJywgZGVzY3JpcHRpb246ICcnLCByZW1hcms6ICcnfSxcbiAgICAgICAgICAgICAgICAgICAge25hbWU6ICdib3R0b20nLCBkZXNjcmlwdGlvbjogJycsIHJlbWFyazogJyd9LFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHRvb2x0aXBzLnZ1ZT81MzQ3MDc2YyIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcIm1hcmdpblwiOiBcIjEwMHB4XCJcbiAgICB9XG4gIH0sIFtfYygnbS10b29sdGlwJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRhcmdldFwiOiBcImFkZC1idXR0b25cIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkhlbGxvIFdvcmxkXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtLWJ1dHRvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJyYWlzZWRcIjogXCJcIixcbiAgICAgIFwicHJpbWFyeVwiOiBcIlwiLFxuICAgICAgXCJyaXBwbGVcIjogXCJcIixcbiAgICAgIFwiaWRcIjogXCJhZGQtYnV0dG9uXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJBZGRcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2hyJyksIF92bS5fdihcIiBcIiksIF9jKCdtLXRvb2x0aXAnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGFyZ2V0XCI6IFwiYWRkXCIsXG4gICAgICBcImxhcmdlXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJVcGxvYWQgXCIpLCBfYygnc3Ryb25nJywgW192bS5fdihcImZpbGUuemlwXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tYnV0dG9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImljb25cIjogXCJhZGRcIixcbiAgICAgIFwiaWRcIjogXCJhZGRcIixcbiAgICAgIFwicmFpc2VkXCI6IFwiXCIsXG4gICAgICBcImFjY2VudFwiOiBcIlwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2hyJyksIF92bS5fdihcIiBcIiksIF9jKCd1bCcsIFtfYygnbGknLCBbX2MoJ3AnLCBbX2MoJ20tdG9vbHRpcCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0YXJnZXRcIjogXCJsZWZ0XCIsXG4gICAgICBcImxlZnRcIjogXCJcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkxlZnQgdG9vbHRpcGVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tYnV0dG9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInJhaXNlZFwiOiBcIlwiLFxuICAgICAgXCJwcmltYXJ5XCI6IFwiXCIsXG4gICAgICBcInJpcHBsZVwiOiBcIlwiLFxuICAgICAgXCJpZFwiOiBcImxlZnRcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkxlZnRcIildKV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdsaScsIFtfYygncCcsIFtfYygnbS10b29sdGlwJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRhcmdldFwiOiBcInJpZ2h0XCIsXG4gICAgICBcInJpZ2h0XCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJSaWdodCB0b29sdGlwZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS1idXR0b24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwicmFpc2VkXCI6IFwiXCIsXG4gICAgICBcInByaW1hcnlcIjogXCJcIixcbiAgICAgIFwicmlwcGxlXCI6IFwiXCIsXG4gICAgICBcImlkXCI6IFwicmlnaHRcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlJpZ2h0XCIpXSldLCAxKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbGknLCBbX2MoJ3AnLCBbX2MoJ20tdG9vbHRpcCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0YXJnZXRcIjogXCJ0b3BcIixcbiAgICAgIFwidG9wXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJUb3AgdG9vbHRpcGVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tYnV0dG9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInJhaXNlZFwiOiBcIlwiLFxuICAgICAgXCJwcmltYXJ5XCI6IFwiXCIsXG4gICAgICBcInJpcHBsZVwiOiBcIlwiLFxuICAgICAgXCJpZFwiOiBcInRvcFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiVG9wXCIpXSldLCAxKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbGknLCBbX2MoJ3AnLCBbX2MoJ20tdG9vbHRpcCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0YXJnZXRcIjogXCJib3R0b21cIixcbiAgICAgIFwiYm90dG9tXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJCb3R0b20gdG9vbHRpcGVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tYnV0dG9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInJhaXNlZFwiOiBcIlwiLFxuICAgICAgXCJwcmltYXJ5XCI6IFwiXCIsXG4gICAgICBcInJpcHBsZVwiOiBcIlwiLFxuICAgICAgXCJpZFwiOiBcImJvdHRvbVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiQm90dG9tXCIpXSldLCAxKV0pXSksIF92bS5fdihcIiBcIiksIF92bS5fbSgwKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdtLXRhYmxlJywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcIndpZHRoXCI6IFwiMTAwJVwiXG4gICAgfVxuICB9LCBbX2MoJ20tdGFibGUtaGVhZCcsIFtfYygnbS10YWJsZS1yb3cnLCBbX2MoJ20tdGFibGUtaCcsIFtfdm0uX3YoXCJQcm9wXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtLXRhYmxlLWgnLCBbX3ZtLl92KFwiRWZmZWN0XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtLXRhYmxlLWgnLCBbX3ZtLl92KFwiUmVtYXJrc1wiKV0pXSwgMSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tdGFibGUtYm9keScsIF92bS5fbCgoX3ZtLmRvYyksIGZ1bmN0aW9uKHByb3ApIHtcbiAgICByZXR1cm4gX2MoJ20tdGFibGUtcm93JywgW19jKCdtLXRhYmxlLWNlbGwnLCBbX3ZtLl92KF92bS5fcyhwcm9wLm5hbWUpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS10YWJsZS1jZWxsJywgW192bS5fdihfdm0uX3MocHJvcC5kZXNjcmlwdGlvbikpXSksIF92bS5fdihcIiBcIiksIF9jKCdtLXRhYmxlLWNlbGwnLCBbX3ZtLl92KF92bS5fcyhwcm9wLnJlbWFyaykpXSldLCAxKVxuICB9KSldLCAxKV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygncHJlJywge1xuICAgIHByZTogdHJ1ZVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgXCIpLCBfYygnY29kZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJjbGFzc1wiOiBcImh0bWxcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICA8bS10b29sdGlwIHRhcmdldD1cXFwiYWRkLWJ1dHRvblxcXCI+SGVsbG8gV29ybGQ8L20tdG9vbHRpcD5cXG4gICAgICAgICAgICAgICAgPG0tYnV0dG9uIHJhaXNlZCBwcmltYXJ5IHJpcHBsZSBpZD1cXFwiYWRkLWJ1dHRvblxcXCI+QWRkPC9tLWJ1dHRvbj5cXG5cXG4gICAgICAgICAgICAgICAgPG0tdG9vbHRpcCB0YXJnZXQ9XFxcImFkZFxcXCIgbGFyZ2U+VXBsb2FkIDxzdHJvbmc+ZmlsZS56aXA8L3N0cm9uZz48L20tdG9vbHRpcD5cXG4gICAgICAgICAgICAgICAgPG0tYnV0dG9uIGljb249XFxcImFkZFxcXCIgaWQ9XFxcImFkZFxcXCIgcmFpc2VkIGFjY2VudD48L20tYnV0dG9uPlxcblxcbiAgICAgICAgICAgICAgICA8bS10b29sdGlwIHRhcmdldD1cXFwibGVmdFxcXCIgbGVmdD5MZWZ0IHRvb2x0aXBlPC9tLXRvb2x0aXA+XFxuICAgICAgICAgICAgICAgIDxtLWJ1dHRvbiByYWlzZWQgcHJpbWFyeSByaXBwbGUgaWQ9XFxcImxlZnRcXFwiPkxlZnQ8L20tYnV0dG9uPlxcbiAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCJcXG4gICAgICAgIFwiKV0pXSlcbn1dfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi01MDFjODA3MlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNTAxYzgwNzIhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL3Rvb2x0aXBzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vdGFibGUudnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0wNDIyMDJjOCF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi90YWJsZS52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiL1VzZXJzL296L3NyYy9tYXRlcmlhbC1jb21wb25lbnRzL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL3RhYmxlLnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMDQyMjAyYzhcIiwgX192dWVfb3B0aW9uc19fKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMDQyMjAyYzhcIiwgX192dWVfb3B0aW9uc19fKVxuICB9XG59KSgpfVxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSB0YWJsZS52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy90YWJsZS52dWUiLCI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPGgzPlRhYmxlPC9oMz5cblxuICAgICAgICA8cCBzdHlsZT1cImZsb2F0OiBsZWZ0O1wiPlxuICAgICAgICAgICAgPG0tdGFibGUgQHNlbGVjdD1cIm9uU2VsZWN0XCI+XG4gICAgICAgICAgICAgICAgPG0tdGFibGUtaGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPG0tdGFibGUtcm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgPG0tdGFibGUtaCBudW1lcmljPklkPC9tLXRhYmxlLWg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bS10YWJsZS1oPkVtYWlsPC9tLXRhYmxlLWg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bS10YWJsZS1oPk5hbWU8L20tdGFibGUtaD5cbiAgICAgICAgICAgICAgICAgICAgPC9tLXRhYmxlLXJvdz5cbiAgICAgICAgICAgICAgICA8L20tdGFibGUtaGVhZD5cblxuXG4gICAgICAgICAgICAgICAgPG0tdGFibGUtYm9keT5cbiAgICAgICAgICAgICAgICAgICAgPG0tdGFibGUtcm93IHYtZm9yPVwidXNlciBpbiB0ZXN0RGF0YVNldFwiIHNlbGVjdGlvbiA6bS1pdGVtPVwidXNlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG0tdGFibGUtY2VsbCBudW1lcmljPnt7dXNlci5pZH19PC9tLXRhYmxlLWNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bS10YWJsZS1jZWxsIDp0b29sdGlwPVwiJ0UtbWFpbDogJyt1c2VyLmVtYWlsXCIgPnt7dXNlci5lbWFpbH19PC9tLXRhYmxlLWNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bS10YWJsZS1jZWxsPnt7dXNlci5uYW1lfX08L20tdGFibGUtY2VsbD5cbiAgICAgICAgICAgICAgICAgICAgPC9tLXRhYmxlLXJvdz5cbiAgICAgICAgICAgICAgICA8L20tdGFibGUtYm9keT5cbiAgICAgICAgICAgIDwvbS10YWJsZT5cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxkaXYgc3R5bGU9XCJmbG9hdDogbGVmdDsgcGFkZGluZy1sZWZ0OiAyMHB4OyB3aWR0aDogMzAwcHg7XCI+XG4gICAgICAgICAgICA8ZGl2PjxiPlNlbGVjdGVkIEl0ZW1zOjwvYj48L2Rpdj5cbiAgICAgICAgICAgIDxwIHYtZm9yPVwicyBpbiBzZWxcIj57e3MuaWR9fSwge3tzLmVtYWlsfX0sIHt7cy5uYW1lfX08L3A+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgc3R5bGU9XCJmbG9hdDogbGVmdDsgcGFkZGluZy1sZWZ0OiAyMHB4O1wiPlxuICAgICAgICAgICAgPHByZSB2LXByZT5cbiAgICAgICAgICAgICAgICA8Y29kZSBjbGFzcz1cImh0bWxcIj5cbiAgICAgICAgICAgICAgICAgICAgJiN4M0M7bS10YWJsZSBAc2VsZWN0PSYjeDIyO29uU2VsZWN0JiN4MjI7JiN4M0U7XG4gICAgICAgICAgICAgICAgICAgICAgICAmI3gzQzttLXRhYmxlLWhlYWQmI3gzRTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmI3gzQzttLXRhYmxlLXJvdyYjeDNFO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmI3gzQzttLXRhYmxlLWggbnVtZXJpYyYjeDNFO0lkJiN4M0M7L20tdGFibGUtaCYjeDNFO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmI3gzQzttLXRhYmxlLWgmI3gzRTtFbWFpbCYjeDNDOy9tLXRhYmxlLWgmI3gzRTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiN4M0M7bS10YWJsZS1oJiN4M0U7TmFtZSYjeDNDOy9tLXRhYmxlLWgmI3gzRTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmI3gzQzsvbS10YWJsZS1yb3cmI3gzRTtcbiAgICAgICAgICAgICAgICAgICAgICAgICYjeDNDOy9tLXRhYmxlLWhlYWQmI3gzRTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAmI3gzQzttLXRhYmxlLWJvZHkmI3gzRTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmI3gzQzttLXRhYmxlLXJvdyB2LWZvcj0mI3gyMjt1c2VyIGluIHRlc3REYXRhU2V0JiN4MjI7IHNlbGVjdGlvbiA6bS1pdGVtPSYjeDIyO3VzZXImI3gyMjsmI3gzRTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiN4M0M7bS10YWJsZS1jZWxsIG51bWVyaWMmI3gzRTt7e3VzZXIuaWR9fSYjeDNDOy9tLXRhYmxlLWNlbGwmI3gzRTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiN4M0M7bS10YWJsZS1jZWxsIDp0b29sdGlwPSYjeDIyOyYjeDI3O0UtbWFpbDogJiN4Mjc7K3VzZXIuZW1haWwmI3gyMjsgJiN4M0U7e3t1c2VyLmVtYWlsfX0mI3gzQzsvbS10YWJsZS1jZWxsJiN4M0U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYjeDNDO20tdGFibGUtY2VsbCYjeDNFO3t7dXNlci5uYW1lfX0mI3gzQzsvbS10YWJsZS1jZWxsJiN4M0U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJiN4M0M7L20tdGFibGUtcm93JiN4M0U7XG4gICAgICAgICAgICAgICAgICAgICAgICAmI3gzQzsvbS10YWJsZS1ib2R5JiN4M0U7XG4gICAgICAgICAgICAgICAgICAgICYjeDNDOy9tLXRhYmxlJiN4M0U7XG4gICAgICAgICAgICAgICAgPC9jb2RlPlxuICAgICAgICAgICAgPC9wcmU+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgc3R5bGU9XCJjbGVhcjogYm90aDtcIj48L2Rpdj5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGg0PlN0YXRpYyBUYWJsZTwvaDQ+XG5cbiAgICAgICAgICAgIDxtLXRhYmxlPlxuICAgICAgICAgICAgICAgIDxtLXRhYmxlLWhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDxtLXRhYmxlLXJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtLXRhYmxlLWggbnVtZXJpYz5JZDwvbS10YWJsZS1oPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG0tdGFibGUtaD5FbWFpbDwvbS10YWJsZS1oPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG0tdGFibGUtaD5OYW1lPC9tLXRhYmxlLWg+XG4gICAgICAgICAgICAgICAgICAgIDwvbS10YWJsZS1yb3c+XG4gICAgICAgICAgICAgICAgPC9tLXRhYmxlLWhlYWQ+XG5cblxuICAgICAgICAgICAgICAgIDxtLXRhYmxlLWJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDxtLXRhYmxlLXJvdyB2LWZvcj1cInVzZXIgaW4gdGVzdERhdGFTZXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtLXRhYmxlLWNlbGwgbnVtZXJpYz57e3VzZXIuaWR9fTwvbS10YWJsZS1jZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG0tdGFibGUtY2VsbD57e3VzZXIuZW1haWx9fTwvbS10YWJsZS1jZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG0tdGFibGUtY2VsbD57e3VzZXIubmFtZX19PC9tLXRhYmxlLWNlbGw+XG4gICAgICAgICAgICAgICAgICAgIDwvbS10YWJsZS1yb3c+XG4gICAgICAgICAgICAgICAgPC9tLXRhYmxlLWJvZHk+XG4gICAgICAgICAgICA8L20tdGFibGU+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxicj5cblxuICAgICAgICA8bS10YWJsZSBzdHlsZT1cIndpZHRoOiAxMDAlXCI+XG4gICAgICAgICAgICA8bS10YWJsZS1oZWFkPlxuICAgICAgICAgICAgICAgIDxtLXRhYmxlLXJvdz5cbiAgICAgICAgICAgICAgICAgICAgPG0tdGFibGUtaD5Qcm9wPC9tLXRhYmxlLWg+XG4gICAgICAgICAgICAgICAgICAgIDxtLXRhYmxlLWg+RWZmZWN0PC9tLXRhYmxlLWg+XG4gICAgICAgICAgICAgICAgICAgIDxtLXRhYmxlLWg+UmVtYXJrczwvbS10YWJsZS1oPlxuICAgICAgICAgICAgICAgIDwvbS10YWJsZS1yb3c+XG4gICAgICAgICAgICA8L20tdGFibGUtaGVhZD5cblxuICAgICAgICAgICAgPG0tdGFibGUtYm9keT5cbiAgICAgICAgICAgICAgICA8bS10YWJsZS1yb3cgdi1mb3I9XCJwcm9wIGluIGRvY1wiPlxuICAgICAgICAgICAgICAgICAgICA8bS10YWJsZS1jZWxsPnt7cHJvcC5uYW1lfX08L20tdGFibGUtY2VsbD5cbiAgICAgICAgICAgICAgICAgICAgPG0tdGFibGUtY2VsbD57e3Byb3AuZGVzY3JpcHRpb259fTwvbS10YWJsZS1jZWxsPlxuICAgICAgICAgICAgICAgICAgICA8bS10YWJsZS1jZWxsPnt7cHJvcC5yZW1hcmt9fTwvbS10YWJsZS1jZWxsPlxuICAgICAgICAgICAgICAgIDwvbS10YWJsZS1yb3c+XG4gICAgICAgICAgICA8L20tdGFibGUtYm9keT5cbiAgICAgICAgPC9tLXRhYmxlPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBjcmVhdGVkKCkge1xuICAgICAgICAgICAgdGhpcy4kaHR0cC5nZXQoJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2VycycpXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudGVzdERhdGFTZXQgPSByZXMuZGF0YTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICB0aGlzLiRlbC5xdWVyeVNlbGVjdG9yQWxsKCcuaHRtbCcpLmZvckVhY2goZWwgPT4gaGxqcy5oaWdobGlnaHRCbG9jayhlbCkpXG4gICAgICAgIH0sXG5cbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgb25TZWxlY3Q6IGZ1bmN0aW9uKGl0ZW1zKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWwgPSBpdGVtcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG5cbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc2VsOiB7fSxcbiAgICAgICAgICAgICAgICB0ZXN0RGF0YVNldDogW10sXG4gICAgICAgICAgICAgICAgZG9jOiBbXG4gICAgICAgICAgICAgICAgICAgIHtuYW1lOiAnc2VsZWN0JywgZGVzY3JpcHRpb246ICdUaGlzIGlzIGNhbGxiYWNrIHByb3AgZm9yIGdldCBzZWxlY3RlZCByb3dzLCBJdCBzaG91bGQgdXNlIHdpdGggbS10YWJsZSBjb21wb25lbnQnLCByZW1hcms6ICcnfSxcbiAgICAgICAgICAgICAgICAgICAge25hbWU6ICdzZWxlY3Rpb24nLCBkZXNjcmlwdGlvbjogJ0l0IHNob3VsZCB1c2Ugd2l0aCBtLXRhYmxlLXJvdyBjb21wb25lbnQnLCByZW1hcms6ICcnfSxcbiAgICAgICAgICAgICAgICAgICAge25hbWU6ICdtLWl0ZW0nLCBkZXNjcmlwdGlvbjogJ0ZvciB0YWJsZSByb3cgdmFsdWUgcGFzc2luZy4gSXQgc2hvdWxkIHVzZSB3aXRoIG0tdGFibGUtcm93IGNvbXBvbmVudCcsIHJlbWFyazogJyd9LFxuICAgICAgICAgICAgICAgICAgICB7bmFtZTogJ251bWVyaWMnLCBkZXNjcmlwdGlvbjogJ0RlZmluZSBkYXRhIHR5cGUgb2YgY2VsbCwgSXQgc2hvdWxkIHVzZSB3aXRoIG0tdGFibGUtY2VsbCBjb21wb25lbnQnLCByZW1hcms6ICcnfSxcbiAgICAgICAgICAgICAgICAgICAge25hbWU6ICd0b29sdGlwJywgZGVzY3JpcHRpb246ICdBZGQgdG9vbHRpcCBmb3IgdGFibGUgY2VsbCwgSXQgc2hvdWxkIHVzZSB3aXRoIG0tdGFibGUtY2VsbCBjb21wb25lbnQnLCByZW1hcms6ICcnfSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB0YWJsZS52dWU/NTRiMjc4ODgiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygnaDMnLCBbX3ZtLl92KFwiVGFibGVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwiZmxvYXRcIjogXCJsZWZ0XCJcbiAgICB9XG4gIH0sIFtfYygnbS10YWJsZScsIHtcbiAgICBvbjoge1xuICAgICAgXCJzZWxlY3RcIjogX3ZtLm9uU2VsZWN0XG4gICAgfVxuICB9LCBbX2MoJ20tdGFibGUtaGVhZCcsIFtfYygnbS10YWJsZS1yb3cnLCBbX2MoJ20tdGFibGUtaCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJudW1lcmljXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJJZFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS10YWJsZS1oJywgW192bS5fdihcIkVtYWlsXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtLXRhYmxlLWgnLCBbX3ZtLl92KFwiTmFtZVwiKV0pXSwgMSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tdGFibGUtYm9keScsIF92bS5fbCgoX3ZtLnRlc3REYXRhU2V0KSwgZnVuY3Rpb24odXNlcikge1xuICAgIHJldHVybiBfYygnbS10YWJsZS1yb3cnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcInNlbGVjdGlvblwiOiBcIlwiLFxuICAgICAgICBcIm0taXRlbVwiOiB1c2VyXG4gICAgICB9XG4gICAgfSwgW19jKCdtLXRhYmxlLWNlbGwnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcIm51bWVyaWNcIjogXCJcIlxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoX3ZtLl9zKHVzZXIuaWQpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS10YWJsZS1jZWxsJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJ0b29sdGlwXCI6ICdFLW1haWw6ICcgKyB1c2VyLmVtYWlsXG4gICAgICB9XG4gICAgfSwgW192bS5fdihfdm0uX3ModXNlci5lbWFpbCkpXSksIF92bS5fdihcIiBcIiksIF9jKCdtLXRhYmxlLWNlbGwnLCBbX3ZtLl92KF92bS5fcyh1c2VyLm5hbWUpKV0pXSwgMSlcbiAgfSkpXSwgMSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJmbG9hdFwiOiBcImxlZnRcIixcbiAgICAgIFwicGFkZGluZy1sZWZ0XCI6IFwiMjBweFwiLFxuICAgICAgXCJ3aWR0aFwiOiBcIjMwMHB4XCJcbiAgICB9XG4gIH0sIFtfdm0uX20oMCksIF92bS5fdihcIiBcIiksIF92bS5fbCgoX3ZtLnNlbCksIGZ1bmN0aW9uKHMpIHtcbiAgICByZXR1cm4gX2MoJ3AnLCBbX3ZtLl92KF92bS5fcyhzLmlkKSArIFwiLCBcIiArIF92bS5fcyhzLmVtYWlsKSArIFwiLCBcIiArIF92bS5fcyhzLm5hbWUpKV0pXG4gIH0pXSwgMiksIF92bS5fdihcIiBcIiksIF92bS5fbSgxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJjbGVhclwiOiBcImJvdGhcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCBbX2MoJ2g0JywgW192bS5fdihcIlN0YXRpYyBUYWJsZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS10YWJsZScsIFtfYygnbS10YWJsZS1oZWFkJywgW19jKCdtLXRhYmxlLXJvdycsIFtfYygnbS10YWJsZS1oJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm51bWVyaWNcIjogXCJcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIklkXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtLXRhYmxlLWgnLCBbX3ZtLl92KFwiRW1haWxcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tdGFibGUtaCcsIFtfdm0uX3YoXCJOYW1lXCIpXSldLCAxKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnbS10YWJsZS1ib2R5JywgX3ZtLl9sKChfdm0udGVzdERhdGFTZXQpLCBmdW5jdGlvbih1c2VyKSB7XG4gICAgcmV0dXJuIF9jKCdtLXRhYmxlLXJvdycsIFtfYygnbS10YWJsZS1jZWxsJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJudW1lcmljXCI6IFwiXCJcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KF92bS5fcyh1c2VyLmlkKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tdGFibGUtY2VsbCcsIFtfdm0uX3YoX3ZtLl9zKHVzZXIuZW1haWwpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS10YWJsZS1jZWxsJywgW192bS5fdihfdm0uX3ModXNlci5uYW1lKSldKV0sIDEpXG4gIH0pKV0sIDEpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnbS10YWJsZScsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJ3aWR0aFwiOiBcIjEwMCVcIlxuICAgIH1cbiAgfSwgW19jKCdtLXRhYmxlLWhlYWQnLCBbX2MoJ20tdGFibGUtcm93JywgW19jKCdtLXRhYmxlLWgnLCBbX3ZtLl92KFwiUHJvcFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS10YWJsZS1oJywgW192bS5fdihcIkVmZmVjdFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS10YWJsZS1oJywgW192bS5fdihcIlJlbWFya3NcIildKV0sIDEpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdtLXRhYmxlLWJvZHknLCBfdm0uX2woKF92bS5kb2MpLCBmdW5jdGlvbihwcm9wKSB7XG4gICAgcmV0dXJuIF9jKCdtLXRhYmxlLXJvdycsIFtfYygnbS10YWJsZS1jZWxsJywgW192bS5fdihfdm0uX3MocHJvcC5uYW1lKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tdGFibGUtY2VsbCcsIFtfdm0uX3YoX3ZtLl9zKHByb3AuZGVzY3JpcHRpb24pKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS10YWJsZS1jZWxsJywgW192bS5fdihfdm0uX3MocHJvcC5yZW1hcmspKV0pXSwgMSlcbiAgfSkpXSwgMSldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ2InLCBbX3ZtLl92KFwiU2VsZWN0ZWQgSXRlbXM6XCIpXSldKVxufSxmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwiZmxvYXRcIjogXCJsZWZ0XCIsXG4gICAgICBcInBhZGRpbmctbGVmdFwiOiBcIjIwcHhcIlxuICAgIH1cbiAgfSwgW19jKCdwcmUnLCB7XG4gICAgcHJlOiB0cnVlXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBcIiksIF9jKCdjb2RlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImNsYXNzXCI6IFwiaHRtbFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIDxtLXRhYmxlIEBzZWxlY3Q9XFxcIm9uU2VsZWN0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxtLXRhYmxlLWhlYWQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPG0tdGFibGUtcm93PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bS10YWJsZS1oIG51bWVyaWM+SWQ8L20tdGFibGUtaD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG0tdGFibGUtaD5FbWFpbDwvbS10YWJsZS1oPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bS10YWJsZS1oPk5hbWU8L20tdGFibGUtaD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L20tdGFibGUtcm93PlxcbiAgICAgICAgICAgICAgICAgICAgPC9tLXRhYmxlLWhlYWQ+XFxuXFxuXFxuICAgICAgICAgICAgICAgICAgICA8bS10YWJsZS1ib2R5PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxtLXRhYmxlLXJvdyB2LWZvcj1cXFwidXNlciBpbiB0ZXN0RGF0YVNldFxcXCIgc2VsZWN0aW9uIDptLWl0ZW09XFxcInVzZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bS10YWJsZS1jZWxsIG51bWVyaWM+e3t1c2VyLmlkfX08L20tdGFibGUtY2VsbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG0tdGFibGUtY2VsbCA6dG9vbHRpcD1cXFwiJ0UtbWFpbDogJyt1c2VyLmVtYWlsXFxcIiA+e3t1c2VyLmVtYWlsfX08L20tdGFibGUtY2VsbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG0tdGFibGUtY2VsbD57e3VzZXIubmFtZX19PC9tLXRhYmxlLWNlbGw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9tLXRhYmxlLXJvdz5cXG4gICAgICAgICAgICAgICAgICAgIDwvbS10YWJsZS1ib2R5PlxcbiAgICAgICAgICAgICAgICA8L20tdGFibGU+XFxuICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIlxcbiAgICAgICAgXCIpXSldKVxufV19XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTA0MjIwMmM4XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0wNDIyMDJjOCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvdGFibGUudnVlXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9kaWFsb2dzLnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNmZkZTAyZjkhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vZGlhbG9ncy52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiL1VzZXJzL296L3NyYy9tYXRlcmlhbC1jb21wb25lbnRzL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL2RpYWxvZ3MudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi02ZmRlMDJmOVwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi02ZmRlMDJmOVwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH1cbn0pKCl9XG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGRpYWxvZ3MudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvZGlhbG9ncy52dWUiLCI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPGgzPkRpYWxvZ3M8L2gzPlxuXG4gICAgICAgIDxtLWRpYWxvZyByZWY9XCJtc2dcIiB0aXRsZT1cIk1ETCBEaWFsb2dcIiA6Y2xvc2UtY2I9XCJ0ZXN0XCI+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBUaGlzIGlzIGFuIGV4YW1wbGUgb2YgdGhlIE1hdGVyaWFsIERlc2lnbiBMaXRlIGRpYWxvZyBjb21wb25lbnQuIFBsZWFzZSB1c2UgcmVzcG9uc2libHkuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgIDwvbS1kaWFsb2c+XG5cbiAgICAgICAgPCEtLSAvLyAtLT5cblxuICAgICAgICA8bS1kaWFsb2cgcmVmPVwibXNnRnVsbHdpZHRoXCIgdGl0bGU9XCJNREwgRGlhbG9nXCIgZnVsbC13aWR0aD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIFRoaXMgaXMgYW4gZXhhbXBsZSBvZiB0aGUgTWF0ZXJpYWwgRGVzaWduIExpdGUgZGlhbG9nIGNvbXBvbmVudC4gUGxlYXNlIHVzZSByZXNwb25zaWJseS5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9tLWRpYWxvZz5cblxuICAgICAgICA8IS0tIC8vIC0tPlxuXG4gICAgICAgIDxtLWJ1dHRvbiBAY2xpY2submF0aXZlPVwib3BlblwiIHJhaXNlZD5PcGVuIERpYWxvZzwvbS1idXR0b24+XG5cbiAgICAgICAgPG0tYnV0dG9uIEBjbGljay5uYXRpdmU9XCJvcGVuRnVsbFwiIHJhaXNlZD5PcGVuIERpYWxvZyBGdWxsIFdpZHRoPC9tLWJ1dHRvbj5cblxuICAgICAgICA8bS1idXR0b24gQGNsaWNrLm5hdGl2ZT1cIm9wZW5BY3Rpb25cIiByYWlzZWQ+Q3VzdG9tIEFjdGlvbnM8L20tYnV0dG9uPlxuXG4gICAgICAgIDwhLS0gLy8gLS0+XG5cbiAgICAgICAgPG0tZGlhbG9nIHJlZj1cIm1zZzJcIiBmdWxsLXdpZHRoIHRpdGxlPVwiVGVzdCBUaXRsZVwiPlxuICAgICAgICAgICAgPHAgc3R5bGU9XCJwYWRkaW5nOiAzMHB4XCI+SW5jcmVtZW50OiB7e2luY3JlbWVudH19PC9wPlxuXG4gICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cImFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICA8bS1idXR0b24gcmFpc2VkIHByaW1hcnkgcmlwcGxlIEBjbGljay5uYXRpdmU9XCJpbmNyZW1lbnQrK1wiPkFjdGlvbjwvbS1idXR0b24+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L20tZGlhbG9nPlxuXG4gICAgICAgIDwhLS0gLy8gLS0+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxwcmUgdi1wcmU+XG4gICAgICAgICAgICAgICAgPGNvZGUgY2xhc3M9XCJodG1sXCI+XG4mI3gzQzttLWRpYWxvZyByZWY9JiN4MjI7bXNnJiN4MjI7IHRpdGxlPSYjeDIyO01ETCBEaWFsb2cmI3gyMjsmI3gzRTtcbiAgICAmI3gzQztwJiN4M0U7XG4gICAgICAgIFRoaXMgaXMgYW4gZXhhbXBsZSBvZiB0aGUgTWF0ZXJpYWwgRGVzaWduIExpdGUgZGlhbG9nIGNvbXBvbmVudC4gUGxlYXNlIHVzZSByZXNwb25zaWJseS5cbiAgICAmI3gzQzsvcCYjeDNFO1xuJiN4M0M7L20tZGlhbG9nJiN4M0U7XG5cbiYjeDNDO20tZGlhbG9nIHJlZj0mI3gyMjttc2dGdWxsd2lkdGgmI3gyMjsgdGl0bGU9JiN4MjI7TURMIERpYWxvZyYjeDIyOyBmdWxsLXdpZHRoJiN4M0U7XG4gICAgJiN4M0M7cCYjeDNFO1xuICAgICAgICBUaGlzIGlzIGFuIGV4YW1wbGUgb2YgdGhlIE1hdGVyaWFsIERlc2lnbiBMaXRlIGRpYWxvZyBjb21wb25lbnQuIFBsZWFzZSB1c2UgcmVzcG9uc2libHkuXG4gICAgJiN4M0M7L3AmI3gzRTtcbiYjeDNDOy9tLWRpYWxvZyYjeDNFO1xuXG4mI3gzQzttLWRpYWxvZyByZWY9JiN4MjI7bXNnMiYjeDIyOyBmdWxsLXdpZHRoIHRpdGxlPSYjeDIyO1Rlc3QgVGl0bGUmI3gyMjsmI3gzRTtcbiAgICAmI3gzQztwIHN0eWxlPSYjeDIyO3BhZGRpbmc6IDMwcHgmI3gyMjsmI3gzRTtJbmNyZW1lbnQ6IHt7aW5jcmVtZW50fX0mI3gzQzsvcCYjeDNFO1xuXG4gICAgJiN4M0M7dGVtcGxhdGUgc2xvdD0mI3gyMjthY3Rpb25zJiN4MjI7JiN4M0U7XG4gICAgICAgICYjeDNDO20tYnV0dG9uIHJhaXNlZCBwcmltYXJ5IHJpcHBsZSBAY2xpY2submF0aXZlPSYjeDIyO2luY3JlbWVudCsrJiN4MjI7JiN4M0U7QWN0aW9uJiN4M0M7L20tYnV0dG9uJiN4M0U7XG4gICAgJiN4M0M7L3RlbXBsYXRlJiN4M0U7XG4mI3gzQzsvbS1kaWFsb2cmI3gzRTtcblxuJiN4M0M7bS1idXR0b24gQGNsaWNrLm5hdGl2ZT0mI3gyMjtvcGVuJiN4MjI7JiN4M0U7T3BlbiBEaWFsb2cmI3gzQzsvbS1idXR0b24mI3gzRTtcbiAgICAgICAgICAgICAgICA8L2NvZGU+XG4gICAgICAgICAgICA8L3ByZT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPG0tdGFibGUgc3R5bGU9XCJ3aWR0aDogMTAwJVwiPlxuICAgICAgICAgICAgPG0tdGFibGUtaGVhZD5cbiAgICAgICAgICAgICAgICA8bS10YWJsZS1yb3c+XG4gICAgICAgICAgICAgICAgICAgIDxtLXRhYmxlLWg+UHJvcDwvbS10YWJsZS1oPlxuICAgICAgICAgICAgICAgICAgICA8bS10YWJsZS1oPkVmZmVjdDwvbS10YWJsZS1oPlxuICAgICAgICAgICAgICAgICAgICA8bS10YWJsZS1oPlJlbWFya3M8L20tdGFibGUtaD5cbiAgICAgICAgICAgICAgICA8L20tdGFibGUtcm93PlxuICAgICAgICAgICAgPC9tLXRhYmxlLWhlYWQ+XG5cbiAgICAgICAgICAgIDxtLXRhYmxlLWJvZHk+XG4gICAgICAgICAgICAgICAgPG0tdGFibGUtcm93IHYtZm9yPVwicHJvcCBpbiBkb2NcIj5cbiAgICAgICAgICAgICAgICAgICAgPG0tdGFibGUtY2VsbD57e3Byb3AubmFtZX19PC9tLXRhYmxlLWNlbGw+XG4gICAgICAgICAgICAgICAgICAgIDxtLXRhYmxlLWNlbGw+e3twcm9wLmRlc2NyaXB0aW9ufX08L20tdGFibGUtY2VsbD5cbiAgICAgICAgICAgICAgICAgICAgPG0tdGFibGUtY2VsbD57e3Byb3AucmVtYXJrfX08L20tdGFibGUtY2VsbD5cbiAgICAgICAgICAgICAgICA8L20tdGFibGUtcm93PlxuICAgICAgICAgICAgPC9tLXRhYmxlLWJvZHk+XG4gICAgICAgIDwvbS10YWJsZT5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHR7XG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIG9wZW4oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5tc2cub3BlbigpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgb3BlbkZ1bGwoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5tc2dGdWxsd2lkdGgub3BlbigpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgb3BlbkFjdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLm1zZzIub3BlbigpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgdGVzdCgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygxMjMyMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICBobGpzLmhpZ2hsaWdodEJsb2NrKHRoaXMuJGVsLnF1ZXJ5U2VsZWN0b3IoJy5odG1sJykpO1xuICAgICAgICB9LFxuICAgICAgICBkYXRhKCl7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGluY3JlbWVudDogMCxcbiAgICAgICAgICAgICAgICBkb2M6IFtcbiAgICAgICAgICAgICAgICAgICAge25hbWU6ICd0aXRsZScsIGRlc2NyaXB0aW9uOiAnVGl0bGUgb2YgdGhlIGRpYWxvZycsIHJlbWFyazogJyd9LFxuICAgICAgICAgICAgICAgICAgICB7bmFtZTogJ2Z1bGwtd2lkdGgnLCBkZXNjcmlwdGlvbjogJ01ha2UgYnV0dG9ucyBmdWxsIHdpZHRoIGJ5IGFwcGx5aW5nIHRoZSBtZGwtZGlhbG9nX19hY3Rpb25zLS1mdWxsLXdpZHRoIG1vZGlmaWVyJywgcmVtYXJrOiAnJ30sXG4gICAgICAgICAgICAgICAgICAgIHtuYW1lOiAnbm8tZm9jdXMtdHJhcCcsIGRlc2NyaXB0aW9uOiAnQ3JlYXRlIGN1c3RvbSBmb2N1cyBmb3IgYSB0dWIgbmF2aWdhdGlvbicsIHJlbWFyazogJ09wdGlvbmFsJ30sXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZGlhbG9ncy52dWU/ZGZlMWYwMmEiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygnaDMnLCBbX3ZtLl92KFwiRGlhbG9nc1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS1kaWFsb2cnLCB7XG4gICAgcmVmOiBcIm1zZ1wiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInRpdGxlXCI6IFwiTURMIERpYWxvZ1wiLFxuICAgICAgXCJjbG9zZS1jYlwiOiBfdm0udGVzdFxuICAgIH1cbiAgfSwgW19jKCdwJywgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICBUaGlzIGlzIGFuIGV4YW1wbGUgb2YgdGhlIE1hdGVyaWFsIERlc2lnbiBMaXRlIGRpYWxvZyBjb21wb25lbnQuIFBsZWFzZSB1c2UgcmVzcG9uc2libHkuXFxuICAgICAgICAgICAgXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tZGlhbG9nJywge1xuICAgIHJlZjogXCJtc2dGdWxsd2lkdGhcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0aXRsZVwiOiBcIk1ETCBEaWFsb2dcIixcbiAgICAgIFwiZnVsbC13aWR0aFwiOiBcIlwiXG4gICAgfVxuICB9LCBbX2MoJ3AnLCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIFRoaXMgaXMgYW4gZXhhbXBsZSBvZiB0aGUgTWF0ZXJpYWwgRGVzaWduIExpdGUgZGlhbG9nIGNvbXBvbmVudC4gUGxlYXNlIHVzZSByZXNwb25zaWJseS5cXG4gICAgICAgICAgICBcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS1idXR0b24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwicmFpc2VkXCI6IFwiXCJcbiAgICB9LFxuICAgIG5hdGl2ZU9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0ub3BlbigkZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiT3BlbiBEaWFsb2dcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tYnV0dG9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInJhaXNlZFwiOiBcIlwiXG4gICAgfSxcbiAgICBuYXRpdmVPbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLm9wZW5GdWxsKCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJPcGVuIERpYWxvZyBGdWxsIFdpZHRoXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtLWJ1dHRvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJyYWlzZWRcIjogXCJcIlxuICAgIH0sXG4gICAgbmF0aXZlT246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5vcGVuQWN0aW9uKCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJDdXN0b20gQWN0aW9uc1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS1kaWFsb2cnLCB7XG4gICAgcmVmOiBcIm1zZzJcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJmdWxsLXdpZHRoXCI6IFwiXCIsXG4gICAgICBcInRpdGxlXCI6IFwiVGVzdCBUaXRsZVwiXG4gICAgfVxuICB9LCBbX2MoJ3AnLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwicGFkZGluZ1wiOiBcIjMwcHhcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkluY3JlbWVudDogXCIgKyBfdm0uX3MoX3ZtLmluY3JlbWVudCkpXSksIF92bS5fdihcIiBcIiksIF9jKCd0ZW1wbGF0ZScsIHtcbiAgICBzbG90OiBcImFjdGlvbnNcIlxuICB9LCBbX2MoJ20tYnV0dG9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInJhaXNlZFwiOiBcIlwiLFxuICAgICAgXCJwcmltYXJ5XCI6IFwiXCIsXG4gICAgICBcInJpcHBsZVwiOiBcIlwiXG4gICAgfSxcbiAgICBuYXRpdmVPbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmluY3JlbWVudCsrXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiQWN0aW9uXCIpXSldLCAxKV0sIDIpLCBfdm0uX3YoXCIgXCIpLCBfdm0uX20oMCksIF92bS5fdihcIiBcIiksIF9jKCdtLXRhYmxlJywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcIndpZHRoXCI6IFwiMTAwJVwiXG4gICAgfVxuICB9LCBbX2MoJ20tdGFibGUtaGVhZCcsIFtfYygnbS10YWJsZS1yb3cnLCBbX2MoJ20tdGFibGUtaCcsIFtfdm0uX3YoXCJQcm9wXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtLXRhYmxlLWgnLCBbX3ZtLl92KFwiRWZmZWN0XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtLXRhYmxlLWgnLCBbX3ZtLl92KFwiUmVtYXJrc1wiKV0pXSwgMSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tdGFibGUtYm9keScsIF92bS5fbCgoX3ZtLmRvYyksIGZ1bmN0aW9uKHByb3ApIHtcbiAgICByZXR1cm4gX2MoJ20tdGFibGUtcm93JywgW19jKCdtLXRhYmxlLWNlbGwnLCBbX3ZtLl92KF92bS5fcyhwcm9wLm5hbWUpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS10YWJsZS1jZWxsJywgW192bS5fdihfdm0uX3MocHJvcC5kZXNjcmlwdGlvbikpXSksIF92bS5fdihcIiBcIiksIF9jKCdtLXRhYmxlLWNlbGwnLCBbX3ZtLl92KF92bS5fcyhwcm9wLnJlbWFyaykpXSldLCAxKVxuICB9KSldLCAxKV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygncHJlJywge1xuICAgIHByZTogdHJ1ZVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIFwiKSwgX2MoJ2NvZGUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiY2xhc3NcIjogXCJodG1sXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG48bS1kaWFsb2cgcmVmPVxcXCJtc2dcXFwiIHRpdGxlPVxcXCJNREwgRGlhbG9nXFxcIj5cXG4gICAgPHA+XFxuICAgICAgICBUaGlzIGlzIGFuIGV4YW1wbGUgb2YgdGhlIE1hdGVyaWFsIERlc2lnbiBMaXRlIGRpYWxvZyBjb21wb25lbnQuIFBsZWFzZSB1c2UgcmVzcG9uc2libHkuXFxuICAgIDwvcD5cXG48L20tZGlhbG9nPlxcblxcbjxtLWRpYWxvZyByZWY9XFxcIm1zZ0Z1bGx3aWR0aFxcXCIgdGl0bGU9XFxcIk1ETCBEaWFsb2dcXFwiIGZ1bGwtd2lkdGg+XFxuICAgIDxwPlxcbiAgICAgICAgVGhpcyBpcyBhbiBleGFtcGxlIG9mIHRoZSBNYXRlcmlhbCBEZXNpZ24gTGl0ZSBkaWFsb2cgY29tcG9uZW50LiBQbGVhc2UgdXNlIHJlc3BvbnNpYmx5LlxcbiAgICA8L3A+XFxuPC9tLWRpYWxvZz5cXG5cXG48bS1kaWFsb2cgcmVmPVxcXCJtc2cyXFxcIiBmdWxsLXdpZHRoIHRpdGxlPVxcXCJUZXN0IFRpdGxlXFxcIj5cXG4gICAgPHAgc3R5bGU9XFxcInBhZGRpbmc6IDMwcHhcXFwiPkluY3JlbWVudDoge3tpbmNyZW1lbnR9fTwvcD5cXG5cXG4gICAgPHRlbXBsYXRlIHNsb3Q9XFxcImFjdGlvbnNcXFwiPlxcbiAgICAgICAgPG0tYnV0dG9uIHJhaXNlZCBwcmltYXJ5IHJpcHBsZSBAY2xpY2submF0aXZlPVxcXCJpbmNyZW1lbnQrK1xcXCI+QWN0aW9uPC9tLWJ1dHRvbj5cXG4gICAgPC90ZW1wbGF0ZT5cXG48L20tZGlhbG9nPlxcblxcbjxtLWJ1dHRvbiBAY2xpY2submF0aXZlPVxcXCJvcGVuXFxcIj5PcGVuIERpYWxvZzwvbS1idXR0b24+XFxuICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCJcXG4gICAgICAgICAgICBcIildKV0pXG59XX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNmZkZTAyZjlcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTZmZGUwMmY5IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9kaWFsb2dzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTY2ZTVkN2IxIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9jYXJkcy52dWVcIilcblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2NhcmRzLnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNjZlNWQ3YjEhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vY2FyZHMudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIi9Vc2Vycy9vei9zcmMvbWF0ZXJpYWwtY29tcG9uZW50cy9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9jYXJkcy52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTY2ZTVkN2IxXCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTY2ZTVkN2IxXCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfVxufSkoKX1cbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gY2FyZHMudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvY2FyZHMudnVlIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTY2ZTVkN2IxIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vY2FyZHMudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi02NmU1ZDdiMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2NhcmRzLnZ1ZVwiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNjZlNWQ3YjEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9jYXJkcy52dWVcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTY2ZTVkN2IxIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvY2FyZHMudnVlXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uZGVtby1jYXJkLXNxdWFyZS5tZGwtY2FyZCB7XFxuICB3aWR0aDogMzIwcHg7XFxuICBoZWlnaHQ6IDMyMHB4O1xcbn1cXG4uZGVtby1jYXJkLXNxdWFyZSA+IC5tZGwtY2FyZF9fdGl0bGUge1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vZ2V0bWRsLmlvL2Fzc2V0cy9kZW1vcy9kb2cucG5nJykgYm90dG9tIHJpZ2h0IDE1JSBuby1yZXBlYXQgIzQ2QjZBQztcXG59XFxuLmRlbW8tY2FyZC13aWRlLm1kbC1jYXJkIHtcXG4gIHdpZHRoOiA1MTJweDtcXG59XFxuLmRlbW8tY2FyZC13aWRlID4gLm1kbC1jYXJkX190aXRsZSB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGhlaWdodDogMTc2cHg7XFxuICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vZ2V0bWRsLmlvL2Fzc2V0cy9kZW1vcy93ZWxjb21lX2NhcmQuanBnJykgY2VudGVyIC8gY292ZXI7XFxufVxcbi5kZW1vLWNhcmQtd2lkZSA+IC5tZGwtY2FyZF9fbWVudSB7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi8uL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL2NhcmRzLnZ1ZT8xNzUxY2RkNFwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBbUVBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7Q0FDQTtBQUNBO0VBQ0EsWUFBQTtFQUNBLDZGQUFBO0NBQ0E7QUFFQTtFQUNBLGFBQUE7Q0FDQTtBQUNBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrRkFBQTtDQUNBO0FBQ0E7RUFDQSxZQUFBO0NBQ0FcIixcImZpbGVcIjpcImNhcmRzLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICAgIDxkaXY+XFxuICAgICAgICA8aDM+Q2FyZHM8L2gzPlxcblxcbiAgICAgICAgPG0tY2FyZCBjbGFzcz1cXFwiZGVtby1jYXJkLXNxdWFyZVxcXCIgdGl0bGU9XFxcIlVwZGF0ZXNcXFwiIHN1cHBvcnRpbmctdGV4dD1cXFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gTWF1cmlzIHNhZ2l0dGlzIHBlbGxlbnRlc3F1ZSBsYWN1cyBlbGVpZmVuZCBsYWNpbmlhLi4uXFxcIiBhY3Rpb25zPVxcXCJhY3Rpb25zXFxcIiBhY3Rpb25zLXRleHQ9XFxcIlVwZGF0ZVxcXCI+PC9tLWNhcmQ+XFxuXFxuICAgICAgICA8YnI+XFxuICAgICAgICA8YnI+XFxuXFxuICAgICAgICA8bS1jYXJkIGNsYXNzPVxcXCJkZW1vLWNhcmQtd2lkZVxcXCIgdGl0bGU9XFxcIldlbGNvbWVcXFwiIHN1cHBvcnRpbmctdGV4dD1cXFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gTWF1cmlzIHNhZ2l0dGlzIHBlbGxlbnRlc3F1ZSBsYWN1cyBlbGVpZmVuZCBsYWNpbmlhLi4uXFxcIiBhY3Rpb25zPVxcXCJhY3Rpb25zXFxcIiBhY3Rpb25zLXRleHQ9XFxcIkdldCBzdGFydGVkXFxcIj48L20tY2FyZD5cXG5cXG4gICAgICAgIDxocj5cXG5cXG4gICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgPHByZSB2LXByZT5cXG4gICAgICAgICAgICAgICAgPGNvZGUgY2xhc3M9XFxcImh0bWxcXFwiPlxcbiAmI3gzQzttLWNhcmQgY2xhc3M9JiN4MjI7ZGVtby1jYXJkLXNxdWFyZSYjeDIyOyB0aXRsZT0mI3gyMjtVcGRhdGVzJiN4MjI7IHN1cHBvcnRpbmctdGV4dD0mI3gyMjtMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBNYXVyaXMgc2FnaXR0aXMgcGVsbGVudGVzcXVlIGxhY3VzIGVsZWlmZW5kIGxhY2luaWEuLi4mI3gyMjsgYWN0aW9ucz0mI3gyMjthY3Rpb25zJiN4MjI7IGFjdGlvbnMtdGV4dD0mI3gyMjtVcGRhdGUmI3gyMjsmI3gzRTsmI3gzQzsvbS1jYXJkJiN4M0U7XFxuICYjeDNDO20tY2FyZCBjbGFzcz0mI3gyMjtkZW1vLWNhcmQtd2lkZSYjeDIyOyB0aXRsZT0mI3gyMjtXZWxjb21lJiN4MjI7IHN1cHBvcnRpbmctdGV4dD0mI3gyMjtMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBNYXVyaXMgc2FnaXR0aXMgcGVsbGVudGVzcXVlIGxhY3VzIGVsZWlmZW5kIGxhY2luaWEuLi4mI3gyMjsgYWN0aW9ucz0mI3gyMjthY3Rpb25zJiN4MjI7IGFjdGlvbnMtdGV4dD0mI3gyMjtHZXQgc3RhcnRlZCYjeDIyOyYjeDNFOyYjeDNDOy9tLWNhcmQmI3gzRTtcXG5cXG4gJiN4M0M7c3R5bGUmI3gzRTtcXG4gLmRlbW8tY2FyZC1zcXVhcmUubWRsLWNhcmQge1xcbiAgIHdpZHRoOiAzMjBweDtcXG4gICBoZWlnaHQ6IDMyMHB4O1xcbiB9XFxuIC5kZW1vLWNhcmQtc3F1YXJlICYjeDNFOyAubWRsLWNhcmRfX3RpdGxlIHtcXG4gICBjb2xvcjogI2ZmZjtcXG4gICBiYWNrZ3JvdW5kOiB1cmwoJiN4Mjc7aHR0cHM6Ly9nZXRtZGwuaW8vYXNzZXRzL2RlbW9zL2RvZy5wbmcmI3gyNzspIGJvdHRvbSByaWdodCAxNSUgbm8tcmVwZWF0ICM0NkI2QUM7XFxuIH1cXG5cXG4gLmRlbW8tY2FyZC13aWRlLm1kbC1jYXJkIHtcXG4gICB3aWR0aDogNTEycHg7XFxuIH1cXG4gLmRlbW8tY2FyZC13aWRlICYjeDNFOyAubWRsLWNhcmRfX3RpdGxlIHtcXG4gICBjb2xvcjogI2ZmZjtcXG4gICBoZWlnaHQ6IDE3NnB4O1xcbiAgIGJhY2tncm91bmQ6IHVybCgmI3gyNztodHRwczovL2dldG1kbC5pby9hc3NldHMvZGVtb3Mvd2VsY29tZV9jYXJkLmpwZyYjeDI3OykgY2VudGVyIC8gY292ZXI7XFxuIH1cXG4gLmRlbW8tY2FyZC13aWRlICYjeDNFOyAubWRsLWNhcmRfX21lbnUge1xcbiAgIGNvbG9yOiAjZmZmO1xcbiB9XFxuXFxuICYjeDNDOy9zdHlsZSYjeDNFO1xcbiAgICAgICAgICAgICAgICA8L2NvZGU+XFxuICAgICAgICAgICAgPC9wcmU+XFxuICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgIDxtLXRhYmxlIHN0eWxlPVxcXCJ3aWR0aDogMTAwJVxcXCI+XFxuICAgICAgICAgICAgPG0tdGFibGUtaGVhZD5cXG4gICAgICAgICAgICAgICAgPG0tdGFibGUtcm93PlxcbiAgICAgICAgICAgICAgICAgICAgPG0tdGFibGUtaD5Qcm9wPC9tLXRhYmxlLWg+XFxuICAgICAgICAgICAgICAgICAgICA8bS10YWJsZS1oPkVmZmVjdDwvbS10YWJsZS1oPlxcbiAgICAgICAgICAgICAgICAgICAgPG0tdGFibGUtaD5SZW1hcmtzPC9tLXRhYmxlLWg+XFxuICAgICAgICAgICAgICAgIDwvbS10YWJsZS1yb3c+XFxuICAgICAgICAgICAgPC9tLXRhYmxlLWhlYWQ+XFxuXFxuICAgICAgICAgICAgPG0tdGFibGUtYm9keT5cXG4gICAgICAgICAgICAgICAgPG0tdGFibGUtcm93IHYtZm9yPVxcXCJwcm9wIGluIGRvY1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8bS10YWJsZS1jZWxsPnt7cHJvcC5uYW1lfX08L20tdGFibGUtY2VsbD5cXG4gICAgICAgICAgICAgICAgICAgIDxtLXRhYmxlLWNlbGw+e3twcm9wLmRlc2NyaXB0aW9ufX08L20tdGFibGUtY2VsbD5cXG4gICAgICAgICAgICAgICAgICAgIDxtLXRhYmxlLWNlbGw+e3twcm9wLnJlbWFya319PC9tLXRhYmxlLWNlbGw+XFxuICAgICAgICAgICAgICAgIDwvbS10YWJsZS1yb3c+XFxuICAgICAgICAgICAgPC9tLXRhYmxlLWJvZHk+XFxuICAgICAgICA8L20tdGFibGU+XFxuICAgIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuXFxuPHN0eWxlPlxcbi5kZW1vLWNhcmQtc3F1YXJlLm1kbC1jYXJkIHtcXG4gIHdpZHRoOiAzMjBweDtcXG4gIGhlaWdodDogMzIwcHg7XFxufVxcbi5kZW1vLWNhcmQtc3F1YXJlID4gLm1kbC1jYXJkX190aXRsZSB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly9nZXRtZGwuaW8vYXNzZXRzL2RlbW9zL2RvZy5wbmcnKSBib3R0b20gcmlnaHQgMTUlIG5vLXJlcGVhdCAjNDZCNkFDO1xcbn1cXG5cXG4uZGVtby1jYXJkLXdpZGUubWRsLWNhcmQge1xcbiAgd2lkdGg6IDUxMnB4O1xcbn1cXG4uZGVtby1jYXJkLXdpZGUgPiAubWRsLWNhcmRfX3RpdGxlIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgaGVpZ2h0OiAxNzZweDtcXG4gIGJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly9nZXRtZGwuaW8vYXNzZXRzL2RlbW9zL3dlbGNvbWVfY2FyZC5qcGcnKSBjZW50ZXIgLyBjb3ZlcjtcXG59XFxuLmRlbW8tY2FyZC13aWRlID4gLm1kbC1jYXJkX19tZW51IHtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG48L3N0eWxlPlxcblxcbjxzY3JpcHQ+XFxuXFxuICAgIGV4cG9ydCBkZWZhdWx0IHtcXG4gICAgICAgIG1vdW50ZWQoKSB7XFxuICAgICAgICAgICAgaGxqcy5oaWdobGlnaHRCbG9jayh0aGlzLiRlbC5xdWVyeVNlbGVjdG9yKCcuaHRtbCcpKTtcXG4gICAgICAgIH0sXFxuICAgICAgICBkYXRhKCl7XFxuICAgICAgICAgICAgcmV0dXJuIHtcXG4gICAgICAgICAgICAgICAgZG9jOiBbXFxuICAgICAgICAgICAgICAgICAgICB7bmFtZTogJ3RpdGxlJywgZGVzY3JpcHRpb246ICdEZWZpbmVzIGNhcmRcXFxcJ3MgdGl0bGUnLCByZW1hcms6ICcnfSxcXG4gICAgICAgICAgICAgICAgICAgIHtuYW1lOiAnYWN0aW9ucycsIGRlc2NyaXB0aW9uOiAnTWFrZXMgdGhlIGFjdGlvbnMgc2VjdGlvbiB2aXNpYmxlJywgcmVtYXJrOiAnWW91IG11c3Qgc2V0IGl0IHRvIGEgbm9uIGVtcHR5IHN0cmluZyBpbiBvcmRlciB0byBtYWtlIGl0IHdvcmsnfSxcXG4gICAgICAgICAgICAgICAgICAgIHtuYW1lOiAnc3VwcG9ydGluZy10ZXh0JywgZGVzY3JpcHRpb246ICdEZWZpbmVzIGNhcmRcXFxcJ3Mgc3VwcG9ydGluZyB0ZXh0JywgcmVtYXJrOiAnJ30sXFxuICAgICAgICAgICAgICAgICAgICB7bmFtZTogJ2FjdGlvbnMtdGV4dCcsIGRlc2NyaXB0aW9uOiAnRGVmaW5lcyB0aGUgYWN0aW9ucyBzZWN0aW9uIGJ1dHRvblxcXFwncyB0ZXh0JywgcmVtYXJrOiAnJ30sXFxuICAgICAgICAgICAgICAgICAgICB7bmFtZTogJ21lbnUnLCBkZXNjcmlwdGlvbjogJ0RlZmluZXMgZWxlbWVudCBhcyB0b3AgcmlnaHQgbWVudSBidXR0b24nLCByZW1hcms6ICcnfSxcXG4gICAgICAgICAgICAgICAgICAgIHtuYW1lOiAnc3VidGl0bGUnLCBkZXNjcmlwdGlvbjogJ0Fzc2lnbnMgdGV4dCBjaGFyYWN0ZXJpc3RpY3MgdG8gYSBjYXJkIHN1YnRpdGxlJywgcmVtYXJrOiAnJ30sXFxuICAgICAgICAgICAgICAgICAgICB7bmFtZTogJ21lZGlhJywgZGVzY3JpcHRpb246ICdEZWZpbmVzIHNyYyB1cmwgZm9yIGEgY2FyZCBtZWRpYSBiYWNrZ3JvdW5kJywgcmVtYXJrOiAnJ30sXFxuICAgICAgICAgICAgICAgIF1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG48L3NjcmlwdD5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTY2ZTVkN2IxIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvY2FyZHMudnVlXG4vLyBtb2R1bGUgaWQgPSA1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPGgzPkNhcmRzPC9oMz5cblxuICAgICAgICA8bS1jYXJkIGNsYXNzPVwiZGVtby1jYXJkLXNxdWFyZVwiIHRpdGxlPVwiVXBkYXRlc1wiIHN1cHBvcnRpbmctdGV4dD1cIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIE1hdXJpcyBzYWdpdHRpcyBwZWxsZW50ZXNxdWUgbGFjdXMgZWxlaWZlbmQgbGFjaW5pYS4uLlwiIGFjdGlvbnM9XCJhY3Rpb25zXCIgYWN0aW9ucy10ZXh0PVwiVXBkYXRlXCI+PC9tLWNhcmQ+XG5cbiAgICAgICAgPGJyPlxuICAgICAgICA8YnI+XG5cbiAgICAgICAgPG0tY2FyZCBjbGFzcz1cImRlbW8tY2FyZC13aWRlXCIgdGl0bGU9XCJXZWxjb21lXCIgc3VwcG9ydGluZy10ZXh0PVwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gTWF1cmlzIHNhZ2l0dGlzIHBlbGxlbnRlc3F1ZSBsYWN1cyBlbGVpZmVuZCBsYWNpbmlhLi4uXCIgYWN0aW9ucz1cImFjdGlvbnNcIiBhY3Rpb25zLXRleHQ9XCJHZXQgc3RhcnRlZFwiPjwvbS1jYXJkPlxuXG4gICAgICAgIDxocj5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHByZSB2LXByZT5cbiAgICAgICAgICAgICAgICA8Y29kZSBjbGFzcz1cImh0bWxcIj5cbiAmI3gzQzttLWNhcmQgY2xhc3M9JiN4MjI7ZGVtby1jYXJkLXNxdWFyZSYjeDIyOyB0aXRsZT0mI3gyMjtVcGRhdGVzJiN4MjI7IHN1cHBvcnRpbmctdGV4dD0mI3gyMjtMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBNYXVyaXMgc2FnaXR0aXMgcGVsbGVudGVzcXVlIGxhY3VzIGVsZWlmZW5kIGxhY2luaWEuLi4mI3gyMjsgYWN0aW9ucz0mI3gyMjthY3Rpb25zJiN4MjI7IGFjdGlvbnMtdGV4dD0mI3gyMjtVcGRhdGUmI3gyMjsmI3gzRTsmI3gzQzsvbS1jYXJkJiN4M0U7XG4gJiN4M0M7bS1jYXJkIGNsYXNzPSYjeDIyO2RlbW8tY2FyZC13aWRlJiN4MjI7IHRpdGxlPSYjeDIyO1dlbGNvbWUmI3gyMjsgc3VwcG9ydGluZy10ZXh0PSYjeDIyO0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIE1hdXJpcyBzYWdpdHRpcyBwZWxsZW50ZXNxdWUgbGFjdXMgZWxlaWZlbmQgbGFjaW5pYS4uLiYjeDIyOyBhY3Rpb25zPSYjeDIyO2FjdGlvbnMmI3gyMjsgYWN0aW9ucy10ZXh0PSYjeDIyO0dldCBzdGFydGVkJiN4MjI7JiN4M0U7JiN4M0M7L20tY2FyZCYjeDNFO1xuXG4gJiN4M0M7c3R5bGUmI3gzRTtcbiAuZGVtby1jYXJkLXNxdWFyZS5tZGwtY2FyZCB7XG4gICB3aWR0aDogMzIwcHg7XG4gICBoZWlnaHQ6IDMyMHB4O1xuIH1cbiAuZGVtby1jYXJkLXNxdWFyZSAmI3gzRTsgLm1kbC1jYXJkX190aXRsZSB7XG4gICBjb2xvcjogI2ZmZjtcbiAgIGJhY2tncm91bmQ6IHVybCgmI3gyNztodHRwczovL2dldG1kbC5pby9hc3NldHMvZGVtb3MvZG9nLnBuZyYjeDI3OykgYm90dG9tIHJpZ2h0IDE1JSBuby1yZXBlYXQgIzQ2QjZBQztcbiB9XG5cbiAuZGVtby1jYXJkLXdpZGUubWRsLWNhcmQge1xuICAgd2lkdGg6IDUxMnB4O1xuIH1cbiAuZGVtby1jYXJkLXdpZGUgJiN4M0U7IC5tZGwtY2FyZF9fdGl0bGUge1xuICAgY29sb3I6ICNmZmY7XG4gICBoZWlnaHQ6IDE3NnB4O1xuICAgYmFja2dyb3VuZDogdXJsKCYjeDI3O2h0dHBzOi8vZ2V0bWRsLmlvL2Fzc2V0cy9kZW1vcy93ZWxjb21lX2NhcmQuanBnJiN4Mjc7KSBjZW50ZXIgLyBjb3ZlcjtcbiB9XG4gLmRlbW8tY2FyZC13aWRlICYjeDNFOyAubWRsLWNhcmRfX21lbnUge1xuICAgY29sb3I6ICNmZmY7XG4gfVxuXG4gJiN4M0M7L3N0eWxlJiN4M0U7XG4gICAgICAgICAgICAgICAgPC9jb2RlPlxuICAgICAgICAgICAgPC9wcmU+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxtLXRhYmxlIHN0eWxlPVwid2lkdGg6IDEwMCVcIj5cbiAgICAgICAgICAgIDxtLXRhYmxlLWhlYWQ+XG4gICAgICAgICAgICAgICAgPG0tdGFibGUtcm93PlxuICAgICAgICAgICAgICAgICAgICA8bS10YWJsZS1oPlByb3A8L20tdGFibGUtaD5cbiAgICAgICAgICAgICAgICAgICAgPG0tdGFibGUtaD5FZmZlY3Q8L20tdGFibGUtaD5cbiAgICAgICAgICAgICAgICAgICAgPG0tdGFibGUtaD5SZW1hcmtzPC9tLXRhYmxlLWg+XG4gICAgICAgICAgICAgICAgPC9tLXRhYmxlLXJvdz5cbiAgICAgICAgICAgIDwvbS10YWJsZS1oZWFkPlxuXG4gICAgICAgICAgICA8bS10YWJsZS1ib2R5PlxuICAgICAgICAgICAgICAgIDxtLXRhYmxlLXJvdyB2LWZvcj1cInByb3AgaW4gZG9jXCI+XG4gICAgICAgICAgICAgICAgICAgIDxtLXRhYmxlLWNlbGw+e3twcm9wLm5hbWV9fTwvbS10YWJsZS1jZWxsPlxuICAgICAgICAgICAgICAgICAgICA8bS10YWJsZS1jZWxsPnt7cHJvcC5kZXNjcmlwdGlvbn19PC9tLXRhYmxlLWNlbGw+XG4gICAgICAgICAgICAgICAgICAgIDxtLXRhYmxlLWNlbGw+e3twcm9wLnJlbWFya319PC9tLXRhYmxlLWNlbGw+XG4gICAgICAgICAgICAgICAgPC9tLXRhYmxlLXJvdz5cbiAgICAgICAgICAgIDwvbS10YWJsZS1ib2R5PlxuICAgICAgICA8L20tdGFibGU+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c3R5bGU+XG4uZGVtby1jYXJkLXNxdWFyZS5tZGwtY2FyZCB7XG4gIHdpZHRoOiAzMjBweDtcbiAgaGVpZ2h0OiAzMjBweDtcbn1cbi5kZW1vLWNhcmQtc3F1YXJlID4gLm1kbC1jYXJkX190aXRsZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vZ2V0bWRsLmlvL2Fzc2V0cy9kZW1vcy9kb2cucG5nJykgYm90dG9tIHJpZ2h0IDE1JSBuby1yZXBlYXQgIzQ2QjZBQztcbn1cblxuLmRlbW8tY2FyZC13aWRlLm1kbC1jYXJkIHtcbiAgd2lkdGg6IDUxMnB4O1xufVxuLmRlbW8tY2FyZC13aWRlID4gLm1kbC1jYXJkX190aXRsZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBoZWlnaHQ6IDE3NnB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vZ2V0bWRsLmlvL2Fzc2V0cy9kZW1vcy93ZWxjb21lX2NhcmQuanBnJykgY2VudGVyIC8gY292ZXI7XG59XG4uZGVtby1jYXJkLXdpZGUgPiAubWRsLWNhcmRfX21lbnUge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuPC9zdHlsZT5cblxuPHNjcmlwdD5cblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIGhsanMuaGlnaGxpZ2h0QmxvY2sodGhpcy4kZWwucXVlcnlTZWxlY3RvcignLmh0bWwnKSk7XG4gICAgICAgIH0sXG4gICAgICAgIGRhdGEoKXtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZG9jOiBbXG4gICAgICAgICAgICAgICAgICAgIHtuYW1lOiAndGl0bGUnLCBkZXNjcmlwdGlvbjogJ0RlZmluZXMgY2FyZFxcJ3MgdGl0bGUnLCByZW1hcms6ICcnfSxcbiAgICAgICAgICAgICAgICAgICAge25hbWU6ICdhY3Rpb25zJywgZGVzY3JpcHRpb246ICdNYWtlcyB0aGUgYWN0aW9ucyBzZWN0aW9uIHZpc2libGUnLCByZW1hcms6ICdZb3UgbXVzdCBzZXQgaXQgdG8gYSBub24gZW1wdHkgc3RyaW5nIGluIG9yZGVyIHRvIG1ha2UgaXQgd29yayd9LFxuICAgICAgICAgICAgICAgICAgICB7bmFtZTogJ3N1cHBvcnRpbmctdGV4dCcsIGRlc2NyaXB0aW9uOiAnRGVmaW5lcyBjYXJkXFwncyBzdXBwb3J0aW5nIHRleHQnLCByZW1hcms6ICcnfSxcbiAgICAgICAgICAgICAgICAgICAge25hbWU6ICdhY3Rpb25zLXRleHQnLCBkZXNjcmlwdGlvbjogJ0RlZmluZXMgdGhlIGFjdGlvbnMgc2VjdGlvbiBidXR0b25cXCdzIHRleHQnLCByZW1hcms6ICcnfSxcbiAgICAgICAgICAgICAgICAgICAge25hbWU6ICdtZW51JywgZGVzY3JpcHRpb246ICdEZWZpbmVzIGVsZW1lbnQgYXMgdG9wIHJpZ2h0IG1lbnUgYnV0dG9uJywgcmVtYXJrOiAnJ30sXG4gICAgICAgICAgICAgICAgICAgIHtuYW1lOiAnc3VidGl0bGUnLCBkZXNjcmlwdGlvbjogJ0Fzc2lnbnMgdGV4dCBjaGFyYWN0ZXJpc3RpY3MgdG8gYSBjYXJkIHN1YnRpdGxlJywgcmVtYXJrOiAnJ30sXG4gICAgICAgICAgICAgICAgICAgIHtuYW1lOiAnbWVkaWEnLCBkZXNjcmlwdGlvbjogJ0RlZmluZXMgc3JjIHVybCBmb3IgYSBjYXJkIG1lZGlhIGJhY2tncm91bmQnLCByZW1hcms6ICcnfSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjYXJkcy52dWU/MTc1MWNkZDQiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygnaDMnLCBbX3ZtLl92KFwiQ2FyZHNcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tY2FyZCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkZW1vLWNhcmQtc3F1YXJlXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGl0bGVcIjogXCJVcGRhdGVzXCIsXG4gICAgICBcInN1cHBvcnRpbmctdGV4dFwiOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIE1hdXJpcyBzYWdpdHRpcyBwZWxsZW50ZXNxdWUgbGFjdXMgZWxlaWZlbmQgbGFjaW5pYS4uLlwiLFxuICAgICAgXCJhY3Rpb25zXCI6IFwiYWN0aW9uc1wiLFxuICAgICAgXCJhY3Rpb25zLXRleHRcIjogXCJVcGRhdGVcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tY2FyZCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkZW1vLWNhcmQtd2lkZVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInRpdGxlXCI6IFwiV2VsY29tZVwiLFxuICAgICAgXCJzdXBwb3J0aW5nLXRleHRcIjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBNYXVyaXMgc2FnaXR0aXMgcGVsbGVudGVzcXVlIGxhY3VzIGVsZWlmZW5kIGxhY2luaWEuLi5cIixcbiAgICAgIFwiYWN0aW9uc1wiOiBcImFjdGlvbnNcIixcbiAgICAgIFwiYWN0aW9ucy10ZXh0XCI6IFwiR2V0IHN0YXJ0ZWRcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdocicpLCBfdm0uX3YoXCIgXCIpLCBfdm0uX20oMCksIF92bS5fdihcIiBcIiksIF9jKCdtLXRhYmxlJywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcIndpZHRoXCI6IFwiMTAwJVwiXG4gICAgfVxuICB9LCBbX2MoJ20tdGFibGUtaGVhZCcsIFtfYygnbS10YWJsZS1yb3cnLCBbX2MoJ20tdGFibGUtaCcsIFtfdm0uX3YoXCJQcm9wXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtLXRhYmxlLWgnLCBbX3ZtLl92KFwiRWZmZWN0XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtLXRhYmxlLWgnLCBbX3ZtLl92KFwiUmVtYXJrc1wiKV0pXSwgMSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tdGFibGUtYm9keScsIF92bS5fbCgoX3ZtLmRvYyksIGZ1bmN0aW9uKHByb3ApIHtcbiAgICByZXR1cm4gX2MoJ20tdGFibGUtcm93JywgW19jKCdtLXRhYmxlLWNlbGwnLCBbX3ZtLl92KF92bS5fcyhwcm9wLm5hbWUpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS10YWJsZS1jZWxsJywgW192bS5fdihfdm0uX3MocHJvcC5kZXNjcmlwdGlvbikpXSksIF92bS5fdihcIiBcIiksIF9jKCdtLXRhYmxlLWNlbGwnLCBbX3ZtLl92KF92bS5fcyhwcm9wLnJlbWFyaykpXSldLCAxKVxuICB9KSldLCAxKV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygncHJlJywge1xuICAgIHByZTogdHJ1ZVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgXCIpLCBfYygnY29kZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJjbGFzc1wiOiBcImh0bWxcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbjxtLWNhcmQgY2xhc3M9XFxcImRlbW8tY2FyZC1zcXVhcmVcXFwiIHRpdGxlPVxcXCJVcGRhdGVzXFxcIiBzdXBwb3J0aW5nLXRleHQ9XFxcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIE1hdXJpcyBzYWdpdHRpcyBwZWxsZW50ZXNxdWUgbGFjdXMgZWxlaWZlbmQgbGFjaW5pYS4uLlxcXCIgYWN0aW9ucz1cXFwiYWN0aW9uc1xcXCIgYWN0aW9ucy10ZXh0PVxcXCJVcGRhdGVcXFwiPjwvbS1jYXJkPlxcbjxtLWNhcmQgY2xhc3M9XFxcImRlbW8tY2FyZC13aWRlXFxcIiB0aXRsZT1cXFwiV2VsY29tZVxcXCIgc3VwcG9ydGluZy10ZXh0PVxcXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBNYXVyaXMgc2FnaXR0aXMgcGVsbGVudGVzcXVlIGxhY3VzIGVsZWlmZW5kIGxhY2luaWEuLi5cXFwiIGFjdGlvbnM9XFxcImFjdGlvbnNcXFwiIGFjdGlvbnMtdGV4dD1cXFwiR2V0IHN0YXJ0ZWRcXFwiPjwvbS1jYXJkPlxcblxcbjxzdHlsZT5cXG4uZGVtby1jYXJkLXNxdWFyZS5tZGwtY2FyZCB7XFxuICB3aWR0aDogMzIwcHg7XFxuICBoZWlnaHQ6IDMyMHB4O1xcbn1cXG4uZGVtby1jYXJkLXNxdWFyZSA+IC5tZGwtY2FyZF9fdGl0bGUge1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vZ2V0bWRsLmlvL2Fzc2V0cy9kZW1vcy9kb2cucG5nJykgYm90dG9tIHJpZ2h0IDE1JSBuby1yZXBlYXQgIzQ2QjZBQztcXG59XFxuXFxuLmRlbW8tY2FyZC13aWRlLm1kbC1jYXJkIHtcXG4gIHdpZHRoOiA1MTJweDtcXG59XFxuLmRlbW8tY2FyZC13aWRlID4gLm1kbC1jYXJkX190aXRsZSB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGhlaWdodDogMTc2cHg7XFxuICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vZ2V0bWRsLmlvL2Fzc2V0cy9kZW1vcy93ZWxjb21lX2NhcmQuanBnJykgY2VudGVyIC8gY292ZXI7XFxufVxcbi5kZW1vLWNhcmQtd2lkZSA+IC5tZGwtY2FyZF9fbWVudSB7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuPC9zdHlsZT5cXG4gICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiXFxuICAgICAgICAgICBcIildKV0pXG59XX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNjZlNWQ3YjFcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTY2ZTVkN2IxIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9jYXJkcy52dWVcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xudmFyIF9fdnVlX3N0eWxlc19fID0ge31cblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2NoaXBzLnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNzY3MDIzZjUhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vY2hpcHMudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIi9Vc2Vycy9vei9zcmMvbWF0ZXJpYWwtY29tcG9uZW50cy9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9jaGlwcy52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTc2NzAyM2Y1XCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTc2NzAyM2Y1XCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfVxufSkoKX1cbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gY2hpcHMudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvY2hpcHMudnVlIiwiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxoMz5DaGlwczwvaDM+XG5cbiAgICAgICAgPG0tY2hpcCBjb250YWN0PVwiQVwiPkJhc2ljIENoaXA8L20tY2hpcD5cbiAgICAgICAgPG0tY2hpcCBjb250YWN0LWltYWdlPVwiaHR0cHM6Ly9nZXRtZGwuaW8vdGVtcGxhdGVzL2Rhc2hib2FyZC9pbWFnZXMvdXNlci5qcGdcIj5EZWxldGFibGUgQ29udGFjdCBDaGlwPC9tLWNoaXA+XG5cblxuICAgICAgICA8bS1jaGlwIGNvbnRhY3Q9XCJBXCIgQGRlbGV0ZT1cImRlbFwiIHYtaWY9XCJzaG93Q2hpcFwiPkJhc2ljIENoaXA8L20tY2hpcD5cblxuICAgICAgICA8bS1zbmFja2JhciBkaXNwbGF5LW9uPVwibXNnU2VudFwiPjwvbS1zbmFja2Jhcj5cblxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cHJlIHYtcHJlPlxuICAgICAgICAgICAgICAgIDxjb2RlIGNsYXNzPVwiaHRtbFwiPlxuJiN4M0M7bS1jaGlwIGNvbnRhY3Q9JiN4MjI7QSYjeDIyOyYjeDNFO0Jhc2ljIENoaXAmI3gzQzsvbS1jaGlwJiN4M0U7XG4mI3gzQzttLWNoaXAgY29udGFjdC1pbWFnZT0mI3gyMjtodHRwczovL2dldG1kbC5pby90ZW1wbGF0ZXMvZGFzaGJvYXJkL2ltYWdlcy91c2VyLmpwZyYjeDIyOyYjeDNFO0RlbGV0YWJsZSBDb250YWN0IENoaXAmI3gzQzsvbS1jaGlwJiN4M0U7XG4mI3gzQzttLWNoaXAgY29udGFjdD0mI3gyMjtBJiN4MjI7IEBkZWxldGU9JiN4MjI7ZGVsJiN4MjI7IHYtaWY9JiN4MjI7c2hvd0NoaXAmI3gyMjsmI3gzRTtCYXNpYyBDaGlwJiN4M0M7L20tY2hpcCYjeDNFO1xuJiN4M0M7bS1zbmFja2JhciBkaXNwbGF5LW9uPSYjeDIyO21zZ1NlbnQmI3gyMjsmI3gzRTsmI3gzQzsvbS1zbmFja2JhciYjeDNFO1xuICAgICAgICAgICAgICAgIDwvY29kZT5cbiAgICAgICAgICAgIDwvcHJlPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8bS10YWJsZSBzdHlsZT1cIndpZHRoOiAxMDAlXCI+XG4gICAgICAgICAgICA8bS10YWJsZS1oZWFkPlxuICAgICAgICAgICAgICAgIDxtLXRhYmxlLXJvdz5cbiAgICAgICAgICAgICAgICAgICAgPG0tdGFibGUtaD5Qcm9wPC9tLXRhYmxlLWg+XG4gICAgICAgICAgICAgICAgICAgIDxtLXRhYmxlLWg+RWZmZWN0PC9tLXRhYmxlLWg+XG4gICAgICAgICAgICAgICAgICAgIDxtLXRhYmxlLWg+UmVtYXJrczwvbS10YWJsZS1oPlxuICAgICAgICAgICAgICAgIDwvbS10YWJsZS1yb3c+XG4gICAgICAgICAgICA8L20tdGFibGUtaGVhZD5cblxuICAgICAgICAgICAgPG0tdGFibGUtYm9keT5cbiAgICAgICAgICAgICAgICA8bS10YWJsZS1yb3cgdi1mb3I9XCJwcm9wIGluIGRvY1wiPlxuICAgICAgICAgICAgICAgICAgICA8bS10YWJsZS1jZWxsPnt7cHJvcC5uYW1lfX08L20tdGFibGUtY2VsbD5cbiAgICAgICAgICAgICAgICAgICAgPG0tdGFibGUtY2VsbD57e3Byb3AuZGVzY3JpcHRpb259fTwvbS10YWJsZS1jZWxsPlxuICAgICAgICAgICAgICAgICAgICA8bS10YWJsZS1jZWxsPnt7cHJvcC5yZW1hcmt9fTwvbS10YWJsZS1jZWxsPlxuICAgICAgICAgICAgICAgIDwvbS10YWJsZS1yb3c+XG4gICAgICAgICAgICA8L20tdGFibGUtYm9keT5cbiAgICAgICAgPC9tLXRhYmxlPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdHtcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgZGVsKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0NoaXAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRyb290LiRlbWl0KCdtc2dTZW50Jywge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnRGVsZXRlZCcsXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvblRleHQ6ICdVbmRvJyxcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dDogMzAwMCxcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uSGFuZGxlcjogKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93Q2hpcCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICBobGpzLmhpZ2hsaWdodEJsb2NrKHRoaXMuJGVsLnF1ZXJ5U2VsZWN0b3IoJy5odG1sJykpO1xuICAgICAgICB9LFxuICAgICAgICBkYXRhKCl7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHNob3dDaGlwOiB0cnVlLFxuICAgICAgICAgICAgICAgIGRvYzogW1xuICAgICAgICAgICAgICAgICAgICB7bmFtZTogJ2NvbnRhY3QtaW1hZ2UnLCBkZXNjcmlwdGlvbjogJ3NyYyBhdHRyaWJ1dGVzXFwnIHZhbHVlIGZvciBhIGNvbnRhY3QgaW1hZ2UnLCByZW1hcms6ICcnfSxcbiAgICAgICAgICAgICAgICAgICAge25hbWU6ICdkZWxldGUtaWNvbicsIGRlc2NyaXB0aW9uOiAnJywgcmVtYXJrOiAnT3B0aW9uYWwnfSxcbiAgICAgICAgICAgICAgICAgICAge25hbWU6ICdjb250YWN0JywgZGVzY3JpcHRpb246ICdEZWZpbmVzIGVsZW1lbnQgYXMgdGhlIGNoaXBcXCdzIHRleHQnLCByZW1hcms6ICcnfSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjaGlwcy52dWU/NTgwOTEyYjAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygnaDMnLCBbX3ZtLl92KFwiQ2hpcHNcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tY2hpcCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJjb250YWN0XCI6IFwiQVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiQmFzaWMgQ2hpcFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS1jaGlwJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImNvbnRhY3QtaW1hZ2VcIjogXCJodHRwczovL2dldG1kbC5pby90ZW1wbGF0ZXMvZGFzaGJvYXJkL2ltYWdlcy91c2VyLmpwZ1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiRGVsZXRhYmxlIENvbnRhY3QgQ2hpcFwiKV0pLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLnNob3dDaGlwKSA/IF9jKCdtLWNoaXAnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiY29udGFjdFwiOiBcIkFcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiZGVsZXRlXCI6IF92bS5kZWxcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJCYXNpYyBDaGlwXCIpXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tc25hY2tiYXInLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZGlzcGxheS1vblwiOiBcIm1zZ1NlbnRcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF92bS5fbSgwKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tdGFibGUnLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwid2lkdGhcIjogXCIxMDAlXCJcbiAgICB9XG4gIH0sIFtfYygnbS10YWJsZS1oZWFkJywgW19jKCdtLXRhYmxlLXJvdycsIFtfYygnbS10YWJsZS1oJywgW192bS5fdihcIlByb3BcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tdGFibGUtaCcsIFtfdm0uX3YoXCJFZmZlY3RcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tdGFibGUtaCcsIFtfdm0uX3YoXCJSZW1hcmtzXCIpXSldLCAxKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnbS10YWJsZS1ib2R5JywgX3ZtLl9sKChfdm0uZG9jKSwgZnVuY3Rpb24ocHJvcCkge1xuICAgIHJldHVybiBfYygnbS10YWJsZS1yb3cnLCBbX2MoJ20tdGFibGUtY2VsbCcsIFtfdm0uX3YoX3ZtLl9zKHByb3AubmFtZSkpXSksIF92bS5fdihcIiBcIiksIF9jKCdtLXRhYmxlLWNlbGwnLCBbX3ZtLl92KF92bS5fcyhwcm9wLmRlc2NyaXB0aW9uKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tdGFibGUtY2VsbCcsIFtfdm0uX3YoX3ZtLl9zKHByb3AucmVtYXJrKSldKV0sIDEpXG4gIH0pKV0sIDEpXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW19jKCdwcmUnLCB7XG4gICAgcHJlOiB0cnVlXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgXCIpLCBfYygnY29kZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJjbGFzc1wiOiBcImh0bWxcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbjxtLWNoaXAgY29udGFjdD1cXFwiQVxcXCI+QmFzaWMgQ2hpcDwvbS1jaGlwPlxcbjxtLWNoaXAgY29udGFjdC1pbWFnZT1cXFwiaHR0cHM6Ly9nZXRtZGwuaW8vdGVtcGxhdGVzL2Rhc2hib2FyZC9pbWFnZXMvdXNlci5qcGdcXFwiPkRlbGV0YWJsZSBDb250YWN0IENoaXA8L20tY2hpcD5cXG48bS1jaGlwIGNvbnRhY3Q9XFxcIkFcXFwiIEBkZWxldGU9XFxcImRlbFxcXCIgdi1pZj1cXFwic2hvd0NoaXBcXFwiPkJhc2ljIENoaXA8L20tY2hpcD5cXG48bS1zbmFja2JhciBkaXNwbGF5LW9uPVxcXCJtc2dTZW50XFxcIj48L20tc25hY2tiYXI+XFxuICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCJcXG4gICAgICAgICAgICBcIildKV0pXG59XX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNzY3MDIzZjVcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTc2NzAyM2Y1IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9jaGlwcy52dWVcbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xudmFyIF9fdnVlX3N0eWxlc19fID0ge31cblxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIXZ1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi0yYzhhZWFlMyF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vbGlzdHMudnVlXCIpXG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9saXN0cy52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTJjOGFlYWUzIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2xpc3RzLnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCIvVXNlcnMvb3ovc3JjL21hdGVyaWFsLWNvbXBvbmVudHMvZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvbGlzdHMudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0yYzhhZWFlM1wiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0yYzhhZWFlM1wiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH1cbn0pKCl9XG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGxpc3RzLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL2xpc3RzLnZ1ZSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0yYzhhZWFlMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2xpc3RzLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMmM4YWVhZTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9saXN0cy52dWVcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTJjOGFlYWUzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vbGlzdHMudnVlXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0yYzhhZWFlMyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL2xpc3RzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmRlbW8tbGlzdC1pdGVtIHtcXG4gIHdpZHRoOiAzMDBweDtcXG59XFxuLmRlbW8tbGlzdC10aHJlZSB7XFxuICB3aWR0aDogNjUwcHg7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9saXN0cy52dWU/NWRiNzJkYzBcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQStLQTtFQUNBLGFBQUE7Q0FDQTtBQUVBO0VBQ0EsYUFBQTtDQUNBXCIsXCJmaWxlXCI6XCJsaXN0cy52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgICA8ZGl2PlxcbiAgICAgICAgPGgzPkxpc3RzPC9oMz5cXG5cXG4gICAgICAgIDxtLWxpc3QgY2xhc3M9XFxcImRlbW8tbGlzdC1pdGVtXFxcIj5cXG4gICAgICAgICAgICA8bS1saXN0LWl0ZW0+QnJ5YW4gQ3JhbnN0b248L20tbGlzdC1pdGVtPlxcbiAgICAgICAgICAgIDxtLWxpc3QtaXRlbT5BYXJvbiBQYXVsPC9tLWxpc3QtaXRlbT5cXG4gICAgICAgICAgICA8bS1saXN0LWl0ZW0+Qm9iIE9kZW5raXJrPC9tLWxpc3QtaXRlbT5cXG4gICAgICAgIDwvbS1saXN0PlxcblxcbiAgICAgICAgPGRpdj5cXG4gICAgICAgICAgICA8cHJlPlxcbiAgICAgICAgICAgICAgICA8Y29kZSBjbGFzcz1cXFwiaHRtbFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAmI3gzQzttLWxpc3QgY2xhc3M9JiN4MjI7ZGVtby1saXN0LWl0ZW0mI3gyMjsmI3gzRTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAmI3gzQzttLWxpc3QtaXRlbSYjeDNFO0JyeWFuIENyYW5zdG9uJiN4M0M7L20tbGlzdC1pdGVtJiN4M0U7XFxuICAgICAgICAgICAgICAgICAgICAgICAgJiN4M0M7bS1saXN0LWl0ZW0mI3gzRTtBYXJvbiBQYXVsJiN4M0M7L20tbGlzdC1pdGVtJiN4M0U7XFxuICAgICAgICAgICAgICAgICAgICAgICAgJiN4M0M7bS1saXN0LWl0ZW0mI3gzRTtCb2IgT2RlbmtpcmsmI3gzQzsvbS1saXN0LWl0ZW0mI3gzRTtcXG4gICAgICAgICAgICAgICAgICAgICYjeDNDOy9tLWxpc3QmI3gzRTtcXG4gICAgICAgICAgICAgICAgPC9jb2RlPlxcbiAgICAgICAgICAgIDwvcHJlPlxcbiAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICA8aHI+XFxuXFxuICAgICAgICA8bS1saXN0IGNsYXNzPVxcXCJkZW1vLWxpc3QtaXRlbVxcXCI+XFxuICAgICAgICAgICAgPG0tbGlzdC1pdGVtIGljb249XFxcInBlcnNvblxcXCI+QnJ5YW4gQ3JhbnN0b248L20tbGlzdC1pdGVtPlxcbiAgICAgICAgICAgIDxtLWxpc3QtaXRlbSBpY29uPVxcXCJwZXJzb25cXFwiPkFhcm9uIFBhdWw8L20tbGlzdC1pdGVtPlxcbiAgICAgICAgICAgIDxtLWxpc3QtaXRlbSBpY29uPVxcXCJwZXJzb25cXFwiPkJvYiBPZGVua2lyazwvbS1saXN0LWl0ZW0+XFxuICAgICAgICA8L20tbGlzdD5cXG5cXG4gICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgPHByZT5cXG4gICAgICAgICAgICAgICAgPGNvZGUgY2xhc3M9XFxcImh0bWxcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgJiN4M0M7bS1saXN0IGNsYXNzPSYjeDIyO2RlbW8tbGlzdC1pdGVtJiN4MjI7JiN4M0U7XFxuICAgICAgICAgICAgICAgICAgICAgICAgJiN4M0M7bS1saXN0LWl0ZW0gaWNvbj0mI3gyMjtwZXJzb24mI3gyMjsmI3gzRTtCcnlhbiBDcmFuc3RvbiYjeDNDOy9tLWxpc3QtaXRlbSYjeDNFO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICYjeDNDO20tbGlzdC1pdGVtIGljb249JiN4MjI7cGVyc29uJiN4MjI7JiN4M0U7QWFyb24gUGF1bCYjeDNDOy9tLWxpc3QtaXRlbSYjeDNFO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICYjeDNDO20tbGlzdC1pdGVtIGljb249JiN4MjI7cGVyc29uJiN4MjI7JiN4M0U7Qm9iIE9kZW5raXJrJiN4M0M7L20tbGlzdC1pdGVtJiN4M0U7XFxuICAgICAgICAgICAgICAgICAgICAmI3gzQzsvbS1saXN0JiN4M0U7XFxuICAgICAgICAgICAgICAgIDwvY29kZT5cXG4gICAgICAgICAgICA8L3ByZT5cXG4gICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgPGhyPlxcblxcbiAgICAgICAgPG0tbGlzdCBjbGFzcz1cXFwiZGVtby1saXN0LWl0ZW1cXFwiPlxcbiAgICAgICAgICAgIDxtLWxpc3QtaXRlbSBpY29uLWF2YXRhcj1cXFwicGVyc29uXFxcIj5CcnlhbiBDcmFuc3RvbjwvbS1saXN0LWl0ZW0+XFxuICAgICAgICAgICAgPG0tbGlzdC1pdGVtIGljb24tYXZhdGFyPVxcXCJwZXJzb25cXFwiPkFhcm9uIFBhdWw8L20tbGlzdC1pdGVtPlxcbiAgICAgICAgICAgIDxtLWxpc3QtaXRlbSBpY29uLWF2YXRhcj1cXFwicGVyc29uXFxcIj5Cb2IgT2Rlbmtpcms8L20tbGlzdC1pdGVtPlxcbiAgICAgICAgPC9tLWxpc3Q+XFxuXFxuICAgICAgICA8ZGl2PlxcbiAgICAgICAgICAgIDxwcmU+XFxuICAgICAgICAgICAgICAgIDxjb2RlIGNsYXNzPVxcXCJodG1sXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICYjeDNDO20tbGlzdCBjbGFzcz0mI3gyMjtkZW1vLWxpc3QtaXRlbSYjeDIyOyYjeDNFO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICYjeDNDO20tbGlzdC1pdGVtIGljb24tYXZhdGFyPSYjeDIyO3BlcnNvbiYjeDIyOyYjeDNFO0JyeWFuIENyYW5zdG9uJiN4M0M7L20tbGlzdC1pdGVtJiN4M0U7XFxuICAgICAgICAgICAgICAgICAgICAgICAgJiN4M0M7bS1saXN0LWl0ZW0gaWNvbi1hdmF0YXI9JiN4MjI7cGVyc29uJiN4MjI7JiN4M0U7QWFyb24gUGF1bCYjeDNDOy9tLWxpc3QtaXRlbSYjeDNFO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICYjeDNDO20tbGlzdC1pdGVtIGljb24tYXZhdGFyPSYjeDIyO3BlcnNvbiYjeDIyOyYjeDNFO0JvYiBPZGVua2lyayYjeDNDOy9tLWxpc3QtaXRlbSYjeDNFO1xcbiAgICAgICAgICAgICAgICAgICAgJiN4M0M7L20tbGlzdCYjeDNFO1xcbiAgICAgICAgICAgICAgICA8L2NvZGU+XFxuICAgICAgICAgICAgPC9wcmU+XFxuICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgIDxocj5cXG5cXG4gICAgICAgIDxtLWxpc3QgY2xhc3M9XFxcImRlbW8tbGlzdC1pdGVtXFxcIj5cXG4gICAgICAgICAgICA8bS1saXN0LWl0ZW0gaWNvbi1hdmF0YXI9XFxcInBlcnNvblxcXCIgdi1mb3I9XFxcInBlcnNvbiBpbiBwZW9wbGVcXFwiPlxcbiAgICAgICAgICAgICAgICB7e3BlcnNvbi5uYW1lfX1cXG5cXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XFxcImFjdGlvblxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8bS1zd2l0Y2ggdi1tb2RlbD1cXFwicGVyc29uLm9uXFxcIj48L20tc3dpdGNoPlxcbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxcbiAgICAgICAgICAgIDwvbS1saXN0LWl0ZW0+XFxuICAgICAgICA8L20tbGlzdD5cXG5cXG4gICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgPHByZSB2LXByZT5cXG4gICAgICAgICAgICAgICAgPGNvZGUgY2xhc3M9XFxcImh0bWxcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgJiN4M0M7bS1saXN0IGNsYXNzPSYjeDIyO2RlbW8tbGlzdC1pdGVtJiN4MjI7JiN4M0U7XFxuICAgICAgICAgICAgICAgICAgICAgICAgJiN4M0M7bS1saXN0LWl0ZW0gaWNvbi1hdmF0YXI9JiN4MjI7cGVyc29uJiN4MjI7IHYtZm9yPSYjeDIyO3BlcnNvbiBpbiBwZW9wbGUmI3gyMjsmI3gzRTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3twZXJzb24ubmFtZX19XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYjeDNDO3RlbXBsYXRlIHNsb3Q9JiN4MjI7YWN0aW9uJiN4MjI7JiN4M0U7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmI3gzQzttLXN3aXRjaCB2LW1vZGVsPSYjeDIyO3BlcnNvbi5vbiYjeDIyOyYjeDNFOyYjeDNDOy9tLXN3aXRjaCYjeDNFO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmI3gzQzsvdGVtcGxhdGUmI3gzRTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAmI3gzQzsvbS1saXN0LWl0ZW0mI3gzRTtcXG4gICAgICAgICAgICAgICAgICAgICYjeDNDOy9tLWxpc3QmI3gzRTtcXG4gICAgICAgICAgICAgICAgPC9jb2RlPlxcbiAgICAgICAgICAgIDwvcHJlPlxcbiAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICA8aHI+XFxuXFxuICAgICAgICA8bS1saXN0IGNsYXNzPVxcXCJkZW1vLWxpc3QtaXRlbVxcXCI+XFxuICAgICAgICAgICAgPG0tbGlzdC1pdGVtIGljb24tYXZhdGFyPVxcXCJwZXJzb25cXFwiIHYtZm9yPVxcXCJwZXJzb24gaW4gcGVvcGxlXFxcIiA6c3ViLXRpdGxlPVxcXCJwZXJzb24uc3ViXFxcIj5cXG4gICAgICAgICAgICAgICAge3twZXJzb24ubmFtZX19XFxuXFxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVxcXCJhY3Rpb25cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcIm1kbC1saXN0X19pdGVtLXNlY29uZGFyeS1hY3Rpb25cXFwiIGhyZWY9XFxcIiNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJtYXRlcmlhbC1pY29uc1xcXCI+c3RhcjwvaT5cXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXG4gICAgICAgICAgICA8L20tbGlzdC1pdGVtPlxcbiAgICAgICAgPC9tLWxpc3Q+XFxuXFxuICAgICAgICA8ZGl2PlxcbiAgICAgICAgICAgIDxwcmUgdi1wcmU+XFxuICAgICAgICAgICAgICAgIDxjb2RlIGNsYXNzPVxcXCJodG1sXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICYjeDNDO20tbGlzdCBjbGFzcz0mI3gyMjtkZW1vLWxpc3QtaXRlbSYjeDIyOyYjeDNFO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAmI3gzQzttLWxpc3QtaXRlbSBpY29uLWF2YXRhcj0mI3gyMjtwZXJzb24mI3gyMjsgdi1mb3I9JiN4MjI7cGVyc29uIGluIHBlb3BsZSYjeDIyOyA6c3ViLXRpdGxlPSYjeDIyO3BlcnNvbi5zdWImI3gyMjsmI3gzRTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3twZXJzb24ubmFtZX19XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYjeDNDO3RlbXBsYXRlIHNsb3Q9JiN4MjI7YWN0aW9uJiN4MjI7JiN4M0U7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmI3gzQzthIGNsYXNzPSYjeDIyO21kbC1saXN0X19pdGVtLXNlY29uZGFyeS1hY3Rpb24mI3gyMjsgaHJlZj0mI3gyMjsjJiN4MjI7JiN4M0U7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiN4M0M7aSBjbGFzcz0mI3gyMjttYXRlcmlhbC1pY29ucyYjeDIyOyYjeDNFO3N0YXImI3gzQzsvaSYjeDNFO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiN4M0M7L2EmI3gzRTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJiN4M0M7L3RlbXBsYXRlJiN4M0U7XFxuICAgICAgICAgICAgICAgICAgICAgICAgJiN4M0M7L20tbGlzdC1pdGVtJiN4M0U7XFxuICAgICAgICAgICAgICAgICAgICAmI3gzQzsvbS1saXN0JiN4M0U7XFxuICAgICAgICAgICAgICAgIDwvY29kZT5cXG4gICAgICAgICAgICA8L3ByZT5cXG4gICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgPGhyPlxcblxcbiAgICAgICAgPG0tbGlzdCBjbGFzcz1cXFwiZGVtby1saXN0LXRocmVlXFxcIj5cXG4gICAgICAgICAgICA8bS1saXN0LWl0ZW0gaWNvbi1hdmF0YXI9XFxcInBlcnNvblxcXCIgdi1mb3I9XFxcInBlcnNvbiBpbiBwZW9wbGVcXFwiIDp0ZXh0PVxcXCJwZXJzb24udGV4dFxcXCI+XFxuICAgICAgICAgICAgICAgIHt7cGVyc29uLm5hbWV9fVxcblxcbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cXFwiYWN0aW9uXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJtZGwtbGlzdF9faXRlbS1zZWNvbmRhcnktYWN0aW9uXFxcIiBocmVmPVxcXCIjXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwibWF0ZXJpYWwtaWNvbnNcXFwiPnN0YXI8L2k+XFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxuICAgICAgICAgICAgPC9tLWxpc3QtaXRlbT5cXG4gICAgICAgIDwvbS1saXN0PlxcblxcbiAgICAgICAgPGRpdj5cXG4gICAgICAgICAgICA8cHJlIHYtcHJlPlxcbiAgICAgICAgICAgICAgICA8Y29kZSBjbGFzcz1cXFwiaHRtbFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAmI3gzQzttLWxpc3QgY2xhc3M9JiN4MjI7ZGVtby1saXN0LXRocmVlJiN4MjI7JiN4M0U7XFxuICAgICAgICAgICAgICAgICAgICAgICAgJiN4M0M7bS1saXN0LWl0ZW0gaWNvbi1hdmF0YXI9JiN4MjI7cGVyc29uJiN4MjI7IHYtZm9yPSYjeDIyO3BlcnNvbiBpbiBwZW9wbGUmI3gyMjsgOnRleHQ9JiN4MjI7cGVyc29uLnRleHQmI3gyMjsmI3gzRTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3twZXJzb24ubmFtZX19XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYjeDNDO3RlbXBsYXRlIHNsb3Q9JiN4MjI7YWN0aW9uJiN4MjI7JiN4M0U7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmI3gzQzthIGNsYXNzPSYjeDIyO21kbC1saXN0X19pdGVtLXNlY29uZGFyeS1hY3Rpb24mI3gyMjsgaHJlZj0mI3gyMjsjJiN4MjI7JiN4M0U7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiN4M0M7aSBjbGFzcz0mI3gyMjttYXRlcmlhbC1pY29ucyYjeDIyOyYjeDNFO3N0YXImI3gzQzsvaSYjeDNFO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiN4M0M7L2EmI3gzRTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJiN4M0M7L3RlbXBsYXRlJiN4M0U7XFxuICAgICAgICAgICAgICAgICAgICAgICAgJiN4M0M7L20tbGlzdC1pdGVtJiN4M0U7XFxuICAgICAgICAgICAgICAgICAgICAmI3gzQzsvbS1saXN0JiN4M0U7XFxuICAgICAgICAgICAgICAgIDwvY29kZT5cXG4gICAgICAgICAgICA8L3ByZT5cXG4gICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgPG0tdGFibGUgc3R5bGU9XFxcIndpZHRoOiAxMDAlXFxcIj5cXG4gICAgICAgICAgICA8bS10YWJsZS1oZWFkPlxcbiAgICAgICAgICAgICAgICA8bS10YWJsZS1yb3c+XFxuICAgICAgICAgICAgICAgICAgICA8bS10YWJsZS1oPlByb3A8L20tdGFibGUtaD5cXG4gICAgICAgICAgICAgICAgICAgIDxtLXRhYmxlLWg+RWZmZWN0PC9tLXRhYmxlLWg+XFxuICAgICAgICAgICAgICAgICAgICA8bS10YWJsZS1oPlJlbWFya3M8L20tdGFibGUtaD5cXG4gICAgICAgICAgICAgICAgPC9tLXRhYmxlLXJvdz5cXG4gICAgICAgICAgICA8L20tdGFibGUtaGVhZD5cXG5cXG4gICAgICAgICAgICA8bS10YWJsZS1ib2R5PlxcbiAgICAgICAgICAgICAgICA8bS10YWJsZS1yb3cgdi1mb3I9XFxcInByb3AgaW4gZG9jXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxtLXRhYmxlLWNlbGw+e3twcm9wLm5hbWV9fTwvbS10YWJsZS1jZWxsPlxcbiAgICAgICAgICAgICAgICAgICAgPG0tdGFibGUtY2VsbD57e3Byb3AuZGVzY3JpcHRpb259fTwvbS10YWJsZS1jZWxsPlxcbiAgICAgICAgICAgICAgICAgICAgPG0tdGFibGUtY2VsbD57e3Byb3AucmVtYXJrfX08L20tdGFibGUtY2VsbD5cXG4gICAgICAgICAgICAgICAgPC9tLXRhYmxlLXJvdz5cXG4gICAgICAgICAgICA8L20tdGFibGUtYm9keT5cXG4gICAgICAgIDwvbS10YWJsZT5cXG4gICAgPC9kaXY+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c3R5bGU+XFxuLmRlbW8tbGlzdC1pdGVtIHtcXG4gIHdpZHRoOiAzMDBweDtcXG59XFxuXFxuLmRlbW8tbGlzdC10aHJlZSB7XFxuICB3aWR0aDogNjUwcHg7XFxufVxcbjwvc3R5bGU+XFxuXFxuPHNjcmlwdD5cXG4gICAgZXhwb3J0IGRlZmF1bHR7XFxuICAgICAgICBtZXRob2RzOiB7XFxuICAgICAgICB9LFxcbiAgICAgICAgbW91bnRlZCgpIHtcXG4gICAgICAgICAgICB0aGlzLiRlbC5xdWVyeVNlbGVjdG9yQWxsKCcuaHRtbCcpLmZvckVhY2goZWwgPT4gaGxqcy5oaWdobGlnaHRCbG9jayhlbCkpXFxuICAgICAgICB9LFxcbiAgICAgICAgZGF0YSgpe1xcbiAgICAgICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgICAgIHBlb3BsZTogW1xcbiAgICAgICAgICAgICAgICAgICAge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICduYW1lJzogJ0JyeWFuIENyYW5zdG9uJyxcXG4gICAgICAgICAgICAgICAgICAgICAgICAndGV4dCc6ICdCcnlhbiBDcmFuc3RvbiBwbGF5ZWQgdGhlIHJvbGUgb2YgV2FsdGVyIGluIEJyZWFraW5nIEJhZC4gSGUgaXMgYWxzbyBrbm93biBmb3IgcGxheWluZyBIYWwgaW4gTWFsY29tIGluIHRoZSBNaWRkbGUuJyxcXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjogdHJ1ZSxcXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWI6ICc2MiBFcGlzb2RlcycsXFxuICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICAgICAge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICduYW1lJzogJ0Fhcm9uIFBhdWwnLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdBYXJvbiBQYXVsIHBsYXllZCB0aGUgcm9sZSBvZiBKZXNzZSBpbiBCcmVha2luZyBCYWQuIEhlIGFsc28gZmVhdHVyZWQgaW4gdGhlIFxcXCJOZWVkIEZvciBTcGVlZFxcXCIgTW92aWUuJyxcXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjogZmFsc2UsXFxuICAgICAgICAgICAgICAgICAgICAgICAgc3ViOiAnNTIgRXBpc29kZXMnLFxcbiAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgICAgIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAnbmFtZSc6ICdCb2IgT2RlbmtpcmsnLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB0cnVlLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdCb2IgT2RpbmtyaWsgcGxheWVkIHRoZSByb2xlIG9mIFNhdWwgaW4gQnJlYWtpbmcgQmFkLiBEdWUgdG8gcHVibGljIGZvbmRuZXNzIGZvciB0aGUgY2hhcmFjdGVyLCBCb2Igc3RhcnMgaW4gaGlzIG93biBzaG93IG5vdywgY2FsbGVkIFxcXCJCZXR0ZXIgQ2FsbCBTYXVsXFxcIi4nLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YjogJzMyIEVwaXNvZGVzJyxcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIF0sXFxuXFxuICAgICAgICAgICAgICAgIGRvYzogW1xcbiAgICAgICAgICAgICAgICAgICAge25hbWU6ICdpY29uJywgZGVzY3JpcHRpb246ICdBIGljb24gZm9yIGEgbGlzdCBpdGVtJywgdGl0bGU6ICdPcHRpb25hbCd9LFxcbiAgICAgICAgICAgICAgICAgICAge25hbWU6ICdpY29uLWF2YXRhcicsIGRlc2NyaXB0aW9uOiAnQSBiaWcgaWNvbiBhdmF0YXIgZm9yIGxhIGxpc3QgaXRlbScsIHRpdGxlOiAnT3B0aW9uYWwnfSxcXG4gICAgICAgICAgICAgICAgICAgIHtuYW1lOiAndGV4dCcsIGRlc2NyaXB0aW9uOiAnQSBkZXNjcmlwdGlvbiB0ZXh0IGZvciBhIGxpc3QgaXRlbScsIHRpdGxlOiAnT3B0aW9uYWwnfSxcXG4gICAgICAgICAgICAgICAgICAgIHtuYW1lOiAnc3ViLXRpdGxlJywgZGVzY3JpcHRpb246ICdTdWJ0aXRsZSB0ZXh0IGZvciBhIGxpc3QgaXRlbScsIHRpdGxlOiAnT3B0aW9uYWwnfSxcXG4gICAgICAgICAgICAgICAgXVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbjwvc2NyaXB0PlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMmM4YWVhZTMhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9saXN0cy52dWVcbi8vIG1vZHVsZSBpZCA9IDY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8aDM+TGlzdHM8L2gzPlxuXG4gICAgICAgIDxtLWxpc3QgY2xhc3M9XCJkZW1vLWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgPG0tbGlzdC1pdGVtPkJyeWFuIENyYW5zdG9uPC9tLWxpc3QtaXRlbT5cbiAgICAgICAgICAgIDxtLWxpc3QtaXRlbT5BYXJvbiBQYXVsPC9tLWxpc3QtaXRlbT5cbiAgICAgICAgICAgIDxtLWxpc3QtaXRlbT5Cb2IgT2Rlbmtpcms8L20tbGlzdC1pdGVtPlxuICAgICAgICA8L20tbGlzdD5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHByZT5cbiAgICAgICAgICAgICAgICA8Y29kZSBjbGFzcz1cImh0bWxcIj5cbiAgICAgICAgICAgICAgICAgICAgJiN4M0M7bS1saXN0IGNsYXNzPSYjeDIyO2RlbW8tbGlzdC1pdGVtJiN4MjI7JiN4M0U7XG4gICAgICAgICAgICAgICAgICAgICAgICAmI3gzQzttLWxpc3QtaXRlbSYjeDNFO0JyeWFuIENyYW5zdG9uJiN4M0M7L20tbGlzdC1pdGVtJiN4M0U7XG4gICAgICAgICAgICAgICAgICAgICAgICAmI3gzQzttLWxpc3QtaXRlbSYjeDNFO0Fhcm9uIFBhdWwmI3gzQzsvbS1saXN0LWl0ZW0mI3gzRTtcbiAgICAgICAgICAgICAgICAgICAgICAgICYjeDNDO20tbGlzdC1pdGVtJiN4M0U7Qm9iIE9kZW5raXJrJiN4M0M7L20tbGlzdC1pdGVtJiN4M0U7XG4gICAgICAgICAgICAgICAgICAgICYjeDNDOy9tLWxpc3QmI3gzRTtcbiAgICAgICAgICAgICAgICA8L2NvZGU+XG4gICAgICAgICAgICA8L3ByZT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGhyPlxuXG4gICAgICAgIDxtLWxpc3QgY2xhc3M9XCJkZW1vLWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgPG0tbGlzdC1pdGVtIGljb249XCJwZXJzb25cIj5CcnlhbiBDcmFuc3RvbjwvbS1saXN0LWl0ZW0+XG4gICAgICAgICAgICA8bS1saXN0LWl0ZW0gaWNvbj1cInBlcnNvblwiPkFhcm9uIFBhdWw8L20tbGlzdC1pdGVtPlxuICAgICAgICAgICAgPG0tbGlzdC1pdGVtIGljb249XCJwZXJzb25cIj5Cb2IgT2Rlbmtpcms8L20tbGlzdC1pdGVtPlxuICAgICAgICA8L20tbGlzdD5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHByZT5cbiAgICAgICAgICAgICAgICA8Y29kZSBjbGFzcz1cImh0bWxcIj5cbiAgICAgICAgICAgICAgICAgICAgJiN4M0M7bS1saXN0IGNsYXNzPSYjeDIyO2RlbW8tbGlzdC1pdGVtJiN4MjI7JiN4M0U7XG4gICAgICAgICAgICAgICAgICAgICAgICAmI3gzQzttLWxpc3QtaXRlbSBpY29uPSYjeDIyO3BlcnNvbiYjeDIyOyYjeDNFO0JyeWFuIENyYW5zdG9uJiN4M0M7L20tbGlzdC1pdGVtJiN4M0U7XG4gICAgICAgICAgICAgICAgICAgICAgICAmI3gzQzttLWxpc3QtaXRlbSBpY29uPSYjeDIyO3BlcnNvbiYjeDIyOyYjeDNFO0Fhcm9uIFBhdWwmI3gzQzsvbS1saXN0LWl0ZW0mI3gzRTtcbiAgICAgICAgICAgICAgICAgICAgICAgICYjeDNDO20tbGlzdC1pdGVtIGljb249JiN4MjI7cGVyc29uJiN4MjI7JiN4M0U7Qm9iIE9kZW5raXJrJiN4M0M7L20tbGlzdC1pdGVtJiN4M0U7XG4gICAgICAgICAgICAgICAgICAgICYjeDNDOy9tLWxpc3QmI3gzRTtcbiAgICAgICAgICAgICAgICA8L2NvZGU+XG4gICAgICAgICAgICA8L3ByZT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGhyPlxuXG4gICAgICAgIDxtLWxpc3QgY2xhc3M9XCJkZW1vLWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgPG0tbGlzdC1pdGVtIGljb24tYXZhdGFyPVwicGVyc29uXCI+QnJ5YW4gQ3JhbnN0b248L20tbGlzdC1pdGVtPlxuICAgICAgICAgICAgPG0tbGlzdC1pdGVtIGljb24tYXZhdGFyPVwicGVyc29uXCI+QWFyb24gUGF1bDwvbS1saXN0LWl0ZW0+XG4gICAgICAgICAgICA8bS1saXN0LWl0ZW0gaWNvbi1hdmF0YXI9XCJwZXJzb25cIj5Cb2IgT2Rlbmtpcms8L20tbGlzdC1pdGVtPlxuICAgICAgICA8L20tbGlzdD5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHByZT5cbiAgICAgICAgICAgICAgICA8Y29kZSBjbGFzcz1cImh0bWxcIj5cbiAgICAgICAgICAgICAgICAgICAgJiN4M0M7bS1saXN0IGNsYXNzPSYjeDIyO2RlbW8tbGlzdC1pdGVtJiN4MjI7JiN4M0U7XG4gICAgICAgICAgICAgICAgICAgICAgICAmI3gzQzttLWxpc3QtaXRlbSBpY29uLWF2YXRhcj0mI3gyMjtwZXJzb24mI3gyMjsmI3gzRTtCcnlhbiBDcmFuc3RvbiYjeDNDOy9tLWxpc3QtaXRlbSYjeDNFO1xuICAgICAgICAgICAgICAgICAgICAgICAgJiN4M0M7bS1saXN0LWl0ZW0gaWNvbi1hdmF0YXI9JiN4MjI7cGVyc29uJiN4MjI7JiN4M0U7QWFyb24gUGF1bCYjeDNDOy9tLWxpc3QtaXRlbSYjeDNFO1xuICAgICAgICAgICAgICAgICAgICAgICAgJiN4M0M7bS1saXN0LWl0ZW0gaWNvbi1hdmF0YXI9JiN4MjI7cGVyc29uJiN4MjI7JiN4M0U7Qm9iIE9kZW5raXJrJiN4M0M7L20tbGlzdC1pdGVtJiN4M0U7XG4gICAgICAgICAgICAgICAgICAgICYjeDNDOy9tLWxpc3QmI3gzRTtcbiAgICAgICAgICAgICAgICA8L2NvZGU+XG4gICAgICAgICAgICA8L3ByZT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGhyPlxuXG4gICAgICAgIDxtLWxpc3QgY2xhc3M9XCJkZW1vLWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgPG0tbGlzdC1pdGVtIGljb24tYXZhdGFyPVwicGVyc29uXCIgdi1mb3I9XCJwZXJzb24gaW4gcGVvcGxlXCI+XG4gICAgICAgICAgICAgICAge3twZXJzb24ubmFtZX19XG5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cImFjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICA8bS1zd2l0Y2ggdi1tb2RlbD1cInBlcnNvbi5vblwiPjwvbS1zd2l0Y2g+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvbS1saXN0LWl0ZW0+XG4gICAgICAgIDwvbS1saXN0PlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cHJlIHYtcHJlPlxuICAgICAgICAgICAgICAgIDxjb2RlIGNsYXNzPVwiaHRtbFwiPlxuICAgICAgICAgICAgICAgICAgICAmI3gzQzttLWxpc3QgY2xhc3M9JiN4MjI7ZGVtby1saXN0LWl0ZW0mI3gyMjsmI3gzRTtcbiAgICAgICAgICAgICAgICAgICAgICAgICYjeDNDO20tbGlzdC1pdGVtIGljb24tYXZhdGFyPSYjeDIyO3BlcnNvbiYjeDIyOyB2LWZvcj0mI3gyMjtwZXJzb24gaW4gcGVvcGxlJiN4MjI7JiN4M0U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3twZXJzb24ubmFtZX19XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmI3gzQzt0ZW1wbGF0ZSBzbG90PSYjeDIyO2FjdGlvbiYjeDIyOyYjeDNFO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmI3gzQzttLXN3aXRjaCB2LW1vZGVsPSYjeDIyO3BlcnNvbi5vbiYjeDIyOyYjeDNFOyYjeDNDOy9tLXN3aXRjaCYjeDNFO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYjeDNDOy90ZW1wbGF0ZSYjeDNFO1xuICAgICAgICAgICAgICAgICAgICAgICAgJiN4M0M7L20tbGlzdC1pdGVtJiN4M0U7XG4gICAgICAgICAgICAgICAgICAgICYjeDNDOy9tLWxpc3QmI3gzRTtcbiAgICAgICAgICAgICAgICA8L2NvZGU+XG4gICAgICAgICAgICA8L3ByZT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGhyPlxuXG4gICAgICAgIDxtLWxpc3QgY2xhc3M9XCJkZW1vLWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgPG0tbGlzdC1pdGVtIGljb24tYXZhdGFyPVwicGVyc29uXCIgdi1mb3I9XCJwZXJzb24gaW4gcGVvcGxlXCIgOnN1Yi10aXRsZT1cInBlcnNvbi5zdWJcIj5cbiAgICAgICAgICAgICAgICB7e3BlcnNvbi5uYW1lfX1cblxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwiYWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibWRsLWxpc3RfX2l0ZW0tc2Vjb25kYXJ5LWFjdGlvblwiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+c3RhcjwvaT5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L20tbGlzdC1pdGVtPlxuICAgICAgICA8L20tbGlzdD5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHByZSB2LXByZT5cbiAgICAgICAgICAgICAgICA8Y29kZSBjbGFzcz1cImh0bWxcIj5cbiAgICAgICAgICAgICAgICAgICAgJiN4M0M7bS1saXN0IGNsYXNzPSYjeDIyO2RlbW8tbGlzdC1pdGVtJiN4MjI7JiN4M0U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgJiN4M0M7bS1saXN0LWl0ZW0gaWNvbi1hdmF0YXI9JiN4MjI7cGVyc29uJiN4MjI7IHYtZm9yPSYjeDIyO3BlcnNvbiBpbiBwZW9wbGUmI3gyMjsgOnN1Yi10aXRsZT0mI3gyMjtwZXJzb24uc3ViJiN4MjI7JiN4M0U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3twZXJzb24ubmFtZX19XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmI3gzQzt0ZW1wbGF0ZSBzbG90PSYjeDIyO2FjdGlvbiYjeDIyOyYjeDNFO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmI3gzQzthIGNsYXNzPSYjeDIyO21kbC1saXN0X19pdGVtLXNlY29uZGFyeS1hY3Rpb24mI3gyMjsgaHJlZj0mI3gyMjsjJiN4MjI7JiN4M0U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmI3gzQztpIGNsYXNzPSYjeDIyO21hdGVyaWFsLWljb25zJiN4MjI7JiN4M0U7c3RhciYjeDNDOy9pJiN4M0U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYjeDNDOy9hJiN4M0U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJiN4M0M7L3RlbXBsYXRlJiN4M0U7XG4gICAgICAgICAgICAgICAgICAgICAgICAmI3gzQzsvbS1saXN0LWl0ZW0mI3gzRTtcbiAgICAgICAgICAgICAgICAgICAgJiN4M0M7L20tbGlzdCYjeDNFO1xuICAgICAgICAgICAgICAgIDwvY29kZT5cbiAgICAgICAgICAgIDwvcHJlPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8aHI+XG5cbiAgICAgICAgPG0tbGlzdCBjbGFzcz1cImRlbW8tbGlzdC10aHJlZVwiPlxuICAgICAgICAgICAgPG0tbGlzdC1pdGVtIGljb24tYXZhdGFyPVwicGVyc29uXCIgdi1mb3I9XCJwZXJzb24gaW4gcGVvcGxlXCIgOnRleHQ9XCJwZXJzb24udGV4dFwiPlxuICAgICAgICAgICAgICAgIHt7cGVyc29uLm5hbWV9fVxuXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJhY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJtZGwtbGlzdF9faXRlbS1zZWNvbmRhcnktYWN0aW9uXCIgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5zdGFyPC9pPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvbS1saXN0LWl0ZW0+XG4gICAgICAgIDwvbS1saXN0PlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cHJlIHYtcHJlPlxuICAgICAgICAgICAgICAgIDxjb2RlIGNsYXNzPVwiaHRtbFwiPlxuICAgICAgICAgICAgICAgICAgICAmI3gzQzttLWxpc3QgY2xhc3M9JiN4MjI7ZGVtby1saXN0LXRocmVlJiN4MjI7JiN4M0U7XG4gICAgICAgICAgICAgICAgICAgICAgICAmI3gzQzttLWxpc3QtaXRlbSBpY29uLWF2YXRhcj0mI3gyMjtwZXJzb24mI3gyMjsgdi1mb3I9JiN4MjI7cGVyc29uIGluIHBlb3BsZSYjeDIyOyA6dGV4dD0mI3gyMjtwZXJzb24udGV4dCYjeDIyOyYjeDNFO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7cGVyc29uLm5hbWV9fVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJiN4M0M7dGVtcGxhdGUgc2xvdD0mI3gyMjthY3Rpb24mI3gyMjsmI3gzRTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiN4M0M7YSBjbGFzcz0mI3gyMjttZGwtbGlzdF9faXRlbS1zZWNvbmRhcnktYWN0aW9uJiN4MjI7IGhyZWY9JiN4MjI7IyYjeDIyOyYjeDNFO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiN4M0M7aSBjbGFzcz0mI3gyMjttYXRlcmlhbC1pY29ucyYjeDIyOyYjeDNFO3N0YXImI3gzQzsvaSYjeDNFO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmI3gzQzsvYSYjeDNFO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYjeDNDOy90ZW1wbGF0ZSYjeDNFO1xuICAgICAgICAgICAgICAgICAgICAgICAgJiN4M0M7L20tbGlzdC1pdGVtJiN4M0U7XG4gICAgICAgICAgICAgICAgICAgICYjeDNDOy9tLWxpc3QmI3gzRTtcbiAgICAgICAgICAgICAgICA8L2NvZGU+XG4gICAgICAgICAgICA8L3ByZT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPG0tdGFibGUgc3R5bGU9XCJ3aWR0aDogMTAwJVwiPlxuICAgICAgICAgICAgPG0tdGFibGUtaGVhZD5cbiAgICAgICAgICAgICAgICA8bS10YWJsZS1yb3c+XG4gICAgICAgICAgICAgICAgICAgIDxtLXRhYmxlLWg+UHJvcDwvbS10YWJsZS1oPlxuICAgICAgICAgICAgICAgICAgICA8bS10YWJsZS1oPkVmZmVjdDwvbS10YWJsZS1oPlxuICAgICAgICAgICAgICAgICAgICA8bS10YWJsZS1oPlJlbWFya3M8L20tdGFibGUtaD5cbiAgICAgICAgICAgICAgICA8L20tdGFibGUtcm93PlxuICAgICAgICAgICAgPC9tLXRhYmxlLWhlYWQ+XG5cbiAgICAgICAgICAgIDxtLXRhYmxlLWJvZHk+XG4gICAgICAgICAgICAgICAgPG0tdGFibGUtcm93IHYtZm9yPVwicHJvcCBpbiBkb2NcIj5cbiAgICAgICAgICAgICAgICAgICAgPG0tdGFibGUtY2VsbD57e3Byb3AubmFtZX19PC9tLXRhYmxlLWNlbGw+XG4gICAgICAgICAgICAgICAgICAgIDxtLXRhYmxlLWNlbGw+e3twcm9wLmRlc2NyaXB0aW9ufX08L20tdGFibGUtY2VsbD5cbiAgICAgICAgICAgICAgICAgICAgPG0tdGFibGUtY2VsbD57e3Byb3AucmVtYXJrfX08L20tdGFibGUtY2VsbD5cbiAgICAgICAgICAgICAgICA8L20tdGFibGUtcm93PlxuICAgICAgICAgICAgPC9tLXRhYmxlLWJvZHk+XG4gICAgICAgIDwvbS10YWJsZT5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZT5cbi5kZW1vLWxpc3QtaXRlbSB7XG4gIHdpZHRoOiAzMDBweDtcbn1cblxuLmRlbW8tbGlzdC10aHJlZSB7XG4gIHdpZHRoOiA2NTBweDtcbn1cbjwvc3R5bGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHR7XG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIHRoaXMuJGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5odG1sJykuZm9yRWFjaChlbCA9PiBobGpzLmhpZ2hsaWdodEJsb2NrKGVsKSlcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YSgpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBwZW9wbGU6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ25hbWUnOiAnQnJ5YW4gQ3JhbnN0b24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQnOiAnQnJ5YW4gQ3JhbnN0b24gcGxheWVkIHRoZSByb2xlIG9mIFdhbHRlciBpbiBCcmVha2luZyBCYWQuIEhlIGlzIGFsc28ga25vd24gZm9yIHBsYXlpbmcgSGFsIGluIE1hbGNvbSBpbiB0aGUgTWlkZGxlLicsXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YjogJzYyIEVwaXNvZGVzJyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ25hbWUnOiAnQWFyb24gUGF1bCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnQWFyb24gUGF1bCBwbGF5ZWQgdGhlIHJvbGUgb2YgSmVzc2UgaW4gQnJlYWtpbmcgQmFkLiBIZSBhbHNvIGZlYXR1cmVkIGluIHRoZSBcIk5lZWQgRm9yIFNwZWVkXCIgTW92aWUuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YjogJzUyIEVwaXNvZGVzJyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ25hbWUnOiAnQm9iIE9kZW5raXJrJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0JvYiBPZGlua3JpayBwbGF5ZWQgdGhlIHJvbGUgb2YgU2F1bCBpbiBCcmVha2luZyBCYWQuIER1ZSB0byBwdWJsaWMgZm9uZG5lc3MgZm9yIHRoZSBjaGFyYWN0ZXIsIEJvYiBzdGFycyBpbiBoaXMgb3duIHNob3cgbm93LCBjYWxsZWQgXCJCZXR0ZXIgQ2FsbCBTYXVsXCIuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YjogJzMyIEVwaXNvZGVzJyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuXG4gICAgICAgICAgICAgICAgZG9jOiBbXG4gICAgICAgICAgICAgICAgICAgIHtuYW1lOiAnaWNvbicsIGRlc2NyaXB0aW9uOiAnQSBpY29uIGZvciBhIGxpc3QgaXRlbScsIHRpdGxlOiAnT3B0aW9uYWwnfSxcbiAgICAgICAgICAgICAgICAgICAge25hbWU6ICdpY29uLWF2YXRhcicsIGRlc2NyaXB0aW9uOiAnQSBiaWcgaWNvbiBhdmF0YXIgZm9yIGxhIGxpc3QgaXRlbScsIHRpdGxlOiAnT3B0aW9uYWwnfSxcbiAgICAgICAgICAgICAgICAgICAge25hbWU6ICd0ZXh0JywgZGVzY3JpcHRpb246ICdBIGRlc2NyaXB0aW9uIHRleHQgZm9yIGEgbGlzdCBpdGVtJywgdGl0bGU6ICdPcHRpb25hbCd9LFxuICAgICAgICAgICAgICAgICAgICB7bmFtZTogJ3N1Yi10aXRsZScsIGRlc2NyaXB0aW9uOiAnU3VidGl0bGUgdGV4dCBmb3IgYSBsaXN0IGl0ZW0nLCB0aXRsZTogJ09wdGlvbmFsJ30sXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbGlzdHMudnVlPzVkYjcyZGMwIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ2gzJywgW192bS5fdihcIkxpc3RzXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtLWxpc3QnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZGVtby1saXN0LWl0ZW1cIlxuICB9LCBbX2MoJ20tbGlzdC1pdGVtJywgW192bS5fdihcIkJyeWFuIENyYW5zdG9uXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtLWxpc3QtaXRlbScsIFtfdm0uX3YoXCJBYXJvbiBQYXVsXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtLWxpc3QtaXRlbScsIFtfdm0uX3YoXCJCb2IgT2RlbmtpcmtcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfdm0uX20oMCksIF92bS5fdihcIiBcIiksIF9jKCdocicpLCBfdm0uX3YoXCIgXCIpLCBfYygnbS1saXN0Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRlbW8tbGlzdC1pdGVtXCJcbiAgfSwgW19jKCdtLWxpc3QtaXRlbScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJpY29uXCI6IFwicGVyc29uXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJCcnlhbiBDcmFuc3RvblwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS1saXN0LWl0ZW0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWNvblwiOiBcInBlcnNvblwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiQWFyb24gUGF1bFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS1saXN0LWl0ZW0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWNvblwiOiBcInBlcnNvblwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiQm9iIE9kZW5raXJrXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9tKDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnaHInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tbGlzdCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkZW1vLWxpc3QtaXRlbVwiXG4gIH0sIFtfYygnbS1saXN0LWl0ZW0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWNvbi1hdmF0YXJcIjogXCJwZXJzb25cIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkJyeWFuIENyYW5zdG9uXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtLWxpc3QtaXRlbScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJpY29uLWF2YXRhclwiOiBcInBlcnNvblwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiQWFyb24gUGF1bFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS1saXN0LWl0ZW0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWNvbi1hdmF0YXJcIjogXCJwZXJzb25cIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkJvYiBPZGVua2lya1wiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF92bS5fbSgyKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2hyJyksIF92bS5fdihcIiBcIiksIF9jKCdtLWxpc3QnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZGVtby1saXN0LWl0ZW1cIlxuICB9LCBfdm0uX2woKF92bS5wZW9wbGUpLCBmdW5jdGlvbihwZXJzb24pIHtcbiAgICByZXR1cm4gX2MoJ20tbGlzdC1pdGVtJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJpY29uLWF2YXRhclwiOiBcInBlcnNvblwiXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgIFwiICsgX3ZtLl9zKHBlcnNvbi5uYW1lKSArIFwiXFxuXFxuICAgICAgICAgICAgXCIpLCBfYygndGVtcGxhdGUnLCB7XG4gICAgICBzbG90OiBcImFjdGlvblwiXG4gICAgfSwgW19jKCdtLXN3aXRjaCcsIHtcbiAgICAgIG1vZGVsOiB7XG4gICAgICAgIHZhbHVlOiAocGVyc29uLm9uKSxcbiAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgIHBlcnNvbi5vbiA9ICQkdlxuICAgICAgICB9LFxuICAgICAgICBleHByZXNzaW9uOiBcInBlcnNvbi5vblwiXG4gICAgICB9XG4gICAgfSldLCAxKV0sIDIpXG4gIH0pKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9tKDMpLCBfdm0uX3YoXCIgXCIpLCBfYygnaHInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tbGlzdCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkZW1vLWxpc3QtaXRlbVwiXG4gIH0sIF92bS5fbCgoX3ZtLnBlb3BsZSksIGZ1bmN0aW9uKHBlcnNvbikge1xuICAgIHJldHVybiBfYygnbS1saXN0LWl0ZW0nLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcImljb24tYXZhdGFyXCI6IFwicGVyc29uXCIsXG4gICAgICAgIFwic3ViLXRpdGxlXCI6IHBlcnNvbi5zdWJcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgXCIgKyBfdm0uX3MocGVyc29uLm5hbWUpICsgXCJcXG5cXG4gICAgICAgICAgICBcIiksIF9jKCd0ZW1wbGF0ZScsIHtcbiAgICAgIHNsb3Q6IFwiYWN0aW9uXCJcbiAgICB9LCBbX2MoJ2EnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJtZGwtbGlzdF9faXRlbS1zZWNvbmRhcnktYWN0aW9uXCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcImhyZWZcIjogXCIjXCJcbiAgICAgIH1cbiAgICB9LCBbX2MoJ2knLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJtYXRlcmlhbC1pY29uc1wiXG4gICAgfSwgW192bS5fdihcInN0YXJcIildKV0pXSldLCAyKVxuICB9KSksIF92bS5fdihcIiBcIiksIF92bS5fbSg0KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2hyJyksIF92bS5fdihcIiBcIiksIF9jKCdtLWxpc3QnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZGVtby1saXN0LXRocmVlXCJcbiAgfSwgX3ZtLl9sKChfdm0ucGVvcGxlKSwgZnVuY3Rpb24ocGVyc29uKSB7XG4gICAgcmV0dXJuIF9jKCdtLWxpc3QtaXRlbScsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwiaWNvbi1hdmF0YXJcIjogXCJwZXJzb25cIixcbiAgICAgICAgXCJ0ZXh0XCI6IHBlcnNvbi50ZXh0XG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgIFwiICsgX3ZtLl9zKHBlcnNvbi5uYW1lKSArIFwiXFxuXFxuICAgICAgICAgICAgXCIpLCBfYygndGVtcGxhdGUnLCB7XG4gICAgICBzbG90OiBcImFjdGlvblwiXG4gICAgfSwgW19jKCdhJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWRsLWxpc3RfX2l0ZW0tc2Vjb25kYXJ5LWFjdGlvblwiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJocmVmXCI6IFwiI1wiXG4gICAgICB9XG4gICAgfSwgW19jKCdpJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWF0ZXJpYWwtaWNvbnNcIlxuICAgIH0sIFtfdm0uX3YoXCJzdGFyXCIpXSldKV0pXSwgMilcbiAgfSkpLCBfdm0uX3YoXCIgXCIpLCBfdm0uX20oNSksIF92bS5fdihcIiBcIiksIF9jKCdtLXRhYmxlJywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcIndpZHRoXCI6IFwiMTAwJVwiXG4gICAgfVxuICB9LCBbX2MoJ20tdGFibGUtaGVhZCcsIFtfYygnbS10YWJsZS1yb3cnLCBbX2MoJ20tdGFibGUtaCcsIFtfdm0uX3YoXCJQcm9wXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtLXRhYmxlLWgnLCBbX3ZtLl92KFwiRWZmZWN0XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtLXRhYmxlLWgnLCBbX3ZtLl92KFwiUmVtYXJrc1wiKV0pXSwgMSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tdGFibGUtYm9keScsIF92bS5fbCgoX3ZtLmRvYyksIGZ1bmN0aW9uKHByb3ApIHtcbiAgICByZXR1cm4gX2MoJ20tdGFibGUtcm93JywgW19jKCdtLXRhYmxlLWNlbGwnLCBbX3ZtLl92KF92bS5fcyhwcm9wLm5hbWUpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS10YWJsZS1jZWxsJywgW192bS5fdihfdm0uX3MocHJvcC5kZXNjcmlwdGlvbikpXSksIF92bS5fdihcIiBcIiksIF9jKCdtLXRhYmxlLWNlbGwnLCBbX3ZtLl92KF92bS5fcyhwcm9wLnJlbWFyaykpXSldLCAxKVxuICB9KSldLCAxKV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygncHJlJywgW192bS5fdihcIlxcbiAgICAgICAgICAgIFwiKSwgX2MoJ2NvZGUnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaHRtbFwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgPG0tbGlzdCBjbGFzcz1cXFwiZGVtby1saXN0LWl0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPG0tbGlzdC1pdGVtPkJyeWFuIENyYW5zdG9uPC9tLWxpc3QtaXRlbT5cXG4gICAgICAgICAgICAgICAgICAgIDxtLWxpc3QtaXRlbT5BYXJvbiBQYXVsPC9tLWxpc3QtaXRlbT5cXG4gICAgICAgICAgICAgICAgICAgIDxtLWxpc3QtaXRlbT5Cb2IgT2Rlbmtpcms8L20tbGlzdC1pdGVtPlxcbiAgICAgICAgICAgICAgICA8L20tbGlzdD5cXG4gICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiXFxuICAgICAgICBcIildKV0pXG59LGZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygncHJlJywgW192bS5fdihcIlxcbiAgICAgICAgICAgIFwiKSwgX2MoJ2NvZGUnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaHRtbFwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgPG0tbGlzdCBjbGFzcz1cXFwiZGVtby1saXN0LWl0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPG0tbGlzdC1pdGVtIGljb249XFxcInBlcnNvblxcXCI+QnJ5YW4gQ3JhbnN0b248L20tbGlzdC1pdGVtPlxcbiAgICAgICAgICAgICAgICAgICAgPG0tbGlzdC1pdGVtIGljb249XFxcInBlcnNvblxcXCI+QWFyb24gUGF1bDwvbS1saXN0LWl0ZW0+XFxuICAgICAgICAgICAgICAgICAgICA8bS1saXN0LWl0ZW0gaWNvbj1cXFwicGVyc29uXFxcIj5Cb2IgT2Rlbmtpcms8L20tbGlzdC1pdGVtPlxcbiAgICAgICAgICAgICAgICA8L20tbGlzdD5cXG4gICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiXFxuICAgICAgICBcIildKV0pXG59LGZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygncHJlJywgW192bS5fdihcIlxcbiAgICAgICAgICAgIFwiKSwgX2MoJ2NvZGUnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaHRtbFwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgPG0tbGlzdCBjbGFzcz1cXFwiZGVtby1saXN0LWl0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPG0tbGlzdC1pdGVtIGljb24tYXZhdGFyPVxcXCJwZXJzb25cXFwiPkJyeWFuIENyYW5zdG9uPC9tLWxpc3QtaXRlbT5cXG4gICAgICAgICAgICAgICAgICAgIDxtLWxpc3QtaXRlbSBpY29uLWF2YXRhcj1cXFwicGVyc29uXFxcIj5BYXJvbiBQYXVsPC9tLWxpc3QtaXRlbT5cXG4gICAgICAgICAgICAgICAgICAgIDxtLWxpc3QtaXRlbSBpY29uLWF2YXRhcj1cXFwicGVyc29uXFxcIj5Cb2IgT2Rlbmtpcms8L20tbGlzdC1pdGVtPlxcbiAgICAgICAgICAgICAgICA8L20tbGlzdD5cXG4gICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiXFxuICAgICAgICBcIildKV0pXG59LGZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygncHJlJywge1xuICAgIHByZTogdHJ1ZVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgXCIpLCBfYygnY29kZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJjbGFzc1wiOiBcImh0bWxcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICA8bS1saXN0IGNsYXNzPVxcXCJkZW1vLWxpc3QtaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8bS1saXN0LWl0ZW0gaWNvbi1hdmF0YXI9XFxcInBlcnNvblxcXCIgdi1mb3I9XFxcInBlcnNvbiBpbiBwZW9wbGVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7cGVyc29uLm5hbWV9fVxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVxcXCJhY3Rpb25cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bS1zd2l0Y2ggdi1tb2RlbD1cXFwicGVyc29uLm9uXFxcIj48L20tc3dpdGNoPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxuICAgICAgICAgICAgICAgICAgICA8L20tbGlzdC1pdGVtPlxcbiAgICAgICAgICAgICAgICA8L20tbGlzdD5cXG4gICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiXFxuICAgICAgICBcIildKV0pXG59LGZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygncHJlJywge1xuICAgIHByZTogdHJ1ZVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgXCIpLCBfYygnY29kZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJjbGFzc1wiOiBcImh0bWxcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICA8bS1saXN0IGNsYXNzPVxcXCJkZW1vLWxpc3QtaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgPG0tbGlzdC1pdGVtIGljb24tYXZhdGFyPVxcXCJwZXJzb25cXFwiIHYtZm9yPVxcXCJwZXJzb24gaW4gcGVvcGxlXFxcIiA6c3ViLXRpdGxlPVxcXCJwZXJzb24uc3ViXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICB7e3BlcnNvbi5uYW1lfX1cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cXFwiYWN0aW9uXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcIm1kbC1saXN0X19pdGVtLXNlY29uZGFyeS1hY3Rpb25cXFwiIGhyZWY9XFxcIiNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcIm1hdGVyaWFsLWljb25zXFxcIj5zdGFyPC9pPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXG4gICAgICAgICAgICAgICAgICAgIDwvbS1saXN0LWl0ZW0+XFxuICAgICAgICAgICAgICAgIDwvbS1saXN0PlxcbiAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCJcXG4gICAgICAgIFwiKV0pXSlcbn0sZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW19jKCdwcmUnLCB7XG4gICAgcHJlOiB0cnVlXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBcIiksIF9jKCdjb2RlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImNsYXNzXCI6IFwiaHRtbFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIDxtLWxpc3QgY2xhc3M9XFxcImRlbW8tbGlzdC10aHJlZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8bS1saXN0LWl0ZW0gaWNvbi1hdmF0YXI9XFxcInBlcnNvblxcXCIgdi1mb3I9XFxcInBlcnNvbiBpbiBwZW9wbGVcXFwiIDp0ZXh0PVxcXCJwZXJzb24udGV4dFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAge3twZXJzb24ubmFtZX19XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XFxcImFjdGlvblxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJtZGwtbGlzdF9faXRlbS1zZWNvbmRhcnktYWN0aW9uXFxcIiBocmVmPVxcXCIjXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJtYXRlcmlhbC1pY29uc1xcXCI+c3RhcjwvaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxuICAgICAgICAgICAgICAgICAgICA8L20tbGlzdC1pdGVtPlxcbiAgICAgICAgICAgICAgICA8L20tbGlzdD5cXG4gICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiXFxuICAgICAgICBcIildKV0pXG59XX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMmM4YWVhZTNcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTJjOGFlYWUzIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9saXN0cy52dWVcbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=