<template>
  <div class="screen">
    <div class="preview-top-bar">
      <el-button type="primary" size="mini" @click="$emit('save')"> 保存</el-button>
    </div>
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

.preview-top-bar{
  padding-bottom: 8px;
  text-align: right;
}
</style>
