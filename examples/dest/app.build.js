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
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _vueRouter = __webpack_require__(1);
	
	var _vueRouter2 = _interopRequireDefault(_vueRouter);
	
	var _vueResource = __webpack_require__(3);
	
	var _vueResource2 = _interopRequireDefault(_vueResource);
	
	var _usage = __webpack_require__(4);
	
	var _usage2 = _interopRequireDefault(_usage);
	
	var _nav = __webpack_require__(7);
	
	var _nav2 = _interopRequireDefault(_nav);
	
	var _textfields = __webpack_require__(11);
	
	var _textfields2 = _interopRequireDefault(_textfields);
	
	var _buttons = __webpack_require__(14);
	
	var _buttons2 = _interopRequireDefault(_buttons);
	
	var _snackbar = __webpack_require__(17);
	
	var _snackbar2 = _interopRequireDefault(_snackbar);
	
	var _selects = __webpack_require__(20);
	
	var _selects2 = _interopRequireDefault(_selects);
	
	var _sliders = __webpack_require__(23);
	
	var _sliders2 = _interopRequireDefault(_sliders);
	
	var _badges = __webpack_require__(26);
	
	var _badges2 = _interopRequireDefault(_badges);
	
	var _menu = __webpack_require__(29);
	
	var _menu2 = _interopRequireDefault(_menu);
	
	var _loading = __webpack_require__(36);
	
	var _loading2 = _interopRequireDefault(_loading);
	
	var _toggles = __webpack_require__(39);
	
	var _toggles2 = _interopRequireDefault(_toggles);
	
	var _tabs = __webpack_require__(42);
	
	var _tabs2 = _interopRequireDefault(_tabs);
	
	var _tooltips = __webpack_require__(45);
	
	var _tooltips2 = _interopRequireDefault(_tooltips);
	
	var _table = __webpack_require__(48);
	
	var _table2 = _interopRequireDefault(_table);
	
	var _dialogs = __webpack_require__(51);
	
	var _dialogs2 = _interopRequireDefault(_dialogs);
	
	var _cards = __webpack_require__(54);
	
	var _cards2 = _interopRequireDefault(_cards);
	
	var _chips = __webpack_require__(59);
	
	var _chips2 = _interopRequireDefault(_chips);
	
	var _lists = __webpack_require__(62);
	
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

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	  * vue-router v2.1.2
	  * (c) 2017 Evan You
	  * @license MIT
	  */
	'use strict';
	
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
	
	    data.routerView = true
	
	    var name = props.name
	    var route = parent.$route
	    var cache = parent._routerViewCache || (parent._routerViewCache = {})
	
	    // determine current view depth, also check to see if the tree
	    // has been toggled inactive but kept-alive.
	    var depth = 0
	    var inactive = false
	    while (parent) {
	      if (parent.$vnode && parent.$vnode.data.routerView) {
	        depth++
	      }
	      if (parent._inactive) {
	        inactive = true
	      }
	      parent = parent.$parent
	    }
	    data.routerViewDepth = depth
	
	    // render previous view if the tree is inactive and kept-alive
	    if (inactive) {
	      return h(cache[name], data, children)
	    }
	
	    var matched = route.matched[depth]
	    // render empty node if no matched route
	    if (!matched) {
	      cache[name] = null
	      return h()
	    }
	
	    var component = cache[name] = matched.components[name]
	
	    // inject instance registration hooks
	    var hooks = data.hook || (data.hook = {})
	    hooks.init = function (vnode) {
	      matched.instances[name] = vnode.child
	    }
	    hooks.prepatch = function (oldVnode, vnode) {
	      matched.instances[name] = vnode.child
	    }
	    hooks.destroy = function (vnode) {
	      if (matched.instances[name] === vnode.child) {
	        matched.instances[name] = undefined
	      }
	    }
	
	    return h(component, data, children)
	  }
	}
	
	/*  */
	
	function assert (condition, message) {
	  if (!condition) {
	    throw new Error(("[vue-router] " + message))
	  }
	}
	
	function warn (condition, message) {
	  if (!condition) {
	    typeof console !== 'undefined' && console.warn(("[vue-router] " + message))
	  }
	}
	
	/*  */
	
	var encode = encodeURIComponent
	var decode = decodeURIComponent
	
	function resolveQuery (
	  query,
	  extraQuery
	) {
	  if ( extraQuery === void 0 ) extraQuery = {};
	
	  if (query) {
	    var parsedQuery
	    try {
	      parsedQuery = parseQuery(query)
	    } catch (e) {
	      process.env.NODE_ENV !== 'production' && warn(false, e.message)
	      parsedQuery = {}
	    }
	    for (var key in extraQuery) {
	      parsedQuery[key] = extraQuery[key]
	    }
	    return parsedQuery
	  } else {
	    return extraQuery
	  }
	}
	
	function parseQuery (query) {
	  var res = {}
	
	  query = query.trim().replace(/^(\?|#|&)/, '')
	
	  if (!query) {
	    return res
	  }
	
	  query.split('&').forEach(function (param) {
	    var parts = param.replace(/\+/g, ' ').split('=')
	    var key = decode(parts.shift())
	    var val = parts.length > 0
	      ? decode(parts.join('='))
	      : null
	
	    if (res[key] === undefined) {
	      res[key] = val
	    } else if (Array.isArray(res[key])) {
	      res[key].push(val)
	    } else {
	      res[key] = [res[key], val]
	    }
	  })
	
	  return res
	}
	
	function stringifyQuery (obj) {
	  var res = obj ? Object.keys(obj).map(function (key) {
	    var val = obj[key]
	
	    if (val === undefined) {
	      return ''
	    }
	
	    if (val === null) {
	      return encode(key)
	    }
	
	    if (Array.isArray(val)) {
	      var result = []
	      val.slice().forEach(function (val2) {
	        if (val2 === undefined) {
	          return
	        }
	        if (val2 === null) {
	          result.push(encode(key))
	        } else {
	          result.push(encode(key) + '=' + encode(val2))
	        }
	      })
	      return result.join('&')
	    }
	
	    return encode(key) + '=' + encode(val)
	  }).filter(function (x) { return x.length > 0; }).join('&') : null
	  return res ? ("?" + res) : ''
	}
	
	/*  */
	
	var trailingSlashRE = /\/?$/
	
	function createRoute (
	  record,
	  location,
	  redirectedFrom
	) {
	  var route = {
	    name: location.name || (record && record.name),
	    meta: (record && record.meta) || {},
	    path: location.path || '/',
	    hash: location.hash || '',
	    query: location.query || {},
	    params: location.params || {},
	    fullPath: getFullPath(location),
	    matched: record ? formatMatch(record) : []
	  }
	  if (redirectedFrom) {
	    route.redirectedFrom = getFullPath(redirectedFrom)
	  }
	  return Object.freeze(route)
	}
	
	// the starting route that represents the initial state
	var START = createRoute(null, {
	  path: '/'
	})
	
	function formatMatch (record) {
	  var res = []
	  while (record) {
	    res.unshift(record)
	    record = record.parent
	  }
	  return res
	}
	
	function getFullPath (ref) {
	  var path = ref.path;
	  var query = ref.query; if ( query === void 0 ) query = {};
	  var hash = ref.hash; if ( hash === void 0 ) hash = '';
	
	  return (path || '/') + stringifyQuery(query) + hash
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
	
	  var aKeys = Object.keys(a)
	  var bKeys = Object.keys(b)
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
	var toTypes = [String, Object]
	
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
	    event: {
	      type: [String, Array],
	      default: 'click'
	    }
	  },
	  render: function render (h) {
	    var this$1 = this;
	
	    var router = this.$router
	    var current = this.$route
	    var ref = router.resolve(this.to, current, this.append);
	    var normalizedTo = ref.normalizedTo;
	    var resolved = ref.resolved;
	    var href = ref.href;
	    var classes = {}
	    var activeClass = this.activeClass || router.options.linkActiveClass || 'router-link-active'
	    var compareTarget = normalizedTo.path ? createRoute(null, normalizedTo) : resolved
	    classes[activeClass] = this.exact
	      ? isSameRoute(current, compareTarget)
	      : isIncludedRoute(current, compareTarget)
	
	    var handler = function (e) {
	      if (guardEvent(e)) {
	        if (this$1.replace) {
	          router.replace(normalizedTo)
	        } else {
	          router.push(normalizedTo)
	        }
	      }
	    }
	
	    var on = { click: guardEvent }
	    if (Array.isArray(this.event)) {
	      this.event.forEach(function (e) { on[e] = handler })
	    } else {
	      on[this.event] = handler
	    }
	
	    var data = {
	      class: classes
	    }
	
	    if (this.tag === 'a') {
	      data.on = on
	      data.attrs = { href: href }
	    } else {
	      // find the first <a> child and apply listener and href
	      var a = findAnchor(this.$slots.default)
	      if (a) {
	        // in case the <a> is a static node
	        a.isStatic = false
	        var extend = _Vue.util.extend
	        var aData = a.data = extend({}, a.data)
	        aData.on = on
	        var aAttrs = a.data.attrs = extend({}, a.data.attrs)
	        aAttrs.href = href
	      } else {
	        // doesn't have <a> child, apply listener to self
	        data.on = on
	      }
	    }
	
	    return h(this.tag, data, this.$slots.default)
	  }
	}
	
	function guardEvent (e) {
	  // don't redirect with control keys
	  /* istanbul ignore if */
	  if (e.metaKey || e.ctrlKey || e.shiftKey) { return }
	  // don't redirect when preventDefault called
	  /* istanbul ignore if */
	  if (e.defaultPrevented) { return }
	  // don't redirect on right click
	  /* istanbul ignore if */
	  if (e.button !== undefined && e.button !== 0) { return }
	  // don't redirect if `target="_blank"`
	  /* istanbul ignore if */
	  if (e.target && e.target.getAttribute) {
	    var target = e.target.getAttribute('target')
	    if (/\b_blank\b/i.test(target)) { return }
	  }
	
	  e.preventDefault()
	  return true
	}
	
	function findAnchor (children) {
	  if (children) {
	    var child
	    for (var i = 0; i < children.length; i++) {
	      child = children[i]
	      if (child.tag === 'a') {
	        return child
	      }
	      if (child.children && (child = findAnchor(child.children))) {
	        return child
	      }
	    }
	  }
	}
	
	var _Vue
	
	function install (Vue) {
	  if (install.installed) { return }
	  install.installed = true
	
	  _Vue = Vue
	
	  Object.defineProperty(Vue.prototype, '$router', {
	    get: function get () { return this.$root._router }
	  })
	
	  Object.defineProperty(Vue.prototype, '$route', {
	    get: function get$1 () { return this.$root._route }
	  })
	
	  Vue.mixin({
	    beforeCreate: function beforeCreate () {
	      if (this.$options.router) {
	        this._router = this.$options.router
	        this._router.init(this)
	        Vue.util.defineReactive(this, '_route', this._router.history.current)
	      }
	    }
	  })
	
	  Vue.component('router-view', View)
	  Vue.component('router-link', Link)
	
	  var strats = Vue.config.optionMergeStrategies
	  // use the same hook merging strategy for route hooks
	  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.created
	}
	
	/*  */
	
	function resolvePath (
	  relative,
	  base,
	  append
	) {
	  if (relative.charAt(0) === '/') {
	    return relative
	  }
	
	  if (relative.charAt(0) === '?' || relative.charAt(0) === '#') {
	    return base + relative
	  }
	
	  var stack = base.split('/')
	
	  // remove trailing segment if:
	  // - not appending
	  // - appending to trailing slash (last segment is empty)
	  if (!append || !stack[stack.length - 1]) {
	    stack.pop()
	  }
	
	  // resolve relative path
	  var segments = relative.replace(/^\//, '').split('/')
	  for (var i = 0; i < segments.length; i++) {
	    var segment = segments[i]
	    if (segment === '.') {
	      continue
	    } else if (segment === '..') {
	      stack.pop()
	    } else {
	      stack.push(segment)
	    }
	  }
	
	  // ensure leading slash
	  if (stack[0] !== '') {
	    stack.unshift('')
	  }
	
	  return stack.join('/')
	}
	
	function parsePath (path) {
	  var hash = ''
	  var query = ''
	
	  var hashIndex = path.indexOf('#')
	  if (hashIndex >= 0) {
	    hash = path.slice(hashIndex)
	    path = path.slice(0, hashIndex)
	  }
	
	  var queryIndex = path.indexOf('?')
	  if (queryIndex >= 0) {
	    query = path.slice(queryIndex + 1)
	    path = path.slice(0, queryIndex)
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
	
	/*  */
	
	function createRouteMap (routes) {
	  var pathMap = Object.create(null)
	  var nameMap = Object.create(null)
	
	  routes.forEach(function (route) {
	    addRouteRecord(pathMap, nameMap, route)
	  })
	
	  return {
	    pathMap: pathMap,
	    nameMap: nameMap
	  }
	}
	
	function addRouteRecord (
	  pathMap,
	  nameMap,
	  route,
	  parent,
	  matchAs
	) {
	  var path = route.path;
	  var name = route.name;
	  if (process.env.NODE_ENV !== 'production') {
	    assert(path != null, "\"path\" is required in a route configuration.")
	    assert(
	      typeof route.component !== 'string',
	      "route config \"component\" for path: " + (String(path || name)) + " cannot be a " +
	      "string id. Use an actual component instead."
	    )
	  }
	
	  var record = {
	    path: normalizePath(path, parent),
	    components: route.components || { default: route.component },
	    instances: {},
	    name: name,
	    parent: parent,
	    matchAs: matchAs,
	    redirect: route.redirect,
	    beforeEnter: route.beforeEnter,
	    meta: route.meta || {}
	  }
	
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
	        )
	      }
	    }
	    route.children.forEach(function (child) {
	      var childMatchAs = matchAs
	        ? cleanPath((matchAs + "/" + (child.path)))
	        : undefined
	      addRouteRecord(pathMap, nameMap, child, record, childMatchAs)
	    })
	  }
	
	  if (route.alias !== undefined) {
	    if (Array.isArray(route.alias)) {
	      route.alias.forEach(function (alias) {
	        var aliasRoute = {
	          path: alias,
	          children: route.children
	        }
	        addRouteRecord(pathMap, nameMap, aliasRoute, parent, record.path)
	      })
	    } else {
	      var aliasRoute = {
	        path: route.alias,
	        children: route.children
	      }
	      addRouteRecord(pathMap, nameMap, aliasRoute, parent, record.path)
	    }
	  }
	
	  if (!pathMap[record.path]) {
	    pathMap[record.path] = record
	  }
	
	  if (name) {
	    if (!nameMap[name]) {
	      nameMap[name] = record
	    } else if (process.env.NODE_ENV !== 'production') {
	      warn(
	        false,
	        "Duplicate named routes definition: " +
	        "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }"
	      )
	    }
	  }
	}
	
	function normalizePath (path, parent) {
	  path = path.replace(/\/$/, '')
	  if (path[0] === '/') { return path }
	  if (parent == null) { return path }
	  return cleanPath(((parent.path) + "/" + path))
	}
	
	var __moduleExports = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};
	
	var isarray = __moduleExports
	
	/**
	 * Expose `pathToRegexp`.
	 */
	var index = pathToRegexp
	var parse_1 = parse
	var compile_1 = compile
	var tokensToFunction_1 = tokensToFunction
	var tokensToRegExp_1 = tokensToRegExp
	
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
	].join('|'), 'g')
	
	/**
	 * Parse a string for the raw tokens.
	 *
	 * @param  {string}  str
	 * @param  {Object=} options
	 * @return {!Array}
	 */
	function parse (str, options) {
	  var tokens = []
	  var key = 0
	  var index = 0
	  var path = ''
	  var defaultDelimiter = options && options.delimiter || '/'
	  var res
	
	  while ((res = PATH_REGEXP.exec(str)) != null) {
	    var m = res[0]
	    var escaped = res[1]
	    var offset = res.index
	    path += str.slice(index, offset)
	    index = offset + m.length
	
	    // Ignore already escaped sequences.
	    if (escaped) {
	      path += escaped[1]
	      continue
	    }
	
	    var next = str[index]
	    var prefix = res[2]
	    var name = res[3]
	    var capture = res[4]
	    var group = res[5]
	    var modifier = res[6]
	    var asterisk = res[7]
	
	    // Push the current path onto the tokens.
	    if (path) {
	      tokens.push(path)
	      path = ''
	    }
	
	    var partial = prefix != null && next != null && next !== prefix
	    var repeat = modifier === '+' || modifier === '*'
	    var optional = modifier === '?' || modifier === '*'
	    var delimiter = res[2] || defaultDelimiter
	    var pattern = capture || group
	
	    tokens.push({
	      name: name || key++,
	      prefix: prefix || '',
	      delimiter: delimiter,
	      optional: optional,
	      repeat: repeat,
	      partial: partial,
	      asterisk: !!asterisk,
	      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
	    })
	  }
	
	  // Match any characters still remaining.
	  if (index < str.length) {
	    path += str.substr(index)
	  }
	
	  // If the path exists, push it onto the end.
	  if (path) {
	    tokens.push(path)
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
	  var matches = new Array(tokens.length)
	
	  // Compile all the patterns before compilation.
	  for (var i = 0; i < tokens.length; i++) {
	    if (typeof tokens[i] === 'object') {
	      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$')
	    }
	  }
	
	  return function (obj, opts) {
	    var path = ''
	    var data = obj || {}
	    var options = opts || {}
	    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent
	
	    for (var i = 0; i < tokens.length; i++) {
	      var token = tokens[i]
	
	      if (typeof token === 'string') {
	        path += token
	
	        continue
	      }
	
	      var value = data[token.name]
	      var segment
	
	      if (value == null) {
	        if (token.optional) {
	          // Prepend partial segment prefixes.
	          if (token.partial) {
	            path += token.prefix
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
	          segment = encode(value[j])
	
	          if (!matches[i].test(segment)) {
	            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
	          }
	
	          path += (j === 0 ? token.prefix : token.delimiter) + segment
	        }
	
	        continue
	      }
	
	      segment = token.asterisk ? encodeAsterisk(value) : encode(value)
	
	      if (!matches[i].test(segment)) {
	        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
	      }
	
	      path += token.prefix + segment
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
	  re.keys = keys
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
	  var groups = path.source.match(/\((?!\?)/g)
	
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
	      })
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
	  var parts = []
	
	  for (var i = 0; i < path.length; i++) {
	    parts.push(pathToRegexp(path[i], keys, options).source)
	  }
	
	  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))
	
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
	    options = /** @type {!Object} */ (keys || options)
	    keys = []
	  }
	
	  options = options || {}
	
	  var strict = options.strict
	  var end = options.end !== false
	  var route = ''
	
	  // Iterate over the tokens and create our regexp string.
	  for (var i = 0; i < tokens.length; i++) {
	    var token = tokens[i]
	
	    if (typeof token === 'string') {
	      route += escapeString(token)
	    } else {
	      var prefix = escapeString(token.prefix)
	      var capture = '(?:' + token.pattern + ')'
	
	      keys.push(token)
	
	      if (token.repeat) {
	        capture += '(?:' + prefix + capture + ')*'
	      }
	
	      if (token.optional) {
	        if (!token.partial) {
	          capture = '(?:' + prefix + '(' + capture + '))?'
	        } else {
	          capture = prefix + '(' + capture + ')?'
	        }
	      } else {
	        capture = prefix + '(' + capture + ')'
	      }
	
	      route += capture
	    }
	  }
	
	  var delimiter = escapeString(options.delimiter || '/')
	  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter
	
	  // In non-strict mode we allow a slash at the end of match. If the path to
	  // match already ends with a slash, we remove it for consistency. The slash
	  // is valid at the end of a path match, not in the middle. This is important
	  // in non-ending mode, where "/test/" shouldn't match "/test//route".
	  if (!strict) {
	    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?'
	  }
	
	  if (end) {
	    route += '$'
	  } else {
	    // In non-ending mode, we need the capturing groups to match as much as
	    // possible by using a positive lookahead to the end or next path segment.
	    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)'
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
	    options = /** @type {!Object} */ (keys || options)
	    keys = []
	  }
	
	  options = options || {}
	
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
	
	var regexpCache = Object.create(null)
	
	function getRouteRegex (path) {
	  var hit = regexpCache[path]
	  var keys, regexp
	
	  if (hit) {
	    keys = hit.keys
	    regexp = hit.regexp
	  } else {
	    keys = []
	    regexp = index(path, keys)
	    regexpCache[path] = { keys: keys, regexp: regexp }
	  }
	
	  return { keys: keys, regexp: regexp }
	}
	
	var regexpCompileCache = Object.create(null)
	
	function fillParams (
	  path,
	  params,
	  routeMsg
	) {
	  try {
	    var filler =
	      regexpCompileCache[path] ||
	      (regexpCompileCache[path] = index.compile(path))
	    return filler(params || {}, { pretty: true })
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production') {
	      warn(false, ("missing param for " + routeMsg + ": " + (e.message)))
	    }
	    return ''
	  }
	}
	
	/*  */
	
	function normalizeLocation (
	  raw,
	  current,
	  append
	) {
	  var next = typeof raw === 'string' ? { path: raw } : raw
	  // named target
	  if (next.name || next._normalized) {
	    return next
	  }
	
	  // relative params
	  if (!next.path && next.params && current) {
	    next = assign({}, next)
	    next._normalized = true
	    var params = assign(assign({}, current.params), next.params)
	    if (current.name) {
	      next.name = current.name
	      next.params = params
	    } else if (current.matched) {
	      var rawPath = current.matched[current.matched.length - 1].path
	      next.path = fillParams(rawPath, params, ("path " + (current.path)))
	    } else if (process.env.NODE_ENV !== 'production') {
	      warn(false, "relative params navigation requires a current route.")
	    }
	    return next
	  }
	
	  var parsedPath = parsePath(next.path || '')
	  var basePath = (current && current.path) || '/'
	  var path = parsedPath.path
	    ? resolvePath(parsedPath.path, basePath, append || next.append)
	    : (current && current.path) || '/'
	  var query = resolveQuery(parsedPath.query, next.query)
	  var hash = next.hash || parsedPath.hash
	  if (hash && hash.charAt(0) !== '#') {
	    hash = "#" + hash
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
	    a[key] = b[key]
	  }
	  return a
	}
	
	/*  */
	
	function createMatcher (routes) {
	  var ref = createRouteMap(routes);
	  var pathMap = ref.pathMap;
	  var nameMap = ref.nameMap;
	
	  function match (
	    raw,
	    currentRoute,
	    redirectedFrom
	  ) {
	    var location = normalizeLocation(raw, currentRoute)
	    var name = location.name;
	
	    if (name) {
	      var record = nameMap[name]
	      if (process.env.NODE_ENV !== 'production') {
	        warn(record, ("Route with name '" + name + "' does not exist"))
	      }
	      var paramNames = getRouteRegex(record.path).keys
	        .filter(function (key) { return !key.optional; })
	        .map(function (key) { return key.name; })
	
	      if (typeof location.params !== 'object') {
	        location.params = {}
	      }
	
	      if (currentRoute && typeof currentRoute.params === 'object') {
	        for (var key in currentRoute.params) {
	          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
	            location.params[key] = currentRoute.params[key]
	          }
	        }
	      }
	
	      if (record) {
	        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""))
	        return _createRoute(record, location, redirectedFrom)
	      }
	    } else if (location.path) {
	      location.params = {}
	      for (var path in pathMap) {
	        if (matchRoute(path, location.params, location.path)) {
	          return _createRoute(pathMap[path], location, redirectedFrom)
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
	    var originalRedirect = record.redirect
	    var redirect = typeof originalRedirect === 'function'
	        ? originalRedirect(createRoute(record, location))
	        : originalRedirect
	
	    if (typeof redirect === 'string') {
	      redirect = { path: redirect }
	    }
	
	    if (!redirect || typeof redirect !== 'object') {
	      process.env.NODE_ENV !== 'production' && warn(
	        false, ("invalid redirect option: " + (JSON.stringify(redirect)))
	      )
	      return _createRoute(null, location)
	    }
	
	    var re = redirect
	    var name = re.name;
	    var path = re.path;
	    var query = location.query;
	    var hash = location.hash;
	    var params = location.params;
	    query = re.hasOwnProperty('query') ? re.query : query
	    hash = re.hasOwnProperty('hash') ? re.hash : hash
	    params = re.hasOwnProperty('params') ? re.params : params
	
	    if (name) {
	      // resolved named direct
	      var targetRecord = nameMap[name]
	      if (process.env.NODE_ENV !== 'production') {
	        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."))
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
	      var rawPath = resolveRecordPath(path, record)
	      // 2. resolve params
	      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""))
	      // 3. rematch with existing query and hash
	      return match({
	        _normalized: true,
	        path: resolvedPath,
	        query: query,
	        hash: hash
	      }, undefined, location)
	    } else {
	      warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))))
	      return _createRoute(null, location)
	    }
	  }
	
	  function alias (
	    record,
	    location,
	    matchAs
	  ) {
	    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""))
	    var aliasedMatch = match({
	      _normalized: true,
	      path: aliasedPath
	    })
	    if (aliasedMatch) {
	      var matched = aliasedMatch.matched
	      var aliasedRecord = matched[matched.length - 1]
	      location.params = aliasedMatch.params
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
	    return createRoute(record, location, redirectedFrom)
	  }
	
	  return match
	}
	
	function matchRoute (
	  path,
	  params,
	  pathname
	) {
	  var ref = getRouteRegex(path);
	  var regexp = ref.regexp;
	  var keys = ref.keys;
	  var m = pathname.match(regexp)
	
	  if (!m) {
	    return false
	  } else if (!params) {
	    return true
	  }
	
	  for (var i = 1, len = m.length; i < len; ++i) {
	    var key = keys[i - 1]
	    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i]
	    if (key) { params[key.name] = val }
	  }
	
	  return true
	}
	
	function resolveRecordPath (path, record) {
	  return resolvePath(path, record.parent ? record.parent.path : '/', true)
	}
	
	/*  */
	
	var inBrowser = typeof window !== 'undefined'
	
	var supportsHistory = inBrowser && (function () {
	  var ua = window.navigator.userAgent
	
	  if (
	    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
	    ua.indexOf('Mobile Safari') !== -1 &&
	    ua.indexOf('Chrome') === -1 &&
	    ua.indexOf('Windows Phone') === -1
	  ) {
	    return false
	  }
	
	  return window.history && 'pushState' in window.history
	})()
	
	/*  */
	
	function runQueue (queue, fn, cb) {
	  var step = function (index) {
	    if (index >= queue.length) {
	      cb()
	    } else {
	      if (queue[index]) {
	        fn(queue[index], function () {
	          step(index + 1)
	        })
	      } else {
	        step(index + 1)
	      }
	    }
	  }
	  step(0)
	}
	
	/*  */
	
	
	var History = function History (router, base) {
	  this.router = router
	  this.base = normalizeBase(base)
	  // start with a route object that stands for "nowhere"
	  this.current = START
	  this.pending = null
	};
	
	History.prototype.listen = function listen (cb) {
	  this.cb = cb
	};
	
	History.prototype.transitionTo = function transitionTo (location, onComplete, onAbort) {
	    var this$1 = this;
	
	  var route = this.router.match(location, this.current)
	  this.confirmTransition(route, function () {
	    this$1.updateRoute(route)
	    onComplete && onComplete(route)
	    this$1.ensureURL()
	  }, onAbort)
	};
	
	History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
	    var this$1 = this;
	
	  var current = this.current
	  var abort = function () { onAbort && onAbort() }
	  if (isSameRoute(route, current)) {
	    this.ensureURL()
	    return abort()
	  }
	
	  var ref = resolveQueue(this.current.matched, route.matched);
	    var deactivated = ref.deactivated;
	    var activated = ref.activated;
	
	  var queue = [].concat(
	    // in-component leave guards
	    extractLeaveGuards(deactivated),
	    // global before hooks
	    this.router.beforeHooks,
	    // enter guards
	    activated.map(function (m) { return m.beforeEnter; }),
	    // async components
	    resolveAsyncComponents(activated)
	  )
	
	  this.pending = route
	  var iterator = function (hook, next) {
	    if (this$1.pending !== route) {
	      return abort()
	    }
	    hook(route, current, function (to) {
	      if (to === false) {
	        // next(false) -> abort navigation, ensure current URL
	        this$1.ensureURL(true)
	        abort()
	      } else if (typeof to === 'string' || typeof to === 'object') {
	        // next('/') or next({ path: '/' }) -> redirect
	        (typeof to === 'object' && to.replace) ? this$1.replace(to) : this$1.push(to)
	        abort()
	      } else {
	        // confirm transition and pass on the value
	        next(to)
	      }
	    })
	  }
	
	  runQueue(queue, iterator, function () {
	    var postEnterCbs = []
	    var enterGuards = extractEnterGuards(activated, postEnterCbs, function () {
	      return this$1.current === route
	    })
	    // wait until async components are resolved before
	    // extracting in-component enter guards
	    runQueue(enterGuards, iterator, function () {
	      if (this$1.pending !== route) {
	        return abort()
	      }
	      this$1.pending = null
	      onComplete(route)
	      if (this$1.router.app) {
	        this$1.router.app.$nextTick(function () {
	          postEnterCbs.forEach(function (cb) { return cb(); })
	        })
	      }
	    })
	  })
	};
	
	History.prototype.updateRoute = function updateRoute (route) {
	  var prev = this.current
	  this.current = route
	  this.cb && this.cb(route)
	  this.router.afterHooks.forEach(function (hook) {
	    hook && hook(route, prev)
	  })
	};
	
	function normalizeBase (base) {
	  if (!base) {
	    if (inBrowser) {
	      // respect <base> tag
	      var baseEl = document.querySelector('base')
	      base = baseEl ? baseEl.getAttribute('href') : '/'
	    } else {
	      base = '/'
	    }
	  }
	  // make sure there's the starting slash
	  if (base.charAt(0) !== '/') {
	    base = '/' + base
	  }
	  // remove trailing slash
	  return base.replace(/\/$/, '')
	}
	
	function resolveQueue (
	  current,
	  next
	) {
	  var i
	  var max = Math.max(current.length, next.length)
	  for (i = 0; i < max; i++) {
	    if (current[i] !== next[i]) {
	      break
	    }
	  }
	  return {
	    activated: next.slice(i),
	    deactivated: current.slice(i)
	  }
	}
	
	function extractGuard (
	  def,
	  key
	) {
	  if (typeof def !== 'function') {
	    // extend now so that global mixins are applied.
	    def = _Vue.extend(def)
	  }
	  return def.options[key]
	}
	
	function extractLeaveGuards (matched) {
	  return flatten(flatMapComponents(matched, function (def, instance) {
	    var guard = extractGuard(def, 'beforeRouteLeave')
	    if (guard) {
	      return Array.isArray(guard)
	        ? guard.map(function (guard) { return wrapLeaveGuard(guard, instance); })
	        : wrapLeaveGuard(guard, instance)
	    }
	  }).reverse())
	}
	
	function wrapLeaveGuard (
	  guard,
	  instance
	) {
	  return function routeLeaveGuard () {
	    return guard.apply(instance, arguments)
	  }
	}
	
	function extractEnterGuards (
	  matched,
	  cbs,
	  isValid
	) {
	  return flatten(flatMapComponents(matched, function (def, _, match, key) {
	    var guard = extractGuard(def, 'beforeRouteEnter')
	    if (guard) {
	      return Array.isArray(guard)
	        ? guard.map(function (guard) { return wrapEnterGuard(guard, cbs, match, key, isValid); })
	        : wrapEnterGuard(guard, cbs, match, key, isValid)
	    }
	  }))
	}
	
	function wrapEnterGuard (
	  guard,
	  cbs,
	  match,
	  key,
	  isValid
	) {
	  return function routeEnterGuard (to, from, next) {
	    return guard(to, from, function (cb) {
	      next(cb)
	      if (typeof cb === 'function') {
	        cbs.push(function () {
	          // #750
	          // if a router-view is wrapped with an out-in transition,
	          // the instance may not have been registered at this time.
	          // we will need to poll for registration until current route
	          // is no longer valid.
	          poll(cb, match.instances, key, isValid)
	        })
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
	    cb(instances[key])
	  } else if (isValid()) {
	    setTimeout(function () {
	      poll(cb, instances, key, isValid)
	    }, 16)
	  }
	}
	
	function resolveAsyncComponents (matched) {
	  return flatMapComponents(matched, function (def, _, match, key) {
	    // if it's a function and doesn't have Vue options attached,
	    // assume it's an async component resolve function.
	    // we are not using Vue's default async resolving mechanism because
	    // we want to halt the navigation until the incoming component has been
	    // resolved.
	    if (typeof def === 'function' && !def.options) {
	      return function (to, from, next) {
	        var resolve = function (resolvedDef) {
	          match.components[key] = resolvedDef
	          next()
	        }
	
	        var reject = function (reason) {
	          warn(false, ("Failed to resolve async component " + key + ": " + reason))
	          next(false)
	        }
	
	        var res = def(resolve, reject)
	        if (res && typeof res.then === 'function') {
	          res.then(resolve, reject)
	        }
	      }
	    }
	  })
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
	
	/*  */
	
	var positionStore = Object.create(null)
	
	function saveScrollPosition (key) {
	  if (!key) { return }
	  positionStore[key] = {
	    x: window.pageXOffset,
	    y: window.pageYOffset
	  }
	}
	
	function getScrollPosition (key) {
	  if (!key) { return }
	  return positionStore[key]
	}
	
	function getElementPosition (el) {
	  var docRect = document.documentElement.getBoundingClientRect()
	  var elRect = el.getBoundingClientRect()
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
	
	
	// use User Timing api (if present) for more accurate key precision
	var Time = inBrowser ? (window.performance || Date) : Date
	
	var genKey = function () { return String(Time.now()); }
	var _key = genKey()
	
	var HTML5History = (function (History) {
	  function HTML5History (router, base) {
	    var this$1 = this;
	
	    History.call(this, router, base)
	
	    var expectScroll = router.options.scrollBehavior
	    window.addEventListener('popstate', function (e) {
	      _key = e.state && e.state.key
	      var current = this$1.current
	      this$1.transitionTo(getLocation(this$1.base), function (next) {
	        if (expectScroll) {
	          this$1.handleScroll(next, current, true)
	        }
	      })
	    })
	
	    if (expectScroll) {
	      window.addEventListener('scroll', function () {
	        saveScrollPosition(_key)
	      })
	    }
	  }
	
	  if ( History ) HTML5History.__proto__ = History;
	  HTML5History.prototype = Object.create( History && History.prototype );
	  HTML5History.prototype.constructor = HTML5History;
	
	  HTML5History.prototype.go = function go (n) {
	    window.history.go(n)
	  };
	
	  HTML5History.prototype.push = function push (location) {
	    var this$1 = this;
	
	    var current = this.current
	    this.transitionTo(location, function (route) {
	      pushState(cleanPath(this$1.base + route.fullPath))
	      this$1.handleScroll(route, current, false)
	    })
	  };
	
	  HTML5History.prototype.replace = function replace (location) {
	    var this$1 = this;
	
	    var current = this.current
	    this.transitionTo(location, function (route) {
	      replaceState(cleanPath(this$1.base + route.fullPath))
	      this$1.handleScroll(route, current, false)
	    })
	  };
	
	  HTML5History.prototype.ensureURL = function ensureURL (push) {
	    if (getLocation(this.base) !== this.current.fullPath) {
	      var current = cleanPath(this.base + this.current.fullPath)
	      push ? pushState(current) : replaceState(current)
	    }
	  };
	
	  HTML5History.prototype.handleScroll = function handleScroll (to, from, isPop) {
	    var router = this.router
	    if (!router.app) {
	      return
	    }
	
	    var behavior = router.options.scrollBehavior
	    if (!behavior) {
	      return
	    }
	    if (process.env.NODE_ENV !== 'production') {
	      assert(typeof behavior === 'function', "scrollBehavior must be a function")
	    }
	
	    // wait until re-render finishes before scrolling
	    router.app.$nextTick(function () {
	      var position = getScrollPosition(_key)
	      var shouldScroll = behavior(to, from, isPop ? position : null)
	      if (!shouldScroll) {
	        return
	      }
	      var isObject = typeof shouldScroll === 'object'
	      if (isObject && typeof shouldScroll.selector === 'string') {
	        var el = document.querySelector(shouldScroll.selector)
	        if (el) {
	          position = getElementPosition(el)
	        } else if (isValidPosition(shouldScroll)) {
	          position = normalizePosition(shouldScroll)
	        }
	      } else if (isObject && isValidPosition(shouldScroll)) {
	        position = normalizePosition(shouldScroll)
	      }
	
	      if (position) {
	        window.scrollTo(position.x, position.y)
	      }
	    })
	  };
	
	  return HTML5History;
	}(History));
	
	function getLocation (base) {
	  var path = window.location.pathname
	  if (base && path.indexOf(base) === 0) {
	    path = path.slice(base.length)
	  }
	  return (path || '/') + window.location.search + window.location.hash
	}
	
	function pushState (url, replace) {
	  // try...catch the pushState call to get around Safari
	  // DOM Exception 18 where it limits to 100 pushState calls
	  var history = window.history
	  try {
	    if (replace) {
	      history.replaceState({ key: _key }, '', url)
	    } else {
	      _key = genKey()
	      history.pushState({ key: _key }, '', url)
	    }
	    saveScrollPosition(_key)
	  } catch (e) {
	    window.location[replace ? 'replace' : 'assign'](url)
	  }
	}
	
	function replaceState (url) {
	  pushState(url, true)
	}
	
	/*  */
	
	
	var HashHistory = (function (History) {
	  function HashHistory (router, base, fallback) {
	    History.call(this, router, base)
	    // check history fallback deeplinking
	    if (fallback && this.checkFallback()) {
	      return
	    }
	    ensureSlash()
	  }
	
	  if ( History ) HashHistory.__proto__ = History;
	  HashHistory.prototype = Object.create( History && History.prototype );
	  HashHistory.prototype.constructor = HashHistory;
	
	  HashHistory.prototype.checkFallback = function checkFallback () {
	    var location = getLocation(this.base)
	    if (!/^\/#/.test(location)) {
	      window.location.replace(
	        cleanPath(this.base + '/#' + location)
	      )
	      return true
	    }
	  };
	
	  HashHistory.prototype.onHashChange = function onHashChange () {
	    if (!ensureSlash()) {
	      return
	    }
	    this.transitionTo(getHash(), function (route) {
	      replaceHash(route.fullPath)
	    })
	  };
	
	  HashHistory.prototype.push = function push (location) {
	    this.transitionTo(location, function (route) {
	      pushHash(route.fullPath)
	    })
	  };
	
	  HashHistory.prototype.replace = function replace (location) {
	    this.transitionTo(location, function (route) {
	      replaceHash(route.fullPath)
	    })
	  };
	
	  HashHistory.prototype.go = function go (n) {
	    window.history.go(n)
	  };
	
	  HashHistory.prototype.ensureURL = function ensureURL (push) {
	    var current = this.current.fullPath
	    if (getHash() !== current) {
	      push ? pushHash(current) : replaceHash(current)
	    }
	  };
	
	  return HashHistory;
	}(History));
	
	function ensureSlash () {
	  var path = getHash()
	  if (path.charAt(0) === '/') {
	    return true
	  }
	  replaceHash('/' + path)
	  return false
	}
	
	function getHash () {
	  // We can't use window.location.hash here because it's not
	  // consistent across browsers - Firefox will pre-decode it!
	  var href = window.location.href
	  var index = href.indexOf('#')
	  return index === -1 ? '' : href.slice(index + 1)
	}
	
	function pushHash (path) {
	  window.location.hash = path
	}
	
	function replaceHash (path) {
	  var i = window.location.href.indexOf('#')
	  window.location.replace(
	    window.location.href.slice(0, i >= 0 ? i : 0) + '#' + path
	  )
	}
	
	/*  */
	
	
	var AbstractHistory = (function (History) {
	  function AbstractHistory (router, base) {
	    History.call(this, router, base)
	    this.stack = []
	    this.index = -1
	  }
	
	  if ( History ) AbstractHistory.__proto__ = History;
	  AbstractHistory.prototype = Object.create( History && History.prototype );
	  AbstractHistory.prototype.constructor = AbstractHistory;
	
	  AbstractHistory.prototype.push = function push (location) {
	    var this$1 = this;
	
	    this.transitionTo(location, function (route) {
	      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route)
	      this$1.index++
	    })
	  };
	
	  AbstractHistory.prototype.replace = function replace (location) {
	    var this$1 = this;
	
	    this.transitionTo(location, function (route) {
	      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route)
	    })
	  };
	
	  AbstractHistory.prototype.go = function go (n) {
	    var this$1 = this;
	
	    var targetIndex = this.index + n
	    if (targetIndex < 0 || targetIndex >= this.stack.length) {
	      return
	    }
	    var route = this.stack[targetIndex]
	    this.confirmTransition(route, function () {
	      this$1.index = targetIndex
	      this$1.updateRoute(route)
	    })
	  };
	
	  AbstractHistory.prototype.ensureURL = function ensureURL () {
	    // noop
	  };
	
	  return AbstractHistory;
	}(History));
	
	/*  */
	
	var VueRouter = function VueRouter (options) {
	  if ( options === void 0 ) options = {};
	
	  this.app = null
	  this.options = options
	  this.beforeHooks = []
	  this.afterHooks = []
	  this.match = createMatcher(options.routes || [])
	
	  var mode = options.mode || 'hash'
	  this.fallback = mode === 'history' && !supportsHistory
	  if (this.fallback) {
	    mode = 'hash'
	  }
	  if (!inBrowser) {
	    mode = 'abstract'
	  }
	  this.mode = mode
	
	  switch (mode) {
	    case 'history':
	      this.history = new HTML5History(this, options.base)
	      break
	    case 'hash':
	      this.history = new HashHistory(this, options.base, this.fallback)
	      break
	    case 'abstract':
	      this.history = new AbstractHistory(this, options.base)
	      break
	    default:
	      process.env.NODE_ENV !== 'production' && assert(false, ("invalid mode: " + mode))
	  }
	};
	
	var prototypeAccessors = { currentRoute: {} };
	
	prototypeAccessors.currentRoute.get = function () {
	  return this.history && this.history.current
	};
	
	VueRouter.prototype.init = function init (app /* Vue component instance */) {
	    var this$1 = this;
	
	  process.env.NODE_ENV !== 'production' && assert(
	    install.installed,
	    "not installed. Make sure to call `Vue.use(VueRouter)` " +
	    "before creating root instance."
	  )
	
	  this.app = app
	
	  var history = this.history
	
	  if (history instanceof HTML5History) {
	    history.transitionTo(getLocation(history.base))
	  } else if (history instanceof HashHistory) {
	    var setupHashListener = function () {
	      window.addEventListener('hashchange', function () {
	        history.onHashChange()
	      })
	    }
	    history.transitionTo(getHash(), setupHashListener, setupHashListener)
	  }
	
	  history.listen(function (route) {
	    this$1.app._route = route
	  })
	};
	
	VueRouter.prototype.beforeEach = function beforeEach (fn) {
	  this.beforeHooks.push(fn)
	};
	
	VueRouter.prototype.afterEach = function afterEach (fn) {
	  this.afterHooks.push(fn)
	};
	
	VueRouter.prototype.push = function push (location) {
	  this.history.push(location)
	};
	
	VueRouter.prototype.replace = function replace (location) {
	  this.history.replace(location)
	};
	
	VueRouter.prototype.go = function go (n) {
	  this.history.go(n)
	};
	
	VueRouter.prototype.back = function back () {
	  this.go(-1)
	};
	
	VueRouter.prototype.forward = function forward () {
	  this.go(1)
	};
	
	VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
	  var route = to
	    ? this.resolve(to).resolved
	    : this.currentRoute
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
	  var normalizedTo = normalizeLocation(to, current || this.history.current, append)
	  var resolved = this.match(normalizedTo, current)
	  var fullPath = resolved.redirectedFrom || resolved.fullPath
	  var base = this.history.base
	  var href = createHref(base, fullPath, this.mode)
	  return {
	    normalizedTo: normalizedTo,
	    resolved: resolved,
	    href: href
	  }
	};
	
	Object.defineProperties( VueRouter.prototype, prototypeAccessors );
	
	function createHref (base, fullPath, mode) {
	  var path = mode === 'hash' ? '#' + fullPath : fullPath
	  return base ? cleanPath(base + '/' + path) : path
	}
	
	VueRouter.install = install
	VueRouter.version = '2.1.2'
	
	if (inBrowser && window.Vue) {
	  window.Vue.use(VueRouter)
	}
	
	module.exports = VueRouter;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 2 */
/***/ function(module, exports) {

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


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*!
	 * vue-resource v1.0.3
	 * https://github.com/vuejs/vue-resource
	 * Released under the MIT License.
	 */
	
	'use strict';
	
	/**
	 * Promises/A+ polyfill v1.1.4 (https://github.com/bramstein/promis)
	 */
	
	var RESOLVED = 0;
	var REJECTED = 1;
	var PENDING = 2;
	
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
	        var count = 0,
	            result = [];
	
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
	    });
	};
	
	/**
	 * Utility functions.
	 */
	
	var debug = false;var util = {};var slice = [].slice;
	
	
	function Util (Vue) {
	    util = Vue.util;
	    debug = Vue.config.debug || !Vue.config.silent;
	}
	
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
	    return util.nextTick(cb, ctx);
	}
	
	function trim(str) {
	    return str.replace(/^\s*|\s*$/g, '');
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
	
	function isBoolean(val) {
	    return val === true || val === false;
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
	
	    return merge(fn.bind({ $vm: obj, $options: opts }), fn, { $options: opts });
	}
	
	function each(obj, iterator) {
	
	    var i, key;
	
	    if (obj && typeof obj.length == 'number') {
	        for (i = 0; i < obj.length; i++) {
	            iterator.call(obj[i], obj[i], i);
	        }
	    } else if (isObject(obj)) {
	        for (key in obj) {
	            if (obj.hasOwnProperty(key)) {
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
	
	function root (options, next) {
	
	    var url = next(options);
	
	    if (isString(options.root) && !url.match(/^(https?:)?\//)) {
	        url = options.root + '/' + url;
	    }
	
	    return url;
	}
	
	/**
	 * Query Parameter Transform.
	 */
	
	function query (options, next) {
	
	    var urlParams = Object.keys(Url.options.params),
	        query = {},
	        url = next(options);
	
	    each(options.params, function (value, key) {
	        if (urlParams.indexOf(key) === -1) {
	            query[key] = value;
	        }
	    });
	
	    query = Url.params(query);
	
	    if (query) {
	        url += (url.indexOf('?') == -1 ? '?' : '&') + query;
	    }
	
	    return url;
	}
	
	/**
	 * URL Template v2.0.6 (https://github.com/bramstein/url-template)
	 */
	
	function expand(url, params, variables) {
	
	    var tmpl = parse(url),
	        expanded = tmpl.expand(params);
	
	    if (variables) {
	        variables.push.apply(variables, tmpl.vars);
	    }
	
	    return expanded;
	}
	
	function parse(template) {
	
	    var operators = ['+', '#', '.', '/', ';', '?', '&'],
	        variables = [];
	
	    return {
	        vars: variables,
	        expand: function (context) {
	            return template.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, function (_, expression, literal) {
	                if (expression) {
	
	                    var operator = null,
	                        values = [];
	
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
	
	    var value = context[key],
	        result = [];
	
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
	
	    value = operator === '+' || operator === '#' ? encodeReserved(value) : encodeURIComponent(value);
	
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
	
	function template (options) {
	
	    var variables = [],
	        url = expand(options.url, options.params, variables);
	
	    variables.forEach(function (key) {
	        delete options.params[key];
	    });
	
	    return url;
	}
	
	/**
	 * Service for URL templating.
	 */
	
	var ie = document.documentMode;
	var el = document.createElement('a');
	
	function Url(url, params) {
	
	    var self = this || {},
	        options = url,
	        transform;
	
	    if (isString(url)) {
	        options = { url: url, params: params };
	    }
	
	    options = merge({}, Url.options, self.$options, options);
	
	    Url.transforms.forEach(function (handler) {
	        transform = factory(handler, transform, self.$vm);
	    });
	
	    return transform(options);
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
	
	Url.transforms = [template, query, root];
	
	/**
	 * Encodes a Url parameter string.
	 *
	 * @param {Object} obj
	 */
	
	Url.params = function (obj) {
	
	    var params = [],
	        escape = encodeURIComponent;
	
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
	
	    if (ie) {
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
	    return function (options) {
	        return handler.call(vm, options, next);
	    };
	}
	
	function serialize(params, obj, scope) {
	
	    var array = isArray(obj),
	        plain = isPlainObject(obj),
	        hash;
	
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
	
	function xdrClient (request) {
	    return new PromiseObj(function (resolve) {
	
	        var xdr = new XDomainRequest(),
	            handler = function (_ref) {
	            var type = _ref.type;
	
	
	            var status = 0;
	
	            if (type === 'load') {
	                status = 200;
	            } else if (type === 'error') {
	                status = 500;
	            }
	
	            resolve(request.respondWith(xdr.responseText, { status: status }));
	        };
	
	        request.abort = function () {
	            return xdr.abort();
	        };
	
	        xdr.open(request.method, request.getUrl());
	        xdr.timeout = 0;
	        xdr.onload = handler;
	        xdr.onerror = handler;
	        xdr.ontimeout = handler;
	        xdr.onprogress = function () {};
	        xdr.send(request.getBody());
	    });
	}
	
	/**
	 * CORS Interceptor.
	 */
	
	var ORIGIN_URL = Url.parse(location.href);
	var SUPPORTS_CORS = 'withCredentials' in new XMLHttpRequest();
	
	function cors (request, next) {
	
	    if (!isBoolean(request.crossOrigin) && crossOrigin(request)) {
	        request.crossOrigin = true;
	    }
	
	    if (request.crossOrigin) {
	
	        if (!SUPPORTS_CORS) {
	            request.client = xdrClient;
	        }
	
	        delete request.emulateHTTP;
	    }
	
	    next();
	}
	
	function crossOrigin(request) {
	
	    var requestUrl = Url.parse(Url(request));
	
	    return requestUrl.protocol !== ORIGIN_URL.protocol || requestUrl.host !== ORIGIN_URL.host;
	}
	
	/**
	 * Body Interceptor.
	 */
	
	function body (request, next) {
	
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
	            get: function () {
	                return this.body;
	            },
	            set: function (body) {
	                this.body = body;
	            }
	        });
	
	        return response.bodyText ? when(response.text(), function (text) {
	
	            var type = response.headers.get('Content-Type');
	
	            if (isString(type) && type.indexOf('application/json') === 0) {
	
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
	}
	
	/**
	 * JSONP client.
	 */
	
	function jsonpClient (request) {
	    return new PromiseObj(function (resolve) {
	
	        var name = request.jsonp || 'callback',
	            callback = '_jsonp' + Math.random().toString(36).substr(2),
	            body = null,
	            handler,
	            script;
	
	        handler = function (_ref) {
	            var type = _ref.type;
	
	
	            var status = 0;
	
	            if (type === 'load' && body !== null) {
	                status = 200;
	            } else if (type === 'error') {
	                status = 500;
	            }
	
	            resolve(request.respondWith(body, { status: status }));
	
	            delete window[callback];
	            document.body.removeChild(script);
	        };
	
	        request.params[name] = callback;
	
	        window[callback] = function (result) {
	            body = JSON.stringify(result);
	        };
	
	        script = document.createElement('script');
	        script.src = request.getUrl();
	        script.type = 'text/javascript';
	        script.async = true;
	        script.onload = handler;
	        script.onerror = handler;
	
	        document.body.appendChild(script);
	    });
	}
	
	/**
	 * JSONP Interceptor.
	 */
	
	function jsonp (request, next) {
	
	    if (request.method == 'JSONP') {
	        request.client = jsonpClient;
	    }
	
	    next(function (response) {
	
	        if (request.method == 'JSONP') {
	
	            return when(response.json(), function (json) {
	
	                response.body = json;
	
	                return response;
	            });
	        }
	    });
	}
	
	/**
	 * Before Interceptor.
	 */
	
	function before (request, next) {
	
	    if (isFunction(request.before)) {
	        request.before.call(this, request);
	    }
	
	    next();
	}
	
	/**
	 * HTTP method override Interceptor.
	 */
	
	function method (request, next) {
	
	    if (request.emulateHTTP && /^(PUT|PATCH|DELETE)$/i.test(request.method)) {
	        request.headers.set('X-HTTP-Method-Override', request.method);
	        request.method = 'POST';
	    }
	
	    next();
	}
	
	/**
	 * Header Interceptor.
	 */
	
	function header (request, next) {
	
	    var headers = assign({}, Http.headers.common, !request.crossOrigin ? Http.headers.custom : {}, Http.headers[toLower(request.method)]);
	
	    each(headers, function (value, name) {
	        if (!request.headers.has(name)) {
	            request.headers.set(name, value);
	        }
	    });
	
	    next();
	}
	
	/**
	 * Timeout Interceptor.
	 */
	
	function timeout (request, next) {
	
	    var timeout;
	
	    if (request.timeout) {
	        timeout = setTimeout(function () {
	            request.abort();
	        }, request.timeout);
	    }
	
	    next(function (response) {
	
	        clearTimeout(timeout);
	    });
	}
	
	/**
	 * XMLHttp client.
	 */
	
	function xhrClient (request) {
	    return new PromiseObj(function (resolve) {
	
	        var xhr = new XMLHttpRequest(),
	            handler = function (event) {
	
	            var response = request.respondWith('response' in xhr ? xhr.response : xhr.responseText, {
	                status: xhr.status === 1223 ? 204 : xhr.status, // IE9 status bug
	                statusText: xhr.status === 1223 ? 'No Content' : trim(xhr.statusText)
	            });
	
	            each(trim(xhr.getAllResponseHeaders()).split('\n'), function (row) {
	                response.headers.append(row.slice(0, row.indexOf(':')), row.slice(row.indexOf(':') + 1));
	            });
	
	            resolve(response);
	        };
	
	        request.abort = function () {
	            return xhr.abort();
	        };
	
	        if (request.progress) {
	            if (request.method === 'GET') {
	                xhr.addEventListener('progress', request.progress);
	            } else if (/^(POST|PUT)$/i.test(request.method)) {
	                xhr.upload.addEventListener('progress', request.progress);
	            }
	        }
	
	        xhr.open(request.method, request.getUrl(), true);
	
	        if ('responseType' in xhr) {
	            xhr.responseType = 'blob';
	        }
	
	        if (request.credentials === true) {
	            xhr.withCredentials = true;
	        }
	
	        request.headers.forEach(function (value, name) {
	            xhr.setRequestHeader(name, value);
	        });
	
	        xhr.timeout = 0;
	        xhr.onload = handler;
	        xhr.onerror = handler;
	        xhr.send(request.getBody());
	    });
	}
	
	/**
	 * Base client.
	 */
	
	function Client (context) {
	
	    var reqHandlers = [sendRequest],
	        resHandlers = [],
	        handler;
	
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
	                    warn('Invalid interceptor of type ' + typeof handler + ', must be a function');
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
	}
	
	function sendRequest(request, resolve) {
	
	    var client = request.client || xhrClient;
	
	    resolve(client(request));
	}
	
	var classCallCheck = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};
	
	/**
	 * HTTP Headers.
	 */
	
	var Headers = function () {
	    function Headers(headers) {
	        var _this = this;
	
	        classCallCheck(this, Headers);
	
	
	        this.map = {};
	
	        each(headers, function (value, name) {
	            return _this.append(name, value);
	        });
	    }
	
	    Headers.prototype.has = function has(name) {
	        return getName(this.map, name) !== null;
	    };
	
	    Headers.prototype.get = function get(name) {
	
	        var list = this.map[getName(this.map, name)];
	
	        return list ? list[0] : null;
	    };
	
	    Headers.prototype.getAll = function getAll(name) {
	        return this.map[getName(this.map, name)] || [];
	    };
	
	    Headers.prototype.set = function set(name, value) {
	        this.map[normalizeName(getName(this.map, name) || name)] = [trim(value)];
	    };
	
	    Headers.prototype.append = function append(name, value) {
	
	        var list = this.getAll(name);
	
	        if (list.length) {
	            list.push(trim(value));
	        } else {
	            this.set(name, value);
	        }
	    };
	
	    Headers.prototype.delete = function _delete(name) {
	        delete this.map[getName(this.map, name)];
	    };
	
	    Headers.prototype.forEach = function forEach(callback, thisArg) {
	        var _this2 = this;
	
	        each(this.map, function (list, name) {
	            each(list, function (value) {
	                return callback.call(thisArg, value, name, _this2);
	            });
	        });
	    };
	
	    return Headers;
	}();
	
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
	
	var Response = function () {
	    function Response(body, _ref) {
	        var url = _ref.url;
	        var headers = _ref.headers;
	        var status = _ref.status;
	        var statusText = _ref.statusText;
	        classCallCheck(this, Response);
	
	
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
	    }
	
	    Response.prototype.blob = function blob() {
	        return when(this.bodyBlob);
	    };
	
	    Response.prototype.text = function text() {
	        return when(this.bodyText);
	    };
	
	    Response.prototype.json = function json() {
	        return when(this.text(), function (text) {
	            return JSON.parse(text);
	        });
	    };
	
	    return Response;
	}();
	
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
	
	var Request = function () {
	    function Request(options) {
	        classCallCheck(this, Request);
	
	
	        this.body = null;
	        this.params = {};
	
	        assign(this, options, {
	            method: toUpper(options.method || 'GET')
	        });
	
	        if (!(this.headers instanceof Headers)) {
	            this.headers = new Headers(this.headers);
	        }
	    }
	
	    Request.prototype.getUrl = function getUrl() {
	        return Url(this);
	    };
	
	    Request.prototype.getBody = function getBody() {
	        return this.body;
	    };
	
	    Request.prototype.respondWith = function respondWith(body, options) {
	        return new Response(body, assign(options || {}, { url: this.getUrl() }));
	    };
	
	    return Request;
	}();
	
	/**
	 * Service for sending network requests.
	 */
	
	var CUSTOM_HEADERS = { 'X-Requested-With': 'XMLHttpRequest' };
	var COMMON_HEADERS = { 'Accept': 'application/json, text/plain, */*' };
	var JSON_CONTENT_TYPE = { 'Content-Type': 'application/json;charset=utf-8' };
	
	function Http(options) {
	
	    var self = this || {},
	        client = Client(self.$vm);
	
	    defaults(options || {}, self.$options, Http.options);
	
	    Http.interceptors.forEach(function (handler) {
	        client.use(handler);
	    });
	
	    return client(new Request(options)).then(function (response) {
	
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
	    custom: CUSTOM_HEADERS,
	    common: COMMON_HEADERS
	};
	
	Http.interceptors = [before, timeout, method, body, jsonp, header, cors];
	
	['get', 'delete', 'head', 'jsonp'].forEach(function (method) {
	
	    Http[method] = function (url, options) {
	        return this(assign(options || {}, { url: url, method: method }));
	    };
	});
	
	['post', 'put', 'patch'].forEach(function (method) {
	
	    Http[method] = function (url, body, options) {
	        return this(assign(options || {}, { url: url, method: method, body: body }));
	    };
	});
	
	/**
	 * Service for interacting with RESTful services.
	 */
	
	function Resource(url, params, actions, options) {
	
	    var self = this || {},
	        resource = {};
	
	    actions = assign({}, Resource.actions, actions);
	
	    each(actions, function (action, name) {
	
	        action = merge({ url: url, params: assign({}, params) }, options, action);
	
	        resource[name] = function () {
	            return (self.$http || Http)(opts(action, arguments));
	        };
	    });
	
	    return resource;
	}
	
	function opts(action, args) {
	
	    var options = assign({}, action),
	        params = {},
	        body;
	
	    switch (args.length) {
	
	        case 2:
	
	            params = args[0];
	            body = args[1];
	
	            break;
	
	        case 1:
	
	            if (/^(POST|PUT|PATCH)$/i.test(options.method)) {
	                body = args[0];
	            } else {
	                params = args[0];
	            }
	
	            break;
	
	        case 0:
	
	            break;
	
	        default:
	
	            throw 'Expected up to 4 arguments [params, body], got ' + args.length + ' arguments';
	    }
	
	    options.body = body;
	    options.params = assign({}, options.params, params);
	
	    return options;
	}
	
	Resource.actions = {
	
	    get: { method: 'GET' },
	    save: { method: 'POST' },
	    query: { method: 'GET' },
	    update: { method: 'PUT' },
	    remove: { method: 'DELETE' },
	    delete: { method: 'DELETE' }
	
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
	            get: function () {
	                return options(Vue.url, this, this.$options.url);
	            }
	        },
	
	        $http: {
	            get: function () {
	                return options(Vue.http, this, this.$options.http);
	            }
	        },
	
	        $resource: {
	            get: function () {
	                return Vue.resource.bind(this);
	            }
	        },
	
	        $promise: {
	            get: function () {
	                var _this = this;
	
	                return function (executor) {
	                    return new Vue.Promise(executor, _this);
	                };
	            }
	        }
	
	    });
	}
	
	if (typeof window !== 'undefined' && window.Vue) {
	    window.Vue.use(plugin);
	}
	
	module.exports = plugin;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* script */
	__vue_exports__ = __webpack_require__(5);
	
	/* template */
	var __vue_template__ = __webpack_require__(6);
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

/***/ },
/* 5 */
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
	//
	
	exports.default = {
	    data: function data() {
	        return {};
	    }
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _vm._m(0)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('h3', [_vm._v("Getting started")]), _vm._v(" "), _c('p', [_vm._v("In progress")])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-bacbc222", module.exports)
	  }
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* script */
	__vue_exports__ = __webpack_require__(8);
	
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

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _helpers = __webpack_require__(9);
	
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

/***/ },
/* 9 */
/***/ function(module, exports) {

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

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

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

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* script */
	__vue_exports__ = __webpack_require__(12);
	
	/* template */
	var __vue_template__ = __webpack_require__(13);
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

/***/ },
/* 12 */
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
	
	exports.default = {
	    data: function data() {
	        return {
	            examples: '\n                <m-textfield label="Text..."></m-textfield>\n                <m-textfield float-label="Textarea..." textarea></m-textfield>\n                <m-textfield label="Number..." pattern="-?[0-9]*(.[0-9]+)?" error="Invalid input"></m-textfield>\n                <m-textfield expandable="search" id="test-id-search" float-label="Expanding..."></m-textfield>\n            ',
	            form: {
	                firstName: '',
	                lastName: '',
	                email: ''
	            }
	        };
	    }
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

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
	  }), _vm._v(" "), _c('br'), _vm._v(" "), _c('div', [_c('div', [_vm._v("Code:")]), _vm._v(" "), _c('textarea', {
	    attrs: {
	      "cols": "100",
	      "rows": "6"
	    },
	    domProps: {
	      "value": _vm.examples
	    }
	  })])], 1), _vm._v(" "), _c('div', [_c('h4', [_vm._v("Test Form")]), _vm._v(" "), _c('form', {
	    on: {
	      "submit": function($event) {
	        $event.preventDefault();
	        _vm.onSubmit($event)
	      }
	    }
	  }, [_c('m-textfield', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.form.firstName),
	      expression: "form.firstName"
	    }],
	    attrs: {
	      "float-label": "First Name"
	    },
	    domProps: {
	      "value": (_vm.form.firstName)
	    },
	    on: {
	      "input": function($event) {
	        _vm.form.firstName = $event
	      }
	    }
	  }), _vm._v(" "), _c('br'), _vm._v(" "), _c('m-textfield', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.form.lastName),
	      expression: "form.lastName"
	    }],
	    attrs: {
	      "float-label": "Last Name"
	    },
	    domProps: {
	      "value": (_vm.form.lastName)
	    },
	    on: {
	      "input": function($event) {
	        _vm.form.lastName = $event
	      }
	    }
	  }), _vm._v(" "), _c('br'), _vm._v(" "), _c('m-textfield', {
	    attrs: {
	      "float-label": "Email",
	      "pattern": "(.+)@(.+){2,}\\.(.+){2,}",
	      "error": "Invalid email"
	    }
	  }), _vm._v(" "), _c('br'), _vm._v(" "), _c('m-textfield', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.form.password),
	      expression: "form.password"
	    }],
	    attrs: {
	      "float-label": "Password",
	      "type": "password",
	      "pattern": ".{3,}"
	    },
	    domProps: {
	      "value": (_vm.form.password)
	    },
	    on: {
	      "input": function($event) {
	        _vm.form.password = $event
	      }
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
	  }, [_vm._v("\n                Button\n            ")])], 1), _vm._v(" "), _c('div', [_vm._v(_vm._s(_vm.form))])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-6d230848", module.exports)
	  }
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* script */
	__vue_exports__ = __webpack_require__(15);
	
	/* template */
	var __vue_template__ = __webpack_require__(16);
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

/***/ },
/* 15 */
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
	//
	//
	//
	//
	//
	//
	//
	//
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
	            examples: "\n                <m-button raised v-on:click.native=\"testClick\">Click me</m-button>\n\n                <m-button icon=\"add\" raised accent></m-button>\n\n                <m-button raised primary ripple>Ripple</m-button>\n\n                <m-button disabled>Disabled</m-button>\n            "
	        };
	    },
	
	    methods: {
	        testClick: function testClick() {
	            alert("Hi");
	        }
	    }
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

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
	  }, [_vm._v("Disabled")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('div', [_c('div', [_vm._v("Code:")]), _vm._v(" "), _c('textarea', {
	    attrs: {
	      "cols": "100",
	      "rows": "6"
	    },
	    domProps: {
	      "value": _vm.examples
	    }
	  })])], 1)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-05957b4f", module.exports)
	  }
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* script */
	__vue_exports__ = __webpack_require__(18);
	
	/* template */
	var __vue_template__ = __webpack_require__(19);
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

/***/ },
/* 18 */
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
	
	exports.default = {
	    data: function data() {
	        return {
	            examples: '\n                <m-snackbar display-on="msgSent"></m-snackbar>\n                <m-button raised colored @click.native="sAction">Show Snackbar</m-button>\n            '
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

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

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
	  }, [_vm._v("Show Snackbar")]), _vm._v(" "), _c('div', [_c('div', [_vm._v("Code:")]), _vm._v(" "), _c('textarea', {
	    attrs: {
	      "cols": "100",
	      "rows": "6"
	    },
	    domProps: {
	      "value": _vm.examples
	    }
	  })])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-2385d3b2", module.exports)
	  }
	}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* script */
	__vue_exports__ = __webpack_require__(21);
	
	/* template */
	var __vue_template__ = __webpack_require__(22);
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

/***/ },
/* 21 */
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
	
	exports.default = {
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
	
	                    setTimeout(function () {
	                        success(c.splice(0, 5));
	                    }, 2000);
	                });
	            },
	
	            m: { name: '', value: null },
	
	            // simple select
	
	            testData2: [{
	                name: 'NodeJs', value: 1
	            }, {
	                name: 'JS', value: 2
	            }, {
	                name: 'PHP', value: 3
	            }],
	
	            m2: { name: '', value: null },
	
	            examples: '\n                 <m-select :data-source="testData2" id="test2" v-model="m2"></m-select>\n                 <m-select :data-source="testData" id="test1" v-model="m"></m-select>\n            '
	        };
	    }
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('h3', [_vm._v("Selects")]), _vm._v(" "), _c('p'), _c('h4', [_vm._v("Default")]), _vm._v(" "), _c('m-select', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.m2),
	      expression: "m2"
	    }],
	    attrs: {
	      "data-source": _vm.testData2,
	      "id": "test2"
	    },
	    domProps: {
	      "value": (_vm.m2)
	    },
	    on: {
	      "input": function($event) {
	        _vm.m2 = $event
	      }
	    }
	  }), _vm._v(" "), _c('div', [_vm._v(_vm._s(_vm.m2))]), _vm._v(" "), _c('p'), _vm._v(" "), _c('p'), _c('h4', [_vm._v("AJAX select")]), _vm._v(" "), _c('m-select', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.m),
	      expression: "m"
	    }],
	    attrs: {
	      "data-source": _vm.testData,
	      "id": "test1"
	    },
	    domProps: {
	      "value": (_vm.m)
	    },
	    on: {
	      "input": function($event) {
	        _vm.m = $event
	      }
	    }
	  }), _vm._v(" "), _c('div', [_vm._v(_vm._s(_vm.m))]), _vm._v(" "), _c('p'), _vm._v(" "), _c('div', [_c('div', [_vm._v("Code:")]), _vm._v(" "), _c('textarea', {
	    attrs: {
	      "cols": "100",
	      "rows": "6"
	    },
	    domProps: {
	      "value": _vm.examples
	    }
	  })])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-7b4b7bc5", module.exports)
	  }
	}

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

/***/ },
/* 24 */
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
	//
	//
	//
	//
	//
	//
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
	            amount: 0,
	            examples: "\n                <m-slider v-model=\"amount\" min=\"0\" max=\"100\"></m-slider>\n                <m-slider v-model=\"amount\" min=\"0\" max=\"100\" step=\"10\" disabled></m-slider>\n            "
	        };
	    }
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('m-slider', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.amount),
	      expression: "amount"
	    }],
	    attrs: {
	      "min": "0",
	      "max": "100"
	    },
	    domProps: {
	      "value": (_vm.amount)
	    },
	    on: {
	      "input": function($event) {
	        _vm.amount = $event
	      }
	    }
	  }), _vm._v(" "), _c('br'), _vm._v(" "), _c('span', [_vm._v("Step 10")]), _vm._v(" "), _c('m-slider', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.amount),
	      expression: "amount"
	    }],
	    attrs: {
	      "min": "0",
	      "max": "100",
	      "step": "10",
	      "disabled": ""
	    },
	    domProps: {
	      "value": (_vm.amount)
	    },
	    on: {
	      "input": function($event) {
	        _vm.amount = $event
	      }
	    }
	  }), _vm._v(" "), _c('p', [_vm._v("\n        " + _vm._s(_vm.amount) + "\n    ")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('div', [_c('div', [_vm._v("Code:")]), _vm._v(" "), _c('textarea', {
	    attrs: {
	      "cols": "100",
	      "rows": "6"
	    },
	    domProps: {
	      "value": _vm.examples
	    }
	  })])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-6b01df00", module.exports)
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
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
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
	      b: 10,
	      h: false,
	      testClick: function testClick(e) {
	        this.h = !this.h;
	      },
	      examples: "\n        <m-badge v-model=\"b\" href=\"https://google.com\" :hide=\"h\">Inbox</m-badge>\n        <m-badge v-model=\"b\" tag=\"span\" icon overlap>account_box</m-badge>\n      "
	    };
	  }
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('m-badge', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.b),
	      expression: "b"
	    }],
	    attrs: {
	      "href": "https://google.com",
	      "hide": _vm.h
	    },
	    domProps: {
	      "value": (_vm.b)
	    },
	    on: {
	      "input": function($event) {
	        _vm.b = $event
	      }
	    }
	  }, [_vm._v("Inbox")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('m-badge', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.b),
	      expression: "b"
	    }],
	    attrs: {
	      "tag": "span",
	      "icon": "",
	      "overlap": ""
	    },
	    domProps: {
	      "value": (_vm.b)
	    },
	    on: {
	      "input": function($event) {
	        _vm.b = $event
	      }
	    }
	  }, [_vm._v("account_box")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('m-slider', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.b),
	      expression: "b"
	    }],
	    attrs: {
	      "min": "0",
	      "max": "100"
	    },
	    domProps: {
	      "value": (_vm.b)
	    },
	    on: {
	      "input": function($event) {
	        _vm.b = $event
	      }
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
	  }, [_vm._v("Hide badge value")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('div', [_c('div', [_vm._v("Code:")]), _vm._v(" "), _c('textarea', {
	    attrs: {
	      "cols": "100",
	      "rows": "6"
	    },
	    domProps: {
	      "value": _vm.examples
	    }
	  })])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-5db5b352", module.exports)
	  }
	}

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* styles */
	__webpack_require__(30);
	
	/* script */
	__vue_exports__ = __webpack_require__(34);
	
	/* template */
	var __vue_template__ = __webpack_require__(35);
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

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(31);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(33)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-08fe9a81&scoped=true!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./menu.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-08fe9a81&scoped=true!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./menu.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(32)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.menu-block[data-v-08fe9a81] {\n    color: #fff;\n    background: #3F51B5;\n    padding: 10px;\n}\n", "", {"version":3,"sources":["/./examples/src/components/menu.vue?4f18e527"],"names":[],"mappings":";AAsBA;IACA,YAAA;IACA,oBAAA;IACA,cAAA;CACA","file":"menu.vue","sourcesContent":["<template>\n   <div>\n       <div class=\"menu-block\">\n           <m-button icon=\"more_vert\" id=\"test-menu\"></m-button>\n\n           <m-menu for=\"test-menu\">\n               <m-menu-item>NodeJs</m-menu-item>\n               <m-menu-item>PHP</m-menu-item>\n               <m-menu-item disabled=\"disabled\">JS</m-menu-item>\n               <m-menu-item>GO</m-menu-item>\n           </m-menu>\n       </div>\n\n       <!-- / -->\n\n       <div>\n           <div>Code:</div>\n           <textarea cols=\"100\" rows=\"10\" :value=\"examples\"></textarea>\n       </div>\n   </div>\n</template>\n<style scoped>\n    .menu-block {\n        color: #fff;\n        background: #3F51B5;\n        padding: 10px;\n    }\n</style>\n<script>\n    export default{\n        data(){\n            return {\n                examples: `\n               <m-button icon=\"more_vert\" id=\"test-menu\"></m-button>\n\n                <m-menu for=\"test-menu\">\n                    <m-menu-item>NodeJs</m-menu-item>\n                    <m-menu-item>PHP</m-menu-item>\n                    <m-menu-item disabled=\"disabled\">JS</m-menu-item>\n                    <m-menu-item>GO</m-menu-item>\n                </m-menu>\n            `\n            }\n        }\n    }\n</script>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 32 */
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
/* 33 */
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
/* 34 */
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
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
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
	            examples: "\n           <m-button icon=\"more_vert\" id=\"test-menu\"></m-button>\n\n            <m-menu for=\"test-menu\">\n                <m-menu-item>NodeJs</m-menu-item>\n                <m-menu-item>PHP</m-menu-item>\n                <m-menu-item disabled=\"disabled\">JS</m-menu-item>\n                <m-menu-item>GO</m-menu-item>\n            </m-menu>\n        "
	        };
	    }
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

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
	  }, [_vm._v("JS")]), _vm._v(" "), _c('m-menu-item', [_vm._v("GO")])], 1)], 1), _vm._v(" "), _c('div', [_c('div', [_vm._v("Code:")]), _vm._v(" "), _c('textarea', {
	    attrs: {
	      "cols": "100",
	      "rows": "10"
	    },
	    domProps: {
	      "value": _vm.examples
	    }
	  })])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-08fe9a81", module.exports)
	  }
	}

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* script */
	__vue_exports__ = __webpack_require__(37);
	
	/* template */
	var __vue_template__ = __webpack_require__(38);
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

/***/ },
/* 37 */
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
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
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
	            progress: 40,
	            progress2: 30,
	            buffer: 60,
	            active: false,
	            examples: "\n                <m-progress v-model=\"progress\"></m-progress>\n                <m-progress v-model=\"progress2\" :buffer=\"buffer\"></m-progress>\n                <m-progress indeterminate></m-progress>\n            ",
	
	            examples_spinner: "\n               <m-spinner></m-spinner>\n               <m-spinner single-color></m-spinner>\n               <m-spinner :active=\"active\"></m-spinner>\n            "
	        };
	    }
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('h3', [_vm._v("Progress bar")]), _vm._v(" "), _c('m-progress', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.progress),
	      expression: "progress"
	    }],
	    domProps: {
	      "value": (_vm.progress)
	    },
	    on: {
	      "input": function($event) {
	        _vm.progress = $event
	      }
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
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.progress),
	      expression: "progress"
	    }],
	    attrs: {
	      "min": "0",
	      "max": "100"
	    },
	    domProps: {
	      "value": (_vm.progress)
	    },
	    on: {
	      "input": function($event) {
	        _vm.progress = $event
	      }
	    }
	  })], 1), _vm._v(" "), _c('h4', [_vm._v("Progress with buffer")]), _vm._v(" "), _c('div', [_c('m-progress', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.progress2),
	      expression: "progress2"
	    }],
	    attrs: {
	      "buffer": _vm.buffer
	    },
	    domProps: {
	      "value": (_vm.progress2)
	    },
	    on: {
	      "input": function($event) {
	        _vm.progress2 = $event
	      }
	    }
	  })], 1), _vm._v(" "), _c('h4', [_vm._v("Indeterminate")]), _vm._v(" "), _c('div', [_c('m-progress', {
	    attrs: {
	      "indeterminate": ""
	    }
	  })], 1), _vm._v(" "), _c('div', [_c('div', [_vm._v("Code:")]), _vm._v(" "), _c('textarea', {
	    attrs: {
	      "cols": "100",
	      "rows": "6"
	    },
	    domProps: {
	      "value": _vm.examples
	    }
	  })]), _vm._v(" "), _c('h3', [_vm._v("Spinner")]), _vm._v(" "), _c('div', [_c('h4', [_vm._v("Default:")]), _vm._v(" "), _c('m-spinner')], 1), _vm._v(" "), _c('div', [_c('h4', [_vm._v("Single color:")]), _vm._v(" "), _c('m-spinner', {
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
	      "change": function($event) {
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
	  })])], 1), _vm._v(" "), _c('div', [_c('div', [_vm._v("Code:")]), _vm._v(" "), _c('textarea', {
	    attrs: {
	      "cols": "100",
	      "rows": "6"
	    },
	    domProps: {
	      "value": _vm.examples_spinner
	    }
	  })])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-5f96478a", module.exports)
	  }
	}

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* script */
	__vue_exports__ = __webpack_require__(40);
	
	/* template */
	var __vue_template__ = __webpack_require__(41);
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

/***/ },
/* 40 */
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
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
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
	        select: function select(val) {
	            this.checkbox2 = val;
	        }
	    },
	    data: function data() {
	        return {
	            checkbox1: false,
	            checkbox2: true,
	            examples: '\n                <m-checkbox v-model="checkbox1">This one</m-checkbox>\n                <m-checkbox v-model="checkbox2">Label</m-checkbox>\n            ',
	
	            radioVal: 'two',
	            examplesRadio: '\n                <m-radio name="test" v-model="radioVal" val="one">Test 1</m-radio>\n                <m-radio name="test" v-model="radioVal" val="two">Test 2</m-radio>\n                <m-radio name="test" v-model="radioVal" val="3" disabled>Test 3</m-radio>\n            ',
	
	            switch1: true,
	            switch2: false,
	            examplesSwitch: '\n                <m-switch v-model="switch1">On</m-switch>\n                <m-switch v-model="switch2">Off</m-switch>\n                <m-switch v-model="switch2" disabled>Off</m-switch>\n            ',
	
	            iToggle: true,
	            iToggle2: false,
	
	            examplesIconToggles: '\n                <m-icon-toggle v-model="iToggle" icon="format_bold"></m-icon-toggle>\n                <m-icon-toggle v-model="iToggle2" icon="search"></m-icon-toggle>\n            '
	        };
	    }
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('h4', [_vm._v("Checkbox")]), _vm._v(" "), _c('m-checkbox', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.checkbox1),
	      expression: "checkbox1"
	    }],
	    domProps: {
	      "value": (_vm.checkbox1)
	    },
	    on: {
	      "change": _vm.select,
	      "input": function($event) {
	        _vm.checkbox1 = $event
	      }
	    }
	  }, [_vm._v("This one")]), _vm._v(" "), _c('m-checkbox', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.checkbox2),
	      expression: "checkbox2"
	    }],
	    domProps: {
	      "value": (_vm.checkbox2)
	    },
	    on: {
	      "input": function($event) {
	        _vm.checkbox2 = $event
	      }
	    }
	  }, [_vm._v("Label")]), _vm._v(" "), _c('m-checkbox', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.checkbox2),
	      expression: "checkbox2"
	    }],
	    attrs: {
	      "disabled": ""
	    },
	    domProps: {
	      "value": (_vm.checkbox2)
	    },
	    on: {
	      "input": function($event) {
	        _vm.checkbox2 = $event
	      }
	    }
	  }, [_vm._v("Label")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('div', [_vm._v("\n        " + _vm._s(_vm.checkbox1) + ", " + _vm._s(_vm.checkbox2) + "\n    ")]), _vm._v(" "), _c('div', [_c('div', [_vm._v("Code:")]), _vm._v(" "), _c('textarea', {
	    attrs: {
	      "cols": "100",
	      "rows": "6"
	    },
	    domProps: {
	      "value": _vm.examples
	    }
	  })]), _vm._v(" "), _c('h4', [_vm._v("Radio")]), _vm._v(" "), _c('m-radio', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.radioVal),
	      expression: "radioVal"
	    }],
	    attrs: {
	      "name": "test",
	      "val": "one"
	    },
	    domProps: {
	      "value": (_vm.radioVal)
	    },
	    on: {
	      "input": function($event) {
	        _vm.radioVal = $event
	      }
	    }
	  }, [_vm._v("Test 1")]), _vm._v(" "), _c('m-radio', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.radioVal),
	      expression: "radioVal"
	    }],
	    attrs: {
	      "name": "test",
	      "val": "two"
	    },
	    domProps: {
	      "value": (_vm.radioVal)
	    },
	    on: {
	      "input": function($event) {
	        _vm.radioVal = $event
	      }
	    }
	  }, [_vm._v("Test 2")]), _vm._v(" "), _c('m-radio', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.radioVal),
	      expression: "radioVal"
	    }],
	    attrs: {
	      "name": "test",
	      "val": "3",
	      "disabled": ""
	    },
	    domProps: {
	      "value": (_vm.radioVal)
	    },
	    on: {
	      "input": function($event) {
	        _vm.radioVal = $event
	      }
	    }
	  }, [_vm._v("Test 3")]), _vm._v(" "), _c('div', [_vm._v(_vm._s(_vm.radioVal))]), _vm._v(" "), _c('div', [_c('div', [_vm._v("Code:")]), _vm._v(" "), _c('textarea', {
	    attrs: {
	      "cols": "100",
	      "rows": "6"
	    },
	    domProps: {
	      "value": _vm.examplesRadio
	    }
	  })]), _vm._v(" "), _c('h4', [_vm._v("Switch")]), _vm._v(" "), _c('m-switch', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.switch1),
	      expression: "switch1"
	    }],
	    domProps: {
	      "value": (_vm.switch1)
	    },
	    on: {
	      "input": function($event) {
	        _vm.switch1 = $event
	      }
	    }
	  }, [_vm._v("On")]), _vm._v(" "), _c('br'), _vm._v("\n    " + _vm._s(_vm.switch1) + "\n    "), _c('br'), _vm._v(" "), _c('m-switch', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.switch2),
	      expression: "switch2"
	    }],
	    domProps: {
	      "value": (_vm.switch2)
	    },
	    on: {
	      "input": function($event) {
	        _vm.switch2 = $event
	      }
	    }
	  }, [_vm._v("Off")]), _vm._v(" "), _c('br'), _vm._v("\n    " + _vm._s(_vm.switch2) + "\n\n    "), _c('m-switch', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.switch2),
	      expression: "switch2"
	    }],
	    attrs: {
	      "disabled": ""
	    },
	    domProps: {
	      "value": (_vm.switch2)
	    },
	    on: {
	      "input": function($event) {
	        _vm.switch2 = $event
	      }
	    }
	  }, [_vm._v("Off")]), _vm._v(" "), _c('br'), _vm._v("\n    " + _vm._s(_vm.switch2) + "\n\n    "), _c('div', [_c('div', [_vm._v("Code:")]), _vm._v(" "), _c('textarea', {
	    attrs: {
	      "cols": "100",
	      "rows": "6"
	    },
	    domProps: {
	      "value": _vm.examplesSwitch
	    }
	  })]), _vm._v(" "), _c('h4', [_vm._v("Icon Taggle")]), _vm._v(" "), _c('m-icon-toggle', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.iToggle),
	      expression: "iToggle"
	    }],
	    attrs: {
	      "icon": "format_bold"
	    },
	    domProps: {
	      "value": (_vm.iToggle)
	    },
	    on: {
	      "input": function($event) {
	        _vm.iToggle = $event
	      }
	    }
	  }), _vm._v(" "), _c('br'), _vm._v("\n\n    " + _vm._s(_vm.iToggle) + "\n\n    "), _c('br'), _vm._v(" "), _c('m-icon-toggle', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.iToggle2),
	      expression: "iToggle2"
	    }],
	    attrs: {
	      "icon": "search"
	    },
	    domProps: {
	      "value": (_vm.iToggle2)
	    },
	    on: {
	      "input": function($event) {
	        _vm.iToggle2 = $event
	      }
	    }
	  }), _vm._v(" "), _c('br'), _vm._v("\n    " + _vm._s(_vm.iToggle2) + "\n\n    "), _c('div', [_c('div', [_vm._v("Code:")]), _vm._v(" "), _c('textarea', {
	    attrs: {
	      "cols": "100",
	      "rows": "6"
	    },
	    domProps: {
	      "value": _vm.examplesIconToggles
	    }
	  })])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-47fa2c6d", module.exports)
	  }
	}

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* script */
	__vue_exports__ = __webpack_require__(43);
	
	/* template */
	var __vue_template__ = __webpack_require__(44);
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

/***/ },
/* 43 */
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
	
	exports.default = {
	    data: function data() {
	        return {
	            currentTub: 'tab-1',
	            currentTub2: 'Tab 2',
	            examples: '\n            <m-tabs v-model="currentTub">\n                 <m-tab :tab="{ title: \'Title\', id: \'tab-1\' }">\n                    <p>\n                        Hello 1\n                    </p>\n                </m-tab>\n                <m-tab :tab="{ title: \'Title\', id: \'tab-2\' }">\n                    <p>\n                        Hello 2\n                    </p>\n                </m-tab>\n\n            </m-tabs>\n            '
	        };
	    }
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('m-tabs', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.currentTub),
	      expression: "currentTub"
	    }],
	    domProps: {
	      "value": (_vm.currentTub)
	    },
	    on: {
	      "input": function($event) {
	        _vm.currentTub = $event
	      }
	    }
	  }, [_c('m-tab', {
	    attrs: {
	      "tab": {
	        title: 'Jon',
	        id: 'tab-1'
	      }
	    }
	  }, [_c('p', [_vm._v("\n                Hello 1\n            ")])]), _vm._v(" "), _c('m-tab', {
	    attrs: {
	      "tab": {
	        title: 'Tom',
	        id: 'tab-2'
	      }
	    }
	  }, [_c('p', [_vm._v("\n                Hello 2\n            ")])])], 1), _vm._v(" "), _c('m-tabs', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.currentTub2),
	      expression: "currentTub2"
	    }],
	    domProps: {
	      "value": (_vm.currentTub2)
	    },
	    on: {
	      "input": function($event) {
	        _vm.currentTub2 = $event
	      }
	    }
	  }, [_c('m-tab', {
	    attrs: {
	      "tab": "Tab 1"
	    }
	  }, [_c('p', {
	    staticStyle: {
	      "min-height": "400px"
	    }
	  }, [_vm._v("\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mi dolor, molestie ut porttitor vitae, viverra ac lorem."), _c('br'), _vm._v("\n                Pellentesque eu lobortis felis. Nulla id pretium ante. Aliquam turpis enim, imperdiet efficitur mauris a, "), _c('br'), _vm._v("\n                tempor lacinia ante. Nam vel velit metus. Integer nulla turpis, tristique non dui eget, malesuada blandit nisi."), _c('br'), _vm._v("\n                Phasellus id volutpat orci. Curabitur malesuada augue efficitur massa consequat consequat. Class aptent taciti sociosqu\n                ad litora torquent per conubia nostra, per inceptos himenaeos.\n\n            ")])]), _vm._v(" "), _c('m-tab', {
	    attrs: {
	      "tab": "Tab 2"
	    }
	  }, [_c('p', {
	    staticStyle: {
	      "min-height": "400px"
	    }
	  }, [_vm._v("\n                Quisque et hendrerit odio, viverra efficitur risus. Mauris tempus mi ut fringilla placerat. Vestibulum sagittis pellentesque nunc nec congue. Maecenas eu enim suscipit augue maximus viverra. Fusce tincidunt, nibh non eleifend placerat, lectus nunc lacinia nisi, a maximus purus mauris vel dui. Fusce in urna vel diam lobortis tempor non sed nisi. Etiam metus orci, convallis eget rhoncus vel, cursus a mauris. Proin maximus velit sed semper commodo. Maecenas sit amet laoreet leo. Nulla facilisi. Integer eget mauris mi. Nulla dictum erat eget mi maximus venenatis.\n            ")])])], 1), _vm._v(" "), _c('div', [_c('div', [_vm._v("Code:")]), _vm._v(" "), _c('textarea', {
	    attrs: {
	      "cols": "100",
	      "rows": "10"
	    },
	    domProps: {
	      "value": _vm.examples
	    }
	  })])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-1010ddc0", module.exports)
	  }
	}

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* script */
	__vue_exports__ = __webpack_require__(46);
	
	/* template */
	var __vue_template__ = __webpack_require__(47);
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

/***/ },
/* 46 */
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
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
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
	            examples: "\n                <m-tooltip target=\"add-button\">Hello World</m-tooltip>\n                <m-button raised primary ripple id=\"add-button\">Add</m-button>\n\n                <m-tooltip target=\"add\" large>Upload <strong>file.zip</strong></m-tooltip>\n                <m-button icon=\"add\" id=\"add\" raised accent></m-button>\n\n                <m-tooltip target=\"left\" left>Left tooltipe</m-tooltip>\n                <m-button raised primary ripple id=\"left\">Left</m-button>\n            "
	        };
	    }
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

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
	  }, [_vm._v("Bottom")])], 1)])]), _vm._v(" "), _c('div', [_c('div', [_vm._v("Code:")]), _vm._v(" "), _c('textarea', {
	    attrs: {
	      "cols": "100",
	      "rows": "6"
	    },
	    domProps: {
	      "value": _vm.examples
	    }
	  })])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-501c8072", module.exports)
	  }
	}

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* script */
	__vue_exports__ = __webpack_require__(49);
	
	/* template */
	var __vue_template__ = __webpack_require__(50);
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

/***/ },
/* 49 */
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
	//
	//
	//
	//
	//
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
	
	
	    methods: {
	        onSelect: function onSelect(items) {
	            this.sel = items;
	        }
	    },
	
	    data: function data() {
	        return {
	            sel: {},
	            testDataSet: [],
	            examples: '\n                <m-table @select="onSelect">\n                    <m-table-head>\n                        <m-table-row>\n                            <m-table-h numeric>Id</m-table-h>\n                            <m-table-h>Email</m-table-h>\n                            <m-table-h>Name</m-table-h>\n                        </m-table-row>\n                    </m-table-head>\n\n\n                    <m-table-body>\n                        <m-table-row v-for="user in testDataSet" selection :m-item="user">\n                            <m-table-cell numeric>{{user.id}}</m-table-cell>\n                            <m-table-cell :tooltip="\'E-mail: \'+user.email" >{{user.email}}</m-table-cell>\n                            <m-table-cell>{{user.name}}</m-table-cell>\n                        </m-table-row>\n                    </m-table-body>\n                </m-table>\n            '
	        };
	    }
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

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
	  })], 2), _vm._v(" "), _c('div', {
	    staticStyle: {
	      "float": "left",
	      "padding-left": "20px"
	    }
	  }, [_c('div', [_vm._v("Code:")]), _vm._v(" "), _c('textarea', {
	    attrs: {
	      "cols": "100",
	      "rows": "20"
	    },
	    domProps: {
	      "value": _vm.examples
	    }
	  })]), _vm._v(" "), _c('div', {
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
	  }))], 1)], 1)])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('b', [_vm._v("Selected Items:")])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-042202c8", module.exports)
	  }
	}

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* script */
	__vue_exports__ = __webpack_require__(52);
	
	/* template */
	var __vue_template__ = __webpack_require__(53);
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

/***/ },
/* 52 */
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
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
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
	        }
	    },
	    data: function data() {
	        return {
	            increment: 0,
	            examples: "\n                <m-dialog ref=\"msg\" title=\"MDL Dialog\">\n                    <p>\n                        This is an example of the Material Design Lite dialog component. Please use responsibly.\n                    </p>\n                </m-dialog>\n\n                <m-dialog ref=\"msgFullwidth\" title=\"MDL Dialog\" full-width>\n                    <p>\n                        This is an example of the Material Design Lite dialog component. Please use responsibly.\n                    </p>\n                </m-dialog>\n\n                <m-dialog ref=\"msg2\" full-width title=\"Test Title\">\n                    <p style=\"padding: 30px\">Increment: {{increment}}</p>\n\n                    <template slot=\"actions\">\n                        <m-button raised primary ripple @click.native=\"increment++\">Action</m-button>\n                    </template>\n                </m-dialog>\n\n                <m-button @click.native=\"open\">Open Dialog</m-button>\n            "
	        };
	    }
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('h3', [_vm._v("Dialogs")]), _vm._v(" "), _c('m-dialog', {
	    ref: "msg",
	    attrs: {
	      "title": "MDL Dialog"
	    }
	  }, [_c('p', [_vm._v("\n            This is an example of the Material Design Lite dialog component. Please use responsibly.\n        ")])]), _vm._v(" "), _c('m-dialog', {
	    ref: "msgFullwidth",
	    attrs: {
	      "title": "MDL Dialog",
	      "full-width": ""
	    }
	  }, [_c('p', [_vm._v("\n            This is an example of the Material Design Lite dialog component. Please use responsibly.\n        ")])]), _vm._v(" "), _c('m-button', {
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
	  }, [_vm._v("Action")])], 1)], 2), _vm._v(" "), _c('div', [_c('div', [_vm._v("Code:")]), _vm._v(" "), _c('textarea', {
	    attrs: {
	      "cols": "100",
	      "rows": "30"
	    },
	    domProps: {
	      "value": _vm.examples
	    }
	  })])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-6fde02f9", module.exports)
	  }
	}

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* styles */
	__webpack_require__(55);
	
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

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(56);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(33)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-66e5d7b1!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./cards.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-66e5d7b1!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./cards.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(32)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.demo-card-square.mdl-card {\n  width: 320px;\n  height: 320px;\n}\n.demo-card-square > .mdl-card__title {\n  color: #fff;\n  background: url('https://getmdl.io/assets/demos/dog.png') bottom right 15% no-repeat #46B6AC;\n}\n.demo-card-wide.mdl-card {\n  width: 512px;\n}\n.demo-card-wide > .mdl-card__title {\n  color: #fff;\n  height: 176px;\n  background: url('https://getmdl.io/assets/demos/welcome_card.jpg') center / cover;\n}\n.demo-card-wide > .mdl-card__menu {\n  color: #fff;\n}\n\n", "", {"version":3,"sources":["/./examples/src/components/cards.vue?463cbd2c"],"names":[],"mappings":";AAqBA;EACA,aAAA;EACA,cAAA;CACA;AACA;EACA,YAAA;EACA,6FAAA;CACA;AAEA;EACA,aAAA;CACA;AACA;EACA,YAAA;EACA,cAAA;EACA,kFAAA;CACA;AACA;EACA,YAAA;CACA","file":"cards.vue","sourcesContent":["<template>\n    <div>\n        <h3>Cards</h3>\n\n        <m-card class=\"demo-card-square\" title=\"Updates\" supporting-text=\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...\" actions=\"actions\" actions-text=\"Update\"></m-card>\n\n        <br>\n        <br>\n\n        <m-card class=\"demo-card-wide\" title=\"Welcome\" supporting-text=\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...\" actions=\"actions\" actions-text=\"Get started\"></m-card>\n\n        <hr>\n\n        <div>\n            <div>Code:</div>\n            <textarea cols=\"150\" rows=\"40\" :value=\"examples\"></textarea>\n        </div>\n    </div>\n</template>\n\n<style>\n.demo-card-square.mdl-card {\n  width: 320px;\n  height: 320px;\n}\n.demo-card-square > .mdl-card__title {\n  color: #fff;\n  background: url('https://getmdl.io/assets/demos/dog.png') bottom right 15% no-repeat #46B6AC;\n}\n\n.demo-card-wide.mdl-card {\n  width: 512px;\n}\n.demo-card-wide > .mdl-card__title {\n  color: #fff;\n  height: 176px;\n  background: url('https://getmdl.io/assets/demos/welcome_card.jpg') center / cover;\n}\n.demo-card-wide > .mdl-card__menu {\n  color: #fff;\n}\n\n</style>\n\n<script>\n\n    export default {\n        data(){\n            return {\n                examples: `\n                    <m-card class=\"demo-card-square\" title=\"Updates\" supporting-text=\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...\" actions=\"actions\" actions-text=\"Update\"></m-card>\n                    <m-card class=\"demo-card-wide\" title=\"Welcome\" supporting-text=\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...\" actions=\"actions\" actions-text=\"Get started\"></m-card>\n\n                    <style>\n                    .demo-card-square.mdl-card {\n                      width: 320px;\n                      height: 320px;\n                    }\n                    .demo-card-square > .mdl-card__title {\n                      color: #fff;\n                      background: url('https://getmdl.io/assets/demos/dog.png') bottom right 15% no-repeat #46B6AC;\n                    }\n\n                    .demo-card-wide.mdl-card {\n                      width: 512px;\n                    }\n                    .demo-card-wide > .mdl-card__title {\n                      color: #fff;\n                      height: 176px;\n                      background: url('https://getmdl.io/assets/demos/welcome_card.jpg') center / cover;\n                    }\n                    .demo-card-wide > .mdl-card__menu {\n                      color: #fff;\n                    }\n\n                    </style>\n\n\n                `\n            }\n        }\n    }\n</script>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 57 */
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
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
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
	      examples: "\n                <m-card class=\"demo-card-square\" title=\"Updates\" supporting-text=\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...\" actions=\"actions\" actions-text=\"Update\"></m-card>\n                <m-card class=\"demo-card-wide\" title=\"Welcome\" supporting-text=\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...\" actions=\"actions\" actions-text=\"Get started\"></m-card>\n\n                <style>\n                .demo-card-square.mdl-card {\n                  width: 320px;\n                  height: 320px;\n                }\n                .demo-card-square > .mdl-card__title {\n                  color: #fff;\n                  background: url('https://getmdl.io/assets/demos/dog.png') bottom right 15% no-repeat #46B6AC;\n                }\n\n                .demo-card-wide.mdl-card {\n                  width: 512px;\n                }\n                .demo-card-wide > .mdl-card__title {\n                  color: #fff;\n                  height: 176px;\n                  background: url('https://getmdl.io/assets/demos/welcome_card.jpg') center / cover;\n                }\n                .demo-card-wide > .mdl-card__menu {\n                  color: #fff;\n                }\n\n                </style>\n\n\n            "
	    };
	  }
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

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
	  }), _vm._v(" "), _c('hr'), _vm._v(" "), _c('div', [_c('div', [_vm._v("Code:")]), _vm._v(" "), _c('textarea', {
	    attrs: {
	      "cols": "150",
	      "rows": "40"
	    },
	    domProps: {
	      "value": _vm.examples
	    }
	  })])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-66e5d7b1", module.exports)
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
	//
	//
	//
	//
	//
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
	    data: function data() {
	        return {
	            showChip: true,
	            examples: '\n                <m-chip contact="A">Basic Chip</m-chip>\n                <m-chip contact-image="https://getmdl.io/templates/dashboard/images/user.jpg">Deletable Contact Chip</m-chip>\n\n                <m-chip contact="A" @delete="del" v-if="showChip">Basic Chip</m-chip>\n\n                <m-snackbar display-on="msgSent"></m-snackbar>\n            '
	        };
	    }
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

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
	  }), _vm._v(" "), _c('div', [_c('div', [_vm._v("Code:")]), _vm._v(" "), _c('textarea', {
	    attrs: {
	      "cols": "110",
	      "rows": "10"
	    },
	    domProps: {
	      "value": _vm.examples
	    }
	  })])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-767023f5", module.exports)
	  }
	}

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* styles */
	__webpack_require__(63);
	
	/* script */
	__vue_exports__ = __webpack_require__(65);
	
	/* template */
	var __vue_template__ = __webpack_require__(66);
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

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(64);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(33)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-2c8aeae3!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./lists.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-2c8aeae3!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./lists.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(32)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.demo-list-item {\n  width: 300px;\n}\n.demo-list-three {\n  width: 650px;\n}\n", "", {"version":3,"sources":["/./examples/src/components/lists.vue?2a4ffa02"],"names":[],"mappings":";AAmGA;EACA,aAAA;CACA;AAEA;EACA,aAAA;CACA","file":"lists.vue","sourcesContent":["<template>\n    <div>\n        <h3>Lists</h3>\n\n        <m-list class=\"demo-list-item\">\n            <m-list-item>Bryan Cranston</m-list-item>\n            <m-list-item>Aaron Paul</m-list-item>\n            <m-list-item>Bob Odenkirk</m-list-item>\n        </m-list>\n\n        <div>\n            <div>Code:</div>\n            <textarea cols=\"110\" rows=\"10\" :value=\"examples1\"></textarea>\n        </div>\n\n        <hr>\n\n        <m-list class=\"demo-list-item\">\n            <m-list-item icon=\"person\">Bryan Cranston</m-list-item>\n            <m-list-item icon=\"person\">Aaron Paul</m-list-item>\n            <m-list-item icon=\"person\">Bob Odenkirk</m-list-item>\n        </m-list>\n\n        <div>\n            <div>Code:</div>\n            <textarea cols=\"110\" rows=\"10\" :value=\"examples2\"></textarea>\n        </div>\n\n        <hr>\n\n        <m-list class=\"demo-list-item\">\n            <m-list-item icon-avatar=\"person\">Bryan Cranston</m-list-item>\n            <m-list-item icon-avatar=\"person\">Aaron Paul</m-list-item>\n            <m-list-item icon-avatar=\"person\">Bob Odenkirk</m-list-item>\n        </m-list>\n\n        <div>\n            <div>Code:</div>\n            <textarea cols=\"110\" rows=\"10\" :value=\"examples3\"></textarea>\n        </div>\n\n        <hr>\n\n        <m-list class=\"demo-list-item\">\n            <m-list-item icon-avatar=\"person\" v-for=\"person in people\">\n                {{person.name}}\n\n                <template slot=\"action\">\n                    <m-switch v-model=\"person.on\"></m-switch>\n                </template>\n            </m-list-item>\n        </m-list>\n\n        <div>\n            <div>Code:</div>\n            <textarea cols=\"110\" rows=\"10\" :value=\"examples4\"></textarea>\n        </div>\n\n        <hr>\n\n        <m-list class=\"demo-list-item\">\n            <m-list-item icon-avatar=\"person\" v-for=\"person in people\" :sub-title=\"person.sub\">\n                {{person.name}}\n\n                <template slot=\"action\">\n                    <a class=\"mdl-list__item-secondary-action\" href=\"#\">\n                        <i class=\"material-icons\">star</i>\n                    </a>\n                </template>\n            </m-list-item>\n        </m-list>\n\n        <div>\n            <div>Code:</div>\n            <textarea cols=\"110\" rows=\"10\" :value=\"examples5\"></textarea>\n        </div>\n\n        <hr>\n\n        <m-list class=\"demo-list-three\">\n            <m-list-item icon-avatar=\"person\" v-for=\"person in people\" :text=\"person.text\">\n                {{person.name}}\n\n                <template slot=\"action\">\n                    <a class=\"mdl-list__item-secondary-action\" href=\"#\">\n                        <i class=\"material-icons\">star</i>\n                    </a>\n                </template>\n            </m-list-item>\n        </m-list>\n\n        <div>\n            <div>Code:</div>\n            <textarea cols=\"110\" rows=\"10\" :value=\"examples6\"></textarea>\n        </div>\n    </div>\n</template>\n\n<style>\n.demo-list-item {\n  width: 300px;\n}\n\n.demo-list-three {\n  width: 650px;\n}\n</style>\n\n<script>\n    export default{\n        methods: {\n        },\n        data(){\n            return {\n                people: [\n                    {\n                        'name': 'Bryan Cranston',\n                        'text': 'Bryan Cranston played the role of Walter in Breaking Bad. He is also known for playing Hal in Malcom in the Middle.',\n                        on: true,\n                        sub: '62 Episodes',\n                    },\n                    {\n                        'name': 'Aaron Paul',\n                        text: 'Aaron Paul played the role of Jesse in Breaking Bad. He also featured in the \"Need For Speed\" Movie.',\n                        on: false,\n                        sub: '52 Episodes',\n                    },\n                    {\n                        'name': 'Bob Odenkirk',\n                        on: true,\n                        text: 'Bob Odinkrik played the role of Saul in Breaking Bad. Due to public fondness for the character, Bob stars in his own show now, called \"Better Call Saul\".',\n                        sub: '32 Episodes',\n                    },\n                ],\n                examples1: `\n                    <m-list class=\"demo-list-item\">\n                        <m-list-item>Bryan Cranston</m-list-item>\n                        <m-list-item>Aaron Paul</m-list-item>\n                        <m-list-item>Bob Odenkirk</m-list-item>\n                    </m-list>\n                `,\n                examples2: `\n                    <m-list class=\"demo-list-item\">\n                        <m-list-item icon=\"person\">Bryan Cranston</m-list-item>\n                        <m-list-item icon=\"person\">Aaron Paul</m-list-item>\n                        <m-list-item icon=\"person\">Bob Odenkirk</m-list-item>\n                    </m-list>\n                `,\n                examples3: `\n                    <m-list class=\"demo-list-item\">\n                        <m-list-item icon-avatar=\"person\">Bryan Cranston</m-list-item>\n                        <m-list-item icon-avatar=\"person\">Aaron Paul</m-list-item>\n                        <m-list-item icon-avatar=\"person\">Bob Odenkirk</m-list-item>\n                    </m-list>\n                `,\n                examples4: `\n                    <m-list class=\"demo-list-item\">\n                        <m-list-item icon-avatar=\"person\" v-for=\"person in people\">\n                            {{person.name}}\n\n                            <template slot=\"action\">\n                                <m-switch v-model=\"person.on\"></m-switch>\n                            </template>\n                        </m-list-item>\n                    </m-list>\n                `,\n                examples5: `\n                    <m-list class=\"demo-list-item\">\n                         <m-list-item icon-avatar=\"person\" v-for=\"person in people\" :sub-title=\"person.sub\">\n                            {{person.name}}\n\n                            <template slot=\"action\">\n                                <a class=\"mdl-list__item-secondary-action\" href=\"#\">\n                                    <i class=\"material-icons\">star</i>\n                                </a>\n                            </template>\n                        </m-list-item>\n                    </m-list>\n                `,\n                examples6: `\n                    <m-list class=\"demo-list-three\">\n                        <m-list-item icon-avatar=\"person\" v-for=\"person in people\" :text=\"person.text\">\n                            {{person.name}}\n\n                            <template slot=\"action\">\n                                <a class=\"mdl-list__item-secondary-action\" href=\"#\">\n                                    <i class=\"material-icons\">star</i>\n                                </a>\n                            </template>\n                        </m-list-item>\n                    </m-list>\n                `,\n            }\n        }\n    }\n</script>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 65 */
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
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
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
	            examples1: '\n                <m-list class="demo-list-item">\n                    <m-list-item>Bryan Cranston</m-list-item>\n                    <m-list-item>Aaron Paul</m-list-item>\n                    <m-list-item>Bob Odenkirk</m-list-item>\n                </m-list>\n            ',
	            examples2: '\n                <m-list class="demo-list-item">\n                    <m-list-item icon="person">Bryan Cranston</m-list-item>\n                    <m-list-item icon="person">Aaron Paul</m-list-item>\n                    <m-list-item icon="person">Bob Odenkirk</m-list-item>\n                </m-list>\n            ',
	            examples3: '\n                <m-list class="demo-list-item">\n                    <m-list-item icon-avatar="person">Bryan Cranston</m-list-item>\n                    <m-list-item icon-avatar="person">Aaron Paul</m-list-item>\n                    <m-list-item icon-avatar="person">Bob Odenkirk</m-list-item>\n                </m-list>\n            ',
	            examples4: '\n                <m-list class="demo-list-item">\n                    <m-list-item icon-avatar="person" v-for="person in people">\n                        {{person.name}}\n\n                        <template slot="action">\n                            <m-switch v-model="person.on"></m-switch>\n                        </template>\n                    </m-list-item>\n                </m-list>\n            ',
	            examples5: '\n                <m-list class="demo-list-item">\n                     <m-list-item icon-avatar="person" v-for="person in people" :sub-title="person.sub">\n                        {{person.name}}\n\n                        <template slot="action">\n                            <a class="mdl-list__item-secondary-action" href="#">\n                                <i class="material-icons">star</i>\n                            </a>\n                        </template>\n                    </m-list-item>\n                </m-list>\n            ',
	            examples6: '\n                <m-list class="demo-list-three">\n                    <m-list-item icon-avatar="person" v-for="person in people" :text="person.text">\n                        {{person.name}}\n\n                        <template slot="action">\n                            <a class="mdl-list__item-secondary-action" href="#">\n                                <i class="material-icons">star</i>\n                            </a>\n                        </template>\n                    </m-list-item>\n                </m-list>\n            '
	        };
	    }
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('h3', [_vm._v("Lists")]), _vm._v(" "), _c('m-list', {
	    staticClass: "demo-list-item"
	  }, [_c('m-list-item', [_vm._v("Bryan Cranston")]), _vm._v(" "), _c('m-list-item', [_vm._v("Aaron Paul")]), _vm._v(" "), _c('m-list-item', [_vm._v("Bob Odenkirk")])], 1), _vm._v(" "), _c('div', [_c('div', [_vm._v("Code:")]), _vm._v(" "), _c('textarea', {
	    attrs: {
	      "cols": "110",
	      "rows": "10"
	    },
	    domProps: {
	      "value": _vm.examples1
	    }
	  })]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('m-list', {
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
	  }, [_vm._v("Bob Odenkirk")])], 1), _vm._v(" "), _c('div', [_c('div', [_vm._v("Code:")]), _vm._v(" "), _c('textarea', {
	    attrs: {
	      "cols": "110",
	      "rows": "10"
	    },
	    domProps: {
	      "value": _vm.examples2
	    }
	  })]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('m-list', {
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
	  }, [_vm._v("Bob Odenkirk")])], 1), _vm._v(" "), _c('div', [_c('div', [_vm._v("Code:")]), _vm._v(" "), _c('textarea', {
	    attrs: {
	      "cols": "110",
	      "rows": "10"
	    },
	    domProps: {
	      "value": _vm.examples3
	    }
	  })]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('m-list', {
	    staticClass: "demo-list-item"
	  }, _vm._l((_vm.people), function(person) {
	    return _c('m-list-item', {
	      attrs: {
	        "icon-avatar": "person"
	      }
	    }, [_vm._v("\n            " + _vm._s(person.name) + "\n\n            "), _c('template', {
	      slot: "action"
	    }, [_c('m-switch', {
	      directives: [{
	        name: "model",
	        rawName: "v-model",
	        value: (person.on),
	        expression: "person.on"
	      }],
	      domProps: {
	        "value": (person.on)
	      },
	      on: {
	        "input": function($event) {
	          person.on = $event
	        }
	      }
	    })], 1)], 2)
	  })), _vm._v(" "), _c('div', [_c('div', [_vm._v("Code:")]), _vm._v(" "), _c('textarea', {
	    attrs: {
	      "cols": "110",
	      "rows": "10"
	    },
	    domProps: {
	      "value": _vm.examples4
	    }
	  })]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('m-list', {
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
	  })), _vm._v(" "), _c('div', [_c('div', [_vm._v("Code:")]), _vm._v(" "), _c('textarea', {
	    attrs: {
	      "cols": "110",
	      "rows": "10"
	    },
	    domProps: {
	      "value": _vm.examples5
	    }
	  })]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('m-list', {
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
	  })), _vm._v(" "), _c('div', [_c('div', [_vm._v("Code:")]), _vm._v(" "), _c('textarea', {
	    attrs: {
	      "cols": "110",
	      "rows": "10"
	    },
	    domProps: {
	      "value": _vm.examples6
	    }
	  })])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-2c8aeae3", module.exports)
	  }
	}

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTkyMjZlYzM3ZjRlNGJmMzJkNTMiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1yb3V0ZXIvZGlzdC92dWUtcm91dGVyLmNvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi9+L3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1yZXNvdXJjZS9kaXN0L3Z1ZS1yZXNvdXJjZS5jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvdXNhZ2UudnVlIiwid2VicGFjazovLy91c2FnZS52dWUiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvdXNhZ2UudnVlP2VhNGMiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvbmF2LnZ1ZSIsIndlYnBhY2s6Ly8vbmF2LnZ1ZSIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9zcmMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9uYXYudnVlPzY0NTQiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvdGV4dGZpZWxkcy52dWUiLCJ3ZWJwYWNrOi8vL3RleHRmaWVsZHMudnVlIiwid2VicGFjazovLy8uL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL3RleHRmaWVsZHMudnVlPzMxNDciLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvYnV0dG9ucy52dWUiLCJ3ZWJwYWNrOi8vL2J1dHRvbnMudnVlIiwid2VicGFjazovLy8uL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL2J1dHRvbnMudnVlP2QxNzUiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvc25hY2tiYXIudnVlIiwid2VicGFjazovLy9zbmFja2Jhci52dWUiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvc25hY2tiYXIudnVlP2IzMWEiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvc2VsZWN0cy52dWUiLCJ3ZWJwYWNrOi8vL3NlbGVjdHMudnVlIiwid2VicGFjazovLy8uL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL3NlbGVjdHMudnVlPzFjOGIiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvc2xpZGVycy52dWUiLCJ3ZWJwYWNrOi8vL3NsaWRlcnMudnVlIiwid2VicGFjazovLy8uL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL3NsaWRlcnMudnVlPzFlNjciLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvYmFkZ2VzLnZ1ZSIsIndlYnBhY2s6Ly8vYmFkZ2VzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9iYWRnZXMudnVlP2U4YTciLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvbWVudS52dWUiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvbWVudS52dWU/ZGU5YSIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9tZW51LnZ1ZT80NTEzIiwid2VicGFjazovLy8uL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vbWVudS52dWUiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvbWVudS52dWU/YTU1YyIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9sb2FkaW5nLnZ1ZSIsIndlYnBhY2s6Ly8vbG9hZGluZy52dWUiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvbG9hZGluZy52dWU/OWU4ZiIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy90b2dnbGVzLnZ1ZSIsIndlYnBhY2s6Ly8vdG9nZ2xlcy52dWUiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvdG9nZ2xlcy52dWU/NDQzOSIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy90YWJzLnZ1ZSIsIndlYnBhY2s6Ly8vdGFicy52dWUiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvdGFicy52dWU/Zjk3OSIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy90b29sdGlwcy52dWUiLCJ3ZWJwYWNrOi8vL3Rvb2x0aXBzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy90b29sdGlwcy52dWU/NGM4OSIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy90YWJsZS52dWUiLCJ3ZWJwYWNrOi8vL3RhYmxlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy90YWJsZS52dWU/MDRjNyIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9kaWFsb2dzLnZ1ZSIsIndlYnBhY2s6Ly8vZGlhbG9ncy52dWUiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvZGlhbG9ncy52dWU/ODA4NyIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9jYXJkcy52dWUiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvY2FyZHMudnVlPzExNTUiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvY2FyZHMudnVlPzMyNmIiLCJ3ZWJwYWNrOi8vL2NhcmRzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9jYXJkcy52dWU/Mjg4OCIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9jaGlwcy52dWUiLCJ3ZWJwYWNrOi8vL2NoaXBzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9jaGlwcy52dWU/MTA1ZiIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9saXN0cy52dWUiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvbGlzdHMudnVlPzVmZTQiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvbGlzdHMudnVlPzYyN2QiLCJ3ZWJwYWNrOi8vL2xpc3RzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9saXN0cy52dWU/ZDU3ZCJdLCJuYW1lcyI6WyJWdWUiLCJ1c2UiLCJWdWVSZXVzYWJsZU1hdGVyaWFsQ29tcG9uZW50cyIsInJvdXRlcyIsInBhdGgiLCJjb21wb25lbnQiLCJuYW1lIiwicmVkaXJlY3QiLCJyb3V0ZXIiLCJiYXNlIiwibGlua0FjdGl2ZUNsYXNzIiwiZWwiLCJjb21wb25lbnRzIiwiRXhOYXYiLCJtZXRob2RzIiwib25TdWJtaXQiLCJlIiwiY29uc29sZSIsImxvZyIsImZvcm0iLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImVtYWlsIiwiX192dWVfZXhwb3J0c19fIiwiX192dWVfb3B0aW9uc19fIiwiX192dWVfc3R5bGVzX18iLCJyZXF1aXJlIiwiX192dWVfdGVtcGxhdGVfXyIsImRlZmF1bHQiLCJPYmplY3QiLCJrZXlzIiwic29tZSIsImtleSIsImVycm9yIiwib3B0aW9ucyIsIl9fZmlsZSIsInJlbmRlciIsInN0YXRpY1JlbmRlckZucyIsImhvdEFQSSIsImluc3RhbGwiLCJjb21wYXRpYmxlIiwibW9kdWxlIiwiaG90IiwiYWNjZXB0IiwiZGF0YSIsImNyZWF0ZVJlY29yZCIsInJlbG9hZCIsImZ1bmN0aW9uYWwiLCJleHBvcnRzIiwic29ydEJ5S2V5IiwiYXJyYXkiLCJzb3J0IiwiYSIsImIiLCJ4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QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFdBQVUsMERBQTBEO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBd0I7QUFDeEIsd0JBQXVCO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQVksT0FBTztBQUNuQixhQUFZLFFBQVE7QUFDcEIsYUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQVksT0FBTztBQUNuQixhQUFZLFFBQVE7QUFDcEIsYUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBOztB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1AsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7O0FBRUEsa0NBQWlDLFNBQVM7QUFDMUM7QUFDQTtBQUNBLGVBQWM7QUFDZDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVCxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFD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OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNEIsWUFBWTtBQUN4QyxNQUFLO0FBQ0w7QUFDQSwwQkFBeUIsWUFBWTtBQUNyQztBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUM7O0FBRUQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJCQUEwQixpQkFBaUI7O0FBRTNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLElBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw0Qjs7Ozs7OztBQ3BqRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDRCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw2QkFBNEIsVUFBVTs7Ozs7OztBQ25MdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxVQUFTO0FBQ1QsTUFBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF1QixxQkFBcUI7QUFDNUM7QUFDQTtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0Esd0JBQXVCLHFCQUFxQjtBQUM1QztBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUF5QjtBQUN6QjtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCO0FBQ0E7QUFDQSwwQkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1CQUFrQixjQUFjOzs7QUFHaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDJCQUEwQiwyQkFBMkIsUUFBUSxpQkFBaUI7QUFDOUU7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxvQkFBbUIsZ0JBQWdCO0FBQ25DO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLG1CQUFrQjtBQUNsQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsNENBQTJDO0FBQzNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdDQUF1QyxLQUFLLEVBQUUsS0FBSyxNQUFNLEVBQUU7QUFDM0Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjs7QUFFckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLDBCQUF5QjtBQUN6QjtBQUNBOztBQUVBO0FBQ0Esc0JBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjtBQUNBLGNBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckIsa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7O0FBRUE7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCw0QkFBMkI7QUFDM0I7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTBCO0FBQzFCOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUNBQW9DLEVBQUU7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSwwQkFBeUI7QUFDekI7QUFDQTs7QUFFQTtBQUNBLG9CQUFtQjtBQUNuQjs7QUFFQSx1QkFBc0I7O0FBRXRCO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0EsVUFBUztBQUNUO0FBQ0E7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OztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2IsVUFBUztBQUNUOztBQUVBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxVQUFTOztBQUVUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7O0FBRUE7QUFDQSxFQUFDOztBQUVEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVEQUFzRCxHQUFHLHFCQUFxQjtBQUM5RTs7QUFFQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBLHVCQUFzQjtBQUN0Qix1QkFBc0I7QUFDdEIsMEJBQXlCLG1DQUFtQzs7QUFFNUQ7O0FBRUEsMEJBQXlCO0FBQ3pCOztBQUVBLDJCQUEwQjs7QUFFMUI7QUFDQTtBQUNBLE1BQUs7O0FBRUw7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7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QWNBO0FBL0VBO0FBZ0ZBO0FBcEZBLEc7Ozs7OztBQzlHQSxpQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBLE1BQUs7QUFDTCxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsTUFBSztBQUNMLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNILEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFIiwiZmlsZSI6ImFwcC5idWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDU5MjI2ZWMzN2Y0ZTRiZjMyZDUzIiwiLy8gaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xuaW1wb3J0IFZ1ZVJvdXRlciBmcm9tICd2dWUtcm91dGVyJztcbmltcG9ydCBWdWVSZXNvdXJjZSBmcm9tICd2dWUtcmVzb3VyY2UnO1xuXG5cbmltcG9ydCBVc2FnZSBmcm9tICcuL2NvbXBvbmVudHMvdXNhZ2UudnVlJztcbmltcG9ydCBFeE5hdiBmcm9tICcuL2NvbXBvbmVudHMvbmF2LnZ1ZSc7XG5pbXBvcnQgVGV4dEZpZWxkcyBmcm9tICcuL2NvbXBvbmVudHMvdGV4dGZpZWxkcy52dWUnO1xuaW1wb3J0IEJ1dHRvbnMgZnJvbSAnLi9jb21wb25lbnRzL2J1dHRvbnMudnVlJztcbmltcG9ydCBTbmFja2JhciBmcm9tICcuL2NvbXBvbmVudHMvc25hY2tiYXIudnVlJztcbmltcG9ydCBTZWxlY3RzIGZyb20gJy4vY29tcG9uZW50cy9zZWxlY3RzLnZ1ZSc7XG5pbXBvcnQgU2xpZGVycyBmcm9tICcuL2NvbXBvbmVudHMvc2xpZGVycy52dWUnO1xuaW1wb3J0IEJhZGdlcyBmcm9tICcuL2NvbXBvbmVudHMvYmFkZ2VzLnZ1ZSc7XG5pbXBvcnQgTWVudSBmcm9tICcuL2NvbXBvbmVudHMvbWVudS52dWUnO1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi9jb21wb25lbnRzL2xvYWRpbmcudnVlJztcbmltcG9ydCBUb2dnbGVzIGZyb20gJy4vY29tcG9uZW50cy90b2dnbGVzLnZ1ZSc7XG5pbXBvcnQgVGFicyBmcm9tICcuL2NvbXBvbmVudHMvdGFicy52dWUnO1xuaW1wb3J0IFRvb2x0aXBzIGZyb20gJy4vY29tcG9uZW50cy90b29sdGlwcy52dWUnO1xuaW1wb3J0IFRhYmxlIGZyb20gJy4vY29tcG9uZW50cy90YWJsZS52dWUnO1xuaW1wb3J0IERpYWxvZ3MgZnJvbSAnLi9jb21wb25lbnRzL2RpYWxvZ3MudnVlJztcbmltcG9ydCBDYXJkcyBmcm9tICcuL2NvbXBvbmVudHMvY2FyZHMudnVlJztcbmltcG9ydCBDaGlwcyBmcm9tICcuL2NvbXBvbmVudHMvY2hpcHMudnVlJztcbmltcG9ydCBMaXN0cyBmcm9tICcuL2NvbXBvbmVudHMvbGlzdHMudnVlJztcblxuLy8gY29uc3QgY29tcG9uZW50cyA9IHtcbi8vICAgRXhOYXYsXG4vLyB9XG5cblZ1ZS51c2UoVnVlUm91dGVyKTtcblZ1ZS51c2UoVnVlUmV1c2FibGVNYXRlcmlhbENvbXBvbmVudHMpO1xuVnVlLnVzZShWdWVSZXNvdXJjZSk7XG5cblxuY29uc3Qgcm91dGVzID0gW1xuICB7IHBhdGg6ICcvdGV4dGZpZWxkcycsIGNvbXBvbmVudDogVGV4dEZpZWxkcywgbmFtZTogJ3RleHRmaWVsZHMnfSxcbiAgeyBwYXRoOiAnL2J1dHRvbnMnLCBjb21wb25lbnQ6IEJ1dHRvbnMgfSxcbiAgeyBwYXRoOiAnL3NuYWNrYmFyJywgY29tcG9uZW50OiBTbmFja2JhciB9LFxuICB7IHBhdGg6ICcvc2VsZWN0cycsIGNvbXBvbmVudDogU2VsZWN0cyB9LFxuICB7IHBhdGg6ICcvc2xpZGVycycsIGNvbXBvbmVudDogU2xpZGVycyB9LFxuICB7IHBhdGg6ICcvYmFkZ2VzJywgY29tcG9uZW50OiBCYWRnZXMgfSxcbiAgeyBwYXRoOiAnL21lbnUnLCBjb21wb25lbnQ6IE1lbnUgfSxcbiAgeyBwYXRoOiAnL2xvYWRpbmcnLCBjb21wb25lbnQ6IExvYWRpbmcgfSxcbiAgeyBwYXRoOiAnL3RvZ2dsZXMnLCBjb21wb25lbnQ6IFRvZ2dsZXMgfSxcbiAgeyBwYXRoOiAnL3RhYnMnLCBjb21wb25lbnQ6IFRhYnMgfSxcbiAgeyBwYXRoOiAnL3Rvb2x0aXBzJywgY29tcG9uZW50OiBUb29sdGlwcyB9LFxuICB7IHBhdGg6ICcvdGFibGUnLCBjb21wb25lbnQ6IFRhYmxlIH0sXG4gIHsgcGF0aDogJy9kaWFsb2dzJywgY29tcG9uZW50OiBEaWFsb2dzIH0sXG4gIHsgcGF0aDogJy9jYXJkcycsIGNvbXBvbmVudDogQ2FyZHMgfSxcbiAgeyBwYXRoOiAnL2NoaXBzJywgY29tcG9uZW50OiBDaGlwcyB9LFxuICB7IHBhdGg6ICcvbGlzdHMnLCBjb21wb25lbnQ6IExpc3RzIH0sXG4gIHsgcGF0aDogJy91c2FnZScsIGNvbXBvbmVudDogVXNhZ2UgfSxcbiAgeyBwYXRoOiAnKicsIHJlZGlyZWN0OiB7IG5hbWU6ICd0ZXh0ZmllbGRzJyB9fSxcbl07XG5cbmNvbnN0IHJvdXRlciA9IG5ldyBWdWVSb3V0ZXIoe1xuICBiYXNlOiAnL2V4YW1wbGVzLycsXG4gIGxpbmtBY3RpdmVDbGFzczogJ21kbC1uYXZpZ2F0aW9uX19saW5rLS1hY3RpdmUnLFxuICByb3V0ZXNcbn0pO1xuXG5uZXcgVnVlKHtcbiAgZWw6ICcjZXhhbXBsZXMnLFxuICByb3V0ZXIsXG4gIGNvbXBvbmVudHM6IHtcbiAgICBFeE5hdixcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIG9uU3VibWl0OiBmdW5jdGlvbihlKSB7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmZvcm0uZmlyc3ROYW1lKTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuZm9ybS5sYXN0TmFtZSk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmZvcm0uZW1haWwpO1xuICAgIH1cbiAgfVxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZXhhbXBsZXMvc3JjL2FwcC5qcyIsIi8qKlxuICAqIHZ1ZS1yb3V0ZXIgdjIuMS4yXG4gICogKGMpIDIwMTcgRXZhbiBZb3VcbiAgKiBAbGljZW5zZSBNSVRcbiAgKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIFZpZXcgPSB7XG4gIG5hbWU6ICdyb3V0ZXItdmlldycsXG4gIGZ1bmN0aW9uYWw6IHRydWUsXG4gIHByb3BzOiB7XG4gICAgbmFtZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2RlZmF1bHQnXG4gICAgfVxuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlciAoaCwgcmVmKSB7XG4gICAgdmFyIHByb3BzID0gcmVmLnByb3BzO1xuICAgIHZhciBjaGlsZHJlbiA9IHJlZi5jaGlsZHJlbjtcbiAgICB2YXIgcGFyZW50ID0gcmVmLnBhcmVudDtcbiAgICB2YXIgZGF0YSA9IHJlZi5kYXRhO1xuXG4gICAgZGF0YS5yb3V0ZXJWaWV3ID0gdHJ1ZVxuXG4gICAgdmFyIG5hbWUgPSBwcm9wcy5uYW1lXG4gICAgdmFyIHJvdXRlID0gcGFyZW50LiRyb3V0ZVxuICAgIHZhciBjYWNoZSA9IHBhcmVudC5fcm91dGVyVmlld0NhY2hlIHx8IChwYXJlbnQuX3JvdXRlclZpZXdDYWNoZSA9IHt9KVxuXG4gICAgLy8gZGV0ZXJtaW5lIGN1cnJlbnQgdmlldyBkZXB0aCwgYWxzbyBjaGVjayB0byBzZWUgaWYgdGhlIHRyZWVcbiAgICAvLyBoYXMgYmVlbiB0b2dnbGVkIGluYWN0aXZlIGJ1dCBrZXB0LWFsaXZlLlxuICAgIHZhciBkZXB0aCA9IDBcbiAgICB2YXIgaW5hY3RpdmUgPSBmYWxzZVxuICAgIHdoaWxlIChwYXJlbnQpIHtcbiAgICAgIGlmIChwYXJlbnQuJHZub2RlICYmIHBhcmVudC4kdm5vZGUuZGF0YS5yb3V0ZXJWaWV3KSB7XG4gICAgICAgIGRlcHRoKytcbiAgICAgIH1cbiAgICAgIGlmIChwYXJlbnQuX2luYWN0aXZlKSB7XG4gICAgICAgIGluYWN0aXZlID0gdHJ1ZVxuICAgICAgfVxuICAgICAgcGFyZW50ID0gcGFyZW50LiRwYXJlbnRcbiAgICB9XG4gICAgZGF0YS5yb3V0ZXJWaWV3RGVwdGggPSBkZXB0aFxuXG4gICAgLy8gcmVuZGVyIHByZXZpb3VzIHZpZXcgaWYgdGhlIHRyZWUgaXMgaW5hY3RpdmUgYW5kIGtlcHQtYWxpdmVcbiAgICBpZiAoaW5hY3RpdmUpIHtcbiAgICAgIHJldHVybiBoKGNhY2hlW25hbWVdLCBkYXRhLCBjaGlsZHJlbilcbiAgICB9XG5cbiAgICB2YXIgbWF0Y2hlZCA9IHJvdXRlLm1hdGNoZWRbZGVwdGhdXG4gICAgLy8gcmVuZGVyIGVtcHR5IG5vZGUgaWYgbm8gbWF0Y2hlZCByb3V0ZVxuICAgIGlmICghbWF0Y2hlZCkge1xuICAgICAgY2FjaGVbbmFtZV0gPSBudWxsXG4gICAgICByZXR1cm4gaCgpXG4gICAgfVxuXG4gICAgdmFyIGNvbXBvbmVudCA9IGNhY2hlW25hbWVdID0gbWF0Y2hlZC5jb21wb25lbnRzW25hbWVdXG5cbiAgICAvLyBpbmplY3QgaW5zdGFuY2UgcmVnaXN0cmF0aW9uIGhvb2tzXG4gICAgdmFyIGhvb2tzID0gZGF0YS5ob29rIHx8IChkYXRhLmhvb2sgPSB7fSlcbiAgICBob29rcy5pbml0ID0gZnVuY3Rpb24gKHZub2RlKSB7XG4gICAgICBtYXRjaGVkLmluc3RhbmNlc1tuYW1lXSA9IHZub2RlLmNoaWxkXG4gICAgfVxuICAgIGhvb2tzLnByZXBhdGNoID0gZnVuY3Rpb24gKG9sZFZub2RlLCB2bm9kZSkge1xuICAgICAgbWF0Y2hlZC5pbnN0YW5jZXNbbmFtZV0gPSB2bm9kZS5jaGlsZFxuICAgIH1cbiAgICBob29rcy5kZXN0cm95ID0gZnVuY3Rpb24gKHZub2RlKSB7XG4gICAgICBpZiAobWF0Y2hlZC5pbnN0YW5jZXNbbmFtZV0gPT09IHZub2RlLmNoaWxkKSB7XG4gICAgICAgIG1hdGNoZWQuaW5zdGFuY2VzW25hbWVdID0gdW5kZWZpbmVkXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGgoY29tcG9uZW50LCBkYXRhLCBjaGlsZHJlbilcbiAgfVxufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gYXNzZXJ0IChjb25kaXRpb24sIG1lc3NhZ2UpIHtcbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoKFwiW3Z1ZS1yb3V0ZXJdIFwiICsgbWVzc2FnZSkpXG4gIH1cbn1cblxuZnVuY3Rpb24gd2FybiAoY29uZGl0aW9uLCBtZXNzYWdlKSB7XG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmIGNvbnNvbGUud2FybigoXCJbdnVlLXJvdXRlcl0gXCIgKyBtZXNzYWdlKSlcbiAgfVxufVxuXG4vKiAgKi9cblxudmFyIGVuY29kZSA9IGVuY29kZVVSSUNvbXBvbmVudFxudmFyIGRlY29kZSA9IGRlY29kZVVSSUNvbXBvbmVudFxuXG5mdW5jdGlvbiByZXNvbHZlUXVlcnkgKFxuICBxdWVyeSxcbiAgZXh0cmFRdWVyeVxuKSB7XG4gIGlmICggZXh0cmFRdWVyeSA9PT0gdm9pZCAwICkgZXh0cmFRdWVyeSA9IHt9O1xuXG4gIGlmIChxdWVyeSkge1xuICAgIHZhciBwYXJzZWRRdWVyeVxuICAgIHRyeSB7XG4gICAgICBwYXJzZWRRdWVyeSA9IHBhcnNlUXVlcnkocXVlcnkpXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKGZhbHNlLCBlLm1lc3NhZ2UpXG4gICAgICBwYXJzZWRRdWVyeSA9IHt9XG4gICAgfVxuICAgIGZvciAodmFyIGtleSBpbiBleHRyYVF1ZXJ5KSB7XG4gICAgICBwYXJzZWRRdWVyeVtrZXldID0gZXh0cmFRdWVyeVtrZXldXG4gICAgfVxuICAgIHJldHVybiBwYXJzZWRRdWVyeVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBleHRyYVF1ZXJ5XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFyc2VRdWVyeSAocXVlcnkpIHtcbiAgdmFyIHJlcyA9IHt9XG5cbiAgcXVlcnkgPSBxdWVyeS50cmltKCkucmVwbGFjZSgvXihcXD98I3wmKS8sICcnKVxuXG4gIGlmICghcXVlcnkpIHtcbiAgICByZXR1cm4gcmVzXG4gIH1cblxuICBxdWVyeS5zcGxpdCgnJicpLmZvckVhY2goZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgdmFyIHBhcnRzID0gcGFyYW0ucmVwbGFjZSgvXFwrL2csICcgJykuc3BsaXQoJz0nKVxuICAgIHZhciBrZXkgPSBkZWNvZGUocGFydHMuc2hpZnQoKSlcbiAgICB2YXIgdmFsID0gcGFydHMubGVuZ3RoID4gMFxuICAgICAgPyBkZWNvZGUocGFydHMuam9pbignPScpKVxuICAgICAgOiBudWxsXG5cbiAgICBpZiAocmVzW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVzW2tleV0gPSB2YWxcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocmVzW2tleV0pKSB7XG4gICAgICByZXNba2V5XS5wdXNoKHZhbClcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzW2tleV0gPSBbcmVzW2tleV0sIHZhbF1cbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIHJlc1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlRdWVyeSAob2JqKSB7XG4gIHZhciByZXMgPSBvYmogPyBPYmplY3Qua2V5cyhvYmopLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgdmFyIHZhbCA9IG9ialtrZXldXG5cbiAgICBpZiAodmFsID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiAnJ1xuICAgIH1cblxuICAgIGlmICh2YWwgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBlbmNvZGUoa2V5KVxuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICAgIHZhciByZXN1bHQgPSBbXVxuICAgICAgdmFsLnNsaWNlKCkuZm9yRWFjaChmdW5jdGlvbiAodmFsMikge1xuICAgICAgICBpZiAodmFsMiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbDIgPT09IG51bGwpIHtcbiAgICAgICAgICByZXN1bHQucHVzaChlbmNvZGUoa2V5KSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHQucHVzaChlbmNvZGUoa2V5KSArICc9JyArIGVuY29kZSh2YWwyKSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHJldHVybiByZXN1bHQuam9pbignJicpXG4gICAgfVxuXG4gICAgcmV0dXJuIGVuY29kZShrZXkpICsgJz0nICsgZW5jb2RlKHZhbClcbiAgfSkuZmlsdGVyKGZ1bmN0aW9uICh4KSB7IHJldHVybiB4Lmxlbmd0aCA+IDA7IH0pLmpvaW4oJyYnKSA6IG51bGxcbiAgcmV0dXJuIHJlcyA/IChcIj9cIiArIHJlcykgOiAnJ1xufVxuXG4vKiAgKi9cblxudmFyIHRyYWlsaW5nU2xhc2hSRSA9IC9cXC8/JC9cblxuZnVuY3Rpb24gY3JlYXRlUm91dGUgKFxuICByZWNvcmQsXG4gIGxvY2F0aW9uLFxuICByZWRpcmVjdGVkRnJvbVxuKSB7XG4gIHZhciByb3V0ZSA9IHtcbiAgICBuYW1lOiBsb2NhdGlvbi5uYW1lIHx8IChyZWNvcmQgJiYgcmVjb3JkLm5hbWUpLFxuICAgIG1ldGE6IChyZWNvcmQgJiYgcmVjb3JkLm1ldGEpIHx8IHt9LFxuICAgIHBhdGg6IGxvY2F0aW9uLnBhdGggfHwgJy8nLFxuICAgIGhhc2g6IGxvY2F0aW9uLmhhc2ggfHwgJycsXG4gICAgcXVlcnk6IGxvY2F0aW9uLnF1ZXJ5IHx8IHt9LFxuICAgIHBhcmFtczogbG9jYXRpb24ucGFyYW1zIHx8IHt9LFxuICAgIGZ1bGxQYXRoOiBnZXRGdWxsUGF0aChsb2NhdGlvbiksXG4gICAgbWF0Y2hlZDogcmVjb3JkID8gZm9ybWF0TWF0Y2gocmVjb3JkKSA6IFtdXG4gIH1cbiAgaWYgKHJlZGlyZWN0ZWRGcm9tKSB7XG4gICAgcm91dGUucmVkaXJlY3RlZEZyb20gPSBnZXRGdWxsUGF0aChyZWRpcmVjdGVkRnJvbSlcbiAgfVxuICByZXR1cm4gT2JqZWN0LmZyZWV6ZShyb3V0ZSlcbn1cblxuLy8gdGhlIHN0YXJ0aW5nIHJvdXRlIHRoYXQgcmVwcmVzZW50cyB0aGUgaW5pdGlhbCBzdGF0ZVxudmFyIFNUQVJUID0gY3JlYXRlUm91dGUobnVsbCwge1xuICBwYXRoOiAnLydcbn0pXG5cbmZ1bmN0aW9uIGZvcm1hdE1hdGNoIChyZWNvcmQpIHtcbiAgdmFyIHJlcyA9IFtdXG4gIHdoaWxlIChyZWNvcmQpIHtcbiAgICByZXMudW5zaGlmdChyZWNvcmQpXG4gICAgcmVjb3JkID0gcmVjb3JkLnBhcmVudFxuICB9XG4gIHJldHVybiByZXNcbn1cblxuZnVuY3Rpb24gZ2V0RnVsbFBhdGggKHJlZikge1xuICB2YXIgcGF0aCA9IHJlZi5wYXRoO1xuICB2YXIgcXVlcnkgPSByZWYucXVlcnk7IGlmICggcXVlcnkgPT09IHZvaWQgMCApIHF1ZXJ5ID0ge307XG4gIHZhciBoYXNoID0gcmVmLmhhc2g7IGlmICggaGFzaCA9PT0gdm9pZCAwICkgaGFzaCA9ICcnO1xuXG4gIHJldHVybiAocGF0aCB8fCAnLycpICsgc3RyaW5naWZ5UXVlcnkocXVlcnkpICsgaGFzaFxufVxuXG5mdW5jdGlvbiBpc1NhbWVSb3V0ZSAoYSwgYikge1xuICBpZiAoYiA9PT0gU1RBUlQpIHtcbiAgICByZXR1cm4gYSA9PT0gYlxuICB9IGVsc2UgaWYgKCFiKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH0gZWxzZSBpZiAoYS5wYXRoICYmIGIucGF0aCkge1xuICAgIHJldHVybiAoXG4gICAgICBhLnBhdGgucmVwbGFjZSh0cmFpbGluZ1NsYXNoUkUsICcnKSA9PT0gYi5wYXRoLnJlcGxhY2UodHJhaWxpbmdTbGFzaFJFLCAnJykgJiZcbiAgICAgIGEuaGFzaCA9PT0gYi5oYXNoICYmXG4gICAgICBpc09iamVjdEVxdWFsKGEucXVlcnksIGIucXVlcnkpXG4gICAgKVxuICB9IGVsc2UgaWYgKGEubmFtZSAmJiBiLm5hbWUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgYS5uYW1lID09PSBiLm5hbWUgJiZcbiAgICAgIGEuaGFzaCA9PT0gYi5oYXNoICYmXG4gICAgICBpc09iamVjdEVxdWFsKGEucXVlcnksIGIucXVlcnkpICYmXG4gICAgICBpc09iamVjdEVxdWFsKGEucGFyYW1zLCBiLnBhcmFtcylcbiAgICApXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuZnVuY3Rpb24gaXNPYmplY3RFcXVhbCAoYSwgYikge1xuICBpZiAoIGEgPT09IHZvaWQgMCApIGEgPSB7fTtcbiAgaWYgKCBiID09PSB2b2lkIDAgKSBiID0ge307XG5cbiAgdmFyIGFLZXlzID0gT2JqZWN0LmtleXMoYSlcbiAgdmFyIGJLZXlzID0gT2JqZWN0LmtleXMoYilcbiAgaWYgKGFLZXlzLmxlbmd0aCAhPT0gYktleXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgcmV0dXJuIGFLZXlzLmV2ZXJ5KGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIFN0cmluZyhhW2tleV0pID09PSBTdHJpbmcoYltrZXldKTsgfSlcbn1cblxuZnVuY3Rpb24gaXNJbmNsdWRlZFJvdXRlIChjdXJyZW50LCB0YXJnZXQpIHtcbiAgcmV0dXJuIChcbiAgICBjdXJyZW50LnBhdGgucmVwbGFjZSh0cmFpbGluZ1NsYXNoUkUsICcvJykuaW5kZXhPZihcbiAgICAgIHRhcmdldC5wYXRoLnJlcGxhY2UodHJhaWxpbmdTbGFzaFJFLCAnLycpXG4gICAgKSA9PT0gMCAmJlxuICAgICghdGFyZ2V0Lmhhc2ggfHwgY3VycmVudC5oYXNoID09PSB0YXJnZXQuaGFzaCkgJiZcbiAgICBxdWVyeUluY2x1ZGVzKGN1cnJlbnQucXVlcnksIHRhcmdldC5xdWVyeSlcbiAgKVxufVxuXG5mdW5jdGlvbiBxdWVyeUluY2x1ZGVzIChjdXJyZW50LCB0YXJnZXQpIHtcbiAgZm9yICh2YXIga2V5IGluIHRhcmdldCkge1xuICAgIGlmICghKGtleSBpbiBjdXJyZW50KSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlXG59XG5cbi8qICAqL1xuXG4vLyB3b3JrIGFyb3VuZCB3ZWlyZCBmbG93IGJ1Z1xudmFyIHRvVHlwZXMgPSBbU3RyaW5nLCBPYmplY3RdXG5cbnZhciBMaW5rID0ge1xuICBuYW1lOiAncm91dGVyLWxpbmsnLFxuICBwcm9wczoge1xuICAgIHRvOiB7XG4gICAgICB0eXBlOiB0b1R5cGVzLFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIHRhZzoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2EnXG4gICAgfSxcbiAgICBleGFjdDogQm9vbGVhbixcbiAgICBhcHBlbmQ6IEJvb2xlYW4sXG4gICAgcmVwbGFjZTogQm9vbGVhbixcbiAgICBhY3RpdmVDbGFzczogU3RyaW5nLFxuICAgIGV2ZW50OiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBBcnJheV0sXG4gICAgICBkZWZhdWx0OiAnY2xpY2snXG4gICAgfVxuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlciAoaCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgdmFyIHJvdXRlciA9IHRoaXMuJHJvdXRlclxuICAgIHZhciBjdXJyZW50ID0gdGhpcy4kcm91dGVcbiAgICB2YXIgcmVmID0gcm91dGVyLnJlc29sdmUodGhpcy50bywgY3VycmVudCwgdGhpcy5hcHBlbmQpO1xuICAgIHZhciBub3JtYWxpemVkVG8gPSByZWYubm9ybWFsaXplZFRvO1xuICAgIHZhciByZXNvbHZlZCA9IHJlZi5yZXNvbHZlZDtcbiAgICB2YXIgaHJlZiA9IHJlZi5ocmVmO1xuICAgIHZhciBjbGFzc2VzID0ge31cbiAgICB2YXIgYWN0aXZlQ2xhc3MgPSB0aGlzLmFjdGl2ZUNsYXNzIHx8IHJvdXRlci5vcHRpb25zLmxpbmtBY3RpdmVDbGFzcyB8fCAncm91dGVyLWxpbmstYWN0aXZlJ1xuICAgIHZhciBjb21wYXJlVGFyZ2V0ID0gbm9ybWFsaXplZFRvLnBhdGggPyBjcmVhdGVSb3V0ZShudWxsLCBub3JtYWxpemVkVG8pIDogcmVzb2x2ZWRcbiAgICBjbGFzc2VzW2FjdGl2ZUNsYXNzXSA9IHRoaXMuZXhhY3RcbiAgICAgID8gaXNTYW1lUm91dGUoY3VycmVudCwgY29tcGFyZVRhcmdldClcbiAgICAgIDogaXNJbmNsdWRlZFJvdXRlKGN1cnJlbnQsIGNvbXBhcmVUYXJnZXQpXG5cbiAgICB2YXIgaGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoZ3VhcmRFdmVudChlKSkge1xuICAgICAgICBpZiAodGhpcyQxLnJlcGxhY2UpIHtcbiAgICAgICAgICByb3V0ZXIucmVwbGFjZShub3JtYWxpemVkVG8pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcm91dGVyLnB1c2gobm9ybWFsaXplZFRvKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIG9uID0geyBjbGljazogZ3VhcmRFdmVudCB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5ldmVudCkpIHtcbiAgICAgIHRoaXMuZXZlbnQuZm9yRWFjaChmdW5jdGlvbiAoZSkgeyBvbltlXSA9IGhhbmRsZXIgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgb25bdGhpcy5ldmVudF0gPSBoYW5kbGVyXG4gICAgfVxuXG4gICAgdmFyIGRhdGEgPSB7XG4gICAgICBjbGFzczogY2xhc3Nlc1xuICAgIH1cblxuICAgIGlmICh0aGlzLnRhZyA9PT0gJ2EnKSB7XG4gICAgICBkYXRhLm9uID0gb25cbiAgICAgIGRhdGEuYXR0cnMgPSB7IGhyZWY6IGhyZWYgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBmaW5kIHRoZSBmaXJzdCA8YT4gY2hpbGQgYW5kIGFwcGx5IGxpc3RlbmVyIGFuZCBocmVmXG4gICAgICB2YXIgYSA9IGZpbmRBbmNob3IodGhpcy4kc2xvdHMuZGVmYXVsdClcbiAgICAgIGlmIChhKSB7XG4gICAgICAgIC8vIGluIGNhc2UgdGhlIDxhPiBpcyBhIHN0YXRpYyBub2RlXG4gICAgICAgIGEuaXNTdGF0aWMgPSBmYWxzZVxuICAgICAgICB2YXIgZXh0ZW5kID0gX1Z1ZS51dGlsLmV4dGVuZFxuICAgICAgICB2YXIgYURhdGEgPSBhLmRhdGEgPSBleHRlbmQoe30sIGEuZGF0YSlcbiAgICAgICAgYURhdGEub24gPSBvblxuICAgICAgICB2YXIgYUF0dHJzID0gYS5kYXRhLmF0dHJzID0gZXh0ZW5kKHt9LCBhLmRhdGEuYXR0cnMpXG4gICAgICAgIGFBdHRycy5ocmVmID0gaHJlZlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZG9lc24ndCBoYXZlIDxhPiBjaGlsZCwgYXBwbHkgbGlzdGVuZXIgdG8gc2VsZlxuICAgICAgICBkYXRhLm9uID0gb25cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaCh0aGlzLnRhZywgZGF0YSwgdGhpcy4kc2xvdHMuZGVmYXVsdClcbiAgfVxufVxuXG5mdW5jdGlvbiBndWFyZEV2ZW50IChlKSB7XG4gIC8vIGRvbid0IHJlZGlyZWN0IHdpdGggY29udHJvbCBrZXlzXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoZS5tZXRhS2V5IHx8IGUuY3RybEtleSB8fCBlLnNoaWZ0S2V5KSB7IHJldHVybiB9XG4gIC8vIGRvbid0IHJlZGlyZWN0IHdoZW4gcHJldmVudERlZmF1bHQgY2FsbGVkXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoZS5kZWZhdWx0UHJldmVudGVkKSB7IHJldHVybiB9XG4gIC8vIGRvbid0IHJlZGlyZWN0IG9uIHJpZ2h0IGNsaWNrXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoZS5idXR0b24gIT09IHVuZGVmaW5lZCAmJiBlLmJ1dHRvbiAhPT0gMCkgeyByZXR1cm4gfVxuICAvLyBkb24ndCByZWRpcmVjdCBpZiBgdGFyZ2V0PVwiX2JsYW5rXCJgXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoZS50YXJnZXQgJiYgZS50YXJnZXQuZ2V0QXR0cmlidXRlKSB7XG4gICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgndGFyZ2V0JylcbiAgICBpZiAoL1xcYl9ibGFua1xcYi9pLnRlc3QodGFyZ2V0KSkgeyByZXR1cm4gfVxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIHJldHVybiB0cnVlXG59XG5cbmZ1bmN0aW9uIGZpbmRBbmNob3IgKGNoaWxkcmVuKSB7XG4gIGlmIChjaGlsZHJlbikge1xuICAgIHZhciBjaGlsZFxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkID0gY2hpbGRyZW5baV1cbiAgICAgIGlmIChjaGlsZC50YWcgPT09ICdhJykge1xuICAgICAgICByZXR1cm4gY2hpbGRcbiAgICAgIH1cbiAgICAgIGlmIChjaGlsZC5jaGlsZHJlbiAmJiAoY2hpbGQgPSBmaW5kQW5jaG9yKGNoaWxkLmNoaWxkcmVuKSkpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbnZhciBfVnVlXG5cbmZ1bmN0aW9uIGluc3RhbGwgKFZ1ZSkge1xuICBpZiAoaW5zdGFsbC5pbnN0YWxsZWQpIHsgcmV0dXJuIH1cbiAgaW5zdGFsbC5pbnN0YWxsZWQgPSB0cnVlXG5cbiAgX1Z1ZSA9IFZ1ZVxuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWdWUucHJvdG90eXBlLCAnJHJvdXRlcicsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCAoKSB7IHJldHVybiB0aGlzLiRyb290Ll9yb3V0ZXIgfVxuICB9KVxuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWdWUucHJvdG90eXBlLCAnJHJvdXRlJywge1xuICAgIGdldDogZnVuY3Rpb24gZ2V0JDEgKCkgeyByZXR1cm4gdGhpcy4kcm9vdC5fcm91dGUgfVxuICB9KVxuXG4gIFZ1ZS5taXhpbih7XG4gICAgYmVmb3JlQ3JlYXRlOiBmdW5jdGlvbiBiZWZvcmVDcmVhdGUgKCkge1xuICAgICAgaWYgKHRoaXMuJG9wdGlvbnMucm91dGVyKSB7XG4gICAgICAgIHRoaXMuX3JvdXRlciA9IHRoaXMuJG9wdGlvbnMucm91dGVyXG4gICAgICAgIHRoaXMuX3JvdXRlci5pbml0KHRoaXMpXG4gICAgICAgIFZ1ZS51dGlsLmRlZmluZVJlYWN0aXZlKHRoaXMsICdfcm91dGUnLCB0aGlzLl9yb3V0ZXIuaGlzdG9yeS5jdXJyZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSlcblxuICBWdWUuY29tcG9uZW50KCdyb3V0ZXItdmlldycsIFZpZXcpXG4gIFZ1ZS5jb21wb25lbnQoJ3JvdXRlci1saW5rJywgTGluaylcblxuICB2YXIgc3RyYXRzID0gVnVlLmNvbmZpZy5vcHRpb25NZXJnZVN0cmF0ZWdpZXNcbiAgLy8gdXNlIHRoZSBzYW1lIGhvb2sgbWVyZ2luZyBzdHJhdGVneSBmb3Igcm91dGUgaG9va3NcbiAgc3RyYXRzLmJlZm9yZVJvdXRlRW50ZXIgPSBzdHJhdHMuYmVmb3JlUm91dGVMZWF2ZSA9IHN0cmF0cy5jcmVhdGVkXG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiByZXNvbHZlUGF0aCAoXG4gIHJlbGF0aXZlLFxuICBiYXNlLFxuICBhcHBlbmRcbikge1xuICBpZiAocmVsYXRpdmUuY2hhckF0KDApID09PSAnLycpIHtcbiAgICByZXR1cm4gcmVsYXRpdmVcbiAgfVxuXG4gIGlmIChyZWxhdGl2ZS5jaGFyQXQoMCkgPT09ICc/JyB8fCByZWxhdGl2ZS5jaGFyQXQoMCkgPT09ICcjJykge1xuICAgIHJldHVybiBiYXNlICsgcmVsYXRpdmVcbiAgfVxuXG4gIHZhciBzdGFjayA9IGJhc2Uuc3BsaXQoJy8nKVxuXG4gIC8vIHJlbW92ZSB0cmFpbGluZyBzZWdtZW50IGlmOlxuICAvLyAtIG5vdCBhcHBlbmRpbmdcbiAgLy8gLSBhcHBlbmRpbmcgdG8gdHJhaWxpbmcgc2xhc2ggKGxhc3Qgc2VnbWVudCBpcyBlbXB0eSlcbiAgaWYgKCFhcHBlbmQgfHwgIXN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdKSB7XG4gICAgc3RhY2sucG9wKClcbiAgfVxuXG4gIC8vIHJlc29sdmUgcmVsYXRpdmUgcGF0aFxuICB2YXIgc2VnbWVudHMgPSByZWxhdGl2ZS5yZXBsYWNlKC9eXFwvLywgJycpLnNwbGl0KCcvJylcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWdtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzZWdtZW50ID0gc2VnbWVudHNbaV1cbiAgICBpZiAoc2VnbWVudCA9PT0gJy4nKSB7XG4gICAgICBjb250aW51ZVxuICAgIH0gZWxzZSBpZiAoc2VnbWVudCA9PT0gJy4uJykge1xuICAgICAgc3RhY2sucG9wKClcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhY2sucHVzaChzZWdtZW50KVxuICAgIH1cbiAgfVxuXG4gIC8vIGVuc3VyZSBsZWFkaW5nIHNsYXNoXG4gIGlmIChzdGFja1swXSAhPT0gJycpIHtcbiAgICBzdGFjay51bnNoaWZ0KCcnKVxuICB9XG5cbiAgcmV0dXJuIHN0YWNrLmpvaW4oJy8nKVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhdGggKHBhdGgpIHtcbiAgdmFyIGhhc2ggPSAnJ1xuICB2YXIgcXVlcnkgPSAnJ1xuXG4gIHZhciBoYXNoSW5kZXggPSBwYXRoLmluZGV4T2YoJyMnKVxuICBpZiAoaGFzaEluZGV4ID49IDApIHtcbiAgICBoYXNoID0gcGF0aC5zbGljZShoYXNoSW5kZXgpXG4gICAgcGF0aCA9IHBhdGguc2xpY2UoMCwgaGFzaEluZGV4KVxuICB9XG5cbiAgdmFyIHF1ZXJ5SW5kZXggPSBwYXRoLmluZGV4T2YoJz8nKVxuICBpZiAocXVlcnlJbmRleCA+PSAwKSB7XG4gICAgcXVlcnkgPSBwYXRoLnNsaWNlKHF1ZXJ5SW5kZXggKyAxKVxuICAgIHBhdGggPSBwYXRoLnNsaWNlKDAsIHF1ZXJ5SW5kZXgpXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHBhdGg6IHBhdGgsXG4gICAgcXVlcnk6IHF1ZXJ5LFxuICAgIGhhc2g6IGhhc2hcbiAgfVxufVxuXG5mdW5jdGlvbiBjbGVhblBhdGggKHBhdGgpIHtcbiAgcmV0dXJuIHBhdGgucmVwbGFjZSgvXFwvXFwvL2csICcvJylcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlTWFwIChyb3V0ZXMpIHtcbiAgdmFyIHBhdGhNYXAgPSBPYmplY3QuY3JlYXRlKG51bGwpXG4gIHZhciBuYW1lTWFwID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJvdXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChyb3V0ZSkge1xuICAgIGFkZFJvdXRlUmVjb3JkKHBhdGhNYXAsIG5hbWVNYXAsIHJvdXRlKVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgcGF0aE1hcDogcGF0aE1hcCxcbiAgICBuYW1lTWFwOiBuYW1lTWFwXG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkUm91dGVSZWNvcmQgKFxuICBwYXRoTWFwLFxuICBuYW1lTWFwLFxuICByb3V0ZSxcbiAgcGFyZW50LFxuICBtYXRjaEFzXG4pIHtcbiAgdmFyIHBhdGggPSByb3V0ZS5wYXRoO1xuICB2YXIgbmFtZSA9IHJvdXRlLm5hbWU7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgYXNzZXJ0KHBhdGggIT0gbnVsbCwgXCJcXFwicGF0aFxcXCIgaXMgcmVxdWlyZWQgaW4gYSByb3V0ZSBjb25maWd1cmF0aW9uLlwiKVxuICAgIGFzc2VydChcbiAgICAgIHR5cGVvZiByb3V0ZS5jb21wb25lbnQgIT09ICdzdHJpbmcnLFxuICAgICAgXCJyb3V0ZSBjb25maWcgXFxcImNvbXBvbmVudFxcXCIgZm9yIHBhdGg6IFwiICsgKFN0cmluZyhwYXRoIHx8IG5hbWUpKSArIFwiIGNhbm5vdCBiZSBhIFwiICtcbiAgICAgIFwic3RyaW5nIGlkLiBVc2UgYW4gYWN0dWFsIGNvbXBvbmVudCBpbnN0ZWFkLlwiXG4gICAgKVxuICB9XG5cbiAgdmFyIHJlY29yZCA9IHtcbiAgICBwYXRoOiBub3JtYWxpemVQYXRoKHBhdGgsIHBhcmVudCksXG4gICAgY29tcG9uZW50czogcm91dGUuY29tcG9uZW50cyB8fCB7IGRlZmF1bHQ6IHJvdXRlLmNvbXBvbmVudCB9LFxuICAgIGluc3RhbmNlczoge30sXG4gICAgbmFtZTogbmFtZSxcbiAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICBtYXRjaEFzOiBtYXRjaEFzLFxuICAgIHJlZGlyZWN0OiByb3V0ZS5yZWRpcmVjdCxcbiAgICBiZWZvcmVFbnRlcjogcm91dGUuYmVmb3JlRW50ZXIsXG4gICAgbWV0YTogcm91dGUubWV0YSB8fCB7fVxuICB9XG5cbiAgaWYgKHJvdXRlLmNoaWxkcmVuKSB7XG4gICAgLy8gV2FybiBpZiByb3V0ZSBpcyBuYW1lZCBhbmQgaGFzIGEgZGVmYXVsdCBjaGlsZCByb3V0ZS5cbiAgICAvLyBJZiB1c2VycyBuYXZpZ2F0ZSB0byB0aGlzIHJvdXRlIGJ5IG5hbWUsIHRoZSBkZWZhdWx0IGNoaWxkIHdpbGxcbiAgICAvLyBub3QgYmUgcmVuZGVyZWQgKEdIIElzc3VlICM2MjkpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChyb3V0ZS5uYW1lICYmIHJvdXRlLmNoaWxkcmVuLnNvbWUoZnVuY3Rpb24gKGNoaWxkKSB7IHJldHVybiAvXlxcLz8kLy50ZXN0KGNoaWxkLnBhdGgpOyB9KSkge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgIFwiTmFtZWQgUm91dGUgJ1wiICsgKHJvdXRlLm5hbWUpICsgXCInIGhhcyBhIGRlZmF1bHQgY2hpbGQgcm91dGUuIFwiICtcbiAgICAgICAgICBcIldoZW4gbmF2aWdhdGluZyB0byB0aGlzIG5hbWVkIHJvdXRlICg6dG89XFxcIntuYW1lOiAnXCIgKyAocm91dGUubmFtZSkgKyBcIidcXFwiKSwgXCIgK1xuICAgICAgICAgIFwidGhlIGRlZmF1bHQgY2hpbGQgcm91dGUgd2lsbCBub3QgYmUgcmVuZGVyZWQuIFJlbW92ZSB0aGUgbmFtZSBmcm9tIFwiICtcbiAgICAgICAgICBcInRoaXMgcm91dGUgYW5kIHVzZSB0aGUgbmFtZSBvZiB0aGUgZGVmYXVsdCBjaGlsZCByb3V0ZSBmb3IgbmFtZWQgXCIgK1xuICAgICAgICAgIFwibGlua3MgaW5zdGVhZC5cIlxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIHJvdXRlLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICB2YXIgY2hpbGRNYXRjaEFzID0gbWF0Y2hBc1xuICAgICAgICA/IGNsZWFuUGF0aCgobWF0Y2hBcyArIFwiL1wiICsgKGNoaWxkLnBhdGgpKSlcbiAgICAgICAgOiB1bmRlZmluZWRcbiAgICAgIGFkZFJvdXRlUmVjb3JkKHBhdGhNYXAsIG5hbWVNYXAsIGNoaWxkLCByZWNvcmQsIGNoaWxkTWF0Y2hBcylcbiAgICB9KVxuICB9XG5cbiAgaWYgKHJvdXRlLmFsaWFzICE9PSB1bmRlZmluZWQpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShyb3V0ZS5hbGlhcykpIHtcbiAgICAgIHJvdXRlLmFsaWFzLmZvckVhY2goZnVuY3Rpb24gKGFsaWFzKSB7XG4gICAgICAgIHZhciBhbGlhc1JvdXRlID0ge1xuICAgICAgICAgIHBhdGg6IGFsaWFzLFxuICAgICAgICAgIGNoaWxkcmVuOiByb3V0ZS5jaGlsZHJlblxuICAgICAgICB9XG4gICAgICAgIGFkZFJvdXRlUmVjb3JkKHBhdGhNYXAsIG5hbWVNYXAsIGFsaWFzUm91dGUsIHBhcmVudCwgcmVjb3JkLnBhdGgpXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYWxpYXNSb3V0ZSA9IHtcbiAgICAgICAgcGF0aDogcm91dGUuYWxpYXMsXG4gICAgICAgIGNoaWxkcmVuOiByb3V0ZS5jaGlsZHJlblxuICAgICAgfVxuICAgICAgYWRkUm91dGVSZWNvcmQocGF0aE1hcCwgbmFtZU1hcCwgYWxpYXNSb3V0ZSwgcGFyZW50LCByZWNvcmQucGF0aClcbiAgICB9XG4gIH1cblxuICBpZiAoIXBhdGhNYXBbcmVjb3JkLnBhdGhdKSB7XG4gICAgcGF0aE1hcFtyZWNvcmQucGF0aF0gPSByZWNvcmRcbiAgfVxuXG4gIGlmIChuYW1lKSB7XG4gICAgaWYgKCFuYW1lTWFwW25hbWVdKSB7XG4gICAgICBuYW1lTWFwW25hbWVdID0gcmVjb3JkXG4gICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB3YXJuKFxuICAgICAgICBmYWxzZSxcbiAgICAgICAgXCJEdXBsaWNhdGUgbmFtZWQgcm91dGVzIGRlZmluaXRpb246IFwiICtcbiAgICAgICAgXCJ7IG5hbWU6IFxcXCJcIiArIG5hbWUgKyBcIlxcXCIsIHBhdGg6IFxcXCJcIiArIChyZWNvcmQucGF0aCkgKyBcIlxcXCIgfVwiXG4gICAgICApXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVBhdGggKHBhdGgsIHBhcmVudCkge1xuICBwYXRoID0gcGF0aC5yZXBsYWNlKC9cXC8kLywgJycpXG4gIGlmIChwYXRoWzBdID09PSAnLycpIHsgcmV0dXJuIHBhdGggfVxuICBpZiAocGFyZW50ID09IG51bGwpIHsgcmV0dXJuIHBhdGggfVxuICByZXR1cm4gY2xlYW5QYXRoKCgocGFyZW50LnBhdGgpICsgXCIvXCIgKyBwYXRoKSlcbn1cblxudmFyIF9fbW9kdWxlRXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKGFycikge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFycikgPT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG5cbnZhciBpc2FycmF5ID0gX19tb2R1bGVFeHBvcnRzXG5cbi8qKlxuICogRXhwb3NlIGBwYXRoVG9SZWdleHBgLlxuICovXG52YXIgaW5kZXggPSBwYXRoVG9SZWdleHBcbnZhciBwYXJzZV8xID0gcGFyc2VcbnZhciBjb21waWxlXzEgPSBjb21waWxlXG52YXIgdG9rZW5zVG9GdW5jdGlvbl8xID0gdG9rZW5zVG9GdW5jdGlvblxudmFyIHRva2Vuc1RvUmVnRXhwXzEgPSB0b2tlbnNUb1JlZ0V4cFxuXG4vKipcbiAqIFRoZSBtYWluIHBhdGggbWF0Y2hpbmcgcmVnZXhwIHV0aWxpdHkuXG4gKlxuICogQHR5cGUge1JlZ0V4cH1cbiAqL1xudmFyIFBBVEhfUkVHRVhQID0gbmV3IFJlZ0V4cChbXG4gIC8vIE1hdGNoIGVzY2FwZWQgY2hhcmFjdGVycyB0aGF0IHdvdWxkIG90aGVyd2lzZSBhcHBlYXIgaW4gZnV0dXJlIG1hdGNoZXMuXG4gIC8vIFRoaXMgYWxsb3dzIHRoZSB1c2VyIHRvIGVzY2FwZSBzcGVjaWFsIGNoYXJhY3RlcnMgdGhhdCB3b24ndCB0cmFuc2Zvcm0uXG4gICcoXFxcXFxcXFwuKScsXG4gIC8vIE1hdGNoIEV4cHJlc3Mtc3R5bGUgcGFyYW1ldGVycyBhbmQgdW4tbmFtZWQgcGFyYW1ldGVycyB3aXRoIGEgcHJlZml4XG4gIC8vIGFuZCBvcHRpb25hbCBzdWZmaXhlcy4gTWF0Y2hlcyBhcHBlYXIgYXM6XG4gIC8vXG4gIC8vIFwiLzp0ZXN0KFxcXFxkKyk/XCIgPT4gW1wiL1wiLCBcInRlc3RcIiwgXCJcXGQrXCIsIHVuZGVmaW5lZCwgXCI/XCIsIHVuZGVmaW5lZF1cbiAgLy8gXCIvcm91dGUoXFxcXGQrKVwiICA9PiBbdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgXCJcXGQrXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkXVxuICAvLyBcIi8qXCIgICAgICAgICAgICA9PiBbXCIvXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgXCIqXCJdXG4gICcoW1xcXFwvLl0pPyg/Oig/OlxcXFw6KFxcXFx3KykoPzpcXFxcKCgoPzpcXFxcXFxcXC58W15cXFxcXFxcXCgpXSkrKVxcXFwpKT98XFxcXCgoKD86XFxcXFxcXFwufFteXFxcXFxcXFwoKV0pKylcXFxcKSkoWysqP10pP3woXFxcXCopKSdcbl0uam9pbignfCcpLCAnZycpXG5cbi8qKlxuICogUGFyc2UgYSBzdHJpbmcgZm9yIHRoZSByYXcgdG9rZW5zLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gIHN0clxuICogQHBhcmFtICB7T2JqZWN0PX0gb3B0aW9uc1xuICogQHJldHVybiB7IUFycmF5fVxuICovXG5mdW5jdGlvbiBwYXJzZSAoc3RyLCBvcHRpb25zKSB7XG4gIHZhciB0b2tlbnMgPSBbXVxuICB2YXIga2V5ID0gMFxuICB2YXIgaW5kZXggPSAwXG4gIHZhciBwYXRoID0gJydcbiAgdmFyIGRlZmF1bHREZWxpbWl0ZXIgPSBvcHRpb25zICYmIG9wdGlvbnMuZGVsaW1pdGVyIHx8ICcvJ1xuICB2YXIgcmVzXG5cbiAgd2hpbGUgKChyZXMgPSBQQVRIX1JFR0VYUC5leGVjKHN0cikpICE9IG51bGwpIHtcbiAgICB2YXIgbSA9IHJlc1swXVxuICAgIHZhciBlc2NhcGVkID0gcmVzWzFdXG4gICAgdmFyIG9mZnNldCA9IHJlcy5pbmRleFxuICAgIHBhdGggKz0gc3RyLnNsaWNlKGluZGV4LCBvZmZzZXQpXG4gICAgaW5kZXggPSBvZmZzZXQgKyBtLmxlbmd0aFxuXG4gICAgLy8gSWdub3JlIGFscmVhZHkgZXNjYXBlZCBzZXF1ZW5jZXMuXG4gICAgaWYgKGVzY2FwZWQpIHtcbiAgICAgIHBhdGggKz0gZXNjYXBlZFsxXVxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICB2YXIgbmV4dCA9IHN0cltpbmRleF1cbiAgICB2YXIgcHJlZml4ID0gcmVzWzJdXG4gICAgdmFyIG5hbWUgPSByZXNbM11cbiAgICB2YXIgY2FwdHVyZSA9IHJlc1s0XVxuICAgIHZhciBncm91cCA9IHJlc1s1XVxuICAgIHZhciBtb2RpZmllciA9IHJlc1s2XVxuICAgIHZhciBhc3RlcmlzayA9IHJlc1s3XVxuXG4gICAgLy8gUHVzaCB0aGUgY3VycmVudCBwYXRoIG9udG8gdGhlIHRva2Vucy5cbiAgICBpZiAocGF0aCkge1xuICAgICAgdG9rZW5zLnB1c2gocGF0aClcbiAgICAgIHBhdGggPSAnJ1xuICAgIH1cblxuICAgIHZhciBwYXJ0aWFsID0gcHJlZml4ICE9IG51bGwgJiYgbmV4dCAhPSBudWxsICYmIG5leHQgIT09IHByZWZpeFxuICAgIHZhciByZXBlYXQgPSBtb2RpZmllciA9PT0gJysnIHx8IG1vZGlmaWVyID09PSAnKidcbiAgICB2YXIgb3B0aW9uYWwgPSBtb2RpZmllciA9PT0gJz8nIHx8IG1vZGlmaWVyID09PSAnKidcbiAgICB2YXIgZGVsaW1pdGVyID0gcmVzWzJdIHx8IGRlZmF1bHREZWxpbWl0ZXJcbiAgICB2YXIgcGF0dGVybiA9IGNhcHR1cmUgfHwgZ3JvdXBcblxuICAgIHRva2Vucy5wdXNoKHtcbiAgICAgIG5hbWU6IG5hbWUgfHwga2V5KyssXG4gICAgICBwcmVmaXg6IHByZWZpeCB8fCAnJyxcbiAgICAgIGRlbGltaXRlcjogZGVsaW1pdGVyLFxuICAgICAgb3B0aW9uYWw6IG9wdGlvbmFsLFxuICAgICAgcmVwZWF0OiByZXBlYXQsXG4gICAgICBwYXJ0aWFsOiBwYXJ0aWFsLFxuICAgICAgYXN0ZXJpc2s6ICEhYXN0ZXJpc2ssXG4gICAgICBwYXR0ZXJuOiBwYXR0ZXJuID8gZXNjYXBlR3JvdXAocGF0dGVybikgOiAoYXN0ZXJpc2sgPyAnLionIDogJ1teJyArIGVzY2FwZVN0cmluZyhkZWxpbWl0ZXIpICsgJ10rPycpXG4gICAgfSlcbiAgfVxuXG4gIC8vIE1hdGNoIGFueSBjaGFyYWN0ZXJzIHN0aWxsIHJlbWFpbmluZy5cbiAgaWYgKGluZGV4IDwgc3RyLmxlbmd0aCkge1xuICAgIHBhdGggKz0gc3RyLnN1YnN0cihpbmRleClcbiAgfVxuXG4gIC8vIElmIHRoZSBwYXRoIGV4aXN0cywgcHVzaCBpdCBvbnRvIHRoZSBlbmQuXG4gIGlmIChwYXRoKSB7XG4gICAgdG9rZW5zLnB1c2gocGF0aClcbiAgfVxuXG4gIHJldHVybiB0b2tlbnNcbn1cblxuLyoqXG4gKiBDb21waWxlIGEgc3RyaW5nIHRvIGEgdGVtcGxhdGUgZnVuY3Rpb24gZm9yIHRoZSBwYXRoLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gICAgICAgICAgICAgc3RyXG4gKiBAcGFyYW0gIHtPYmplY3Q9fSAgICAgICAgICAgIG9wdGlvbnNcbiAqIEByZXR1cm4geyFmdW5jdGlvbihPYmplY3Q9LCBPYmplY3Q9KX1cbiAqL1xuZnVuY3Rpb24gY29tcGlsZSAoc3RyLCBvcHRpb25zKSB7XG4gIHJldHVybiB0b2tlbnNUb0Z1bmN0aW9uKHBhcnNlKHN0ciwgb3B0aW9ucykpXG59XG5cbi8qKlxuICogUHJldHRpZXIgZW5jb2Rpbmcgb2YgVVJJIHBhdGggc2VnbWVudHMuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBlbmNvZGVVUklDb21wb25lbnRQcmV0dHkgKHN0cikge1xuICByZXR1cm4gZW5jb2RlVVJJKHN0cikucmVwbGFjZSgvW1xcLz8jXS9nLCBmdW5jdGlvbiAoYykge1xuICAgIHJldHVybiAnJScgKyBjLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKClcbiAgfSlcbn1cblxuLyoqXG4gKiBFbmNvZGUgdGhlIGFzdGVyaXNrIHBhcmFtZXRlci4gU2ltaWxhciB0byBgcHJldHR5YCwgYnV0IGFsbG93cyBzbGFzaGVzLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ31cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZW5jb2RlQXN0ZXJpc2sgKHN0cikge1xuICByZXR1cm4gZW5jb2RlVVJJKHN0cikucmVwbGFjZSgvWz8jXS9nLCBmdW5jdGlvbiAoYykge1xuICAgIHJldHVybiAnJScgKyBjLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKClcbiAgfSlcbn1cblxuLyoqXG4gKiBFeHBvc2UgYSBtZXRob2QgZm9yIHRyYW5zZm9ybWluZyB0b2tlbnMgaW50byB0aGUgcGF0aCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9GdW5jdGlvbiAodG9rZW5zKSB7XG4gIC8vIENvbXBpbGUgYWxsIHRoZSB0b2tlbnMgaW50byByZWdleHBzLlxuICB2YXIgbWF0Y2hlcyA9IG5ldyBBcnJheSh0b2tlbnMubGVuZ3RoKVxuXG4gIC8vIENvbXBpbGUgYWxsIHRoZSBwYXR0ZXJucyBiZWZvcmUgY29tcGlsYXRpb24uXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHR5cGVvZiB0b2tlbnNbaV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBtYXRjaGVzW2ldID0gbmV3IFJlZ0V4cCgnXig/OicgKyB0b2tlbnNbaV0ucGF0dGVybiArICcpJCcpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChvYmosIG9wdHMpIHtcbiAgICB2YXIgcGF0aCA9ICcnXG4gICAgdmFyIGRhdGEgPSBvYmogfHwge31cbiAgICB2YXIgb3B0aW9ucyA9IG9wdHMgfHwge31cbiAgICB2YXIgZW5jb2RlID0gb3B0aW9ucy5wcmV0dHkgPyBlbmNvZGVVUklDb21wb25lbnRQcmV0dHkgOiBlbmNvZGVVUklDb21wb25lbnRcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV1cblxuICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcGF0aCArPSB0b2tlblxuXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIHZhciB2YWx1ZSA9IGRhdGFbdG9rZW4ubmFtZV1cbiAgICAgIHZhciBzZWdtZW50XG5cbiAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgIGlmICh0b2tlbi5vcHRpb25hbCkge1xuICAgICAgICAgIC8vIFByZXBlbmQgcGFydGlhbCBzZWdtZW50IHByZWZpeGVzLlxuICAgICAgICAgIGlmICh0b2tlbi5wYXJ0aWFsKSB7XG4gICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeFxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgXCInICsgdG9rZW4ubmFtZSArICdcIiB0byBiZSBkZWZpbmVkJylcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoaXNhcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgaWYgKCF0b2tlbi5yZXBlYXQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBcIicgKyB0b2tlbi5uYW1lICsgJ1wiIHRvIG5vdCByZXBlYXQsIGJ1dCByZWNlaXZlZCBgJyArIEpTT04uc3RyaW5naWZ5KHZhbHVlKSArICdgJylcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBpZiAodG9rZW4ub3B0aW9uYWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIFwiJyArIHRva2VuLm5hbWUgKyAnXCIgdG8gbm90IGJlIGVtcHR5JylcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbHVlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgc2VnbWVudCA9IGVuY29kZSh2YWx1ZVtqXSlcblxuICAgICAgICAgIGlmICghbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBhbGwgXCInICsgdG9rZW4ubmFtZSArICdcIiB0byBtYXRjaCBcIicgKyB0b2tlbi5wYXR0ZXJuICsgJ1wiLCBidXQgcmVjZWl2ZWQgYCcgKyBKU09OLnN0cmluZ2lmeShzZWdtZW50KSArICdgJylcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwYXRoICs9IChqID09PSAwID8gdG9rZW4ucHJlZml4IDogdG9rZW4uZGVsaW1pdGVyKSArIHNlZ21lbnRcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIHNlZ21lbnQgPSB0b2tlbi5hc3RlcmlzayA/IGVuY29kZUFzdGVyaXNrKHZhbHVlKSA6IGVuY29kZSh2YWx1ZSlcblxuICAgICAgaWYgKCFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgXCInICsgdG9rZW4ubmFtZSArICdcIiB0byBtYXRjaCBcIicgKyB0b2tlbi5wYXR0ZXJuICsgJ1wiLCBidXQgcmVjZWl2ZWQgXCInICsgc2VnbWVudCArICdcIicpXG4gICAgICB9XG5cbiAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudFxuICAgIH1cblxuICAgIHJldHVybiBwYXRoXG4gIH1cbn1cblxuLyoqXG4gKiBFc2NhcGUgYSByZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVN0cmluZyAoc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKyo/PV4hOiR7fSgpW1xcXXxcXC9cXFxcXSkvZywgJ1xcXFwkMScpXG59XG5cbi8qKlxuICogRXNjYXBlIHRoZSBjYXB0dXJpbmcgZ3JvdXAgYnkgZXNjYXBpbmcgc3BlY2lhbCBjaGFyYWN0ZXJzIGFuZCBtZWFuaW5nLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gZ3JvdXBcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZXNjYXBlR3JvdXAgKGdyb3VwKSB7XG4gIHJldHVybiBncm91cC5yZXBsYWNlKC8oWz0hOiRcXC8oKV0pL2csICdcXFxcJDEnKVxufVxuXG4vKipcbiAqIEF0dGFjaCB0aGUga2V5cyBhcyBhIHByb3BlcnR5IG9mIHRoZSByZWdleHAuXG4gKlxuICogQHBhcmFtICB7IVJlZ0V4cH0gcmVcbiAqIEBwYXJhbSAge0FycmF5fSAgIGtleXNcbiAqIEByZXR1cm4geyFSZWdFeHB9XG4gKi9cbmZ1bmN0aW9uIGF0dGFjaEtleXMgKHJlLCBrZXlzKSB7XG4gIHJlLmtleXMgPSBrZXlzXG4gIHJldHVybiByZVxufVxuXG4vKipcbiAqIEdldCB0aGUgZmxhZ3MgZm9yIGEgcmVnZXhwIGZyb20gdGhlIG9wdGlvbnMuXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGZsYWdzIChvcHRpb25zKSB7XG4gIHJldHVybiBvcHRpb25zLnNlbnNpdGl2ZSA/ICcnIDogJ2knXG59XG5cbi8qKlxuICogUHVsbCBvdXQga2V5cyBmcm9tIGEgcmVnZXhwLlxuICpcbiAqIEBwYXJhbSAgeyFSZWdFeHB9IHBhdGhcbiAqIEBwYXJhbSAgeyFBcnJheX0gIGtleXNcbiAqIEByZXR1cm4geyFSZWdFeHB9XG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvUmVnZXhwIChwYXRoLCBrZXlzKSB7XG4gIC8vIFVzZSBhIG5lZ2F0aXZlIGxvb2thaGVhZCB0byBtYXRjaCBvbmx5IGNhcHR1cmluZyBncm91cHMuXG4gIHZhciBncm91cHMgPSBwYXRoLnNvdXJjZS5tYXRjaCgvXFwoKD8hXFw/KS9nKVxuXG4gIGlmIChncm91cHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdyb3Vwcy5sZW5ndGg7IGkrKykge1xuICAgICAga2V5cy5wdXNoKHtcbiAgICAgICAgbmFtZTogaSxcbiAgICAgICAgcHJlZml4OiBudWxsLFxuICAgICAgICBkZWxpbWl0ZXI6IG51bGwsXG4gICAgICAgIG9wdGlvbmFsOiBmYWxzZSxcbiAgICAgICAgcmVwZWF0OiBmYWxzZSxcbiAgICAgICAgcGFydGlhbDogZmFsc2UsXG4gICAgICAgIGFzdGVyaXNrOiBmYWxzZSxcbiAgICAgICAgcGF0dGVybjogbnVsbFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXR0YWNoS2V5cyhwYXRoLCBrZXlzKVxufVxuXG4vKipcbiAqIFRyYW5zZm9ybSBhbiBhcnJheSBpbnRvIGEgcmVnZXhwLlxuICpcbiAqIEBwYXJhbSAgeyFBcnJheX0gIHBhdGhcbiAqIEBwYXJhbSAge0FycmF5fSAgIGtleXNcbiAqIEBwYXJhbSAgeyFPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4geyFSZWdFeHB9XG4gKi9cbmZ1bmN0aW9uIGFycmF5VG9SZWdleHAgKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgdmFyIHBhcnRzID0gW11cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBhdGgubGVuZ3RoOyBpKyspIHtcbiAgICBwYXJ0cy5wdXNoKHBhdGhUb1JlZ2V4cChwYXRoW2ldLCBrZXlzLCBvcHRpb25zKS5zb3VyY2UpXG4gIH1cblxuICB2YXIgcmVnZXhwID0gbmV3IFJlZ0V4cCgnKD86JyArIHBhcnRzLmpvaW4oJ3wnKSArICcpJywgZmxhZ3Mob3B0aW9ucykpXG5cbiAgcmV0dXJuIGF0dGFjaEtleXMocmVnZXhwLCBrZXlzKVxufVxuXG4vKipcbiAqIENyZWF0ZSBhIHBhdGggcmVnZXhwIGZyb20gc3RyaW5nIGlucHV0LlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gIHBhdGhcbiAqIEBwYXJhbSAgeyFBcnJheX0gIGtleXNcbiAqIEBwYXJhbSAgeyFPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4geyFSZWdFeHB9XG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvUmVnZXhwIChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gIHJldHVybiB0b2tlbnNUb1JlZ0V4cChwYXJzZShwYXRoLCBvcHRpb25zKSwga2V5cywgb3B0aW9ucylcbn1cblxuLyoqXG4gKiBFeHBvc2UgYSBmdW5jdGlvbiBmb3IgdGFraW5nIHRva2VucyBhbmQgcmV0dXJuaW5nIGEgUmVnRXhwLlxuICpcbiAqIEBwYXJhbSAgeyFBcnJheX0gICAgICAgICAgdG9rZW5zXG4gKiBAcGFyYW0gIHsoQXJyYXl8T2JqZWN0KT19IGtleXNcbiAqIEBwYXJhbSAge09iamVjdD19ICAgICAgICAgb3B0aW9uc1xuICogQHJldHVybiB7IVJlZ0V4cH1cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9SZWdFeHAgKHRva2Vucywga2V5cywgb3B0aW9ucykge1xuICBpZiAoIWlzYXJyYXkoa2V5cykpIHtcbiAgICBvcHRpb25zID0gLyoqIEB0eXBlIHshT2JqZWN0fSAqLyAoa2V5cyB8fCBvcHRpb25zKVxuICAgIGtleXMgPSBbXVxuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cblxuICB2YXIgc3RyaWN0ID0gb3B0aW9ucy5zdHJpY3RcbiAgdmFyIGVuZCA9IG9wdGlvbnMuZW5kICE9PSBmYWxzZVxuICB2YXIgcm91dGUgPSAnJ1xuXG4gIC8vIEl0ZXJhdGUgb3ZlciB0aGUgdG9rZW5zIGFuZCBjcmVhdGUgb3VyIHJlZ2V4cCBzdHJpbmcuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHRva2VuID0gdG9rZW5zW2ldXG5cbiAgICBpZiAodHlwZW9mIHRva2VuID09PSAnc3RyaW5nJykge1xuICAgICAgcm91dGUgKz0gZXNjYXBlU3RyaW5nKHRva2VuKVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcHJlZml4ID0gZXNjYXBlU3RyaW5nKHRva2VuLnByZWZpeClcbiAgICAgIHZhciBjYXB0dXJlID0gJyg/OicgKyB0b2tlbi5wYXR0ZXJuICsgJyknXG5cbiAgICAgIGtleXMucHVzaCh0b2tlbilcblxuICAgICAgaWYgKHRva2VuLnJlcGVhdCkge1xuICAgICAgICBjYXB0dXJlICs9ICcoPzonICsgcHJlZml4ICsgY2FwdHVyZSArICcpKidcbiAgICAgIH1cblxuICAgICAgaWYgKHRva2VuLm9wdGlvbmFsKSB7XG4gICAgICAgIGlmICghdG9rZW4ucGFydGlhbCkge1xuICAgICAgICAgIGNhcHR1cmUgPSAnKD86JyArIHByZWZpeCArICcoJyArIGNhcHR1cmUgKyAnKSk/J1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNhcHR1cmUgPSBwcmVmaXggKyAnKCcgKyBjYXB0dXJlICsgJyk/J1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYXB0dXJlID0gcHJlZml4ICsgJygnICsgY2FwdHVyZSArICcpJ1xuICAgICAgfVxuXG4gICAgICByb3V0ZSArPSBjYXB0dXJlXG4gICAgfVxuICB9XG5cbiAgdmFyIGRlbGltaXRlciA9IGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCAnLycpXG4gIHZhciBlbmRzV2l0aERlbGltaXRlciA9IHJvdXRlLnNsaWNlKC1kZWxpbWl0ZXIubGVuZ3RoKSA9PT0gZGVsaW1pdGVyXG5cbiAgLy8gSW4gbm9uLXN0cmljdCBtb2RlIHdlIGFsbG93IGEgc2xhc2ggYXQgdGhlIGVuZCBvZiBtYXRjaC4gSWYgdGhlIHBhdGggdG9cbiAgLy8gbWF0Y2ggYWxyZWFkeSBlbmRzIHdpdGggYSBzbGFzaCwgd2UgcmVtb3ZlIGl0IGZvciBjb25zaXN0ZW5jeS4gVGhlIHNsYXNoXG4gIC8vIGlzIHZhbGlkIGF0IHRoZSBlbmQgb2YgYSBwYXRoIG1hdGNoLCBub3QgaW4gdGhlIG1pZGRsZS4gVGhpcyBpcyBpbXBvcnRhbnRcbiAgLy8gaW4gbm9uLWVuZGluZyBtb2RlLCB3aGVyZSBcIi90ZXN0L1wiIHNob3VsZG4ndCBtYXRjaCBcIi90ZXN0Ly9yb3V0ZVwiLlxuICBpZiAoIXN0cmljdCkge1xuICAgIHJvdXRlID0gKGVuZHNXaXRoRGVsaW1pdGVyID8gcm91dGUuc2xpY2UoMCwgLWRlbGltaXRlci5sZW5ndGgpIDogcm91dGUpICsgJyg/OicgKyBkZWxpbWl0ZXIgKyAnKD89JCkpPydcbiAgfVxuXG4gIGlmIChlbmQpIHtcbiAgICByb3V0ZSArPSAnJCdcbiAgfSBlbHNlIHtcbiAgICAvLyBJbiBub24tZW5kaW5nIG1vZGUsIHdlIG5lZWQgdGhlIGNhcHR1cmluZyBncm91cHMgdG8gbWF0Y2ggYXMgbXVjaCBhc1xuICAgIC8vIHBvc3NpYmxlIGJ5IHVzaW5nIGEgcG9zaXRpdmUgbG9va2FoZWFkIHRvIHRoZSBlbmQgb3IgbmV4dCBwYXRoIHNlZ21lbnQuXG4gICAgcm91dGUgKz0gc3RyaWN0ICYmIGVuZHNXaXRoRGVsaW1pdGVyID8gJycgOiAnKD89JyArIGRlbGltaXRlciArICd8JCknXG4gIH1cblxuICByZXR1cm4gYXR0YWNoS2V5cyhuZXcgUmVnRXhwKCdeJyArIHJvdXRlLCBmbGFncyhvcHRpb25zKSksIGtleXMpXG59XG5cbi8qKlxuICogTm9ybWFsaXplIHRoZSBnaXZlbiBwYXRoIHN0cmluZywgcmV0dXJuaW5nIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEFuIGVtcHR5IGFycmF5IGNhbiBiZSBwYXNzZWQgaW4gZm9yIHRoZSBrZXlzLCB3aGljaCB3aWxsIGhvbGQgdGhlXG4gKiBwbGFjZWhvbGRlciBrZXkgZGVzY3JpcHRpb25zLiBGb3IgZXhhbXBsZSwgdXNpbmcgYC91c2VyLzppZGAsIGBrZXlzYCB3aWxsXG4gKiBjb250YWluIGBbeyBuYW1lOiAnaWQnLCBkZWxpbWl0ZXI6ICcvJywgb3B0aW9uYWw6IGZhbHNlLCByZXBlYXQ6IGZhbHNlIH1dYC5cbiAqXG4gKiBAcGFyYW0gIHsoc3RyaW5nfFJlZ0V4cHxBcnJheSl9IHBhdGhcbiAqIEBwYXJhbSAgeyhBcnJheXxPYmplY3QpPX0gICAgICAga2V5c1xuICogQHBhcmFtICB7T2JqZWN0PX0gICAgICAgICAgICAgICBvcHRpb25zXG4gKiBAcmV0dXJuIHshUmVnRXhwfVxuICovXG5mdW5jdGlvbiBwYXRoVG9SZWdleHAgKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgaWYgKCFpc2FycmF5KGtleXMpKSB7XG4gICAgb3B0aW9ucyA9IC8qKiBAdHlwZSB7IU9iamVjdH0gKi8gKGtleXMgfHwgb3B0aW9ucylcbiAgICBrZXlzID0gW11cbiAgfVxuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG5cbiAgaWYgKHBhdGggaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICByZXR1cm4gcmVnZXhwVG9SZWdleHAocGF0aCwgLyoqIEB0eXBlIHshQXJyYXl9ICovIChrZXlzKSlcbiAgfVxuXG4gIGlmIChpc2FycmF5KHBhdGgpKSB7XG4gICAgcmV0dXJuIGFycmF5VG9SZWdleHAoLyoqIEB0eXBlIHshQXJyYXl9ICovIChwYXRoKSwgLyoqIEB0eXBlIHshQXJyYXl9ICovIChrZXlzKSwgb3B0aW9ucylcbiAgfVxuXG4gIHJldHVybiBzdHJpbmdUb1JlZ2V4cCgvKiogQHR5cGUge3N0cmluZ30gKi8gKHBhdGgpLCAvKiogQHR5cGUgeyFBcnJheX0gKi8gKGtleXMpLCBvcHRpb25zKVxufVxuXG5pbmRleC5wYXJzZSA9IHBhcnNlXzE7XG5pbmRleC5jb21waWxlID0gY29tcGlsZV8xO1xuaW5kZXgudG9rZW5zVG9GdW5jdGlvbiA9IHRva2Vuc1RvRnVuY3Rpb25fMTtcbmluZGV4LnRva2Vuc1RvUmVnRXhwID0gdG9rZW5zVG9SZWdFeHBfMTtcblxuLyogICovXG5cbnZhciByZWdleHBDYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuZnVuY3Rpb24gZ2V0Um91dGVSZWdleCAocGF0aCkge1xuICB2YXIgaGl0ID0gcmVnZXhwQ2FjaGVbcGF0aF1cbiAgdmFyIGtleXMsIHJlZ2V4cFxuXG4gIGlmIChoaXQpIHtcbiAgICBrZXlzID0gaGl0LmtleXNcbiAgICByZWdleHAgPSBoaXQucmVnZXhwXG4gIH0gZWxzZSB7XG4gICAga2V5cyA9IFtdXG4gICAgcmVnZXhwID0gaW5kZXgocGF0aCwga2V5cylcbiAgICByZWdleHBDYWNoZVtwYXRoXSA9IHsga2V5czoga2V5cywgcmVnZXhwOiByZWdleHAgfVxuICB9XG5cbiAgcmV0dXJuIHsga2V5czoga2V5cywgcmVnZXhwOiByZWdleHAgfVxufVxuXG52YXIgcmVnZXhwQ29tcGlsZUNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG5mdW5jdGlvbiBmaWxsUGFyYW1zIChcbiAgcGF0aCxcbiAgcGFyYW1zLFxuICByb3V0ZU1zZ1xuKSB7XG4gIHRyeSB7XG4gICAgdmFyIGZpbGxlciA9XG4gICAgICByZWdleHBDb21waWxlQ2FjaGVbcGF0aF0gfHxcbiAgICAgIChyZWdleHBDb21waWxlQ2FjaGVbcGF0aF0gPSBpbmRleC5jb21waWxlKHBhdGgpKVxuICAgIHJldHVybiBmaWxsZXIocGFyYW1zIHx8IHt9LCB7IHByZXR0eTogdHJ1ZSB9KVxuICB9IGNhdGNoIChlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHdhcm4oZmFsc2UsIChcIm1pc3NpbmcgcGFyYW0gZm9yIFwiICsgcm91dGVNc2cgKyBcIjogXCIgKyAoZS5tZXNzYWdlKSkpXG4gICAgfVxuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBub3JtYWxpemVMb2NhdGlvbiAoXG4gIHJhdyxcbiAgY3VycmVudCxcbiAgYXBwZW5kXG4pIHtcbiAgdmFyIG5leHQgPSB0eXBlb2YgcmF3ID09PSAnc3RyaW5nJyA/IHsgcGF0aDogcmF3IH0gOiByYXdcbiAgLy8gbmFtZWQgdGFyZ2V0XG4gIGlmIChuZXh0Lm5hbWUgfHwgbmV4dC5fbm9ybWFsaXplZCkge1xuICAgIHJldHVybiBuZXh0XG4gIH1cblxuICAvLyByZWxhdGl2ZSBwYXJhbXNcbiAgaWYgKCFuZXh0LnBhdGggJiYgbmV4dC5wYXJhbXMgJiYgY3VycmVudCkge1xuICAgIG5leHQgPSBhc3NpZ24oe30sIG5leHQpXG4gICAgbmV4dC5fbm9ybWFsaXplZCA9IHRydWVcbiAgICB2YXIgcGFyYW1zID0gYXNzaWduKGFzc2lnbih7fSwgY3VycmVudC5wYXJhbXMpLCBuZXh0LnBhcmFtcylcbiAgICBpZiAoY3VycmVudC5uYW1lKSB7XG4gICAgICBuZXh0Lm5hbWUgPSBjdXJyZW50Lm5hbWVcbiAgICAgIG5leHQucGFyYW1zID0gcGFyYW1zXG4gICAgfSBlbHNlIGlmIChjdXJyZW50Lm1hdGNoZWQpIHtcbiAgICAgIHZhciByYXdQYXRoID0gY3VycmVudC5tYXRjaGVkW2N1cnJlbnQubWF0Y2hlZC5sZW5ndGggLSAxXS5wYXRoXG4gICAgICBuZXh0LnBhdGggPSBmaWxsUGFyYW1zKHJhd1BhdGgsIHBhcmFtcywgKFwicGF0aCBcIiArIChjdXJyZW50LnBhdGgpKSlcbiAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHdhcm4oZmFsc2UsIFwicmVsYXRpdmUgcGFyYW1zIG5hdmlnYXRpb24gcmVxdWlyZXMgYSBjdXJyZW50IHJvdXRlLlwiKVxuICAgIH1cbiAgICByZXR1cm4gbmV4dFxuICB9XG5cbiAgdmFyIHBhcnNlZFBhdGggPSBwYXJzZVBhdGgobmV4dC5wYXRoIHx8ICcnKVxuICB2YXIgYmFzZVBhdGggPSAoY3VycmVudCAmJiBjdXJyZW50LnBhdGgpIHx8ICcvJ1xuICB2YXIgcGF0aCA9IHBhcnNlZFBhdGgucGF0aFxuICAgID8gcmVzb2x2ZVBhdGgocGFyc2VkUGF0aC5wYXRoLCBiYXNlUGF0aCwgYXBwZW5kIHx8IG5leHQuYXBwZW5kKVxuICAgIDogKGN1cnJlbnQgJiYgY3VycmVudC5wYXRoKSB8fCAnLydcbiAgdmFyIHF1ZXJ5ID0gcmVzb2x2ZVF1ZXJ5KHBhcnNlZFBhdGgucXVlcnksIG5leHQucXVlcnkpXG4gIHZhciBoYXNoID0gbmV4dC5oYXNoIHx8IHBhcnNlZFBhdGguaGFzaFxuICBpZiAoaGFzaCAmJiBoYXNoLmNoYXJBdCgwKSAhPT0gJyMnKSB7XG4gICAgaGFzaCA9IFwiI1wiICsgaGFzaFxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBfbm9ybWFsaXplZDogdHJ1ZSxcbiAgICBwYXRoOiBwYXRoLFxuICAgIHF1ZXJ5OiBxdWVyeSxcbiAgICBoYXNoOiBoYXNoXG4gIH1cbn1cblxuZnVuY3Rpb24gYXNzaWduIChhLCBiKSB7XG4gIGZvciAodmFyIGtleSBpbiBiKSB7XG4gICAgYVtrZXldID0gYltrZXldXG4gIH1cbiAgcmV0dXJuIGFcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGNyZWF0ZU1hdGNoZXIgKHJvdXRlcykge1xuICB2YXIgcmVmID0gY3JlYXRlUm91dGVNYXAocm91dGVzKTtcbiAgdmFyIHBhdGhNYXAgPSByZWYucGF0aE1hcDtcbiAgdmFyIG5hbWVNYXAgPSByZWYubmFtZU1hcDtcblxuICBmdW5jdGlvbiBtYXRjaCAoXG4gICAgcmF3LFxuICAgIGN1cnJlbnRSb3V0ZSxcbiAgICByZWRpcmVjdGVkRnJvbVxuICApIHtcbiAgICB2YXIgbG9jYXRpb24gPSBub3JtYWxpemVMb2NhdGlvbihyYXcsIGN1cnJlbnRSb3V0ZSlcbiAgICB2YXIgbmFtZSA9IGxvY2F0aW9uLm5hbWU7XG5cbiAgICBpZiAobmFtZSkge1xuICAgICAgdmFyIHJlY29yZCA9IG5hbWVNYXBbbmFtZV1cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHdhcm4ocmVjb3JkLCAoXCJSb3V0ZSB3aXRoIG5hbWUgJ1wiICsgbmFtZSArIFwiJyBkb2VzIG5vdCBleGlzdFwiKSlcbiAgICAgIH1cbiAgICAgIHZhciBwYXJhbU5hbWVzID0gZ2V0Um91dGVSZWdleChyZWNvcmQucGF0aCkua2V5c1xuICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuICFrZXkub3B0aW9uYWw7IH0pXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5Lm5hbWU7IH0pXG5cbiAgICAgIGlmICh0eXBlb2YgbG9jYXRpb24ucGFyYW1zICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBsb2NhdGlvbi5wYXJhbXMgPSB7fVxuICAgICAgfVxuXG4gICAgICBpZiAoY3VycmVudFJvdXRlICYmIHR5cGVvZiBjdXJyZW50Um91dGUucGFyYW1zID09PSAnb2JqZWN0Jykge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gY3VycmVudFJvdXRlLnBhcmFtcykge1xuICAgICAgICAgIGlmICghKGtleSBpbiBsb2NhdGlvbi5wYXJhbXMpICYmIHBhcmFtTmFtZXMuaW5kZXhPZihrZXkpID4gLTEpIHtcbiAgICAgICAgICAgIGxvY2F0aW9uLnBhcmFtc1trZXldID0gY3VycmVudFJvdXRlLnBhcmFtc1trZXldXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQpIHtcbiAgICAgICAgbG9jYXRpb24ucGF0aCA9IGZpbGxQYXJhbXMocmVjb3JkLnBhdGgsIGxvY2F0aW9uLnBhcmFtcywgKFwibmFtZWQgcm91dGUgXFxcIlwiICsgbmFtZSArIFwiXFxcIlwiKSlcbiAgICAgICAgcmV0dXJuIF9jcmVhdGVSb3V0ZShyZWNvcmQsIGxvY2F0aW9uLCByZWRpcmVjdGVkRnJvbSlcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGxvY2F0aW9uLnBhdGgpIHtcbiAgICAgIGxvY2F0aW9uLnBhcmFtcyA9IHt9XG4gICAgICBmb3IgKHZhciBwYXRoIGluIHBhdGhNYXApIHtcbiAgICAgICAgaWYgKG1hdGNoUm91dGUocGF0aCwgbG9jYXRpb24ucGFyYW1zLCBsb2NhdGlvbi5wYXRoKSkge1xuICAgICAgICAgIHJldHVybiBfY3JlYXRlUm91dGUocGF0aE1hcFtwYXRoXSwgbG9jYXRpb24sIHJlZGlyZWN0ZWRGcm9tKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vIG5vIG1hdGNoXG4gICAgcmV0dXJuIF9jcmVhdGVSb3V0ZShudWxsLCBsb2NhdGlvbilcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlZGlyZWN0IChcbiAgICByZWNvcmQsXG4gICAgbG9jYXRpb25cbiAgKSB7XG4gICAgdmFyIG9yaWdpbmFsUmVkaXJlY3QgPSByZWNvcmQucmVkaXJlY3RcbiAgICB2YXIgcmVkaXJlY3QgPSB0eXBlb2Ygb3JpZ2luYWxSZWRpcmVjdCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IG9yaWdpbmFsUmVkaXJlY3QoY3JlYXRlUm91dGUocmVjb3JkLCBsb2NhdGlvbikpXG4gICAgICAgIDogb3JpZ2luYWxSZWRpcmVjdFxuXG4gICAgaWYgKHR5cGVvZiByZWRpcmVjdCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJlZGlyZWN0ID0geyBwYXRoOiByZWRpcmVjdCB9XG4gICAgfVxuXG4gICAgaWYgKCFyZWRpcmVjdCB8fCB0eXBlb2YgcmVkaXJlY3QgIT09ICdvYmplY3QnKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICAgIGZhbHNlLCAoXCJpbnZhbGlkIHJlZGlyZWN0IG9wdGlvbjogXCIgKyAoSlNPTi5zdHJpbmdpZnkocmVkaXJlY3QpKSlcbiAgICAgIClcbiAgICAgIHJldHVybiBfY3JlYXRlUm91dGUobnVsbCwgbG9jYXRpb24pXG4gICAgfVxuXG4gICAgdmFyIHJlID0gcmVkaXJlY3RcbiAgICB2YXIgbmFtZSA9IHJlLm5hbWU7XG4gICAgdmFyIHBhdGggPSByZS5wYXRoO1xuICAgIHZhciBxdWVyeSA9IGxvY2F0aW9uLnF1ZXJ5O1xuICAgIHZhciBoYXNoID0gbG9jYXRpb24uaGFzaDtcbiAgICB2YXIgcGFyYW1zID0gbG9jYXRpb24ucGFyYW1zO1xuICAgIHF1ZXJ5ID0gcmUuaGFzT3duUHJvcGVydHkoJ3F1ZXJ5JykgPyByZS5xdWVyeSA6IHF1ZXJ5XG4gICAgaGFzaCA9IHJlLmhhc093blByb3BlcnR5KCdoYXNoJykgPyByZS5oYXNoIDogaGFzaFxuICAgIHBhcmFtcyA9IHJlLmhhc093blByb3BlcnR5KCdwYXJhbXMnKSA/IHJlLnBhcmFtcyA6IHBhcmFtc1xuXG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIC8vIHJlc29sdmVkIG5hbWVkIGRpcmVjdFxuICAgICAgdmFyIHRhcmdldFJlY29yZCA9IG5hbWVNYXBbbmFtZV1cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGFzc2VydCh0YXJnZXRSZWNvcmQsIChcInJlZGlyZWN0IGZhaWxlZDogbmFtZWQgcm91dGUgXFxcIlwiICsgbmFtZSArIFwiXFxcIiBub3QgZm91bmQuXCIpKVxuICAgICAgfVxuICAgICAgcmV0dXJuIG1hdGNoKHtcbiAgICAgICAgX25vcm1hbGl6ZWQ6IHRydWUsXG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIHF1ZXJ5OiBxdWVyeSxcbiAgICAgICAgaGFzaDogaGFzaCxcbiAgICAgICAgcGFyYW1zOiBwYXJhbXNcbiAgICAgIH0sIHVuZGVmaW5lZCwgbG9jYXRpb24pXG4gICAgfSBlbHNlIGlmIChwYXRoKSB7XG4gICAgICAvLyAxLiByZXNvbHZlIHJlbGF0aXZlIHJlZGlyZWN0XG4gICAgICB2YXIgcmF3UGF0aCA9IHJlc29sdmVSZWNvcmRQYXRoKHBhdGgsIHJlY29yZClcbiAgICAgIC8vIDIuIHJlc29sdmUgcGFyYW1zXG4gICAgICB2YXIgcmVzb2x2ZWRQYXRoID0gZmlsbFBhcmFtcyhyYXdQYXRoLCBwYXJhbXMsIChcInJlZGlyZWN0IHJvdXRlIHdpdGggcGF0aCBcXFwiXCIgKyByYXdQYXRoICsgXCJcXFwiXCIpKVxuICAgICAgLy8gMy4gcmVtYXRjaCB3aXRoIGV4aXN0aW5nIHF1ZXJ5IGFuZCBoYXNoXG4gICAgICByZXR1cm4gbWF0Y2goe1xuICAgICAgICBfbm9ybWFsaXplZDogdHJ1ZSxcbiAgICAgICAgcGF0aDogcmVzb2x2ZWRQYXRoLFxuICAgICAgICBxdWVyeTogcXVlcnksXG4gICAgICAgIGhhc2g6IGhhc2hcbiAgICAgIH0sIHVuZGVmaW5lZCwgbG9jYXRpb24pXG4gICAgfSBlbHNlIHtcbiAgICAgIHdhcm4oZmFsc2UsIChcImludmFsaWQgcmVkaXJlY3Qgb3B0aW9uOiBcIiArIChKU09OLnN0cmluZ2lmeShyZWRpcmVjdCkpKSlcbiAgICAgIHJldHVybiBfY3JlYXRlUm91dGUobnVsbCwgbG9jYXRpb24pXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYWxpYXMgKFxuICAgIHJlY29yZCxcbiAgICBsb2NhdGlvbixcbiAgICBtYXRjaEFzXG4gICkge1xuICAgIHZhciBhbGlhc2VkUGF0aCA9IGZpbGxQYXJhbXMobWF0Y2hBcywgbG9jYXRpb24ucGFyYW1zLCAoXCJhbGlhc2VkIHJvdXRlIHdpdGggcGF0aCBcXFwiXCIgKyBtYXRjaEFzICsgXCJcXFwiXCIpKVxuICAgIHZhciBhbGlhc2VkTWF0Y2ggPSBtYXRjaCh7XG4gICAgICBfbm9ybWFsaXplZDogdHJ1ZSxcbiAgICAgIHBhdGg6IGFsaWFzZWRQYXRoXG4gICAgfSlcbiAgICBpZiAoYWxpYXNlZE1hdGNoKSB7XG4gICAgICB2YXIgbWF0Y2hlZCA9IGFsaWFzZWRNYXRjaC5tYXRjaGVkXG4gICAgICB2YXIgYWxpYXNlZFJlY29yZCA9IG1hdGNoZWRbbWF0Y2hlZC5sZW5ndGggLSAxXVxuICAgICAgbG9jYXRpb24ucGFyYW1zID0gYWxpYXNlZE1hdGNoLnBhcmFtc1xuICAgICAgcmV0dXJuIF9jcmVhdGVSb3V0ZShhbGlhc2VkUmVjb3JkLCBsb2NhdGlvbilcbiAgICB9XG4gICAgcmV0dXJuIF9jcmVhdGVSb3V0ZShudWxsLCBsb2NhdGlvbilcbiAgfVxuXG4gIGZ1bmN0aW9uIF9jcmVhdGVSb3V0ZSAoXG4gICAgcmVjb3JkLFxuICAgIGxvY2F0aW9uLFxuICAgIHJlZGlyZWN0ZWRGcm9tXG4gICkge1xuICAgIGlmIChyZWNvcmQgJiYgcmVjb3JkLnJlZGlyZWN0KSB7XG4gICAgICByZXR1cm4gcmVkaXJlY3QocmVjb3JkLCByZWRpcmVjdGVkRnJvbSB8fCBsb2NhdGlvbilcbiAgICB9XG4gICAgaWYgKHJlY29yZCAmJiByZWNvcmQubWF0Y2hBcykge1xuICAgICAgcmV0dXJuIGFsaWFzKHJlY29yZCwgbG9jYXRpb24sIHJlY29yZC5tYXRjaEFzKVxuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlUm91dGUocmVjb3JkLCBsb2NhdGlvbiwgcmVkaXJlY3RlZEZyb20pXG4gIH1cblxuICByZXR1cm4gbWF0Y2hcbn1cblxuZnVuY3Rpb24gbWF0Y2hSb3V0ZSAoXG4gIHBhdGgsXG4gIHBhcmFtcyxcbiAgcGF0aG5hbWVcbikge1xuICB2YXIgcmVmID0gZ2V0Um91dGVSZWdleChwYXRoKTtcbiAgdmFyIHJlZ2V4cCA9IHJlZi5yZWdleHA7XG4gIHZhciBrZXlzID0gcmVmLmtleXM7XG4gIHZhciBtID0gcGF0aG5hbWUubWF0Y2gocmVnZXhwKVxuXG4gIGlmICghbSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9IGVsc2UgaWYgKCFwYXJhbXMpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDEsIGxlbiA9IG0ubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpIC0gMV1cbiAgICB2YXIgdmFsID0gdHlwZW9mIG1baV0gPT09ICdzdHJpbmcnID8gZGVjb2RlVVJJQ29tcG9uZW50KG1baV0pIDogbVtpXVxuICAgIGlmIChrZXkpIHsgcGFyYW1zW2tleS5uYW1lXSA9IHZhbCB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZVxufVxuXG5mdW5jdGlvbiByZXNvbHZlUmVjb3JkUGF0aCAocGF0aCwgcmVjb3JkKSB7XG4gIHJldHVybiByZXNvbHZlUGF0aChwYXRoLCByZWNvcmQucGFyZW50ID8gcmVjb3JkLnBhcmVudC5wYXRoIDogJy8nLCB0cnVlKVxufVxuXG4vKiAgKi9cblxudmFyIGluQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG5cbnZhciBzdXBwb3J0c0hpc3RvcnkgPSBpbkJyb3dzZXIgJiYgKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHVhID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnRcblxuICBpZiAoXG4gICAgKHVhLmluZGV4T2YoJ0FuZHJvaWQgMi4nKSAhPT0gLTEgfHwgdWEuaW5kZXhPZignQW5kcm9pZCA0LjAnKSAhPT0gLTEpICYmXG4gICAgdWEuaW5kZXhPZignTW9iaWxlIFNhZmFyaScpICE9PSAtMSAmJlxuICAgIHVhLmluZGV4T2YoJ0Nocm9tZScpID09PSAtMSAmJlxuICAgIHVhLmluZGV4T2YoJ1dpbmRvd3MgUGhvbmUnKSA9PT0gLTFcbiAgKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gd2luZG93Lmhpc3RvcnkgJiYgJ3B1c2hTdGF0ZScgaW4gd2luZG93Lmhpc3Rvcnlcbn0pKClcblxuLyogICovXG5cbmZ1bmN0aW9uIHJ1blF1ZXVlIChxdWV1ZSwgZm4sIGNiKSB7XG4gIHZhciBzdGVwID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgaWYgKGluZGV4ID49IHF1ZXVlLmxlbmd0aCkge1xuICAgICAgY2IoKVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocXVldWVbaW5kZXhdKSB7XG4gICAgICAgIGZuKHF1ZXVlW2luZGV4XSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHN0ZXAoaW5kZXggKyAxKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RlcChpbmRleCArIDEpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHN0ZXAoMClcbn1cblxuLyogICovXG5cblxudmFyIEhpc3RvcnkgPSBmdW5jdGlvbiBIaXN0b3J5IChyb3V0ZXIsIGJhc2UpIHtcbiAgdGhpcy5yb3V0ZXIgPSByb3V0ZXJcbiAgdGhpcy5iYXNlID0gbm9ybWFsaXplQmFzZShiYXNlKVxuICAvLyBzdGFydCB3aXRoIGEgcm91dGUgb2JqZWN0IHRoYXQgc3RhbmRzIGZvciBcIm5vd2hlcmVcIlxuICB0aGlzLmN1cnJlbnQgPSBTVEFSVFxuICB0aGlzLnBlbmRpbmcgPSBudWxsXG59O1xuXG5IaXN0b3J5LnByb3RvdHlwZS5saXN0ZW4gPSBmdW5jdGlvbiBsaXN0ZW4gKGNiKSB7XG4gIHRoaXMuY2IgPSBjYlxufTtcblxuSGlzdG9yeS5wcm90b3R5cGUudHJhbnNpdGlvblRvID0gZnVuY3Rpb24gdHJhbnNpdGlvblRvIChsb2NhdGlvbiwgb25Db21wbGV0ZSwgb25BYm9ydCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIHZhciByb3V0ZSA9IHRoaXMucm91dGVyLm1hdGNoKGxvY2F0aW9uLCB0aGlzLmN1cnJlbnQpXG4gIHRoaXMuY29uZmlybVRyYW5zaXRpb24ocm91dGUsIGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzJDEudXBkYXRlUm91dGUocm91dGUpXG4gICAgb25Db21wbGV0ZSAmJiBvbkNvbXBsZXRlKHJvdXRlKVxuICAgIHRoaXMkMS5lbnN1cmVVUkwoKVxuICB9LCBvbkFib3J0KVxufTtcblxuSGlzdG9yeS5wcm90b3R5cGUuY29uZmlybVRyYW5zaXRpb24gPSBmdW5jdGlvbiBjb25maXJtVHJhbnNpdGlvbiAocm91dGUsIG9uQ29tcGxldGUsIG9uQWJvcnQpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICB2YXIgY3VycmVudCA9IHRoaXMuY3VycmVudFxuICB2YXIgYWJvcnQgPSBmdW5jdGlvbiAoKSB7IG9uQWJvcnQgJiYgb25BYm9ydCgpIH1cbiAgaWYgKGlzU2FtZVJvdXRlKHJvdXRlLCBjdXJyZW50KSkge1xuICAgIHRoaXMuZW5zdXJlVVJMKClcbiAgICByZXR1cm4gYWJvcnQoKVxuICB9XG5cbiAgdmFyIHJlZiA9IHJlc29sdmVRdWV1ZSh0aGlzLmN1cnJlbnQubWF0Y2hlZCwgcm91dGUubWF0Y2hlZCk7XG4gICAgdmFyIGRlYWN0aXZhdGVkID0gcmVmLmRlYWN0aXZhdGVkO1xuICAgIHZhciBhY3RpdmF0ZWQgPSByZWYuYWN0aXZhdGVkO1xuXG4gIHZhciBxdWV1ZSA9IFtdLmNvbmNhdChcbiAgICAvLyBpbi1jb21wb25lbnQgbGVhdmUgZ3VhcmRzXG4gICAgZXh0cmFjdExlYXZlR3VhcmRzKGRlYWN0aXZhdGVkKSxcbiAgICAvLyBnbG9iYWwgYmVmb3JlIGhvb2tzXG4gICAgdGhpcy5yb3V0ZXIuYmVmb3JlSG9va3MsXG4gICAgLy8gZW50ZXIgZ3VhcmRzXG4gICAgYWN0aXZhdGVkLm1hcChmdW5jdGlvbiAobSkgeyByZXR1cm4gbS5iZWZvcmVFbnRlcjsgfSksXG4gICAgLy8gYXN5bmMgY29tcG9uZW50c1xuICAgIHJlc29sdmVBc3luY0NvbXBvbmVudHMoYWN0aXZhdGVkKVxuICApXG5cbiAgdGhpcy5wZW5kaW5nID0gcm91dGVcbiAgdmFyIGl0ZXJhdG9yID0gZnVuY3Rpb24gKGhvb2ssIG5leHQpIHtcbiAgICBpZiAodGhpcyQxLnBlbmRpbmcgIT09IHJvdXRlKSB7XG4gICAgICByZXR1cm4gYWJvcnQoKVxuICAgIH1cbiAgICBob29rKHJvdXRlLCBjdXJyZW50LCBmdW5jdGlvbiAodG8pIHtcbiAgICAgIGlmICh0byA9PT0gZmFsc2UpIHtcbiAgICAgICAgLy8gbmV4dChmYWxzZSkgLT4gYWJvcnQgbmF2aWdhdGlvbiwgZW5zdXJlIGN1cnJlbnQgVVJMXG4gICAgICAgIHRoaXMkMS5lbnN1cmVVUkwodHJ1ZSlcbiAgICAgICAgYWJvcnQoKVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdG8gPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0byA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgLy8gbmV4dCgnLycpIG9yIG5leHQoeyBwYXRoOiAnLycgfSkgLT4gcmVkaXJlY3RcbiAgICAgICAgKHR5cGVvZiB0byA9PT0gJ29iamVjdCcgJiYgdG8ucmVwbGFjZSkgPyB0aGlzJDEucmVwbGFjZSh0bykgOiB0aGlzJDEucHVzaCh0bylcbiAgICAgICAgYWJvcnQoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gY29uZmlybSB0cmFuc2l0aW9uIGFuZCBwYXNzIG9uIHRoZSB2YWx1ZVxuICAgICAgICBuZXh0KHRvKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBydW5RdWV1ZShxdWV1ZSwgaXRlcmF0b3IsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcG9zdEVudGVyQ2JzID0gW11cbiAgICB2YXIgZW50ZXJHdWFyZHMgPSBleHRyYWN0RW50ZXJHdWFyZHMoYWN0aXZhdGVkLCBwb3N0RW50ZXJDYnMsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzJDEuY3VycmVudCA9PT0gcm91dGVcbiAgICB9KVxuICAgIC8vIHdhaXQgdW50aWwgYXN5bmMgY29tcG9uZW50cyBhcmUgcmVzb2x2ZWQgYmVmb3JlXG4gICAgLy8gZXh0cmFjdGluZyBpbi1jb21wb25lbnQgZW50ZXIgZ3VhcmRzXG4gICAgcnVuUXVldWUoZW50ZXJHdWFyZHMsIGl0ZXJhdG9yLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAodGhpcyQxLnBlbmRpbmcgIT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBhYm9ydCgpXG4gICAgICB9XG4gICAgICB0aGlzJDEucGVuZGluZyA9IG51bGxcbiAgICAgIG9uQ29tcGxldGUocm91dGUpXG4gICAgICBpZiAodGhpcyQxLnJvdXRlci5hcHApIHtcbiAgICAgICAgdGhpcyQxLnJvdXRlci5hcHAuJG5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBwb3N0RW50ZXJDYnMuZm9yRWFjaChmdW5jdGlvbiAoY2IpIHsgcmV0dXJuIGNiKCk7IH0pXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn07XG5cbkhpc3RvcnkucHJvdG90eXBlLnVwZGF0ZVJvdXRlID0gZnVuY3Rpb24gdXBkYXRlUm91dGUgKHJvdXRlKSB7XG4gIHZhciBwcmV2ID0gdGhpcy5jdXJyZW50XG4gIHRoaXMuY3VycmVudCA9IHJvdXRlXG4gIHRoaXMuY2IgJiYgdGhpcy5jYihyb3V0ZSlcbiAgdGhpcy5yb3V0ZXIuYWZ0ZXJIb29rcy5mb3JFYWNoKGZ1bmN0aW9uIChob29rKSB7XG4gICAgaG9vayAmJiBob29rKHJvdXRlLCBwcmV2KVxuICB9KVxufTtcblxuZnVuY3Rpb24gbm9ybWFsaXplQmFzZSAoYmFzZSkge1xuICBpZiAoIWJhc2UpIHtcbiAgICBpZiAoaW5Ccm93c2VyKSB7XG4gICAgICAvLyByZXNwZWN0IDxiYXNlPiB0YWdcbiAgICAgIHZhciBiYXNlRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdiYXNlJylcbiAgICAgIGJhc2UgPSBiYXNlRWwgPyBiYXNlRWwuZ2V0QXR0cmlidXRlKCdocmVmJykgOiAnLydcbiAgICB9IGVsc2Uge1xuICAgICAgYmFzZSA9ICcvJ1xuICAgIH1cbiAgfVxuICAvLyBtYWtlIHN1cmUgdGhlcmUncyB0aGUgc3RhcnRpbmcgc2xhc2hcbiAgaWYgKGJhc2UuY2hhckF0KDApICE9PSAnLycpIHtcbiAgICBiYXNlID0gJy8nICsgYmFzZVxuICB9XG4gIC8vIHJlbW92ZSB0cmFpbGluZyBzbGFzaFxuICByZXR1cm4gYmFzZS5yZXBsYWNlKC9cXC8kLywgJycpXG59XG5cbmZ1bmN0aW9uIHJlc29sdmVRdWV1ZSAoXG4gIGN1cnJlbnQsXG4gIG5leHRcbikge1xuICB2YXIgaVxuICB2YXIgbWF4ID0gTWF0aC5tYXgoY3VycmVudC5sZW5ndGgsIG5leHQubGVuZ3RoKVxuICBmb3IgKGkgPSAwOyBpIDwgbWF4OyBpKyspIHtcbiAgICBpZiAoY3VycmVudFtpXSAhPT0gbmV4dFtpXSkge1xuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhY3RpdmF0ZWQ6IG5leHQuc2xpY2UoaSksXG4gICAgZGVhY3RpdmF0ZWQ6IGN1cnJlbnQuc2xpY2UoaSlcbiAgfVxufVxuXG5mdW5jdGlvbiBleHRyYWN0R3VhcmQgKFxuICBkZWYsXG4gIGtleVxuKSB7XG4gIGlmICh0eXBlb2YgZGVmICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gZXh0ZW5kIG5vdyBzbyB0aGF0IGdsb2JhbCBtaXhpbnMgYXJlIGFwcGxpZWQuXG4gICAgZGVmID0gX1Z1ZS5leHRlbmQoZGVmKVxuICB9XG4gIHJldHVybiBkZWYub3B0aW9uc1trZXldXG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RMZWF2ZUd1YXJkcyAobWF0Y2hlZCkge1xuICByZXR1cm4gZmxhdHRlbihmbGF0TWFwQ29tcG9uZW50cyhtYXRjaGVkLCBmdW5jdGlvbiAoZGVmLCBpbnN0YW5jZSkge1xuICAgIHZhciBndWFyZCA9IGV4dHJhY3RHdWFyZChkZWYsICdiZWZvcmVSb3V0ZUxlYXZlJylcbiAgICBpZiAoZ3VhcmQpIHtcbiAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KGd1YXJkKVxuICAgICAgICA/IGd1YXJkLm1hcChmdW5jdGlvbiAoZ3VhcmQpIHsgcmV0dXJuIHdyYXBMZWF2ZUd1YXJkKGd1YXJkLCBpbnN0YW5jZSk7IH0pXG4gICAgICAgIDogd3JhcExlYXZlR3VhcmQoZ3VhcmQsIGluc3RhbmNlKVxuICAgIH1cbiAgfSkucmV2ZXJzZSgpKVxufVxuXG5mdW5jdGlvbiB3cmFwTGVhdmVHdWFyZCAoXG4gIGd1YXJkLFxuICBpbnN0YW5jZVxuKSB7XG4gIHJldHVybiBmdW5jdGlvbiByb3V0ZUxlYXZlR3VhcmQgKCkge1xuICAgIHJldHVybiBndWFyZC5hcHBseShpbnN0YW5jZSwgYXJndW1lbnRzKVxuICB9XG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RFbnRlckd1YXJkcyAoXG4gIG1hdGNoZWQsXG4gIGNicyxcbiAgaXNWYWxpZFxuKSB7XG4gIHJldHVybiBmbGF0dGVuKGZsYXRNYXBDb21wb25lbnRzKG1hdGNoZWQsIGZ1bmN0aW9uIChkZWYsIF8sIG1hdGNoLCBrZXkpIHtcbiAgICB2YXIgZ3VhcmQgPSBleHRyYWN0R3VhcmQoZGVmLCAnYmVmb3JlUm91dGVFbnRlcicpXG4gICAgaWYgKGd1YXJkKSB7XG4gICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShndWFyZClcbiAgICAgICAgPyBndWFyZC5tYXAoZnVuY3Rpb24gKGd1YXJkKSB7IHJldHVybiB3cmFwRW50ZXJHdWFyZChndWFyZCwgY2JzLCBtYXRjaCwga2V5LCBpc1ZhbGlkKTsgfSlcbiAgICAgICAgOiB3cmFwRW50ZXJHdWFyZChndWFyZCwgY2JzLCBtYXRjaCwga2V5LCBpc1ZhbGlkKVxuICAgIH1cbiAgfSkpXG59XG5cbmZ1bmN0aW9uIHdyYXBFbnRlckd1YXJkIChcbiAgZ3VhcmQsXG4gIGNicyxcbiAgbWF0Y2gsXG4gIGtleSxcbiAgaXNWYWxpZFxuKSB7XG4gIHJldHVybiBmdW5jdGlvbiByb3V0ZUVudGVyR3VhcmQgKHRvLCBmcm9tLCBuZXh0KSB7XG4gICAgcmV0dXJuIGd1YXJkKHRvLCBmcm9tLCBmdW5jdGlvbiAoY2IpIHtcbiAgICAgIG5leHQoY2IpXG4gICAgICBpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNicy5wdXNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyAjNzUwXG4gICAgICAgICAgLy8gaWYgYSByb3V0ZXItdmlldyBpcyB3cmFwcGVkIHdpdGggYW4gb3V0LWluIHRyYW5zaXRpb24sXG4gICAgICAgICAgLy8gdGhlIGluc3RhbmNlIG1heSBub3QgaGF2ZSBiZWVuIHJlZ2lzdGVyZWQgYXQgdGhpcyB0aW1lLlxuICAgICAgICAgIC8vIHdlIHdpbGwgbmVlZCB0byBwb2xsIGZvciByZWdpc3RyYXRpb24gdW50aWwgY3VycmVudCByb3V0ZVxuICAgICAgICAgIC8vIGlzIG5vIGxvbmdlciB2YWxpZC5cbiAgICAgICAgICBwb2xsKGNiLCBtYXRjaC5pbnN0YW5jZXMsIGtleSwgaXNWYWxpZClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmZ1bmN0aW9uIHBvbGwgKFxuICBjYiwgLy8gc29tZWhvdyBmbG93IGNhbm5vdCBpbmZlciB0aGlzIGlzIGEgZnVuY3Rpb25cbiAgaW5zdGFuY2VzLFxuICBrZXksXG4gIGlzVmFsaWRcbikge1xuICBpZiAoaW5zdGFuY2VzW2tleV0pIHtcbiAgICBjYihpbnN0YW5jZXNba2V5XSlcbiAgfSBlbHNlIGlmIChpc1ZhbGlkKCkpIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHBvbGwoY2IsIGluc3RhbmNlcywga2V5LCBpc1ZhbGlkKVxuICAgIH0sIDE2KVxuICB9XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVBc3luY0NvbXBvbmVudHMgKG1hdGNoZWQpIHtcbiAgcmV0dXJuIGZsYXRNYXBDb21wb25lbnRzKG1hdGNoZWQsIGZ1bmN0aW9uIChkZWYsIF8sIG1hdGNoLCBrZXkpIHtcbiAgICAvLyBpZiBpdCdzIGEgZnVuY3Rpb24gYW5kIGRvZXNuJ3QgaGF2ZSBWdWUgb3B0aW9ucyBhdHRhY2hlZCxcbiAgICAvLyBhc3N1bWUgaXQncyBhbiBhc3luYyBjb21wb25lbnQgcmVzb2x2ZSBmdW5jdGlvbi5cbiAgICAvLyB3ZSBhcmUgbm90IHVzaW5nIFZ1ZSdzIGRlZmF1bHQgYXN5bmMgcmVzb2x2aW5nIG1lY2hhbmlzbSBiZWNhdXNlXG4gICAgLy8gd2Ugd2FudCB0byBoYWx0IHRoZSBuYXZpZ2F0aW9uIHVudGlsIHRoZSBpbmNvbWluZyBjb21wb25lbnQgaGFzIGJlZW5cbiAgICAvLyByZXNvbHZlZC5cbiAgICBpZiAodHlwZW9mIGRlZiA9PT0gJ2Z1bmN0aW9uJyAmJiAhZGVmLm9wdGlvbnMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodG8sIGZyb20sIG5leHQpIHtcbiAgICAgICAgdmFyIHJlc29sdmUgPSBmdW5jdGlvbiAocmVzb2x2ZWREZWYpIHtcbiAgICAgICAgICBtYXRjaC5jb21wb25lbnRzW2tleV0gPSByZXNvbHZlZERlZlxuICAgICAgICAgIG5leHQoKVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHJlamVjdCA9IGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgICAgICB3YXJuKGZhbHNlLCAoXCJGYWlsZWQgdG8gcmVzb2x2ZSBhc3luYyBjb21wb25lbnQgXCIgKyBrZXkgKyBcIjogXCIgKyByZWFzb24pKVxuICAgICAgICAgIG5leHQoZmFsc2UpXG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcmVzID0gZGVmKHJlc29sdmUsIHJlamVjdClcbiAgICAgICAgaWYgKHJlcyAmJiB0eXBlb2YgcmVzLnRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICByZXMudGhlbihyZXNvbHZlLCByZWplY3QpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZsYXRNYXBDb21wb25lbnRzIChcbiAgbWF0Y2hlZCxcbiAgZm5cbikge1xuICByZXR1cm4gZmxhdHRlbihtYXRjaGVkLm1hcChmdW5jdGlvbiAobSkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhtLmNvbXBvbmVudHMpLm1hcChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBmbihcbiAgICAgIG0uY29tcG9uZW50c1trZXldLFxuICAgICAgbS5pbnN0YW5jZXNba2V5XSxcbiAgICAgIG0sIGtleVxuICAgICk7IH0pXG4gIH0pKVxufVxuXG5mdW5jdGlvbiBmbGF0dGVuIChhcnIpIHtcbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoW10sIGFycilcbn1cblxuLyogICovXG5cbnZhciBwb3NpdGlvblN0b3JlID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG5mdW5jdGlvbiBzYXZlU2Nyb2xsUG9zaXRpb24gKGtleSkge1xuICBpZiAoIWtleSkgeyByZXR1cm4gfVxuICBwb3NpdGlvblN0b3JlW2tleV0gPSB7XG4gICAgeDogd2luZG93LnBhZ2VYT2Zmc2V0LFxuICAgIHk6IHdpbmRvdy5wYWdlWU9mZnNldFxuICB9XG59XG5cbmZ1bmN0aW9uIGdldFNjcm9sbFBvc2l0aW9uIChrZXkpIHtcbiAgaWYgKCFrZXkpIHsgcmV0dXJuIH1cbiAgcmV0dXJuIHBvc2l0aW9uU3RvcmVba2V5XVxufVxuXG5mdW5jdGlvbiBnZXRFbGVtZW50UG9zaXRpb24gKGVsKSB7XG4gIHZhciBkb2NSZWN0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gIHZhciBlbFJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICByZXR1cm4ge1xuICAgIHg6IGVsUmVjdC5sZWZ0IC0gZG9jUmVjdC5sZWZ0LFxuICAgIHk6IGVsUmVjdC50b3AgLSBkb2NSZWN0LnRvcFxuICB9XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWRQb3NpdGlvbiAob2JqKSB7XG4gIHJldHVybiBpc051bWJlcihvYmoueCkgfHwgaXNOdW1iZXIob2JqLnkpXG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVBvc2l0aW9uIChvYmopIHtcbiAgcmV0dXJuIHtcbiAgICB4OiBpc051bWJlcihvYmoueCkgPyBvYmoueCA6IHdpbmRvdy5wYWdlWE9mZnNldCxcbiAgICB5OiBpc051bWJlcihvYmoueSkgPyBvYmoueSA6IHdpbmRvdy5wYWdlWU9mZnNldFxuICB9XG59XG5cbmZ1bmN0aW9uIGlzTnVtYmVyICh2KSB7XG4gIHJldHVybiB0eXBlb2YgdiA9PT0gJ251bWJlcidcbn1cblxuLyogICovXG5cblxuLy8gdXNlIFVzZXIgVGltaW5nIGFwaSAoaWYgcHJlc2VudCkgZm9yIG1vcmUgYWNjdXJhdGUga2V5IHByZWNpc2lvblxudmFyIFRpbWUgPSBpbkJyb3dzZXIgPyAod2luZG93LnBlcmZvcm1hbmNlIHx8IERhdGUpIDogRGF0ZVxuXG52YXIgZ2VuS2V5ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gU3RyaW5nKFRpbWUubm93KCkpOyB9XG52YXIgX2tleSA9IGdlbktleSgpXG5cbnZhciBIVE1MNUhpc3RvcnkgPSAoZnVuY3Rpb24gKEhpc3RvcnkpIHtcbiAgZnVuY3Rpb24gSFRNTDVIaXN0b3J5IChyb3V0ZXIsIGJhc2UpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgIEhpc3RvcnkuY2FsbCh0aGlzLCByb3V0ZXIsIGJhc2UpXG5cbiAgICB2YXIgZXhwZWN0U2Nyb2xsID0gcm91dGVyLm9wdGlvbnMuc2Nyb2xsQmVoYXZpb3JcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgX2tleSA9IGUuc3RhdGUgJiYgZS5zdGF0ZS5rZXlcbiAgICAgIHZhciBjdXJyZW50ID0gdGhpcyQxLmN1cnJlbnRcbiAgICAgIHRoaXMkMS50cmFuc2l0aW9uVG8oZ2V0TG9jYXRpb24odGhpcyQxLmJhc2UpLCBmdW5jdGlvbiAobmV4dCkge1xuICAgICAgICBpZiAoZXhwZWN0U2Nyb2xsKSB7XG4gICAgICAgICAgdGhpcyQxLmhhbmRsZVNjcm9sbChuZXh0LCBjdXJyZW50LCB0cnVlKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG5cbiAgICBpZiAoZXhwZWN0U2Nyb2xsKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBzYXZlU2Nyb2xsUG9zaXRpb24oX2tleSlcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgaWYgKCBIaXN0b3J5ICkgSFRNTDVIaXN0b3J5Ll9fcHJvdG9fXyA9IEhpc3Rvcnk7XG4gIEhUTUw1SGlzdG9yeS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBIaXN0b3J5ICYmIEhpc3RvcnkucHJvdG90eXBlICk7XG4gIEhUTUw1SGlzdG9yeS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBIVE1MNUhpc3Rvcnk7XG5cbiAgSFRNTDVIaXN0b3J5LnByb3RvdHlwZS5nbyA9IGZ1bmN0aW9uIGdvIChuKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuZ28obilcbiAgfTtcblxuICBIVE1MNUhpc3RvcnkucHJvdG90eXBlLnB1c2ggPSBmdW5jdGlvbiBwdXNoIChsb2NhdGlvbikge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgdmFyIGN1cnJlbnQgPSB0aGlzLmN1cnJlbnRcbiAgICB0aGlzLnRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgICBwdXNoU3RhdGUoY2xlYW5QYXRoKHRoaXMkMS5iYXNlICsgcm91dGUuZnVsbFBhdGgpKVxuICAgICAgdGhpcyQxLmhhbmRsZVNjcm9sbChyb3V0ZSwgY3VycmVudCwgZmFsc2UpXG4gICAgfSlcbiAgfTtcblxuICBIVE1MNUhpc3RvcnkucHJvdG90eXBlLnJlcGxhY2UgPSBmdW5jdGlvbiByZXBsYWNlIChsb2NhdGlvbikge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgdmFyIGN1cnJlbnQgPSB0aGlzLmN1cnJlbnRcbiAgICB0aGlzLnRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgICByZXBsYWNlU3RhdGUoY2xlYW5QYXRoKHRoaXMkMS5iYXNlICsgcm91dGUuZnVsbFBhdGgpKVxuICAgICAgdGhpcyQxLmhhbmRsZVNjcm9sbChyb3V0ZSwgY3VycmVudCwgZmFsc2UpXG4gICAgfSlcbiAgfTtcblxuICBIVE1MNUhpc3RvcnkucHJvdG90eXBlLmVuc3VyZVVSTCA9IGZ1bmN0aW9uIGVuc3VyZVVSTCAocHVzaCkge1xuICAgIGlmIChnZXRMb2NhdGlvbih0aGlzLmJhc2UpICE9PSB0aGlzLmN1cnJlbnQuZnVsbFBhdGgpIHtcbiAgICAgIHZhciBjdXJyZW50ID0gY2xlYW5QYXRoKHRoaXMuYmFzZSArIHRoaXMuY3VycmVudC5mdWxsUGF0aClcbiAgICAgIHB1c2ggPyBwdXNoU3RhdGUoY3VycmVudCkgOiByZXBsYWNlU3RhdGUoY3VycmVudClcbiAgICB9XG4gIH07XG5cbiAgSFRNTDVIaXN0b3J5LnByb3RvdHlwZS5oYW5kbGVTY3JvbGwgPSBmdW5jdGlvbiBoYW5kbGVTY3JvbGwgKHRvLCBmcm9tLCBpc1BvcCkge1xuICAgIHZhciByb3V0ZXIgPSB0aGlzLnJvdXRlclxuICAgIGlmICghcm91dGVyLmFwcCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdmFyIGJlaGF2aW9yID0gcm91dGVyLm9wdGlvbnMuc2Nyb2xsQmVoYXZpb3JcbiAgICBpZiAoIWJlaGF2aW9yKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGFzc2VydCh0eXBlb2YgYmVoYXZpb3IgPT09ICdmdW5jdGlvbicsIFwic2Nyb2xsQmVoYXZpb3IgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpXG4gICAgfVxuXG4gICAgLy8gd2FpdCB1bnRpbCByZS1yZW5kZXIgZmluaXNoZXMgYmVmb3JlIHNjcm9sbGluZ1xuICAgIHJvdXRlci5hcHAuJG5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBwb3NpdGlvbiA9IGdldFNjcm9sbFBvc2l0aW9uKF9rZXkpXG4gICAgICB2YXIgc2hvdWxkU2Nyb2xsID0gYmVoYXZpb3IodG8sIGZyb20sIGlzUG9wID8gcG9zaXRpb24gOiBudWxsKVxuICAgICAgaWYgKCFzaG91bGRTY3JvbGwpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB2YXIgaXNPYmplY3QgPSB0eXBlb2Ygc2hvdWxkU2Nyb2xsID09PSAnb2JqZWN0J1xuICAgICAgaWYgKGlzT2JqZWN0ICYmIHR5cGVvZiBzaG91bGRTY3JvbGwuc2VsZWN0b3IgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHZhciBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2hvdWxkU2Nyb2xsLnNlbGVjdG9yKVxuICAgICAgICBpZiAoZWwpIHtcbiAgICAgICAgICBwb3NpdGlvbiA9IGdldEVsZW1lbnRQb3NpdGlvbihlbClcbiAgICAgICAgfSBlbHNlIGlmIChpc1ZhbGlkUG9zaXRpb24oc2hvdWxkU2Nyb2xsKSkge1xuICAgICAgICAgIHBvc2l0aW9uID0gbm9ybWFsaXplUG9zaXRpb24oc2hvdWxkU2Nyb2xsKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGlzT2JqZWN0ICYmIGlzVmFsaWRQb3NpdGlvbihzaG91bGRTY3JvbGwpKSB7XG4gICAgICAgIHBvc2l0aW9uID0gbm9ybWFsaXplUG9zaXRpb24oc2hvdWxkU2Nyb2xsKVxuICAgICAgfVxuXG4gICAgICBpZiAocG9zaXRpb24pIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKHBvc2l0aW9uLngsIHBvc2l0aW9uLnkpXG4gICAgICB9XG4gICAgfSlcbiAgfTtcblxuICByZXR1cm4gSFRNTDVIaXN0b3J5O1xufShIaXN0b3J5KSk7XG5cbmZ1bmN0aW9uIGdldExvY2F0aW9uIChiYXNlKSB7XG4gIHZhciBwYXRoID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXG4gIGlmIChiYXNlICYmIHBhdGguaW5kZXhPZihiYXNlKSA9PT0gMCkge1xuICAgIHBhdGggPSBwYXRoLnNsaWNlKGJhc2UubGVuZ3RoKVxuICB9XG4gIHJldHVybiAocGF0aCB8fCAnLycpICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaCArIHdpbmRvdy5sb2NhdGlvbi5oYXNoXG59XG5cbmZ1bmN0aW9uIHB1c2hTdGF0ZSAodXJsLCByZXBsYWNlKSB7XG4gIC8vIHRyeS4uLmNhdGNoIHRoZSBwdXNoU3RhdGUgY2FsbCB0byBnZXQgYXJvdW5kIFNhZmFyaVxuICAvLyBET00gRXhjZXB0aW9uIDE4IHdoZXJlIGl0IGxpbWl0cyB0byAxMDAgcHVzaFN0YXRlIGNhbGxzXG4gIHZhciBoaXN0b3J5ID0gd2luZG93Lmhpc3RvcnlcbiAgdHJ5IHtcbiAgICBpZiAocmVwbGFjZSkge1xuICAgICAgaGlzdG9yeS5yZXBsYWNlU3RhdGUoeyBrZXk6IF9rZXkgfSwgJycsIHVybClcbiAgICB9IGVsc2Uge1xuICAgICAgX2tleSA9IGdlbktleSgpXG4gICAgICBoaXN0b3J5LnB1c2hTdGF0ZSh7IGtleTogX2tleSB9LCAnJywgdXJsKVxuICAgIH1cbiAgICBzYXZlU2Nyb2xsUG9zaXRpb24oX2tleSlcbiAgfSBjYXRjaCAoZSkge1xuICAgIHdpbmRvdy5sb2NhdGlvbltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ2Fzc2lnbiddKHVybClcbiAgfVxufVxuXG5mdW5jdGlvbiByZXBsYWNlU3RhdGUgKHVybCkge1xuICBwdXNoU3RhdGUodXJsLCB0cnVlKVxufVxuXG4vKiAgKi9cblxuXG52YXIgSGFzaEhpc3RvcnkgPSAoZnVuY3Rpb24gKEhpc3RvcnkpIHtcbiAgZnVuY3Rpb24gSGFzaEhpc3RvcnkgKHJvdXRlciwgYmFzZSwgZmFsbGJhY2spIHtcbiAgICBIaXN0b3J5LmNhbGwodGhpcywgcm91dGVyLCBiYXNlKVxuICAgIC8vIGNoZWNrIGhpc3RvcnkgZmFsbGJhY2sgZGVlcGxpbmtpbmdcbiAgICBpZiAoZmFsbGJhY2sgJiYgdGhpcy5jaGVja0ZhbGxiYWNrKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBlbnN1cmVTbGFzaCgpXG4gIH1cblxuICBpZiAoIEhpc3RvcnkgKSBIYXNoSGlzdG9yeS5fX3Byb3RvX18gPSBIaXN0b3J5O1xuICBIYXNoSGlzdG9yeS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBIaXN0b3J5ICYmIEhpc3RvcnkucHJvdG90eXBlICk7XG4gIEhhc2hIaXN0b3J5LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEhhc2hIaXN0b3J5O1xuXG4gIEhhc2hIaXN0b3J5LnByb3RvdHlwZS5jaGVja0ZhbGxiYWNrID0gZnVuY3Rpb24gY2hlY2tGYWxsYmFjayAoKSB7XG4gICAgdmFyIGxvY2F0aW9uID0gZ2V0TG9jYXRpb24odGhpcy5iYXNlKVxuICAgIGlmICghL15cXC8jLy50ZXN0KGxvY2F0aW9uKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoXG4gICAgICAgIGNsZWFuUGF0aCh0aGlzLmJhc2UgKyAnLyMnICsgbG9jYXRpb24pXG4gICAgICApXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgfTtcblxuICBIYXNoSGlzdG9yeS5wcm90b3R5cGUub25IYXNoQ2hhbmdlID0gZnVuY3Rpb24gb25IYXNoQ2hhbmdlICgpIHtcbiAgICBpZiAoIWVuc3VyZVNsYXNoKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB0aGlzLnRyYW5zaXRpb25UbyhnZXRIYXNoKCksIGZ1bmN0aW9uIChyb3V0ZSkge1xuICAgICAgcmVwbGFjZUhhc2gocm91dGUuZnVsbFBhdGgpXG4gICAgfSlcbiAgfTtcblxuICBIYXNoSGlzdG9yeS5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uIHB1c2ggKGxvY2F0aW9uKSB7XG4gICAgdGhpcy50cmFuc2l0aW9uVG8obG9jYXRpb24sIGZ1bmN0aW9uIChyb3V0ZSkge1xuICAgICAgcHVzaEhhc2gocm91dGUuZnVsbFBhdGgpXG4gICAgfSlcbiAgfTtcblxuICBIYXNoSGlzdG9yeS5wcm90b3R5cGUucmVwbGFjZSA9IGZ1bmN0aW9uIHJlcGxhY2UgKGxvY2F0aW9uKSB7XG4gICAgdGhpcy50cmFuc2l0aW9uVG8obG9jYXRpb24sIGZ1bmN0aW9uIChyb3V0ZSkge1xuICAgICAgcmVwbGFjZUhhc2gocm91dGUuZnVsbFBhdGgpXG4gICAgfSlcbiAgfTtcblxuICBIYXNoSGlzdG9yeS5wcm90b3R5cGUuZ28gPSBmdW5jdGlvbiBnbyAobikge1xuICAgIHdpbmRvdy5oaXN0b3J5LmdvKG4pXG4gIH07XG5cbiAgSGFzaEhpc3RvcnkucHJvdG90eXBlLmVuc3VyZVVSTCA9IGZ1bmN0aW9uIGVuc3VyZVVSTCAocHVzaCkge1xuICAgIHZhciBjdXJyZW50ID0gdGhpcy5jdXJyZW50LmZ1bGxQYXRoXG4gICAgaWYgKGdldEhhc2goKSAhPT0gY3VycmVudCkge1xuICAgICAgcHVzaCA/IHB1c2hIYXNoKGN1cnJlbnQpIDogcmVwbGFjZUhhc2goY3VycmVudClcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIEhhc2hIaXN0b3J5O1xufShIaXN0b3J5KSk7XG5cbmZ1bmN0aW9uIGVuc3VyZVNsYXNoICgpIHtcbiAgdmFyIHBhdGggPSBnZXRIYXNoKClcbiAgaWYgKHBhdGguY2hhckF0KDApID09PSAnLycpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG4gIHJlcGxhY2VIYXNoKCcvJyArIHBhdGgpXG4gIHJldHVybiBmYWxzZVxufVxuXG5mdW5jdGlvbiBnZXRIYXNoICgpIHtcbiAgLy8gV2UgY2FuJ3QgdXNlIHdpbmRvdy5sb2NhdGlvbi5oYXNoIGhlcmUgYmVjYXVzZSBpdCdzIG5vdFxuICAvLyBjb25zaXN0ZW50IGFjcm9zcyBicm93c2VycyAtIEZpcmVmb3ggd2lsbCBwcmUtZGVjb2RlIGl0IVxuICB2YXIgaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmXG4gIHZhciBpbmRleCA9IGhyZWYuaW5kZXhPZignIycpXG4gIHJldHVybiBpbmRleCA9PT0gLTEgPyAnJyA6IGhyZWYuc2xpY2UoaW5kZXggKyAxKVxufVxuXG5mdW5jdGlvbiBwdXNoSGFzaCAocGF0aCkge1xuICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IHBhdGhcbn1cblxuZnVuY3Rpb24gcmVwbGFjZUhhc2ggKHBhdGgpIHtcbiAgdmFyIGkgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5pbmRleE9mKCcjJylcbiAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYuc2xpY2UoMCwgaSA+PSAwID8gaSA6IDApICsgJyMnICsgcGF0aFxuICApXG59XG5cbi8qICAqL1xuXG5cbnZhciBBYnN0cmFjdEhpc3RvcnkgPSAoZnVuY3Rpb24gKEhpc3RvcnkpIHtcbiAgZnVuY3Rpb24gQWJzdHJhY3RIaXN0b3J5IChyb3V0ZXIsIGJhc2UpIHtcbiAgICBIaXN0b3J5LmNhbGwodGhpcywgcm91dGVyLCBiYXNlKVxuICAgIHRoaXMuc3RhY2sgPSBbXVxuICAgIHRoaXMuaW5kZXggPSAtMVxuICB9XG5cbiAgaWYgKCBIaXN0b3J5ICkgQWJzdHJhY3RIaXN0b3J5Ll9fcHJvdG9fXyA9IEhpc3Rvcnk7XG4gIEFic3RyYWN0SGlzdG9yeS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBIaXN0b3J5ICYmIEhpc3RvcnkucHJvdG90eXBlICk7XG4gIEFic3RyYWN0SGlzdG9yeS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBBYnN0cmFjdEhpc3Rvcnk7XG5cbiAgQWJzdHJhY3RIaXN0b3J5LnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24gcHVzaCAobG9jYXRpb24pIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgIHRoaXMudHJhbnNpdGlvblRvKGxvY2F0aW9uLCBmdW5jdGlvbiAocm91dGUpIHtcbiAgICAgIHRoaXMkMS5zdGFjayA9IHRoaXMkMS5zdGFjay5zbGljZSgwLCB0aGlzJDEuaW5kZXggKyAxKS5jb25jYXQocm91dGUpXG4gICAgICB0aGlzJDEuaW5kZXgrK1xuICAgIH0pXG4gIH07XG5cbiAgQWJzdHJhY3RIaXN0b3J5LnByb3RvdHlwZS5yZXBsYWNlID0gZnVuY3Rpb24gcmVwbGFjZSAobG9jYXRpb24pIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgIHRoaXMudHJhbnNpdGlvblRvKGxvY2F0aW9uLCBmdW5jdGlvbiAocm91dGUpIHtcbiAgICAgIHRoaXMkMS5zdGFjayA9IHRoaXMkMS5zdGFjay5zbGljZSgwLCB0aGlzJDEuaW5kZXgpLmNvbmNhdChyb3V0ZSlcbiAgICB9KVxuICB9O1xuXG4gIEFic3RyYWN0SGlzdG9yeS5wcm90b3R5cGUuZ28gPSBmdW5jdGlvbiBnbyAobikge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgdmFyIHRhcmdldEluZGV4ID0gdGhpcy5pbmRleCArIG5cbiAgICBpZiAodGFyZ2V0SW5kZXggPCAwIHx8IHRhcmdldEluZGV4ID49IHRoaXMuc3RhY2subGVuZ3RoKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdmFyIHJvdXRlID0gdGhpcy5zdGFja1t0YXJnZXRJbmRleF1cbiAgICB0aGlzLmNvbmZpcm1UcmFuc2l0aW9uKHJvdXRlLCBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzJDEuaW5kZXggPSB0YXJnZXRJbmRleFxuICAgICAgdGhpcyQxLnVwZGF0ZVJvdXRlKHJvdXRlKVxuICAgIH0pXG4gIH07XG5cbiAgQWJzdHJhY3RIaXN0b3J5LnByb3RvdHlwZS5lbnN1cmVVUkwgPSBmdW5jdGlvbiBlbnN1cmVVUkwgKCkge1xuICAgIC8vIG5vb3BcbiAgfTtcblxuICByZXR1cm4gQWJzdHJhY3RIaXN0b3J5O1xufShIaXN0b3J5KSk7XG5cbi8qICAqL1xuXG52YXIgVnVlUm91dGVyID0gZnVuY3Rpb24gVnVlUm91dGVyIChvcHRpb25zKSB7XG4gIGlmICggb3B0aW9ucyA9PT0gdm9pZCAwICkgb3B0aW9ucyA9IHt9O1xuXG4gIHRoaXMuYXBwID0gbnVsbFxuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG4gIHRoaXMuYmVmb3JlSG9va3MgPSBbXVxuICB0aGlzLmFmdGVySG9va3MgPSBbXVxuICB0aGlzLm1hdGNoID0gY3JlYXRlTWF0Y2hlcihvcHRpb25zLnJvdXRlcyB8fCBbXSlcblxuICB2YXIgbW9kZSA9IG9wdGlvbnMubW9kZSB8fCAnaGFzaCdcbiAgdGhpcy5mYWxsYmFjayA9IG1vZGUgPT09ICdoaXN0b3J5JyAmJiAhc3VwcG9ydHNIaXN0b3J5XG4gIGlmICh0aGlzLmZhbGxiYWNrKSB7XG4gICAgbW9kZSA9ICdoYXNoJ1xuICB9XG4gIGlmICghaW5Ccm93c2VyKSB7XG4gICAgbW9kZSA9ICdhYnN0cmFjdCdcbiAgfVxuICB0aGlzLm1vZGUgPSBtb2RlXG5cbiAgc3dpdGNoIChtb2RlKSB7XG4gICAgY2FzZSAnaGlzdG9yeSc6XG4gICAgICB0aGlzLmhpc3RvcnkgPSBuZXcgSFRNTDVIaXN0b3J5KHRoaXMsIG9wdGlvbnMuYmFzZSlcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnaGFzaCc6XG4gICAgICB0aGlzLmhpc3RvcnkgPSBuZXcgSGFzaEhpc3RvcnkodGhpcywgb3B0aW9ucy5iYXNlLCB0aGlzLmZhbGxiYWNrKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdhYnN0cmFjdCc6XG4gICAgICB0aGlzLmhpc3RvcnkgPSBuZXcgQWJzdHJhY3RIaXN0b3J5KHRoaXMsIG9wdGlvbnMuYmFzZSlcbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgYXNzZXJ0KGZhbHNlLCAoXCJpbnZhbGlkIG1vZGU6IFwiICsgbW9kZSkpXG4gIH1cbn07XG5cbnZhciBwcm90b3R5cGVBY2Nlc3NvcnMgPSB7IGN1cnJlbnRSb3V0ZToge30gfTtcblxucHJvdG90eXBlQWNjZXNzb3JzLmN1cnJlbnRSb3V0ZS5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmhpc3RvcnkgJiYgdGhpcy5oaXN0b3J5LmN1cnJlbnRcbn07XG5cblZ1ZVJvdXRlci5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uIGluaXQgKGFwcCAvKiBWdWUgY29tcG9uZW50IGluc3RhbmNlICovKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBhc3NlcnQoXG4gICAgaW5zdGFsbC5pbnN0YWxsZWQsXG4gICAgXCJub3QgaW5zdGFsbGVkLiBNYWtlIHN1cmUgdG8gY2FsbCBgVnVlLnVzZShWdWVSb3V0ZXIpYCBcIiArXG4gICAgXCJiZWZvcmUgY3JlYXRpbmcgcm9vdCBpbnN0YW5jZS5cIlxuICApXG5cbiAgdGhpcy5hcHAgPSBhcHBcblxuICB2YXIgaGlzdG9yeSA9IHRoaXMuaGlzdG9yeVxuXG4gIGlmIChoaXN0b3J5IGluc3RhbmNlb2YgSFRNTDVIaXN0b3J5KSB7XG4gICAgaGlzdG9yeS50cmFuc2l0aW9uVG8oZ2V0TG9jYXRpb24oaGlzdG9yeS5iYXNlKSlcbiAgfSBlbHNlIGlmIChoaXN0b3J5IGluc3RhbmNlb2YgSGFzaEhpc3RvcnkpIHtcbiAgICB2YXIgc2V0dXBIYXNoTGlzdGVuZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaGlzdG9yeS5vbkhhc2hDaGFuZ2UoKVxuICAgICAgfSlcbiAgICB9XG4gICAgaGlzdG9yeS50cmFuc2l0aW9uVG8oZ2V0SGFzaCgpLCBzZXR1cEhhc2hMaXN0ZW5lciwgc2V0dXBIYXNoTGlzdGVuZXIpXG4gIH1cblxuICBoaXN0b3J5Lmxpc3RlbihmdW5jdGlvbiAocm91dGUpIHtcbiAgICB0aGlzJDEuYXBwLl9yb3V0ZSA9IHJvdXRlXG4gIH0pXG59O1xuXG5WdWVSb3V0ZXIucHJvdG90eXBlLmJlZm9yZUVhY2ggPSBmdW5jdGlvbiBiZWZvcmVFYWNoIChmbikge1xuICB0aGlzLmJlZm9yZUhvb2tzLnB1c2goZm4pXG59O1xuXG5WdWVSb3V0ZXIucHJvdG90eXBlLmFmdGVyRWFjaCA9IGZ1bmN0aW9uIGFmdGVyRWFjaCAoZm4pIHtcbiAgdGhpcy5hZnRlckhvb2tzLnB1c2goZm4pXG59O1xuXG5WdWVSb3V0ZXIucHJvdG90eXBlLnB1c2ggPSBmdW5jdGlvbiBwdXNoIChsb2NhdGlvbikge1xuICB0aGlzLmhpc3RvcnkucHVzaChsb2NhdGlvbilcbn07XG5cblZ1ZVJvdXRlci5wcm90b3R5cGUucmVwbGFjZSA9IGZ1bmN0aW9uIHJlcGxhY2UgKGxvY2F0aW9uKSB7XG4gIHRoaXMuaGlzdG9yeS5yZXBsYWNlKGxvY2F0aW9uKVxufTtcblxuVnVlUm91dGVyLnByb3RvdHlwZS5nbyA9IGZ1bmN0aW9uIGdvIChuKSB7XG4gIHRoaXMuaGlzdG9yeS5nbyhuKVxufTtcblxuVnVlUm91dGVyLnByb3RvdHlwZS5iYWNrID0gZnVuY3Rpb24gYmFjayAoKSB7XG4gIHRoaXMuZ28oLTEpXG59O1xuXG5WdWVSb3V0ZXIucHJvdG90eXBlLmZvcndhcmQgPSBmdW5jdGlvbiBmb3J3YXJkICgpIHtcbiAgdGhpcy5nbygxKVxufTtcblxuVnVlUm91dGVyLnByb3RvdHlwZS5nZXRNYXRjaGVkQ29tcG9uZW50cyA9IGZ1bmN0aW9uIGdldE1hdGNoZWRDb21wb25lbnRzICh0bykge1xuICB2YXIgcm91dGUgPSB0b1xuICAgID8gdGhpcy5yZXNvbHZlKHRvKS5yZXNvbHZlZFxuICAgIDogdGhpcy5jdXJyZW50Um91dGVcbiAgaWYgKCFyb3V0ZSkge1xuICAgIHJldHVybiBbXVxuICB9XG4gIHJldHVybiBbXS5jb25jYXQuYXBwbHkoW10sIHJvdXRlLm1hdGNoZWQubWFwKGZ1bmN0aW9uIChtKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG0uY29tcG9uZW50cykubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBtLmNvbXBvbmVudHNba2V5XVxuICAgIH0pXG4gIH0pKVxufTtcblxuVnVlUm91dGVyLnByb3RvdHlwZS5yZXNvbHZlID0gZnVuY3Rpb24gcmVzb2x2ZSAoXG4gIHRvLFxuICBjdXJyZW50LFxuICBhcHBlbmRcbikge1xuICB2YXIgbm9ybWFsaXplZFRvID0gbm9ybWFsaXplTG9jYXRpb24odG8sIGN1cnJlbnQgfHwgdGhpcy5oaXN0b3J5LmN1cnJlbnQsIGFwcGVuZClcbiAgdmFyIHJlc29sdmVkID0gdGhpcy5tYXRjaChub3JtYWxpemVkVG8sIGN1cnJlbnQpXG4gIHZhciBmdWxsUGF0aCA9IHJlc29sdmVkLnJlZGlyZWN0ZWRGcm9tIHx8IHJlc29sdmVkLmZ1bGxQYXRoXG4gIHZhciBiYXNlID0gdGhpcy5oaXN0b3J5LmJhc2VcbiAgdmFyIGhyZWYgPSBjcmVhdGVIcmVmKGJhc2UsIGZ1bGxQYXRoLCB0aGlzLm1vZGUpXG4gIHJldHVybiB7XG4gICAgbm9ybWFsaXplZFRvOiBub3JtYWxpemVkVG8sXG4gICAgcmVzb2x2ZWQ6IHJlc29sdmVkLFxuICAgIGhyZWY6IGhyZWZcbiAgfVxufTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoIFZ1ZVJvdXRlci5wcm90b3R5cGUsIHByb3RvdHlwZUFjY2Vzc29ycyApO1xuXG5mdW5jdGlvbiBjcmVhdGVIcmVmIChiYXNlLCBmdWxsUGF0aCwgbW9kZSkge1xuICB2YXIgcGF0aCA9IG1vZGUgPT09ICdoYXNoJyA/ICcjJyArIGZ1bGxQYXRoIDogZnVsbFBhdGhcbiAgcmV0dXJuIGJhc2UgPyBjbGVhblBhdGgoYmFzZSArICcvJyArIHBhdGgpIDogcGF0aFxufVxuXG5WdWVSb3V0ZXIuaW5zdGFsbCA9IGluc3RhbGxcblZ1ZVJvdXRlci52ZXJzaW9uID0gJzIuMS4yJ1xuXG5pZiAoaW5Ccm93c2VyICYmIHdpbmRvdy5WdWUpIHtcbiAgd2luZG93LlZ1ZS51c2UoVnVlUm91dGVyKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZ1ZVJvdXRlcjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXJvdXRlci9kaXN0L3Z1ZS1yb3V0ZXIuY29tbW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcHJvY2Vzcy9icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIVxuICogdnVlLXJlc291cmNlIHYxLjAuM1xuICogaHR0cHM6Ly9naXRodWIuY29tL3Z1ZWpzL3Z1ZS1yZXNvdXJjZVxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBQcm9taXNlcy9BKyBwb2x5ZmlsbCB2MS4xLjQgKGh0dHBzOi8vZ2l0aHViLmNvbS9icmFtc3RlaW4vcHJvbWlzKVxuICovXG5cbnZhciBSRVNPTFZFRCA9IDA7XG52YXIgUkVKRUNURUQgPSAxO1xudmFyIFBFTkRJTkcgPSAyO1xuXG5mdW5jdGlvbiBQcm9taXNlJDEoZXhlY3V0b3IpIHtcblxuICAgIHRoaXMuc3RhdGUgPSBQRU5ESU5HO1xuICAgIHRoaXMudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5kZWZlcnJlZCA9IFtdO1xuXG4gICAgdmFyIHByb21pc2UgPSB0aGlzO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgZXhlY3V0b3IoZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgIHByb21pc2UucmVzb2x2ZSh4KTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgICAgIHByb21pc2UucmVqZWN0KHIpO1xuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHByb21pc2UucmVqZWN0KGUpO1xuICAgIH1cbn1cblxuUHJvbWlzZSQxLnJlamVjdCA9IGZ1bmN0aW9uIChyKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICByZWplY3Qocik7XG4gICAgfSk7XG59O1xuXG5Qcm9taXNlJDEucmVzb2x2ZSA9IGZ1bmN0aW9uICh4KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICByZXNvbHZlKHgpO1xuICAgIH0pO1xufTtcblxuUHJvbWlzZSQxLmFsbCA9IGZ1bmN0aW9uIGFsbChpdGVyYWJsZSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdmFyIGNvdW50ID0gMCxcbiAgICAgICAgICAgIHJlc3VsdCA9IFtdO1xuXG4gICAgICAgIGlmIChpdGVyYWJsZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHJlc29sdmVyKGkpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdFtpXSA9IHg7XG4gICAgICAgICAgICAgICAgY291bnQgKz0gMTtcblxuICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PT0gaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVyYWJsZS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgUHJvbWlzZSQxLnJlc29sdmUoaXRlcmFibGVbaV0pLnRoZW4ocmVzb2x2ZXIoaSksIHJlamVjdCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cblByb21pc2UkMS5yYWNlID0gZnVuY3Rpb24gcmFjZShpdGVyYWJsZSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVyYWJsZS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgUHJvbWlzZSQxLnJlc29sdmUoaXRlcmFibGVbaV0pLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxudmFyIHAkMSA9IFByb21pc2UkMS5wcm90b3R5cGU7XG5cbnAkMS5yZXNvbHZlID0gZnVuY3Rpb24gcmVzb2x2ZSh4KSB7XG4gICAgdmFyIHByb21pc2UgPSB0aGlzO1xuXG4gICAgaWYgKHByb21pc2Uuc3RhdGUgPT09IFBFTkRJTkcpIHtcbiAgICAgICAgaWYgKHggPT09IHByb21pc2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Byb21pc2Ugc2V0dGxlZCB3aXRoIGl0c2VsZi4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjYWxsZWQgPSBmYWxzZTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIHRoZW4gPSB4ICYmIHhbJ3RoZW4nXTtcblxuICAgICAgICAgICAgaWYgKHggIT09IG51bGwgJiYgdHlwZW9mIHggPT09ICdvYmplY3QnICYmIHR5cGVvZiB0aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdGhlbi5jYWxsKHgsIGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghY2FsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlLnJlc29sdmUoeCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAocikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNhbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZS5yZWplY3Qocik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGlmICghY2FsbGVkKSB7XG4gICAgICAgICAgICAgICAgcHJvbWlzZS5yZWplY3QoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBwcm9taXNlLnN0YXRlID0gUkVTT0xWRUQ7XG4gICAgICAgIHByb21pc2UudmFsdWUgPSB4O1xuICAgICAgICBwcm9taXNlLm5vdGlmeSgpO1xuICAgIH1cbn07XG5cbnAkMS5yZWplY3QgPSBmdW5jdGlvbiByZWplY3QocmVhc29uKSB7XG4gICAgdmFyIHByb21pc2UgPSB0aGlzO1xuXG4gICAgaWYgKHByb21pc2Uuc3RhdGUgPT09IFBFTkRJTkcpIHtcbiAgICAgICAgaWYgKHJlYXNvbiA9PT0gcHJvbWlzZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUHJvbWlzZSBzZXR0bGVkIHdpdGggaXRzZWxmLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJvbWlzZS5zdGF0ZSA9IFJFSkVDVEVEO1xuICAgICAgICBwcm9taXNlLnZhbHVlID0gcmVhc29uO1xuICAgICAgICBwcm9taXNlLm5vdGlmeSgpO1xuICAgIH1cbn07XG5cbnAkMS5ub3RpZnkgPSBmdW5jdGlvbiBub3RpZnkoKSB7XG4gICAgdmFyIHByb21pc2UgPSB0aGlzO1xuXG4gICAgbmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAocHJvbWlzZS5zdGF0ZSAhPT0gUEVORElORykge1xuICAgICAgICAgICAgd2hpbGUgKHByb21pc2UuZGVmZXJyZWQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gcHJvbWlzZS5kZWZlcnJlZC5zaGlmdCgpLFxuICAgICAgICAgICAgICAgICAgICBvblJlc29sdmVkID0gZGVmZXJyZWRbMF0sXG4gICAgICAgICAgICAgICAgICAgIG9uUmVqZWN0ZWQgPSBkZWZlcnJlZFsxXSxcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSA9IGRlZmVycmVkWzJdLFxuICAgICAgICAgICAgICAgICAgICByZWplY3QgPSBkZWZlcnJlZFszXTtcblxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9taXNlLnN0YXRlID09PSBSRVNPTFZFRCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvblJlc29sdmVkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShvblJlc29sdmVkLmNhbGwodW5kZWZpbmVkLCBwcm9taXNlLnZhbHVlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocHJvbWlzZS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvbWlzZS5zdGF0ZSA9PT0gUkVKRUNURUQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb25SZWplY3RlZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUob25SZWplY3RlZC5jYWxsKHVuZGVmaW5lZCwgcHJvbWlzZS52YWx1ZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QocHJvbWlzZS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbnAkMS50aGVuID0gZnVuY3Rpb24gdGhlbihvblJlc29sdmVkLCBvblJlamVjdGVkKSB7XG4gICAgdmFyIHByb21pc2UgPSB0aGlzO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBwcm9taXNlLmRlZmVycmVkLnB1c2goW29uUmVzb2x2ZWQsIG9uUmVqZWN0ZWQsIHJlc29sdmUsIHJlamVjdF0pO1xuICAgICAgICBwcm9taXNlLm5vdGlmeSgpO1xuICAgIH0pO1xufTtcblxucCQxLmNhdGNoID0gZnVuY3Rpb24gKG9uUmVqZWN0ZWQpIHtcbiAgICByZXR1cm4gdGhpcy50aGVuKHVuZGVmaW5lZCwgb25SZWplY3RlZCk7XG59O1xuXG4vKipcbiAqIFByb21pc2UgYWRhcHRlci5cbiAqL1xuXG5pZiAodHlwZW9mIFByb21pc2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgd2luZG93LlByb21pc2UgPSBQcm9taXNlJDE7XG59XG5cbmZ1bmN0aW9uIFByb21pc2VPYmooZXhlY3V0b3IsIGNvbnRleHQpIHtcblxuICAgIGlmIChleGVjdXRvciBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgdGhpcy5wcm9taXNlID0gZXhlY3V0b3I7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoZXhlY3V0b3IuYmluZChjb250ZXh0KSk7XG4gICAgfVxuXG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbn1cblxuUHJvbWlzZU9iai5hbGwgPSBmdW5jdGlvbiAoaXRlcmFibGUsIGNvbnRleHQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2VPYmooUHJvbWlzZS5hbGwoaXRlcmFibGUpLCBjb250ZXh0KTtcbn07XG5cblByb21pc2VPYmoucmVzb2x2ZSA9IGZ1bmN0aW9uICh2YWx1ZSwgY29udGV4dCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZU9iaihQcm9taXNlLnJlc29sdmUodmFsdWUpLCBjb250ZXh0KTtcbn07XG5cblByb21pc2VPYmoucmVqZWN0ID0gZnVuY3Rpb24gKHJlYXNvbiwgY29udGV4dCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZU9iaihQcm9taXNlLnJlamVjdChyZWFzb24pLCBjb250ZXh0KTtcbn07XG5cblByb21pc2VPYmoucmFjZSA9IGZ1bmN0aW9uIChpdGVyYWJsZSwgY29udGV4dCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZU9iaihQcm9taXNlLnJhY2UoaXRlcmFibGUpLCBjb250ZXh0KTtcbn07XG5cbnZhciBwID0gUHJvbWlzZU9iai5wcm90b3R5cGU7XG5cbnAuYmluZCA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICByZXR1cm4gdGhpcztcbn07XG5cbnAudGhlbiA9IGZ1bmN0aW9uIChmdWxmaWxsZWQsIHJlamVjdGVkKSB7XG5cbiAgICBpZiAoZnVsZmlsbGVkICYmIGZ1bGZpbGxlZC5iaW5kICYmIHRoaXMuY29udGV4dCkge1xuICAgICAgICBmdWxmaWxsZWQgPSBmdWxmaWxsZWQuYmluZCh0aGlzLmNvbnRleHQpO1xuICAgIH1cblxuICAgIGlmIChyZWplY3RlZCAmJiByZWplY3RlZC5iaW5kICYmIHRoaXMuY29udGV4dCkge1xuICAgICAgICByZWplY3RlZCA9IHJlamVjdGVkLmJpbmQodGhpcy5jb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2VPYmoodGhpcy5wcm9taXNlLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCksIHRoaXMuY29udGV4dCk7XG59O1xuXG5wLmNhdGNoID0gZnVuY3Rpb24gKHJlamVjdGVkKSB7XG5cbiAgICBpZiAocmVqZWN0ZWQgJiYgcmVqZWN0ZWQuYmluZCAmJiB0aGlzLmNvbnRleHQpIHtcbiAgICAgICAgcmVqZWN0ZWQgPSByZWplY3RlZC5iaW5kKHRoaXMuY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlT2JqKHRoaXMucHJvbWlzZS5jYXRjaChyZWplY3RlZCksIHRoaXMuY29udGV4dCk7XG59O1xuXG5wLmZpbmFsbHkgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblxuICAgIHJldHVybiB0aGlzLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGNhbGxiYWNrLmNhbGwodGhpcyk7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgIGNhbGxiYWNrLmNhbGwodGhpcyk7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZWFzb24pO1xuICAgIH0pO1xufTtcblxuLyoqXG4gKiBVdGlsaXR5IGZ1bmN0aW9ucy5cbiAqL1xuXG52YXIgZGVidWcgPSBmYWxzZTt2YXIgdXRpbCA9IHt9O3ZhciBzbGljZSA9IFtdLnNsaWNlO1xuXG5cbmZ1bmN0aW9uIFV0aWwgKFZ1ZSkge1xuICAgIHV0aWwgPSBWdWUudXRpbDtcbiAgICBkZWJ1ZyA9IFZ1ZS5jb25maWcuZGVidWcgfHwgIVZ1ZS5jb25maWcuc2lsZW50O1xufVxuXG5mdW5jdGlvbiB3YXJuKG1zZykge1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgZGVidWcpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdbVnVlUmVzb3VyY2Ugd2Fybl06ICcgKyBtc2cpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZXJyb3IobXNnKSB7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKG1zZyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBuZXh0VGljayhjYiwgY3R4KSB7XG4gICAgcmV0dXJuIHV0aWwubmV4dFRpY2soY2IsIGN0eCk7XG59XG5cbmZ1bmN0aW9uIHRyaW0oc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzKnxcXHMqJC9nLCAnJyk7XG59XG5cbmZ1bmN0aW9uIHRvTG93ZXIoc3RyKSB7XG4gICAgcmV0dXJuIHN0ciA/IHN0ci50b0xvd2VyQ2FzZSgpIDogJyc7XG59XG5cbmZ1bmN0aW9uIHRvVXBwZXIoc3RyKSB7XG4gICAgcmV0dXJuIHN0ciA/IHN0ci50b1VwcGVyQ2FzZSgpIDogJyc7XG59XG5cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxuZnVuY3Rpb24gaXNTdHJpbmcodmFsKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnO1xufVxuXG5mdW5jdGlvbiBpc0Jvb2xlYW4odmFsKSB7XG4gICAgcmV0dXJuIHZhbCA9PT0gdHJ1ZSB8fCB2YWwgPT09IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbCkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nO1xufVxuXG5mdW5jdGlvbiBpc09iamVjdChvYmopIHtcbiAgICByZXR1cm4gb2JqICE9PSBudWxsICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnO1xufVxuXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KG9iaikge1xuICAgIHJldHVybiBpc09iamVjdChvYmopICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopID09IE9iamVjdC5wcm90b3R5cGU7XG59XG5cbmZ1bmN0aW9uIGlzQmxvYihvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIEJsb2IgIT09ICd1bmRlZmluZWQnICYmIG9iaiBpbnN0YW5jZW9mIEJsb2I7XG59XG5cbmZ1bmN0aW9uIGlzRm9ybURhdGEob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBGb3JtRGF0YSAhPT0gJ3VuZGVmaW5lZCcgJiYgb2JqIGluc3RhbmNlb2YgRm9ybURhdGE7XG59XG5cbmZ1bmN0aW9uIHdoZW4odmFsdWUsIGZ1bGZpbGxlZCwgcmVqZWN0ZWQpIHtcblxuICAgIHZhciBwcm9taXNlID0gUHJvbWlzZU9iai5yZXNvbHZlKHZhbHVlKTtcblxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikge1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvbWlzZS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpO1xufVxuXG5mdW5jdGlvbiBvcHRpb25zKGZuLCBvYmosIG9wdHMpIHtcblxuICAgIG9wdHMgPSBvcHRzIHx8IHt9O1xuXG4gICAgaWYgKGlzRnVuY3Rpb24ob3B0cykpIHtcbiAgICAgICAgb3B0cyA9IG9wdHMuY2FsbChvYmopO1xuICAgIH1cblxuICAgIHJldHVybiBtZXJnZShmbi5iaW5kKHsgJHZtOiBvYmosICRvcHRpb25zOiBvcHRzIH0pLCBmbiwgeyAkb3B0aW9uczogb3B0cyB9KTtcbn1cblxuZnVuY3Rpb24gZWFjaChvYmosIGl0ZXJhdG9yKSB7XG5cbiAgICB2YXIgaSwga2V5O1xuXG4gICAgaWYgKG9iaiAmJiB0eXBlb2Ygb2JqLmxlbmd0aCA9PSAnbnVtYmVyJykge1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgb2JqLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpdGVyYXRvci5jYWxsKG9ialtpXSwgb2JqW2ldLCBpKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNPYmplY3Qob2JqKSkge1xuICAgICAgICBmb3IgKGtleSBpbiBvYmopIHtcbiAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGl0ZXJhdG9yLmNhbGwob2JqW2tleV0sIG9ialtrZXldLCBrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbn1cblxudmFyIGFzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgX2Fzc2lnbjtcblxuZnVuY3Rpb24gbWVyZ2UodGFyZ2V0KSB7XG5cbiAgICB2YXIgYXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcblxuICAgIGFyZ3MuZm9yRWFjaChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICAgIF9tZXJnZSh0YXJnZXQsIHNvdXJjZSwgdHJ1ZSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0cyh0YXJnZXQpIHtcblxuICAgIHZhciBhcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuXG4gICAgYXJncy5mb3JFYWNoKGZ1bmN0aW9uIChzb3VyY2UpIHtcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgICAgICBpZiAodGFyZ2V0W2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIF9hc3NpZ24odGFyZ2V0KSB7XG5cbiAgICB2YXIgYXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcblxuICAgIGFyZ3MuZm9yRWFjaChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICAgIF9tZXJnZSh0YXJnZXQsIHNvdXJjZSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBfbWVyZ2UodGFyZ2V0LCBzb3VyY2UsIGRlZXApIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChkZWVwICYmIChpc1BsYWluT2JqZWN0KHNvdXJjZVtrZXldKSB8fCBpc0FycmF5KHNvdXJjZVtrZXldKSkpIHtcbiAgICAgICAgICAgIGlmIChpc1BsYWluT2JqZWN0KHNvdXJjZVtrZXldKSAmJiAhaXNQbGFpbk9iamVjdCh0YXJnZXRba2V5XSkpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzQXJyYXkoc291cmNlW2tleV0pICYmICFpc0FycmF5KHRhcmdldFtrZXldKSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfbWVyZ2UodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldLCBkZWVwKTtcbiAgICAgICAgfSBlbHNlIGlmIChzb3VyY2Vba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIFJvb3QgUHJlZml4IFRyYW5zZm9ybS5cbiAqL1xuXG5mdW5jdGlvbiByb290IChvcHRpb25zLCBuZXh0KSB7XG5cbiAgICB2YXIgdXJsID0gbmV4dChvcHRpb25zKTtcblxuICAgIGlmIChpc1N0cmluZyhvcHRpb25zLnJvb3QpICYmICF1cmwubWF0Y2goL14oaHR0cHM/Oik/XFwvLykpIHtcbiAgICAgICAgdXJsID0gb3B0aW9ucy5yb290ICsgJy8nICsgdXJsO1xuICAgIH1cblxuICAgIHJldHVybiB1cmw7XG59XG5cbi8qKlxuICogUXVlcnkgUGFyYW1ldGVyIFRyYW5zZm9ybS5cbiAqL1xuXG5mdW5jdGlvbiBxdWVyeSAob3B0aW9ucywgbmV4dCkge1xuXG4gICAgdmFyIHVybFBhcmFtcyA9IE9iamVjdC5rZXlzKFVybC5vcHRpb25zLnBhcmFtcyksXG4gICAgICAgIHF1ZXJ5ID0ge30sXG4gICAgICAgIHVybCA9IG5leHQob3B0aW9ucyk7XG5cbiAgICBlYWNoKG9wdGlvbnMucGFyYW1zLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICBpZiAodXJsUGFyYW1zLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcXVlcnkgPSBVcmwucGFyYW1zKHF1ZXJ5KTtcblxuICAgIGlmIChxdWVyeSkge1xuICAgICAgICB1cmwgKz0gKHVybC5pbmRleE9mKCc/JykgPT0gLTEgPyAnPycgOiAnJicpICsgcXVlcnk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVybDtcbn1cblxuLyoqXG4gKiBVUkwgVGVtcGxhdGUgdjIuMC42IChodHRwczovL2dpdGh1Yi5jb20vYnJhbXN0ZWluL3VybC10ZW1wbGF0ZSlcbiAqL1xuXG5mdW5jdGlvbiBleHBhbmQodXJsLCBwYXJhbXMsIHZhcmlhYmxlcykge1xuXG4gICAgdmFyIHRtcGwgPSBwYXJzZSh1cmwpLFxuICAgICAgICBleHBhbmRlZCA9IHRtcGwuZXhwYW5kKHBhcmFtcyk7XG5cbiAgICBpZiAodmFyaWFibGVzKSB7XG4gICAgICAgIHZhcmlhYmxlcy5wdXNoLmFwcGx5KHZhcmlhYmxlcywgdG1wbC52YXJzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXhwYW5kZWQ7XG59XG5cbmZ1bmN0aW9uIHBhcnNlKHRlbXBsYXRlKSB7XG5cbiAgICB2YXIgb3BlcmF0b3JzID0gWycrJywgJyMnLCAnLicsICcvJywgJzsnLCAnPycsICcmJ10sXG4gICAgICAgIHZhcmlhYmxlcyA9IFtdO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdmFyczogdmFyaWFibGVzLFxuICAgICAgICBleHBhbmQ6IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGVtcGxhdGUucmVwbGFjZSgvXFx7KFteXFx7XFx9XSspXFx9fChbXlxce1xcfV0rKS9nLCBmdW5jdGlvbiAoXywgZXhwcmVzc2lvbiwgbGl0ZXJhbCkge1xuICAgICAgICAgICAgICAgIGlmIChleHByZXNzaW9uKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIG9wZXJhdG9yID0gbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcGVyYXRvcnMuaW5kZXhPZihleHByZXNzaW9uLmNoYXJBdCgwKSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRvciA9IGV4cHJlc3Npb24uY2hhckF0KDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb24uc3Vic3RyKDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbi5zcGxpdCgvLC9nKS5mb3JFYWNoKGZ1bmN0aW9uICh2YXJpYWJsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRtcCA9IC8oW146XFwqXSopKD86OihcXGQrKXwoXFwqKSk/Ly5leGVjKHZhcmlhYmxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcy5wdXNoLmFwcGx5KHZhbHVlcywgZ2V0VmFsdWVzKGNvbnRleHQsIG9wZXJhdG9yLCB0bXBbMV0sIHRtcFsyXSB8fCB0bXBbM10pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlcy5wdXNoKHRtcFsxXSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcGVyYXRvciAmJiBvcGVyYXRvciAhPT0gJysnKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzZXBhcmF0b3IgPSAnLCc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcGVyYXRvciA9PT0gJz8nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VwYXJhdG9yID0gJyYnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvcGVyYXRvciAhPT0gJyMnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VwYXJhdG9yID0gb3BlcmF0b3I7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAodmFsdWVzLmxlbmd0aCAhPT0gMCA/IG9wZXJhdG9yIDogJycpICsgdmFsdWVzLmpvaW4oc2VwYXJhdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZXMuam9pbignLCcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVuY29kZVJlc2VydmVkKGxpdGVyYWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0VmFsdWVzKGNvbnRleHQsIG9wZXJhdG9yLCBrZXksIG1vZGlmaWVyKSB7XG5cbiAgICB2YXIgdmFsdWUgPSBjb250ZXh0W2tleV0sXG4gICAgICAgIHJlc3VsdCA9IFtdO1xuXG4gICAgaWYgKGlzRGVmaW5lZCh2YWx1ZSkgJiYgdmFsdWUgIT09ICcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgfHwgdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUudG9TdHJpbmcoKTtcblxuICAgICAgICAgICAgaWYgKG1vZGlmaWVyICYmIG1vZGlmaWVyICE9PSAnKicpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnN1YnN0cmluZygwLCBwYXJzZUludChtb2RpZmllciwgMTApKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVzdWx0LnB1c2goZW5jb2RlVmFsdWUob3BlcmF0b3IsIHZhbHVlLCBpc0tleU9wZXJhdG9yKG9wZXJhdG9yKSA/IGtleSA6IG51bGwpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChtb2RpZmllciA9PT0gJyonKSB7XG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLmZpbHRlcihpc0RlZmluZWQpLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChlbmNvZGVWYWx1ZShvcGVyYXRvciwgdmFsdWUsIGlzS2V5T3BlcmF0b3Iob3BlcmF0b3IpID8ga2V5IDogbnVsbCkpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzRGVmaW5lZCh2YWx1ZVtrXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChlbmNvZGVWYWx1ZShvcGVyYXRvciwgdmFsdWVba10sIGspKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgdG1wID0gW107XG5cbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUuZmlsdGVyKGlzRGVmaW5lZCkuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRtcC5wdXNoKGVuY29kZVZhbHVlKG9wZXJhdG9yLCB2YWx1ZSkpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzRGVmaW5lZCh2YWx1ZVtrXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bXAucHVzaChlbmNvZGVVUklDb21wb25lbnQoaykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRtcC5wdXNoKGVuY29kZVZhbHVlKG9wZXJhdG9yLCB2YWx1ZVtrXS50b1N0cmluZygpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChpc0tleU9wZXJhdG9yKG9wZXJhdG9yKSkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChlbmNvZGVVUklDb21wb25lbnQoa2V5KSArICc9JyArIHRtcC5qb2luKCcsJykpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodG1wLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh0bXAuam9pbignLCcpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAob3BlcmF0b3IgPT09ICc7Jykge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KGtleSkpO1xuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAnJyAmJiAob3BlcmF0b3IgPT09ICcmJyB8fCBvcGVyYXRvciA9PT0gJz8nKSkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgKyAnPScpO1xuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goJycpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gaXNEZWZpbmVkKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGw7XG59XG5cbmZ1bmN0aW9uIGlzS2V5T3BlcmF0b3Iob3BlcmF0b3IpIHtcbiAgICByZXR1cm4gb3BlcmF0b3IgPT09ICc7JyB8fCBvcGVyYXRvciA9PT0gJyYnIHx8IG9wZXJhdG9yID09PSAnPyc7XG59XG5cbmZ1bmN0aW9uIGVuY29kZVZhbHVlKG9wZXJhdG9yLCB2YWx1ZSwga2V5KSB7XG5cbiAgICB2YWx1ZSA9IG9wZXJhdG9yID09PSAnKycgfHwgb3BlcmF0b3IgPT09ICcjJyA/IGVuY29kZVJlc2VydmVkKHZhbHVlKSA6IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XG5cbiAgICBpZiAoa2V5KSB7XG4gICAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoa2V5KSArICc9JyArIHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGVuY29kZVJlc2VydmVkKHN0cikge1xuICAgIHJldHVybiBzdHIuc3BsaXQoLyglWzAtOUEtRmEtZl17Mn0pL2cpLm1hcChmdW5jdGlvbiAocGFydCkge1xuICAgICAgICBpZiAoIS8lWzAtOUEtRmEtZl0vLnRlc3QocGFydCkpIHtcbiAgICAgICAgICAgIHBhcnQgPSBlbmNvZGVVUkkocGFydCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhcnQ7XG4gICAgfSkuam9pbignJyk7XG59XG5cbi8qKlxuICogVVJMIFRlbXBsYXRlIChSRkMgNjU3MCkgVHJhbnNmb3JtLlxuICovXG5cbmZ1bmN0aW9uIHRlbXBsYXRlIChvcHRpb25zKSB7XG5cbiAgICB2YXIgdmFyaWFibGVzID0gW10sXG4gICAgICAgIHVybCA9IGV4cGFuZChvcHRpb25zLnVybCwgb3B0aW9ucy5wYXJhbXMsIHZhcmlhYmxlcyk7XG5cbiAgICB2YXJpYWJsZXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGRlbGV0ZSBvcHRpb25zLnBhcmFtc1trZXldO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHVybDtcbn1cblxuLyoqXG4gKiBTZXJ2aWNlIGZvciBVUkwgdGVtcGxhdGluZy5cbiAqL1xuXG52YXIgaWUgPSBkb2N1bWVudC5kb2N1bWVudE1vZGU7XG52YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cbmZ1bmN0aW9uIFVybCh1cmwsIHBhcmFtcykge1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzIHx8IHt9LFxuICAgICAgICBvcHRpb25zID0gdXJsLFxuICAgICAgICB0cmFuc2Zvcm07XG5cbiAgICBpZiAoaXNTdHJpbmcodXJsKSkge1xuICAgICAgICBvcHRpb25zID0geyB1cmw6IHVybCwgcGFyYW1zOiBwYXJhbXMgfTtcbiAgICB9XG5cbiAgICBvcHRpb25zID0gbWVyZ2Uoe30sIFVybC5vcHRpb25zLCBzZWxmLiRvcHRpb25zLCBvcHRpb25zKTtcblxuICAgIFVybC50cmFuc2Zvcm1zLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZXIpIHtcbiAgICAgICAgdHJhbnNmb3JtID0gZmFjdG9yeShoYW5kbGVyLCB0cmFuc2Zvcm0sIHNlbGYuJHZtKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0cmFuc2Zvcm0ob3B0aW9ucyk7XG59XG5cbi8qKlxuICogVXJsIG9wdGlvbnMuXG4gKi9cblxuVXJsLm9wdGlvbnMgPSB7XG4gICAgdXJsOiAnJyxcbiAgICByb290OiBudWxsLFxuICAgIHBhcmFtczoge31cbn07XG5cbi8qKlxuICogVXJsIHRyYW5zZm9ybXMuXG4gKi9cblxuVXJsLnRyYW5zZm9ybXMgPSBbdGVtcGxhdGUsIHF1ZXJ5LCByb290XTtcblxuLyoqXG4gKiBFbmNvZGVzIGEgVXJsIHBhcmFtZXRlciBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICovXG5cblVybC5wYXJhbXMgPSBmdW5jdGlvbiAob2JqKSB7XG5cbiAgICB2YXIgcGFyYW1zID0gW10sXG4gICAgICAgIGVzY2FwZSA9IGVuY29kZVVSSUNvbXBvbmVudDtcblxuICAgIHBhcmFtcy5hZGQgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuXG4gICAgICAgIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICB2YWx1ZSA9ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wdXNoKGVzY2FwZShrZXkpICsgJz0nICsgZXNjYXBlKHZhbHVlKSk7XG4gICAgfTtcblxuICAgIHNlcmlhbGl6ZShwYXJhbXMsIG9iaik7XG5cbiAgICByZXR1cm4gcGFyYW1zLmpvaW4oJyYnKS5yZXBsYWNlKC8lMjAvZywgJysnKTtcbn07XG5cbi8qKlxuICogUGFyc2UgYSBVUkwgYW5kIHJldHVybiBpdHMgY29tcG9uZW50cy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKi9cblxuVXJsLnBhcnNlID0gZnVuY3Rpb24gKHVybCkge1xuXG4gICAgaWYgKGllKSB7XG4gICAgICAgIGVsLmhyZWYgPSB1cmw7XG4gICAgICAgIHVybCA9IGVsLmhyZWY7XG4gICAgfVxuXG4gICAgZWwuaHJlZiA9IHVybDtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGhyZWY6IGVsLmhyZWYsXG4gICAgICAgIHByb3RvY29sOiBlbC5wcm90b2NvbCA/IGVsLnByb3RvY29sLnJlcGxhY2UoLzokLywgJycpIDogJycsXG4gICAgICAgIHBvcnQ6IGVsLnBvcnQsXG4gICAgICAgIGhvc3Q6IGVsLmhvc3QsXG4gICAgICAgIGhvc3RuYW1lOiBlbC5ob3N0bmFtZSxcbiAgICAgICAgcGF0aG5hbWU6IGVsLnBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gJy8nID8gZWwucGF0aG5hbWUgOiAnLycgKyBlbC5wYXRobmFtZSxcbiAgICAgICAgc2VhcmNoOiBlbC5zZWFyY2ggPyBlbC5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKSA6ICcnLFxuICAgICAgICBoYXNoOiBlbC5oYXNoID8gZWwuaGFzaC5yZXBsYWNlKC9eIy8sICcnKSA6ICcnXG4gICAgfTtcbn07XG5cbmZ1bmN0aW9uIGZhY3RvcnkoaGFuZGxlciwgbmV4dCwgdm0pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIGhhbmRsZXIuY2FsbCh2bSwgb3B0aW9ucywgbmV4dCk7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gc2VyaWFsaXplKHBhcmFtcywgb2JqLCBzY29wZSkge1xuXG4gICAgdmFyIGFycmF5ID0gaXNBcnJheShvYmopLFxuICAgICAgICBwbGFpbiA9IGlzUGxhaW5PYmplY3Qob2JqKSxcbiAgICAgICAgaGFzaDtcblxuICAgIGVhY2gob2JqLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuXG4gICAgICAgIGhhc2ggPSBpc09iamVjdCh2YWx1ZSkgfHwgaXNBcnJheSh2YWx1ZSk7XG5cbiAgICAgICAgaWYgKHNjb3BlKSB7XG4gICAgICAgICAgICBrZXkgPSBzY29wZSArICdbJyArIChwbGFpbiB8fCBoYXNoID8ga2V5IDogJycpICsgJ10nO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFzY29wZSAmJiBhcnJheSkge1xuICAgICAgICAgICAgcGFyYW1zLmFkZCh2YWx1ZS5uYW1lLCB2YWx1ZS52YWx1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaGFzaCkge1xuICAgICAgICAgICAgc2VyaWFsaXplKHBhcmFtcywgdmFsdWUsIGtleSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJhbXMuYWRkKGtleSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbi8qKlxuICogWERvbWFpbiBjbGllbnQgKEludGVybmV0IEV4cGxvcmVyKS5cbiAqL1xuXG5mdW5jdGlvbiB4ZHJDbGllbnQgKHJlcXVlc3QpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2VPYmooZnVuY3Rpb24gKHJlc29sdmUpIHtcblxuICAgICAgICB2YXIgeGRyID0gbmV3IFhEb21haW5SZXF1ZXN0KCksXG4gICAgICAgICAgICBoYW5kbGVyID0gZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgICAgIHZhciB0eXBlID0gX3JlZi50eXBlO1xuXG5cbiAgICAgICAgICAgIHZhciBzdGF0dXMgPSAwO1xuXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2xvYWQnKSB7XG4gICAgICAgICAgICAgICAgc3RhdHVzID0gMjAwO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnZXJyb3InKSB7XG4gICAgICAgICAgICAgICAgc3RhdHVzID0gNTAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXNvbHZlKHJlcXVlc3QucmVzcG9uZFdpdGgoeGRyLnJlc3BvbnNlVGV4dCwgeyBzdGF0dXM6IHN0YXR1cyB9KSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmVxdWVzdC5hYm9ydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB4ZHIuYWJvcnQoKTtcbiAgICAgICAgfTtcblxuICAgICAgICB4ZHIub3BlbihyZXF1ZXN0Lm1ldGhvZCwgcmVxdWVzdC5nZXRVcmwoKSk7XG4gICAgICAgIHhkci50aW1lb3V0ID0gMDtcbiAgICAgICAgeGRyLm9ubG9hZCA9IGhhbmRsZXI7XG4gICAgICAgIHhkci5vbmVycm9yID0gaGFuZGxlcjtcbiAgICAgICAgeGRyLm9udGltZW91dCA9IGhhbmRsZXI7XG4gICAgICAgIHhkci5vbnByb2dyZXNzID0gZnVuY3Rpb24gKCkge307XG4gICAgICAgIHhkci5zZW5kKHJlcXVlc3QuZ2V0Qm9keSgpKTtcbiAgICB9KTtcbn1cblxuLyoqXG4gKiBDT1JTIEludGVyY2VwdG9yLlxuICovXG5cbnZhciBPUklHSU5fVVJMID0gVXJsLnBhcnNlKGxvY2F0aW9uLmhyZWYpO1xudmFyIFNVUFBPUlRTX0NPUlMgPSAnd2l0aENyZWRlbnRpYWxzJyBpbiBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuZnVuY3Rpb24gY29ycyAocmVxdWVzdCwgbmV4dCkge1xuXG4gICAgaWYgKCFpc0Jvb2xlYW4ocmVxdWVzdC5jcm9zc09yaWdpbikgJiYgY3Jvc3NPcmlnaW4ocmVxdWVzdCkpIHtcbiAgICAgICAgcmVxdWVzdC5jcm9zc09yaWdpbiA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHJlcXVlc3QuY3Jvc3NPcmlnaW4pIHtcblxuICAgICAgICBpZiAoIVNVUFBPUlRTX0NPUlMpIHtcbiAgICAgICAgICAgIHJlcXVlc3QuY2xpZW50ID0geGRyQ2xpZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIHJlcXVlc3QuZW11bGF0ZUhUVFA7XG4gICAgfVxuXG4gICAgbmV4dCgpO1xufVxuXG5mdW5jdGlvbiBjcm9zc09yaWdpbihyZXF1ZXN0KSB7XG5cbiAgICB2YXIgcmVxdWVzdFVybCA9IFVybC5wYXJzZShVcmwocmVxdWVzdCkpO1xuXG4gICAgcmV0dXJuIHJlcXVlc3RVcmwucHJvdG9jb2wgIT09IE9SSUdJTl9VUkwucHJvdG9jb2wgfHwgcmVxdWVzdFVybC5ob3N0ICE9PSBPUklHSU5fVVJMLmhvc3Q7XG59XG5cbi8qKlxuICogQm9keSBJbnRlcmNlcHRvci5cbiAqL1xuXG5mdW5jdGlvbiBib2R5IChyZXF1ZXN0LCBuZXh0KSB7XG5cbiAgICBpZiAoaXNGb3JtRGF0YShyZXF1ZXN0LmJvZHkpKSB7XG5cbiAgICAgICAgcmVxdWVzdC5oZWFkZXJzLmRlbGV0ZSgnQ29udGVudC1UeXBlJyk7XG4gICAgfSBlbHNlIGlmIChpc09iamVjdChyZXF1ZXN0LmJvZHkpIHx8IGlzQXJyYXkocmVxdWVzdC5ib2R5KSkge1xuXG4gICAgICAgIGlmIChyZXF1ZXN0LmVtdWxhdGVKU09OKSB7XG4gICAgICAgICAgICByZXF1ZXN0LmJvZHkgPSBVcmwucGFyYW1zKHJlcXVlc3QuYm9keSk7XG4gICAgICAgICAgICByZXF1ZXN0LmhlYWRlcnMuc2V0KCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXF1ZXN0LmJvZHkgPSBKU09OLnN0cmluZ2lmeShyZXF1ZXN0LmJvZHkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmV4dChmdW5jdGlvbiAocmVzcG9uc2UpIHtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVzcG9uc2UsICdkYXRhJywge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYm9keTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIChib2R5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2R5ID0gYm9keTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmJvZHlUZXh0ID8gd2hlbihyZXNwb25zZS50ZXh0KCksIGZ1bmN0aW9uICh0ZXh0KSB7XG5cbiAgICAgICAgICAgIHZhciB0eXBlID0gcmVzcG9uc2UuaGVhZGVycy5nZXQoJ0NvbnRlbnQtVHlwZScpO1xuXG4gICAgICAgICAgICBpZiAoaXNTdHJpbmcodHlwZSkgJiYgdHlwZS5pbmRleE9mKCdhcHBsaWNhdGlvbi9qc29uJykgPT09IDApIHtcblxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmJvZHkgPSBKU09OLnBhcnNlKHRleHQpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuYm9keSA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNwb25zZS5ib2R5ID0gdGV4dDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICB9KSA6IHJlc3BvbnNlO1xuICAgIH0pO1xufVxuXG4vKipcbiAqIEpTT05QIGNsaWVudC5cbiAqL1xuXG5mdW5jdGlvbiBqc29ucENsaWVudCAocmVxdWVzdCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZU9iaihmdW5jdGlvbiAocmVzb2x2ZSkge1xuXG4gICAgICAgIHZhciBuYW1lID0gcmVxdWVzdC5qc29ucCB8fCAnY2FsbGJhY2snLFxuICAgICAgICAgICAgY2FsbGJhY2sgPSAnX2pzb25wJyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyKSxcbiAgICAgICAgICAgIGJvZHkgPSBudWxsLFxuICAgICAgICAgICAgaGFuZGxlcixcbiAgICAgICAgICAgIHNjcmlwdDtcblxuICAgICAgICBoYW5kbGVyID0gZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgICAgIHZhciB0eXBlID0gX3JlZi50eXBlO1xuXG5cbiAgICAgICAgICAgIHZhciBzdGF0dXMgPSAwO1xuXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2xvYWQnICYmIGJvZHkgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBzdGF0dXMgPSAyMDA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdlcnJvcicpIHtcbiAgICAgICAgICAgICAgICBzdGF0dXMgPSA1MDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlc29sdmUocmVxdWVzdC5yZXNwb25kV2l0aChib2R5LCB7IHN0YXR1czogc3RhdHVzIH0pKTtcblxuICAgICAgICAgICAgZGVsZXRlIHdpbmRvd1tjYWxsYmFja107XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHNjcmlwdCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmVxdWVzdC5wYXJhbXNbbmFtZV0gPSBjYWxsYmFjaztcblxuICAgICAgICB3aW5kb3dbY2FsbGJhY2tdID0gZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgYm9keSA9IEpTT04uc3RyaW5naWZ5KHJlc3VsdCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIHNjcmlwdC5zcmMgPSByZXF1ZXN0LmdldFVybCgpO1xuICAgICAgICBzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgICAgICBzY3JpcHQuYXN5bmMgPSB0cnVlO1xuICAgICAgICBzY3JpcHQub25sb2FkID0gaGFuZGxlcjtcbiAgICAgICAgc2NyaXB0Lm9uZXJyb3IgPSBoYW5kbGVyO1xuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICB9KTtcbn1cblxuLyoqXG4gKiBKU09OUCBJbnRlcmNlcHRvci5cbiAqL1xuXG5mdW5jdGlvbiBqc29ucCAocmVxdWVzdCwgbmV4dCkge1xuXG4gICAgaWYgKHJlcXVlc3QubWV0aG9kID09ICdKU09OUCcpIHtcbiAgICAgICAgcmVxdWVzdC5jbGllbnQgPSBqc29ucENsaWVudDtcbiAgICB9XG5cbiAgICBuZXh0KGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXG4gICAgICAgIGlmIChyZXF1ZXN0Lm1ldGhvZCA9PSAnSlNPTlAnKSB7XG5cbiAgICAgICAgICAgIHJldHVybiB3aGVuKHJlc3BvbnNlLmpzb24oKSwgZnVuY3Rpb24gKGpzb24pIHtcblxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmJvZHkgPSBqc29uO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuLyoqXG4gKiBCZWZvcmUgSW50ZXJjZXB0b3IuXG4gKi9cblxuZnVuY3Rpb24gYmVmb3JlIChyZXF1ZXN0LCBuZXh0KSB7XG5cbiAgICBpZiAoaXNGdW5jdGlvbihyZXF1ZXN0LmJlZm9yZSkpIHtcbiAgICAgICAgcmVxdWVzdC5iZWZvcmUuY2FsbCh0aGlzLCByZXF1ZXN0KTtcbiAgICB9XG5cbiAgICBuZXh0KCk7XG59XG5cbi8qKlxuICogSFRUUCBtZXRob2Qgb3ZlcnJpZGUgSW50ZXJjZXB0b3IuXG4gKi9cblxuZnVuY3Rpb24gbWV0aG9kIChyZXF1ZXN0LCBuZXh0KSB7XG5cbiAgICBpZiAocmVxdWVzdC5lbXVsYXRlSFRUUCAmJiAvXihQVVR8UEFUQ0h8REVMRVRFKSQvaS50ZXN0KHJlcXVlc3QubWV0aG9kKSkge1xuICAgICAgICByZXF1ZXN0LmhlYWRlcnMuc2V0KCdYLUhUVFAtTWV0aG9kLU92ZXJyaWRlJywgcmVxdWVzdC5tZXRob2QpO1xuICAgICAgICByZXF1ZXN0Lm1ldGhvZCA9ICdQT1NUJztcbiAgICB9XG5cbiAgICBuZXh0KCk7XG59XG5cbi8qKlxuICogSGVhZGVyIEludGVyY2VwdG9yLlxuICovXG5cbmZ1bmN0aW9uIGhlYWRlciAocmVxdWVzdCwgbmV4dCkge1xuXG4gICAgdmFyIGhlYWRlcnMgPSBhc3NpZ24oe30sIEh0dHAuaGVhZGVycy5jb21tb24sICFyZXF1ZXN0LmNyb3NzT3JpZ2luID8gSHR0cC5oZWFkZXJzLmN1c3RvbSA6IHt9LCBIdHRwLmhlYWRlcnNbdG9Mb3dlcihyZXF1ZXN0Lm1ldGhvZCldKTtcblxuICAgIGVhY2goaGVhZGVycywgZnVuY3Rpb24gKHZhbHVlLCBuYW1lKSB7XG4gICAgICAgIGlmICghcmVxdWVzdC5oZWFkZXJzLmhhcyhuYW1lKSkge1xuICAgICAgICAgICAgcmVxdWVzdC5oZWFkZXJzLnNldChuYW1lLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIG5leHQoKTtcbn1cblxuLyoqXG4gKiBUaW1lb3V0IEludGVyY2VwdG9yLlxuICovXG5cbmZ1bmN0aW9uIHRpbWVvdXQgKHJlcXVlc3QsIG5leHQpIHtcblxuICAgIHZhciB0aW1lb3V0O1xuXG4gICAgaWYgKHJlcXVlc3QudGltZW91dCkge1xuICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXF1ZXN0LmFib3J0KCk7XG4gICAgICAgIH0sIHJlcXVlc3QudGltZW91dCk7XG4gICAgfVxuXG4gICAgbmV4dChmdW5jdGlvbiAocmVzcG9uc2UpIHtcblxuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgfSk7XG59XG5cbi8qKlxuICogWE1MSHR0cCBjbGllbnQuXG4gKi9cblxuZnVuY3Rpb24geGhyQ2xpZW50IChyZXF1ZXN0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlT2JqKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG5cbiAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpLFxuICAgICAgICAgICAgaGFuZGxlciA9IGZ1bmN0aW9uIChldmVudCkge1xuXG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSByZXF1ZXN0LnJlc3BvbmRXaXRoKCdyZXNwb25zZScgaW4geGhyID8geGhyLnJlc3BvbnNlIDogeGhyLnJlc3BvbnNlVGV4dCwge1xuICAgICAgICAgICAgICAgIHN0YXR1czogeGhyLnN0YXR1cyA9PT0gMTIyMyA/IDIwNCA6IHhoci5zdGF0dXMsIC8vIElFOSBzdGF0dXMgYnVnXG4gICAgICAgICAgICAgICAgc3RhdHVzVGV4dDogeGhyLnN0YXR1cyA9PT0gMTIyMyA/ICdObyBDb250ZW50JyA6IHRyaW0oeGhyLnN0YXR1c1RleHQpXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZWFjaCh0cmltKHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkuc3BsaXQoJ1xcbicpLCBmdW5jdGlvbiAocm93KSB7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuaGVhZGVycy5hcHBlbmQocm93LnNsaWNlKDAsIHJvdy5pbmRleE9mKCc6JykpLCByb3cuc2xpY2Uocm93LmluZGV4T2YoJzonKSArIDEpKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXF1ZXN0LmFib3J0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHhoci5hYm9ydCgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChyZXF1ZXN0LnByb2dyZXNzKSB7XG4gICAgICAgICAgICBpZiAocmVxdWVzdC5tZXRob2QgPT09ICdHRVQnKSB7XG4gICAgICAgICAgICAgICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgcmVxdWVzdC5wcm9ncmVzcyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKC9eKFBPU1R8UFVUKSQvaS50ZXN0KHJlcXVlc3QubWV0aG9kKSkge1xuICAgICAgICAgICAgICAgIHhoci51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCByZXF1ZXN0LnByb2dyZXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHhoci5vcGVuKHJlcXVlc3QubWV0aG9kLCByZXF1ZXN0LmdldFVybCgpLCB0cnVlKTtcblxuICAgICAgICBpZiAoJ3Jlc3BvbnNlVHlwZScgaW4geGhyKSB7XG4gICAgICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2Jsb2InO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlcXVlc3QuY3JlZGVudGlhbHMgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdC5oZWFkZXJzLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBuYW1lKSB7XG4gICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihuYW1lLCB2YWx1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHhoci50aW1lb3V0ID0gMDtcbiAgICAgICAgeGhyLm9ubG9hZCA9IGhhbmRsZXI7XG4gICAgICAgIHhoci5vbmVycm9yID0gaGFuZGxlcjtcbiAgICAgICAgeGhyLnNlbmQocmVxdWVzdC5nZXRCb2R5KCkpO1xuICAgIH0pO1xufVxuXG4vKipcbiAqIEJhc2UgY2xpZW50LlxuICovXG5cbmZ1bmN0aW9uIENsaWVudCAoY29udGV4dCkge1xuXG4gICAgdmFyIHJlcUhhbmRsZXJzID0gW3NlbmRSZXF1ZXN0XSxcbiAgICAgICAgcmVzSGFuZGxlcnMgPSBbXSxcbiAgICAgICAgaGFuZGxlcjtcblxuICAgIGlmICghaXNPYmplY3QoY29udGV4dCkpIHtcbiAgICAgICAgY29udGV4dCA9IG51bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gQ2xpZW50KHJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlT2JqKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGV4ZWMoKSB7XG5cbiAgICAgICAgICAgICAgICBoYW5kbGVyID0gcmVxSGFuZGxlcnMucG9wKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNGdW5jdGlvbihoYW5kbGVyKSkge1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyLmNhbGwoY29udGV4dCwgcmVxdWVzdCwgbmV4dCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd2FybignSW52YWxpZCBpbnRlcmNlcHRvciBvZiB0eXBlICcgKyB0eXBlb2YgaGFuZGxlciArICcsIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICBuZXh0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBuZXh0KHJlc3BvbnNlKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNGdW5jdGlvbihyZXNwb25zZSkpIHtcblxuICAgICAgICAgICAgICAgICAgICByZXNIYW5kbGVycy51bnNoaWZ0KHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlzT2JqZWN0KHJlc3BvbnNlKSkge1xuXG4gICAgICAgICAgICAgICAgICAgIHJlc0hhbmRsZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gd2hlbihyZXNwb25zZSwgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZXIuY2FsbChjb250ZXh0LCByZXNwb25zZSkgfHwgcmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgd2hlbihyZXNwb25zZSwgcmVzb2x2ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGV4ZWMoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZXhlYygpO1xuICAgICAgICB9LCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICBDbGllbnQudXNlID0gZnVuY3Rpb24gKGhhbmRsZXIpIHtcbiAgICAgICAgcmVxSGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIENsaWVudDtcbn1cblxuZnVuY3Rpb24gc2VuZFJlcXVlc3QocmVxdWVzdCwgcmVzb2x2ZSkge1xuXG4gICAgdmFyIGNsaWVudCA9IHJlcXVlc3QuY2xpZW50IHx8IHhockNsaWVudDtcblxuICAgIHJlc29sdmUoY2xpZW50KHJlcXVlc3QpKTtcbn1cblxudmFyIGNsYXNzQ2FsbENoZWNrID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07XG5cbi8qKlxuICogSFRUUCBIZWFkZXJzLlxuICovXG5cbnZhciBIZWFkZXJzID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEhlYWRlcnMoaGVhZGVycykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIEhlYWRlcnMpO1xuXG5cbiAgICAgICAgdGhpcy5tYXAgPSB7fTtcblxuICAgICAgICBlYWNoKGhlYWRlcnMsIGZ1bmN0aW9uICh2YWx1ZSwgbmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmFwcGVuZChuYW1lLCB2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIEhlYWRlcnMucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uIGhhcyhuYW1lKSB7XG4gICAgICAgIHJldHVybiBnZXROYW1lKHRoaXMubWFwLCBuYW1lKSAhPT0gbnVsbDtcbiAgICB9O1xuXG4gICAgSGVhZGVycy5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gZ2V0KG5hbWUpIHtcblxuICAgICAgICB2YXIgbGlzdCA9IHRoaXMubWFwW2dldE5hbWUodGhpcy5tYXAsIG5hbWUpXTtcblxuICAgICAgICByZXR1cm4gbGlzdCA/IGxpc3RbMF0gOiBudWxsO1xuICAgIH07XG5cbiAgICBIZWFkZXJzLnByb3RvdHlwZS5nZXRBbGwgPSBmdW5jdGlvbiBnZXRBbGwobmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYXBbZ2V0TmFtZSh0aGlzLm1hcCwgbmFtZSldIHx8IFtdO1xuICAgIH07XG5cbiAgICBIZWFkZXJzLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiBzZXQobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5tYXBbbm9ybWFsaXplTmFtZShnZXROYW1lKHRoaXMubWFwLCBuYW1lKSB8fCBuYW1lKV0gPSBbdHJpbSh2YWx1ZSldO1xuICAgIH07XG5cbiAgICBIZWFkZXJzLnByb3RvdHlwZS5hcHBlbmQgPSBmdW5jdGlvbiBhcHBlbmQobmFtZSwgdmFsdWUpIHtcblxuICAgICAgICB2YXIgbGlzdCA9IHRoaXMuZ2V0QWxsKG5hbWUpO1xuXG4gICAgICAgIGlmIChsaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgbGlzdC5wdXNoKHRyaW0odmFsdWUpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KG5hbWUsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBIZWFkZXJzLnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbiBfZGVsZXRlKG5hbWUpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMubWFwW2dldE5hbWUodGhpcy5tYXAsIG5hbWUpXTtcbiAgICB9O1xuXG4gICAgSGVhZGVycy5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2ssIHRoaXNBcmcpIHtcbiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgZWFjaCh0aGlzLm1hcCwgZnVuY3Rpb24gKGxpc3QsIG5hbWUpIHtcbiAgICAgICAgICAgIGVhY2gobGlzdCwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrLmNhbGwodGhpc0FyZywgdmFsdWUsIG5hbWUsIF90aGlzMik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiBIZWFkZXJzO1xufSgpO1xuXG5mdW5jdGlvbiBnZXROYW1lKG1hcCwgbmFtZSkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhtYXApLnJlZHVjZShmdW5jdGlvbiAocHJldiwgY3Vycikge1xuICAgICAgICByZXR1cm4gdG9Mb3dlcihuYW1lKSA9PT0gdG9Mb3dlcihjdXJyKSA/IGN1cnIgOiBwcmV2O1xuICAgIH0sIG51bGwpO1xufVxuXG5mdW5jdGlvbiBub3JtYWxpemVOYW1lKG5hbWUpIHtcblxuICAgIGlmICgvW15hLXowLTlcXC0jJCUmJyorLlxcXl9gfH5dL2kudGVzdChuYW1lKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIGNoYXJhY3RlciBpbiBoZWFkZXIgZmllbGQgbmFtZScpO1xuICAgIH1cblxuICAgIHJldHVybiB0cmltKG5hbWUpO1xufVxuXG4vKipcbiAqIEhUVFAgUmVzcG9uc2UuXG4gKi9cblxudmFyIFJlc3BvbnNlID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJlc3BvbnNlKGJvZHksIF9yZWYpIHtcbiAgICAgICAgdmFyIHVybCA9IF9yZWYudXJsO1xuICAgICAgICB2YXIgaGVhZGVycyA9IF9yZWYuaGVhZGVycztcbiAgICAgICAgdmFyIHN0YXR1cyA9IF9yZWYuc3RhdHVzO1xuICAgICAgICB2YXIgc3RhdHVzVGV4dCA9IF9yZWYuc3RhdHVzVGV4dDtcbiAgICAgICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVzcG9uc2UpO1xuXG5cbiAgICAgICAgdGhpcy51cmwgPSB1cmw7XG4gICAgICAgIHRoaXMub2sgPSBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDMwMDtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBzdGF0dXMgfHwgMDtcbiAgICAgICAgdGhpcy5zdGF0dXNUZXh0ID0gc3RhdHVzVGV4dCB8fCAnJztcbiAgICAgICAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMoaGVhZGVycyk7XG4gICAgICAgIHRoaXMuYm9keSA9IGJvZHk7XG5cbiAgICAgICAgaWYgKGlzU3RyaW5nKGJvZHkpKSB7XG5cbiAgICAgICAgICAgIHRoaXMuYm9keVRleHQgPSBib2R5O1xuICAgICAgICB9IGVsc2UgaWYgKGlzQmxvYihib2R5KSkge1xuXG4gICAgICAgICAgICB0aGlzLmJvZHlCbG9iID0gYm9keTtcblxuICAgICAgICAgICAgaWYgKGlzQmxvYlRleHQoYm9keSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvZHlUZXh0ID0gYmxvYlRleHQoYm9keSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBSZXNwb25zZS5wcm90b3R5cGUuYmxvYiA9IGZ1bmN0aW9uIGJsb2IoKSB7XG4gICAgICAgIHJldHVybiB3aGVuKHRoaXMuYm9keUJsb2IpO1xuICAgIH07XG5cbiAgICBSZXNwb25zZS5wcm90b3R5cGUudGV4dCA9IGZ1bmN0aW9uIHRleHQoKSB7XG4gICAgICAgIHJldHVybiB3aGVuKHRoaXMuYm9keVRleHQpO1xuICAgIH07XG5cbiAgICBSZXNwb25zZS5wcm90b3R5cGUuanNvbiA9IGZ1bmN0aW9uIGpzb24oKSB7XG4gICAgICAgIHJldHVybiB3aGVuKHRoaXMudGV4dCgpLCBmdW5jdGlvbiAodGV4dCkge1xuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UodGV4dCk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gUmVzcG9uc2U7XG59KCk7XG5cbmZ1bmN0aW9uIGJsb2JUZXh0KGJvZHkpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2VPYmooZnVuY3Rpb24gKHJlc29sdmUpIHtcblxuICAgICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblxuICAgICAgICByZWFkZXIucmVhZEFzVGV4dChib2R5KTtcbiAgICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJlc29sdmUocmVhZGVyLnJlc3VsdCk7XG4gICAgICAgIH07XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGlzQmxvYlRleHQoYm9keSkge1xuICAgIHJldHVybiBib2R5LnR5cGUuaW5kZXhPZigndGV4dCcpID09PSAwIHx8IGJvZHkudHlwZS5pbmRleE9mKCdqc29uJykgIT09IC0xO1xufVxuXG4vKipcbiAqIEhUVFAgUmVxdWVzdC5cbiAqL1xuXG52YXIgUmVxdWVzdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBSZXF1ZXN0KG9wdGlvbnMpIHtcbiAgICAgICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVxdWVzdCk7XG5cblxuICAgICAgICB0aGlzLmJvZHkgPSBudWxsO1xuICAgICAgICB0aGlzLnBhcmFtcyA9IHt9O1xuXG4gICAgICAgIGFzc2lnbih0aGlzLCBvcHRpb25zLCB7XG4gICAgICAgICAgICBtZXRob2Q6IHRvVXBwZXIob3B0aW9ucy5tZXRob2QgfHwgJ0dFVCcpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghKHRoaXMuaGVhZGVycyBpbnN0YW5jZW9mIEhlYWRlcnMpKSB7XG4gICAgICAgICAgICB0aGlzLmhlYWRlcnMgPSBuZXcgSGVhZGVycyh0aGlzLmhlYWRlcnMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgUmVxdWVzdC5wcm90b3R5cGUuZ2V0VXJsID0gZnVuY3Rpb24gZ2V0VXJsKCkge1xuICAgICAgICByZXR1cm4gVXJsKHRoaXMpO1xuICAgIH07XG5cbiAgICBSZXF1ZXN0LnByb3RvdHlwZS5nZXRCb2R5ID0gZnVuY3Rpb24gZ2V0Qm9keSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9keTtcbiAgICB9O1xuXG4gICAgUmVxdWVzdC5wcm90b3R5cGUucmVzcG9uZFdpdGggPSBmdW5jdGlvbiByZXNwb25kV2l0aChib2R5LCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBuZXcgUmVzcG9uc2UoYm9keSwgYXNzaWduKG9wdGlvbnMgfHwge30sIHsgdXJsOiB0aGlzLmdldFVybCgpIH0pKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFJlcXVlc3Q7XG59KCk7XG5cbi8qKlxuICogU2VydmljZSBmb3Igc2VuZGluZyBuZXR3b3JrIHJlcXVlc3RzLlxuICovXG5cbnZhciBDVVNUT01fSEVBREVSUyA9IHsgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnIH07XG52YXIgQ09NTU9OX0hFQURFUlMgPSB7ICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJyB9O1xudmFyIEpTT05fQ09OVEVOVF9UWVBFID0geyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCcgfTtcblxuZnVuY3Rpb24gSHR0cChvcHRpb25zKSB7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXMgfHwge30sXG4gICAgICAgIGNsaWVudCA9IENsaWVudChzZWxmLiR2bSk7XG5cbiAgICBkZWZhdWx0cyhvcHRpb25zIHx8IHt9LCBzZWxmLiRvcHRpb25zLCBIdHRwLm9wdGlvbnMpO1xuXG4gICAgSHR0cC5pbnRlcmNlcHRvcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgICAgICBjbGllbnQudXNlKGhhbmRsZXIpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNsaWVudChuZXcgUmVxdWVzdChvcHRpb25zKSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblxuICAgICAgICByZXR1cm4gcmVzcG9uc2Uub2sgPyByZXNwb25zZSA6IFByb21pc2VPYmoucmVqZWN0KHJlc3BvbnNlKTtcbiAgICB9LCBmdW5jdGlvbiAocmVzcG9uc2UpIHtcblxuICAgICAgICBpZiAocmVzcG9uc2UgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgZXJyb3IocmVzcG9uc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2VPYmoucmVqZWN0KHJlc3BvbnNlKTtcbiAgICB9KTtcbn1cblxuSHR0cC5vcHRpb25zID0ge307XG5cbkh0dHAuaGVhZGVycyA9IHtcbiAgICBwdXQ6IEpTT05fQ09OVEVOVF9UWVBFLFxuICAgIHBvc3Q6IEpTT05fQ09OVEVOVF9UWVBFLFxuICAgIHBhdGNoOiBKU09OX0NPTlRFTlRfVFlQRSxcbiAgICBkZWxldGU6IEpTT05fQ09OVEVOVF9UWVBFLFxuICAgIGN1c3RvbTogQ1VTVE9NX0hFQURFUlMsXG4gICAgY29tbW9uOiBDT01NT05fSEVBREVSU1xufTtcblxuSHR0cC5pbnRlcmNlcHRvcnMgPSBbYmVmb3JlLCB0aW1lb3V0LCBtZXRob2QsIGJvZHksIGpzb25wLCBoZWFkZXIsIGNvcnNdO1xuXG5bJ2dldCcsICdkZWxldGUnLCAnaGVhZCcsICdqc29ucCddLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xuXG4gICAgSHR0cFttZXRob2RdID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcyhhc3NpZ24ob3B0aW9ucyB8fCB7fSwgeyB1cmw6IHVybCwgbWV0aG9kOiBtZXRob2QgfSkpO1xuICAgIH07XG59KTtcblxuWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xuXG4gICAgSHR0cFttZXRob2RdID0gZnVuY3Rpb24gKHVybCwgYm9keSwgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcyhhc3NpZ24ob3B0aW9ucyB8fCB7fSwgeyB1cmw6IHVybCwgbWV0aG9kOiBtZXRob2QsIGJvZHk6IGJvZHkgfSkpO1xuICAgIH07XG59KTtcblxuLyoqXG4gKiBTZXJ2aWNlIGZvciBpbnRlcmFjdGluZyB3aXRoIFJFU1RmdWwgc2VydmljZXMuXG4gKi9cblxuZnVuY3Rpb24gUmVzb3VyY2UodXJsLCBwYXJhbXMsIGFjdGlvbnMsIG9wdGlvbnMpIHtcblxuICAgIHZhciBzZWxmID0gdGhpcyB8fCB7fSxcbiAgICAgICAgcmVzb3VyY2UgPSB7fTtcblxuICAgIGFjdGlvbnMgPSBhc3NpZ24oe30sIFJlc291cmNlLmFjdGlvbnMsIGFjdGlvbnMpO1xuXG4gICAgZWFjaChhY3Rpb25zLCBmdW5jdGlvbiAoYWN0aW9uLCBuYW1lKSB7XG5cbiAgICAgICAgYWN0aW9uID0gbWVyZ2UoeyB1cmw6IHVybCwgcGFyYW1zOiBhc3NpZ24oe30sIHBhcmFtcykgfSwgb3B0aW9ucywgYWN0aW9uKTtcblxuICAgICAgICByZXNvdXJjZVtuYW1lXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiAoc2VsZi4kaHR0cCB8fCBIdHRwKShvcHRzKGFjdGlvbiwgYXJndW1lbnRzKSk7XG4gICAgICAgIH07XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzb3VyY2U7XG59XG5cbmZ1bmN0aW9uIG9wdHMoYWN0aW9uLCBhcmdzKSB7XG5cbiAgICB2YXIgb3B0aW9ucyA9IGFzc2lnbih7fSwgYWN0aW9uKSxcbiAgICAgICAgcGFyYW1zID0ge30sXG4gICAgICAgIGJvZHk7XG5cbiAgICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG5cbiAgICAgICAgY2FzZSAyOlxuXG4gICAgICAgICAgICBwYXJhbXMgPSBhcmdzWzBdO1xuICAgICAgICAgICAgYm9keSA9IGFyZ3NbMV07XG5cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMTpcblxuICAgICAgICAgICAgaWYgKC9eKFBPU1R8UFVUfFBBVENIKSQvaS50ZXN0KG9wdGlvbnMubWV0aG9kKSkge1xuICAgICAgICAgICAgICAgIGJvZHkgPSBhcmdzWzBdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJhbXMgPSBhcmdzWzBdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDA6XG5cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG5cbiAgICAgICAgICAgIHRocm93ICdFeHBlY3RlZCB1cCB0byA0IGFyZ3VtZW50cyBbcGFyYW1zLCBib2R5XSwgZ290ICcgKyBhcmdzLmxlbmd0aCArICcgYXJndW1lbnRzJztcbiAgICB9XG5cbiAgICBvcHRpb25zLmJvZHkgPSBib2R5O1xuICAgIG9wdGlvbnMucGFyYW1zID0gYXNzaWduKHt9LCBvcHRpb25zLnBhcmFtcywgcGFyYW1zKTtcblxuICAgIHJldHVybiBvcHRpb25zO1xufVxuXG5SZXNvdXJjZS5hY3Rpb25zID0ge1xuXG4gICAgZ2V0OiB7IG1ldGhvZDogJ0dFVCcgfSxcbiAgICBzYXZlOiB7IG1ldGhvZDogJ1BPU1QnIH0sXG4gICAgcXVlcnk6IHsgbWV0aG9kOiAnR0VUJyB9LFxuICAgIHVwZGF0ZTogeyBtZXRob2Q6ICdQVVQnIH0sXG4gICAgcmVtb3ZlOiB7IG1ldGhvZDogJ0RFTEVURScgfSxcbiAgICBkZWxldGU6IHsgbWV0aG9kOiAnREVMRVRFJyB9XG5cbn07XG5cbi8qKlxuICogSW5zdGFsbCBwbHVnaW4uXG4gKi9cblxuZnVuY3Rpb24gcGx1Z2luKFZ1ZSkge1xuXG4gICAgaWYgKHBsdWdpbi5pbnN0YWxsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIFV0aWwoVnVlKTtcblxuICAgIFZ1ZS51cmwgPSBVcmw7XG4gICAgVnVlLmh0dHAgPSBIdHRwO1xuICAgIFZ1ZS5yZXNvdXJjZSA9IFJlc291cmNlO1xuICAgIFZ1ZS5Qcm9taXNlID0gUHJvbWlzZU9iajtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFZ1ZS5wcm90b3R5cGUsIHtcblxuICAgICAgICAkdXJsOiB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucyhWdWUudXJsLCB0aGlzLCB0aGlzLiRvcHRpb25zLnVybCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgJGh0dHA6IHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25zKFZ1ZS5odHRwLCB0aGlzLCB0aGlzLiRvcHRpb25zLmh0dHApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgICRyZXNvdXJjZToge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFZ1ZS5yZXNvdXJjZS5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgICRwcm9taXNlOiB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChleGVjdXRvcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFZ1ZS5Qcm9taXNlKGV4ZWN1dG9yLCBfdGhpcyk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfSk7XG59XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuVnVlKSB7XG4gICAgd2luZG93LlZ1ZS51c2UocGx1Z2luKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwbHVnaW47XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1yZXNvdXJjZS9kaXN0L3Z1ZS1yZXNvdXJjZS5jb21tb24uanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vdXNhZ2UudnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi1iYWNiYzIyMiF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi91c2FnZS52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiL1VzZXJzL296L3NyYy9tYXRlcmlhbC1jb21wb25lbnRzL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL3VzYWdlLnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtYmFjYmMyMjJcIiwgX192dWVfb3B0aW9uc19fKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtYmFjYmMyMjJcIiwgX192dWVfb3B0aW9uc19fKVxuICB9XG59KSgpfVxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSB1c2FnZS52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy91c2FnZS52dWUiLCI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPGgzPkdldHRpbmcgc3RhcnRlZDwvaDM+XG5cbiAgICAgICAgPHA+SW4gcHJvZ3Jlc3M8L3A+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdHtcbiAgICAgICAgZGF0YSgpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHVzYWdlLnZ1ZT81NjY5NDJhZSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfdm0uX20oMClcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW19jKCdoMycsIFtfdm0uX3YoXCJHZXR0aW5nIHN0YXJ0ZWRcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCBbX3ZtLl92KFwiSW4gcHJvZ3Jlc3NcIildKV0pXG59XX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtYmFjYmMyMjJcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LWJhY2JjMjIyIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy91c2FnZS52dWVcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vbmF2LnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMzc0N2UyMWUhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vbmF2LnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCIvVXNlcnMvb3ovc3JjL21hdGVyaWFsLWNvbXBvbmVudHMvZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvbmF2LnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMzc0N2UyMWVcIiwgX192dWVfb3B0aW9uc19fKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMzc0N2UyMWVcIiwgX192dWVfb3B0aW9uc19fKVxuICB9XG59KSgpfVxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBuYXYudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvbmF2LnZ1ZSIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwibWRsLWxheW91dF9fZHJhd2VyXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwibWRsLWxheW91dC10aXRsZVwiPkV4YW1wbGVzPC9zcGFuPlxuICAgICAgICA8bmF2IGNsYXNzPVwibWRsLW5hdmlnYXRpb25cIj5cbiAgICAgICAgICAgIDxyb3V0ZXItbGluayB0bz1cIi91c2FnZVwiIGNsYXNzPVwibWRsLW5hdmlnYXRpb25fX2xpbmtcIj5cbiAgICAgICAgICAgICAgICA8Yj5HZXR0aW5nIHN0YXJ0ZWQ8L2I+XG4gICAgICAgICAgICA8L3JvdXRlci1saW5rPlxuXG4gICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwiJy8nK2kucGF0aFwiIHYtZm9yPVwiaSBpbiBzb3J0ZWRNZW51SXRlbXNcIiBjbGFzcz1cIm1kbC1uYXZpZ2F0aW9uX19saW5rXCI+XG4gICAgICAgICAgICAgICAge3tpLnRpdGxlfX1cbiAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XG4gICAgICAgIDwvbmF2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IHNvcnRCeUtleSB9IGZyb20gJy4uL2hlbHBlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgc29ydGVkTWVudUl0ZW1zKCkge1xuICAgICAgICAgICAgcmV0dXJuIHNvcnRCeUtleSh0aGlzLm1lbnVJdGVtcywgJ3RpdGxlJyk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1lbnVJdGVtczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdUZXh0IEZpZWxkcycsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6ICd0ZXh0ZmllbGRzJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdCdXR0b25zJyxcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogJ2J1dHRvbnMnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1NuYWNrYmFyJyxcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogJ3NuYWNrYmFyJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdTZWxlY3RzJyxcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogJ3NlbGVjdHMnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1NsaWRlcnMnLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiAnc2xpZGVycycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnQmFkZ2VzJyxcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogJ2JhZGdlcycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnTWVudScsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6ICdtZW51JyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdMb2FkaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogJ2xvYWRpbmcnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1RvZ2dsZXMnLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiAndG9nZ2xlcycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnVGFicycsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6ICd0YWJzJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdUb29sdGlwcycsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6ICd0b29sdGlwcycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnVGFibGVzJyxcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogJ3RhYmxlJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdEaWFsb2dzJyxcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogJ2RpYWxvZ3MnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0NhcmRzJyxcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogJ2NhcmRzJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdDaGlwcycsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6ICdjaGlwcycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnTGlzdHMnLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiAnbGlzdHMnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdXG5cbiAgICAgICAgfVxuICAgIH1cbn1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIG5hdi52dWU/MWMxM2FiMmUiLCJleHBvcnQgZnVuY3Rpb24gc29ydEJ5S2V5KGFycmF5LCBrZXkpIHtcbiAgcmV0dXJuIGFycmF5LnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgIHZhciB4ID0gYVtrZXldOyB2YXIgeSA9IGJba2V5XTtcbiAgICByZXR1cm4gKCh4IDwgeSkgPyAtMSA6ICgoeCA+IHkpID8gMSA6IDApKTtcbiAgfSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9leGFtcGxlcy9zcmMvaGVscGVycy5qcyIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kbC1sYXlvdXRfX2RyYXdlclwiXG4gIH0sIFtfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZGwtbGF5b3V0LXRpdGxlXCJcbiAgfSwgW192bS5fdihcIkV4YW1wbGVzXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCduYXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWRsLW5hdmlnYXRpb25cIlxuICB9LCBbX2MoJ3JvdXRlci1saW5rJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kbC1uYXZpZ2F0aW9uX19saW5rXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidG9cIjogXCIvdXNhZ2VcIlxuICAgIH1cbiAgfSwgW19jKCdiJywgW192bS5fdihcIkdldHRpbmcgc3RhcnRlZFwiKV0pXSksIF92bS5fdihcIiBcIiksIF92bS5fbCgoX3ZtLnNvcnRlZE1lbnVJdGVtcyksIGZ1bmN0aW9uKGkpIHtcbiAgICByZXR1cm4gX2MoJ3JvdXRlci1saW5rJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWRsLW5hdmlnYXRpb25fX2xpbmtcIixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwidG9cIjogJy8nICsgaS5wYXRoXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgIFwiICsgX3ZtLl9zKGkudGl0bGUpICsgXCJcXG4gICAgICAgIFwiKV0pXG4gIH0pXSwgMildKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0zNzQ3ZTIxZVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMzc0N2UyMWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL25hdi52dWVcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xudmFyIF9fdnVlX3N0eWxlc19fID0ge31cblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3RleHRmaWVsZHMudnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi02ZDIzMDg0OCF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi90ZXh0ZmllbGRzLnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCIvVXNlcnMvb3ovc3JjL21hdGVyaWFsLWNvbXBvbmVudHMvZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvdGV4dGZpZWxkcy52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTZkMjMwODQ4XCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTZkMjMwODQ4XCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfVxufSkoKX1cbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gdGV4dGZpZWxkcy52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy90ZXh0ZmllbGRzLnZ1ZSIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8aDQ+VGV4dCBGaWVsZHM8L2g0PlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bS10ZXh0ZmllbGQgbGFiZWw9XCJUZXh0Li4uXCI+PC9tLXRleHRmaWVsZD5cbiAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgIDxtLXRleHRmaWVsZCBmbG9hdC1sYWJlbD1cIlRleHRhcmVhLi4uXCIgdGV4dGFyZWE+PC9tLXRleHRmaWVsZD5cbiAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgIDxtLXRleHRmaWVsZCBsYWJlbD1cIk51bWJlci4uLlwiIHBhdHRlcm49XCItP1swLTldKihcXC5bMC05XSspP1wiIGVycm9yPVwiSW52YWxpZCBpbnB1dFwiPjwvbS10ZXh0ZmllbGQ+XG4gICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICA8bS10ZXh0ZmllbGQgZXhwYW5kYWJsZT1cInNlYXJjaFwiIGlkPVwidGVzdC1pZC1zZWFyY2hcIiBmbG9hdC1sYWJlbD1cIkV4cGFuZGluZy4uLlwiPjwvbS10ZXh0ZmllbGQ+XG4gICAgICAgICAgICA8YnI+XG5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5Db2RlOjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY29scz1cIjEwMFwiIHJvd3M9XCI2XCIgOnZhbHVlPVwiZXhhbXBsZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGg0PlRlc3QgRm9ybTwvaDQ+XG5cbiAgICAgICAgICAgIDxmb3JtIEBzdWJtaXQucHJldmVudD1cIm9uU3VibWl0XCI+XG4gICAgICAgICAgICAgICAgPG0tdGV4dGZpZWxkIGZsb2F0LWxhYmVsPVwiRmlyc3QgTmFtZVwiIHYtbW9kZWw9XCJmb3JtLmZpcnN0TmFtZVwiPjwvbS10ZXh0ZmllbGQ+XG4gICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgIDxtLXRleHRmaWVsZCBmbG9hdC1sYWJlbD1cIkxhc3QgTmFtZVwiIHYtbW9kZWw9XCJmb3JtLmxhc3ROYW1lXCI+PC9tLXRleHRmaWVsZD5cbiAgICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgICAgPG0tdGV4dGZpZWxkIGZsb2F0LWxhYmVsPVwiRW1haWxcIiBwYXR0ZXJuPVwiKC4rKUAoLispezIsfVxcLiguKyl7Mix9XCIgZXJyb3I9XCJJbnZhbGlkIGVtYWlsXCI+PC9tLXRleHRmaWVsZD5cbiAgICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgICAgPG0tdGV4dGZpZWxkIGZsb2F0LWxhYmVsPVwiUGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiB2LW1vZGVsPVwiZm9ybS5wYXNzd29yZFwiIHBhdHRlcm49XCIuezMsfVwiPjwvbS10ZXh0ZmllbGQ+XG4gICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgIDxtLXRleHRmaWVsZCBmbG9hdC1sYWJlbD1cIkNvbmZpcm0gcGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiBwYXR0ZXJuPVwiLnszLH1cIiBlcnJvcj1cIlBhc3N3b3JkcyBub3QgbWF0Y2hcIj48L20tdGV4dGZpZWxkPlxuICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uIG1kbC1idXR0b24tLXJhaXNlZFwiIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgQnV0dG9uXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgICAgIDxkaXY+e3tmb3JtfX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBleGFtcGxlczogYFxuICAgICAgICAgICAgICAgIDxtLXRleHRmaWVsZCBsYWJlbD1cIlRleHQuLi5cIj48L20tdGV4dGZpZWxkPlxuICAgICAgICAgICAgICAgIDxtLXRleHRmaWVsZCBmbG9hdC1sYWJlbD1cIlRleHRhcmVhLi4uXCIgdGV4dGFyZWE+PC9tLXRleHRmaWVsZD5cbiAgICAgICAgICAgICAgICA8bS10ZXh0ZmllbGQgbGFiZWw9XCJOdW1iZXIuLi5cIiBwYXR0ZXJuPVwiLT9bMC05XSooXFwuWzAtOV0rKT9cIiBlcnJvcj1cIkludmFsaWQgaW5wdXRcIj48L20tdGV4dGZpZWxkPlxuICAgICAgICAgICAgICAgIDxtLXRleHRmaWVsZCBleHBhbmRhYmxlPVwic2VhcmNoXCIgaWQ9XCJ0ZXN0LWlkLXNlYXJjaFwiIGZsb2F0LWxhYmVsPVwiRXhwYW5kaW5nLi4uXCI+PC9tLXRleHRmaWVsZD5cbiAgICAgICAgICAgIGAsXG4gICAgICAgICAgICBmb3JtOiB7XG4gICAgICAgICAgICAgICAgZmlyc3ROYW1lOiAnJyxcbiAgICAgICAgICAgICAgICBsYXN0TmFtZTogJycsXG4gICAgICAgICAgICAgICAgZW1haWw6ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gdGV4dGZpZWxkcy52dWU/ZmU3MTE4ZjgiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygnaDQnLCBbX3ZtLl92KFwiVGV4dCBGaWVsZHNcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIFtfYygnbS10ZXh0ZmllbGQnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibGFiZWxcIjogXCJUZXh0Li4uXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tdGV4dGZpZWxkJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImZsb2F0LWxhYmVsXCI6IFwiVGV4dGFyZWEuLi5cIixcbiAgICAgIFwidGV4dGFyZWFcIjogXCJcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnbS10ZXh0ZmllbGQnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibGFiZWxcIjogXCJOdW1iZXIuLi5cIixcbiAgICAgIFwicGF0dGVyblwiOiBcIi0/WzAtOV0qKFxcXFwuWzAtOV0rKT9cIixcbiAgICAgIFwiZXJyb3JcIjogXCJJbnZhbGlkIGlucHV0XCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tdGV4dGZpZWxkJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImV4cGFuZGFibGVcIjogXCJzZWFyY2hcIixcbiAgICAgIFwiaWRcIjogXCJ0ZXN0LWlkLXNlYXJjaFwiLFxuICAgICAgXCJmbG9hdC1sYWJlbFwiOiBcIkV4cGFuZGluZy4uLlwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCBbX2MoJ2RpdicsIFtfdm0uX3YoXCJDb2RlOlwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndGV4dGFyZWEnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiY29sc1wiOiBcIjEwMFwiLFxuICAgICAgXCJyb3dzXCI6IFwiNlwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0uZXhhbXBsZXNcbiAgICB9XG4gIH0pXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIFtfYygnaDQnLCBbX3ZtLl92KFwiVGVzdCBGb3JtXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdmb3JtJywge1xuICAgIG9uOiB7XG4gICAgICBcInN1Ym1pdFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF92bS5vblN1Ym1pdCgkZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ20tdGV4dGZpZWxkJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmZvcm0uZmlyc3ROYW1lKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5maXJzdE5hbWVcIlxuICAgIH1dLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImZsb2F0LWxhYmVsXCI6IFwiRmlyc3QgTmFtZVwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLmZvcm0uZmlyc3ROYW1lKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5mb3JtLmZpcnN0TmFtZSA9ICRldmVudFxuICAgICAgfVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnbS10ZXh0ZmllbGQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uZm9ybS5sYXN0TmFtZSksXG4gICAgICBleHByZXNzaW9uOiBcImZvcm0ubGFzdE5hbWVcIlxuICAgIH1dLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImZsb2F0LWxhYmVsXCI6IFwiTGFzdCBOYW1lXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0uZm9ybS5sYXN0TmFtZSlcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uZm9ybS5sYXN0TmFtZSA9ICRldmVudFxuICAgICAgfVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnbS10ZXh0ZmllbGQnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZmxvYXQtbGFiZWxcIjogXCJFbWFpbFwiLFxuICAgICAgXCJwYXR0ZXJuXCI6IFwiKC4rKUAoLispezIsfVxcXFwuKC4rKXsyLH1cIixcbiAgICAgIFwiZXJyb3JcIjogXCJJbnZhbGlkIGVtYWlsXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tdGV4dGZpZWxkJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmZvcm0ucGFzc3dvcmQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnBhc3N3b3JkXCJcbiAgICB9XSxcbiAgICBhdHRyczoge1xuICAgICAgXCJmbG9hdC1sYWJlbFwiOiBcIlBhc3N3b3JkXCIsXG4gICAgICBcInR5cGVcIjogXCJwYXNzd29yZFwiLFxuICAgICAgXCJwYXR0ZXJuXCI6IFwiLnszLH1cIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5mb3JtLnBhc3N3b3JkKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5mb3JtLnBhc3N3b3JkID0gJGV2ZW50XG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdtLXRleHRmaWVsZCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJmbG9hdC1sYWJlbFwiOiBcIkNvbmZpcm0gcGFzc3dvcmRcIixcbiAgICAgIFwidHlwZVwiOiBcInBhc3N3b3JkXCIsXG4gICAgICBcInBhdHRlcm5cIjogXCIuezMsfVwiLFxuICAgICAgXCJlcnJvclwiOiBcIlBhc3N3b3JkcyBub3QgbWF0Y2hcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kbC1idXR0b24gbWRsLWpzLWJ1dHRvbiBtZGwtYnV0dG9uLS1yYWlzZWRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwic3VibWl0XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgQnV0dG9uXFxuICAgICAgICAgICAgXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIFtfdm0uX3YoX3ZtLl9zKF92bS5mb3JtKSldKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNmQyMzA4NDhcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTZkMjMwODQ4IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy90ZXh0ZmllbGRzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vYnV0dG9ucy52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTA1OTU3YjRmIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2J1dHRvbnMudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIi9Vc2Vycy9vei9zcmMvbWF0ZXJpYWwtY29tcG9uZW50cy9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9idXR0b25zLnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMDU5NTdiNGZcIiwgX192dWVfb3B0aW9uc19fKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMDU5NTdiNGZcIiwgX192dWVfb3B0aW9uc19fKVxuICB9XG59KSgpfVxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBidXR0b25zLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL2J1dHRvbnMudnVlIiwiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxoND5CdXR0b25zPC9oND5cblxuICAgICAgICA8ZGl2PlxuXG4gICAgICAgICAgICA8bS1idXR0b24gcmFpc2VkIHYtb246Y2xpY2submF0aXZlPVwidGVzdENsaWNrXCI+Q2xpY2sgbWU8L20tYnV0dG9uPlxuXG4gICAgICAgICAgICA8bS1idXR0b24gaWNvbj1cImFkZFwiIHJhaXNlZCBhY2NlbnQ+PC9tLWJ1dHRvbj5cblxuICAgICAgICAgICAgPG0tYnV0dG9uIHJhaXNlZCBwcmltYXJ5IHJpcHBsZT5SaXBwbGU8L20tYnV0dG9uPlxuXG4gICAgICAgICAgICA8bS1idXR0b24gZGlzYWJsZWQ+RGlzYWJsZWQ8L20tYnV0dG9uPlxuXG4gICAgICAgICAgICA8aHI+XG5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5Db2RlOjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY29scz1cIjEwMFwiIHJvd3M9XCI2XCIgOnZhbHVlPVwiZXhhbXBsZXNcIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHR7XG4gICAgICAgIGRhdGEoKXtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZXhhbXBsZXM6IGBcbiAgICAgICAgICAgICAgICAgICAgPG0tYnV0dG9uIHJhaXNlZCB2LW9uOmNsaWNrLm5hdGl2ZT1cInRlc3RDbGlja1wiPkNsaWNrIG1lPC9tLWJ1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICA8bS1idXR0b24gaWNvbj1cImFkZFwiIHJhaXNlZCBhY2NlbnQ+PC9tLWJ1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICA8bS1idXR0b24gcmFpc2VkIHByaW1hcnkgcmlwcGxlPlJpcHBsZTwvbS1idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgPG0tYnV0dG9uIGRpc2FibGVkPkRpc2FibGVkPC9tLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHRlc3RDbGljazogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJIaVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGJ1dHRvbnMudnVlPzU2NzJkMGQyIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ2g0JywgW192bS5fdihcIkJ1dHRvbnNcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIFtfYygnbS1idXR0b24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwicmFpc2VkXCI6IFwiXCJcbiAgICB9LFxuICAgIG5hdGl2ZU9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0udGVzdENsaWNrKCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJDbGljayBtZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS1idXR0b24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWNvblwiOiBcImFkZFwiLFxuICAgICAgXCJyYWlzZWRcIjogXCJcIixcbiAgICAgIFwiYWNjZW50XCI6IFwiXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS1idXR0b24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwicmFpc2VkXCI6IFwiXCIsXG4gICAgICBcInByaW1hcnlcIjogXCJcIixcbiAgICAgIFwicmlwcGxlXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJSaXBwbGVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tYnV0dG9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImRpc2FibGVkXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJEaXNhYmxlZFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaHInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIFtfYygnZGl2JywgW192bS5fdihcIkNvZGU6XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCd0ZXh0YXJlYScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJjb2xzXCI6IFwiMTAwXCIsXG4gICAgICBcInJvd3NcIjogXCI2XCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5leGFtcGxlc1xuICAgIH1cbiAgfSldKV0sIDEpXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMDU5NTdiNGZcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTA1OTU3YjRmIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9idXR0b25zLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vc25hY2tiYXIudnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0yMzg1ZDNiMiF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zbmFja2Jhci52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiL1VzZXJzL296L3NyYy9tYXRlcmlhbC1jb21wb25lbnRzL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL3NuYWNrYmFyLnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMjM4NWQzYjJcIiwgX192dWVfb3B0aW9uc19fKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMjM4NWQzYjJcIiwgX192dWVfb3B0aW9uc19fKVxuICB9XG59KSgpfVxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBzbmFja2Jhci52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9zbmFja2Jhci52dWUiLCI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPG0tc25hY2tiYXIgZGlzcGxheS1vbj1cIm1zZ1NlbnRcIj48L20tc25hY2tiYXI+XG4gICAgICAgIDxtLWJ1dHRvbiByYWlzZWQgY29sb3JlZCBAY2xpY2submF0aXZlPVwic0FjdGlvblwiPlNob3cgU25hY2tiYXI8L20tYnV0dG9uPlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2PkNvZGU6PC9kaXY+XG4gICAgICAgICAgICA8dGV4dGFyZWEgY29scz1cIjEwMFwiIHJvd3M9XCI2XCIgOnZhbHVlPVwiZXhhbXBsZXNcIj48L3RleHRhcmVhPlxuICAgICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBkYXRhKCl7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGV4YW1wbGVzOiBgXG4gICAgICAgICAgICAgICAgICAgIDxtLXNuYWNrYmFyIGRpc3BsYXktb249XCJtc2dTZW50XCI+PC9tLXNuYWNrYmFyPlxuICAgICAgICAgICAgICAgICAgICA8bS1idXR0b24gcmFpc2VkIGNvbG9yZWQgQGNsaWNrLm5hdGl2ZT1cInNBY3Rpb25cIj5TaG93IFNuYWNrYmFyPC9tLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgc0FjdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRyb290LiRlbWl0KCdtc2dTZW50Jywge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnTWVzc2FnZSBTZW50JyxcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uVGV4dDogJ1VuZG8nLFxuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiAyMDAwLFxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25IYW5kbGVyOiAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNuYWNrYmFyLnZ1ZT9jNzhiZDNiNCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW19jKCdtLXNuYWNrYmFyJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImRpc3BsYXktb25cIjogXCJtc2dTZW50XCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS1idXR0b24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwicmFpc2VkXCI6IFwiXCIsXG4gICAgICBcImNvbG9yZWRcIjogXCJcIlxuICAgIH0sXG4gICAgbmF0aXZlT246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5zQWN0aW9uKCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJTaG93IFNuYWNrYmFyXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCBbX2MoJ2RpdicsIFtfdm0uX3YoXCJDb2RlOlwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndGV4dGFyZWEnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiY29sc1wiOiBcIjEwMFwiLFxuICAgICAgXCJyb3dzXCI6IFwiNlwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0uZXhhbXBsZXNcbiAgICB9XG4gIH0pXSldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0yMzg1ZDNiMlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMjM4NWQzYjIhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL3NuYWNrYmFyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vc2VsZWN0cy52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTdiNGI3YmM1IXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NlbGVjdHMudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIi9Vc2Vycy9vei9zcmMvbWF0ZXJpYWwtY29tcG9uZW50cy9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9zZWxlY3RzLnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtN2I0YjdiYzVcIiwgX192dWVfb3B0aW9uc19fKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtN2I0YjdiYzVcIiwgX192dWVfb3B0aW9uc19fKVxuICB9XG59KSgpfVxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBzZWxlY3RzLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL3NlbGVjdHMudnVlIiwiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxoMz5TZWxlY3RzPC9oMz5cbiAgICAgICAgPHA+XG4gICAgICAgICAgICA8aDQ+RGVmYXVsdDwvaDQ+XG4gICAgICAgICAgICA8bS1zZWxlY3QgOmRhdGEtc291cmNlPVwidGVzdERhdGEyXCIgaWQ9XCJ0ZXN0MlwiIHYtbW9kZWw9XCJtMlwiPjwvbS1zZWxlY3Q+XG5cbiAgICAgICAgICAgIDxkaXY+e3ttMn19PC9kaXY+XG4gICAgICAgIDwvcD5cblxuICAgICAgICA8cD5cblxuICAgICAgICAgICAgPGg0PkFKQVggc2VsZWN0PC9oND5cbiAgICAgICAgICAgIDxtLXNlbGVjdCA6ZGF0YS1zb3VyY2U9XCJ0ZXN0RGF0YVwiIGlkPVwidGVzdDFcIiB2LW1vZGVsPVwibVwiPjwvbS1zZWxlY3Q+XG5cbiAgICAgICAgICAgIDxkaXY+e3ttfX08L2Rpdj5cblxuICAgICAgICA8L3A+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXY+Q29kZTo8L2Rpdj5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBjb2xzPVwiMTAwXCIgcm93cz1cIjZcIiA6dmFsdWU9XCJleGFtcGxlc1wiPjwvdGV4dGFyZWE+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBkYXRhKCl7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRlc3REYXRhOiAgZnVuY3Rpb24oc3VjY2VzcywgZmFpbHVyZSkge1xuICAgICAgICAgICAgICAgICAgIHRoaXMuJGh0dHAuZ2V0KCdodHRwczovL3Jlc3Rjb3VudHJpZXMuZXUvcmVzdC92MS9hbGwnKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmRhdGEuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogZWwubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGVsLm51bWVyaWNDb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyBzdWNjZXNzKGMuc3BsaWNlKDAsIDUpKTsgfSwgMjAwMCk7XG4gICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIG06IHtuYW1lOiAnJywgdmFsdWU6IG51bGx9LFxuXG4gICAgICAgICAgICAgICAgLy8gc2ltcGxlIHNlbGVjdFxuXG4gICAgICAgICAgICAgICAgdGVzdERhdGEyOiBbXG4gICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ05vZGVKcycsIHZhbHVlOiAxLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnSlMnLCB2YWx1ZTogMixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ1BIUCcsIHZhbHVlOiAzLFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcblxuICAgICAgICAgICAgICAgIG0yOiB7bmFtZTogJycsIHZhbHVlOiBudWxsfSxcblxuICAgICAgICAgICAgICAgIGV4YW1wbGVzOiBgXG4gICAgICAgICAgICAgICAgICAgICA8bS1zZWxlY3QgOmRhdGEtc291cmNlPVwidGVzdERhdGEyXCIgaWQ9XCJ0ZXN0MlwiIHYtbW9kZWw9XCJtMlwiPjwvbS1zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICA8bS1zZWxlY3QgOmRhdGEtc291cmNlPVwidGVzdERhdGFcIiBpZD1cInRlc3QxXCIgdi1tb2RlbD1cIm1cIj48L20tc2VsZWN0PlxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNlbGVjdHMudnVlPzdhZmNjOWEyIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ2gzJywgW192bS5fdihcIlNlbGVjdHNcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnKSwgX2MoJ2g0JywgW192bS5fdihcIkRlZmF1bHRcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tc2VsZWN0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLm0yKSxcbiAgICAgIGV4cHJlc3Npb246IFwibTJcIlxuICAgIH1dLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImRhdGEtc291cmNlXCI6IF92bS50ZXN0RGF0YTIsXG4gICAgICBcImlkXCI6IFwidGVzdDJcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5tMilcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0ubTIgPSAkZXZlbnRcbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2JywgW192bS5fdihfdm0uX3MoX3ZtLm0yKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnKSwgX2MoJ2g0JywgW192bS5fdihcIkFKQVggc2VsZWN0XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtLXNlbGVjdCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5tKSxcbiAgICAgIGV4cHJlc3Npb246IFwibVwiXG4gICAgfV0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZGF0YS1zb3VyY2VcIjogX3ZtLnRlc3REYXRhLFxuICAgICAgXCJpZFwiOiBcInRlc3QxXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0ubSlcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0ubSA9ICRldmVudFxuICAgICAgfVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCBbX3ZtLl92KF92bS5fcyhfdm0ubSkpXSksIF92bS5fdihcIiBcIiksIF9jKCdwJyksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCBbX2MoJ2RpdicsIFtfdm0uX3YoXCJDb2RlOlwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndGV4dGFyZWEnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiY29sc1wiOiBcIjEwMFwiLFxuICAgICAgXCJyb3dzXCI6IFwiNlwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0uZXhhbXBsZXNcbiAgICB9XG4gIH0pXSldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi03YjRiN2JjNVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtN2I0YjdiYzUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL3NlbGVjdHMudnVlXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9zbGlkZXJzLnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNmIwMWRmMDAhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc2xpZGVycy52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiL1VzZXJzL296L3NyYy9tYXRlcmlhbC1jb21wb25lbnRzL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL3NsaWRlcnMudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi02YjAxZGYwMFwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi02YjAxZGYwMFwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH1cbn0pKCl9XG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHNsaWRlcnMudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvc2xpZGVycy52dWUiLCI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPG0tc2xpZGVyIHYtbW9kZWw9XCJhbW91bnRcIiBtaW49XCIwXCIgbWF4PVwiMTAwXCI+PC9tLXNsaWRlcj5cbiAgICAgICAgPGJyPlxuICAgICAgICA8c3Bhbj5TdGVwIDEwPC9zcGFuPlxuICAgICAgICA8bS1zbGlkZXIgdi1tb2RlbD1cImFtb3VudFwiIG1pbj1cIjBcIiBtYXg9XCIxMDBcIiBzdGVwPVwiMTBcIiBkaXNhYmxlZD48L20tc2xpZGVyPlxuXG4gICAgICAgIDxwPlxuICAgICAgICAgICAge3thbW91bnR9fVxuICAgICAgICA8L3A+XG5cbiAgICAgICAgPGhyPlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2PkNvZGU6PC9kaXY+XG4gICAgICAgICAgICA8dGV4dGFyZWEgY29scz1cIjEwMFwiIHJvd3M9XCI2XCIgOnZhbHVlPVwiZXhhbXBsZXNcIj48L3RleHRhcmVhPlxuICAgICAgICA8L2Rpdj5cblxuXG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdHtcbiAgICAgICAgZGF0YSgpe1xuICAgICAgICAgICAgcmV0dXJue1xuICAgICAgICAgICAgICAgIGFtb3VudDogMCxcbiAgICAgICAgICAgICAgICBleGFtcGxlczogYFxuICAgICAgICAgICAgICAgICAgICA8bS1zbGlkZXIgdi1tb2RlbD1cImFtb3VudFwiIG1pbj1cIjBcIiBtYXg9XCIxMDBcIj48L20tc2xpZGVyPlxuICAgICAgICAgICAgICAgICAgICA8bS1zbGlkZXIgdi1tb2RlbD1cImFtb3VudFwiIG1pbj1cIjBcIiBtYXg9XCIxMDBcIiBzdGVwPVwiMTBcIiBkaXNhYmxlZD48L20tc2xpZGVyPlxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNsaWRlcnMudnVlPzM5MjBkZTIzIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ20tc2xpZGVyJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmFtb3VudCksXG4gICAgICBleHByZXNzaW9uOiBcImFtb3VudFwiXG4gICAgfV0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwibWluXCI6IFwiMFwiLFxuICAgICAgXCJtYXhcIjogXCIxMDBcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5hbW91bnQpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmFtb3VudCA9ICRldmVudFxuICAgICAgfVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIFtfdm0uX3YoXCJTdGVwIDEwXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtLXNsaWRlcicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5hbW91bnQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJhbW91bnRcIlxuICAgIH1dLFxuICAgIGF0dHJzOiB7XG4gICAgICBcIm1pblwiOiBcIjBcIixcbiAgICAgIFwibWF4XCI6IFwiMTAwXCIsXG4gICAgICBcInN0ZXBcIjogXCIxMFwiLFxuICAgICAgXCJkaXNhYmxlZFwiOiBcIlwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLmFtb3VudClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uYW1vdW50ID0gJGV2ZW50XG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCBbX3ZtLl92KFwiXFxuICAgICAgICBcIiArIF92bS5fcyhfdm0uYW1vdW50KSArIFwiXFxuICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaHInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIFtfYygnZGl2JywgW192bS5fdihcIkNvZGU6XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCd0ZXh0YXJlYScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJjb2xzXCI6IFwiMTAwXCIsXG4gICAgICBcInJvd3NcIjogXCI2XCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5leGFtcGxlc1xuICAgIH1cbiAgfSldKV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTZiMDFkZjAwXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi02YjAxZGYwMCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvc2xpZGVycy52dWVcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xudmFyIF9fdnVlX3N0eWxlc19fID0ge31cblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2JhZGdlcy52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTVkYjViMzUyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2JhZGdlcy52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiL1VzZXJzL296L3NyYy9tYXRlcmlhbC1jb21wb25lbnRzL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL2JhZGdlcy52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTVkYjViMzUyXCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTVkYjViMzUyXCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfVxufSkoKX1cbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gYmFkZ2VzLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL2JhZGdlcy52dWUiLCI8dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAgPG0tYmFkZ2Ugdi1tb2RlbD1cImJcIiBocmVmPVwiaHR0cHM6Ly9nb29nbGUuY29tXCIgOmhpZGU9XCJoXCI+SW5ib3g8L20tYmFkZ2U+XG5cbiAgICA8YnI+XG4gICAgPGJyPlxuICAgIDxicj5cblxuICAgIDxtLWJhZGdlIHYtbW9kZWw9XCJiXCIgdGFnPVwic3BhblwiIGljb24gb3ZlcmxhcD5hY2NvdW50X2JveDwvbS1iYWRnZT5cblxuICAgIDxicj5cblxuICAgIDxtLXNsaWRlciB2LW1vZGVsPVwiYlwiIG1pbj1cIjBcIiBtYXg9XCIxMDBcIj48L20tc2xpZGVyPlxuXG4gICAgPGJyPlxuXG4gICAgPG0tYnV0dG9uIHJhaXNlZCB2LW9uOmNsaWNrLm5hdGl2ZT1cInRlc3RDbGlja1wiPkhpZGUgYmFkZ2UgdmFsdWU8L20tYnV0dG9uPlxuXG4gICAgPGhyPlxuXG4gICAgPGRpdj5cbiAgICAgIDxkaXY+Q29kZTo8L2Rpdj5cbiAgICAgIDx0ZXh0YXJlYSBjb2xzPVwiMTAwXCIgcm93cz1cIjZcIiA6dmFsdWU9XCJleGFtcGxlc1wiPjwvdGV4dGFyZWE+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBiOiAxMCxcbiAgICAgICAgaDogZmFsc2UsXG4gICAgICAgIHRlc3RDbGljazogZnVuY3Rpb24oZSkge1xuICAgICAgICAgIHRoaXMuaCA9ICF0aGlzLmg7XG4gICAgICAgIH0sXG4gICAgICAgIGV4YW1wbGVzOiBgXG4gICAgICAgICAgPG0tYmFkZ2Ugdi1tb2RlbD1cImJcIiBocmVmPVwiaHR0cHM6Ly9nb29nbGUuY29tXCIgOmhpZGU9XCJoXCI+SW5ib3g8L20tYmFkZ2U+XG4gICAgICAgICAgPG0tYmFkZ2Ugdi1tb2RlbD1cImJcIiB0YWc9XCJzcGFuXCIgaWNvbiBvdmVybGFwPmFjY291bnRfYm94PC9tLWJhZGdlPlxuICAgICAgICBgXG4gICAgICB9XG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYmFkZ2VzLnZ1ZT82YzMyMTVkYiIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW19jKCdtLWJhZGdlJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmIpLFxuICAgICAgZXhwcmVzc2lvbjogXCJiXCJcbiAgICB9XSxcbiAgICBhdHRyczoge1xuICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly9nb29nbGUuY29tXCIsXG4gICAgICBcImhpZGVcIjogX3ZtLmhcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0uYilcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uYiA9ICRldmVudFxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIkluYm94XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdtLWJhZGdlJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmIpLFxuICAgICAgZXhwcmVzc2lvbjogXCJiXCJcbiAgICB9XSxcbiAgICBhdHRyczoge1xuICAgICAgXCJ0YWdcIjogXCJzcGFuXCIsXG4gICAgICBcImljb25cIjogXCJcIixcbiAgICAgIFwib3ZlcmxhcFwiOiBcIlwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLmIpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmIgPSAkZXZlbnRcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJhY2NvdW50X2JveFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tc2xpZGVyJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmIpLFxuICAgICAgZXhwcmVzc2lvbjogXCJiXCJcbiAgICB9XSxcbiAgICBhdHRyczoge1xuICAgICAgXCJtaW5cIjogXCIwXCIsXG4gICAgICBcIm1heFwiOiBcIjEwMFwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLmIpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmIgPSAkZXZlbnRcbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tYnV0dG9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInJhaXNlZFwiOiBcIlwiXG4gICAgfSxcbiAgICBuYXRpdmVPbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnRlc3RDbGljaygkZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiSGlkZSBiYWRnZSB2YWx1ZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaHInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIFtfYygnZGl2JywgW192bS5fdihcIkNvZGU6XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCd0ZXh0YXJlYScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJjb2xzXCI6IFwiMTAwXCIsXG4gICAgICBcInJvd3NcIjogXCI2XCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5leGFtcGxlc1xuICAgIH1cbiAgfSldKV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTVkYjViMzUyXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi01ZGI1YjM1MiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvYmFkZ2VzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTA4ZmU5YTgxJnNjb3BlZD10cnVlIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9tZW51LnZ1ZVwiKVxuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vbWVudS52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTA4ZmU5YTgxIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL21lbnUudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIi9Vc2Vycy9vei9zcmMvbWF0ZXJpYWwtY29tcG9uZW50cy9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9tZW51LnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuX192dWVfb3B0aW9uc19fLl9zY29wZUlkID0gXCJkYXRhLXYtMDhmZTlhODFcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMDhmZTlhODFcIiwgX192dWVfb3B0aW9uc19fKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMDhmZTlhODFcIiwgX192dWVfb3B0aW9uc19fKVxuICB9XG59KSgpfVxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBtZW51LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL21lbnUudnVlIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0wOGZlOWE4MSZzY29wZWQ9dHJ1ZSEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vbWVudS52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTA4ZmU5YTgxJnNjb3BlZD10cnVlIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9tZW51LnZ1ZVwiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTA4ZmU5YTgxJnNjb3BlZD10cnVlIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9tZW51LnZ1ZVwiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMDhmZTlhODEmc2NvcGVkPXRydWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9tZW51LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4ubWVudS1ibG9ja1tkYXRhLXYtMDhmZTlhODFdIHtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJhY2tncm91bmQ6ICMzRjUxQjU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9tZW51LnZ1ZT80ZjE4ZTUyN1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBc0JBO0lBQ0EsWUFBQTtJQUNBLG9CQUFBO0lBQ0EsY0FBQTtDQUNBXCIsXCJmaWxlXCI6XCJtZW51LnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICAgPGRpdj5cXG4gICAgICAgPGRpdiBjbGFzcz1cXFwibWVudS1ibG9ja1xcXCI+XFxuICAgICAgICAgICA8bS1idXR0b24gaWNvbj1cXFwibW9yZV92ZXJ0XFxcIiBpZD1cXFwidGVzdC1tZW51XFxcIj48L20tYnV0dG9uPlxcblxcbiAgICAgICAgICAgPG0tbWVudSBmb3I9XFxcInRlc3QtbWVudVxcXCI+XFxuICAgICAgICAgICAgICAgPG0tbWVudS1pdGVtPk5vZGVKczwvbS1tZW51LWl0ZW0+XFxuICAgICAgICAgICAgICAgPG0tbWVudS1pdGVtPlBIUDwvbS1tZW51LWl0ZW0+XFxuICAgICAgICAgICAgICAgPG0tbWVudS1pdGVtIGRpc2FibGVkPVxcXCJkaXNhYmxlZFxcXCI+SlM8L20tbWVudS1pdGVtPlxcbiAgICAgICAgICAgICAgIDxtLW1lbnUtaXRlbT5HTzwvbS1tZW51LWl0ZW0+XFxuICAgICAgICAgICA8L20tbWVudT5cXG4gICAgICAgPC9kaXY+XFxuXFxuICAgICAgIDwhLS0gLyAtLT5cXG5cXG4gICAgICAgPGRpdj5cXG4gICAgICAgICAgIDxkaXY+Q29kZTo8L2Rpdj5cXG4gICAgICAgICAgIDx0ZXh0YXJlYSBjb2xzPVxcXCIxMDBcXFwiIHJvd3M9XFxcIjEwXFxcIiA6dmFsdWU9XFxcImV4YW1wbGVzXFxcIj48L3RleHRhcmVhPlxcbiAgICAgICA8L2Rpdj5cXG4gICA8L2Rpdj5cXG48L3RlbXBsYXRlPlxcbjxzdHlsZSBzY29wZWQ+XFxuICAgIC5tZW51LWJsb2NrIHtcXG4gICAgICAgIGNvbG9yOiAjZmZmO1xcbiAgICAgICAgYmFja2dyb3VuZDogIzNGNTFCNTtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIH1cXG48L3N0eWxlPlxcbjxzY3JpcHQ+XFxuICAgIGV4cG9ydCBkZWZhdWx0e1xcbiAgICAgICAgZGF0YSgpe1xcbiAgICAgICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgICAgIGV4YW1wbGVzOiBgXFxuICAgICAgICAgICAgICAgPG0tYnV0dG9uIGljb249XFxcIm1vcmVfdmVydFxcXCIgaWQ9XFxcInRlc3QtbWVudVxcXCI+PC9tLWJ1dHRvbj5cXG5cXG4gICAgICAgICAgICAgICAgPG0tbWVudSBmb3I9XFxcInRlc3QtbWVudVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8bS1tZW51LWl0ZW0+Tm9kZUpzPC9tLW1lbnUtaXRlbT5cXG4gICAgICAgICAgICAgICAgICAgIDxtLW1lbnUtaXRlbT5QSFA8L20tbWVudS1pdGVtPlxcbiAgICAgICAgICAgICAgICAgICAgPG0tbWVudS1pdGVtIGRpc2FibGVkPVxcXCJkaXNhYmxlZFxcXCI+SlM8L20tbWVudS1pdGVtPlxcbiAgICAgICAgICAgICAgICAgICAgPG0tbWVudS1pdGVtPkdPPC9tLW1lbnUtaXRlbT5cXG4gICAgICAgICAgICAgICAgPC9tLW1lbnU+XFxuICAgICAgICAgICAgYFxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbjwvc2NyaXB0PlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMDhmZTlhODEmc2NvcGVkPXRydWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9tZW51LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHR2YXIgbGlzdCA9IFtdO1xyXG5cclxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzW2ldO1xyXG5cdFx0XHRpZihpdGVtWzJdKSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBpdGVtWzFdICsgXCJ9XCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKGl0ZW1bMV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oXCJcIik7XHJcblx0fTtcclxuXHJcblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcclxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XHJcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xyXG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XHJcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcclxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcclxuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxyXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xyXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxyXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxyXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xyXG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xyXG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblx0cmV0dXJuIGxpc3Q7XHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbnZhciBzdHlsZXNJbkRvbSA9IHt9LFxuXHRtZW1vaXplID0gZnVuY3Rpb24oZm4pIHtcblx0XHR2YXIgbWVtbztcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRcdHJldHVybiBtZW1vO1xuXHRcdH07XG5cdH0sXG5cdGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiAvbXNpZSBbNi05XVxcYi8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKTtcblx0fSksXG5cdGdldEhlYWRFbGVtZW50ID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO1xuXHR9KSxcblx0c2luZ2xldG9uRWxlbWVudCA9IG51bGwsXG5cdHNpbmdsZXRvbkNvdW50ZXIgPSAwLFxuXHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIDxoZWFkPi5cblx0aWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QpO1xuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspXG5cdFx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oKTtcblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0KSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKVxuXHRcdFx0c3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlXG5cdFx0XHRuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCkge1xuXHR2YXIgaGVhZCA9IGdldEhlYWRFbGVtZW50KCk7XG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wW3N0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBoZWFkLmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZihsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcblx0XHR9XG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AucHVzaChzdHlsZUVsZW1lbnQpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcblx0c3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcblx0dmFyIGlkeCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGVFbGVtZW50KTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuXHR2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXHRzdHlsZUVsZW1lbnQudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCk7XG5cdHJldHVybiBzdHlsZUVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVFbGVtZW50LCB1cGRhdGUsIHJlbW92ZTtcblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblx0XHRzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcblx0XHRpZihuZXdPYmopIHtcblx0XHRcdGlmKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcClcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzO1xuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGVFbGVtZW50LCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0aWYgKG1lZGlhKSB7XG5cdFx0c3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL2RldnRvb2xzL2RvY3MvamF2YXNjcmlwdC1kZWJ1Z2dpbmdcblx0XHQvLyB0aGlzIG1ha2VzIHNvdXJjZSBtYXBzIGluc2lkZSBzdHlsZSB0YWdzIHdvcmsgcHJvcGVybHkgaW4gQ2hyb21lXG5cdFx0Y3NzICs9ICdcXG4vKiMgc291cmNlVVJMPScgKyBzb3VyY2VNYXAuc291cmNlc1swXSArICcgKi8nO1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0aWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcblx0XHR9XG5cdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjx0ZW1wbGF0ZT5cbiAgIDxkaXY+XG4gICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtYmxvY2tcIj5cbiAgICAgICAgICAgPG0tYnV0dG9uIGljb249XCJtb3JlX3ZlcnRcIiBpZD1cInRlc3QtbWVudVwiPjwvbS1idXR0b24+XG5cbiAgICAgICAgICAgPG0tbWVudSBmb3I9XCJ0ZXN0LW1lbnVcIj5cbiAgICAgICAgICAgICAgIDxtLW1lbnUtaXRlbT5Ob2RlSnM8L20tbWVudS1pdGVtPlxuICAgICAgICAgICAgICAgPG0tbWVudS1pdGVtPlBIUDwvbS1tZW51LWl0ZW0+XG4gICAgICAgICAgICAgICA8bS1tZW51LWl0ZW0gZGlzYWJsZWQ9XCJkaXNhYmxlZFwiPkpTPC9tLW1lbnUtaXRlbT5cbiAgICAgICAgICAgICAgIDxtLW1lbnUtaXRlbT5HTzwvbS1tZW51LWl0ZW0+XG4gICAgICAgICAgIDwvbS1tZW51PlxuICAgICAgIDwvZGl2PlxuXG4gICAgICAgPCEtLSAvIC0tPlxuXG4gICAgICAgPGRpdj5cbiAgICAgICAgICAgPGRpdj5Db2RlOjwvZGl2PlxuICAgICAgICAgICA8dGV4dGFyZWEgY29scz1cIjEwMFwiIHJvd3M9XCIxMFwiIDp2YWx1ZT1cImV4YW1wbGVzXCI+PC90ZXh0YXJlYT5cbiAgICAgICA8L2Rpdj5cbiAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzdHlsZSBzY29wZWQ+XG4gICAgLm1lbnUtYmxvY2sge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgYmFja2dyb3VuZDogIzNGNTFCNTtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICB9XG48L3N0eWxlPlxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdHtcbiAgICAgICAgZGF0YSgpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBleGFtcGxlczogYFxuICAgICAgICAgICAgICAgPG0tYnV0dG9uIGljb249XCJtb3JlX3ZlcnRcIiBpZD1cInRlc3QtbWVudVwiPjwvbS1idXR0b24+XG5cbiAgICAgICAgICAgICAgICA8bS1tZW51IGZvcj1cInRlc3QtbWVudVwiPlxuICAgICAgICAgICAgICAgICAgICA8bS1tZW51LWl0ZW0+Tm9kZUpzPC9tLW1lbnUtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPG0tbWVudS1pdGVtPlBIUDwvbS1tZW51LWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxtLW1lbnUtaXRlbSBkaXNhYmxlZD1cImRpc2FibGVkXCI+SlM8L20tbWVudS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICA8bS1tZW51LWl0ZW0+R088L20tbWVudS1pdGVtPlxuICAgICAgICAgICAgICAgIDwvbS1tZW51PlxuICAgICAgICAgICAgYFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbWVudS52dWU/NGYxOGU1MjciLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1lbnUtYmxvY2tcIlxuICB9LCBbX2MoJ20tYnV0dG9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImljb25cIjogXCJtb3JlX3ZlcnRcIixcbiAgICAgIFwiaWRcIjogXCJ0ZXN0LW1lbnVcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdtLW1lbnUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwidGVzdC1tZW51XCJcbiAgICB9XG4gIH0sIFtfYygnbS1tZW51LWl0ZW0nLCBbX3ZtLl92KFwiTm9kZUpzXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtLW1lbnUtaXRlbScsIFtfdm0uX3YoXCJQSFBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tbWVudS1pdGVtJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImRpc2FibGVkXCI6IFwiZGlzYWJsZWRcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkpTXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtLW1lbnUtaXRlbScsIFtfdm0uX3YoXCJHT1wiKV0pXSwgMSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIFtfYygnZGl2JywgW192bS5fdihcIkNvZGU6XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCd0ZXh0YXJlYScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJjb2xzXCI6IFwiMTAwXCIsXG4gICAgICBcInJvd3NcIjogXCIxMFwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0uZXhhbXBsZXNcbiAgICB9XG4gIH0pXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0wOGZlOWE4MVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMDhmZTlhODEhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL21lbnUudnVlXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9sb2FkaW5nLnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNWY5NjQ3OGEhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vbG9hZGluZy52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiL1VzZXJzL296L3NyYy9tYXRlcmlhbC1jb21wb25lbnRzL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL2xvYWRpbmcudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi01Zjk2NDc4YVwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi01Zjk2NDc4YVwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH1cbn0pKCl9XG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGxvYWRpbmcudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvbG9hZGluZy52dWUiLCI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPGgzPlByb2dyZXNzIGJhcjwvaDM+XG5cbiAgICAgICAgPG0tcHJvZ3Jlc3Mgdi1tb2RlbD1cInByb2dyZXNzXCI+PC9tLXByb2dyZXNzPlxuXG5cbiAgICAgICAgPGRpdiBzdHlsZT1cIndpZHRoOiAyMDBweDsgbWFyZ2luLXRvcDogMzBweDtcIj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJtYXJnaW4tbGVmdDogMjZweDtcIj5DaGFuZ2UgdmFsdWU6PC9kaXY+XG4gICAgICAgICAgICA8bS1zbGlkZXIgdi1tb2RlbD1cInByb2dyZXNzXCIgbWluPVwiMFwiIG1heD1cIjEwMFwiPjwvbS1zbGlkZXI+XG4gICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgPGg0PlByb2dyZXNzIHdpdGggYnVmZmVyPC9oND5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxtLXByb2dyZXNzIHYtbW9kZWw9XCJwcm9ncmVzczJcIiA6YnVmZmVyPVwiYnVmZmVyXCI+PC9tLXByb2dyZXNzPlxuICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgIDxoND5JbmRldGVybWluYXRlPC9oND5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxtLXByb2dyZXNzIGluZGV0ZXJtaW5hdGU+PC9tLXByb2dyZXNzPlxuICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2PkNvZGU6PC9kaXY+XG4gICAgICAgICAgICA8dGV4dGFyZWEgY29scz1cIjEwMFwiIHJvd3M9XCI2XCIgOnZhbHVlPVwiZXhhbXBsZXNcIj48L3RleHRhcmVhPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8aDM+U3Bpbm5lcjwvaDM+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoND5EZWZhdWx0OjwvaDQ+XG4gICAgICAgICAgICA8bS1zcGlubmVyPjwvbS1zcGlubmVyPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGg0PlNpbmdsZSBjb2xvcjo8L2g0PlxuICAgICAgICAgICAgPG0tc3Bpbm5lciBzaW5nbGUtY29sb3I+PC9tLXNwaW5uZXI+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDQ+SGlkZSBzcGlubmVyPC9oND5cbiAgICAgICAgICAgIDxtLXNwaW5uZXIgOmFjdGl2ZT1cImFjdGl2ZVwiPjwvbS1zcGlubmVyPlxuXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiB2LW1vZGVsPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXY+Q29kZTo8L2Rpdj5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBjb2xzPVwiMTAwXCIgcm93cz1cIjZcIiA6dmFsdWU9XCJleGFtcGxlc19zcGlubmVyXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0e1xuICAgICAgICBkYXRhKCl7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHByb2dyZXNzOiA0MCxcbiAgICAgICAgICAgICAgICBwcm9ncmVzczI6IDMwLFxuICAgICAgICAgICAgICAgIGJ1ZmZlcjogNjAsXG4gICAgICAgICAgICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBleGFtcGxlczogYFxuICAgICAgICAgICAgICAgICAgICA8bS1wcm9ncmVzcyB2LW1vZGVsPVwicHJvZ3Jlc3NcIj48L20tcHJvZ3Jlc3M+XG4gICAgICAgICAgICAgICAgICAgIDxtLXByb2dyZXNzIHYtbW9kZWw9XCJwcm9ncmVzczJcIiA6YnVmZmVyPVwiYnVmZmVyXCI+PC9tLXByb2dyZXNzPlxuICAgICAgICAgICAgICAgICAgICA8bS1wcm9ncmVzcyBpbmRldGVybWluYXRlPjwvbS1wcm9ncmVzcz5cbiAgICAgICAgICAgICAgICBgLFxuXG4gICAgICAgICAgICAgICAgZXhhbXBsZXNfc3Bpbm5lcjogYFxuICAgICAgICAgICAgICAgICAgIDxtLXNwaW5uZXI+PC9tLXNwaW5uZXI+XG4gICAgICAgICAgICAgICAgICAgPG0tc3Bpbm5lciBzaW5nbGUtY29sb3I+PC9tLXNwaW5uZXI+XG4gICAgICAgICAgICAgICAgICAgPG0tc3Bpbm5lciA6YWN0aXZlPVwiYWN0aXZlXCI+PC9tLXNwaW5uZXI+XG4gICAgICAgICAgICAgICAgYCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGxvYWRpbmcudnVlPzdjNjc0MmY4IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ2gzJywgW192bS5fdihcIlByb2dyZXNzIGJhclwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS1wcm9ncmVzcycsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5wcm9ncmVzcyksXG4gICAgICBleHByZXNzaW9uOiBcInByb2dyZXNzXCJcbiAgICB9XSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLnByb2dyZXNzKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5wcm9ncmVzcyA9ICRldmVudFxuICAgICAgfVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwid2lkdGhcIjogXCIyMDBweFwiLFxuICAgICAgXCJtYXJnaW4tdG9wXCI6IFwiMzBweFwiXG4gICAgfVxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJtYXJnaW4tbGVmdFwiOiBcIjI2cHhcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkNoYW5nZSB2YWx1ZTpcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tc2xpZGVyJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnByb2dyZXNzKSxcbiAgICAgIGV4cHJlc3Npb246IFwicHJvZ3Jlc3NcIlxuICAgIH1dLFxuICAgIGF0dHJzOiB7XG4gICAgICBcIm1pblwiOiBcIjBcIixcbiAgICAgIFwibWF4XCI6IFwiMTAwXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0ucHJvZ3Jlc3MpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnByb2dyZXNzID0gJGV2ZW50XG4gICAgICB9XG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnaDQnLCBbX3ZtLl92KFwiUHJvZ3Jlc3Mgd2l0aCBidWZmZXJcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIFtfYygnbS1wcm9ncmVzcycsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5wcm9ncmVzczIpLFxuICAgICAgZXhwcmVzc2lvbjogXCJwcm9ncmVzczJcIlxuICAgIH1dLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImJ1ZmZlclwiOiBfdm0uYnVmZmVyXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLnByb2dyZXNzMilcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0ucHJvZ3Jlc3MyID0gJGV2ZW50XG4gICAgICB9XG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnaDQnLCBbX3ZtLl92KFwiSW5kZXRlcm1pbmF0ZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2JywgW19jKCdtLXByb2dyZXNzJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImluZGV0ZXJtaW5hdGVcIjogXCJcIlxuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIFtfYygnZGl2JywgW192bS5fdihcIkNvZGU6XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCd0ZXh0YXJlYScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJjb2xzXCI6IFwiMTAwXCIsXG4gICAgICBcInJvd3NcIjogXCI2XCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5leGFtcGxlc1xuICAgIH1cbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2gzJywgW192bS5fdihcIlNwaW5uZXJcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIFtfYygnaDQnLCBbX3ZtLl92KFwiRGVmYXVsdDpcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tc3Bpbm5lcicpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCBbX2MoJ2g0JywgW192bS5fdihcIlNpbmdsZSBjb2xvcjpcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tc3Bpbm5lcicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzaW5nbGUtY29sb3JcIjogXCJcIlxuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIFtfYygnaDQnLCBbX3ZtLl92KFwiSGlkZSBzcGlubmVyXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtLXNwaW5uZXInLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiYWN0aXZlXCI6IF92bS5hY3RpdmVcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2JywgW19jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5hY3RpdmUpLFxuICAgICAgZXhwcmVzc2lvbjogXCJhY3RpdmVcIlxuICAgIH1dLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJjaGVja2JveFwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJjaGVja2VkXCI6IEFycmF5LmlzQXJyYXkoX3ZtLmFjdGl2ZSkgPyBfdm0uX2koX3ZtLmFjdGl2ZSwgbnVsbCkgPiAtMSA6IChfdm0uYWN0aXZlKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2hhbmdlXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICB2YXIgJCRhID0gX3ZtLmFjdGl2ZSxcbiAgICAgICAgICAkJGVsID0gJGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAkJGMgPSAkJGVsLmNoZWNrZWQgPyAodHJ1ZSkgOiAoZmFsc2UpO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSgkJGEpKSB7XG4gICAgICAgICAgdmFyICQkdiA9IG51bGwsXG4gICAgICAgICAgICAkJGkgPSBfdm0uX2koJCRhLCAkJHYpO1xuICAgICAgICAgIGlmICgkJGMpIHtcbiAgICAgICAgICAgICQkaSA8IDAgJiYgKF92bS5hY3RpdmUgPSAkJGEuY29uY2F0KCQkdikpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQkaSA+IC0xICYmIChfdm0uYWN0aXZlID0gJCRhLnNsaWNlKDAsICQkaSkuY29uY2F0KCQkYS5zbGljZSgkJGkgKyAxKSkpXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF92bS5hY3RpdmUgPSAkJGNcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSldKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2JywgW19jKCdkaXYnLCBbX3ZtLl92KFwiQ29kZTpcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RleHRhcmVhJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImNvbHNcIjogXCIxMDBcIixcbiAgICAgIFwicm93c1wiOiBcIjZcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLmV4YW1wbGVzX3NwaW5uZXJcbiAgICB9XG4gIH0pXSldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi01Zjk2NDc4YVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNWY5NjQ3OGEhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL2xvYWRpbmcudnVlXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi90b2dnbGVzLnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNDdmYTJjNmQhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vdG9nZ2xlcy52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiL1VzZXJzL296L3NyYy9tYXRlcmlhbC1jb21wb25lbnRzL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL3RvZ2dsZXMudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi00N2ZhMmM2ZFwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi00N2ZhMmM2ZFwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH1cbn0pKCl9XG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHRvZ2dsZXMudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvdG9nZ2xlcy52dWUiLCI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPGg0PkNoZWNrYm94PC9oND5cblxuICAgICAgICA8bS1jaGVja2JveCB2LW1vZGVsPVwiY2hlY2tib3gxXCIgQGNoYW5nZT1cInNlbGVjdFwiPlRoaXMgb25lPC9tLWNoZWNrYm94PlxuXG4gICAgICAgIDxtLWNoZWNrYm94IHYtbW9kZWw9XCJjaGVja2JveDJcIj5MYWJlbDwvbS1jaGVja2JveD5cblxuICAgICAgICA8bS1jaGVja2JveCBkaXNhYmxlZCB2LW1vZGVsPVwiY2hlY2tib3gyXCI+TGFiZWw8L20tY2hlY2tib3g+XG5cbiAgICAgICAgPGhyPlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7e2NoZWNrYm94MX19LCB7e2NoZWNrYm94Mn19XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2PkNvZGU6PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjb2xzPVwiMTAwXCIgcm93cz1cIjZcIiA6dmFsdWU9XCJleGFtcGxlc1wiPlxuICAgICAgICAgICAgICAgICAgICA8L3RleHRhcmVhPlxuICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgIDxoND5SYWRpbzwvaDQ+XG4gICAgICAgIDxtLXJhZGlvIG5hbWU9XCJ0ZXN0XCIgdi1tb2RlbD1cInJhZGlvVmFsXCIgdmFsPVwib25lXCI+VGVzdCAxPC9tLXJhZGlvPlxuICAgICAgICA8bS1yYWRpbyBuYW1lPVwidGVzdFwiIHYtbW9kZWw9XCJyYWRpb1ZhbFwiIHZhbD1cInR3b1wiPlRlc3QgMjwvbS1yYWRpbz5cbiAgICAgICAgPG0tcmFkaW8gbmFtZT1cInRlc3RcIiB2LW1vZGVsPVwicmFkaW9WYWxcIiB2YWw9XCIzXCIgZGlzYWJsZWQ+VGVzdCAzPC9tLXJhZGlvPlxuXG4gICAgICAgIDxkaXY+e3tyYWRpb1ZhbH19PC9kaXY+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXY+Q29kZTo8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNvbHM9XCIxMDBcIiByb3dzPVwiNlwiIDp2YWx1ZT1cImV4YW1wbGVzUmFkaW9cIj5cbiAgICAgICAgICAgICAgICAgICAgPC90ZXh0YXJlYT5cbiAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICA8aDQ+U3dpdGNoPC9oND5cblxuICAgICAgICA8bS1zd2l0Y2ggdi1tb2RlbD1cInN3aXRjaDFcIj5PbjwvbS1zd2l0Y2g+XG4gICAgICAgIDxicj5cbiAgICAgICAge3tzd2l0Y2gxfX1cbiAgICAgICAgPGJyPlxuXG4gICAgICAgIDxtLXN3aXRjaCB2LW1vZGVsPVwic3dpdGNoMlwiPk9mZjwvbS1zd2l0Y2g+XG4gICAgICAgIDxicj5cbiAgICAgICAge3tzd2l0Y2gyfX1cblxuICAgICAgICA8bS1zd2l0Y2ggdi1tb2RlbD1cInN3aXRjaDJcIiBkaXNhYmxlZD5PZmY8L20tc3dpdGNoPlxuICAgICAgICA8YnI+XG4gICAgICAgIHt7c3dpdGNoMn19XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXY+Q29kZTo8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNvbHM9XCIxMDBcIiByb3dzPVwiNlwiIDp2YWx1ZT1cImV4YW1wbGVzU3dpdGNoXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvdGV4dGFyZWE+XG4gICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgPGg0Pkljb24gVGFnZ2xlPC9oND5cblxuICAgICAgICA8bS1pY29uLXRvZ2dsZSB2LW1vZGVsPVwiaVRvZ2dsZVwiIGljb249XCJmb3JtYXRfYm9sZFwiPjwvbS1pY29uLXRvZ2dsZT5cbiAgICAgICAgPGJyPlxuXG4gICAgICAgIHt7aVRvZ2dsZX19XG5cbiAgICAgICAgPGJyPlxuXG4gICAgICAgIDxtLWljb24tdG9nZ2xlIHYtbW9kZWw9XCJpVG9nZ2xlMlwiIGljb249XCJzZWFyY2hcIj48L20taWNvbi10b2dnbGU+XG4gICAgICAgIDxicj5cbiAgICAgICAge3tpVG9nZ2xlMn19XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXY+Q29kZTo8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNvbHM9XCIxMDBcIiByb3dzPVwiNlwiIDp2YWx1ZT1cImV4YW1wbGVzSWNvblRvZ2dsZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPC90ZXh0YXJlYT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgc2VsZWN0OiBmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrYm94MiA9IHZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY2hlY2tib3gxOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjaGVja2JveDI6IHRydWUsXG4gICAgICAgICAgICAgICAgZXhhbXBsZXM6IGBcbiAgICAgICAgICAgICAgICAgICAgPG0tY2hlY2tib3ggdi1tb2RlbD1cImNoZWNrYm94MVwiPlRoaXMgb25lPC9tLWNoZWNrYm94PlxuICAgICAgICAgICAgICAgICAgICA8bS1jaGVja2JveCB2LW1vZGVsPVwiY2hlY2tib3gyXCI+TGFiZWw8L20tY2hlY2tib3g+XG4gICAgICAgICAgICAgICAgYCxcblxuICAgICAgICAgICAgICAgIHJhZGlvVmFsOiAndHdvJyxcbiAgICAgICAgICAgICAgICBleGFtcGxlc1JhZGlvOiBgXG4gICAgICAgICAgICAgICAgICAgIDxtLXJhZGlvIG5hbWU9XCJ0ZXN0XCIgdi1tb2RlbD1cInJhZGlvVmFsXCIgdmFsPVwib25lXCI+VGVzdCAxPC9tLXJhZGlvPlxuICAgICAgICAgICAgICAgICAgICA8bS1yYWRpbyBuYW1lPVwidGVzdFwiIHYtbW9kZWw9XCJyYWRpb1ZhbFwiIHZhbD1cInR3b1wiPlRlc3QgMjwvbS1yYWRpbz5cbiAgICAgICAgICAgICAgICAgICAgPG0tcmFkaW8gbmFtZT1cInRlc3RcIiB2LW1vZGVsPVwicmFkaW9WYWxcIiB2YWw9XCIzXCIgZGlzYWJsZWQ+VGVzdCAzPC9tLXJhZGlvPlxuICAgICAgICAgICAgICAgIGAsXG5cbiAgICAgICAgICAgICAgICBzd2l0Y2gxOiB0cnVlLFxuICAgICAgICAgICAgICAgIHN3aXRjaDI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGV4YW1wbGVzU3dpdGNoOiBgXG4gICAgICAgICAgICAgICAgICAgIDxtLXN3aXRjaCB2LW1vZGVsPVwic3dpdGNoMVwiPk9uPC9tLXN3aXRjaD5cbiAgICAgICAgICAgICAgICAgICAgPG0tc3dpdGNoIHYtbW9kZWw9XCJzd2l0Y2gyXCI+T2ZmPC9tLXN3aXRjaD5cbiAgICAgICAgICAgICAgICAgICAgPG0tc3dpdGNoIHYtbW9kZWw9XCJzd2l0Y2gyXCIgZGlzYWJsZWQ+T2ZmPC9tLXN3aXRjaD5cbiAgICAgICAgICAgICAgICBgLFxuXG4gICAgICAgICAgICAgICAgaVRvZ2dsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpVG9nZ2xlMjogZmFsc2UsXG5cbiAgICAgICAgICAgICAgICBleGFtcGxlc0ljb25Ub2dnbGVzOiBgXG4gICAgICAgICAgICAgICAgICAgIDxtLWljb24tdG9nZ2xlIHYtbW9kZWw9XCJpVG9nZ2xlXCIgaWNvbj1cImZvcm1hdF9ib2xkXCI+PC9tLWljb24tdG9nZ2xlPlxuICAgICAgICAgICAgICAgICAgICA8bS1pY29uLXRvZ2dsZSB2LW1vZGVsPVwiaVRvZ2dsZTJcIiBpY29uPVwic2VhcmNoXCI+PC9tLWljb24tdG9nZ2xlPlxuICAgICAgICAgICAgICAgIGAsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB0b2dnbGVzLnZ1ZT83ZTA1NWRjZSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW19jKCdoNCcsIFtfdm0uX3YoXCJDaGVja2JveFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS1jaGVja2JveCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5jaGVja2JveDEpLFxuICAgICAgZXhwcmVzc2lvbjogXCJjaGVja2JveDFcIlxuICAgIH1dLFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0uY2hlY2tib3gxKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2hhbmdlXCI6IF92bS5zZWxlY3QsXG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uY2hlY2tib3gxID0gJGV2ZW50XG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiVGhpcyBvbmVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tY2hlY2tib3gnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uY2hlY2tib3gyKSxcbiAgICAgIGV4cHJlc3Npb246IFwiY2hlY2tib3gyXCJcbiAgICB9XSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLmNoZWNrYm94MilcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uY2hlY2tib3gyID0gJGV2ZW50XG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiTGFiZWxcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tY2hlY2tib3gnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uY2hlY2tib3gyKSxcbiAgICAgIGV4cHJlc3Npb246IFwiY2hlY2tib3gyXCJcbiAgICB9XSxcbiAgICBhdHRyczoge1xuICAgICAgXCJkaXNhYmxlZFwiOiBcIlwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLmNoZWNrYm94MilcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uY2hlY2tib3gyID0gJGV2ZW50XG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiTGFiZWxcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2hyJyksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCBbX3ZtLl92KFwiXFxuICAgICAgICBcIiArIF92bS5fcyhfdm0uY2hlY2tib3gxKSArIFwiLCBcIiArIF92bS5fcyhfdm0uY2hlY2tib3gyKSArIFwiXFxuICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2JywgW19jKCdkaXYnLCBbX3ZtLl92KFwiQ29kZTpcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RleHRhcmVhJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImNvbHNcIjogXCIxMDBcIixcbiAgICAgIFwicm93c1wiOiBcIjZcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLmV4YW1wbGVzXG4gICAgfVxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaDQnLCBbX3ZtLl92KFwiUmFkaW9cIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tcmFkaW8nLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0ucmFkaW9WYWwpLFxuICAgICAgZXhwcmVzc2lvbjogXCJyYWRpb1ZhbFwiXG4gICAgfV0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwibmFtZVwiOiBcInRlc3RcIixcbiAgICAgIFwidmFsXCI6IFwib25lXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0ucmFkaW9WYWwpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnJhZGlvVmFsID0gJGV2ZW50XG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiVGVzdCAxXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtLXJhZGlvJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnJhZGlvVmFsKSxcbiAgICAgIGV4cHJlc3Npb246IFwicmFkaW9WYWxcIlxuICAgIH1dLFxuICAgIGF0dHJzOiB7XG4gICAgICBcIm5hbWVcIjogXCJ0ZXN0XCIsXG4gICAgICBcInZhbFwiOiBcInR3b1wiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLnJhZGlvVmFsKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5yYWRpb1ZhbCA9ICRldmVudFxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIlRlc3QgMlwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS1yYWRpbycsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5yYWRpb1ZhbCksXG4gICAgICBleHByZXNzaW9uOiBcInJhZGlvVmFsXCJcbiAgICB9XSxcbiAgICBhdHRyczoge1xuICAgICAgXCJuYW1lXCI6IFwidGVzdFwiLFxuICAgICAgXCJ2YWxcIjogXCIzXCIsXG4gICAgICBcImRpc2FibGVkXCI6IFwiXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0ucmFkaW9WYWwpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnJhZGlvVmFsID0gJGV2ZW50XG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiVGVzdCAzXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCBbX3ZtLl92KF92bS5fcyhfdm0ucmFkaW9WYWwpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2JywgW19jKCdkaXYnLCBbX3ZtLl92KFwiQ29kZTpcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RleHRhcmVhJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImNvbHNcIjogXCIxMDBcIixcbiAgICAgIFwicm93c1wiOiBcIjZcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLmV4YW1wbGVzUmFkaW9cbiAgICB9XG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdoNCcsIFtfdm0uX3YoXCJTd2l0Y2hcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tc3dpdGNoJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnN3aXRjaDEpLFxuICAgICAgZXhwcmVzc2lvbjogXCJzd2l0Y2gxXCJcbiAgICB9XSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLnN3aXRjaDEpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnN3aXRjaDEgPSAkZXZlbnRcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJPblwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiXFxuICAgIFwiICsgX3ZtLl9zKF92bS5zd2l0Y2gxKSArIFwiXFxuICAgIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdtLXN3aXRjaCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5zd2l0Y2gyKSxcbiAgICAgIGV4cHJlc3Npb246IFwic3dpdGNoMlwiXG4gICAgfV0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5zd2l0Y2gyKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5zd2l0Y2gyID0gJGV2ZW50XG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiT2ZmXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCJcXG4gICAgXCIgKyBfdm0uX3MoX3ZtLnN3aXRjaDIpICsgXCJcXG5cXG4gICAgXCIpLCBfYygnbS1zd2l0Y2gnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uc3dpdGNoMiksXG4gICAgICBleHByZXNzaW9uOiBcInN3aXRjaDJcIlxuICAgIH1dLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImRpc2FibGVkXCI6IFwiXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0uc3dpdGNoMilcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uc3dpdGNoMiA9ICRldmVudFxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIk9mZlwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiXFxuICAgIFwiICsgX3ZtLl9zKF92bS5zd2l0Y2gyKSArIFwiXFxuXFxuICAgIFwiKSwgX2MoJ2RpdicsIFtfYygnZGl2JywgW192bS5fdihcIkNvZGU6XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCd0ZXh0YXJlYScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJjb2xzXCI6IFwiMTAwXCIsXG4gICAgICBcInJvd3NcIjogXCI2XCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5leGFtcGxlc1N3aXRjaFxuICAgIH1cbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2g0JywgW192bS5fdihcIkljb24gVGFnZ2xlXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtLWljb24tdG9nZ2xlJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmlUb2dnbGUpLFxuICAgICAgZXhwcmVzc2lvbjogXCJpVG9nZ2xlXCJcbiAgICB9XSxcbiAgICBhdHRyczoge1xuICAgICAgXCJpY29uXCI6IFwiZm9ybWF0X2JvbGRcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5pVG9nZ2xlKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5pVG9nZ2xlID0gJGV2ZW50XG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIlxcblxcbiAgICBcIiArIF92bS5fcyhfdm0uaVRvZ2dsZSkgKyBcIlxcblxcbiAgICBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnbS1pY29uLXRvZ2dsZScsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5pVG9nZ2xlMiksXG4gICAgICBleHByZXNzaW9uOiBcImlUb2dnbGUyXCJcbiAgICB9XSxcbiAgICBhdHRyczoge1xuICAgICAgXCJpY29uXCI6IFwic2VhcmNoXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0uaVRvZ2dsZTIpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmlUb2dnbGUyID0gJGV2ZW50XG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIlxcbiAgICBcIiArIF92bS5fcyhfdm0uaVRvZ2dsZTIpICsgXCJcXG5cXG4gICAgXCIpLCBfYygnZGl2JywgW19jKCdkaXYnLCBbX3ZtLl92KFwiQ29kZTpcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RleHRhcmVhJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImNvbHNcIjogXCIxMDBcIixcbiAgICAgIFwicm93c1wiOiBcIjZcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLmV4YW1wbGVzSWNvblRvZ2dsZXNcbiAgICB9XG4gIH0pXSldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi00N2ZhMmM2ZFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNDdmYTJjNmQhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL3RvZ2dsZXMudnVlXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi90YWJzLnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMTAxMGRkYzAhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vdGFicy52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiL1VzZXJzL296L3NyYy9tYXRlcmlhbC1jb21wb25lbnRzL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL3RhYnMudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0xMDEwZGRjMFwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0xMDEwZGRjMFwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH1cbn0pKCl9XG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHRhYnMudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvdGFicy52dWUiLCI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPG0tdGFicyB2LW1vZGVsPVwiY3VycmVudFR1YlwiPlxuICAgICAgICAgICAgPG0tdGFiIDp0YWI9XCJ7IHRpdGxlOiAnSm9uJywgaWQ6ICd0YWItMScgfVwiPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICBIZWxsbyAxXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9tLXRhYj5cbiAgICAgICAgICAgIDxtLXRhYiA6dGFiPVwieyB0aXRsZTogJ1RvbScsIGlkOiAndGFiLTInIH1cIj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgSGVsbG8gMlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvbS10YWI+XG5cbiAgICAgICAgPC9tLXRhYnM+XG5cblxuXG4gICAgICAgIDxtLXRhYnMgdi1tb2RlbD1cImN1cnJlbnRUdWIyXCI+XG4gICAgICAgICAgICA8bS10YWIgdGFiPVwiVGFiIDFcIj5cbiAgICAgICAgICAgICAgICA8cCBzdHlsZT1cIm1pbi1oZWlnaHQ6IDQwMHB4O1wiPlxuICAgICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBTZWQgbWkgZG9sb3IsIG1vbGVzdGllIHV0IHBvcnR0aXRvciB2aXRhZSwgdml2ZXJyYSBhYyBsb3JlbS48YnI+XG4gICAgICAgICAgICAgICAgICAgIFBlbGxlbnRlc3F1ZSBldSBsb2JvcnRpcyBmZWxpcy4gTnVsbGEgaWQgcHJldGl1bSBhbnRlLiBBbGlxdWFtIHR1cnBpcyBlbmltLCBpbXBlcmRpZXQgZWZmaWNpdHVyIG1hdXJpcyBhLCA8YnI+XG4gICAgICAgICAgICAgICAgICAgIHRlbXBvciBsYWNpbmlhIGFudGUuIE5hbSB2ZWwgdmVsaXQgbWV0dXMuIEludGVnZXIgbnVsbGEgdHVycGlzLCB0cmlzdGlxdWUgbm9uIGR1aSBlZ2V0LCBtYWxlc3VhZGEgYmxhbmRpdCBuaXNpLjxicj5cbiAgICAgICAgICAgICAgICAgICAgUGhhc2VsbHVzIGlkIHZvbHV0cGF0IG9yY2kuIEN1cmFiaXR1ciBtYWxlc3VhZGEgYXVndWUgZWZmaWNpdHVyIG1hc3NhIGNvbnNlcXVhdCBjb25zZXF1YXQuIENsYXNzIGFwdGVudCB0YWNpdGkgc29jaW9zcXVcbiAgICAgICAgICAgICAgICAgICAgYWQgbGl0b3JhIHRvcnF1ZW50IHBlciBjb251YmlhIG5vc3RyYSwgcGVyIGluY2VwdG9zIGhpbWVuYWVvcy5cblxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvbS10YWI+XG4gICAgICAgICAgICA8bS10YWIgdGFiPVwiVGFiIDJcIj5cbiAgICAgICAgICAgICAgICA8cCBzdHlsZT1cIm1pbi1oZWlnaHQ6IDQwMHB4O1wiPlxuICAgICAgICAgICAgICAgICAgICBRdWlzcXVlIGV0IGhlbmRyZXJpdCBvZGlvLCB2aXZlcnJhIGVmZmljaXR1ciByaXN1cy4gTWF1cmlzIHRlbXB1cyBtaSB1dCBmcmluZ2lsbGEgcGxhY2VyYXQuIFZlc3RpYnVsdW0gc2FnaXR0aXMgcGVsbGVudGVzcXVlIG51bmMgbmVjIGNvbmd1ZS4gTWFlY2VuYXMgZXUgZW5pbSBzdXNjaXBpdCBhdWd1ZSBtYXhpbXVzIHZpdmVycmEuIEZ1c2NlIHRpbmNpZHVudCwgbmliaCBub24gZWxlaWZlbmQgcGxhY2VyYXQsIGxlY3R1cyBudW5jIGxhY2luaWEgbmlzaSwgYSBtYXhpbXVzIHB1cnVzIG1hdXJpcyB2ZWwgZHVpLiBGdXNjZSBpbiB1cm5hIHZlbCBkaWFtIGxvYm9ydGlzIHRlbXBvciBub24gc2VkIG5pc2kuIEV0aWFtIG1ldHVzIG9yY2ksIGNvbnZhbGxpcyBlZ2V0IHJob25jdXMgdmVsLCBjdXJzdXMgYSBtYXVyaXMuIFByb2luIG1heGltdXMgdmVsaXQgc2VkIHNlbXBlciBjb21tb2RvLiBNYWVjZW5hcyBzaXQgYW1ldCBsYW9yZWV0IGxlby4gTnVsbGEgZmFjaWxpc2kuIEludGVnZXIgZWdldCBtYXVyaXMgbWkuIE51bGxhIGRpY3R1bSBlcmF0IGVnZXQgbWkgbWF4aW11cyB2ZW5lbmF0aXMuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9tLXRhYj5cblxuICAgICAgICA8L20tdGFicz5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdj5Db2RlOjwvZGl2PlxuICAgICAgICAgICAgPHRleHRhcmVhIGNvbHM9XCIxMDBcIiByb3dzPVwiMTBcIiA6dmFsdWU9XCJleGFtcGxlc1wiPjwvdGV4dGFyZWE+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdHtcbiAgICAgICAgZGF0YSgpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50VHViOiAndGFiLTEnLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRUdWIyOiAnVGFiIDInLFxuICAgICAgICAgICAgICAgIGV4YW1wbGVzOiBgXG4gICAgICAgICAgICAgICAgPG0tdGFicyB2LW1vZGVsPVwiY3VycmVudFR1YlwiPlxuICAgICAgICAgICAgICAgICAgICAgPG0tdGFiIDp0YWI9XCJ7IHRpdGxlOiAnVGl0bGUnLCBpZDogJ3RhYi0xJyB9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBIZWxsbyAxXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvbS10YWI+XG4gICAgICAgICAgICAgICAgICAgIDxtLXRhYiA6dGFiPVwieyB0aXRsZTogJ1RpdGxlJywgaWQ6ICd0YWItMicgfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSGVsbG8gMlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L20tdGFiPlxuXG4gICAgICAgICAgICAgICAgPC9tLXRhYnM+XG4gICAgICAgICAgICAgICAgYCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHRhYnMudnVlPzBmNDgyMmQxIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ20tdGFicycsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5jdXJyZW50VHViKSxcbiAgICAgIGV4cHJlc3Npb246IFwiY3VycmVudFR1YlwiXG4gICAgfV0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5jdXJyZW50VHViKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5jdXJyZW50VHViID0gJGV2ZW50XG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ20tdGFiJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRhYlwiOiB7XG4gICAgICAgIHRpdGxlOiAnSm9uJyxcbiAgICAgICAgaWQ6ICd0YWItMSdcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygncCcsIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgSGVsbG8gMVxcbiAgICAgICAgICAgIFwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdtLXRhYicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0YWJcIjoge1xuICAgICAgICB0aXRsZTogJ1RvbScsXG4gICAgICAgIGlkOiAndGFiLTInXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ3AnLCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIEhlbGxvIDJcXG4gICAgICAgICAgICBcIildKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdtLXRhYnMnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uY3VycmVudFR1YjIpLFxuICAgICAgZXhwcmVzc2lvbjogXCJjdXJyZW50VHViMlwiXG4gICAgfV0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5jdXJyZW50VHViMilcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uY3VycmVudFR1YjIgPSAkZXZlbnRcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnbS10YWInLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGFiXCI6IFwiVGFiIDFcIlxuICAgIH1cbiAgfSwgW19jKCdwJywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcIm1pbi1oZWlnaHRcIjogXCI0MDBweFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFNlZCBtaSBkb2xvciwgbW9sZXN0aWUgdXQgcG9ydHRpdG9yIHZpdGFlLCB2aXZlcnJhIGFjIGxvcmVtLlwiKSwgX2MoJ2JyJyksIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICBQZWxsZW50ZXNxdWUgZXUgbG9ib3J0aXMgZmVsaXMuIE51bGxhIGlkIHByZXRpdW0gYW50ZS4gQWxpcXVhbSB0dXJwaXMgZW5pbSwgaW1wZXJkaWV0IGVmZmljaXR1ciBtYXVyaXMgYSwgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIHRlbXBvciBsYWNpbmlhIGFudGUuIE5hbSB2ZWwgdmVsaXQgbWV0dXMuIEludGVnZXIgbnVsbGEgdHVycGlzLCB0cmlzdGlxdWUgbm9uIGR1aSBlZ2V0LCBtYWxlc3VhZGEgYmxhbmRpdCBuaXNpLlwiKSwgX2MoJ2JyJyksIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICBQaGFzZWxsdXMgaWQgdm9sdXRwYXQgb3JjaS4gQ3VyYWJpdHVyIG1hbGVzdWFkYSBhdWd1ZSBlZmZpY2l0dXIgbWFzc2EgY29uc2VxdWF0IGNvbnNlcXVhdC4gQ2xhc3MgYXB0ZW50IHRhY2l0aSBzb2Npb3NxdVxcbiAgICAgICAgICAgICAgICBhZCBsaXRvcmEgdG9ycXVlbnQgcGVyIGNvbnViaWEgbm9zdHJhLCBwZXIgaW5jZXB0b3MgaGltZW5hZW9zLlxcblxcbiAgICAgICAgICAgIFwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdtLXRhYicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0YWJcIjogXCJUYWIgMlwiXG4gICAgfVxuICB9LCBbX2MoJ3AnLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwibWluLWhlaWdodFwiOiBcIjQwMHB4XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgUXVpc3F1ZSBldCBoZW5kcmVyaXQgb2Rpbywgdml2ZXJyYSBlZmZpY2l0dXIgcmlzdXMuIE1hdXJpcyB0ZW1wdXMgbWkgdXQgZnJpbmdpbGxhIHBsYWNlcmF0LiBWZXN0aWJ1bHVtIHNhZ2l0dGlzIHBlbGxlbnRlc3F1ZSBudW5jIG5lYyBjb25ndWUuIE1hZWNlbmFzIGV1IGVuaW0gc3VzY2lwaXQgYXVndWUgbWF4aW11cyB2aXZlcnJhLiBGdXNjZSB0aW5jaWR1bnQsIG5pYmggbm9uIGVsZWlmZW5kIHBsYWNlcmF0LCBsZWN0dXMgbnVuYyBsYWNpbmlhIG5pc2ksIGEgbWF4aW11cyBwdXJ1cyBtYXVyaXMgdmVsIGR1aS4gRnVzY2UgaW4gdXJuYSB2ZWwgZGlhbSBsb2JvcnRpcyB0ZW1wb3Igbm9uIHNlZCBuaXNpLiBFdGlhbSBtZXR1cyBvcmNpLCBjb252YWxsaXMgZWdldCByaG9uY3VzIHZlbCwgY3Vyc3VzIGEgbWF1cmlzLiBQcm9pbiBtYXhpbXVzIHZlbGl0IHNlZCBzZW1wZXIgY29tbW9kby4gTWFlY2VuYXMgc2l0IGFtZXQgbGFvcmVldCBsZW8uIE51bGxhIGZhY2lsaXNpLiBJbnRlZ2VyIGVnZXQgbWF1cmlzIG1pLiBOdWxsYSBkaWN0dW0gZXJhdCBlZ2V0IG1pIG1heGltdXMgdmVuZW5hdGlzLlxcbiAgICAgICAgICAgIFwiKV0pXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIFtfYygnZGl2JywgW192bS5fdihcIkNvZGU6XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCd0ZXh0YXJlYScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJjb2xzXCI6IFwiMTAwXCIsXG4gICAgICBcInJvd3NcIjogXCIxMFwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0uZXhhbXBsZXNcbiAgICB9XG4gIH0pXSldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0xMDEwZGRjMFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMTAxMGRkYzAhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL3RhYnMudnVlXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi90b29sdGlwcy52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTUwMWM4MDcyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Rvb2x0aXBzLnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCIvVXNlcnMvb3ovc3JjL21hdGVyaWFsLWNvbXBvbmVudHMvZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvdG9vbHRpcHMudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi01MDFjODA3MlwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi01MDFjODA3MlwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH1cbn0pKCl9XG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHRvb2x0aXBzLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL3Rvb2x0aXBzLnZ1ZSIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IHN0eWxlPVwibWFyZ2luOiAxMDBweFwiPlxuICAgICAgICA8bS10b29sdGlwIHRhcmdldD1cImFkZC1idXR0b25cIj5IZWxsbyBXb3JsZDwvbS10b29sdGlwPlxuICAgICAgICA8bS1idXR0b24gcmFpc2VkIHByaW1hcnkgcmlwcGxlIGlkPVwiYWRkLWJ1dHRvblwiPkFkZDwvbS1idXR0b24+XG5cbiAgICAgICAgPGhyPlxuXG4gICAgICAgIDxtLXRvb2x0aXAgdGFyZ2V0PVwiYWRkXCIgbGFyZ2U+VXBsb2FkIDxzdHJvbmc+ZmlsZS56aXA8L3N0cm9uZz48L20tdG9vbHRpcD5cbiAgICAgICAgPG0tYnV0dG9uIGljb249XCJhZGRcIiBpZD1cImFkZFwiIHJhaXNlZCBhY2NlbnQ+PC9tLWJ1dHRvbj5cblxuICAgICAgICA8aHI+XG5cbiAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgPG0tdG9vbHRpcCB0YXJnZXQ9XCJsZWZ0XCIgbGVmdD5MZWZ0IHRvb2x0aXBlPC9tLXRvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgPG0tYnV0dG9uIHJhaXNlZCBwcmltYXJ5IHJpcHBsZSBpZD1cImxlZnRcIj5MZWZ0PC9tLWJ1dHRvbj5cbiAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIDxtLXRvb2x0aXAgdGFyZ2V0PVwicmlnaHRcIiByaWdodD5SaWdodCB0b29sdGlwZTwvbS10b29sdGlwPlxuICAgICAgICAgICAgICAgICAgICA8bS1idXR0b24gcmFpc2VkIHByaW1hcnkgcmlwcGxlIGlkPVwicmlnaHRcIj5SaWdodDwvbS1idXR0b24+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICA8bS10b29sdGlwIHRhcmdldD1cInRvcFwiIHRvcD5Ub3AgdG9vbHRpcGU8L20tdG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgPG0tYnV0dG9uIHJhaXNlZCBwcmltYXJ5IHJpcHBsZSBpZD1cInRvcFwiPlRvcDwvbS1idXR0b24+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICA8bS10b29sdGlwIHRhcmdldD1cImJvdHRvbVwiIGJvdHRvbT5Cb3R0b20gdG9vbHRpcGU8L20tdG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgPG0tYnV0dG9uIHJhaXNlZCBwcmltYXJ5IHJpcHBsZSBpZD1cImJvdHRvbVwiPkJvdHRvbTwvbS1idXR0b24+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdj5Db2RlOjwvZGl2PlxuICAgICAgICAgICAgPHRleHRhcmVhIGNvbHM9XCIxMDBcIiByb3dzPVwiNlwiIDp2YWx1ZT1cImV4YW1wbGVzXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0e1xuICAgICAgICBkYXRhKCl7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGV4YW1wbGVzOiBgXG4gICAgICAgICAgICAgICAgICAgIDxtLXRvb2x0aXAgdGFyZ2V0PVwiYWRkLWJ1dHRvblwiPkhlbGxvIFdvcmxkPC9tLXRvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgIDxtLWJ1dHRvbiByYWlzZWQgcHJpbWFyeSByaXBwbGUgaWQ9XCJhZGQtYnV0dG9uXCI+QWRkPC9tLWJ1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICA8bS10b29sdGlwIHRhcmdldD1cImFkZFwiIGxhcmdlPlVwbG9hZCA8c3Ryb25nPmZpbGUuemlwPC9zdHJvbmc+PC9tLXRvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgIDxtLWJ1dHRvbiBpY29uPVwiYWRkXCIgaWQ9XCJhZGRcIiByYWlzZWQgYWNjZW50PjwvbS1idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgPG0tdG9vbHRpcCB0YXJnZXQ9XCJsZWZ0XCIgbGVmdD5MZWZ0IHRvb2x0aXBlPC9tLXRvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgIDxtLWJ1dHRvbiByYWlzZWQgcHJpbWFyeSByaXBwbGUgaWQ9XCJsZWZ0XCI+TGVmdDwvbS1idXR0b24+XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gdG9vbHRpcHMudnVlPzE3NjRhYWNjIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwibWFyZ2luXCI6IFwiMTAwcHhcIlxuICAgIH1cbiAgfSwgW19jKCdtLXRvb2x0aXAnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGFyZ2V0XCI6IFwiYWRkLWJ1dHRvblwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiSGVsbG8gV29ybGRcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tYnV0dG9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInJhaXNlZFwiOiBcIlwiLFxuICAgICAgXCJwcmltYXJ5XCI6IFwiXCIsXG4gICAgICBcInJpcHBsZVwiOiBcIlwiLFxuICAgICAgXCJpZFwiOiBcImFkZC1idXR0b25cIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkFkZFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaHInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tdG9vbHRpcCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0YXJnZXRcIjogXCJhZGRcIixcbiAgICAgIFwibGFyZ2VcIjogXCJcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlVwbG9hZCBcIiksIF9jKCdzdHJvbmcnLCBbX3ZtLl92KFwiZmlsZS56aXBcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS1idXR0b24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWNvblwiOiBcImFkZFwiLFxuICAgICAgXCJpZFwiOiBcImFkZFwiLFxuICAgICAgXCJyYWlzZWRcIjogXCJcIixcbiAgICAgIFwiYWNjZW50XCI6IFwiXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaHInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3VsJywgW19jKCdsaScsIFtfYygncCcsIFtfYygnbS10b29sdGlwJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRhcmdldFwiOiBcImxlZnRcIixcbiAgICAgIFwibGVmdFwiOiBcIlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiTGVmdCB0b29sdGlwZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS1idXR0b24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwicmFpc2VkXCI6IFwiXCIsXG4gICAgICBcInByaW1hcnlcIjogXCJcIixcbiAgICAgIFwicmlwcGxlXCI6IFwiXCIsXG4gICAgICBcImlkXCI6IFwibGVmdFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiTGVmdFwiKV0pXSwgMSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2xpJywgW19jKCdwJywgW19jKCdtLXRvb2x0aXAnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGFyZ2V0XCI6IFwicmlnaHRcIixcbiAgICAgIFwicmlnaHRcIjogXCJcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlJpZ2h0IHRvb2x0aXBlXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtLWJ1dHRvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJyYWlzZWRcIjogXCJcIixcbiAgICAgIFwicHJpbWFyeVwiOiBcIlwiLFxuICAgICAgXCJyaXBwbGVcIjogXCJcIixcbiAgICAgIFwiaWRcIjogXCJyaWdodFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiUmlnaHRcIildKV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdsaScsIFtfYygncCcsIFtfYygnbS10b29sdGlwJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRhcmdldFwiOiBcInRvcFwiLFxuICAgICAgXCJ0b3BcIjogXCJcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlRvcCB0b29sdGlwZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS1idXR0b24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwicmFpc2VkXCI6IFwiXCIsXG4gICAgICBcInByaW1hcnlcIjogXCJcIixcbiAgICAgIFwicmlwcGxlXCI6IFwiXCIsXG4gICAgICBcImlkXCI6IFwidG9wXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJUb3BcIildKV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdsaScsIFtfYygncCcsIFtfYygnbS10b29sdGlwJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRhcmdldFwiOiBcImJvdHRvbVwiLFxuICAgICAgXCJib3R0b21cIjogXCJcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkJvdHRvbSB0b29sdGlwZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS1idXR0b24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwicmFpc2VkXCI6IFwiXCIsXG4gICAgICBcInByaW1hcnlcIjogXCJcIixcbiAgICAgIFwicmlwcGxlXCI6IFwiXCIsXG4gICAgICBcImlkXCI6IFwiYm90dG9tXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJCb3R0b21cIildKV0sIDEpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIFtfYygnZGl2JywgW192bS5fdihcIkNvZGU6XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCd0ZXh0YXJlYScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJjb2xzXCI6IFwiMTAwXCIsXG4gICAgICBcInJvd3NcIjogXCI2XCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5leGFtcGxlc1xuICAgIH1cbiAgfSldKV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTUwMWM4MDcyXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi01MDFjODA3MiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvdG9vbHRpcHMudnVlXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi90YWJsZS52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTA0MjIwMmM4IXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3RhYmxlLnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCIvVXNlcnMvb3ovc3JjL21hdGVyaWFsLWNvbXBvbmVudHMvZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvdGFibGUudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0wNDIyMDJjOFwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0wNDIyMDJjOFwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH1cbn0pKCl9XG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHRhYmxlLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL3RhYmxlLnZ1ZSIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8aDM+VGFibGU8L2gzPlxuXG4gICAgICAgIDxwIHN0eWxlPVwiZmxvYXQ6IGxlZnQ7XCI+XG4gICAgICAgICAgICA8bS10YWJsZSBAc2VsZWN0PVwib25TZWxlY3RcIj5cbiAgICAgICAgICAgICAgICA8bS10YWJsZS1oZWFkPlxuICAgICAgICAgICAgICAgICAgICA8bS10YWJsZS1yb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bS10YWJsZS1oIG51bWVyaWM+SWQ8L20tdGFibGUtaD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtLXRhYmxlLWg+RW1haWw8L20tdGFibGUtaD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtLXRhYmxlLWg+TmFtZTwvbS10YWJsZS1oPlxuICAgICAgICAgICAgICAgICAgICA8L20tdGFibGUtcm93PlxuICAgICAgICAgICAgICAgIDwvbS10YWJsZS1oZWFkPlxuXG5cbiAgICAgICAgICAgICAgICA8bS10YWJsZS1ib2R5PlxuICAgICAgICAgICAgICAgICAgICA8bS10YWJsZS1yb3cgdi1mb3I9XCJ1c2VyIGluIHRlc3REYXRhU2V0XCIgc2VsZWN0aW9uIDptLWl0ZW09XCJ1c2VyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bS10YWJsZS1jZWxsIG51bWVyaWM+e3t1c2VyLmlkfX08L20tdGFibGUtY2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtLXRhYmxlLWNlbGwgOnRvb2x0aXA9XCInRS1tYWlsOiAnK3VzZXIuZW1haWxcIiA+e3t1c2VyLmVtYWlsfX08L20tdGFibGUtY2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtLXRhYmxlLWNlbGw+e3t1c2VyLm5hbWV9fTwvbS10YWJsZS1jZWxsPlxuICAgICAgICAgICAgICAgICAgICA8L20tdGFibGUtcm93PlxuICAgICAgICAgICAgICAgIDwvbS10YWJsZS1ib2R5PlxuICAgICAgICAgICAgPC9tLXRhYmxlPlxuICAgICAgICA8L3A+XG5cbiAgICAgICAgPGRpdiBzdHlsZT1cImZsb2F0OiBsZWZ0OyBwYWRkaW5nLWxlZnQ6IDIwcHg7IHdpZHRoOiAzMDBweDtcIj5cbiAgICAgICAgICAgIDxkaXY+PGI+U2VsZWN0ZWQgSXRlbXM6PC9iPjwvZGl2PlxuICAgICAgICAgICAgPHAgdi1mb3I9XCJzIGluIHNlbFwiPnt7cy5pZH19LCB7e3MuZW1haWx9fSwge3tzLm5hbWV9fTwvcD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBzdHlsZT1cImZsb2F0OiBsZWZ0OyBwYWRkaW5nLWxlZnQ6IDIwcHg7XCI+XG4gICAgICAgICAgICA8ZGl2PkNvZGU6PC9kaXY+XG4gICAgICAgICAgICA8dGV4dGFyZWEgY29scz1cIjEwMFwiIHJvd3M9XCIyMFwiIDp2YWx1ZT1cImV4YW1wbGVzXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBzdHlsZT1cImNsZWFyOiBib3RoO1wiPjwvZGl2PlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDQ+U3RhdGljIFRhYmxlPC9oND5cblxuICAgICAgICAgICAgPG0tdGFibGU+XG4gICAgICAgICAgICAgICAgPG0tdGFibGUtaGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPG0tdGFibGUtcm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgPG0tdGFibGUtaCBudW1lcmljPklkPC9tLXRhYmxlLWg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bS10YWJsZS1oPkVtYWlsPC9tLXRhYmxlLWg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bS10YWJsZS1oPk5hbWU8L20tdGFibGUtaD5cbiAgICAgICAgICAgICAgICAgICAgPC9tLXRhYmxlLXJvdz5cbiAgICAgICAgICAgICAgICA8L20tdGFibGUtaGVhZD5cblxuXG4gICAgICAgICAgICAgICAgPG0tdGFibGUtYm9keT5cbiAgICAgICAgICAgICAgICAgICAgPG0tdGFibGUtcm93IHYtZm9yPVwidXNlciBpbiB0ZXN0RGF0YVNldFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG0tdGFibGUtY2VsbCBudW1lcmljPnt7dXNlci5pZH19PC9tLXRhYmxlLWNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bS10YWJsZS1jZWxsPnt7dXNlci5lbWFpbH19PC9tLXRhYmxlLWNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bS10YWJsZS1jZWxsPnt7dXNlci5uYW1lfX08L20tdGFibGUtY2VsbD5cbiAgICAgICAgICAgICAgICAgICAgPC9tLXRhYmxlLXJvdz5cbiAgICAgICAgICAgICAgICA8L20tdGFibGUtYm9keT5cbiAgICAgICAgICAgIDwvbS10YWJsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgICAgICB0aGlzLiRodHRwLmdldCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzJylcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy50ZXN0RGF0YVNldCA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgb25TZWxlY3Q6IGZ1bmN0aW9uKGl0ZW1zKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWwgPSBpdGVtcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG5cbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc2VsOiB7fSxcbiAgICAgICAgICAgICAgICB0ZXN0RGF0YVNldDogW10sXG4gICAgICAgICAgICAgICAgZXhhbXBsZXM6IGBcbiAgICAgICAgICAgICAgICAgICAgPG0tdGFibGUgQHNlbGVjdD1cIm9uU2VsZWN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bS10YWJsZS1oZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtLXRhYmxlLXJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG0tdGFibGUtaCBudW1lcmljPklkPC9tLXRhYmxlLWg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtLXRhYmxlLWg+RW1haWw8L20tdGFibGUtaD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG0tdGFibGUtaD5OYW1lPC9tLXRhYmxlLWg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tLXRhYmxlLXJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbS10YWJsZS1oZWFkPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtLXRhYmxlLWJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG0tdGFibGUtcm93IHYtZm9yPVwidXNlciBpbiB0ZXN0RGF0YVNldFwiIHNlbGVjdGlvbiA6bS1pdGVtPVwidXNlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bS10YWJsZS1jZWxsIG51bWVyaWM+e3t1c2VyLmlkfX08L20tdGFibGUtY2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG0tdGFibGUtY2VsbCA6dG9vbHRpcD1cIidFLW1haWw6ICcrdXNlci5lbWFpbFwiID57e3VzZXIuZW1haWx9fTwvbS10YWJsZS1jZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bS10YWJsZS1jZWxsPnt7dXNlci5uYW1lfX08L20tdGFibGUtY2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L20tdGFibGUtcm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9tLXRhYmxlLWJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDwvbS10YWJsZT5cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB0YWJsZS52dWU/NzJmYjUzZjIiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygnaDMnLCBbX3ZtLl92KFwiVGFibGVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwiZmxvYXRcIjogXCJsZWZ0XCJcbiAgICB9XG4gIH0sIFtfYygnbS10YWJsZScsIHtcbiAgICBvbjoge1xuICAgICAgXCJzZWxlY3RcIjogX3ZtLm9uU2VsZWN0XG4gICAgfVxuICB9LCBbX2MoJ20tdGFibGUtaGVhZCcsIFtfYygnbS10YWJsZS1yb3cnLCBbX2MoJ20tdGFibGUtaCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJudW1lcmljXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJJZFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS10YWJsZS1oJywgW192bS5fdihcIkVtYWlsXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtLXRhYmxlLWgnLCBbX3ZtLl92KFwiTmFtZVwiKV0pXSwgMSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tdGFibGUtYm9keScsIF92bS5fbCgoX3ZtLnRlc3REYXRhU2V0KSwgZnVuY3Rpb24odXNlcikge1xuICAgIHJldHVybiBfYygnbS10YWJsZS1yb3cnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcInNlbGVjdGlvblwiOiBcIlwiLFxuICAgICAgICBcIm0taXRlbVwiOiB1c2VyXG4gICAgICB9XG4gICAgfSwgW19jKCdtLXRhYmxlLWNlbGwnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcIm51bWVyaWNcIjogXCJcIlxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoX3ZtLl9zKHVzZXIuaWQpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS10YWJsZS1jZWxsJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJ0b29sdGlwXCI6ICdFLW1haWw6ICcgKyB1c2VyLmVtYWlsXG4gICAgICB9XG4gICAgfSwgW192bS5fdihfdm0uX3ModXNlci5lbWFpbCkpXSksIF92bS5fdihcIiBcIiksIF9jKCdtLXRhYmxlLWNlbGwnLCBbX3ZtLl92KF92bS5fcyh1c2VyLm5hbWUpKV0pXSwgMSlcbiAgfSkpXSwgMSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJmbG9hdFwiOiBcImxlZnRcIixcbiAgICAgIFwicGFkZGluZy1sZWZ0XCI6IFwiMjBweFwiLFxuICAgICAgXCJ3aWR0aFwiOiBcIjMwMHB4XCJcbiAgICB9XG4gIH0sIFtfdm0uX20oMCksIF92bS5fdihcIiBcIiksIF92bS5fbCgoX3ZtLnNlbCksIGZ1bmN0aW9uKHMpIHtcbiAgICByZXR1cm4gX2MoJ3AnLCBbX3ZtLl92KF92bS5fcyhzLmlkKSArIFwiLCBcIiArIF92bS5fcyhzLmVtYWlsKSArIFwiLCBcIiArIF92bS5fcyhzLm5hbWUpKV0pXG4gIH0pXSwgMiksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwiZmxvYXRcIjogXCJsZWZ0XCIsXG4gICAgICBcInBhZGRpbmctbGVmdFwiOiBcIjIwcHhcIlxuICAgIH1cbiAgfSwgW19jKCdkaXYnLCBbX3ZtLl92KFwiQ29kZTpcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RleHRhcmVhJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImNvbHNcIjogXCIxMDBcIixcbiAgICAgIFwicm93c1wiOiBcIjIwXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5leGFtcGxlc1xuICAgIH1cbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJjbGVhclwiOiBcImJvdGhcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCBbX2MoJ2g0JywgW192bS5fdihcIlN0YXRpYyBUYWJsZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS10YWJsZScsIFtfYygnbS10YWJsZS1oZWFkJywgW19jKCdtLXRhYmxlLXJvdycsIFtfYygnbS10YWJsZS1oJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm51bWVyaWNcIjogXCJcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIklkXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtLXRhYmxlLWgnLCBbX3ZtLl92KFwiRW1haWxcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tdGFibGUtaCcsIFtfdm0uX3YoXCJOYW1lXCIpXSldLCAxKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnbS10YWJsZS1ib2R5JywgX3ZtLl9sKChfdm0udGVzdERhdGFTZXQpLCBmdW5jdGlvbih1c2VyKSB7XG4gICAgcmV0dXJuIF9jKCdtLXRhYmxlLXJvdycsIFtfYygnbS10YWJsZS1jZWxsJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJudW1lcmljXCI6IFwiXCJcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KF92bS5fcyh1c2VyLmlkKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tdGFibGUtY2VsbCcsIFtfdm0uX3YoX3ZtLl9zKHVzZXIuZW1haWwpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS10YWJsZS1jZWxsJywgW192bS5fdihfdm0uX3ModXNlci5uYW1lKSldKV0sIDEpXG4gIH0pKV0sIDEpXSwgMSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ2InLCBbX3ZtLl92KFwiU2VsZWN0ZWQgSXRlbXM6XCIpXSldKVxufV19XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTA0MjIwMmM4XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0wNDIyMDJjOCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvdGFibGUudnVlXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9kaWFsb2dzLnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNmZkZTAyZjkhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vZGlhbG9ncy52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiL1VzZXJzL296L3NyYy9tYXRlcmlhbC1jb21wb25lbnRzL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL2RpYWxvZ3MudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi02ZmRlMDJmOVwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi02ZmRlMDJmOVwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH1cbn0pKCl9XG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGRpYWxvZ3MudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvZGlhbG9ncy52dWUiLCI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPGgzPkRpYWxvZ3M8L2gzPlxuXG4gICAgICAgIDxtLWRpYWxvZyByZWY9XCJtc2dcIiB0aXRsZT1cIk1ETCBEaWFsb2dcIj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIFRoaXMgaXMgYW4gZXhhbXBsZSBvZiB0aGUgTWF0ZXJpYWwgRGVzaWduIExpdGUgZGlhbG9nIGNvbXBvbmVudC4gUGxlYXNlIHVzZSByZXNwb25zaWJseS5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9tLWRpYWxvZz5cblxuICAgICAgICA8IS0tIC8vIC0tPlxuXG4gICAgICAgIDxtLWRpYWxvZyByZWY9XCJtc2dGdWxsd2lkdGhcIiB0aXRsZT1cIk1ETCBEaWFsb2dcIiBmdWxsLXdpZHRoPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgVGhpcyBpcyBhbiBleGFtcGxlIG9mIHRoZSBNYXRlcmlhbCBEZXNpZ24gTGl0ZSBkaWFsb2cgY29tcG9uZW50LiBQbGVhc2UgdXNlIHJlc3BvbnNpYmx5LlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICA8L20tZGlhbG9nPlxuXG4gICAgICAgIDwhLS0gLy8gLS0+XG5cbiAgICAgICAgPG0tYnV0dG9uIEBjbGljay5uYXRpdmU9XCJvcGVuXCIgcmFpc2VkPk9wZW4gRGlhbG9nPC9tLWJ1dHRvbj5cblxuICAgICAgICA8bS1idXR0b24gQGNsaWNrLm5hdGl2ZT1cIm9wZW5GdWxsXCIgcmFpc2VkPk9wZW4gRGlhbG9nIEZ1bGwgV2lkdGg8L20tYnV0dG9uPlxuXG4gICAgICAgIDxtLWJ1dHRvbiBAY2xpY2submF0aXZlPVwib3BlbkFjdGlvblwiIHJhaXNlZD5DdXN0b20gQWN0aW9uczwvbS1idXR0b24+XG5cbiAgICAgICAgPCEtLSAvLyAtLT5cblxuICAgICAgICA8bS1kaWFsb2cgcmVmPVwibXNnMlwiIGZ1bGwtd2lkdGggdGl0bGU9XCJUZXN0IFRpdGxlXCI+XG4gICAgICAgICAgICA8cCBzdHlsZT1cInBhZGRpbmc6IDMwcHhcIj5JbmNyZW1lbnQ6IHt7aW5jcmVtZW50fX08L3A+XG5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwiYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgIDxtLWJ1dHRvbiByYWlzZWQgcHJpbWFyeSByaXBwbGUgQGNsaWNrLm5hdGl2ZT1cImluY3JlbWVudCsrXCI+QWN0aW9uPC9tLWJ1dHRvbj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvbS1kaWFsb2c+XG5cbiAgICAgICAgPCEtLSAvLyAtLT5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdj5Db2RlOjwvZGl2PlxuICAgICAgICAgICAgPHRleHRhcmVhIGNvbHM9XCIxMDBcIiByb3dzPVwiMzBcIiA6dmFsdWU9XCJleGFtcGxlc1wiPjwvdGV4dGFyZWE+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdHtcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgb3BlbigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLm1zZy5vcGVuKCk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBvcGVuRnVsbCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLm1zZ0Z1bGx3aWR0aC5vcGVuKCk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBvcGVuQWN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMubXNnMi5vcGVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRhdGEoKXtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaW5jcmVtZW50OiAwLFxuICAgICAgICAgICAgICAgIGV4YW1wbGVzOiBgXG4gICAgICAgICAgICAgICAgICAgIDxtLWRpYWxvZyByZWY9XCJtc2dcIiB0aXRsZT1cIk1ETCBEaWFsb2dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgaXMgYW4gZXhhbXBsZSBvZiB0aGUgTWF0ZXJpYWwgRGVzaWduIExpdGUgZGlhbG9nIGNvbXBvbmVudC4gUGxlYXNlIHVzZSByZXNwb25zaWJseS5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9tLWRpYWxvZz5cblxuICAgICAgICAgICAgICAgICAgICA8bS1kaWFsb2cgcmVmPVwibXNnRnVsbHdpZHRoXCIgdGl0bGU9XCJNREwgRGlhbG9nXCIgZnVsbC13aWR0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgaXMgYW4gZXhhbXBsZSBvZiB0aGUgTWF0ZXJpYWwgRGVzaWduIExpdGUgZGlhbG9nIGNvbXBvbmVudC4gUGxlYXNlIHVzZSByZXNwb25zaWJseS5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9tLWRpYWxvZz5cblxuICAgICAgICAgICAgICAgICAgICA8bS1kaWFsb2cgcmVmPVwibXNnMlwiIGZ1bGwtd2lkdGggdGl0bGU9XCJUZXN0IFRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT1cInBhZGRpbmc6IDMwcHhcIj5JbmNyZW1lbnQ6IHt7aW5jcmVtZW50fX08L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwiYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtLWJ1dHRvbiByYWlzZWQgcHJpbWFyeSByaXBwbGUgQGNsaWNrLm5hdGl2ZT1cImluY3JlbWVudCsrXCI+QWN0aW9uPC9tLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgIDwvbS1kaWFsb2c+XG5cbiAgICAgICAgICAgICAgICAgICAgPG0tYnV0dG9uIEBjbGljay5uYXRpdmU9XCJvcGVuXCI+T3BlbiBEaWFsb2c8L20tYnV0dG9uPlxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGRpYWxvZ3MudnVlPzI3OTk5MTFmIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ2gzJywgW192bS5fdihcIkRpYWxvZ3NcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tZGlhbG9nJywge1xuICAgIHJlZjogXCJtc2dcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0aXRsZVwiOiBcIk1ETCBEaWFsb2dcIlxuICAgIH1cbiAgfSwgW19jKCdwJywgW192bS5fdihcIlxcbiAgICAgICAgICAgIFRoaXMgaXMgYW4gZXhhbXBsZSBvZiB0aGUgTWF0ZXJpYWwgRGVzaWduIExpdGUgZGlhbG9nIGNvbXBvbmVudC4gUGxlYXNlIHVzZSByZXNwb25zaWJseS5cXG4gICAgICAgIFwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdtLWRpYWxvZycsIHtcbiAgICByZWY6IFwibXNnRnVsbHdpZHRoXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGl0bGVcIjogXCJNREwgRGlhbG9nXCIsXG4gICAgICBcImZ1bGwtd2lkdGhcIjogXCJcIlxuICAgIH1cbiAgfSwgW19jKCdwJywgW192bS5fdihcIlxcbiAgICAgICAgICAgIFRoaXMgaXMgYW4gZXhhbXBsZSBvZiB0aGUgTWF0ZXJpYWwgRGVzaWduIExpdGUgZGlhbG9nIGNvbXBvbmVudC4gUGxlYXNlIHVzZSByZXNwb25zaWJseS5cXG4gICAgICAgIFwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdtLWJ1dHRvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJyYWlzZWRcIjogXCJcIlxuICAgIH0sXG4gICAgbmF0aXZlT246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5vcGVuKCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJPcGVuIERpYWxvZ1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS1idXR0b24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwicmFpc2VkXCI6IFwiXCJcbiAgICB9LFxuICAgIG5hdGl2ZU9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0ub3BlbkZ1bGwoJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIk9wZW4gRGlhbG9nIEZ1bGwgV2lkdGhcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tYnV0dG9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInJhaXNlZFwiOiBcIlwiXG4gICAgfSxcbiAgICBuYXRpdmVPbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLm9wZW5BY3Rpb24oJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIkN1c3RvbSBBY3Rpb25zXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtLWRpYWxvZycsIHtcbiAgICByZWY6IFwibXNnMlwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImZ1bGwtd2lkdGhcIjogXCJcIixcbiAgICAgIFwidGl0bGVcIjogXCJUZXN0IFRpdGxlXCJcbiAgICB9XG4gIH0sIFtfYygncCcsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJwYWRkaW5nXCI6IFwiMzBweFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiSW5jcmVtZW50OiBcIiArIF92bS5fcyhfdm0uaW5jcmVtZW50KSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RlbXBsYXRlJywge1xuICAgIHNsb3Q6IFwiYWN0aW9uc1wiXG4gIH0sIFtfYygnbS1idXR0b24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwicmFpc2VkXCI6IFwiXCIsXG4gICAgICBcInByaW1hcnlcIjogXCJcIixcbiAgICAgIFwicmlwcGxlXCI6IFwiXCJcbiAgICB9LFxuICAgIG5hdGl2ZU9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uaW5jcmVtZW50KytcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJBY3Rpb25cIildKV0sIDEpXSwgMiksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCBbX2MoJ2RpdicsIFtfdm0uX3YoXCJDb2RlOlwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndGV4dGFyZWEnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiY29sc1wiOiBcIjEwMFwiLFxuICAgICAgXCJyb3dzXCI6IFwiMzBcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLmV4YW1wbGVzXG4gICAgfVxuICB9KV0pXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNmZkZTAyZjlcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTZmZGUwMmY5IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9kaWFsb2dzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTY2ZTVkN2IxIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9jYXJkcy52dWVcIilcblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2NhcmRzLnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNjZlNWQ3YjEhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vY2FyZHMudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIi9Vc2Vycy9vei9zcmMvbWF0ZXJpYWwtY29tcG9uZW50cy9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9jYXJkcy52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTY2ZTVkN2IxXCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTY2ZTVkN2IxXCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfVxufSkoKX1cbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gY2FyZHMudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvY2FyZHMudnVlIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi02NmU1ZDdiMSEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vY2FyZHMudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi02NmU1ZDdiMSEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vY2FyZHMudnVlXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNjZlNWQ3YjEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2NhcmRzLnZ1ZVwiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNjZlNWQ3YjEhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9jYXJkcy52dWVcbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmRlbW8tY2FyZC1zcXVhcmUubWRsLWNhcmQge1xcbiAgd2lkdGg6IDMyMHB4O1xcbiAgaGVpZ2h0OiAzMjBweDtcXG59XFxuLmRlbW8tY2FyZC1zcXVhcmUgPiAubWRsLWNhcmRfX3RpdGxlIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZDogdXJsKCdodHRwczovL2dldG1kbC5pby9hc3NldHMvZGVtb3MvZG9nLnBuZycpIGJvdHRvbSByaWdodCAxNSUgbm8tcmVwZWF0ICM0NkI2QUM7XFxufVxcbi5kZW1vLWNhcmQtd2lkZS5tZGwtY2FyZCB7XFxuICB3aWR0aDogNTEycHg7XFxufVxcbi5kZW1vLWNhcmQtd2lkZSA+IC5tZGwtY2FyZF9fdGl0bGUge1xcbiAgY29sb3I6ICNmZmY7XFxuICBoZWlnaHQ6IDE3NnB4O1xcbiAgYmFja2dyb3VuZDogdXJsKCdodHRwczovL2dldG1kbC5pby9hc3NldHMvZGVtb3Mvd2VsY29tZV9jYXJkLmpwZycpIGNlbnRlciAvIGNvdmVyO1xcbn1cXG4uZGVtby1jYXJkLXdpZGUgPiAubWRsLWNhcmRfX21lbnUge1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9jYXJkcy52dWU/NDYzY2JkMmNcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQXFCQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0NBQ0E7QUFDQTtFQUNBLFlBQUE7RUFDQSw2RkFBQTtDQUNBO0FBRUE7RUFDQSxhQUFBO0NBQ0E7QUFDQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0ZBQUE7Q0FDQTtBQUNBO0VBQ0EsWUFBQTtDQUNBXCIsXCJmaWxlXCI6XCJjYXJkcy52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgICA8ZGl2PlxcbiAgICAgICAgPGgzPkNhcmRzPC9oMz5cXG5cXG4gICAgICAgIDxtLWNhcmQgY2xhc3M9XFxcImRlbW8tY2FyZC1zcXVhcmVcXFwiIHRpdGxlPVxcXCJVcGRhdGVzXFxcIiBzdXBwb3J0aW5nLXRleHQ9XFxcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIE1hdXJpcyBzYWdpdHRpcyBwZWxsZW50ZXNxdWUgbGFjdXMgZWxlaWZlbmQgbGFjaW5pYS4uLlxcXCIgYWN0aW9ucz1cXFwiYWN0aW9uc1xcXCIgYWN0aW9ucy10ZXh0PVxcXCJVcGRhdGVcXFwiPjwvbS1jYXJkPlxcblxcbiAgICAgICAgPGJyPlxcbiAgICAgICAgPGJyPlxcblxcbiAgICAgICAgPG0tY2FyZCBjbGFzcz1cXFwiZGVtby1jYXJkLXdpZGVcXFwiIHRpdGxlPVxcXCJXZWxjb21lXFxcIiBzdXBwb3J0aW5nLXRleHQ9XFxcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIE1hdXJpcyBzYWdpdHRpcyBwZWxsZW50ZXNxdWUgbGFjdXMgZWxlaWZlbmQgbGFjaW5pYS4uLlxcXCIgYWN0aW9ucz1cXFwiYWN0aW9uc1xcXCIgYWN0aW9ucy10ZXh0PVxcXCJHZXQgc3RhcnRlZFxcXCI+PC9tLWNhcmQ+XFxuXFxuICAgICAgICA8aHI+XFxuXFxuICAgICAgICA8ZGl2PlxcbiAgICAgICAgICAgIDxkaXY+Q29kZTo8L2Rpdj5cXG4gICAgICAgICAgICA8dGV4dGFyZWEgY29scz1cXFwiMTUwXFxcIiByb3dzPVxcXCI0MFxcXCIgOnZhbHVlPVxcXCJleGFtcGxlc1xcXCI+PC90ZXh0YXJlYT5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG48L3RlbXBsYXRlPlxcblxcbjxzdHlsZT5cXG4uZGVtby1jYXJkLXNxdWFyZS5tZGwtY2FyZCB7XFxuICB3aWR0aDogMzIwcHg7XFxuICBoZWlnaHQ6IDMyMHB4O1xcbn1cXG4uZGVtby1jYXJkLXNxdWFyZSA+IC5tZGwtY2FyZF9fdGl0bGUge1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vZ2V0bWRsLmlvL2Fzc2V0cy9kZW1vcy9kb2cucG5nJykgYm90dG9tIHJpZ2h0IDE1JSBuby1yZXBlYXQgIzQ2QjZBQztcXG59XFxuXFxuLmRlbW8tY2FyZC13aWRlLm1kbC1jYXJkIHtcXG4gIHdpZHRoOiA1MTJweDtcXG59XFxuLmRlbW8tY2FyZC13aWRlID4gLm1kbC1jYXJkX190aXRsZSB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGhlaWdodDogMTc2cHg7XFxuICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vZ2V0bWRsLmlvL2Fzc2V0cy9kZW1vcy93ZWxjb21lX2NhcmQuanBnJykgY2VudGVyIC8gY292ZXI7XFxufVxcbi5kZW1vLWNhcmQtd2lkZSA+IC5tZGwtY2FyZF9fbWVudSB7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuPC9zdHlsZT5cXG5cXG48c2NyaXB0PlxcblxcbiAgICBleHBvcnQgZGVmYXVsdCB7XFxuICAgICAgICBkYXRhKCl7XFxuICAgICAgICAgICAgcmV0dXJuIHtcXG4gICAgICAgICAgICAgICAgZXhhbXBsZXM6IGBcXG4gICAgICAgICAgICAgICAgICAgIDxtLWNhcmQgY2xhc3M9XFxcImRlbW8tY2FyZC1zcXVhcmVcXFwiIHRpdGxlPVxcXCJVcGRhdGVzXFxcIiBzdXBwb3J0aW5nLXRleHQ9XFxcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIE1hdXJpcyBzYWdpdHRpcyBwZWxsZW50ZXNxdWUgbGFjdXMgZWxlaWZlbmQgbGFjaW5pYS4uLlxcXCIgYWN0aW9ucz1cXFwiYWN0aW9uc1xcXCIgYWN0aW9ucy10ZXh0PVxcXCJVcGRhdGVcXFwiPjwvbS1jYXJkPlxcbiAgICAgICAgICAgICAgICAgICAgPG0tY2FyZCBjbGFzcz1cXFwiZGVtby1jYXJkLXdpZGVcXFwiIHRpdGxlPVxcXCJXZWxjb21lXFxcIiBzdXBwb3J0aW5nLXRleHQ9XFxcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIE1hdXJpcyBzYWdpdHRpcyBwZWxsZW50ZXNxdWUgbGFjdXMgZWxlaWZlbmQgbGFjaW5pYS4uLlxcXCIgYWN0aW9ucz1cXFwiYWN0aW9uc1xcXCIgYWN0aW9ucy10ZXh0PVxcXCJHZXQgc3RhcnRlZFxcXCI+PC9tLWNhcmQ+XFxuXFxuICAgICAgICAgICAgICAgICAgICA8c3R5bGU+XFxuICAgICAgICAgICAgICAgICAgICAuZGVtby1jYXJkLXNxdWFyZS5tZGwtY2FyZCB7XFxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMjBweDtcXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMjBweDtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIC5kZW1vLWNhcmQtc3F1YXJlID4gLm1kbC1jYXJkX190aXRsZSB7XFxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vZ2V0bWRsLmlvL2Fzc2V0cy9kZW1vcy9kb2cucG5nJykgYm90dG9tIHJpZ2h0IDE1JSBuby1yZXBlYXQgIzQ2QjZBQztcXG4gICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgIC5kZW1vLWNhcmQtd2lkZS5tZGwtY2FyZCB7XFxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MTJweDtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIC5kZW1vLWNhcmQtd2lkZSA+IC5tZGwtY2FyZF9fdGl0bGUge1xcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNzZweDtcXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCdodHRwczovL2dldG1kbC5pby9hc3NldHMvZGVtb3Mvd2VsY29tZV9jYXJkLmpwZycpIGNlbnRlciAvIGNvdmVyO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgLmRlbW8tY2FyZC13aWRlID4gLm1kbC1jYXJkX19tZW51IHtcXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICA8L3N0eWxlPlxcblxcblxcbiAgICAgICAgICAgICAgICBgXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuPC9zY3JpcHQ+XFxuXCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi02NmU1ZDdiMSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL2NhcmRzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxoMz5DYXJkczwvaDM+XG5cbiAgICAgICAgPG0tY2FyZCBjbGFzcz1cImRlbW8tY2FyZC1zcXVhcmVcIiB0aXRsZT1cIlVwZGF0ZXNcIiBzdXBwb3J0aW5nLXRleHQ9XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBNYXVyaXMgc2FnaXR0aXMgcGVsbGVudGVzcXVlIGxhY3VzIGVsZWlmZW5kIGxhY2luaWEuLi5cIiBhY3Rpb25zPVwiYWN0aW9uc1wiIGFjdGlvbnMtdGV4dD1cIlVwZGF0ZVwiPjwvbS1jYXJkPlxuXG4gICAgICAgIDxicj5cbiAgICAgICAgPGJyPlxuXG4gICAgICAgIDxtLWNhcmQgY2xhc3M9XCJkZW1vLWNhcmQtd2lkZVwiIHRpdGxlPVwiV2VsY29tZVwiIHN1cHBvcnRpbmctdGV4dD1cIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIE1hdXJpcyBzYWdpdHRpcyBwZWxsZW50ZXNxdWUgbGFjdXMgZWxlaWZlbmQgbGFjaW5pYS4uLlwiIGFjdGlvbnM9XCJhY3Rpb25zXCIgYWN0aW9ucy10ZXh0PVwiR2V0IHN0YXJ0ZWRcIj48L20tY2FyZD5cblxuICAgICAgICA8aHI+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXY+Q29kZTo8L2Rpdj5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBjb2xzPVwiMTUwXCIgcm93cz1cIjQwXCIgOnZhbHVlPVwiZXhhbXBsZXNcIj48L3RleHRhcmVhPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZT5cbi5kZW1vLWNhcmQtc3F1YXJlLm1kbC1jYXJkIHtcbiAgd2lkdGg6IDMyMHB4O1xuICBoZWlnaHQ6IDMyMHB4O1xufVxuLmRlbW8tY2FyZC1zcXVhcmUgPiAubWRsLWNhcmRfX3RpdGxlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly9nZXRtZGwuaW8vYXNzZXRzL2RlbW9zL2RvZy5wbmcnKSBib3R0b20gcmlnaHQgMTUlIG5vLXJlcGVhdCAjNDZCNkFDO1xufVxuXG4uZGVtby1jYXJkLXdpZGUubWRsLWNhcmQge1xuICB3aWR0aDogNTEycHg7XG59XG4uZGVtby1jYXJkLXdpZGUgPiAubWRsLWNhcmRfX3RpdGxlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGhlaWdodDogMTc2cHg7XG4gIGJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly9nZXRtZGwuaW8vYXNzZXRzL2RlbW9zL3dlbGNvbWVfY2FyZC5qcGcnKSBjZW50ZXIgLyBjb3Zlcjtcbn1cbi5kZW1vLWNhcmQtd2lkZSA+IC5tZGwtY2FyZF9fbWVudSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG48L3N0eWxlPlxuXG48c2NyaXB0PlxuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBkYXRhKCl7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGV4YW1wbGVzOiBgXG4gICAgICAgICAgICAgICAgICAgIDxtLWNhcmQgY2xhc3M9XCJkZW1vLWNhcmQtc3F1YXJlXCIgdGl0bGU9XCJVcGRhdGVzXCIgc3VwcG9ydGluZy10ZXh0PVwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gTWF1cmlzIHNhZ2l0dGlzIHBlbGxlbnRlc3F1ZSBsYWN1cyBlbGVpZmVuZCBsYWNpbmlhLi4uXCIgYWN0aW9ucz1cImFjdGlvbnNcIiBhY3Rpb25zLXRleHQ9XCJVcGRhdGVcIj48L20tY2FyZD5cbiAgICAgICAgICAgICAgICAgICAgPG0tY2FyZCBjbGFzcz1cImRlbW8tY2FyZC13aWRlXCIgdGl0bGU9XCJXZWxjb21lXCIgc3VwcG9ydGluZy10ZXh0PVwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gTWF1cmlzIHNhZ2l0dGlzIHBlbGxlbnRlc3F1ZSBsYWN1cyBlbGVpZmVuZCBsYWNpbmlhLi4uXCIgYWN0aW9ucz1cImFjdGlvbnNcIiBhY3Rpb25zLXRleHQ9XCJHZXQgc3RhcnRlZFwiPjwvbS1jYXJkPlxuXG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZT5cbiAgICAgICAgICAgICAgICAgICAgLmRlbW8tY2FyZC1zcXVhcmUubWRsLWNhcmQge1xuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMyMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5kZW1vLWNhcmQtc3F1YXJlID4gLm1kbC1jYXJkX190aXRsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCdodHRwczovL2dldG1kbC5pby9hc3NldHMvZGVtb3MvZG9nLnBuZycpIGJvdHRvbSByaWdodCAxNSUgbm8tcmVwZWF0ICM0NkI2QUM7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuZGVtby1jYXJkLXdpZGUubWRsLWNhcmQge1xuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MTJweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuZGVtby1jYXJkLXdpZGUgPiAubWRsLWNhcmRfX3RpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE3NnB4O1xuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly9nZXRtZGwuaW8vYXNzZXRzL2RlbW9zL3dlbGNvbWVfY2FyZC5qcGcnKSBjZW50ZXIgLyBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuZGVtby1jYXJkLXdpZGUgPiAubWRsLWNhcmRfX21lbnUge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cblxuXG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY2FyZHMudnVlPzQ2M2NiZDJjIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ2gzJywgW192bS5fdihcIkNhcmRzXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtLWNhcmQnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZGVtby1jYXJkLXNxdWFyZVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInRpdGxlXCI6IFwiVXBkYXRlc1wiLFxuICAgICAgXCJzdXBwb3J0aW5nLXRleHRcIjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBNYXVyaXMgc2FnaXR0aXMgcGVsbGVudGVzcXVlIGxhY3VzIGVsZWlmZW5kIGxhY2luaWEuLi5cIixcbiAgICAgIFwiYWN0aW9uc1wiOiBcImFjdGlvbnNcIixcbiAgICAgIFwiYWN0aW9ucy10ZXh0XCI6IFwiVXBkYXRlXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdtLWNhcmQnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZGVtby1jYXJkLXdpZGVcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0aXRsZVwiOiBcIldlbGNvbWVcIixcbiAgICAgIFwic3VwcG9ydGluZy10ZXh0XCI6IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gTWF1cmlzIHNhZ2l0dGlzIHBlbGxlbnRlc3F1ZSBsYWN1cyBlbGVpZmVuZCBsYWNpbmlhLi4uXCIsXG4gICAgICBcImFjdGlvbnNcIjogXCJhY3Rpb25zXCIsXG4gICAgICBcImFjdGlvbnMtdGV4dFwiOiBcIkdldCBzdGFydGVkXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaHInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIFtfYygnZGl2JywgW192bS5fdihcIkNvZGU6XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCd0ZXh0YXJlYScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJjb2xzXCI6IFwiMTUwXCIsXG4gICAgICBcInJvd3NcIjogXCI0MFwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0uZXhhbXBsZXNcbiAgICB9XG4gIH0pXSldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi02NmU1ZDdiMVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNjZlNWQ3YjEhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL2NhcmRzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vY2hpcHMudnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi03NjcwMjNmNSF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9jaGlwcy52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiL1VzZXJzL296L3NyYy9tYXRlcmlhbC1jb21wb25lbnRzL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL2NoaXBzLnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNzY3MDIzZjVcIiwgX192dWVfb3B0aW9uc19fKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNzY3MDIzZjVcIiwgX192dWVfb3B0aW9uc19fKVxuICB9XG59KSgpfVxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBjaGlwcy52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9jaGlwcy52dWUiLCI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPGgzPkNoaXBzPC9oMz5cblxuICAgICAgICA8bS1jaGlwIGNvbnRhY3Q9XCJBXCI+QmFzaWMgQ2hpcDwvbS1jaGlwPlxuICAgICAgICA8bS1jaGlwIGNvbnRhY3QtaW1hZ2U9XCJodHRwczovL2dldG1kbC5pby90ZW1wbGF0ZXMvZGFzaGJvYXJkL2ltYWdlcy91c2VyLmpwZ1wiPkRlbGV0YWJsZSBDb250YWN0IENoaXA8L20tY2hpcD5cblxuXG4gICAgICAgIDxtLWNoaXAgY29udGFjdD1cIkFcIiBAZGVsZXRlPVwiZGVsXCIgdi1pZj1cInNob3dDaGlwXCI+QmFzaWMgQ2hpcDwvbS1jaGlwPlxuXG4gICAgICAgIDxtLXNuYWNrYmFyIGRpc3BsYXktb249XCJtc2dTZW50XCI+PC9tLXNuYWNrYmFyPlxuXG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXY+Q29kZTo8L2Rpdj5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBjb2xzPVwiMTEwXCIgcm93cz1cIjEwXCIgOnZhbHVlPVwiZXhhbXBsZXNcIj48L3RleHRhcmVhPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHR7XG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGRlbCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dDaGlwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy4kcm9vdC4kZW1pdCgnbXNnU2VudCcsIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ0RlbGV0ZWQnLFxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25UZXh0OiAnVW5kbycsXG4gICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ6IDMwMDAsXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbkhhbmRsZXI6IChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0NoaXAgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkYXRhKCl7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHNob3dDaGlwOiB0cnVlLFxuICAgICAgICAgICAgICAgIGV4YW1wbGVzOiBgXG4gICAgICAgICAgICAgICAgICAgIDxtLWNoaXAgY29udGFjdD1cIkFcIj5CYXNpYyBDaGlwPC9tLWNoaXA+XG4gICAgICAgICAgICAgICAgICAgIDxtLWNoaXAgY29udGFjdC1pbWFnZT1cImh0dHBzOi8vZ2V0bWRsLmlvL3RlbXBsYXRlcy9kYXNoYm9hcmQvaW1hZ2VzL3VzZXIuanBnXCI+RGVsZXRhYmxlIENvbnRhY3QgQ2hpcDwvbS1jaGlwPlxuXG4gICAgICAgICAgICAgICAgICAgIDxtLWNoaXAgY29udGFjdD1cIkFcIiBAZGVsZXRlPVwiZGVsXCIgdi1pZj1cInNob3dDaGlwXCI+QmFzaWMgQ2hpcDwvbS1jaGlwPlxuXG4gICAgICAgICAgICAgICAgICAgIDxtLXNuYWNrYmFyIGRpc3BsYXktb249XCJtc2dTZW50XCI+PC9tLXNuYWNrYmFyPlxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNoaXBzLnZ1ZT83Y2VmYzE0NiIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW19jKCdoMycsIFtfdm0uX3YoXCJDaGlwc1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS1jaGlwJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImNvbnRhY3RcIjogXCJBXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJCYXNpYyBDaGlwXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtLWNoaXAnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiY29udGFjdC1pbWFnZVwiOiBcImh0dHBzOi8vZ2V0bWRsLmlvL3RlbXBsYXRlcy9kYXNoYm9hcmQvaW1hZ2VzL3VzZXIuanBnXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJEZWxldGFibGUgQ29udGFjdCBDaGlwXCIpXSksIF92bS5fdihcIiBcIiksIChfdm0uc2hvd0NoaXApID8gX2MoJ20tY2hpcCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJjb250YWN0XCI6IFwiQVwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJkZWxldGVcIjogX3ZtLmRlbFxuICAgIH1cbiAgfSwgW192bS5fdihcIkJhc2ljIENoaXBcIildKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfYygnbS1zbmFja2JhcicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJkaXNwbGF5LW9uXCI6IFwibXNnU2VudFwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIFtfYygnZGl2JywgW192bS5fdihcIkNvZGU6XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCd0ZXh0YXJlYScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJjb2xzXCI6IFwiMTEwXCIsXG4gICAgICBcInJvd3NcIjogXCIxMFwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0uZXhhbXBsZXNcbiAgICB9XG4gIH0pXSldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi03NjcwMjNmNVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNzY3MDIzZjUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL2NoaXBzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTJjOGFlYWUzIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9saXN0cy52dWVcIilcblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2xpc3RzLnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMmM4YWVhZTMhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vbGlzdHMudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIi9Vc2Vycy9vei9zcmMvbWF0ZXJpYWwtY29tcG9uZW50cy9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9saXN0cy52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTJjOGFlYWUzXCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTJjOGFlYWUzXCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfVxufSkoKX1cbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gbGlzdHMudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvbGlzdHMudnVlIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0yYzhhZWFlMyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vbGlzdHMudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0yYzhhZWFlMyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vbGlzdHMudnVlXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMmM4YWVhZTMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2xpc3RzLnZ1ZVwiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMmM4YWVhZTMhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9saXN0cy52dWVcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmRlbW8tbGlzdC1pdGVtIHtcXG4gIHdpZHRoOiAzMDBweDtcXG59XFxuLmRlbW8tbGlzdC10aHJlZSB7XFxuICB3aWR0aDogNjUwcHg7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9saXN0cy52dWU/MmE0ZmZhMDJcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQW1HQTtFQUNBLGFBQUE7Q0FDQTtBQUVBO0VBQ0EsYUFBQTtDQUNBXCIsXCJmaWxlXCI6XCJsaXN0cy52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgICA8ZGl2PlxcbiAgICAgICAgPGgzPkxpc3RzPC9oMz5cXG5cXG4gICAgICAgIDxtLWxpc3QgY2xhc3M9XFxcImRlbW8tbGlzdC1pdGVtXFxcIj5cXG4gICAgICAgICAgICA8bS1saXN0LWl0ZW0+QnJ5YW4gQ3JhbnN0b248L20tbGlzdC1pdGVtPlxcbiAgICAgICAgICAgIDxtLWxpc3QtaXRlbT5BYXJvbiBQYXVsPC9tLWxpc3QtaXRlbT5cXG4gICAgICAgICAgICA8bS1saXN0LWl0ZW0+Qm9iIE9kZW5raXJrPC9tLWxpc3QtaXRlbT5cXG4gICAgICAgIDwvbS1saXN0PlxcblxcbiAgICAgICAgPGRpdj5cXG4gICAgICAgICAgICA8ZGl2PkNvZGU6PC9kaXY+XFxuICAgICAgICAgICAgPHRleHRhcmVhIGNvbHM9XFxcIjExMFxcXCIgcm93cz1cXFwiMTBcXFwiIDp2YWx1ZT1cXFwiZXhhbXBsZXMxXFxcIj48L3RleHRhcmVhPlxcbiAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICA8aHI+XFxuXFxuICAgICAgICA8bS1saXN0IGNsYXNzPVxcXCJkZW1vLWxpc3QtaXRlbVxcXCI+XFxuICAgICAgICAgICAgPG0tbGlzdC1pdGVtIGljb249XFxcInBlcnNvblxcXCI+QnJ5YW4gQ3JhbnN0b248L20tbGlzdC1pdGVtPlxcbiAgICAgICAgICAgIDxtLWxpc3QtaXRlbSBpY29uPVxcXCJwZXJzb25cXFwiPkFhcm9uIFBhdWw8L20tbGlzdC1pdGVtPlxcbiAgICAgICAgICAgIDxtLWxpc3QtaXRlbSBpY29uPVxcXCJwZXJzb25cXFwiPkJvYiBPZGVua2lyazwvbS1saXN0LWl0ZW0+XFxuICAgICAgICA8L20tbGlzdD5cXG5cXG4gICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgPGRpdj5Db2RlOjwvZGl2PlxcbiAgICAgICAgICAgIDx0ZXh0YXJlYSBjb2xzPVxcXCIxMTBcXFwiIHJvd3M9XFxcIjEwXFxcIiA6dmFsdWU9XFxcImV4YW1wbGVzMlxcXCI+PC90ZXh0YXJlYT5cXG4gICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgPGhyPlxcblxcbiAgICAgICAgPG0tbGlzdCBjbGFzcz1cXFwiZGVtby1saXN0LWl0ZW1cXFwiPlxcbiAgICAgICAgICAgIDxtLWxpc3QtaXRlbSBpY29uLWF2YXRhcj1cXFwicGVyc29uXFxcIj5CcnlhbiBDcmFuc3RvbjwvbS1saXN0LWl0ZW0+XFxuICAgICAgICAgICAgPG0tbGlzdC1pdGVtIGljb24tYXZhdGFyPVxcXCJwZXJzb25cXFwiPkFhcm9uIFBhdWw8L20tbGlzdC1pdGVtPlxcbiAgICAgICAgICAgIDxtLWxpc3QtaXRlbSBpY29uLWF2YXRhcj1cXFwicGVyc29uXFxcIj5Cb2IgT2Rlbmtpcms8L20tbGlzdC1pdGVtPlxcbiAgICAgICAgPC9tLWxpc3Q+XFxuXFxuICAgICAgICA8ZGl2PlxcbiAgICAgICAgICAgIDxkaXY+Q29kZTo8L2Rpdj5cXG4gICAgICAgICAgICA8dGV4dGFyZWEgY29scz1cXFwiMTEwXFxcIiByb3dzPVxcXCIxMFxcXCIgOnZhbHVlPVxcXCJleGFtcGxlczNcXFwiPjwvdGV4dGFyZWE+XFxuICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgIDxocj5cXG5cXG4gICAgICAgIDxtLWxpc3QgY2xhc3M9XFxcImRlbW8tbGlzdC1pdGVtXFxcIj5cXG4gICAgICAgICAgICA8bS1saXN0LWl0ZW0gaWNvbi1hdmF0YXI9XFxcInBlcnNvblxcXCIgdi1mb3I9XFxcInBlcnNvbiBpbiBwZW9wbGVcXFwiPlxcbiAgICAgICAgICAgICAgICB7e3BlcnNvbi5uYW1lfX1cXG5cXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XFxcImFjdGlvblxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8bS1zd2l0Y2ggdi1tb2RlbD1cXFwicGVyc29uLm9uXFxcIj48L20tc3dpdGNoPlxcbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxcbiAgICAgICAgICAgIDwvbS1saXN0LWl0ZW0+XFxuICAgICAgICA8L20tbGlzdD5cXG5cXG4gICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgPGRpdj5Db2RlOjwvZGl2PlxcbiAgICAgICAgICAgIDx0ZXh0YXJlYSBjb2xzPVxcXCIxMTBcXFwiIHJvd3M9XFxcIjEwXFxcIiA6dmFsdWU9XFxcImV4YW1wbGVzNFxcXCI+PC90ZXh0YXJlYT5cXG4gICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgPGhyPlxcblxcbiAgICAgICAgPG0tbGlzdCBjbGFzcz1cXFwiZGVtby1saXN0LWl0ZW1cXFwiPlxcbiAgICAgICAgICAgIDxtLWxpc3QtaXRlbSBpY29uLWF2YXRhcj1cXFwicGVyc29uXFxcIiB2LWZvcj1cXFwicGVyc29uIGluIHBlb3BsZVxcXCIgOnN1Yi10aXRsZT1cXFwicGVyc29uLnN1YlxcXCI+XFxuICAgICAgICAgICAgICAgIHt7cGVyc29uLm5hbWV9fVxcblxcbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cXFwiYWN0aW9uXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJtZGwtbGlzdF9faXRlbS1zZWNvbmRhcnktYWN0aW9uXFxcIiBocmVmPVxcXCIjXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwibWF0ZXJpYWwtaWNvbnNcXFwiPnN0YXI8L2k+XFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxuICAgICAgICAgICAgPC9tLWxpc3QtaXRlbT5cXG4gICAgICAgIDwvbS1saXN0PlxcblxcbiAgICAgICAgPGRpdj5cXG4gICAgICAgICAgICA8ZGl2PkNvZGU6PC9kaXY+XFxuICAgICAgICAgICAgPHRleHRhcmVhIGNvbHM9XFxcIjExMFxcXCIgcm93cz1cXFwiMTBcXFwiIDp2YWx1ZT1cXFwiZXhhbXBsZXM1XFxcIj48L3RleHRhcmVhPlxcbiAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICA8aHI+XFxuXFxuICAgICAgICA8bS1saXN0IGNsYXNzPVxcXCJkZW1vLWxpc3QtdGhyZWVcXFwiPlxcbiAgICAgICAgICAgIDxtLWxpc3QtaXRlbSBpY29uLWF2YXRhcj1cXFwicGVyc29uXFxcIiB2LWZvcj1cXFwicGVyc29uIGluIHBlb3BsZVxcXCIgOnRleHQ9XFxcInBlcnNvbi50ZXh0XFxcIj5cXG4gICAgICAgICAgICAgICAge3twZXJzb24ubmFtZX19XFxuXFxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVxcXCJhY3Rpb25cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcIm1kbC1saXN0X19pdGVtLXNlY29uZGFyeS1hY3Rpb25cXFwiIGhyZWY9XFxcIiNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJtYXRlcmlhbC1pY29uc1xcXCI+c3RhcjwvaT5cXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXG4gICAgICAgICAgICA8L20tbGlzdC1pdGVtPlxcbiAgICAgICAgPC9tLWxpc3Q+XFxuXFxuICAgICAgICA8ZGl2PlxcbiAgICAgICAgICAgIDxkaXY+Q29kZTo8L2Rpdj5cXG4gICAgICAgICAgICA8dGV4dGFyZWEgY29scz1cXFwiMTEwXFxcIiByb3dzPVxcXCIxMFxcXCIgOnZhbHVlPVxcXCJleGFtcGxlczZcXFwiPjwvdGV4dGFyZWE+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c3R5bGU+XFxuLmRlbW8tbGlzdC1pdGVtIHtcXG4gIHdpZHRoOiAzMDBweDtcXG59XFxuXFxuLmRlbW8tbGlzdC10aHJlZSB7XFxuICB3aWR0aDogNjUwcHg7XFxufVxcbjwvc3R5bGU+XFxuXFxuPHNjcmlwdD5cXG4gICAgZXhwb3J0IGRlZmF1bHR7XFxuICAgICAgICBtZXRob2RzOiB7XFxuICAgICAgICB9LFxcbiAgICAgICAgZGF0YSgpe1xcbiAgICAgICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgICAgIHBlb3BsZTogW1xcbiAgICAgICAgICAgICAgICAgICAge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICduYW1lJzogJ0JyeWFuIENyYW5zdG9uJyxcXG4gICAgICAgICAgICAgICAgICAgICAgICAndGV4dCc6ICdCcnlhbiBDcmFuc3RvbiBwbGF5ZWQgdGhlIHJvbGUgb2YgV2FsdGVyIGluIEJyZWFraW5nIEJhZC4gSGUgaXMgYWxzbyBrbm93biBmb3IgcGxheWluZyBIYWwgaW4gTWFsY29tIGluIHRoZSBNaWRkbGUuJyxcXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjogdHJ1ZSxcXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWI6ICc2MiBFcGlzb2RlcycsXFxuICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICAgICAge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICduYW1lJzogJ0Fhcm9uIFBhdWwnLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdBYXJvbiBQYXVsIHBsYXllZCB0aGUgcm9sZSBvZiBKZXNzZSBpbiBCcmVha2luZyBCYWQuIEhlIGFsc28gZmVhdHVyZWQgaW4gdGhlIFxcXCJOZWVkIEZvciBTcGVlZFxcXCIgTW92aWUuJyxcXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjogZmFsc2UsXFxuICAgICAgICAgICAgICAgICAgICAgICAgc3ViOiAnNTIgRXBpc29kZXMnLFxcbiAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgICAgIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAnbmFtZSc6ICdCb2IgT2RlbmtpcmsnLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB0cnVlLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdCb2IgT2RpbmtyaWsgcGxheWVkIHRoZSByb2xlIG9mIFNhdWwgaW4gQnJlYWtpbmcgQmFkLiBEdWUgdG8gcHVibGljIGZvbmRuZXNzIGZvciB0aGUgY2hhcmFjdGVyLCBCb2Igc3RhcnMgaW4gaGlzIG93biBzaG93IG5vdywgY2FsbGVkIFxcXCJCZXR0ZXIgQ2FsbCBTYXVsXFxcIi4nLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YjogJzMyIEVwaXNvZGVzJyxcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIF0sXFxuICAgICAgICAgICAgICAgIGV4YW1wbGVzMTogYFxcbiAgICAgICAgICAgICAgICAgICAgPG0tbGlzdCBjbGFzcz1cXFwiZGVtby1saXN0LWl0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxtLWxpc3QtaXRlbT5CcnlhbiBDcmFuc3RvbjwvbS1saXN0LWl0ZW0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPG0tbGlzdC1pdGVtPkFhcm9uIFBhdWw8L20tbGlzdC1pdGVtPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxtLWxpc3QtaXRlbT5Cb2IgT2Rlbmtpcms8L20tbGlzdC1pdGVtPlxcbiAgICAgICAgICAgICAgICAgICAgPC9tLWxpc3Q+XFxuICAgICAgICAgICAgICAgIGAsXFxuICAgICAgICAgICAgICAgIGV4YW1wbGVzMjogYFxcbiAgICAgICAgICAgICAgICAgICAgPG0tbGlzdCBjbGFzcz1cXFwiZGVtby1saXN0LWl0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxtLWxpc3QtaXRlbSBpY29uPVxcXCJwZXJzb25cXFwiPkJyeWFuIENyYW5zdG9uPC9tLWxpc3QtaXRlbT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8bS1saXN0LWl0ZW0gaWNvbj1cXFwicGVyc29uXFxcIj5BYXJvbiBQYXVsPC9tLWxpc3QtaXRlbT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8bS1saXN0LWl0ZW0gaWNvbj1cXFwicGVyc29uXFxcIj5Cb2IgT2Rlbmtpcms8L20tbGlzdC1pdGVtPlxcbiAgICAgICAgICAgICAgICAgICAgPC9tLWxpc3Q+XFxuICAgICAgICAgICAgICAgIGAsXFxuICAgICAgICAgICAgICAgIGV4YW1wbGVzMzogYFxcbiAgICAgICAgICAgICAgICAgICAgPG0tbGlzdCBjbGFzcz1cXFwiZGVtby1saXN0LWl0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxtLWxpc3QtaXRlbSBpY29uLWF2YXRhcj1cXFwicGVyc29uXFxcIj5CcnlhbiBDcmFuc3RvbjwvbS1saXN0LWl0ZW0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPG0tbGlzdC1pdGVtIGljb24tYXZhdGFyPVxcXCJwZXJzb25cXFwiPkFhcm9uIFBhdWw8L20tbGlzdC1pdGVtPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxtLWxpc3QtaXRlbSBpY29uLWF2YXRhcj1cXFwicGVyc29uXFxcIj5Cb2IgT2Rlbmtpcms8L20tbGlzdC1pdGVtPlxcbiAgICAgICAgICAgICAgICAgICAgPC9tLWxpc3Q+XFxuICAgICAgICAgICAgICAgIGAsXFxuICAgICAgICAgICAgICAgIGV4YW1wbGVzNDogYFxcbiAgICAgICAgICAgICAgICAgICAgPG0tbGlzdCBjbGFzcz1cXFwiZGVtby1saXN0LWl0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxtLWxpc3QtaXRlbSBpY29uLWF2YXRhcj1cXFwicGVyc29uXFxcIiB2LWZvcj1cXFwicGVyc29uIGluIHBlb3BsZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7cGVyc29uLm5hbWV9fVxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cXFwiYWN0aW9uXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtLXN3aXRjaCB2LW1vZGVsPVxcXCJwZXJzb24ub25cXFwiPjwvbS1zd2l0Y2g+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9tLWxpc3QtaXRlbT5cXG4gICAgICAgICAgICAgICAgICAgIDwvbS1saXN0PlxcbiAgICAgICAgICAgICAgICBgLFxcbiAgICAgICAgICAgICAgICBleGFtcGxlczU6IGBcXG4gICAgICAgICAgICAgICAgICAgIDxtLWxpc3QgY2xhc3M9XFxcImRlbW8tbGlzdC1pdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgPG0tbGlzdC1pdGVtIGljb24tYXZhdGFyPVxcXCJwZXJzb25cXFwiIHYtZm9yPVxcXCJwZXJzb24gaW4gcGVvcGxlXFxcIiA6c3ViLXRpdGxlPVxcXCJwZXJzb24uc3ViXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3twZXJzb24ubmFtZX19XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVxcXCJhY3Rpb25cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcIm1kbC1saXN0X19pdGVtLXNlY29uZGFyeS1hY3Rpb25cXFwiIGhyZWY9XFxcIiNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJtYXRlcmlhbC1pY29uc1xcXCI+c3RhcjwvaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L20tbGlzdC1pdGVtPlxcbiAgICAgICAgICAgICAgICAgICAgPC9tLWxpc3Q+XFxuICAgICAgICAgICAgICAgIGAsXFxuICAgICAgICAgICAgICAgIGV4YW1wbGVzNjogYFxcbiAgICAgICAgICAgICAgICAgICAgPG0tbGlzdCBjbGFzcz1cXFwiZGVtby1saXN0LXRocmVlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8bS1saXN0LWl0ZW0gaWNvbi1hdmF0YXI9XFxcInBlcnNvblxcXCIgdi1mb3I9XFxcInBlcnNvbiBpbiBwZW9wbGVcXFwiIDp0ZXh0PVxcXCJwZXJzb24udGV4dFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7cGVyc29uLm5hbWV9fVxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cXFwiYWN0aW9uXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJtZGwtbGlzdF9faXRlbS1zZWNvbmRhcnktYWN0aW9uXFxcIiBocmVmPVxcXCIjXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwibWF0ZXJpYWwtaWNvbnNcXFwiPnN0YXI8L2k+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9tLWxpc3QtaXRlbT5cXG4gICAgICAgICAgICAgICAgICAgIDwvbS1saXN0PlxcbiAgICAgICAgICAgICAgICBgLFxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbjwvc2NyaXB0PlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMmM4YWVhZTMhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9saXN0cy52dWVcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8aDM+TGlzdHM8L2gzPlxuXG4gICAgICAgIDxtLWxpc3QgY2xhc3M9XCJkZW1vLWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgPG0tbGlzdC1pdGVtPkJyeWFuIENyYW5zdG9uPC9tLWxpc3QtaXRlbT5cbiAgICAgICAgICAgIDxtLWxpc3QtaXRlbT5BYXJvbiBQYXVsPC9tLWxpc3QtaXRlbT5cbiAgICAgICAgICAgIDxtLWxpc3QtaXRlbT5Cb2IgT2Rlbmtpcms8L20tbGlzdC1pdGVtPlxuICAgICAgICA8L20tbGlzdD5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdj5Db2RlOjwvZGl2PlxuICAgICAgICAgICAgPHRleHRhcmVhIGNvbHM9XCIxMTBcIiByb3dzPVwiMTBcIiA6dmFsdWU9XCJleGFtcGxlczFcIj48L3RleHRhcmVhPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8aHI+XG5cbiAgICAgICAgPG0tbGlzdCBjbGFzcz1cImRlbW8tbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICA8bS1saXN0LWl0ZW0gaWNvbj1cInBlcnNvblwiPkJyeWFuIENyYW5zdG9uPC9tLWxpc3QtaXRlbT5cbiAgICAgICAgICAgIDxtLWxpc3QtaXRlbSBpY29uPVwicGVyc29uXCI+QWFyb24gUGF1bDwvbS1saXN0LWl0ZW0+XG4gICAgICAgICAgICA8bS1saXN0LWl0ZW0gaWNvbj1cInBlcnNvblwiPkJvYiBPZGVua2lyazwvbS1saXN0LWl0ZW0+XG4gICAgICAgIDwvbS1saXN0PlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2PkNvZGU6PC9kaXY+XG4gICAgICAgICAgICA8dGV4dGFyZWEgY29scz1cIjExMFwiIHJvd3M9XCIxMFwiIDp2YWx1ZT1cImV4YW1wbGVzMlwiPjwvdGV4dGFyZWE+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxocj5cblxuICAgICAgICA8bS1saXN0IGNsYXNzPVwiZGVtby1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgIDxtLWxpc3QtaXRlbSBpY29uLWF2YXRhcj1cInBlcnNvblwiPkJyeWFuIENyYW5zdG9uPC9tLWxpc3QtaXRlbT5cbiAgICAgICAgICAgIDxtLWxpc3QtaXRlbSBpY29uLWF2YXRhcj1cInBlcnNvblwiPkFhcm9uIFBhdWw8L20tbGlzdC1pdGVtPlxuICAgICAgICAgICAgPG0tbGlzdC1pdGVtIGljb24tYXZhdGFyPVwicGVyc29uXCI+Qm9iIE9kZW5raXJrPC9tLWxpc3QtaXRlbT5cbiAgICAgICAgPC9tLWxpc3Q+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXY+Q29kZTo8L2Rpdj5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBjb2xzPVwiMTEwXCIgcm93cz1cIjEwXCIgOnZhbHVlPVwiZXhhbXBsZXMzXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGhyPlxuXG4gICAgICAgIDxtLWxpc3QgY2xhc3M9XCJkZW1vLWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgPG0tbGlzdC1pdGVtIGljb24tYXZhdGFyPVwicGVyc29uXCIgdi1mb3I9XCJwZXJzb24gaW4gcGVvcGxlXCI+XG4gICAgICAgICAgICAgICAge3twZXJzb24ubmFtZX19XG5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cImFjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICA8bS1zd2l0Y2ggdi1tb2RlbD1cInBlcnNvbi5vblwiPjwvbS1zd2l0Y2g+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvbS1saXN0LWl0ZW0+XG4gICAgICAgIDwvbS1saXN0PlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2PkNvZGU6PC9kaXY+XG4gICAgICAgICAgICA8dGV4dGFyZWEgY29scz1cIjExMFwiIHJvd3M9XCIxMFwiIDp2YWx1ZT1cImV4YW1wbGVzNFwiPjwvdGV4dGFyZWE+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxocj5cblxuICAgICAgICA8bS1saXN0IGNsYXNzPVwiZGVtby1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgIDxtLWxpc3QtaXRlbSBpY29uLWF2YXRhcj1cInBlcnNvblwiIHYtZm9yPVwicGVyc29uIGluIHBlb3BsZVwiIDpzdWItdGl0bGU9XCJwZXJzb24uc3ViXCI+XG4gICAgICAgICAgICAgICAge3twZXJzb24ubmFtZX19XG5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cImFjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm1kbC1saXN0X19pdGVtLXNlY29uZGFyeS1hY3Rpb25cIiBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPnN0YXI8L2k+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPC9tLWxpc3QtaXRlbT5cbiAgICAgICAgPC9tLWxpc3Q+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXY+Q29kZTo8L2Rpdj5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBjb2xzPVwiMTEwXCIgcm93cz1cIjEwXCIgOnZhbHVlPVwiZXhhbXBsZXM1XCI+PC90ZXh0YXJlYT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGhyPlxuXG4gICAgICAgIDxtLWxpc3QgY2xhc3M9XCJkZW1vLWxpc3QtdGhyZWVcIj5cbiAgICAgICAgICAgIDxtLWxpc3QtaXRlbSBpY29uLWF2YXRhcj1cInBlcnNvblwiIHYtZm9yPVwicGVyc29uIGluIHBlb3BsZVwiIDp0ZXh0PVwicGVyc29uLnRleHRcIj5cbiAgICAgICAgICAgICAgICB7e3BlcnNvbi5uYW1lfX1cblxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwiYWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibWRsLWxpc3RfX2l0ZW0tc2Vjb25kYXJ5LWFjdGlvblwiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+c3RhcjwvaT5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L20tbGlzdC1pdGVtPlxuICAgICAgICA8L20tbGlzdD5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdj5Db2RlOjwvZGl2PlxuICAgICAgICAgICAgPHRleHRhcmVhIGNvbHM9XCIxMTBcIiByb3dzPVwiMTBcIiA6dmFsdWU9XCJleGFtcGxlczZcIj48L3RleHRhcmVhPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZT5cbi5kZW1vLWxpc3QtaXRlbSB7XG4gIHdpZHRoOiAzMDBweDtcbn1cblxuLmRlbW8tbGlzdC10aHJlZSB7XG4gIHdpZHRoOiA2NTBweDtcbn1cbjwvc3R5bGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHR7XG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YSgpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBwZW9wbGU6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ25hbWUnOiAnQnJ5YW4gQ3JhbnN0b24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQnOiAnQnJ5YW4gQ3JhbnN0b24gcGxheWVkIHRoZSByb2xlIG9mIFdhbHRlciBpbiBCcmVha2luZyBCYWQuIEhlIGlzIGFsc28ga25vd24gZm9yIHBsYXlpbmcgSGFsIGluIE1hbGNvbSBpbiB0aGUgTWlkZGxlLicsXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YjogJzYyIEVwaXNvZGVzJyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ25hbWUnOiAnQWFyb24gUGF1bCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnQWFyb24gUGF1bCBwbGF5ZWQgdGhlIHJvbGUgb2YgSmVzc2UgaW4gQnJlYWtpbmcgQmFkLiBIZSBhbHNvIGZlYXR1cmVkIGluIHRoZSBcIk5lZWQgRm9yIFNwZWVkXCIgTW92aWUuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YjogJzUyIEVwaXNvZGVzJyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ25hbWUnOiAnQm9iIE9kZW5raXJrJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0JvYiBPZGlua3JpayBwbGF5ZWQgdGhlIHJvbGUgb2YgU2F1bCBpbiBCcmVha2luZyBCYWQuIER1ZSB0byBwdWJsaWMgZm9uZG5lc3MgZm9yIHRoZSBjaGFyYWN0ZXIsIEJvYiBzdGFycyBpbiBoaXMgb3duIHNob3cgbm93LCBjYWxsZWQgXCJCZXR0ZXIgQ2FsbCBTYXVsXCIuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YjogJzMyIEVwaXNvZGVzJyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGV4YW1wbGVzMTogYFxuICAgICAgICAgICAgICAgICAgICA8bS1saXN0IGNsYXNzPVwiZGVtby1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtLWxpc3QtaXRlbT5CcnlhbiBDcmFuc3RvbjwvbS1saXN0LWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bS1saXN0LWl0ZW0+QWFyb24gUGF1bDwvbS1saXN0LWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bS1saXN0LWl0ZW0+Qm9iIE9kZW5raXJrPC9tLWxpc3QtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPC9tLWxpc3Q+XG4gICAgICAgICAgICAgICAgYCxcbiAgICAgICAgICAgICAgICBleGFtcGxlczI6IGBcbiAgICAgICAgICAgICAgICAgICAgPG0tbGlzdCBjbGFzcz1cImRlbW8tbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bS1saXN0LWl0ZW0gaWNvbj1cInBlcnNvblwiPkJyeWFuIENyYW5zdG9uPC9tLWxpc3QtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtLWxpc3QtaXRlbSBpY29uPVwicGVyc29uXCI+QWFyb24gUGF1bDwvbS1saXN0LWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bS1saXN0LWl0ZW0gaWNvbj1cInBlcnNvblwiPkJvYiBPZGVua2lyazwvbS1saXN0LWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDwvbS1saXN0PlxuICAgICAgICAgICAgICAgIGAsXG4gICAgICAgICAgICAgICAgZXhhbXBsZXMzOiBgXG4gICAgICAgICAgICAgICAgICAgIDxtLWxpc3QgY2xhc3M9XCJkZW1vLWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG0tbGlzdC1pdGVtIGljb24tYXZhdGFyPVwicGVyc29uXCI+QnJ5YW4gQ3JhbnN0b248L20tbGlzdC1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG0tbGlzdC1pdGVtIGljb24tYXZhdGFyPVwicGVyc29uXCI+QWFyb24gUGF1bDwvbS1saXN0LWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bS1saXN0LWl0ZW0gaWNvbi1hdmF0YXI9XCJwZXJzb25cIj5Cb2IgT2Rlbmtpcms8L20tbGlzdC1pdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L20tbGlzdD5cbiAgICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgICAgIGV4YW1wbGVzNDogYFxuICAgICAgICAgICAgICAgICAgICA8bS1saXN0IGNsYXNzPVwiZGVtby1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtLWxpc3QtaXRlbSBpY29uLWF2YXRhcj1cInBlcnNvblwiIHYtZm9yPVwicGVyc29uIGluIHBlb3BsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7cGVyc29uLm5hbWV9fVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJhY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG0tc3dpdGNoIHYtbW9kZWw9XCJwZXJzb24ub25cIj48L20tc3dpdGNoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L20tbGlzdC1pdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L20tbGlzdD5cbiAgICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgICAgIGV4YW1wbGVzNTogYFxuICAgICAgICAgICAgICAgICAgICA8bS1saXN0IGNsYXNzPVwiZGVtby1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8bS1saXN0LWl0ZW0gaWNvbi1hdmF0YXI9XCJwZXJzb25cIiB2LWZvcj1cInBlcnNvbiBpbiBwZW9wbGVcIiA6c3ViLXRpdGxlPVwicGVyc29uLnN1YlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7cGVyc29uLm5hbWV9fVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJhY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJtZGwtbGlzdF9faXRlbS1zZWNvbmRhcnktYWN0aW9uXCIgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5zdGFyPC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbS1saXN0LWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDwvbS1saXN0PlxuICAgICAgICAgICAgICAgIGAsXG4gICAgICAgICAgICAgICAgZXhhbXBsZXM2OiBgXG4gICAgICAgICAgICAgICAgICAgIDxtLWxpc3QgY2xhc3M9XCJkZW1vLWxpc3QtdGhyZWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtLWxpc3QtaXRlbSBpY29uLWF2YXRhcj1cInBlcnNvblwiIHYtZm9yPVwicGVyc29uIGluIHBlb3BsZVwiIDp0ZXh0PVwicGVyc29uLnRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3BlcnNvbi5uYW1lfX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwiYWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibWRsLWxpc3RfX2l0ZW0tc2Vjb25kYXJ5LWFjdGlvblwiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+c3RhcjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L20tbGlzdC1pdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L20tbGlzdD5cbiAgICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbGlzdHMudnVlPzJhNGZmYTAyIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ2gzJywgW192bS5fdihcIkxpc3RzXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtLWxpc3QnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZGVtby1saXN0LWl0ZW1cIlxuICB9LCBbX2MoJ20tbGlzdC1pdGVtJywgW192bS5fdihcIkJyeWFuIENyYW5zdG9uXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtLWxpc3QtaXRlbScsIFtfdm0uX3YoXCJBYXJvbiBQYXVsXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtLWxpc3QtaXRlbScsIFtfdm0uX3YoXCJCb2IgT2RlbmtpcmtcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2JywgW19jKCdkaXYnLCBbX3ZtLl92KFwiQ29kZTpcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RleHRhcmVhJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImNvbHNcIjogXCIxMTBcIixcbiAgICAgIFwicm93c1wiOiBcIjEwXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5leGFtcGxlczFcbiAgICB9XG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdocicpLCBfdm0uX3YoXCIgXCIpLCBfYygnbS1saXN0Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRlbW8tbGlzdC1pdGVtXCJcbiAgfSwgW19jKCdtLWxpc3QtaXRlbScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJpY29uXCI6IFwicGVyc29uXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJCcnlhbiBDcmFuc3RvblwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS1saXN0LWl0ZW0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWNvblwiOiBcInBlcnNvblwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiQWFyb24gUGF1bFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS1saXN0LWl0ZW0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWNvblwiOiBcInBlcnNvblwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiQm9iIE9kZW5raXJrXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIFtfYygnZGl2JywgW192bS5fdihcIkNvZGU6XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCd0ZXh0YXJlYScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJjb2xzXCI6IFwiMTEwXCIsXG4gICAgICBcInJvd3NcIjogXCIxMFwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0uZXhhbXBsZXMyXG4gICAgfVxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaHInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tbGlzdCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkZW1vLWxpc3QtaXRlbVwiXG4gIH0sIFtfYygnbS1saXN0LWl0ZW0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWNvbi1hdmF0YXJcIjogXCJwZXJzb25cIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkJyeWFuIENyYW5zdG9uXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtLWxpc3QtaXRlbScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJpY29uLWF2YXRhclwiOiBcInBlcnNvblwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiQWFyb24gUGF1bFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS1saXN0LWl0ZW0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWNvbi1hdmF0YXJcIjogXCJwZXJzb25cIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkJvYiBPZGVua2lya1wiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCBbX2MoJ2RpdicsIFtfdm0uX3YoXCJDb2RlOlwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndGV4dGFyZWEnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiY29sc1wiOiBcIjExMFwiLFxuICAgICAgXCJyb3dzXCI6IFwiMTBcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLmV4YW1wbGVzM1xuICAgIH1cbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2hyJyksIF92bS5fdihcIiBcIiksIF9jKCdtLWxpc3QnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZGVtby1saXN0LWl0ZW1cIlxuICB9LCBfdm0uX2woKF92bS5wZW9wbGUpLCBmdW5jdGlvbihwZXJzb24pIHtcbiAgICByZXR1cm4gX2MoJ20tbGlzdC1pdGVtJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJpY29uLWF2YXRhclwiOiBcInBlcnNvblwiXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgIFwiICsgX3ZtLl9zKHBlcnNvbi5uYW1lKSArIFwiXFxuXFxuICAgICAgICAgICAgXCIpLCBfYygndGVtcGxhdGUnLCB7XG4gICAgICBzbG90OiBcImFjdGlvblwiXG4gICAgfSwgW19jKCdtLXN3aXRjaCcsIHtcbiAgICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgIHZhbHVlOiAocGVyc29uLm9uKSxcbiAgICAgICAgZXhwcmVzc2lvbjogXCJwZXJzb24ub25cIlxuICAgICAgfV0sXG4gICAgICBkb21Qcm9wczoge1xuICAgICAgICBcInZhbHVlXCI6IChwZXJzb24ub24pXG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBwZXJzb24ub24gPSAkZXZlbnRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXSwgMSldLCAyKVxuICB9KSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCBbX2MoJ2RpdicsIFtfdm0uX3YoXCJDb2RlOlwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndGV4dGFyZWEnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiY29sc1wiOiBcIjExMFwiLFxuICAgICAgXCJyb3dzXCI6IFwiMTBcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLmV4YW1wbGVzNFxuICAgIH1cbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2hyJyksIF92bS5fdihcIiBcIiksIF9jKCdtLWxpc3QnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZGVtby1saXN0LWl0ZW1cIlxuICB9LCBfdm0uX2woKF92bS5wZW9wbGUpLCBmdW5jdGlvbihwZXJzb24pIHtcbiAgICByZXR1cm4gX2MoJ20tbGlzdC1pdGVtJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJpY29uLWF2YXRhclwiOiBcInBlcnNvblwiLFxuICAgICAgICBcInN1Yi10aXRsZVwiOiBwZXJzb24uc3ViXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgIFwiICsgX3ZtLl9zKHBlcnNvbi5uYW1lKSArIFwiXFxuXFxuICAgICAgICAgICAgXCIpLCBfYygndGVtcGxhdGUnLCB7XG4gICAgICBzbG90OiBcImFjdGlvblwiXG4gICAgfSwgW19jKCdhJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWRsLWxpc3RfX2l0ZW0tc2Vjb25kYXJ5LWFjdGlvblwiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJocmVmXCI6IFwiI1wiXG4gICAgICB9XG4gICAgfSwgW19jKCdpJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWF0ZXJpYWwtaWNvbnNcIlxuICAgIH0sIFtfdm0uX3YoXCJzdGFyXCIpXSldKV0pXSwgMilcbiAgfSkpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2JywgW19jKCdkaXYnLCBbX3ZtLl92KFwiQ29kZTpcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RleHRhcmVhJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImNvbHNcIjogXCIxMTBcIixcbiAgICAgIFwicm93c1wiOiBcIjEwXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5leGFtcGxlczVcbiAgICB9XG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdocicpLCBfdm0uX3YoXCIgXCIpLCBfYygnbS1saXN0Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRlbW8tbGlzdC10aHJlZVwiXG4gIH0sIF92bS5fbCgoX3ZtLnBlb3BsZSksIGZ1bmN0aW9uKHBlcnNvbikge1xuICAgIHJldHVybiBfYygnbS1saXN0LWl0ZW0nLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcImljb24tYXZhdGFyXCI6IFwicGVyc29uXCIsXG4gICAgICAgIFwidGV4dFwiOiBwZXJzb24udGV4dFxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBcIiArIF92bS5fcyhwZXJzb24ubmFtZSkgKyBcIlxcblxcbiAgICAgICAgICAgIFwiKSwgX2MoJ3RlbXBsYXRlJywge1xuICAgICAgc2xvdDogXCJhY3Rpb25cIlxuICAgIH0sIFtfYygnYScsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1kbC1saXN0X19pdGVtLXNlY29uZGFyeS1hY3Rpb25cIixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwiaHJlZlwiOiBcIiNcIlxuICAgICAgfVxuICAgIH0sIFtfYygnaScsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1hdGVyaWFsLWljb25zXCJcbiAgICB9LCBbX3ZtLl92KFwic3RhclwiKV0pXSldKV0sIDIpXG4gIH0pKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIFtfYygnZGl2JywgW192bS5fdihcIkNvZGU6XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCd0ZXh0YXJlYScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJjb2xzXCI6IFwiMTEwXCIsXG4gICAgICBcInJvd3NcIjogXCIxMFwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0uZXhhbXBsZXM2XG4gICAgfVxuICB9KV0pXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMmM4YWVhZTNcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTJjOGFlYWUzIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9saXN0cy52dWVcbi8vIG1vZHVsZSBpZCA9IDY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=