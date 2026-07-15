<script setup lang="ts">
import Collapse from './Collapse.vue'
import FixedTitle from './FixedTitle.vue'
import ListItem from './ListItem.vue'
import PrimaryButton from './PrimaryButton.vue'
import formatListBulletedIcon from '../assets/material-icons/format_list_bulleted.svg'
import CollapseItem from './CollapseItem.vue'
import Divider from './Divider.vue'
import Switch from './Switch.vue'
import { ref } from 'vue'
import SecondaryButton from './SecondaryButton.vue'

function callback1() {
    alert('带有回调的列表项回调')
}

const switch_on_1 = ref(false)
</script>
<template>
    <div>
        <FixedTitle>列表</FixedTitle>
        <ListItem>
            <template #icon>
                <img :src="formatListBulletedIcon">
            </template>
            <template #title>列表项</template>
            <template #description>列表项描述</template>
        </ListItem>
        <ListItem>
            <template #title>没有图标的列表项</template>
            <template #description>没有图标的列表项描述</template>
        </ListItem>
        <ListItem disabled>
            <template #icon>
                <img :src="formatListBulletedIcon">
            </template>
            <template #title>禁用的列表项</template>
            <template #description>禁用的列表项描述</template>
        </ListItem>
        <ListItem>
            <template #icon>
                <img :src="formatListBulletedIcon">
            </template>
            <template #title>右侧带有图标的列表项</template>
            <template #description>右侧带有图标的列表项描述</template>
            <template #icon-right>
                <img src="../assets/material-icons/open_in_new.svg">
            </template>
        </ListItem>
        <ListItem @click="callback1">
            <template #icon>
                <img :src="formatListBulletedIcon">
            </template>
            <template #title>带有回调的列表项</template>
            <template #description>带有回调的列表项描述</template>
        </ListItem>
        <ListItem unclickable>
            <template #icon>
                <img :src="formatListBulletedIcon">
            </template>
            <template #title>带有动作按钮的列表项</template>
            <template #description>带有动作按钮的列表项描述</template>
            <template #action>
                <SecondaryButton>动作</SecondaryButton>
            </template>
        </ListItem>
        <ListItem unclickable>
            <template #icon>
                <img :src="formatListBulletedIcon">
            </template>
            <template #title>带有动作按钮的列表项</template>
            <template #description>带有动作按钮的列表项描述</template>
            <template #action>
                <PrimaryButton>动作</PrimaryButton>
            </template>
        </ListItem>
        <Collapse>
            <template #icon>
                <img :src="formatListBulletedIcon">
            </template>
            <template #title>
                折叠面板
            </template>
            <template #description>
                折叠面板描述
            </template>
            <template #content>
                <CollapseItem>折叠面板内容 - 1</CollapseItem>
                <Divider />
                <CollapseItem>折叠面板内容 - 2</CollapseItem>
                <Divider />
                <CollapseItem>折叠面板内容 - 3</CollapseItem>
            </template>
        </Collapse>
        <Collapse disabled>
            <template #icon>
                <img :src="formatListBulletedIcon">
            </template>
            <template #title>
                禁用的折叠面板
            </template>
            <template #description>
                禁用的折叠面板描述
            </template>
            <template #content>
                <CollapseItem disabled>禁用的折叠面板仍可展开，但其内部控件不可被操作。<br>请手动为折叠面板项和内部控件设置禁用状态。</CollapseItem>
            </template>
        </Collapse>
        <Collapse unfolded>
            <template #icon>
                <img :src="formatListBulletedIcon">
            </template>
            <template #title>
                默认展开的折叠面板
            </template>
            <template #description>
                默认展开的折叠面板描述
            </template>
            <template #content>
                <CollapseItem>折叠面板内容 - 1</CollapseItem>
                <Divider />
                <CollapseItem>折叠面板内容 - 2</CollapseItem>
                <Divider />
                <CollapseItem>折叠面板内容 - 3</CollapseItem>
            </template>
        </Collapse>
        <ListItem unclickable>
            <template #icon>
                <img :src="formatListBulletedIcon">
            </template>
            <template #title>带切换开关的列表项</template>
            <template #description>{{ switch_on_1 ? '切换开关打开的列表项描述' : '切换开关关闭的列表项描述' }}</template>
            <template #action>
                <Switch v-model="switch_on_1" />
            </template>
        </ListItem>
    </div>
</template>