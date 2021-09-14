<template>
  <div class="home">
    <div class="container">
      <touch-bar style="width:200px;"></touch-bar>
      <screen style="flex:1;"></screen>
      <options-bar style="width:250px;"></options-bar>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import touchBar from '@/components/touchBar/main.vue';
import screen from '@/components/screen/main.vue';
import optionsBar from '@/components/optionBar/main.vue';

export default defineComponent({
  name: 'Home',
  components: {
    touchBar,
    screen,
    optionsBar,
  },
});
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  display: flex;
}
</style>
