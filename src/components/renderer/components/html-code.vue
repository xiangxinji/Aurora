<template>
  <form-item :options="options" :type="options.type">
    <div v-html="options.htmlCode"></div>
  </form-item>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import { CommonProps } from '../useRenderItem';
import formItem from './form-item.vue';
import { HTMLCodeOptions } from '@/type/component';

const props = defineProps(CommonProps<HTMLCodeOptions>());

</script>
