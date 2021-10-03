<template>
  <div>
    <el-form-item label="key">
      <el-input v-model="data.key" @blur="set('key' , data.key)"></el-input>
    </el-form-item>
    <el-form-item label="是否隐藏">
      <el-radio-group v-model="data.hidden" @change="set('hidden' , data.hidden)">
        <el-radio-button :label="false">显示</el-radio-button>
        <el-radio-button :label="true"> 隐藏</el-radio-button>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="类名">
      <el-input v-model="data.customClass" @blur="set('customClass' , data.customClass)"></el-input>
    </el-form-item>

    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from 'vue';
import useOptionBarRenderer, { CommonProps } from '../../useOptionRender';

const emit = defineEmits(['change-field']);
const props = defineProps(CommonProps);
const [data, context] = useOptionBarRenderer(props, emit);
const { set } = context;
</script>
<style lang="scss" scoped>

</style>
