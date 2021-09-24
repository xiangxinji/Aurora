<template>
  <div class="renderer-container">
    <el-form v-bind="formBinds">
      <draggable :list="data" item-key="id" handle=".active-dragger"
                 :group="{ name :'preview', put : 'touch'}" :animation="300">
        <template #item="{ element }">
          <preview-layout-item v-if="element?.options?.layout" :conf="element"
                               @active="handleActive"></preview-layout-item>
          <preview-item v-else :conf="element" @active="handleActive"></preview-item>
        </template>
      </draggable>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import {
  computed, inject, defineProps, reactive,
} from 'vue';
import previewItem from './item.vue';
import previewLayoutItem from './layout-item.vue';
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
RenderStore.set(props.items);
const { data } = RenderStore;
const formBinds = computed(() => props.formOptions);

function handleActive(conf: any) {
  if (RenderStore) {
    RenderStore.setCurrent(conf);
  }
}

</script>

<style scoped lang="scss">
::v-deep(.sortable-ghost) {
  background-color: #409EFF;
  height: 0;
  overflow: hidden;
  padding: 0;
  border-top: solid 10px #409EFF;
}
</style>
