<script setup lang="ts">
import Collapse from './Collapse.vue'
import CollapseItem from './CollapseItem.vue'
import FixedTitle from './FixedTitle.vue'
import radioButtonCheckedIcon from '../assets/material-icons/radio_button_checked.svg'
import checkBoxIcon from '../assets/material-icons/check_box.svg'
import textFieldsIcon from '../assets/material-icons/text_fields.svg'
import Radio from './Radio.vue'
import { ref } from 'vue'
import CheckBox from './CheckBox.vue'
import Input from './Input.vue'
import Divider from './Divider.vue'
import searchIcon from '../assets/material-icons/search.svg'
import ListItem from './ListItem.vue'
import menuIcon from '../assets/material-icons/menu.svg'
import Select from './Select.vue'
import chatIcon from '../assets/material-icons/chat.svg'
import PrimaryButton from './PrimaryButton.vue'
import Dialog from './Dialog.vue'
import SecondaryButton from './SecondaryButton.vue'
import linkIcon from '../assets/material-icons/link.svg'
import Link from './Link.vue'
import CheckBoxAll from './CheckBoxAll.vue'
import blockIcon from '../assets/material-icons/block.svg'
import Switch from './Switch.vue'
// import Slider from './Slider.vue'

const options_1 = [{ value: 'value_1', label: '第 1 个选项' },
{ value: 'value_2', label: '第 2 个选项（默认选中）' },
{ value: 'value_3', label: '第 3 个选项' }
]
const options_2 = [{ value: 'value_1', label: '第 1 个选项' },
{ value: 'value_2', label: '第 2 个选项（默认选中）' },
{ value: 'value_3', label: '第 3 个选项' },
{ value: 'value_4', label: '第 4 个选项（禁用且不选中）', disabled: true },
{ value: 'value_5', label: '第 5 个选项（禁用且选中）', disabled: true }
]
const options_3 = [{ value: 'value_1', label: '第 1 个选项' },
{ value: 'value_2', label: '第 2 个选项（默认选中）' },
{ value: 'value_3', label: '第 3 个选项（禁用）', disabled: true }
]
const options_4 = [{ value: 'any', label: '任何可用频率' },
{ value: '24ghz', label: '2.4 GHz' },
{ value: '5ghz', label: '5 GHz' }
]
const selected_1 = ref('value_2')
const selected_2 = ref(['value_2', 'value_5'])
const value_1 = ref('')
const selected_3 = ref('value_2')
const selected_4 = ref(['value_2'])
const selected_5 = ref('value_2')
const selected_6 = ref('value_2')
const dialog_1_unfolded = ref(false)
const dialog_2_unfolded = ref(false)
const switch_on_1 = ref(false)
const switch_on_2 = ref(false)
const switch_on_3 = ref(true)
const wlan_name = ref('HyBox WLAN')
const wlan_passwd = ref('0123456789')
const wlan_band = ref('any')
// const sliderValue_1 = ref(100)
</script>
<template>
    <div>
        <FixedTitle>其他组件</FixedTitle>
        <Collapse>
            <template #icon>
                <img :src="radioButtonCheckedIcon">
            </template>
            <template #title>单选框</template>
            <template #description>单选框就是只能单选的框框~</template>
            <template #content>
                <CollapseItem>
                    <div style="margin-bottom: 16px;">你选中的是：{{options_1.find(option => option.value ===
                        selected_1)?.label}}</div>
                    <Radio :options="options_1" name="group_1" v-model="selected_1" />
                </CollapseItem>
            </template>
        </Collapse>
        <Collapse>
            <template #icon>
                <img :src="radioButtonCheckedIcon">
            </template>
            <template #title>禁用的单选框</template>
            <template #description>所有选项均处于禁用状态</template>
            <template #content>
                <CollapseItem>
                    <div style="margin-bottom: 16px;">你选中的是：{{options_1.find(option => option.value ===
                        selected_5)?.label}}</div>
                    <Radio :options="options_1" name="group_2" v-model="selected_5" disabled />
                </CollapseItem>
            </template>
        </Collapse>
        <Collapse>
            <template #icon>
                <img :src="checkBoxIcon">
            </template>
            <template #title>复选框</template>
            <template #description>复选框就是可以多选的框框~</template>
            <template #content>
                <CollapseItem>
                    <div style="margin-bottom: 16px;">你选中的是：{{
                        selected_2.map(option => options_2.find(_option => _option.value === option)?.label).join('、')}}
                    </div>
                    <CheckBox :options="options_2" name="group_3" v-model="selected_2" />
                </CollapseItem>
            </template>
        </Collapse>
        <Collapse>
            <template #icon>
                <img :src="checkBoxIcon">
            </template>
            <template #title>带全选选项的复选框</template>
            <template #description>带有全选控制选项的复选框组</template>
            <template #content>
                <CollapseItem>
                    <div style="margin-bottom: 16px;">你选中的是：{{
                        selected_4.map(option => options_1.find(_option => _option.value === option)?.label).join('、')}}
                    </div>
                    <CheckBoxAll :options="options_1" v-model="selected_4" />
                    <CheckBox :options="options_1" name="group_4" v-model="selected_4" />
                </CollapseItem>
            </template>
        </Collapse>
        <Collapse>
            <template #icon>
                <img :src="textFieldsIcon">
            </template>
            <template #title>文本输入框</template>
            <template #description>文本输入框就是可以输入文本的框框~</template>
            <template #content>
                <CollapseItem>
                    <div style="margin-bottom: 8px;">普通文本框<br>字数：{{ value_1.length }}</div>
                    <Input placeholder="文本框提示" style="width: 100%;" v-model="value_1" />
                </CollapseItem>
                <Divider />
                <CollapseItem>
                    <div style="margin-bottom: 8px;">右侧带图标的文本框</div>
                    <Input placeholder="文本框提示" style="width: 100%;" :icon-right="searchIcon" />
                </CollapseItem>
                <Divider />
                <CollapseItem>
                    <div style="margin-bottom: 8px;">左侧带图标的文本框</div>
                    <Input placeholder="文本框提示" style="width: 100%;" :icon-left="searchIcon" />
                </CollapseItem>
                <Divider />
                <CollapseItem>
                    <div style="margin-bottom: 8px;">禁用的文本框</div>
                    <Input placeholder="文本框提示" style="width: 100%;" :icon-right="searchIcon" disabled />
                </CollapseItem>
            </template>
        </Collapse>
        <ListItem unclickable>
            <template #icon>
                <img :src="menuIcon">
            </template>
            <template #title>下拉选择</template>
            <template #description>你选择的是：{{options_3.find(option => option.value === selected_3)?.label}}</template>
            <template #action>
                <Select :options="options_3" v-model="selected_3" style="min-width: 208px;"></Select>
            </template>
        </ListItem>
        <ListItem unclickable>
            <template #icon>
                <img :src="menuIcon">
            </template>
            <template #title>禁用的下拉选择</template>
            <template #description>此下拉选择控件处于整体禁用状态</template>
            <template #action>
                <Select :options="options_3" v-model="selected_6" style="min-width: 208px;" disabled></Select>
            </template>
        </ListItem>
        <ListItem unclickable>
            <template #icon>
                <img :src="chatIcon">
            </template>
            <template #title>对话框</template>
            <template #description>点击右侧的按钮打开对话框</template>
            <template #action>
                <PrimaryButton @click="dialog_1_unfolded = true">打开</PrimaryButton>
            </template>
        </ListItem>
        <ListItem unclickable>
            <template #icon>
                <img :src="chatIcon">
            </template>
            <template #title>有多个动作按钮的对话框</template>
            <template #description>点击右侧的按钮打开有多个动作按钮的对话框</template>
            <template #action>
                <PrimaryButton @click="dialog_2_unfolded = true">打开</PrimaryButton>
            </template>
        </ListItem>
        <Collapse>
            <template #icon>
                <img :src="linkIcon">
            </template>
            <template #title>链接</template>
            <template #description>展开面板查看链接示例</template>
            <template #content>
                <CollapseItem>
                    <Link>HyBox - 盒忆味工具箱</Link><br>
                    <Link disabled>HyBox - 盒忆味工具箱（禁用）</Link>
                </CollapseItem>
            </template>
        </Collapse>
        <!-- <Collapse>
            <template #icon>
                <img :src="radioButtonCheckedIcon">
            </template>
            <template #title>滑块</template>
            <template #description>滑块就是可以滑动的块块~</template>
            <template #content>
                <CollapseItem>
                    <div style="display: flex;align-items: center;">
                        <div style="flex-grow: 1;">音量</div>
                        <Slider :min="0" :max="100" :step="1" v-model="sliderValue_1" />
                    </div>
                </CollapseItem>
            </template>
        </Collapse> -->
        <Collapse>
            <template #icon>
                <img :src="blockIcon">
            </template>
            <template #title>其他组件的禁用状态</template>
            <template #description>其他组件的正常状态与禁用状态对比</template>
            <template #content>
                <CollapseItem>
                    主要按钮<br>
                    <PrimaryButton style="margin: 8px;">正常</PrimaryButton>
                    <PrimaryButton style="margin: 8px;" disabled>禁用</PrimaryButton>
                </CollapseItem>
                <Divider />
                <CollapseItem>
                    次要按钮<br>
                    <SecondaryButton style="margin: 8px;">正常</SecondaryButton>
                    <SecondaryButton style="margin: 8px;" disabled>禁用</SecondaryButton>
                </CollapseItem>
                <Divider />
                <CollapseItem>
                    切换开关<br>
                    <div style="display: flex;">
                        <Switch v-model="switch_on_1" style="margin: 8px;width: fit-content;" />
                        <Switch v-model="switch_on_2" style="margin: 8px;width: fit-content;" disabled />
                        <Switch v-model="switch_on_3" style="margin: 8px;width: fit-content;" disabled />
                    </div>
                </CollapseItem>
            </template>
        </Collapse>
        <Dialog v-model:unfolded="dialog_1_unfolded" content-overflow>
            <template #title>编辑网络信息</template>
            <template #content>
                <div style="margin: 8px 0;">更改他人在使用你共享的连接时的网络名称和密码。</div>
                <div style="margin: 24px 0;">
                    <div style="margin-bottom: 8px;">网络名称</div>
                    <Input v-model="wlan_name" />
                </div>
                <div style="margin: 24px 0;">
                    <div style="margin-bottom: 8px;">网络密码（至少 8 个字符）</div>
                    <Input v-model="wlan_passwd" type="password" />
                </div>
                <div style="margin: 24px 0;">
                    <div style="margin-bottom: 8px;">网络频带</div>
                    <Select :options="options_4" absolute full-width v-model="wlan_band" />
                </div>
            </template>
            <template #actions>
                <PrimaryButton @click="dialog_1_unfolded = false">保存</PrimaryButton>
                <SecondaryButton @click="dialog_1_unfolded = false">取消</SecondaryButton>
            </template>
        </Dialog>
        <Dialog v-model:unfolded="dialog_2_unfolded">
            <template #title>是否要保存？</template>
            <template #content>
                “无标题”中有未保存的更改。
            </template>
            <template #actions>
                <PrimaryButton @click="dialog_2_unfolded = false">保存</PrimaryButton>
                <SecondaryButton @click="dialog_2_unfolded = false">不保存</SecondaryButton>
                <SecondaryButton @click="dialog_2_unfolded = false">取消</SecondaryButton>
            </template>
        </Dialog>
    </div>
</template>
<style scoped></style>