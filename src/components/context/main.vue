<template>
  <slot></slot>
</template>

<script setup lang="ts">
import { provide, defineExpose, defineProps } from 'vue';
import Store from './store';
import serialize from '@/utils/serialize';
import { STORAGE_SAVE_KEY } from '@/constans';

const props = defineProps({
  fillStorage: {
    type: Boolean,
    default: true,
  },
});

const storage = window.localStorage;

function loadStorage() {
  const c = storage.getItem(STORAGE_SAVE_KEY);
  const store = new Store<any>();
  if (props.fillStorage && c) {
    const t = JSON.parse(c);
    store.setFormOptions(t.formOptions);
    store.set(t.data);
  }
  return store;
}

const store = loadStorage();
provide('RenderStore', store);

function toJson() {
  return serialize(store);
}

function saveStorage() {
  const json = toJson();
  storage.setItem(STORAGE_SAVE_KEY, JSON.stringify(json));
}

defineExpose({
  toJson,
  saveStorage,
});
</script>
