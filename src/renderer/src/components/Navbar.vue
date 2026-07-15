<script setup lang="ts">
import { ref } from 'vue'
import computerIcon from '../assets/material-icons/computer.svg'
import infoIcon from '../assets/material-icons/info.svg'
import formatListBulletedIcon from '../assets/material-icons/format_list_bulleted.svg'
import widgetsIcon from '../assets/material-icons/widgets.svg'
import NavbarItem from './NavbarItem.vue'

const activeTab = defineModel<string>('activeTab')

const hybox_version = ref<string>('')
window.api.getAppVersion().then((appVersion) => {
    hybox_version.value = appVersion
})
const tabs = [{ name: 'DeviceInfo', icon: computerIcon, label: '设备概况' },
{ name: 'ListDemo', icon: formatListBulletedIcon, label: '列表' },
{ name: 'OtherComponents', icon: widgetsIcon, label: '其他组件' },
{ name: 'AboutApp', icon: infoIcon, label: '关于应用' }]
</script>
<template>
    <div class="navbar">
        <div class="navbar-card" style="margin: 8px 0;" @click="activeTab = 'AboutApp'">
            <img src="../assets/icon.png" style="width: 64px;height: 64px;">
            <div style="display: flex;flex-direction: column;margin-left: 12px;justify-content: center;flex-grow: 1;">
                <div>HyBox</div>
                <div style="opacity: 0.6;font-size: 14px;">Version {{ hybox_version }}</div>
            </div>
        </div>
        <NavbarItem v-for="tab in tabs" :name="tab.name" :icon="tab.icon" :active="activeTab === tab.name"
            @click="activeTab = tab.name">
            {{ tab.label }}
        </NavbarItem>
    </div>
</template>
<style scoped>
.navbar {
    padding: 8px;
    width: calc(100% - 16px);
    height: calc(100% - 16px);
    overflow: auto;
}

.navbar-card {
    display: flex;
    align-items: center;
    padding: 6px 8px;
    margin: 4px 0;
    border-radius: 6px;
}

.navbar-card:hover {
    background: rgba(0, 0, 0, 0.075);
}

.navbar-card:active {
    opacity: 0.7;
}

/* 深色主题 */
@media(prefers-color-scheme: dark) {
    .navbar {
        color: #fff;
    }

    .navbar-card:hover {
        background: rgba(255, 255, 255, 0.075);
    }
}
</style>