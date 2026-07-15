<script setup lang="ts">
const props = withDefaults(
    defineProps<{
        icon: string,
        active?: boolean
    }>(),
    {
        active: false
    })
</script>
<template>
    <div class="navbar-item" :class="{ 'navbar-item-active': active }">
        <img :src="$props.icon" class="navbar-item-icon">
        <div class="navbar-item-label">
            <slot></slot>
        </div>
    </div>
</template>
<style scoped>
.navbar-item {
    position: relative;
    display: flex;
    align-items: center;
    padding: 6px 8px;
    margin: 4px 0;
    border-radius: 6px;
}

.navbar-item::after {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 4px;
    height: 0;
    border-radius: 8px;
    background: var(--purple-3);
    transition: 0.3s var(--easeInOutBack);
}

.navbar-item-active::after {
    top: 8px;
    height: calc(100% - 16px);
    transition: 0.3s var(--easeOutBack);
}

.navbar-item-active:active::after {
    top: 12px;
    height: calc(100% - 24px);
}

.navbar-item:hover {
    background: rgba(0, 0, 0, 0.075);
}

.navbar-item:active {
    opacity: 0.7;
}

.navbar-item-active {
    background: rgba(0, 0, 0, 0.075);
}

.navbar-item-icon {
    opacity: 0.8;
}

.navbar-item-label {
    margin-left: 8px;
    flex-grow: 1;
    font-size: 14px;
}

/* 深色主题 */
@media(prefers-color-scheme: dark) {
    .navbar-item-icon {
        filter: invert(1);
    }

    .navbar-item:hover {
        background: rgba(255, 255, 255, 0.075);
    }

    .navbar-item-active {
        background: rgba(255, 255, 255, 0.075);
    }

    .navbar-item::after {
        background: var(--purple-light);
    }
}
</style>