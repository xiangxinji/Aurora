<template>
  <form-item :options="options" :type="type">
    <el-switch v-bind="getBindOptions()" v-model="options.defaultValue"></el-switch>
  </form-item>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { CommonProps } from '../useRenderItem';
import formItem from './form-item.vue';
import { SwitchOptions } from '@/type/component';

const props = defineProps(CommonProps<SwitchOptions>());

function getBindOptions() {
  return {
    activeColor: props.options?.activeColor,
    inactiveColor: props.options?.inactiveColor,
    activeText: props.options?.activeText,
    inactiveText: props.options?.inactiveText,
    activeValue: props.options?.activeValue,
    inactiveValue: props.options?.inactiveValue,
    defaultValue: props.options?.defaultValue,
  };
}

</script>
