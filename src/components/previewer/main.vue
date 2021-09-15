<template>
  <div class="renderer-container">
    <el-form v-bind="formBinds">
      <div class="preview-item" v-for="(conf,$index) in items" :key="$index"
           @click.self="handleActive(conf)">
        <component :is="conf.type" :options="conf.options"></component>
      </div>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import text from '@/components/renderer/components/text.vue';
import htmlCode from '@/components/renderer/components/html-code.vue';

function getDefaultFormOptions() {
  return {
    labelWidth: '100px',
    size: 'mini',
  };
}

export default defineComponent({
  components: {
    text,
    htmlCode,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
    formOptions: {
      type: Object,
      default: getDefaultFormOptions,
    },
  },
  computed: {
    formBinds() {
      return this.formOptions;
    },
  },
  methods: {
    handleActive(conf: any) {
      console.log(conf);
    },
  },
});
</script>
<style lang="scss" scoped>
.preview-item {
  border: dashed 1px #efefef;
  cursor: pointer;
  user-select: none;
}
</style>
