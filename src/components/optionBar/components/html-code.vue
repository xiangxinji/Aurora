<template>
  <div>
    <el-form-item label="html代码">
      <el-button type="primary" @click="onOpenSetting"> settings</el-button>
    </el-form-item>

    <html-code-setting ref="codeSetting" @enter="onSettingEnter"></html-code-setting>
  </div>

</template>

<script setup lang="ts">
import { defineEmits, defineProps, ref } from 'vue';
import useOptionBarRenderer, { CommonProps } from '@/components/optionBar/useOptionRender';
import htmlCodeSetting from '@/components/dialogs/component/html-code-setting.vue';
import { HTMLCodeOptions } from '@/type/component';

const codeSetting = ref<InstanceType<typeof htmlCodeSetting> | null>(null);
const emit = defineEmits(['change-field']);
const props = defineProps(CommonProps);
const [data, context] = useOptionBarRenderer(props, emit);
const { set } = context;

function onOpenSetting() {
  const options = props.options as HTMLCodeOptions;
  if (codeSetting.value) codeSetting.value.open(options.htmlCode);
}

function onSettingEnter(code: string) {
  set('htmlCode', code);
}
</script>
<style lang="scss" scoped>

</style>
