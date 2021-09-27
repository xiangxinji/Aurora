<template>
  <div class="home">
    <header-bar></header-bar>
    <div class="container">
      <context>
        <touch-bar style="width:250px;"></touch-bar>
        <screen style="flex:1;" :configure="mock"></screen>
        <options-bar style="width:250px;"></options-bar>
      </context>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import touchBar from '@/components/touchBar/main.vue';
import screen from '@/components/screen/main.vue';
import optionsBar from '@/components/optionBar/main.vue';
import context from '@/components/context/main.vue';
import headerBar from './components/header-bar.vue';
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
    headerBar,
  },
  setup() {
    return {
      mock,
    };
  },
});
</script>

<style lang="scss" scoped>
.container {
  height: calc(100vh - 60px);
  display: flex;
}
</style>
