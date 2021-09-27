<template>
  <div>
    <el-form-item label="html代码">
      <el-button type="primary"> settings</el-button>
    </el-form-item>

  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from 'vue';
import useOptionBarRenderer, { CommonProps } from '@/components/optionBar/useOptionRender';

const emit = defineEmits(['change-field']);
const props = defineProps(CommonProps);
const [data, context] = useOptionBarRenderer(props, emit);
const { set } = context;
</script>
<style lang="scss" scoped>

</style>
