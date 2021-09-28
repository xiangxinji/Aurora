<template>
  <div>
    <el-form-item label="激活色">
      <el-input v-model="data.activeColor" @blur="set('activeColor' , data.activeColor)"></el-input>
    </el-form-item>
    <el-form-item label="未激活色">
      <el-input v-model="data.inactiveColor"
                @blur="set('inactiveColor' , data.inactiveColor)"></el-input>
    </el-form-item>

    <el-form-item label="激活文本">
      <el-input v-model="data.activeText" @blur="set('activeText' , data.activeText)"></el-input>
    </el-form-item>
    <el-form-item label="未激活文本">
      <el-input v-model="data.inactiveText"
                @blur="set('inactiveText' , data.inactiveText)"></el-input>
    </el-form-item>

    <el-form-item label="激活值">
      <el-input v-model="data.activeValue" @blur="set('activeValue' , data.activeValue)"></el-input>
    </el-form-item>
    <el-form-item label="未激活值">
      <el-input v-model="data.inactiveValue"
                @blur="set('inactiveValue' , data.inactiveValue)"></el-input>
    </el-form-item>

    <el-form-item label="默认值">
      <el-input v-model="data.defaultValue"
                @blur="set('defaultValue' , data.defaultValue)"></el-input>
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
