<template>
  <input type="textarea" v-model="state.code">
</template>

<script setup lang="ts">
import { reactive, defineProps, watch } from 'vue';

const props = defineProps({
  code: { type: String },
});

const state = reactive({
  code: props.code || '',
});

</script>
<style lang="scss" scoped>

</style>
