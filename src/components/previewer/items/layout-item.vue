<template>
  <div :class="{ 'preview-item' : true , 'preview-active' : active }" @click.stop="handleFocus">
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
    <component v-if="state" :is="state.type" :type="state.type"
               :options="state.options"></component>
  </div>
</template>

<script lang="ts">
import { Rank, DeleteFilled, CopyDocument } from '@element-plus/icons';
import GridBlock from '@/components/layout/grid/grid-preview.vue';
import usePreviewItem from '../usePreviewItem';

const component = usePreviewItem('layout-item', {
  Rank,
  DeleteFilled,
  CopyDocument,
  GridBlock,
});
export default component;
</script>
<style lang="scss" scoped>

@import "./styles";

@include preview-item(orange, white)
</style>
