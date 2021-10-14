<template>
  <div>
    <header-bar></header-bar>
    <router-view/>
  </div>
</template>

<script setup lang="ts">
import headerBar from './views/components/header-bar.vue';
</script>

<style lang="scss">
@import "~@/assets/styles/base";
</style>
