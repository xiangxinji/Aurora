<template>
  <div class="home">
    <div class="container">
      <context ref="context">
        <touch-bar style="width:250px;"></touch-bar>
        <screen style="flex:1;" :configure="mock"></screen>
        <options-bar style="width:250px;" @save-generate-json="handleGenerateJson"></options-bar>
      </context>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ElMessage } from 'element-plus';
import touchBar from '@/components/touchBar/main.vue';
import screen from '@/components/screen/main.vue';
import optionsBar from '@/components/optionBar/main.vue';
import context from '@/components/context/main.vue';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import mock from '@/mock';

export default defineComponent({
  name: 'Home',
  components: {
    touchBar,
    screen,
    context,
    optionsBar,
  },
  setup() {
    return {
      mock,
    };
  },
  methods: {
    handleGenerateJson() {
      const c = this.$refs.context as InstanceType<typeof context>;
      c.saveStorage();
      ElMessage({
        type: 'success',
        message: '保存成功',
      });
    },
  },
});
</script>

<style lang="scss" scoped>
.container {
  height: calc(100vh - 60px);
  display: flex;
}
</style>
