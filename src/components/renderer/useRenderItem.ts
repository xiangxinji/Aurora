import { defineProps, isReactive, reactive } from 'vue';
import { createUnit, mergeClass } from '@/utils/helpers';
import { BaseOptions } from '@/components/renderer/types';

export const CommonProps = {
  options: {
    type: Object,
  },
};

export default function useRenderItem(type: string, reactiveOptions: any) {
  const pxUnit = createUnit('px');

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

  const state = isReactive(reactiveOptions) ? reactiveOptions : reactive(reactiveOptions);

  return [state, {
    getRenderItemClass,
    getRenderOptionsToTemplate,
    getRenderItemStyle,
  }];
}
