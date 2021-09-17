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
    <component :is="state.type" :options="state.options"></component>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, reactive } from 'vue';
import { Rank, DeleteFilled, CopyDocument } from '@element-plus/icons';
import textInput from '@/components/renderer/components/input.vue';
import htmlCode from '@/components/renderer/components/html-code.vue';
import Store from '@/components/context/store';

const RenderStore: Store<any> | undefined = inject('RenderStore') || undefined;

function handleBlur(target: HTMLElement) {
  target.classList.remove('preview-active');
}

export default defineComponent({
  inject: ['RenderStore'],
  props: {
    conf: {
      type: Object,
      required: true,
    },
    current: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      state: this.conf,
    };
  },
  components: {
    textInput,
    htmlCode,
    Rank,
    DeleteFilled,
    CopyDocument,
  },
  methods: {
    handleFocus(event: MouseEvent) {
      const target = event.currentTarget as HTMLElement;
      target.classList.add('preview-active');
      this.$emit('active', this.state);
    },
    handleBlur,
    handleDelete(this: any) {
      if (this.RenderStore) this.RenderStore.remove(this.state.id);
    },
    handleAppendCopy(this: any) {
      if (this.RenderStore) {
        const i = this.RenderStore.indexOf(this.state.id);
        this.RenderStore.set(JSON.parse(JSON.stringify(this.state)), i + 1);
      }
    },
  },
  mounted() {
  },
});
</script>
<style lang="scss" scoped>
.preview-item {
  border: dashed 2px #efefef;
  cursor: pointer;
  user-select: none;
  position: relative;
  padding: 15px 0;

  &:hover {
    border-color: #409EFF;
  }

  .active-dragger, .operations {
    display: none;
    position: absolute;
    background-color: #409EFF;
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
  border: solid 2px #409EFF;

  .active-dragger, .operations {
    display: block;
  }
}
</style>
