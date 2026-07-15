<script setup lang="ts">
const props = defineProps<{
    disabled?: boolean
}>()
</script>
<template>
    <button class="btn" :class="{ 'btn-disabled': disabled }" :disabled="disabled">
        <slot></slot>
    </button>
</template>
<style scoped>
.btn {
    min-width: 128px;
    padding: 6px 16px;
    background: var(--purple-3);
    color: #fff;
    border: none;
    outline: none;
    border-radius: 6px;
    font-size: 14px;
    font-family: "Segoe UI Variable", "Segoe UI", "Microsoft YaHei UI", "微软雅黑", sans-serif;
}

.btn:hover {
    opacity: 0.9;
}

.btn:active {
    opacity: 0.85;
    color: rgba(255, 255, 255, 0.7);
}

/* 禁用状态 */
.btn-disabled {
    pointer-events: none;
    filter: grayscale(1);
    opacity: 0.5;
}

/* 深色主题 */
@media(prefers-color-scheme: dark) {
    .btn {
        background: var(--purple-light);
        color: #000;
    }

    .btn:active {
        opacity: 0.8;
        color: rgba(0, 0, 0, 0.5);
    }
}
</style>