<template>
  <el-form-item v-bind="getRenderOptionsToTemplate(options)" label-width="100px"
                :class="getRenderItemClass(options)" :style="getRenderItemStyle(options)">
    <el-input :type="state.textarea ? 'textarea' : 'input'"
                v-model="state.defaultValue"
              :placeholder="state.placeholder"></el-input>
  </el-form-item>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import useRenderItem, { CommonProps } from '../useRenderItem';

const props = defineProps(CommonProps);

const [state, {
  getRenderItemClass,
  getRenderOptionsToTemplate,
  getRenderItemStyle,
}] = useRenderItem('text', props.options);
</script>
