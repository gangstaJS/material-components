<template>
    <div class="mdl-tabs__panel"
         :class="{'is-active': selected }">
        <slot></slot>
    </div>
</template>

<script>

export default {
  watch: {
    tab (newTab, oldTab) {
      this.$parent.updateTab(tabToOject(oldTab), this.tabData)
    }
  },

  mounted () {
    this.$parent.addTab(this.tabData)
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
    }
  },
  props: {
    tab: {
      required: true,
      type: [String, Object]
    }
  }
}

function tabToOject (tab) {
  return typeof tab === 'string' ? { id: tab, title: tab } : { id: tab.id, title: tab.title };
}
</script>