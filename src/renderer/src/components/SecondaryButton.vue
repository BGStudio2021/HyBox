<script setup lang="ts">
const props = defineProps<{
    disabled?: boolean
}>()
</script>
<template>
    <button class="btn-secondary" :class="{ 'btn-secondary-disabled': disabled }" :disabled="disabled">
        <slot></slot>
    </button>
</template>
<style scoped>
.btn-secondary {
    min-width: 128px;
    padding: 6px 16px;
    background: rgba(255, 255, 255, 0.6);
    color: #000;
    border: 1.5px solid rgba(0, 0, 0, 0.085);
    border-bottom-color: rgba(0, 0, 0, 0.2);
    outline: none;
    border-radius: 6px;
    font-family: "Segoe UI Variable", "Segoe UI", "Microsoft YaHei UI", "微软雅黑", sans-serif;
    font-size: 14px;
    transition: background 0.2s var(--easeOutQuint);
}

.btn-secondary:hover {
    background: rgba(255, 255, 255, 0.25);
}

.btn-secondary:active {
    border-bottom-color: rgba(0, 0, 0, 0.085);
    color: rgba(0, 0, 0, 0.6);
    background: rgba(255, 255, 255, 0.1);
    transition: 0s;
}

/* 禁用状态 */
.btn-secondary-disabled {
    pointer-events: none;
    opacity: 0.5;
}

/* 深色主题 */
@media(prefers-color-scheme: dark) {
    .btn-secondary {
        background: rgba(255, 255, 255, 0.075);
        color: #fff;
        border: 1.5px solid rgba(255, 255, 255, 0.05);
    }

    .btn-secondary:hover {
        background: rgba(255, 255, 255, 0.1);
    }

    .btn-secondary:active {
        background: rgba(255, 255, 255, 0.05);
        color: rgba(255, 255, 255, 0.6);
        border: 1.5px solid rgba(255, 255, 255, 0.05);
    }
}
</style>