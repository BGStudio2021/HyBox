<script setup lang="ts">
import { ref } from 'vue'
import Navbar from './components/Navbar.vue'
import TitleBar from './components/TitleBar.vue'
import Welcome from './components/Welcome.vue'
import SlideTransition from './components/SlideTransition.vue'
import DeviceInfo from './components/DeviceInfo.vue'
import AboutApp from './components/AboutApp.vue'
import ListDemo from './components/ListDemo.vue'
import OtherComponents from './components/OtherComponents.vue'

window.api.onOsVersion((version: string) => {
  const isWin11 = version.startsWith('10.0.') && parseInt(version.split('.')[2]) >= 22000
  if (isWin11) {
    document.body.classList.add('win11')
  }
})

const activeTab = ref('DeviceInfo')
const tabs = { DeviceInfo, ListDemo, OtherComponents, AboutApp }
</script>

<template>
  <TitleBar />
  <Welcome />
  <div class="layout">
    <div class="layout-left">
      <div class="layout-left-top"></div>
      <div class="layout-left-bottom">
        <Navbar v-model:active-tab="activeTab" />
      </div>
    </div>
    <div class="layout-right">
      <div class="layout-right-top"></div>
      <div class="layout-right-bottom">
        <SlideTransition>
          <component :is="tabs[activeTab]" class="layout-main" />
        </SlideTransition>
      </div>
    </div>
  </div>
</template>
<style scoped>
.layout {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  overflow: hidden;
}

.layout-left {
  width: 256px;
  height: 100%;
  background: #CFD3E6;
  transition: background 0.3s;
}

.layout-right {
  flex-grow: 1;
  background: var(--purple-0);
  transition: background 0.3s;
}

.layout-left-top {
  height: 40px;
}

.layout-left-bottom {
  height: calc(100% - 40px);
}

.layout-right-top {
  height: 40px;
}

.layout-right-bottom {
  height: calc(100% - 40px);
  position: relative;
}

.layout-main {
  position: absolute;
  left: 0;
  top: 0;
  width: calc(100% - 32px);
  height: calc(100% - 16px);
  padding: 0 16px 16px 16px;
  overflow: auto;
}

@media(min-width:1216px) {
  .layout-main {
    left: calc(50% - 480px);
    width: 928px;
  }
}

/* Win11 下启用亚克力效果 */
.win11 .layout-left {
  background: rgba(205, 212, 243, 0.6) !important;
}

/* 深色主题 */
@media(prefers-color-scheme: dark) {
  .layout-left {
    background: #323544;
  }

  .layout-right {
    flex-grow: 1;
    background: var(--purple-grey);
    color: #fff;
  }

  .win11 .layout-left {
    background: rgba(26, 32, 56, 0.6) !important;
  }
}
</style>