<script setup lang="ts">
const props = defineProps<{
    disabled?: boolean
}>()
const checkbox_checked = defineModel()
</script>
<template>
    <div class="switch-container" :class="{ 'switch-disabled': disabled }"
        @click="checkbox_checked = !checkbox_checked">
        <div class="switch-label">{{ checkbox_checked ? '开' : '关' }}</div>
        <div class="switch" :class="{ 'switch-on': checkbox_checked }">
            <div class="switch-thumb"></div>
            <input type="checkbox" id="radio" v-model="checkbox_checked" style="display: none;">
        </div>
    </div>
</template>
<style scoped>
.switch-container {
    display: flex;
    align-items: center;
}

.switch {
    position: relative;
    width: 36px;
    height: 18px;
    border: 1.5px solid rgba(0, 0, 0, 0.4);
    border-radius: 30px;
    background: rgba(0, 0, 0, 0.03);
    transition: border 0.1s,
        background 0.1s;
}

.switch-container:hover .switch {
    background: rgba(0, 0, 0, 0.06);
}

.switch-container:active .switch {
    background: rgba(0, 0, 0, 0.09);
}

.switch-thumb {
    position: absolute;
    left: 3px;
    top: 3px;
    width: 12px;
    height: 12px;
    border-radius: 16px;
    background: rgba(0, 0, 0, 0.6);
    transition: left 0.3s var(--easeOutCirc),
        background 0.1s var(--easeOutQuint),
        transform 0.1s var(--easeOutQuint),
        width 0.3s var(--easeOutCirc);
}

.switch-container:hover .switch-thumb {
    transform: scale(1.15);
}

.switch-container:active .switch-thumb {
    width: 16px;
}

.switch-on {
    border: 1.5px solid var(--purple-3);
    background: var(--purple-3);
}

.switch-container:hover .switch-on {
    background: var(--purple-3);
    opacity: 0.9;
}

.switch-container:active .switch-on {
    background: var(--purple-3);
    opacity: 0.85;
}

.switch-on .switch-thumb {
    left: 21px;
    background: #fff;
}

.switch-container:active .switch-on .switch-thumb {
    left: 17px;
}

.switch-label {
    margin-right: 12px;
    font-size: 14px;
}

/* 禁用状态 */
.switch-disabled {
    pointer-events: none;
    filter: grayscale(1);
    opacity: 0.5;
}

/* 深色主题 */
@media(prefers-color-scheme: dark) {
    .switch {
        border: 1.5px solid rgba(255, 255, 255, 0.4);
    }

    .switch-container:hover .switch {
        background: rgba(255, 255, 255, 0.06);
    }

    .switch-container:active .switch {
        background: rgba(255, 255, 255, 0.09);
    }

    .switch-thumb {
        background: rgba(255, 255, 255, 0.6);
    }

    .switch-on {
        border: 1.5px solid var(--purple-light);
        background: var(--purple-light);
    }

    .switch-container:hover .switch-on,
    .switch-container:active .switch-on {
        background: var(--purple-light);
    }

    .switch-on .switch-thumb {
        background: #000;
    }
}
</style>