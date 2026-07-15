<script setup lang="ts">
import closeIcon from '../assets/material-icons/close.svg'

const props = withDefaults(
    defineProps<{
        type?: string,
        iconLeft?: string,
        iconRight?: string,
        placeholder?: string,
        disabled?: boolean
    }>(),
    {
        type: 'text'
    })
const value = defineModel()
</script>
<template>
    <div class="input-container" :class="{ 'input-container-disabled': disabled }">
        <input class="input" :class="({ 'input-with-left-icon': iconLeft, 'input-with-right-icon': iconRight })"
            :type="type" :placeholder="placeholder" v-model="value" :disabled="disabled">
        <div class="input-clear" @click="value = ''">
            <img :src="closeIcon">
        </div>
        <img class="input-icon input-icon-left" :src="iconLeft" v-if="iconLeft">
        <img class="input-icon input-icon-right" :src="iconRight" v-if="iconRight">
    </div>
</template>
<style scoped>
.input-container {
    position: relative;
}

.input {
    width: 100%;
    padding: 5px 10px;
    border: 1.5px solid rgba(0, 0, 0, 0.085);
    border-bottom: 2px solid rgba(0, 0, 0, 0.3);
    border-radius: 6px;
    outline: none;
    box-sizing: border-box;
    font-family: "Segoe UI Variable", "Segoe UI", "Microsoft YaHei UI", "微软雅黑", sans-serif;
    font-size: 14px;
    background: rgba(255, 255, 255, 0.6);
}

.input-with-left-icon {
    padding-left: 32px;
}

.input-with-right-icon {
    padding-right: 36px;
}

.input:hover {
    background: rgba(240, 240, 240, 0.25);
}

.input:focus,
.input-container:has(.input-clear:active) .input {
    padding-right: 36px;
    border-bottom: 2px solid var(--purple-3);
    background: #fff;
    filter: none;
}

.input-with-left-icon:focus,
.input-container:has(.input-clear:active) .input-with-left-icon {
    padding: 5px 36px 5px 32px;
}

.input-clear {
    position: absolute;
    width: 28px;
    height: 24px;
    top: 4px;
    right: 2px;
    border-radius: 6px;
    display: none;
}

.input-container:has(.input:focus) .input-clear,
.input-clear:active {
    display: flex;
    justify-content: center;
    align-items: center;
}

.input-clear:hover {
    background: rgba(0, 0, 0, 0.05);
}

.input-clear:active {
    opacity: 0.7;
}

.input-clear img {
    width: 16px;
    height: 16px;
    opacity: 0.7;
}

.input-icon {
    position: absolute;
    width: 16px;
    height: 16px;
    top: 8px;
    padding: 0 2px;
    opacity: 0.7;
    pointer-events: none;
}

.input-icon-right {
    right: 6px;
}

.input-icon-left {
    left: 6px;
}

.input-container:has(.input:focus) .input-icon-right,
.input-container:has(.input-clear:active) .input-icon-right {
    display: none;
}

/* 禁用状态 */
.input-container-disabled {
    pointer-events: none;
    opacity: 0.5;
}

/* 深色主题 */
@media(prefers-color-scheme: dark) {
    .input {
        background: rgba(255, 255, 255, 0.075);
        color: #fff;
        border: 1.5px solid rgba(255, 255, 255, 0.05);
        border-bottom: 2px solid rgba(255, 255, 255, 0.4);
    }

    .input-icon,
    .input-clear img {
        filter: invert(1);
    }

    .input:hover {
        background: rgba(255, 255, 255, 0.125);
    }

    .input:focus,
    .input-container:has(.input-clear:active) .input {
        border: 1.5px solid rgba(255, 255, 255, 0.125);
        border-bottom: 2px solid var(--purple-light);
        background: rgb(34, 34, 34);
    }

    .input-clear:hover {
        background: rgba(255, 255, 255, 0.075);
    }
}
</style>