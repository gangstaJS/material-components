export function genId() {
  return Math.random().toString(36).substring(7);
}

export function genIdShort() {
  return Math.random().toString(36).substring(20);
}

export function removeClass(obj, cls = '') {
  let classes = obj.className.split(' ');

  for (let i = 0; i < classes.length; i++) {
    if(classes[i] == cls) {
      classes.splice(i, 1);
      i--;
    }
  }
  obj.className = classes.join(' ');

}


export function getClosestVueParent($parent, cssClass) {
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

export function debounce(fn = null, delay = 300) {
  let timer = null;

  return function(...args) {
    clearInterval(timer);

    let self = this;

    timer = setTimeout(function() {
      fn.apply(self, args);
    }, delay);
  }
}

export function escapeRegExp(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}

export function prepareOptionValue(val, tryFromName = false) {
  if(val && (typeof val == 'string') || (typeof val == 'number')) {
    return val;
  } else if(val && typeof val == 'object') {
    if(tryFromName) {
      return val.name || val.value;
    }

    return val.value;
    
  } else {
    console.err('Invalid type of item, must be String, Number or Object');
    return null;
  }
}
