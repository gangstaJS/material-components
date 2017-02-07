<template>
    <div class="mdl-tabs is-upgraded">
        <div class="mdl-tabs__tab-bar">
            <tab-link
                    class="mdl-tabs__tab"
                    v-for="tab in tabs"
                    :key="tab.id"
                    :no-ripple-effect="noRippleEffect"
                    :class="{ 'is-active': isSelected(tab) }"
                    @click.native.prevent="selectTab(tab)"
                    :tab="tab"
            ></tab-link>
        </div>
        <slot></slot>
    </div>
</template>

<script>
import TabLink from './tab-l.vue'

export default {
  props: {
    value: {
      required: false,
      type: [String, Number]
    },
    noRippleEffect: {
      type: Boolean,
      required: false
    }
  },

  methods: {
    selectTab({id}) {
      this.$emit('input', id)
    },

    isSelected({id}) {
      return id === this.value
    },

    addTab(tab) {
      this.tabs.push(tab)
    },

    updateTab({id}, tab) {
      const index = findTabIndex(this.tabs, id)
      if (index > -1) this.tabs.splice(index, 1, tab)
    },

    removeTab({id}) {
      const index = findTabIndex(this.tabs, id)
      if (index > -1) this.tabs.splice(index, 1)
    }
  },

  data() {
    return {
      tabs: []
    }
  },

  components: {TabLink}
}

function findTabIndex(tabs, id) {
  for (let i = 0; i < tabs.length; ++i) {
    if (tabs[i].id === id) {
      return i
    }
  }
  return -1
}
</script>