<template>
  <div>
    <el-form-item label="列数">
      <el-input-number v-model="state.columns" :min="1" :max="GRID_MAX_COLUMNS"
                       @change="handleChangeColumns"/>
    </el-form-item>

    <el-form-item label="列占位">
      <div v-for="(column , ind) in data.columns" :key="'column-conf-' + ind + data.key">
        <el-input-number @change="handleChangeColumnSpan(ind , column.span )"
                         style="margin-bottom:8px;" v-model="column.span" :min="0"
                         :max="24"></el-input-number>
      </div>
    </el-form-item>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps, reactive } from 'vue';
import useOptionBarRenderer, { CommonProps } from '../../useOptionRender';
import { GRID_MAX_COLUMNS } from '@/constans';

const emit = defineEmits(['change-field']);
const props = defineProps(CommonProps);
const [data, context] = useOptionBarRenderer(props, emit);
const state = reactive({
  columns: props.options.columns.length,
});
const { set } = context;

function handleChangeColumns() {
  const t = Array.from({ length: state.columns }, () => ({
    span: 24,
    children: [],
  }));
  const prevs = props.options.columns;
  for (let ind = 0; ind < t.length; ind++) {
    t[ind] = prevs[ind] || t[ind];
  }
  set('columns', t);
}

function handleChangeColumnSpan(index: number, value: number) {
  const c = data.value?.columns;
  if (c) {
    c[index].span = value;
  }
  set('columns', c);
}
</script>
<style lang="scss" scoped>

</style>
