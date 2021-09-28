<template>
  <div>
    <el-form-item label="占位文字">
      <el-input v-model="data.placeholder" @blur="set('placeholder' , data.placeholder)"></el-input>
    </el-form-item>
    <el-form-item label="默认值">
      <el-input v-model="data.defaultValue" @blur="set('defaultValue' , data.defaultValue)"></el-input>
    </el-form-item>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from 'vue';
import useOptionBarRenderer, { CommonProps } from '@/components/optionBar/useOptionRender';

const emit = defineEmits(['change-field']);
const props = defineProps(CommonProps);
const [data, context] = useOptionBarRenderer(props, emit);
const { set } = context;
</script>
<style lang="scss" scoped>

</style>
