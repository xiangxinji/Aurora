<template>
  <slot></slot>
</template>

<script setup lang="ts">
import { provide } from 'vue';
import Store from './store';

const store = new Store();
const ProviderKey = 'connect-context';
provide(ProviderKey, (state: any) => {
  store.set(state);
});
</script>
