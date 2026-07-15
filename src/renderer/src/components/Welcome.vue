<script setup lang="ts">
import { onMounted, ref } from 'vue'
import PrimaryButton from './PrimaryButton.vue'

const firstLaunch = ref(false)
const showWelcome = ref(true)

onMounted(() => {
    setTimeout(() => {
        firstLaunch.value = localStorage.firstLaunch ? false : true
        if (localStorage.firstLaunch) showWelcome.value = false
    }, 0)
})

function completeFirstLaunch() {
    // window.localStorage.firstLaunch = 'false'
    firstLaunch.value = false
    setTimeout(() => {
        showWelcome.value = false
    }, 1000)
}
</script>
<template>
    <Teleport to="body">
        <div v-if="showWelcome" :class="['container', { 'container-visible': firstLaunch }]">
            <div :class="['content', { 'content-visible': firstLaunch }]">
                <img src="../assets/icon.png" class="icon">
                <div class="title">HyBox - 盒忆味工具箱</div>
                <p style="opacity: 0.8;">你的下一代实（无）用工具箱*</p>
                <PrimaryButton @click="completeFirstLaunch" style="width: 256px;font-size: 16px;padding: 8px 12px;">开始使用
                </PrimaryButton>
            </div>
            <p class="tip">*这是一个 Vue.js 与 Electron 学习实践项目，并非真实工具。</p>
        </div>
    </Teleport>
</template>
<style scoped>
.container {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 10000;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--purple-0);
    transition: 0.3s var(--easeInBack);
}

.container-visible {
    opacity: 1;
    transition: 0s;
}

.content {
    text-align: center;
    transform: scale(0);
    transition: 0.3s var(--easeInBack);
}

.content-visible {
    transform: scale(1);
    transition: 0.3s var(--easeOutBack);
}

.icon {
    width: 128px;
    height: 128px;
}

.title {
    margin: 16px 0;
    font-size: 32px;
    font-weight: bold;
    color: var(--purple-3);
}

.tip {
    position: absolute;
    bottom: 8px;
    opacity: 0.8;
}

/* 深色主题 */
@media(prefers-color-scheme: dark) {
    .container {
        background: var(--purple-grey);
        color: #fff;
    }

    .title {
        color: var(--purple-light);
    }
}
</style>