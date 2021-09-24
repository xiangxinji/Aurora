<template>
  <preview-layout-item v-if="element?.options?.layout"
                       :conf="element" v-bind="$attrs"></preview-layout-item>
  <preview-item v-else :conf="element" v-bind="$attrs"></preview-item>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import previewItem from './item.vue';
import previewLayoutItem from './layout-item.vue';

const props = defineProps({
  element: {
    type: Object,
    required: true,
  },
});
</script>
