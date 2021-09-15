import {
  reactive, inject,
} from 'vue';
import { createUnit, mergeClass } from '@/utils/helpers';
import { BaseOptions } from '@/components/renderer/types';
import Store from '@/components/context/store';

export const CommonProps = {
  options: {
    type: Object,
  },
};

const pxUnit = createUnit('px');

export default function useRenderItem<T>(type: string, reactiveOptions: T) {
  function getRenderItemClass(options: BaseOptions) {
    const { customClass } = options;
    return mergeClass(customClass, {
      [`render-item-${type}`]: true,
      'render-item__hidden': options.hidden,
    });
  }

  function getRenderOptionsToTemplate(options: BaseOptions) {
    const result: any = {
      label: options.label,
      key: options.key,
    };
    if (options.required) result.required = options.required;
    return result;
  }

  function getRenderItemStyle(options: BaseOptions) {
    return {
      width: pxUnit(options.width) || '100%',
    };
  }

  const state = reactive({
    type,
    options: reactiveOptions,
  });

  const store = inject('RenderStore');

  if (store instanceof Store) {
    store.set(state);
  }
  const context = {
    getRenderItemClass,
    getRenderOptionsToTemplate,
    getRenderItemStyle,
    store,
  };

  return [state, context] as [typeof state, typeof context];
}
