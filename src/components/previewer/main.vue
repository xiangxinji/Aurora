<template>
  <div class="renderer-container">
    <el-form v-bind="formBinds">
      <preview-item v-for="(conf) in data"
                    :key="conf.id" :conf="conf"
                    @active="handleActive"></preview-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import {
  computed, inject, defineProps, reactive,
} from 'vue';
import previewItem from './preview-item.vue';
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
const data = computed(() => RenderStore.data);
const formBinds = computed(() => props.formOptions);

function handleActive(conf: any) {
  if (RenderStore) {
    RenderStore.setCurrent(conf);
  }
}

</script>
