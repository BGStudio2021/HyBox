<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import keyboardArrowDownIcon from '../assets/material-icons/keyboard_arrow_down.svg'

const props = defineProps<{
    options: Array<{
        value: string,
        label: string,
        disabled?: boolean
    }>,
    disabled?: boolean,
    absolute?: boolean, // 将本组件嵌入对话框内容时使用
    fullWidth?: boolean
}>()
const selected = defineModel()
const unfolded = defineModel<boolean>('unfolded', { default: false })

// 按 Esc 关闭下拉选择
function closeSelect(e) {
    if (e.keyCode !== 27) return
    unfolded.value = false
}

onMounted(() => {
    window.addEventListener('keydown', closeSelect)
})
onUnmounted(() => {
    window.removeEventListener('keydown', closeSelect)
})
</script>
<template>
    <div class="select" :class="{ 'select-unfolded': unfolded, 'select-disabled': disabled }" @click="unfolded = true"
        v-bind="$attrs">
        <div class="select-selected">{{options.find(opt => opt.value === selected)?.label}}</div>
        <img class="select-arrow" :src="keyboardArrowDownIcon">
        <div class="select-options-container" :class="{ 'select-options-container-full-width': fullWidth }">
            <div class="select-options" @click.stop :style="$attrs.style"
                :class="{ 'select-options-full-width': fullWidth }">
                <div class="select-option-container">
                    <div v-for="option in options" class="select-option"
                        :class="{ 'select-option-selected': selected === option.value, 'select-option-disabled': option.disabled }"
                        @click="selected = option.value; unfolded = false;">
                        {{ option.label }}
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Teleport to="body">
        <div v-if="!absolute" class="select-overlay" :class="{ 'select-overlay-unfolded': unfolded }"
            style="position: fixed;" @click="unfolded = false"></div>
    </Teleport>
    <div v-if="absolute" class="select-overlay" :class="{ 'select-overlay-unfolded': unfolded }"
        style="position: absolute; width: 100vw;height: 100vh;transform: scale(100);" @click="unfolded = false">
    </div>
</template>
<style scoped>
.select {
    position: relative;
    min-width: 128px;
    padding: 4px 0;
    background: rgba(255, 255, 255, 0.6);
    color: #000;
    border: 1.5px solid rgba(0, 0, 0, 0.085);
    border-bottom-color: rgba(0, 0, 0, 0.2);
    outline: none;
    border-radius: 6px;
    font-family: "Segoe UI Variable", "Segoe UI", "Microsoft YaHei UI", "微软雅黑", sans-serif;
    font-size: 14px;
    display: flex;
    align-items: center;
}

.select:hover:not(:has(.select-options:hover)) {
    background: rgba(240, 240, 240, 0.25);
}

.select:active:not(:has(.select-options:active)) {
    border-bottom-color: rgba(0, 0, 0, 0.085);
    color: rgba(0, 0, 0, 0.6);
    background: rgba(255, 255, 255, 0.1);
    transition: 0s;
}

.select-selected {
    flex-grow: 1;
    padding-left: 10px;
    padding-right: 4px;
}

.select-arrow {
    width: 22px;
    height: 22px;
    padding-right: 10px;
    padding-left: 4px;
    opacity: 0.6;
    transition: 0.2s var(--easeOutQuint);
}

.select:active:not(:has(.select-options:active)) .select-arrow {
    transform: translateY(1.5px);
}

.select-options-container {
    position: absolute;
    right: 0;
    z-index: 9999;
    display: grid;
    grid-template-rows: 0fr;
}

.select-options-container-full-width {
    width: 100%;
}

.select-unfolded .select-options-container {
    grid-template-rows: 1fr;
    transition: grid-template-rows 0.3s var(--easeOutQuint);
}

.select-options {
    min-width: 128px;
    width: fit-content;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(64px);
    overflow: hidden;
}

.select-options-full-width {
    width: 100%;
}

.select-unfolded .select-options {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    outline: 1.5px solid rgba(0, 0, 0, 0.05);
    transition: box-shadow 0.2s 0.2s;
}

.select-option-container {
    transform: translateY(-50%);
    transition: 0s;
}

.select-unfolded .select-option-container {
    margin: 6px;
    transform: translateY(0);
    transition: transform 0.3s var(--easeOutQuint),
        margin 0.3s var(--easeOutQuint);
}

.select-option {
    position: relative;
    margin-bottom: 4px;
    padding: 6px 12px;
    border-radius: 6px;
}

.select-option:hover,
.select-option-selected {
    background: rgba(0, 0, 0, 0.05);
}

.select-option:active {
    opacity: 0.7;
}

.select-option-selected::after {
    content: '';
    position: absolute;
    left: 0;
    top: 7px;
    width: 4px;
    height: calc(100% - 14px);
    border-radius: 8px;
    background: var(--purple-3);
    transition: 0.3s var(--easeOutBack);
}

.select-option-selected:active:after {
    top: 9px;
    height: calc(100% - 18px);
}

.select-overlay {
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.select-overlay-unfolded {
    pointer-events: all;
}

/* 禁用状态 */
.select-disabled {
    pointer-events: none;
    opacity: 0.5;
}

.select-option-disabled {
    pointer-events: none;
    opacity: 0.5;
}

/* 深色主题 */
@media(prefers-color-scheme: dark) {
    .select {
        background: rgba(255, 255, 255, 0.075);
        color: #fff;
        border: 1.5px solid rgba(255, 255, 255, 0.05);
    }

    .select:hover:not(:has(.select-options:hover)) {
        background: rgba(255, 255, 255, 0.125);
    }

    .select:active:not(:has(.select-options:active)) {
        background: rgba(255, 255, 255, 0.05);
        color: rgba(255, 255, 255, 0.6);
        border: 1.5px solid rgba(255, 255, 255, 0.05);
    }

    .select-arrow {
        filter: invert(1);
    }

    .select-options {
        background: transparent;
    }

    .select-unfolded .select-options {
        outline: 1.5px solid rgba(0, 0, 0, 0.2);
    }

    .select-option:hover,
    .select-option-selected {
        background: rgba(255, 255, 255, 0.075);
    }

    .select-option-selected::after {
        background: var(--purple-light);
    }
}
</style>