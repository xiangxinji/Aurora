<template>
  <div class="home">
    <div class="container">
      <context ref="context">
        <touch-bar style="width:250px;"></touch-bar>
        <screen style="flex:1;" :configure="mock" @save="handlePreviewRender"></screen>
        <options-bar style="width:250px;" @preview-render="handlePreviewRender"
        ></options-bar>
      </context>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { ElMessage } from 'element-plus';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import touchBar from '@/components/touchBar/main.vue';
import screen from '@/components/screen/main.vue';
import optionsBar from '@/components/optionBar/main.vue';
import Context from '@/components/context/main.vue';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import mock from '@/mock';

export default defineComponent({
  name: 'Home',
  components: {
    touchBar,
    screen,
    Context,
    optionsBar,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const context = ref<InstanceType<typeof Context> | null>(null);

    function handlePreviewRender() {
      if (!context.value) return;
      const json = context.value.toJson();
      store.commit('SET_PREVIEW_CONFIG', json);
      localStorage.setItem('PREVIEW_RENDER', JSON.stringify(json));
      router.push({ path: '/preview' });
    }

    return {
      mock,
      context,
      handlePreviewRender,
    };
  },
  methods: {},
});
</script>

<style lang="scss" scoped>
.container {
  height: calc(100vh - 60px);
  display: flex;
}
</style>
