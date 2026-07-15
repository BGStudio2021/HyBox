<!-- 此组件尚未开发完成 -->
<script setup lang="ts">
const props = defineProps<{
    min: number,
    max: number,
    step: number
}>()
const value = defineModel<number>()
</script>
<template>
    <div class="slider-container">
        <div class="slider-label">{{ value }}</div>
        <input class="slider" type="range" :min="min" :max="max" :step="step" v-model="value">
    </div>
</template>
<style scoped>
.slider-container {
    display: flex;
    align-items: center;
}

.slider-label {
    margin-right: 4px;
    font-size: 14px;
    opacity: 0.6;
}

.slider {
    appearance: none;
}

.slider::-webkit-slider-runnable-track {
    height: 4px;
    border-radius: 4px;
    background: rgba(0, 0, 0, 0.4);
}

.slider::-webkit-slider-thumb {
    position: relative;
    appearance: none;
    width: 22px;
    height: 22px;
    transform: translateY(calc(-50% + 1.5px));
    background: #fff;
    border: 1.5px solid rgba(0, 0, 0, 0.1);
    border-radius: 20px;
}

.slider::-webkit-slider-thumb::after {
    position: absolute;
    content: '';
    width: 16px;
    height: 16px;
    border-radius: 16px;
    top: 3px;
    left: 3px;
    background: var(--purple-3);
}

</style>