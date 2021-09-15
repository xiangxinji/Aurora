<template>
  <el-form-item v-bind="getRenderOptionsToTemplate(state.options)" label-width="100px"
                :class="getRenderItemClass(state.options)"
                :style="getRenderItemStyle(state.options)">
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
console.log(state);
</script>
