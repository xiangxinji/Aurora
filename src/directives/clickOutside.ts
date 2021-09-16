import { DirectiveBinding } from 'vue';

// eslint-disable-next-line @typescript-eslint/ban-types
const listeners: Array<{
  el: HTMLElement,
  callback: () => void
}> = [];

document.addEventListener('click', (event) => {
  const target = event.target as HTMLElement;
  listeners.forEach((listener) => {
    const {
      el,
      callback,
    } = listener;
    if (target !== el && !el.contains(target)) {
      callback();
    }
  });
});

export default {
  name: 'click-outside',
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    listeners.push({
      el,
      callback: () => {
        if (binding.value && typeof binding.value === 'function') {
          binding.value(el);
        }
      },
    });
  },
  unmount(el: HTMLElement) {
    const i = listeners.findIndex((item) => el === item.el);
    if (i !== -1) listeners.splice(i, 1);
  },
};
