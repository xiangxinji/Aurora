<template>
  <div class="options-bar">
    <el-tabs>
      <el-tab-pane label="组件属性">
        <el-form size="mini" label-width="70px" style="padding-top:10px;">
          <empty v-if="!state.current"></empty>
          <common-field v-if="!state.current?.options.layout && comp !== 'empty'"
                        :options="state.current.options" @change-field="handleChangeField">
            <component :is="comp" :options="state.current.options"
                       @change-field="handleChangeField"></component>
          </common-field>
          <layout-common-field v-if="state.current?.options.layout && comp !== 'empty'"
                               :options="state.current.options" @change-field="handleChangeField">
            <component :is="comp" :options="state.current.options"
                       @change-field="handleChangeField"></component>
          </layout-common-field>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="表单属性">
        <form-option :options="state.formOptions" @change-option="handleChangeOption"></form-option>
      </el-tab-pane>

      <el-tab-pane label="操作">
        <div style="margin-top:20px;">
          <el-button @click="$emit('save-generate-json')" style="width:100%;" type="primary" size="mini">  生成配置并保存本地 </el-button>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import {
  inject, reactive, defineComponent, computed,
} from 'vue';
import Store, { FormOptions } from '@/components/context/store';
import FormOption from './components/form.vue';
import htmlCode from './components/html-code.vue';
import empty from './components/base/empty.vue';
import commonField from './components/base/common-field.vue';
import layoutCommonField from './components/layout/common-field.vue';
import textInput from './components/text-input.vue';
import switchField from './components/switch.vue';
import gridBlock from './components/layout/grid.vue';

export default defineComponent({
  components: {
    FormOption,
    htmlCode,
    commonField,
    layoutCommonField,
    textInput,
    empty,
    gridBlock,
    switch: switchField,
  },
  setup() {
    const RenderStore: Store<any> | undefined = inject('RenderStore') || undefined;
    const state = reactive({
      current: null as any,
      formOptions: RenderStore?.formOptions,
    });
    // eslint-disable-next-line no-unused-expressions
    RenderStore?.on('current-change', (current: any) => {
      state.current = current;
    });

    const comp = computed(() => (state.current && state.current.type) || 'empty');

    function handleChangeOption(key: keyof FormOptions, value: any) {
      if (RenderStore) {
        RenderStore.formOptions[key] = value;
      }
    }

    function handleChangeField(key: string, data: any) {
      if (state.current) {
        state.current.options[key] = data;
      }
    }

    return {
      state,
      handleChangeOption,
      handleChangeField,
      comp,
    };
  },
});

</script>
<style lang="scss" scoped>
.options-bar {
  height: 100%;
  background-color:white;
  border-left: solid 1px #efefef;
  padding: 2px 12px;
  box-sizing: border-box;
}
</style>
