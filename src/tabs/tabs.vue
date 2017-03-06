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
        }

        .is-active {
            z-index: 2;
        }

        // animations

        .tab-exit {
            transform: translateX(0%);
        }

        .tab-enter {
            display: block !important; // 'important' is need for rewrite mdl style
            z-index: 2;
            transform: translateX(-100%);
        }

        &.tabs-animating {
            .tab-exit, .tab-enter {
                transition: all .3s ease-in-out;
            }

            .tab-enter {
                transform: translateX(0%);
            }

            .tab-exit {
                transform: translateX(100%);
            }
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
        if(this.animation) {
            let exitTab = this.getExitTab();
            let enterTab = this.getEnterTab(id);

            if(this.isAnimating || (this.prepareTabKey(enterTab.tab) == this.value)) return; // TODO: add the same click check

            exitTab.addExit();
            enterTab.addEnter();

            setTimeout(() => this.isAnimating = true, 0);

            setTimeout(() => {
      	        this.isAnimating = false;

                exitTab.rmExit();
      	        enterTab.rmEnter();

      	        this.$emit('input', id)
            }, 300);
        } else {
            this.$emit('input', id)
        }
    },

    addTabComponent(tabComponent) {
        this.tabComponents.push(tabComponent);
    },

    getExitTab() {
        return this.tabComponents.find(c => this.prepareTabKey(c.tab) == this.value);
    },

    getEnterTab(id) {
        return this.tabComponents.find(c => this.prepareTabKey(c.tab) == id);
    },

    prepareTabKey(tab) {
        return typeof tab == 'string' ? tab : tab.id;
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
      tabComponents: [],
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