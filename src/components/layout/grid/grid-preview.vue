<template>
  <el-row :class="getRenderItemClass(type , options)"
          :style="getRenderItemStyle(options)">
    <el-col v-for="i in options.columns.length" :key="i.key"
            :span="getColumnSpan(options , i)">
      <draggable :list="options.columns[i-1].children"
                 :group="{ name :'layout' , put : ['touch' , 'preview' , 'layout']}"
                 :item-key="item => item.options.key"
                 style="height:100%;"
                 :animation="300" v-if="mode === 'previewer'">
        <template #item="{ element }">
          <item-entry :element="element" :parent-nodes="options.columns[i-1].children" :mode="mode"></item-entry>
        </template>
      </draggable>
      <slot v-if="mode === 'renderer'" name="entry" v-bind="options.columns[i - 1]"></slot>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { PropType, defineProps } from 'vue';
import { BaseOptions } from '@/type/component';
import itemEntry from '@/components/previewer/items/entry.vue';
import {
  getRenderItemStyle,
  getRenderItemClass, CommonProps,
} from '@/components/renderer/useRenderItem';
import { GridLayoutOptions } from '@/type/layout';

const props = defineProps(CommonProps<GridLayoutOptions>());

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
