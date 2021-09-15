<template>
  <form-item :options="state.options" :type="state.type">
    <div v-html="state.options.htmlCode"></div>
  </form-item>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import useRenderItem, { CommonProps } from '../useRenderItem';
import formItem from './form-item.vue';
import { HTMLCodeOptions } from '@/components/renderer/types';

const props = defineProps(CommonProps);

const [state] = useRenderItem<HTMLCodeOptions>('html', props.options as HTMLCodeOptions);
</script>
