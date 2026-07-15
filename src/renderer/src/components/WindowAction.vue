<script setup lang="ts">
defineProps<{
    icon: string,
    type?: string
}>()
</script>
<template>
    <div :class="['window-action', { 'window-action-danger': $props.type === 'danger' }]">
        <img :src="icon" v-bind="{ 'onClick': undefined, ...$props }">
    </div>
</template>
<style scoped>
.window-action {
    width: 40px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    transition: 0.4s var(--easeOutQuint);
}

.window-action:hover {
    background: rgba(0, 0, 0, 0.1);
    transition: 0s;
}

.window-action:active {
    background: rgba(0, 0, 0, 0.2);
}

.window-action img {
    width: 18px;
    height: 18px;
    transition: 0.4s var(--easeOutQuint);
}

.window-action:hover img {
    transition: 0s;
}

.window-action-danger:hover {
    background: #F44336 !important;
}

.window-action-danger:hover img {
    filter: invert(1);
}

.window-action-danger:active {
    opacity: 0.5 !important;
}

/* 深色主题 */
@media(prefers-color-scheme: dark) {
    .window-action:hover {
        background: rgba(255, 255, 255, 0.1);
    }

    .window-action:active {
        background: rgba(255, 255, 255, 0.2);
    }

    .window-action img {
        filter: invert(1);
    }
}
</style>