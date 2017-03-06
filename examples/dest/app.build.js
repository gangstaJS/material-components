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
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
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
	
	            examples: '\n                 <m-select :data-source="testData2" id="test2" v-model="m2"></m-select>\n                 <m-select :data-source="testData" id="test1" v-model="m"></m-select>\n                 <m-select :data-source="testData" id="test3" v-model="m" search></m-select>\n            '
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
	  }), _vm._v(" "), _c('div', [_vm._v(_vm._s(_vm.m2))]), _vm._v(" "), _c('p'), _vm._v(" "), _c('p'), _c('h4', [_vm._v("Array source (single)")]), _vm._v(" "), _c('m-select', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.m10),
	      expression: "m10"
	    }],
	    attrs: {
	      "data-source": _vm.testData4,
	      "id": "test10"
	    },
	    domProps: {
	      "value": (_vm.m10)
	    },
	    on: {
	      "input": function($event) {
	        _vm.m10 = $event
	      }
	    }
	  }), _vm._v(" "), _c('div', [_vm._v(_vm._s(_vm.m10))]), _vm._v(" "), _c('p'), _vm._v(" "), _c('p'), _c('h4', [_vm._v("AJAX select "), _c('span', [_vm._v(_vm._s(_vm.m))])]), _vm._v(" "), _c('m-select', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.m),
	      expression: "m"
	    }],
	    attrs: {
	      "data-source": _vm.testData,
	      "id": "test1",
	      "multiple": ""
	    },
	    domProps: {
	      "value": (_vm.m)
	    },
	    on: {
	      "input": function($event) {
	        _vm.m = $event
	      }
	    }
	  }), _vm._v(" "), _c('div', [_vm._v(_vm._s(_vm.m))]), _vm._v(" "), _c('p'), _vm._v(" "), _c('p'), _c('h4', [_vm._v("AJAX select with search "), _c('span', [_vm._v(_vm._s(_vm.m5))])]), _vm._v(" "), _c('m-select', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.m5),
	      expression: "m5"
	    }],
	    attrs: {
	      "data-source": _vm.testData,
	      "id": "test3",
	      "search": ""
	    },
	    domProps: {
	      "value": (_vm.m5)
	    },
	    on: {
	      "input": function($event) {
	        _vm.m5 = $event
	      }
	    }
	  }), _vm._v(" "), _c('p'), _vm._v(" "), _c('p'), _c('h4', [_vm._v("Multiple selecth "), _c('span', [_vm._v(_vm._s(_vm.m6))])]), _vm._v(" "), _c('m-select', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.m6),
	      expression: "m6"
	    }],
	    attrs: {
	      "data-source": _vm.testData3,
	      "id": "test4",
	      "multiple": ""
	    },
	    domProps: {
	      "value": (_vm.m6)
	    },
	    on: {
	      "input": function($event) {
	        _vm.m6 = $event
	      }
	    }
	  }), _vm._v(" "), _c('p'), _vm._v(" "), _c('div', [_c('div', [_vm._v("Code:")]), _vm._v(" "), _c('textarea', {
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
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
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
	      }
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
	  }, [_vm._v("Hide badge value")]), _vm._v(" "), _c('hr'), _vm._v(" "), _vm._m(0)], 1)
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
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
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
	            currentTub2: 'Tab 2'
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
	  }, [_c('p', [_vm._v("\n                    Hello 1\n                ")])]), _vm._v(" "), _c('m-tab', {
	    attrs: {
	      "tab": {
	        title: 'Tom',
	        id: 'tab-2'
	      }
	    }
	  }, [_c('p', [_vm._v("\n                    Hello 2\n                ")])])], 1), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('m-tabs', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.currentTub2),
	      expression: "currentTub2"
	    }],
	    attrs: {
	      "no-ripple-effect": true,
	      "animation": true,
	      "content-style": {
	        height: '300px'
	      }
	    },
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
	  }, [_vm._v("\n                    Quisque et hendrerit odio, viverra efficitur risus. Mauris tempus mi ut fringilla placerat. Vestibulum sagittis pellentesque nunc nec congue. Maecenas eu enim suscipit augue maximus viverra. Fusce tincidunt, nibh non eleifend placerat, lectus nunc lacinia nisi, a maximus purus mauris vel dui. Fusce in urna vel diam lobortis tempor non sed nisi. Etiam metus orci, convallis eget rhoncus vel, cursus a mauris. Proin maximus velit sed semper commodo. Maecenas sit amet laoreet leo. Nulla facilisi. Integer eget mauris mi. Nulla dictum erat eget mi maximus venenatis.\n                ")])])], 1), _vm._v(" "), _vm._m(1)], 1)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDcwYzZiNDk4NWMxNjU0MTJmNzUiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1yb3V0ZXIvZGlzdC92dWUtcm91dGVyLmNvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi9+L3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1yZXNvdXJjZS9kaXN0L3Z1ZS1yZXNvdXJjZS5jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvdXNhZ2UudnVlIiwid2VicGFjazovLy91c2FnZS52dWUiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvdXNhZ2UudnVlP2VhNGMiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvbmF2LnZ1ZSIsIndlYnBhY2s6Ly8vbmF2LnZ1ZSIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9zcmMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9uYXYudnVlPzY0NTQiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvdGV4dGZpZWxkcy52dWUiLCJ3ZWJwYWNrOi8vL3RleHRmaWVsZHMudnVlIiwid2VicGFjazovLy8uL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL3RleHRmaWVsZHMudnVlPzMxNDciLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvYnV0dG9ucy52dWUiLCJ3ZWJwYWNrOi8vL2J1dHRvbnMudnVlIiwid2VicGFjazovLy8uL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL2J1dHRvbnMudnVlP2QxNzUiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvc25hY2tiYXIudnVlIiwid2VicGFjazovLy9zbmFja2Jhci52dWUiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvc25hY2tiYXIudnVlP2IzMWEiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvc2VsZWN0cy52dWUiLCJ3ZWJwYWNrOi8vL3NlbGVjdHMudnVlIiwid2VicGFjazovLy8uL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL3NlbGVjdHMudnVlPzFjOGIiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvc2xpZGVycy52dWUiLCJ3ZWJwYWNrOi8vL3NsaWRlcnMudnVlIiwid2VicGFjazovLy8uL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL3NsaWRlcnMudnVlPzFlNjciLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvYmFkZ2VzLnZ1ZSIsIndlYnBhY2s6Ly8vYmFkZ2VzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9iYWRnZXMudnVlP2U4YTciLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvbWVudS52dWUiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvbWVudS52dWU/ZGU5YSIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9tZW51LnZ1ZT80NTEzIiwid2VicGFjazovLy8uL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vbWVudS52dWUiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvbWVudS52dWU/YTU1YyIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9sb2FkaW5nLnZ1ZSIsIndlYnBhY2s6Ly8vbG9hZGluZy52dWUiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvbG9hZGluZy52dWU/OWU4ZiIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy90b2dnbGVzLnZ1ZSIsIndlYnBhY2s6Ly8vdG9nZ2xlcy52dWUiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvdG9nZ2xlcy52dWU/NDQzOSIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy90YWJzLnZ1ZSIsIndlYnBhY2s6Ly8vdGFicy52dWUiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvdGFicy52dWU/Zjk3OSIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy90b29sdGlwcy52dWUiLCJ3ZWJwYWNrOi8vL3Rvb2x0aXBzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy90b29sdGlwcy52dWU/NGM4OSIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy90YWJsZS52dWUiLCJ3ZWJwYWNrOi8vL3RhYmxlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy90YWJsZS52dWU/MDRjNyIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9kaWFsb2dzLnZ1ZSIsIndlYnBhY2s6Ly8vZGlhbG9ncy52dWUiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvZGlhbG9ncy52dWU/ODA4NyIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9jYXJkcy52dWUiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvY2FyZHMudnVlPzExNTUiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvY2FyZHMudnVlPzMyNmIiLCJ3ZWJwYWNrOi8vL2NhcmRzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9jYXJkcy52dWU/Mjg4OCIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9jaGlwcy52dWUiLCJ3ZWJwYWNrOi8vL2NoaXBzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9jaGlwcy52dWU/MTA1ZiIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9saXN0cy52dWUiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvbGlzdHMudnVlPzVmZTQiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvbGlzdHMudnVlPzYyN2QiLCJ3ZWJwYWNrOi8vL2xpc3RzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9saXN0cy52dWU/ZDU3ZCJdLCJuYW1lcyI6WyJWdWUiLCJ1c2UiLCJWdWVSZXVzYWJsZU1hdGVyaWFsQ29tcG9uZW50cyIsInJvdXRlcyIsInBhdGgiLCJjb21wb25lbnQiLCJuYW1lIiwicmVkaXJlY3QiLCJyb3V0ZXIiLCJiYXNlIiwibGlua0FjdGl2ZUNsYXNzIiwiZWwiLCJjb21wb25lbnRzIiwiRXhOYXYiLCJtZXRob2RzIiwib25TdWJtaXQiLCJlIiwiY29uc29sZSIsImxvZyIsImZvcm0iLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImVtYWlsIiwiX192dWVfZXhwb3J0c19fIiwiX192dWVfb3B0aW9uc19fIiwiX192dWVfc3R5bGVzX18iLCJyZXF1aXJlIiwiX192dWVfdGVtcGxhdGVfXyIsImRlZmF1bHQiLCJPYmplY3QiLCJrZXlzIiwic29tZSIsImtleSIsImVycm9yIiwib3B0aW9ucyIsIl9fZmlsZSIsInJlbmRlciIsInN0YXRpY1JlbmRlckZucyIsImhvdEFQSSIsImluc3RhbGwiLCJjb21wYXRpYmxlIiwibW9kdWxlIiwiaG90IiwiYWNjZXB0IiwiZGF0YSIsImNyZWF0ZVJlY29yZCIsInJlbG9hZCIsImZ1bmN0aW9uYWwiLCJleHBvcnRzIiwic29ydEJ5S2V5IiwiYXJyYXkiLCJzb3J0IiwiYSIsImIiLCJ4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QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFdBQVUsMERBQTBEO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBd0I7QUFDeEIsd0JBQXVCO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQVksT0FBTztBQUNuQixhQUFZLFFBQVE7QUFDcEIsYUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQVksT0FBTztBQUNuQixhQUFZLFFBQVE7QUFDcEIsYUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBOztB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1AsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7O0FBRUEsa0NBQWlDLFNBQVM7QUFDMUM7QUFDQTtBQUNBLGVBQWM7QUFDZDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVCxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFD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OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNEIsWUFBWTtBQUN4QyxNQUFLO0FBQ0w7QUFDQSwwQkFBeUIsWUFBWTtBQUNyQztBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUM7O0FBRUQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJCQUEwQixpQkFBaUI7O0FBRTNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLElBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw0Qjs7Ozs7OztBQ3BqRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDRCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw2QkFBNEIsVUFBVTs7Ozs7OztBQ25MdEM7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QUFDckI7O0FBRUE7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCw0QkFBMkI7QUFDM0I7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTBCO0FBQzFCOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUNBQW9DLEVBQUU7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSwwQkFBeUI7QUFDekI7QUFDQTs7QUFFQTtBQUNBLG9CQUFtQjtBQUNuQjs7QUFFQSx1QkFBc0I7O0FBRXRCO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0EsVUFBUztBQUNUO0FBQ0E7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OztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2IsVUFBUztBQUNUOztBQUVBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxVQUFTOztBQUVUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7O0FBRUE7QUFDQSxFQUFDOztBQUVEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVEQUFzRCxHQUFHLHFCQUFxQjtBQUM5RTs7QUFFQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBLHVCQUFzQjtBQUN0Qix1QkFBc0I7QUFDdEIsMEJBQXlCLG1DQUFtQzs7QUFFNUQ7O0FBRUEsMEJBQXlCO0FBQ3pCOztBQUVBLDJCQUEwQjs7QUFFMUI7QUFDQTtBQUNBLE1BQUs7O0FBRUw7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7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Q0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FB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RztBQUNIO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSxNQUFLO0FBQ0wsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEUiLCJmaWxlIjoiYXBwLmJ1aWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZDcwYzZiNDk4NWMxNjU0MTJmNzUiLCIvLyBpbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XG5pbXBvcnQgVnVlUm91dGVyIGZyb20gJ3Z1ZS1yb3V0ZXInO1xuaW1wb3J0IFZ1ZVJlc291cmNlIGZyb20gJ3Z1ZS1yZXNvdXJjZSc7XG5cblxuaW1wb3J0IFVzYWdlIGZyb20gJy4vY29tcG9uZW50cy91c2FnZS52dWUnO1xuaW1wb3J0IEV4TmF2IGZyb20gJy4vY29tcG9uZW50cy9uYXYudnVlJztcbmltcG9ydCBUZXh0RmllbGRzIGZyb20gJy4vY29tcG9uZW50cy90ZXh0ZmllbGRzLnZ1ZSc7XG5pbXBvcnQgQnV0dG9ucyBmcm9tICcuL2NvbXBvbmVudHMvYnV0dG9ucy52dWUnO1xuaW1wb3J0IFNuYWNrYmFyIGZyb20gJy4vY29tcG9uZW50cy9zbmFja2Jhci52dWUnO1xuaW1wb3J0IFNlbGVjdHMgZnJvbSAnLi9jb21wb25lbnRzL3NlbGVjdHMudnVlJztcbmltcG9ydCBTbGlkZXJzIGZyb20gJy4vY29tcG9uZW50cy9zbGlkZXJzLnZ1ZSc7XG5pbXBvcnQgQmFkZ2VzIGZyb20gJy4vY29tcG9uZW50cy9iYWRnZXMudnVlJztcbmltcG9ydCBNZW51IGZyb20gJy4vY29tcG9uZW50cy9tZW51LnZ1ZSc7XG5pbXBvcnQgTG9hZGluZyBmcm9tICcuL2NvbXBvbmVudHMvbG9hZGluZy52dWUnO1xuaW1wb3J0IFRvZ2dsZXMgZnJvbSAnLi9jb21wb25lbnRzL3RvZ2dsZXMudnVlJztcbmltcG9ydCBUYWJzIGZyb20gJy4vY29tcG9uZW50cy90YWJzLnZ1ZSc7XG5pbXBvcnQgVG9vbHRpcHMgZnJvbSAnLi9jb21wb25lbnRzL3Rvb2x0aXBzLnZ1ZSc7XG5pbXBvcnQgVGFibGUgZnJvbSAnLi9jb21wb25lbnRzL3RhYmxlLnZ1ZSc7XG5pbXBvcnQgRGlhbG9ncyBmcm9tICcuL2NvbXBvbmVudHMvZGlhbG9ncy52dWUnO1xuaW1wb3J0IENhcmRzIGZyb20gJy4vY29tcG9uZW50cy9jYXJkcy52dWUnO1xuaW1wb3J0IENoaXBzIGZyb20gJy4vY29tcG9uZW50cy9jaGlwcy52dWUnO1xuaW1wb3J0IExpc3RzIGZyb20gJy4vY29tcG9uZW50cy9saXN0cy52dWUnO1xuXG4vLyBjb25zdCBjb21wb25lbnRzID0ge1xuLy8gICBFeE5hdixcbi8vIH1cblxuVnVlLnVzZShWdWVSb3V0ZXIpO1xuVnVlLnVzZShWdWVSZXVzYWJsZU1hdGVyaWFsQ29tcG9uZW50cyk7XG5WdWUudXNlKFZ1ZVJlc291cmNlKTtcblxuXG5jb25zdCByb3V0ZXMgPSBbXG4gIHsgcGF0aDogJy90ZXh0ZmllbGRzJywgY29tcG9uZW50OiBUZXh0RmllbGRzLCBuYW1lOiAndGV4dGZpZWxkcyd9LFxuICB7IHBhdGg6ICcvYnV0dG9ucycsIGNvbXBvbmVudDogQnV0dG9ucyB9LFxuICB7IHBhdGg6ICcvc25hY2tiYXInLCBjb21wb25lbnQ6IFNuYWNrYmFyIH0sXG4gIHsgcGF0aDogJy9zZWxlY3RzJywgY29tcG9uZW50OiBTZWxlY3RzIH0sXG4gIHsgcGF0aDogJy9zbGlkZXJzJywgY29tcG9uZW50OiBTbGlkZXJzIH0sXG4gIHsgcGF0aDogJy9iYWRnZXMnLCBjb21wb25lbnQ6IEJhZGdlcyB9LFxuICB7IHBhdGg6ICcvbWVudScsIGNvbXBvbmVudDogTWVudSB9LFxuICB7IHBhdGg6ICcvbG9hZGluZycsIGNvbXBvbmVudDogTG9hZGluZyB9LFxuICB7IHBhdGg6ICcvdG9nZ2xlcycsIGNvbXBvbmVudDogVG9nZ2xlcyB9LFxuICB7IHBhdGg6ICcvdGFicycsIGNvbXBvbmVudDogVGFicyB9LFxuICB7IHBhdGg6ICcvdG9vbHRpcHMnLCBjb21wb25lbnQ6IFRvb2x0aXBzIH0sXG4gIHsgcGF0aDogJy90YWJsZScsIGNvbXBvbmVudDogVGFibGUgfSxcbiAgeyBwYXRoOiAnL2RpYWxvZ3MnLCBjb21wb25lbnQ6IERpYWxvZ3MgfSxcbiAgeyBwYXRoOiAnL2NhcmRzJywgY29tcG9uZW50OiBDYXJkcyB9LFxuICB7IHBhdGg6ICcvY2hpcHMnLCBjb21wb25lbnQ6IENoaXBzIH0sXG4gIHsgcGF0aDogJy9saXN0cycsIGNvbXBvbmVudDogTGlzdHMgfSxcbiAgeyBwYXRoOiAnL3VzYWdlJywgY29tcG9uZW50OiBVc2FnZSB9LFxuICB7IHBhdGg6ICcqJywgcmVkaXJlY3Q6IHsgbmFtZTogJ3RleHRmaWVsZHMnIH19LFxuXTtcblxuY29uc3Qgcm91dGVyID0gbmV3IFZ1ZVJvdXRlcih7XG4gIGJhc2U6ICcvZXhhbXBsZXMvJyxcbiAgbGlua0FjdGl2ZUNsYXNzOiAnbWRsLW5hdmlnYXRpb25fX2xpbmstLWFjdGl2ZScsXG4gIHJvdXRlc1xufSk7XG5cbm5ldyBWdWUoe1xuICBlbDogJyNleGFtcGxlcycsXG4gIHJvdXRlcixcbiAgY29tcG9uZW50czoge1xuICAgIEV4TmF2LFxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgb25TdWJtaXQ6IGZ1bmN0aW9uKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuZm9ybS5maXJzdE5hbWUpO1xuICAgICAgY29uc29sZS5sb2codGhpcy5mb3JtLmxhc3ROYW1lKTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuZm9ybS5lbWFpbCk7XG4gICAgfVxuICB9XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9leGFtcGxlcy9zcmMvYXBwLmpzIiwiLyoqXG4gICogdnVlLXJvdXRlciB2Mi4xLjJcbiAgKiAoYykgMjAxNyBFdmFuIFlvdVxuICAqIEBsaWNlbnNlIE1JVFxuICAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgVmlldyA9IHtcbiAgbmFtZTogJ3JvdXRlci12aWV3JyxcbiAgZnVuY3Rpb25hbDogdHJ1ZSxcbiAgcHJvcHM6IHtcbiAgICBuYW1lOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnZGVmYXVsdCdcbiAgICB9XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyIChoLCByZWYpIHtcbiAgICB2YXIgcHJvcHMgPSByZWYucHJvcHM7XG4gICAgdmFyIGNoaWxkcmVuID0gcmVmLmNoaWxkcmVuO1xuICAgIHZhciBwYXJlbnQgPSByZWYucGFyZW50O1xuICAgIHZhciBkYXRhID0gcmVmLmRhdGE7XG5cbiAgICBkYXRhLnJvdXRlclZpZXcgPSB0cnVlXG5cbiAgICB2YXIgbmFtZSA9IHByb3BzLm5hbWVcbiAgICB2YXIgcm91dGUgPSBwYXJlbnQuJHJvdXRlXG4gICAgdmFyIGNhY2hlID0gcGFyZW50Ll9yb3V0ZXJWaWV3Q2FjaGUgfHwgKHBhcmVudC5fcm91dGVyVmlld0NhY2hlID0ge30pXG5cbiAgICAvLyBkZXRlcm1pbmUgY3VycmVudCB2aWV3IGRlcHRoLCBhbHNvIGNoZWNrIHRvIHNlZSBpZiB0aGUgdHJlZVxuICAgIC8vIGhhcyBiZWVuIHRvZ2dsZWQgaW5hY3RpdmUgYnV0IGtlcHQtYWxpdmUuXG4gICAgdmFyIGRlcHRoID0gMFxuICAgIHZhciBpbmFjdGl2ZSA9IGZhbHNlXG4gICAgd2hpbGUgKHBhcmVudCkge1xuICAgICAgaWYgKHBhcmVudC4kdm5vZGUgJiYgcGFyZW50LiR2bm9kZS5kYXRhLnJvdXRlclZpZXcpIHtcbiAgICAgICAgZGVwdGgrK1xuICAgICAgfVxuICAgICAgaWYgKHBhcmVudC5faW5hY3RpdmUpIHtcbiAgICAgICAgaW5hY3RpdmUgPSB0cnVlXG4gICAgICB9XG4gICAgICBwYXJlbnQgPSBwYXJlbnQuJHBhcmVudFxuICAgIH1cbiAgICBkYXRhLnJvdXRlclZpZXdEZXB0aCA9IGRlcHRoXG5cbiAgICAvLyByZW5kZXIgcHJldmlvdXMgdmlldyBpZiB0aGUgdHJlZSBpcyBpbmFjdGl2ZSBhbmQga2VwdC1hbGl2ZVxuICAgIGlmIChpbmFjdGl2ZSkge1xuICAgICAgcmV0dXJuIGgoY2FjaGVbbmFtZV0sIGRhdGEsIGNoaWxkcmVuKVxuICAgIH1cblxuICAgIHZhciBtYXRjaGVkID0gcm91dGUubWF0Y2hlZFtkZXB0aF1cbiAgICAvLyByZW5kZXIgZW1wdHkgbm9kZSBpZiBubyBtYXRjaGVkIHJvdXRlXG4gICAgaWYgKCFtYXRjaGVkKSB7XG4gICAgICBjYWNoZVtuYW1lXSA9IG51bGxcbiAgICAgIHJldHVybiBoKClcbiAgICB9XG5cbiAgICB2YXIgY29tcG9uZW50ID0gY2FjaGVbbmFtZV0gPSBtYXRjaGVkLmNvbXBvbmVudHNbbmFtZV1cblxuICAgIC8vIGluamVjdCBpbnN0YW5jZSByZWdpc3RyYXRpb24gaG9va3NcbiAgICB2YXIgaG9va3MgPSBkYXRhLmhvb2sgfHwgKGRhdGEuaG9vayA9IHt9KVxuICAgIGhvb2tzLmluaXQgPSBmdW5jdGlvbiAodm5vZGUpIHtcbiAgICAgIG1hdGNoZWQuaW5zdGFuY2VzW25hbWVdID0gdm5vZGUuY2hpbGRcbiAgICB9XG4gICAgaG9va3MucHJlcGF0Y2ggPSBmdW5jdGlvbiAob2xkVm5vZGUsIHZub2RlKSB7XG4gICAgICBtYXRjaGVkLmluc3RhbmNlc1tuYW1lXSA9IHZub2RlLmNoaWxkXG4gICAgfVxuICAgIGhvb2tzLmRlc3Ryb3kgPSBmdW5jdGlvbiAodm5vZGUpIHtcbiAgICAgIGlmIChtYXRjaGVkLmluc3RhbmNlc1tuYW1lXSA9PT0gdm5vZGUuY2hpbGQpIHtcbiAgICAgICAgbWF0Y2hlZC5pbnN0YW5jZXNbbmFtZV0gPSB1bmRlZmluZWRcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaChjb21wb25lbnQsIGRhdGEsIGNoaWxkcmVuKVxuICB9XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBhc3NlcnQgKGNvbmRpdGlvbiwgbWVzc2FnZSkge1xuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcigoXCJbdnVlLXJvdXRlcl0gXCIgKyBtZXNzYWdlKSlcbiAgfVxufVxuXG5mdW5jdGlvbiB3YXJuIChjb25kaXRpb24sIG1lc3NhZ2UpIHtcbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgY29uc29sZS53YXJuKChcIlt2dWUtcm91dGVyXSBcIiArIG1lc3NhZ2UpKVxuICB9XG59XG5cbi8qICAqL1xuXG52YXIgZW5jb2RlID0gZW5jb2RlVVJJQ29tcG9uZW50XG52YXIgZGVjb2RlID0gZGVjb2RlVVJJQ29tcG9uZW50XG5cbmZ1bmN0aW9uIHJlc29sdmVRdWVyeSAoXG4gIHF1ZXJ5LFxuICBleHRyYVF1ZXJ5XG4pIHtcbiAgaWYgKCBleHRyYVF1ZXJ5ID09PSB2b2lkIDAgKSBleHRyYVF1ZXJ5ID0ge307XG5cbiAgaWYgKHF1ZXJ5KSB7XG4gICAgdmFyIHBhcnNlZFF1ZXJ5XG4gICAgdHJ5IHtcbiAgICAgIHBhcnNlZFF1ZXJ5ID0gcGFyc2VRdWVyeShxdWVyeSlcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oZmFsc2UsIGUubWVzc2FnZSlcbiAgICAgIHBhcnNlZFF1ZXJ5ID0ge31cbiAgICB9XG4gICAgZm9yICh2YXIga2V5IGluIGV4dHJhUXVlcnkpIHtcbiAgICAgIHBhcnNlZFF1ZXJ5W2tleV0gPSBleHRyYVF1ZXJ5W2tleV1cbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlZFF1ZXJ5XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGV4dHJhUXVlcnlcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXJzZVF1ZXJ5IChxdWVyeSkge1xuICB2YXIgcmVzID0ge31cblxuICBxdWVyeSA9IHF1ZXJ5LnRyaW0oKS5yZXBsYWNlKC9eKFxcP3wjfCYpLywgJycpXG5cbiAgaWYgKCFxdWVyeSkge1xuICAgIHJldHVybiByZXNcbiAgfVxuXG4gIHF1ZXJ5LnNwbGl0KCcmJykuZm9yRWFjaChmdW5jdGlvbiAocGFyYW0pIHtcbiAgICB2YXIgcGFydHMgPSBwYXJhbS5yZXBsYWNlKC9cXCsvZywgJyAnKS5zcGxpdCgnPScpXG4gICAgdmFyIGtleSA9IGRlY29kZShwYXJ0cy5zaGlmdCgpKVxuICAgIHZhciB2YWwgPSBwYXJ0cy5sZW5ndGggPiAwXG4gICAgICA/IGRlY29kZShwYXJ0cy5qb2luKCc9JykpXG4gICAgICA6IG51bGxcblxuICAgIGlmIChyZXNba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXNba2V5XSA9IHZhbFxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShyZXNba2V5XSkpIHtcbiAgICAgIHJlc1trZXldLnB1c2godmFsKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXNba2V5XSA9IFtyZXNba2V5XSwgdmFsXVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVF1ZXJ5IChvYmopIHtcbiAgdmFyIHJlcyA9IG9iaiA/IE9iamVjdC5rZXlzKG9iaikubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgdmFsID0gb2JqW2tleV1cblxuICAgIGlmICh2YWwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuICcnXG4gICAgfVxuXG4gICAgaWYgKHZhbCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGVuY29kZShrZXkpXG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgICAgdmFyIHJlc3VsdCA9IFtdXG4gICAgICB2YWwuc2xpY2UoKS5mb3JFYWNoKGZ1bmN0aW9uICh2YWwyKSB7XG4gICAgICAgIGlmICh2YWwyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsMiA9PT0gbnVsbCkge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKGVuY29kZShrZXkpKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKGVuY29kZShrZXkpICsgJz0nICsgZW5jb2RlKHZhbDIpKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgcmV0dXJuIHJlc3VsdC5qb2luKCcmJylcbiAgICB9XG5cbiAgICByZXR1cm4gZW5jb2RlKGtleSkgKyAnPScgKyBlbmNvZGUodmFsKVxuICB9KS5maWx0ZXIoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHgubGVuZ3RoID4gMDsgfSkuam9pbignJicpIDogbnVsbFxuICByZXR1cm4gcmVzID8gKFwiP1wiICsgcmVzKSA6ICcnXG59XG5cbi8qICAqL1xuXG52YXIgdHJhaWxpbmdTbGFzaFJFID0gL1xcLz8kL1xuXG5mdW5jdGlvbiBjcmVhdGVSb3V0ZSAoXG4gIHJlY29yZCxcbiAgbG9jYXRpb24sXG4gIHJlZGlyZWN0ZWRGcm9tXG4pIHtcbiAgdmFyIHJvdXRlID0ge1xuICAgIG5hbWU6IGxvY2F0aW9uLm5hbWUgfHwgKHJlY29yZCAmJiByZWNvcmQubmFtZSksXG4gICAgbWV0YTogKHJlY29yZCAmJiByZWNvcmQubWV0YSkgfHwge30sXG4gICAgcGF0aDogbG9jYXRpb24ucGF0aCB8fCAnLycsXG4gICAgaGFzaDogbG9jYXRpb24uaGFzaCB8fCAnJyxcbiAgICBxdWVyeTogbG9jYXRpb24ucXVlcnkgfHwge30sXG4gICAgcGFyYW1zOiBsb2NhdGlvbi5wYXJhbXMgfHwge30sXG4gICAgZnVsbFBhdGg6IGdldEZ1bGxQYXRoKGxvY2F0aW9uKSxcbiAgICBtYXRjaGVkOiByZWNvcmQgPyBmb3JtYXRNYXRjaChyZWNvcmQpIDogW11cbiAgfVxuICBpZiAocmVkaXJlY3RlZEZyb20pIHtcbiAgICByb3V0ZS5yZWRpcmVjdGVkRnJvbSA9IGdldEZ1bGxQYXRoKHJlZGlyZWN0ZWRGcm9tKVxuICB9XG4gIHJldHVybiBPYmplY3QuZnJlZXplKHJvdXRlKVxufVxuXG4vLyB0aGUgc3RhcnRpbmcgcm91dGUgdGhhdCByZXByZXNlbnRzIHRoZSBpbml0aWFsIHN0YXRlXG52YXIgU1RBUlQgPSBjcmVhdGVSb3V0ZShudWxsLCB7XG4gIHBhdGg6ICcvJ1xufSlcblxuZnVuY3Rpb24gZm9ybWF0TWF0Y2ggKHJlY29yZCkge1xuICB2YXIgcmVzID0gW11cbiAgd2hpbGUgKHJlY29yZCkge1xuICAgIHJlcy51bnNoaWZ0KHJlY29yZClcbiAgICByZWNvcmQgPSByZWNvcmQucGFyZW50XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5mdW5jdGlvbiBnZXRGdWxsUGF0aCAocmVmKSB7XG4gIHZhciBwYXRoID0gcmVmLnBhdGg7XG4gIHZhciBxdWVyeSA9IHJlZi5xdWVyeTsgaWYgKCBxdWVyeSA9PT0gdm9pZCAwICkgcXVlcnkgPSB7fTtcbiAgdmFyIGhhc2ggPSByZWYuaGFzaDsgaWYgKCBoYXNoID09PSB2b2lkIDAgKSBoYXNoID0gJyc7XG5cbiAgcmV0dXJuIChwYXRoIHx8ICcvJykgKyBzdHJpbmdpZnlRdWVyeShxdWVyeSkgKyBoYXNoXG59XG5cbmZ1bmN0aW9uIGlzU2FtZVJvdXRlIChhLCBiKSB7XG4gIGlmIChiID09PSBTVEFSVCkge1xuICAgIHJldHVybiBhID09PSBiXG4gIH0gZWxzZSBpZiAoIWIpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfSBlbHNlIGlmIChhLnBhdGggJiYgYi5wYXRoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGEucGF0aC5yZXBsYWNlKHRyYWlsaW5nU2xhc2hSRSwgJycpID09PSBiLnBhdGgucmVwbGFjZSh0cmFpbGluZ1NsYXNoUkUsICcnKSAmJlxuICAgICAgYS5oYXNoID09PSBiLmhhc2ggJiZcbiAgICAgIGlzT2JqZWN0RXF1YWwoYS5xdWVyeSwgYi5xdWVyeSlcbiAgICApXG4gIH0gZWxzZSBpZiAoYS5uYW1lICYmIGIubmFtZSkge1xuICAgIHJldHVybiAoXG4gICAgICBhLm5hbWUgPT09IGIubmFtZSAmJlxuICAgICAgYS5oYXNoID09PSBiLmhhc2ggJiZcbiAgICAgIGlzT2JqZWN0RXF1YWwoYS5xdWVyeSwgYi5xdWVyeSkgJiZcbiAgICAgIGlzT2JqZWN0RXF1YWwoYS5wYXJhbXMsIGIucGFyYW1zKVxuICAgIClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5mdW5jdGlvbiBpc09iamVjdEVxdWFsIChhLCBiKSB7XG4gIGlmICggYSA9PT0gdm9pZCAwICkgYSA9IHt9O1xuICBpZiAoIGIgPT09IHZvaWQgMCApIGIgPSB7fTtcblxuICB2YXIgYUtleXMgPSBPYmplY3Qua2V5cyhhKVxuICB2YXIgYktleXMgPSBPYmplY3Qua2V5cyhiKVxuICBpZiAoYUtleXMubGVuZ3RoICE9PSBiS2V5cy5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICByZXR1cm4gYUtleXMuZXZlcnkoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gU3RyaW5nKGFba2V5XSkgPT09IFN0cmluZyhiW2tleV0pOyB9KVxufVxuXG5mdW5jdGlvbiBpc0luY2x1ZGVkUm91dGUgKGN1cnJlbnQsIHRhcmdldCkge1xuICByZXR1cm4gKFxuICAgIGN1cnJlbnQucGF0aC5yZXBsYWNlKHRyYWlsaW5nU2xhc2hSRSwgJy8nKS5pbmRleE9mKFxuICAgICAgdGFyZ2V0LnBhdGgucmVwbGFjZSh0cmFpbGluZ1NsYXNoUkUsICcvJylcbiAgICApID09PSAwICYmXG4gICAgKCF0YXJnZXQuaGFzaCB8fCBjdXJyZW50Lmhhc2ggPT09IHRhcmdldC5oYXNoKSAmJlxuICAgIHF1ZXJ5SW5jbHVkZXMoY3VycmVudC5xdWVyeSwgdGFyZ2V0LnF1ZXJ5KVxuICApXG59XG5cbmZ1bmN0aW9uIHF1ZXJ5SW5jbHVkZXMgKGN1cnJlbnQsIHRhcmdldCkge1xuICBmb3IgKHZhciBrZXkgaW4gdGFyZ2V0KSB7XG4gICAgaWYgKCEoa2V5IGluIGN1cnJlbnQpKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWVcbn1cblxuLyogICovXG5cbi8vIHdvcmsgYXJvdW5kIHdlaXJkIGZsb3cgYnVnXG52YXIgdG9UeXBlcyA9IFtTdHJpbmcsIE9iamVjdF1cblxudmFyIExpbmsgPSB7XG4gIG5hbWU6ICdyb3V0ZXItbGluaycsXG4gIHByb3BzOiB7XG4gICAgdG86IHtcbiAgICAgIHR5cGU6IHRvVHlwZXMsXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgdGFnOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnYSdcbiAgICB9LFxuICAgIGV4YWN0OiBCb29sZWFuLFxuICAgIGFwcGVuZDogQm9vbGVhbixcbiAgICByZXBsYWNlOiBCb29sZWFuLFxuICAgIGFjdGl2ZUNsYXNzOiBTdHJpbmcsXG4gICAgZXZlbnQ6IHtcbiAgICAgIHR5cGU6IFtTdHJpbmcsIEFycmF5XSxcbiAgICAgIGRlZmF1bHQ6ICdjbGljaydcbiAgICB9XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyIChoKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICB2YXIgcm91dGVyID0gdGhpcy4kcm91dGVyXG4gICAgdmFyIGN1cnJlbnQgPSB0aGlzLiRyb3V0ZVxuICAgIHZhciByZWYgPSByb3V0ZXIucmVzb2x2ZSh0aGlzLnRvLCBjdXJyZW50LCB0aGlzLmFwcGVuZCk7XG4gICAgdmFyIG5vcm1hbGl6ZWRUbyA9IHJlZi5ub3JtYWxpemVkVG87XG4gICAgdmFyIHJlc29sdmVkID0gcmVmLnJlc29sdmVkO1xuICAgIHZhciBocmVmID0gcmVmLmhyZWY7XG4gICAgdmFyIGNsYXNzZXMgPSB7fVxuICAgIHZhciBhY3RpdmVDbGFzcyA9IHRoaXMuYWN0aXZlQ2xhc3MgfHwgcm91dGVyLm9wdGlvbnMubGlua0FjdGl2ZUNsYXNzIHx8ICdyb3V0ZXItbGluay1hY3RpdmUnXG4gICAgdmFyIGNvbXBhcmVUYXJnZXQgPSBub3JtYWxpemVkVG8ucGF0aCA/IGNyZWF0ZVJvdXRlKG51bGwsIG5vcm1hbGl6ZWRUbykgOiByZXNvbHZlZFxuICAgIGNsYXNzZXNbYWN0aXZlQ2xhc3NdID0gdGhpcy5leGFjdFxuICAgICAgPyBpc1NhbWVSb3V0ZShjdXJyZW50LCBjb21wYXJlVGFyZ2V0KVxuICAgICAgOiBpc0luY2x1ZGVkUm91dGUoY3VycmVudCwgY29tcGFyZVRhcmdldClcblxuICAgIHZhciBoYW5kbGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChndWFyZEV2ZW50KGUpKSB7XG4gICAgICAgIGlmICh0aGlzJDEucmVwbGFjZSkge1xuICAgICAgICAgIHJvdXRlci5yZXBsYWNlKG5vcm1hbGl6ZWRUbylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByb3V0ZXIucHVzaChub3JtYWxpemVkVG8pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgb24gPSB7IGNsaWNrOiBndWFyZEV2ZW50IH1cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLmV2ZW50KSkge1xuICAgICAgdGhpcy5ldmVudC5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7IG9uW2VdID0gaGFuZGxlciB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBvblt0aGlzLmV2ZW50XSA9IGhhbmRsZXJcbiAgICB9XG5cbiAgICB2YXIgZGF0YSA9IHtcbiAgICAgIGNsYXNzOiBjbGFzc2VzXG4gICAgfVxuXG4gICAgaWYgKHRoaXMudGFnID09PSAnYScpIHtcbiAgICAgIGRhdGEub24gPSBvblxuICAgICAgZGF0YS5hdHRycyA9IHsgaHJlZjogaHJlZiB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGZpbmQgdGhlIGZpcnN0IDxhPiBjaGlsZCBhbmQgYXBwbHkgbGlzdGVuZXIgYW5kIGhyZWZcbiAgICAgIHZhciBhID0gZmluZEFuY2hvcih0aGlzLiRzbG90cy5kZWZhdWx0KVxuICAgICAgaWYgKGEpIHtcbiAgICAgICAgLy8gaW4gY2FzZSB0aGUgPGE+IGlzIGEgc3RhdGljIG5vZGVcbiAgICAgICAgYS5pc1N0YXRpYyA9IGZhbHNlXG4gICAgICAgIHZhciBleHRlbmQgPSBfVnVlLnV0aWwuZXh0ZW5kXG4gICAgICAgIHZhciBhRGF0YSA9IGEuZGF0YSA9IGV4dGVuZCh7fSwgYS5kYXRhKVxuICAgICAgICBhRGF0YS5vbiA9IG9uXG4gICAgICAgIHZhciBhQXR0cnMgPSBhLmRhdGEuYXR0cnMgPSBleHRlbmQoe30sIGEuZGF0YS5hdHRycylcbiAgICAgICAgYUF0dHJzLmhyZWYgPSBocmVmXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBkb2Vzbid0IGhhdmUgPGE+IGNoaWxkLCBhcHBseSBsaXN0ZW5lciB0byBzZWxmXG4gICAgICAgIGRhdGEub24gPSBvblxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBoKHRoaXMudGFnLCBkYXRhLCB0aGlzLiRzbG90cy5kZWZhdWx0KVxuICB9XG59XG5cbmZ1bmN0aW9uIGd1YXJkRXZlbnQgKGUpIHtcbiAgLy8gZG9uJ3QgcmVkaXJlY3Qgd2l0aCBjb250cm9sIGtleXNcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChlLm1ldGFLZXkgfHwgZS5jdHJsS2V5IHx8IGUuc2hpZnRLZXkpIHsgcmV0dXJuIH1cbiAgLy8gZG9uJ3QgcmVkaXJlY3Qgd2hlbiBwcmV2ZW50RGVmYXVsdCBjYWxsZWRcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChlLmRlZmF1bHRQcmV2ZW50ZWQpIHsgcmV0dXJuIH1cbiAgLy8gZG9uJ3QgcmVkaXJlY3Qgb24gcmlnaHQgY2xpY2tcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChlLmJ1dHRvbiAhPT0gdW5kZWZpbmVkICYmIGUuYnV0dG9uICE9PSAwKSB7IHJldHVybiB9XG4gIC8vIGRvbid0IHJlZGlyZWN0IGlmIGB0YXJnZXQ9XCJfYmxhbmtcImBcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChlLnRhcmdldCAmJiBlLnRhcmdldC5nZXRBdHRyaWJ1dGUpIHtcbiAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCd0YXJnZXQnKVxuICAgIGlmICgvXFxiX2JsYW5rXFxiL2kudGVzdCh0YXJnZXQpKSB7IHJldHVybiB9XG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcbiAgcmV0dXJuIHRydWVcbn1cblxuZnVuY3Rpb24gZmluZEFuY2hvciAoY2hpbGRyZW4pIHtcbiAgaWYgKGNoaWxkcmVuKSB7XG4gICAgdmFyIGNoaWxkXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGQgPSBjaGlsZHJlbltpXVxuICAgICAgaWYgKGNoaWxkLnRhZyA9PT0gJ2EnKSB7XG4gICAgICAgIHJldHVybiBjaGlsZFxuICAgICAgfVxuICAgICAgaWYgKGNoaWxkLmNoaWxkcmVuICYmIChjaGlsZCA9IGZpbmRBbmNob3IoY2hpbGQuY2hpbGRyZW4pKSkge1xuICAgICAgICByZXR1cm4gY2hpbGRcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxudmFyIF9WdWVcblxuZnVuY3Rpb24gaW5zdGFsbCAoVnVlKSB7XG4gIGlmIChpbnN0YWxsLmluc3RhbGxlZCkgeyByZXR1cm4gfVxuICBpbnN0YWxsLmluc3RhbGxlZCA9IHRydWVcblxuICBfVnVlID0gVnVlXG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZ1ZS5wcm90b3R5cGUsICckcm91dGVyJywge1xuICAgIGdldDogZnVuY3Rpb24gZ2V0ICgpIHsgcmV0dXJuIHRoaXMuJHJvb3QuX3JvdXRlciB9XG4gIH0pXG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZ1ZS5wcm90b3R5cGUsICckcm91dGUnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQkMSAoKSB7IHJldHVybiB0aGlzLiRyb290Ll9yb3V0ZSB9XG4gIH0pXG5cbiAgVnVlLm1peGluKHtcbiAgICBiZWZvcmVDcmVhdGU6IGZ1bmN0aW9uIGJlZm9yZUNyZWF0ZSAoKSB7XG4gICAgICBpZiAodGhpcy4kb3B0aW9ucy5yb3V0ZXIpIHtcbiAgICAgICAgdGhpcy5fcm91dGVyID0gdGhpcy4kb3B0aW9ucy5yb3V0ZXJcbiAgICAgICAgdGhpcy5fcm91dGVyLmluaXQodGhpcylcbiAgICAgICAgVnVlLnV0aWwuZGVmaW5lUmVhY3RpdmUodGhpcywgJ19yb3V0ZScsIHRoaXMuX3JvdXRlci5oaXN0b3J5LmN1cnJlbnQpXG4gICAgICB9XG4gICAgfVxuICB9KVxuXG4gIFZ1ZS5jb21wb25lbnQoJ3JvdXRlci12aWV3JywgVmlldylcbiAgVnVlLmNvbXBvbmVudCgncm91dGVyLWxpbmsnLCBMaW5rKVxuXG4gIHZhciBzdHJhdHMgPSBWdWUuY29uZmlnLm9wdGlvbk1lcmdlU3RyYXRlZ2llc1xuICAvLyB1c2UgdGhlIHNhbWUgaG9vayBtZXJnaW5nIHN0cmF0ZWd5IGZvciByb3V0ZSBob29rc1xuICBzdHJhdHMuYmVmb3JlUm91dGVFbnRlciA9IHN0cmF0cy5iZWZvcmVSb3V0ZUxlYXZlID0gc3RyYXRzLmNyZWF0ZWRcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIHJlc29sdmVQYXRoIChcbiAgcmVsYXRpdmUsXG4gIGJhc2UsXG4gIGFwcGVuZFxuKSB7XG4gIGlmIChyZWxhdGl2ZS5jaGFyQXQoMCkgPT09ICcvJykge1xuICAgIHJldHVybiByZWxhdGl2ZVxuICB9XG5cbiAgaWYgKHJlbGF0aXZlLmNoYXJBdCgwKSA9PT0gJz8nIHx8IHJlbGF0aXZlLmNoYXJBdCgwKSA9PT0gJyMnKSB7XG4gICAgcmV0dXJuIGJhc2UgKyByZWxhdGl2ZVxuICB9XG5cbiAgdmFyIHN0YWNrID0gYmFzZS5zcGxpdCgnLycpXG5cbiAgLy8gcmVtb3ZlIHRyYWlsaW5nIHNlZ21lbnQgaWY6XG4gIC8vIC0gbm90IGFwcGVuZGluZ1xuICAvLyAtIGFwcGVuZGluZyB0byB0cmFpbGluZyBzbGFzaCAobGFzdCBzZWdtZW50IGlzIGVtcHR5KVxuICBpZiAoIWFwcGVuZCB8fCAhc3RhY2tbc3RhY2subGVuZ3RoIC0gMV0pIHtcbiAgICBzdGFjay5wb3AoKVxuICB9XG5cbiAgLy8gcmVzb2x2ZSByZWxhdGl2ZSBwYXRoXG4gIHZhciBzZWdtZW50cyA9IHJlbGF0aXZlLnJlcGxhY2UoL15cXC8vLCAnJykuc3BsaXQoJy8nKVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHNlZ21lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNlZ21lbnQgPSBzZWdtZW50c1tpXVxuICAgIGlmIChzZWdtZW50ID09PSAnLicpIHtcbiAgICAgIGNvbnRpbnVlXG4gICAgfSBlbHNlIGlmIChzZWdtZW50ID09PSAnLi4nKSB7XG4gICAgICBzdGFjay5wb3AoKVxuICAgIH0gZWxzZSB7XG4gICAgICBzdGFjay5wdXNoKHNlZ21lbnQpXG4gICAgfVxuICB9XG5cbiAgLy8gZW5zdXJlIGxlYWRpbmcgc2xhc2hcbiAgaWYgKHN0YWNrWzBdICE9PSAnJykge1xuICAgIHN0YWNrLnVuc2hpZnQoJycpXG4gIH1cblxuICByZXR1cm4gc3RhY2suam9pbignLycpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGF0aCAocGF0aCkge1xuICB2YXIgaGFzaCA9ICcnXG4gIHZhciBxdWVyeSA9ICcnXG5cbiAgdmFyIGhhc2hJbmRleCA9IHBhdGguaW5kZXhPZignIycpXG4gIGlmIChoYXNoSW5kZXggPj0gMCkge1xuICAgIGhhc2ggPSBwYXRoLnNsaWNlKGhhc2hJbmRleClcbiAgICBwYXRoID0gcGF0aC5zbGljZSgwLCBoYXNoSW5kZXgpXG4gIH1cblxuICB2YXIgcXVlcnlJbmRleCA9IHBhdGguaW5kZXhPZignPycpXG4gIGlmIChxdWVyeUluZGV4ID49IDApIHtcbiAgICBxdWVyeSA9IHBhdGguc2xpY2UocXVlcnlJbmRleCArIDEpXG4gICAgcGF0aCA9IHBhdGguc2xpY2UoMCwgcXVlcnlJbmRleClcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcGF0aDogcGF0aCxcbiAgICBxdWVyeTogcXVlcnksXG4gICAgaGFzaDogaGFzaFxuICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFuUGF0aCAocGF0aCkge1xuICByZXR1cm4gcGF0aC5yZXBsYWNlKC9cXC9cXC8vZywgJy8nKVxufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gY3JlYXRlUm91dGVNYXAgKHJvdXRlcykge1xuICB2YXIgcGF0aE1hcCA9IE9iamVjdC5jcmVhdGUobnVsbClcbiAgdmFyIG5hbWVNYXAgPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcm91dGVzLmZvckVhY2goZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgYWRkUm91dGVSZWNvcmQocGF0aE1hcCwgbmFtZU1hcCwgcm91dGUpXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBwYXRoTWFwOiBwYXRoTWFwLFxuICAgIG5hbWVNYXA6IG5hbWVNYXBcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRSb3V0ZVJlY29yZCAoXG4gIHBhdGhNYXAsXG4gIG5hbWVNYXAsXG4gIHJvdXRlLFxuICBwYXJlbnQsXG4gIG1hdGNoQXNcbikge1xuICB2YXIgcGF0aCA9IHJvdXRlLnBhdGg7XG4gIHZhciBuYW1lID0gcm91dGUubmFtZTtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBhc3NlcnQocGF0aCAhPSBudWxsLCBcIlxcXCJwYXRoXFxcIiBpcyByZXF1aXJlZCBpbiBhIHJvdXRlIGNvbmZpZ3VyYXRpb24uXCIpXG4gICAgYXNzZXJ0KFxuICAgICAgdHlwZW9mIHJvdXRlLmNvbXBvbmVudCAhPT0gJ3N0cmluZycsXG4gICAgICBcInJvdXRlIGNvbmZpZyBcXFwiY29tcG9uZW50XFxcIiBmb3IgcGF0aDogXCIgKyAoU3RyaW5nKHBhdGggfHwgbmFtZSkpICsgXCIgY2Fubm90IGJlIGEgXCIgK1xuICAgICAgXCJzdHJpbmcgaWQuIFVzZSBhbiBhY3R1YWwgY29tcG9uZW50IGluc3RlYWQuXCJcbiAgICApXG4gIH1cblxuICB2YXIgcmVjb3JkID0ge1xuICAgIHBhdGg6IG5vcm1hbGl6ZVBhdGgocGF0aCwgcGFyZW50KSxcbiAgICBjb21wb25lbnRzOiByb3V0ZS5jb21wb25lbnRzIHx8IHsgZGVmYXVsdDogcm91dGUuY29tcG9uZW50IH0sXG4gICAgaW5zdGFuY2VzOiB7fSxcbiAgICBuYW1lOiBuYW1lLFxuICAgIHBhcmVudDogcGFyZW50LFxuICAgIG1hdGNoQXM6IG1hdGNoQXMsXG4gICAgcmVkaXJlY3Q6IHJvdXRlLnJlZGlyZWN0LFxuICAgIGJlZm9yZUVudGVyOiByb3V0ZS5iZWZvcmVFbnRlcixcbiAgICBtZXRhOiByb3V0ZS5tZXRhIHx8IHt9XG4gIH1cblxuICBpZiAocm91dGUuY2hpbGRyZW4pIHtcbiAgICAvLyBXYXJuIGlmIHJvdXRlIGlzIG5hbWVkIGFuZCBoYXMgYSBkZWZhdWx0IGNoaWxkIHJvdXRlLlxuICAgIC8vIElmIHVzZXJzIG5hdmlnYXRlIHRvIHRoaXMgcm91dGUgYnkgbmFtZSwgdGhlIGRlZmF1bHQgY2hpbGQgd2lsbFxuICAgIC8vIG5vdCBiZSByZW5kZXJlZCAoR0ggSXNzdWUgIzYyOSlcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHJvdXRlLm5hbWUgJiYgcm91dGUuY2hpbGRyZW4uc29tZShmdW5jdGlvbiAoY2hpbGQpIHsgcmV0dXJuIC9eXFwvPyQvLnRlc3QoY2hpbGQucGF0aCk7IH0pKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgXCJOYW1lZCBSb3V0ZSAnXCIgKyAocm91dGUubmFtZSkgKyBcIicgaGFzIGEgZGVmYXVsdCBjaGlsZCByb3V0ZS4gXCIgK1xuICAgICAgICAgIFwiV2hlbiBuYXZpZ2F0aW5nIHRvIHRoaXMgbmFtZWQgcm91dGUgKDp0bz1cXFwie25hbWU6ICdcIiArIChyb3V0ZS5uYW1lKSArIFwiJ1xcXCIpLCBcIiArXG4gICAgICAgICAgXCJ0aGUgZGVmYXVsdCBjaGlsZCByb3V0ZSB3aWxsIG5vdCBiZSByZW5kZXJlZC4gUmVtb3ZlIHRoZSBuYW1lIGZyb20gXCIgK1xuICAgICAgICAgIFwidGhpcyByb3V0ZSBhbmQgdXNlIHRoZSBuYW1lIG9mIHRoZSBkZWZhdWx0IGNoaWxkIHJvdXRlIGZvciBuYW1lZCBcIiArXG4gICAgICAgICAgXCJsaW5rcyBpbnN0ZWFkLlwiXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gICAgcm91dGUuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgIHZhciBjaGlsZE1hdGNoQXMgPSBtYXRjaEFzXG4gICAgICAgID8gY2xlYW5QYXRoKChtYXRjaEFzICsgXCIvXCIgKyAoY2hpbGQucGF0aCkpKVxuICAgICAgICA6IHVuZGVmaW5lZFxuICAgICAgYWRkUm91dGVSZWNvcmQocGF0aE1hcCwgbmFtZU1hcCwgY2hpbGQsIHJlY29yZCwgY2hpbGRNYXRjaEFzKVxuICAgIH0pXG4gIH1cblxuICBpZiAocm91dGUuYWxpYXMgIT09IHVuZGVmaW5lZCkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHJvdXRlLmFsaWFzKSkge1xuICAgICAgcm91dGUuYWxpYXMuZm9yRWFjaChmdW5jdGlvbiAoYWxpYXMpIHtcbiAgICAgICAgdmFyIGFsaWFzUm91dGUgPSB7XG4gICAgICAgICAgcGF0aDogYWxpYXMsXG4gICAgICAgICAgY2hpbGRyZW46IHJvdXRlLmNoaWxkcmVuXG4gICAgICAgIH1cbiAgICAgICAgYWRkUm91dGVSZWNvcmQocGF0aE1hcCwgbmFtZU1hcCwgYWxpYXNSb3V0ZSwgcGFyZW50LCByZWNvcmQucGF0aClcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhbGlhc1JvdXRlID0ge1xuICAgICAgICBwYXRoOiByb3V0ZS5hbGlhcyxcbiAgICAgICAgY2hpbGRyZW46IHJvdXRlLmNoaWxkcmVuXG4gICAgICB9XG4gICAgICBhZGRSb3V0ZVJlY29yZChwYXRoTWFwLCBuYW1lTWFwLCBhbGlhc1JvdXRlLCBwYXJlbnQsIHJlY29yZC5wYXRoKVxuICAgIH1cbiAgfVxuXG4gIGlmICghcGF0aE1hcFtyZWNvcmQucGF0aF0pIHtcbiAgICBwYXRoTWFwW3JlY29yZC5wYXRoXSA9IHJlY29yZFxuICB9XG5cbiAgaWYgKG5hbWUpIHtcbiAgICBpZiAoIW5hbWVNYXBbbmFtZV0pIHtcbiAgICAgIG5hbWVNYXBbbmFtZV0gPSByZWNvcmRcbiAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHdhcm4oXG4gICAgICAgIGZhbHNlLFxuICAgICAgICBcIkR1cGxpY2F0ZSBuYW1lZCByb3V0ZXMgZGVmaW5pdGlvbjogXCIgK1xuICAgICAgICBcInsgbmFtZTogXFxcIlwiICsgbmFtZSArIFwiXFxcIiwgcGF0aDogXFxcIlwiICsgKHJlY29yZC5wYXRoKSArIFwiXFxcIiB9XCJcbiAgICAgIClcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplUGF0aCAocGF0aCwgcGFyZW50KSB7XG4gIHBhdGggPSBwYXRoLnJlcGxhY2UoL1xcLyQvLCAnJylcbiAgaWYgKHBhdGhbMF0gPT09ICcvJykgeyByZXR1cm4gcGF0aCB9XG4gIGlmIChwYXJlbnQgPT0gbnVsbCkgeyByZXR1cm4gcGF0aCB9XG4gIHJldHVybiBjbGVhblBhdGgoKChwYXJlbnQucGF0aCkgKyBcIi9cIiArIHBhdGgpKVxufVxuXG52YXIgX19tb2R1bGVFeHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoYXJyKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJyKSA9PSAnW29iamVjdCBBcnJheV0nO1xufTtcblxudmFyIGlzYXJyYXkgPSBfX21vZHVsZUV4cG9ydHNcblxuLyoqXG4gKiBFeHBvc2UgYHBhdGhUb1JlZ2V4cGAuXG4gKi9cbnZhciBpbmRleCA9IHBhdGhUb1JlZ2V4cFxudmFyIHBhcnNlXzEgPSBwYXJzZVxudmFyIGNvbXBpbGVfMSA9IGNvbXBpbGVcbnZhciB0b2tlbnNUb0Z1bmN0aW9uXzEgPSB0b2tlbnNUb0Z1bmN0aW9uXG52YXIgdG9rZW5zVG9SZWdFeHBfMSA9IHRva2Vuc1RvUmVnRXhwXG5cbi8qKlxuICogVGhlIG1haW4gcGF0aCBtYXRjaGluZyByZWdleHAgdXRpbGl0eS5cbiAqXG4gKiBAdHlwZSB7UmVnRXhwfVxuICovXG52YXIgUEFUSF9SRUdFWFAgPSBuZXcgUmVnRXhwKFtcbiAgLy8gTWF0Y2ggZXNjYXBlZCBjaGFyYWN0ZXJzIHRoYXQgd291bGQgb3RoZXJ3aXNlIGFwcGVhciBpbiBmdXR1cmUgbWF0Y2hlcy5cbiAgLy8gVGhpcyBhbGxvd3MgdGhlIHVzZXIgdG8gZXNjYXBlIHNwZWNpYWwgY2hhcmFjdGVycyB0aGF0IHdvbid0IHRyYW5zZm9ybS5cbiAgJyhcXFxcXFxcXC4pJyxcbiAgLy8gTWF0Y2ggRXhwcmVzcy1zdHlsZSBwYXJhbWV0ZXJzIGFuZCB1bi1uYW1lZCBwYXJhbWV0ZXJzIHdpdGggYSBwcmVmaXhcbiAgLy8gYW5kIG9wdGlvbmFsIHN1ZmZpeGVzLiBNYXRjaGVzIGFwcGVhciBhczpcbiAgLy9cbiAgLy8gXCIvOnRlc3QoXFxcXGQrKT9cIiA9PiBbXCIvXCIsIFwidGVzdFwiLCBcIlxcZCtcIiwgdW5kZWZpbmVkLCBcIj9cIiwgdW5kZWZpbmVkXVxuICAvLyBcIi9yb3V0ZShcXFxcZCspXCIgID0+IFt1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBcIlxcZCtcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWRdXG4gIC8vIFwiLypcIiAgICAgICAgICAgID0+IFtcIi9cIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBcIipcIl1cbiAgJyhbXFxcXC8uXSk/KD86KD86XFxcXDooXFxcXHcrKSg/OlxcXFwoKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcKCldKSspXFxcXCkpP3xcXFxcKCgoPzpcXFxcXFxcXC58W15cXFxcXFxcXCgpXSkrKVxcXFwpKShbKyo/XSk/fChcXFxcKikpJ1xuXS5qb2luKCd8JyksICdnJylcblxuLyoqXG4gKiBQYXJzZSBhIHN0cmluZyBmb3IgdGhlIHJhdyB0b2tlbnMuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSAgc3RyXG4gKiBAcGFyYW0gIHtPYmplY3Q9fSBvcHRpb25zXG4gKiBAcmV0dXJuIHshQXJyYXl9XG4gKi9cbmZ1bmN0aW9uIHBhcnNlIChzdHIsIG9wdGlvbnMpIHtcbiAgdmFyIHRva2VucyA9IFtdXG4gIHZhciBrZXkgPSAwXG4gIHZhciBpbmRleCA9IDBcbiAgdmFyIHBhdGggPSAnJ1xuICB2YXIgZGVmYXVsdERlbGltaXRlciA9IG9wdGlvbnMgJiYgb3B0aW9ucy5kZWxpbWl0ZXIgfHwgJy8nXG4gIHZhciByZXNcblxuICB3aGlsZSAoKHJlcyA9IFBBVEhfUkVHRVhQLmV4ZWMoc3RyKSkgIT0gbnVsbCkge1xuICAgIHZhciBtID0gcmVzWzBdXG4gICAgdmFyIGVzY2FwZWQgPSByZXNbMV1cbiAgICB2YXIgb2Zmc2V0ID0gcmVzLmluZGV4XG4gICAgcGF0aCArPSBzdHIuc2xpY2UoaW5kZXgsIG9mZnNldClcbiAgICBpbmRleCA9IG9mZnNldCArIG0ubGVuZ3RoXG5cbiAgICAvLyBJZ25vcmUgYWxyZWFkeSBlc2NhcGVkIHNlcXVlbmNlcy5cbiAgICBpZiAoZXNjYXBlZCkge1xuICAgICAgcGF0aCArPSBlc2NhcGVkWzFdXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIHZhciBuZXh0ID0gc3RyW2luZGV4XVxuICAgIHZhciBwcmVmaXggPSByZXNbMl1cbiAgICB2YXIgbmFtZSA9IHJlc1szXVxuICAgIHZhciBjYXB0dXJlID0gcmVzWzRdXG4gICAgdmFyIGdyb3VwID0gcmVzWzVdXG4gICAgdmFyIG1vZGlmaWVyID0gcmVzWzZdXG4gICAgdmFyIGFzdGVyaXNrID0gcmVzWzddXG5cbiAgICAvLyBQdXNoIHRoZSBjdXJyZW50IHBhdGggb250byB0aGUgdG9rZW5zLlxuICAgIGlmIChwYXRoKSB7XG4gICAgICB0b2tlbnMucHVzaChwYXRoKVxuICAgICAgcGF0aCA9ICcnXG4gICAgfVxuXG4gICAgdmFyIHBhcnRpYWwgPSBwcmVmaXggIT0gbnVsbCAmJiBuZXh0ICE9IG51bGwgJiYgbmV4dCAhPT0gcHJlZml4XG4gICAgdmFyIHJlcGVhdCA9IG1vZGlmaWVyID09PSAnKycgfHwgbW9kaWZpZXIgPT09ICcqJ1xuICAgIHZhciBvcHRpb25hbCA9IG1vZGlmaWVyID09PSAnPycgfHwgbW9kaWZpZXIgPT09ICcqJ1xuICAgIHZhciBkZWxpbWl0ZXIgPSByZXNbMl0gfHwgZGVmYXVsdERlbGltaXRlclxuICAgIHZhciBwYXR0ZXJuID0gY2FwdHVyZSB8fCBncm91cFxuXG4gICAgdG9rZW5zLnB1c2goe1xuICAgICAgbmFtZTogbmFtZSB8fCBrZXkrKyxcbiAgICAgIHByZWZpeDogcHJlZml4IHx8ICcnLFxuICAgICAgZGVsaW1pdGVyOiBkZWxpbWl0ZXIsXG4gICAgICBvcHRpb25hbDogb3B0aW9uYWwsXG4gICAgICByZXBlYXQ6IHJlcGVhdCxcbiAgICAgIHBhcnRpYWw6IHBhcnRpYWwsXG4gICAgICBhc3RlcmlzazogISFhc3RlcmlzayxcbiAgICAgIHBhdHRlcm46IHBhdHRlcm4gPyBlc2NhcGVHcm91cChwYXR0ZXJuKSA6IChhc3RlcmlzayA/ICcuKicgOiAnW14nICsgZXNjYXBlU3RyaW5nKGRlbGltaXRlcikgKyAnXSs/JylcbiAgICB9KVxuICB9XG5cbiAgLy8gTWF0Y2ggYW55IGNoYXJhY3RlcnMgc3RpbGwgcmVtYWluaW5nLlxuICBpZiAoaW5kZXggPCBzdHIubGVuZ3RoKSB7XG4gICAgcGF0aCArPSBzdHIuc3Vic3RyKGluZGV4KVxuICB9XG5cbiAgLy8gSWYgdGhlIHBhdGggZXhpc3RzLCBwdXNoIGl0IG9udG8gdGhlIGVuZC5cbiAgaWYgKHBhdGgpIHtcbiAgICB0b2tlbnMucHVzaChwYXRoKVxuICB9XG5cbiAgcmV0dXJuIHRva2Vuc1xufVxuXG4vKipcbiAqIENvbXBpbGUgYSBzdHJpbmcgdG8gYSB0ZW1wbGF0ZSBmdW5jdGlvbiBmb3IgdGhlIHBhdGguXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSAgICAgICAgICAgICBzdHJcbiAqIEBwYXJhbSAge09iamVjdD19ICAgICAgICAgICAgb3B0aW9uc1xuICogQHJldHVybiB7IWZ1bmN0aW9uKE9iamVjdD0sIE9iamVjdD0pfVxuICovXG5mdW5jdGlvbiBjb21waWxlIChzdHIsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIHRva2Vuc1RvRnVuY3Rpb24ocGFyc2Uoc3RyLCBvcHRpb25zKSlcbn1cblxuLyoqXG4gKiBQcmV0dGllciBlbmNvZGluZyBvZiBVUkkgcGF0aCBzZWdtZW50cy5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGVuY29kZVVSSUNvbXBvbmVudFByZXR0eSAoc3RyKSB7XG4gIHJldHVybiBlbmNvZGVVUkkoc3RyKS5yZXBsYWNlKC9bXFwvPyNdL2csIGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0dXJuICclJyArIGMuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKVxuICB9KVxufVxuXG4vKipcbiAqIEVuY29kZSB0aGUgYXN0ZXJpc2sgcGFyYW1ldGVyLiBTaW1pbGFyIHRvIGBwcmV0dHlgLCBidXQgYWxsb3dzIHNsYXNoZXMuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBlbmNvZGVBc3RlcmlzayAoc3RyKSB7XG4gIHJldHVybiBlbmNvZGVVUkkoc3RyKS5yZXBsYWNlKC9bPyNdL2csIGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0dXJuICclJyArIGMuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKVxuICB9KVxufVxuXG4vKipcbiAqIEV4cG9zZSBhIG1ldGhvZCBmb3IgdHJhbnNmb3JtaW5nIHRva2VucyBpbnRvIHRoZSBwYXRoIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb0Z1bmN0aW9uICh0b2tlbnMpIHtcbiAgLy8gQ29tcGlsZSBhbGwgdGhlIHRva2VucyBpbnRvIHJlZ2V4cHMuXG4gIHZhciBtYXRjaGVzID0gbmV3IEFycmF5KHRva2Vucy5sZW5ndGgpXG5cbiAgLy8gQ29tcGlsZSBhbGwgdGhlIHBhdHRlcm5zIGJlZm9yZSBjb21waWxhdGlvbi5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodHlwZW9mIHRva2Vuc1tpXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIG1hdGNoZXNbaV0gPSBuZXcgUmVnRXhwKCdeKD86JyArIHRva2Vuc1tpXS5wYXR0ZXJuICsgJykkJylcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKG9iaiwgb3B0cykge1xuICAgIHZhciBwYXRoID0gJydcbiAgICB2YXIgZGF0YSA9IG9iaiB8fCB7fVxuICAgIHZhciBvcHRpb25zID0gb3B0cyB8fCB7fVxuICAgIHZhciBlbmNvZGUgPSBvcHRpb25zLnByZXR0eSA/IGVuY29kZVVSSUNvbXBvbmVudFByZXR0eSA6IGVuY29kZVVSSUNvbXBvbmVudFxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXVxuXG4gICAgICBpZiAodHlwZW9mIHRva2VuID09PSAnc3RyaW5nJykge1xuICAgICAgICBwYXRoICs9IHRva2VuXG5cbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgdmFyIHZhbHVlID0gZGF0YVt0b2tlbi5uYW1lXVxuICAgICAgdmFyIHNlZ21lbnRcblxuICAgICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgICAgaWYgKHRva2VuLm9wdGlvbmFsKSB7XG4gICAgICAgICAgLy8gUHJlcGVuZCBwYXJ0aWFsIHNlZ21lbnQgcHJlZml4ZXMuXG4gICAgICAgICAgaWYgKHRva2VuLnBhcnRpYWwpIHtcbiAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBcIicgKyB0b2tlbi5uYW1lICsgJ1wiIHRvIGJlIGRlZmluZWQnKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChpc2FycmF5KHZhbHVlKSkge1xuICAgICAgICBpZiAoIXRva2VuLnJlcGVhdCkge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIFwiJyArIHRva2VuLm5hbWUgKyAnXCIgdG8gbm90IHJlcGVhdCwgYnV0IHJlY2VpdmVkIGAnICsgSlNPTi5zdHJpbmdpZnkodmFsdWUpICsgJ2AnKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGlmICh0b2tlbi5vcHRpb25hbCkge1xuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgXCInICsgdG9rZW4ubmFtZSArICdcIiB0byBub3QgYmUgZW1wdHknKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsdWUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBzZWdtZW50ID0gZW5jb2RlKHZhbHVlW2pdKVxuXG4gICAgICAgICAgaWYgKCFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIGFsbCBcIicgKyB0b2tlbi5uYW1lICsgJ1wiIHRvIG1hdGNoIFwiJyArIHRva2VuLnBhdHRlcm4gKyAnXCIsIGJ1dCByZWNlaXZlZCBgJyArIEpTT04uc3RyaW5naWZ5KHNlZ21lbnQpICsgJ2AnKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHBhdGggKz0gKGogPT09IDAgPyB0b2tlbi5wcmVmaXggOiB0b2tlbi5kZWxpbWl0ZXIpICsgc2VnbWVudFxuICAgICAgICB9XG5cbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgc2VnbWVudCA9IHRva2VuLmFzdGVyaXNrID8gZW5jb2RlQXN0ZXJpc2sodmFsdWUpIDogZW5jb2RlKHZhbHVlKVxuXG4gICAgICBpZiAoIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBcIicgKyB0b2tlbi5uYW1lICsgJ1wiIHRvIG1hdGNoIFwiJyArIHRva2VuLnBhdHRlcm4gKyAnXCIsIGJ1dCByZWNlaXZlZCBcIicgKyBzZWdtZW50ICsgJ1wiJylcbiAgICAgIH1cblxuICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhdGhcbiAgfVxufVxuXG4vKipcbiAqIEVzY2FwZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZXNjYXBlU3RyaW5nIChzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4rKj89XiE6JHt9KClbXFxdfFxcL1xcXFxdKS9nLCAnXFxcXCQxJylcbn1cblxuLyoqXG4gKiBFc2NhcGUgdGhlIGNhcHR1cmluZyBncm91cCBieSBlc2NhcGluZyBzcGVjaWFsIGNoYXJhY3RlcnMgYW5kIG1lYW5pbmcuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSBncm91cFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBlc2NhcGVHcm91cCAoZ3JvdXApIHtcbiAgcmV0dXJuIGdyb3VwLnJlcGxhY2UoLyhbPSE6JFxcLygpXSkvZywgJ1xcXFwkMScpXG59XG5cbi8qKlxuICogQXR0YWNoIHRoZSBrZXlzIGFzIGEgcHJvcGVydHkgb2YgdGhlIHJlZ2V4cC5cbiAqXG4gKiBAcGFyYW0gIHshUmVnRXhwfSByZVxuICogQHBhcmFtICB7QXJyYXl9ICAga2V5c1xuICogQHJldHVybiB7IVJlZ0V4cH1cbiAqL1xuZnVuY3Rpb24gYXR0YWNoS2V5cyAocmUsIGtleXMpIHtcbiAgcmUua2V5cyA9IGtleXNcbiAgcmV0dXJuIHJlXG59XG5cbi8qKlxuICogR2V0IHRoZSBmbGFncyBmb3IgYSByZWdleHAgZnJvbSB0aGUgb3B0aW9ucy5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZmxhZ3MgKG9wdGlvbnMpIHtcbiAgcmV0dXJuIG9wdGlvbnMuc2Vuc2l0aXZlID8gJycgOiAnaSdcbn1cblxuLyoqXG4gKiBQdWxsIG91dCBrZXlzIGZyb20gYSByZWdleHAuXG4gKlxuICogQHBhcmFtICB7IVJlZ0V4cH0gcGF0aFxuICogQHBhcmFtICB7IUFycmF5fSAga2V5c1xuICogQHJldHVybiB7IVJlZ0V4cH1cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9SZWdleHAgKHBhdGgsIGtleXMpIHtcbiAgLy8gVXNlIGEgbmVnYXRpdmUgbG9va2FoZWFkIHRvIG1hdGNoIG9ubHkgY2FwdHVyaW5nIGdyb3Vwcy5cbiAgdmFyIGdyb3VwcyA9IHBhdGguc291cmNlLm1hdGNoKC9cXCgoPyFcXD8pL2cpXG5cbiAgaWYgKGdyb3Vwcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXlzLnB1c2goe1xuICAgICAgICBuYW1lOiBpLFxuICAgICAgICBwcmVmaXg6IG51bGwsXG4gICAgICAgIGRlbGltaXRlcjogbnVsbCxcbiAgICAgICAgb3B0aW9uYWw6IGZhbHNlLFxuICAgICAgICByZXBlYXQ6IGZhbHNlLFxuICAgICAgICBwYXJ0aWFsOiBmYWxzZSxcbiAgICAgICAgYXN0ZXJpc2s6IGZhbHNlLFxuICAgICAgICBwYXR0ZXJuOiBudWxsXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhdHRhY2hLZXlzKHBhdGgsIGtleXMpXG59XG5cbi8qKlxuICogVHJhbnNmb3JtIGFuIGFycmF5IGludG8gYSByZWdleHAuXG4gKlxuICogQHBhcmFtICB7IUFycmF5fSAgcGF0aFxuICogQHBhcmFtICB7QXJyYXl9ICAga2V5c1xuICogQHBhcmFtICB7IU9iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7IVJlZ0V4cH1cbiAqL1xuZnVuY3Rpb24gYXJyYXlUb1JlZ2V4cCAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICB2YXIgcGFydHMgPSBbXVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcGF0aC5sZW5ndGg7IGkrKykge1xuICAgIHBhcnRzLnB1c2gocGF0aFRvUmVnZXhwKHBhdGhbaV0sIGtleXMsIG9wdGlvbnMpLnNvdXJjZSlcbiAgfVxuXG4gIHZhciByZWdleHAgPSBuZXcgUmVnRXhwKCcoPzonICsgcGFydHMuam9pbignfCcpICsgJyknLCBmbGFncyhvcHRpb25zKSlcblxuICByZXR1cm4gYXR0YWNoS2V5cyhyZWdleHAsIGtleXMpXG59XG5cbi8qKlxuICogQ3JlYXRlIGEgcGF0aCByZWdleHAgZnJvbSBzdHJpbmcgaW5wdXQuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSAgcGF0aFxuICogQHBhcmFtICB7IUFycmF5fSAga2V5c1xuICogQHBhcmFtICB7IU9iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7IVJlZ0V4cH1cbiAqL1xuZnVuY3Rpb24gc3RyaW5nVG9SZWdleHAgKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIHRva2Vuc1RvUmVnRXhwKHBhcnNlKHBhdGgsIG9wdGlvbnMpLCBrZXlzLCBvcHRpb25zKVxufVxuXG4vKipcbiAqIEV4cG9zZSBhIGZ1bmN0aW9uIGZvciB0YWtpbmcgdG9rZW5zIGFuZCByZXR1cm5pbmcgYSBSZWdFeHAuXG4gKlxuICogQHBhcmFtICB7IUFycmF5fSAgICAgICAgICB0b2tlbnNcbiAqIEBwYXJhbSAgeyhBcnJheXxPYmplY3QpPX0ga2V5c1xuICogQHBhcmFtICB7T2JqZWN0PX0gICAgICAgICBvcHRpb25zXG4gKiBAcmV0dXJuIHshUmVnRXhwfVxuICovXG5mdW5jdGlvbiB0b2tlbnNUb1JlZ0V4cCAodG9rZW5zLCBrZXlzLCBvcHRpb25zKSB7XG4gIGlmICghaXNhcnJheShrZXlzKSkge1xuICAgIG9wdGlvbnMgPSAvKiogQHR5cGUgeyFPYmplY3R9ICovIChrZXlzIHx8IG9wdGlvbnMpXG4gICAga2V5cyA9IFtdXG4gIH1cblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuXG4gIHZhciBzdHJpY3QgPSBvcHRpb25zLnN0cmljdFxuICB2YXIgZW5kID0gb3B0aW9ucy5lbmQgIT09IGZhbHNlXG4gIHZhciByb3V0ZSA9ICcnXG5cbiAgLy8gSXRlcmF0ZSBvdmVyIHRoZSB0b2tlbnMgYW5kIGNyZWF0ZSBvdXIgcmVnZXhwIHN0cmluZy5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV1cblxuICAgIGlmICh0eXBlb2YgdG9rZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICByb3V0ZSArPSBlc2NhcGVTdHJpbmcodG9rZW4pXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBwcmVmaXggPSBlc2NhcGVTdHJpbmcodG9rZW4ucHJlZml4KVxuICAgICAgdmFyIGNhcHR1cmUgPSAnKD86JyArIHRva2VuLnBhdHRlcm4gKyAnKSdcblxuICAgICAga2V5cy5wdXNoKHRva2VuKVxuXG4gICAgICBpZiAodG9rZW4ucmVwZWF0KSB7XG4gICAgICAgIGNhcHR1cmUgKz0gJyg/OicgKyBwcmVmaXggKyBjYXB0dXJlICsgJykqJ1xuICAgICAgfVxuXG4gICAgICBpZiAodG9rZW4ub3B0aW9uYWwpIHtcbiAgICAgICAgaWYgKCF0b2tlbi5wYXJ0aWFsKSB7XG4gICAgICAgICAgY2FwdHVyZSA9ICcoPzonICsgcHJlZml4ICsgJygnICsgY2FwdHVyZSArICcpKT8nXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2FwdHVyZSA9IHByZWZpeCArICcoJyArIGNhcHR1cmUgKyAnKT8nXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhcHR1cmUgPSBwcmVmaXggKyAnKCcgKyBjYXB0dXJlICsgJyknXG4gICAgICB9XG5cbiAgICAgIHJvdXRlICs9IGNhcHR1cmVcbiAgICB9XG4gIH1cblxuICB2YXIgZGVsaW1pdGVyID0gZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8ICcvJylcbiAgdmFyIGVuZHNXaXRoRGVsaW1pdGVyID0gcm91dGUuc2xpY2UoLWRlbGltaXRlci5sZW5ndGgpID09PSBkZWxpbWl0ZXJcblxuICAvLyBJbiBub24tc3RyaWN0IG1vZGUgd2UgYWxsb3cgYSBzbGFzaCBhdCB0aGUgZW5kIG9mIG1hdGNoLiBJZiB0aGUgcGF0aCB0b1xuICAvLyBtYXRjaCBhbHJlYWR5IGVuZHMgd2l0aCBhIHNsYXNoLCB3ZSByZW1vdmUgaXQgZm9yIGNvbnNpc3RlbmN5LiBUaGUgc2xhc2hcbiAgLy8gaXMgdmFsaWQgYXQgdGhlIGVuZCBvZiBhIHBhdGggbWF0Y2gsIG5vdCBpbiB0aGUgbWlkZGxlLiBUaGlzIGlzIGltcG9ydGFudFxuICAvLyBpbiBub24tZW5kaW5nIG1vZGUsIHdoZXJlIFwiL3Rlc3QvXCIgc2hvdWxkbid0IG1hdGNoIFwiL3Rlc3QvL3JvdXRlXCIuXG4gIGlmICghc3RyaWN0KSB7XG4gICAgcm91dGUgPSAoZW5kc1dpdGhEZWxpbWl0ZXIgPyByb3V0ZS5zbGljZSgwLCAtZGVsaW1pdGVyLmxlbmd0aCkgOiByb3V0ZSkgKyAnKD86JyArIGRlbGltaXRlciArICcoPz0kKSk/J1xuICB9XG5cbiAgaWYgKGVuZCkge1xuICAgIHJvdXRlICs9ICckJ1xuICB9IGVsc2Uge1xuICAgIC8vIEluIG5vbi1lbmRpbmcgbW9kZSwgd2UgbmVlZCB0aGUgY2FwdHVyaW5nIGdyb3VwcyB0byBtYXRjaCBhcyBtdWNoIGFzXG4gICAgLy8gcG9zc2libGUgYnkgdXNpbmcgYSBwb3NpdGl2ZSBsb29rYWhlYWQgdG8gdGhlIGVuZCBvciBuZXh0IHBhdGggc2VnbWVudC5cbiAgICByb3V0ZSArPSBzdHJpY3QgJiYgZW5kc1dpdGhEZWxpbWl0ZXIgPyAnJyA6ICcoPz0nICsgZGVsaW1pdGVyICsgJ3wkKSdcbiAgfVxuXG4gIHJldHVybiBhdHRhY2hLZXlzKG5ldyBSZWdFeHAoJ14nICsgcm91dGUsIGZsYWdzKG9wdGlvbnMpKSwga2V5cylcbn1cblxuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGdpdmVuIHBhdGggc3RyaW5nLCByZXR1cm5pbmcgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKlxuICogQW4gZW1wdHkgYXJyYXkgY2FuIGJlIHBhc3NlZCBpbiBmb3IgdGhlIGtleXMsIHdoaWNoIHdpbGwgaG9sZCB0aGVcbiAqIHBsYWNlaG9sZGVyIGtleSBkZXNjcmlwdGlvbnMuIEZvciBleGFtcGxlLCB1c2luZyBgL3VzZXIvOmlkYCwgYGtleXNgIHdpbGxcbiAqIGNvbnRhaW4gYFt7IG5hbWU6ICdpZCcsIGRlbGltaXRlcjogJy8nLCBvcHRpb25hbDogZmFsc2UsIHJlcGVhdDogZmFsc2UgfV1gLlxuICpcbiAqIEBwYXJhbSAgeyhzdHJpbmd8UmVnRXhwfEFycmF5KX0gcGF0aFxuICogQHBhcmFtICB7KEFycmF5fE9iamVjdCk9fSAgICAgICBrZXlzXG4gKiBAcGFyYW0gIHtPYmplY3Q9fSAgICAgICAgICAgICAgIG9wdGlvbnNcbiAqIEByZXR1cm4geyFSZWdFeHB9XG4gKi9cbmZ1bmN0aW9uIHBhdGhUb1JlZ2V4cCAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICBpZiAoIWlzYXJyYXkoa2V5cykpIHtcbiAgICBvcHRpb25zID0gLyoqIEB0eXBlIHshT2JqZWN0fSAqLyAoa2V5cyB8fCBvcHRpb25zKVxuICAgIGtleXMgPSBbXVxuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cblxuICBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgIHJldHVybiByZWdleHBUb1JlZ2V4cChwYXRoLCAvKiogQHR5cGUgeyFBcnJheX0gKi8gKGtleXMpKVxuICB9XG5cbiAgaWYgKGlzYXJyYXkocGF0aCkpIHtcbiAgICByZXR1cm4gYXJyYXlUb1JlZ2V4cCgvKiogQHR5cGUgeyFBcnJheX0gKi8gKHBhdGgpLCAvKiogQHR5cGUgeyFBcnJheX0gKi8gKGtleXMpLCBvcHRpb25zKVxuICB9XG5cbiAgcmV0dXJuIHN0cmluZ1RvUmVnZXhwKC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAocGF0aCksIC8qKiBAdHlwZSB7IUFycmF5fSAqLyAoa2V5cyksIG9wdGlvbnMpXG59XG5cbmluZGV4LnBhcnNlID0gcGFyc2VfMTtcbmluZGV4LmNvbXBpbGUgPSBjb21waWxlXzE7XG5pbmRleC50b2tlbnNUb0Z1bmN0aW9uID0gdG9rZW5zVG9GdW5jdGlvbl8xO1xuaW5kZXgudG9rZW5zVG9SZWdFeHAgPSB0b2tlbnNUb1JlZ0V4cF8xO1xuXG4vKiAgKi9cblxudmFyIHJlZ2V4cENhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG5mdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4IChwYXRoKSB7XG4gIHZhciBoaXQgPSByZWdleHBDYWNoZVtwYXRoXVxuICB2YXIga2V5cywgcmVnZXhwXG5cbiAgaWYgKGhpdCkge1xuICAgIGtleXMgPSBoaXQua2V5c1xuICAgIHJlZ2V4cCA9IGhpdC5yZWdleHBcbiAgfSBlbHNlIHtcbiAgICBrZXlzID0gW11cbiAgICByZWdleHAgPSBpbmRleChwYXRoLCBrZXlzKVxuICAgIHJlZ2V4cENhY2hlW3BhdGhdID0geyBrZXlzOiBrZXlzLCByZWdleHA6IHJlZ2V4cCB9XG4gIH1cblxuICByZXR1cm4geyBrZXlzOiBrZXlzLCByZWdleHA6IHJlZ2V4cCB9XG59XG5cbnZhciByZWdleHBDb21waWxlQ2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbmZ1bmN0aW9uIGZpbGxQYXJhbXMgKFxuICBwYXRoLFxuICBwYXJhbXMsXG4gIHJvdXRlTXNnXG4pIHtcbiAgdHJ5IHtcbiAgICB2YXIgZmlsbGVyID1cbiAgICAgIHJlZ2V4cENvbXBpbGVDYWNoZVtwYXRoXSB8fFxuICAgICAgKHJlZ2V4cENvbXBpbGVDYWNoZVtwYXRoXSA9IGluZGV4LmNvbXBpbGUocGF0aCkpXG4gICAgcmV0dXJuIGZpbGxlcihwYXJhbXMgfHwge30sIHsgcHJldHR5OiB0cnVlIH0pXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgd2FybihmYWxzZSwgKFwibWlzc2luZyBwYXJhbSBmb3IgXCIgKyByb3V0ZU1zZyArIFwiOiBcIiArIChlLm1lc3NhZ2UpKSlcbiAgICB9XG4gICAgcmV0dXJuICcnXG4gIH1cbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUxvY2F0aW9uIChcbiAgcmF3LFxuICBjdXJyZW50LFxuICBhcHBlbmRcbikge1xuICB2YXIgbmV4dCA9IHR5cGVvZiByYXcgPT09ICdzdHJpbmcnID8geyBwYXRoOiByYXcgfSA6IHJhd1xuICAvLyBuYW1lZCB0YXJnZXRcbiAgaWYgKG5leHQubmFtZSB8fCBuZXh0Ll9ub3JtYWxpemVkKSB7XG4gICAgcmV0dXJuIG5leHRcbiAgfVxuXG4gIC8vIHJlbGF0aXZlIHBhcmFtc1xuICBpZiAoIW5leHQucGF0aCAmJiBuZXh0LnBhcmFtcyAmJiBjdXJyZW50KSB7XG4gICAgbmV4dCA9IGFzc2lnbih7fSwgbmV4dClcbiAgICBuZXh0Ll9ub3JtYWxpemVkID0gdHJ1ZVxuICAgIHZhciBwYXJhbXMgPSBhc3NpZ24oYXNzaWduKHt9LCBjdXJyZW50LnBhcmFtcyksIG5leHQucGFyYW1zKVxuICAgIGlmIChjdXJyZW50Lm5hbWUpIHtcbiAgICAgIG5leHQubmFtZSA9IGN1cnJlbnQubmFtZVxuICAgICAgbmV4dC5wYXJhbXMgPSBwYXJhbXNcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnQubWF0Y2hlZCkge1xuICAgICAgdmFyIHJhd1BhdGggPSBjdXJyZW50Lm1hdGNoZWRbY3VycmVudC5tYXRjaGVkLmxlbmd0aCAtIDFdLnBhdGhcbiAgICAgIG5leHQucGF0aCA9IGZpbGxQYXJhbXMocmF3UGF0aCwgcGFyYW1zLCAoXCJwYXRoIFwiICsgKGN1cnJlbnQucGF0aCkpKVxuICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgd2FybihmYWxzZSwgXCJyZWxhdGl2ZSBwYXJhbXMgbmF2aWdhdGlvbiByZXF1aXJlcyBhIGN1cnJlbnQgcm91dGUuXCIpXG4gICAgfVxuICAgIHJldHVybiBuZXh0XG4gIH1cblxuICB2YXIgcGFyc2VkUGF0aCA9IHBhcnNlUGF0aChuZXh0LnBhdGggfHwgJycpXG4gIHZhciBiYXNlUGF0aCA9IChjdXJyZW50ICYmIGN1cnJlbnQucGF0aCkgfHwgJy8nXG4gIHZhciBwYXRoID0gcGFyc2VkUGF0aC5wYXRoXG4gICAgPyByZXNvbHZlUGF0aChwYXJzZWRQYXRoLnBhdGgsIGJhc2VQYXRoLCBhcHBlbmQgfHwgbmV4dC5hcHBlbmQpXG4gICAgOiAoY3VycmVudCAmJiBjdXJyZW50LnBhdGgpIHx8ICcvJ1xuICB2YXIgcXVlcnkgPSByZXNvbHZlUXVlcnkocGFyc2VkUGF0aC5xdWVyeSwgbmV4dC5xdWVyeSlcbiAgdmFyIGhhc2ggPSBuZXh0Lmhhc2ggfHwgcGFyc2VkUGF0aC5oYXNoXG4gIGlmIChoYXNoICYmIGhhc2guY2hhckF0KDApICE9PSAnIycpIHtcbiAgICBoYXNoID0gXCIjXCIgKyBoYXNoXG4gIH1cblxuICByZXR1cm4ge1xuICAgIF9ub3JtYWxpemVkOiB0cnVlLFxuICAgIHBhdGg6IHBhdGgsXG4gICAgcXVlcnk6IHF1ZXJ5LFxuICAgIGhhc2g6IGhhc2hcbiAgfVxufVxuXG5mdW5jdGlvbiBhc3NpZ24gKGEsIGIpIHtcbiAgZm9yICh2YXIga2V5IGluIGIpIHtcbiAgICBhW2tleV0gPSBiW2tleV1cbiAgfVxuICByZXR1cm4gYVxufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gY3JlYXRlTWF0Y2hlciAocm91dGVzKSB7XG4gIHZhciByZWYgPSBjcmVhdGVSb3V0ZU1hcChyb3V0ZXMpO1xuICB2YXIgcGF0aE1hcCA9IHJlZi5wYXRoTWFwO1xuICB2YXIgbmFtZU1hcCA9IHJlZi5uYW1lTWFwO1xuXG4gIGZ1bmN0aW9uIG1hdGNoIChcbiAgICByYXcsXG4gICAgY3VycmVudFJvdXRlLFxuICAgIHJlZGlyZWN0ZWRGcm9tXG4gICkge1xuICAgIHZhciBsb2NhdGlvbiA9IG5vcm1hbGl6ZUxvY2F0aW9uKHJhdywgY3VycmVudFJvdXRlKVxuICAgIHZhciBuYW1lID0gbG9jYXRpb24ubmFtZTtcblxuICAgIGlmIChuYW1lKSB7XG4gICAgICB2YXIgcmVjb3JkID0gbmFtZU1hcFtuYW1lXVxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgd2FybihyZWNvcmQsIChcIlJvdXRlIHdpdGggbmFtZSAnXCIgKyBuYW1lICsgXCInIGRvZXMgbm90IGV4aXN0XCIpKVxuICAgICAgfVxuICAgICAgdmFyIHBhcmFtTmFtZXMgPSBnZXRSb3V0ZVJlZ2V4KHJlY29yZC5wYXRoKS5rZXlzXG4gICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gIWtleS5vcHRpb25hbDsgfSlcbiAgICAgICAgLm1hcChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkubmFtZTsgfSlcblxuICAgICAgaWYgKHR5cGVvZiBsb2NhdGlvbi5wYXJhbXMgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGxvY2F0aW9uLnBhcmFtcyA9IHt9XG4gICAgICB9XG5cbiAgICAgIGlmIChjdXJyZW50Um91dGUgJiYgdHlwZW9mIGN1cnJlbnRSb3V0ZS5wYXJhbXMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBjdXJyZW50Um91dGUucGFyYW1zKSB7XG4gICAgICAgICAgaWYgKCEoa2V5IGluIGxvY2F0aW9uLnBhcmFtcykgJiYgcGFyYW1OYW1lcy5pbmRleE9mKGtleSkgPiAtMSkge1xuICAgICAgICAgICAgbG9jYXRpb24ucGFyYW1zW2tleV0gPSBjdXJyZW50Um91dGUucGFyYW1zW2tleV1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZCkge1xuICAgICAgICBsb2NhdGlvbi5wYXRoID0gZmlsbFBhcmFtcyhyZWNvcmQucGF0aCwgbG9jYXRpb24ucGFyYW1zLCAoXCJuYW1lZCByb3V0ZSBcXFwiXCIgKyBuYW1lICsgXCJcXFwiXCIpKVxuICAgICAgICByZXR1cm4gX2NyZWF0ZVJvdXRlKHJlY29yZCwgbG9jYXRpb24sIHJlZGlyZWN0ZWRGcm9tKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobG9jYXRpb24ucGF0aCkge1xuICAgICAgbG9jYXRpb24ucGFyYW1zID0ge31cbiAgICAgIGZvciAodmFyIHBhdGggaW4gcGF0aE1hcCkge1xuICAgICAgICBpZiAobWF0Y2hSb3V0ZShwYXRoLCBsb2NhdGlvbi5wYXJhbXMsIGxvY2F0aW9uLnBhdGgpKSB7XG4gICAgICAgICAgcmV0dXJuIF9jcmVhdGVSb3V0ZShwYXRoTWFwW3BhdGhdLCBsb2NhdGlvbiwgcmVkaXJlY3RlZEZyb20pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gbm8gbWF0Y2hcbiAgICByZXR1cm4gX2NyZWF0ZVJvdXRlKG51bGwsIGxvY2F0aW9uKVxuICB9XG5cbiAgZnVuY3Rpb24gcmVkaXJlY3QgKFxuICAgIHJlY29yZCxcbiAgICBsb2NhdGlvblxuICApIHtcbiAgICB2YXIgb3JpZ2luYWxSZWRpcmVjdCA9IHJlY29yZC5yZWRpcmVjdFxuICAgIHZhciByZWRpcmVjdCA9IHR5cGVvZiBvcmlnaW5hbFJlZGlyZWN0ID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gb3JpZ2luYWxSZWRpcmVjdChjcmVhdGVSb3V0ZShyZWNvcmQsIGxvY2F0aW9uKSlcbiAgICAgICAgOiBvcmlnaW5hbFJlZGlyZWN0XG5cbiAgICBpZiAodHlwZW9mIHJlZGlyZWN0ID09PSAnc3RyaW5nJykge1xuICAgICAgcmVkaXJlY3QgPSB7IHBhdGg6IHJlZGlyZWN0IH1cbiAgICB9XG5cbiAgICBpZiAoIXJlZGlyZWN0IHx8IHR5cGVvZiByZWRpcmVjdCAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcbiAgICAgICAgZmFsc2UsIChcImludmFsaWQgcmVkaXJlY3Qgb3B0aW9uOiBcIiArIChKU09OLnN0cmluZ2lmeShyZWRpcmVjdCkpKVxuICAgICAgKVxuICAgICAgcmV0dXJuIF9jcmVhdGVSb3V0ZShudWxsLCBsb2NhdGlvbilcbiAgICB9XG5cbiAgICB2YXIgcmUgPSByZWRpcmVjdFxuICAgIHZhciBuYW1lID0gcmUubmFtZTtcbiAgICB2YXIgcGF0aCA9IHJlLnBhdGg7XG4gICAgdmFyIHF1ZXJ5ID0gbG9jYXRpb24ucXVlcnk7XG4gICAgdmFyIGhhc2ggPSBsb2NhdGlvbi5oYXNoO1xuICAgIHZhciBwYXJhbXMgPSBsb2NhdGlvbi5wYXJhbXM7XG4gICAgcXVlcnkgPSByZS5oYXNPd25Qcm9wZXJ0eSgncXVlcnknKSA/IHJlLnF1ZXJ5IDogcXVlcnlcbiAgICBoYXNoID0gcmUuaGFzT3duUHJvcGVydHkoJ2hhc2gnKSA/IHJlLmhhc2ggOiBoYXNoXG4gICAgcGFyYW1zID0gcmUuaGFzT3duUHJvcGVydHkoJ3BhcmFtcycpID8gcmUucGFyYW1zIDogcGFyYW1zXG5cbiAgICBpZiAobmFtZSkge1xuICAgICAgLy8gcmVzb2x2ZWQgbmFtZWQgZGlyZWN0XG4gICAgICB2YXIgdGFyZ2V0UmVjb3JkID0gbmFtZU1hcFtuYW1lXVxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgYXNzZXJ0KHRhcmdldFJlY29yZCwgKFwicmVkaXJlY3QgZmFpbGVkOiBuYW1lZCByb3V0ZSBcXFwiXCIgKyBuYW1lICsgXCJcXFwiIG5vdCBmb3VuZC5cIikpXG4gICAgICB9XG4gICAgICByZXR1cm4gbWF0Y2goe1xuICAgICAgICBfbm9ybWFsaXplZDogdHJ1ZSxcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgcXVlcnk6IHF1ZXJ5LFxuICAgICAgICBoYXNoOiBoYXNoLFxuICAgICAgICBwYXJhbXM6IHBhcmFtc1xuICAgICAgfSwgdW5kZWZpbmVkLCBsb2NhdGlvbilcbiAgICB9IGVsc2UgaWYgKHBhdGgpIHtcbiAgICAgIC8vIDEuIHJlc29sdmUgcmVsYXRpdmUgcmVkaXJlY3RcbiAgICAgIHZhciByYXdQYXRoID0gcmVzb2x2ZVJlY29yZFBhdGgocGF0aCwgcmVjb3JkKVxuICAgICAgLy8gMi4gcmVzb2x2ZSBwYXJhbXNcbiAgICAgIHZhciByZXNvbHZlZFBhdGggPSBmaWxsUGFyYW1zKHJhd1BhdGgsIHBhcmFtcywgKFwicmVkaXJlY3Qgcm91dGUgd2l0aCBwYXRoIFxcXCJcIiArIHJhd1BhdGggKyBcIlxcXCJcIikpXG4gICAgICAvLyAzLiByZW1hdGNoIHdpdGggZXhpc3RpbmcgcXVlcnkgYW5kIGhhc2hcbiAgICAgIHJldHVybiBtYXRjaCh7XG4gICAgICAgIF9ub3JtYWxpemVkOiB0cnVlLFxuICAgICAgICBwYXRoOiByZXNvbHZlZFBhdGgsXG4gICAgICAgIHF1ZXJ5OiBxdWVyeSxcbiAgICAgICAgaGFzaDogaGFzaFxuICAgICAgfSwgdW5kZWZpbmVkLCBsb2NhdGlvbilcbiAgICB9IGVsc2Uge1xuICAgICAgd2FybihmYWxzZSwgKFwiaW52YWxpZCByZWRpcmVjdCBvcHRpb246IFwiICsgKEpTT04uc3RyaW5naWZ5KHJlZGlyZWN0KSkpKVxuICAgICAgcmV0dXJuIF9jcmVhdGVSb3V0ZShudWxsLCBsb2NhdGlvbilcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBhbGlhcyAoXG4gICAgcmVjb3JkLFxuICAgIGxvY2F0aW9uLFxuICAgIG1hdGNoQXNcbiAgKSB7XG4gICAgdmFyIGFsaWFzZWRQYXRoID0gZmlsbFBhcmFtcyhtYXRjaEFzLCBsb2NhdGlvbi5wYXJhbXMsIChcImFsaWFzZWQgcm91dGUgd2l0aCBwYXRoIFxcXCJcIiArIG1hdGNoQXMgKyBcIlxcXCJcIikpXG4gICAgdmFyIGFsaWFzZWRNYXRjaCA9IG1hdGNoKHtcbiAgICAgIF9ub3JtYWxpemVkOiB0cnVlLFxuICAgICAgcGF0aDogYWxpYXNlZFBhdGhcbiAgICB9KVxuICAgIGlmIChhbGlhc2VkTWF0Y2gpIHtcbiAgICAgIHZhciBtYXRjaGVkID0gYWxpYXNlZE1hdGNoLm1hdGNoZWRcbiAgICAgIHZhciBhbGlhc2VkUmVjb3JkID0gbWF0Y2hlZFttYXRjaGVkLmxlbmd0aCAtIDFdXG4gICAgICBsb2NhdGlvbi5wYXJhbXMgPSBhbGlhc2VkTWF0Y2gucGFyYW1zXG4gICAgICByZXR1cm4gX2NyZWF0ZVJvdXRlKGFsaWFzZWRSZWNvcmQsIGxvY2F0aW9uKVxuICAgIH1cbiAgICByZXR1cm4gX2NyZWF0ZVJvdXRlKG51bGwsIGxvY2F0aW9uKVxuICB9XG5cbiAgZnVuY3Rpb24gX2NyZWF0ZVJvdXRlIChcbiAgICByZWNvcmQsXG4gICAgbG9jYXRpb24sXG4gICAgcmVkaXJlY3RlZEZyb21cbiAgKSB7XG4gICAgaWYgKHJlY29yZCAmJiByZWNvcmQucmVkaXJlY3QpIHtcbiAgICAgIHJldHVybiByZWRpcmVjdChyZWNvcmQsIHJlZGlyZWN0ZWRGcm9tIHx8IGxvY2F0aW9uKVxuICAgIH1cbiAgICBpZiAocmVjb3JkICYmIHJlY29yZC5tYXRjaEFzKSB7XG4gICAgICByZXR1cm4gYWxpYXMocmVjb3JkLCBsb2NhdGlvbiwgcmVjb3JkLm1hdGNoQXMpXG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVSb3V0ZShyZWNvcmQsIGxvY2F0aW9uLCByZWRpcmVjdGVkRnJvbSlcbiAgfVxuXG4gIHJldHVybiBtYXRjaFxufVxuXG5mdW5jdGlvbiBtYXRjaFJvdXRlIChcbiAgcGF0aCxcbiAgcGFyYW1zLFxuICBwYXRobmFtZVxuKSB7XG4gIHZhciByZWYgPSBnZXRSb3V0ZVJlZ2V4KHBhdGgpO1xuICB2YXIgcmVnZXhwID0gcmVmLnJlZ2V4cDtcbiAgdmFyIGtleXMgPSByZWYua2V5cztcbiAgdmFyIG0gPSBwYXRobmFtZS5tYXRjaChyZWdleHApXG5cbiAgaWYgKCFtKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH0gZWxzZSBpZiAoIXBhcmFtcykge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBmb3IgKHZhciBpID0gMSwgbGVuID0gbS5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgIHZhciBrZXkgPSBrZXlzW2kgLSAxXVxuICAgIHZhciB2YWwgPSB0eXBlb2YgbVtpXSA9PT0gJ3N0cmluZycgPyBkZWNvZGVVUklDb21wb25lbnQobVtpXSkgOiBtW2ldXG4gICAgaWYgKGtleSkgeyBwYXJhbXNba2V5Lm5hbWVdID0gdmFsIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlXG59XG5cbmZ1bmN0aW9uIHJlc29sdmVSZWNvcmRQYXRoIChwYXRoLCByZWNvcmQpIHtcbiAgcmV0dXJuIHJlc29sdmVQYXRoKHBhdGgsIHJlY29yZC5wYXJlbnQgPyByZWNvcmQucGFyZW50LnBhdGggOiAnLycsIHRydWUpXG59XG5cbi8qICAqL1xuXG52YXIgaW5Ccm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcblxudmFyIHN1cHBvcnRzSGlzdG9yeSA9IGluQnJvd3NlciAmJiAoZnVuY3Rpb24gKCkge1xuICB2YXIgdWEgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudFxuXG4gIGlmIChcbiAgICAodWEuaW5kZXhPZignQW5kcm9pZCAyLicpICE9PSAtMSB8fCB1YS5pbmRleE9mKCdBbmRyb2lkIDQuMCcpICE9PSAtMSkgJiZcbiAgICB1YS5pbmRleE9mKCdNb2JpbGUgU2FmYXJpJykgIT09IC0xICYmXG4gICAgdWEuaW5kZXhPZignQ2hyb21lJykgPT09IC0xICYmXG4gICAgdWEuaW5kZXhPZignV2luZG93cyBQaG9uZScpID09PSAtMVxuICApIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiB3aW5kb3cuaGlzdG9yeSAmJiAncHVzaFN0YXRlJyBpbiB3aW5kb3cuaGlzdG9yeVxufSkoKVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gcnVuUXVldWUgKHF1ZXVlLCBmbiwgY2IpIHtcbiAgdmFyIHN0ZXAgPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICBpZiAoaW5kZXggPj0gcXVldWUubGVuZ3RoKSB7XG4gICAgICBjYigpXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChxdWV1ZVtpbmRleF0pIHtcbiAgICAgICAgZm4ocXVldWVbaW5kZXhdLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc3RlcChpbmRleCArIDEpXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGVwKGluZGV4ICsgMSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgc3RlcCgwKVxufVxuXG4vKiAgKi9cblxuXG52YXIgSGlzdG9yeSA9IGZ1bmN0aW9uIEhpc3RvcnkgKHJvdXRlciwgYmFzZSkge1xuICB0aGlzLnJvdXRlciA9IHJvdXRlclxuICB0aGlzLmJhc2UgPSBub3JtYWxpemVCYXNlKGJhc2UpXG4gIC8vIHN0YXJ0IHdpdGggYSByb3V0ZSBvYmplY3QgdGhhdCBzdGFuZHMgZm9yIFwibm93aGVyZVwiXG4gIHRoaXMuY3VycmVudCA9IFNUQVJUXG4gIHRoaXMucGVuZGluZyA9IG51bGxcbn07XG5cbkhpc3RvcnkucHJvdG90eXBlLmxpc3RlbiA9IGZ1bmN0aW9uIGxpc3RlbiAoY2IpIHtcbiAgdGhpcy5jYiA9IGNiXG59O1xuXG5IaXN0b3J5LnByb3RvdHlwZS50cmFuc2l0aW9uVG8gPSBmdW5jdGlvbiB0cmFuc2l0aW9uVG8gKGxvY2F0aW9uLCBvbkNvbXBsZXRlLCBvbkFib3J0KSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgdmFyIHJvdXRlID0gdGhpcy5yb3V0ZXIubWF0Y2gobG9jYXRpb24sIHRoaXMuY3VycmVudClcbiAgdGhpcy5jb25maXJtVHJhbnNpdGlvbihyb3V0ZSwgZnVuY3Rpb24gKCkge1xuICAgIHRoaXMkMS51cGRhdGVSb3V0ZShyb3V0ZSlcbiAgICBvbkNvbXBsZXRlICYmIG9uQ29tcGxldGUocm91dGUpXG4gICAgdGhpcyQxLmVuc3VyZVVSTCgpXG4gIH0sIG9uQWJvcnQpXG59O1xuXG5IaXN0b3J5LnByb3RvdHlwZS5jb25maXJtVHJhbnNpdGlvbiA9IGZ1bmN0aW9uIGNvbmZpcm1UcmFuc2l0aW9uIChyb3V0ZSwgb25Db21wbGV0ZSwgb25BYm9ydCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIHZhciBjdXJyZW50ID0gdGhpcy5jdXJyZW50XG4gIHZhciBhYm9ydCA9IGZ1bmN0aW9uICgpIHsgb25BYm9ydCAmJiBvbkFib3J0KCkgfVxuICBpZiAoaXNTYW1lUm91dGUocm91dGUsIGN1cnJlbnQpKSB7XG4gICAgdGhpcy5lbnN1cmVVUkwoKVxuICAgIHJldHVybiBhYm9ydCgpXG4gIH1cblxuICB2YXIgcmVmID0gcmVzb2x2ZVF1ZXVlKHRoaXMuY3VycmVudC5tYXRjaGVkLCByb3V0ZS5tYXRjaGVkKTtcbiAgICB2YXIgZGVhY3RpdmF0ZWQgPSByZWYuZGVhY3RpdmF0ZWQ7XG4gICAgdmFyIGFjdGl2YXRlZCA9IHJlZi5hY3RpdmF0ZWQ7XG5cbiAgdmFyIHF1ZXVlID0gW10uY29uY2F0KFxuICAgIC8vIGluLWNvbXBvbmVudCBsZWF2ZSBndWFyZHNcbiAgICBleHRyYWN0TGVhdmVHdWFyZHMoZGVhY3RpdmF0ZWQpLFxuICAgIC8vIGdsb2JhbCBiZWZvcmUgaG9va3NcbiAgICB0aGlzLnJvdXRlci5iZWZvcmVIb29rcyxcbiAgICAvLyBlbnRlciBndWFyZHNcbiAgICBhY3RpdmF0ZWQubWFwKGZ1bmN0aW9uIChtKSB7IHJldHVybiBtLmJlZm9yZUVudGVyOyB9KSxcbiAgICAvLyBhc3luYyBjb21wb25lbnRzXG4gICAgcmVzb2x2ZUFzeW5jQ29tcG9uZW50cyhhY3RpdmF0ZWQpXG4gIClcblxuICB0aGlzLnBlbmRpbmcgPSByb3V0ZVxuICB2YXIgaXRlcmF0b3IgPSBmdW5jdGlvbiAoaG9vaywgbmV4dCkge1xuICAgIGlmICh0aGlzJDEucGVuZGluZyAhPT0gcm91dGUpIHtcbiAgICAgIHJldHVybiBhYm9ydCgpXG4gICAgfVxuICAgIGhvb2socm91dGUsIGN1cnJlbnQsIGZ1bmN0aW9uICh0bykge1xuICAgICAgaWYgKHRvID09PSBmYWxzZSkge1xuICAgICAgICAvLyBuZXh0KGZhbHNlKSAtPiBhYm9ydCBuYXZpZ2F0aW9uLCBlbnN1cmUgY3VycmVudCBVUkxcbiAgICAgICAgdGhpcyQxLmVuc3VyZVVSTCh0cnVlKVxuICAgICAgICBhYm9ydCgpXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0byA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHRvID09PSAnb2JqZWN0Jykge1xuICAgICAgICAvLyBuZXh0KCcvJykgb3IgbmV4dCh7IHBhdGg6ICcvJyB9KSAtPiByZWRpcmVjdFxuICAgICAgICAodHlwZW9mIHRvID09PSAnb2JqZWN0JyAmJiB0by5yZXBsYWNlKSA/IHRoaXMkMS5yZXBsYWNlKHRvKSA6IHRoaXMkMS5wdXNoKHRvKVxuICAgICAgICBhYm9ydCgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBjb25maXJtIHRyYW5zaXRpb24gYW5kIHBhc3Mgb24gdGhlIHZhbHVlXG4gICAgICAgIG5leHQodG8pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJ1blF1ZXVlKHF1ZXVlLCBpdGVyYXRvciwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBwb3N0RW50ZXJDYnMgPSBbXVxuICAgIHZhciBlbnRlckd1YXJkcyA9IGV4dHJhY3RFbnRlckd1YXJkcyhhY3RpdmF0ZWQsIHBvc3RFbnRlckNicywgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMkMS5jdXJyZW50ID09PSByb3V0ZVxuICAgIH0pXG4gICAgLy8gd2FpdCB1bnRpbCBhc3luYyBjb21wb25lbnRzIGFyZSByZXNvbHZlZCBiZWZvcmVcbiAgICAvLyBleHRyYWN0aW5nIGluLWNvbXBvbmVudCBlbnRlciBndWFyZHNcbiAgICBydW5RdWV1ZShlbnRlckd1YXJkcywgaXRlcmF0b3IsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0aGlzJDEucGVuZGluZyAhPT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGFib3J0KClcbiAgICAgIH1cbiAgICAgIHRoaXMkMS5wZW5kaW5nID0gbnVsbFxuICAgICAgb25Db21wbGV0ZShyb3V0ZSlcbiAgICAgIGlmICh0aGlzJDEucm91dGVyLmFwcCkge1xuICAgICAgICB0aGlzJDEucm91dGVyLmFwcC4kbmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHBvc3RFbnRlckNicy5mb3JFYWNoKGZ1bmN0aW9uIChjYikgeyByZXR1cm4gY2IoKTsgfSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9KVxufTtcblxuSGlzdG9yeS5wcm90b3R5cGUudXBkYXRlUm91dGUgPSBmdW5jdGlvbiB1cGRhdGVSb3V0ZSAocm91dGUpIHtcbiAgdmFyIHByZXYgPSB0aGlzLmN1cnJlbnRcbiAgdGhpcy5jdXJyZW50ID0gcm91dGVcbiAgdGhpcy5jYiAmJiB0aGlzLmNiKHJvdXRlKVxuICB0aGlzLnJvdXRlci5hZnRlckhvb2tzLmZvckVhY2goZnVuY3Rpb24gKGhvb2spIHtcbiAgICBob29rICYmIGhvb2socm91dGUsIHByZXYpXG4gIH0pXG59O1xuXG5mdW5jdGlvbiBub3JtYWxpemVCYXNlIChiYXNlKSB7XG4gIGlmICghYmFzZSkge1xuICAgIGlmIChpbkJyb3dzZXIpIHtcbiAgICAgIC8vIHJlc3BlY3QgPGJhc2U+IHRhZ1xuICAgICAgdmFyIGJhc2VFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Jhc2UnKVxuICAgICAgYmFzZSA9IGJhc2VFbCA/IGJhc2VFbC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSA6ICcvJ1xuICAgIH0gZWxzZSB7XG4gICAgICBiYXNlID0gJy8nXG4gICAgfVxuICB9XG4gIC8vIG1ha2Ugc3VyZSB0aGVyZSdzIHRoZSBzdGFydGluZyBzbGFzaFxuICBpZiAoYmFzZS5jaGFyQXQoMCkgIT09ICcvJykge1xuICAgIGJhc2UgPSAnLycgKyBiYXNlXG4gIH1cbiAgLy8gcmVtb3ZlIHRyYWlsaW5nIHNsYXNoXG4gIHJldHVybiBiYXNlLnJlcGxhY2UoL1xcLyQvLCAnJylcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZVF1ZXVlIChcbiAgY3VycmVudCxcbiAgbmV4dFxuKSB7XG4gIHZhciBpXG4gIHZhciBtYXggPSBNYXRoLm1heChjdXJyZW50Lmxlbmd0aCwgbmV4dC5sZW5ndGgpXG4gIGZvciAoaSA9IDA7IGkgPCBtYXg7IGkrKykge1xuICAgIGlmIChjdXJyZW50W2ldICE9PSBuZXh0W2ldKSB7XG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuICByZXR1cm4ge1xuICAgIGFjdGl2YXRlZDogbmV4dC5zbGljZShpKSxcbiAgICBkZWFjdGl2YXRlZDogY3VycmVudC5zbGljZShpKVxuICB9XG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RHdWFyZCAoXG4gIGRlZixcbiAga2V5XG4pIHtcbiAgaWYgKHR5cGVvZiBkZWYgIT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBleHRlbmQgbm93IHNvIHRoYXQgZ2xvYmFsIG1peGlucyBhcmUgYXBwbGllZC5cbiAgICBkZWYgPSBfVnVlLmV4dGVuZChkZWYpXG4gIH1cbiAgcmV0dXJuIGRlZi5vcHRpb25zW2tleV1cbn1cblxuZnVuY3Rpb24gZXh0cmFjdExlYXZlR3VhcmRzIChtYXRjaGVkKSB7XG4gIHJldHVybiBmbGF0dGVuKGZsYXRNYXBDb21wb25lbnRzKG1hdGNoZWQsIGZ1bmN0aW9uIChkZWYsIGluc3RhbmNlKSB7XG4gICAgdmFyIGd1YXJkID0gZXh0cmFjdEd1YXJkKGRlZiwgJ2JlZm9yZVJvdXRlTGVhdmUnKVxuICAgIGlmIChndWFyZCkge1xuICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoZ3VhcmQpXG4gICAgICAgID8gZ3VhcmQubWFwKGZ1bmN0aW9uIChndWFyZCkgeyByZXR1cm4gd3JhcExlYXZlR3VhcmQoZ3VhcmQsIGluc3RhbmNlKTsgfSlcbiAgICAgICAgOiB3cmFwTGVhdmVHdWFyZChndWFyZCwgaW5zdGFuY2UpXG4gICAgfVxuICB9KS5yZXZlcnNlKCkpXG59XG5cbmZ1bmN0aW9uIHdyYXBMZWF2ZUd1YXJkIChcbiAgZ3VhcmQsXG4gIGluc3RhbmNlXG4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJvdXRlTGVhdmVHdWFyZCAoKSB7XG4gICAgcmV0dXJuIGd1YXJkLmFwcGx5KGluc3RhbmNlLCBhcmd1bWVudHMpXG4gIH1cbn1cblxuZnVuY3Rpb24gZXh0cmFjdEVudGVyR3VhcmRzIChcbiAgbWF0Y2hlZCxcbiAgY2JzLFxuICBpc1ZhbGlkXG4pIHtcbiAgcmV0dXJuIGZsYXR0ZW4oZmxhdE1hcENvbXBvbmVudHMobWF0Y2hlZCwgZnVuY3Rpb24gKGRlZiwgXywgbWF0Y2gsIGtleSkge1xuICAgIHZhciBndWFyZCA9IGV4dHJhY3RHdWFyZChkZWYsICdiZWZvcmVSb3V0ZUVudGVyJylcbiAgICBpZiAoZ3VhcmQpIHtcbiAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KGd1YXJkKVxuICAgICAgICA/IGd1YXJkLm1hcChmdW5jdGlvbiAoZ3VhcmQpIHsgcmV0dXJuIHdyYXBFbnRlckd1YXJkKGd1YXJkLCBjYnMsIG1hdGNoLCBrZXksIGlzVmFsaWQpOyB9KVxuICAgICAgICA6IHdyYXBFbnRlckd1YXJkKGd1YXJkLCBjYnMsIG1hdGNoLCBrZXksIGlzVmFsaWQpXG4gICAgfVxuICB9KSlcbn1cblxuZnVuY3Rpb24gd3JhcEVudGVyR3VhcmQgKFxuICBndWFyZCxcbiAgY2JzLFxuICBtYXRjaCxcbiAga2V5LFxuICBpc1ZhbGlkXG4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJvdXRlRW50ZXJHdWFyZCAodG8sIGZyb20sIG5leHQpIHtcbiAgICByZXR1cm4gZ3VhcmQodG8sIGZyb20sIGZ1bmN0aW9uIChjYikge1xuICAgICAgbmV4dChjYilcbiAgICAgIGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2JzLnB1c2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vICM3NTBcbiAgICAgICAgICAvLyBpZiBhIHJvdXRlci12aWV3IGlzIHdyYXBwZWQgd2l0aCBhbiBvdXQtaW4gdHJhbnNpdGlvbixcbiAgICAgICAgICAvLyB0aGUgaW5zdGFuY2UgbWF5IG5vdCBoYXZlIGJlZW4gcmVnaXN0ZXJlZCBhdCB0aGlzIHRpbWUuXG4gICAgICAgICAgLy8gd2Ugd2lsbCBuZWVkIHRvIHBvbGwgZm9yIHJlZ2lzdHJhdGlvbiB1bnRpbCBjdXJyZW50IHJvdXRlXG4gICAgICAgICAgLy8gaXMgbm8gbG9uZ2VyIHZhbGlkLlxuICAgICAgICAgIHBvbGwoY2IsIG1hdGNoLmluc3RhbmNlcywga2V5LCBpc1ZhbGlkKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZnVuY3Rpb24gcG9sbCAoXG4gIGNiLCAvLyBzb21laG93IGZsb3cgY2Fubm90IGluZmVyIHRoaXMgaXMgYSBmdW5jdGlvblxuICBpbnN0YW5jZXMsXG4gIGtleSxcbiAgaXNWYWxpZFxuKSB7XG4gIGlmIChpbnN0YW5jZXNba2V5XSkge1xuICAgIGNiKGluc3RhbmNlc1trZXldKVxuICB9IGVsc2UgaWYgKGlzVmFsaWQoKSkge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgcG9sbChjYiwgaW5zdGFuY2VzLCBrZXksIGlzVmFsaWQpXG4gICAgfSwgMTYpXG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUFzeW5jQ29tcG9uZW50cyAobWF0Y2hlZCkge1xuICByZXR1cm4gZmxhdE1hcENvbXBvbmVudHMobWF0Y2hlZCwgZnVuY3Rpb24gKGRlZiwgXywgbWF0Y2gsIGtleSkge1xuICAgIC8vIGlmIGl0J3MgYSBmdW5jdGlvbiBhbmQgZG9lc24ndCBoYXZlIFZ1ZSBvcHRpb25zIGF0dGFjaGVkLFxuICAgIC8vIGFzc3VtZSBpdCdzIGFuIGFzeW5jIGNvbXBvbmVudCByZXNvbHZlIGZ1bmN0aW9uLlxuICAgIC8vIHdlIGFyZSBub3QgdXNpbmcgVnVlJ3MgZGVmYXVsdCBhc3luYyByZXNvbHZpbmcgbWVjaGFuaXNtIGJlY2F1c2VcbiAgICAvLyB3ZSB3YW50IHRvIGhhbHQgdGhlIG5hdmlnYXRpb24gdW50aWwgdGhlIGluY29taW5nIGNvbXBvbmVudCBoYXMgYmVlblxuICAgIC8vIHJlc29sdmVkLlxuICAgIGlmICh0eXBlb2YgZGVmID09PSAnZnVuY3Rpb24nICYmICFkZWYub3B0aW9ucykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0bywgZnJvbSwgbmV4dCkge1xuICAgICAgICB2YXIgcmVzb2x2ZSA9IGZ1bmN0aW9uIChyZXNvbHZlZERlZikge1xuICAgICAgICAgIG1hdGNoLmNvbXBvbmVudHNba2V5XSA9IHJlc29sdmVkRGVmXG4gICAgICAgICAgbmV4dCgpXG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcmVqZWN0ID0gZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICAgIHdhcm4oZmFsc2UsIChcIkZhaWxlZCB0byByZXNvbHZlIGFzeW5jIGNvbXBvbmVudCBcIiArIGtleSArIFwiOiBcIiArIHJlYXNvbikpXG4gICAgICAgICAgbmV4dChmYWxzZSlcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciByZXMgPSBkZWYocmVzb2x2ZSwgcmVqZWN0KVxuICAgICAgICBpZiAocmVzICYmIHR5cGVvZiByZXMudGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHJlcy50aGVuKHJlc29sdmUsIHJlamVjdClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gZmxhdE1hcENvbXBvbmVudHMgKFxuICBtYXRjaGVkLFxuICBmblxuKSB7XG4gIHJldHVybiBmbGF0dGVuKG1hdGNoZWQubWFwKGZ1bmN0aW9uIChtKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG0uY29tcG9uZW50cykubWFwKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGZuKFxuICAgICAgbS5jb21wb25lbnRzW2tleV0sXG4gICAgICBtLmluc3RhbmNlc1trZXldLFxuICAgICAgbSwga2V5XG4gICAgKTsgfSlcbiAgfSkpXG59XG5cbmZ1bmN0aW9uIGZsYXR0ZW4gKGFycikge1xuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShbXSwgYXJyKVxufVxuXG4vKiAgKi9cblxudmFyIHBvc2l0aW9uU3RvcmUgPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbmZ1bmN0aW9uIHNhdmVTY3JvbGxQb3NpdGlvbiAoa2V5KSB7XG4gIGlmICgha2V5KSB7IHJldHVybiB9XG4gIHBvc2l0aW9uU3RvcmVba2V5XSA9IHtcbiAgICB4OiB3aW5kb3cucGFnZVhPZmZzZXQsXG4gICAgeTogd2luZG93LnBhZ2VZT2Zmc2V0XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsUG9zaXRpb24gKGtleSkge1xuICBpZiAoIWtleSkgeyByZXR1cm4gfVxuICByZXR1cm4gcG9zaXRpb25TdG9yZVtrZXldXG59XG5cbmZ1bmN0aW9uIGdldEVsZW1lbnRQb3NpdGlvbiAoZWwpIHtcbiAgdmFyIGRvY1JlY3QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgdmFyIGVsUmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gIHJldHVybiB7XG4gICAgeDogZWxSZWN0LmxlZnQgLSBkb2NSZWN0LmxlZnQsXG4gICAgeTogZWxSZWN0LnRvcCAtIGRvY1JlY3QudG9wXG4gIH1cbn1cblxuZnVuY3Rpb24gaXNWYWxpZFBvc2l0aW9uIChvYmopIHtcbiAgcmV0dXJuIGlzTnVtYmVyKG9iai54KSB8fCBpc051bWJlcihvYmoueSlcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplUG9zaXRpb24gKG9iaikge1xuICByZXR1cm4ge1xuICAgIHg6IGlzTnVtYmVyKG9iai54KSA/IG9iai54IDogd2luZG93LnBhZ2VYT2Zmc2V0LFxuICAgIHk6IGlzTnVtYmVyKG9iai55KSA/IG9iai55IDogd2luZG93LnBhZ2VZT2Zmc2V0XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNOdW1iZXIgKHYpIHtcbiAgcmV0dXJuIHR5cGVvZiB2ID09PSAnbnVtYmVyJ1xufVxuXG4vKiAgKi9cblxuXG4vLyB1c2UgVXNlciBUaW1pbmcgYXBpIChpZiBwcmVzZW50KSBmb3IgbW9yZSBhY2N1cmF0ZSBrZXkgcHJlY2lzaW9uXG52YXIgVGltZSA9IGluQnJvd3NlciA/ICh3aW5kb3cucGVyZm9ybWFuY2UgfHwgRGF0ZSkgOiBEYXRlXG5cbnZhciBnZW5LZXkgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBTdHJpbmcoVGltZS5ub3coKSk7IH1cbnZhciBfa2V5ID0gZ2VuS2V5KClcblxudmFyIEhUTUw1SGlzdG9yeSA9IChmdW5jdGlvbiAoSGlzdG9yeSkge1xuICBmdW5jdGlvbiBIVE1MNUhpc3RvcnkgKHJvdXRlciwgYmFzZSkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgSGlzdG9yeS5jYWxsKHRoaXMsIHJvdXRlciwgYmFzZSlcblxuICAgIHZhciBleHBlY3RTY3JvbGwgPSByb3V0ZXIub3B0aW9ucy5zY3JvbGxCZWhhdmlvclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBfa2V5ID0gZS5zdGF0ZSAmJiBlLnN0YXRlLmtleVxuICAgICAgdmFyIGN1cnJlbnQgPSB0aGlzJDEuY3VycmVudFxuICAgICAgdGhpcyQxLnRyYW5zaXRpb25UbyhnZXRMb2NhdGlvbih0aGlzJDEuYmFzZSksIGZ1bmN0aW9uIChuZXh0KSB7XG4gICAgICAgIGlmIChleHBlY3RTY3JvbGwpIHtcbiAgICAgICAgICB0aGlzJDEuaGFuZGxlU2Nyb2xsKG5leHQsIGN1cnJlbnQsIHRydWUpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcblxuICAgIGlmIChleHBlY3RTY3JvbGwpIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNhdmVTY3JvbGxQb3NpdGlvbihfa2V5KVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBpZiAoIEhpc3RvcnkgKSBIVE1MNUhpc3RvcnkuX19wcm90b19fID0gSGlzdG9yeTtcbiAgSFRNTDVIaXN0b3J5LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEhpc3RvcnkgJiYgSGlzdG9yeS5wcm90b3R5cGUgKTtcbiAgSFRNTDVIaXN0b3J5LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEhUTUw1SGlzdG9yeTtcblxuICBIVE1MNUhpc3RvcnkucHJvdG90eXBlLmdvID0gZnVuY3Rpb24gZ28gKG4pIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5nbyhuKVxuICB9O1xuXG4gIEhUTUw1SGlzdG9yeS5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uIHB1c2ggKGxvY2F0aW9uKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICB2YXIgY3VycmVudCA9IHRoaXMuY3VycmVudFxuICAgIHRoaXMudHJhbnNpdGlvblRvKGxvY2F0aW9uLCBmdW5jdGlvbiAocm91dGUpIHtcbiAgICAgIHB1c2hTdGF0ZShjbGVhblBhdGgodGhpcyQxLmJhc2UgKyByb3V0ZS5mdWxsUGF0aCkpXG4gICAgICB0aGlzJDEuaGFuZGxlU2Nyb2xsKHJvdXRlLCBjdXJyZW50LCBmYWxzZSlcbiAgICB9KVxuICB9O1xuXG4gIEhUTUw1SGlzdG9yeS5wcm90b3R5cGUucmVwbGFjZSA9IGZ1bmN0aW9uIHJlcGxhY2UgKGxvY2F0aW9uKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICB2YXIgY3VycmVudCA9IHRoaXMuY3VycmVudFxuICAgIHRoaXMudHJhbnNpdGlvblRvKGxvY2F0aW9uLCBmdW5jdGlvbiAocm91dGUpIHtcbiAgICAgIHJlcGxhY2VTdGF0ZShjbGVhblBhdGgodGhpcyQxLmJhc2UgKyByb3V0ZS5mdWxsUGF0aCkpXG4gICAgICB0aGlzJDEuaGFuZGxlU2Nyb2xsKHJvdXRlLCBjdXJyZW50LCBmYWxzZSlcbiAgICB9KVxuICB9O1xuXG4gIEhUTUw1SGlzdG9yeS5wcm90b3R5cGUuZW5zdXJlVVJMID0gZnVuY3Rpb24gZW5zdXJlVVJMIChwdXNoKSB7XG4gICAgaWYgKGdldExvY2F0aW9uKHRoaXMuYmFzZSkgIT09IHRoaXMuY3VycmVudC5mdWxsUGF0aCkge1xuICAgICAgdmFyIGN1cnJlbnQgPSBjbGVhblBhdGgodGhpcy5iYXNlICsgdGhpcy5jdXJyZW50LmZ1bGxQYXRoKVxuICAgICAgcHVzaCA/IHB1c2hTdGF0ZShjdXJyZW50KSA6IHJlcGxhY2VTdGF0ZShjdXJyZW50KVxuICAgIH1cbiAgfTtcblxuICBIVE1MNUhpc3RvcnkucHJvdG90eXBlLmhhbmRsZVNjcm9sbCA9IGZ1bmN0aW9uIGhhbmRsZVNjcm9sbCAodG8sIGZyb20sIGlzUG9wKSB7XG4gICAgdmFyIHJvdXRlciA9IHRoaXMucm91dGVyXG4gICAgaWYgKCFyb3V0ZXIuYXBwKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB2YXIgYmVoYXZpb3IgPSByb3V0ZXIub3B0aW9ucy5zY3JvbGxCZWhhdmlvclxuICAgIGlmICghYmVoYXZpb3IpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgYXNzZXJ0KHR5cGVvZiBiZWhhdmlvciA9PT0gJ2Z1bmN0aW9uJywgXCJzY3JvbGxCZWhhdmlvciBtdXN0IGJlIGEgZnVuY3Rpb25cIilcbiAgICB9XG5cbiAgICAvLyB3YWl0IHVudGlsIHJlLXJlbmRlciBmaW5pc2hlcyBiZWZvcmUgc2Nyb2xsaW5nXG4gICAgcm91dGVyLmFwcC4kbmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHBvc2l0aW9uID0gZ2V0U2Nyb2xsUG9zaXRpb24oX2tleSlcbiAgICAgIHZhciBzaG91bGRTY3JvbGwgPSBiZWhhdmlvcih0bywgZnJvbSwgaXNQb3AgPyBwb3NpdGlvbiA6IG51bGwpXG4gICAgICBpZiAoIXNob3VsZFNjcm9sbCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHZhciBpc09iamVjdCA9IHR5cGVvZiBzaG91bGRTY3JvbGwgPT09ICdvYmplY3QnXG4gICAgICBpZiAoaXNPYmplY3QgJiYgdHlwZW9mIHNob3VsZFNjcm9sbC5zZWxlY3RvciA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdmFyIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzaG91bGRTY3JvbGwuc2VsZWN0b3IpXG4gICAgICAgIGlmIChlbCkge1xuICAgICAgICAgIHBvc2l0aW9uID0gZ2V0RWxlbWVudFBvc2l0aW9uKGVsKVxuICAgICAgICB9IGVsc2UgaWYgKGlzVmFsaWRQb3NpdGlvbihzaG91bGRTY3JvbGwpKSB7XG4gICAgICAgICAgcG9zaXRpb24gPSBub3JtYWxpemVQb3NpdGlvbihzaG91bGRTY3JvbGwpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoaXNPYmplY3QgJiYgaXNWYWxpZFBvc2l0aW9uKHNob3VsZFNjcm9sbCkpIHtcbiAgICAgICAgcG9zaXRpb24gPSBub3JtYWxpemVQb3NpdGlvbihzaG91bGRTY3JvbGwpXG4gICAgICB9XG5cbiAgICAgIGlmIChwb3NpdGlvbikge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8ocG9zaXRpb24ueCwgcG9zaXRpb24ueSlcbiAgICAgIH1cbiAgICB9KVxuICB9O1xuXG4gIHJldHVybiBIVE1MNUhpc3Rvcnk7XG59KEhpc3RvcnkpKTtcblxuZnVuY3Rpb24gZ2V0TG9jYXRpb24gKGJhc2UpIHtcbiAgdmFyIHBhdGggPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWVcbiAgaWYgKGJhc2UgJiYgcGF0aC5pbmRleE9mKGJhc2UpID09PSAwKSB7XG4gICAgcGF0aCA9IHBhdGguc2xpY2UoYmFzZS5sZW5ndGgpXG4gIH1cbiAgcmV0dXJuIChwYXRoIHx8ICcvJykgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoICsgd2luZG93LmxvY2F0aW9uLmhhc2hcbn1cblxuZnVuY3Rpb24gcHVzaFN0YXRlICh1cmwsIHJlcGxhY2UpIHtcbiAgLy8gdHJ5Li4uY2F0Y2ggdGhlIHB1c2hTdGF0ZSBjYWxsIHRvIGdldCBhcm91bmQgU2FmYXJpXG4gIC8vIERPTSBFeGNlcHRpb24gMTggd2hlcmUgaXQgbGltaXRzIHRvIDEwMCBwdXNoU3RhdGUgY2FsbHNcbiAgdmFyIGhpc3RvcnkgPSB3aW5kb3cuaGlzdG9yeVxuICB0cnkge1xuICAgIGlmIChyZXBsYWNlKSB7XG4gICAgICBoaXN0b3J5LnJlcGxhY2VTdGF0ZSh7IGtleTogX2tleSB9LCAnJywgdXJsKVxuICAgIH0gZWxzZSB7XG4gICAgICBfa2V5ID0gZ2VuS2V5KClcbiAgICAgIGhpc3RvcnkucHVzaFN0YXRlKHsga2V5OiBfa2V5IH0sICcnLCB1cmwpXG4gICAgfVxuICAgIHNhdmVTY3JvbGxQb3NpdGlvbihfa2V5KVxuICB9IGNhdGNoIChlKSB7XG4gICAgd2luZG93LmxvY2F0aW9uW3JlcGxhY2UgPyAncmVwbGFjZScgOiAnYXNzaWduJ10odXJsKVxuICB9XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VTdGF0ZSAodXJsKSB7XG4gIHB1c2hTdGF0ZSh1cmwsIHRydWUpXG59XG5cbi8qICAqL1xuXG5cbnZhciBIYXNoSGlzdG9yeSA9IChmdW5jdGlvbiAoSGlzdG9yeSkge1xuICBmdW5jdGlvbiBIYXNoSGlzdG9yeSAocm91dGVyLCBiYXNlLCBmYWxsYmFjaykge1xuICAgIEhpc3RvcnkuY2FsbCh0aGlzLCByb3V0ZXIsIGJhc2UpXG4gICAgLy8gY2hlY2sgaGlzdG9yeSBmYWxsYmFjayBkZWVwbGlua2luZ1xuICAgIGlmIChmYWxsYmFjayAmJiB0aGlzLmNoZWNrRmFsbGJhY2soKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGVuc3VyZVNsYXNoKClcbiAgfVxuXG4gIGlmICggSGlzdG9yeSApIEhhc2hIaXN0b3J5Ll9fcHJvdG9fXyA9IEhpc3Rvcnk7XG4gIEhhc2hIaXN0b3J5LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEhpc3RvcnkgJiYgSGlzdG9yeS5wcm90b3R5cGUgKTtcbiAgSGFzaEhpc3RvcnkucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gSGFzaEhpc3Rvcnk7XG5cbiAgSGFzaEhpc3RvcnkucHJvdG90eXBlLmNoZWNrRmFsbGJhY2sgPSBmdW5jdGlvbiBjaGVja0ZhbGxiYWNrICgpIHtcbiAgICB2YXIgbG9jYXRpb24gPSBnZXRMb2NhdGlvbih0aGlzLmJhc2UpXG4gICAgaWYgKCEvXlxcLyMvLnRlc3QobG9jYXRpb24pKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShcbiAgICAgICAgY2xlYW5QYXRoKHRoaXMuYmFzZSArICcvIycgKyBsb2NhdGlvbilcbiAgICAgIClcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9O1xuXG4gIEhhc2hIaXN0b3J5LnByb3RvdHlwZS5vbkhhc2hDaGFuZ2UgPSBmdW5jdGlvbiBvbkhhc2hDaGFuZ2UgKCkge1xuICAgIGlmICghZW5zdXJlU2xhc2goKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHRoaXMudHJhbnNpdGlvblRvKGdldEhhc2goKSwgZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgICByZXBsYWNlSGFzaChyb3V0ZS5mdWxsUGF0aClcbiAgICB9KVxuICB9O1xuXG4gIEhhc2hIaXN0b3J5LnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24gcHVzaCAobG9jYXRpb24pIHtcbiAgICB0aGlzLnRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgICBwdXNoSGFzaChyb3V0ZS5mdWxsUGF0aClcbiAgICB9KVxuICB9O1xuXG4gIEhhc2hIaXN0b3J5LnByb3RvdHlwZS5yZXBsYWNlID0gZnVuY3Rpb24gcmVwbGFjZSAobG9jYXRpb24pIHtcbiAgICB0aGlzLnRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgICByZXBsYWNlSGFzaChyb3V0ZS5mdWxsUGF0aClcbiAgICB9KVxuICB9O1xuXG4gIEhhc2hIaXN0b3J5LnByb3RvdHlwZS5nbyA9IGZ1bmN0aW9uIGdvIChuKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuZ28obilcbiAgfTtcblxuICBIYXNoSGlzdG9yeS5wcm90b3R5cGUuZW5zdXJlVVJMID0gZnVuY3Rpb24gZW5zdXJlVVJMIChwdXNoKSB7XG4gICAgdmFyIGN1cnJlbnQgPSB0aGlzLmN1cnJlbnQuZnVsbFBhdGhcbiAgICBpZiAoZ2V0SGFzaCgpICE9PSBjdXJyZW50KSB7XG4gICAgICBwdXNoID8gcHVzaEhhc2goY3VycmVudCkgOiByZXBsYWNlSGFzaChjdXJyZW50KVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gSGFzaEhpc3Rvcnk7XG59KEhpc3RvcnkpKTtcblxuZnVuY3Rpb24gZW5zdXJlU2xhc2ggKCkge1xuICB2YXIgcGF0aCA9IGdldEhhc2goKVxuICBpZiAocGF0aC5jaGFyQXQoMCkgPT09ICcvJykge1xuICAgIHJldHVybiB0cnVlXG4gIH1cbiAgcmVwbGFjZUhhc2goJy8nICsgcGF0aClcbiAgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIGdldEhhc2ggKCkge1xuICAvLyBXZSBjYW4ndCB1c2Ugd2luZG93LmxvY2F0aW9uLmhhc2ggaGVyZSBiZWNhdXNlIGl0J3Mgbm90XG4gIC8vIGNvbnNpc3RlbnQgYWNyb3NzIGJyb3dzZXJzIC0gRmlyZWZveCB3aWxsIHByZS1kZWNvZGUgaXQhXG4gIHZhciBocmVmID0gd2luZG93LmxvY2F0aW9uLmhyZWZcbiAgdmFyIGluZGV4ID0gaHJlZi5pbmRleE9mKCcjJylcbiAgcmV0dXJuIGluZGV4ID09PSAtMSA/ICcnIDogaHJlZi5zbGljZShpbmRleCArIDEpXG59XG5cbmZ1bmN0aW9uIHB1c2hIYXNoIChwYXRoKSB7XG4gIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gcGF0aFxufVxuXG5mdW5jdGlvbiByZXBsYWNlSGFzaCAocGF0aCkge1xuICB2YXIgaSA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoJyMnKVxuICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZi5zbGljZSgwLCBpID49IDAgPyBpIDogMCkgKyAnIycgKyBwYXRoXG4gIClcbn1cblxuLyogICovXG5cblxudmFyIEFic3RyYWN0SGlzdG9yeSA9IChmdW5jdGlvbiAoSGlzdG9yeSkge1xuICBmdW5jdGlvbiBBYnN0cmFjdEhpc3RvcnkgKHJvdXRlciwgYmFzZSkge1xuICAgIEhpc3RvcnkuY2FsbCh0aGlzLCByb3V0ZXIsIGJhc2UpXG4gICAgdGhpcy5zdGFjayA9IFtdXG4gICAgdGhpcy5pbmRleCA9IC0xXG4gIH1cblxuICBpZiAoIEhpc3RvcnkgKSBBYnN0cmFjdEhpc3RvcnkuX19wcm90b19fID0gSGlzdG9yeTtcbiAgQWJzdHJhY3RIaXN0b3J5LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEhpc3RvcnkgJiYgSGlzdG9yeS5wcm90b3R5cGUgKTtcbiAgQWJzdHJhY3RIaXN0b3J5LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEFic3RyYWN0SGlzdG9yeTtcblxuICBBYnN0cmFjdEhpc3RvcnkucHJvdG90eXBlLnB1c2ggPSBmdW5jdGlvbiBwdXNoIChsb2NhdGlvbikge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgdGhpcy50cmFuc2l0aW9uVG8obG9jYXRpb24sIGZ1bmN0aW9uIChyb3V0ZSkge1xuICAgICAgdGhpcyQxLnN0YWNrID0gdGhpcyQxLnN0YWNrLnNsaWNlKDAsIHRoaXMkMS5pbmRleCArIDEpLmNvbmNhdChyb3V0ZSlcbiAgICAgIHRoaXMkMS5pbmRleCsrXG4gICAgfSlcbiAgfTtcblxuICBBYnN0cmFjdEhpc3RvcnkucHJvdG90eXBlLnJlcGxhY2UgPSBmdW5jdGlvbiByZXBsYWNlIChsb2NhdGlvbikge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgdGhpcy50cmFuc2l0aW9uVG8obG9jYXRpb24sIGZ1bmN0aW9uIChyb3V0ZSkge1xuICAgICAgdGhpcyQxLnN0YWNrID0gdGhpcyQxLnN0YWNrLnNsaWNlKDAsIHRoaXMkMS5pbmRleCkuY29uY2F0KHJvdXRlKVxuICAgIH0pXG4gIH07XG5cbiAgQWJzdHJhY3RIaXN0b3J5LnByb3RvdHlwZS5nbyA9IGZ1bmN0aW9uIGdvIChuKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICB2YXIgdGFyZ2V0SW5kZXggPSB0aGlzLmluZGV4ICsgblxuICAgIGlmICh0YXJnZXRJbmRleCA8IDAgfHwgdGFyZ2V0SW5kZXggPj0gdGhpcy5zdGFjay5sZW5ndGgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB2YXIgcm91dGUgPSB0aGlzLnN0YWNrW3RhcmdldEluZGV4XVxuICAgIHRoaXMuY29uZmlybVRyYW5zaXRpb24ocm91dGUsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMkMS5pbmRleCA9IHRhcmdldEluZGV4XG4gICAgICB0aGlzJDEudXBkYXRlUm91dGUocm91dGUpXG4gICAgfSlcbiAgfTtcblxuICBBYnN0cmFjdEhpc3RvcnkucHJvdG90eXBlLmVuc3VyZVVSTCA9IGZ1bmN0aW9uIGVuc3VyZVVSTCAoKSB7XG4gICAgLy8gbm9vcFxuICB9O1xuXG4gIHJldHVybiBBYnN0cmFjdEhpc3Rvcnk7XG59KEhpc3RvcnkpKTtcblxuLyogICovXG5cbnZhciBWdWVSb3V0ZXIgPSBmdW5jdGlvbiBWdWVSb3V0ZXIgKG9wdGlvbnMpIHtcbiAgaWYgKCBvcHRpb25zID09PSB2b2lkIDAgKSBvcHRpb25zID0ge307XG5cbiAgdGhpcy5hcHAgPSBudWxsXG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcbiAgdGhpcy5iZWZvcmVIb29rcyA9IFtdXG4gIHRoaXMuYWZ0ZXJIb29rcyA9IFtdXG4gIHRoaXMubWF0Y2ggPSBjcmVhdGVNYXRjaGVyKG9wdGlvbnMucm91dGVzIHx8IFtdKVxuXG4gIHZhciBtb2RlID0gb3B0aW9ucy5tb2RlIHx8ICdoYXNoJ1xuICB0aGlzLmZhbGxiYWNrID0gbW9kZSA9PT0gJ2hpc3RvcnknICYmICFzdXBwb3J0c0hpc3RvcnlcbiAgaWYgKHRoaXMuZmFsbGJhY2spIHtcbiAgICBtb2RlID0gJ2hhc2gnXG4gIH1cbiAgaWYgKCFpbkJyb3dzZXIpIHtcbiAgICBtb2RlID0gJ2Fic3RyYWN0J1xuICB9XG4gIHRoaXMubW9kZSA9IG1vZGVcblxuICBzd2l0Y2ggKG1vZGUpIHtcbiAgICBjYXNlICdoaXN0b3J5JzpcbiAgICAgIHRoaXMuaGlzdG9yeSA9IG5ldyBIVE1MNUhpc3RvcnkodGhpcywgb3B0aW9ucy5iYXNlKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdoYXNoJzpcbiAgICAgIHRoaXMuaGlzdG9yeSA9IG5ldyBIYXNoSGlzdG9yeSh0aGlzLCBvcHRpb25zLmJhc2UsIHRoaXMuZmFsbGJhY2spXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2Fic3RyYWN0JzpcbiAgICAgIHRoaXMuaGlzdG9yeSA9IG5ldyBBYnN0cmFjdEhpc3RvcnkodGhpcywgb3B0aW9ucy5iYXNlKVxuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBhc3NlcnQoZmFsc2UsIChcImludmFsaWQgbW9kZTogXCIgKyBtb2RlKSlcbiAgfVxufTtcblxudmFyIHByb3RvdHlwZUFjY2Vzc29ycyA9IHsgY3VycmVudFJvdXRlOiB7fSB9O1xuXG5wcm90b3R5cGVBY2Nlc3NvcnMuY3VycmVudFJvdXRlLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuaGlzdG9yeSAmJiB0aGlzLmhpc3RvcnkuY3VycmVudFxufTtcblxuVnVlUm91dGVyLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gaW5pdCAoYXBwIC8qIFZ1ZSBjb21wb25lbnQgaW5zdGFuY2UgKi8pIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGFzc2VydChcbiAgICBpbnN0YWxsLmluc3RhbGxlZCxcbiAgICBcIm5vdCBpbnN0YWxsZWQuIE1ha2Ugc3VyZSB0byBjYWxsIGBWdWUudXNlKFZ1ZVJvdXRlcilgIFwiICtcbiAgICBcImJlZm9yZSBjcmVhdGluZyByb290IGluc3RhbmNlLlwiXG4gIClcblxuICB0aGlzLmFwcCA9IGFwcFxuXG4gIHZhciBoaXN0b3J5ID0gdGhpcy5oaXN0b3J5XG5cbiAgaWYgKGhpc3RvcnkgaW5zdGFuY2VvZiBIVE1MNUhpc3RvcnkpIHtcbiAgICBoaXN0b3J5LnRyYW5zaXRpb25UbyhnZXRMb2NhdGlvbihoaXN0b3J5LmJhc2UpKVxuICB9IGVsc2UgaWYgKGhpc3RvcnkgaW5zdGFuY2VvZiBIYXNoSGlzdG9yeSkge1xuICAgIHZhciBzZXR1cEhhc2hMaXN0ZW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBoaXN0b3J5Lm9uSGFzaENoYW5nZSgpXG4gICAgICB9KVxuICAgIH1cbiAgICBoaXN0b3J5LnRyYW5zaXRpb25UbyhnZXRIYXNoKCksIHNldHVwSGFzaExpc3RlbmVyLCBzZXR1cEhhc2hMaXN0ZW5lcilcbiAgfVxuXG4gIGhpc3RvcnkubGlzdGVuKGZ1bmN0aW9uIChyb3V0ZSkge1xuICAgIHRoaXMkMS5hcHAuX3JvdXRlID0gcm91dGVcbiAgfSlcbn07XG5cblZ1ZVJvdXRlci5wcm90b3R5cGUuYmVmb3JlRWFjaCA9IGZ1bmN0aW9uIGJlZm9yZUVhY2ggKGZuKSB7XG4gIHRoaXMuYmVmb3JlSG9va3MucHVzaChmbilcbn07XG5cblZ1ZVJvdXRlci5wcm90b3R5cGUuYWZ0ZXJFYWNoID0gZnVuY3Rpb24gYWZ0ZXJFYWNoIChmbikge1xuICB0aGlzLmFmdGVySG9va3MucHVzaChmbilcbn07XG5cblZ1ZVJvdXRlci5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uIHB1c2ggKGxvY2F0aW9uKSB7XG4gIHRoaXMuaGlzdG9yeS5wdXNoKGxvY2F0aW9uKVxufTtcblxuVnVlUm91dGVyLnByb3RvdHlwZS5yZXBsYWNlID0gZnVuY3Rpb24gcmVwbGFjZSAobG9jYXRpb24pIHtcbiAgdGhpcy5oaXN0b3J5LnJlcGxhY2UobG9jYXRpb24pXG59O1xuXG5WdWVSb3V0ZXIucHJvdG90eXBlLmdvID0gZnVuY3Rpb24gZ28gKG4pIHtcbiAgdGhpcy5oaXN0b3J5LmdvKG4pXG59O1xuXG5WdWVSb3V0ZXIucHJvdG90eXBlLmJhY2sgPSBmdW5jdGlvbiBiYWNrICgpIHtcbiAgdGhpcy5nbygtMSlcbn07XG5cblZ1ZVJvdXRlci5wcm90b3R5cGUuZm9yd2FyZCA9IGZ1bmN0aW9uIGZvcndhcmQgKCkge1xuICB0aGlzLmdvKDEpXG59O1xuXG5WdWVSb3V0ZXIucHJvdG90eXBlLmdldE1hdGNoZWRDb21wb25lbnRzID0gZnVuY3Rpb24gZ2V0TWF0Y2hlZENvbXBvbmVudHMgKHRvKSB7XG4gIHZhciByb3V0ZSA9IHRvXG4gICAgPyB0aGlzLnJlc29sdmUodG8pLnJlc29sdmVkXG4gICAgOiB0aGlzLmN1cnJlbnRSb3V0ZVxuICBpZiAoIXJvdXRlKSB7XG4gICAgcmV0dXJuIFtdXG4gIH1cbiAgcmV0dXJuIFtdLmNvbmNhdC5hcHBseShbXSwgcm91dGUubWF0Y2hlZC5tYXAoZnVuY3Rpb24gKG0pIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMobS5jb21wb25lbnRzKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIG0uY29tcG9uZW50c1trZXldXG4gICAgfSlcbiAgfSkpXG59O1xuXG5WdWVSb3V0ZXIucHJvdG90eXBlLnJlc29sdmUgPSBmdW5jdGlvbiByZXNvbHZlIChcbiAgdG8sXG4gIGN1cnJlbnQsXG4gIGFwcGVuZFxuKSB7XG4gIHZhciBub3JtYWxpemVkVG8gPSBub3JtYWxpemVMb2NhdGlvbih0bywgY3VycmVudCB8fCB0aGlzLmhpc3RvcnkuY3VycmVudCwgYXBwZW5kKVxuICB2YXIgcmVzb2x2ZWQgPSB0aGlzLm1hdGNoKG5vcm1hbGl6ZWRUbywgY3VycmVudClcbiAgdmFyIGZ1bGxQYXRoID0gcmVzb2x2ZWQucmVkaXJlY3RlZEZyb20gfHwgcmVzb2x2ZWQuZnVsbFBhdGhcbiAgdmFyIGJhc2UgPSB0aGlzLmhpc3RvcnkuYmFzZVxuICB2YXIgaHJlZiA9IGNyZWF0ZUhyZWYoYmFzZSwgZnVsbFBhdGgsIHRoaXMubW9kZSlcbiAgcmV0dXJuIHtcbiAgICBub3JtYWxpemVkVG86IG5vcm1hbGl6ZWRUbyxcbiAgICByZXNvbHZlZDogcmVzb2x2ZWQsXG4gICAgaHJlZjogaHJlZlxuICB9XG59O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyggVnVlUm91dGVyLnByb3RvdHlwZSwgcHJvdG90eXBlQWNjZXNzb3JzICk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhyZWYgKGJhc2UsIGZ1bGxQYXRoLCBtb2RlKSB7XG4gIHZhciBwYXRoID0gbW9kZSA9PT0gJ2hhc2gnID8gJyMnICsgZnVsbFBhdGggOiBmdWxsUGF0aFxuICByZXR1cm4gYmFzZSA/IGNsZWFuUGF0aChiYXNlICsgJy8nICsgcGF0aCkgOiBwYXRoXG59XG5cblZ1ZVJvdXRlci5pbnN0YWxsID0gaW5zdGFsbFxuVnVlUm91dGVyLnZlcnNpb24gPSAnMi4xLjInXG5cbmlmIChpbkJyb3dzZXIgJiYgd2luZG93LlZ1ZSkge1xuICB3aW5kb3cuVnVlLnVzZShWdWVSb3V0ZXIpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gVnVlUm91dGVyO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtcm91dGVyL2Rpc3QvdnVlLXJvdXRlci5jb21tb24uanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9wcm9jZXNzL2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyohXG4gKiB2dWUtcmVzb3VyY2UgdjEuMC4zXG4gKiBodHRwczovL2dpdGh1Yi5jb20vdnVlanMvdnVlLXJlc291cmNlXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFByb21pc2VzL0ErIHBvbHlmaWxsIHYxLjEuNCAoaHR0cHM6Ly9naXRodWIuY29tL2JyYW1zdGVpbi9wcm9taXMpXG4gKi9cblxudmFyIFJFU09MVkVEID0gMDtcbnZhciBSRUpFQ1RFRCA9IDE7XG52YXIgUEVORElORyA9IDI7XG5cbmZ1bmN0aW9uIFByb21pc2UkMShleGVjdXRvcikge1xuXG4gICAgdGhpcy5zdGF0ZSA9IFBFTkRJTkc7XG4gICAgdGhpcy52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmRlZmVycmVkID0gW107XG5cbiAgICB2YXIgcHJvbWlzZSA9IHRoaXM7XG5cbiAgICB0cnkge1xuICAgICAgICBleGVjdXRvcihmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgcHJvbWlzZS5yZXNvbHZlKHgpO1xuICAgICAgICB9LCBmdW5jdGlvbiAocikge1xuICAgICAgICAgICAgcHJvbWlzZS5yZWplY3Qocik7XG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcHJvbWlzZS5yZWplY3QoZSk7XG4gICAgfVxufVxuXG5Qcm9taXNlJDEucmVqZWN0ID0gZnVuY3Rpb24gKHIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHJlamVjdChyKTtcbiAgICB9KTtcbn07XG5cblByb21pc2UkMS5yZXNvbHZlID0gZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHJlc29sdmUoeCk7XG4gICAgfSk7XG59O1xuXG5Qcm9taXNlJDEuYWxsID0gZnVuY3Rpb24gYWxsKGl0ZXJhYmxlKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICB2YXIgY291bnQgPSAwLFxuICAgICAgICAgICAgcmVzdWx0ID0gW107XG5cbiAgICAgICAgaWYgKGl0ZXJhYmxlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcmVzb2x2ZXIoaSkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0W2ldID0geDtcbiAgICAgICAgICAgICAgICBjb3VudCArPSAxO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ID09PSBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZXJhYmxlLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBQcm9taXNlJDEucmVzb2x2ZShpdGVyYWJsZVtpXSkudGhlbihyZXNvbHZlcihpKSwgcmVqZWN0KTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxuUHJvbWlzZSQxLnJhY2UgPSBmdW5jdGlvbiByYWNlKGl0ZXJhYmxlKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZXJhYmxlLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBQcm9taXNlJDEucmVzb2x2ZShpdGVyYWJsZVtpXSkudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG52YXIgcCQxID0gUHJvbWlzZSQxLnByb3RvdHlwZTtcblxucCQxLnJlc29sdmUgPSBmdW5jdGlvbiByZXNvbHZlKHgpIHtcbiAgICB2YXIgcHJvbWlzZSA9IHRoaXM7XG5cbiAgICBpZiAocHJvbWlzZS5zdGF0ZSA9PT0gUEVORElORykge1xuICAgICAgICBpZiAoeCA9PT0gcHJvbWlzZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUHJvbWlzZSBzZXR0bGVkIHdpdGggaXRzZWxmLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNhbGxlZCA9IGZhbHNlO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgdGhlbiA9IHggJiYgeFsndGhlbiddO1xuXG4gICAgICAgICAgICBpZiAoeCAhPT0gbnVsbCAmJiB0eXBlb2YgeCA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0aGVuLmNhbGwoeCwgZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjYWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2UucmVzb2x2ZSh4KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChyKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghY2FsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlLnJlamVjdChyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgaWYgKCFjYWxsZWQpIHtcbiAgICAgICAgICAgICAgICBwcm9taXNlLnJlamVjdChlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHByb21pc2Uuc3RhdGUgPSBSRVNPTFZFRDtcbiAgICAgICAgcHJvbWlzZS52YWx1ZSA9IHg7XG4gICAgICAgIHByb21pc2Uubm90aWZ5KCk7XG4gICAgfVxufTtcblxucCQxLnJlamVjdCA9IGZ1bmN0aW9uIHJlamVjdChyZWFzb24pIHtcbiAgICB2YXIgcHJvbWlzZSA9IHRoaXM7XG5cbiAgICBpZiAocHJvbWlzZS5zdGF0ZSA9PT0gUEVORElORykge1xuICAgICAgICBpZiAocmVhc29uID09PSBwcm9taXNlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdQcm9taXNlIHNldHRsZWQgd2l0aCBpdHNlbGYuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBwcm9taXNlLnN0YXRlID0gUkVKRUNURUQ7XG4gICAgICAgIHByb21pc2UudmFsdWUgPSByZWFzb247XG4gICAgICAgIHByb21pc2Uubm90aWZ5KCk7XG4gICAgfVxufTtcblxucCQxLm5vdGlmeSA9IGZ1bmN0aW9uIG5vdGlmeSgpIHtcbiAgICB2YXIgcHJvbWlzZSA9IHRoaXM7XG5cbiAgICBuZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChwcm9taXNlLnN0YXRlICE9PSBQRU5ESU5HKSB7XG4gICAgICAgICAgICB3aGlsZSAocHJvbWlzZS5kZWZlcnJlZC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSBwcm9taXNlLmRlZmVycmVkLnNoaWZ0KCksXG4gICAgICAgICAgICAgICAgICAgIG9uUmVzb2x2ZWQgPSBkZWZlcnJlZFswXSxcbiAgICAgICAgICAgICAgICAgICAgb25SZWplY3RlZCA9IGRlZmVycmVkWzFdLFxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlID0gZGVmZXJyZWRbMl0sXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCA9IGRlZmVycmVkWzNdO1xuXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb21pc2Uuc3RhdGUgPT09IFJFU09MVkVEKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9uUmVzb2x2ZWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG9uUmVzb2x2ZWQuY2FsbCh1bmRlZmluZWQsIHByb21pc2UudmFsdWUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShwcm9taXNlLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9taXNlLnN0YXRlID09PSBSRUpFQ1RFRCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvblJlamVjdGVkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShvblJlamVjdGVkLmNhbGwodW5kZWZpbmVkLCBwcm9taXNlLnZhbHVlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChwcm9taXNlLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxucCQxLnRoZW4gPSBmdW5jdGlvbiB0aGVuKG9uUmVzb2x2ZWQsIG9uUmVqZWN0ZWQpIHtcbiAgICB2YXIgcHJvbWlzZSA9IHRoaXM7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHByb21pc2UuZGVmZXJyZWQucHVzaChbb25SZXNvbHZlZCwgb25SZWplY3RlZCwgcmVzb2x2ZSwgcmVqZWN0XSk7XG4gICAgICAgIHByb21pc2Uubm90aWZ5KCk7XG4gICAgfSk7XG59O1xuXG5wJDEuY2F0Y2ggPSBmdW5jdGlvbiAob25SZWplY3RlZCkge1xuICAgIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBvblJlamVjdGVkKTtcbn07XG5cbi8qKlxuICogUHJvbWlzZSBhZGFwdGVyLlxuICovXG5cbmlmICh0eXBlb2YgUHJvbWlzZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB3aW5kb3cuUHJvbWlzZSA9IFByb21pc2UkMTtcbn1cblxuZnVuY3Rpb24gUHJvbWlzZU9iaihleGVjdXRvciwgY29udGV4dCkge1xuXG4gICAgaWYgKGV4ZWN1dG9yIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICB0aGlzLnByb21pc2UgPSBleGVjdXRvcjtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZShleGVjdXRvci5iaW5kKGNvbnRleHQpKTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xufVxuXG5Qcm9taXNlT2JqLmFsbCA9IGZ1bmN0aW9uIChpdGVyYWJsZSwgY29udGV4dCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZU9iaihQcm9taXNlLmFsbChpdGVyYWJsZSksIGNvbnRleHQpO1xufTtcblxuUHJvbWlzZU9iai5yZXNvbHZlID0gZnVuY3Rpb24gKHZhbHVlLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlT2JqKFByb21pc2UucmVzb2x2ZSh2YWx1ZSksIGNvbnRleHQpO1xufTtcblxuUHJvbWlzZU9iai5yZWplY3QgPSBmdW5jdGlvbiAocmVhc29uLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlT2JqKFByb21pc2UucmVqZWN0KHJlYXNvbiksIGNvbnRleHQpO1xufTtcblxuUHJvbWlzZU9iai5yYWNlID0gZnVuY3Rpb24gKGl0ZXJhYmxlLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlT2JqKFByb21pc2UucmFjZShpdGVyYWJsZSksIGNvbnRleHQpO1xufTtcblxudmFyIHAgPSBQcm9taXNlT2JqLnByb3RvdHlwZTtcblxucC5iaW5kID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHJldHVybiB0aGlzO1xufTtcblxucC50aGVuID0gZnVuY3Rpb24gKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpIHtcblxuICAgIGlmIChmdWxmaWxsZWQgJiYgZnVsZmlsbGVkLmJpbmQgJiYgdGhpcy5jb250ZXh0KSB7XG4gICAgICAgIGZ1bGZpbGxlZCA9IGZ1bGZpbGxlZC5iaW5kKHRoaXMuY29udGV4dCk7XG4gICAgfVxuXG4gICAgaWYgKHJlamVjdGVkICYmIHJlamVjdGVkLmJpbmQgJiYgdGhpcy5jb250ZXh0KSB7XG4gICAgICAgIHJlamVjdGVkID0gcmVqZWN0ZWQuYmluZCh0aGlzLmNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgUHJvbWlzZU9iaih0aGlzLnByb21pc2UudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKSwgdGhpcy5jb250ZXh0KTtcbn07XG5cbnAuY2F0Y2ggPSBmdW5jdGlvbiAocmVqZWN0ZWQpIHtcblxuICAgIGlmIChyZWplY3RlZCAmJiByZWplY3RlZC5iaW5kICYmIHRoaXMuY29udGV4dCkge1xuICAgICAgICByZWplY3RlZCA9IHJlamVjdGVkLmJpbmQodGhpcy5jb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2VPYmoodGhpcy5wcm9taXNlLmNhdGNoKHJlamVjdGVkKSwgdGhpcy5jb250ZXh0KTtcbn07XG5cbnAuZmluYWxseSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXG4gICAgcmV0dXJuIHRoaXMudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzKTtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzKTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlYXNvbik7XG4gICAgfSk7XG59O1xuXG4vKipcbiAqIFV0aWxpdHkgZnVuY3Rpb25zLlxuICovXG5cbnZhciBkZWJ1ZyA9IGZhbHNlO3ZhciB1dGlsID0ge307dmFyIHNsaWNlID0gW10uc2xpY2U7XG5cblxuZnVuY3Rpb24gVXRpbCAoVnVlKSB7XG4gICAgdXRpbCA9IFZ1ZS51dGlsO1xuICAgIGRlYnVnID0gVnVlLmNvbmZpZy5kZWJ1ZyB8fCAhVnVlLmNvbmZpZy5zaWxlbnQ7XG59XG5cbmZ1bmN0aW9uIHdhcm4obXNnKSB7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiBkZWJ1Zykge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1tWdWVSZXNvdXJjZSB3YXJuXTogJyArIG1zZyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBlcnJvcihtc2cpIHtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IobXNnKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG5leHRUaWNrKGNiLCBjdHgpIHtcbiAgICByZXR1cm4gdXRpbC5uZXh0VGljayhjYiwgY3R4KTtcbn1cblxuZnVuY3Rpb24gdHJpbShzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMqfFxccyokL2csICcnKTtcbn1cblxuZnVuY3Rpb24gdG9Mb3dlcihzdHIpIHtcbiAgICByZXR1cm4gc3RyID8gc3RyLnRvTG93ZXJDYXNlKCkgOiAnJztcbn1cblxuZnVuY3Rpb24gdG9VcHBlcihzdHIpIHtcbiAgICByZXR1cm4gc3RyID8gc3RyLnRvVXBwZXJDYXNlKCkgOiAnJztcbn1cblxudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG5mdW5jdGlvbiBpc1N0cmluZyh2YWwpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZyc7XG59XG5cbmZ1bmN0aW9uIGlzQm9vbGVhbih2YWwpIHtcbiAgICByZXR1cm4gdmFsID09PSB0cnVlIHx8IHZhbCA9PT0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KG9iaikge1xuICAgIHJldHVybiBvYmogIT09IG51bGwgJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCc7XG59XG5cbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3Qob2JqKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KG9iaikgJiYgT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaikgPT0gT2JqZWN0LnByb3RvdHlwZTtcbn1cblxuZnVuY3Rpb24gaXNCbG9iKG9iaikge1xuICAgIHJldHVybiB0eXBlb2YgQmxvYiAhPT0gJ3VuZGVmaW5lZCcgJiYgb2JqIGluc3RhbmNlb2YgQmxvYjtcbn1cblxuZnVuY3Rpb24gaXNGb3JtRGF0YShvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIEZvcm1EYXRhICE9PSAndW5kZWZpbmVkJyAmJiBvYmogaW5zdGFuY2VvZiBGb3JtRGF0YTtcbn1cblxuZnVuY3Rpb24gd2hlbih2YWx1ZSwgZnVsZmlsbGVkLCByZWplY3RlZCkge1xuXG4gICAgdmFyIHByb21pc2UgPSBQcm9taXNlT2JqLnJlc29sdmUodmFsdWUpO1xuXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9taXNlLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7XG59XG5cbmZ1bmN0aW9uIG9wdGlvbnMoZm4sIG9iaiwgb3B0cykge1xuXG4gICAgb3B0cyA9IG9wdHMgfHwge307XG5cbiAgICBpZiAoaXNGdW5jdGlvbihvcHRzKSkge1xuICAgICAgICBvcHRzID0gb3B0cy5jYWxsKG9iaik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lcmdlKGZuLmJpbmQoeyAkdm06IG9iaiwgJG9wdGlvbnM6IG9wdHMgfSksIGZuLCB7ICRvcHRpb25zOiBvcHRzIH0pO1xufVxuXG5mdW5jdGlvbiBlYWNoKG9iaiwgaXRlcmF0b3IpIHtcblxuICAgIHZhciBpLCBrZXk7XG5cbiAgICBpZiAob2JqICYmIHR5cGVvZiBvYmoubGVuZ3RoID09ICdudW1iZXInKSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBvYmoubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGl0ZXJhdG9yLmNhbGwob2JqW2ldLCBvYmpbaV0sIGkpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChpc09iamVjdChvYmopKSB7XG4gICAgICAgIGZvciAoa2V5IGluIG9iaikge1xuICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgaXRlcmF0b3IuY2FsbChvYmpba2V5XSwgb2JqW2tleV0sIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xufVxuXG52YXIgYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBfYXNzaWduO1xuXG5mdW5jdGlvbiBtZXJnZSh0YXJnZXQpIHtcblxuICAgIHZhciBhcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuXG4gICAgYXJncy5mb3JFYWNoKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgICAgX21lcmdlKHRhcmdldCwgc291cmNlLCB0cnVlKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRzKHRhcmdldCkge1xuXG4gICAgdmFyIGFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG5cbiAgICBhcmdzLmZvckVhY2goZnVuY3Rpb24gKHNvdXJjZSkge1xuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgICAgIGlmICh0YXJnZXRba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gX2Fzc2lnbih0YXJnZXQpIHtcblxuICAgIHZhciBhcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuXG4gICAgYXJncy5mb3JFYWNoKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgICAgX21lcmdlKHRhcmdldCwgc291cmNlKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIF9tZXJnZSh0YXJnZXQsIHNvdXJjZSwgZGVlcCkge1xuICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKGRlZXAgJiYgKGlzUGxhaW5PYmplY3Qoc291cmNlW2tleV0pIHx8IGlzQXJyYXkoc291cmNlW2tleV0pKSkge1xuICAgICAgICAgICAgaWYgKGlzUGxhaW5PYmplY3Qoc291cmNlW2tleV0pICYmICFpc1BsYWluT2JqZWN0KHRhcmdldFtrZXldKSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNBcnJheShzb3VyY2Vba2V5XSkgJiYgIWlzQXJyYXkodGFyZ2V0W2tleV0pKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF9tZXJnZSh0YXJnZXRba2V5XSwgc291cmNlW2tleV0sIGRlZXApO1xuICAgICAgICB9IGVsc2UgaWYgKHNvdXJjZVtrZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICogUm9vdCBQcmVmaXggVHJhbnNmb3JtLlxuICovXG5cbmZ1bmN0aW9uIHJvb3QgKG9wdGlvbnMsIG5leHQpIHtcblxuICAgIHZhciB1cmwgPSBuZXh0KG9wdGlvbnMpO1xuXG4gICAgaWYgKGlzU3RyaW5nKG9wdGlvbnMucm9vdCkgJiYgIXVybC5tYXRjaCgvXihodHRwcz86KT9cXC8vKSkge1xuICAgICAgICB1cmwgPSBvcHRpb25zLnJvb3QgKyAnLycgKyB1cmw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVybDtcbn1cblxuLyoqXG4gKiBRdWVyeSBQYXJhbWV0ZXIgVHJhbnNmb3JtLlxuICovXG5cbmZ1bmN0aW9uIHF1ZXJ5IChvcHRpb25zLCBuZXh0KSB7XG5cbiAgICB2YXIgdXJsUGFyYW1zID0gT2JqZWN0LmtleXMoVXJsLm9wdGlvbnMucGFyYW1zKSxcbiAgICAgICAgcXVlcnkgPSB7fSxcbiAgICAgICAgdXJsID0gbmV4dChvcHRpb25zKTtcblxuICAgIGVhY2gob3B0aW9ucy5wYXJhbXMsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgIGlmICh1cmxQYXJhbXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgICAgcXVlcnlba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBxdWVyeSA9IFVybC5wYXJhbXMocXVlcnkpO1xuXG4gICAgaWYgKHF1ZXJ5KSB7XG4gICAgICAgIHVybCArPSAodXJsLmluZGV4T2YoJz8nKSA9PSAtMSA/ICc/JyA6ICcmJykgKyBxdWVyeTtcbiAgICB9XG5cbiAgICByZXR1cm4gdXJsO1xufVxuXG4vKipcbiAqIFVSTCBUZW1wbGF0ZSB2Mi4wLjYgKGh0dHBzOi8vZ2l0aHViLmNvbS9icmFtc3RlaW4vdXJsLXRlbXBsYXRlKVxuICovXG5cbmZ1bmN0aW9uIGV4cGFuZCh1cmwsIHBhcmFtcywgdmFyaWFibGVzKSB7XG5cbiAgICB2YXIgdG1wbCA9IHBhcnNlKHVybCksXG4gICAgICAgIGV4cGFuZGVkID0gdG1wbC5leHBhbmQocGFyYW1zKTtcblxuICAgIGlmICh2YXJpYWJsZXMpIHtcbiAgICAgICAgdmFyaWFibGVzLnB1c2guYXBwbHkodmFyaWFibGVzLCB0bXBsLnZhcnMpO1xuICAgIH1cblxuICAgIHJldHVybiBleHBhbmRlZDtcbn1cblxuZnVuY3Rpb24gcGFyc2UodGVtcGxhdGUpIHtcblxuICAgIHZhciBvcGVyYXRvcnMgPSBbJysnLCAnIycsICcuJywgJy8nLCAnOycsICc/JywgJyYnXSxcbiAgICAgICAgdmFyaWFibGVzID0gW107XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB2YXJzOiB2YXJpYWJsZXMsXG4gICAgICAgIGV4cGFuZDogZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZS5yZXBsYWNlKC9cXHsoW15cXHtcXH1dKylcXH18KFteXFx7XFx9XSspL2csIGZ1bmN0aW9uIChfLCBleHByZXNzaW9uLCBsaXRlcmFsKSB7XG4gICAgICAgICAgICAgICAgaWYgKGV4cHJlc3Npb24pIHtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgb3BlcmF0b3IgPSBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzID0gW107XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wZXJhdG9ycy5pbmRleE9mKGV4cHJlc3Npb24uY2hhckF0KDApKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdG9yID0gZXhwcmVzc2lvbi5jaGFyQXQoMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbi5zdWJzdHIoMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uLnNwbGl0KC8sL2cpLmZvckVhY2goZnVuY3Rpb24gKHZhcmlhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdG1wID0gLyhbXjpcXCpdKikoPzo6KFxcZCspfChcXCopKT8vLmV4ZWModmFyaWFibGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzLnB1c2guYXBwbHkodmFsdWVzLCBnZXRWYWx1ZXMoY29udGV4dCwgb3BlcmF0b3IsIHRtcFsxXSwgdG1wWzJdIHx8IHRtcFszXSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzLnB1c2godG1wWzFdKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wZXJhdG9yICYmIG9wZXJhdG9yICE9PSAnKycpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNlcGFyYXRvciA9ICcsJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wZXJhdG9yID09PSAnPycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXBhcmF0b3IgPSAnJic7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9wZXJhdG9yICE9PSAnIycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXBhcmF0b3IgPSBvcGVyYXRvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICh2YWx1ZXMubGVuZ3RoICE9PSAwID8gb3BlcmF0b3IgOiAnJykgKyB2YWx1ZXMuam9pbihzZXBhcmF0b3IpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlcy5qb2luKCcsJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZW5jb2RlUmVzZXJ2ZWQobGl0ZXJhbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5mdW5jdGlvbiBnZXRWYWx1ZXMoY29udGV4dCwgb3BlcmF0b3IsIGtleSwgbW9kaWZpZXIpIHtcblxuICAgIHZhciB2YWx1ZSA9IGNvbnRleHRba2V5XSxcbiAgICAgICAgcmVzdWx0ID0gW107XG5cbiAgICBpZiAoaXNEZWZpbmVkKHZhbHVlKSAmJiB2YWx1ZSAhPT0gJycpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS50b1N0cmluZygpO1xuXG4gICAgICAgICAgICBpZiAobW9kaWZpZXIgJiYgbW9kaWZpZXIgIT09ICcqJykge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuc3Vic3RyaW5nKDAsIHBhcnNlSW50KG1vZGlmaWVyLCAxMCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXN1bHQucHVzaChlbmNvZGVWYWx1ZShvcGVyYXRvciwgdmFsdWUsIGlzS2V5T3BlcmF0b3Iob3BlcmF0b3IpID8ga2V5IDogbnVsbCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKG1vZGlmaWVyID09PSAnKicpIHtcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUuZmlsdGVyKGlzRGVmaW5lZCkuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGVuY29kZVZhbHVlKG9wZXJhdG9yLCB2YWx1ZSwgaXNLZXlPcGVyYXRvcihvcGVyYXRvcikgPyBrZXkgOiBudWxsKSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNEZWZpbmVkKHZhbHVlW2tdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGVuY29kZVZhbHVlKG9wZXJhdG9yLCB2YWx1ZVtrXSwgaykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciB0bXAgPSBbXTtcblxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5maWx0ZXIoaXNEZWZpbmVkKS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG1wLnB1c2goZW5jb2RlVmFsdWUob3BlcmF0b3IsIHZhbHVlKSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNEZWZpbmVkKHZhbHVlW2tdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRtcC5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChrKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG1wLnB1c2goZW5jb2RlVmFsdWUob3BlcmF0b3IsIHZhbHVlW2tdLnRvU3RyaW5nKCkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGlzS2V5T3BlcmF0b3Iob3BlcmF0b3IpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChrZXkpICsgJz0nICsgdG1wLmpvaW4oJywnKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0bXAubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRtcC5qb2luKCcsJykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChvcGVyYXRvciA9PT0gJzsnKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChlbmNvZGVVUklDb21wb25lbnQoa2V5KSk7XG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09ICcnICYmIChvcGVyYXRvciA9PT0gJyYnIHx8IG9wZXJhdG9yID09PSAnPycpKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChlbmNvZGVVUklDb21wb25lbnQoa2V5KSArICc9Jyk7XG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaCgnJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBpc0RlZmluZWQodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbDtcbn1cblxuZnVuY3Rpb24gaXNLZXlPcGVyYXRvcihvcGVyYXRvcikge1xuICAgIHJldHVybiBvcGVyYXRvciA9PT0gJzsnIHx8IG9wZXJhdG9yID09PSAnJicgfHwgb3BlcmF0b3IgPT09ICc/Jztcbn1cblxuZnVuY3Rpb24gZW5jb2RlVmFsdWUob3BlcmF0b3IsIHZhbHVlLCBrZXkpIHtcblxuICAgIHZhbHVlID0gb3BlcmF0b3IgPT09ICcrJyB8fCBvcGVyYXRvciA9PT0gJyMnID8gZW5jb2RlUmVzZXJ2ZWQodmFsdWUpIDogZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcblxuICAgIGlmIChrZXkpIHtcbiAgICAgICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChrZXkpICsgJz0nICsgdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZW5jb2RlUmVzZXJ2ZWQoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5zcGxpdCgvKCVbMC05QS1GYS1mXXsyfSkvZykubWFwKGZ1bmN0aW9uIChwYXJ0KSB7XG4gICAgICAgIGlmICghLyVbMC05QS1GYS1mXS8udGVzdChwYXJ0KSkge1xuICAgICAgICAgICAgcGFydCA9IGVuY29kZVVSSShwYXJ0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGFydDtcbiAgICB9KS5qb2luKCcnKTtcbn1cblxuLyoqXG4gKiBVUkwgVGVtcGxhdGUgKFJGQyA2NTcwKSBUcmFuc2Zvcm0uXG4gKi9cblxuZnVuY3Rpb24gdGVtcGxhdGUgKG9wdGlvbnMpIHtcblxuICAgIHZhciB2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgdXJsID0gZXhwYW5kKG9wdGlvbnMudXJsLCBvcHRpb25zLnBhcmFtcywgdmFyaWFibGVzKTtcblxuICAgIHZhcmlhYmxlcy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgZGVsZXRlIG9wdGlvbnMucGFyYW1zW2tleV07XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdXJsO1xufVxuXG4vKipcbiAqIFNlcnZpY2UgZm9yIFVSTCB0ZW1wbGF0aW5nLlxuICovXG5cbnZhciBpZSA9IGRvY3VtZW50LmRvY3VtZW50TW9kZTtcbnZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblxuZnVuY3Rpb24gVXJsKHVybCwgcGFyYW1zKSB7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXMgfHwge30sXG4gICAgICAgIG9wdGlvbnMgPSB1cmwsXG4gICAgICAgIHRyYW5zZm9ybTtcblxuICAgIGlmIChpc1N0cmluZyh1cmwpKSB7XG4gICAgICAgIG9wdGlvbnMgPSB7IHVybDogdXJsLCBwYXJhbXM6IHBhcmFtcyB9O1xuICAgIH1cblxuICAgIG9wdGlvbnMgPSBtZXJnZSh7fSwgVXJsLm9wdGlvbnMsIHNlbGYuJG9wdGlvbnMsIG9wdGlvbnMpO1xuXG4gICAgVXJsLnRyYW5zZm9ybXMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgICAgICB0cmFuc2Zvcm0gPSBmYWN0b3J5KGhhbmRsZXIsIHRyYW5zZm9ybSwgc2VsZi4kdm0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRyYW5zZm9ybShvcHRpb25zKTtcbn1cblxuLyoqXG4gKiBVcmwgb3B0aW9ucy5cbiAqL1xuXG5Vcmwub3B0aW9ucyA9IHtcbiAgICB1cmw6ICcnLFxuICAgIHJvb3Q6IG51bGwsXG4gICAgcGFyYW1zOiB7fVxufTtcblxuLyoqXG4gKiBVcmwgdHJhbnNmb3Jtcy5cbiAqL1xuXG5VcmwudHJhbnNmb3JtcyA9IFt0ZW1wbGF0ZSwgcXVlcnksIHJvb3RdO1xuXG4vKipcbiAqIEVuY29kZXMgYSBVcmwgcGFyYW1ldGVyIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKi9cblxuVXJsLnBhcmFtcyA9IGZ1bmN0aW9uIChvYmopIHtcblxuICAgIHZhciBwYXJhbXMgPSBbXSxcbiAgICAgICAgZXNjYXBlID0gZW5jb2RlVVJJQ29tcG9uZW50O1xuXG4gICAgcGFyYW1zLmFkZCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG5cbiAgICAgICAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHZhbHVlID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnB1c2goZXNjYXBlKGtleSkgKyAnPScgKyBlc2NhcGUodmFsdWUpKTtcbiAgICB9O1xuXG4gICAgc2VyaWFsaXplKHBhcmFtcywgb2JqKTtcblxuICAgIHJldHVybiBwYXJhbXMuam9pbignJicpLnJlcGxhY2UoLyUyMC9nLCAnKycpO1xufTtcblxuLyoqXG4gKiBQYXJzZSBhIFVSTCBhbmQgcmV0dXJuIGl0cyBjb21wb25lbnRzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqL1xuXG5VcmwucGFyc2UgPSBmdW5jdGlvbiAodXJsKSB7XG5cbiAgICBpZiAoaWUpIHtcbiAgICAgICAgZWwuaHJlZiA9IHVybDtcbiAgICAgICAgdXJsID0gZWwuaHJlZjtcbiAgICB9XG5cbiAgICBlbC5ocmVmID0gdXJsO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaHJlZjogZWwuaHJlZixcbiAgICAgICAgcHJvdG9jb2w6IGVsLnByb3RvY29sID8gZWwucHJvdG9jb2wucmVwbGFjZSgvOiQvLCAnJykgOiAnJyxcbiAgICAgICAgcG9ydDogZWwucG9ydCxcbiAgICAgICAgaG9zdDogZWwuaG9zdCxcbiAgICAgICAgaG9zdG5hbWU6IGVsLmhvc3RuYW1lLFxuICAgICAgICBwYXRobmFtZTogZWwucGF0aG5hbWUuY2hhckF0KDApID09PSAnLycgPyBlbC5wYXRobmFtZSA6ICcvJyArIGVsLnBhdGhuYW1lLFxuICAgICAgICBzZWFyY2g6IGVsLnNlYXJjaCA/IGVsLnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgJycpIDogJycsXG4gICAgICAgIGhhc2g6IGVsLmhhc2ggPyBlbC5oYXNoLnJlcGxhY2UoL14jLywgJycpIDogJydcbiAgICB9O1xufTtcblxuZnVuY3Rpb24gZmFjdG9yeShoYW5kbGVyLCBuZXh0LCB2bSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICByZXR1cm4gaGFuZGxlci5jYWxsKHZtLCBvcHRpb25zLCBuZXh0KTtcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBzZXJpYWxpemUocGFyYW1zLCBvYmosIHNjb3BlKSB7XG5cbiAgICB2YXIgYXJyYXkgPSBpc0FycmF5KG9iaiksXG4gICAgICAgIHBsYWluID0gaXNQbGFpbk9iamVjdChvYmopLFxuICAgICAgICBoYXNoO1xuXG4gICAgZWFjaChvYmosIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG5cbiAgICAgICAgaGFzaCA9IGlzT2JqZWN0KHZhbHVlKSB8fCBpc0FycmF5KHZhbHVlKTtcblxuICAgICAgICBpZiAoc2NvcGUpIHtcbiAgICAgICAgICAgIGtleSA9IHNjb3BlICsgJ1snICsgKHBsYWluIHx8IGhhc2ggPyBrZXkgOiAnJykgKyAnXSc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXNjb3BlICYmIGFycmF5KSB7XG4gICAgICAgICAgICBwYXJhbXMuYWRkKHZhbHVlLm5hbWUsIHZhbHVlLnZhbHVlKTtcbiAgICAgICAgfSBlbHNlIGlmIChoYXNoKSB7XG4gICAgICAgICAgICBzZXJpYWxpemUocGFyYW1zLCB2YWx1ZSwga2V5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcmFtcy5hZGQoa2V5LCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuLyoqXG4gKiBYRG9tYWluIGNsaWVudCAoSW50ZXJuZXQgRXhwbG9yZXIpLlxuICovXG5cbmZ1bmN0aW9uIHhkckNsaWVudCAocmVxdWVzdCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZU9iaihmdW5jdGlvbiAocmVzb2x2ZSkge1xuXG4gICAgICAgIHZhciB4ZHIgPSBuZXcgWERvbWFpblJlcXVlc3QoKSxcbiAgICAgICAgICAgIGhhbmRsZXIgPSBmdW5jdGlvbiAoX3JlZikge1xuICAgICAgICAgICAgdmFyIHR5cGUgPSBfcmVmLnR5cGU7XG5cblxuICAgICAgICAgICAgdmFyIHN0YXR1cyA9IDA7XG5cbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnbG9hZCcpIHtcbiAgICAgICAgICAgICAgICBzdGF0dXMgPSAyMDA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdlcnJvcicpIHtcbiAgICAgICAgICAgICAgICBzdGF0dXMgPSA1MDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlc29sdmUocmVxdWVzdC5yZXNwb25kV2l0aCh4ZHIucmVzcG9uc2VUZXh0LCB7IHN0YXR1czogc3RhdHVzIH0pKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXF1ZXN0LmFib3J0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHhkci5hYm9ydCgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHhkci5vcGVuKHJlcXVlc3QubWV0aG9kLCByZXF1ZXN0LmdldFVybCgpKTtcbiAgICAgICAgeGRyLnRpbWVvdXQgPSAwO1xuICAgICAgICB4ZHIub25sb2FkID0gaGFuZGxlcjtcbiAgICAgICAgeGRyLm9uZXJyb3IgPSBoYW5kbGVyO1xuICAgICAgICB4ZHIub250aW1lb3V0ID0gaGFuZGxlcjtcbiAgICAgICAgeGRyLm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICAgICAgeGRyLnNlbmQocmVxdWVzdC5nZXRCb2R5KCkpO1xuICAgIH0pO1xufVxuXG4vKipcbiAqIENPUlMgSW50ZXJjZXB0b3IuXG4gKi9cblxudmFyIE9SSUdJTl9VUkwgPSBVcmwucGFyc2UobG9jYXRpb24uaHJlZik7XG52YXIgU1VQUE9SVFNfQ09SUyA9ICd3aXRoQ3JlZGVudGlhbHMnIGluIG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG5mdW5jdGlvbiBjb3JzIChyZXF1ZXN0LCBuZXh0KSB7XG5cbiAgICBpZiAoIWlzQm9vbGVhbihyZXF1ZXN0LmNyb3NzT3JpZ2luKSAmJiBjcm9zc09yaWdpbihyZXF1ZXN0KSkge1xuICAgICAgICByZXF1ZXN0LmNyb3NzT3JpZ2luID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAocmVxdWVzdC5jcm9zc09yaWdpbikge1xuXG4gICAgICAgIGlmICghU1VQUE9SVFNfQ09SUykge1xuICAgICAgICAgICAgcmVxdWVzdC5jbGllbnQgPSB4ZHJDbGllbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBkZWxldGUgcmVxdWVzdC5lbXVsYXRlSFRUUDtcbiAgICB9XG5cbiAgICBuZXh0KCk7XG59XG5cbmZ1bmN0aW9uIGNyb3NzT3JpZ2luKHJlcXVlc3QpIHtcblxuICAgIHZhciByZXF1ZXN0VXJsID0gVXJsLnBhcnNlKFVybChyZXF1ZXN0KSk7XG5cbiAgICByZXR1cm4gcmVxdWVzdFVybC5wcm90b2NvbCAhPT0gT1JJR0lOX1VSTC5wcm90b2NvbCB8fCByZXF1ZXN0VXJsLmhvc3QgIT09IE9SSUdJTl9VUkwuaG9zdDtcbn1cblxuLyoqXG4gKiBCb2R5IEludGVyY2VwdG9yLlxuICovXG5cbmZ1bmN0aW9uIGJvZHkgKHJlcXVlc3QsIG5leHQpIHtcblxuICAgIGlmIChpc0Zvcm1EYXRhKHJlcXVlc3QuYm9keSkpIHtcblxuICAgICAgICByZXF1ZXN0LmhlYWRlcnMuZGVsZXRlKCdDb250ZW50LVR5cGUnKTtcbiAgICB9IGVsc2UgaWYgKGlzT2JqZWN0KHJlcXVlc3QuYm9keSkgfHwgaXNBcnJheShyZXF1ZXN0LmJvZHkpKSB7XG5cbiAgICAgICAgaWYgKHJlcXVlc3QuZW11bGF0ZUpTT04pIHtcbiAgICAgICAgICAgIHJlcXVlc3QuYm9keSA9IFVybC5wYXJhbXMocmVxdWVzdC5ib2R5KTtcbiAgICAgICAgICAgIHJlcXVlc3QuaGVhZGVycy5zZXQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlcXVlc3QuYm9keSA9IEpTT04uc3RyaW5naWZ5KHJlcXVlc3QuYm9keSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZXh0KGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXNwb25zZSwgJ2RhdGEnLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ib2R5O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKGJvZHkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvZHkgPSBib2R5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuYm9keVRleHQgPyB3aGVuKHJlc3BvbnNlLnRleHQoKSwgZnVuY3Rpb24gKHRleHQpIHtcblxuICAgICAgICAgICAgdmFyIHR5cGUgPSByZXNwb25zZS5oZWFkZXJzLmdldCgnQ29udGVudC1UeXBlJyk7XG5cbiAgICAgICAgICAgIGlmIChpc1N0cmluZyh0eXBlKSAmJiB0eXBlLmluZGV4T2YoJ2FwcGxpY2F0aW9uL2pzb24nKSA9PT0gMCkge1xuXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuYm9keSA9IEpTT04ucGFyc2UodGV4dCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5ib2R5ID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmJvZHkgPSB0ZXh0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgIH0pIDogcmVzcG9uc2U7XG4gICAgfSk7XG59XG5cbi8qKlxuICogSlNPTlAgY2xpZW50LlxuICovXG5cbmZ1bmN0aW9uIGpzb25wQ2xpZW50IChyZXF1ZXN0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlT2JqKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG5cbiAgICAgICAgdmFyIG5hbWUgPSByZXF1ZXN0Lmpzb25wIHx8ICdjYWxsYmFjaycsXG4gICAgICAgICAgICBjYWxsYmFjayA9ICdfanNvbnAnICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIpLFxuICAgICAgICAgICAgYm9keSA9IG51bGwsXG4gICAgICAgICAgICBoYW5kbGVyLFxuICAgICAgICAgICAgc2NyaXB0O1xuXG4gICAgICAgIGhhbmRsZXIgPSBmdW5jdGlvbiAoX3JlZikge1xuICAgICAgICAgICAgdmFyIHR5cGUgPSBfcmVmLnR5cGU7XG5cblxuICAgICAgICAgICAgdmFyIHN0YXR1cyA9IDA7XG5cbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnbG9hZCcgJiYgYm9keSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHN0YXR1cyA9IDIwMDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2Vycm9yJykge1xuICAgICAgICAgICAgICAgIHN0YXR1cyA9IDUwMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVzb2x2ZShyZXF1ZXN0LnJlc3BvbmRXaXRoKGJvZHksIHsgc3RhdHVzOiBzdGF0dXMgfSkpO1xuXG4gICAgICAgICAgICBkZWxldGUgd2luZG93W2NhbGxiYWNrXTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXF1ZXN0LnBhcmFtc1tuYW1lXSA9IGNhbGxiYWNrO1xuXG4gICAgICAgIHdpbmRvd1tjYWxsYmFja10gPSBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICBib2R5ID0gSlNPTi5zdHJpbmdpZnkocmVzdWx0KTtcbiAgICAgICAgfTtcblxuICAgICAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgc2NyaXB0LnNyYyA9IHJlcXVlc3QuZ2V0VXJsKCk7XG4gICAgICAgIHNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gICAgICAgIHNjcmlwdC5hc3luYyA9IHRydWU7XG4gICAgICAgIHNjcmlwdC5vbmxvYWQgPSBoYW5kbGVyO1xuICAgICAgICBzY3JpcHQub25lcnJvciA9IGhhbmRsZXI7XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgIH0pO1xufVxuXG4vKipcbiAqIEpTT05QIEludGVyY2VwdG9yLlxuICovXG5cbmZ1bmN0aW9uIGpzb25wIChyZXF1ZXN0LCBuZXh0KSB7XG5cbiAgICBpZiAocmVxdWVzdC5tZXRob2QgPT0gJ0pTT05QJykge1xuICAgICAgICByZXF1ZXN0LmNsaWVudCA9IGpzb25wQ2xpZW50O1xuICAgIH1cblxuICAgIG5leHQoZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cbiAgICAgICAgaWYgKHJlcXVlc3QubWV0aG9kID09ICdKU09OUCcpIHtcblxuICAgICAgICAgICAgcmV0dXJuIHdoZW4ocmVzcG9uc2UuanNvbigpLCBmdW5jdGlvbiAoanNvbikge1xuXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuYm9keSA9IGpzb247XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG4vKipcbiAqIEJlZm9yZSBJbnRlcmNlcHRvci5cbiAqL1xuXG5mdW5jdGlvbiBiZWZvcmUgKHJlcXVlc3QsIG5leHQpIHtcblxuICAgIGlmIChpc0Z1bmN0aW9uKHJlcXVlc3QuYmVmb3JlKSkge1xuICAgICAgICByZXF1ZXN0LmJlZm9yZS5jYWxsKHRoaXMsIHJlcXVlc3QpO1xuICAgIH1cblxuICAgIG5leHQoKTtcbn1cblxuLyoqXG4gKiBIVFRQIG1ldGhvZCBvdmVycmlkZSBJbnRlcmNlcHRvci5cbiAqL1xuXG5mdW5jdGlvbiBtZXRob2QgKHJlcXVlc3QsIG5leHQpIHtcblxuICAgIGlmIChyZXF1ZXN0LmVtdWxhdGVIVFRQICYmIC9eKFBVVHxQQVRDSHxERUxFVEUpJC9pLnRlc3QocmVxdWVzdC5tZXRob2QpKSB7XG4gICAgICAgIHJlcXVlc3QuaGVhZGVycy5zZXQoJ1gtSFRUUC1NZXRob2QtT3ZlcnJpZGUnLCByZXF1ZXN0Lm1ldGhvZCk7XG4gICAgICAgIHJlcXVlc3QubWV0aG9kID0gJ1BPU1QnO1xuICAgIH1cblxuICAgIG5leHQoKTtcbn1cblxuLyoqXG4gKiBIZWFkZXIgSW50ZXJjZXB0b3IuXG4gKi9cblxuZnVuY3Rpb24gaGVhZGVyIChyZXF1ZXN0LCBuZXh0KSB7XG5cbiAgICB2YXIgaGVhZGVycyA9IGFzc2lnbih7fSwgSHR0cC5oZWFkZXJzLmNvbW1vbiwgIXJlcXVlc3QuY3Jvc3NPcmlnaW4gPyBIdHRwLmhlYWRlcnMuY3VzdG9tIDoge30sIEh0dHAuaGVhZGVyc1t0b0xvd2VyKHJlcXVlc3QubWV0aG9kKV0pO1xuXG4gICAgZWFjaChoZWFkZXJzLCBmdW5jdGlvbiAodmFsdWUsIG5hbWUpIHtcbiAgICAgICAgaWYgKCFyZXF1ZXN0LmhlYWRlcnMuaGFzKG5hbWUpKSB7XG4gICAgICAgICAgICByZXF1ZXN0LmhlYWRlcnMuc2V0KG5hbWUsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgbmV4dCgpO1xufVxuXG4vKipcbiAqIFRpbWVvdXQgSW50ZXJjZXB0b3IuXG4gKi9cblxuZnVuY3Rpb24gdGltZW91dCAocmVxdWVzdCwgbmV4dCkge1xuXG4gICAgdmFyIHRpbWVvdXQ7XG5cbiAgICBpZiAocmVxdWVzdC50aW1lb3V0KSB7XG4gICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJlcXVlc3QuYWJvcnQoKTtcbiAgICAgICAgfSwgcmVxdWVzdC50aW1lb3V0KTtcbiAgICB9XG5cbiAgICBuZXh0KGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICB9KTtcbn1cblxuLyoqXG4gKiBYTUxIdHRwIGNsaWVudC5cbiAqL1xuXG5mdW5jdGlvbiB4aHJDbGllbnQgKHJlcXVlc3QpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2VPYmooZnVuY3Rpb24gKHJlc29sdmUpIHtcblxuICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCksXG4gICAgICAgICAgICBoYW5kbGVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG5cbiAgICAgICAgICAgIHZhciByZXNwb25zZSA9IHJlcXVlc3QucmVzcG9uZFdpdGgoJ3Jlc3BvbnNlJyBpbiB4aHIgPyB4aHIucmVzcG9uc2UgOiB4aHIucmVzcG9uc2VUZXh0LCB7XG4gICAgICAgICAgICAgICAgc3RhdHVzOiB4aHIuc3RhdHVzID09PSAxMjIzID8gMjA0IDogeGhyLnN0YXR1cywgLy8gSUU5IHN0YXR1cyBidWdcbiAgICAgICAgICAgICAgICBzdGF0dXNUZXh0OiB4aHIuc3RhdHVzID09PSAxMjIzID8gJ05vIENvbnRlbnQnIDogdHJpbSh4aHIuc3RhdHVzVGV4dClcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBlYWNoKHRyaW0oeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpKS5zcGxpdCgnXFxuJyksIGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgICAgICAgICAgICByZXNwb25zZS5oZWFkZXJzLmFwcGVuZChyb3cuc2xpY2UoMCwgcm93LmluZGV4T2YoJzonKSksIHJvdy5zbGljZShyb3cuaW5kZXhPZignOicpICsgMSkpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJlcXVlc3QuYWJvcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4geGhyLmFib3J0KCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHJlcXVlc3QucHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIGlmIChyZXF1ZXN0Lm1ldGhvZCA9PT0gJ0dFVCcpIHtcbiAgICAgICAgICAgICAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCByZXF1ZXN0LnByb2dyZXNzKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoL14oUE9TVHxQVVQpJC9pLnRlc3QocmVxdWVzdC5tZXRob2QpKSB7XG4gICAgICAgICAgICAgICAgeGhyLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIHJlcXVlc3QucHJvZ3Jlc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgeGhyLm9wZW4ocmVxdWVzdC5tZXRob2QsIHJlcXVlc3QuZ2V0VXJsKCksIHRydWUpO1xuXG4gICAgICAgIGlmICgncmVzcG9uc2VUeXBlJyBpbiB4aHIpIHtcbiAgICAgICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYmxvYic7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVxdWVzdC5jcmVkZW50aWFscyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0LmhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIG5hbWUpIHtcbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKG5hbWUsIHZhbHVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgeGhyLnRpbWVvdXQgPSAwO1xuICAgICAgICB4aHIub25sb2FkID0gaGFuZGxlcjtcbiAgICAgICAgeGhyLm9uZXJyb3IgPSBoYW5kbGVyO1xuICAgICAgICB4aHIuc2VuZChyZXF1ZXN0LmdldEJvZHkoKSk7XG4gICAgfSk7XG59XG5cbi8qKlxuICogQmFzZSBjbGllbnQuXG4gKi9cblxuZnVuY3Rpb24gQ2xpZW50IChjb250ZXh0KSB7XG5cbiAgICB2YXIgcmVxSGFuZGxlcnMgPSBbc2VuZFJlcXVlc3RdLFxuICAgICAgICByZXNIYW5kbGVycyA9IFtdLFxuICAgICAgICBoYW5kbGVyO1xuXG4gICAgaWYgKCFpc09iamVjdChjb250ZXh0KSkge1xuICAgICAgICBjb250ZXh0ID0gbnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBDbGllbnQocmVxdWVzdCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VPYmooZnVuY3Rpb24gKHJlc29sdmUpIHtcblxuICAgICAgICAgICAgZnVuY3Rpb24gZXhlYygpIHtcblxuICAgICAgICAgICAgICAgIGhhbmRsZXIgPSByZXFIYW5kbGVycy5wb3AoKTtcblxuICAgICAgICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKGhhbmRsZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXIuY2FsbChjb250ZXh0LCByZXF1ZXN0LCBuZXh0KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3YXJuKCdJbnZhbGlkIGludGVyY2VwdG9yIG9mIHR5cGUgJyArIHR5cGVvZiBoYW5kbGVyICsgJywgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIG5leHQocmVzcG9uc2UpIHtcblxuICAgICAgICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKHJlc3BvbnNlKSkge1xuXG4gICAgICAgICAgICAgICAgICAgIHJlc0hhbmRsZXJzLnVuc2hpZnQocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNPYmplY3QocmVzcG9uc2UpKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgcmVzSGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSB3aGVuKHJlc3BvbnNlLCBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlci5jYWxsKGNvbnRleHQsIHJlc3BvbnNlKSB8fCByZXNwb25zZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICB3aGVuKHJlc3BvbnNlLCByZXNvbHZlKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZXhlYygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBleGVjKCk7XG4gICAgICAgIH0sIGNvbnRleHQpO1xuICAgIH1cblxuICAgIENsaWVudC51c2UgPSBmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgICAgICByZXFIYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xuICAgIH07XG5cbiAgICByZXR1cm4gQ2xpZW50O1xufVxuXG5mdW5jdGlvbiBzZW5kUmVxdWVzdChyZXF1ZXN0LCByZXNvbHZlKSB7XG5cbiAgICB2YXIgY2xpZW50ID0gcmVxdWVzdC5jbGllbnQgfHwgeGhyQ2xpZW50O1xuXG4gICAgcmVzb2x2ZShjbGllbnQocmVxdWVzdCkpO1xufVxuXG52YXIgY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcblxuLyoqXG4gKiBIVFRQIEhlYWRlcnMuXG4gKi9cblxudmFyIEhlYWRlcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gSGVhZGVycyhoZWFkZXJzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgSGVhZGVycyk7XG5cblxuICAgICAgICB0aGlzLm1hcCA9IHt9O1xuXG4gICAgICAgIGVhY2goaGVhZGVycywgZnVuY3Rpb24gKHZhbHVlLCBuYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuYXBwZW5kKG5hbWUsIHZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgSGVhZGVycy5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gaGFzKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGdldE5hbWUodGhpcy5tYXAsIG5hbWUpICE9PSBudWxsO1xuICAgIH07XG5cbiAgICBIZWFkZXJzLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiBnZXQobmFtZSkge1xuXG4gICAgICAgIHZhciBsaXN0ID0gdGhpcy5tYXBbZ2V0TmFtZSh0aGlzLm1hcCwgbmFtZSldO1xuXG4gICAgICAgIHJldHVybiBsaXN0ID8gbGlzdFswXSA6IG51bGw7XG4gICAgfTtcblxuICAgIEhlYWRlcnMucHJvdG90eXBlLmdldEFsbCA9IGZ1bmN0aW9uIGdldEFsbChuYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1hcFtnZXROYW1lKHRoaXMubWFwLCBuYW1lKV0gfHwgW107XG4gICAgfTtcblxuICAgIEhlYWRlcnMucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIHNldChuYW1lLCB2YWx1ZSkge1xuICAgICAgICB0aGlzLm1hcFtub3JtYWxpemVOYW1lKGdldE5hbWUodGhpcy5tYXAsIG5hbWUpIHx8IG5hbWUpXSA9IFt0cmltKHZhbHVlKV07XG4gICAgfTtcblxuICAgIEhlYWRlcnMucHJvdG90eXBlLmFwcGVuZCA9IGZ1bmN0aW9uIGFwcGVuZChuYW1lLCB2YWx1ZSkge1xuXG4gICAgICAgIHZhciBsaXN0ID0gdGhpcy5nZXRBbGwobmFtZSk7XG5cbiAgICAgICAgaWYgKGxpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICBsaXN0LnB1c2godHJpbSh2YWx1ZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXQobmFtZSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIEhlYWRlcnMucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uIF9kZWxldGUobmFtZSkge1xuICAgICAgICBkZWxldGUgdGhpcy5tYXBbZ2V0TmFtZSh0aGlzLm1hcCwgbmFtZSldO1xuICAgIH07XG5cbiAgICBIZWFkZXJzLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFjaywgdGhpc0FyZykge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICBlYWNoKHRoaXMubWFwLCBmdW5jdGlvbiAobGlzdCwgbmFtZSkge1xuICAgICAgICAgICAgZWFjaChsaXN0LCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2suY2FsbCh0aGlzQXJnLCB2YWx1ZSwgbmFtZSwgX3RoaXMyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIEhlYWRlcnM7XG59KCk7XG5cbmZ1bmN0aW9uIGdldE5hbWUobWFwLCBuYW1lKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG1hcCkucmVkdWNlKGZ1bmN0aW9uIChwcmV2LCBjdXJyKSB7XG4gICAgICAgIHJldHVybiB0b0xvd2VyKG5hbWUpID09PSB0b0xvd2VyKGN1cnIpID8gY3VyciA6IHByZXY7XG4gICAgfSwgbnVsbCk7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZU5hbWUobmFtZSkge1xuXG4gICAgaWYgKC9bXmEtejAtOVxcLSMkJSYnKisuXFxeX2B8fl0vaS50ZXN0KG5hbWUpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgY2hhcmFjdGVyIGluIGhlYWRlciBmaWVsZCBuYW1lJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRyaW0obmFtZSk7XG59XG5cbi8qKlxuICogSFRUUCBSZXNwb25zZS5cbiAqL1xuXG52YXIgUmVzcG9uc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUmVzcG9uc2UoYm9keSwgX3JlZikge1xuICAgICAgICB2YXIgdXJsID0gX3JlZi51cmw7XG4gICAgICAgIHZhciBoZWFkZXJzID0gX3JlZi5oZWFkZXJzO1xuICAgICAgICB2YXIgc3RhdHVzID0gX3JlZi5zdGF0dXM7XG4gICAgICAgIHZhciBzdGF0dXNUZXh0ID0gX3JlZi5zdGF0dXNUZXh0O1xuICAgICAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBSZXNwb25zZSk7XG5cblxuICAgICAgICB0aGlzLnVybCA9IHVybDtcbiAgICAgICAgdGhpcy5vayA9IHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwO1xuICAgICAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cyB8fCAwO1xuICAgICAgICB0aGlzLnN0YXR1c1RleHQgPSBzdGF0dXNUZXh0IHx8ICcnO1xuICAgICAgICB0aGlzLmhlYWRlcnMgPSBuZXcgSGVhZGVycyhoZWFkZXJzKTtcbiAgICAgICAgdGhpcy5ib2R5ID0gYm9keTtcblxuICAgICAgICBpZiAoaXNTdHJpbmcoYm9keSkpIHtcblxuICAgICAgICAgICAgdGhpcy5ib2R5VGV4dCA9IGJvZHk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNCbG9iKGJvZHkpKSB7XG5cbiAgICAgICAgICAgIHRoaXMuYm9keUJsb2IgPSBib2R5O1xuXG4gICAgICAgICAgICBpZiAoaXNCbG9iVGV4dChib2R5KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9keVRleHQgPSBibG9iVGV4dChib2R5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIFJlc3BvbnNlLnByb3RvdHlwZS5ibG9iID0gZnVuY3Rpb24gYmxvYigpIHtcbiAgICAgICAgcmV0dXJuIHdoZW4odGhpcy5ib2R5QmxvYik7XG4gICAgfTtcblxuICAgIFJlc3BvbnNlLnByb3RvdHlwZS50ZXh0ID0gZnVuY3Rpb24gdGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIHdoZW4odGhpcy5ib2R5VGV4dCk7XG4gICAgfTtcblxuICAgIFJlc3BvbnNlLnByb3RvdHlwZS5qc29uID0gZnVuY3Rpb24ganNvbigpIHtcbiAgICAgICAgcmV0dXJuIHdoZW4odGhpcy50ZXh0KCksIGZ1bmN0aW9uICh0ZXh0KSB7XG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSh0ZXh0KTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiBSZXNwb25zZTtcbn0oKTtcblxuZnVuY3Rpb24gYmxvYlRleHQoYm9keSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZU9iaihmdW5jdGlvbiAocmVzb2x2ZSkge1xuXG4gICAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuXG4gICAgICAgIHJlYWRlci5yZWFkQXNUZXh0KGJvZHkpO1xuICAgICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmVzb2x2ZShyZWFkZXIucmVzdWx0KTtcbiAgICAgICAgfTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gaXNCbG9iVGV4dChib2R5KSB7XG4gICAgcmV0dXJuIGJvZHkudHlwZS5pbmRleE9mKCd0ZXh0JykgPT09IDAgfHwgYm9keS50eXBlLmluZGV4T2YoJ2pzb24nKSAhPT0gLTE7XG59XG5cbi8qKlxuICogSFRUUCBSZXF1ZXN0LlxuICovXG5cbnZhciBSZXF1ZXN0ID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJlcXVlc3Qob3B0aW9ucykge1xuICAgICAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBSZXF1ZXN0KTtcblxuXG4gICAgICAgIHRoaXMuYm9keSA9IG51bGw7XG4gICAgICAgIHRoaXMucGFyYW1zID0ge307XG5cbiAgICAgICAgYXNzaWduKHRoaXMsIG9wdGlvbnMsIHtcbiAgICAgICAgICAgIG1ldGhvZDogdG9VcHBlcihvcHRpb25zLm1ldGhvZCB8fCAnR0VUJylcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCEodGhpcy5oZWFkZXJzIGluc3RhbmNlb2YgSGVhZGVycykpIHtcbiAgICAgICAgICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKHRoaXMuaGVhZGVycyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBSZXF1ZXN0LnByb3RvdHlwZS5nZXRVcmwgPSBmdW5jdGlvbiBnZXRVcmwoKSB7XG4gICAgICAgIHJldHVybiBVcmwodGhpcyk7XG4gICAgfTtcblxuICAgIFJlcXVlc3QucHJvdG90eXBlLmdldEJvZHkgPSBmdW5jdGlvbiBnZXRCb2R5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ib2R5O1xuICAgIH07XG5cbiAgICBSZXF1ZXN0LnByb3RvdHlwZS5yZXNwb25kV2l0aCA9IGZ1bmN0aW9uIHJlc3BvbmRXaXRoKGJvZHksIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSZXNwb25zZShib2R5LCBhc3NpZ24ob3B0aW9ucyB8fCB7fSwgeyB1cmw6IHRoaXMuZ2V0VXJsKCkgfSkpO1xuICAgIH07XG5cbiAgICByZXR1cm4gUmVxdWVzdDtcbn0oKTtcblxuLyoqXG4gKiBTZXJ2aWNlIGZvciBzZW5kaW5nIG5ldHdvcmsgcmVxdWVzdHMuXG4gKi9cblxudmFyIENVU1RPTV9IRUFERVJTID0geyAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCcgfTtcbnZhciBDT01NT05fSEVBREVSUyA9IHsgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonIH07XG52YXIgSlNPTl9DT05URU5UX1RZUEUgPSB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04JyB9O1xuXG5mdW5jdGlvbiBIdHRwKG9wdGlvbnMpIHtcblxuICAgIHZhciBzZWxmID0gdGhpcyB8fCB7fSxcbiAgICAgICAgY2xpZW50ID0gQ2xpZW50KHNlbGYuJHZtKTtcblxuICAgIGRlZmF1bHRzKG9wdGlvbnMgfHwge30sIHNlbGYuJG9wdGlvbnMsIEh0dHAub3B0aW9ucyk7XG5cbiAgICBIdHRwLmludGVyY2VwdG9ycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVyKSB7XG4gICAgICAgIGNsaWVudC51c2UoaGFuZGxlcik7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY2xpZW50KG5ldyBSZXF1ZXN0KG9wdGlvbnMpKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXG4gICAgICAgIHJldHVybiByZXNwb25zZS5vayA/IHJlc3BvbnNlIDogUHJvbWlzZU9iai5yZWplY3QocmVzcG9uc2UpO1xuICAgIH0sIGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXG4gICAgICAgIGlmIChyZXNwb25zZSBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICBlcnJvcihyZXNwb25zZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZU9iai5yZWplY3QocmVzcG9uc2UpO1xuICAgIH0pO1xufVxuXG5IdHRwLm9wdGlvbnMgPSB7fTtcblxuSHR0cC5oZWFkZXJzID0ge1xuICAgIHB1dDogSlNPTl9DT05URU5UX1RZUEUsXG4gICAgcG9zdDogSlNPTl9DT05URU5UX1RZUEUsXG4gICAgcGF0Y2g6IEpTT05fQ09OVEVOVF9UWVBFLFxuICAgIGRlbGV0ZTogSlNPTl9DT05URU5UX1RZUEUsXG4gICAgY3VzdG9tOiBDVVNUT01fSEVBREVSUyxcbiAgICBjb21tb246IENPTU1PTl9IRUFERVJTXG59O1xuXG5IdHRwLmludGVyY2VwdG9ycyA9IFtiZWZvcmUsIHRpbWVvdXQsIG1ldGhvZCwgYm9keSwganNvbnAsIGhlYWRlciwgY29yc107XG5cblsnZ2V0JywgJ2RlbGV0ZScsICdoZWFkJywgJ2pzb25wJ10uZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kKSB7XG5cbiAgICBIdHRwW21ldGhvZF0gPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzKGFzc2lnbihvcHRpb25zIHx8IHt9LCB7IHVybDogdXJsLCBtZXRob2Q6IG1ldGhvZCB9KSk7XG4gICAgfTtcbn0pO1xuXG5bJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10uZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kKSB7XG5cbiAgICBIdHRwW21ldGhvZF0gPSBmdW5jdGlvbiAodXJsLCBib2R5LCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzKGFzc2lnbihvcHRpb25zIHx8IHt9LCB7IHVybDogdXJsLCBtZXRob2Q6IG1ldGhvZCwgYm9keTogYm9keSB9KSk7XG4gICAgfTtcbn0pO1xuXG4vKipcbiAqIFNlcnZpY2UgZm9yIGludGVyYWN0aW5nIHdpdGggUkVTVGZ1bCBzZXJ2aWNlcy5cbiAqL1xuXG5mdW5jdGlvbiBSZXNvdXJjZSh1cmwsIHBhcmFtcywgYWN0aW9ucywgb3B0aW9ucykge1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzIHx8IHt9LFxuICAgICAgICByZXNvdXJjZSA9IHt9O1xuXG4gICAgYWN0aW9ucyA9IGFzc2lnbih7fSwgUmVzb3VyY2UuYWN0aW9ucywgYWN0aW9ucyk7XG5cbiAgICBlYWNoKGFjdGlvbnMsIGZ1bmN0aW9uIChhY3Rpb24sIG5hbWUpIHtcblxuICAgICAgICBhY3Rpb24gPSBtZXJnZSh7IHVybDogdXJsLCBwYXJhbXM6IGFzc2lnbih7fSwgcGFyYW1zKSB9LCBvcHRpb25zLCBhY3Rpb24pO1xuXG4gICAgICAgIHJlc291cmNlW25hbWVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIChzZWxmLiRodHRwIHx8IEh0dHApKG9wdHMoYWN0aW9uLCBhcmd1bWVudHMpKTtcbiAgICAgICAgfTtcbiAgICB9KTtcblxuICAgIHJldHVybiByZXNvdXJjZTtcbn1cblxuZnVuY3Rpb24gb3B0cyhhY3Rpb24sIGFyZ3MpIHtcblxuICAgIHZhciBvcHRpb25zID0gYXNzaWduKHt9LCBhY3Rpb24pLFxuICAgICAgICBwYXJhbXMgPSB7fSxcbiAgICAgICAgYm9keTtcblxuICAgIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcblxuICAgICAgICBjYXNlIDI6XG5cbiAgICAgICAgICAgIHBhcmFtcyA9IGFyZ3NbMF07XG4gICAgICAgICAgICBib2R5ID0gYXJnc1sxXTtcblxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAxOlxuXG4gICAgICAgICAgICBpZiAoL14oUE9TVHxQVVR8UEFUQ0gpJC9pLnRlc3Qob3B0aW9ucy5tZXRob2QpKSB7XG4gICAgICAgICAgICAgICAgYm9keSA9IGFyZ3NbMF07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmFtcyA9IGFyZ3NbMF07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMDpcblxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcblxuICAgICAgICAgICAgdGhyb3cgJ0V4cGVjdGVkIHVwIHRvIDQgYXJndW1lbnRzIFtwYXJhbXMsIGJvZHldLCBnb3QgJyArIGFyZ3MubGVuZ3RoICsgJyBhcmd1bWVudHMnO1xuICAgIH1cblxuICAgIG9wdGlvbnMuYm9keSA9IGJvZHk7XG4gICAgb3B0aW9ucy5wYXJhbXMgPSBhc3NpZ24oe30sIG9wdGlvbnMucGFyYW1zLCBwYXJhbXMpO1xuXG4gICAgcmV0dXJuIG9wdGlvbnM7XG59XG5cblJlc291cmNlLmFjdGlvbnMgPSB7XG5cbiAgICBnZXQ6IHsgbWV0aG9kOiAnR0VUJyB9LFxuICAgIHNhdmU6IHsgbWV0aG9kOiAnUE9TVCcgfSxcbiAgICBxdWVyeTogeyBtZXRob2Q6ICdHRVQnIH0sXG4gICAgdXBkYXRlOiB7IG1ldGhvZDogJ1BVVCcgfSxcbiAgICByZW1vdmU6IHsgbWV0aG9kOiAnREVMRVRFJyB9LFxuICAgIGRlbGV0ZTogeyBtZXRob2Q6ICdERUxFVEUnIH1cblxufTtcblxuLyoqXG4gKiBJbnN0YWxsIHBsdWdpbi5cbiAqL1xuXG5mdW5jdGlvbiBwbHVnaW4oVnVlKSB7XG5cbiAgICBpZiAocGx1Z2luLmluc3RhbGxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgVXRpbChWdWUpO1xuXG4gICAgVnVlLnVybCA9IFVybDtcbiAgICBWdWUuaHR0cCA9IEh0dHA7XG4gICAgVnVlLnJlc291cmNlID0gUmVzb3VyY2U7XG4gICAgVnVlLlByb21pc2UgPSBQcm9taXNlT2JqO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoVnVlLnByb3RvdHlwZSwge1xuXG4gICAgICAgICR1cmw6IHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25zKFZ1ZS51cmwsIHRoaXMsIHRoaXMuJG9wdGlvbnMudXJsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAkaHR0cDoge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMoVnVlLmh0dHAsIHRoaXMsIHRoaXMuJG9wdGlvbnMuaHR0cCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgJHJlc291cmNlOiB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gVnVlLnJlc291cmNlLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgJHByb21pc2U6IHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGV4ZWN1dG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVnVlLlByb21pc2UoZXhlY3V0b3IsIF90aGlzKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9KTtcbn1cblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5WdWUpIHtcbiAgICB3aW5kb3cuVnVlLnVzZShwbHVnaW4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBsdWdpbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXJlc291cmNlL2Rpc3QvdnVlLXJlc291cmNlLmNvbW1vbi5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi91c2FnZS52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LWJhY2JjMjIyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3VzYWdlLnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCIvVXNlcnMvb3ovc3JjL21hdGVyaWFsLWNvbXBvbmVudHMvZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvdXNhZ2UudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1iYWNiYzIyMlwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi1iYWNiYzIyMlwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH1cbn0pKCl9XG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHVzYWdlLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL3VzYWdlLnZ1ZSIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8aDM+R2V0dGluZyBzdGFydGVkPC9oMz5cblxuICAgICAgICA8cD5JbiBwcm9ncmVzczwvcD5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0e1xuICAgICAgICBkYXRhKCl7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gdXNhZ2UudnVlPzU2Njk0MmFlIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF92bS5fbSgwKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ2gzJywgW192bS5fdihcIkdldHRpbmcgc3RhcnRlZFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncCcsIFtfdm0uX3YoXCJJbiBwcm9ncmVzc1wiKV0pXSlcbn1dfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi1iYWNiYzIyMlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtYmFjYmMyMjIhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL3VzYWdlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9uYXYudnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0zNzQ3ZTIxZSF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9uYXYudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIi9Vc2Vycy9vei9zcmMvbWF0ZXJpYWwtY29tcG9uZW50cy9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9uYXYudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0zNzQ3ZTIxZVwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0zNzQ3ZTIxZVwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH1cbn0pKCl9XG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIG5hdi52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9uYXYudnVlIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJtZGwtbGF5b3V0X19kcmF3ZXJcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJtZGwtbGF5b3V0LXRpdGxlXCI+RXhhbXBsZXM8L3NwYW4+XG4gICAgICAgIDxuYXYgY2xhc3M9XCJtZGwtbmF2aWdhdGlvblwiPlxuICAgICAgICAgICAgPHJvdXRlci1saW5rIHRvPVwiL3VzYWdlXCIgY2xhc3M9XCJtZGwtbmF2aWdhdGlvbl9fbGlua1wiPlxuICAgICAgICAgICAgICAgIDxiPkdldHRpbmcgc3RhcnRlZDwvYj5cbiAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XG5cbiAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCInLycraS5wYXRoXCIgdi1mb3I9XCJpIGluIHNvcnRlZE1lbnVJdGVtc1wiIGNsYXNzPVwibWRsLW5hdmlnYXRpb25fX2xpbmtcIj5cbiAgICAgICAgICAgICAgICB7e2kudGl0bGV9fVxuICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cbiAgICAgICAgPC9uYXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgc29ydEJ5S2V5IH0gZnJvbSAnLi4vaGVscGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb21wdXRlZDoge1xuICAgICAgICBzb3J0ZWRNZW51SXRlbXMoKSB7XG4gICAgICAgICAgICByZXR1cm4gc29ydEJ5S2V5KHRoaXMubWVudUl0ZW1zLCAndGl0bGUnKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWVudUl0ZW1zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1RleHQgRmllbGRzJyxcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogJ3RleHRmaWVsZHMnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0J1dHRvbnMnLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiAnYnV0dG9ucycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnU25hY2tiYXInLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiAnc25hY2tiYXInLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1NlbGVjdHMnLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiAnc2VsZWN0cycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnU2xpZGVycycsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6ICdzbGlkZXJzJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdCYWRnZXMnLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiAnYmFkZ2VzJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdNZW51JyxcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogJ21lbnUnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0xvYWRpbmcnLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiAnbG9hZGluZycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnVG9nZ2xlcycsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6ICd0b2dnbGVzJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdUYWJzJyxcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogJ3RhYnMnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1Rvb2x0aXBzJyxcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogJ3Rvb2x0aXBzJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdUYWJsZXMnLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiAndGFibGUnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0RpYWxvZ3MnLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiAnZGlhbG9ncycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnQ2FyZHMnLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiAnY2FyZHMnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0NoaXBzJyxcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogJ2NoaXBzJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdMaXN0cycsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6ICdsaXN0cycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF1cblxuICAgICAgICB9XG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbmF2LnZ1ZT8xYzEzYWIyZSIsImV4cG9ydCBmdW5jdGlvbiBzb3J0QnlLZXkoYXJyYXksIGtleSkge1xuICByZXR1cm4gYXJyYXkuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgdmFyIHggPSBhW2tleV07IHZhciB5ID0gYltrZXldO1xuICAgIHJldHVybiAoKHggPCB5KSA/IC0xIDogKCh4ID4geSkgPyAxIDogMCkpO1xuICB9KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2V4YW1wbGVzL3NyYy9oZWxwZXJzLmpzIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWRsLWxheW91dF9fZHJhd2VyXCJcbiAgfSwgW19jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kbC1sYXlvdXQtdGl0bGVcIlxuICB9LCBbX3ZtLl92KFwiRXhhbXBsZXNcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ25hdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZGwtbmF2aWdhdGlvblwiXG4gIH0sIFtfYygncm91dGVyLWxpbmsnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWRsLW5hdmlnYXRpb25fX2xpbmtcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0b1wiOiBcIi91c2FnZVwiXG4gICAgfVxuICB9LCBbX2MoJ2InLCBbX3ZtLl92KFwiR2V0dGluZyBzdGFydGVkXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9sKChfdm0uc29ydGVkTWVudUl0ZW1zKSwgZnVuY3Rpb24oaSkge1xuICAgIHJldHVybiBfYygncm91dGVyLWxpbmsnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJtZGwtbmF2aWdhdGlvbl9fbGlua1wiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJ0b1wiOiAnLycgKyBpLnBhdGhcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgXCIgKyBfdm0uX3MoaS50aXRsZSkgKyBcIlxcbiAgICAgICAgXCIpXSlcbiAgfSldLCAyKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTM3NDdlMjFlXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0zNzQ3ZTIxZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvbmF2LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vdGV4dGZpZWxkcy52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTZkMjMwODQ4IXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3RleHRmaWVsZHMudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIi9Vc2Vycy9vei9zcmMvbWF0ZXJpYWwtY29tcG9uZW50cy9leGFtcGxlcy9zcmMvY29tcG9uZW50cy90ZXh0ZmllbGRzLnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNmQyMzA4NDhcIiwgX192dWVfb3B0aW9uc19fKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNmQyMzA4NDhcIiwgX192dWVfb3B0aW9uc19fKVxuICB9XG59KSgpfVxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSB0ZXh0ZmllbGRzLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL3RleHRmaWVsZHMudnVlIiwiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxoND5UZXh0IEZpZWxkczwvaDQ+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxtLXRleHRmaWVsZCBsYWJlbD1cIlRleHQuLi5cIj48L20tdGV4dGZpZWxkPlxuICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgPG0tdGV4dGZpZWxkIGZsb2F0LWxhYmVsPVwiVGV4dGFyZWEuLi5cIiB0ZXh0YXJlYT48L20tdGV4dGZpZWxkPlxuICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgPG0tdGV4dGZpZWxkIGxhYmVsPVwiTnVtYmVyLi4uXCIgcGF0dGVybj1cIi0/WzAtOV0qKFxcLlswLTldKyk/XCIgZXJyb3I9XCJJbnZhbGlkIGlucHV0XCI+PC9tLXRleHRmaWVsZD5cbiAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgIDxtLXRleHRmaWVsZCBleHBhbmRhYmxlPVwic2VhcmNoXCIgaWQ9XCJ0ZXN0LWlkLXNlYXJjaFwiIGZsb2F0LWxhYmVsPVwiRXhwYW5kaW5nLi4uXCI+PC9tLXRleHRmaWVsZD5cbiAgICAgICAgICAgIDxicj5cblxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PkNvZGU6PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjb2xzPVwiMTAwXCIgcm93cz1cIjZcIiA6dmFsdWU9XCJleGFtcGxlc1wiPlxuICAgICAgICAgICAgICAgICAgICA8L3RleHRhcmVhPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDQ+VGVzdCBGb3JtPC9oND5cblxuICAgICAgICAgICAgPGZvcm0gQHN1Ym1pdC5wcmV2ZW50PVwib25TdWJtaXRcIj5cbiAgICAgICAgICAgICAgICA8bS10ZXh0ZmllbGQgZmxvYXQtbGFiZWw9XCJGaXJzdCBOYW1lXCIgdi1tb2RlbD1cImZvcm0uZmlyc3ROYW1lXCI+PC9tLXRleHRmaWVsZD5cbiAgICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgICAgPG0tdGV4dGZpZWxkIGZsb2F0LWxhYmVsPVwiTGFzdCBOYW1lXCIgdi1tb2RlbD1cImZvcm0ubGFzdE5hbWVcIj48L20tdGV4dGZpZWxkPlxuICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICA8bS10ZXh0ZmllbGQgZmxvYXQtbGFiZWw9XCJFbWFpbFwiIHBhdHRlcm49XCIoLispQCguKyl7Mix9XFwuKC4rKXsyLH1cIiBlcnJvcj1cIkludmFsaWQgZW1haWxcIj48L20tdGV4dGZpZWxkPlxuICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICA8bS10ZXh0ZmllbGQgZmxvYXQtbGFiZWw9XCJQYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIHYtbW9kZWw9XCJmb3JtLnBhc3N3b3JkXCIgcGF0dGVybj1cIi57Myx9XCI+PC9tLXRleHRmaWVsZD5cbiAgICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgICAgPG0tdGV4dGZpZWxkIGZsb2F0LWxhYmVsPVwiQ29uZmlybSBwYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIHBhdHRlcm49XCIuezMsfVwiIGVycm9yPVwiUGFzc3dvcmRzIG5vdCBtYXRjaFwiPjwvbS10ZXh0ZmllbGQ+XG4gICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWJ1dHRvbi0tcmFpc2VkXCIgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgICAgICBCdXR0b25cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cblxuICAgICAgICAgICAgPGRpdj57e2Zvcm19fTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGV4YW1wbGVzOiBgXG4gICAgICAgICAgICAgICAgPG0tdGV4dGZpZWxkIGxhYmVsPVwiVGV4dC4uLlwiPjwvbS10ZXh0ZmllbGQ+XG4gICAgICAgICAgICAgICAgPG0tdGV4dGZpZWxkIGZsb2F0LWxhYmVsPVwiVGV4dGFyZWEuLi5cIiB0ZXh0YXJlYT48L20tdGV4dGZpZWxkPlxuICAgICAgICAgICAgICAgIDxtLXRleHRmaWVsZCBsYWJlbD1cIk51bWJlci4uLlwiIHBhdHRlcm49XCItP1swLTldKihcXC5bMC05XSspP1wiIGVycm9yPVwiSW52YWxpZCBpbnB1dFwiPjwvbS10ZXh0ZmllbGQ+XG4gICAgICAgICAgICAgICAgPG0tdGV4dGZpZWxkIGV4cGFuZGFibGU9XCJzZWFyY2hcIiBpZD1cInRlc3QtaWQtc2VhcmNoXCIgZmxvYXQtbGFiZWw9XCJFeHBhbmRpbmcuLi5cIj48L20tdGV4dGZpZWxkPlxuICAgICAgICAgICAgYCxcbiAgICAgICAgICAgIGZvcm06IHtcbiAgICAgICAgICAgICAgICBmaXJzdE5hbWU6ICcnLFxuICAgICAgICAgICAgICAgIGxhc3ROYW1lOiAnJyxcbiAgICAgICAgICAgICAgICBlbWFpbDogJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB0ZXh0ZmllbGRzLnZ1ZT9mZTcxMThmOCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW19jKCdoNCcsIFtfdm0uX3YoXCJUZXh0IEZpZWxkc1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2JywgW19jKCdtLXRleHRmaWVsZCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJsYWJlbFwiOiBcIlRleHQuLi5cIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnbS10ZXh0ZmllbGQnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZmxvYXQtbGFiZWxcIjogXCJUZXh0YXJlYS4uLlwiLFxuICAgICAgXCJ0ZXh0YXJlYVwiOiBcIlwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdtLXRleHRmaWVsZCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJsYWJlbFwiOiBcIk51bWJlci4uLlwiLFxuICAgICAgXCJwYXR0ZXJuXCI6IFwiLT9bMC05XSooXFxcXC5bMC05XSspP1wiLFxuICAgICAgXCJlcnJvclwiOiBcIkludmFsaWQgaW5wdXRcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnbS10ZXh0ZmllbGQnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZXhwYW5kYWJsZVwiOiBcInNlYXJjaFwiLFxuICAgICAgXCJpZFwiOiBcInRlc3QtaWQtc2VhcmNoXCIsXG4gICAgICBcImZsb2F0LWxhYmVsXCI6IFwiRXhwYW5kaW5nLi4uXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIFtfYygnZGl2JywgW192bS5fdihcIkNvZGU6XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCd0ZXh0YXJlYScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJjb2xzXCI6IFwiMTAwXCIsXG4gICAgICBcInJvd3NcIjogXCI2XCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5leGFtcGxlc1xuICAgIH1cbiAgfSldKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2JywgW19jKCdoNCcsIFtfdm0uX3YoXCJUZXN0IEZvcm1cIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2Zvcm0nLCB7XG4gICAgb246IHtcbiAgICAgIFwic3VibWl0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgX3ZtLm9uU3VibWl0KCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnbS10ZXh0ZmllbGQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uZm9ybS5maXJzdE5hbWUpLFxuICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmZpcnN0TmFtZVwiXG4gICAgfV0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZmxvYXQtbGFiZWxcIjogXCJGaXJzdCBOYW1lXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0uZm9ybS5maXJzdE5hbWUpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmZvcm0uZmlyc3ROYW1lID0gJGV2ZW50XG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdtLXRleHRmaWVsZCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5mb3JtLmxhc3ROYW1lKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5sYXN0TmFtZVwiXG4gICAgfV0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZmxvYXQtbGFiZWxcIjogXCJMYXN0IE5hbWVcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5mb3JtLmxhc3ROYW1lKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5mb3JtLmxhc3ROYW1lID0gJGV2ZW50XG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdtLXRleHRmaWVsZCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJmbG9hdC1sYWJlbFwiOiBcIkVtYWlsXCIsXG4gICAgICBcInBhdHRlcm5cIjogXCIoLispQCguKyl7Mix9XFxcXC4oLispezIsfVwiLFxuICAgICAgXCJlcnJvclwiOiBcIkludmFsaWQgZW1haWxcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnbS10ZXh0ZmllbGQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uZm9ybS5wYXNzd29yZCksXG4gICAgICBleHByZXNzaW9uOiBcImZvcm0ucGFzc3dvcmRcIlxuICAgIH1dLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImZsb2F0LWxhYmVsXCI6IFwiUGFzc3dvcmRcIixcbiAgICAgIFwidHlwZVwiOiBcInBhc3N3b3JkXCIsXG4gICAgICBcInBhdHRlcm5cIjogXCIuezMsfVwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLmZvcm0ucGFzc3dvcmQpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmZvcm0ucGFzc3dvcmQgPSAkZXZlbnRcbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tdGV4dGZpZWxkJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImZsb2F0LWxhYmVsXCI6IFwiQ29uZmlybSBwYXNzd29yZFwiLFxuICAgICAgXCJ0eXBlXCI6IFwicGFzc3dvcmRcIixcbiAgICAgIFwicGF0dGVyblwiOiBcIi57Myx9XCIsXG4gICAgICBcImVycm9yXCI6IFwiUGFzc3dvcmRzIG5vdCBtYXRjaFwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uIG1kbC1idXR0b24tLXJhaXNlZFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJzdWJtaXRcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICBCdXR0b25cXG4gICAgICAgICAgICBcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2JywgW192bS5fdihfdm0uX3MoX3ZtLmZvcm0pKV0pXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi02ZDIzMDg0OFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNmQyMzA4NDghLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL3RleHRmaWVsZHMudnVlXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9idXR0b25zLnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMDU5NTdiNGYhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vYnV0dG9ucy52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiL1VzZXJzL296L3NyYy9tYXRlcmlhbC1jb21wb25lbnRzL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL2J1dHRvbnMudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0wNTk1N2I0ZlwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0wNTk1N2I0ZlwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH1cbn0pKCl9XG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGJ1dHRvbnMudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvYnV0dG9ucy52dWUiLCI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPGg0PkJ1dHRvbnM8L2g0PlxuXG4gICAgICAgIDxkaXY+XG5cbiAgICAgICAgICAgIDxtLWJ1dHRvbiByYWlzZWQgdi1vbjpjbGljay5uYXRpdmU9XCJ0ZXN0Q2xpY2tcIj5DbGljayBtZTwvbS1idXR0b24+XG5cbiAgICAgICAgICAgIDxtLWJ1dHRvbiBpY29uPVwiYWRkXCIgcmFpc2VkIGFjY2VudD48L20tYnV0dG9uPlxuXG4gICAgICAgICAgICA8bS1idXR0b24gcmFpc2VkIHByaW1hcnkgcmlwcGxlPlJpcHBsZTwvbS1idXR0b24+XG5cbiAgICAgICAgICAgIDxtLWJ1dHRvbiBkaXNhYmxlZD5EaXNhYmxlZDwvbS1idXR0b24+XG5cbiAgICAgICAgICAgIDxocj5cblxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PkNvZGU6PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjb2xzPVwiMTAwXCIgcm93cz1cIjZcIiA6dmFsdWU9XCJleGFtcGxlc1wiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdHtcbiAgICAgICAgZGF0YSgpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBleGFtcGxlczogYFxuICAgICAgICAgICAgICAgICAgICA8bS1idXR0b24gcmFpc2VkIHYtb246Y2xpY2submF0aXZlPVwidGVzdENsaWNrXCI+Q2xpY2sgbWU8L20tYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgIDxtLWJ1dHRvbiBpY29uPVwiYWRkXCIgcmFpc2VkIGFjY2VudD48L20tYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgIDxtLWJ1dHRvbiByYWlzZWQgcHJpbWFyeSByaXBwbGU+UmlwcGxlPC9tLWJ1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICA8bS1idXR0b24gZGlzYWJsZWQ+RGlzYWJsZWQ8L20tYnV0dG9uPlxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgdGVzdENsaWNrOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBhbGVydChcIkhpXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYnV0dG9ucy52dWU/NTY3MmQwZDIiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygnaDQnLCBbX3ZtLl92KFwiQnV0dG9uc1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2JywgW19jKCdtLWJ1dHRvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJyYWlzZWRcIjogXCJcIlxuICAgIH0sXG4gICAgbmF0aXZlT246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS50ZXN0Q2xpY2soJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIkNsaWNrIG1lXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtLWJ1dHRvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJpY29uXCI6IFwiYWRkXCIsXG4gICAgICBcInJhaXNlZFwiOiBcIlwiLFxuICAgICAgXCJhY2NlbnRcIjogXCJcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdtLWJ1dHRvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJyYWlzZWRcIjogXCJcIixcbiAgICAgIFwicHJpbWFyeVwiOiBcIlwiLFxuICAgICAgXCJyaXBwbGVcIjogXCJcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlJpcHBsZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS1idXR0b24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZGlzYWJsZWRcIjogXCJcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkRpc2FibGVkXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdocicpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2JywgW19jKCdkaXYnLCBbX3ZtLl92KFwiQ29kZTpcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RleHRhcmVhJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImNvbHNcIjogXCIxMDBcIixcbiAgICAgIFwicm93c1wiOiBcIjZcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLmV4YW1wbGVzXG4gICAgfVxuICB9KV0pXSwgMSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0wNTk1N2I0ZlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMDU5NTdiNGYhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL2J1dHRvbnMudnVlXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9zbmFja2Jhci52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTIzODVkM2IyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NuYWNrYmFyLnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCIvVXNlcnMvb3ovc3JjL21hdGVyaWFsLWNvbXBvbmVudHMvZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvc25hY2tiYXIudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0yMzg1ZDNiMlwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0yMzg1ZDNiMlwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH1cbn0pKCl9XG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHNuYWNrYmFyLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL3NuYWNrYmFyLnZ1ZSIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8bS1zbmFja2JhciBkaXNwbGF5LW9uPVwibXNnU2VudFwiPjwvbS1zbmFja2Jhcj5cbiAgICAgICAgPG0tYnV0dG9uIHJhaXNlZCBjb2xvcmVkIEBjbGljay5uYXRpdmU9XCJzQWN0aW9uXCI+U2hvdyBTbmFja2JhcjwvbS1idXR0b24+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXY+Q29kZTo8L2Rpdj5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBjb2xzPVwiMTAwXCIgcm93cz1cIjZcIiA6dmFsdWU9XCJleGFtcGxlc1wiPjwvdGV4dGFyZWE+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGRhdGEoKXtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZXhhbXBsZXM6IGBcbiAgICAgICAgICAgICAgICAgICAgPG0tc25hY2tiYXIgZGlzcGxheS1vbj1cIm1zZ1NlbnRcIj48L20tc25hY2tiYXI+XG4gICAgICAgICAgICAgICAgICAgIDxtLWJ1dHRvbiByYWlzZWQgY29sb3JlZCBAY2xpY2submF0aXZlPVwic0FjdGlvblwiPlNob3cgU25hY2tiYXI8L20tYnV0dG9uPlxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBzQWN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJHJvb3QuJGVtaXQoJ21zZ1NlbnQnLCB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdNZXNzYWdlIFNlbnQnLFxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25UZXh0OiAnVW5kbycsXG4gICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ6IDIwMDAsXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbkhhbmRsZXI6IChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc25hY2tiYXIudnVlP2M3OGJkM2I0IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ20tc25hY2tiYXInLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZGlzcGxheS1vblwiOiBcIm1zZ1NlbnRcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdtLWJ1dHRvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJyYWlzZWRcIjogXCJcIixcbiAgICAgIFwiY29sb3JlZFwiOiBcIlwiXG4gICAgfSxcbiAgICBuYXRpdmVPbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnNBY3Rpb24oJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIlNob3cgU25hY2tiYXJcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIFtfYygnZGl2JywgW192bS5fdihcIkNvZGU6XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCd0ZXh0YXJlYScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJjb2xzXCI6IFwiMTAwXCIsXG4gICAgICBcInJvd3NcIjogXCI2XCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5leGFtcGxlc1xuICAgIH1cbiAgfSldKV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTIzODVkM2IyXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0yMzg1ZDNiMiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvc25hY2tiYXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9zZWxlY3RzLnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtN2I0YjdiYzUhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc2VsZWN0cy52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiL1VzZXJzL296L3NyYy9tYXRlcmlhbC1jb21wb25lbnRzL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL3NlbGVjdHMudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi03YjRiN2JjNVwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi03YjRiN2JjNVwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH1cbn0pKCl9XG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHNlbGVjdHMudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvc2VsZWN0cy52dWUiLCI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPGgzPlNlbGVjdHM8L2gzPlxuICAgICAgICA8cD5cbiAgICAgICAgICAgIDxoND5EZWZhdWx0PC9oND5cbiAgICAgICAgICAgIDxtLXNlbGVjdCA6ZGF0YS1zb3VyY2U9XCJ0ZXN0RGF0YTJcIiBpZD1cInRlc3QyXCIgdi1tb2RlbD1cIm0yXCI+PC9tLXNlbGVjdD5cblxuICAgICAgICAgICAgPGRpdj57e20yfX08L2Rpdj5cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxwPlxuICAgICAgICA8aDQ+QXJyYXkgc291cmNlIChzaW5nbGUpPC9oND5cbiAgICAgICAgPG0tc2VsZWN0IDpkYXRhLXNvdXJjZT1cInRlc3REYXRhNFwiIGlkPVwidGVzdDEwXCIgdi1tb2RlbD1cIm0xMFwiPjwvbS1zZWxlY3Q+XG5cbiAgICAgICAgPGRpdj57e20xMH19PC9kaXY+XG4gICAgICAgIDwvcD5cblxuICAgICAgICA8cD5cblxuICAgICAgICAgICAgPGg0PkFKQVggc2VsZWN0IDxzcGFuPnt7bX19PC9zcGFuPjwvaDQ+XG4gICAgICAgICAgICA8bS1zZWxlY3QgOmRhdGEtc291cmNlPVwidGVzdERhdGFcIiBpZD1cInRlc3QxXCIgdi1tb2RlbD1cIm1cIiBtdWx0aXBsZT48L20tc2VsZWN0PlxuXG4gICAgICAgICAgICA8ZGl2Pnt7bX19PC9kaXY+XG5cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxwPlxuXG4gICAgICAgIDxoND5BSkFYIHNlbGVjdCB3aXRoIHNlYXJjaCA8c3Bhbj57e201fX08L3NwYW4+PC9oND5cbiAgICAgICAgPG0tc2VsZWN0IDpkYXRhLXNvdXJjZT1cInRlc3REYXRhXCIgaWQ9XCJ0ZXN0M1wiIHYtbW9kZWw9XCJtNVwiIHNlYXJjaD48L20tc2VsZWN0PlxuXG4gICAgICAgIDwvcD5cblxuICAgICAgICA8cD5cblxuICAgICAgICA8aDQ+TXVsdGlwbGUgc2VsZWN0aCA8c3Bhbj57e202fX08L3NwYW4+PC9oND5cbiAgICAgICAgPG0tc2VsZWN0IDpkYXRhLXNvdXJjZT1cInRlc3REYXRhM1wiIGlkPVwidGVzdDRcIiB2LW1vZGVsPVwibTZcIiBtdWx0aXBsZT48L20tc2VsZWN0PlxuXG5cblxuICAgICAgICA8L3A+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXY+Q29kZTo8L2Rpdj5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBjb2xzPVwiMTAwXCIgcm93cz1cIjZcIiA6dmFsdWU9XCJleGFtcGxlc1wiPjwvdGV4dGFyZWE+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBkYXRhKCl7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRlc3REYXRhOiAgZnVuY3Rpb24oc3VjY2VzcywgZmFpbHVyZSkge1xuICAgICAgICAgICAgICAgICAgIHRoaXMuJGh0dHAuZ2V0KCdodHRwczovL3Jlc3Rjb3VudHJpZXMuZXUvcmVzdC92MS9hbGwnKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmRhdGEuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogZWwubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGVsLm51bWVyaWNDb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MoYy5zcGxpY2UoMCwgMTApKTtcbiAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgbTogW10sXG5cbiAgICAgICAgICAgICAgICAvLyBzaW1wbGUgc2VsZWN0XG5cbiAgICAgICAgICAgICAgICB0ZXN0RGF0YTI6IFtcbiAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnTm9kZUpzJywgdmFsdWU6IDEsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdKUycsIHZhbHVlOiAyLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnUEhQJywgdmFsdWU6IDMsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuXG4gICAgICAgICAgICAgICAgdGVzdERhdGE0OiBbMSwyLDMsNCw1LDYsNyw4LDldLFxuICAgICAgICAgICAgICAgIG0xMDogMyxcblxuICAgICAgICAgICAgICAgIG0yOiB7bmFtZTogJ05vZGVKcycsIHZhbHVlOiAxfSxcblxuICAgICAgICAgICAgICAgIG01OiB7bmFtZTogJycsIHZhbHVlOiAnJ30sXG5cbiAgICAgICAgICAgICAgICBtNjogWycwMDQnLCAxMDBdLFxuXG4gICAgICAgICAgICAgICAgdGVzdERhdGEzOiBbJzAwNCcsJzAwNScsIDEwMF0sXG5cbiAgICAgICAgICAgICAgICBleGFtcGxlczogYFxuICAgICAgICAgICAgICAgICAgICAgPG0tc2VsZWN0IDpkYXRhLXNvdXJjZT1cInRlc3REYXRhMlwiIGlkPVwidGVzdDJcIiB2LW1vZGVsPVwibTJcIj48L20tc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgPG0tc2VsZWN0IDpkYXRhLXNvdXJjZT1cInRlc3REYXRhXCIgaWQ9XCJ0ZXN0MVwiIHYtbW9kZWw9XCJtXCI+PC9tLXNlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgIDxtLXNlbGVjdCA6ZGF0YS1zb3VyY2U9XCJ0ZXN0RGF0YVwiIGlkPVwidGVzdDNcIiB2LW1vZGVsPVwibVwiIHNlYXJjaD48L20tc2VsZWN0PlxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNlbGVjdHMudnVlPzE0MmE1MTBmIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ2gzJywgW192bS5fdihcIlNlbGVjdHNcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnKSwgX2MoJ2g0JywgW192bS5fdihcIkRlZmF1bHRcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tc2VsZWN0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLm0yKSxcbiAgICAgIGV4cHJlc3Npb246IFwibTJcIlxuICAgIH1dLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImRhdGEtc291cmNlXCI6IF92bS50ZXN0RGF0YTIsXG4gICAgICBcImlkXCI6IFwidGVzdDJcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5tMilcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0ubTIgPSAkZXZlbnRcbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2JywgW192bS5fdihfdm0uX3MoX3ZtLm0yKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnKSwgX2MoJ2g0JywgW192bS5fdihcIkFycmF5IHNvdXJjZSAoc2luZ2xlKVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS1zZWxlY3QnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0ubTEwKSxcbiAgICAgIGV4cHJlc3Npb246IFwibTEwXCJcbiAgICB9XSxcbiAgICBhdHRyczoge1xuICAgICAgXCJkYXRhLXNvdXJjZVwiOiBfdm0udGVzdERhdGE0LFxuICAgICAgXCJpZFwiOiBcInRlc3QxMFwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLm0xMClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0ubTEwID0gJGV2ZW50XG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIFtfdm0uX3YoX3ZtLl9zKF92bS5tMTApKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncCcpLCBfdm0uX3YoXCIgXCIpLCBfYygncCcpLCBfYygnaDQnLCBbX3ZtLl92KFwiQUpBWCBzZWxlY3QgXCIpLCBfYygnc3BhbicsIFtfdm0uX3YoX3ZtLl9zKF92bS5tKSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS1zZWxlY3QnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0ubSksXG4gICAgICBleHByZXNzaW9uOiBcIm1cIlxuICAgIH1dLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImRhdGEtc291cmNlXCI6IF92bS50ZXN0RGF0YSxcbiAgICAgIFwiaWRcIjogXCJ0ZXN0MVwiLFxuICAgICAgXCJtdWx0aXBsZVwiOiBcIlwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLm0pXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLm0gPSAkZXZlbnRcbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2JywgW192bS5fdihfdm0uX3MoX3ZtLm0pKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncCcpLCBfdm0uX3YoXCIgXCIpLCBfYygncCcpLCBfYygnaDQnLCBbX3ZtLl92KFwiQUpBWCBzZWxlY3Qgd2l0aCBzZWFyY2ggXCIpLCBfYygnc3BhbicsIFtfdm0uX3YoX3ZtLl9zKF92bS5tNSkpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tc2VsZWN0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLm01KSxcbiAgICAgIGV4cHJlc3Npb246IFwibTVcIlxuICAgIH1dLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImRhdGEtc291cmNlXCI6IF92bS50ZXN0RGF0YSxcbiAgICAgIFwiaWRcIjogXCJ0ZXN0M1wiLFxuICAgICAgXCJzZWFyY2hcIjogXCJcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5tNSlcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0ubTUgPSAkZXZlbnRcbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygncCcpLCBfdm0uX3YoXCIgXCIpLCBfYygncCcpLCBfYygnaDQnLCBbX3ZtLl92KFwiTXVsdGlwbGUgc2VsZWN0aCBcIiksIF9jKCdzcGFuJywgW192bS5fdihfdm0uX3MoX3ZtLm02KSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS1zZWxlY3QnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0ubTYpLFxuICAgICAgZXhwcmVzc2lvbjogXCJtNlwiXG4gICAgfV0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZGF0YS1zb3VyY2VcIjogX3ZtLnRlc3REYXRhMyxcbiAgICAgIFwiaWRcIjogXCJ0ZXN0NFwiLFxuICAgICAgXCJtdWx0aXBsZVwiOiBcIlwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLm02KVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5tNiA9ICRldmVudFxuICAgICAgfVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdwJyksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCBbX2MoJ2RpdicsIFtfdm0uX3YoXCJDb2RlOlwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndGV4dGFyZWEnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiY29sc1wiOiBcIjEwMFwiLFxuICAgICAgXCJyb3dzXCI6IFwiNlwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0uZXhhbXBsZXNcbiAgICB9XG4gIH0pXSldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi03YjRiN2JjNVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtN2I0YjdiYzUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL3NlbGVjdHMudnVlXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9zbGlkZXJzLnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNmIwMWRmMDAhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc2xpZGVycy52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiL1VzZXJzL296L3NyYy9tYXRlcmlhbC1jb21wb25lbnRzL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL3NsaWRlcnMudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi02YjAxZGYwMFwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi02YjAxZGYwMFwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH1cbn0pKCl9XG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHNsaWRlcnMudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvc2xpZGVycy52dWUiLCI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPG0tc2xpZGVyIHYtbW9kZWw9XCJhbW91bnRcIiBtaW49XCIwXCIgbWF4PVwiMTAwXCI+PC9tLXNsaWRlcj5cbiAgICAgICAgPGJyPlxuICAgICAgICA8c3Bhbj5TdGVwIDEwPC9zcGFuPlxuICAgICAgICA8bS1zbGlkZXIgdi1tb2RlbD1cImFtb3VudFwiIG1pbj1cIjBcIiBtYXg9XCIxMDBcIiBzdGVwPVwiMTBcIiBkaXNhYmxlZD48L20tc2xpZGVyPlxuXG4gICAgICAgIDxwPlxuICAgICAgICAgICAge3thbW91bnR9fVxuICAgICAgICA8L3A+XG5cbiAgICAgICAgPGhyPlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2PkNvZGU6PC9kaXY+XG4gICAgICAgICAgICA8dGV4dGFyZWEgY29scz1cIjEwMFwiIHJvd3M9XCI2XCIgOnZhbHVlPVwiZXhhbXBsZXNcIj48L3RleHRhcmVhPlxuICAgICAgICA8L2Rpdj5cblxuXG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdHtcbiAgICAgICAgZGF0YSgpe1xuICAgICAgICAgICAgcmV0dXJue1xuICAgICAgICAgICAgICAgIGFtb3VudDogMCxcbiAgICAgICAgICAgICAgICBleGFtcGxlczogYFxuICAgICAgICAgICAgICAgICAgICA8bS1zbGlkZXIgdi1tb2RlbD1cImFtb3VudFwiIG1pbj1cIjBcIiBtYXg9XCIxMDBcIj48L20tc2xpZGVyPlxuICAgICAgICAgICAgICAgICAgICA8bS1zbGlkZXIgdi1tb2RlbD1cImFtb3VudFwiIG1pbj1cIjBcIiBtYXg9XCIxMDBcIiBzdGVwPVwiMTBcIiBkaXNhYmxlZD48L20tc2xpZGVyPlxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNsaWRlcnMudnVlPzM5MjBkZTIzIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ20tc2xpZGVyJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmFtb3VudCksXG4gICAgICBleHByZXNzaW9uOiBcImFtb3VudFwiXG4gICAgfV0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwibWluXCI6IFwiMFwiLFxuICAgICAgXCJtYXhcIjogXCIxMDBcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5hbW91bnQpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmFtb3VudCA9ICRldmVudFxuICAgICAgfVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIFtfdm0uX3YoXCJTdGVwIDEwXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtLXNsaWRlcicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5hbW91bnQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJhbW91bnRcIlxuICAgIH1dLFxuICAgIGF0dHJzOiB7XG4gICAgICBcIm1pblwiOiBcIjBcIixcbiAgICAgIFwibWF4XCI6IFwiMTAwXCIsXG4gICAgICBcInN0ZXBcIjogXCIxMFwiLFxuICAgICAgXCJkaXNhYmxlZFwiOiBcIlwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLmFtb3VudClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uYW1vdW50ID0gJGV2ZW50XG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCBbX3ZtLl92KFwiXFxuICAgICAgICBcIiArIF92bS5fcyhfdm0uYW1vdW50KSArIFwiXFxuICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaHInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIFtfYygnZGl2JywgW192bS5fdihcIkNvZGU6XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCd0ZXh0YXJlYScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJjb2xzXCI6IFwiMTAwXCIsXG4gICAgICBcInJvd3NcIjogXCI2XCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5leGFtcGxlc1xuICAgIH1cbiAgfSldKV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTZiMDFkZjAwXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi02YjAxZGYwMCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvc2xpZGVycy52dWVcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xudmFyIF9fdnVlX3N0eWxlc19fID0ge31cblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2JhZGdlcy52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTVkYjViMzUyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2JhZGdlcy52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiL1VzZXJzL296L3NyYy9tYXRlcmlhbC1jb21wb25lbnRzL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL2JhZGdlcy52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTVkYjViMzUyXCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTVkYjViMzUyXCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfVxufSkoKX1cbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gYmFkZ2VzLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL2JhZGdlcy52dWUiLCI8dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAgPG0tYmFkZ2Ugdi1tb2RlbD1cImJcIiBocmVmPVwiaHR0cHM6Ly9nb29nbGUuY29tXCIgOmhpZGU9XCJoXCI+SW5ib3g8L20tYmFkZ2U+XG5cbiAgICA8YnI+XG4gICAgPGJyPlxuICAgIDxicj5cblxuICAgIDxtLWJhZGdlIHYtbW9kZWw9XCJiXCIgdGFnPVwic3BhblwiIGljb24gb3ZlcmxhcD5hY2NvdW50X2JveDwvbS1iYWRnZT5cblxuICAgIDxicj5cblxuICAgIDxtLXNsaWRlciB2LW1vZGVsPVwiYlwiIG1pbj1cIjBcIiBtYXg9XCIxMDBcIj48L20tc2xpZGVyPlxuXG4gICAgPGJyPlxuXG4gICAgPG0tYnV0dG9uIHJhaXNlZCB2LW9uOmNsaWNrLm5hdGl2ZT1cInRlc3RDbGlja1wiPkhpZGUgYmFkZ2UgdmFsdWU8L20tYnV0dG9uPlxuXG4gICAgPGhyPlxuXG4gICAgPHByZSB2LXByZT5cbiAgICAgIDxjb2RlIGNsYXNzPVwiaHRtbFwiPlxuJiN4M0M7dGVtcGxhdGUmI3gzRTtcbiAgJiN4M0M7ZGl2JiN4M0U7XG4gICAgJiN4M0M7bS1iYWRnZSB2LW1vZGVsPSYjeDIyO2ImI3gyMjsgaHJlZj0mI3gyMjtodHRwczovL2dvb2dsZS5jb20mI3gyMjsgOmhpZGU9JiN4MjI7aCYjeDIyOyYjeDNFO0luYm94JiN4M0M7L20tYmFkZ2UmI3gzRTtcblxuICAgICYjeDNDO20tYmFkZ2Ugdi1tb2RlbD0mI3gyMjtiJiN4MjI7IHRhZz0mI3gyMjtzcGFuJiN4MjI7IGljb24gb3ZlcmxhcCYjeDNFO2FjY291bnRfYm94JiN4M0M7L20tYmFkZ2UmI3gzRTtcblxuICAgICYjeDNDO20tc2xpZGVyIHYtbW9kZWw9JiN4MjI7YiYjeDIyOyBtaW49JiN4MjI7MCYjeDIyOyBtYXg9JiN4MjI7MTAwJiN4MjI7JiN4M0U7JiN4M0M7L20tc2xpZGVyJiN4M0U7XG5cbiAgICAmI3gzQzttLWJ1dHRvbiByYWlzZWQgdi1vbjpjbGljay5uYXRpdmU9JiN4MjI7dGVzdENsaWNrJiN4MjI7JiN4M0U7SGlkZSBiYWRnZSB2YWx1ZSYjeDNDOy9tLWJ1dHRvbiYjeDNFO1xuXG4gICYjeDNDOy9kaXYmI3gzRTtcbiYjeDNDOy90ZW1wbGF0ZSYjeDNFO1xuXG4mI3gzQztzY3JpcHQmI3gzRTtcbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBiOiAxMCxcbiAgICAgICAgaDogZmFsc2UsXG4gICAgICAgIHRlc3RDbGljazogZnVuY3Rpb24oZSkge1xuICAgICAgICAgIHRoaXMuaCA9ICF0aGlzLmg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiYjeDNDOy9zY3JpcHQmI3gzRTtcbiAgICAgIDwvY29kZT5cbiAgICA8L3ByZT5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGI6IDEwLFxuICAgICAgICBoOiBmYWxzZSxcbiAgICAgICAgdGVzdENsaWNrOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgdGhpcy5oID0gIXRoaXMuaDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGJhZGdlcy52dWU/MjVmZTQxMDQiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygnbS1iYWRnZScsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5iKSxcbiAgICAgIGV4cHJlc3Npb246IFwiYlwiXG4gICAgfV0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vZ29vZ2xlLmNvbVwiLFxuICAgICAgXCJoaWRlXCI6IF92bS5oXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLmIpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmIgPSAkZXZlbnRcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJJbmJveFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnbS1iYWRnZScsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5iKSxcbiAgICAgIGV4cHJlc3Npb246IFwiYlwiXG4gICAgfV0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGFnXCI6IFwic3BhblwiLFxuICAgICAgXCJpY29uXCI6IFwiXCIsXG4gICAgICBcIm92ZXJsYXBcIjogXCJcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5iKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5iID0gJGV2ZW50XG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiYWNjb3VudF9ib3hcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdtLXNsaWRlcicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5iKSxcbiAgICAgIGV4cHJlc3Npb246IFwiYlwiXG4gICAgfV0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwibWluXCI6IFwiMFwiLFxuICAgICAgXCJtYXhcIjogXCIxMDBcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5iKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5iID0gJGV2ZW50XG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdtLWJ1dHRvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJyYWlzZWRcIjogXCJcIlxuICAgIH0sXG4gICAgbmF0aXZlT246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS50ZXN0Q2xpY2soJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIkhpZGUgYmFkZ2UgdmFsdWVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2hyJyksIF92bS5fdihcIiBcIiksIF92bS5fbSgwKV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ3ByZScsIHtcbiAgICBwcmU6IHRydWVcbiAgfSwgW192bS5fdihcIlxcbiAgICAgIFwiKSwgX2MoJ2NvZGUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiY2xhc3NcIjogXCJodG1sXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG48dGVtcGxhdGU+XFxuICA8ZGl2PlxcbiAgICA8bS1iYWRnZSB2LW1vZGVsPVxcXCJiXFxcIiBocmVmPVxcXCJodHRwczovL2dvb2dsZS5jb21cXFwiIDpoaWRlPVxcXCJoXFxcIj5JbmJveDwvbS1iYWRnZT5cXG5cXG4gICAgPG0tYmFkZ2Ugdi1tb2RlbD1cXFwiYlxcXCIgdGFnPVxcXCJzcGFuXFxcIiBpY29uIG92ZXJsYXA+YWNjb3VudF9ib3g8L20tYmFkZ2U+XFxuXFxuICAgIDxtLXNsaWRlciB2LW1vZGVsPVxcXCJiXFxcIiBtaW49XFxcIjBcXFwiIG1heD1cXFwiMTAwXFxcIj48L20tc2xpZGVyPlxcblxcbiAgICA8bS1idXR0b24gcmFpc2VkIHYtb246Y2xpY2submF0aXZlPVxcXCJ0ZXN0Q2xpY2tcXFwiPkhpZGUgYmFkZ2UgdmFsdWU8L20tYnV0dG9uPlxcblxcbiAgPC9kaXY+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcbiAgZXhwb3J0IGRlZmF1bHQge1xcbiAgICBkYXRhKCkge1xcbiAgICAgIHJldHVybiB7XFxuICAgICAgICBiOiAxMCxcXG4gICAgICAgIGg6IGZhbHNlLFxcbiAgICAgICAgdGVzdENsaWNrOiBmdW5jdGlvbihlKSB7XFxuICAgICAgICAgIHRoaXMuaCA9ICF0aGlzLmg7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuPC9zY3JpcHQ+XFxuICAgICAgXCIpXSksIF92bS5fdihcIlxcbiAgICBcIildKVxufV19XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTVkYjViMzUyXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi01ZGI1YjM1MiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvYmFkZ2VzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTA4ZmU5YTgxJnNjb3BlZD10cnVlIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9tZW51LnZ1ZVwiKVxuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vbWVudS52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTA4ZmU5YTgxIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL21lbnUudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIi9Vc2Vycy9vei9zcmMvbWF0ZXJpYWwtY29tcG9uZW50cy9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9tZW51LnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuX192dWVfb3B0aW9uc19fLl9zY29wZUlkID0gXCJkYXRhLXYtMDhmZTlhODFcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMDhmZTlhODFcIiwgX192dWVfb3B0aW9uc19fKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMDhmZTlhODFcIiwgX192dWVfb3B0aW9uc19fKVxuICB9XG59KSgpfVxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBtZW51LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL21lbnUudnVlIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0wOGZlOWE4MSZzY29wZWQ9dHJ1ZSEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vbWVudS52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTA4ZmU5YTgxJnNjb3BlZD10cnVlIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9tZW51LnZ1ZVwiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTA4ZmU5YTgxJnNjb3BlZD10cnVlIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9tZW51LnZ1ZVwiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMDhmZTlhODEmc2NvcGVkPXRydWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9tZW51LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4ubWVudS1ibG9ja1tkYXRhLXYtMDhmZTlhODFdIHtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJhY2tncm91bmQ6ICMzRjUxQjU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9tZW51LnZ1ZT80ZjE4ZTUyN1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBc0JBO0lBQ0EsWUFBQTtJQUNBLG9CQUFBO0lBQ0EsY0FBQTtDQUNBXCIsXCJmaWxlXCI6XCJtZW51LnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICAgPGRpdj5cXG4gICAgICAgPGRpdiBjbGFzcz1cXFwibWVudS1ibG9ja1xcXCI+XFxuICAgICAgICAgICA8bS1idXR0b24gaWNvbj1cXFwibW9yZV92ZXJ0XFxcIiBpZD1cXFwidGVzdC1tZW51XFxcIj48L20tYnV0dG9uPlxcblxcbiAgICAgICAgICAgPG0tbWVudSBmb3I9XFxcInRlc3QtbWVudVxcXCI+XFxuICAgICAgICAgICAgICAgPG0tbWVudS1pdGVtPk5vZGVKczwvbS1tZW51LWl0ZW0+XFxuICAgICAgICAgICAgICAgPG0tbWVudS1pdGVtPlBIUDwvbS1tZW51LWl0ZW0+XFxuICAgICAgICAgICAgICAgPG0tbWVudS1pdGVtIGRpc2FibGVkPVxcXCJkaXNhYmxlZFxcXCI+SlM8L20tbWVudS1pdGVtPlxcbiAgICAgICAgICAgICAgIDxtLW1lbnUtaXRlbT5HTzwvbS1tZW51LWl0ZW0+XFxuICAgICAgICAgICA8L20tbWVudT5cXG4gICAgICAgPC9kaXY+XFxuXFxuICAgICAgIDwhLS0gLyAtLT5cXG5cXG4gICAgICAgPGRpdj5cXG4gICAgICAgICAgIDxkaXY+Q29kZTo8L2Rpdj5cXG4gICAgICAgICAgIDx0ZXh0YXJlYSBjb2xzPVxcXCIxMDBcXFwiIHJvd3M9XFxcIjEwXFxcIiA6dmFsdWU9XFxcImV4YW1wbGVzXFxcIj48L3RleHRhcmVhPlxcbiAgICAgICA8L2Rpdj5cXG4gICA8L2Rpdj5cXG48L3RlbXBsYXRlPlxcbjxzdHlsZSBzY29wZWQ+XFxuICAgIC5tZW51LWJsb2NrIHtcXG4gICAgICAgIGNvbG9yOiAjZmZmO1xcbiAgICAgICAgYmFja2dyb3VuZDogIzNGNTFCNTtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIH1cXG48L3N0eWxlPlxcbjxzY3JpcHQ+XFxuICAgIGV4cG9ydCBkZWZhdWx0e1xcbiAgICAgICAgZGF0YSgpe1xcbiAgICAgICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgICAgIGV4YW1wbGVzOiBgXFxuICAgICAgICAgICAgICAgPG0tYnV0dG9uIGljb249XFxcIm1vcmVfdmVydFxcXCIgaWQ9XFxcInRlc3QtbWVudVxcXCI+PC9tLWJ1dHRvbj5cXG5cXG4gICAgICAgICAgICAgICAgPG0tbWVudSBmb3I9XFxcInRlc3QtbWVudVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8bS1tZW51LWl0ZW0+Tm9kZUpzPC9tLW1lbnUtaXRlbT5cXG4gICAgICAgICAgICAgICAgICAgIDxtLW1lbnUtaXRlbT5QSFA8L20tbWVudS1pdGVtPlxcbiAgICAgICAgICAgICAgICAgICAgPG0tbWVudS1pdGVtIGRpc2FibGVkPVxcXCJkaXNhYmxlZFxcXCI+SlM8L20tbWVudS1pdGVtPlxcbiAgICAgICAgICAgICAgICAgICAgPG0tbWVudS1pdGVtPkdPPC9tLW1lbnUtaXRlbT5cXG4gICAgICAgICAgICAgICAgPC9tLW1lbnU+XFxuICAgICAgICAgICAgYFxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbjwvc2NyaXB0PlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMDhmZTlhODEmc2NvcGVkPXRydWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9tZW51LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHR2YXIgbGlzdCA9IFtdO1xyXG5cclxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzW2ldO1xyXG5cdFx0XHRpZihpdGVtWzJdKSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBpdGVtWzFdICsgXCJ9XCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKGl0ZW1bMV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oXCJcIik7XHJcblx0fTtcclxuXHJcblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcclxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XHJcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xyXG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XHJcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcclxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcclxuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxyXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xyXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxyXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxyXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xyXG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xyXG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblx0cmV0dXJuIGxpc3Q7XHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbnZhciBzdHlsZXNJbkRvbSA9IHt9LFxuXHRtZW1vaXplID0gZnVuY3Rpb24oZm4pIHtcblx0XHR2YXIgbWVtbztcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRcdHJldHVybiBtZW1vO1xuXHRcdH07XG5cdH0sXG5cdGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiAvbXNpZSBbNi05XVxcYi8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKTtcblx0fSksXG5cdGdldEhlYWRFbGVtZW50ID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO1xuXHR9KSxcblx0c2luZ2xldG9uRWxlbWVudCA9IG51bGwsXG5cdHNpbmdsZXRvbkNvdW50ZXIgPSAwLFxuXHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIDxoZWFkPi5cblx0aWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QpO1xuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspXG5cdFx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oKTtcblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0KSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKVxuXHRcdFx0c3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlXG5cdFx0XHRuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCkge1xuXHR2YXIgaGVhZCA9IGdldEhlYWRFbGVtZW50KCk7XG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wW3N0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBoZWFkLmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZihsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcblx0XHR9XG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AucHVzaChzdHlsZUVsZW1lbnQpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcblx0c3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcblx0dmFyIGlkeCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGVFbGVtZW50KTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuXHR2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXHRzdHlsZUVsZW1lbnQudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCk7XG5cdHJldHVybiBzdHlsZUVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVFbGVtZW50LCB1cGRhdGUsIHJlbW92ZTtcblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblx0XHRzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcblx0XHRpZihuZXdPYmopIHtcblx0XHRcdGlmKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcClcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzO1xuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGVFbGVtZW50LCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0aWYgKG1lZGlhKSB7XG5cdFx0c3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL2RldnRvb2xzL2RvY3MvamF2YXNjcmlwdC1kZWJ1Z2dpbmdcblx0XHQvLyB0aGlzIG1ha2VzIHNvdXJjZSBtYXBzIGluc2lkZSBzdHlsZSB0YWdzIHdvcmsgcHJvcGVybHkgaW4gQ2hyb21lXG5cdFx0Y3NzICs9ICdcXG4vKiMgc291cmNlVVJMPScgKyBzb3VyY2VNYXAuc291cmNlc1swXSArICcgKi8nO1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0aWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcblx0XHR9XG5cdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjx0ZW1wbGF0ZT5cbiAgIDxkaXY+XG4gICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtYmxvY2tcIj5cbiAgICAgICAgICAgPG0tYnV0dG9uIGljb249XCJtb3JlX3ZlcnRcIiBpZD1cInRlc3QtbWVudVwiPjwvbS1idXR0b24+XG5cbiAgICAgICAgICAgPG0tbWVudSBmb3I9XCJ0ZXN0LW1lbnVcIj5cbiAgICAgICAgICAgICAgIDxtLW1lbnUtaXRlbT5Ob2RlSnM8L20tbWVudS1pdGVtPlxuICAgICAgICAgICAgICAgPG0tbWVudS1pdGVtPlBIUDwvbS1tZW51LWl0ZW0+XG4gICAgICAgICAgICAgICA8bS1tZW51LWl0ZW0gZGlzYWJsZWQ9XCJkaXNhYmxlZFwiPkpTPC9tLW1lbnUtaXRlbT5cbiAgICAgICAgICAgICAgIDxtLW1lbnUtaXRlbT5HTzwvbS1tZW51LWl0ZW0+XG4gICAgICAgICAgIDwvbS1tZW51PlxuICAgICAgIDwvZGl2PlxuXG4gICAgICAgPCEtLSAvIC0tPlxuXG4gICAgICAgPGRpdj5cbiAgICAgICAgICAgPGRpdj5Db2RlOjwvZGl2PlxuICAgICAgICAgICA8dGV4dGFyZWEgY29scz1cIjEwMFwiIHJvd3M9XCIxMFwiIDp2YWx1ZT1cImV4YW1wbGVzXCI+PC90ZXh0YXJlYT5cbiAgICAgICA8L2Rpdj5cbiAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzdHlsZSBzY29wZWQ+XG4gICAgLm1lbnUtYmxvY2sge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgYmFja2dyb3VuZDogIzNGNTFCNTtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICB9XG48L3N0eWxlPlxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdHtcbiAgICAgICAgZGF0YSgpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBleGFtcGxlczogYFxuICAgICAgICAgICAgICAgPG0tYnV0dG9uIGljb249XCJtb3JlX3ZlcnRcIiBpZD1cInRlc3QtbWVudVwiPjwvbS1idXR0b24+XG5cbiAgICAgICAgICAgICAgICA8bS1tZW51IGZvcj1cInRlc3QtbWVudVwiPlxuICAgICAgICAgICAgICAgICAgICA8bS1tZW51LWl0ZW0+Tm9kZUpzPC9tLW1lbnUtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPG0tbWVudS1pdGVtPlBIUDwvbS1tZW51LWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxtLW1lbnUtaXRlbSBkaXNhYmxlZD1cImRpc2FibGVkXCI+SlM8L20tbWVudS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICA8bS1tZW51LWl0ZW0+R088L20tbWVudS1pdGVtPlxuICAgICAgICAgICAgICAgIDwvbS1tZW51PlxuICAgICAgICAgICAgYFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbWVudS52dWU/NGYxOGU1MjciLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1lbnUtYmxvY2tcIlxuICB9LCBbX2MoJ20tYnV0dG9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImljb25cIjogXCJtb3JlX3ZlcnRcIixcbiAgICAgIFwiaWRcIjogXCJ0ZXN0LW1lbnVcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdtLW1lbnUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwidGVzdC1tZW51XCJcbiAgICB9XG4gIH0sIFtfYygnbS1tZW51LWl0ZW0nLCBbX3ZtLl92KFwiTm9kZUpzXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtLW1lbnUtaXRlbScsIFtfdm0uX3YoXCJQSFBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tbWVudS1pdGVtJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImRpc2FibGVkXCI6IFwiZGlzYWJsZWRcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkpTXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtLW1lbnUtaXRlbScsIFtfdm0uX3YoXCJHT1wiKV0pXSwgMSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIFtfYygnZGl2JywgW192bS5fdihcIkNvZGU6XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCd0ZXh0YXJlYScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJjb2xzXCI6IFwiMTAwXCIsXG4gICAgICBcInJvd3NcIjogXCIxMFwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0uZXhhbXBsZXNcbiAgICB9XG4gIH0pXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0wOGZlOWE4MVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMDhmZTlhODEhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL21lbnUudnVlXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9sb2FkaW5nLnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNWY5NjQ3OGEhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vbG9hZGluZy52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiL1VzZXJzL296L3NyYy9tYXRlcmlhbC1jb21wb25lbnRzL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL2xvYWRpbmcudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi01Zjk2NDc4YVwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi01Zjk2NDc4YVwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH1cbn0pKCl9XG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGxvYWRpbmcudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvbG9hZGluZy52dWUiLCI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPGgzPlByb2dyZXNzIGJhcjwvaDM+XG5cbiAgICAgICAgPG0tcHJvZ3Jlc3Mgdi1tb2RlbD1cInByb2dyZXNzXCI+PC9tLXByb2dyZXNzPlxuXG5cbiAgICAgICAgPGRpdiBzdHlsZT1cIndpZHRoOiAyMDBweDsgbWFyZ2luLXRvcDogMzBweDtcIj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJtYXJnaW4tbGVmdDogMjZweDtcIj5DaGFuZ2UgdmFsdWU6PC9kaXY+XG4gICAgICAgICAgICA8bS1zbGlkZXIgdi1tb2RlbD1cInByb2dyZXNzXCIgbWluPVwiMFwiIG1heD1cIjEwMFwiPjwvbS1zbGlkZXI+XG4gICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgPGg0PlByb2dyZXNzIHdpdGggYnVmZmVyPC9oND5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxtLXByb2dyZXNzIHYtbW9kZWw9XCJwcm9ncmVzczJcIiA6YnVmZmVyPVwiYnVmZmVyXCI+PC9tLXByb2dyZXNzPlxuICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgIDxoND5JbmRldGVybWluYXRlPC9oND5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxtLXByb2dyZXNzIGluZGV0ZXJtaW5hdGU+PC9tLXByb2dyZXNzPlxuICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2PkNvZGU6PC9kaXY+XG4gICAgICAgICAgICA8dGV4dGFyZWEgY29scz1cIjEwMFwiIHJvd3M9XCI2XCIgOnZhbHVlPVwiZXhhbXBsZXNcIj48L3RleHRhcmVhPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8aDM+U3Bpbm5lcjwvaDM+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoND5EZWZhdWx0OjwvaDQ+XG4gICAgICAgICAgICA8bS1zcGlubmVyPjwvbS1zcGlubmVyPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGg0PlNpbmdsZSBjb2xvcjo8L2g0PlxuICAgICAgICAgICAgPG0tc3Bpbm5lciBzaW5nbGUtY29sb3I+PC9tLXNwaW5uZXI+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDQ+SGlkZSBzcGlubmVyPC9oND5cbiAgICAgICAgICAgIDxtLXNwaW5uZXIgOmFjdGl2ZT1cImFjdGl2ZVwiPjwvbS1zcGlubmVyPlxuXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiB2LW1vZGVsPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXY+Q29kZTo8L2Rpdj5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBjb2xzPVwiMTAwXCIgcm93cz1cIjZcIiA6dmFsdWU9XCJleGFtcGxlc19zcGlubmVyXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0e1xuICAgICAgICBkYXRhKCl7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHByb2dyZXNzOiA0MCxcbiAgICAgICAgICAgICAgICBwcm9ncmVzczI6IDMwLFxuICAgICAgICAgICAgICAgIGJ1ZmZlcjogNjAsXG4gICAgICAgICAgICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBleGFtcGxlczogYFxuICAgICAgICAgICAgICAgICAgICA8bS1wcm9ncmVzcyB2LW1vZGVsPVwicHJvZ3Jlc3NcIj48L20tcHJvZ3Jlc3M+XG4gICAgICAgICAgICAgICAgICAgIDxtLXByb2dyZXNzIHYtbW9kZWw9XCJwcm9ncmVzczJcIiA6YnVmZmVyPVwiYnVmZmVyXCI+PC9tLXByb2dyZXNzPlxuICAgICAgICAgICAgICAgICAgICA8bS1wcm9ncmVzcyBpbmRldGVybWluYXRlPjwvbS1wcm9ncmVzcz5cbiAgICAgICAgICAgICAgICBgLFxuXG4gICAgICAgICAgICAgICAgZXhhbXBsZXNfc3Bpbm5lcjogYFxuICAgICAgICAgICAgICAgICAgIDxtLXNwaW5uZXI+PC9tLXNwaW5uZXI+XG4gICAgICAgICAgICAgICAgICAgPG0tc3Bpbm5lciBzaW5nbGUtY29sb3I+PC9tLXNwaW5uZXI+XG4gICAgICAgICAgICAgICAgICAgPG0tc3Bpbm5lciA6YWN0aXZlPVwiYWN0aXZlXCI+PC9tLXNwaW5uZXI+XG4gICAgICAgICAgICAgICAgYCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGxvYWRpbmcudnVlPzdjNjc0MmY4IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ2gzJywgW192bS5fdihcIlByb2dyZXNzIGJhclwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS1wcm9ncmVzcycsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5wcm9ncmVzcyksXG4gICAgICBleHByZXNzaW9uOiBcInByb2dyZXNzXCJcbiAgICB9XSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLnByb2dyZXNzKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5wcm9ncmVzcyA9ICRldmVudFxuICAgICAgfVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwid2lkdGhcIjogXCIyMDBweFwiLFxuICAgICAgXCJtYXJnaW4tdG9wXCI6IFwiMzBweFwiXG4gICAgfVxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJtYXJnaW4tbGVmdFwiOiBcIjI2cHhcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkNoYW5nZSB2YWx1ZTpcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tc2xpZGVyJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnByb2dyZXNzKSxcbiAgICAgIGV4cHJlc3Npb246IFwicHJvZ3Jlc3NcIlxuICAgIH1dLFxuICAgIGF0dHJzOiB7XG4gICAgICBcIm1pblwiOiBcIjBcIixcbiAgICAgIFwibWF4XCI6IFwiMTAwXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0ucHJvZ3Jlc3MpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnByb2dyZXNzID0gJGV2ZW50XG4gICAgICB9XG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnaDQnLCBbX3ZtLl92KFwiUHJvZ3Jlc3Mgd2l0aCBidWZmZXJcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIFtfYygnbS1wcm9ncmVzcycsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5wcm9ncmVzczIpLFxuICAgICAgZXhwcmVzc2lvbjogXCJwcm9ncmVzczJcIlxuICAgIH1dLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImJ1ZmZlclwiOiBfdm0uYnVmZmVyXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLnByb2dyZXNzMilcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0ucHJvZ3Jlc3MyID0gJGV2ZW50XG4gICAgICB9XG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnaDQnLCBbX3ZtLl92KFwiSW5kZXRlcm1pbmF0ZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2JywgW19jKCdtLXByb2dyZXNzJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImluZGV0ZXJtaW5hdGVcIjogXCJcIlxuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIFtfYygnZGl2JywgW192bS5fdihcIkNvZGU6XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCd0ZXh0YXJlYScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJjb2xzXCI6IFwiMTAwXCIsXG4gICAgICBcInJvd3NcIjogXCI2XCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5leGFtcGxlc1xuICAgIH1cbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2gzJywgW192bS5fdihcIlNwaW5uZXJcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIFtfYygnaDQnLCBbX3ZtLl92KFwiRGVmYXVsdDpcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tc3Bpbm5lcicpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCBbX2MoJ2g0JywgW192bS5fdihcIlNpbmdsZSBjb2xvcjpcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tc3Bpbm5lcicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzaW5nbGUtY29sb3JcIjogXCJcIlxuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIFtfYygnaDQnLCBbX3ZtLl92KFwiSGlkZSBzcGlubmVyXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtLXNwaW5uZXInLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiYWN0aXZlXCI6IF92bS5hY3RpdmVcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2JywgW19jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5hY3RpdmUpLFxuICAgICAgZXhwcmVzc2lvbjogXCJhY3RpdmVcIlxuICAgIH1dLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJjaGVja2JveFwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJjaGVja2VkXCI6IEFycmF5LmlzQXJyYXkoX3ZtLmFjdGl2ZSkgPyBfdm0uX2koX3ZtLmFjdGl2ZSwgbnVsbCkgPiAtMSA6IChfdm0uYWN0aXZlKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2hhbmdlXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICB2YXIgJCRhID0gX3ZtLmFjdGl2ZSxcbiAgICAgICAgICAkJGVsID0gJGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAkJGMgPSAkJGVsLmNoZWNrZWQgPyAodHJ1ZSkgOiAoZmFsc2UpO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSgkJGEpKSB7XG4gICAgICAgICAgdmFyICQkdiA9IG51bGwsXG4gICAgICAgICAgICAkJGkgPSBfdm0uX2koJCRhLCAkJHYpO1xuICAgICAgICAgIGlmICgkJGMpIHtcbiAgICAgICAgICAgICQkaSA8IDAgJiYgKF92bS5hY3RpdmUgPSAkJGEuY29uY2F0KCQkdikpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQkaSA+IC0xICYmIChfdm0uYWN0aXZlID0gJCRhLnNsaWNlKDAsICQkaSkuY29uY2F0KCQkYS5zbGljZSgkJGkgKyAxKSkpXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF92bS5hY3RpdmUgPSAkJGNcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSldKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2JywgW19jKCdkaXYnLCBbX3ZtLl92KFwiQ29kZTpcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RleHRhcmVhJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImNvbHNcIjogXCIxMDBcIixcbiAgICAgIFwicm93c1wiOiBcIjZcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLmV4YW1wbGVzX3NwaW5uZXJcbiAgICB9XG4gIH0pXSldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi01Zjk2NDc4YVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNWY5NjQ3OGEhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL2xvYWRpbmcudnVlXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi90b2dnbGVzLnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNDdmYTJjNmQhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vdG9nZ2xlcy52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiL1VzZXJzL296L3NyYy9tYXRlcmlhbC1jb21wb25lbnRzL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL3RvZ2dsZXMudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi00N2ZhMmM2ZFwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi00N2ZhMmM2ZFwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH1cbn0pKCl9XG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHRvZ2dsZXMudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvdG9nZ2xlcy52dWUiLCI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPGg0PkNoZWNrYm94PC9oND5cblxuICAgICAgICA8bS1jaGVja2JveCB2LW1vZGVsPVwiY2hlY2tib3gxXCIgQGNoYW5nZT1cInNlbGVjdFwiPlRoaXMgb25lPC9tLWNoZWNrYm94PlxuXG4gICAgICAgIDxtLWNoZWNrYm94IHYtbW9kZWw9XCJjaGVja2JveDJcIj5MYWJlbDwvbS1jaGVja2JveD5cblxuICAgICAgICA8bS1jaGVja2JveCBkaXNhYmxlZCB2LW1vZGVsPVwiY2hlY2tib3gyXCI+TGFiZWw8L20tY2hlY2tib3g+XG5cbiAgICAgICAgPGhyPlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7e2NoZWNrYm94MX19LCB7e2NoZWNrYm94Mn19XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2PkNvZGU6PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjb2xzPVwiMTAwXCIgcm93cz1cIjZcIiA6dmFsdWU9XCJleGFtcGxlc1wiPlxuICAgICAgICAgICAgICAgICAgICA8L3RleHRhcmVhPlxuICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgIDxoND5SYWRpbzwvaDQ+XG4gICAgICAgIDxtLXJhZGlvIG5hbWU9XCJ0ZXN0XCIgdi1tb2RlbD1cInJhZGlvVmFsXCIgdmFsPVwib25lXCI+VGVzdCAxPC9tLXJhZGlvPlxuICAgICAgICA8bS1yYWRpbyBuYW1lPVwidGVzdFwiIHYtbW9kZWw9XCJyYWRpb1ZhbFwiIHZhbD1cInR3b1wiPlRlc3QgMjwvbS1yYWRpbz5cbiAgICAgICAgPG0tcmFkaW8gbmFtZT1cInRlc3RcIiB2LW1vZGVsPVwicmFkaW9WYWxcIiB2YWw9XCIzXCIgZGlzYWJsZWQ+VGVzdCAzPC9tLXJhZGlvPlxuXG4gICAgICAgIDxkaXY+e3tyYWRpb1ZhbH19PC9kaXY+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXY+Q29kZTo8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNvbHM9XCIxMDBcIiByb3dzPVwiNlwiIDp2YWx1ZT1cImV4YW1wbGVzUmFkaW9cIj5cbiAgICAgICAgICAgICAgICAgICAgPC90ZXh0YXJlYT5cbiAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICA8aDQ+U3dpdGNoPC9oND5cblxuICAgICAgICA8bS1zd2l0Y2ggdi1tb2RlbD1cInN3aXRjaDFcIj5PbjwvbS1zd2l0Y2g+XG4gICAgICAgIDxicj5cbiAgICAgICAge3tzd2l0Y2gxfX1cbiAgICAgICAgPGJyPlxuXG4gICAgICAgIDxtLXN3aXRjaCB2LW1vZGVsPVwic3dpdGNoMlwiPk9mZjwvbS1zd2l0Y2g+XG4gICAgICAgIDxicj5cbiAgICAgICAge3tzd2l0Y2gyfX1cblxuICAgICAgICA8bS1zd2l0Y2ggdi1tb2RlbD1cInN3aXRjaDJcIiBkaXNhYmxlZD5PZmY8L20tc3dpdGNoPlxuICAgICAgICA8YnI+XG4gICAgICAgIHt7c3dpdGNoMn19XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXY+Q29kZTo8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNvbHM9XCIxMDBcIiByb3dzPVwiNlwiIDp2YWx1ZT1cImV4YW1wbGVzU3dpdGNoXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvdGV4dGFyZWE+XG4gICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgPGg0Pkljb24gVGFnZ2xlPC9oND5cblxuICAgICAgICA8bS1pY29uLXRvZ2dsZSB2LW1vZGVsPVwiaVRvZ2dsZVwiIGljb249XCJmb3JtYXRfYm9sZFwiPjwvbS1pY29uLXRvZ2dsZT5cbiAgICAgICAgPGJyPlxuXG4gICAgICAgIHt7aVRvZ2dsZX19XG5cbiAgICAgICAgPGJyPlxuXG4gICAgICAgIDxtLWljb24tdG9nZ2xlIHYtbW9kZWw9XCJpVG9nZ2xlMlwiIGljb249XCJzZWFyY2hcIj48L20taWNvbi10b2dnbGU+XG4gICAgICAgIDxicj5cbiAgICAgICAge3tpVG9nZ2xlMn19XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXY+Q29kZTo8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNvbHM9XCIxMDBcIiByb3dzPVwiNlwiIDp2YWx1ZT1cImV4YW1wbGVzSWNvblRvZ2dsZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPC90ZXh0YXJlYT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgc2VsZWN0OiBmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrYm94MiA9IHZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY2hlY2tib3gxOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjaGVja2JveDI6IHRydWUsXG4gICAgICAgICAgICAgICAgZXhhbXBsZXM6IGBcbiAgICAgICAgICAgICAgICAgICAgPG0tY2hlY2tib3ggdi1tb2RlbD1cImNoZWNrYm94MVwiPlRoaXMgb25lPC9tLWNoZWNrYm94PlxuICAgICAgICAgICAgICAgICAgICA8bS1jaGVja2JveCB2LW1vZGVsPVwiY2hlY2tib3gyXCI+TGFiZWw8L20tY2hlY2tib3g+XG4gICAgICAgICAgICAgICAgYCxcblxuICAgICAgICAgICAgICAgIHJhZGlvVmFsOiAndHdvJyxcbiAgICAgICAgICAgICAgICBleGFtcGxlc1JhZGlvOiBgXG4gICAgICAgICAgICAgICAgICAgIDxtLXJhZGlvIG5hbWU9XCJ0ZXN0XCIgdi1tb2RlbD1cInJhZGlvVmFsXCIgdmFsPVwib25lXCI+VGVzdCAxPC9tLXJhZGlvPlxuICAgICAgICAgICAgICAgICAgICA8bS1yYWRpbyBuYW1lPVwidGVzdFwiIHYtbW9kZWw9XCJyYWRpb1ZhbFwiIHZhbD1cInR3b1wiPlRlc3QgMjwvbS1yYWRpbz5cbiAgICAgICAgICAgICAgICAgICAgPG0tcmFkaW8gbmFtZT1cInRlc3RcIiB2LW1vZGVsPVwicmFkaW9WYWxcIiB2YWw9XCIzXCIgZGlzYWJsZWQ+VGVzdCAzPC9tLXJhZGlvPlxuICAgICAgICAgICAgICAgIGAsXG5cbiAgICAgICAgICAgICAgICBzd2l0Y2gxOiB0cnVlLFxuICAgICAgICAgICAgICAgIHN3aXRjaDI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGV4YW1wbGVzU3dpdGNoOiBgXG4gICAgICAgICAgICAgICAgICAgIDxtLXN3aXRjaCB2LW1vZGVsPVwic3dpdGNoMVwiPk9uPC9tLXN3aXRjaD5cbiAgICAgICAgICAgICAgICAgICAgPG0tc3dpdGNoIHYtbW9kZWw9XCJzd2l0Y2gyXCI+T2ZmPC9tLXN3aXRjaD5cbiAgICAgICAgICAgICAgICAgICAgPG0tc3dpdGNoIHYtbW9kZWw9XCJzd2l0Y2gyXCIgZGlzYWJsZWQ+T2ZmPC9tLXN3aXRjaD5cbiAgICAgICAgICAgICAgICBgLFxuXG4gICAgICAgICAgICAgICAgaVRvZ2dsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpVG9nZ2xlMjogZmFsc2UsXG5cbiAgICAgICAgICAgICAgICBleGFtcGxlc0ljb25Ub2dnbGVzOiBgXG4gICAgICAgICAgICAgICAgICAgIDxtLWljb24tdG9nZ2xlIHYtbW9kZWw9XCJpVG9nZ2xlXCIgaWNvbj1cImZvcm1hdF9ib2xkXCI+PC9tLWljb24tdG9nZ2xlPlxuICAgICAgICAgICAgICAgICAgICA8bS1pY29uLXRvZ2dsZSB2LW1vZGVsPVwiaVRvZ2dsZTJcIiBpY29uPVwic2VhcmNoXCI+PC9tLWljb24tdG9nZ2xlPlxuICAgICAgICAgICAgICAgIGAsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB0b2dnbGVzLnZ1ZT83ZTA1NWRjZSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW19jKCdoNCcsIFtfdm0uX3YoXCJDaGVja2JveFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS1jaGVja2JveCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5jaGVja2JveDEpLFxuICAgICAgZXhwcmVzc2lvbjogXCJjaGVja2JveDFcIlxuICAgIH1dLFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0uY2hlY2tib3gxKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2hhbmdlXCI6IF92bS5zZWxlY3QsXG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uY2hlY2tib3gxID0gJGV2ZW50XG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiVGhpcyBvbmVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tY2hlY2tib3gnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uY2hlY2tib3gyKSxcbiAgICAgIGV4cHJlc3Npb246IFwiY2hlY2tib3gyXCJcbiAgICB9XSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLmNoZWNrYm94MilcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uY2hlY2tib3gyID0gJGV2ZW50XG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiTGFiZWxcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tY2hlY2tib3gnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uY2hlY2tib3gyKSxcbiAgICAgIGV4cHJlc3Npb246IFwiY2hlY2tib3gyXCJcbiAgICB9XSxcbiAgICBhdHRyczoge1xuICAgICAgXCJkaXNhYmxlZFwiOiBcIlwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLmNoZWNrYm94MilcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uY2hlY2tib3gyID0gJGV2ZW50XG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiTGFiZWxcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2hyJyksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCBbX3ZtLl92KFwiXFxuICAgICAgICBcIiArIF92bS5fcyhfdm0uY2hlY2tib3gxKSArIFwiLCBcIiArIF92bS5fcyhfdm0uY2hlY2tib3gyKSArIFwiXFxuICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2JywgW19jKCdkaXYnLCBbX3ZtLl92KFwiQ29kZTpcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RleHRhcmVhJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImNvbHNcIjogXCIxMDBcIixcbiAgICAgIFwicm93c1wiOiBcIjZcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLmV4YW1wbGVzXG4gICAgfVxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaDQnLCBbX3ZtLl92KFwiUmFkaW9cIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tcmFkaW8nLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0ucmFkaW9WYWwpLFxuICAgICAgZXhwcmVzc2lvbjogXCJyYWRpb1ZhbFwiXG4gICAgfV0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwibmFtZVwiOiBcInRlc3RcIixcbiAgICAgIFwidmFsXCI6IFwib25lXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0ucmFkaW9WYWwpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnJhZGlvVmFsID0gJGV2ZW50XG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiVGVzdCAxXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtLXJhZGlvJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnJhZGlvVmFsKSxcbiAgICAgIGV4cHJlc3Npb246IFwicmFkaW9WYWxcIlxuICAgIH1dLFxuICAgIGF0dHJzOiB7XG4gICAgICBcIm5hbWVcIjogXCJ0ZXN0XCIsXG4gICAgICBcInZhbFwiOiBcInR3b1wiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLnJhZGlvVmFsKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5yYWRpb1ZhbCA9ICRldmVudFxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIlRlc3QgMlwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS1yYWRpbycsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5yYWRpb1ZhbCksXG4gICAgICBleHByZXNzaW9uOiBcInJhZGlvVmFsXCJcbiAgICB9XSxcbiAgICBhdHRyczoge1xuICAgICAgXCJuYW1lXCI6IFwidGVzdFwiLFxuICAgICAgXCJ2YWxcIjogXCIzXCIsXG4gICAgICBcImRpc2FibGVkXCI6IFwiXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0ucmFkaW9WYWwpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnJhZGlvVmFsID0gJGV2ZW50XG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiVGVzdCAzXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCBbX3ZtLl92KF92bS5fcyhfdm0ucmFkaW9WYWwpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2JywgW19jKCdkaXYnLCBbX3ZtLl92KFwiQ29kZTpcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RleHRhcmVhJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImNvbHNcIjogXCIxMDBcIixcbiAgICAgIFwicm93c1wiOiBcIjZcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLmV4YW1wbGVzUmFkaW9cbiAgICB9XG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdoNCcsIFtfdm0uX3YoXCJTd2l0Y2hcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tc3dpdGNoJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnN3aXRjaDEpLFxuICAgICAgZXhwcmVzc2lvbjogXCJzd2l0Y2gxXCJcbiAgICB9XSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLnN3aXRjaDEpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnN3aXRjaDEgPSAkZXZlbnRcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJPblwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiXFxuICAgIFwiICsgX3ZtLl9zKF92bS5zd2l0Y2gxKSArIFwiXFxuICAgIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdtLXN3aXRjaCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5zd2l0Y2gyKSxcbiAgICAgIGV4cHJlc3Npb246IFwic3dpdGNoMlwiXG4gICAgfV0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5zd2l0Y2gyKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5zd2l0Y2gyID0gJGV2ZW50XG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiT2ZmXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCJcXG4gICAgXCIgKyBfdm0uX3MoX3ZtLnN3aXRjaDIpICsgXCJcXG5cXG4gICAgXCIpLCBfYygnbS1zd2l0Y2gnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uc3dpdGNoMiksXG4gICAgICBleHByZXNzaW9uOiBcInN3aXRjaDJcIlxuICAgIH1dLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImRpc2FibGVkXCI6IFwiXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0uc3dpdGNoMilcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uc3dpdGNoMiA9ICRldmVudFxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIk9mZlwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiXFxuICAgIFwiICsgX3ZtLl9zKF92bS5zd2l0Y2gyKSArIFwiXFxuXFxuICAgIFwiKSwgX2MoJ2RpdicsIFtfYygnZGl2JywgW192bS5fdihcIkNvZGU6XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCd0ZXh0YXJlYScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJjb2xzXCI6IFwiMTAwXCIsXG4gICAgICBcInJvd3NcIjogXCI2XCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5leGFtcGxlc1N3aXRjaFxuICAgIH1cbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2g0JywgW192bS5fdihcIkljb24gVGFnZ2xlXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtLWljb24tdG9nZ2xlJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmlUb2dnbGUpLFxuICAgICAgZXhwcmVzc2lvbjogXCJpVG9nZ2xlXCJcbiAgICB9XSxcbiAgICBhdHRyczoge1xuICAgICAgXCJpY29uXCI6IFwiZm9ybWF0X2JvbGRcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5pVG9nZ2xlKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5pVG9nZ2xlID0gJGV2ZW50XG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIlxcblxcbiAgICBcIiArIF92bS5fcyhfdm0uaVRvZ2dsZSkgKyBcIlxcblxcbiAgICBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnbS1pY29uLXRvZ2dsZScsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5pVG9nZ2xlMiksXG4gICAgICBleHByZXNzaW9uOiBcImlUb2dnbGUyXCJcbiAgICB9XSxcbiAgICBhdHRyczoge1xuICAgICAgXCJpY29uXCI6IFwic2VhcmNoXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0uaVRvZ2dsZTIpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmlUb2dnbGUyID0gJGV2ZW50XG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIlxcbiAgICBcIiArIF92bS5fcyhfdm0uaVRvZ2dsZTIpICsgXCJcXG5cXG4gICAgXCIpLCBfYygnZGl2JywgW19jKCdkaXYnLCBbX3ZtLl92KFwiQ29kZTpcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RleHRhcmVhJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImNvbHNcIjogXCIxMDBcIixcbiAgICAgIFwicm93c1wiOiBcIjZcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLmV4YW1wbGVzSWNvblRvZ2dsZXNcbiAgICB9XG4gIH0pXSldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi00N2ZhMmM2ZFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNDdmYTJjNmQhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL3RvZ2dsZXMudnVlXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi90YWJzLnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMTAxMGRkYzAhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vdGFicy52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiL1VzZXJzL296L3NyYy9tYXRlcmlhbC1jb21wb25lbnRzL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL3RhYnMudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0xMDEwZGRjMFwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0xMDEwZGRjMFwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH1cbn0pKCl9XG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHRhYnMudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvdGFicy52dWUiLCI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPG0tdGFicyB2LW1vZGVsPVwiY3VycmVudFR1YlwiPlxuICAgICAgICAgICAgPG0tdGFiIDp0YWI9XCJ7IHRpdGxlOiAnSm9uJywgaWQ6ICd0YWItMScgfVwiPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICBIZWxsbyAxXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9tLXRhYj5cbiAgICAgICAgICAgIDxtLXRhYiA6dGFiPVwieyB0aXRsZTogJ1RvbScsIGlkOiAndGFiLTInIH1cIj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgSGVsbG8gMlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvbS10YWI+XG5cbiAgICAgICAgPC9tLXRhYnM+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxwcmUgdi1wcmU+XG4gICAgICAgICAgICA8Y29kZSBjbGFzcz1cImh0bWxcIj5cbiYjeDNDO3RlbXBsYXRlJiN4M0U7XG4gICAgJiN4M0M7ZGl2JiN4M0U7XG4gICAgICAgICYjeDNDO20tdGFicyB2LW1vZGVsPSYjeDIyO2N1cnJlbnRUdWImI3gyMjsmI3gzRTtcbiAgICAgICAgICAgICYjeDNDO20tdGFiIDp0YWI9JiN4MjI7eyB0aXRsZTogJiN4Mjc7Sm9uJiN4Mjc7LCBpZDogJiN4Mjc7dGFiLTEmI3gyNzsgfSYjeDIyOyYjeDNFO1xuICAgICAgICAgICAgICAgICYjeDNDO3AmI3gzRTtcbiAgICAgICAgICAgICAgICAgICAgSGVsbG8gMVxuICAgICAgICAgICAgICAgICYjeDNDOy9wJiN4M0U7XG4gICAgICAgICAgICAmI3gzQzsvbS10YWImI3gzRTtcbiAgICAgICAgICAgICYjeDNDO20tdGFiIDp0YWI9JiN4MjI7eyB0aXRsZTogJiN4Mjc7VG9tJiN4Mjc7LCBpZDogJiN4Mjc7dGFiLTImI3gyNzsgfSYjeDIyOyYjeDNFO1xuICAgICAgICAgICAgICAgICYjeDNDO3AmI3gzRTtcbiAgICAgICAgICAgICAgICAgICAgSGVsbG8gMlxuICAgICAgICAgICAgICAgICYjeDNDOy9wJiN4M0U7XG4gICAgICAgICAgICAmI3gzQzsvbS10YWImI3gzRTtcblxuICAgICAgICAmI3gzQzsvbS10YWJzJiN4M0U7XG4gICAgJiN4M0M7L2RpdiYjeDNFO1xuJiN4M0M7L3RlbXBsYXRlJiN4M0U7XG5cbiYjeDNDO3NjcmlwdCYjeDNFO1xuICAgIGV4cG9ydCBkZWZhdWx0e1xuICAgICAgICBkYXRhKCl7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRUdWI6ICYjeDI3O3RhYi0xJiN4Mjc7LFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuJiN4M0M7L3NjcmlwdCYjeDNFO1xuICAgICAgICAgICAgPC9jb2RlPjwvcHJlPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8YnI+XG4gICAgICAgIDxicj5cblxuXG5cbiAgICAgICAgPG0tdGFicyB2LW1vZGVsPVwiY3VycmVudFR1YjJcIiA6bm8tcmlwcGxlLWVmZmVjdD1cInRydWVcIiA6YW5pbWF0aW9uPVwidHJ1ZVwiIDpjb250ZW50LXN0eWxlPVwie2hlaWdodDogJzMwMHB4J31cIj5cbiAgICAgICAgICAgIDxtLXRhYiB0YWI9XCJUYWIgMVwiPlxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPVwibWluLWhlaWdodDogMjUwcHg7IGJhY2tncm91bmQ6ICNmYWZhZmE7IHBhZGRpbmc6IDEwcHg7XCI+XG4gICAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFNlZCBtaSBkb2xvciwgbW9sZXN0aWUgdXQgcG9ydHRpdG9yIHZpdGFlLCB2aXZlcnJhIGFjIGxvcmVtLjxicj5cbiAgICAgICAgICAgICAgICAgICAgUGVsbGVudGVzcXVlIGV1IGxvYm9ydGlzIGZlbGlzLiBOdWxsYSBpZCBwcmV0aXVtIGFudGUuIEFsaXF1YW0gdHVycGlzIGVuaW0sIGltcGVyZGlldCBlZmZpY2l0dXIgbWF1cmlzIGEsIDxicj5cbiAgICAgICAgICAgICAgICAgICAgdGVtcG9yIGxhY2luaWEgYW50ZS4gTmFtIHZlbCB2ZWxpdCBtZXR1cy4gSW50ZWdlciBudWxsYSB0dXJwaXMsIHRyaXN0aXF1ZSBub24gZHVpIGVnZXQsIG1hbGVzdWFkYSBibGFuZGl0IG5pc2kuPGJyPlxuICAgICAgICAgICAgICAgICAgICBQaGFzZWxsdXMgaWQgdm9sdXRwYXQgb3JjaS4gQ3VyYWJpdHVyIG1hbGVzdWFkYSBhdWd1ZSBlZmZpY2l0dXIgbWFzc2EgY29uc2VxdWF0IGNvbnNlcXVhdC4gQ2xhc3MgYXB0ZW50IHRhY2l0aSBzb2Npb3NxdVxuICAgICAgICAgICAgICAgICAgICBhZCBsaXRvcmEgdG9ycXVlbnQgcGVyIGNvbnViaWEgbm9zdHJhLCBwZXIgaW5jZXB0b3MgaGltZW5hZW9zLlxuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9tLXRhYj5cbiAgICAgICAgICAgIDxtLXRhYiB0YWI9XCJUYWIgMlwiPlxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPVwibWluLWhlaWdodDogMjUwcHg7IGJhY2tncm91bmQ6ICMzMzM7IGNvbG9yOiAjZmZmOyBwYWRkaW5nOiAxMHB4O1wiPlxuICAgICAgICAgICAgICAgICAgICBRdWlzcXVlIGV0IGhlbmRyZXJpdCBvZGlvLCB2aXZlcnJhIGVmZmljaXR1ciByaXN1cy4gTWF1cmlzIHRlbXB1cyBtaSB1dCBmcmluZ2lsbGEgcGxhY2VyYXQuIFZlc3RpYnVsdW0gc2FnaXR0aXMgcGVsbGVudGVzcXVlIG51bmMgbmVjIGNvbmd1ZS4gTWFlY2VuYXMgZXUgZW5pbSBzdXNjaXBpdCBhdWd1ZSBtYXhpbXVzIHZpdmVycmEuIEZ1c2NlIHRpbmNpZHVudCwgbmliaCBub24gZWxlaWZlbmQgcGxhY2VyYXQsIGxlY3R1cyBudW5jIGxhY2luaWEgbmlzaSwgYSBtYXhpbXVzIHB1cnVzIG1hdXJpcyB2ZWwgZHVpLiBGdXNjZSBpbiB1cm5hIHZlbCBkaWFtIGxvYm9ydGlzIHRlbXBvciBub24gc2VkIG5pc2kuIEV0aWFtIG1ldHVzIG9yY2ksIGNvbnZhbGxpcyBlZ2V0IHJob25jdXMgdmVsLCBjdXJzdXMgYSBtYXVyaXMuIFByb2luIG1heGltdXMgdmVsaXQgc2VkIHNlbXBlciBjb21tb2RvLiBNYWVjZW5hcyBzaXQgYW1ldCBsYW9yZWV0IGxlby4gTnVsbGEgZmFjaWxpc2kuIEludGVnZXIgZWdldCBtYXVyaXMgbWkuIE51bGxhIGRpY3R1bSBlcmF0IGVnZXQgbWkgbWF4aW11cyB2ZW5lbmF0aXMuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9tLXRhYj5cblxuICAgICAgICAgICAgPG0tdGFiIHRhYj1cIlRhYiAzXCI+XG4gICAgICAgICAgICAgICAgPHAgc3R5bGU9XCJtaW4taGVpZ2h0OiAyNTBweDsgYmFja2dyb3VuZDogIzNmNTFiNTsgY29sb3I6ICNmZmY7IHBhZGRpbmc6IDEwcHg7XCI+XG4gICAgICAgICAgICAgICAgICAgIFF1aXNxdWUgZXQgaGVuZHJlcml0IG9kaW8sIHZpdmVycmEgZWZmaWNpdHVyIHJpc3VzLiBNYXVyaXMgdGVtcHVzIG1pIHV0IGZyaW5naWxsYSBwbGFjZXJhdC4gVmVzdGlidWx1bSBzYWdpdHRpcyBwZWxsZW50ZXNxdWUgbnVuYyBuZWMgY29uZ3VlLiBNYWVjZW5hcyBldSBlbmltIHN1c2NpcGl0IGF1Z3VlIG1heGltdXMgdml2ZXJyYS4gRnVzY2UgdGluY2lkdW50LCBuaWJoIG5vbiBlbGVpZmVuZCBwbGFjZXJhdCwgbGVjdHVzIG51bmMgbGFjaW5pYSBuaXNpLCBhIG1heGltdXMgcHVydXMgbWF1cmlzIHZlbCBkdWkuIEZ1c2NlIGluIHVybmEgdmVsIGRpYW0gbG9ib3J0aXMgdGVtcG9yIG5vbiBzZWQgbmlzaS4gRXRpYW0gbWV0dXMgb3JjaSwgY29udmFsbGlzIGVnZXQgcmhvbmN1cyB2ZWwsIGN1cnN1cyBhIG1hdXJpcy4gUHJvaW4gbWF4aW11cyB2ZWxpdCBzZWQgc2VtcGVyIGNvbW1vZG8uIE1hZWNlbmFzIHNpdCBhbWV0IGxhb3JlZXQgbGVvLiBOdWxsYSBmYWNpbGlzaS4gSW50ZWdlciBlZ2V0IG1hdXJpcyBtaS4gTnVsbGEgZGljdHVtIGVyYXQgZWdldCBtaSBtYXhpbXVzIHZlbmVuYXRpcy5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L20tdGFiPlxuXG4gICAgICAgIDwvbS10YWJzPlxuXG4gICAgICAgIDxwcmUgdi1wcmU+XG4gICAgICAgICAgICA8Y29kZSBjbGFzcz1cImh0bWxcIj5cbiYjeDNDO3RlbXBsYXRlJiN4M0U7XG4gICAgICAgICYjeDNDO20tdGFicyB2LW1vZGVsPSYjeDIyO2N1cnJlbnRUdWImI3gyMjsgOm5vLXJpcHBsZS1lZmZlY3Q9JiN4MjI7dHJ1ZSYjeDIyOyA6YW5pbWF0aW9uPSYjeDIyO3RydWUmI3gyMjsgOmNvbnRlbnQtc3R5bGU9JiN4MjI7e2hlaWdodDogJiN4Mjc7MzAwcHgmI3gyNzt9JiN4MjI7JiN4M0U7XG4gICAgICAgICAgICAmI3gzQzttLXRhYiB0YWI9JiN4MjI7VGFiIDEmI3gyMjsmI3gzRTtcbiAgICAgICAgICAgICAgICAmI3gzQztwIHN0eWxlPSYjeDIyO21pbi1oZWlnaHQ6IDI1MHB4OyBiYWNrZ3JvdW5kOiAjZmFmYWZhOyBwYWRkaW5nOiAxMHB4OyYjeDIyOyYjeDNFO1xuICAgICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBTZWQgbWkgZG9sb3IsIG1vbGVzdGllIHV0IHBvcnR0aXRvciB2aXRhZSwgdml2ZXJyYSBhYyBsb3JlbS4mI3gzQzticiYjeDNFO1xuICAgICAgICAgICAgICAgICAgICBQZWxsZW50ZXNxdWUgZXUgbG9ib3J0aXMgZmVsaXMuIE51bGxhIGlkIHByZXRpdW0gYW50ZS4gQWxpcXVhbSB0dXJwaXMgZW5pbSwgaW1wZXJkaWV0IGVmZmljaXR1ciBtYXVyaXMgYSwgJiN4M0M7YnImI3gzRTtcbiAgICAgICAgICAgICAgICAgICAgdGVtcG9yIGxhY2luaWEgYW50ZS4gTmFtIHZlbCB2ZWxpdCBtZXR1cy4gSW50ZWdlciBudWxsYSB0dXJwaXMsIHRyaXN0aXF1ZSBub24gZHVpIGVnZXQsIG1hbGVzdWFkYSBibGFuZGl0IG5pc2kuJiN4M0M7YnImI3gzRTtcbiAgICAgICAgICAgICAgICAgICAgUGhhc2VsbHVzIGlkIHZvbHV0cGF0IG9yY2kuIEN1cmFiaXR1ciBtYWxlc3VhZGEgYXVndWUgZWZmaWNpdHVyIG1hc3NhIGNvbnNlcXVhdCBjb25zZXF1YXQuIENsYXNzIGFwdGVudCB0YWNpdGkgc29jaW9zcXVcbiAgICAgICAgICAgICAgICAgICAgYWQgbGl0b3JhIHRvcnF1ZW50IHBlciBjb251YmlhIG5vc3RyYSwgcGVyIGluY2VwdG9zIGhpbWVuYWVvcy5cblxuICAgICAgICAgICAgICAgICYjeDNDOy9wJiN4M0U7XG4gICAgICAgICAgICAmI3gzQzsvbS10YWImI3gzRTtcbiAgICAgICAgICAgICYjeDNDO20tdGFiIHRhYj0mI3gyMjtUYWIgMiYjeDIyOyYjeDNFO1xuICAgICAgICAgICAgICAgICYjeDNDO3Agc3R5bGU9JiN4MjI7bWluLWhlaWdodDogMjUwcHg7IGJhY2tncm91bmQ6ICMzMzM7IGNvbG9yOiAjZmZmOyBwYWRkaW5nOiAxMHB4OyYjeDIyOyYjeDNFO1xuICAgICAgICAgICAgICAgICAgICBRdWlzcXVlIGV0IGhlbmRyZXJpdCBvZGlvLCB2aXZlcnJhIGVmZmljaXR1ciByaXN1cy4gTWF1cmlzIHRlbXB1cyBtaSB1dCBmcmluZ2lsbGEgcGxhY2VyYXQuIFZlc3RpYnVsdW0gc2FnaXR0aXMgcGVsbGVudGVzcXVlIG51bmMgbmVjIGNvbmd1ZS4gTWFlY2VuYXMgZXUgZW5pbSBzdXNjaXBpdCBhdWd1ZSBtYXhpbXVzIHZpdmVycmEuIEZ1c2NlIHRpbmNpZHVudCwgbmliaCBub24gZWxlaWZlbmQgcGxhY2VyYXQsIGxlY3R1cyBudW5jIGxhY2luaWEgbmlzaSwgYSBtYXhpbXVzIHB1cnVzIG1hdXJpcyB2ZWwgZHVpLiBGdXNjZSBpbiB1cm5hIHZlbCBkaWFtIGxvYm9ydGlzIHRlbXBvciBub24gc2VkIG5pc2kuIEV0aWFtIG1ldHVzIG9yY2ksIGNvbnZhbGxpcyBlZ2V0IHJob25jdXMgdmVsLCBjdXJzdXMgYSBtYXVyaXMuIFByb2luIG1heGltdXMgdmVsaXQgc2VkIHNlbXBlciBjb21tb2RvLiBNYWVjZW5hcyBzaXQgYW1ldCBsYW9yZWV0IGxlby4gTnVsbGEgZmFjaWxpc2kuIEludGVnZXIgZWdldCBtYXVyaXMgbWkuIE51bGxhIGRpY3R1bSBlcmF0IGVnZXQgbWkgbWF4aW11cyB2ZW5lbmF0aXMuXG4gICAgICAgICAgICAgICAgJiN4M0M7L3AmI3gzRTtcbiAgICAgICAgICAgICYjeDNDOy9tLXRhYiYjeDNFO1xuXG4gICAgICAgICAgICAmI3gzQzttLXRhYiB0YWI9JiN4MjI7VGFiIDMmI3gyMjsmI3gzRTtcbiAgICAgICAgICAgICAgICAmI3gzQztwIHN0eWxlPSYjeDIyO21pbi1oZWlnaHQ6IDI1MHB4OyBiYWNrZ3JvdW5kOiAjM2Y1MWI1OyBjb2xvcjogI2ZmZjsgcGFkZGluZzogMTBweDsmI3gyMjsmI3gzRTtcbiAgICAgICAgICAgICAgICAgICAgUXVpc3F1ZSBldCBoZW5kcmVyaXQgb2Rpbywgdml2ZXJyYSBlZmZpY2l0dXIgcmlzdXMuIE1hdXJpcyB0ZW1wdXMgbWkgdXQgZnJpbmdpbGxhIHBsYWNlcmF0LiBWZXN0aWJ1bHVtIHNhZ2l0dGlzIHBlbGxlbnRlc3F1ZSBudW5jIG5lYyBjb25ndWUuIE1hZWNlbmFzIGV1IGVuaW0gc3VzY2lwaXQgYXVndWUgbWF4aW11cyB2aXZlcnJhLiBGdXNjZSB0aW5jaWR1bnQsIG5pYmggbm9uIGVsZWlmZW5kIHBsYWNlcmF0LCBsZWN0dXMgbnVuYyBsYWNpbmlhIG5pc2ksIGEgbWF4aW11cyBwdXJ1cyBtYXVyaXMgdmVsIGR1aS4gRnVzY2UgaW4gdXJuYSB2ZWwgZGlhbSBsb2JvcnRpcyB0ZW1wb3Igbm9uIHNlZCBuaXNpLiBFdGlhbSBtZXR1cyBvcmNpLCBjb252YWxsaXMgZWdldCByaG9uY3VzIHZlbCwgY3Vyc3VzIGEgbWF1cmlzLiBQcm9pbiBtYXhpbXVzIHZlbGl0IHNlZCBzZW1wZXIgY29tbW9kby4gTWFlY2VuYXMgc2l0IGFtZXQgbGFvcmVldCBsZW8uIE51bGxhIGZhY2lsaXNpLiBJbnRlZ2VyIGVnZXQgbWF1cmlzIG1pLiBOdWxsYSBkaWN0dW0gZXJhdCBlZ2V0IG1pIG1heGltdXMgdmVuZW5hdGlzLlxuICAgICAgICAgICAgICAgICYjeDNDOy9wJiN4M0U7XG4gICAgICAgICAgICAmI3gzQzsvbS10YWImI3gzRTtcblxuICAgICAgICAmI3gzQzsvbS10YWJzJiN4M0U7XG4gICAgJiN4M0M7L2RpdiYjeDNFO1xuJiN4M0M7L3RlbXBsYXRlJiN4M0U7XG5cbiYjeDNDO3NjcmlwdCYjeDNFO1xuICBleHBvcnQgZGVmYXVsdHtcbiAgICAgIGRhdGEoKXtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBjdXJyZW50VHViOiAmI3gyNztUYWIgMiYjeDI3O1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgfVxuJiN4M0M7L3NjcmlwdCYjeDNFO1xuXG4gICAgICAgICAgICA8L2NvZGU+XG4gICAgICAgIDwvcHJlPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdHtcbiAgICAgICAgZGF0YSgpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50VHViOiAndGFiLTEnLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRUdWIyOiAnVGFiIDInLFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gdGFicy52dWU/NmFlZGQwZTkiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygnbS10YWJzJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmN1cnJlbnRUdWIpLFxuICAgICAgZXhwcmVzc2lvbjogXCJjdXJyZW50VHViXCJcbiAgICB9XSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLmN1cnJlbnRUdWIpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmN1cnJlbnRUdWIgPSAkZXZlbnRcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnbS10YWInLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGFiXCI6IHtcbiAgICAgICAgdGl0bGU6ICdKb24nLFxuICAgICAgICBpZDogJ3RhYi0xJ1xuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdwJywgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgSGVsbG8gMVxcbiAgICAgICAgICAgICAgICBcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS10YWInLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGFiXCI6IHtcbiAgICAgICAgdGl0bGU6ICdUb20nLFxuICAgICAgICBpZDogJ3RhYi0yJ1xuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdwJywgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgSGVsbG8gMlxcbiAgICAgICAgICAgICAgICBcIildKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF92bS5fbSgwKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnbS10YWJzJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmN1cnJlbnRUdWIyKSxcbiAgICAgIGV4cHJlc3Npb246IFwiY3VycmVudFR1YjJcIlxuICAgIH1dLFxuICAgIGF0dHJzOiB7XG4gICAgICBcIm5vLXJpcHBsZS1lZmZlY3RcIjogdHJ1ZSxcbiAgICAgIFwiYW5pbWF0aW9uXCI6IHRydWUsXG4gICAgICBcImNvbnRlbnQtc3R5bGVcIjoge1xuICAgICAgICBoZWlnaHQ6ICczMDBweCdcbiAgICAgIH1cbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0uY3VycmVudFR1YjIpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmN1cnJlbnRUdWIyID0gJGV2ZW50XG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ20tdGFiJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRhYlwiOiBcIlRhYiAxXCJcbiAgICB9XG4gIH0sIFtfYygncCcsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJtaW4taGVpZ2h0XCI6IFwiMjUwcHhcIixcbiAgICAgIFwiYmFja2dyb3VuZFwiOiBcIiNmYWZhZmFcIixcbiAgICAgIFwicGFkZGluZ1wiOiBcIjEwcHhcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gU2VkIG1pIGRvbG9yLCBtb2xlc3RpZSB1dCBwb3J0dGl0b3Igdml0YWUsIHZpdmVycmEgYWMgbG9yZW0uXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICBQZWxsZW50ZXNxdWUgZXUgbG9ib3J0aXMgZmVsaXMuIE51bGxhIGlkIHByZXRpdW0gYW50ZS4gQWxpcXVhbSB0dXJwaXMgZW5pbSwgaW1wZXJkaWV0IGVmZmljaXR1ciBtYXVyaXMgYSwgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICB0ZW1wb3IgbGFjaW5pYSBhbnRlLiBOYW0gdmVsIHZlbGl0IG1ldHVzLiBJbnRlZ2VyIG51bGxhIHR1cnBpcywgdHJpc3RpcXVlIG5vbiBkdWkgZWdldCwgbWFsZXN1YWRhIGJsYW5kaXQgbmlzaS5cIiksIF9jKCdicicpLCBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIFBoYXNlbGx1cyBpZCB2b2x1dHBhdCBvcmNpLiBDdXJhYml0dXIgbWFsZXN1YWRhIGF1Z3VlIGVmZmljaXR1ciBtYXNzYSBjb25zZXF1YXQgY29uc2VxdWF0LiBDbGFzcyBhcHRlbnQgdGFjaXRpIHNvY2lvc3F1XFxuICAgICAgICAgICAgICAgICAgICBhZCBsaXRvcmEgdG9ycXVlbnQgcGVyIGNvbnViaWEgbm9zdHJhLCBwZXIgaW5jZXB0b3MgaGltZW5hZW9zLlxcblxcbiAgICAgICAgICAgICAgICBcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS10YWInLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGFiXCI6IFwiVGFiIDJcIlxuICAgIH1cbiAgfSwgW19jKCdwJywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcIm1pbi1oZWlnaHRcIjogXCIyNTBweFwiLFxuICAgICAgXCJiYWNrZ3JvdW5kXCI6IFwiIzMzM1wiLFxuICAgICAgXCJjb2xvclwiOiBcIiNmZmZcIixcbiAgICAgIFwicGFkZGluZ1wiOiBcIjEwcHhcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgUXVpc3F1ZSBldCBoZW5kcmVyaXQgb2Rpbywgdml2ZXJyYSBlZmZpY2l0dXIgcmlzdXMuIE1hdXJpcyB0ZW1wdXMgbWkgdXQgZnJpbmdpbGxhIHBsYWNlcmF0LiBWZXN0aWJ1bHVtIHNhZ2l0dGlzIHBlbGxlbnRlc3F1ZSBudW5jIG5lYyBjb25ndWUuIE1hZWNlbmFzIGV1IGVuaW0gc3VzY2lwaXQgYXVndWUgbWF4aW11cyB2aXZlcnJhLiBGdXNjZSB0aW5jaWR1bnQsIG5pYmggbm9uIGVsZWlmZW5kIHBsYWNlcmF0LCBsZWN0dXMgbnVuYyBsYWNpbmlhIG5pc2ksIGEgbWF4aW11cyBwdXJ1cyBtYXVyaXMgdmVsIGR1aS4gRnVzY2UgaW4gdXJuYSB2ZWwgZGlhbSBsb2JvcnRpcyB0ZW1wb3Igbm9uIHNlZCBuaXNpLiBFdGlhbSBtZXR1cyBvcmNpLCBjb252YWxsaXMgZWdldCByaG9uY3VzIHZlbCwgY3Vyc3VzIGEgbWF1cmlzLiBQcm9pbiBtYXhpbXVzIHZlbGl0IHNlZCBzZW1wZXIgY29tbW9kby4gTWFlY2VuYXMgc2l0IGFtZXQgbGFvcmVldCBsZW8uIE51bGxhIGZhY2lsaXNpLiBJbnRlZ2VyIGVnZXQgbWF1cmlzIG1pLiBOdWxsYSBkaWN0dW0gZXJhdCBlZ2V0IG1pIG1heGltdXMgdmVuZW5hdGlzLlxcbiAgICAgICAgICAgICAgICBcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS10YWInLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGFiXCI6IFwiVGFiIDNcIlxuICAgIH1cbiAgfSwgW19jKCdwJywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcIm1pbi1oZWlnaHRcIjogXCIyNTBweFwiLFxuICAgICAgXCJiYWNrZ3JvdW5kXCI6IFwiIzNmNTFiNVwiLFxuICAgICAgXCJjb2xvclwiOiBcIiNmZmZcIixcbiAgICAgIFwicGFkZGluZ1wiOiBcIjEwcHhcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgUXVpc3F1ZSBldCBoZW5kcmVyaXQgb2Rpbywgdml2ZXJyYSBlZmZpY2l0dXIgcmlzdXMuIE1hdXJpcyB0ZW1wdXMgbWkgdXQgZnJpbmdpbGxhIHBsYWNlcmF0LiBWZXN0aWJ1bHVtIHNhZ2l0dGlzIHBlbGxlbnRlc3F1ZSBudW5jIG5lYyBjb25ndWUuIE1hZWNlbmFzIGV1IGVuaW0gc3VzY2lwaXQgYXVndWUgbWF4aW11cyB2aXZlcnJhLiBGdXNjZSB0aW5jaWR1bnQsIG5pYmggbm9uIGVsZWlmZW5kIHBsYWNlcmF0LCBsZWN0dXMgbnVuYyBsYWNpbmlhIG5pc2ksIGEgbWF4aW11cyBwdXJ1cyBtYXVyaXMgdmVsIGR1aS4gRnVzY2UgaW4gdXJuYSB2ZWwgZGlhbSBsb2JvcnRpcyB0ZW1wb3Igbm9uIHNlZCBuaXNpLiBFdGlhbSBtZXR1cyBvcmNpLCBjb252YWxsaXMgZWdldCByaG9uY3VzIHZlbCwgY3Vyc3VzIGEgbWF1cmlzLiBQcm9pbiBtYXhpbXVzIHZlbGl0IHNlZCBzZW1wZXIgY29tbW9kby4gTWFlY2VuYXMgc2l0IGFtZXQgbGFvcmVldCBsZW8uIE51bGxhIGZhY2lsaXNpLiBJbnRlZ2VyIGVnZXQgbWF1cmlzIG1pLiBOdWxsYSBkaWN0dW0gZXJhdCBlZ2V0IG1pIG1heGltdXMgdmVuZW5hdGlzLlxcbiAgICAgICAgICAgICAgICBcIildKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF92bS5fbSgxKV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygncHJlJywge1xuICAgIHByZTogdHJ1ZVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgXCIpLCBfYygnY29kZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJjbGFzc1wiOiBcImh0bWxcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbjx0ZW1wbGF0ZT5cXG4gICAgPGRpdj5cXG4gICAgICAgIDxtLXRhYnMgdi1tb2RlbD1cXFwiY3VycmVudFR1YlxcXCI+XFxuICAgICAgICAgICAgPG0tdGFiIDp0YWI9XFxcInsgdGl0bGU6ICdKb24nLCBpZDogJ3RhYi0xJyB9XFxcIj5cXG4gICAgICAgICAgICAgICAgPHA+XFxuICAgICAgICAgICAgICAgICAgICBIZWxsbyAxXFxuICAgICAgICAgICAgICAgIDwvcD5cXG4gICAgICAgICAgICA8L20tdGFiPlxcbiAgICAgICAgICAgIDxtLXRhYiA6dGFiPVxcXCJ7IHRpdGxlOiAnVG9tJywgaWQ6ICd0YWItMicgfVxcXCI+XFxuICAgICAgICAgICAgICAgIDxwPlxcbiAgICAgICAgICAgICAgICAgICAgSGVsbG8gMlxcbiAgICAgICAgICAgICAgICA8L3A+XFxuICAgICAgICAgICAgPC9tLXRhYj5cXG5cXG4gICAgICAgIDwvbS10YWJzPlxcbiAgICA8L2Rpdj5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuICAgIGV4cG9ydCBkZWZhdWx0e1xcbiAgICAgICAgZGF0YSgpe1xcbiAgICAgICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgICAgIGN1cnJlbnRUdWI6ICd0YWItMScsXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuPC9zY3JpcHQ+XFxuICAgICAgICAgICAgXCIpXSldKV0pXG59LGZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ3ByZScsIHtcbiAgICBwcmU6IHRydWVcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgIFwiKSwgX2MoJ2NvZGUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiY2xhc3NcIjogXCJodG1sXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG48dGVtcGxhdGU+XFxuICAgICAgICA8bS10YWJzIHYtbW9kZWw9XFxcImN1cnJlbnRUdWJcXFwiIDpuby1yaXBwbGUtZWZmZWN0PVxcXCJ0cnVlXFxcIiA6YW5pbWF0aW9uPVxcXCJ0cnVlXFxcIiA6Y29udGVudC1zdHlsZT1cXFwie2hlaWdodDogJzMwMHB4J31cXFwiPlxcbiAgICAgICAgICAgIDxtLXRhYiB0YWI9XFxcIlRhYiAxXFxcIj5cXG4gICAgICAgICAgICAgICAgPHAgc3R5bGU9XFxcIm1pbi1oZWlnaHQ6IDI1MHB4OyBiYWNrZ3JvdW5kOiAjZmFmYWZhOyBwYWRkaW5nOiAxMHB4O1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBTZWQgbWkgZG9sb3IsIG1vbGVzdGllIHV0IHBvcnR0aXRvciB2aXRhZSwgdml2ZXJyYSBhYyBsb3JlbS48YnI+XFxuICAgICAgICAgICAgICAgICAgICBQZWxsZW50ZXNxdWUgZXUgbG9ib3J0aXMgZmVsaXMuIE51bGxhIGlkIHByZXRpdW0gYW50ZS4gQWxpcXVhbSB0dXJwaXMgZW5pbSwgaW1wZXJkaWV0IGVmZmljaXR1ciBtYXVyaXMgYSwgPGJyPlxcbiAgICAgICAgICAgICAgICAgICAgdGVtcG9yIGxhY2luaWEgYW50ZS4gTmFtIHZlbCB2ZWxpdCBtZXR1cy4gSW50ZWdlciBudWxsYSB0dXJwaXMsIHRyaXN0aXF1ZSBub24gZHVpIGVnZXQsIG1hbGVzdWFkYSBibGFuZGl0IG5pc2kuPGJyPlxcbiAgICAgICAgICAgICAgICAgICAgUGhhc2VsbHVzIGlkIHZvbHV0cGF0IG9yY2kuIEN1cmFiaXR1ciBtYWxlc3VhZGEgYXVndWUgZWZmaWNpdHVyIG1hc3NhIGNvbnNlcXVhdCBjb25zZXF1YXQuIENsYXNzIGFwdGVudCB0YWNpdGkgc29jaW9zcXVcXG4gICAgICAgICAgICAgICAgICAgIGFkIGxpdG9yYSB0b3JxdWVudCBwZXIgY29udWJpYSBub3N0cmEsIHBlciBpbmNlcHRvcyBoaW1lbmFlb3MuXFxuXFxuICAgICAgICAgICAgICAgIDwvcD5cXG4gICAgICAgICAgICA8L20tdGFiPlxcbiAgICAgICAgICAgIDxtLXRhYiB0YWI9XFxcIlRhYiAyXFxcIj5cXG4gICAgICAgICAgICAgICAgPHAgc3R5bGU9XFxcIm1pbi1oZWlnaHQ6IDI1MHB4OyBiYWNrZ3JvdW5kOiAjMzMzOyBjb2xvcjogI2ZmZjsgcGFkZGluZzogMTBweDtcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgUXVpc3F1ZSBldCBoZW5kcmVyaXQgb2Rpbywgdml2ZXJyYSBlZmZpY2l0dXIgcmlzdXMuIE1hdXJpcyB0ZW1wdXMgbWkgdXQgZnJpbmdpbGxhIHBsYWNlcmF0LiBWZXN0aWJ1bHVtIHNhZ2l0dGlzIHBlbGxlbnRlc3F1ZSBudW5jIG5lYyBjb25ndWUuIE1hZWNlbmFzIGV1IGVuaW0gc3VzY2lwaXQgYXVndWUgbWF4aW11cyB2aXZlcnJhLiBGdXNjZSB0aW5jaWR1bnQsIG5pYmggbm9uIGVsZWlmZW5kIHBsYWNlcmF0LCBsZWN0dXMgbnVuYyBsYWNpbmlhIG5pc2ksIGEgbWF4aW11cyBwdXJ1cyBtYXVyaXMgdmVsIGR1aS4gRnVzY2UgaW4gdXJuYSB2ZWwgZGlhbSBsb2JvcnRpcyB0ZW1wb3Igbm9uIHNlZCBuaXNpLiBFdGlhbSBtZXR1cyBvcmNpLCBjb252YWxsaXMgZWdldCByaG9uY3VzIHZlbCwgY3Vyc3VzIGEgbWF1cmlzLiBQcm9pbiBtYXhpbXVzIHZlbGl0IHNlZCBzZW1wZXIgY29tbW9kby4gTWFlY2VuYXMgc2l0IGFtZXQgbGFvcmVldCBsZW8uIE51bGxhIGZhY2lsaXNpLiBJbnRlZ2VyIGVnZXQgbWF1cmlzIG1pLiBOdWxsYSBkaWN0dW0gZXJhdCBlZ2V0IG1pIG1heGltdXMgdmVuZW5hdGlzLlxcbiAgICAgICAgICAgICAgICA8L3A+XFxuICAgICAgICAgICAgPC9tLXRhYj5cXG5cXG4gICAgICAgICAgICA8bS10YWIgdGFiPVxcXCJUYWIgM1xcXCI+XFxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPVxcXCJtaW4taGVpZ2h0OiAyNTBweDsgYmFja2dyb3VuZDogIzNmNTFiNTsgY29sb3I6ICNmZmY7IHBhZGRpbmc6IDEwcHg7XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIFF1aXNxdWUgZXQgaGVuZHJlcml0IG9kaW8sIHZpdmVycmEgZWZmaWNpdHVyIHJpc3VzLiBNYXVyaXMgdGVtcHVzIG1pIHV0IGZyaW5naWxsYSBwbGFjZXJhdC4gVmVzdGlidWx1bSBzYWdpdHRpcyBwZWxsZW50ZXNxdWUgbnVuYyBuZWMgY29uZ3VlLiBNYWVjZW5hcyBldSBlbmltIHN1c2NpcGl0IGF1Z3VlIG1heGltdXMgdml2ZXJyYS4gRnVzY2UgdGluY2lkdW50LCBuaWJoIG5vbiBlbGVpZmVuZCBwbGFjZXJhdCwgbGVjdHVzIG51bmMgbGFjaW5pYSBuaXNpLCBhIG1heGltdXMgcHVydXMgbWF1cmlzIHZlbCBkdWkuIEZ1c2NlIGluIHVybmEgdmVsIGRpYW0gbG9ib3J0aXMgdGVtcG9yIG5vbiBzZWQgbmlzaS4gRXRpYW0gbWV0dXMgb3JjaSwgY29udmFsbGlzIGVnZXQgcmhvbmN1cyB2ZWwsIGN1cnN1cyBhIG1hdXJpcy4gUHJvaW4gbWF4aW11cyB2ZWxpdCBzZWQgc2VtcGVyIGNvbW1vZG8uIE1hZWNlbmFzIHNpdCBhbWV0IGxhb3JlZXQgbGVvLiBOdWxsYSBmYWNpbGlzaS4gSW50ZWdlciBlZ2V0IG1hdXJpcyBtaS4gTnVsbGEgZGljdHVtIGVyYXQgZWdldCBtaSBtYXhpbXVzIHZlbmVuYXRpcy5cXG4gICAgICAgICAgICAgICAgPC9wPlxcbiAgICAgICAgICAgIDwvbS10YWI+XFxuXFxuICAgICAgICA8L20tdGFicz5cXG4gICAgPC9kaXY+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcbiAgZXhwb3J0IGRlZmF1bHR7XFxuICAgICAgZGF0YSgpe1xcbiAgICAgICAgICByZXR1cm4ge1xcbiAgICAgICAgICAgICAgY3VycmVudFR1YjogJ1RhYiAyJ1xcbiAgICAgICAgICB9XFxuICAgICAgfVxcbiAgfVxcbjwvc2NyaXB0PlxcblxcbiAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCJcXG4gICAgICAgIFwiKV0pXG59XX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMTAxMGRkYzBcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTEwMTBkZGMwIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy90YWJzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vdG9vbHRpcHMudnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi01MDFjODA3MiF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi90b29sdGlwcy52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiL1VzZXJzL296L3NyYy9tYXRlcmlhbC1jb21wb25lbnRzL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL3Rvb2x0aXBzLnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNTAxYzgwNzJcIiwgX192dWVfb3B0aW9uc19fKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNTAxYzgwNzJcIiwgX192dWVfb3B0aW9uc19fKVxuICB9XG59KSgpfVxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSB0b29sdGlwcy52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy90b29sdGlwcy52dWUiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBzdHlsZT1cIm1hcmdpbjogMTAwcHhcIj5cbiAgICAgICAgPG0tdG9vbHRpcCB0YXJnZXQ9XCJhZGQtYnV0dG9uXCI+SGVsbG8gV29ybGQ8L20tdG9vbHRpcD5cbiAgICAgICAgPG0tYnV0dG9uIHJhaXNlZCBwcmltYXJ5IHJpcHBsZSBpZD1cImFkZC1idXR0b25cIj5BZGQ8L20tYnV0dG9uPlxuXG4gICAgICAgIDxocj5cblxuICAgICAgICA8bS10b29sdGlwIHRhcmdldD1cImFkZFwiIGxhcmdlPlVwbG9hZCA8c3Ryb25nPmZpbGUuemlwPC9zdHJvbmc+PC9tLXRvb2x0aXA+XG4gICAgICAgIDxtLWJ1dHRvbiBpY29uPVwiYWRkXCIgaWQ9XCJhZGRcIiByYWlzZWQgYWNjZW50PjwvbS1idXR0b24+XG5cbiAgICAgICAgPGhyPlxuXG4gICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgIDxtLXRvb2x0aXAgdGFyZ2V0PVwibGVmdFwiIGxlZnQ+TGVmdCB0b29sdGlwZTwvbS10b29sdGlwPlxuICAgICAgICAgICAgICAgICAgIDxtLWJ1dHRvbiByYWlzZWQgcHJpbWFyeSByaXBwbGUgaWQ9XCJsZWZ0XCI+TGVmdDwvbS1idXR0b24+XG4gICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICA8bS10b29sdGlwIHRhcmdldD1cInJpZ2h0XCIgcmlnaHQ+UmlnaHQgdG9vbHRpcGU8L20tdG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgPG0tYnV0dG9uIHJhaXNlZCBwcmltYXJ5IHJpcHBsZSBpZD1cInJpZ2h0XCI+UmlnaHQ8L20tYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgPG0tdG9vbHRpcCB0YXJnZXQ9XCJ0b3BcIiB0b3A+VG9wIHRvb2x0aXBlPC9tLXRvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgIDxtLWJ1dHRvbiByYWlzZWQgcHJpbWFyeSByaXBwbGUgaWQ9XCJ0b3BcIj5Ub3A8L20tYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgPG0tdG9vbHRpcCB0YXJnZXQ9XCJib3R0b21cIiBib3R0b20+Qm90dG9tIHRvb2x0aXBlPC9tLXRvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgIDxtLWJ1dHRvbiByYWlzZWQgcHJpbWFyeSByaXBwbGUgaWQ9XCJib3R0b21cIj5Cb3R0b208L20tYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXY+Q29kZTo8L2Rpdj5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBjb2xzPVwiMTAwXCIgcm93cz1cIjZcIiA6dmFsdWU9XCJleGFtcGxlc1wiPjwvdGV4dGFyZWE+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdHtcbiAgICAgICAgZGF0YSgpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBleGFtcGxlczogYFxuICAgICAgICAgICAgICAgICAgICA8bS10b29sdGlwIHRhcmdldD1cImFkZC1idXR0b25cIj5IZWxsbyBXb3JsZDwvbS10b29sdGlwPlxuICAgICAgICAgICAgICAgICAgICA8bS1idXR0b24gcmFpc2VkIHByaW1hcnkgcmlwcGxlIGlkPVwiYWRkLWJ1dHRvblwiPkFkZDwvbS1idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgPG0tdG9vbHRpcCB0YXJnZXQ9XCJhZGRcIiBsYXJnZT5VcGxvYWQgPHN0cm9uZz5maWxlLnppcDwvc3Ryb25nPjwvbS10b29sdGlwPlxuICAgICAgICAgICAgICAgICAgICA8bS1idXR0b24gaWNvbj1cImFkZFwiIGlkPVwiYWRkXCIgcmFpc2VkIGFjY2VudD48L20tYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgIDxtLXRvb2x0aXAgdGFyZ2V0PVwibGVmdFwiIGxlZnQ+TGVmdCB0b29sdGlwZTwvbS10b29sdGlwPlxuICAgICAgICAgICAgICAgICAgICA8bS1idXR0b24gcmFpc2VkIHByaW1hcnkgcmlwcGxlIGlkPVwibGVmdFwiPkxlZnQ8L20tYnV0dG9uPlxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHRvb2x0aXBzLnZ1ZT8xNzY0YWFjYyIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcIm1hcmdpblwiOiBcIjEwMHB4XCJcbiAgICB9XG4gIH0sIFtfYygnbS10b29sdGlwJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRhcmdldFwiOiBcImFkZC1idXR0b25cIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkhlbGxvIFdvcmxkXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtLWJ1dHRvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJyYWlzZWRcIjogXCJcIixcbiAgICAgIFwicHJpbWFyeVwiOiBcIlwiLFxuICAgICAgXCJyaXBwbGVcIjogXCJcIixcbiAgICAgIFwiaWRcIjogXCJhZGQtYnV0dG9uXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJBZGRcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2hyJyksIF92bS5fdihcIiBcIiksIF9jKCdtLXRvb2x0aXAnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGFyZ2V0XCI6IFwiYWRkXCIsXG4gICAgICBcImxhcmdlXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJVcGxvYWQgXCIpLCBfYygnc3Ryb25nJywgW192bS5fdihcImZpbGUuemlwXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tYnV0dG9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImljb25cIjogXCJhZGRcIixcbiAgICAgIFwiaWRcIjogXCJhZGRcIixcbiAgICAgIFwicmFpc2VkXCI6IFwiXCIsXG4gICAgICBcImFjY2VudFwiOiBcIlwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2hyJyksIF92bS5fdihcIiBcIiksIF9jKCd1bCcsIFtfYygnbGknLCBbX2MoJ3AnLCBbX2MoJ20tdG9vbHRpcCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0YXJnZXRcIjogXCJsZWZ0XCIsXG4gICAgICBcImxlZnRcIjogXCJcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkxlZnQgdG9vbHRpcGVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tYnV0dG9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInJhaXNlZFwiOiBcIlwiLFxuICAgICAgXCJwcmltYXJ5XCI6IFwiXCIsXG4gICAgICBcInJpcHBsZVwiOiBcIlwiLFxuICAgICAgXCJpZFwiOiBcImxlZnRcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkxlZnRcIildKV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdsaScsIFtfYygncCcsIFtfYygnbS10b29sdGlwJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRhcmdldFwiOiBcInJpZ2h0XCIsXG4gICAgICBcInJpZ2h0XCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJSaWdodCB0b29sdGlwZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS1idXR0b24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwicmFpc2VkXCI6IFwiXCIsXG4gICAgICBcInByaW1hcnlcIjogXCJcIixcbiAgICAgIFwicmlwcGxlXCI6IFwiXCIsXG4gICAgICBcImlkXCI6IFwicmlnaHRcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlJpZ2h0XCIpXSldLCAxKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbGknLCBbX2MoJ3AnLCBbX2MoJ20tdG9vbHRpcCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0YXJnZXRcIjogXCJ0b3BcIixcbiAgICAgIFwidG9wXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJUb3AgdG9vbHRpcGVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tYnV0dG9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInJhaXNlZFwiOiBcIlwiLFxuICAgICAgXCJwcmltYXJ5XCI6IFwiXCIsXG4gICAgICBcInJpcHBsZVwiOiBcIlwiLFxuICAgICAgXCJpZFwiOiBcInRvcFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiVG9wXCIpXSldLCAxKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbGknLCBbX2MoJ3AnLCBbX2MoJ20tdG9vbHRpcCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0YXJnZXRcIjogXCJib3R0b21cIixcbiAgICAgIFwiYm90dG9tXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJCb3R0b20gdG9vbHRpcGVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tYnV0dG9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInJhaXNlZFwiOiBcIlwiLFxuICAgICAgXCJwcmltYXJ5XCI6IFwiXCIsXG4gICAgICBcInJpcHBsZVwiOiBcIlwiLFxuICAgICAgXCJpZFwiOiBcImJvdHRvbVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiQm90dG9tXCIpXSldLCAxKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCBbX2MoJ2RpdicsIFtfdm0uX3YoXCJDb2RlOlwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndGV4dGFyZWEnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiY29sc1wiOiBcIjEwMFwiLFxuICAgICAgXCJyb3dzXCI6IFwiNlwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0uZXhhbXBsZXNcbiAgICB9XG4gIH0pXSldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi01MDFjODA3MlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNTAxYzgwNzIhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL3Rvb2x0aXBzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vdGFibGUudnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0wNDIyMDJjOCF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi90YWJsZS52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiL1VzZXJzL296L3NyYy9tYXRlcmlhbC1jb21wb25lbnRzL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL3RhYmxlLnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMDQyMjAyYzhcIiwgX192dWVfb3B0aW9uc19fKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMDQyMjAyYzhcIiwgX192dWVfb3B0aW9uc19fKVxuICB9XG59KSgpfVxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSB0YWJsZS52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy90YWJsZS52dWUiLCI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPGgzPlRhYmxlPC9oMz5cblxuICAgICAgICA8cCBzdHlsZT1cImZsb2F0OiBsZWZ0O1wiPlxuICAgICAgICAgICAgPG0tdGFibGUgQHNlbGVjdD1cIm9uU2VsZWN0XCI+XG4gICAgICAgICAgICAgICAgPG0tdGFibGUtaGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPG0tdGFibGUtcm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgPG0tdGFibGUtaCBudW1lcmljPklkPC9tLXRhYmxlLWg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bS10YWJsZS1oPkVtYWlsPC9tLXRhYmxlLWg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bS10YWJsZS1oPk5hbWU8L20tdGFibGUtaD5cbiAgICAgICAgICAgICAgICAgICAgPC9tLXRhYmxlLXJvdz5cbiAgICAgICAgICAgICAgICA8L20tdGFibGUtaGVhZD5cblxuXG4gICAgICAgICAgICAgICAgPG0tdGFibGUtYm9keT5cbiAgICAgICAgICAgICAgICAgICAgPG0tdGFibGUtcm93IHYtZm9yPVwidXNlciBpbiB0ZXN0RGF0YVNldFwiIHNlbGVjdGlvbiA6bS1pdGVtPVwidXNlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG0tdGFibGUtY2VsbCBudW1lcmljPnt7dXNlci5pZH19PC9tLXRhYmxlLWNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bS10YWJsZS1jZWxsIDp0b29sdGlwPVwiJ0UtbWFpbDogJyt1c2VyLmVtYWlsXCIgPnt7dXNlci5lbWFpbH19PC9tLXRhYmxlLWNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bS10YWJsZS1jZWxsPnt7dXNlci5uYW1lfX08L20tdGFibGUtY2VsbD5cbiAgICAgICAgICAgICAgICAgICAgPC9tLXRhYmxlLXJvdz5cbiAgICAgICAgICAgICAgICA8L20tdGFibGUtYm9keT5cbiAgICAgICAgICAgIDwvbS10YWJsZT5cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxkaXYgc3R5bGU9XCJmbG9hdDogbGVmdDsgcGFkZGluZy1sZWZ0OiAyMHB4OyB3aWR0aDogMzAwcHg7XCI+XG4gICAgICAgICAgICA8ZGl2PjxiPlNlbGVjdGVkIEl0ZW1zOjwvYj48L2Rpdj5cbiAgICAgICAgICAgIDxwIHYtZm9yPVwicyBpbiBzZWxcIj57e3MuaWR9fSwge3tzLmVtYWlsfX0sIHt7cy5uYW1lfX08L3A+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgc3R5bGU9XCJmbG9hdDogbGVmdDsgcGFkZGluZy1sZWZ0OiAyMHB4O1wiPlxuICAgICAgICAgICAgPGRpdj5Db2RlOjwvZGl2PlxuICAgICAgICAgICAgPHRleHRhcmVhIGNvbHM9XCIxMDBcIiByb3dzPVwiMjBcIiA6dmFsdWU9XCJleGFtcGxlc1wiPjwvdGV4dGFyZWE+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgc3R5bGU9XCJjbGVhcjogYm90aDtcIj48L2Rpdj5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGg0PlN0YXRpYyBUYWJsZTwvaDQ+XG5cbiAgICAgICAgICAgIDxtLXRhYmxlPlxuICAgICAgICAgICAgICAgIDxtLXRhYmxlLWhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDxtLXRhYmxlLXJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtLXRhYmxlLWggbnVtZXJpYz5JZDwvbS10YWJsZS1oPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG0tdGFibGUtaD5FbWFpbDwvbS10YWJsZS1oPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG0tdGFibGUtaD5OYW1lPC9tLXRhYmxlLWg+XG4gICAgICAgICAgICAgICAgICAgIDwvbS10YWJsZS1yb3c+XG4gICAgICAgICAgICAgICAgPC9tLXRhYmxlLWhlYWQ+XG5cblxuICAgICAgICAgICAgICAgIDxtLXRhYmxlLWJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDxtLXRhYmxlLXJvdyB2LWZvcj1cInVzZXIgaW4gdGVzdERhdGFTZXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtLXRhYmxlLWNlbGwgbnVtZXJpYz57e3VzZXIuaWR9fTwvbS10YWJsZS1jZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG0tdGFibGUtY2VsbD57e3VzZXIuZW1haWx9fTwvbS10YWJsZS1jZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG0tdGFibGUtY2VsbD57e3VzZXIubmFtZX19PC9tLXRhYmxlLWNlbGw+XG4gICAgICAgICAgICAgICAgICAgIDwvbS10YWJsZS1yb3c+XG4gICAgICAgICAgICAgICAgPC9tLXRhYmxlLWJvZHk+XG4gICAgICAgICAgICA8L20tdGFibGU+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBjcmVhdGVkKCkge1xuICAgICAgICAgICAgdGhpcy4kaHR0cC5nZXQoJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2VycycpXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudGVzdERhdGFTZXQgPSByZXMuZGF0YTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIG9uU2VsZWN0OiBmdW5jdGlvbihpdGVtcykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsID0gaXRlbXM7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHNlbDoge30sXG4gICAgICAgICAgICAgICAgdGVzdERhdGFTZXQ6IFtdLFxuICAgICAgICAgICAgICAgIGV4YW1wbGVzOiBgXG4gICAgICAgICAgICAgICAgICAgIDxtLXRhYmxlIEBzZWxlY3Q9XCJvblNlbGVjdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG0tdGFibGUtaGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bS10YWJsZS1yb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtLXRhYmxlLWggbnVtZXJpYz5JZDwvbS10YWJsZS1oPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bS10YWJsZS1oPkVtYWlsPC9tLXRhYmxlLWg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtLXRhYmxlLWg+TmFtZTwvbS10YWJsZS1oPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbS10YWJsZS1yb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L20tdGFibGUtaGVhZD5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8bS10YWJsZS1ib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtLXRhYmxlLXJvdyB2LWZvcj1cInVzZXIgaW4gdGVzdERhdGFTZXRcIiBzZWxlY3Rpb24gOm0taXRlbT1cInVzZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG0tdGFibGUtY2VsbCBudW1lcmljPnt7dXNlci5pZH19PC9tLXRhYmxlLWNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtLXRhYmxlLWNlbGwgOnRvb2x0aXA9XCInRS1tYWlsOiAnK3VzZXIuZW1haWxcIiA+e3t1c2VyLmVtYWlsfX08L20tdGFibGUtY2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG0tdGFibGUtY2VsbD57e3VzZXIubmFtZX19PC9tLXRhYmxlLWNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tLXRhYmxlLXJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbS10YWJsZS1ib2R5PlxuICAgICAgICAgICAgICAgICAgICA8L20tdGFibGU+XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gdGFibGUudnVlPzcyZmI1M2YyIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ2gzJywgW192bS5fdihcIlRhYmxlXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdwJywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcImZsb2F0XCI6IFwibGVmdFwiXG4gICAgfVxuICB9LCBbX2MoJ20tdGFibGUnLCB7XG4gICAgb246IHtcbiAgICAgIFwic2VsZWN0XCI6IF92bS5vblNlbGVjdFxuICAgIH1cbiAgfSwgW19jKCdtLXRhYmxlLWhlYWQnLCBbX2MoJ20tdGFibGUtcm93JywgW19jKCdtLXRhYmxlLWgnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibnVtZXJpY1wiOiBcIlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiSWRcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tdGFibGUtaCcsIFtfdm0uX3YoXCJFbWFpbFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS10YWJsZS1oJywgW192bS5fdihcIk5hbWVcIildKV0sIDEpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdtLXRhYmxlLWJvZHknLCBfdm0uX2woKF92bS50ZXN0RGF0YVNldCksIGZ1bmN0aW9uKHVzZXIpIHtcbiAgICByZXR1cm4gX2MoJ20tdGFibGUtcm93Jywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJzZWxlY3Rpb25cIjogXCJcIixcbiAgICAgICAgXCJtLWl0ZW1cIjogdXNlclxuICAgICAgfVxuICAgIH0sIFtfYygnbS10YWJsZS1jZWxsJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJudW1lcmljXCI6IFwiXCJcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KF92bS5fcyh1c2VyLmlkKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tdGFibGUtY2VsbCcsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwidG9vbHRpcFwiOiAnRS1tYWlsOiAnICsgdXNlci5lbWFpbFxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoX3ZtLl9zKHVzZXIuZW1haWwpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS10YWJsZS1jZWxsJywgW192bS5fdihfdm0uX3ModXNlci5uYW1lKSldKV0sIDEpXG4gIH0pKV0sIDEpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwiZmxvYXRcIjogXCJsZWZ0XCIsXG4gICAgICBcInBhZGRpbmctbGVmdFwiOiBcIjIwcHhcIixcbiAgICAgIFwid2lkdGhcIjogXCIzMDBweFwiXG4gICAgfVxuICB9LCBbX3ZtLl9tKDApLCBfdm0uX3YoXCIgXCIpLCBfdm0uX2woKF92bS5zZWwpLCBmdW5jdGlvbihzKSB7XG4gICAgcmV0dXJuIF9jKCdwJywgW192bS5fdihfdm0uX3Mocy5pZCkgKyBcIiwgXCIgKyBfdm0uX3Mocy5lbWFpbCkgKyBcIiwgXCIgKyBfdm0uX3Mocy5uYW1lKSldKVxuICB9KV0sIDIpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcImZsb2F0XCI6IFwibGVmdFwiLFxuICAgICAgXCJwYWRkaW5nLWxlZnRcIjogXCIyMHB4XCJcbiAgICB9XG4gIH0sIFtfYygnZGl2JywgW192bS5fdihcIkNvZGU6XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCd0ZXh0YXJlYScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJjb2xzXCI6IFwiMTAwXCIsXG4gICAgICBcInJvd3NcIjogXCIyMFwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0uZXhhbXBsZXNcbiAgICB9XG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwiY2xlYXJcIjogXCJib3RoXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2JywgW19jKCdoNCcsIFtfdm0uX3YoXCJTdGF0aWMgVGFibGVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tdGFibGUnLCBbX2MoJ20tdGFibGUtaGVhZCcsIFtfYygnbS10YWJsZS1yb3cnLCBbX2MoJ20tdGFibGUtaCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJudW1lcmljXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJJZFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS10YWJsZS1oJywgW192bS5fdihcIkVtYWlsXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtLXRhYmxlLWgnLCBbX3ZtLl92KFwiTmFtZVwiKV0pXSwgMSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tdGFibGUtYm9keScsIF92bS5fbCgoX3ZtLnRlc3REYXRhU2V0KSwgZnVuY3Rpb24odXNlcikge1xuICAgIHJldHVybiBfYygnbS10YWJsZS1yb3cnLCBbX2MoJ20tdGFibGUtY2VsbCcsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwibnVtZXJpY1wiOiBcIlwiXG4gICAgICB9XG4gICAgfSwgW192bS5fdihfdm0uX3ModXNlci5pZCkpXSksIF92bS5fdihcIiBcIiksIF9jKCdtLXRhYmxlLWNlbGwnLCBbX3ZtLl92KF92bS5fcyh1c2VyLmVtYWlsKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tdGFibGUtY2VsbCcsIFtfdm0uX3YoX3ZtLl9zKHVzZXIubmFtZSkpXSldLCAxKVxuICB9KSldLCAxKV0sIDEpXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW19jKCdiJywgW192bS5fdihcIlNlbGVjdGVkIEl0ZW1zOlwiKV0pXSlcbn1dfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0wNDIyMDJjOFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMDQyMjAyYzghLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL3RhYmxlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vZGlhbG9ncy52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTZmZGUwMmY5IXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2RpYWxvZ3MudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIi9Vc2Vycy9vei9zcmMvbWF0ZXJpYWwtY29tcG9uZW50cy9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9kaWFsb2dzLnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNmZkZTAyZjlcIiwgX192dWVfb3B0aW9uc19fKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNmZkZTAyZjlcIiwgX192dWVfb3B0aW9uc19fKVxuICB9XG59KSgpfVxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBkaWFsb2dzLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL2RpYWxvZ3MudnVlIiwiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxoMz5EaWFsb2dzPC9oMz5cblxuICAgICAgICA8bS1kaWFsb2cgcmVmPVwibXNnXCIgdGl0bGU9XCJNREwgRGlhbG9nXCI+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBUaGlzIGlzIGFuIGV4YW1wbGUgb2YgdGhlIE1hdGVyaWFsIERlc2lnbiBMaXRlIGRpYWxvZyBjb21wb25lbnQuIFBsZWFzZSB1c2UgcmVzcG9uc2libHkuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgIDwvbS1kaWFsb2c+XG5cbiAgICAgICAgPCEtLSAvLyAtLT5cblxuICAgICAgICA8bS1kaWFsb2cgcmVmPVwibXNnRnVsbHdpZHRoXCIgdGl0bGU9XCJNREwgRGlhbG9nXCIgZnVsbC13aWR0aD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIFRoaXMgaXMgYW4gZXhhbXBsZSBvZiB0aGUgTWF0ZXJpYWwgRGVzaWduIExpdGUgZGlhbG9nIGNvbXBvbmVudC4gUGxlYXNlIHVzZSByZXNwb25zaWJseS5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9tLWRpYWxvZz5cblxuICAgICAgICA8IS0tIC8vIC0tPlxuXG4gICAgICAgIDxtLWJ1dHRvbiBAY2xpY2submF0aXZlPVwib3BlblwiIHJhaXNlZD5PcGVuIERpYWxvZzwvbS1idXR0b24+XG5cbiAgICAgICAgPG0tYnV0dG9uIEBjbGljay5uYXRpdmU9XCJvcGVuRnVsbFwiIHJhaXNlZD5PcGVuIERpYWxvZyBGdWxsIFdpZHRoPC9tLWJ1dHRvbj5cblxuICAgICAgICA8bS1idXR0b24gQGNsaWNrLm5hdGl2ZT1cIm9wZW5BY3Rpb25cIiByYWlzZWQ+Q3VzdG9tIEFjdGlvbnM8L20tYnV0dG9uPlxuXG4gICAgICAgIDwhLS0gLy8gLS0+XG5cbiAgICAgICAgPG0tZGlhbG9nIHJlZj1cIm1zZzJcIiBmdWxsLXdpZHRoIHRpdGxlPVwiVGVzdCBUaXRsZVwiPlxuICAgICAgICAgICAgPHAgc3R5bGU9XCJwYWRkaW5nOiAzMHB4XCI+SW5jcmVtZW50OiB7e2luY3JlbWVudH19PC9wPlxuXG4gICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cImFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICA8bS1idXR0b24gcmFpc2VkIHByaW1hcnkgcmlwcGxlIEBjbGljay5uYXRpdmU9XCJpbmNyZW1lbnQrK1wiPkFjdGlvbjwvbS1idXR0b24+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L20tZGlhbG9nPlxuXG4gICAgICAgIDwhLS0gLy8gLS0+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXY+Q29kZTo8L2Rpdj5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBjb2xzPVwiMTAwXCIgcm93cz1cIjMwXCIgOnZhbHVlPVwiZXhhbXBsZXNcIj48L3RleHRhcmVhPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHR7XG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIG9wZW4oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5tc2cub3BlbigpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgb3BlbkZ1bGwoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5tc2dGdWxsd2lkdGgub3BlbigpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgb3BlbkFjdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLm1zZzIub3BlbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkYXRhKCl7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGluY3JlbWVudDogMCxcbiAgICAgICAgICAgICAgICBleGFtcGxlczogYFxuICAgICAgICAgICAgICAgICAgICA8bS1kaWFsb2cgcmVmPVwibXNnXCIgdGl0bGU9XCJNREwgRGlhbG9nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzIGlzIGFuIGV4YW1wbGUgb2YgdGhlIE1hdGVyaWFsIERlc2lnbiBMaXRlIGRpYWxvZyBjb21wb25lbnQuIFBsZWFzZSB1c2UgcmVzcG9uc2libHkuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvbS1kaWFsb2c+XG5cbiAgICAgICAgICAgICAgICAgICAgPG0tZGlhbG9nIHJlZj1cIm1zZ0Z1bGx3aWR0aFwiIHRpdGxlPVwiTURMIERpYWxvZ1wiIGZ1bGwtd2lkdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzIGlzIGFuIGV4YW1wbGUgb2YgdGhlIE1hdGVyaWFsIERlc2lnbiBMaXRlIGRpYWxvZyBjb21wb25lbnQuIFBsZWFzZSB1c2UgcmVzcG9uc2libHkuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvbS1kaWFsb2c+XG5cbiAgICAgICAgICAgICAgICAgICAgPG0tZGlhbG9nIHJlZj1cIm1zZzJcIiBmdWxsLXdpZHRoIHRpdGxlPVwiVGVzdCBUaXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9XCJwYWRkaW5nOiAzMHB4XCI+SW5jcmVtZW50OiB7e2luY3JlbWVudH19PC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cImFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bS1idXR0b24gcmFpc2VkIHByaW1hcnkgcmlwcGxlIEBjbGljay5uYXRpdmU9XCJpbmNyZW1lbnQrK1wiPkFjdGlvbjwvbS1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICA8L20tZGlhbG9nPlxuXG4gICAgICAgICAgICAgICAgICAgIDxtLWJ1dHRvbiBAY2xpY2submF0aXZlPVwib3BlblwiPk9wZW4gRGlhbG9nPC9tLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBkaWFsb2dzLnZ1ZT8yNzk5OTExZiIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW19jKCdoMycsIFtfdm0uX3YoXCJEaWFsb2dzXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtLWRpYWxvZycsIHtcbiAgICByZWY6IFwibXNnXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGl0bGVcIjogXCJNREwgRGlhbG9nXCJcbiAgICB9XG4gIH0sIFtfYygncCcsIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBUaGlzIGlzIGFuIGV4YW1wbGUgb2YgdGhlIE1hdGVyaWFsIERlc2lnbiBMaXRlIGRpYWxvZyBjb21wb25lbnQuIFBsZWFzZSB1c2UgcmVzcG9uc2libHkuXFxuICAgICAgICBcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS1kaWFsb2cnLCB7XG4gICAgcmVmOiBcIm1zZ0Z1bGx3aWR0aFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInRpdGxlXCI6IFwiTURMIERpYWxvZ1wiLFxuICAgICAgXCJmdWxsLXdpZHRoXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfYygncCcsIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBUaGlzIGlzIGFuIGV4YW1wbGUgb2YgdGhlIE1hdGVyaWFsIERlc2lnbiBMaXRlIGRpYWxvZyBjb21wb25lbnQuIFBsZWFzZSB1c2UgcmVzcG9uc2libHkuXFxuICAgICAgICBcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS1idXR0b24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwicmFpc2VkXCI6IFwiXCJcbiAgICB9LFxuICAgIG5hdGl2ZU9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0ub3BlbigkZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiT3BlbiBEaWFsb2dcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tYnV0dG9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInJhaXNlZFwiOiBcIlwiXG4gICAgfSxcbiAgICBuYXRpdmVPbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLm9wZW5GdWxsKCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJPcGVuIERpYWxvZyBGdWxsIFdpZHRoXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtLWJ1dHRvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJyYWlzZWRcIjogXCJcIlxuICAgIH0sXG4gICAgbmF0aXZlT246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5vcGVuQWN0aW9uKCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJDdXN0b20gQWN0aW9uc1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS1kaWFsb2cnLCB7XG4gICAgcmVmOiBcIm1zZzJcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJmdWxsLXdpZHRoXCI6IFwiXCIsXG4gICAgICBcInRpdGxlXCI6IFwiVGVzdCBUaXRsZVwiXG4gICAgfVxuICB9LCBbX2MoJ3AnLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwicGFkZGluZ1wiOiBcIjMwcHhcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkluY3JlbWVudDogXCIgKyBfdm0uX3MoX3ZtLmluY3JlbWVudCkpXSksIF92bS5fdihcIiBcIiksIF9jKCd0ZW1wbGF0ZScsIHtcbiAgICBzbG90OiBcImFjdGlvbnNcIlxuICB9LCBbX2MoJ20tYnV0dG9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInJhaXNlZFwiOiBcIlwiLFxuICAgICAgXCJwcmltYXJ5XCI6IFwiXCIsXG4gICAgICBcInJpcHBsZVwiOiBcIlwiXG4gICAgfSxcbiAgICBuYXRpdmVPbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmluY3JlbWVudCsrXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiQWN0aW9uXCIpXSldLCAxKV0sIDIpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2JywgW19jKCdkaXYnLCBbX3ZtLl92KFwiQ29kZTpcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RleHRhcmVhJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImNvbHNcIjogXCIxMDBcIixcbiAgICAgIFwicm93c1wiOiBcIjMwXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5leGFtcGxlc1xuICAgIH1cbiAgfSldKV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTZmZGUwMmY5XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi02ZmRlMDJmOSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvZGlhbG9ncy52dWVcbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xudmFyIF9fdnVlX3N0eWxlc19fID0ge31cblxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIXZ1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi02NmU1ZDdiMSF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vY2FyZHMudnVlXCIpXG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9jYXJkcy52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTY2ZTVkN2IxIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2NhcmRzLnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCIvVXNlcnMvb3ovc3JjL21hdGVyaWFsLWNvbXBvbmVudHMvZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvY2FyZHMudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi02NmU1ZDdiMVwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi02NmU1ZDdiMVwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH1cbn0pKCl9XG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGNhcmRzLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL2NhcmRzLnZ1ZSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNjZlNWQ3YjEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2NhcmRzLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNjZlNWQ3YjEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2NhcmRzLnZ1ZVwiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTY2ZTVkN2IxIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9jYXJkcy52dWVcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTY2ZTVkN2IxIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvY2FyZHMudnVlXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5kZW1vLWNhcmQtc3F1YXJlLm1kbC1jYXJkIHtcXG4gIHdpZHRoOiAzMjBweDtcXG4gIGhlaWdodDogMzIwcHg7XFxufVxcbi5kZW1vLWNhcmQtc3F1YXJlID4gLm1kbC1jYXJkX190aXRsZSB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly9nZXRtZGwuaW8vYXNzZXRzL2RlbW9zL2RvZy5wbmcnKSBib3R0b20gcmlnaHQgMTUlIG5vLXJlcGVhdCAjNDZCNkFDO1xcbn1cXG4uZGVtby1jYXJkLXdpZGUubWRsLWNhcmQge1xcbiAgd2lkdGg6IDUxMnB4O1xcbn1cXG4uZGVtby1jYXJkLXdpZGUgPiAubWRsLWNhcmRfX3RpdGxlIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgaGVpZ2h0OiAxNzZweDtcXG4gIGJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly9nZXRtZGwuaW8vYXNzZXRzL2RlbW9zL3dlbGNvbWVfY2FyZC5qcGcnKSBjZW50ZXIgLyBjb3ZlcjtcXG59XFxuLmRlbW8tY2FyZC13aWRlID4gLm1kbC1jYXJkX19tZW51IHtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiLy4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvY2FyZHMudnVlPzQ2M2NiZDJjXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFxQkE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtDQUNBO0FBQ0E7RUFDQSxZQUFBO0VBQ0EsNkZBQUE7Q0FDQTtBQUVBO0VBQ0EsYUFBQTtDQUNBO0FBQ0E7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtGQUFBO0NBQ0E7QUFDQTtFQUNBLFlBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiY2FyZHMudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gICAgPGRpdj5cXG4gICAgICAgIDxoMz5DYXJkczwvaDM+XFxuXFxuICAgICAgICA8bS1jYXJkIGNsYXNzPVxcXCJkZW1vLWNhcmQtc3F1YXJlXFxcIiB0aXRsZT1cXFwiVXBkYXRlc1xcXCIgc3VwcG9ydGluZy10ZXh0PVxcXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBNYXVyaXMgc2FnaXR0aXMgcGVsbGVudGVzcXVlIGxhY3VzIGVsZWlmZW5kIGxhY2luaWEuLi5cXFwiIGFjdGlvbnM9XFxcImFjdGlvbnNcXFwiIGFjdGlvbnMtdGV4dD1cXFwiVXBkYXRlXFxcIj48L20tY2FyZD5cXG5cXG4gICAgICAgIDxicj5cXG4gICAgICAgIDxicj5cXG5cXG4gICAgICAgIDxtLWNhcmQgY2xhc3M9XFxcImRlbW8tY2FyZC13aWRlXFxcIiB0aXRsZT1cXFwiV2VsY29tZVxcXCIgc3VwcG9ydGluZy10ZXh0PVxcXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBNYXVyaXMgc2FnaXR0aXMgcGVsbGVudGVzcXVlIGxhY3VzIGVsZWlmZW5kIGxhY2luaWEuLi5cXFwiIGFjdGlvbnM9XFxcImFjdGlvbnNcXFwiIGFjdGlvbnMtdGV4dD1cXFwiR2V0IHN0YXJ0ZWRcXFwiPjwvbS1jYXJkPlxcblxcbiAgICAgICAgPGhyPlxcblxcbiAgICAgICAgPGRpdj5cXG4gICAgICAgICAgICA8ZGl2PkNvZGU6PC9kaXY+XFxuICAgICAgICAgICAgPHRleHRhcmVhIGNvbHM9XFxcIjE1MFxcXCIgcm93cz1cXFwiNDBcXFwiIDp2YWx1ZT1cXFwiZXhhbXBsZXNcXFwiPjwvdGV4dGFyZWE+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c3R5bGU+XFxuLmRlbW8tY2FyZC1zcXVhcmUubWRsLWNhcmQge1xcbiAgd2lkdGg6IDMyMHB4O1xcbiAgaGVpZ2h0OiAzMjBweDtcXG59XFxuLmRlbW8tY2FyZC1zcXVhcmUgPiAubWRsLWNhcmRfX3RpdGxlIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZDogdXJsKCdodHRwczovL2dldG1kbC5pby9hc3NldHMvZGVtb3MvZG9nLnBuZycpIGJvdHRvbSByaWdodCAxNSUgbm8tcmVwZWF0ICM0NkI2QUM7XFxufVxcblxcbi5kZW1vLWNhcmQtd2lkZS5tZGwtY2FyZCB7XFxuICB3aWR0aDogNTEycHg7XFxufVxcbi5kZW1vLWNhcmQtd2lkZSA+IC5tZGwtY2FyZF9fdGl0bGUge1xcbiAgY29sb3I6ICNmZmY7XFxuICBoZWlnaHQ6IDE3NnB4O1xcbiAgYmFja2dyb3VuZDogdXJsKCdodHRwczovL2dldG1kbC5pby9hc3NldHMvZGVtb3Mvd2VsY29tZV9jYXJkLmpwZycpIGNlbnRlciAvIGNvdmVyO1xcbn1cXG4uZGVtby1jYXJkLXdpZGUgPiAubWRsLWNhcmRfX21lbnUge1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbjwvc3R5bGU+XFxuXFxuPHNjcmlwdD5cXG5cXG4gICAgZXhwb3J0IGRlZmF1bHQge1xcbiAgICAgICAgZGF0YSgpe1xcbiAgICAgICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgICAgIGV4YW1wbGVzOiBgXFxuICAgICAgICAgICAgICAgICAgICA8bS1jYXJkIGNsYXNzPVxcXCJkZW1vLWNhcmQtc3F1YXJlXFxcIiB0aXRsZT1cXFwiVXBkYXRlc1xcXCIgc3VwcG9ydGluZy10ZXh0PVxcXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBNYXVyaXMgc2FnaXR0aXMgcGVsbGVudGVzcXVlIGxhY3VzIGVsZWlmZW5kIGxhY2luaWEuLi5cXFwiIGFjdGlvbnM9XFxcImFjdGlvbnNcXFwiIGFjdGlvbnMtdGV4dD1cXFwiVXBkYXRlXFxcIj48L20tY2FyZD5cXG4gICAgICAgICAgICAgICAgICAgIDxtLWNhcmQgY2xhc3M9XFxcImRlbW8tY2FyZC13aWRlXFxcIiB0aXRsZT1cXFwiV2VsY29tZVxcXCIgc3VwcG9ydGluZy10ZXh0PVxcXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBNYXVyaXMgc2FnaXR0aXMgcGVsbGVudGVzcXVlIGxhY3VzIGVsZWlmZW5kIGxhY2luaWEuLi5cXFwiIGFjdGlvbnM9XFxcImFjdGlvbnNcXFwiIGFjdGlvbnMtdGV4dD1cXFwiR2V0IHN0YXJ0ZWRcXFwiPjwvbS1jYXJkPlxcblxcbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlPlxcbiAgICAgICAgICAgICAgICAgICAgLmRlbW8tY2FyZC1zcXVhcmUubWRsLWNhcmQge1xcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzIwcHg7XFxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzIwcHg7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICAuZGVtby1jYXJkLXNxdWFyZSA+IC5tZGwtY2FyZF9fdGl0bGUge1xcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCdodHRwczovL2dldG1kbC5pby9hc3NldHMvZGVtb3MvZG9nLnBuZycpIGJvdHRvbSByaWdodCAxNSUgbm8tcmVwZWF0ICM0NkI2QUM7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICAuZGVtby1jYXJkLXdpZGUubWRsLWNhcmQge1xcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTEycHg7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICAuZGVtby1jYXJkLXdpZGUgPiAubWRsLWNhcmRfX3RpdGxlIHtcXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XFxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTc2cHg7XFxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly9nZXRtZGwuaW8vYXNzZXRzL2RlbW9zL3dlbGNvbWVfY2FyZC5qcGcnKSBjZW50ZXIgLyBjb3ZlcjtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIC5kZW1vLWNhcmQtd2lkZSA+IC5tZGwtY2FyZF9fbWVudSB7XFxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cXG5cXG5cXG4gICAgICAgICAgICAgICAgYFxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbjwvc2NyaXB0PlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNjZlNWQ3YjEhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9jYXJkcy52dWVcbi8vIG1vZHVsZSBpZCA9IDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8aDM+Q2FyZHM8L2gzPlxuXG4gICAgICAgIDxtLWNhcmQgY2xhc3M9XCJkZW1vLWNhcmQtc3F1YXJlXCIgdGl0bGU9XCJVcGRhdGVzXCIgc3VwcG9ydGluZy10ZXh0PVwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gTWF1cmlzIHNhZ2l0dGlzIHBlbGxlbnRlc3F1ZSBsYWN1cyBlbGVpZmVuZCBsYWNpbmlhLi4uXCIgYWN0aW9ucz1cImFjdGlvbnNcIiBhY3Rpb25zLXRleHQ9XCJVcGRhdGVcIj48L20tY2FyZD5cblxuICAgICAgICA8YnI+XG4gICAgICAgIDxicj5cblxuICAgICAgICA8bS1jYXJkIGNsYXNzPVwiZGVtby1jYXJkLXdpZGVcIiB0aXRsZT1cIldlbGNvbWVcIiBzdXBwb3J0aW5nLXRleHQ9XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBNYXVyaXMgc2FnaXR0aXMgcGVsbGVudGVzcXVlIGxhY3VzIGVsZWlmZW5kIGxhY2luaWEuLi5cIiBhY3Rpb25zPVwiYWN0aW9uc1wiIGFjdGlvbnMtdGV4dD1cIkdldCBzdGFydGVkXCI+PC9tLWNhcmQ+XG5cbiAgICAgICAgPGhyPlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2PkNvZGU6PC9kaXY+XG4gICAgICAgICAgICA8dGV4dGFyZWEgY29scz1cIjE1MFwiIHJvd3M9XCI0MFwiIDp2YWx1ZT1cImV4YW1wbGVzXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c3R5bGU+XG4uZGVtby1jYXJkLXNxdWFyZS5tZGwtY2FyZCB7XG4gIHdpZHRoOiAzMjBweDtcbiAgaGVpZ2h0OiAzMjBweDtcbn1cbi5kZW1vLWNhcmQtc3F1YXJlID4gLm1kbC1jYXJkX190aXRsZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vZ2V0bWRsLmlvL2Fzc2V0cy9kZW1vcy9kb2cucG5nJykgYm90dG9tIHJpZ2h0IDE1JSBuby1yZXBlYXQgIzQ2QjZBQztcbn1cblxuLmRlbW8tY2FyZC13aWRlLm1kbC1jYXJkIHtcbiAgd2lkdGg6IDUxMnB4O1xufVxuLmRlbW8tY2FyZC13aWRlID4gLm1kbC1jYXJkX190aXRsZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBoZWlnaHQ6IDE3NnB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vZ2V0bWRsLmlvL2Fzc2V0cy9kZW1vcy93ZWxjb21lX2NhcmQuanBnJykgY2VudGVyIC8gY292ZXI7XG59XG4uZGVtby1jYXJkLXdpZGUgPiAubWRsLWNhcmRfX21lbnUge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuPC9zdHlsZT5cblxuPHNjcmlwdD5cblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgZGF0YSgpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBleGFtcGxlczogYFxuICAgICAgICAgICAgICAgICAgICA8bS1jYXJkIGNsYXNzPVwiZGVtby1jYXJkLXNxdWFyZVwiIHRpdGxlPVwiVXBkYXRlc1wiIHN1cHBvcnRpbmctdGV4dD1cIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIE1hdXJpcyBzYWdpdHRpcyBwZWxsZW50ZXNxdWUgbGFjdXMgZWxlaWZlbmQgbGFjaW5pYS4uLlwiIGFjdGlvbnM9XCJhY3Rpb25zXCIgYWN0aW9ucy10ZXh0PVwiVXBkYXRlXCI+PC9tLWNhcmQ+XG4gICAgICAgICAgICAgICAgICAgIDxtLWNhcmQgY2xhc3M9XCJkZW1vLWNhcmQtd2lkZVwiIHRpdGxlPVwiV2VsY29tZVwiIHN1cHBvcnRpbmctdGV4dD1cIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIE1hdXJpcyBzYWdpdHRpcyBwZWxsZW50ZXNxdWUgbGFjdXMgZWxlaWZlbmQgbGFjaW5pYS4uLlwiIGFjdGlvbnM9XCJhY3Rpb25zXCIgYWN0aW9ucy10ZXh0PVwiR2V0IHN0YXJ0ZWRcIj48L20tY2FyZD5cblxuICAgICAgICAgICAgICAgICAgICA8c3R5bGU+XG4gICAgICAgICAgICAgICAgICAgIC5kZW1vLWNhcmQtc3F1YXJlLm1kbC1jYXJkIHtcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMjBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuZGVtby1jYXJkLXNxdWFyZSA+IC5tZGwtY2FyZF9fdGl0bGUge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly9nZXRtZGwuaW8vYXNzZXRzL2RlbW9zL2RvZy5wbmcnKSBib3R0b20gcmlnaHQgMTUlIG5vLXJlcGVhdCAjNDZCNkFDO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmRlbW8tY2FyZC13aWRlLm1kbC1jYXJkIHtcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTEycHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmRlbW8tY2FyZC13aWRlID4gLm1kbC1jYXJkX190aXRsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNzZweDtcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vZ2V0bWRsLmlvL2Fzc2V0cy9kZW1vcy93ZWxjb21lX2NhcmQuanBnJykgY2VudGVyIC8gY292ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmRlbW8tY2FyZC13aWRlID4gLm1kbC1jYXJkX19tZW51IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XG5cblxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNhcmRzLnZ1ZT80NjNjYmQyYyIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW19jKCdoMycsIFtfdm0uX3YoXCJDYXJkc1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS1jYXJkJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRlbW8tY2FyZC1zcXVhcmVcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0aXRsZVwiOiBcIlVwZGF0ZXNcIixcbiAgICAgIFwic3VwcG9ydGluZy10ZXh0XCI6IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gTWF1cmlzIHNhZ2l0dGlzIHBlbGxlbnRlc3F1ZSBsYWN1cyBlbGVpZmVuZCBsYWNpbmlhLi4uXCIsXG4gICAgICBcImFjdGlvbnNcIjogXCJhY3Rpb25zXCIsXG4gICAgICBcImFjdGlvbnMtdGV4dFwiOiBcIlVwZGF0ZVwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnbS1jYXJkJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRlbW8tY2FyZC13aWRlXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGl0bGVcIjogXCJXZWxjb21lXCIsXG4gICAgICBcInN1cHBvcnRpbmctdGV4dFwiOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIE1hdXJpcyBzYWdpdHRpcyBwZWxsZW50ZXNxdWUgbGFjdXMgZWxlaWZlbmQgbGFjaW5pYS4uLlwiLFxuICAgICAgXCJhY3Rpb25zXCI6IFwiYWN0aW9uc1wiLFxuICAgICAgXCJhY3Rpb25zLXRleHRcIjogXCJHZXQgc3RhcnRlZFwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2hyJyksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCBbX2MoJ2RpdicsIFtfdm0uX3YoXCJDb2RlOlwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndGV4dGFyZWEnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiY29sc1wiOiBcIjE1MFwiLFxuICAgICAgXCJyb3dzXCI6IFwiNDBcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLmV4YW1wbGVzXG4gICAgfVxuICB9KV0pXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNjZlNWQ3YjFcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTY2ZTVkN2IxIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9jYXJkcy52dWVcbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xudmFyIF9fdnVlX3N0eWxlc19fID0ge31cblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2NoaXBzLnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNzY3MDIzZjUhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vY2hpcHMudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIi9Vc2Vycy9vei9zcmMvbWF0ZXJpYWwtY29tcG9uZW50cy9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9jaGlwcy52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTc2NzAyM2Y1XCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTc2NzAyM2Y1XCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfVxufSkoKX1cbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gY2hpcHMudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvY2hpcHMudnVlIiwiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxoMz5DaGlwczwvaDM+XG5cbiAgICAgICAgPG0tY2hpcCBjb250YWN0PVwiQVwiPkJhc2ljIENoaXA8L20tY2hpcD5cbiAgICAgICAgPG0tY2hpcCBjb250YWN0LWltYWdlPVwiaHR0cHM6Ly9nZXRtZGwuaW8vdGVtcGxhdGVzL2Rhc2hib2FyZC9pbWFnZXMvdXNlci5qcGdcIj5EZWxldGFibGUgQ29udGFjdCBDaGlwPC9tLWNoaXA+XG5cblxuICAgICAgICA8bS1jaGlwIGNvbnRhY3Q9XCJBXCIgQGRlbGV0ZT1cImRlbFwiIHYtaWY9XCJzaG93Q2hpcFwiPkJhc2ljIENoaXA8L20tY2hpcD5cblxuICAgICAgICA8bS1zbmFja2JhciBkaXNwbGF5LW9uPVwibXNnU2VudFwiPjwvbS1zbmFja2Jhcj5cblxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2PkNvZGU6PC9kaXY+XG4gICAgICAgICAgICA8dGV4dGFyZWEgY29scz1cIjExMFwiIHJvd3M9XCIxMFwiIDp2YWx1ZT1cImV4YW1wbGVzXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0e1xuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBkZWwoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Q2hpcCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuJHJvb3QuJGVtaXQoJ21zZ1NlbnQnLCB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdEZWxldGVkJyxcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uVGV4dDogJ1VuZG8nLFxuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiAzMDAwLFxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25IYW5kbGVyOiAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dDaGlwID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZGF0YSgpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzaG93Q2hpcDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBleGFtcGxlczogYFxuICAgICAgICAgICAgICAgICAgICA8bS1jaGlwIGNvbnRhY3Q9XCJBXCI+QmFzaWMgQ2hpcDwvbS1jaGlwPlxuICAgICAgICAgICAgICAgICAgICA8bS1jaGlwIGNvbnRhY3QtaW1hZ2U9XCJodHRwczovL2dldG1kbC5pby90ZW1wbGF0ZXMvZGFzaGJvYXJkL2ltYWdlcy91c2VyLmpwZ1wiPkRlbGV0YWJsZSBDb250YWN0IENoaXA8L20tY2hpcD5cblxuICAgICAgICAgICAgICAgICAgICA8bS1jaGlwIGNvbnRhY3Q9XCJBXCIgQGRlbGV0ZT1cImRlbFwiIHYtaWY9XCJzaG93Q2hpcFwiPkJhc2ljIENoaXA8L20tY2hpcD5cblxuICAgICAgICAgICAgICAgICAgICA8bS1zbmFja2JhciBkaXNwbGF5LW9uPVwibXNnU2VudFwiPjwvbS1zbmFja2Jhcj5cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjaGlwcy52dWU/N2NlZmMxNDYiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygnaDMnLCBbX3ZtLl92KFwiQ2hpcHNcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tY2hpcCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJjb250YWN0XCI6IFwiQVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiQmFzaWMgQ2hpcFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS1jaGlwJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImNvbnRhY3QtaW1hZ2VcIjogXCJodHRwczovL2dldG1kbC5pby90ZW1wbGF0ZXMvZGFzaGJvYXJkL2ltYWdlcy91c2VyLmpwZ1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiRGVsZXRhYmxlIENvbnRhY3QgQ2hpcFwiKV0pLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLnNob3dDaGlwKSA/IF9jKCdtLWNoaXAnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiY29udGFjdFwiOiBcIkFcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiZGVsZXRlXCI6IF92bS5kZWxcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJCYXNpYyBDaGlwXCIpXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tc25hY2tiYXInLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZGlzcGxheS1vblwiOiBcIm1zZ1NlbnRcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCBbX2MoJ2RpdicsIFtfdm0uX3YoXCJDb2RlOlwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndGV4dGFyZWEnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiY29sc1wiOiBcIjExMFwiLFxuICAgICAgXCJyb3dzXCI6IFwiMTBcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLmV4YW1wbGVzXG4gICAgfVxuICB9KV0pXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNzY3MDIzZjVcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTc2NzAyM2Y1IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9jaGlwcy52dWVcbi8vIG1vZHVsZSBpZCA9IDYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xudmFyIF9fdnVlX3N0eWxlc19fID0ge31cblxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIXZ1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi0yYzhhZWFlMyF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vbGlzdHMudnVlXCIpXG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9saXN0cy52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTJjOGFlYWUzIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2xpc3RzLnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCIvVXNlcnMvb3ovc3JjL21hdGVyaWFsLWNvbXBvbmVudHMvZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvbGlzdHMudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0yYzhhZWFlM1wiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0yYzhhZWFlM1wiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH1cbn0pKCl9XG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGxpc3RzLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL2xpc3RzLnZ1ZSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMmM4YWVhZTMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2xpc3RzLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMmM4YWVhZTMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2xpc3RzLnZ1ZVwiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTJjOGFlYWUzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9saXN0cy52dWVcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTJjOGFlYWUzIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvbGlzdHMudnVlXG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5kZW1vLWxpc3QtaXRlbSB7XFxuICB3aWR0aDogMzAwcHg7XFxufVxcbi5kZW1vLWxpc3QtdGhyZWUge1xcbiAgd2lkdGg6IDY1MHB4O1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiLy4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvbGlzdHMudnVlPzJhNGZmYTAyXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFtR0E7RUFDQSxhQUFBO0NBQ0E7QUFFQTtFQUNBLGFBQUE7Q0FDQVwiLFwiZmlsZVwiOlwibGlzdHMudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gICAgPGRpdj5cXG4gICAgICAgIDxoMz5MaXN0czwvaDM+XFxuXFxuICAgICAgICA8bS1saXN0IGNsYXNzPVxcXCJkZW1vLWxpc3QtaXRlbVxcXCI+XFxuICAgICAgICAgICAgPG0tbGlzdC1pdGVtPkJyeWFuIENyYW5zdG9uPC9tLWxpc3QtaXRlbT5cXG4gICAgICAgICAgICA8bS1saXN0LWl0ZW0+QWFyb24gUGF1bDwvbS1saXN0LWl0ZW0+XFxuICAgICAgICAgICAgPG0tbGlzdC1pdGVtPkJvYiBPZGVua2lyazwvbS1saXN0LWl0ZW0+XFxuICAgICAgICA8L20tbGlzdD5cXG5cXG4gICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgPGRpdj5Db2RlOjwvZGl2PlxcbiAgICAgICAgICAgIDx0ZXh0YXJlYSBjb2xzPVxcXCIxMTBcXFwiIHJvd3M9XFxcIjEwXFxcIiA6dmFsdWU9XFxcImV4YW1wbGVzMVxcXCI+PC90ZXh0YXJlYT5cXG4gICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgPGhyPlxcblxcbiAgICAgICAgPG0tbGlzdCBjbGFzcz1cXFwiZGVtby1saXN0LWl0ZW1cXFwiPlxcbiAgICAgICAgICAgIDxtLWxpc3QtaXRlbSBpY29uPVxcXCJwZXJzb25cXFwiPkJyeWFuIENyYW5zdG9uPC9tLWxpc3QtaXRlbT5cXG4gICAgICAgICAgICA8bS1saXN0LWl0ZW0gaWNvbj1cXFwicGVyc29uXFxcIj5BYXJvbiBQYXVsPC9tLWxpc3QtaXRlbT5cXG4gICAgICAgICAgICA8bS1saXN0LWl0ZW0gaWNvbj1cXFwicGVyc29uXFxcIj5Cb2IgT2Rlbmtpcms8L20tbGlzdC1pdGVtPlxcbiAgICAgICAgPC9tLWxpc3Q+XFxuXFxuICAgICAgICA8ZGl2PlxcbiAgICAgICAgICAgIDxkaXY+Q29kZTo8L2Rpdj5cXG4gICAgICAgICAgICA8dGV4dGFyZWEgY29scz1cXFwiMTEwXFxcIiByb3dzPVxcXCIxMFxcXCIgOnZhbHVlPVxcXCJleGFtcGxlczJcXFwiPjwvdGV4dGFyZWE+XFxuICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgIDxocj5cXG5cXG4gICAgICAgIDxtLWxpc3QgY2xhc3M9XFxcImRlbW8tbGlzdC1pdGVtXFxcIj5cXG4gICAgICAgICAgICA8bS1saXN0LWl0ZW0gaWNvbi1hdmF0YXI9XFxcInBlcnNvblxcXCI+QnJ5YW4gQ3JhbnN0b248L20tbGlzdC1pdGVtPlxcbiAgICAgICAgICAgIDxtLWxpc3QtaXRlbSBpY29uLWF2YXRhcj1cXFwicGVyc29uXFxcIj5BYXJvbiBQYXVsPC9tLWxpc3QtaXRlbT5cXG4gICAgICAgICAgICA8bS1saXN0LWl0ZW0gaWNvbi1hdmF0YXI9XFxcInBlcnNvblxcXCI+Qm9iIE9kZW5raXJrPC9tLWxpc3QtaXRlbT5cXG4gICAgICAgIDwvbS1saXN0PlxcblxcbiAgICAgICAgPGRpdj5cXG4gICAgICAgICAgICA8ZGl2PkNvZGU6PC9kaXY+XFxuICAgICAgICAgICAgPHRleHRhcmVhIGNvbHM9XFxcIjExMFxcXCIgcm93cz1cXFwiMTBcXFwiIDp2YWx1ZT1cXFwiZXhhbXBsZXMzXFxcIj48L3RleHRhcmVhPlxcbiAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICA8aHI+XFxuXFxuICAgICAgICA8bS1saXN0IGNsYXNzPVxcXCJkZW1vLWxpc3QtaXRlbVxcXCI+XFxuICAgICAgICAgICAgPG0tbGlzdC1pdGVtIGljb24tYXZhdGFyPVxcXCJwZXJzb25cXFwiIHYtZm9yPVxcXCJwZXJzb24gaW4gcGVvcGxlXFxcIj5cXG4gICAgICAgICAgICAgICAge3twZXJzb24ubmFtZX19XFxuXFxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVxcXCJhY3Rpb25cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPG0tc3dpdGNoIHYtbW9kZWw9XFxcInBlcnNvbi5vblxcXCI+PC9tLXN3aXRjaD5cXG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXG4gICAgICAgICAgICA8L20tbGlzdC1pdGVtPlxcbiAgICAgICAgPC9tLWxpc3Q+XFxuXFxuICAgICAgICA8ZGl2PlxcbiAgICAgICAgICAgIDxkaXY+Q29kZTo8L2Rpdj5cXG4gICAgICAgICAgICA8dGV4dGFyZWEgY29scz1cXFwiMTEwXFxcIiByb3dzPVxcXCIxMFxcXCIgOnZhbHVlPVxcXCJleGFtcGxlczRcXFwiPjwvdGV4dGFyZWE+XFxuICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgIDxocj5cXG5cXG4gICAgICAgIDxtLWxpc3QgY2xhc3M9XFxcImRlbW8tbGlzdC1pdGVtXFxcIj5cXG4gICAgICAgICAgICA8bS1saXN0LWl0ZW0gaWNvbi1hdmF0YXI9XFxcInBlcnNvblxcXCIgdi1mb3I9XFxcInBlcnNvbiBpbiBwZW9wbGVcXFwiIDpzdWItdGl0bGU9XFxcInBlcnNvbi5zdWJcXFwiPlxcbiAgICAgICAgICAgICAgICB7e3BlcnNvbi5uYW1lfX1cXG5cXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XFxcImFjdGlvblxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwibWRsLWxpc3RfX2l0ZW0tc2Vjb25kYXJ5LWFjdGlvblxcXCIgaHJlZj1cXFwiI1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcIm1hdGVyaWFsLWljb25zXFxcIj5zdGFyPC9pPlxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxcbiAgICAgICAgICAgIDwvbS1saXN0LWl0ZW0+XFxuICAgICAgICA8L20tbGlzdD5cXG5cXG4gICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgPGRpdj5Db2RlOjwvZGl2PlxcbiAgICAgICAgICAgIDx0ZXh0YXJlYSBjb2xzPVxcXCIxMTBcXFwiIHJvd3M9XFxcIjEwXFxcIiA6dmFsdWU9XFxcImV4YW1wbGVzNVxcXCI+PC90ZXh0YXJlYT5cXG4gICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgPGhyPlxcblxcbiAgICAgICAgPG0tbGlzdCBjbGFzcz1cXFwiZGVtby1saXN0LXRocmVlXFxcIj5cXG4gICAgICAgICAgICA8bS1saXN0LWl0ZW0gaWNvbi1hdmF0YXI9XFxcInBlcnNvblxcXCIgdi1mb3I9XFxcInBlcnNvbiBpbiBwZW9wbGVcXFwiIDp0ZXh0PVxcXCJwZXJzb24udGV4dFxcXCI+XFxuICAgICAgICAgICAgICAgIHt7cGVyc29uLm5hbWV9fVxcblxcbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cXFwiYWN0aW9uXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJtZGwtbGlzdF9faXRlbS1zZWNvbmRhcnktYWN0aW9uXFxcIiBocmVmPVxcXCIjXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwibWF0ZXJpYWwtaWNvbnNcXFwiPnN0YXI8L2k+XFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxuICAgICAgICAgICAgPC9tLWxpc3QtaXRlbT5cXG4gICAgICAgIDwvbS1saXN0PlxcblxcbiAgICAgICAgPGRpdj5cXG4gICAgICAgICAgICA8ZGl2PkNvZGU6PC9kaXY+XFxuICAgICAgICAgICAgPHRleHRhcmVhIGNvbHM9XFxcIjExMFxcXCIgcm93cz1cXFwiMTBcXFwiIDp2YWx1ZT1cXFwiZXhhbXBsZXM2XFxcIj48L3RleHRhcmVhPlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuXFxuPHN0eWxlPlxcbi5kZW1vLWxpc3QtaXRlbSB7XFxuICB3aWR0aDogMzAwcHg7XFxufVxcblxcbi5kZW1vLWxpc3QtdGhyZWUge1xcbiAgd2lkdGg6IDY1MHB4O1xcbn1cXG48L3N0eWxlPlxcblxcbjxzY3JpcHQ+XFxuICAgIGV4cG9ydCBkZWZhdWx0e1xcbiAgICAgICAgbWV0aG9kczoge1xcbiAgICAgICAgfSxcXG4gICAgICAgIGRhdGEoKXtcXG4gICAgICAgICAgICByZXR1cm4ge1xcbiAgICAgICAgICAgICAgICBwZW9wbGU6IFtcXG4gICAgICAgICAgICAgICAgICAgIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAnbmFtZSc6ICdCcnlhbiBDcmFuc3RvbicsXFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQnOiAnQnJ5YW4gQ3JhbnN0b24gcGxheWVkIHRoZSByb2xlIG9mIFdhbHRlciBpbiBCcmVha2luZyBCYWQuIEhlIGlzIGFsc28ga25vd24gZm9yIHBsYXlpbmcgSGFsIGluIE1hbGNvbSBpbiB0aGUgTWlkZGxlLicsXFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHRydWUsXFxuICAgICAgICAgICAgICAgICAgICAgICAgc3ViOiAnNjIgRXBpc29kZXMnLFxcbiAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgICAgIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAnbmFtZSc6ICdBYXJvbiBQYXVsJyxcXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnQWFyb24gUGF1bCBwbGF5ZWQgdGhlIHJvbGUgb2YgSmVzc2UgaW4gQnJlYWtpbmcgQmFkLiBIZSBhbHNvIGZlYXR1cmVkIGluIHRoZSBcXFwiTmVlZCBGb3IgU3BlZWRcXFwiIE1vdmllLicsXFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IGZhbHNlLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YjogJzUyIEVwaXNvZGVzJyxcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgICAgICB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgJ25hbWUnOiAnQm9iIE9kZW5raXJrJyxcXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjogdHJ1ZSxcXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnQm9iIE9kaW5rcmlrIHBsYXllZCB0aGUgcm9sZSBvZiBTYXVsIGluIEJyZWFraW5nIEJhZC4gRHVlIHRvIHB1YmxpYyBmb25kbmVzcyBmb3IgdGhlIGNoYXJhY3RlciwgQm9iIHN0YXJzIGluIGhpcyBvd24gc2hvdyBub3csIGNhbGxlZCBcXFwiQmV0dGVyIENhbGwgU2F1bFxcXCIuJyxcXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWI6ICczMiBFcGlzb2RlcycsXFxuICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICBdLFxcbiAgICAgICAgICAgICAgICBleGFtcGxlczE6IGBcXG4gICAgICAgICAgICAgICAgICAgIDxtLWxpc3QgY2xhc3M9XFxcImRlbW8tbGlzdC1pdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8bS1saXN0LWl0ZW0+QnJ5YW4gQ3JhbnN0b248L20tbGlzdC1pdGVtPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxtLWxpc3QtaXRlbT5BYXJvbiBQYXVsPC9tLWxpc3QtaXRlbT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8bS1saXN0LWl0ZW0+Qm9iIE9kZW5raXJrPC9tLWxpc3QtaXRlbT5cXG4gICAgICAgICAgICAgICAgICAgIDwvbS1saXN0PlxcbiAgICAgICAgICAgICAgICBgLFxcbiAgICAgICAgICAgICAgICBleGFtcGxlczI6IGBcXG4gICAgICAgICAgICAgICAgICAgIDxtLWxpc3QgY2xhc3M9XFxcImRlbW8tbGlzdC1pdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8bS1saXN0LWl0ZW0gaWNvbj1cXFwicGVyc29uXFxcIj5CcnlhbiBDcmFuc3RvbjwvbS1saXN0LWl0ZW0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPG0tbGlzdC1pdGVtIGljb249XFxcInBlcnNvblxcXCI+QWFyb24gUGF1bDwvbS1saXN0LWl0ZW0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPG0tbGlzdC1pdGVtIGljb249XFxcInBlcnNvblxcXCI+Qm9iIE9kZW5raXJrPC9tLWxpc3QtaXRlbT5cXG4gICAgICAgICAgICAgICAgICAgIDwvbS1saXN0PlxcbiAgICAgICAgICAgICAgICBgLFxcbiAgICAgICAgICAgICAgICBleGFtcGxlczM6IGBcXG4gICAgICAgICAgICAgICAgICAgIDxtLWxpc3QgY2xhc3M9XFxcImRlbW8tbGlzdC1pdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8bS1saXN0LWl0ZW0gaWNvbi1hdmF0YXI9XFxcInBlcnNvblxcXCI+QnJ5YW4gQ3JhbnN0b248L20tbGlzdC1pdGVtPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxtLWxpc3QtaXRlbSBpY29uLWF2YXRhcj1cXFwicGVyc29uXFxcIj5BYXJvbiBQYXVsPC9tLWxpc3QtaXRlbT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8bS1saXN0LWl0ZW0gaWNvbi1hdmF0YXI9XFxcInBlcnNvblxcXCI+Qm9iIE9kZW5raXJrPC9tLWxpc3QtaXRlbT5cXG4gICAgICAgICAgICAgICAgICAgIDwvbS1saXN0PlxcbiAgICAgICAgICAgICAgICBgLFxcbiAgICAgICAgICAgICAgICBleGFtcGxlczQ6IGBcXG4gICAgICAgICAgICAgICAgICAgIDxtLWxpc3QgY2xhc3M9XFxcImRlbW8tbGlzdC1pdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8bS1saXN0LWl0ZW0gaWNvbi1hdmF0YXI9XFxcInBlcnNvblxcXCIgdi1mb3I9XFxcInBlcnNvbiBpbiBwZW9wbGVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3BlcnNvbi5uYW1lfX1cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XFxcImFjdGlvblxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bS1zd2l0Y2ggdi1tb2RlbD1cXFwicGVyc29uLm9uXFxcIj48L20tc3dpdGNoPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbS1saXN0LWl0ZW0+XFxuICAgICAgICAgICAgICAgICAgICA8L20tbGlzdD5cXG4gICAgICAgICAgICAgICAgYCxcXG4gICAgICAgICAgICAgICAgZXhhbXBsZXM1OiBgXFxuICAgICAgICAgICAgICAgICAgICA8bS1saXN0IGNsYXNzPVxcXCJkZW1vLWxpc3QtaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgIDxtLWxpc3QtaXRlbSBpY29uLWF2YXRhcj1cXFwicGVyc29uXFxcIiB2LWZvcj1cXFwicGVyc29uIGluIHBlb3BsZVxcXCIgOnN1Yi10aXRsZT1cXFwicGVyc29uLnN1YlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7cGVyc29uLm5hbWV9fVxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cXFwiYWN0aW9uXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJtZGwtbGlzdF9faXRlbS1zZWNvbmRhcnktYWN0aW9uXFxcIiBocmVmPVxcXCIjXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwibWF0ZXJpYWwtaWNvbnNcXFwiPnN0YXI8L2k+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9tLWxpc3QtaXRlbT5cXG4gICAgICAgICAgICAgICAgICAgIDwvbS1saXN0PlxcbiAgICAgICAgICAgICAgICBgLFxcbiAgICAgICAgICAgICAgICBleGFtcGxlczY6IGBcXG4gICAgICAgICAgICAgICAgICAgIDxtLWxpc3QgY2xhc3M9XFxcImRlbW8tbGlzdC10aHJlZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPG0tbGlzdC1pdGVtIGljb24tYXZhdGFyPVxcXCJwZXJzb25cXFwiIHYtZm9yPVxcXCJwZXJzb24gaW4gcGVvcGxlXFxcIiA6dGV4dD1cXFwicGVyc29uLnRleHRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3BlcnNvbi5uYW1lfX1cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XFxcImFjdGlvblxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwibWRsLWxpc3RfX2l0ZW0tc2Vjb25kYXJ5LWFjdGlvblxcXCIgaHJlZj1cXFwiI1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcIm1hdGVyaWFsLWljb25zXFxcIj5zdGFyPC9pPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbS1saXN0LWl0ZW0+XFxuICAgICAgICAgICAgICAgICAgICA8L20tbGlzdD5cXG4gICAgICAgICAgICAgICAgYCxcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG48L3NjcmlwdD5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTJjOGFlYWUzIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvbGlzdHMudnVlXG4vLyBtb2R1bGUgaWQgPSA2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPGgzPkxpc3RzPC9oMz5cblxuICAgICAgICA8bS1saXN0IGNsYXNzPVwiZGVtby1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgIDxtLWxpc3QtaXRlbT5CcnlhbiBDcmFuc3RvbjwvbS1saXN0LWl0ZW0+XG4gICAgICAgICAgICA8bS1saXN0LWl0ZW0+QWFyb24gUGF1bDwvbS1saXN0LWl0ZW0+XG4gICAgICAgICAgICA8bS1saXN0LWl0ZW0+Qm9iIE9kZW5raXJrPC9tLWxpc3QtaXRlbT5cbiAgICAgICAgPC9tLWxpc3Q+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXY+Q29kZTo8L2Rpdj5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBjb2xzPVwiMTEwXCIgcm93cz1cIjEwXCIgOnZhbHVlPVwiZXhhbXBsZXMxXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGhyPlxuXG4gICAgICAgIDxtLWxpc3QgY2xhc3M9XCJkZW1vLWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgPG0tbGlzdC1pdGVtIGljb249XCJwZXJzb25cIj5CcnlhbiBDcmFuc3RvbjwvbS1saXN0LWl0ZW0+XG4gICAgICAgICAgICA8bS1saXN0LWl0ZW0gaWNvbj1cInBlcnNvblwiPkFhcm9uIFBhdWw8L20tbGlzdC1pdGVtPlxuICAgICAgICAgICAgPG0tbGlzdC1pdGVtIGljb249XCJwZXJzb25cIj5Cb2IgT2Rlbmtpcms8L20tbGlzdC1pdGVtPlxuICAgICAgICA8L20tbGlzdD5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdj5Db2RlOjwvZGl2PlxuICAgICAgICAgICAgPHRleHRhcmVhIGNvbHM9XCIxMTBcIiByb3dzPVwiMTBcIiA6dmFsdWU9XCJleGFtcGxlczJcIj48L3RleHRhcmVhPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8aHI+XG5cbiAgICAgICAgPG0tbGlzdCBjbGFzcz1cImRlbW8tbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICA8bS1saXN0LWl0ZW0gaWNvbi1hdmF0YXI9XCJwZXJzb25cIj5CcnlhbiBDcmFuc3RvbjwvbS1saXN0LWl0ZW0+XG4gICAgICAgICAgICA8bS1saXN0LWl0ZW0gaWNvbi1hdmF0YXI9XCJwZXJzb25cIj5BYXJvbiBQYXVsPC9tLWxpc3QtaXRlbT5cbiAgICAgICAgICAgIDxtLWxpc3QtaXRlbSBpY29uLWF2YXRhcj1cInBlcnNvblwiPkJvYiBPZGVua2lyazwvbS1saXN0LWl0ZW0+XG4gICAgICAgIDwvbS1saXN0PlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2PkNvZGU6PC9kaXY+XG4gICAgICAgICAgICA8dGV4dGFyZWEgY29scz1cIjExMFwiIHJvd3M9XCIxMFwiIDp2YWx1ZT1cImV4YW1wbGVzM1wiPjwvdGV4dGFyZWE+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxocj5cblxuICAgICAgICA8bS1saXN0IGNsYXNzPVwiZGVtby1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgIDxtLWxpc3QtaXRlbSBpY29uLWF2YXRhcj1cInBlcnNvblwiIHYtZm9yPVwicGVyc29uIGluIHBlb3BsZVwiPlxuICAgICAgICAgICAgICAgIHt7cGVyc29uLm5hbWV9fVxuXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJhY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPG0tc3dpdGNoIHYtbW9kZWw9XCJwZXJzb24ub25cIj48L20tc3dpdGNoPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L20tbGlzdC1pdGVtPlxuICAgICAgICA8L20tbGlzdD5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdj5Db2RlOjwvZGl2PlxuICAgICAgICAgICAgPHRleHRhcmVhIGNvbHM9XCIxMTBcIiByb3dzPVwiMTBcIiA6dmFsdWU9XCJleGFtcGxlczRcIj48L3RleHRhcmVhPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8aHI+XG5cbiAgICAgICAgPG0tbGlzdCBjbGFzcz1cImRlbW8tbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICA8bS1saXN0LWl0ZW0gaWNvbi1hdmF0YXI9XCJwZXJzb25cIiB2LWZvcj1cInBlcnNvbiBpbiBwZW9wbGVcIiA6c3ViLXRpdGxlPVwicGVyc29uLnN1YlwiPlxuICAgICAgICAgICAgICAgIHt7cGVyc29uLm5hbWV9fVxuXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJhY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJtZGwtbGlzdF9faXRlbS1zZWNvbmRhcnktYWN0aW9uXCIgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5zdGFyPC9pPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvbS1saXN0LWl0ZW0+XG4gICAgICAgIDwvbS1saXN0PlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2PkNvZGU6PC9kaXY+XG4gICAgICAgICAgICA8dGV4dGFyZWEgY29scz1cIjExMFwiIHJvd3M9XCIxMFwiIDp2YWx1ZT1cImV4YW1wbGVzNVwiPjwvdGV4dGFyZWE+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxocj5cblxuICAgICAgICA8bS1saXN0IGNsYXNzPVwiZGVtby1saXN0LXRocmVlXCI+XG4gICAgICAgICAgICA8bS1saXN0LWl0ZW0gaWNvbi1hdmF0YXI9XCJwZXJzb25cIiB2LWZvcj1cInBlcnNvbiBpbiBwZW9wbGVcIiA6dGV4dD1cInBlcnNvbi50ZXh0XCI+XG4gICAgICAgICAgICAgICAge3twZXJzb24ubmFtZX19XG5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cImFjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm1kbC1saXN0X19pdGVtLXNlY29uZGFyeS1hY3Rpb25cIiBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPnN0YXI8L2k+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPC9tLWxpc3QtaXRlbT5cbiAgICAgICAgPC9tLWxpc3Q+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXY+Q29kZTo8L2Rpdj5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBjb2xzPVwiMTEwXCIgcm93cz1cIjEwXCIgOnZhbHVlPVwiZXhhbXBsZXM2XCI+PC90ZXh0YXJlYT5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c3R5bGU+XG4uZGVtby1saXN0LWl0ZW0ge1xuICB3aWR0aDogMzAwcHg7XG59XG5cbi5kZW1vLWxpc3QtdGhyZWUge1xuICB3aWR0aDogNjUwcHg7XG59XG48L3N0eWxlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0e1xuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgIH0sXG4gICAgICAgIGRhdGEoKXtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcGVvcGxlOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICduYW1lJzogJ0JyeWFuIENyYW5zdG9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0JzogJ0JyeWFuIENyYW5zdG9uIHBsYXllZCB0aGUgcm9sZSBvZiBXYWx0ZXIgaW4gQnJlYWtpbmcgQmFkLiBIZSBpcyBhbHNvIGtub3duIGZvciBwbGF5aW5nIEhhbCBpbiBNYWxjb20gaW4gdGhlIE1pZGRsZS4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWI6ICc2MiBFcGlzb2RlcycsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICduYW1lJzogJ0Fhcm9uIFBhdWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0Fhcm9uIFBhdWwgcGxheWVkIHRoZSByb2xlIG9mIEplc3NlIGluIEJyZWFraW5nIEJhZC4gSGUgYWxzbyBmZWF0dXJlZCBpbiB0aGUgXCJOZWVkIEZvciBTcGVlZFwiIE1vdmllLicsXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWI6ICc1MiBFcGlzb2RlcycsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICduYW1lJzogJ0JvYiBPZGVua2lyaycsXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdCb2IgT2RpbmtyaWsgcGxheWVkIHRoZSByb2xlIG9mIFNhdWwgaW4gQnJlYWtpbmcgQmFkLiBEdWUgdG8gcHVibGljIGZvbmRuZXNzIGZvciB0aGUgY2hhcmFjdGVyLCBCb2Igc3RhcnMgaW4gaGlzIG93biBzaG93IG5vdywgY2FsbGVkIFwiQmV0dGVyIENhbGwgU2F1bFwiLicsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWI6ICczMiBFcGlzb2RlcycsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBleGFtcGxlczE6IGBcbiAgICAgICAgICAgICAgICAgICAgPG0tbGlzdCBjbGFzcz1cImRlbW8tbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bS1saXN0LWl0ZW0+QnJ5YW4gQ3JhbnN0b248L20tbGlzdC1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG0tbGlzdC1pdGVtPkFhcm9uIFBhdWw8L20tbGlzdC1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG0tbGlzdC1pdGVtPkJvYiBPZGVua2lyazwvbS1saXN0LWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDwvbS1saXN0PlxuICAgICAgICAgICAgICAgIGAsXG4gICAgICAgICAgICAgICAgZXhhbXBsZXMyOiBgXG4gICAgICAgICAgICAgICAgICAgIDxtLWxpc3QgY2xhc3M9XCJkZW1vLWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG0tbGlzdC1pdGVtIGljb249XCJwZXJzb25cIj5CcnlhbiBDcmFuc3RvbjwvbS1saXN0LWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bS1saXN0LWl0ZW0gaWNvbj1cInBlcnNvblwiPkFhcm9uIFBhdWw8L20tbGlzdC1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG0tbGlzdC1pdGVtIGljb249XCJwZXJzb25cIj5Cb2IgT2Rlbmtpcms8L20tbGlzdC1pdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L20tbGlzdD5cbiAgICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgICAgIGV4YW1wbGVzMzogYFxuICAgICAgICAgICAgICAgICAgICA8bS1saXN0IGNsYXNzPVwiZGVtby1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtLWxpc3QtaXRlbSBpY29uLWF2YXRhcj1cInBlcnNvblwiPkJyeWFuIENyYW5zdG9uPC9tLWxpc3QtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtLWxpc3QtaXRlbSBpY29uLWF2YXRhcj1cInBlcnNvblwiPkFhcm9uIFBhdWw8L20tbGlzdC1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG0tbGlzdC1pdGVtIGljb24tYXZhdGFyPVwicGVyc29uXCI+Qm9iIE9kZW5raXJrPC9tLWxpc3QtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPC9tLWxpc3Q+XG4gICAgICAgICAgICAgICAgYCxcbiAgICAgICAgICAgICAgICBleGFtcGxlczQ6IGBcbiAgICAgICAgICAgICAgICAgICAgPG0tbGlzdCBjbGFzcz1cImRlbW8tbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bS1saXN0LWl0ZW0gaWNvbi1hdmF0YXI9XCJwZXJzb25cIiB2LWZvcj1cInBlcnNvbiBpbiBwZW9wbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3BlcnNvbi5uYW1lfX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwiYWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtLXN3aXRjaCB2LW1vZGVsPVwicGVyc29uLm9uXCI+PC9tLXN3aXRjaD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9tLWxpc3QtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPC9tLWxpc3Q+XG4gICAgICAgICAgICAgICAgYCxcbiAgICAgICAgICAgICAgICBleGFtcGxlczU6IGBcbiAgICAgICAgICAgICAgICAgICAgPG0tbGlzdCBjbGFzcz1cImRlbW8tbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPG0tbGlzdC1pdGVtIGljb24tYXZhdGFyPVwicGVyc29uXCIgdi1mb3I9XCJwZXJzb24gaW4gcGVvcGxlXCIgOnN1Yi10aXRsZT1cInBlcnNvbi5zdWJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3BlcnNvbi5uYW1lfX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwiYWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibWRsLWxpc3RfX2l0ZW0tc2Vjb25kYXJ5LWFjdGlvblwiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+c3RhcjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L20tbGlzdC1pdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L20tbGlzdD5cbiAgICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgICAgIGV4YW1wbGVzNjogYFxuICAgICAgICAgICAgICAgICAgICA8bS1saXN0IGNsYXNzPVwiZGVtby1saXN0LXRocmVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bS1saXN0LWl0ZW0gaWNvbi1hdmF0YXI9XCJwZXJzb25cIiB2LWZvcj1cInBlcnNvbiBpbiBwZW9wbGVcIiA6dGV4dD1cInBlcnNvbi50ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3twZXJzb24ubmFtZX19XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cImFjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm1kbC1saXN0X19pdGVtLXNlY29uZGFyeS1hY3Rpb25cIiBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPnN0YXI8L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9tLWxpc3QtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPC9tLWxpc3Q+XG4gICAgICAgICAgICAgICAgYCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGxpc3RzLnZ1ZT8yYTRmZmEwMiIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW19jKCdoMycsIFtfdm0uX3YoXCJMaXN0c1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS1saXN0Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRlbW8tbGlzdC1pdGVtXCJcbiAgfSwgW19jKCdtLWxpc3QtaXRlbScsIFtfdm0uX3YoXCJCcnlhbiBDcmFuc3RvblwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS1saXN0LWl0ZW0nLCBbX3ZtLl92KFwiQWFyb24gUGF1bFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS1saXN0LWl0ZW0nLCBbX3ZtLl92KFwiQm9iIE9kZW5raXJrXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIFtfYygnZGl2JywgW192bS5fdihcIkNvZGU6XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCd0ZXh0YXJlYScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJjb2xzXCI6IFwiMTEwXCIsXG4gICAgICBcInJvd3NcIjogXCIxMFwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0uZXhhbXBsZXMxXG4gICAgfVxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaHInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tbGlzdCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkZW1vLWxpc3QtaXRlbVwiXG4gIH0sIFtfYygnbS1saXN0LWl0ZW0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWNvblwiOiBcInBlcnNvblwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiQnJ5YW4gQ3JhbnN0b25cIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tbGlzdC1pdGVtJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImljb25cIjogXCJwZXJzb25cIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkFhcm9uIFBhdWxcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tbGlzdC1pdGVtJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImljb25cIjogXCJwZXJzb25cIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkJvYiBPZGVua2lya1wiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCBbX2MoJ2RpdicsIFtfdm0uX3YoXCJDb2RlOlwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndGV4dGFyZWEnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiY29sc1wiOiBcIjExMFwiLFxuICAgICAgXCJyb3dzXCI6IFwiMTBcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLmV4YW1wbGVzMlxuICAgIH1cbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2hyJyksIF92bS5fdihcIiBcIiksIF9jKCdtLWxpc3QnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZGVtby1saXN0LWl0ZW1cIlxuICB9LCBbX2MoJ20tbGlzdC1pdGVtJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImljb24tYXZhdGFyXCI6IFwicGVyc29uXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJCcnlhbiBDcmFuc3RvblwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS1saXN0LWl0ZW0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWNvbi1hdmF0YXJcIjogXCJwZXJzb25cIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkFhcm9uIFBhdWxcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tbGlzdC1pdGVtJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImljb24tYXZhdGFyXCI6IFwicGVyc29uXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJCb2IgT2RlbmtpcmtcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2JywgW19jKCdkaXYnLCBbX3ZtLl92KFwiQ29kZTpcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RleHRhcmVhJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImNvbHNcIjogXCIxMTBcIixcbiAgICAgIFwicm93c1wiOiBcIjEwXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5leGFtcGxlczNcbiAgICB9XG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdocicpLCBfdm0uX3YoXCIgXCIpLCBfYygnbS1saXN0Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRlbW8tbGlzdC1pdGVtXCJcbiAgfSwgX3ZtLl9sKChfdm0ucGVvcGxlKSwgZnVuY3Rpb24ocGVyc29uKSB7XG4gICAgcmV0dXJuIF9jKCdtLWxpc3QtaXRlbScsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwiaWNvbi1hdmF0YXJcIjogXCJwZXJzb25cIlxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBcIiArIF92bS5fcyhwZXJzb24ubmFtZSkgKyBcIlxcblxcbiAgICAgICAgICAgIFwiKSwgX2MoJ3RlbXBsYXRlJywge1xuICAgICAgc2xvdDogXCJhY3Rpb25cIlxuICAgIH0sIFtfYygnbS1zd2l0Y2gnLCB7XG4gICAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICB2YWx1ZTogKHBlcnNvbi5vbiksXG4gICAgICAgIGV4cHJlc3Npb246IFwicGVyc29uLm9uXCJcbiAgICAgIH1dLFxuICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgXCJ2YWx1ZVwiOiAocGVyc29uLm9uKVxuICAgICAgfSxcbiAgICAgIG9uOiB7XG4gICAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgcGVyc29uLm9uID0gJGV2ZW50XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KV0sIDEpXSwgMilcbiAgfSkpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2JywgW19jKCdkaXYnLCBbX3ZtLl92KFwiQ29kZTpcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RleHRhcmVhJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImNvbHNcIjogXCIxMTBcIixcbiAgICAgIFwicm93c1wiOiBcIjEwXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5leGFtcGxlczRcbiAgICB9XG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdocicpLCBfdm0uX3YoXCIgXCIpLCBfYygnbS1saXN0Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRlbW8tbGlzdC1pdGVtXCJcbiAgfSwgX3ZtLl9sKChfdm0ucGVvcGxlKSwgZnVuY3Rpb24ocGVyc29uKSB7XG4gICAgcmV0dXJuIF9jKCdtLWxpc3QtaXRlbScsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwiaWNvbi1hdmF0YXJcIjogXCJwZXJzb25cIixcbiAgICAgICAgXCJzdWItdGl0bGVcIjogcGVyc29uLnN1YlxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBcIiArIF92bS5fcyhwZXJzb24ubmFtZSkgKyBcIlxcblxcbiAgICAgICAgICAgIFwiKSwgX2MoJ3RlbXBsYXRlJywge1xuICAgICAgc2xvdDogXCJhY3Rpb25cIlxuICAgIH0sIFtfYygnYScsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1kbC1saXN0X19pdGVtLXNlY29uZGFyeS1hY3Rpb25cIixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwiaHJlZlwiOiBcIiNcIlxuICAgICAgfVxuICAgIH0sIFtfYygnaScsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1hdGVyaWFsLWljb25zXCJcbiAgICB9LCBbX3ZtLl92KFwic3RhclwiKV0pXSldKV0sIDIpXG4gIH0pKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIFtfYygnZGl2JywgW192bS5fdihcIkNvZGU6XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCd0ZXh0YXJlYScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJjb2xzXCI6IFwiMTEwXCIsXG4gICAgICBcInJvd3NcIjogXCIxMFwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0uZXhhbXBsZXM1XG4gICAgfVxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaHInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tbGlzdCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkZW1vLWxpc3QtdGhyZWVcIlxuICB9LCBfdm0uX2woKF92bS5wZW9wbGUpLCBmdW5jdGlvbihwZXJzb24pIHtcbiAgICByZXR1cm4gX2MoJ20tbGlzdC1pdGVtJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJpY29uLWF2YXRhclwiOiBcInBlcnNvblwiLFxuICAgICAgICBcInRleHRcIjogcGVyc29uLnRleHRcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgXCIgKyBfdm0uX3MocGVyc29uLm5hbWUpICsgXCJcXG5cXG4gICAgICAgICAgICBcIiksIF9jKCd0ZW1wbGF0ZScsIHtcbiAgICAgIHNsb3Q6IFwiYWN0aW9uXCJcbiAgICB9LCBbX2MoJ2EnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJtZGwtbGlzdF9faXRlbS1zZWNvbmRhcnktYWN0aW9uXCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcImhyZWZcIjogXCIjXCJcbiAgICAgIH1cbiAgICB9LCBbX2MoJ2knLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJtYXRlcmlhbC1pY29uc1wiXG4gICAgfSwgW192bS5fdihcInN0YXJcIildKV0pXSldLCAyKVxuICB9KSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCBbX2MoJ2RpdicsIFtfdm0uX3YoXCJDb2RlOlwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndGV4dGFyZWEnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiY29sc1wiOiBcIjExMFwiLFxuICAgICAgXCJyb3dzXCI6IFwiMTBcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLmV4YW1wbGVzNlxuICAgIH1cbiAgfSldKV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTJjOGFlYWUzXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0yYzhhZWFlMyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvbGlzdHMudnVlXG4vLyBtb2R1bGUgaWQgPSA2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9