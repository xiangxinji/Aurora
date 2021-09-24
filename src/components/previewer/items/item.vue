<template>
  <div :class="{ 'preview-item' : true , 'preview-active' : active }"
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
    <component :is="state.type" :type="state.type" :options="state.options"></component>
  </div>
</template>

<script lang="ts">
import { Rank, DeleteFilled, CopyDocument } from '@element-plus/icons';
import textInput from '@/components/renderer/components/input.vue';
import htmlCode from '@/components/renderer/components/html-code.vue';
import usePreviewItem from '../usePreviewItem';

const component = usePreviewItem('preview-item', {
  textInput,
  htmlCode,
  Rank,
  DeleteFilled,
  CopyDocument,
});
export default component;
</script>
<style lang="scss" scoped>
.preview-item {
  border: dashed 2px #efefef;
  cursor: pointer;
  user-select: none;
  position: relative;

  &:hover {
    border-color: #409EFF;
  }

  .active-draggier, .operations {
    display: none;
    position: absolute;
    background-color: #409EFF;
    color: white;
    padding: 0 5px;
  }

  .active-draggier {
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
  border: solid 2px #409EFF;
  > .active-draggier, > .operations {
    display: block;
  }
}
</style>
