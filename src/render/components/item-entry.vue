<template>
  <div>
    <component :is="item.type" :type="item.type" :options="item.options" :mode="'renderer'">
      <template v-if="item.options.layout" #entry="options">
        <render-item-entry :form-options="formOptions" :item="node" v-for="(node) in options.children"
                           :key="node.id"></render-item-entry>
      </template>
    </component>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { FormOptions, RenderItem } from '@/type';
import cpts from '@/components/registerRenderEntry';

export default defineComponent({
  components: {
    ...cpts,
  },
  name: 'RenderItemEntry',
  props: {
    item: {
      type: Object as PropType<RenderItem>,
      required: true,
    },
    formOptions: {
      type: Object as PropType<FormOptions>,
      required: true,
    },
  },
  setup(props) {
    console.log(props.item);
  },
});
</script>
<style lang="scss" scoped>

</style>
