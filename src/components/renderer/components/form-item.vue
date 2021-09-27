<template>
  <el-form-item v-bind="getRenderOptionsToTemplate(options)"
                :class="getRenderItemClass(type , options)"
                :style="getRenderItemStyle(options)" >
    <slot></slot>
  </el-form-item>
</template>

<script setup lang="ts">
import { PropType, defineProps } from 'vue';
import { BaseOptions } from '@/type/component';
import {
  getRenderItemStyle,
  getRenderItemClass,
  getRenderOptionsToTemplate,
} from '../useRenderItem';

const props = defineProps({
  options: {
    type: Object as PropType<BaseOptions>,
  },
  type: {
    type: String,
    required: true,
  },
});
</script>
<style lang="scss" scoped>

</style>
