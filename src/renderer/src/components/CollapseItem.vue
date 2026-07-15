<script setup lang="ts">
const props = defineProps<{
    disabled?: boolean
}>()
</script>
<template>
    <div class="collapse-item" :class="{ 'collapse-item-disabled': props.disabled }">
        <slot></slot>
    </div>
</template>
<style scoped>
.collapse-item {
    padding: 12px 48px 12px 56px;
}

/* 禁用状态 */
.collapse-item-disabled {
    color: rgba(0, 0, 0, 0.5);
}

/* 深色主题 */
@media(prefers-color-scheme: dark) {
    .collapse-item-disabled {
        color: rgba(255, 255, 255, 0.5);
    }
}
</style>