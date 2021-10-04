<template>
  <form-item :options="options" :type="type">
    <el-select v-model="options.defaultValue" :multiple="options.multiple">
      <el-option v-for="(option , ind ) in options.data" :key="option.value + ind" :label="option[options.labelKey]" :value="option[options.valueKey]"></el-option>
    </el-select>
  </form-item>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { CommonProps } from '../useRenderItem';
import formItem from './form-item.vue';
import { SwitchOptions } from '@/type/component';

const props = defineProps(CommonProps);
</script>
<style lang="scss" scoped>

</style>
