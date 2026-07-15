<template>
    <Transition name="slide">
        <slot></slot>
    </Transition>
</template>
<style scoped>
.slide-enter-active {
    transition: 0.3s var(--easeOutCirc) 0.1s;
}

.slide-leave-active {
    transition: 0.3s var(--easeInOutExpo);
}

.slide-enter-from {
    opacity: 0;
    transform: translateY(240px);
}

.slide-leave-to {
    opacity: 0;
}
</style>