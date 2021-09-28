<template>
  <el-dialog v-model="state.visible" title="HTML Code">
    <el-input type="textarea" v-model="data.code"></el-input>
    <template #footer>
      <el-button @click="close">取消</el-button>
      <el-button type="primary" @click="enter">确定</el-button>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { reactive, defineExpose, defineEmits } from 'vue';
import useDialog from '@/components/dialogs/useDialog';

const emit = defineEmits(['enter']);
const [state, context] = useDialog();
const data = reactive({
  code: '',
});
const open = (code = '') => {
  data.code = code;
  context.open();
};
const { close } = context;
const enter = () => {
  emit('enter', data.code);
  close();
};

defineExpose({
  open,
  close,
});
</script>
<style lang="scss" scoped>

</style>
