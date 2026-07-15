<script setup lang="ts">
import checkIcon from '../assets/material-icons/check.svg'
import removeIcon from '../assets/material-icons/remove.svg'

const props = withDefaults(
    defineProps<{
        options: Array<{
            value: string,
            label: string,
            disabled?: boolean
        }>,
        name: string,
        indeterminate?: string
    }>(),
    {
        indeterminate: 'none'
    })

const selected = defineModel<string[]>({ default: () => [] })
</script>
<template>
    <div v-for="option in options">
        <label :class="{ 'checkbox-disabled': option.disabled }">
            <div class="checkbox-option">
                <div class="checkbox-icon"
                    :class="{ 'checkbox-icon-selected': selected.includes(option.value) || indeterminate !== 'none' }">
                    <div class="checkbox-check">
                        <img :src="indeterminate === 'indeterminate' ? removeIcon : checkIcon">
                    </div>
                </div>
                <div class="checkbox-label">{{ option.label }}</div>
                <input type="checkbox" :name="name" :value="option.value" v-model="selected" style="display: none;">
            </div>
        </label>
    </div>
</template>
<style scoped>
.checkbox-option {
    display: flex;
    align-items: center;
    padding: 10px 0;
}

.checkbox-icon {
    position: relative;
    width: 18px;
    height: 18px;
    border: 1.5px solid rgba(0, 0, 0, 0.3);
    border-radius: 6px;
    background-color: rgba(0, 0, 0, 0.03);
}

.checkbox-option:hover .checkbox-icon {
    background: rgba(0, 0, 0, 0.06);
}

.checkbox-option:active .checkbox-icon {
    border: 1.5px solid rgba(0, 0, 0, 0.15);
    background: rgba(0, 0, 0, 0.09);
    transform: scale(0.98);
}

.checkbox-icon-selected {
    border: 1.5px solid var(--purple-3) !important;
    background: var(--purple-3) !important;
}

.checkbox-option:hover .checkbox-icon-selected {
    opacity: 0.9;
}

.checkbox-option:active .checkbox-icon-selected {
    opacity: 0.85;
}

.checkbox-check {
    position: absolute;
    left: 1px;
    top: 1px;
    width: 0;
    height: 16px;
    overflow: hidden;
    transition: 0s;
}

.checkbox-check img {
    width: 16px;
    height: 16px;
    filter: invert(1);
}

.checkbox-icon-selected .checkbox-check {
    width: 16px;
    transition: 0.8s var(--easeOutCirc) 0.05s;
}

.checkbox-option:active .checkbox-check img {
    opacity: 0.7;
}

.checkbox-label {
    flex-grow: 1;
    margin-left: 8px;
}

/* 禁用状态 */
.checkbox-disabled {
    pointer-events: none;
    filter: grayscale(1);
    opacity: 0.5;
}

/* 深色主题 */
@media(prefers-color-scheme: dark) {
    .checkbox-icon {
        border: 1.5px solid rgba(255, 255, 255, 0.3);
    }

    .checkbox-option:hover .checkbox-icon {
        background: rgba(255, 255, 255, 0.06);
    }

    .checkbox-option:active .checkbox-icon {
        border: 1.5px solid rgba(255, 255, 255, 0.15);
        background: rgba(255, 255, 255, 0.09);
    }

    .checkbox-icon-selected {
        border: 1.5px solid var(--purple-light) !important;
        background: var(--purple-light) !important;
    }

    .checkbox-check img {
        filter: none;
    }
}
</style>