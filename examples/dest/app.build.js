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
	
	var _nav = __webpack_require__(3);
	
	var _nav2 = _interopRequireDefault(_nav);
	
	var _textfields = __webpack_require__(6);
	
	var _textfields2 = _interopRequireDefault(_textfields);
	
	var _buttons = __webpack_require__(9);
	
	var _buttons2 = _interopRequireDefault(_buttons);
	
	var _snackbar = __webpack_require__(12);
	
	var _snackbar2 = _interopRequireDefault(_snackbar);
	
	var _selects = __webpack_require__(15);
	
	var _selects2 = _interopRequireDefault(_selects);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// const components = {
	//   ExNav,
	// }
	
	// import Vue from 'vue';
	Vue.use(_vueRouter2.default);
	Vue.use(VueReusableMaterialComponents);
	
	var routes = [{ path: '/textfields', component: _textfields2.default, name: 'textfields' }, { path: '/buttons', component: _buttons2.default }, { path: '/snackbar', component: _snackbar2.default }, { path: '/selects', component: _selects2.default }, { path: '*', redirect: { name: 'textfields' } }];
	
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
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* script */
	__vue_exports__ = __webpack_require__(4);
	
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
/* 4 */
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
	
	exports.default = {
	    data: function data() {
	        return {};
	    }
	};

/***/ },
/* 5 */
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
	      "to": "/textfields"
	    }
	  }, [_vm._v("\n            Text Fields\n        ")]), _vm._v(" "), _c('router-link', {
	    staticClass: "mdl-navigation__link",
	    attrs: {
	      "to": "/buttons"
	    }
	  }, [_vm._v("\n            Buttons\n        ")]), _vm._v(" "), _c('router-link', {
	    staticClass: "mdl-navigation__link",
	    attrs: {
	      "to": "/snackbar"
	    }
	  }, [_vm._v("\n            Snackbar\n        ")]), _vm._v(" "), _c('router-link', {
	    staticClass: "mdl-navigation__link",
	    attrs: {
	      "to": "/selects"
	    }
	  }, [_vm._v("\n            Selects\n        ")])], 1)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-3747e21e", module.exports)
	  }
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* script */
	__vue_exports__ = __webpack_require__(7);
	
	/* template */
	var __vue_template__ = __webpack_require__(8);
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
/* 7 */
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
/* 8 */
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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};
	
	/* script */
	__vue_exports__ = __webpack_require__(10);
	
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
/* 10 */
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
/* 11 */
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
/* 12 */
/***/ function(module, exports, __webpack_require__) {

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
/* 13 */
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
/* 14 */
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
/* 15 */
/***/ function(module, exports, __webpack_require__) {

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
/* 16 */
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
	    data: function data() {
	        return {
	            testData: [{
	                name: 'NodeJs', value: 1
	            }, {
	                name: 'JS', value: 2
	            }, {
	                name: 'PHP', value: 3
	            }],
	
	            m: { name: 'NodeJs', value: 1 }
	        };
	    }
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('m-select', {
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
	  }), _vm._v(" "), _c('div', [_vm._v(_vm._s(_vm.m))])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-7b4b7bc5", module.exports)
	  }
	}

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMmFiY2EzNDI4ODMxZWUyNTc2MjEiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1yb3V0ZXIvZGlzdC92dWUtcm91dGVyLmNvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi9+L3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9uYXYudnVlIiwid2VicGFjazovLy9uYXYudnVlIiwid2VicGFjazovLy8uL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL25hdi52dWU/NjQ1NCIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy90ZXh0ZmllbGRzLnZ1ZSIsIndlYnBhY2s6Ly8vdGV4dGZpZWxkcy52dWUiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvdGV4dGZpZWxkcy52dWU/MzE0NyIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9idXR0b25zLnZ1ZSIsIndlYnBhY2s6Ly8vYnV0dG9ucy52dWUiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvYnV0dG9ucy52dWU/ZDE3NSIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9zbmFja2Jhci52dWUiLCJ3ZWJwYWNrOi8vL3NuYWNrYmFyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9zbmFja2Jhci52dWU/YjMxYSIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9zZWxlY3RzLnZ1ZSIsIndlYnBhY2s6Ly8vc2VsZWN0cy52dWUiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvc2VsZWN0cy52dWU/MWM4YiJdLCJuYW1lcyI6WyJWdWUiLCJ1c2UiLCJWdWVSZXVzYWJsZU1hdGVyaWFsQ29tcG9uZW50cyIsInJvdXRlcyIsInBhdGgiLCJjb21wb25lbnQiLCJuYW1lIiwicmVkaXJlY3QiLCJyb3V0ZXIiLCJiYXNlIiwibGlua0FjdGl2ZUNsYXNzIiwiZWwiLCJjb21wb25lbnRzIiwiRXhOYXYiLCJtZXRob2RzIiwib25TdWJtaXQiLCJlIiwiY29uc29sZSIsImxvZyIsImZvcm0iLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImVtYWlsIiwiX192dWVfZXhwb3J0c19fIiwiX192dWVfb3B0aW9uc19fIiwiX192dWVfc3R5bGVzX18iLCJyZXF1aXJlIiwiX192dWVfdGVtcGxhdGVfXyIsImRlZmF1bHQiLCJPYmplY3QiLCJrZXlzIiwic29tZSIsImtleSIsImVycm9yIiwib3B0aW9ucyIsIl9fZmlsZSIsInJlbmRlciIsInN0YXRpY1JlbmRlckZucyIsImhvdEFQSSIsImluc3RhbGwiLCJjb21wYXRpYmxlIiwibW9kdWxlIiwiaG90IiwiYWNjZXB0IiwiZGF0YSIsImNyZWF0ZVJlY29yZCIsInJlbG9hZCIsImZ1bmN0aW9uYWwiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDckNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUE7QUFDQTtBQUNBOztBQVZBO0FBWUFBLEtBQUlDLEdBQUo7QUFDQUQsS0FBSUMsR0FBSixDQUFRQyw2QkFBUjs7QUFHQSxLQUFNQyxTQUFTLENBQ2IsRUFBRUMsTUFBTSxhQUFSLEVBQXVCQywrQkFBdkIsRUFBOENDLE1BQU0sWUFBcEQsRUFEYSxFQUViLEVBQUVGLE1BQU0sVUFBUixFQUFvQkMsNEJBQXBCLEVBRmEsRUFH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QTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBeUQ7QUFDekQ7QUFDQTtBQUNBO0FBQ0EsT0FBTSxFQUFFO0FBQ1IsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQSwyQkFBMEIsMkJBQTJCO0FBQ3JEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE0QixZQUFZO0FBQ3hDLE1BQUs7QUFDTDtBQUNBLDBCQUF5QixZQUFZO0FBQ3JDO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBQzs7QUFFRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTBCLGlCQUFpQjs7QUFFM0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDRCOzs7Ozs7O0FDcGpFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDZCQUE0QixVQUFVOzs7Ozs7Ozs7OztBQ25MdEMsS0FBSUMsZUFBSixFQUFxQkMsZUFBckI7QUFDQSxLQUFJQyxpQkFBaUIsRUFBckI7O0FBRUE7QUFDQUYsbUJBQWtCLG1CQUFBRyxDQUFRLENBQVIsQ0FBbEI7O0FBRUE7QUFDQSxLQUFJQyxtQkFBbUIsbUJBQUFELENBQVEsQ0FBUixDQUF2QjtBQUNBRixtQkFBa0JELGtCQUFrQkEsbUJBQW1CLEVBQXZEO0FBQ0EsS0FDRSxRQUFPQSxnQkFBZ0JLLE9BQXZCLE1BQW1DLFFBQW5DLElBQ0EsT0FBT0wsZ0JBQWdCSyxPQUF2QixLQUFtQyxVQUZyQyxFQUdFO0FBQ0YsT0FBSUMsT0FBT0MsSUFBUCxDQUFZUCxlQUFaLEVBQTZCUSxJQUE3QixDQUFrQyxVQUFVQyxHQUFWLEVBQWU7QUFBRSxZQUFPQSxRQUFRLFNBQVIsSUFBcUJBLFFBQVEsWUFBcEM7QUFBa0QsSUFBckcsQ0FBSixFQUE0RztBQUFDZixhQUFRZ0IsS0FBUixDQUFjLGlEQUFkO0FBQWlFO0FBQzlLVCxxQkFBa0JELGtCQUFrQkEsZ0JBQWdCSyxPQUFwRDtBQUNDO0FBQ0QsS0FBSSxPQUFPSixlQUFQLEtBQTJCLFVBQS9CLEVBQTJDO0FBQ3pDQSxxQkFBa0JBLGdCQUFnQlUsT0FBbEM7QUFDRDtBQUNEVixpQkFBZ0JXLE1BQWhCLEdBQXlCLG1FQUF6QjtBQUNBWCxpQkFBZ0JZLE1BQWhCLEdBQXlCVCxpQkFBaUJTLE1BQTFDO0FBQ0FaLGlCQUFnQmEsZUFBaEIsR0FBa0NWLGlCQUFpQlUsZUFBbkQ7O0FBRUE7QUFDQSxLQUFJLEtBQUosRUFBZ0I7QUFBQyxJQUFDLFlBQVk7QUFDNUIsU0FBSUMsU0FBU1osUUFBUSxvQkFBUixDQUFiO0FBQ0FZLFlBQU9DLE9BQVAsQ0FBZWIsUUFBUSxLQUFSLENBQWYsRUFBK0IsS0FBL0I7QUFDQSxTQUFJLENBQUNZLE9BQU9FLFVBQVosRUFBd0I7QUFDeEJDLFlBQU9DLEdBQVAsQ0FBV0MsTUFBWDtBQUNBLFNBQUksQ0FBQ0YsT0FBT0MsR0FBUCxDQUFXRSxJQUFoQixFQUFzQjtBQUNwQk4sY0FBT08sWUFBUCxDQUFvQixpQkFBcEIsRUFBdUNyQixlQUF2QztBQUNELE1BRkQsTUFFTztBQUNMYyxjQUFPUSxNQUFQLENBQWMsaUJBQWQsRUFBaUN0QixlQUFqQztBQUNEO0FBQ0YsSUFWZ0I7QUFVWjtBQUNMLEtBQUlBLGdCQUFnQnVCLFVBQXBCLEVBQWdDO0FBQUM5QixXQUFRZ0IsS0FBUixDQUFjLCtIQUFkO0FBQStJOztBQUVoTFEsUUFBT08sT0FBUCxHQUFpQnpCLGVBQWpCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTs7OzJCQUVBO2dCQUNBO0FBQ0E7QUFIQSxHOzs7Ozs7QUMxQkEsaUJBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0EsSUFBRztBQUNIO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNILEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7O0FDbkNBLEtBQUlBLGVBQUosRUFBcUJDLGVBQXJCO0FBQ0EsS0FBSUMsaUJBQWlCLEVBQXJCOztBQUVBO0FBQ0FGLG1CQUFrQixtQkFBQUcsQ0FBUSxDQUFSLENBQWxCOztBQUVBO0FBQ0EsS0FBSUMsbUJBQW1CLG1CQUFBRCxDQUFRLENBQVIsQ0FBdkI7QUFDQUYsbUJBQWtCRCxrQkFBa0JBLG1CQUFtQixFQUF2RDtBQUNBLEtBQ0UsUUFBT0EsZ0JBQWdCSyxPQUF2QixNQUFtQyxRQUFuQyxJQUNBLE9BQU9MLGdCQUFnQkssT0FBdkIsS0FBbUMsVUFGckMsRUFHRTtBQUNGLE9BQUlDLE9BQU9DLElBQVAsQ0FBWVAsZUFBWixFQUE2QlEsSUFBN0IsQ0FBa0MsVUFBVUMsR0FBVixFQUFlO0FBQUUsWUFBT0EsUUFBUSxTQUFSLElBQXFCQSxRQUFRLFlBQXBDO0FBQWtELElBQXJHLENBQUosRUFBNEc7QUFBQ2YsYUFBUWdCLEtBQVIsQ0FBYyxpREFBZDtBQUFpRTtBQUM5S1QscUJBQWtCRCxrQkFBa0JBLGdCQUFnQkssT0FBcEQ7QUFDQztBQUNELEtBQUksT0FBT0osZUFBUCxLQUEyQixVQUEvQixFQUEyQztBQUN6Q0EscUJBQWtCQSxnQkFBZ0JVLE9BQWxDO0FBQ0Q7QUFDRFYsaUJBQWdCVyxNQUFoQixHQUF5QiwwRUFBekI7QUFDQVgsaUJBQWdCWSxNQUFoQixHQUF5QlQsaUJBQWlCUyxNQUExQztBQUNBWixpQkFBZ0JhLGVBQWhCLEdBQWtDVixpQkFBaUJVLGVBQW5EOztBQUVBO0FBQ0EsS0FBSSxLQUFKLEVBQWdCO0FBQUMsSUFBQyxZQUFZO0FBQzVCLFNBQUlDLFNBQVNaLFFBQVEsb0JBQVIsQ0FBYjtBQUNBWSxZQUFPQyxPQUFQLENBQWViLFFBQVEsS0FBUixDQUFmLEVBQStCLEtBQS9CO0FBQ0EsU0FBSSxDQUFDWSxPQUFPRSxVQUFaLEVBQXdCO0FBQ3hCQyxZQUFPQyxHQUFQLENBQVdDLE1BQVg7QUFDQSxTQUFJLENBQUNGLE9BQU9DLEdBQVAsQ0FBV0UsSUFBaEIsRUFBc0I7QUFDcEJOLGNBQU9PLFlBQVAsQ0FBb0IsaUJBQXBCLEVBQXVDckIsZUFBdkM7QUFDRCxNQUZELE1BRU87QUFDTGMsY0FBT1EsTUFBUCxDQUFjLGlCQUFkLEVBQWlDdEIsZUFBakM7QUFDRDtBQUNGLElBVmdCO0FBVVo7QUFDTCxLQUFJQSxnQkFBZ0J1QixVQUFwQixFQUFnQztBQUFDOUIsV0FBUWdCLEtBQVIsQ0FBYyxzSUFBZDtBQUFzSjs7QUFFdkxRLFFBQU9PLE9BQVAsR0FBaUJ6QixlQUFqQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDU0E7OzsyQkFFQTs7QUFPQTs7NEJBRUE7MkJBQ0E7d0JBR0E7QUFMQTtBQVBBO0FBYUE7QUFmQSxHOzs7Ozs7QUMvQ0EsaUJBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSw2QkFBNEIsR0FBRyxRQUFRLEdBQUc7QUFDMUM7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLHFCQUFvQixHQUFHO0FBQ3ZCLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EscUJBQW9CLEdBQUc7QUFDdkI7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7OztBQ3ZIQSxLQUFJQSxlQUFKLEVBQXFCQyxlQUFyQjtBQUNBLEtBQUlDLGlCQUFpQixFQUFyQjs7QUFFQTtBQUNBRixtQkFBa0IsbUJBQUFHLENBQVEsRUFBUixDQUFsQjs7QUFFQTtBQUNBLEtBQUlDLG1CQUFtQixtQkFBQUQsQ0FBUSxFQUFSLENBQXZCO0FBQ0FGLG1CQUFrQkQsa0JBQWtCQSxtQkFBbUIsRUFBdkQ7QUFDQSxLQUNFLFFBQU9BLGdCQUFnQkssT0FBdkIsTUFBbUMsUUFBbkMsSUFDQSxPQUFPTCxnQkFBZ0JLLE9BQXZCLEtBQW1DLFVBRnJDLEVBR0U7QUFDRixPQUFJQyxPQUFPQyxJQUFQLENBQVlQLGVBQVosRUFBNkJRLElBQTdCLENBQWtDLFVBQVVDLEdBQVYsRUFBZTtBQUFFLFlBQU9BLFFBQVEsU0FBUixJQUFxQkEsUUFBUSxZQUFwQztBQUFrRCxJQUFyRyxDQUFKLEVBQTRHO0FBQUNmLGFBQVFnQixLQUFSLENBQWMsaURBQWQ7QUFBaUU7QUFDOUtULHFCQUFrQkQsa0JBQWtCQSxnQkFBZ0JLLE9BQXBEO0FBQ0M7QUFDRCxLQUFJLE9BQU9KLGVBQVAsS0FBMkIsVUFBL0IsRUFBMkM7QUFDekNBLHFCQUFrQkEsZ0JBQWdCVSxPQUFsQztBQUNEO0FBQ0RWLGlCQUFnQlcsTUFBaEIsR0FBeUIsdUVBQXpCO0FBQ0FYLGlCQUFnQlksTUFBaEIsR0FBeUJULGlCQUFpQlMsTUFBMUM7QUFDQVosaUJBQWdCYSxlQUFoQixHQUFrQ1YsaUJBQWlCVSxlQUFuRDs7QUFFQTtBQUNBLEtBQUksS0FBSixFQUFnQjtBQUFDLElBQUMsWUFBWTtBQUM1QixTQUFJQyxTQUFTWixRQUFRLG9CQUFSLENBQWI7QUFDQVksWUFBT0MsT0FBUCxDQUFlYixRQUFRLEtBQVIsQ0FBZixFQUErQixLQUEvQjtBQUNBLFNBQUksQ0FBQ1ksT0FBT0UsVUFBWixFQUF3QjtBQUN4QkMsWUFBT0MsR0FBUCxDQUFXQyxNQUFYO0FBQ0EsU0FBSSxDQUFDRixPQUFPQyxHQUFQLENBQVdFLElBQWhCLEVBQXNCO0FBQ3BCTixjQUFPTyxZQUFQLENBQW9CLGlCQUFwQixFQUF1Q3JCLGVBQXZDO0FBQ0QsTUFGRCxNQUVPO0FBQ0xjLGNBQU9RLE1BQVAsQ0FBYyxpQkFBZCxFQUFpQ3RCLGVBQWpDO0FBQ0Q7QUFDRixJQVZnQjtBQVVaO0FBQ0wsS0FBSUEsZ0JBQWdCdUIsVUFBcEIsRUFBZ0M7QUFBQzlCLFdBQVFnQixLQUFSLENBQWMsbUlBQWQ7QUFBbUo7O0FBRXBMUSxRQUFPTyxPQUFQLEdBQWlCekIsZUFBakIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7OzsyQkFFQTs7QUFXQTtBQVZBO0FBV0E7Ozt5Q0FFQTttQkFDQTtBQUVBO0FBSkE7QUFkQSxHOzs7Ozs7QUN6QkEsaUJBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7QUMxQ0EsS0FBSUEsZUFBSixFQUFxQkMsZUFBckI7QUFDQSxLQUFJQyxpQkFBaUIsRUFBckI7O0FBRUE7QUFDQUYsbUJBQWtCLG1CQUFBRyxDQUFRLEVBQVIsQ0FBbEI7O0FBRUE7QUFDQSxLQUFJQyxtQkFBbUIsbUJBQUFELENBQVEsRUFBUixDQUF2QjtBQUNBRixtQkFBa0JELGtCQUFrQkEsbUJBQW1CLEVBQXZEO0FBQ0EsS0FDRSxRQUFPQSxnQkFBZ0JLLE9BQXZCLE1BQW1DLFFBQW5DLElBQ0EsT0FBT0wsZ0JBQWdCSyxPQUF2QixLQUFtQyxVQUZyQyxFQUdFO0FBQ0YsT0FBSUMsT0FBT0MsSUFBUCxDQUFZUCxlQUFaLEVBQTZCUSxJQUE3QixDQUFrQyxVQUFVQyxHQUFWLEVBQWU7QUFBRSxZQUFPQSxRQUFRLFNBQVIsSUFBcUJBLFFBQVEsWUFBcEM7QUFBa0QsSUFBckcsQ0FBSixFQUE0RztBQUFDZixhQUFRZ0IsS0FBUixDQUFjLGlEQUFkO0FBQWlFO0FBQzlLVCxxQkFBa0JELGtCQUFrQkEsZ0JBQWdCSyxPQUFwRDtBQUNDO0FBQ0QsS0FBSSxPQUFPSixlQUFQLEtBQTJCLFVBQS9CLEVBQTJDO0FBQ3pDQSxxQkFBa0JBLGdCQUFnQlUsT0FBbEM7QUFDRDtBQUNEVixpQkFBZ0JXLE1BQWhCLEdBQXlCLHdFQUF6QjtBQUNBWCxpQkFBZ0JZLE1BQWhCLEdBQXlCVCxpQkFBaUJTLE1BQTFDO0FBQ0FaLGlCQUFnQmEsZUFBaEIsR0FBa0NWLGlCQUFpQlUsZUFBbkQ7O0FBRUE7QUFDQSxLQUFJLEtBQUosRUFBZ0I7QUFBQyxJQUFDLFlBQVk7QUFDNUIsU0FBSUMsU0FBU1osUUFBUSxvQkFBUixDQUFiO0FBQ0FZLFlBQU9DLE9BQVAsQ0FBZWIsUUFBUSxLQUFSLENBQWYsRUFBK0IsS0FBL0I7QUFDQSxTQUFJLENBQUNZLE9BQU9FLFVBQVosRUFBd0I7QUFDeEJDLFlBQU9DLEdBQVAsQ0FBV0MsTUFBWDtBQUNBLFNBQUksQ0FBQ0YsT0FBT0MsR0FBUCxDQUFXRSxJQUFoQixFQUFzQjtBQUNwQk4sY0FBT08sWUFBUCxDQUFvQixpQkFBcEIsRUFBdUNyQixlQUF2QztBQUNELE1BRkQsTUFFTztBQUNMYyxjQUFPUSxNQUFQLENBQWMsaUJBQWQsRUFBaUN0QixlQUFqQztBQUNEO0FBQ0YsSUFWZ0I7QUFVWjtBQUNMLEtBQUlBLGdCQUFnQnVCLFVBQXBCLEVBQWdDO0FBQUM5QixXQUFRZ0IsS0FBUixDQUFjLG9JQUFkO0FBQW9KOztBQUVyTFEsUUFBT08sT0FBUCxHQUFpQnpCLGVBQWpCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7OzsyQkFFQTs7QUFNQTtBQUxBO0FBT0E7Ozs7cUNBRUE7OzBCQUVBOzZCQUNBOzBCQUNBOzhEQUNBO2lDQUNBO0FBRUE7QUFQQTtBQVNBO0FBWEE7QUFWQSxHOzs7Ozs7QUNkQSxpQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7QUMvQkEsS0FBSUEsZUFBSixFQUFxQkMsZUFBckI7QUFDQSxLQUFJQyxpQkFBaUIsRUFBckI7O0FBRUE7QUFDQUYsbUJBQWtCLG1CQUFBRyxDQUFRLEVBQVIsQ0FBbEI7O0FBRUE7QUFDQSxLQUFJQyxtQkFBbUIsbUJBQUFELENBQVEsRUFBUixDQUF2QjtBQUNBRixtQkFBa0JELGtCQUFrQkEsbUJBQW1CLEVBQXZEO0FBQ0EsS0FDRSxRQUFPQSxnQkFBZ0JLLE9BQXZCLE1BQW1DLFFBQW5DLElBQ0EsT0FBT0wsZ0JBQWdCSyxPQUF2QixLQUFtQyxVQUZyQyxFQUdFO0FBQ0YsT0FBSUMsT0FBT0MsSUFBUCxDQUFZUCxlQUFaLEVBQTZCUSxJQUE3QixDQUFrQyxVQUFVQyxHQUFWLEVBQWU7QUFBRSxZQUFPQSxRQUFRLFNBQVIsSUFBcUJBLFFBQVEsWUFBcEM7QUFBa0QsSUFBckcsQ0FBSixFQUE0RztBQUFDZixhQUFRZ0IsS0FBUixDQUFjLGlEQUFkO0FBQWlFO0FBQzlLVCxxQkFBa0JELGtCQUFrQkEsZ0JBQWdCSyxPQUFwRDtBQUNDO0FBQ0QsS0FBSSxPQUFPSixlQUFQLEtBQTJCLFVBQS9CLEVBQTJDO0FBQ3pDQSxxQkFBa0JBLGdCQUFnQlUsT0FBbEM7QUFDRDtBQUNEVixpQkFBZ0JXLE1BQWhCLEdBQXlCLHVFQUF6QjtBQUNBWCxpQkFBZ0JZLE1BQWhCLEdBQXlCVCxpQkFBaUJTLE1BQTFDO0FBQ0FaLGlCQUFnQmEsZUFBaEIsR0FBa0NWLGlCQUFpQlUsZUFBbkQ7O0FBRUE7QUFDQSxLQUFJLEtBQUosRUFBZ0I7QUFBQyxJQUFDLFlBQVk7QUFDNUIsU0FBSUMsU0FBU1osUUFBUSxvQkFBUixDQUFiO0FBQ0FZLFlBQU9DLE9BQVAsQ0FBZWIsUUFBUSxLQUFSLENBQWYsRUFBK0IsS0FBL0I7QUFDQSxTQUFJLENBQUNZLE9BQU9FLFVBQVosRUFBd0I7QUFDeEJDLFlBQU9DLEdBQVAsQ0FBV0MsTUFBWDtBQUNBLFNBQUksQ0FBQ0YsT0FBT0MsR0FBUCxDQUFXRSxJQUFoQixFQUFzQjtBQUNwQk4sY0FBT08sWUFBUCxDQUFvQixpQkFBcEIsRUFBdUNyQixlQUF2QztBQUNELE1BRkQsTUFFTztBQUNMYyxjQUFPUSxNQUFQLENBQWMsaUJBQWQsRUFBaUN0QixlQUFqQztBQUNEO0FBQ0YsSUFWZ0I7QUFVWjtBQUNMLEtBQUlBLGdCQUFnQnVCLFVBQXBCLEVBQWdDO0FBQUM5QixXQUFRZ0IsS0FBUixDQUFjLG1JQUFkO0FBQW1KOztBQUVwTFEsUUFBT08sT0FBUCxHQUFpQnpCLGVBQWpCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBOzs7MkJBRUE7Ozt3Q0FLQTtBQUZBLGNBREE7b0NBTUE7QUFGQTtxQ0FPQTtBQUpBOzt5Q0FNQTtBQWRBO0FBZUE7QUFqQkEsRzs7Ozs7O0FDVEEsaUJBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRSIsImZpbGUiOiJhcHAuYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAyYWJjYTM0Mjg4MzFlZTI1NzYyMSIsIi8vIGltcG9ydCBWdWUgZnJvbSAndnVlJztcbmltcG9ydCBWdWVSb3V0ZXIgZnJvbSAndnVlLXJvdXRlcidcbmltcG9ydCBFeE5hdiBmcm9tICcuL2NvbXBvbmVudHMvbmF2LnZ1ZSc7XG5pbXBvcnQgVGV4dEZpZWxkcyBmcm9tICcuL2NvbXBvbmVudHMvdGV4dGZpZWxkcy52dWUnO1xuaW1wb3J0IEJ1dHRvbnMgZnJvbSAnLi9jb21wb25lbnRzL2J1dHRvbnMudnVlJztcbmltcG9ydCBTbmFja2JhciBmcm9tICcuL2NvbXBvbmVudHMvc25hY2tiYXIudnVlJztcbmltcG9ydCBTZWxlY3RzIGZyb20gJy4vY29tcG9uZW50cy9zZWxlY3RzLnZ1ZSc7XG5cbi8vIGNvbnN0IGNvbXBvbmVudHMgPSB7XG4vLyAgIEV4TmF2LFxuLy8gfVxuXG5WdWUudXNlKFZ1ZVJvdXRlcik7XG5WdWUudXNlKFZ1ZVJldXNhYmxlTWF0ZXJpYWxDb21wb25lbnRzKTtcblxuXG5jb25zdCByb3V0ZXMgPSBbXG4gIHsgcGF0aDogJy90ZXh0ZmllbGRzJywgY29tcG9uZW50OiBUZXh0RmllbGRzLCBuYW1lOiAndGV4dGZpZWxkcyd9LFxuICB7IHBhdGg6ICcvYnV0dG9ucycsIGNvbXBvbmVudDogQnV0dG9ucyB9LFxuICB7IHBhdGg6ICcvc25hY2tiYXInLCBjb21wb25lbnQ6IFNuYWNrYmFyIH0sXG4gIHsgcGF0aDogJy9zZWxlY3RzJywgY29tcG9uZW50OiBTZWxlY3RzIH0sXG4gIHsgcGF0aDogJyonLCByZWRpcmVjdDogeyBuYW1lOiAndGV4dGZpZWxkcycgfX0sXG5dO1xuXG5jb25zdCByb3V0ZXIgPSBuZXcgVnVlUm91dGVyKHtcbiAgYmFzZTogJy9leGFtcGxlcy8nLFxuICBsaW5rQWN0aXZlQ2xhc3M6ICdtZGwtbmF2aWdhdGlvbl9fbGluay0tYWN0aXZlJyxcbiAgcm91dGVzXG59KTtcblxubmV3IFZ1ZSh7XG4gIGVsOiAnI2V4YW1wbGVzJyxcbiAgcm91dGVyLFxuICBjb21wb25lbnRzOiB7XG4gICAgRXhOYXYsXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBvblN1Ym1pdDogZnVuY3Rpb24oZSkge1xuICAgICAgY29uc29sZS5sb2codGhpcy5mb3JtLmZpcnN0TmFtZSk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmZvcm0ubGFzdE5hbWUpO1xuICAgICAgY29uc29sZS5sb2codGhpcy5mb3JtLmVtYWlsKTtcbiAgICB9XG4gIH1cbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2V4YW1wbGVzL3NyYy9hcHAuanMiLCIvKipcbiAgKiB2dWUtcm91dGVyIHYyLjEuMlxuICAqIChjKSAyMDE3IEV2YW4gWW91XG4gICogQGxpY2Vuc2UgTUlUXG4gICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBWaWV3ID0ge1xuICBuYW1lOiAncm91dGVyLXZpZXcnLFxuICBmdW5jdGlvbmFsOiB0cnVlLFxuICBwcm9wczoge1xuICAgIG5hbWU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdkZWZhdWx0J1xuICAgIH1cbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIgKGgsIHJlZikge1xuICAgIHZhciBwcm9wcyA9IHJlZi5wcm9wcztcbiAgICB2YXIgY2hpbGRyZW4gPSByZWYuY2hpbGRyZW47XG4gICAgdmFyIHBhcmVudCA9IHJlZi5wYXJlbnQ7XG4gICAgdmFyIGRhdGEgPSByZWYuZGF0YTtcblxuICAgIGRhdGEucm91dGVyVmlldyA9IHRydWVcblxuICAgIHZhciBuYW1lID0gcHJvcHMubmFtZVxuICAgIHZhciByb3V0ZSA9IHBhcmVudC4kcm91dGVcbiAgICB2YXIgY2FjaGUgPSBwYXJlbnQuX3JvdXRlclZpZXdDYWNoZSB8fCAocGFyZW50Ll9yb3V0ZXJWaWV3Q2FjaGUgPSB7fSlcblxuICAgIC8vIGRldGVybWluZSBjdXJyZW50IHZpZXcgZGVwdGgsIGFsc28gY2hlY2sgdG8gc2VlIGlmIHRoZSB0cmVlXG4gICAgLy8gaGFzIGJlZW4gdG9nZ2xlZCBpbmFjdGl2ZSBidXQga2VwdC1hbGl2ZS5cbiAgICB2YXIgZGVwdGggPSAwXG4gICAgdmFyIGluYWN0aXZlID0gZmFsc2VcbiAgICB3aGlsZSAocGFyZW50KSB7XG4gICAgICBpZiAocGFyZW50LiR2bm9kZSAmJiBwYXJlbnQuJHZub2RlLmRhdGEucm91dGVyVmlldykge1xuICAgICAgICBkZXB0aCsrXG4gICAgICB9XG4gICAgICBpZiAocGFyZW50Ll9pbmFjdGl2ZSkge1xuICAgICAgICBpbmFjdGl2ZSA9IHRydWVcbiAgICAgIH1cbiAgICAgIHBhcmVudCA9IHBhcmVudC4kcGFyZW50XG4gICAgfVxuICAgIGRhdGEucm91dGVyVmlld0RlcHRoID0gZGVwdGhcblxuICAgIC8vIHJlbmRlciBwcmV2aW91cyB2aWV3IGlmIHRoZSB0cmVlIGlzIGluYWN0aXZlIGFuZCBrZXB0LWFsaXZlXG4gICAgaWYgKGluYWN0aXZlKSB7XG4gICAgICByZXR1cm4gaChjYWNoZVtuYW1lXSwgZGF0YSwgY2hpbGRyZW4pXG4gICAgfVxuXG4gICAgdmFyIG1hdGNoZWQgPSByb3V0ZS5tYXRjaGVkW2RlcHRoXVxuICAgIC8vIHJlbmRlciBlbXB0eSBub2RlIGlmIG5vIG1hdGNoZWQgcm91dGVcbiAgICBpZiAoIW1hdGNoZWQpIHtcbiAgICAgIGNhY2hlW25hbWVdID0gbnVsbFxuICAgICAgcmV0dXJuIGgoKVxuICAgIH1cblxuICAgIHZhciBjb21wb25lbnQgPSBjYWNoZVtuYW1lXSA9IG1hdGNoZWQuY29tcG9uZW50c1tuYW1lXVxuXG4gICAgLy8gaW5qZWN0IGluc3RhbmNlIHJlZ2lzdHJhdGlvbiBob29rc1xuICAgIHZhciBob29rcyA9IGRhdGEuaG9vayB8fCAoZGF0YS5ob29rID0ge30pXG4gICAgaG9va3MuaW5pdCA9IGZ1bmN0aW9uICh2bm9kZSkge1xuICAgICAgbWF0Y2hlZC5pbnN0YW5jZXNbbmFtZV0gPSB2bm9kZS5jaGlsZFxuICAgIH1cbiAgICBob29rcy5wcmVwYXRjaCA9IGZ1bmN0aW9uIChvbGRWbm9kZSwgdm5vZGUpIHtcbiAgICAgIG1hdGNoZWQuaW5zdGFuY2VzW25hbWVdID0gdm5vZGUuY2hpbGRcbiAgICB9XG4gICAgaG9va3MuZGVzdHJveSA9IGZ1bmN0aW9uICh2bm9kZSkge1xuICAgICAgaWYgKG1hdGNoZWQuaW5zdGFuY2VzW25hbWVdID09PSB2bm9kZS5jaGlsZCkge1xuICAgICAgICBtYXRjaGVkLmluc3RhbmNlc1tuYW1lXSA9IHVuZGVmaW5lZFxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBoKGNvbXBvbmVudCwgZGF0YSwgY2hpbGRyZW4pXG4gIH1cbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGFzc2VydCAoY29uZGl0aW9uLCBtZXNzYWdlKSB7XG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKChcIlt2dWUtcm91dGVyXSBcIiArIG1lc3NhZ2UpKVxuICB9XG59XG5cbmZ1bmN0aW9uIHdhcm4gKGNvbmRpdGlvbiwgbWVzc2FnZSkge1xuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiBjb25zb2xlLndhcm4oKFwiW3Z1ZS1yb3V0ZXJdIFwiICsgbWVzc2FnZSkpXG4gIH1cbn1cblxuLyogICovXG5cbnZhciBlbmNvZGUgPSBlbmNvZGVVUklDb21wb25lbnRcbnZhciBkZWNvZGUgPSBkZWNvZGVVUklDb21wb25lbnRcblxuZnVuY3Rpb24gcmVzb2x2ZVF1ZXJ5IChcbiAgcXVlcnksXG4gIGV4dHJhUXVlcnlcbikge1xuICBpZiAoIGV4dHJhUXVlcnkgPT09IHZvaWQgMCApIGV4dHJhUXVlcnkgPSB7fTtcblxuICBpZiAocXVlcnkpIHtcbiAgICB2YXIgcGFyc2VkUXVlcnlcbiAgICB0cnkge1xuICAgICAgcGFyc2VkUXVlcnkgPSBwYXJzZVF1ZXJ5KHF1ZXJ5KVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihmYWxzZSwgZS5tZXNzYWdlKVxuICAgICAgcGFyc2VkUXVlcnkgPSB7fVxuICAgIH1cbiAgICBmb3IgKHZhciBrZXkgaW4gZXh0cmFRdWVyeSkge1xuICAgICAgcGFyc2VkUXVlcnlba2V5XSA9IGV4dHJhUXVlcnlba2V5XVxuICAgIH1cbiAgICByZXR1cm4gcGFyc2VkUXVlcnlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZXh0cmFRdWVyeVxuICB9XG59XG5cbmZ1bmN0aW9uIHBhcnNlUXVlcnkgKHF1ZXJ5KSB7XG4gIHZhciByZXMgPSB7fVxuXG4gIHF1ZXJ5ID0gcXVlcnkudHJpbSgpLnJlcGxhY2UoL14oXFw/fCN8JikvLCAnJylcblxuICBpZiAoIXF1ZXJ5KSB7XG4gICAgcmV0dXJuIHJlc1xuICB9XG5cbiAgcXVlcnkuc3BsaXQoJyYnKS5mb3JFYWNoKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgIHZhciBwYXJ0cyA9IHBhcmFtLnJlcGxhY2UoL1xcKy9nLCAnICcpLnNwbGl0KCc9JylcbiAgICB2YXIga2V5ID0gZGVjb2RlKHBhcnRzLnNoaWZ0KCkpXG4gICAgdmFyIHZhbCA9IHBhcnRzLmxlbmd0aCA+IDBcbiAgICAgID8gZGVjb2RlKHBhcnRzLmpvaW4oJz0nKSlcbiAgICAgIDogbnVsbFxuXG4gICAgaWYgKHJlc1trZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlc1trZXldID0gdmFsXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHJlc1trZXldKSkge1xuICAgICAgcmVzW2tleV0ucHVzaCh2YWwpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc1trZXldID0gW3Jlc1trZXldLCB2YWxdXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiByZXNcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5UXVlcnkgKG9iaikge1xuICB2YXIgcmVzID0gb2JqID8gT2JqZWN0LmtleXMob2JqKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciB2YWwgPSBvYmpba2V5XVxuXG4gICAgaWYgKHZhbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gJydcbiAgICB9XG5cbiAgICBpZiAodmFsID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gZW5jb2RlKGtleSlcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gW11cbiAgICAgIHZhbC5zbGljZSgpLmZvckVhY2goZnVuY3Rpb24gKHZhbDIpIHtcbiAgICAgICAgaWYgKHZhbDIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmICh2YWwyID09PSBudWxsKSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2goZW5jb2RlKGtleSkpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2goZW5jb2RlKGtleSkgKyAnPScgKyBlbmNvZGUodmFsMikpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICByZXR1cm4gcmVzdWx0LmpvaW4oJyYnKVxuICAgIH1cblxuICAgIHJldHVybiBlbmNvZGUoa2V5KSArICc9JyArIGVuY29kZSh2YWwpXG4gIH0pLmZpbHRlcihmdW5jdGlvbiAoeCkgeyByZXR1cm4geC5sZW5ndGggPiAwOyB9KS5qb2luKCcmJykgOiBudWxsXG4gIHJldHVybiByZXMgPyAoXCI/XCIgKyByZXMpIDogJydcbn1cblxuLyogICovXG5cbnZhciB0cmFpbGluZ1NsYXNoUkUgPSAvXFwvPyQvXG5cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlIChcbiAgcmVjb3JkLFxuICBsb2NhdGlvbixcbiAgcmVkaXJlY3RlZEZyb21cbikge1xuICB2YXIgcm91dGUgPSB7XG4gICAgbmFtZTogbG9jYXRpb24ubmFtZSB8fCAocmVjb3JkICYmIHJlY29yZC5uYW1lKSxcbiAgICBtZXRhOiAocmVjb3JkICYmIHJlY29yZC5tZXRhKSB8fCB7fSxcbiAgICBwYXRoOiBsb2NhdGlvbi5wYXRoIHx8ICcvJyxcbiAgICBoYXNoOiBsb2NhdGlvbi5oYXNoIHx8ICcnLFxuICAgIHF1ZXJ5OiBsb2NhdGlvbi5xdWVyeSB8fCB7fSxcbiAgICBwYXJhbXM6IGxvY2F0aW9uLnBhcmFtcyB8fCB7fSxcbiAgICBmdWxsUGF0aDogZ2V0RnVsbFBhdGgobG9jYXRpb24pLFxuICAgIG1hdGNoZWQ6IHJlY29yZCA/IGZvcm1hdE1hdGNoKHJlY29yZCkgOiBbXVxuICB9XG4gIGlmIChyZWRpcmVjdGVkRnJvbSkge1xuICAgIHJvdXRlLnJlZGlyZWN0ZWRGcm9tID0gZ2V0RnVsbFBhdGgocmVkaXJlY3RlZEZyb20pXG4gIH1cbiAgcmV0dXJuIE9iamVjdC5mcmVlemUocm91dGUpXG59XG5cbi8vIHRoZSBzdGFydGluZyByb3V0ZSB0aGF0IHJlcHJlc2VudHMgdGhlIGluaXRpYWwgc3RhdGVcbnZhciBTVEFSVCA9IGNyZWF0ZVJvdXRlKG51bGwsIHtcbiAgcGF0aDogJy8nXG59KVxuXG5mdW5jdGlvbiBmb3JtYXRNYXRjaCAocmVjb3JkKSB7XG4gIHZhciByZXMgPSBbXVxuICB3aGlsZSAocmVjb3JkKSB7XG4gICAgcmVzLnVuc2hpZnQocmVjb3JkKVxuICAgIHJlY29yZCA9IHJlY29yZC5wYXJlbnRcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIGdldEZ1bGxQYXRoIChyZWYpIHtcbiAgdmFyIHBhdGggPSByZWYucGF0aDtcbiAgdmFyIHF1ZXJ5ID0gcmVmLnF1ZXJ5OyBpZiAoIHF1ZXJ5ID09PSB2b2lkIDAgKSBxdWVyeSA9IHt9O1xuICB2YXIgaGFzaCA9IHJlZi5oYXNoOyBpZiAoIGhhc2ggPT09IHZvaWQgMCApIGhhc2ggPSAnJztcblxuICByZXR1cm4gKHBhdGggfHwgJy8nKSArIHN0cmluZ2lmeVF1ZXJ5KHF1ZXJ5KSArIGhhc2hcbn1cblxuZnVuY3Rpb24gaXNTYW1lUm91dGUgKGEsIGIpIHtcbiAgaWYgKGIgPT09IFNUQVJUKSB7XG4gICAgcmV0dXJuIGEgPT09IGJcbiAgfSBlbHNlIGlmICghYikge1xuICAgIHJldHVybiBmYWxzZVxuICB9IGVsc2UgaWYgKGEucGF0aCAmJiBiLnBhdGgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgYS5wYXRoLnJlcGxhY2UodHJhaWxpbmdTbGFzaFJFLCAnJykgPT09IGIucGF0aC5yZXBsYWNlKHRyYWlsaW5nU2xhc2hSRSwgJycpICYmXG4gICAgICBhLmhhc2ggPT09IGIuaGFzaCAmJlxuICAgICAgaXNPYmplY3RFcXVhbChhLnF1ZXJ5LCBiLnF1ZXJ5KVxuICAgIClcbiAgfSBlbHNlIGlmIChhLm5hbWUgJiYgYi5uYW1lKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGEubmFtZSA9PT0gYi5uYW1lICYmXG4gICAgICBhLmhhc2ggPT09IGIuaGFzaCAmJlxuICAgICAgaXNPYmplY3RFcXVhbChhLnF1ZXJ5LCBiLnF1ZXJ5KSAmJlxuICAgICAgaXNPYmplY3RFcXVhbChhLnBhcmFtcywgYi5wYXJhbXMpXG4gICAgKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0RXF1YWwgKGEsIGIpIHtcbiAgaWYgKCBhID09PSB2b2lkIDAgKSBhID0ge307XG4gIGlmICggYiA9PT0gdm9pZCAwICkgYiA9IHt9O1xuXG4gIHZhciBhS2V5cyA9IE9iamVjdC5rZXlzKGEpXG4gIHZhciBiS2V5cyA9IE9iamVjdC5rZXlzKGIpXG4gIGlmIChhS2V5cy5sZW5ndGggIT09IGJLZXlzLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIHJldHVybiBhS2V5cy5ldmVyeShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBTdHJpbmcoYVtrZXldKSA9PT0gU3RyaW5nKGJba2V5XSk7IH0pXG59XG5cbmZ1bmN0aW9uIGlzSW5jbHVkZWRSb3V0ZSAoY3VycmVudCwgdGFyZ2V0KSB7XG4gIHJldHVybiAoXG4gICAgY3VycmVudC5wYXRoLnJlcGxhY2UodHJhaWxpbmdTbGFzaFJFLCAnLycpLmluZGV4T2YoXG4gICAgICB0YXJnZXQucGF0aC5yZXBsYWNlKHRyYWlsaW5nU2xhc2hSRSwgJy8nKVxuICAgICkgPT09IDAgJiZcbiAgICAoIXRhcmdldC5oYXNoIHx8IGN1cnJlbnQuaGFzaCA9PT0gdGFyZ2V0Lmhhc2gpICYmXG4gICAgcXVlcnlJbmNsdWRlcyhjdXJyZW50LnF1ZXJ5LCB0YXJnZXQucXVlcnkpXG4gIClcbn1cblxuZnVuY3Rpb24gcXVlcnlJbmNsdWRlcyAoY3VycmVudCwgdGFyZ2V0KSB7XG4gIGZvciAodmFyIGtleSBpbiB0YXJnZXQpIHtcbiAgICBpZiAoIShrZXkgaW4gY3VycmVudCkpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZVxufVxuXG4vKiAgKi9cblxuLy8gd29yayBhcm91bmQgd2VpcmQgZmxvdyBidWdcbnZhciB0b1R5cGVzID0gW1N0cmluZywgT2JqZWN0XVxuXG52YXIgTGluayA9IHtcbiAgbmFtZTogJ3JvdXRlci1saW5rJyxcbiAgcHJvcHM6IHtcbiAgICB0bzoge1xuICAgICAgdHlwZTogdG9UeXBlcyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICB0YWc6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdhJ1xuICAgIH0sXG4gICAgZXhhY3Q6IEJvb2xlYW4sXG4gICAgYXBwZW5kOiBCb29sZWFuLFxuICAgIHJlcGxhY2U6IEJvb2xlYW4sXG4gICAgYWN0aXZlQ2xhc3M6IFN0cmluZyxcbiAgICBldmVudDoge1xuICAgICAgdHlwZTogW1N0cmluZywgQXJyYXldLFxuICAgICAgZGVmYXVsdDogJ2NsaWNrJ1xuICAgIH1cbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIgKGgpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgIHZhciByb3V0ZXIgPSB0aGlzLiRyb3V0ZXJcbiAgICB2YXIgY3VycmVudCA9IHRoaXMuJHJvdXRlXG4gICAgdmFyIHJlZiA9IHJvdXRlci5yZXNvbHZlKHRoaXMudG8sIGN1cnJlbnQsIHRoaXMuYXBwZW5kKTtcbiAgICB2YXIgbm9ybWFsaXplZFRvID0gcmVmLm5vcm1hbGl6ZWRUbztcbiAgICB2YXIgcmVzb2x2ZWQgPSByZWYucmVzb2x2ZWQ7XG4gICAgdmFyIGhyZWYgPSByZWYuaHJlZjtcbiAgICB2YXIgY2xhc3NlcyA9IHt9XG4gICAgdmFyIGFjdGl2ZUNsYXNzID0gdGhpcy5hY3RpdmVDbGFzcyB8fCByb3V0ZXIub3B0aW9ucy5saW5rQWN0aXZlQ2xhc3MgfHwgJ3JvdXRlci1saW5rLWFjdGl2ZSdcbiAgICB2YXIgY29tcGFyZVRhcmdldCA9IG5vcm1hbGl6ZWRUby5wYXRoID8gY3JlYXRlUm91dGUobnVsbCwgbm9ybWFsaXplZFRvKSA6IHJlc29sdmVkXG4gICAgY2xhc3Nlc1thY3RpdmVDbGFzc10gPSB0aGlzLmV4YWN0XG4gICAgICA/IGlzU2FtZVJvdXRlKGN1cnJlbnQsIGNvbXBhcmVUYXJnZXQpXG4gICAgICA6IGlzSW5jbHVkZWRSb3V0ZShjdXJyZW50LCBjb21wYXJlVGFyZ2V0KVxuXG4gICAgdmFyIGhhbmRsZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKGd1YXJkRXZlbnQoZSkpIHtcbiAgICAgICAgaWYgKHRoaXMkMS5yZXBsYWNlKSB7XG4gICAgICAgICAgcm91dGVyLnJlcGxhY2Uobm9ybWFsaXplZFRvKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJvdXRlci5wdXNoKG5vcm1hbGl6ZWRUbylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBvbiA9IHsgY2xpY2s6IGd1YXJkRXZlbnQgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMuZXZlbnQpKSB7XG4gICAgICB0aGlzLmV2ZW50LmZvckVhY2goZnVuY3Rpb24gKGUpIHsgb25bZV0gPSBoYW5kbGVyIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIG9uW3RoaXMuZXZlbnRdID0gaGFuZGxlclxuICAgIH1cblxuICAgIHZhciBkYXRhID0ge1xuICAgICAgY2xhc3M6IGNsYXNzZXNcbiAgICB9XG5cbiAgICBpZiAodGhpcy50YWcgPT09ICdhJykge1xuICAgICAgZGF0YS5vbiA9IG9uXG4gICAgICBkYXRhLmF0dHJzID0geyBocmVmOiBocmVmIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZmluZCB0aGUgZmlyc3QgPGE+IGNoaWxkIGFuZCBhcHBseSBsaXN0ZW5lciBhbmQgaHJlZlxuICAgICAgdmFyIGEgPSBmaW5kQW5jaG9yKHRoaXMuJHNsb3RzLmRlZmF1bHQpXG4gICAgICBpZiAoYSkge1xuICAgICAgICAvLyBpbiBjYXNlIHRoZSA8YT4gaXMgYSBzdGF0aWMgbm9kZVxuICAgICAgICBhLmlzU3RhdGljID0gZmFsc2VcbiAgICAgICAgdmFyIGV4dGVuZCA9IF9WdWUudXRpbC5leHRlbmRcbiAgICAgICAgdmFyIGFEYXRhID0gYS5kYXRhID0gZXh0ZW5kKHt9LCBhLmRhdGEpXG4gICAgICAgIGFEYXRhLm9uID0gb25cbiAgICAgICAgdmFyIGFBdHRycyA9IGEuZGF0YS5hdHRycyA9IGV4dGVuZCh7fSwgYS5kYXRhLmF0dHJzKVxuICAgICAgICBhQXR0cnMuaHJlZiA9IGhyZWZcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGRvZXNuJ3QgaGF2ZSA8YT4gY2hpbGQsIGFwcGx5IGxpc3RlbmVyIHRvIHNlbGZcbiAgICAgICAgZGF0YS5vbiA9IG9uXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGgodGhpcy50YWcsIGRhdGEsIHRoaXMuJHNsb3RzLmRlZmF1bHQpXG4gIH1cbn1cblxuZnVuY3Rpb24gZ3VhcmRFdmVudCAoZSkge1xuICAvLyBkb24ndCByZWRpcmVjdCB3aXRoIGNvbnRyb2wga2V5c1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKGUubWV0YUtleSB8fCBlLmN0cmxLZXkgfHwgZS5zaGlmdEtleSkgeyByZXR1cm4gfVxuICAvLyBkb24ndCByZWRpcmVjdCB3aGVuIHByZXZlbnREZWZhdWx0IGNhbGxlZFxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKGUuZGVmYXVsdFByZXZlbnRlZCkgeyByZXR1cm4gfVxuICAvLyBkb24ndCByZWRpcmVjdCBvbiByaWdodCBjbGlja1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKGUuYnV0dG9uICE9PSB1bmRlZmluZWQgJiYgZS5idXR0b24gIT09IDApIHsgcmV0dXJuIH1cbiAgLy8gZG9uJ3QgcmVkaXJlY3QgaWYgYHRhcmdldD1cIl9ibGFua1wiYFxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKGUudGFyZ2V0ICYmIGUudGFyZ2V0LmdldEF0dHJpYnV0ZSkge1xuICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3RhcmdldCcpXG4gICAgaWYgKC9cXGJfYmxhbmtcXGIvaS50ZXN0KHRhcmdldCkpIHsgcmV0dXJuIH1cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuICByZXR1cm4gdHJ1ZVxufVxuXG5mdW5jdGlvbiBmaW5kQW5jaG9yIChjaGlsZHJlbikge1xuICBpZiAoY2hpbGRyZW4pIHtcbiAgICB2YXIgY2hpbGRcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZCA9IGNoaWxkcmVuW2ldXG4gICAgICBpZiAoY2hpbGQudGFnID09PSAnYScpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkXG4gICAgICB9XG4gICAgICBpZiAoY2hpbGQuY2hpbGRyZW4gJiYgKGNoaWxkID0gZmluZEFuY2hvcihjaGlsZC5jaGlsZHJlbikpKSB7XG4gICAgICAgIHJldHVybiBjaGlsZFxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG52YXIgX1Z1ZVxuXG5mdW5jdGlvbiBpbnN0YWxsIChWdWUpIHtcbiAgaWYgKGluc3RhbGwuaW5zdGFsbGVkKSB7IHJldHVybiB9XG4gIGluc3RhbGwuaW5zdGFsbGVkID0gdHJ1ZVxuXG4gIF9WdWUgPSBWdWVcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVnVlLnByb3RvdHlwZSwgJyRyb3V0ZXInLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQgKCkgeyByZXR1cm4gdGhpcy4kcm9vdC5fcm91dGVyIH1cbiAgfSlcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVnVlLnByb3RvdHlwZSwgJyRyb3V0ZScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCQxICgpIHsgcmV0dXJuIHRoaXMuJHJvb3QuX3JvdXRlIH1cbiAgfSlcblxuICBWdWUubWl4aW4oe1xuICAgIGJlZm9yZUNyZWF0ZTogZnVuY3Rpb24gYmVmb3JlQ3JlYXRlICgpIHtcbiAgICAgIGlmICh0aGlzLiRvcHRpb25zLnJvdXRlcikge1xuICAgICAgICB0aGlzLl9yb3V0ZXIgPSB0aGlzLiRvcHRpb25zLnJvdXRlclxuICAgICAgICB0aGlzLl9yb3V0ZXIuaW5pdCh0aGlzKVxuICAgICAgICBWdWUudXRpbC5kZWZpbmVSZWFjdGl2ZSh0aGlzLCAnX3JvdXRlJywgdGhpcy5fcm91dGVyLmhpc3RvcnkuY3VycmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0pXG5cbiAgVnVlLmNvbXBvbmVudCgncm91dGVyLXZpZXcnLCBWaWV3KVxuICBWdWUuY29tcG9uZW50KCdyb3V0ZXItbGluaycsIExpbmspXG5cbiAgdmFyIHN0cmF0cyA9IFZ1ZS5jb25maWcub3B0aW9uTWVyZ2VTdHJhdGVnaWVzXG4gIC8vIHVzZSB0aGUgc2FtZSBob29rIG1lcmdpbmcgc3RyYXRlZ3kgZm9yIHJvdXRlIGhvb2tzXG4gIHN0cmF0cy5iZWZvcmVSb3V0ZUVudGVyID0gc3RyYXRzLmJlZm9yZVJvdXRlTGVhdmUgPSBzdHJhdHMuY3JlYXRlZFxufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gcmVzb2x2ZVBhdGggKFxuICByZWxhdGl2ZSxcbiAgYmFzZSxcbiAgYXBwZW5kXG4pIHtcbiAgaWYgKHJlbGF0aXZlLmNoYXJBdCgwKSA9PT0gJy8nKSB7XG4gICAgcmV0dXJuIHJlbGF0aXZlXG4gIH1cblxuICBpZiAocmVsYXRpdmUuY2hhckF0KDApID09PSAnPycgfHwgcmVsYXRpdmUuY2hhckF0KDApID09PSAnIycpIHtcbiAgICByZXR1cm4gYmFzZSArIHJlbGF0aXZlXG4gIH1cblxuICB2YXIgc3RhY2sgPSBiYXNlLnNwbGl0KCcvJylcblxuICAvLyByZW1vdmUgdHJhaWxpbmcgc2VnbWVudCBpZjpcbiAgLy8gLSBub3QgYXBwZW5kaW5nXG4gIC8vIC0gYXBwZW5kaW5nIHRvIHRyYWlsaW5nIHNsYXNoIChsYXN0IHNlZ21lbnQgaXMgZW1wdHkpXG4gIGlmICghYXBwZW5kIHx8ICFzdGFja1tzdGFjay5sZW5ndGggLSAxXSkge1xuICAgIHN0YWNrLnBvcCgpXG4gIH1cblxuICAvLyByZXNvbHZlIHJlbGF0aXZlIHBhdGhcbiAgdmFyIHNlZ21lbnRzID0gcmVsYXRpdmUucmVwbGFjZSgvXlxcLy8sICcnKS5zcGxpdCgnLycpXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc2VnbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc2VnbWVudCA9IHNlZ21lbnRzW2ldXG4gICAgaWYgKHNlZ21lbnQgPT09ICcuJykge1xuICAgICAgY29udGludWVcbiAgICB9IGVsc2UgaWYgKHNlZ21lbnQgPT09ICcuLicpIHtcbiAgICAgIHN0YWNrLnBvcCgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YWNrLnB1c2goc2VnbWVudClcbiAgICB9XG4gIH1cblxuICAvLyBlbnN1cmUgbGVhZGluZyBzbGFzaFxuICBpZiAoc3RhY2tbMF0gIT09ICcnKSB7XG4gICAgc3RhY2sudW5zaGlmdCgnJylcbiAgfVxuXG4gIHJldHVybiBzdGFjay5qb2luKCcvJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXRoIChwYXRoKSB7XG4gIHZhciBoYXNoID0gJydcbiAgdmFyIHF1ZXJ5ID0gJydcblxuICB2YXIgaGFzaEluZGV4ID0gcGF0aC5pbmRleE9mKCcjJylcbiAgaWYgKGhhc2hJbmRleCA+PSAwKSB7XG4gICAgaGFzaCA9IHBhdGguc2xpY2UoaGFzaEluZGV4KVxuICAgIHBhdGggPSBwYXRoLnNsaWNlKDAsIGhhc2hJbmRleClcbiAgfVxuXG4gIHZhciBxdWVyeUluZGV4ID0gcGF0aC5pbmRleE9mKCc/JylcbiAgaWYgKHF1ZXJ5SW5kZXggPj0gMCkge1xuICAgIHF1ZXJ5ID0gcGF0aC5zbGljZShxdWVyeUluZGV4ICsgMSlcbiAgICBwYXRoID0gcGF0aC5zbGljZSgwLCBxdWVyeUluZGV4KVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRoOiBwYXRoLFxuICAgIHF1ZXJ5OiBxdWVyeSxcbiAgICBoYXNoOiBoYXNoXG4gIH1cbn1cblxuZnVuY3Rpb24gY2xlYW5QYXRoIChwYXRoKSB7XG4gIHJldHVybiBwYXRoLnJlcGxhY2UoL1xcL1xcLy9nLCAnLycpXG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBjcmVhdGVSb3V0ZU1hcCAocm91dGVzKSB7XG4gIHZhciBwYXRoTWFwID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICB2YXIgbmFtZU1hcCA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByb3V0ZXMuZm9yRWFjaChmdW5jdGlvbiAocm91dGUpIHtcbiAgICBhZGRSb3V0ZVJlY29yZChwYXRoTWFwLCBuYW1lTWFwLCByb3V0ZSlcbiAgfSlcblxuICByZXR1cm4ge1xuICAgIHBhdGhNYXA6IHBhdGhNYXAsXG4gICAgbmFtZU1hcDogbmFtZU1hcFxuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFJvdXRlUmVjb3JkIChcbiAgcGF0aE1hcCxcbiAgbmFtZU1hcCxcbiAgcm91dGUsXG4gIHBhcmVudCxcbiAgbWF0Y2hBc1xuKSB7XG4gIHZhciBwYXRoID0gcm91dGUucGF0aDtcbiAgdmFyIG5hbWUgPSByb3V0ZS5uYW1lO1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGFzc2VydChwYXRoICE9IG51bGwsIFwiXFxcInBhdGhcXFwiIGlzIHJlcXVpcmVkIGluIGEgcm91dGUgY29uZmlndXJhdGlvbi5cIilcbiAgICBhc3NlcnQoXG4gICAgICB0eXBlb2Ygcm91dGUuY29tcG9uZW50ICE9PSAnc3RyaW5nJyxcbiAgICAgIFwicm91dGUgY29uZmlnIFxcXCJjb21wb25lbnRcXFwiIGZvciBwYXRoOiBcIiArIChTdHJpbmcocGF0aCB8fCBuYW1lKSkgKyBcIiBjYW5ub3QgYmUgYSBcIiArXG4gICAgICBcInN0cmluZyBpZC4gVXNlIGFuIGFjdHVhbCBjb21wb25lbnQgaW5zdGVhZC5cIlxuICAgIClcbiAgfVxuXG4gIHZhciByZWNvcmQgPSB7XG4gICAgcGF0aDogbm9ybWFsaXplUGF0aChwYXRoLCBwYXJlbnQpLFxuICAgIGNvbXBvbmVudHM6IHJvdXRlLmNvbXBvbmVudHMgfHwgeyBkZWZhdWx0OiByb3V0ZS5jb21wb25lbnQgfSxcbiAgICBpbnN0YW5jZXM6IHt9LFxuICAgIG5hbWU6IG5hbWUsXG4gICAgcGFyZW50OiBwYXJlbnQsXG4gICAgbWF0Y2hBczogbWF0Y2hBcyxcbiAgICByZWRpcmVjdDogcm91dGUucmVkaXJlY3QsXG4gICAgYmVmb3JlRW50ZXI6IHJvdXRlLmJlZm9yZUVudGVyLFxuICAgIG1ldGE6IHJvdXRlLm1ldGEgfHwge31cbiAgfVxuXG4gIGlmIChyb3V0ZS5jaGlsZHJlbikge1xuICAgIC8vIFdhcm4gaWYgcm91dGUgaXMgbmFtZWQgYW5kIGhhcyBhIGRlZmF1bHQgY2hpbGQgcm91dGUuXG4gICAgLy8gSWYgdXNlcnMgbmF2aWdhdGUgdG8gdGhpcyByb3V0ZSBieSBuYW1lLCB0aGUgZGVmYXVsdCBjaGlsZCB3aWxsXG4gICAgLy8gbm90IGJlIHJlbmRlcmVkIChHSCBJc3N1ZSAjNjI5KVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAocm91dGUubmFtZSAmJiByb3V0ZS5jaGlsZHJlbi5zb21lKGZ1bmN0aW9uIChjaGlsZCkgeyByZXR1cm4gL15cXC8/JC8udGVzdChjaGlsZC5wYXRoKTsgfSkpIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICBcIk5hbWVkIFJvdXRlICdcIiArIChyb3V0ZS5uYW1lKSArIFwiJyBoYXMgYSBkZWZhdWx0IGNoaWxkIHJvdXRlLiBcIiArXG4gICAgICAgICAgXCJXaGVuIG5hdmlnYXRpbmcgdG8gdGhpcyBuYW1lZCByb3V0ZSAoOnRvPVxcXCJ7bmFtZTogJ1wiICsgKHJvdXRlLm5hbWUpICsgXCInXFxcIiksIFwiICtcbiAgICAgICAgICBcInRoZSBkZWZhdWx0IGNoaWxkIHJvdXRlIHdpbGwgbm90IGJlIHJlbmRlcmVkLiBSZW1vdmUgdGhlIG5hbWUgZnJvbSBcIiArXG4gICAgICAgICAgXCJ0aGlzIHJvdXRlIGFuZCB1c2UgdGhlIG5hbWUgb2YgdGhlIGRlZmF1bHQgY2hpbGQgcm91dGUgZm9yIG5hbWVkIFwiICtcbiAgICAgICAgICBcImxpbmtzIGluc3RlYWQuXCJcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgICByb3V0ZS5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgdmFyIGNoaWxkTWF0Y2hBcyA9IG1hdGNoQXNcbiAgICAgICAgPyBjbGVhblBhdGgoKG1hdGNoQXMgKyBcIi9cIiArIChjaGlsZC5wYXRoKSkpXG4gICAgICAgIDogdW5kZWZpbmVkXG4gICAgICBhZGRSb3V0ZVJlY29yZChwYXRoTWFwLCBuYW1lTWFwLCBjaGlsZCwgcmVjb3JkLCBjaGlsZE1hdGNoQXMpXG4gICAgfSlcbiAgfVxuXG4gIGlmIChyb3V0ZS5hbGlhcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocm91dGUuYWxpYXMpKSB7XG4gICAgICByb3V0ZS5hbGlhcy5mb3JFYWNoKGZ1bmN0aW9uIChhbGlhcykge1xuICAgICAgICB2YXIgYWxpYXNSb3V0ZSA9IHtcbiAgICAgICAgICBwYXRoOiBhbGlhcyxcbiAgICAgICAgICBjaGlsZHJlbjogcm91dGUuY2hpbGRyZW5cbiAgICAgICAgfVxuICAgICAgICBhZGRSb3V0ZVJlY29yZChwYXRoTWFwLCBuYW1lTWFwLCBhbGlhc1JvdXRlLCBwYXJlbnQsIHJlY29yZC5wYXRoKVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFsaWFzUm91dGUgPSB7XG4gICAgICAgIHBhdGg6IHJvdXRlLmFsaWFzLFxuICAgICAgICBjaGlsZHJlbjogcm91dGUuY2hpbGRyZW5cbiAgICAgIH1cbiAgICAgIGFkZFJvdXRlUmVjb3JkKHBhdGhNYXAsIG5hbWVNYXAsIGFsaWFzUm91dGUsIHBhcmVudCwgcmVjb3JkLnBhdGgpXG4gICAgfVxuICB9XG5cbiAgaWYgKCFwYXRoTWFwW3JlY29yZC5wYXRoXSkge1xuICAgIHBhdGhNYXBbcmVjb3JkLnBhdGhdID0gcmVjb3JkXG4gIH1cblxuICBpZiAobmFtZSkge1xuICAgIGlmICghbmFtZU1hcFtuYW1lXSkge1xuICAgICAgbmFtZU1hcFtuYW1lXSA9IHJlY29yZFxuICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgd2FybihcbiAgICAgICAgZmFsc2UsXG4gICAgICAgIFwiRHVwbGljYXRlIG5hbWVkIHJvdXRlcyBkZWZpbml0aW9uOiBcIiArXG4gICAgICAgIFwieyBuYW1lOiBcXFwiXCIgKyBuYW1lICsgXCJcXFwiLCBwYXRoOiBcXFwiXCIgKyAocmVjb3JkLnBhdGgpICsgXCJcXFwiIH1cIlxuICAgICAgKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVQYXRoIChwYXRoLCBwYXJlbnQpIHtcbiAgcGF0aCA9IHBhdGgucmVwbGFjZSgvXFwvJC8sICcnKVxuICBpZiAocGF0aFswXSA9PT0gJy8nKSB7IHJldHVybiBwYXRoIH1cbiAgaWYgKHBhcmVudCA9PSBudWxsKSB7IHJldHVybiBwYXRoIH1cbiAgcmV0dXJuIGNsZWFuUGF0aCgoKHBhcmVudC5wYXRoKSArIFwiL1wiICsgcGF0aCkpXG59XG5cbnZhciBfX21vZHVsZUV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIChhcnIpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcnIpID09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuXG52YXIgaXNhcnJheSA9IF9fbW9kdWxlRXhwb3J0c1xuXG4vKipcbiAqIEV4cG9zZSBgcGF0aFRvUmVnZXhwYC5cbiAqL1xudmFyIGluZGV4ID0gcGF0aFRvUmVnZXhwXG52YXIgcGFyc2VfMSA9IHBhcnNlXG52YXIgY29tcGlsZV8xID0gY29tcGlsZVxudmFyIHRva2Vuc1RvRnVuY3Rpb25fMSA9IHRva2Vuc1RvRnVuY3Rpb25cbnZhciB0b2tlbnNUb1JlZ0V4cF8xID0gdG9rZW5zVG9SZWdFeHBcblxuLyoqXG4gKiBUaGUgbWFpbiBwYXRoIG1hdGNoaW5nIHJlZ2V4cCB1dGlsaXR5LlxuICpcbiAqIEB0eXBlIHtSZWdFeHB9XG4gKi9cbnZhciBQQVRIX1JFR0VYUCA9IG5ldyBSZWdFeHAoW1xuICAvLyBNYXRjaCBlc2NhcGVkIGNoYXJhY3RlcnMgdGhhdCB3b3VsZCBvdGhlcndpc2UgYXBwZWFyIGluIGZ1dHVyZSBtYXRjaGVzLlxuICAvLyBUaGlzIGFsbG93cyB0aGUgdXNlciB0byBlc2NhcGUgc3BlY2lhbCBjaGFyYWN0ZXJzIHRoYXQgd29uJ3QgdHJhbnNmb3JtLlxuICAnKFxcXFxcXFxcLiknLFxuICAvLyBNYXRjaCBFeHByZXNzLXN0eWxlIHBhcmFtZXRlcnMgYW5kIHVuLW5hbWVkIHBhcmFtZXRlcnMgd2l0aCBhIHByZWZpeFxuICAvLyBhbmQgb3B0aW9uYWwgc3VmZml4ZXMuIE1hdGNoZXMgYXBwZWFyIGFzOlxuICAvL1xuICAvLyBcIi86dGVzdChcXFxcZCspP1wiID0+IFtcIi9cIiwgXCJ0ZXN0XCIsIFwiXFxkK1wiLCB1bmRlZmluZWQsIFwiP1wiLCB1bmRlZmluZWRdXG4gIC8vIFwiL3JvdXRlKFxcXFxkKylcIiAgPT4gW3VuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFwiXFxkK1wiLCB1bmRlZmluZWQsIHVuZGVmaW5lZF1cbiAgLy8gXCIvKlwiICAgICAgICAgICAgPT4gW1wiL1wiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFwiKlwiXVxuICAnKFtcXFxcLy5dKT8oPzooPzpcXFxcOihcXFxcdyspKD86XFxcXCgoKD86XFxcXFxcXFwufFteXFxcXFxcXFwoKV0pKylcXFxcKSk/fFxcXFwoKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcKCldKSspXFxcXCkpKFsrKj9dKT98KFxcXFwqKSknXG5dLmpvaW4oJ3wnKSwgJ2cnKVxuXG4vKipcbiAqIFBhcnNlIGEgc3RyaW5nIGZvciB0aGUgcmF3IHRva2Vucy5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICBzdHJcbiAqIEBwYXJhbSAge09iamVjdD19IG9wdGlvbnNcbiAqIEByZXR1cm4geyFBcnJheX1cbiAqL1xuZnVuY3Rpb24gcGFyc2UgKHN0ciwgb3B0aW9ucykge1xuICB2YXIgdG9rZW5zID0gW11cbiAgdmFyIGtleSA9IDBcbiAgdmFyIGluZGV4ID0gMFxuICB2YXIgcGF0aCA9ICcnXG4gIHZhciBkZWZhdWx0RGVsaW1pdGVyID0gb3B0aW9ucyAmJiBvcHRpb25zLmRlbGltaXRlciB8fCAnLydcbiAgdmFyIHJlc1xuXG4gIHdoaWxlICgocmVzID0gUEFUSF9SRUdFWFAuZXhlYyhzdHIpKSAhPSBudWxsKSB7XG4gICAgdmFyIG0gPSByZXNbMF1cbiAgICB2YXIgZXNjYXBlZCA9IHJlc1sxXVxuICAgIHZhciBvZmZzZXQgPSByZXMuaW5kZXhcbiAgICBwYXRoICs9IHN0ci5zbGljZShpbmRleCwgb2Zmc2V0KVxuICAgIGluZGV4ID0gb2Zmc2V0ICsgbS5sZW5ndGhcblxuICAgIC8vIElnbm9yZSBhbHJlYWR5IGVzY2FwZWQgc2VxdWVuY2VzLlxuICAgIGlmIChlc2NhcGVkKSB7XG4gICAgICBwYXRoICs9IGVzY2FwZWRbMV1cbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgdmFyIG5leHQgPSBzdHJbaW5kZXhdXG4gICAgdmFyIHByZWZpeCA9IHJlc1syXVxuICAgIHZhciBuYW1lID0gcmVzWzNdXG4gICAgdmFyIGNhcHR1cmUgPSByZXNbNF1cbiAgICB2YXIgZ3JvdXAgPSByZXNbNV1cbiAgICB2YXIgbW9kaWZpZXIgPSByZXNbNl1cbiAgICB2YXIgYXN0ZXJpc2sgPSByZXNbN11cblxuICAgIC8vIFB1c2ggdGhlIGN1cnJlbnQgcGF0aCBvbnRvIHRoZSB0b2tlbnMuXG4gICAgaWYgKHBhdGgpIHtcbiAgICAgIHRva2Vucy5wdXNoKHBhdGgpXG4gICAgICBwYXRoID0gJydcbiAgICB9XG5cbiAgICB2YXIgcGFydGlhbCA9IHByZWZpeCAhPSBudWxsICYmIG5leHQgIT0gbnVsbCAmJiBuZXh0ICE9PSBwcmVmaXhcbiAgICB2YXIgcmVwZWF0ID0gbW9kaWZpZXIgPT09ICcrJyB8fCBtb2RpZmllciA9PT0gJyonXG4gICAgdmFyIG9wdGlvbmFsID0gbW9kaWZpZXIgPT09ICc/JyB8fCBtb2RpZmllciA9PT0gJyonXG4gICAgdmFyIGRlbGltaXRlciA9IHJlc1syXSB8fCBkZWZhdWx0RGVsaW1pdGVyXG4gICAgdmFyIHBhdHRlcm4gPSBjYXB0dXJlIHx8IGdyb3VwXG5cbiAgICB0b2tlbnMucHVzaCh7XG4gICAgICBuYW1lOiBuYW1lIHx8IGtleSsrLFxuICAgICAgcHJlZml4OiBwcmVmaXggfHwgJycsXG4gICAgICBkZWxpbWl0ZXI6IGRlbGltaXRlcixcbiAgICAgIG9wdGlvbmFsOiBvcHRpb25hbCxcbiAgICAgIHJlcGVhdDogcmVwZWF0LFxuICAgICAgcGFydGlhbDogcGFydGlhbCxcbiAgICAgIGFzdGVyaXNrOiAhIWFzdGVyaXNrLFxuICAgICAgcGF0dGVybjogcGF0dGVybiA/IGVzY2FwZUdyb3VwKHBhdHRlcm4pIDogKGFzdGVyaXNrID8gJy4qJyA6ICdbXicgKyBlc2NhcGVTdHJpbmcoZGVsaW1pdGVyKSArICddKz8nKVxuICAgIH0pXG4gIH1cblxuICAvLyBNYXRjaCBhbnkgY2hhcmFjdGVycyBzdGlsbCByZW1haW5pbmcuXG4gIGlmIChpbmRleCA8IHN0ci5sZW5ndGgpIHtcbiAgICBwYXRoICs9IHN0ci5zdWJzdHIoaW5kZXgpXG4gIH1cblxuICAvLyBJZiB0aGUgcGF0aCBleGlzdHMsIHB1c2ggaXQgb250byB0aGUgZW5kLlxuICBpZiAocGF0aCkge1xuICAgIHRva2Vucy5wdXNoKHBhdGgpXG4gIH1cblxuICByZXR1cm4gdG9rZW5zXG59XG5cbi8qKlxuICogQ29tcGlsZSBhIHN0cmluZyB0byBhIHRlbXBsYXRlIGZ1bmN0aW9uIGZvciB0aGUgcGF0aC5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICAgICAgICAgICAgIHN0clxuICogQHBhcmFtICB7T2JqZWN0PX0gICAgICAgICAgICBvcHRpb25zXG4gKiBAcmV0dXJuIHshZnVuY3Rpb24oT2JqZWN0PSwgT2JqZWN0PSl9XG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGUgKHN0ciwgb3B0aW9ucykge1xuICByZXR1cm4gdG9rZW5zVG9GdW5jdGlvbihwYXJzZShzdHIsIG9wdGlvbnMpKVxufVxuXG4vKipcbiAqIFByZXR0aWVyIGVuY29kaW5nIG9mIFVSSSBwYXRoIHNlZ21lbnRzLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ31cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZW5jb2RlVVJJQ29tcG9uZW50UHJldHR5IChzdHIpIHtcbiAgcmV0dXJuIGVuY29kZVVSSShzdHIpLnJlcGxhY2UoL1tcXC8/I10vZywgZnVuY3Rpb24gKGMpIHtcbiAgICByZXR1cm4gJyUnICsgYy5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpXG4gIH0pXG59XG5cbi8qKlxuICogRW5jb2RlIHRoZSBhc3RlcmlzayBwYXJhbWV0ZXIuIFNpbWlsYXIgdG8gYHByZXR0eWAsIGJ1dCBhbGxvd3Mgc2xhc2hlcy5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGVuY29kZUFzdGVyaXNrIChzdHIpIHtcbiAgcmV0dXJuIGVuY29kZVVSSShzdHIpLnJlcGxhY2UoL1s/I10vZywgZnVuY3Rpb24gKGMpIHtcbiAgICByZXR1cm4gJyUnICsgYy5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpXG4gIH0pXG59XG5cbi8qKlxuICogRXhwb3NlIGEgbWV0aG9kIGZvciB0cmFuc2Zvcm1pbmcgdG9rZW5zIGludG8gdGhlIHBhdGggZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvRnVuY3Rpb24gKHRva2Vucykge1xuICAvLyBDb21waWxlIGFsbCB0aGUgdG9rZW5zIGludG8gcmVnZXhwcy5cbiAgdmFyIG1hdGNoZXMgPSBuZXcgQXJyYXkodG9rZW5zLmxlbmd0aClcblxuICAvLyBDb21waWxlIGFsbCB0aGUgcGF0dGVybnMgYmVmb3JlIGNvbXBpbGF0aW9uLlxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0eXBlb2YgdG9rZW5zW2ldID09PSAnb2JqZWN0Jykge1xuICAgICAgbWF0Y2hlc1tpXSA9IG5ldyBSZWdFeHAoJ14oPzonICsgdG9rZW5zW2ldLnBhdHRlcm4gKyAnKSQnKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAob2JqLCBvcHRzKSB7XG4gICAgdmFyIHBhdGggPSAnJ1xuICAgIHZhciBkYXRhID0gb2JqIHx8IHt9XG4gICAgdmFyIG9wdGlvbnMgPSBvcHRzIHx8IHt9XG4gICAgdmFyIGVuY29kZSA9IG9wdGlvbnMucHJldHR5ID8gZW5jb2RlVVJJQ29tcG9uZW50UHJldHR5IDogZW5jb2RlVVJJQ29tcG9uZW50XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2ldXG5cbiAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHBhdGggKz0gdG9rZW5cblxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICB2YXIgdmFsdWUgPSBkYXRhW3Rva2VuLm5hbWVdXG4gICAgICB2YXIgc2VnbWVudFxuXG4gICAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgICBpZiAodG9rZW4ub3B0aW9uYWwpIHtcbiAgICAgICAgICAvLyBQcmVwZW5kIHBhcnRpYWwgc2VnbWVudCBwcmVmaXhlcy5cbiAgICAgICAgICBpZiAodG9rZW4ucGFydGlhbCkge1xuICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXhcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIFwiJyArIHRva2VuLm5hbWUgKyAnXCIgdG8gYmUgZGVmaW5lZCcpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGlzYXJyYXkodmFsdWUpKSB7XG4gICAgICAgIGlmICghdG9rZW4ucmVwZWF0KSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgXCInICsgdG9rZW4ubmFtZSArICdcIiB0byBub3QgcmVwZWF0LCBidXQgcmVjZWl2ZWQgYCcgKyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgKyAnYCcpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgaWYgKHRva2VuLm9wdGlvbmFsKSB7XG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBcIicgKyB0b2tlbi5uYW1lICsgJ1wiIHRvIG5vdCBiZSBlbXB0eScpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWx1ZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgIHNlZ21lbnQgPSBlbmNvZGUodmFsdWVbal0pXG5cbiAgICAgICAgICBpZiAoIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgYWxsIFwiJyArIHRva2VuLm5hbWUgKyAnXCIgdG8gbWF0Y2ggXCInICsgdG9rZW4ucGF0dGVybiArICdcIiwgYnV0IHJlY2VpdmVkIGAnICsgSlNPTi5zdHJpbmdpZnkoc2VnbWVudCkgKyAnYCcpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcGF0aCArPSAoaiA9PT0gMCA/IHRva2VuLnByZWZpeCA6IHRva2VuLmRlbGltaXRlcikgKyBzZWdtZW50XG4gICAgICAgIH1cblxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBzZWdtZW50ID0gdG9rZW4uYXN0ZXJpc2sgPyBlbmNvZGVBc3Rlcmlzayh2YWx1ZSkgOiBlbmNvZGUodmFsdWUpXG5cbiAgICAgIGlmICghbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIFwiJyArIHRva2VuLm5hbWUgKyAnXCIgdG8gbWF0Y2ggXCInICsgdG9rZW4ucGF0dGVybiArICdcIiwgYnV0IHJlY2VpdmVkIFwiJyArIHNlZ21lbnQgKyAnXCInKVxuICAgICAgfVxuXG4gICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnRcbiAgICB9XG5cbiAgICByZXR1cm4gcGF0aFxuICB9XG59XG5cbi8qKlxuICogRXNjYXBlIGEgcmVndWxhciBleHByZXNzaW9uIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHN0clxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBlc2NhcGVTdHJpbmcgKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18XFwvXFxcXF0pL2csICdcXFxcJDEnKVxufVxuXG4vKipcbiAqIEVzY2FwZSB0aGUgY2FwdHVyaW5nIGdyb3VwIGJ5IGVzY2FwaW5nIHNwZWNpYWwgY2hhcmFjdGVycyBhbmQgbWVhbmluZy5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGdyb3VwXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGVzY2FwZUdyb3VwIChncm91cCkge1xuICByZXR1cm4gZ3JvdXAucmVwbGFjZSgvKFs9ITokXFwvKCldKS9nLCAnXFxcXCQxJylcbn1cblxuLyoqXG4gKiBBdHRhY2ggdGhlIGtleXMgYXMgYSBwcm9wZXJ0eSBvZiB0aGUgcmVnZXhwLlxuICpcbiAqIEBwYXJhbSAgeyFSZWdFeHB9IHJlXG4gKiBAcGFyYW0gIHtBcnJheX0gICBrZXlzXG4gKiBAcmV0dXJuIHshUmVnRXhwfVxuICovXG5mdW5jdGlvbiBhdHRhY2hLZXlzIChyZSwga2V5cykge1xuICByZS5rZXlzID0ga2V5c1xuICByZXR1cm4gcmVcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGZsYWdzIGZvciBhIHJlZ2V4cCBmcm9tIHRoZSBvcHRpb25zLlxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBmbGFncyAob3B0aW9ucykge1xuICByZXR1cm4gb3B0aW9ucy5zZW5zaXRpdmUgPyAnJyA6ICdpJ1xufVxuXG4vKipcbiAqIFB1bGwgb3V0IGtleXMgZnJvbSBhIHJlZ2V4cC5cbiAqXG4gKiBAcGFyYW0gIHshUmVnRXhwfSBwYXRoXG4gKiBAcGFyYW0gIHshQXJyYXl9ICBrZXlzXG4gKiBAcmV0dXJuIHshUmVnRXhwfVxuICovXG5mdW5jdGlvbiByZWdleHBUb1JlZ2V4cCAocGF0aCwga2V5cykge1xuICAvLyBVc2UgYSBuZWdhdGl2ZSBsb29rYWhlYWQgdG8gbWF0Y2ggb25seSBjYXB0dXJpbmcgZ3JvdXBzLlxuICB2YXIgZ3JvdXBzID0gcGF0aC5zb3VyY2UubWF0Y2goL1xcKCg/IVxcPykvZylcblxuICBpZiAoZ3JvdXBzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleXMucHVzaCh7XG4gICAgICAgIG5hbWU6IGksXG4gICAgICAgIHByZWZpeDogbnVsbCxcbiAgICAgICAgZGVsaW1pdGVyOiBudWxsLFxuICAgICAgICBvcHRpb25hbDogZmFsc2UsXG4gICAgICAgIHJlcGVhdDogZmFsc2UsXG4gICAgICAgIHBhcnRpYWw6IGZhbHNlLFxuICAgICAgICBhc3RlcmlzazogZmFsc2UsXG4gICAgICAgIHBhdHRlcm46IG51bGxcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGF0dGFjaEtleXMocGF0aCwga2V5cylcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm0gYW4gYXJyYXkgaW50byBhIHJlZ2V4cC5cbiAqXG4gKiBAcGFyYW0gIHshQXJyYXl9ICBwYXRoXG4gKiBAcGFyYW0gIHtBcnJheX0gICBrZXlzXG4gKiBAcGFyYW0gIHshT2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHshUmVnRXhwfVxuICovXG5mdW5jdGlvbiBhcnJheVRvUmVnZXhwIChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gIHZhciBwYXJ0cyA9IFtdXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXRoLmxlbmd0aDsgaSsrKSB7XG4gICAgcGFydHMucHVzaChwYXRoVG9SZWdleHAocGF0aFtpXSwga2V5cywgb3B0aW9ucykuc291cmNlKVxuICB9XG5cbiAgdmFyIHJlZ2V4cCA9IG5ldyBSZWdFeHAoJyg/OicgKyBwYXJ0cy5qb2luKCd8JykgKyAnKScsIGZsYWdzKG9wdGlvbnMpKVxuXG4gIHJldHVybiBhdHRhY2hLZXlzKHJlZ2V4cCwga2V5cylcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIHJlZ2V4cCBmcm9tIHN0cmluZyBpbnB1dC5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICBwYXRoXG4gKiBAcGFyYW0gIHshQXJyYXl9ICBrZXlzXG4gKiBAcGFyYW0gIHshT2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHshUmVnRXhwfVxuICovXG5mdW5jdGlvbiBzdHJpbmdUb1JlZ2V4cCAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICByZXR1cm4gdG9rZW5zVG9SZWdFeHAocGFyc2UocGF0aCwgb3B0aW9ucyksIGtleXMsIG9wdGlvbnMpXG59XG5cbi8qKlxuICogRXhwb3NlIGEgZnVuY3Rpb24gZm9yIHRha2luZyB0b2tlbnMgYW5kIHJldHVybmluZyBhIFJlZ0V4cC5cbiAqXG4gKiBAcGFyYW0gIHshQXJyYXl9ICAgICAgICAgIHRva2Vuc1xuICogQHBhcmFtICB7KEFycmF5fE9iamVjdCk9fSBrZXlzXG4gKiBAcGFyYW0gIHtPYmplY3Q9fSAgICAgICAgIG9wdGlvbnNcbiAqIEByZXR1cm4geyFSZWdFeHB9XG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvUmVnRXhwICh0b2tlbnMsIGtleXMsIG9wdGlvbnMpIHtcbiAgaWYgKCFpc2FycmF5KGtleXMpKSB7XG4gICAgb3B0aW9ucyA9IC8qKiBAdHlwZSB7IU9iamVjdH0gKi8gKGtleXMgfHwgb3B0aW9ucylcbiAgICBrZXlzID0gW11cbiAgfVxuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG5cbiAgdmFyIHN0cmljdCA9IG9wdGlvbnMuc3RyaWN0XG4gIHZhciBlbmQgPSBvcHRpb25zLmVuZCAhPT0gZmFsc2VcbiAgdmFyIHJvdXRlID0gJydcblxuICAvLyBJdGVyYXRlIG92ZXIgdGhlIHRva2VucyBhbmQgY3JlYXRlIG91ciByZWdleHAgc3RyaW5nLlxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXVxuXG4gICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJvdXRlICs9IGVzY2FwZVN0cmluZyh0b2tlbilcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHByZWZpeCA9IGVzY2FwZVN0cmluZyh0b2tlbi5wcmVmaXgpXG4gICAgICB2YXIgY2FwdHVyZSA9ICcoPzonICsgdG9rZW4ucGF0dGVybiArICcpJ1xuXG4gICAgICBrZXlzLnB1c2godG9rZW4pXG5cbiAgICAgIGlmICh0b2tlbi5yZXBlYXQpIHtcbiAgICAgICAgY2FwdHVyZSArPSAnKD86JyArIHByZWZpeCArIGNhcHR1cmUgKyAnKSonXG4gICAgICB9XG5cbiAgICAgIGlmICh0b2tlbi5vcHRpb25hbCkge1xuICAgICAgICBpZiAoIXRva2VuLnBhcnRpYWwpIHtcbiAgICAgICAgICBjYXB0dXJlID0gJyg/OicgKyBwcmVmaXggKyAnKCcgKyBjYXB0dXJlICsgJykpPydcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYXB0dXJlID0gcHJlZml4ICsgJygnICsgY2FwdHVyZSArICcpPydcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FwdHVyZSA9IHByZWZpeCArICcoJyArIGNhcHR1cmUgKyAnKSdcbiAgICAgIH1cblxuICAgICAgcm91dGUgKz0gY2FwdHVyZVxuICAgIH1cbiAgfVxuXG4gIHZhciBkZWxpbWl0ZXIgPSBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgJy8nKVxuICB2YXIgZW5kc1dpdGhEZWxpbWl0ZXIgPSByb3V0ZS5zbGljZSgtZGVsaW1pdGVyLmxlbmd0aCkgPT09IGRlbGltaXRlclxuXG4gIC8vIEluIG5vbi1zdHJpY3QgbW9kZSB3ZSBhbGxvdyBhIHNsYXNoIGF0IHRoZSBlbmQgb2YgbWF0Y2guIElmIHRoZSBwYXRoIHRvXG4gIC8vIG1hdGNoIGFscmVhZHkgZW5kcyB3aXRoIGEgc2xhc2gsIHdlIHJlbW92ZSBpdCBmb3IgY29uc2lzdGVuY3kuIFRoZSBzbGFzaFxuICAvLyBpcyB2YWxpZCBhdCB0aGUgZW5kIG9mIGEgcGF0aCBtYXRjaCwgbm90IGluIHRoZSBtaWRkbGUuIFRoaXMgaXMgaW1wb3J0YW50XG4gIC8vIGluIG5vbi1lbmRpbmcgbW9kZSwgd2hlcmUgXCIvdGVzdC9cIiBzaG91bGRuJ3QgbWF0Y2ggXCIvdGVzdC8vcm91dGVcIi5cbiAgaWYgKCFzdHJpY3QpIHtcbiAgICByb3V0ZSA9IChlbmRzV2l0aERlbGltaXRlciA/IHJvdXRlLnNsaWNlKDAsIC1kZWxpbWl0ZXIubGVuZ3RoKSA6IHJvdXRlKSArICcoPzonICsgZGVsaW1pdGVyICsgJyg/PSQpKT8nXG4gIH1cblxuICBpZiAoZW5kKSB7XG4gICAgcm91dGUgKz0gJyQnXG4gIH0gZWxzZSB7XG4gICAgLy8gSW4gbm9uLWVuZGluZyBtb2RlLCB3ZSBuZWVkIHRoZSBjYXB0dXJpbmcgZ3JvdXBzIHRvIG1hdGNoIGFzIG11Y2ggYXNcbiAgICAvLyBwb3NzaWJsZSBieSB1c2luZyBhIHBvc2l0aXZlIGxvb2thaGVhZCB0byB0aGUgZW5kIG9yIG5leHQgcGF0aCBzZWdtZW50LlxuICAgIHJvdXRlICs9IHN0cmljdCAmJiBlbmRzV2l0aERlbGltaXRlciA/ICcnIDogJyg/PScgKyBkZWxpbWl0ZXIgKyAnfCQpJ1xuICB9XG5cbiAgcmV0dXJuIGF0dGFjaEtleXMobmV3IFJlZ0V4cCgnXicgKyByb3V0ZSwgZmxhZ3Mob3B0aW9ucykpLCBrZXlzKVxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZSB0aGUgZ2l2ZW4gcGF0aCBzdHJpbmcsIHJldHVybmluZyBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAqXG4gKiBBbiBlbXB0eSBhcnJheSBjYW4gYmUgcGFzc2VkIGluIGZvciB0aGUga2V5cywgd2hpY2ggd2lsbCBob2xkIHRoZVxuICogcGxhY2Vob2xkZXIga2V5IGRlc2NyaXB0aW9ucy4gRm9yIGV4YW1wbGUsIHVzaW5nIGAvdXNlci86aWRgLCBga2V5c2Agd2lsbFxuICogY29udGFpbiBgW3sgbmFtZTogJ2lkJywgZGVsaW1pdGVyOiAnLycsIG9wdGlvbmFsOiBmYWxzZSwgcmVwZWF0OiBmYWxzZSB9XWAuXG4gKlxuICogQHBhcmFtICB7KHN0cmluZ3xSZWdFeHB8QXJyYXkpfSBwYXRoXG4gKiBAcGFyYW0gIHsoQXJyYXl8T2JqZWN0KT19ICAgICAgIGtleXNcbiAqIEBwYXJhbSAge09iamVjdD19ICAgICAgICAgICAgICAgb3B0aW9uc1xuICogQHJldHVybiB7IVJlZ0V4cH1cbiAqL1xuZnVuY3Rpb24gcGF0aFRvUmVnZXhwIChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gIGlmICghaXNhcnJheShrZXlzKSkge1xuICAgIG9wdGlvbnMgPSAvKiogQHR5cGUgeyFPYmplY3R9ICovIChrZXlzIHx8IG9wdGlvbnMpXG4gICAga2V5cyA9IFtdXG4gIH1cblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuXG4gIGlmIChwYXRoIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgcmV0dXJuIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIC8qKiBAdHlwZSB7IUFycmF5fSAqLyAoa2V5cykpXG4gIH1cblxuICBpZiAoaXNhcnJheShwYXRoKSkge1xuICAgIHJldHVybiBhcnJheVRvUmVnZXhwKC8qKiBAdHlwZSB7IUFycmF5fSAqLyAocGF0aCksIC8qKiBAdHlwZSB7IUFycmF5fSAqLyAoa2V5cyksIG9wdGlvbnMpXG4gIH1cblxuICByZXR1cm4gc3RyaW5nVG9SZWdleHAoLyoqIEB0eXBlIHtzdHJpbmd9ICovIChwYXRoKSwgLyoqIEB0eXBlIHshQXJyYXl9ICovIChrZXlzKSwgb3B0aW9ucylcbn1cblxuaW5kZXgucGFyc2UgPSBwYXJzZV8xO1xuaW5kZXguY29tcGlsZSA9IGNvbXBpbGVfMTtcbmluZGV4LnRva2Vuc1RvRnVuY3Rpb24gPSB0b2tlbnNUb0Z1bmN0aW9uXzE7XG5pbmRleC50b2tlbnNUb1JlZ0V4cCA9IHRva2Vuc1RvUmVnRXhwXzE7XG5cbi8qICAqL1xuXG52YXIgcmVnZXhwQ2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbmZ1bmN0aW9uIGdldFJvdXRlUmVnZXggKHBhdGgpIHtcbiAgdmFyIGhpdCA9IHJlZ2V4cENhY2hlW3BhdGhdXG4gIHZhciBrZXlzLCByZWdleHBcblxuICBpZiAoaGl0KSB7XG4gICAga2V5cyA9IGhpdC5rZXlzXG4gICAgcmVnZXhwID0gaGl0LnJlZ2V4cFxuICB9IGVsc2Uge1xuICAgIGtleXMgPSBbXVxuICAgIHJlZ2V4cCA9IGluZGV4KHBhdGgsIGtleXMpXG4gICAgcmVnZXhwQ2FjaGVbcGF0aF0gPSB7IGtleXM6IGtleXMsIHJlZ2V4cDogcmVnZXhwIH1cbiAgfVxuXG4gIHJldHVybiB7IGtleXM6IGtleXMsIHJlZ2V4cDogcmVnZXhwIH1cbn1cblxudmFyIHJlZ2V4cENvbXBpbGVDYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuZnVuY3Rpb24gZmlsbFBhcmFtcyAoXG4gIHBhdGgsXG4gIHBhcmFtcyxcbiAgcm91dGVNc2dcbikge1xuICB0cnkge1xuICAgIHZhciBmaWxsZXIgPVxuICAgICAgcmVnZXhwQ29tcGlsZUNhY2hlW3BhdGhdIHx8XG4gICAgICAocmVnZXhwQ29tcGlsZUNhY2hlW3BhdGhdID0gaW5kZXguY29tcGlsZShwYXRoKSlcbiAgICByZXR1cm4gZmlsbGVyKHBhcmFtcyB8fCB7fSwgeyBwcmV0dHk6IHRydWUgfSlcbiAgfSBjYXRjaCAoZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB3YXJuKGZhbHNlLCAoXCJtaXNzaW5nIHBhcmFtIGZvciBcIiArIHJvdXRlTXNnICsgXCI6IFwiICsgKGUubWVzc2FnZSkpKVxuICAgIH1cbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gbm9ybWFsaXplTG9jYXRpb24gKFxuICByYXcsXG4gIGN1cnJlbnQsXG4gIGFwcGVuZFxuKSB7XG4gIHZhciBuZXh0ID0gdHlwZW9mIHJhdyA9PT0gJ3N0cmluZycgPyB7IHBhdGg6IHJhdyB9IDogcmF3XG4gIC8vIG5hbWVkIHRhcmdldFxuICBpZiAobmV4dC5uYW1lIHx8IG5leHQuX25vcm1hbGl6ZWQpIHtcbiAgICByZXR1cm4gbmV4dFxuICB9XG5cbiAgLy8gcmVsYXRpdmUgcGFyYW1zXG4gIGlmICghbmV4dC5wYXRoICYmIG5leHQucGFyYW1zICYmIGN1cnJlbnQpIHtcbiAgICBuZXh0ID0gYXNzaWduKHt9LCBuZXh0KVxuICAgIG5leHQuX25vcm1hbGl6ZWQgPSB0cnVlXG4gICAgdmFyIHBhcmFtcyA9IGFzc2lnbihhc3NpZ24oe30sIGN1cnJlbnQucGFyYW1zKSwgbmV4dC5wYXJhbXMpXG4gICAgaWYgKGN1cnJlbnQubmFtZSkge1xuICAgICAgbmV4dC5uYW1lID0gY3VycmVudC5uYW1lXG4gICAgICBuZXh0LnBhcmFtcyA9IHBhcmFtc1xuICAgIH0gZWxzZSBpZiAoY3VycmVudC5tYXRjaGVkKSB7XG4gICAgICB2YXIgcmF3UGF0aCA9IGN1cnJlbnQubWF0Y2hlZFtjdXJyZW50Lm1hdGNoZWQubGVuZ3RoIC0gMV0ucGF0aFxuICAgICAgbmV4dC5wYXRoID0gZmlsbFBhcmFtcyhyYXdQYXRoLCBwYXJhbXMsIChcInBhdGggXCIgKyAoY3VycmVudC5wYXRoKSkpXG4gICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB3YXJuKGZhbHNlLCBcInJlbGF0aXZlIHBhcmFtcyBuYXZpZ2F0aW9uIHJlcXVpcmVzIGEgY3VycmVudCByb3V0ZS5cIilcbiAgICB9XG4gICAgcmV0dXJuIG5leHRcbiAgfVxuXG4gIHZhciBwYXJzZWRQYXRoID0gcGFyc2VQYXRoKG5leHQucGF0aCB8fCAnJylcbiAgdmFyIGJhc2VQYXRoID0gKGN1cnJlbnQgJiYgY3VycmVudC5wYXRoKSB8fCAnLydcbiAgdmFyIHBhdGggPSBwYXJzZWRQYXRoLnBhdGhcbiAgICA/IHJlc29sdmVQYXRoKHBhcnNlZFBhdGgucGF0aCwgYmFzZVBhdGgsIGFwcGVuZCB8fCBuZXh0LmFwcGVuZClcbiAgICA6IChjdXJyZW50ICYmIGN1cnJlbnQucGF0aCkgfHwgJy8nXG4gIHZhciBxdWVyeSA9IHJlc29sdmVRdWVyeShwYXJzZWRQYXRoLnF1ZXJ5LCBuZXh0LnF1ZXJ5KVxuICB2YXIgaGFzaCA9IG5leHQuaGFzaCB8fCBwYXJzZWRQYXRoLmhhc2hcbiAgaWYgKGhhc2ggJiYgaGFzaC5jaGFyQXQoMCkgIT09ICcjJykge1xuICAgIGhhc2ggPSBcIiNcIiArIGhhc2hcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgX25vcm1hbGl6ZWQ6IHRydWUsXG4gICAgcGF0aDogcGF0aCxcbiAgICBxdWVyeTogcXVlcnksXG4gICAgaGFzaDogaGFzaFxuICB9XG59XG5cbmZ1bmN0aW9uIGFzc2lnbiAoYSwgYikge1xuICBmb3IgKHZhciBrZXkgaW4gYikge1xuICAgIGFba2V5XSA9IGJba2V5XVxuICB9XG4gIHJldHVybiBhXG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBjcmVhdGVNYXRjaGVyIChyb3V0ZXMpIHtcbiAgdmFyIHJlZiA9IGNyZWF0ZVJvdXRlTWFwKHJvdXRlcyk7XG4gIHZhciBwYXRoTWFwID0gcmVmLnBhdGhNYXA7XG4gIHZhciBuYW1lTWFwID0gcmVmLm5hbWVNYXA7XG5cbiAgZnVuY3Rpb24gbWF0Y2ggKFxuICAgIHJhdyxcbiAgICBjdXJyZW50Um91dGUsXG4gICAgcmVkaXJlY3RlZEZyb21cbiAgKSB7XG4gICAgdmFyIGxvY2F0aW9uID0gbm9ybWFsaXplTG9jYXRpb24ocmF3LCBjdXJyZW50Um91dGUpXG4gICAgdmFyIG5hbWUgPSBsb2NhdGlvbi5uYW1lO1xuXG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIHZhciByZWNvcmQgPSBuYW1lTWFwW25hbWVdXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB3YXJuKHJlY29yZCwgKFwiUm91dGUgd2l0aCBuYW1lICdcIiArIG5hbWUgKyBcIicgZG9lcyBub3QgZXhpc3RcIikpXG4gICAgICB9XG4gICAgICB2YXIgcGFyYW1OYW1lcyA9IGdldFJvdXRlUmVnZXgocmVjb3JkLnBhdGgpLmtleXNcbiAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7IHJldHVybiAha2V5Lm9wdGlvbmFsOyB9KVxuICAgICAgICAubWFwKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleS5uYW1lOyB9KVxuXG4gICAgICBpZiAodHlwZW9mIGxvY2F0aW9uLnBhcmFtcyAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgbG9jYXRpb24ucGFyYW1zID0ge31cbiAgICAgIH1cblxuICAgICAgaWYgKGN1cnJlbnRSb3V0ZSAmJiB0eXBlb2YgY3VycmVudFJvdXRlLnBhcmFtcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIGN1cnJlbnRSb3V0ZS5wYXJhbXMpIHtcbiAgICAgICAgICBpZiAoIShrZXkgaW4gbG9jYXRpb24ucGFyYW1zKSAmJiBwYXJhbU5hbWVzLmluZGV4T2Yoa2V5KSA+IC0xKSB7XG4gICAgICAgICAgICBsb2NhdGlvbi5wYXJhbXNba2V5XSA9IGN1cnJlbnRSb3V0ZS5wYXJhbXNba2V5XVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkKSB7XG4gICAgICAgIGxvY2F0aW9uLnBhdGggPSBmaWxsUGFyYW1zKHJlY29yZC5wYXRoLCBsb2NhdGlvbi5wYXJhbXMsIChcIm5hbWVkIHJvdXRlIFxcXCJcIiArIG5hbWUgKyBcIlxcXCJcIikpXG4gICAgICAgIHJldHVybiBfY3JlYXRlUm91dGUocmVjb3JkLCBsb2NhdGlvbiwgcmVkaXJlY3RlZEZyb20pXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChsb2NhdGlvbi5wYXRoKSB7XG4gICAgICBsb2NhdGlvbi5wYXJhbXMgPSB7fVxuICAgICAgZm9yICh2YXIgcGF0aCBpbiBwYXRoTWFwKSB7XG4gICAgICAgIGlmIChtYXRjaFJvdXRlKHBhdGgsIGxvY2F0aW9uLnBhcmFtcywgbG9jYXRpb24ucGF0aCkpIHtcbiAgICAgICAgICByZXR1cm4gX2NyZWF0ZVJvdXRlKHBhdGhNYXBbcGF0aF0sIGxvY2F0aW9uLCByZWRpcmVjdGVkRnJvbSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBubyBtYXRjaFxuICAgIHJldHVybiBfY3JlYXRlUm91dGUobnVsbCwgbG9jYXRpb24pXG4gIH1cblxuICBmdW5jdGlvbiByZWRpcmVjdCAoXG4gICAgcmVjb3JkLFxuICAgIGxvY2F0aW9uXG4gICkge1xuICAgIHZhciBvcmlnaW5hbFJlZGlyZWN0ID0gcmVjb3JkLnJlZGlyZWN0XG4gICAgdmFyIHJlZGlyZWN0ID0gdHlwZW9mIG9yaWdpbmFsUmVkaXJlY3QgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBvcmlnaW5hbFJlZGlyZWN0KGNyZWF0ZVJvdXRlKHJlY29yZCwgbG9jYXRpb24pKVxuICAgICAgICA6IG9yaWdpbmFsUmVkaXJlY3RcblxuICAgIGlmICh0eXBlb2YgcmVkaXJlY3QgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZWRpcmVjdCA9IHsgcGF0aDogcmVkaXJlY3QgfVxuICAgIH1cblxuICAgIGlmICghcmVkaXJlY3QgfHwgdHlwZW9mIHJlZGlyZWN0ICE9PSAnb2JqZWN0Jykge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKFxuICAgICAgICBmYWxzZSwgKFwiaW52YWxpZCByZWRpcmVjdCBvcHRpb246IFwiICsgKEpTT04uc3RyaW5naWZ5KHJlZGlyZWN0KSkpXG4gICAgICApXG4gICAgICByZXR1cm4gX2NyZWF0ZVJvdXRlKG51bGwsIGxvY2F0aW9uKVxuICAgIH1cblxuICAgIHZhciByZSA9IHJlZGlyZWN0XG4gICAgdmFyIG5hbWUgPSByZS5uYW1lO1xuICAgIHZhciBwYXRoID0gcmUucGF0aDtcbiAgICB2YXIgcXVlcnkgPSBsb2NhdGlvbi5xdWVyeTtcbiAgICB2YXIgaGFzaCA9IGxvY2F0aW9uLmhhc2g7XG4gICAgdmFyIHBhcmFtcyA9IGxvY2F0aW9uLnBhcmFtcztcbiAgICBxdWVyeSA9IHJlLmhhc093blByb3BlcnR5KCdxdWVyeScpID8gcmUucXVlcnkgOiBxdWVyeVxuICAgIGhhc2ggPSByZS5oYXNPd25Qcm9wZXJ0eSgnaGFzaCcpID8gcmUuaGFzaCA6IGhhc2hcbiAgICBwYXJhbXMgPSByZS5oYXNPd25Qcm9wZXJ0eSgncGFyYW1zJykgPyByZS5wYXJhbXMgOiBwYXJhbXNcblxuICAgIGlmIChuYW1lKSB7XG4gICAgICAvLyByZXNvbHZlZCBuYW1lZCBkaXJlY3RcbiAgICAgIHZhciB0YXJnZXRSZWNvcmQgPSBuYW1lTWFwW25hbWVdXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBhc3NlcnQodGFyZ2V0UmVjb3JkLCAoXCJyZWRpcmVjdCBmYWlsZWQ6IG5hbWVkIHJvdXRlIFxcXCJcIiArIG5hbWUgKyBcIlxcXCIgbm90IGZvdW5kLlwiKSlcbiAgICAgIH1cbiAgICAgIHJldHVybiBtYXRjaCh7XG4gICAgICAgIF9ub3JtYWxpemVkOiB0cnVlLFxuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICBxdWVyeTogcXVlcnksXG4gICAgICAgIGhhc2g6IGhhc2gsXG4gICAgICAgIHBhcmFtczogcGFyYW1zXG4gICAgICB9LCB1bmRlZmluZWQsIGxvY2F0aW9uKVxuICAgIH0gZWxzZSBpZiAocGF0aCkge1xuICAgICAgLy8gMS4gcmVzb2x2ZSByZWxhdGl2ZSByZWRpcmVjdFxuICAgICAgdmFyIHJhd1BhdGggPSByZXNvbHZlUmVjb3JkUGF0aChwYXRoLCByZWNvcmQpXG4gICAgICAvLyAyLiByZXNvbHZlIHBhcmFtc1xuICAgICAgdmFyIHJlc29sdmVkUGF0aCA9IGZpbGxQYXJhbXMocmF3UGF0aCwgcGFyYW1zLCAoXCJyZWRpcmVjdCByb3V0ZSB3aXRoIHBhdGggXFxcIlwiICsgcmF3UGF0aCArIFwiXFxcIlwiKSlcbiAgICAgIC8vIDMuIHJlbWF0Y2ggd2l0aCBleGlzdGluZyBxdWVyeSBhbmQgaGFzaFxuICAgICAgcmV0dXJuIG1hdGNoKHtcbiAgICAgICAgX25vcm1hbGl6ZWQ6IHRydWUsXG4gICAgICAgIHBhdGg6IHJlc29sdmVkUGF0aCxcbiAgICAgICAgcXVlcnk6IHF1ZXJ5LFxuICAgICAgICBoYXNoOiBoYXNoXG4gICAgICB9LCB1bmRlZmluZWQsIGxvY2F0aW9uKVxuICAgIH0gZWxzZSB7XG4gICAgICB3YXJuKGZhbHNlLCAoXCJpbnZhbGlkIHJlZGlyZWN0IG9wdGlvbjogXCIgKyAoSlNPTi5zdHJpbmdpZnkocmVkaXJlY3QpKSkpXG4gICAgICByZXR1cm4gX2NyZWF0ZVJvdXRlKG51bGwsIGxvY2F0aW9uKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGFsaWFzIChcbiAgICByZWNvcmQsXG4gICAgbG9jYXRpb24sXG4gICAgbWF0Y2hBc1xuICApIHtcbiAgICB2YXIgYWxpYXNlZFBhdGggPSBmaWxsUGFyYW1zKG1hdGNoQXMsIGxvY2F0aW9uLnBhcmFtcywgKFwiYWxpYXNlZCByb3V0ZSB3aXRoIHBhdGggXFxcIlwiICsgbWF0Y2hBcyArIFwiXFxcIlwiKSlcbiAgICB2YXIgYWxpYXNlZE1hdGNoID0gbWF0Y2goe1xuICAgICAgX25vcm1hbGl6ZWQ6IHRydWUsXG4gICAgICBwYXRoOiBhbGlhc2VkUGF0aFxuICAgIH0pXG4gICAgaWYgKGFsaWFzZWRNYXRjaCkge1xuICAgICAgdmFyIG1hdGNoZWQgPSBhbGlhc2VkTWF0Y2gubWF0Y2hlZFxuICAgICAgdmFyIGFsaWFzZWRSZWNvcmQgPSBtYXRjaGVkW21hdGNoZWQubGVuZ3RoIC0gMV1cbiAgICAgIGxvY2F0aW9uLnBhcmFtcyA9IGFsaWFzZWRNYXRjaC5wYXJhbXNcbiAgICAgIHJldHVybiBfY3JlYXRlUm91dGUoYWxpYXNlZFJlY29yZCwgbG9jYXRpb24pXG4gICAgfVxuICAgIHJldHVybiBfY3JlYXRlUm91dGUobnVsbCwgbG9jYXRpb24pXG4gIH1cblxuICBmdW5jdGlvbiBfY3JlYXRlUm91dGUgKFxuICAgIHJlY29yZCxcbiAgICBsb2NhdGlvbixcbiAgICByZWRpcmVjdGVkRnJvbVxuICApIHtcbiAgICBpZiAocmVjb3JkICYmIHJlY29yZC5yZWRpcmVjdCkge1xuICAgICAgcmV0dXJuIHJlZGlyZWN0KHJlY29yZCwgcmVkaXJlY3RlZEZyb20gfHwgbG9jYXRpb24pXG4gICAgfVxuICAgIGlmIChyZWNvcmQgJiYgcmVjb3JkLm1hdGNoQXMpIHtcbiAgICAgIHJldHVybiBhbGlhcyhyZWNvcmQsIGxvY2F0aW9uLCByZWNvcmQubWF0Y2hBcylcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZVJvdXRlKHJlY29yZCwgbG9jYXRpb24sIHJlZGlyZWN0ZWRGcm9tKVxuICB9XG5cbiAgcmV0dXJuIG1hdGNoXG59XG5cbmZ1bmN0aW9uIG1hdGNoUm91dGUgKFxuICBwYXRoLFxuICBwYXJhbXMsXG4gIHBhdGhuYW1lXG4pIHtcbiAgdmFyIHJlZiA9IGdldFJvdXRlUmVnZXgocGF0aCk7XG4gIHZhciByZWdleHAgPSByZWYucmVnZXhwO1xuICB2YXIga2V5cyA9IHJlZi5rZXlzO1xuICB2YXIgbSA9IHBhdGhuYW1lLm1hdGNoKHJlZ2V4cClcblxuICBpZiAoIW0pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfSBlbHNlIGlmICghcGFyYW1zKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAxLCBsZW4gPSBtLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgdmFyIGtleSA9IGtleXNbaSAtIDFdXG4gICAgdmFyIHZhbCA9IHR5cGVvZiBtW2ldID09PSAnc3RyaW5nJyA/IGRlY29kZVVSSUNvbXBvbmVudChtW2ldKSA6IG1baV1cbiAgICBpZiAoa2V5KSB7IHBhcmFtc1trZXkubmFtZV0gPSB2YWwgfVxuICB9XG5cbiAgcmV0dXJuIHRydWVcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZVJlY29yZFBhdGggKHBhdGgsIHJlY29yZCkge1xuICByZXR1cm4gcmVzb2x2ZVBhdGgocGF0aCwgcmVjb3JkLnBhcmVudCA/IHJlY29yZC5wYXJlbnQucGF0aCA6ICcvJywgdHJ1ZSlcbn1cblxuLyogICovXG5cbnZhciBpbkJyb3dzZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuXG52YXIgc3VwcG9ydHNIaXN0b3J5ID0gaW5Ccm93c2VyICYmIChmdW5jdGlvbiAoKSB7XG4gIHZhciB1YSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50XG5cbiAgaWYgKFxuICAgICh1YS5pbmRleE9mKCdBbmRyb2lkIDIuJykgIT09IC0xIHx8IHVhLmluZGV4T2YoJ0FuZHJvaWQgNC4wJykgIT09IC0xKSAmJlxuICAgIHVhLmluZGV4T2YoJ01vYmlsZSBTYWZhcmknKSAhPT0gLTEgJiZcbiAgICB1YS5pbmRleE9mKCdDaHJvbWUnKSA9PT0gLTEgJiZcbiAgICB1YS5pbmRleE9mKCdXaW5kb3dzIFBob25lJykgPT09IC0xXG4gICkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIHdpbmRvdy5oaXN0b3J5ICYmICdwdXNoU3RhdGUnIGluIHdpbmRvdy5oaXN0b3J5XG59KSgpXG5cbi8qICAqL1xuXG5mdW5jdGlvbiBydW5RdWV1ZSAocXVldWUsIGZuLCBjYikge1xuICB2YXIgc3RlcCA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgIGlmIChpbmRleCA+PSBxdWV1ZS5sZW5ndGgpIHtcbiAgICAgIGNiKClcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHF1ZXVlW2luZGV4XSkge1xuICAgICAgICBmbihxdWV1ZVtpbmRleF0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBzdGVwKGluZGV4ICsgMSlcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0ZXAoaW5kZXggKyAxKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBzdGVwKDApXG59XG5cbi8qICAqL1xuXG5cbnZhciBIaXN0b3J5ID0gZnVuY3Rpb24gSGlzdG9yeSAocm91dGVyLCBiYXNlKSB7XG4gIHRoaXMucm91dGVyID0gcm91dGVyXG4gIHRoaXMuYmFzZSA9IG5vcm1hbGl6ZUJhc2UoYmFzZSlcbiAgLy8gc3RhcnQgd2l0aCBhIHJvdXRlIG9iamVjdCB0aGF0IHN0YW5kcyBmb3IgXCJub3doZXJlXCJcbiAgdGhpcy5jdXJyZW50ID0gU1RBUlRcbiAgdGhpcy5wZW5kaW5nID0gbnVsbFxufTtcblxuSGlzdG9yeS5wcm90b3R5cGUubGlzdGVuID0gZnVuY3Rpb24gbGlzdGVuIChjYikge1xuICB0aGlzLmNiID0gY2Jcbn07XG5cbkhpc3RvcnkucHJvdG90eXBlLnRyYW5zaXRpb25UbyA9IGZ1bmN0aW9uIHRyYW5zaXRpb25UbyAobG9jYXRpb24sIG9uQ29tcGxldGUsIG9uQWJvcnQpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICB2YXIgcm91dGUgPSB0aGlzLnJvdXRlci5tYXRjaChsb2NhdGlvbiwgdGhpcy5jdXJyZW50KVxuICB0aGlzLmNvbmZpcm1UcmFuc2l0aW9uKHJvdXRlLCBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcyQxLnVwZGF0ZVJvdXRlKHJvdXRlKVxuICAgIG9uQ29tcGxldGUgJiYgb25Db21wbGV0ZShyb3V0ZSlcbiAgICB0aGlzJDEuZW5zdXJlVVJMKClcbiAgfSwgb25BYm9ydClcbn07XG5cbkhpc3RvcnkucHJvdG90eXBlLmNvbmZpcm1UcmFuc2l0aW9uID0gZnVuY3Rpb24gY29uZmlybVRyYW5zaXRpb24gKHJvdXRlLCBvbkNvbXBsZXRlLCBvbkFib3J0KSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgdmFyIGN1cnJlbnQgPSB0aGlzLmN1cnJlbnRcbiAgdmFyIGFib3J0ID0gZnVuY3Rpb24gKCkgeyBvbkFib3J0ICYmIG9uQWJvcnQoKSB9XG4gIGlmIChpc1NhbWVSb3V0ZShyb3V0ZSwgY3VycmVudCkpIHtcbiAgICB0aGlzLmVuc3VyZVVSTCgpXG4gICAgcmV0dXJuIGFib3J0KClcbiAgfVxuXG4gIHZhciByZWYgPSByZXNvbHZlUXVldWUodGhpcy5jdXJyZW50Lm1hdGNoZWQsIHJvdXRlLm1hdGNoZWQpO1xuICAgIHZhciBkZWFjdGl2YXRlZCA9IHJlZi5kZWFjdGl2YXRlZDtcbiAgICB2YXIgYWN0aXZhdGVkID0gcmVmLmFjdGl2YXRlZDtcblxuICB2YXIgcXVldWUgPSBbXS5jb25jYXQoXG4gICAgLy8gaW4tY29tcG9uZW50IGxlYXZlIGd1YXJkc1xuICAgIGV4dHJhY3RMZWF2ZUd1YXJkcyhkZWFjdGl2YXRlZCksXG4gICAgLy8gZ2xvYmFsIGJlZm9yZSBob29rc1xuICAgIHRoaXMucm91dGVyLmJlZm9yZUhvb2tzLFxuICAgIC8vIGVudGVyIGd1YXJkc1xuICAgIGFjdGl2YXRlZC5tYXAoZnVuY3Rpb24gKG0pIHsgcmV0dXJuIG0uYmVmb3JlRW50ZXI7IH0pLFxuICAgIC8vIGFzeW5jIGNvbXBvbmVudHNcbiAgICByZXNvbHZlQXN5bmNDb21wb25lbnRzKGFjdGl2YXRlZClcbiAgKVxuXG4gIHRoaXMucGVuZGluZyA9IHJvdXRlXG4gIHZhciBpdGVyYXRvciA9IGZ1bmN0aW9uIChob29rLCBuZXh0KSB7XG4gICAgaWYgKHRoaXMkMS5wZW5kaW5nICE9PSByb3V0ZSkge1xuICAgICAgcmV0dXJuIGFib3J0KClcbiAgICB9XG4gICAgaG9vayhyb3V0ZSwgY3VycmVudCwgZnVuY3Rpb24gKHRvKSB7XG4gICAgICBpZiAodG8gPT09IGZhbHNlKSB7XG4gICAgICAgIC8vIG5leHQoZmFsc2UpIC0+IGFib3J0IG5hdmlnYXRpb24sIGVuc3VyZSBjdXJyZW50IFVSTFxuICAgICAgICB0aGlzJDEuZW5zdXJlVVJMKHRydWUpXG4gICAgICAgIGFib3J0KClcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHRvID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdG8gPT09ICdvYmplY3QnKSB7XG4gICAgICAgIC8vIG5leHQoJy8nKSBvciBuZXh0KHsgcGF0aDogJy8nIH0pIC0+IHJlZGlyZWN0XG4gICAgICAgICh0eXBlb2YgdG8gPT09ICdvYmplY3QnICYmIHRvLnJlcGxhY2UpID8gdGhpcyQxLnJlcGxhY2UodG8pIDogdGhpcyQxLnB1c2godG8pXG4gICAgICAgIGFib3J0KClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGNvbmZpcm0gdHJhbnNpdGlvbiBhbmQgcGFzcyBvbiB0aGUgdmFsdWVcbiAgICAgICAgbmV4dCh0bylcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcnVuUXVldWUocXVldWUsIGl0ZXJhdG9yLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHBvc3RFbnRlckNicyA9IFtdXG4gICAgdmFyIGVudGVyR3VhcmRzID0gZXh0cmFjdEVudGVyR3VhcmRzKGFjdGl2YXRlZCwgcG9zdEVudGVyQ2JzLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcyQxLmN1cnJlbnQgPT09IHJvdXRlXG4gICAgfSlcbiAgICAvLyB3YWl0IHVudGlsIGFzeW5jIGNvbXBvbmVudHMgYXJlIHJlc29sdmVkIGJlZm9yZVxuICAgIC8vIGV4dHJhY3RpbmcgaW4tY29tcG9uZW50IGVudGVyIGd1YXJkc1xuICAgIHJ1blF1ZXVlKGVudGVyR3VhcmRzLCBpdGVyYXRvciwgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHRoaXMkMS5wZW5kaW5nICE9PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gYWJvcnQoKVxuICAgICAgfVxuICAgICAgdGhpcyQxLnBlbmRpbmcgPSBudWxsXG4gICAgICBvbkNvbXBsZXRlKHJvdXRlKVxuICAgICAgaWYgKHRoaXMkMS5yb3V0ZXIuYXBwKSB7XG4gICAgICAgIHRoaXMkMS5yb3V0ZXIuYXBwLiRuZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcG9zdEVudGVyQ2JzLmZvckVhY2goZnVuY3Rpb24gKGNiKSB7IHJldHVybiBjYigpOyB9KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59O1xuXG5IaXN0b3J5LnByb3RvdHlwZS51cGRhdGVSb3V0ZSA9IGZ1bmN0aW9uIHVwZGF0ZVJvdXRlIChyb3V0ZSkge1xuICB2YXIgcHJldiA9IHRoaXMuY3VycmVudFxuICB0aGlzLmN1cnJlbnQgPSByb3V0ZVxuICB0aGlzLmNiICYmIHRoaXMuY2Iocm91dGUpXG4gIHRoaXMucm91dGVyLmFmdGVySG9va3MuZm9yRWFjaChmdW5jdGlvbiAoaG9vaykge1xuICAgIGhvb2sgJiYgaG9vayhyb3V0ZSwgcHJldilcbiAgfSlcbn07XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUJhc2UgKGJhc2UpIHtcbiAgaWYgKCFiYXNlKSB7XG4gICAgaWYgKGluQnJvd3Nlcikge1xuICAgICAgLy8gcmVzcGVjdCA8YmFzZT4gdGFnXG4gICAgICB2YXIgYmFzZUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYmFzZScpXG4gICAgICBiYXNlID0gYmFzZUVsID8gYmFzZUVsLmdldEF0dHJpYnV0ZSgnaHJlZicpIDogJy8nXG4gICAgfSBlbHNlIHtcbiAgICAgIGJhc2UgPSAnLydcbiAgICB9XG4gIH1cbiAgLy8gbWFrZSBzdXJlIHRoZXJlJ3MgdGhlIHN0YXJ0aW5nIHNsYXNoXG4gIGlmIChiYXNlLmNoYXJBdCgwKSAhPT0gJy8nKSB7XG4gICAgYmFzZSA9ICcvJyArIGJhc2VcbiAgfVxuICAvLyByZW1vdmUgdHJhaWxpbmcgc2xhc2hcbiAgcmV0dXJuIGJhc2UucmVwbGFjZSgvXFwvJC8sICcnKVxufVxuXG5mdW5jdGlvbiByZXNvbHZlUXVldWUgKFxuICBjdXJyZW50LFxuICBuZXh0XG4pIHtcbiAgdmFyIGlcbiAgdmFyIG1heCA9IE1hdGgubWF4KGN1cnJlbnQubGVuZ3RoLCBuZXh0Lmxlbmd0aClcbiAgZm9yIChpID0gMDsgaSA8IG1heDsgaSsrKSB7XG4gICAgaWYgKGN1cnJlbnRbaV0gIT09IG5leHRbaV0pIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG4gIHJldHVybiB7XG4gICAgYWN0aXZhdGVkOiBuZXh0LnNsaWNlKGkpLFxuICAgIGRlYWN0aXZhdGVkOiBjdXJyZW50LnNsaWNlKGkpXG4gIH1cbn1cblxuZnVuY3Rpb24gZXh0cmFjdEd1YXJkIChcbiAgZGVmLFxuICBrZXlcbikge1xuICBpZiAodHlwZW9mIGRlZiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIGV4dGVuZCBub3cgc28gdGhhdCBnbG9iYWwgbWl4aW5zIGFyZSBhcHBsaWVkLlxuICAgIGRlZiA9IF9WdWUuZXh0ZW5kKGRlZilcbiAgfVxuICByZXR1cm4gZGVmLm9wdGlvbnNba2V5XVxufVxuXG5mdW5jdGlvbiBleHRyYWN0TGVhdmVHdWFyZHMgKG1hdGNoZWQpIHtcbiAgcmV0dXJuIGZsYXR0ZW4oZmxhdE1hcENvbXBvbmVudHMobWF0Y2hlZCwgZnVuY3Rpb24gKGRlZiwgaW5zdGFuY2UpIHtcbiAgICB2YXIgZ3VhcmQgPSBleHRyYWN0R3VhcmQoZGVmLCAnYmVmb3JlUm91dGVMZWF2ZScpXG4gICAgaWYgKGd1YXJkKSB7XG4gICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShndWFyZClcbiAgICAgICAgPyBndWFyZC5tYXAoZnVuY3Rpb24gKGd1YXJkKSB7IHJldHVybiB3cmFwTGVhdmVHdWFyZChndWFyZCwgaW5zdGFuY2UpOyB9KVxuICAgICAgICA6IHdyYXBMZWF2ZUd1YXJkKGd1YXJkLCBpbnN0YW5jZSlcbiAgICB9XG4gIH0pLnJldmVyc2UoKSlcbn1cblxuZnVuY3Rpb24gd3JhcExlYXZlR3VhcmQgKFxuICBndWFyZCxcbiAgaW5zdGFuY2Vcbikge1xuICByZXR1cm4gZnVuY3Rpb24gcm91dGVMZWF2ZUd1YXJkICgpIHtcbiAgICByZXR1cm4gZ3VhcmQuYXBwbHkoaW5zdGFuY2UsIGFyZ3VtZW50cylcbiAgfVxufVxuXG5mdW5jdGlvbiBleHRyYWN0RW50ZXJHdWFyZHMgKFxuICBtYXRjaGVkLFxuICBjYnMsXG4gIGlzVmFsaWRcbikge1xuICByZXR1cm4gZmxhdHRlbihmbGF0TWFwQ29tcG9uZW50cyhtYXRjaGVkLCBmdW5jdGlvbiAoZGVmLCBfLCBtYXRjaCwga2V5KSB7XG4gICAgdmFyIGd1YXJkID0gZXh0cmFjdEd1YXJkKGRlZiwgJ2JlZm9yZVJvdXRlRW50ZXInKVxuICAgIGlmIChndWFyZCkge1xuICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoZ3VhcmQpXG4gICAgICAgID8gZ3VhcmQubWFwKGZ1bmN0aW9uIChndWFyZCkgeyByZXR1cm4gd3JhcEVudGVyR3VhcmQoZ3VhcmQsIGNicywgbWF0Y2gsIGtleSwgaXNWYWxpZCk7IH0pXG4gICAgICAgIDogd3JhcEVudGVyR3VhcmQoZ3VhcmQsIGNicywgbWF0Y2gsIGtleSwgaXNWYWxpZClcbiAgICB9XG4gIH0pKVxufVxuXG5mdW5jdGlvbiB3cmFwRW50ZXJHdWFyZCAoXG4gIGd1YXJkLFxuICBjYnMsXG4gIG1hdGNoLFxuICBrZXksXG4gIGlzVmFsaWRcbikge1xuICByZXR1cm4gZnVuY3Rpb24gcm91dGVFbnRlckd1YXJkICh0bywgZnJvbSwgbmV4dCkge1xuICAgIHJldHVybiBndWFyZCh0bywgZnJvbSwgZnVuY3Rpb24gKGNiKSB7XG4gICAgICBuZXh0KGNiKVxuICAgICAgaWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjYnMucHVzaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gIzc1MFxuICAgICAgICAgIC8vIGlmIGEgcm91dGVyLXZpZXcgaXMgd3JhcHBlZCB3aXRoIGFuIG91dC1pbiB0cmFuc2l0aW9uLFxuICAgICAgICAgIC8vIHRoZSBpbnN0YW5jZSBtYXkgbm90IGhhdmUgYmVlbiByZWdpc3RlcmVkIGF0IHRoaXMgdGltZS5cbiAgICAgICAgICAvLyB3ZSB3aWxsIG5lZWQgdG8gcG9sbCBmb3IgcmVnaXN0cmF0aW9uIHVudGlsIGN1cnJlbnQgcm91dGVcbiAgICAgICAgICAvLyBpcyBubyBsb25nZXIgdmFsaWQuXG4gICAgICAgICAgcG9sbChjYiwgbWF0Y2guaW5zdGFuY2VzLCBrZXksIGlzVmFsaWQpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5mdW5jdGlvbiBwb2xsIChcbiAgY2IsIC8vIHNvbWVob3cgZmxvdyBjYW5ub3QgaW5mZXIgdGhpcyBpcyBhIGZ1bmN0aW9uXG4gIGluc3RhbmNlcyxcbiAga2V5LFxuICBpc1ZhbGlkXG4pIHtcbiAgaWYgKGluc3RhbmNlc1trZXldKSB7XG4gICAgY2IoaW5zdGFuY2VzW2tleV0pXG4gIH0gZWxzZSBpZiAoaXNWYWxpZCgpKSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBwb2xsKGNiLCBpbnN0YW5jZXMsIGtleSwgaXNWYWxpZClcbiAgICB9LCAxNilcbiAgfVxufVxuXG5mdW5jdGlvbiByZXNvbHZlQXN5bmNDb21wb25lbnRzIChtYXRjaGVkKSB7XG4gIHJldHVybiBmbGF0TWFwQ29tcG9uZW50cyhtYXRjaGVkLCBmdW5jdGlvbiAoZGVmLCBfLCBtYXRjaCwga2V5KSB7XG4gICAgLy8gaWYgaXQncyBhIGZ1bmN0aW9uIGFuZCBkb2Vzbid0IGhhdmUgVnVlIG9wdGlvbnMgYXR0YWNoZWQsXG4gICAgLy8gYXNzdW1lIGl0J3MgYW4gYXN5bmMgY29tcG9uZW50IHJlc29sdmUgZnVuY3Rpb24uXG4gICAgLy8gd2UgYXJlIG5vdCB1c2luZyBWdWUncyBkZWZhdWx0IGFzeW5jIHJlc29sdmluZyBtZWNoYW5pc20gYmVjYXVzZVxuICAgIC8vIHdlIHdhbnQgdG8gaGFsdCB0aGUgbmF2aWdhdGlvbiB1bnRpbCB0aGUgaW5jb21pbmcgY29tcG9uZW50IGhhcyBiZWVuXG4gICAgLy8gcmVzb2x2ZWQuXG4gICAgaWYgKHR5cGVvZiBkZWYgPT09ICdmdW5jdGlvbicgJiYgIWRlZi5vcHRpb25zKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHRvLCBmcm9tLCBuZXh0KSB7XG4gICAgICAgIHZhciByZXNvbHZlID0gZnVuY3Rpb24gKHJlc29sdmVkRGVmKSB7XG4gICAgICAgICAgbWF0Y2guY29tcG9uZW50c1trZXldID0gcmVzb2x2ZWREZWZcbiAgICAgICAgICBuZXh0KClcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciByZWplY3QgPSBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgICAgd2FybihmYWxzZSwgKFwiRmFpbGVkIHRvIHJlc29sdmUgYXN5bmMgY29tcG9uZW50IFwiICsga2V5ICsgXCI6IFwiICsgcmVhc29uKSlcbiAgICAgICAgICBuZXh0KGZhbHNlKVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHJlcyA9IGRlZihyZXNvbHZlLCByZWplY3QpXG4gICAgICAgIGlmIChyZXMgJiYgdHlwZW9mIHJlcy50aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgcmVzLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBmbGF0TWFwQ29tcG9uZW50cyAoXG4gIG1hdGNoZWQsXG4gIGZuXG4pIHtcbiAgcmV0dXJuIGZsYXR0ZW4obWF0Y2hlZC5tYXAoZnVuY3Rpb24gKG0pIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMobS5jb21wb25lbnRzKS5tYXAoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gZm4oXG4gICAgICBtLmNvbXBvbmVudHNba2V5XSxcbiAgICAgIG0uaW5zdGFuY2VzW2tleV0sXG4gICAgICBtLCBrZXlcbiAgICApOyB9KVxuICB9KSlcbn1cblxuZnVuY3Rpb24gZmxhdHRlbiAoYXJyKSB7XG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuY29uY2F0LmFwcGx5KFtdLCBhcnIpXG59XG5cbi8qICAqL1xuXG52YXIgcG9zaXRpb25TdG9yZSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuZnVuY3Rpb24gc2F2ZVNjcm9sbFBvc2l0aW9uIChrZXkpIHtcbiAgaWYgKCFrZXkpIHsgcmV0dXJuIH1cbiAgcG9zaXRpb25TdG9yZVtrZXldID0ge1xuICAgIHg6IHdpbmRvdy5wYWdlWE9mZnNldCxcbiAgICB5OiB3aW5kb3cucGFnZVlPZmZzZXRcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRTY3JvbGxQb3NpdGlvbiAoa2V5KSB7XG4gIGlmICgha2V5KSB7IHJldHVybiB9XG4gIHJldHVybiBwb3NpdGlvblN0b3JlW2tleV1cbn1cblxuZnVuY3Rpb24gZ2V0RWxlbWVudFBvc2l0aW9uIChlbCkge1xuICB2YXIgZG9jUmVjdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICB2YXIgZWxSZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgcmV0dXJuIHtcbiAgICB4OiBlbFJlY3QubGVmdCAtIGRvY1JlY3QubGVmdCxcbiAgICB5OiBlbFJlY3QudG9wIC0gZG9jUmVjdC50b3BcbiAgfVxufVxuXG5mdW5jdGlvbiBpc1ZhbGlkUG9zaXRpb24gKG9iaikge1xuICByZXR1cm4gaXNOdW1iZXIob2JqLngpIHx8IGlzTnVtYmVyKG9iai55KVxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVQb3NpdGlvbiAob2JqKSB7XG4gIHJldHVybiB7XG4gICAgeDogaXNOdW1iZXIob2JqLngpID8gb2JqLnggOiB3aW5kb3cucGFnZVhPZmZzZXQsXG4gICAgeTogaXNOdW1iZXIob2JqLnkpID8gb2JqLnkgOiB3aW5kb3cucGFnZVlPZmZzZXRcbiAgfVxufVxuXG5mdW5jdGlvbiBpc051bWJlciAodikge1xuICByZXR1cm4gdHlwZW9mIHYgPT09ICdudW1iZXInXG59XG5cbi8qICAqL1xuXG5cbi8vIHVzZSBVc2VyIFRpbWluZyBhcGkgKGlmIHByZXNlbnQpIGZvciBtb3JlIGFjY3VyYXRlIGtleSBwcmVjaXNpb25cbnZhciBUaW1lID0gaW5Ccm93c2VyID8gKHdpbmRvdy5wZXJmb3JtYW5jZSB8fCBEYXRlKSA6IERhdGVcblxudmFyIGdlbktleSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFN0cmluZyhUaW1lLm5vdygpKTsgfVxudmFyIF9rZXkgPSBnZW5LZXkoKVxuXG52YXIgSFRNTDVIaXN0b3J5ID0gKGZ1bmN0aW9uIChIaXN0b3J5KSB7XG4gIGZ1bmN0aW9uIEhUTUw1SGlzdG9yeSAocm91dGVyLCBiYXNlKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICBIaXN0b3J5LmNhbGwodGhpcywgcm91dGVyLCBiYXNlKVxuXG4gICAgdmFyIGV4cGVjdFNjcm9sbCA9IHJvdXRlci5vcHRpb25zLnNjcm9sbEJlaGF2aW9yXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIF9rZXkgPSBlLnN0YXRlICYmIGUuc3RhdGUua2V5XG4gICAgICB2YXIgY3VycmVudCA9IHRoaXMkMS5jdXJyZW50XG4gICAgICB0aGlzJDEudHJhbnNpdGlvblRvKGdldExvY2F0aW9uKHRoaXMkMS5iYXNlKSwgZnVuY3Rpb24gKG5leHQpIHtcbiAgICAgICAgaWYgKGV4cGVjdFNjcm9sbCkge1xuICAgICAgICAgIHRoaXMkMS5oYW5kbGVTY3JvbGwobmV4dCwgY3VycmVudCwgdHJ1ZSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgaWYgKGV4cGVjdFNjcm9sbCkge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2F2ZVNjcm9sbFBvc2l0aW9uKF9rZXkpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGlmICggSGlzdG9yeSApIEhUTUw1SGlzdG9yeS5fX3Byb3RvX18gPSBIaXN0b3J5O1xuICBIVE1MNUhpc3RvcnkucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggSGlzdG9yeSAmJiBIaXN0b3J5LnByb3RvdHlwZSApO1xuICBIVE1MNUhpc3RvcnkucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gSFRNTDVIaXN0b3J5O1xuXG4gIEhUTUw1SGlzdG9yeS5wcm90b3R5cGUuZ28gPSBmdW5jdGlvbiBnbyAobikge1xuICAgIHdpbmRvdy5oaXN0b3J5LmdvKG4pXG4gIH07XG5cbiAgSFRNTDVIaXN0b3J5LnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24gcHVzaCAobG9jYXRpb24pIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgIHZhciBjdXJyZW50ID0gdGhpcy5jdXJyZW50XG4gICAgdGhpcy50cmFuc2l0aW9uVG8obG9jYXRpb24sIGZ1bmN0aW9uIChyb3V0ZSkge1xuICAgICAgcHVzaFN0YXRlKGNsZWFuUGF0aCh0aGlzJDEuYmFzZSArIHJvdXRlLmZ1bGxQYXRoKSlcbiAgICAgIHRoaXMkMS5oYW5kbGVTY3JvbGwocm91dGUsIGN1cnJlbnQsIGZhbHNlKVxuICAgIH0pXG4gIH07XG5cbiAgSFRNTDVIaXN0b3J5LnByb3RvdHlwZS5yZXBsYWNlID0gZnVuY3Rpb24gcmVwbGFjZSAobG9jYXRpb24pIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgIHZhciBjdXJyZW50ID0gdGhpcy5jdXJyZW50XG4gICAgdGhpcy50cmFuc2l0aW9uVG8obG9jYXRpb24sIGZ1bmN0aW9uIChyb3V0ZSkge1xuICAgICAgcmVwbGFjZVN0YXRlKGNsZWFuUGF0aCh0aGlzJDEuYmFzZSArIHJvdXRlLmZ1bGxQYXRoKSlcbiAgICAgIHRoaXMkMS5oYW5kbGVTY3JvbGwocm91dGUsIGN1cnJlbnQsIGZhbHNlKVxuICAgIH0pXG4gIH07XG5cbiAgSFRNTDVIaXN0b3J5LnByb3RvdHlwZS5lbnN1cmVVUkwgPSBmdW5jdGlvbiBlbnN1cmVVUkwgKHB1c2gpIHtcbiAgICBpZiAoZ2V0TG9jYXRpb24odGhpcy5iYXNlKSAhPT0gdGhpcy5jdXJyZW50LmZ1bGxQYXRoKSB7XG4gICAgICB2YXIgY3VycmVudCA9IGNsZWFuUGF0aCh0aGlzLmJhc2UgKyB0aGlzLmN1cnJlbnQuZnVsbFBhdGgpXG4gICAgICBwdXNoID8gcHVzaFN0YXRlKGN1cnJlbnQpIDogcmVwbGFjZVN0YXRlKGN1cnJlbnQpXG4gICAgfVxuICB9O1xuXG4gIEhUTUw1SGlzdG9yeS5wcm90b3R5cGUuaGFuZGxlU2Nyb2xsID0gZnVuY3Rpb24gaGFuZGxlU2Nyb2xsICh0bywgZnJvbSwgaXNQb3ApIHtcbiAgICB2YXIgcm91dGVyID0gdGhpcy5yb3V0ZXJcbiAgICBpZiAoIXJvdXRlci5hcHApIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHZhciBiZWhhdmlvciA9IHJvdXRlci5vcHRpb25zLnNjcm9sbEJlaGF2aW9yXG4gICAgaWYgKCFiZWhhdmlvcikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBhc3NlcnQodHlwZW9mIGJlaGF2aW9yID09PSAnZnVuY3Rpb24nLCBcInNjcm9sbEJlaGF2aW9yIG11c3QgYmUgYSBmdW5jdGlvblwiKVxuICAgIH1cblxuICAgIC8vIHdhaXQgdW50aWwgcmUtcmVuZGVyIGZpbmlzaGVzIGJlZm9yZSBzY3JvbGxpbmdcbiAgICByb3V0ZXIuYXBwLiRuZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgcG9zaXRpb24gPSBnZXRTY3JvbGxQb3NpdGlvbihfa2V5KVxuICAgICAgdmFyIHNob3VsZFNjcm9sbCA9IGJlaGF2aW9yKHRvLCBmcm9tLCBpc1BvcCA/IHBvc2l0aW9uIDogbnVsbClcbiAgICAgIGlmICghc2hvdWxkU2Nyb2xsKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgdmFyIGlzT2JqZWN0ID0gdHlwZW9mIHNob3VsZFNjcm9sbCA9PT0gJ29iamVjdCdcbiAgICAgIGlmIChpc09iamVjdCAmJiB0eXBlb2Ygc2hvdWxkU2Nyb2xsLnNlbGVjdG9yID09PSAnc3RyaW5nJykge1xuICAgICAgICB2YXIgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNob3VsZFNjcm9sbC5zZWxlY3RvcilcbiAgICAgICAgaWYgKGVsKSB7XG4gICAgICAgICAgcG9zaXRpb24gPSBnZXRFbGVtZW50UG9zaXRpb24oZWwpXG4gICAgICAgIH0gZWxzZSBpZiAoaXNWYWxpZFBvc2l0aW9uKHNob3VsZFNjcm9sbCkpIHtcbiAgICAgICAgICBwb3NpdGlvbiA9IG5vcm1hbGl6ZVBvc2l0aW9uKHNob3VsZFNjcm9sbClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChpc09iamVjdCAmJiBpc1ZhbGlkUG9zaXRpb24oc2hvdWxkU2Nyb2xsKSkge1xuICAgICAgICBwb3NpdGlvbiA9IG5vcm1hbGl6ZVBvc2l0aW9uKHNob3VsZFNjcm9sbClcbiAgICAgIH1cblxuICAgICAgaWYgKHBvc2l0aW9uKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbyhwb3NpdGlvbi54LCBwb3NpdGlvbi55KVxuICAgICAgfVxuICAgIH0pXG4gIH07XG5cbiAgcmV0dXJuIEhUTUw1SGlzdG9yeTtcbn0oSGlzdG9yeSkpO1xuXG5mdW5jdGlvbiBnZXRMb2NhdGlvbiAoYmFzZSkge1xuICB2YXIgcGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZVxuICBpZiAoYmFzZSAmJiBwYXRoLmluZGV4T2YoYmFzZSkgPT09IDApIHtcbiAgICBwYXRoID0gcGF0aC5zbGljZShiYXNlLmxlbmd0aClcbiAgfVxuICByZXR1cm4gKHBhdGggfHwgJy8nKSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2ggKyB3aW5kb3cubG9jYXRpb24uaGFzaFxufVxuXG5mdW5jdGlvbiBwdXNoU3RhdGUgKHVybCwgcmVwbGFjZSkge1xuICAvLyB0cnkuLi5jYXRjaCB0aGUgcHVzaFN0YXRlIGNhbGwgdG8gZ2V0IGFyb3VuZCBTYWZhcmlcbiAgLy8gRE9NIEV4Y2VwdGlvbiAxOCB3aGVyZSBpdCBsaW1pdHMgdG8gMTAwIHB1c2hTdGF0ZSBjYWxsc1xuICB2YXIgaGlzdG9yeSA9IHdpbmRvdy5oaXN0b3J5XG4gIHRyeSB7XG4gICAgaWYgKHJlcGxhY2UpIHtcbiAgICAgIGhpc3RvcnkucmVwbGFjZVN0YXRlKHsga2V5OiBfa2V5IH0sICcnLCB1cmwpXG4gICAgfSBlbHNlIHtcbiAgICAgIF9rZXkgPSBnZW5LZXkoKVxuICAgICAgaGlzdG9yeS5wdXNoU3RhdGUoeyBrZXk6IF9rZXkgfSwgJycsIHVybClcbiAgICB9XG4gICAgc2F2ZVNjcm9sbFBvc2l0aW9uKF9rZXkpXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB3aW5kb3cubG9jYXRpb25bcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdhc3NpZ24nXSh1cmwpXG4gIH1cbn1cblxuZnVuY3Rpb24gcmVwbGFjZVN0YXRlICh1cmwpIHtcbiAgcHVzaFN0YXRlKHVybCwgdHJ1ZSlcbn1cblxuLyogICovXG5cblxudmFyIEhhc2hIaXN0b3J5ID0gKGZ1bmN0aW9uIChIaXN0b3J5KSB7XG4gIGZ1bmN0aW9uIEhhc2hIaXN0b3J5IChyb3V0ZXIsIGJhc2UsIGZhbGxiYWNrKSB7XG4gICAgSGlzdG9yeS5jYWxsKHRoaXMsIHJvdXRlciwgYmFzZSlcbiAgICAvLyBjaGVjayBoaXN0b3J5IGZhbGxiYWNrIGRlZXBsaW5raW5nXG4gICAgaWYgKGZhbGxiYWNrICYmIHRoaXMuY2hlY2tGYWxsYmFjaygpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgZW5zdXJlU2xhc2goKVxuICB9XG5cbiAgaWYgKCBIaXN0b3J5ICkgSGFzaEhpc3RvcnkuX19wcm90b19fID0gSGlzdG9yeTtcbiAgSGFzaEhpc3RvcnkucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggSGlzdG9yeSAmJiBIaXN0b3J5LnByb3RvdHlwZSApO1xuICBIYXNoSGlzdG9yeS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBIYXNoSGlzdG9yeTtcblxuICBIYXNoSGlzdG9yeS5wcm90b3R5cGUuY2hlY2tGYWxsYmFjayA9IGZ1bmN0aW9uIGNoZWNrRmFsbGJhY2sgKCkge1xuICAgIHZhciBsb2NhdGlvbiA9IGdldExvY2F0aW9uKHRoaXMuYmFzZSlcbiAgICBpZiAoIS9eXFwvIy8udGVzdChsb2NhdGlvbikpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKFxuICAgICAgICBjbGVhblBhdGgodGhpcy5iYXNlICsgJy8jJyArIGxvY2F0aW9uKVxuICAgICAgKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIH07XG5cbiAgSGFzaEhpc3RvcnkucHJvdG90eXBlLm9uSGFzaENoYW5nZSA9IGZ1bmN0aW9uIG9uSGFzaENoYW5nZSAoKSB7XG4gICAgaWYgKCFlbnN1cmVTbGFzaCgpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdGhpcy50cmFuc2l0aW9uVG8oZ2V0SGFzaCgpLCBmdW5jdGlvbiAocm91dGUpIHtcbiAgICAgIHJlcGxhY2VIYXNoKHJvdXRlLmZ1bGxQYXRoKVxuICAgIH0pXG4gIH07XG5cbiAgSGFzaEhpc3RvcnkucHJvdG90eXBlLnB1c2ggPSBmdW5jdGlvbiBwdXNoIChsb2NhdGlvbikge1xuICAgIHRoaXMudHJhbnNpdGlvblRvKGxvY2F0aW9uLCBmdW5jdGlvbiAocm91dGUpIHtcbiAgICAgIHB1c2hIYXNoKHJvdXRlLmZ1bGxQYXRoKVxuICAgIH0pXG4gIH07XG5cbiAgSGFzaEhpc3RvcnkucHJvdG90eXBlLnJlcGxhY2UgPSBmdW5jdGlvbiByZXBsYWNlIChsb2NhdGlvbikge1xuICAgIHRoaXMudHJhbnNpdGlvblRvKGxvY2F0aW9uLCBmdW5jdGlvbiAocm91dGUpIHtcbiAgICAgIHJlcGxhY2VIYXNoKHJvdXRlLmZ1bGxQYXRoKVxuICAgIH0pXG4gIH07XG5cbiAgSGFzaEhpc3RvcnkucHJvdG90eXBlLmdvID0gZnVuY3Rpb24gZ28gKG4pIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5nbyhuKVxuICB9O1xuXG4gIEhhc2hIaXN0b3J5LnByb3RvdHlwZS5lbnN1cmVVUkwgPSBmdW5jdGlvbiBlbnN1cmVVUkwgKHB1c2gpIHtcbiAgICB2YXIgY3VycmVudCA9IHRoaXMuY3VycmVudC5mdWxsUGF0aFxuICAgIGlmIChnZXRIYXNoKCkgIT09IGN1cnJlbnQpIHtcbiAgICAgIHB1c2ggPyBwdXNoSGFzaChjdXJyZW50KSA6IHJlcGxhY2VIYXNoKGN1cnJlbnQpXG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBIYXNoSGlzdG9yeTtcbn0oSGlzdG9yeSkpO1xuXG5mdW5jdGlvbiBlbnN1cmVTbGFzaCAoKSB7XG4gIHZhciBwYXRoID0gZ2V0SGFzaCgpXG4gIGlmIChwYXRoLmNoYXJBdCgwKSA9PT0gJy8nKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuICByZXBsYWNlSGFzaCgnLycgKyBwYXRoKVxuICByZXR1cm4gZmFsc2Vcbn1cblxuZnVuY3Rpb24gZ2V0SGFzaCAoKSB7XG4gIC8vIFdlIGNhbid0IHVzZSB3aW5kb3cubG9jYXRpb24uaGFzaCBoZXJlIGJlY2F1c2UgaXQncyBub3RcbiAgLy8gY29uc2lzdGVudCBhY3Jvc3MgYnJvd3NlcnMgLSBGaXJlZm94IHdpbGwgcHJlLWRlY29kZSBpdCFcbiAgdmFyIGhyZWYgPSB3aW5kb3cubG9jYXRpb24uaHJlZlxuICB2YXIgaW5kZXggPSBocmVmLmluZGV4T2YoJyMnKVxuICByZXR1cm4gaW5kZXggPT09IC0xID8gJycgOiBocmVmLnNsaWNlKGluZGV4ICsgMSlcbn1cblxuZnVuY3Rpb24gcHVzaEhhc2ggKHBhdGgpIHtcbiAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBwYXRoXG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VIYXNoIChwYXRoKSB7XG4gIHZhciBpID0gd2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZignIycpXG4gIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKFxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNsaWNlKDAsIGkgPj0gMCA/IGkgOiAwKSArICcjJyArIHBhdGhcbiAgKVxufVxuXG4vKiAgKi9cblxuXG52YXIgQWJzdHJhY3RIaXN0b3J5ID0gKGZ1bmN0aW9uIChIaXN0b3J5KSB7XG4gIGZ1bmN0aW9uIEFic3RyYWN0SGlzdG9yeSAocm91dGVyLCBiYXNlKSB7XG4gICAgSGlzdG9yeS5jYWxsKHRoaXMsIHJvdXRlciwgYmFzZSlcbiAgICB0aGlzLnN0YWNrID0gW11cbiAgICB0aGlzLmluZGV4ID0gLTFcbiAgfVxuXG4gIGlmICggSGlzdG9yeSApIEFic3RyYWN0SGlzdG9yeS5fX3Byb3RvX18gPSBIaXN0b3J5O1xuICBBYnN0cmFjdEhpc3RvcnkucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggSGlzdG9yeSAmJiBIaXN0b3J5LnByb3RvdHlwZSApO1xuICBBYnN0cmFjdEhpc3RvcnkucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQWJzdHJhY3RIaXN0b3J5O1xuXG4gIEFic3RyYWN0SGlzdG9yeS5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uIHB1c2ggKGxvY2F0aW9uKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICB0aGlzLnRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgICB0aGlzJDEuc3RhY2sgPSB0aGlzJDEuc3RhY2suc2xpY2UoMCwgdGhpcyQxLmluZGV4ICsgMSkuY29uY2F0KHJvdXRlKVxuICAgICAgdGhpcyQxLmluZGV4KytcbiAgICB9KVxuICB9O1xuXG4gIEFic3RyYWN0SGlzdG9yeS5wcm90b3R5cGUucmVwbGFjZSA9IGZ1bmN0aW9uIHJlcGxhY2UgKGxvY2F0aW9uKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICB0aGlzLnRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgICB0aGlzJDEuc3RhY2sgPSB0aGlzJDEuc3RhY2suc2xpY2UoMCwgdGhpcyQxLmluZGV4KS5jb25jYXQocm91dGUpXG4gICAgfSlcbiAgfTtcblxuICBBYnN0cmFjdEhpc3RvcnkucHJvdG90eXBlLmdvID0gZnVuY3Rpb24gZ28gKG4pIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgIHZhciB0YXJnZXRJbmRleCA9IHRoaXMuaW5kZXggKyBuXG4gICAgaWYgKHRhcmdldEluZGV4IDwgMCB8fCB0YXJnZXRJbmRleCA+PSB0aGlzLnN0YWNrLmxlbmd0aCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHZhciByb3V0ZSA9IHRoaXMuc3RhY2tbdGFyZ2V0SW5kZXhdXG4gICAgdGhpcy5jb25maXJtVHJhbnNpdGlvbihyb3V0ZSwgZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcyQxLmluZGV4ID0gdGFyZ2V0SW5kZXhcbiAgICAgIHRoaXMkMS51cGRhdGVSb3V0ZShyb3V0ZSlcbiAgICB9KVxuICB9O1xuXG4gIEFic3RyYWN0SGlzdG9yeS5wcm90b3R5cGUuZW5zdXJlVVJMID0gZnVuY3Rpb24gZW5zdXJlVVJMICgpIHtcbiAgICAvLyBub29wXG4gIH07XG5cbiAgcmV0dXJuIEFic3RyYWN0SGlzdG9yeTtcbn0oSGlzdG9yeSkpO1xuXG4vKiAgKi9cblxudmFyIFZ1ZVJvdXRlciA9IGZ1bmN0aW9uIFZ1ZVJvdXRlciAob3B0aW9ucykge1xuICBpZiAoIG9wdGlvbnMgPT09IHZvaWQgMCApIG9wdGlvbnMgPSB7fTtcblxuICB0aGlzLmFwcCA9IG51bGxcbiAgdGhpcy5vcHRpb25zID0gb3B0aW9uc1xuICB0aGlzLmJlZm9yZUhvb2tzID0gW11cbiAgdGhpcy5hZnRlckhvb2tzID0gW11cbiAgdGhpcy5tYXRjaCA9IGNyZWF0ZU1hdGNoZXIob3B0aW9ucy5yb3V0ZXMgfHwgW10pXG5cbiAgdmFyIG1vZGUgPSBvcHRpb25zLm1vZGUgfHwgJ2hhc2gnXG4gIHRoaXMuZmFsbGJhY2sgPSBtb2RlID09PSAnaGlzdG9yeScgJiYgIXN1cHBvcnRzSGlzdG9yeVxuICBpZiAodGhpcy5mYWxsYmFjaykge1xuICAgIG1vZGUgPSAnaGFzaCdcbiAgfVxuICBpZiAoIWluQnJvd3Nlcikge1xuICAgIG1vZGUgPSAnYWJzdHJhY3QnXG4gIH1cbiAgdGhpcy5tb2RlID0gbW9kZVxuXG4gIHN3aXRjaCAobW9kZSkge1xuICAgIGNhc2UgJ2hpc3RvcnknOlxuICAgICAgdGhpcy5oaXN0b3J5ID0gbmV3IEhUTUw1SGlzdG9yeSh0aGlzLCBvcHRpb25zLmJhc2UpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2hhc2gnOlxuICAgICAgdGhpcy5oaXN0b3J5ID0gbmV3IEhhc2hIaXN0b3J5KHRoaXMsIG9wdGlvbnMuYmFzZSwgdGhpcy5mYWxsYmFjaylcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYWJzdHJhY3QnOlxuICAgICAgdGhpcy5oaXN0b3J5ID0gbmV3IEFic3RyYWN0SGlzdG9yeSh0aGlzLCBvcHRpb25zLmJhc2UpXG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGFzc2VydChmYWxzZSwgKFwiaW52YWxpZCBtb2RlOiBcIiArIG1vZGUpKVxuICB9XG59O1xuXG52YXIgcHJvdG90eXBlQWNjZXNzb3JzID0geyBjdXJyZW50Um91dGU6IHt9IH07XG5cbnByb3RvdHlwZUFjY2Vzc29ycy5jdXJyZW50Um91dGUuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5oaXN0b3J5ICYmIHRoaXMuaGlzdG9yeS5jdXJyZW50XG59O1xuXG5WdWVSb3V0ZXIucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiBpbml0IChhcHAgLyogVnVlIGNvbXBvbmVudCBpbnN0YW5jZSAqLykge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgYXNzZXJ0KFxuICAgIGluc3RhbGwuaW5zdGFsbGVkLFxuICAgIFwibm90IGluc3RhbGxlZC4gTWFrZSBzdXJlIHRvIGNhbGwgYFZ1ZS51c2UoVnVlUm91dGVyKWAgXCIgK1xuICAgIFwiYmVmb3JlIGNyZWF0aW5nIHJvb3QgaW5zdGFuY2UuXCJcbiAgKVxuXG4gIHRoaXMuYXBwID0gYXBwXG5cbiAgdmFyIGhpc3RvcnkgPSB0aGlzLmhpc3RvcnlcblxuICBpZiAoaGlzdG9yeSBpbnN0YW5jZW9mIEhUTUw1SGlzdG9yeSkge1xuICAgIGhpc3RvcnkudHJhbnNpdGlvblRvKGdldExvY2F0aW9uKGhpc3RvcnkuYmFzZSkpXG4gIH0gZWxzZSBpZiAoaGlzdG9yeSBpbnN0YW5jZW9mIEhhc2hIaXN0b3J5KSB7XG4gICAgdmFyIHNldHVwSGFzaExpc3RlbmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGhpc3Rvcnkub25IYXNoQ2hhbmdlKClcbiAgICAgIH0pXG4gICAgfVxuICAgIGhpc3RvcnkudHJhbnNpdGlvblRvKGdldEhhc2goKSwgc2V0dXBIYXNoTGlzdGVuZXIsIHNldHVwSGFzaExpc3RlbmVyKVxuICB9XG5cbiAgaGlzdG9yeS5saXN0ZW4oZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgdGhpcyQxLmFwcC5fcm91dGUgPSByb3V0ZVxuICB9KVxufTtcblxuVnVlUm91dGVyLnByb3RvdHlwZS5iZWZvcmVFYWNoID0gZnVuY3Rpb24gYmVmb3JlRWFjaCAoZm4pIHtcbiAgdGhpcy5iZWZvcmVIb29rcy5wdXNoKGZuKVxufTtcblxuVnVlUm91dGVyLnByb3RvdHlwZS5hZnRlckVhY2ggPSBmdW5jdGlvbiBhZnRlckVhY2ggKGZuKSB7XG4gIHRoaXMuYWZ0ZXJIb29rcy5wdXNoKGZuKVxufTtcblxuVnVlUm91dGVyLnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24gcHVzaCAobG9jYXRpb24pIHtcbiAgdGhpcy5oaXN0b3J5LnB1c2gobG9jYXRpb24pXG59O1xuXG5WdWVSb3V0ZXIucHJvdG90eXBlLnJlcGxhY2UgPSBmdW5jdGlvbiByZXBsYWNlIChsb2NhdGlvbikge1xuICB0aGlzLmhpc3RvcnkucmVwbGFjZShsb2NhdGlvbilcbn07XG5cblZ1ZVJvdXRlci5wcm90b3R5cGUuZ28gPSBmdW5jdGlvbiBnbyAobikge1xuICB0aGlzLmhpc3RvcnkuZ28obilcbn07XG5cblZ1ZVJvdXRlci5wcm90b3R5cGUuYmFjayA9IGZ1bmN0aW9uIGJhY2sgKCkge1xuICB0aGlzLmdvKC0xKVxufTtcblxuVnVlUm91dGVyLnByb3RvdHlwZS5mb3J3YXJkID0gZnVuY3Rpb24gZm9yd2FyZCAoKSB7XG4gIHRoaXMuZ28oMSlcbn07XG5cblZ1ZVJvdXRlci5wcm90b3R5cGUuZ2V0TWF0Y2hlZENvbXBvbmVudHMgPSBmdW5jdGlvbiBnZXRNYXRjaGVkQ29tcG9uZW50cyAodG8pIHtcbiAgdmFyIHJvdXRlID0gdG9cbiAgICA/IHRoaXMucmVzb2x2ZSh0bykucmVzb2x2ZWRcbiAgICA6IHRoaXMuY3VycmVudFJvdXRlXG4gIGlmICghcm91dGUpIHtcbiAgICByZXR1cm4gW11cbiAgfVxuICByZXR1cm4gW10uY29uY2F0LmFwcGx5KFtdLCByb3V0ZS5tYXRjaGVkLm1hcChmdW5jdGlvbiAobSkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhtLmNvbXBvbmVudHMpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gbS5jb21wb25lbnRzW2tleV1cbiAgICB9KVxuICB9KSlcbn07XG5cblZ1ZVJvdXRlci5wcm90b3R5cGUucmVzb2x2ZSA9IGZ1bmN0aW9uIHJlc29sdmUgKFxuICB0byxcbiAgY3VycmVudCxcbiAgYXBwZW5kXG4pIHtcbiAgdmFyIG5vcm1hbGl6ZWRUbyA9IG5vcm1hbGl6ZUxvY2F0aW9uKHRvLCBjdXJyZW50IHx8IHRoaXMuaGlzdG9yeS5jdXJyZW50LCBhcHBlbmQpXG4gIHZhciByZXNvbHZlZCA9IHRoaXMubWF0Y2gobm9ybWFsaXplZFRvLCBjdXJyZW50KVxuICB2YXIgZnVsbFBhdGggPSByZXNvbHZlZC5yZWRpcmVjdGVkRnJvbSB8fCByZXNvbHZlZC5mdWxsUGF0aFxuICB2YXIgYmFzZSA9IHRoaXMuaGlzdG9yeS5iYXNlXG4gIHZhciBocmVmID0gY3JlYXRlSHJlZihiYXNlLCBmdWxsUGF0aCwgdGhpcy5tb2RlKVxuICByZXR1cm4ge1xuICAgIG5vcm1hbGl6ZWRUbzogbm9ybWFsaXplZFRvLFxuICAgIHJlc29sdmVkOiByZXNvbHZlZCxcbiAgICBocmVmOiBocmVmXG4gIH1cbn07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKCBWdWVSb3V0ZXIucHJvdG90eXBlLCBwcm90b3R5cGVBY2Nlc3NvcnMgKTtcblxuZnVuY3Rpb24gY3JlYXRlSHJlZiAoYmFzZSwgZnVsbFBhdGgsIG1vZGUpIHtcbiAgdmFyIHBhdGggPSBtb2RlID09PSAnaGFzaCcgPyAnIycgKyBmdWxsUGF0aCA6IGZ1bGxQYXRoXG4gIHJldHVybiBiYXNlID8gY2xlYW5QYXRoKGJhc2UgKyAnLycgKyBwYXRoKSA6IHBhdGhcbn1cblxuVnVlUm91dGVyLmluc3RhbGwgPSBpbnN0YWxsXG5WdWVSb3V0ZXIudmVyc2lvbiA9ICcyLjEuMidcblxuaWYgKGluQnJvd3NlciAmJiB3aW5kb3cuVnVlKSB7XG4gIHdpbmRvdy5WdWUudXNlKFZ1ZVJvdXRlcilcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWdWVSb3V0ZXI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1yb3V0ZXIvZGlzdC92dWUtcm91dGVyLmNvbW1vbi5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Byb2Nlc3MvYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9uYXYudnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0zNzQ3ZTIxZSF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9uYXYudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIi9Vc2Vycy9vei9zcmMvbWF0ZXJpYWwtY29tcG9uZW50cy9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9uYXYudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0zNzQ3ZTIxZVwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0zNzQ3ZTIxZVwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH1cbn0pKCl9XG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIG5hdi52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9uYXYudnVlIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJtZGwtbGF5b3V0X19kcmF3ZXJcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJtZGwtbGF5b3V0LXRpdGxlXCI+RXhhbXBsZXM8L3NwYW4+XG4gICAgICAgIDxuYXYgY2xhc3M9XCJtZGwtbmF2aWdhdGlvblwiPlxuXG4gICAgICAgICAgICA8cm91dGVyLWxpbmsgdG89XCIvdGV4dGZpZWxkc1wiIGNsYXNzPVwibWRsLW5hdmlnYXRpb25fX2xpbmtcIj5cbiAgICAgICAgICAgICAgICBUZXh0IEZpZWxkc1xuICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cblxuICAgICAgICAgICAgPHJvdXRlci1saW5rIHRvPVwiL2J1dHRvbnNcIiBjbGFzcz1cIm1kbC1uYXZpZ2F0aW9uX19saW5rXCI+XG4gICAgICAgICAgICAgICAgQnV0dG9uc1xuICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cblxuICAgICAgICAgICAgPHJvdXRlci1saW5rIHRvPVwiL3NuYWNrYmFyXCIgY2xhc3M9XCJtZGwtbmF2aWdhdGlvbl9fbGlua1wiPlxuICAgICAgICAgICAgICAgIFNuYWNrYmFyXG4gICAgICAgICAgICA8L3JvdXRlci1saW5rPlxuXG4gICAgICAgICAgICA8cm91dGVyLWxpbmsgdG89XCIvc2VsZWN0c1wiIGNsYXNzPVwibWRsLW5hdmlnYXRpb25fX2xpbmtcIj5cbiAgICAgICAgICAgICAgICBTZWxlY3RzXG4gICAgICAgICAgICA8L3JvdXRlci1saW5rPlxuICAgICAgICA8L25hdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHt9XG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbmF2LnZ1ZT82YjNlNDMwNCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kbC1sYXlvdXRfX2RyYXdlclwiXG4gIH0sIFtfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZGwtbGF5b3V0LXRpdGxlXCJcbiAgfSwgW192bS5fdihcIkV4YW1wbGVzXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCduYXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWRsLW5hdmlnYXRpb25cIlxuICB9LCBbX2MoJ3JvdXRlci1saW5rJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kbC1uYXZpZ2F0aW9uX19saW5rXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidG9cIjogXCIvdGV4dGZpZWxkc1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgVGV4dCBGaWVsZHNcXG4gICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncm91dGVyLWxpbmsnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWRsLW5hdmlnYXRpb25fX2xpbmtcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0b1wiOiBcIi9idXR0b25zXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBCdXR0b25zXFxuICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3JvdXRlci1saW5rJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kbC1uYXZpZ2F0aW9uX19saW5rXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidG9cIjogXCIvc25hY2tiYXJcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgIFNuYWNrYmFyXFxuICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3JvdXRlci1saW5rJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kbC1uYXZpZ2F0aW9uX19saW5rXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidG9cIjogXCIvc2VsZWN0c1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgU2VsZWN0c1xcbiAgICAgICAgXCIpXSldLCAxKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTM3NDdlMjFlXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0zNzQ3ZTIxZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvbmF2LnZ1ZVxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi90ZXh0ZmllbGRzLnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNmQyMzA4NDghdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vdGV4dGZpZWxkcy52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiL1VzZXJzL296L3NyYy9tYXRlcmlhbC1jb21wb25lbnRzL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL3RleHRmaWVsZHMudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi02ZDIzMDg0OFwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi02ZDIzMDg0OFwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH1cbn0pKCl9XG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHRleHRmaWVsZHMudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvdGV4dGZpZWxkcy52dWUiLCI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPGg0PlRleHQgRmllbGRzPC9oND5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPG0tdGV4dGZpZWxkIGxhYmVsPVwiVGV4dC4uLlwiPjwvbS10ZXh0ZmllbGQ+XG4gICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICA8bS10ZXh0ZmllbGQgZmxvYXQtbGFiZWw9XCJUZXh0YXJlYS4uLlwiIHRleHRhcmVhPjwvbS10ZXh0ZmllbGQ+XG4gICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICA8bS10ZXh0ZmllbGQgbGFiZWw9XCJOdW1iZXIuLi5cIiBwYXR0ZXJuPVwiLT9bMC05XSooXFwuWzAtOV0rKT9cIiBlcnJvcj1cIkludmFsaWQgaW5wdXRcIj48L20tdGV4dGZpZWxkPlxuICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgPG0tdGV4dGZpZWxkIGV4cGFuZGFibGU9XCJzZWFyY2hcIiBpZD1cInRlc3QtaWQtc2VhcmNoXCIgZmxvYXQtbGFiZWw9XCJFeHBhbmRpbmcuLi5cIj48L20tdGV4dGZpZWxkPlxuICAgICAgICAgICAgPGJyPlxuXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+Q29kZTo8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNvbHM9XCIxMDBcIiByb3dzPVwiNlwiIDp2YWx1ZT1cImV4YW1wbGVzXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoND5UZXN0IEZvcm08L2g0PlxuXG4gICAgICAgICAgICA8Zm9ybSBAc3VibWl0LnByZXZlbnQ9XCJvblN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgIDxtLXRleHRmaWVsZCBmbG9hdC1sYWJlbD1cIkZpcnN0IE5hbWVcIiB2LW1vZGVsPVwiZm9ybS5maXJzdE5hbWVcIj48L20tdGV4dGZpZWxkPlxuICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICA8bS10ZXh0ZmllbGQgZmxvYXQtbGFiZWw9XCJMYXN0IE5hbWVcIiB2LW1vZGVsPVwiZm9ybS5sYXN0TmFtZVwiPjwvbS10ZXh0ZmllbGQ+XG4gICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgIDxtLXRleHRmaWVsZCBmbG9hdC1sYWJlbD1cIkVtYWlsXCIgcGF0dGVybj1cIiguKylAKC4rKXsyLH1cXC4oLispezIsfVwiIGVycm9yPVwiSW52YWxpZCBlbWFpbFwiPjwvbS10ZXh0ZmllbGQ+XG4gICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgIDxtLXRleHRmaWVsZCBmbG9hdC1sYWJlbD1cIlBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgdi1tb2RlbD1cImZvcm0ucGFzc3dvcmRcIiBwYXR0ZXJuPVwiLnszLH1cIj48L20tdGV4dGZpZWxkPlxuICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICA8bS10ZXh0ZmllbGQgZmxvYXQtbGFiZWw9XCJDb25maXJtIHBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgcGF0dGVybj1cIi57Myx9XCIgZXJyb3I9XCJQYXNzd29yZHMgbm90IG1hdGNoXCI+PC9tLXRleHRmaWVsZD5cbiAgICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1kbC1idXR0b24gbWRsLWpzLWJ1dHRvbiBtZGwtYnV0dG9uLS1yYWlzZWRcIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAgICAgIEJ1dHRvblxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgICAgICA8ZGl2Pnt7Zm9ybX19PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZXhhbXBsZXM6IGBcbiAgICAgICAgICAgICAgICA8bS10ZXh0ZmllbGQgbGFiZWw9XCJUZXh0Li4uXCI+PC9tLXRleHRmaWVsZD5cbiAgICAgICAgICAgICAgICA8bS10ZXh0ZmllbGQgZmxvYXQtbGFiZWw9XCJUZXh0YXJlYS4uLlwiIHRleHRhcmVhPjwvbS10ZXh0ZmllbGQ+XG4gICAgICAgICAgICAgICAgPG0tdGV4dGZpZWxkIGxhYmVsPVwiTnVtYmVyLi4uXCIgcGF0dGVybj1cIi0/WzAtOV0qKFxcLlswLTldKyk/XCIgZXJyb3I9XCJJbnZhbGlkIGlucHV0XCI+PC9tLXRleHRmaWVsZD5cbiAgICAgICAgICAgICAgICA8bS10ZXh0ZmllbGQgZXhwYW5kYWJsZT1cInNlYXJjaFwiIGlkPVwidGVzdC1pZC1zZWFyY2hcIiBmbG9hdC1sYWJlbD1cIkV4cGFuZGluZy4uLlwiPjwvbS10ZXh0ZmllbGQ+XG4gICAgICAgICAgICBgLFxuICAgICAgICAgICAgZm9ybToge1xuICAgICAgICAgICAgICAgIGZpcnN0TmFtZTogJycsXG4gICAgICAgICAgICAgICAgbGFzdE5hbWU6ICcnLFxuICAgICAgICAgICAgICAgIGVtYWlsOiAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHRleHRmaWVsZHMudnVlP2ZlNzExOGY4IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ2g0JywgW192bS5fdihcIlRleHQgRmllbGRzXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCBbX2MoJ20tdGV4dGZpZWxkJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImxhYmVsXCI6IFwiVGV4dC4uLlwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdtLXRleHRmaWVsZCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJmbG9hdC1sYWJlbFwiOiBcIlRleHRhcmVhLi4uXCIsXG4gICAgICBcInRleHRhcmVhXCI6IFwiXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tdGV4dGZpZWxkJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImxhYmVsXCI6IFwiTnVtYmVyLi4uXCIsXG4gICAgICBcInBhdHRlcm5cIjogXCItP1swLTldKihcXFxcLlswLTldKyk/XCIsXG4gICAgICBcImVycm9yXCI6IFwiSW52YWxpZCBpbnB1dFwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdtLXRleHRmaWVsZCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJleHBhbmRhYmxlXCI6IFwic2VhcmNoXCIsXG4gICAgICBcImlkXCI6IFwidGVzdC1pZC1zZWFyY2hcIixcbiAgICAgIFwiZmxvYXQtbGFiZWxcIjogXCJFeHBhbmRpbmcuLi5cIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2JywgW19jKCdkaXYnLCBbX3ZtLl92KFwiQ29kZTpcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RleHRhcmVhJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImNvbHNcIjogXCIxMDBcIixcbiAgICAgIFwicm93c1wiOiBcIjZcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLmV4YW1wbGVzXG4gICAgfVxuICB9KV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCBbX2MoJ2g0JywgW192bS5fdihcIlRlc3QgRm9ybVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZm9ybScsIHtcbiAgICBvbjoge1xuICAgICAgXCJzdWJtaXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBfdm0ub25TdWJtaXQoJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdtLXRleHRmaWVsZCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5mb3JtLmZpcnN0TmFtZSksXG4gICAgICBleHByZXNzaW9uOiBcImZvcm0uZmlyc3ROYW1lXCJcbiAgICB9XSxcbiAgICBhdHRyczoge1xuICAgICAgXCJmbG9hdC1sYWJlbFwiOiBcIkZpcnN0IE5hbWVcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5mb3JtLmZpcnN0TmFtZSlcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uZm9ybS5maXJzdE5hbWUgPSAkZXZlbnRcbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tdGV4dGZpZWxkJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmZvcm0ubGFzdE5hbWUpLFxuICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmxhc3ROYW1lXCJcbiAgICB9XSxcbiAgICBhdHRyczoge1xuICAgICAgXCJmbG9hdC1sYWJlbFwiOiBcIkxhc3QgTmFtZVwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLmZvcm0ubGFzdE5hbWUpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmZvcm0ubGFzdE5hbWUgPSAkZXZlbnRcbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tdGV4dGZpZWxkJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImZsb2F0LWxhYmVsXCI6IFwiRW1haWxcIixcbiAgICAgIFwicGF0dGVyblwiOiBcIiguKylAKC4rKXsyLH1cXFxcLiguKyl7Mix9XCIsXG4gICAgICBcImVycm9yXCI6IFwiSW52YWxpZCBlbWFpbFwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdtLXRleHRmaWVsZCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5mb3JtLnBhc3N3b3JkKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5wYXNzd29yZFwiXG4gICAgfV0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZmxvYXQtbGFiZWxcIjogXCJQYXNzd29yZFwiLFxuICAgICAgXCJ0eXBlXCI6IFwicGFzc3dvcmRcIixcbiAgICAgIFwicGF0dGVyblwiOiBcIi57Myx9XCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0uZm9ybS5wYXNzd29yZClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uZm9ybS5wYXNzd29yZCA9ICRldmVudFxuICAgICAgfVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnbS10ZXh0ZmllbGQnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZmxvYXQtbGFiZWxcIjogXCJDb25maXJtIHBhc3N3b3JkXCIsXG4gICAgICBcInR5cGVcIjogXCJwYXNzd29yZFwiLFxuICAgICAgXCJwYXR0ZXJuXCI6IFwiLnszLH1cIixcbiAgICAgIFwiZXJyb3JcIjogXCJQYXNzd29yZHMgbm90IG1hdGNoXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWJ1dHRvbi0tcmFpc2VkXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInN1Ym1pdFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIEJ1dHRvblxcbiAgICAgICAgICAgIFwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCBbX3ZtLl92KF92bS5fcyhfdm0uZm9ybSkpXSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTZkMjMwODQ4XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi02ZDIzMDg0OCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvdGV4dGZpZWxkcy52dWVcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vYnV0dG9ucy52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTA1OTU3YjRmIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2J1dHRvbnMudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIi9Vc2Vycy9vei9zcmMvbWF0ZXJpYWwtY29tcG9uZW50cy9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9idXR0b25zLnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMDU5NTdiNGZcIiwgX192dWVfb3B0aW9uc19fKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMDU5NTdiNGZcIiwgX192dWVfb3B0aW9uc19fKVxuICB9XG59KSgpfVxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBidXR0b25zLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL2J1dHRvbnMudnVlIiwiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxoND5CdXR0b25zPC9oND5cblxuICAgICAgICA8ZGl2PlxuXG4gICAgICAgICAgICA8bS1idXR0b24gcmFpc2VkIHYtb246Y2xpY2submF0aXZlPVwidGVzdENsaWNrXCI+Q2xpY2sgbWU8L20tYnV0dG9uPlxuXG4gICAgICAgICAgICA8bS1idXR0b24gaWNvbj1cImFkZFwiIHJhaXNlZCBhY2NlbnQ+PC9tLWJ1dHRvbj5cblxuICAgICAgICAgICAgPG0tYnV0dG9uIHJhaXNlZCBwcmltYXJ5IHJpcHBsZT5SaXBwbGU8L20tYnV0dG9uPlxuXG4gICAgICAgICAgICA8bS1idXR0b24gZGlzYWJsZWQ+RGlzYWJsZWQ8L20tYnV0dG9uPlxuXG4gICAgICAgICAgICA8aHI+XG5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5Db2RlOjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY29scz1cIjEwMFwiIHJvd3M9XCI2XCIgOnZhbHVlPVwiZXhhbXBsZXNcIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHR7XG4gICAgICAgIGRhdGEoKXtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZXhhbXBsZXM6IGBcbiAgICAgICAgICAgICAgICAgICAgPG0tYnV0dG9uIHJhaXNlZCB2LW9uOmNsaWNrLm5hdGl2ZT1cInRlc3RDbGlja1wiPkNsaWNrIG1lPC9tLWJ1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICA8bS1idXR0b24gaWNvbj1cImFkZFwiIHJhaXNlZCBhY2NlbnQ+PC9tLWJ1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICA8bS1idXR0b24gcmFpc2VkIHByaW1hcnkgcmlwcGxlPlJpcHBsZTwvbS1idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgPG0tYnV0dG9uIGRpc2FibGVkPkRpc2FibGVkPC9tLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHRlc3RDbGljazogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJIaVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGJ1dHRvbnMudnVlPzU2NzJkMGQyIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ2g0JywgW192bS5fdihcIkJ1dHRvbnNcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIFtfYygnbS1idXR0b24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwicmFpc2VkXCI6IFwiXCJcbiAgICB9LFxuICAgIG5hdGl2ZU9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0udGVzdENsaWNrKCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJDbGljayBtZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS1idXR0b24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWNvblwiOiBcImFkZFwiLFxuICAgICAgXCJyYWlzZWRcIjogXCJcIixcbiAgICAgIFwiYWNjZW50XCI6IFwiXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS1idXR0b24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwicmFpc2VkXCI6IFwiXCIsXG4gICAgICBcInByaW1hcnlcIjogXCJcIixcbiAgICAgIFwicmlwcGxlXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJSaXBwbGVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ20tYnV0dG9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImRpc2FibGVkXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJEaXNhYmxlZFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaHInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIFtfYygnZGl2JywgW192bS5fdihcIkNvZGU6XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCd0ZXh0YXJlYScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJjb2xzXCI6IFwiMTAwXCIsXG4gICAgICBcInJvd3NcIjogXCI2XCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5leGFtcGxlc1xuICAgIH1cbiAgfSldKV0sIDEpXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMDU5NTdiNGZcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTA1OTU3YjRmIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9idXR0b25zLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vc25hY2tiYXIudnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0yMzg1ZDNiMiF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zbmFja2Jhci52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiL1VzZXJzL296L3NyYy9tYXRlcmlhbC1jb21wb25lbnRzL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL3NuYWNrYmFyLnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMjM4NWQzYjJcIiwgX192dWVfb3B0aW9uc19fKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMjM4NWQzYjJcIiwgX192dWVfb3B0aW9uc19fKVxuICB9XG59KSgpfVxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBzbmFja2Jhci52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9zbmFja2Jhci52dWUiLCI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPG0tc25hY2tiYXIgZGlzcGxheS1vbj1cIm1zZ1NlbnRcIj48L20tc25hY2tiYXI+XG4gICAgICAgIDxtLWJ1dHRvbiByYWlzZWQgY29sb3JlZCBAY2xpY2submF0aXZlPVwic0FjdGlvblwiPlNob3cgU25hY2tiYXI8L20tYnV0dG9uPlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2PkNvZGU6PC9kaXY+XG4gICAgICAgICAgICA8dGV4dGFyZWEgY29scz1cIjEwMFwiIHJvd3M9XCI2XCIgOnZhbHVlPVwiZXhhbXBsZXNcIj48L3RleHRhcmVhPlxuICAgICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBkYXRhKCl7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGV4YW1wbGVzOiBgXG4gICAgICAgICAgICAgICAgICAgIDxtLXNuYWNrYmFyIGRpc3BsYXktb249XCJtc2dTZW50XCI+PC9tLXNuYWNrYmFyPlxuICAgICAgICAgICAgICAgICAgICA8bS1idXR0b24gcmFpc2VkIGNvbG9yZWQgQGNsaWNrLm5hdGl2ZT1cInNBY3Rpb25cIj5TaG93IFNuYWNrYmFyPC9tLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgc0FjdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRyb290LiRlbWl0KCdtc2dTZW50Jywge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnTWVzc2FnZSBTZW50JyxcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uVGV4dDogJ1VuZG8nLFxuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiAyMDAwLFxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25IYW5kbGVyOiAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNuYWNrYmFyLnZ1ZT9jNzhiZDNiNCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW19jKCdtLXNuYWNrYmFyJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImRpc3BsYXktb25cIjogXCJtc2dTZW50XCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbS1idXR0b24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwicmFpc2VkXCI6IFwiXCIsXG4gICAgICBcImNvbG9yZWRcIjogXCJcIlxuICAgIH0sXG4gICAgbmF0aXZlT246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5zQWN0aW9uKCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJTaG93IFNuYWNrYmFyXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCBbX2MoJ2RpdicsIFtfdm0uX3YoXCJDb2RlOlwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndGV4dGFyZWEnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiY29sc1wiOiBcIjEwMFwiLFxuICAgICAgXCJyb3dzXCI6IFwiNlwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0uZXhhbXBsZXNcbiAgICB9XG4gIH0pXSldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0yMzg1ZDNiMlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMjM4NWQzYjIhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL3NuYWNrYmFyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vc2VsZWN0cy52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTdiNGI3YmM1IXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NlbGVjdHMudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIi9Vc2Vycy9vei9zcmMvbWF0ZXJpYWwtY29tcG9uZW50cy9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9zZWxlY3RzLnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtN2I0YjdiYzVcIiwgX192dWVfb3B0aW9uc19fKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtN2I0YjdiYzVcIiwgX192dWVfb3B0aW9uc19fKVxuICB9XG59KSgpfVxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBzZWxlY3RzLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL3NlbGVjdHMudnVlIiwiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxtLXNlbGVjdCA6ZGF0YS1zb3VyY2U9XCJ0ZXN0RGF0YVwiIGlkPVwidGVzdDFcIiB2LW1vZGVsPVwibVwiPjwvbS1zZWxlY3Q+XG5cbiAgICAgICAgPGRpdj57e219fTwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBkYXRhKCl7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRlc3REYXRhOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdOb2RlSnMnLCB2YWx1ZTogMSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0pTJywgdmFsdWU6IDIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdQSFAnLCB2YWx1ZTogMyxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG5cbiAgICAgICAgICAgICAgICBtOiB7bmFtZTogJ05vZGVKcycsIHZhbHVlOiAxfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc2VsZWN0cy52dWU/MDlmNmM1NDAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygnbS1zZWxlY3QnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0ubSksXG4gICAgICBleHByZXNzaW9uOiBcIm1cIlxuICAgIH1dLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImRhdGEtc291cmNlXCI6IF92bS50ZXN0RGF0YSxcbiAgICAgIFwiaWRcIjogXCJ0ZXN0MVwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLm0pXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLm0gPSAkZXZlbnRcbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2JywgW192bS5fdihfdm0uX3MoX3ZtLm0pKV0pXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtN2I0YjdiYzVcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTdiNGI3YmM1IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9leGFtcGxlcy9zcmMvY29tcG9uZW50cy9zZWxlY3RzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==