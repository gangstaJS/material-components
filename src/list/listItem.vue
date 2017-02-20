<template>
    <li class="mdl-list__item" :class="liClasses">
        <span class="mdl-list__item-primary-content">
            <i class="material-icons" :class="cssClasses" v-if="icon || iconAvatar">{{showIcon}}</i>
            <span v-if="iconAvatar">
                <slot></slot>
            </span>

            <slot v-else></slot>

            <span class="mdl-list__item-sub-title" v-if="subTitle">{{subTitle}}</span>
            <span class="mdl-list__item-text-body" v-if="text">{{text}}</span>
        </span>

        <span class="mdl-list__item-secondary-content">
            <slot name="action"></slot>
        </span>
    </li>
</template>

<script>
    export default{
        props: {
            icon: String,
            iconAvatar: String,
            actionIcon: String,
            text: [String, Number],
            subTitle: [String, Number],
        },

        computed: {
            showIcon() {
                return this.icon && !this.iconAvatar ? this.icon : this.iconAvatar;
            },

            cssClasses() {
                return {
                    'mdl-list__item-icon': !!this.icon,
                    'mdl-list__item-avatar': !!this.iconAvatar && !this.icon,
                }
            },

            liClasses() {
                return {
                    'mdl-list__item--three-line': !!this.text,
                    'mdl-list__item--two-line': !!this.subTitle
                }
            }
        },

        data(){
            return {

            }
        },
    }
</script>
