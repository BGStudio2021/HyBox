<script setup lang="ts">
import FixedTitle from './FixedTitle.vue'
import ListItem from './ListItem.vue'

const env = window.electron.process.env
</script>
<template>
    <div>
        <FixedTitle>设备概况</FixedTitle>
        <ListItem>
            <template #icon>
                <img src="../assets/material-icons/computer.svg" class="icon">
            </template>
            <template #title>设备名称</template>
            <template #description>{{ env.COMPUTERNAME }}</template>
        </ListItem>
        <ListItem>
            <template #icon>
                <img src="../assets/material-icons/settings.svg" class="icon">
            </template>
            <template #title>操作系统</template>
            <template #description>{{ env.OS }}</template>
        </ListItem>
        <ListItem>
            <template #icon>
                <img src="../assets/material-icons/memory.svg" class="icon">
            </template>
            <template #title>处理器架构</template>
            <template #description>{{ env.PROCESSOR_ARCHITECTURE }}</template>
        </ListItem>
        <ListItem>
            <template #icon>
                <img src="../assets/material-icons/memory.svg" class="icon">
            </template>
            <template #title>处理器核心数</template>
            <template #description>{{ env.NUMBER_OF_PROCESSORS }}</template>
        </ListItem>
        <ListItem>
            <template #icon>
                <img src="../assets/material-icons/account_circle.svg" class="icon">
            </template>
            <template #title>用户名</template>
            <template #description>{{ env.USERNAME }}</template>
        </ListItem>
    </div>
</template>
<style scoped></style>