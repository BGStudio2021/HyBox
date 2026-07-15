<script setup lang="ts">
const props = defineProps<{
    options: Array<{
        value: string,
        label: string
    }>,
    name: string,
    disabled?: boolean
}>()

const selected = defineModel()
</script>
<template>
    <div v-for="option in options">
        <label :class="{ 'radio-disabled': props.disabled }">
            <div class="radio-option">
                <div class="radio-icon" :class="{ 'radio-icon-selected': selected === option.value }"></div>
                <div class="radio-label">{{ option.label }}</div>
                <input type="radio" :name="name" :value="option.value" v-model="selected" style="display: none;">
            </div>
        </label>
    </div>
</template>
<style scoped>
.radio-option {
    display: flex;
    align-items: center;
    padding: 10px 0;
}

.radio-icon {
    position: relative;
    width: 18px;
    height: 18px;
    border: 1.5px solid rgba(0, 0, 0, 0.3);
    border-radius: 16px;
    background-color: rgba(0, 0, 0, 0.03);
    transition: background 0.1s var(--easeOutQuint),
        transform 0.3s var(--easeOutCirc);
}

.radio-option:hover .radio-icon {
    background: rgba(0, 0, 0, 0.06);
}

.radio-option:active .radio-icon {
    border: 1.5px solid rgba(0, 0, 0, 0.15);
    background: rgba(0, 0, 0, 0.09);
    transform: scale(0.95);
}

.radio-icon::after {
    content: '';
    position: absolute;
    left: calc(50% - 5px);
    top: calc(50% - 5px);
    width: 10px;
    height: 10px;
    transform: scale(0);
    border-radius: 12px;
    background: transparent;
    transition: 0.3s var(--easeOutCirc);
}

.radio-option:active .radio-icon::after {
    transform: scale(1);
    background: #fff;
}

.radio-icon-selected {
    border: 1.5px solid var(--purple-3) !important;
    background: var(--purple-3) !important;
    transform: scale(1) !important;
}

.radio-option:hover .radio-icon-selected {
    opacity: 0.9;
}

.radio-option:active .radio-icon-selected {
    opacity: 0.85;
}

.radio-icon-selected::after {
    transform: scale(1);
    background: #fff;
}

.radio-option:hover .radio-icon-selected::after {
    transform: scale(1.25);
}

.radio-option:active .radio-icon-selected::after {
    transform: scale(1);
}

.radio-label {
    flex-grow: 1;
    margin-left: 8px;
}

/* 禁用状态 */
.radio-disabled {
    pointer-events: none;
    filter: grayscale(1);
    opacity: 0.5;
}

.radio-disabled .radio-icon-selected::after {
    transform: scale(1.25);
}

/* 深色主题 */
@media(prefers-color-scheme: dark) {
    .radio-icon {
        border: 1.5px solid rgba(255, 255, 255, 0.3);
    }

    .radio-option:hover .radio-icon {
        background: rgba(255, 255, 255, 0.06);
    }

    .radio-option:active .radio-icon {
        border: 1.5px solid rgba(255, 255, 255, 0.15);
        background: rgba(255, 255, 255, 0.09);
    }

    .radio-option:active .radio-icon::after,
    .radio-icon-selected::after {
        background: #000;
    }

    .radio-icon-selected {
        border: 1.5px solid var(--purple-light) !important;
        background: var(--purple-light) !important;
    }
}
</style>