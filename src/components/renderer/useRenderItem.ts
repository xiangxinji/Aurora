import {
  reactive, inject, defineEmits,
} from 'vue';
import { createUnit, mergeClass } from '@/utils/helpers';
import { BaseOptions } from '@/type/component';
import Store from '@/components/context/store';

const i = 0;
export const CommonProps = {
  options: {
    type: Object,
  },
  onInitState: {
    type: Function,
  },
};

const pxUnit = createUnit('px');

export function getRenderItemClass(type: string, options: BaseOptions) {
  const { customClass } = options;
  return mergeClass(customClass, {
    [`render-item-${type}`]: true,
    'render-item__hidden': options.hidden,
  });
}

export function getRenderOptionsToTemplate(options: BaseOptions) {
  const result: any = {
    label: options.label,
    key: options.key,
  };
  if (options.labelWidth) result.labelWidth = options.labelWidth;
  if (options.required) result.required = options.required;
  return result;
}

export function getRenderItemStyle(options: BaseOptions) {
  return {
    width: pxUnit(options.width) || '100%',
  };
}
