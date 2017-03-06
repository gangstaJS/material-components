<template>
    <transition
            v-if="animation"
            @leave="leave"
            @after-leave="afterLeave"
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter"
            @enter-cancelled="enterCanceled"
            @leave-cancelled="leaveCanceled">

        <div
            v-show="selected"
            class="mdl-tabs__panel"
            :class="{'mdl-tabs__panel--for-animation': animation, 'enter': classEnter, 'before-enter': classBeforeEnter, 'leave': classLeave}">

            <slot></slot>
        </div>
    </transition>

    <div
         v-else
         class="mdl-tabs__panel"
         :class="{'is-active': selected}">

     <slot></slot>
    </div>
</template>

<style lang="scss">
    .mdl-tabs {
        &__panel {
            &--for-animation {
                position: absolute;
                display: block;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                z-index: -1;
                overflow: auto;
                transition: all .3s;
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
        classBeforeEnter: false,
        current: false,
        classLeave: false,
    }
  },

  methods: {

    beforeEnter() {
    	this.classBeforeEnter = true;
    	console.log('before enter')
    },

  	enter(el) {
      setTimeout(() => this.classEnter = true, 10);
      //this.classEnter = true
      console.log('enter');
    },

    afterEnter() {
      this.classEnter = false;
      this.classBeforeEnter = false;
    },

    leave(el) {
      //this.current = false;
      this.classLeave = true;
    },

    afterLeave(el) {
      this.classLeave = false;
    },

    enterCanceled() {
      this.classEnter = false;
      this.classBeforeEnter = false;
    },

    leaveCanceled() {
    	this.classLeave = false;
    },
  }
}

function tabToOject (tab) {
  return typeof tab === 'string' ? { id: tab, title: tab } : { id: tab.id, title: tab.title };
}
</script>