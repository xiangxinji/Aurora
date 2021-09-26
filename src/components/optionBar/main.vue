<template>
  <div class="options-bar">
    <el-tabs>
      <el-tab-pane label="组件属性">Component</el-tab-pane>
      <el-tab-pane label="表单属性">
        <form-option :options="state.formOptions" @change-option="handleChangeOption"></form-option>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { inject, reactive, defineComponent } from 'vue';
import Store, { FormOptions } from '@/components/context/store';
import FormOption from './components/form.vue';

export default defineComponent({
  components: {
    FormOption,
  },
  setup() {
    const RenderStore: Store<any> | undefined = inject('RenderStore') || undefined;
    const state = reactive({
      current: null,
      formOptions: RenderStore?.formOptions,
    });
    // eslint-disable-next-line no-unused-expressions
    RenderStore?.on('current-change', (current: any) => {
      state.current = current;
    });

    function handleChangeOption(key: keyof FormOptions, value: any) {
      if (RenderStore) {
        RenderStore.formOptions[key] = value;
      }
    }

    return {
      state,
      handleChangeOption,
    };
  },
});

</script>
<style lang="scss" scoped>
.options-bar {
  height: 100%;
  border-left: solid 1px #ccc;
  padding: 2px 12px;
  box-sizing: border-box;
}
</style>
