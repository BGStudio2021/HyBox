<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import FixedTitle from './FixedTitle.vue'
import ListItem from './ListItem.vue'
import Select from './Select.vue'

const hybox_version = ref<string>('')
window.api.getAppVersion().then((appVersion) => {
    hybox_version.value = appVersion
})
const versions = window.electron.process.versions

function visitGithub() {
    window.open('https://github.com/BGStudio2021/HyBox', '_blank')
}

const themeOptions = [{ value: 'system', label: '跟随系统' },
{ value: 'light', label: '浅色模式' },
{ value: 'dark', label: '深色模式' }]
const selectedTheme = ref('system')
selectedTheme.value = localStorage.theme
watchEffect(() => {
    localStorage.setItem('theme', selectedTheme.value)
    window.api.setTheme(selectedTheme.value)
})
</script>
<template>
    <div>
        <FixedTitle>关于应用</FixedTitle>
        <div style="margin: 32px 0;text-align: center;">
            <img src="../assets/icon.png" style="width: 96px;height: 96px;">
            <div style="font-size: 18px;margin: 4px 0;">HyBox - 盒忆味工具箱</div>
            <div style="opacity: 0.6;font-size: 16px;">版本 {{ hybox_version }}</div>
        </div>
        <ListItem unclickable>
            <template #icon>
                <img src="../assets/material-icons/brightness_medium.svg">
            </template>
            <template #title>应用主题</template>
            <template #action>
                <Select :options="themeOptions" v-model="selectedTheme" />
            </template>
        </ListItem>
        <ListItem>
            <template #icon>
                <img src="../assets/material-icons/chromium.png" class="icon">
            </template>
            <template #title>Chromium 版本</template>
            <template #description>{{ versions.chrome }}</template>
        </ListItem>
        <ListItem>
            <template #icon>
                <img src="../assets/material-icons/build.svg">
            </template>
            <template #title>Electron 版本</template>
            <template #description>{{ versions.electron }}</template>
        </ListItem>
        <ListItem>
            <template #icon>
                <img src="../assets/material-icons/build.svg">
            </template>
            <template #title>Node.js 版本</template>
            <template #description>{{ versions.node }}</template>
        </ListItem>
        <ListItem @click="visitGithub">
            <template #icon>
                <img src="../assets/material-icons/github.svg">
            </template>
            <template #title>GitHub</template>
            <template #description>BGStudio2021/HyBox</template>
            <template #icon-right>
                <img src="../assets/material-icons/open_in_new.svg">
            </template>
        </ListItem>
    </div>
</template>
<style scoped>
.icon {
    width: 24px;
    height: 24px;
}
</style>