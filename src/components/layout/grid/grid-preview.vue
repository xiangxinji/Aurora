<template>
  <el-row :class="getRenderItemClass(type , options)"
          :style="getRenderItemStyle(options)">
    <el-col v-for="i in options.columns.length" :key="i.key"
            :span="getColumnSpan(options , i)">
      <draggable :list="options.columns[i-1].children"
                 :group="{ name :'layout' , put : ['touch' , 'preview' , 'layout']}"
                 :item-key="item => item.options.key"
                 style="height:100%;"
                 :animation="300" >
        <template #item="{ element }">
          <item-entry :element="element" :parent-nodes="options.columns[i-1].children"></item-entry>
        </template>
      </draggable>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { PropType, defineProps } from 'vue';
import { BaseOptions } from '@/type/component';
import itemEntry from '@/components/previewer/items/entry.vue';
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

function getColumnSpan(options: any, number: number) {
  if (options.columns[number - 1] && options.columns[number - 1].span) return options.columns[number - 1].span;
  return 24 / options.columns.length;
}
</script>
<style lang="scss" scoped>
.el-col {
  min-height: 100px;
}
</style>
