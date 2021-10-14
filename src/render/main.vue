<template>
  <el-form v-bind="resolveFormOptionsBind(config.formOptions)">
    <item-entry :form-options="config.formOptions" :item="item" v-for="(item) in config.data"
                :key="item.id"></item-entry>
  </el-form>
</template>

<script setup lang="ts">
import { defineProps, PropType } from 'vue';
import { RenderConfig } from '@/type';
import { resolveFormOptionsBind } from '@/utils/resolve';
import itemEntry from './components/item-entry.vue';

const props = defineProps({
  config: {
    type: Object as PropType<RenderConfig>,
    required: true,
  },
});
</script>
<style lang="scss" scoped>

</style>
