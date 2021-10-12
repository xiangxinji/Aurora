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
  getRenderOptionsToTemplate, CommonProps,
} from '../useRenderItem';

const props = defineProps(CommonProps<BaseOptions>());
</script>
<style lang="scss" scoped>

</style>
