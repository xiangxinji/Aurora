<template>
  <div class="screen">
    <previewer :items="configure"></previewer>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import previewer from '@/components/previewer/main.vue';

const props = defineProps({
  configure: {
    type: Array,
    default() {
      return [];
    },
  },
});
</script>
<style lang="scss" scoped>
.screen {
  background-color:white;
  height: 100%;
  box-sizing: border-box;
  padding:10px;
}
</style>
