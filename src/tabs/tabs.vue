<template>
    <div class="mdl-tabs is-upgraded" :class="{'tabs-animating': isAnimating, 'mdl-tabs--for-animation': animation}">
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
        <div class="mdl-tabs__tab-wrapper" :style="contentStyle">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="scss">
    .mdl-tabs {
        &--for-animation {
            .mdl-tabs__tab-wrapper {
                position: relative;
            }

            .before-enter {
                transform: translateX(-100%);
            }

            .enter {
                transform: translateX(0%);
            }

            .leave {
                transform: translateX(100%);
                z-index: 2;
                display: block;
            }
        }

        &.is-upgraded {
            &.mdl-tabs--for-animation {
                .mdl-tabs__panel {
                    display: block;
                }
            }
        }

        .is-active {
            z-index: 2;
        }

    }
</style>

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
    },

    animation: {
        type: Boolean,
        required: false
    },

    contentStyle: {
        type: Object,
        required: false
    }
  },

  methods: {
    selectTab({id}) {
        this.$emit('input', id);
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
      tabs: [],
      isAnimating: false,
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