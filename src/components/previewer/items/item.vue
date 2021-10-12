<template>
  <div :class="{ 'preview-item' : true , 'preview-active' : active  , hidden : conf.options.hidden }"
       @click.stop="handleFocus">
    <div class="active-draggier">
      <el-icon>
        <rank/>
      </el-icon>
    </div>
    <div class="operations">
      <el-icon :size="16" @click.stop="handleAppendCopy">
        <copy-document/>
      </el-icon>
      <el-icon :size="16" @click.stop="handleDelete">
        <delete-filled/>
      </el-icon>
    </div>
    <component :is="state.type" :type="state.type" :options="state.options" v-bind="$attrs"></component>
  </div>
</template>

<script lang="ts">
import { Rank, DeleteFilled, CopyDocument } from '@element-plus/icons';
import textInput from '@/components/renderer/components/input.vue';
import htmlCode from '@/components/renderer/components/html-code.vue';
import switchField from '@/components/renderer/components/switch.vue';
import select from '@/components/renderer/components/select.vue';
import usePreviewItem from '../usePreviewItem';

const component = usePreviewItem('preview-item', {
  textInput,
  htmlCode,
  Rank,
  DeleteFilled,
  switch: switchField,
  select,
  CopyDocument,
});
export default component;
</script>
<style lang="scss" scoped>
@import "./styles";
@include preview-item(#409EFF, white)
</style>
