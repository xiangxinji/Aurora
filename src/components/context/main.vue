<template>
  <slot></slot>
</template>

<script setup lang="ts">
import { provide } from 'vue';
import Store from './store';

const store = new Store<any>();
provide('RenderStore', store);
</script>
