<script setup lang="ts">
const props = defineProps<{
    disabled?: boolean
}>()
</script>
<template>
    <a class="link" :class="{ 'link-disabled': disabled }">
        <slot></slot>
    </a>
</template>
<style scoped>
.link {
    color: var(--purple-5);
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
    transition: background 0.1s;
}

.link:hover {
    background: rgba(0, 0, 0, 0.05);
}

.link:active {
    color: var(--purple-4);
    background: rgba(0, 0, 0, 0.025);
}

/* 禁用状态 */
.link-disabled {
    pointer-events: none;
    filter: grayscale(1);
    opacity: 0.5;
}

/* 深色主题 */
@media(prefers-color-scheme: dark) {
    .link {
        color: var(--purple-light);
    }

    .link:hover {
        background: rgba(255, 255, 255, 0.05);
    }

    .link:active {
        color: var(--purple-3);
        background: rgba(255, 255, 255, 0.025);
    }
}
</style>