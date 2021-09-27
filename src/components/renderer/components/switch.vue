<template>
  <form-item :options="options" :type="type">
    <el-switch v-bind="getBindOptions()" :value="true"></el-switch>
  </form-item>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { CommonProps } from '../useRenderItem';
import formItem from './form-item.vue';
import { SwitchOptions } from '@/type/component';

const props = defineProps(CommonProps);
const op = props.options as SwitchOptions;

function getBindOptions() {
  return {
    activeColor: op.activeColor,
    inactiveColor: op.inactiveColor,
    activeText: op.activeText,
    inactiveText: op.inactiveText,
    activeValue: op.activeValue,
    inactiveValue: op.inactiveValue,
    defaultValue: op.defaultValue,
  };
}

</script>
