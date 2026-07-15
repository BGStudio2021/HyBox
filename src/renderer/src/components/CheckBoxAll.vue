<script setup lang="ts">
import CheckBox from './CheckBox.vue'
import { ref, watchEffect } from 'vue'

const props = defineProps<{
    options: Array<{
        value: string,
        label: string,
        disabled?: boolean
    }>
}>()
const selected = defineModel<string[]>({ default: [] })

const selectedAll = ref([])
const selectedAllIndeterminate = ref('none')
const selectAllLabel = ref('')

watchEffect(() => {
    if (selected.value.length === props.options.length) {
        selectedAllIndeterminate.value = 'all'
        selectAllLabel.value = '取消全选'
    } else if (selected.value.length === 0) {
        selectedAllIndeterminate.value = 'none'
        selectAllLabel.value = '全选'
    } else {
        selectedAllIndeterminate.value = 'indeterminate'
        selectAllLabel.value = '全选'
    }
})

function selectAll() {
    selectedAll.value = []
    if (selectedAllIndeterminate.value === 'all') {
        selected.value = []
    } else {
        selected.value = props.options.map(option => option.value)
    }
}
</script>
<template>
    <div @click.prevent="selectAll">
        <CheckBox :options="[{ value: 'all', label: selectAllLabel }]" name="selectAll" v-model="selectedAll"
            :indeterminate="selectedAllIndeterminate"></CheckBox>
    </div>
</template>