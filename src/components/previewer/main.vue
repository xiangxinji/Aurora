<template>
  <div class="renderer-container">
    <el-form v-bind="formBinds" style="height:100%;">
      <draggable :list="data" item-key="id" handle=".active-draggier"
                 style="height:100%;overflow-y: scroll;"
                 :group="{ name :'preview', put : ['touch' , 'layout']}" :animation="300">
        <template #item="{ element }">
          <item-entry :element="element" mode="previewer"></item-entry>
        </template>
      </draggable>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import {
  computed, inject, defineProps, provide, reactive,
} from 'vue';
import itemEntry from './items/entry.vue';

import Store from '@/components/context/store';

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  formOptions: {
    type: Object,
    default: () => ({
      labelWidth: '100px',
      size: 'mini',
    }),
  },
});

const RenderStore: Store<any> | undefined = inject('RenderStore') || undefined;
// eslint-disable-next-line no-unused-expressions
RenderStore?.set(props.items);
const { data } = RenderStore;
const formBinds = computed(() => ({
  ...RenderStore?.formOptions,
  style: `width:${RenderStore?.formOptions.width};${RenderStore?.formOptions.styleText}`,
  class: RenderStore?.formOptions.customClass,
}));
</script>

<style scoped lang="scss">
::v-deep(.sortable-ghost) {
  background-color: #409EFF;
  height: 0;
  overflow: hidden;
  padding: 0;
  border-top: solid 10px #409EFF;
}

.renderer-container {
  display: flex;
  justify-content: center;
  padding-top: 8px;
  border: solid 1px #efefef;
  height: calc(100vh - 120px);
}

::v-deep(.el-form-item ) {
  padding: 10px;
  box-sizing: border-box;
}

</style>
