export default {
  props: {
    value: [String, Number],
    overlap: Boolean,
    icon:  Boolean,
    noBackground: Boolean,
    hide: Boolean,
    href: String,

    tag: {
      type: String,
      default() {
        return 'span';
      }
    }

  },

  render: function(createElement) {
    let tag = this.tag;

    let attrs = {
      'class': 'mdl-badge'

    };

    if(!this.hide) attrs['data-badge'] = this.value;

    if(this.href) {
      tag = 'a';
      attrs.href = this.href;
    }

    if(this.overlap) attrs.class += ' mdl-badge--overlap ';

    if(this.icon) attrs.class = 'material-icons ' + attrs.class;

    if(this.noBackground) attrs.class += ' mdl-badge--no-background ';

    return createElement(tag, {
      attrs: attrs,
    }, this.$slots.default)
  }
}