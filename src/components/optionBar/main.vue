<template>
  <div class="options-bar">{{ state.current?.type }}</div>
</template>

<script setup lang="ts">
import { inject, reactive } from 'vue';
import Store from '@/components/context/store';

const RenderStore: Store<any> | undefined = inject('RenderStore') || undefined;
const state = reactive({
  current: null,
});
// eslint-disable-next-line no-unused-expressions
RenderStore?.on('current-change', (current) => {
  state.current = current;
});
console.log(RenderStore);
</script>
<style lang="scss" scoped>
.options-bar {
  height: 100%;
  border-left: solid 1px #ccc;
}
</style>
