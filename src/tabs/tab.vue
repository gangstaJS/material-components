<template>
    <div
         class="mdl-tabs__panel"
         :class="{'is-active': selected, 'tab-enter': classEnter, 'tab-exit': classExit, 'mdl-tabs__panel--for-animation': animation}">
        <slot></slot>
    </div>
</template>

<style lang="scss">
    .mdl-tabs {
        &__panel {
            &--for-animation {
                position: absolute;
                display: none;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                z-index: -1;
                overflow: auto;
            }
        }
    }
</style>

<script>

export default {
  watch: {
    tab (newTab, oldTab) {
      this.$parent.updateTab(tabToOject(oldTab), this.tabData)
    }
  },

  mounted () {
    this.$parent.addTab(this.tabData)
    this.$parent.addTabComponent(this);
  },

  beforeDestroy () {
    this.$parent.removeTab(this.tabData)
  },

  computed: {
    selected () {
      return this.$parent.isSelected(this.tabData)
    },
    id () {
      return typeof this.tab === 'string'
           ? this.tab
           : this.tab.id || this.tab.title
    },
    tabData () {
      return tabToOject(this.tab)
    },

    animation() {
        return this.$parent.animation;
    }
  },
  props: {
    tab: {
      required: true,
      type: [String, Object]
    },
  },

  data() {
    return {
        classEnter: false,
        classExit: false,
    }
  },

  methods: {
    addEnter() {
    	this.classEnter = true;
    },

    rmEnter() {
    	this.classEnter = false;
    },

    addExit() {
    	this.classExit = true;
    },

    rmExit() {
    	this.classExit = false;
    }
  }
}

function tabToOject (tab) {
  return typeof tab === 'string' ? { id: tab, title: tab } : { id: tab.id, title: tab.title };
}
</script>