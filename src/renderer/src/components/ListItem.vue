<script setup lang="ts">
const props = withDefaults(
    defineProps<{
        unclickable?: boolean,
        disabled?: boolean
    }>(),
    {
        unclickable: false
    }
)
</script>
<template>
    <div class="list-item" :class="{ 'list-item-unclickable': $props.unclickable, 'list-item-disabled': disabled }">
        <div class="list-item-icon" v-if="$slots.icon">
            <slot name="icon"></slot>
        </div>
        <div style="flex-grow: 1;margin: 0 8px;display: flex;flex-direction: column;justify-content: center;">
            <div class="list-item-title">
                <slot name="title"></slot>
            </div>
            <div class="list-item-description" v-if="$slots.description">
                <slot name="description"></slot>
            </div>
        </div>
        <div class="list-item-icon" v-if="$slots['icon-right']">
            <slot name="icon-right"></slot>
        </div>
        <div class="list-item-action" v-if="$slots.action">
            <slot name="action"></slot>
        </div>
    </div>
</template>
<style scoped>
.list-item {
    margin: 4px 0;
    padding: 12px 8px;
    border: 1.5px solid rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.6);
    display: flex;
}

.list-item:not(.list-item-unclickable):hover {
    background: rgba(255, 255, 255, 0.25);
}

.list-item:not(.list-item-unclickable):active {
    background: rgba(255, 255, 255, 0.1);
}

.list-item-title {
    font-size: 15px;
}

.list-item-description {
    font-size: 13px;
    opacity: 0.6;
}

.list-item-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    margin: 0 8px;
    opacity: 0.8;
}

.list-item-action {
    padding-right: 8px;
    display: flex;
    align-items: center;
}

/* 禁用状态 */
.list-item-disabled {
    pointer-events: none;
}

.list-item-disabled .list-item-icon,
.list-item-disabled .list-item-title {
    opacity: 0.5;
}

.list-item-disabled .list-item-description {
    opacity: 0.3;
}

/* 深色主题 */
@media(prefers-color-scheme: dark) {
    .list-item {
        background: rgba(255, 255, 255, 0.075);
    }

    .list-item:not(.list-item-unclickable):hover {
        background: rgba(255, 255, 255, 0.125);
    }

    .list-item:not(.list-item-unclickable):active {
        background: rgba(255, 255, 255, 0.05);
    }

    .list-item-icon {
        filter: invert(1);
    }
}
</style>