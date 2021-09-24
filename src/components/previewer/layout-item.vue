<template>
  <div class="preview-item" @click.capture="handleFocus" v-click-outside="handleBlur">
    <div class="active-dragger">
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
import usePreviewItem from './usePreviewItem';

const component = usePreviewItem('layout-item', {
  Rank,
  DeleteFilled,
  CopyDocument,
  GridBlock,
});
export default component;
</script>
<style lang="scss" scoped>

$primary-color: orange;
.preview-item {
  border: dashed 2px #efefef;
  cursor: pointer;
  user-select: none;
  position: relative;
  padding: 15px 0;
  box-sizing: border-box;

  &:hover {
    border-color: $primary-color;
  }

  .active-dragger, .operations {
    display: none;
    position: absolute;
    background-color: $primary-color;
    color: white;
    padding: 0 5px;
  }

  .active-dragger {
    left: 0;
    top: 0;
  }

  .operations {
    position: absolute;
    right: 0;
    bottom: 0;
    padding: 0 8px;

    .el-icon:not(:last-child) {
      margin-right: 4px;
    }

    .el-icon {
      margin-top: 3px;
    }
  }
}

.preview-active {
  border: solid 2px $primary-color;

  .active-dragger, .operations {
    display: block;
  }
}
</style>
