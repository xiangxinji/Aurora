<template>
  <el-dialog v-model="state.visible" title="Data">
    <el-input type="textarea" v-model="data.data"></el-input>
    <template #footer>
      <el-button @click="close">取消</el-button>
      <el-button type="primary" @click="enter">确定</el-button>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { reactive, defineExpose, defineEmits } from 'vue';
import { ElMessage } from 'element-plus';
import useDialog from '@/components/dialogs/useDialog';

const emit = defineEmits(['enter']);
const [state, context] = useDialog();
const data = reactive({
  data: '',
});
const open = (d: Array<any>) => {
  data.data = JSON.stringify(d);
  context.open();
};
const { close } = context;
const enter = () => {
  try {
    const d = JSON.parse(data.data);
    emit('enter', d);
    close();
  } catch (e) {
    ElMessage({
      type: 'warning',
      message: '请确认是否符合JSON格式',
    });
  }
};

defineExpose({
  open,
  close,
});
</script>
<style lang="scss" scoped>

</style>
