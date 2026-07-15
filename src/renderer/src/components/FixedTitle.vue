<template>
    <div class="fixed-title">
        <slot></slot>
    </div>
</template>
<style scoped>
.fixed-title {
    position: sticky;
    z-index: 1;
    top: 0;
    font-size: 28px;
    padding: 8px 0 12px 0;
    background: var(--purple-0);
    transition: background 0.3s;
}

/* 深色主题 */
@media(prefers-color-scheme: dark) {
    .fixed-title {
        background: var(--purple-grey);
        color: #fff;
    }
}
</style>