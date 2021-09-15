<template>
  <div class="renderer-container">
    <el-form v-bind="formBinds">
      <component :is="conf.type" v-for="(conf,$index) in items" :key="$index"
                 :options="conf.options"></component>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import text from '@/components/renderer/components/text.vue';

function getDefaultFormOptions() {
  return {
    labelWidth: '100px',
    size: 'mini',
  };
}

export default defineComponent({
  components: {
    text,
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
});
</script>
<style lang="scss" scoped>

</style>
