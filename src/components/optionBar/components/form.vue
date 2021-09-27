<template>
  <div>
    <el-form size="mini" label-position="top">
      <el-form-item label="表单宽度">
        <el-input v-model="state.width" @blur="changeOption('width' , state.width)"></el-input>
      </el-form-item>
      <el-form-item label="标签位置">
        <el-select v-model="state.labelPosition"
                   @change="changeOption('labelPosition' , state.labelPosition)">
          <el-option label="右边" value="right"></el-option>
          <el-option label="左边" value="left"></el-option>
          <el-option label="上方" value="top"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标签宽度">
        <el-input v-model="state.labelWidth"
                  @blur="changeOption('labelWidth' , state.labelWidth)"></el-input>
      </el-form-item>
      <el-form-item label="标签后缀">
        <el-input v-model="state.labelSuffix"
                  @blur="changeOption('labelSuffix' , state.labelSuffix)"></el-input>
      </el-form-item>
      <el-form-item label="表单尺寸">
        <el-select v-model="state.size"
                   @change="changeOption('size' , state.size)">
          <el-option label="中等" value="middle"></el-option>
          <el-option label="较小" value="small"></el-option>
          <el-option label="最小" value="mini"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="自定义class">
        <el-input v-model="state.customClass"
                  @blur="changeOption('customClass' , state.customClass)"></el-input>
      </el-form-item>
      <el-form-item label="自定义样式" label-position="top">
        <el-input v-model="state.styleText" type="textarea"
                  @blur="changeOption('styleText' ,state.styleText )"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { defineProps, reactive, defineEmits } from 'vue';

const emit = defineEmits(['change-option']);

const props = defineProps({
  options: {
    type: Object,
    required: true,
  },
});

const state = reactive({
  ...props.options,
});

function changeOption(key: string, value: any) {
  emit('change-option', key, value);
}

</script>
<style lang="scss" scoped>

</style>
