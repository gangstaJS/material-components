<template>
    <div class="mdl-card mdl-shadow--2dp">
        <slot name="title" v-if="title">
            <div class="mdl-card__title mdl-card--expand">
                <h2 class="mdl-card__title-text">{{title}}</h2>
            </div>
        </slot>

        <slot name="subtitle" v-if="subtitle">
            <div class="mdl-card__subtitle-text">{{subtitle}}</div>
        </slot>

        <slot name="supporting-text" v-if="supportingText">
            <div class="mdl-card__supporting-text">{{supportingText}}</div>
        </slot>

        <slot name="media" v-if="media">
            <div class="mdl-card__media"><img :src="media"/></div>
        </slot>

        <slot name="actions" v-if="actions">
            <div class="mdl-card__actions mdl-card--border">
                <m-button colored="colored" @click.native="triggerActionsEvent" class="mdl-js-ripple-effect">{{actionsText}}</m-button>
            </div>
        </slot>

        <slot name="menu" v-if="menu">
            <div class="mdl-card__menu">
                <m-button icon="icon" @click.native="triggerMenuEvent"><i class="material-icons">share</i></m-button>
            </div>
        </slot>
    </div>
</template>

<script>

const slots = [
  'title',
  'subtitle',
  'supportingText',
  'media',
  'actions',
  'menu'
];

export default {
  props: {
    title: String,
    menu: String,
    actions: String,
    actionsTarget: {
      default: '_self',
      type: String
    },
    actionsText: String,
    media: String,
    subtitle: String,
    supportingText: String
  },

  methods: {
    triggerMenuEvent() {
      this.$emit(this.menu)
    },

    triggerActionsEvent() {
      this.$emit(this.actions)
    }
  },

  mounted() {
    slots.forEach((slot, pos) => {
      if (this[slot] === true) {
        let el = this.$el.children[pos]
        if (!el || !this.$el.attributes.getNamedItem('slot')) {
          this[slot] = ''
        }
      }
    });
  }
}
</script>
