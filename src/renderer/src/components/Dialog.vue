<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

const props = defineProps<{
    contentOverflow?: boolean
}>()
const unfolded = defineModel<boolean>('unfolded', { default: false })

// 按 Esc 关闭对话框
function closeDialog(e) {
    if (e.keyCode !== 27) return
    unfolded.value = false
}

onMounted(() => {
    window.addEventListener('keydown', closeDialog)
})
onUnmounted(() => {
    window.removeEventListener('keydown', closeDialog)
})
</script>
<template>
    <Teleport to="body">
        <div class="dialog-container">
            <div class="dialog" :class="{ 'dialog-unfolded': unfolded }" :style="$attrs.style">
                <div class="dialog-title">
                    <slot name="title"></slot>
                </div>
                <div class="dialog-content" :style="{ 'overflow': contentOverflow ? 'visible' : 'auto' }">
                    <slot name="content"></slot>
                </div>
                <div class="dialog-actions">
                    <slot name="actions"></slot>
                </div>
            </div>
        </div>
    </Teleport>
</template>
<style scoped>
.dialog-container {
    position: fixed;
    z-index: 9999;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.3);
    transition: 0.3s var(--easeOutCirc);
    opacity: 0;
    pointer-events: none;
}

.dialog-container:has(.dialog-unfolded) {
    transition: 0.2s var(--easeOutCirc);
    opacity: 1;
    pointer-events: all;
}

.dialog {
    width: 512px;
    max-height: calc(100% - 3px);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    background: #Fff;
    box-shadow: 0 32px 64px rgba(0, 0, 0, 0.2);
    transition: 0.2s var(--easeOutCirc);
    transform: scale(1.075);
}

.dialog-unfolded {
    transition: 0.3s var(--easeOutCirc);
    transform: scale(1);
}

.dialog-title {
    padding: 24px 24px 12px 24px;
    font-size: 20px;
}

.dialog-content {
    padding: 0 24px;
    margin-bottom: 24px;
    font-size: 14px;
}

.dialog-actions {
    padding: 24px;
    border-top: 1.5px solid rgba(0, 0, 0, 0.05);
    display: flex;
    gap: 12px;
    background: rgba(0, 0, 0, 0.05);
}

.dialog-actions>* {
    flex: 1;
    min-width: 0;
}

/* 深色主题 */
@media(prefers-color-scheme: dark) {
    .dialog {
        background: rgb(44, 44, 44);
        color: #fff;
        outline: 1.5px solid rgba(255, 255, 255, 0.125);
    }

    .dialog-actions {
        background: rgba(0, 0, 0, 0.25);
    }
}
</style>