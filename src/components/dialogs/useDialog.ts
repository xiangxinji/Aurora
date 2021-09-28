import { reactive } from 'vue';

export default function useDialog() {
  const state = reactive({
    visible: false,
  });

  function open() {
    state.visible = true;
  }

  function close() {
    state.visible = false;
  }

  const context = {
    open,
    close,
  };

  const result: [typeof state, typeof context] = [state, context];
  return result;
}
