<script setup lang="ts">
import WindowAction from './WindowAction.vue'
import minimizeIcon from '../assets/material-icons/minimize.svg'
import maximizeIcon from '../assets/material-icons/maximize.svg'
import closeIcon from '../assets/material-icons/close.svg'

const minimizeWindow = () => window.api.minimizeWindow()
const maximizeWindow = () => window.api.maximizeWindow()
const closeWindow = () => window.api.closeWindow()
</script>
<template>
    <Teleport to="body">
        <div class="titlebar">
            <div class="title">盒忆味工具箱</div>
            <WindowAction :icon="minimizeIcon" style="opacity: 0.8;margin: 0 2px;" @click="minimizeWindow">
            </WindowAction>
            <WindowAction :icon="maximizeIcon" style="opacity: 0.8;margin: 0 2px;" @click="maximizeWindow">
            </WindowAction>
            <WindowAction type="danger" :icon="closeIcon" style="opacity: 0.8;" @click="closeWindow"></WindowAction>
        </div>
    </Teleport>
</template>
<style scoped>
.titlebar {
    position: fixed;
    top: 0;
    left: 0;
    width: calc(100% - 8px);
    height: 40px;
    padding: 0 4px;
    z-index: 10001;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.title {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-grow: 1;
    height: 40px;
    margin-left: 8px;
    font-size: 16px;
    app-region: drag;
}

/* 深色主题 */
@media(prefers-color-scheme: dark) {
    .titlebar {
        color: #fff;
    }
}
</style>