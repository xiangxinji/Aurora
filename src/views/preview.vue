<template>
  <div class="preview-renderer">
    <render :config="t"></render>
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import { reactive } from 'vue';
import render from '@/render/main.vue';

const store = useStore();
const t = reactive(store.state.PreviewConfig || JSON.parse(localStorage.getItem('PREVIEW_RENDER') as any));

</script>
<style lang="scss" scoped>
.preview-renderer {
  width:1100px;
  background-color:white;
  min-height:calc(100vh - 70px);
  margin : 0 auto ;
  padding:10px;
  box-sizing: border-box;
}
</style>
