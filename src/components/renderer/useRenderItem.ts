import {
  reactive, inject, defineEmits, PropType,
} from 'vue';
import { createUnit, mergeClass } from '@/utils/helpers';
import { BaseOptions } from '@/type/component';
import Store from '@/components/context/store';

const i = 0;

type Modes = ['previewer', 'renderer'];

type Flatten<T> = T extends Array<infer U> ? U : never

export const CommonProps = <T>() => ({
  options: {
    type: Object as PropType<T>,
    required: true,
  },
  onInitState: {
    type: Function,
  },
  mode: {
    type: String as PropType<Flatten<Modes>>,
  },
});

const pxUnit = createUnit('px');

export function getRenderItemClass(type: string, options: BaseOptions) {
  const { customClass } = options;
  return mergeClass(customClass, {
    [`render-item-${type}`]: true,
    'render-item__hidden': options.hidden,
    'render-item__hidden-label': options.hiddenLabel,
  });
}

export function getRenderOptionsToTemplate(options: BaseOptions) {
  const result: any = {
    label: options.label,
    key: options.key,
  };
  if (options.labelWidth) result.labelWidth = options.labelWidth;
  if (options.required) result.required = options.required;
  if (options.hiddenLabel) {
    result.label = '';
    result.labelWidth = 0;
  }
  return result;
}

export function getRenderItemStyle(options: BaseOptions) {
  return {
    width: pxUnit(options.width) || '100%',
  };
}
