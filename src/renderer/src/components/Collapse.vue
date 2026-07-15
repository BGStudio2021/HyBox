<script setup lang="ts">
import { ref } from 'vue'
import keyboardArrowDownIcon from '../assets/material-icons/keyboard_arrow_down.svg'

const props = withDefaults(
    defineProps<{
        unfolded?: boolean,
        disabled?: boolean
    }>(),
    {
        unfolded: false
    })

const collapse_unfolded = ref()
collapse_unfolded.value = props.unfolded
</script>
<template>
    <div class="collapse" :class="{ 'collapse-unfolded': collapse_unfolded, 'collapse-disabled': props.disabled }"
        @click="collapse_unfolded = !collapse_unfolded">
        <div class="collapse-icon" v-if="$slots.icon">
            <slot name="icon"></slot>
        </div>
        <div style="flex-grow: 1;margin: 0 8px;display: flex;flex-direction: column;justify-content: center;">
            <div class="collapse-title">
                <slot name="title"></slot>
            </div>
            <div class="collapse-description" v-if="$slots.description">
                <slot name="description"></slot>
            </div>
        </div>
        <div class="collapse-action" v-if="$slots.action" @click.stop>
            <slot name="action"></slot>
        </div>
        <div class="collapse-icon collapse-arrow">
            <img :src="keyboardArrowDownIcon">
        </div>
    </div>
    <div class="collapse-content-container">
        <div class="collapse-content">
            <slot name="content"></slot>
        </div>
    </div>
</template>
<style scoped>
.collapse {
    min-height: 36px;
    margin-top: 4px;
    padding: 12px 8px;
    border: 1.5px solid rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.6);
    display: flex;
    transition: background 0.2s var(--easeOutQuint);
}

.collapse:hover {
    background: rgba(255, 255, 255, 0.25);
    border-bottom-color: rgba(0, 0, 0, 0.2);
}

.collapse:active:not(:has(.collapse-action:active)) {
    background: rgba(255, 255, 255, 0.1);
    border-bottom-color: rgba(0, 0, 0, 0.1);
}

.collapse-unfolded {
    border-radius: 6px 6px 0 0;
}

.collapse-title {
    font-size: 15px;
}

.collapse-description {
    font-size: 13px;
    opacity: 0.6;
}

.collapse-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    margin: 0 8px;
    opacity: 0.8;
}

.collapse-arrow {
    transition: 0.2s var(--easeInOutExpo);
}

.collapse:active:not(:has(.collapse-action:active)) .collapse-arrow {
    transform: translateY(-1px);
}

.collapse-unfolded .collapse-arrow {
    transform: rotate(180deg);
    transition: 0.3s var(--easeInOutExpo);
}

.collapse-unfolded:active:not(:has(.collapse-action:active)) .collapse-arrow {
    transform: rotate(180deg) translateY(-1px);
    transition: 0.2s var(--easeInOutExpo);
}

.collapse-action {
    padding-right: 8px;
    display: flex;
    align-items: center;
}

.collapse-content-container {
    margin-bottom: 4px;
    border: 0 solid rgba(0, 0, 0, 0.1);
    border-radius: 0 0 6px 6px;
    font-size: 14px;
    background: rgba(255, 255, 255, 0.6);
    overflow: hidden;
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 0.2s var(--easeOutCirc),
        border 0s 0.2s;
}

.collapse-unfolded+.collapse-content-container {
    border: 1.5px solid rgba(0, 0, 0, 0.1);
    border-top: 0 solid rgba(0, 0, 0, 0.1);
    grid-template-rows: 1fr;
    transition: grid-template-rows 0.4s var(--easeOutCirc),
        border 0s 0s;
}

.collapse-content {
    opacity: 0;
    transform: translateY(-100%);
    transition: transform 0.2s var(--easeOutCirc),
        opacity 0.2s linear;
    overflow: hidden;
}

.collapse-unfolded+.collapse-content-container .collapse-content {
    opacity: 1;
    transform: translateY(0);
    transition: transform 0.4s var(--easeOutCirc) 0.1s,
        opacity 0.2s linear 0.1s;
}

/* 禁用状态 */
.collapse-disabled .collapse-title,
.collapse-disabled .collapse-icon {
    opacity: 0.5;
}

.collapse-disabled .collapse-description {
    opacity: 0.3;
}

/* 深色主题 */
@media(prefers-color-scheme: dark) {
    .collapse {
        background: rgba(255, 255, 255, 0.075);
        border: 1.5px solid rgba(0, 0, 0, 0.4);
    }

    .collapse:hover {
        background: rgba(255, 255, 255, 0.125);
        border: 1.5px solid rgba(0, 0, 0, 0.1);
    }

    .collapse:active:not(:has(.collapse-action:active)) {
        background: rgba(255, 255, 255, 0.05);
        border: 1.5px solid rgba(255, 255, 255, 0.05);
    }

    .collapse-icon {
        filter: invert(1);
    }

    .collapse-content-container {
        background: rgba(255, 255, 255, 0.075);
    }

    .collapse-unfolded+.collapse-content-container {
        border: 1.5px solid rgba(0, 0, 0, 0.4);
        border-top: 0 solid rgba(0, 0, 0, 0.1);
    }
}
</style>