<template>
  <div>
    <el-form-item label="展示字段">
      <el-input v-model="data.labelKey"
                @blur="set('labelKey' , data.labelKey)"></el-input>
    </el-form-item>
    <el-form-item label="值字段">
      <el-input v-model="data.valueKey"
                @blur="set('valueKey' , data.valueKey)"></el-input>
    </el-form-item>
    <el-form-item label="多选">
      <el-radio-group v-model="data.multiple" @change="set('multiple' , data.multiple)">
        <el-radio-button :label="true">是</el-radio-button>
        <el-radio-button :label="false"> 否</el-radio-button>
      </el-radio-group>
    </el-form-item>

    <el-form-item label="data">
      <el-button type="primary" @click="onOpenSetting"> settings</el-button>
    </el-form-item>

    <select-data-setting ref="dataSetting" @enter="onSettingEnter"></select-data-setting>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps, ref } from 'vue';
import { ElMessage } from 'element-plus';
import useOptionBarRenderer, { CommonProps } from '@/components/optionBar/useOptionRender';
import SelectDataSetting from '@/components/dialogs/component/select-data-setting.vue';
import { SelectOptions } from '@/type/component';

const dataSetting = ref<InstanceType<typeof SelectDataSetting> | null>(null);
const emit = defineEmits(['change-field']);
const props = defineProps(CommonProps);
const [data, context] = useOptionBarRenderer(props, emit);
const { set } = context;

function onSettingEnter(data: Array<any>) {
  set('data', data);
  ElMessage({
    type: 'success',
    message: '设置成功',
  });
}

function onOpenSetting() {
  const options = props.options as unknown as SelectOptions;
  if (dataSetting.value) dataSetting.value.open(options.data);
}
</script>
<style lang="scss" scoped>

</style>
