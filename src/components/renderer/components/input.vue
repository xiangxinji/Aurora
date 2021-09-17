<template>
  <form-item :options="options" :type="type">
    <el-input :type="options.textarea ? 'textarea' : 'input'"
              v-model="options.defaultValue"
              :placeholder="options.placeholder"></el-input>
  </form-item>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { CommonProps } from '../useRenderItem';
import formItem from './form-item.vue';
import { TextOptions } from '@/components/renderer/types';

const props = defineProps(CommonProps);

</script>
