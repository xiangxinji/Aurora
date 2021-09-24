<template>
  <el-row :class="getRenderItemClass(type , options)"
          :style="getRenderItemStyle(options)">
    <el-col v-for="i in options.columns.length" :key="i"
            :span="getColumnSpan(options , i)">
      <draggable :list="options.columns[i-1].children"
                 :group="{ name :['preview' , 'layout'] , put : ['touch' , 'preview']}">
        <template #item="{ element }">
          <preview-item :conf="element"></preview-item>
        </template>
      </draggable>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { PropType, defineProps } from 'vue';
import { BaseOptions } from '@/components/renderer/types';
import PreviewItem from '@/components/previewer/item.vue';
import {
  getRenderItemStyle,
  getRenderItemClass,
} from '@/components/renderer/useRenderItem';

const props = defineProps({
  options: {
    type: Object as PropType<BaseOptions>,
  },
  type: {
    type: String,
    required: true,
  },
});

function getColumnSpan(options, number) {
  if (options.columns[number - 1] && options.columns[number - 1].span) return options.columns[number - 1].span;
  return 24 / options.columns.length;
}
</script>
<style lang="scss" scoped>
.el-col {
  min-height: 100px;
}
</style>
