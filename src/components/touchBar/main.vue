<template>
  <div class="touch-bar" >
    touch bar
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({

});
</script>
<style lang="scss" scoped>
.touch-bar {
  height: 100%;
  border-right:solid 1px #cccccc;
}
</style>
